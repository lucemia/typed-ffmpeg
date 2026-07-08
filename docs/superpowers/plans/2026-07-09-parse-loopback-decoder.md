# Parse Loopback Decoders (`-dec` / `[dec:N]`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `ffmpeg.parse()` (Python) and the ts-core `parse()` reconstruct a `LoopbackDecoderNode` from a command line containing `-dec of:ost` / `[dec:N]`, replacing today's hard rejection, per `docs/superpowers/specs/2026-07-09-parse-loopback-decoder-design.md`.

**Architecture:** Recognize `-dec` as a second option-group terminator in the output section (alongside filenames), producing output-segments and dec-segments; then resolve the `output ↔ dec ↔ filtergraph` reference cycle with an iterative worklist that resolves any unit whose dependencies are satisfied until none remain (unresolvable remainder → clear error). Python parser lives in a Jinja template (regenerated into v5–v8); TS parser is hand-written in ts-core and mirrors it.

**Tech Stack:** Python 3.10+, Jinja2 codegen, pytest; TypeScript, vitest (Node 22).

## Global Constraints

- Never edit files carrying `# NOTE: this file is auto-generated, do not modify` (or the `//` TS equivalent) — edit the template `src/scripts/code_gen/templates/compile/compile_cli.py.jinja`, then regenerate.
- **Regeneration (REGEN, binding):** render to scratch and copy ONLY the three static-template files (full in-place regen is not reproducible locally — pre-existing v8 cache mismatch). Recipe:
  ```bash
  cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
  export PYTHONPATH="$PWD/src:$PYTHONPATH"
  SCRATCH=/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad
  STUBS="$SCRATCH/ffmpeg-stubs"; GEN="$SCRATCH/regen-out"; rm -rf "$GEN"
  for V in 5 6 7 8; do
    if [ "$V" = 8 ]; then BIN="$(which ffmpeg)"; else BIN="$STUBS/ffmpeg$V"; fi
    python -m scripts.code_gen.cli generate --outpath "$GEN/v${V}" --ffmpeg-binary "$BIN"
    for F in dag/nodes.py compile/compile_cli.py compile/validate.py; do cp "$GEN/v${V}/$F" "packages/v${V}/src/ffmpeg/$F"; done
  done
  prek run -a || true
  ```
  (Stub binaries `ffmpeg5/6/7` already exist under `$STUBS` from prior work — they print version banners 5.1/6.1/7.1.) NEVER pass `--rebuild`; NEVER point `--outpath` into `packages/`. After REGEN, `git status` must show only `compile/compile_cli.py` (×4) changed among generated files; if regen adds incidental blank-line churn to other files, restore them with `git checkout HEAD -- <path>`.
