# Parse Loopback Decoders Design (`-dec` / `[dec:N]`)

**Date:** 2026-07-09
**Topic:** Reconstruct `LoopbackDecoderNode` when parsing an FFmpeg command line (issue #969)
**Scope:** Python (v5–v8 via the `compile_cli.py` template) + TypeScript (ts-core). Round-trip fidelity, not full general fftools parsing.

## Problem

Compiling a `LoopbackDecoderNode` to `-dec of:ost` / `[dec:N]` shipped in v4.3 (#966/#967). The reverse — `ffmpeg.parse()` / the TS `parse()` reconstructing the DAG from such a command line — was deferred and currently **rejects** any command containing `-dec` with a clear `FFMpegValueError`.

Parsing `-dec` is harder than emitting it because of a **reference cycle in parse order**: `parse()` runs in sections (globals → inputs → `-filter_complex` → outputs), but

- `[dec:N]` labels are referenced inside `-filter_complex` (parsed early),
- each `-dec of:ost` group lives in the *output* section (parsed last) and points back to an already-defined output file by index `of`,
- and outputs may `-map` filtergraph outputs (`[s0]`), which depend on the filtergraph.

So a straight linear pass cannot resolve the labels.

## Goal

Guarantee `parse(compile(x)) == x` (round-trip) for any graph typed-ffmpeg produces, plus common hand-written commands where a tapped output is resolvable from inputs and pre-`dec` filters. Reject genuinely cyclic / unresolvable orderings with a clear error.

## Design

### 1. Remove the rejection

Delete the `if "-dec" in tokens: raise FFMpegValueError(...)` guard in `parse()` (Python template `src/scripts/code_gen/templates/compile/compile_cli.py.jinja` and ts-core `compileCli.ts`). Replace the two existing "parse rejects `-dec`" tests with the round-trip/parse tests below.

### 2. Segment the output section

After globals/inputs are consumed and the `-filter_complex` string is extracted (unchanged), the remaining tokens are the output section. Today `parse_output` treats each *filename* as a group terminator. Add `-dec` as a **second terminator kind**, producing an ordered list of segments:

- **output segment** `(ordinal, option_tokens, filename)` — emitted on a filename; `ordinal` counts output files `0,1,2…` (the `of` index space).
- **dec segment** `(occurrence_n, of, ost, decoder_option_tokens)` — emitted on `-dec`; its next token is `of:ost`; the buffered tokens before `-dec` are the decoder options; `occurrence_n` counts `-dec`s `0,1,2…` → the `[dec:N]` label index.

Filenames are detected with the existing `_is_filename` helper; `-dec`'s argument is *not* a filename and must not be mis-detected (it is consumed explicitly).

### 3. Resolve via an iterative worklist

Units = {output segments, dec segments, the filtergraph as one unit}. Seed `stream_mapping` with the input streams (as today). Loop over pending units; resolve any whose dependencies are satisfied; repeat until a full pass makes no progress.

- **output segment** — deps: every `-map [label]` it references is present in `stream_mapping` (bare input selectors such as `0:v` are always present). Resolve → build the `OutputNode` via the existing `output(...)` construction path used by `parse_output`; cache it by `ordinal` in `output_nodes[ordinal]`.
- **dec segment** — deps: `output_nodes[of]` exists. Resolve → `LoopbackDecoderNode(inputs=(OutputStream(node=output_nodes[of], index=ost),), kwargs=<parsed decoder opts>)`; add `dec:{occurrence_n}` → `node.video` or `node.audio` (see §4) to `stream_mapping`.
- **filtergraph** — deps: every `[dec:N]` label it references is present in `stream_mapping`. Resolve → the existing `parse_filter_complex`, which adds filter-output labels (`s0`…) to `stream_mapping`.

After the loop: if pending units remain, raise `FFMpegValueError`. When the only unresolved unit is the filtergraph and the cause is a missing `dec:N`, name that label in the message; otherwise report a cyclic/unresolvable-reference error.

Decoder options are parsed from `decoder_option_tokens` with the existing `parse_options`, then merged into the node `kwargs` (same shape the compile side emits: `c`, `threads`, etc.).

### 4. dec:N stream type (video vs audio)

Mirror the compile side's `LoopbackDecoderNode._tapped_type`: inspect the tapped `OutputNode`'s input at position `ost`. `VideoStream` → `dec.video`; `AudioStream` → `dec.audio`. If the type is statically unknowable (the tapped output maps an `AVStream` / whole input), default to `dec.video`, matching the documented compile-side asymmetry. (The accessor itself raises `FFMpegTypeError` on a known mismatch, so no extra check is needed here.)

### 5. Final assembly

Unchanged: `merge_outputs(*output_streams)` then `global_args(...)`, using the cached `output_nodes` so a tapped output and the `-dec` that taps it share a single node instance (keeping the DAG connected and round-trip-stable).

### 6. Error handling

All `FFMpegValueError` with specific messages, consistent with the compile-side validation:

- Malformed `-dec` argument (missing `of:ost`, non-integer indices).
- `of` out of range (no output file at that ordinal).
- Streamcopy tap (`c` / `codec` / `vcodec` = `copy` on the tapped output) — enforced already by `LoopbackDecoderNode.__post_init__`; covered by a test rather than a duplicate check.
- Dangling `[dec:N]` with no matching `-dec` — surfaced by the worklist as an unresolved filtergraph, with the missing label named.
- Cyclic ordering — the no-progress termination.

### 7. TypeScript mirror

Same algorithm in `packages/ts-core/src/compile/compileCli.ts`: remove the `-dec` rejection, add segmentation + worklist, reuse `parseOutputTokens` / `parseFilterComplex` per unit. Apply the existing node-identity convention (`hex + filename` composite key established in #967) when caching/reusing output nodes. Behavior kept identical to Python.

### 8. Minor cleanups (folded in from #969's body)

- **TS** `getArgsLoopbackDecoderNode`: replace the silent `uniq.findIndex(...) === -1` fallback (which would emit `-dec -1:0`) with a thrown `FFMpegValueError`.
- Python pyright test: tighten the `"0 errors" in stdout` assertion (which substring-matches `"10 errors"`) to a precise check (e.g. regex for `\b0 errors\b` and no `error:` lines).

### 9. Testing

- **Round-trip** (core guarantee) — extend the `test_parse_compile` flow so `compile → parse → compile` is stable for: the canonical hstack example, a multi-decoder graph (`dec:0`/`dec:1`), and an audio loopback. Python `packages/tests-shared/compile/test_loopback.py` + TS `ts-core/src/__tests__/loopback.test.ts`.
- **Direct parse** — parse a known `-dec` command string; assert a `LoopbackDecoderNode` taps the correct output/stream and its `dec.video`/`dec.audio` feeds the expected filter.
- **Error cases** — out-of-range `of`, streamcopy tap, dangling `[dec:2]`, and a hand-built cyclic ordering each raise `FFMpegValueError`.
- **Replace** the existing `test_parse_rejects_dec` (Python) and `parse -dec rejection` (TS) tests with the above.
- **Codegen** — the Python parser lives in `compile_cli.py.jinja`; regenerate v5–v8 (scratch-render + copy the three static-template files, per the established recipe) and update the `test_render` snapshot.

## Out of scope

- Arbitrary cyclic `-dec` dependency graphs (rejected with a clear error).
- Any change to the compile direction (already shipped in v4.3).

## Alternatives considered

- **Phased on-demand resolution** (parse a dec's tapped output on demand, then the filtergraph, then remaining outputs). Simpler, but relies on the tapped output being resolvable from inputs and pre-`dec` filters, and does not cleanly detect cycles. Rejected in favor of the worklist's robustness and explicit cycle detection.
- **Full general fftools parsing** with a topological resolver over arbitrary `-dec` placements. Rejected as disproportionate to the value; FFmpeg itself rejects most such graphs.
