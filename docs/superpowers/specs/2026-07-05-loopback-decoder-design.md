# Loopback Decoder Support Design (`-dec` / `[dec:N]`)

**Date:** 2026-07-05
**Topic:** Support FFmpeg 7.0 loopback decoders (issue #966)
**Scope:** Python (v7/v8 via codegen templates) + TypeScript (ts-core). Compile direction only; `parse()` support is out of scope and tracked separately.

## Problem

FFmpeg 7.0 added loopback decoders: `-dec of:ost` decodes the output of an
existing encoder and exposes the decoded frames as a filtergraph input labeled
`[dec:N]`. Canonical use case — compare an encode against its source in one
command:

```bash
ffmpeg -i INPUT \
  -map 0:v:0 -c:v libx264 -crf 45 -f null - \
  -dec 0:0 \
  -filter_complex "[0:v][dec:0]hstack[stack]" \
  -map "[stack]" -c:v ffv1 OUT.mkv
```

typed-ffmpeg cannot express this: no node type has an output stream as input
and a filterable stream as output, `extra_options` serializes into the wrong
option group, and nothing can produce the `[dec:N]` label.

## Design

### 1. DAG model

New node type in `templates/dag/nodes.py.jinja` (generated into
`packages/v*/src/ffmpeg/dag/nodes.py`) and `packages/ts-core/src/dag/nodes.ts`:

```python
@dataclass(frozen=True, kw_only=True)
class LoopbackDecoderNode(Node):
    inputs: tuple[OutputStream, ...]  # exactly one: the tapped output stream
    # kwargs (inherited): decoder options — codec, threads, AVOptions...
```

- The tapped stream reuses the existing `Stream(node, index)` reference model:
  an `OutputStream` whose `node` is the `OutputNode` and whose `index` is the
  output-stream index (`ost`) within that file. `OutputStream.index` is
  currently always `None`; carrying the ost there is a natural extension with
  no schema change.
- The node produces exactly one decoded stream whose type equals the tapped
  stream's type. Typed accessors mirror `InputNode`:
  - `dec.video` → `VideoStream(node=dec)`
  - `dec.audio` → `AudioStream(node=dec)`
  - When `OutputNode.inputs[ost]` is a typed `VideoStream`/`AudioStream`, the
    accessor validates and raises `FFMpegTypeError` on mismatch. When any
    input of the tapped output is an `AVStream` (e.g. `-map 0`), the ost↔input
    correspondence is statically unknowable, so accessors trust the caller.

### 2. Public API

New method on `OutputStream`, mirroring `input()`'s typed-option pattern
(options merge into `node.kwargs` via the same `merge(...)` helper):

```python
def loopback(
    self,
    stream_index: int = 0,               # ost within this output file
    *,
    codec: String = None,                # force a specific decoder (-c)
    decoder_options: FFMpegDecoderOption | None = None,
    codec_options: FFMpegAVCodecContextDecoderOption | None = None,
    extra_options: dict[str, Any] | None = None,
) -> LoopbackDecoderNode
```

Usage:

```python
source = ffmpeg.input("INPUT")
out = source.video.output(filename="-", f="null", vcodec="libx264", crf=45)
dec = out.loopback(stream_index=0)
stacked = source.video.hstack(dec.video)
stacked.output(filename="OUT.mkv", vcodec="ffv1").run()
```

`LoopbackDecoderNode` is exported alongside the other node types.

### 3. Version gating

- The `loopback()` method is wrapped in a Jinja conditional on the
  `ffmpeg_version` template variable and generated **only for major ≥ 7**
  (v7/v8 packages). On v5/v6 the method does not exist — users get an
  `AttributeError` at runtime and a pyright error statically.
- The `LoopbackDecoderNode` class and its compile/validate branches are
  generated for **all** versions. This keeps the templates nearly
  conditional-free; the class is unreachable through the public API on v5/v6.
- TypeScript: `loopback()` lives on ts-core's `OutputStream`, which is shared
  by ts-v5..v8 and cannot be structurally gated. The method carries a
  documented "requires FFmpeg ≥ 7.0" note. Accepted asymmetry.

### 4. Compilation

Changes in `templates/compile/compile_cli.py.jinja` and
`packages/ts-core/src/compile/compileCli.ts`:

1. **Emission order**: the prefix is unchanged (global → inputs →
   `-filter_complex` → outputs). The output phase becomes: for each
   `OutputNode` in emission order, emit its args, then immediately emit
   `[decoder options] -dec {of}:{ost}` for every `LoopbackDecoderNode` tapping
   that output, in `node_ids` order. Each `-dec` therefore follows the output
   group it references, and no stray options bleed into the wrong option
   group.
2. **Index resolution**: `of` = the tapped `OutputNode`'s per-class `node_ids`
   counter (equal to its emission position among outputs); `ost` = the tapped
   `OutputStream.index`.
3. **Labels**: `get_stream_label` gains a `LoopbackDecoderNode` branch
   returning `dec:{node_id}`, which appears in filter_complex as `[dec:N]`.
   `DAGContext.node_ids` already assigns an independent 0,1,2… counter per
   node class in `max_depth`-sorted order, so label numbers and `-dec`
   occurrence order agree by construction. A multi-decoder test asserts this.
4. **Decoder options**: serialized from `node.kwargs` in the same
   `-key value` / `-flag` style as input/output nodes, emitted immediately
   before their `-dec`.
5. **Ordering caveat**: the generated command places `-filter_complex` before
   the `-dec` groups (the canonical example places it after). fftools parses
   all option groups before binding filtergraph inputs, so this is expected to
   work; it must be verified against a real ffmpeg ≥ 7 binary during
   implementation and the result noted in the PR.

### 5. Validation and error handling

All checks fail at construction time where possible:

1. **Streamcopy rejection** (at `loopback()`): resolve the codec applying to
   the tapped stream from the `OutputNode`'s kwargs (`c`, `codec`,
   `vcodec`/`acodec`, and `c:v`/`c:a`-style specifier keys). If it
   unambiguously resolves to `"copy"`, raise `FFMpegValueError` ("streamcopy
   output has no encoder to tap" — mirrors FFmpeg's `dec_create()` check).
   Conservative: only reject clear cases.
2. **Bounds check** (at `loopback()`): when the tapped output has no
   `AVStream` inputs, the ost↔input mapping is 1:1 — reject
   `stream_index >= len(node.inputs)`. Skip when `AVStream` inputs are
   present.
3. **Type accessors**: `dec.video`/`dec.audio` raise `FFMpegTypeError` when
   the tapped stream type is statically known and mismatched.
4. **Filtergraph-only**: `[dec:N]` is a filtergraph input label, not a `-map`
   selector. A loopback stream feeding an `OutputNode` directly raises
   `FFMpegValueError` ("route it through a filter").
5. **Auto-split**: `validate()`'s `add_split` already splits any reused
   non-`InputNode` stream; a reused dec stream gets `split`/`asplit`
   automatically, which is correct (a filtergraph input label binds once).
6. **Parse rejection**: `parse()` raises `FFMpegValueError` ("loopback
   decoders (-dec) are not supported by parse()") when it encounters `-dec`,
   instead of silently misparsing it into an output group. Python and TS.
7. **Acyclicity**: free — frozen nodes cannot form true cycles;
   output → dec → filter → *second* output remains a DAG.

### 6. TypeScript mirror

Hand-edits in `packages/ts-core` (no codegen):

- `dag/nodes.ts`: `LoopbackDecoderNode` class with `get video`/`get audio`
  getters (matching `InputNode`); `loopback(streamIndex, kwargs)` on
  `OutputStream`;
  `OutputStream` gains an optional stream index for the tapped reference.
- `compile/compileCli.ts`: the same three compile changes; `compile/context.ts`
  only if the per-class id counter needs the new class registered.
- `compile/validate.ts` and the parser: mirrored checks from §5.
- `ts-v*` packages: regenerate only if re-export templates need the new
  symbol.

Same names modulo camelCase.

### 7. Testing

- **Python** (`packages/tests-shared/compile/`):
  - Canonical hstack example → per-version snapshots (v7/v8 dirs).
  - Multi-decoder `dec:0`/`dec:1` numbering-vs-emission agreement.
  - Audio loopback.
  - Every validation error in §5.
  - Loopback tests skipped on v5/v6 (`pytest.mark.skipif` on
    `FFMPEG_VERSION`); a v5/v6-only test asserts `OutputStream` has no
    `loopback` attribute.
  - Pyright assertions in `test_pyright.py` (`dec.video` is `VideoStream`).
- **Codegen**: regenerate all four version packages; update `test_render`
  snapshots per CLAUDE.md. Note: v5–v7 generated files are currently stale
  relative to the templates (templates were synced from v8), so regeneration
  may pull in unrelated template-sync diffs — inspect and, if present, land
  the resync as a separate preparatory commit.
- **TypeScript** (`packages/ts-core/src/__tests__/`): mirrored compile,
  validation, and parse-rejection cases.
- **Real-binary verification**: run the canonical command against an actual
  ffmpeg ≥ 7 binary once during implementation to confirm §4.5; record the
  result in the PR description.

## Alternatives considered

- **Pseudo-filter special case**: model the decoder as a magic `FilterNode`
  variant special-cased at compile time. Rejected: corrupts filter ordering,
  `s{N}` labeling, and `add_split` with carve-outs; weak typing.
- **Generic labeled-source escape hatch**: a node injecting an arbitrary
  `[label]` plus raw args. Rejected: untyped, unvalidated, and does not
  deliver the `out.loopback()` API the issue asks for.
- **`extra_options`**: cannot express `-dec` (wrong option-group placement, no
  `[dec:N]` label support). Rejected in the issue itself.

## Out of scope

- `parse()` reconstruction of `-dec` groups and `[dec:N]` labels (follow-up
  issue; parse raises a clear error meanwhile).
- Structural version gating on the TS side.
- v5/v6 support of any kind (FFmpeg < 7.0 has no loopback decoders).