- TS toolchain requires Node 22: `export PATH="/Users/davidchen/.nvm/versions/node/v22.16.0/bin:$PATH"` (confirm `node -v` = v22.x) before any vitest/tsc.
- Errors use `FFMpegValueError` (both languages); type mismatches `FFMpegTypeError`.
- Round-trip is the core guarantee: `compile(parse(compile(x))) == compile(x)` for loopback graphs.
- Do NOT add loopback cases to `packages/tests-shared/compile/cases.py` (that feeds `compile_python`/`compile_json`, which don't support the node).
- Branch: `feat/parse-loopback-969` (already created off `main` at `0162426c`; spec already committed on it).
- Every commit message ends with:
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`
  `Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL`

---

### Task 1: Python — parse `-dec` into `LoopbackDecoderNode`

**Files:**
- Modify: `src/scripts/code_gen/templates/compile/compile_cli.py.jinja` (the parser; regenerated into `packages/v{5,6,7,8}/src/ffmpeg/compile/compile_cli.py`)
- Test: `packages/tests-shared/compile/test_loopback.py`
- Update snapshot: `src/scripts/code_gen/tests/__snapshots__/test_gen/test_render[compilecompile_cli.py].raw`

**Interfaces:**
- Consumes: existing `parse_options`, `parse_stream_selector`, `parse_filter_complex`, `_is_filename`, `output(...)`, and `LoopbackDecoderNode` (from `..dag.nodes`, already imported for compile).
- Produces (module-level in the template): `_split_output_section(tokens) -> tuple[list[tuple[int, list[str], str]], list[tuple[int, int, int, list[str]]]]`, `_build_output_stream(option_tokens, filename, in_streams, ffmpeg_options, av_options) -> OutputStream`; a `dec:N` branch in `parse_stream_selector`; a worklist in `parse()`. TS Task 2 mirrors these.

- [ ] **Step 1: Write failing round-trip + direct-parse + error tests**

Append to `packages/tests-shared/compile/test_loopback.py`:

```python
@requires_loopback
def test_parse_dec_roundtrip_hstack() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(
        filename="-", f="null", vcodec="libx264", extra_options={"crf": 45}
    )
    dec = encoded.loopback(0)
    out = ffmpeg.filters.hstack(source.video, dec.video).output(
        filename="OUT.mkv", vcodec="ffv1"
    )
    compiled = compile(out)
    recompiled = compile(parse(compiled))
    assert recompiled == compiled


@requires_loopback
def test_parse_dec_multi_decoder_roundtrip() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    enc_a = source.video.output(filename="-", f="null", vcodec="libx264")
    enc_b = source.video.output(filename="-", f="null", vcodec="libx265")
    out = ffmpeg.filters.hstack(enc_a.loopback(0).video, enc_b.loopback(0).video).output(
        filename="OUT.mkv"
    )
    compiled = compile(out)
    assert compile(parse(compiled)) == compiled


@requires_loopback
def test_parse_dec_audio_roundtrip() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    encoded = source.audio.output(filename="-", f="null", acodec="aac")
    out = ffmpeg.filters.amix(source.audio, encoded.loopback(0).audio).output(
        filename="OUT.mka"
    )
    compiled = compile(out)
    assert compile(parse(compiled)) == compiled


@requires_loopback
def test_parse_dec_builds_loopback_node() -> None:
    from ffmpeg.compile.compile_cli import parse
    from ffmpeg.dag.nodes import LoopbackDecoderNode

    stream = parse(
        'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
        "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] -vcodec ffv1 OUT.mkv"
    )
    nodes = stream.node.upstream_nodes
    dec_nodes = [n for n in nodes if isinstance(n, LoopbackDecoderNode)]
    assert len(dec_nodes) == 1
    assert dec_nodes[0].inputs[0].index == 0


@requires_loopback
def test_parse_dec_out_of_range_output() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
            "-map 0:v -f null -vcodec libx264 - -dec 5:0 -map [s0] OUT.mkv"
        )


@requires_loopback
def test_parse_dec_streamcopy_rejected() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
            "-map 0:v -c:v copy out0.mkv -dec 0:0 -map [s0] OUT.mkv"
        )


@requires_loopback
def test_parse_dangling_dec_label() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:2]hstack=inputs=2[s0]" '
            "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] OUT.mkv"
        )
```

Then DELETE the existing `test_parse_rejects_dec` test in the same file (its behavior is now inverted).

- [ ] **Step 2: Run to verify failure**

```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
pytest packages/tests-shared/compile/test_loopback.py -v -k "parse_dec or dangling"
```
Expected: the round-trip/builds/error tests FAIL (parse still raises "loopback decoders (-dec) are not supported").

- [ ] **Step 3: Add `dec:N` support to `parse_stream_selector`**

In the template, at the START of `parse_stream_selector` (right after `selector = selector.strip("[]")`), add:

```python
    # Loopback decoder labels ("dec:N") are whole labels, not type-suffixed
    # stream selectors — look them up verbatim.
    if re.fullmatch(r"dec:\d+", selector):
        if selector not in mapping:
            raise FFMpegValueError(f"Unknown stream label: {selector}")
        return mapping[selector]
```

(`re` is already imported at module top.)

- [ ] **Step 4: Add the segmentation + output-builder helpers**

In the template, add these two module-level functions immediately BEFORE `def parse(`:

```python
def _build_output_stream(
    option_tokens: list[str],
    filename: str,
    in_streams: Mapping[str, FilterableStream],
    ffmpeg_options: dict[str, FFMpegOption],
    av_options: dict[str, FFMpegAVOption] | None,
) -> OutputStream:
    """
    Build a single OutputStream from one output group's option tokens.

    This is the per-group core shared by parse_output and the loopback-aware
    worklist in parse(). Mirrors parse_output's handling of -map, the
    single-AVStream default, and output-option filtering.

    Args:
        option_tokens: Tokens preceding the output filename (options + -map)
        filename: The output filename/URL
        in_streams: Available streams for -map resolution
        ffmpeg_options: Valid FFmpeg options
        av_options: Valid FFmpeg AV options

    Returns:
        The OutputStream for this output file

    """
    options = parse_options(option_tokens)

    map_options = options.pop("map", [])
    inputs: list[FilterableStream] = []
    for map_option in map_options:
        assert isinstance(map_option, str), f"Expected map option, got {map_option}"
        inputs.append(parse_stream_selector(map_option, in_streams))

    if not inputs:
        if len([k for k in in_streams if isinstance(in_streams[k], AVStream)]) == 1:
            inputs = [
                in_streams[k]
                for k in in_streams
                if isinstance(in_streams[k], AVStream)
            ]

    parameters: dict[str, str | bool] = {}
    for key, value in options.items():
        key_base = key.split(":")[0]
        if key_base in ffmpeg_options:
            if ffmpeg_options[key_base].is_output_option:
                parameters[key] = True if value[-1] is None else value[-1]
        elif av_options and key_base in av_options:
            if av_options[key_base].is_output_option:
                parameters[key] = True if value[-1] is None else value[-1]

    return output(*inputs, filename=filename, extra_options=parameters)


def _split_output_section(
    tokens: list[str],
) -> tuple[list[tuple[int, list[str], str]], list[tuple[int, int, int, list[str]]]]:
    """
    Split output-section tokens into output segments and loopback-decoder segments.

    `-dec of:ost` is a second option-group terminator alongside filenames.

    Args:
        tokens: The output-section tokens (after globals/inputs/filter_complex)

    Returns:
        (output_segments, dec_segments) where
        output_segments = [(ordinal, option_tokens, filename), ...] and
        dec_segments = [(occurrence, of, ost, decoder_option_tokens), ...]

    Raises:
        FFMpegValueError: If a -dec argument is malformed

    """
    output_segments: list[tuple[int, list[str], str]] = []
    dec_segments: list[tuple[int, int, int, list[str]]] = []
    buffer: list[str] = []
    out_ordinal = 0
    dec_occurrence = 0

    i = 0
    while i < len(tokens):
        token = tokens[i]
        if token == "-dec":
            spec = tokens[i + 1] if i + 1 < len(tokens) else ""
            of_str, sep, ost_str = spec.partition(":")
            try:
                of = int(of_str)
                ost = int(ost_str) if sep and ost_str else 0
            except ValueError:
                raise FFMpegValueError(f"Invalid -dec argument: {spec!r}")
            dec_segments.append((dec_occurrence, of, ost, buffer))
            dec_occurrence += 1
            buffer = []
            i += 2
            continue
        if _is_filename(token):
            output_segments.append((out_ordinal, buffer, token))
            out_ordinal += 1
            buffer = []
            i += 1
            continue
        buffer.append(token)
        i += 1

    return output_segments, dec_segments
```

- [ ] **Step 5: Rewire `parse()` — remove rejection, add the worklist**

In the template's `parse()`:

5a. DELETE:
```python
    if "-dec" in tokens:
        raise FFMpegValueError("loopback decoders (-dec) are not supported by parse()")
```

5b. REPLACE the block from `filterable_streams: dict[str, FilterableStream] = {}` through the `output_streams = parse_output(...)` call (i.e. the filter_complex-then-output parsing) with:

```python
    output_segments, dec_segments = _split_output_section(remaining_tokens)

    max_of = len(output_segments) - 1
    for _occ, of, _ost, _opts in dec_segments:
        if of > max_of:
            raise FFMpegValueError(
                f"-dec references output file {of}, but only "
                f"{len(output_segments)} output file(s) were found"
            )

    combined_fc = ";".join(filter_complex_parts) if filter_complex_parts else ""
    fc_dec_labels = set(re.findall(r"\[(dec:\d+)\]", combined_fc))

    stream_mapping: dict[str, FilterableStream] = dict(input_streams)
    output_nodes: dict[int, OutputNode] = {}
    output_streams_by_ordinal: dict[int, OutputStream] = {}

    def _label_ready(selector: str) -> bool:
        label_key = selector.strip("[]").split(":")[0]
        return label_key in stream_mapping

    pending_outputs = list(output_segments)
    pending_decs = list(dec_segments)
    fc_pending = bool(combined_fc)

    progress = True
    while progress and (pending_outputs or pending_decs or fc_pending):
        progress = False

        still_outputs: list[tuple[int, list[str], str]] = []
        for ordinal, opt_tokens, filename in pending_outputs:
            map_opts = [
                m for m in parse_options(opt_tokens).get("map", []) if isinstance(m, str)
            ]
            if all(_label_ready(sel) for sel in map_opts):
                out_stream = _build_output_stream(
                    opt_tokens, filename, stream_mapping, ffmpeg_options, av_options
                )
                assert isinstance(out_stream.node, OutputNode)
                output_nodes[ordinal] = out_stream.node
                output_streams_by_ordinal[ordinal] = out_stream
                progress = True
            else:
                still_outputs.append((ordinal, opt_tokens, filename))
        pending_outputs = still_outputs

        still_decs: list[tuple[int, int, int, list[str]]] = []
        for occurrence, of, ost, dec_opts in pending_decs:
            if of in output_nodes:
                decoder_kwargs: dict[str, str | bool] = {}
                for key, value in parse_options(dec_opts).items():
                    decoder_kwargs[key] = True if value[-1] is None else value[-1]
                dec_node = LoopbackDecoderNode(
                    inputs=(OutputStream(node=output_nodes[of], index=ost),),
                    kwargs=FrozenDict(decoder_kwargs),
                )
                if dec_node._tapped_type() == StreamType.audio:
                    stream_mapping[f"dec:{occurrence}"] = dec_node.audio
                else:
                    stream_mapping[f"dec:{occurrence}"] = dec_node.video
                progress = True
            else:
                still_decs.append((occurrence, of, ost, dec_opts))
        pending_decs = still_decs

        if fc_pending and fc_dec_labels <= set(stream_mapping):
            stream_mapping = parse_filter_complex(
                combined_fc, stream_mapping, ffmpeg_filters
            )
            fc_pending = False
            progress = True

    if fc_pending:
        missing = fc_dec_labels - set(stream_mapping)
        if missing:
            raise FFMpegValueError(
                f"filter_complex references undefined loopback label(s): "
                f"{', '.join(sorted(missing))}"
            )
        raise FFMpegValueError("cyclic or unresolvable -dec / filter references")
    if pending_outputs or pending_decs:
        raise FFMpegValueError("cyclic or unresolvable -dec / filter references")

    output_streams = [
        output_streams_by_ordinal[i] for i in sorted(output_streams_by_ordinal)
    ]
```

(`FrozenDict` and `StreamType` are already imported in the template; `OutputNode`, `OutputStream`, `LoopbackDecoderNode` are imported from `..dag.nodes`; confirm `LoopbackDecoderNode` is in that import list and add it if missing.)

- [ ] **Step 6: Confirm `LoopbackDecoderNode` is imported in the template**

Check the `from ..dag.nodes import (...)` block in the template includes `LoopbackDecoderNode` and `OutputNode`, `OutputStream`. If `LoopbackDecoderNode` is absent, add it (alphabetically after `InputNode`). Run:
```bash
grep -n "LoopbackDecoderNode" src/scripts/code_gen/templates/compile/compile_cli.py.jinja | head
```
Expected: appears in the import and in `parse()`.

- [ ] **Step 7: Regenerate + run tests**

Run the REGEN recipe (Global Constraints). Then:
```bash
pytest packages/tests-shared/compile/test_loopback.py -v
pytest packages/tests-shared -x -q -k "not test_view"
pytest src/scripts/code_gen/tests/test_gen.py::test_render --snapshot-update -q
pytest src/scripts/code_gen/tests -x -q
git status --short   # only compile_cli.py x4 + template + test + snapshot
```
Expected: all pass; if REGEN churned other generated files with blank-line-only diffs, `git checkout HEAD -- <those paths>`.

- [ ] **Step 8: Tighten the pyright assertion (minor cleanup from #969)**

In `test_loopback.py`, in `test_pyright_loopback_typing`, replace:
```python
    assert "0 errors" in result.stdout, (
```
with:
```python
    import re as _re
    assert _re.search(r"\b0 errors\b", result.stdout) and "error:" not in result.stdout, (
```
Run: `pytest packages/tests-shared/compile/test_loopback.py::test_pyright_loopback_typing -v` → PASS (or SKIP if pyright absent).

- [ ] **Step 9: Commit**

```bash
git add src/scripts/code_gen packages/v5 packages/v6 packages/v7 packages/v8 packages/tests-shared/compile/test_loopback.py
git commit -m "feat(python): parse -dec loopback decoders back into the DAG

Recognize -dec as an output-section group terminator and resolve the
output<->dec<->filtergraph reference cycle with an iterative worklist;
parse_stream_selector now resolves whole dec:N labels. Round-trip stable
for typed-ffmpeg output; unresolvable/cyclic orderings raise a clear error.
Also tightens the pyright typing assertion.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 2: TypeScript — mirror `-dec` parsing in ts-core

**Files:**
- Modify: `packages/ts-core/src/compile/compileCli.ts`
- Test: `packages/ts-core/src/__tests__/loopback.test.ts`

**Interfaces:**
- Consumes: existing `parseOptions`, `parseStreamSelector`, `parseFilterComplex`, `isFilename`, `LoopbackDecoderNode`, `OutputNode`, `OutputStream`.
- Produces: `splitOutputSection`, `buildOutputStream` helpers; a `dec:N` branch in `parseStreamSelector`; the worklist in `parse()`. Mirrors Task 1 exactly.

- [ ] **Step 1: Write failing tests (Node 22)**

`export PATH="/Users/davidchen/.nvm/versions/node/v22.16.0/bin:$PATH"`. Append to `packages/ts-core/src/__tests__/loopback.test.ts` (reuse the file's existing imports; the parse fixtures mirror `parse.test.ts` — a filters map and options map; the `-dec`/label checks fire before those maps matter, but `parseStreamSelector`/`parseFilterComplex` need them, so build maps like `parse.test.ts` does or import its fixtures):

```ts
import { compileAsList, parse } from "../compile/compileCli.js";
// plus the filters/options fixture maps as constructed in parse.test.ts

describe("parse loopback -dec", () => {
  it("round-trips the canonical hstack graph", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264", crf: 45 });
    const dec = enc.stream().loopback(0);
    const stacked = new FilterNode("hstack", [source.video, dec.video], { inputs: 2 },
      [StreamType.Video, StreamType.Video], [StreamType.Video]);
    const out = new OutputNode([stacked.video(0)], "OUT.mkv", { vcodec: "ffv1" });

    const compiled = compileAsList(out.stream()).join(" ");
    const reparsed = parse("ffmpeg " + compiled, filtersMap, optionsMap);
    expect(compileAsList(reparsed).join(" ")).toBe(compiled);
  });

  it("builds a LoopbackDecoderNode from a -dec command", () => {
    const stream = parse(
      'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" ' +
        "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] -vcodec ffv1 OUT.mkv",
      filtersMap, optionsMap,
    );
    const args = compileAsList(stream);
    expect(args.filter((a) => a === "-dec").length).toBe(1);
    expect(args[args.indexOf("-dec") + 1]).toBe("0:0");
  });

  it("rejects an out-of-range -dec output", () => {
    expect(() =>
      parse('ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" ' +
        "-map 0:v -f null -vcodec libx264 - -dec 5:0 -map [s0] OUT.mkv", filtersMap, optionsMap),
    ).toThrow(FFMpegValueError);
  });

  it("rejects a dangling dec label", () => {
    expect(() =>
      parse('ffmpeg -i INPUT -filter_complex "[0:v][dec:2]hstack=inputs=2[s0]" ' +
        "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] OUT.mkv", filtersMap, optionsMap),
    ).toThrow(FFMpegValueError);
  });
});
```

Then DELETE the existing `parse -dec rejection` test in this file.

- [ ] **Step 2: Run to verify failure**
```bash
cd packages/ts-core && npx vitest run src/__tests__/loopback.test.ts
```
Expected: parse tests FAIL (parse still throws the rejection).

- [ ] **Step 3: `dec:N` branch in `parseStreamSelector`**

At the start of `parseStreamSelector` (after it strips brackets — match the existing code's variable), add:
```ts
  const bare = selector.replace(/^\[|\]$/g, "");
  if (/^dec:\d+$/.test(bare)) {
    const s = mapping.get(bare);
    if (!s) throw new FFMpegValueError(`Unknown stream label: ${bare}`);
    return s;
  }
```
(Place it so it runs before the `:`-splitting logic. Adapt to the function's actual stripping/variable names.)

- [ ] **Step 4: Add `splitOutputSection` + `buildOutputStream`**

Add before `parse()`:
```ts
function buildOutputStream(
  optionTokens: string[],
  filename: string,
  inStreams: Map<string, FilterableStream>,
  ffmpegOptions: Map<string, FFMpegOption>,
): OutputStream {
  const opts = parseOptions(optionTokens);
  const mapOptions = opts["map"] ?? [];
  const inputs: FilterableStream[] = [];
  for (const m of mapOptions) {
    if (typeof m === "string") inputs.push(parseStreamSelector(m, inStreams));
  }
  if (inputs.length === 0) {
    const avs = [...inStreams.values()].filter((s) => s instanceof AVStream);
    if (avs.length === 1) inputs.push(avs[0]);
  }
  delete opts["map"];
  const kwargs: Record<string, string | boolean> = {};
  for (const [key, values] of Object.entries(opts)) {
    const baseKey = key.split(":")[0];
    const opt = ffmpegOptions.get(baseKey);
    if (opt && isOutputOption(opt)) {
      const v = values[values.length - 1];
      kwargs[key] = v === null ? true : v === false ? false : (v as string);
    }
  }
  return new OutputStream(new OutputNode(inputs, filename, kwargs));
}

interface OutputSeg { ordinal: number; opts: string[]; filename: string; }
interface DecSeg { occurrence: number; of: number; ost: number; opts: string[]; }

function splitOutputSection(tokens: string[]): { outputs: OutputSeg[]; decs: DecSeg[] } {
  const outputs: OutputSeg[] = [];
  const decs: DecSeg[] = [];
  let buffer: string[] = [];
  let ord = 0, occ = 0, i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (token === "-dec") {
      const spec = tokens[i + 1] ?? "";
      const [ofStr, ostStr] = spec.split(":");
      const of = Number(ofStr), ost = ostStr ? Number(ostStr) : 0;
      if (!Number.isInteger(of) || !Number.isInteger(ost)) {
        throw new FFMpegValueError(`Invalid -dec argument: ${spec}`);
      }
      decs.push({ occurrence: occ++, of, ost, opts: buffer });
      buffer = []; i += 2; continue;
    }
    if (isFilename(token)) {
      outputs.push({ ordinal: ord++, opts: buffer, filename: token });
      buffer = []; i += 1; continue;
    }
    buffer.push(token); i += 1;
  }
  return { outputs, decs };
}
```
(Refactor the existing `parseOutputTokens` loop body to call `buildOutputStream` so the logic is shared/DRY.)

- [ ] **Step 5: Rewire `parse()` — remove rejection, add worklist**

Delete the `if (tokens.includes("-dec")) throw ...` block. Replace the filter_complex-then-`parseOutputTokens` section with the worklist (mirror of Task 1 Step 5b):
```ts
  const { outputs: outputSegs, decs: decSegs } = splitOutputSection(outputTokens);
  const maxOf = outputSegs.length - 1;
  for (const d of decSegs) {
    if (d.of > maxOf) {
      throw new FFMpegValueError(
        `-dec references output file ${d.of}, but only ${outputSegs.length} output file(s) were found`,
      );
    }
  }

  const combinedFc = filterComplexParts.join(";");
  const fcDecLabels = new Set([...combinedFc.matchAll(/\[(dec:\d+)\]/g)].map((m) => m[1]));

  let streamMapping = new Map(inputStreams);
  const outputNodes = new Map<number, OutputNode>();
  const outputStreamsByOrdinal = new Map<number, OutputStream>();

  const labelReady = (sel: string) =>
    streamMapping.has(sel.replace(/^\[|\]$/g, "").split(":")[0]);

  let pendingOutputs = [...outputSegs];
  let pendingDecs = [...decSegs];
  let fcPending = combinedFc.length > 0;
  let progress = true;

  while (progress && (pendingOutputs.length || pendingDecs.length || fcPending)) {
    progress = false;

    const stillOut: OutputSeg[] = [];
    for (const seg of pendingOutputs) {
      const mapOpts = (parseOptions(seg.opts)["map"] ?? []).filter((m): m is string => typeof m === "string");
      if (mapOpts.every(labelReady)) {
        const os = buildOutputStream(seg.opts, seg.filename, streamMapping, ffmpegOptions);
        outputNodes.set(seg.ordinal, os.node as OutputNode);
        outputStreamsByOrdinal.set(seg.ordinal, os);
        progress = true;
      } else stillOut.push(seg);
    }
    pendingOutputs = stillOut;

    const stillDec: DecSeg[] = [];
    for (const seg of pendingDecs) {
      const outNode = outputNodes.get(seg.of);
      if (outNode) {
        const kwargs: Record<string, string | boolean> = {};
        for (const [k, vs] of Object.entries(parseOptions(seg.opts))) {
          const v = vs[vs.length - 1];
          kwargs[k] = v === null ? true : (v as string);
        }
        const decNode = new LoopbackDecoderNode([new OutputStream(outNode, seg.ost)], kwargs);
        streamMapping.set(`dec:${seg.occurrence}`, decNode.tappedType() === StreamType.Audio ? decNode.audio : decNode.video);
        progress = true;
      } else stillDec.push(seg);
    }
    pendingDecs = stillDec;

    if (fcPending && [...fcDecLabels].every((l) => streamMapping.has(l))) {
      streamMapping = parseFilterComplex(combinedFc, streamMapping, ffmpegFilters);
      fcPending = false; progress = true;
    }
  }

  if (fcPending || pendingOutputs.length || pendingDecs.length) {
    const missing = [...fcDecLabels].filter((l) => !streamMapping.has(l));
    throw new FFMpegValueError(
      missing.length
        ? `filter_complex references undefined loopback label(s): ${missing.join(", ")}`
        : "cyclic or unresolvable -dec / filter references",
    );
  }

  const outputStreams = [...outputStreamsByOrdinal.keys()].sort((a, b) => a - b).map((k) => outputStreamsByOrdinal.get(k)!);
```
Note: `LoopbackDecoderNode.tappedType()` is currently `private` (Task 1 of the compile work). Change it to a non-private method (drop `private`, keep the name `tappedType`) so `parse()` can call it — or add a public wrapper. Pick dropping `private`; update the class accordingly.

- [ ] **Step 6: findIndex hardening (minor cleanup from #969)**

In `getArgsLoopbackDecoderNode`, replace the `of` derivation that uses `findIndex` returning `-1` with a throw:
```ts
  const of = uniqueOutputsByHex(context).findIndex((o) => outputKey(o) === outputKey(tapped.node as OutputNode));
  if (of < 0) throw new FFMpegValueError("Tapped output node not found in DAG context");
```
(Adapt to the actual variable/key-helper names in the file.)

- [ ] **Step 7: Run tests + typecheck (Node 22)**
```bash
cd packages/ts-core
npx vitest run src/__tests__/loopback.test.ts
npx vitest run
npx tsc --noEmit
```
Expected: all pass, 0 type errors.

- [ ] **Step 8: Commit**
```bash
cd /Users/davidchen/repo/typed-ffmpeg
git add packages/ts-core
git commit -m "feat(ts): parse -dec loopback decoders back into the DAG

Mirror of the Python worklist parser: splitOutputSection recognizes -dec as
a group terminator, parseStreamSelector resolves dec:N labels, and parse()
resolves the output<->dec<->filtergraph cycle iteratively. Also hardens the
of-index derivation to throw instead of emitting -dec -1:0.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 3: Full sweep, PR, CI green

**Files:** none (verification + PR).

- [ ] **Step 1: Python per-version sweep**
```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
pytest packages/tests-shared -q -k "not test_view"
pytest src/scripts/code_gen/tests -q
pip install -e "packages/v7[dev]" >/dev/null 2>&1 && pytest packages/tests-shared -q -k "not test_view"
pip install -e "packages/v5[dev]" >/dev/null 2>&1 && pytest packages/tests-shared/compile/test_loopback.py -v
pip install -e "packages/v8[dev]" >/dev/null 2>&1 && python -c "import ffmpeg; print(ffmpeg.__version__)"
```
Expected: all green; on v5 the loopback parse tests SKIP (via `requires_loopback`); v8 restored last (if editable-install shadowing recurs, `pip uninstall -y typed-ffmpeg-v5 typed-ffmpeg-v7` then confirm `ffmpeg.__version__` is 8.x).

- [ ] **Step 2: TS suite + lint**
```bash
export PATH="/Users/davidchen/.nvm/versions/node/v22.16.0/bin:$PATH"
cd packages/ts-core && npx vitest run && npx tsc --noEmit
cd /Users/davidchen/repo/typed-ffmpeg && prek run -a || true
git status --short   # commit any formatter fixups
```

- [ ] **Step 3: Push + open PR**
```bash
git push -u origin feat/parse-loopback-969
gh pr create --repo livingbio/typed-ffmpeg --base main --head lucemia:feat/parse-loopback-969 \
  --title "feat: parse loopback decoders (-dec / [dec:N]) (#969)" \
  --body "Implements #969: ffmpeg.parse() / ts-core parse() now reconstruct a LoopbackDecoderNode from a command line containing -dec, replacing the previous rejection. Iterative worklist resolves the output<->dec<->filtergraph reference cycle; round-trip stable for typed-ffmpeg output; cyclic/unresolvable orderings error clearly. Python (v5-v8 via template) + TypeScript. Closes #969.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

- [ ] **Step 4: Watch CI; re-run setup-ffmpeg flakes**
```bash
gh pr checks <NUM> --repo livingbio/typed-ffmpeg
```
If failures are only the `FedericoCarboni/setup-ffmpeg` "Install FFmpeg" mirror flake, `gh run rerun <id> --failed` until green. Any real failure → diagnose. Do NOT merge (await user review — this repo requires code-owner approval).
