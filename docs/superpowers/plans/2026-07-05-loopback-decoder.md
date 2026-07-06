# FFmpeg Loopback Decoder (`-dec` / `[dec:N]`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement FFmpeg 7.0 loopback decoder support (issue #966) per `docs/superpowers/specs/2026-07-05-loopback-decoder-design.md`: `out.loopback(stream_index)` → `LoopbackDecoderNode` → `dec.video`/`dec.audio` filterable streams, compiled to `[decoder opts] -dec of:ost` with `[dec:N]` filtergraph labels — in Python (v7/v8 via codegen templates) and TypeScript (ts-core).

**Architecture:** A new first-class `LoopbackDecoderNode` whose single input is an `OutputStream(node=OutputNode, index=ost)` reference and whose output is a typed filterable stream. Python DAG core is generated from Jinja templates in `src/scripts/code_gen/templates/` — edit templates, regenerate all four version packages. TS core is hand-written in `packages/ts-core` — edit directly.

**Tech Stack:** Python 3.10+ dataclasses, Jinja2 codegen, pytest (+syrupy conventions, but this plan uses exact-assert tests), pyright; TypeScript, vitest.

## Global Constraints

- Never edit files carrying `# NOTE: this file is auto-generated, do not modify` (or the `//` TS equivalent) — edit the template, then regenerate (CLAUDE.md).
- `loopback()` method: generated only for FFmpeg major ≥ 7 (Jinja conditional on `ffmpeg_version`); `LoopbackDecoderNode` class + compile/validate branches: generated for ALL versions (spec §3).
- Python code must run on Python 3.10 (CI matrix floor).
- Regenerate with cached metadata only — NEVER pass `--rebuild` locally (it would re-parse from the local binary and produce environment-dependent diffs).
- Tests for the new API live in `packages/tests-shared/compile/test_loopback.py` and must NOT be added to `packages/tests-shared/compile/cases.py` (`shared_cases` feeds `compile_python`/`compile_json` tests, which do not support the new node).
- Error types: `FFMpegValueError` for invalid graph/values, `FFMpegTypeError` for stream-type mismatches (both exist in Python `ffmpeg.exceptions` and ts-core `exceptions.ts`).
- Every commit message ends with:
  `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`
  `Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL`
- Work happens on branch `feat/loopback-decoder-966` (already pushed; PR #967 exists on lucemia/typed-ffmpeg).

## Regeneration recipe (referenced by several tasks as “REGEN ALL”)

**Revised after Task 1 (binding):** full in-place regeneration is NOT reproducible on this machine — the committed data-driven files (filters.py, codecs/, formats/, streams/) were generated from a fuller FFmpeg build than the local per-version caches, so in-place regen would silently drop hardware codecs/filters (pre-existing cache mismatch, unrelated to this feature). The three files this feature changes are rendered from STATIC templates whose content does not depend on the filters/codecs caches, so we render to a scratch directory and copy over ONLY those files:

- `dag/nodes.py` (Task 2)
- `compile/compile_cli.py` (Task 3)
- `compile/validate.py` (Task 4)

The generator needs an ffmpeg binary only to READ ITS VERSION (`ffmpeg -version` first line). Local real ffmpeg is 8.0.1 (matches the `8_0` cache key). For v5/v6/v7, use the stub scripts that print the matching version banner (`v5`→5.1, `v6`→6.1, `v7`→7.1).

```bash
cd /Users/davidchen/repo/typed-ffmpeg
source .venv/bin/activate
export PYTHONPATH="$PWD/src:$PYTHONPATH"
SCRATCH=/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad
STUBS="$SCRATCH/ffmpeg-stubs"
GEN="$SCRATCH/regen-out"
rm -rf "$GEN"
for V in 5 6 7 8; do
  if [ "$V" = 8 ]; then BIN="$(which ffmpeg)"; else BIN="$STUBS/ffmpeg$V"; fi
  python -m scripts.code_gen.cli generate \
    --outpath "$GEN/v${V}" \
    --ffmpeg-binary "$BIN"
  for F in dag/nodes.py compile/compile_cli.py compile/validate.py; do
    cp "$GEN/v${V}/$F" "packages/v${V}/src/ffmpeg/$F"
  done
done
prek run -a || true   # normalize formatting of the copied files
```

Notes:
- NEVER pass `--rebuild`, and NEVER run `generate` with `--outpath` pointing into `packages/` on this machine.
- After REGEN ALL, always run `git status` and check that ONLY the intended copied files (plus any files you hand-edited) changed.

---

### Task 1: Environment setup + regeneration baseline

De-risk everything else: prove that regenerating with UNCHANGED templates reproduces the committed files (modulo known formatting churn), so later diffs are attributable to our template edits alone.

**Files:**
- Create: `/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/ffmpeg-stubs/ffmpeg{5,6,7}` (stub binaries, NOT committed)
- Possibly modify (regen resync only): `packages/v{5,6,7}/src/ffmpeg/**` (generated files)

**Interfaces:**
- Produces: a working `.venv` with `ffmpeg_core` + `v8` package installed; verified REGEN ALL recipe; clean baseline commit if resync diffs exist.

- [ ] **Step 1: Verify/create venv and install packages**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
[ -d .venv ] || python3 -m venv .venv
source .venv/bin/activate
uv sync 2>/dev/null || pip install -e packages/core -e "packages/v8[dev]"
python -c "import ffmpeg; print('installed ffmpeg pkg:', ffmpeg.__version__)"
python -c "from ffmpeg.utils.frozendict import merge; print('merge ok')"
```

Expected: prints `installed ffmpeg pkg: 8.0.0` (or similar 8.x) and `merge ok`. If a different major is installed, reinstall with `pip install -e "packages/v8[dev]"`.

- [ ] **Step 2: Create stub binaries**

```bash
STUBS=/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/ffmpeg-stubs
mkdir -p "$STUBS"
printf '#!/bin/sh\necho "ffmpeg version 5.1.6 Copyright (c) 2000-2024 the FFmpeg developers"\n' > "$STUBS/ffmpeg5"
printf '#!/bin/sh\necho "ffmpeg version 6.1.2 Copyright (c) 2000-2024 the FFmpeg developers"\n' > "$STUBS/ffmpeg6"
printf '#!/bin/sh\necho "ffmpeg version 7.1.1 Copyright (c) 2000-2024 the FFmpeg developers"\n' > "$STUBS/ffmpeg7"
chmod +x "$STUBS"/ffmpeg{5,6,7}
```

- [ ] **Step 3: Verify version detection against stubs**

```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
export PYTHONPATH="$PWD/src:$PYTHONPATH"
python -c "
from scripts.parse_help.utils import get_ffmpeg_version
import os
S = os.environ['STUBS'] if 'STUBS' in os.environ else '/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/ffmpeg-stubs'
for v in (5, 6, 7):
    print(v, get_ffmpeg_version(f'{S}/ffmpeg{v}'))
"
```

Expected: `5 5.1`, `6 6.1`, `7 7.1`. If `parse_version` rejects the stub banner, adjust the banner text to match a real `ffmpeg -version` first line.

- [ ] **Step 4: Run REGEN ALL with unchanged templates and inspect**

Run the REGEN ALL recipe above, then:

```bash
git status --short | head -50
git diff --stat | tail -5
```

Expected: EITHER no changes, OR changes confined to `packages/v{5,6,7}/src/ffmpeg/**` generated files (template-resync/formatting churn — the spec notes v5–v7 may be stale relative to templates). **Decision gate:** if `packages/v8/**` shows non-formatting diffs, or diffs appear outside generated files, STOP — the local cache/env doesn't reproduce the committed state; investigate before proceeding.

- [ ] **Step 5: Verify the resynced packages still pass shared tests (only if diffs exist)**

```bash
source .venv/bin/activate
pytest packages/tests-shared -x -q -k "not test_view"
```

Expected: PASS.

- [ ] **Step 6: Commit baseline resync (only if diffs exist)**

```bash
git add packages/v5 packages/v6 packages/v7 packages/v8
git commit -m "chore: resync generated packages with codegen templates

Mechanical regeneration with unchanged templates so that subsequent
loopback-decoder diffs are attributable to template changes only.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 2: Python — `LoopbackDecoderNode` model, accessors, validation, and `loopback()` API

**Files:**
- Modify: `src/scripts/code_gen/templates/dag/nodes.py.jinja`
- Modify: `packages/v{5,6,7,8}/src/ffmpeg/dag/__init__.py` (hand-written, 4 identical copies)
- Modify: `packages/v{5,6,7,8}/src/ffmpeg/dag/base_streams.py` (hand-written, 4 identical copies)
- Create: `packages/tests-shared/compile/test_loopback.py`
- Regenerate: `packages/v{5,6,7,8}/src/ffmpeg/dag/nodes.py`
- Update snapshots: `src/scripts/code_gen/tests/__snapshots__/test_gen/`

**Interfaces:**
- Produces: `LoopbackDecoderNode(Node)` dataclass with `inputs: tuple[OutputStream, ...]`, `_tapped_type() -> StreamType | None`, properties `video -> VideoStream` / `audio -> AudioStream`; `OutputStream.loopback(stream_index: int = 0, *, codec: String = None, decoder_options: FFMpegDecoderOption | None = None, codec_options: FFMpegAVCodecContextDecoderOption | None = None, extra_options: dict[str, Any] | None = None) -> LoopbackDecoderNode` (v7/v8 only); `OutputNode.__post_init__` rejecting loopback-stream inputs. Consumed by Tasks 3–5.

- [ ] **Step 1: Write the failing tests**

Create `packages/tests-shared/compile/test_loopback.py`:

```python
"""Tests for FFmpeg 7.0 loopback decoder support (-dec / [dec:N])."""

import pytest

import ffmpeg
from ffmpeg.exceptions import FFMpegTypeError, FFMpegValueError

FFMPEG_VERSION = f"v{ffmpeg.__version__.split('.')[0]}"
SUPPORTS_LOOPBACK = FFMPEG_VERSION in ("v7", "v8")

requires_loopback = pytest.mark.skipif(
    not SUPPORTS_LOOPBACK, reason="loopback decoders require FFmpeg >= 7.0"
)


@requires_loopback
def test_loopback_node_construction() -> None:
    from ffmpeg.dag.nodes import LoopbackDecoderNode
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(stream_index=0)

    assert isinstance(dec, LoopbackDecoderNode)
    assert dec.inputs[0].node is out.node
    assert dec.inputs[0].index == 0
    assert isinstance(dec.video, VideoStream)


@requires_loopback
def test_loopback_decoder_options_recorded() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(0, codec="h264", extra_options={"threads": 2})

    assert dec.kwargs["c"] == "h264"
    assert dec.kwargs["threads"] == 2


@requires_loopback
def test_loopback_accessor_type_mismatch() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(0)
    with pytest.raises(FFMpegTypeError):
        _ = dec.audio


@requires_loopback
def test_loopback_audio_accessor() -> None:
    from ffmpeg.streams.audio import AudioStream

    out = ffmpeg.input("INPUT").audio.output(filename="-", f="null", acodec="aac")
    dec = out.loopback(0)
    assert isinstance(dec.audio, AudioStream)
    with pytest.raises(FFMpegTypeError):
        _ = dec.video


@requires_loopback
def test_loopback_rejects_streamcopy() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="c.mkv", c="copy")
    with pytest.raises(FFMpegValueError, match="streamcopy"):
        out.loopback(0)


@requires_loopback
def test_loopback_rejects_streamcopy_vcodec() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="c.mkv", vcodec="copy")
    with pytest.raises(FFMpegValueError, match="streamcopy"):
        out.loopback(0)


@requires_loopback
def test_loopback_rejects_out_of_range_index() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv", vcodec="libx264")
    with pytest.raises(FFMpegValueError, match="out of range"):
        out.loopback(1)


@requires_loopback
def test_loopback_avstream_output_skips_static_checks() -> None:
    # -map 0 style output: ost<->input correspondence is unknowable statically
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("INPUT").stream().output(filename="o.mkv", vcodec="libx264")
    dec = out.loopback(3)  # no bounds error
    assert isinstance(dec.video, VideoStream)  # no type error either


@requires_loopback
def test_loopback_stream_cannot_feed_output_directly() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv", vcodec="libx264")
    dec = out.loopback(0)
    with pytest.raises(FFMpegValueError, match="filter"):
        dec.video.output(filename="direct.mkv")


@requires_loopback
def test_loopback_exported_from_dag() -> None:
    from ffmpeg.dag import LoopbackDecoderNode  # noqa: F401


@pytest.mark.skipif(SUPPORTS_LOOPBACK, reason="absence check is for v5/v6 only")
def test_loopback_absent_on_older_versions() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv")
    assert not hasattr(out, "loopback")
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
pytest packages/tests-shared/compile/test_loopback.py -v
```

Expected: FAIL — `AttributeError: 'OutputStream' object has no attribute 'loopback'` (and import error for `LoopbackDecoderNode`). `test_loopback_absent_on_older_versions` is SKIPPED (v8 installed).

- [ ] **Step 3: Edit `src/scripts/code_gen/templates/dag/nodes.py.jinja`**

3a. Change the frozendict import (near top, currently `from ..utils.frozendict import FrozenDict`):

```python
from ..utils.frozendict import FrozenDict, merge
```

3b. Extend the `if TYPE_CHECKING:` block (currently importing AudioStream/AVStream/VideoStream) to:

```python
if TYPE_CHECKING:
    from ..streams.audio import AudioStream
    from ..streams.av import AVStream
    from ..streams.video import VideoStream
{% if ffmpeg_version.split(".")[0] | int >= 7 %}
    from ..codecs.schema import FFMpegDecoderOption
    from ..options.codec import FFMpegAVCodecContextDecoderOption
    from ..types import String
{% endif %}
```

3c. Add `__post_init__` to `OutputNode` (after its `repr()` method, before `stream()`):

```python
    def __post_init__(self) -> None:
        """
        Validate the output node after initialization.

        Raises:
            FFMpegValueError: If an input stream comes from a loopback decoder.
              `[dec:N]` is a filtergraph input label, not a `-map` selector, so
              loopback decoder streams can only feed filters.

        """
        super().__post_init__()

        for stream in self.inputs:
            if isinstance(stream.node, LoopbackDecoderNode):
                raise FFMpegValueError(
                    "A loopback decoder stream cannot be mapped to an output "
                    "directly; route it through a filter"
                )
```

3d. Add the `loopback()` method to `OutputStream`, after its `_global_node` method, wrapped in the version gate:

```python
{% if ffmpeg_version.split(".")[0] | int >= 7 %}
    def loopback(
        self,
        stream_index: int = 0,
        *,
        codec: String = None,
        decoder_options: FFMpegDecoderOption | None = None,
        codec_options: FFMpegAVCodecContextDecoderOption | None = None,
        extra_options: dict[str, Any] | None = None,
    ) -> LoopbackDecoderNode:
        """
        Create a loopback decoder tapping a stream of this output (FFmpeg >= 7.0).

        A loopback decoder (``-dec of:ost``) decodes the encoded output of an
        existing output stream and exposes the decoded frames as a filtergraph
        input labeled ``[dec:N]``. The referenced output stream must be
        re-encoded (streamcopy outputs have no encoder to tap).

        Args:
            stream_index: The output stream index (ost) within this output file
            codec: Force a specific decoder (``-c``)
            decoder_options: ffmpeg's decoder options
            codec_options: ffmpeg's AVCodecContext decoder options
            extra_options: Additional decoder options as a dict

        Returns:
            A LoopbackDecoderNode; use its ``.video`` / ``.audio`` property to
            obtain the decoded stream for use in filters.

        Example:
            ```python
            source = ffmpeg.input("INPUT")
            encoded = source.video.output(
                filename="-", f="null", vcodec="libx264", extra_options={"crf": 45}
            )
            dec = encoded.loopback(stream_index=0)
            stacked = source.video.hstack(dec.video)
            stacked.output(filename="OUT.mkv", vcodec="ffv1")
            ```

        """
        return LoopbackDecoderNode(
            inputs=(OutputStream(node=self.node, index=stream_index),),
            kwargs=merge({"c": codec}, decoder_options, codec_options, extra_options),
        )
{% endif %}
```

3e. Add the node class at the END of the file (after `GlobalStream`):

```python
@dataclass(frozen=True, kw_only=True)
class LoopbackDecoderNode(Node):
    """
    A node that represents an FFmpeg loopback decoder (FFmpeg >= 7.0).

    A loopback decoder (``-dec of:ost``) decodes the output of an existing
    encoder and exposes the decoded frames as a filtergraph input labeled
    ``[dec:N]``. Its input references an already-defined output stream; its
    output is a filterable stream usable in filter graphs.
    """

    __hash__ = Node.__hash__

    inputs: tuple[OutputStream, ...]
    """
    The tapped output stream (exactly one): its node is the OutputNode and its
    index is the output stream index (ost) within that output file
    """

    @override
    def repr(self) -> str:
        """
        Get a string representation of this loopback decoder node.

        Returns:
            The string "loopback"

        """
        return "loopback"

    def _tapped_type(self) -> StreamType | None:
        """
        Get the best-effort static type of the tapped output stream.

        Returns:
            The StreamType of the tapped stream, or None when the ost<->input
            correspondence is statically unknowable (an AVStream appears at or
            before the tapped index in the output's inputs).

        """
        from ..streams.audio import AudioStream
        from ..streams.av import AVStream
        from ..streams.video import VideoStream

        tapped = self.inputs[0]
        index = tapped.index or 0
        out_inputs = tapped.node.inputs

        if any(isinstance(s, AVStream) for s in out_inputs[: index + 1]):
            return None
        if index >= len(out_inputs):
            return None
        stream = out_inputs[index]
        if isinstance(stream, VideoStream):
            return StreamType.video
        if isinstance(stream, AudioStream):
            return StreamType.audio
        return None

    def __post_init__(self) -> None:
        """
        Validate the loopback decoder node after initialization.

        Raises:
            FFMpegValueError: If the node does not reference exactly one output
              stream, the stream index is out of range, or the tapped output
              stream is a streamcopy (no encoder to tap, matching FFmpeg's
              dec_create() check).

        """
        from ..streams.av import AVStream

        super().__post_init__()

        if len(self.inputs) != 1:
            raise FFMpegValueError(
                f"Expected exactly one tapped output stream, got {len(self.inputs)}"
            )

        tapped = self.inputs[0]
        index = tapped.index or 0
        out_inputs = tapped.node.inputs

        if not any(isinstance(s, AVStream) for s in out_inputs) and index >= len(
            out_inputs
        ):
            raise FFMpegValueError(
                f"stream_index {index} is out of range for an output with "
                f"{len(out_inputs)} streams"
            )

        codec_keys = ["c", "codec"]
        tapped_type = self._tapped_type()
        if tapped_type == StreamType.video:
            codec_keys += ["vcodec", "c:v"]
        elif tapped_type == StreamType.audio:
            codec_keys += ["acodec", "c:a"]
        for key in codec_keys:
            value = tapped.node.kwargs.get(key)
            if value is not None and str(value) == "copy":
                raise FFMpegValueError(
                    "Cannot create a loopback decoder for a streamcopy output "
                    f"stream ({key}=copy): there is no encoder to tap"
                )

    @property
    def video(self) -> VideoStream:
        """
        Get the decoded video stream from this loopback decoder.

        Returns:
            A VideoStream usable as input to video filters

        Raises:
            FFMpegTypeError: If the tapped output stream is statically known
              to not be a video stream

        """
        from ..streams.video import VideoStream

        tapped_type = self._tapped_type()
        if tapped_type is not None and tapped_type != StreamType.video:
            raise FFMpegTypeError(
                f"Tapped output stream is {tapped_type.value}, not video"
            )
        return VideoStream(node=self)

    @property
    def audio(self) -> AudioStream:
        """
        Get the decoded audio stream from this loopback decoder.

        Returns:
            An AudioStream usable as input to audio filters

        Raises:
            FFMpegTypeError: If the tapped output stream is statically known
              to not be an audio stream

        """
        from ..streams.audio import AudioStream

        tapped_type = self._tapped_type()
        if tapped_type is not None and tapped_type != StreamType.audio:
            raise FFMpegTypeError(
                f"Tapped output stream is {tapped_type.value}, not audio"
            )
        return AudioStream(node=self)
```

- [ ] **Step 4: Update the 4 hand-written `dag/__init__.py` copies**

In each of `packages/v5/src/ffmpeg/dag/__init__.py`, `packages/v6/...`, `packages/v7/...`, `packages/v8/...`: add `LoopbackDecoderNode` to the `from .nodes import (...)` list (alphabetical: after `InputNode`) and to `__all__` (after `"InputNode"`).

- [ ] **Step 5: Update the 4 hand-written `dag/base_streams.py` copies**

In each version's `dag/base_streams.py`, widen the node annotation so streams produced by the decoder type-check. Change:

```python
    if TYPE_CHECKING:
        node: FilterNode | InputNode
```

to:

```python
    if TYPE_CHECKING:
        node: FilterNode | InputNode | LoopbackDecoderNode
```

and extend the module's `if TYPE_CHECKING:` import block from `from .nodes import FilterNode, InputNode, OutputNode` (exact existing form may list more) to also import `LoopbackDecoderNode`.

- [ ] **Step 6: REGEN ALL, inspect, run tests**

Run the REGEN ALL recipe. Then:

```bash
git status --short   # expect: templates, dag/__init__.py x4, base_streams.py x4, dag/nodes.py x4
grep -c "loopback" packages/v5/src/ffmpeg/dag/nodes.py   # class docstring hits only
grep -n "def loopback" packages/v5/src/ffmpeg/dag/nodes.py || echo "v5: no loopback method (correct)"
grep -n "def loopback" packages/v7/src/ffmpeg/dag/nodes.py   # must exist
grep -n "def loopback" packages/v8/src/ffmpeg/dag/nodes.py   # must exist
pytest packages/tests-shared/compile/test_loopback.py -v
```

Expected: v5/v6 lack `def loopback`, v7/v8 have it; all non-skipped tests PASS.

- [ ] **Step 7: Run the full shared suite + codegen render snapshots**

```bash
pytest packages/tests-shared -x -q -k "not test_view"
pytest src/scripts/code_gen/tests/test_gen.py::test_render --snapshot-update
pytest src/scripts/code_gen/tests -x -q
```

Expected: all PASS (snapshot update rewrites `test_render[dagnodes.py].raw` etc.).

- [ ] **Step 8: Commit**

```bash
git add src/scripts/code_gen packages/v5 packages/v6 packages/v7 packages/v8 packages/tests-shared/compile/test_loopback.py
git commit -m "feat(python): add LoopbackDecoderNode model and OutputStream.loopback() API

FFmpeg 7.0 loopback decoders (#966): new DAG node whose input references
an output stream (OutputNode + ost index) and whose output is a typed
filterable stream. loopback() is generated only for v7/v8; the node class
exists in all versions. Construction-time validation: streamcopy taps,
out-of-range stream_index, typed .video/.audio accessors, and a guard
against mapping decoder streams to outputs directly.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 3: Python — compile emission, `dec:N` labels, parse rejection

**Files:**
- Modify: `src/scripts/code_gen/templates/compile/compile_cli.py.jinja`
- Modify: `packages/tests-shared/compile/test_loopback.py` (append tests)
- Regenerate: `packages/v{5,6,7,8}/src/ffmpeg/compile/compile_cli.py`
- Update snapshots: `src/scripts/code_gen/tests/__snapshots__/test_gen/`

**Interfaces:**
- Consumes: `LoopbackDecoderNode` from Task 2 (`node.inputs[0]` is the tapped `OutputStream`).
- Produces: `get_loopback_indices(context: DAGContext) -> dict[Node, int]`, `get_args_loopback_decoder_node(node, context) -> list[str]`; `get_stream_label` returns `dec:{N}` for decoder streams; `compile_as_list` emits `-dec` groups after their tapped output; `parse()` raises on `-dec`. TS Task 6 mirrors these names in camelCase.

- [ ] **Step 1: Append the failing tests to `packages/tests-shared/compile/test_loopback.py`**

```python
@requires_loopback
def test_loopback_canonical_hstack() -> None:
    """The canonical example from issue #966: compare an encode with its source."""
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(
        filename="-", f="null", vcodec="libx264", extra_options={"crf": 45}
    )
    dec = encoded.loopback(stream_index=0)
    stacked = source.video.hstack(dec.video)
    out = stacked.output(filename="OUT.mkv", vcodec="ffv1")

    assert compile_as_list(out) == [
        "-i", "INPUT",
        "-filter_complex", "[0:v][dec:0]hstack[s0]",
        "-map", "0:v", "-f", "null", "-vcodec", "libx264", "-crf", "45", "-",
        "-dec", "0:0",
        "-map", "[s0]", "-vcodec", "ffv1", "OUT.mkv",
    ]


@requires_loopback
def test_loopback_decoder_options_emitted_before_dec() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(filename="-", f="null", vcodec="libx264")
    dec = encoded.loopback(0, codec="h264", extra_options={"threads": 2})
    out = source.video.hstack(dec.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    dec_pos = args.index("-dec")
    assert args[dec_pos : dec_pos + 2] == ["-dec", "0:0"]
    # decoder options belong to the -dec option group: contiguous, before -dec
    assert args[dec_pos - 4 : dec_pos] == ["-c", "h264", "-threads", "2"]


@requires_loopback
def test_loopback_multiple_decoders_label_order() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    enc_a = source.video.output(filename="-", f="null", vcodec="libx264")
    enc_b = source.video.output(filename="-", f="null", vcodec="libx265")
    dec_a = enc_a.loopback(0)
    dec_b = enc_b.loopback(0)
    out = dec_a.video.hstack(dec_b.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    assert "[dec:0][dec:1]hstack" in fc

    dec_positions = [i for i, a in enumerate(args) if a == "-dec"]
    assert len(dec_positions) == 2
    # [dec:N] numbering must match -dec occurrence order
    assert args[dec_positions[0] + 1] == "0:0"
    assert args[dec_positions[1] + 1] == "1:0"


@requires_loopback
def test_loopback_audio_compile() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.audio.output(filename="-", f="null", acodec="aac")
    dec = encoded.loopback(0)
    out = dec.audio.amix(source.audio).output(filename="OUT.mka")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    assert "[dec:0]" in fc
    assert "-dec" in args
    assert args[args.index("-dec") + 1] == "0:0"


def test_parse_rejects_dec() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError, match="-dec"):
        parse(
            "ffmpeg -i INPUT -map 0:v -c:v libx264 -f null - -dec 0:0 "
            "-filter_complex '[0:v][dec:0]hstack[s]' -map '[s]' out.mkv"
        )
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
pytest packages/tests-shared/compile/test_loopback.py -v -k "canonical or emitted or multiple or audio_compile or parse_rejects"
```

Expected: FAIL — `compile_as_list` raises `FFMpegValueError: Unknown node type: LoopbackDecoderNode` (from `get_args` dispatch); `test_parse_rejects_dec` fails because no error is raised (or a different error surfaces).

- [ ] **Step 3: Edit `src/scripts/code_gen/templates/compile/compile_cli.py.jinja`**

3a. Extend the `from ..dag.nodes import (...)` import list with `LoopbackDecoderNode` (alphabetical, after `InputNode`).

3b. Add the label-index helper immediately BEFORE `def get_stream_label(`:

```python
def get_loopback_indices(context: DAGContext) -> dict[Node, int]:
    """
    Map each LoopbackDecoderNode to its dec:N label index.

    FFmpeg numbers [dec:N] labels by the order of -dec occurrences on the
    command line. compile_as_list emits outputs in DAG order and each output's
    loopback decoders immediately after it, so label indices are assigned by
    walking outputs (and their decoders) in that same order.

    Args:
        context: The DAG context containing all nodes

    Returns:
        A dictionary mapping each LoopbackDecoderNode to its dec:N index

    """
    output_nodes = [node for node in context.all_nodes if isinstance(node, OutputNode)]
    loopback_nodes = [
        node for node in context.all_nodes if isinstance(node, LoopbackDecoderNode)
    ]

    indices: dict[Node, int] = {}
    for output_node in output_nodes:
        for dec_node in loopback_nodes:
            if dec_node.inputs[0].node == output_node:
                indices[dec_node] = len(indices)
    return indices
```

3c. In `get_stream_label`, add a match arm BEFORE `case OutputNode():`:

```python
        case LoopbackDecoderNode():
            return f"dec:{get_loopback_indices(context)[stream.node]}"
```

3d. Add the args function immediately AFTER `get_args_output_node`:

```python
def get_args_loopback_decoder_node(
    node: LoopbackDecoderNode, context: DAGContext
) -> list[str]:
    """
    Generate the FFmpeg command-line arguments for this loopback decoder.

    Emits the decoder's options followed by ``-dec of:ost``, where ``of`` is
    the index of the tapped output file and ``ost`` the output stream index
    within it. The caller (compile_as_list) places this group immediately
    after the tapped output's arguments so the option group is well-formed.

    Args:
        node: The LoopbackDecoderNode to generate arguments for
        context: DAG context for resolving the output file index

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Example:
        For a decoder forcing h264 on the first output's first stream:
        ['-c', 'h264', '-dec', '0:0']

    """
    commands = []
    for key, value in node.kwargs.items():
        if isinstance(value, bool):
            if value is True:
                commands += [f"-{key}"]
            elif value is False:
                commands += [f"-no{key}"]
        else:
            commands += [f"-{key}", str(value)]

    tapped = node.inputs[0]
    of = context.node_ids[tapped.node]
    ost = tapped.index or 0
    commands += ["-dec", f"{of}:{ost}"]
    return commands
```

3e. In `get_args`, add a match arm before `case _:`:

```python
        case LoopbackDecoderNode():
            return get_args_loopback_decoder_node(node, context)
```

3f. In `compile_as_list`, replace the output-nodes section:

```python
    # compile the output nodes
    output_nodes = [node for node in context.all_nodes if isinstance(node, OutputNode)]
    for node in output_nodes:
        commands += get_args(node, context)
```

with:

```python
    # compile the output nodes, each immediately followed by any loopback
    # decoders tapping it (-dec references an already-defined output stream)
    output_nodes = [node for node in context.all_nodes if isinstance(node, OutputNode)]
    loopback_nodes = [
        node for node in context.all_nodes if isinstance(node, LoopbackDecoderNode)
    ]
    for node in output_nodes:
        commands += get_args(node, context)
        for dec_node in loopback_nodes:
            if dec_node.inputs[0].node == node:
                commands += get_args(dec_node, context)
```

(Note: the exact existing lines may differ slightly post-formatting; preserve surrounding code.)

3g. In `parse()`, immediately after the `tokens = tokens[1:]` line (which strips the leading `ffmpeg`), add:

```python
    if "-dec" in tokens:
        raise FFMpegValueError(
            "loopback decoders (-dec) are not supported by parse()"
        )
```

- [ ] **Step 4: REGEN ALL, run tests**

Run the REGEN ALL recipe, then:

```bash
pytest packages/tests-shared/compile/test_loopback.py -v
pytest packages/tests-shared -x -q -k "not test_view"
pytest src/scripts/code_gen/tests/test_gen.py::test_render --snapshot-update
pytest src/scripts/code_gen/tests -x -q
```

Expected: all PASS.

- [ ] **Step 5: Commit**

```bash
git add src/scripts/code_gen packages/v5 packages/v6 packages/v7 packages/v8 packages/tests-shared/compile/test_loopback.py
git commit -m "feat(python): compile LoopbackDecoderNode to -dec groups with dec:N labels

Each output's loopback decoders are emitted immediately after the output's
argument group; [dec:N] labels are assigned in -dec occurrence order via
get_loopback_indices so labels and occurrences always agree. parse() now
rejects -dec with a clear error instead of misparsing it.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 4: Python — auto-split integration for decoder and tapped streams

**Files:**
- Modify: `src/scripts/code_gen/templates/compile/validate.py.jinja`
- Modify: `packages/tests-shared/compile/test_loopback.py` (append tests)
- Regenerate: `packages/v{5,6,7,8}/src/ffmpeg/compile/validate.py`
- Update snapshots: `src/scripts/code_gen/tests/__snapshots__/test_gen/`

**Interfaces:**
- Consumes: Tasks 2–3.
- Produces: `add_split` treats `OutputNode`-sourced streams like `InputNode`-sourced ones (shared, never split) — a tapped output stream consumed by multiple distinct decoders must not trigger the split machinery.

- [ ] **Step 1: Append the failing tests**

```python
@requires_loopback
def test_loopback_stream_reuse_gets_split() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(filename="-", f="null", vcodec="libx264")
    dec = encoded.loopback(0)
    scaled = dec.video.scale(w="100", h="100")
    out = dec.video.hstack(scaled).output(filename="OUT.mkv")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    # dec stream used twice -> auto split; [dec:0] itself binds exactly once
    assert "split" in fc
    assert fc.count("[dec:0]") == 1


@requires_loopback
def test_two_distinct_loopbacks_on_same_output_stream() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    encoded = ffmpeg.input("INPUT").video.output(
        filename="-", f="null", vcodec="libx264"
    )
    dec_a = encoded.loopback(0)
    dec_b = encoded.loopback(0, extra_options={"threads": 2})
    out = dec_a.video.hstack(dec_b.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    # two distinct decoders tapping the same output stream: both emitted,
    # and the tapped OutputStream must NOT go through split machinery
    assert args.count("-dec") == 2
```

- [ ] **Step 2: Run tests to verify current behavior**

```bash
pytest packages/tests-shared/compile/test_loopback.py -v -k "reuse or distinct"
```

Expected: `test_two_distinct_loopbacks_on_same_output_stream` FAILS with `FFMpegValueError: unsupported stream type` (from `add_split`'s fallthrough). `test_loopback_stream_reuse_gets_split` may already PASS (dec streams are Video/Audio streams) — if so, keep it as a regression test.

- [ ] **Step 3: Edit `src/scripts/code_gen/templates/compile/validate.py.jinja`**

3a. Extend the dag import from `from ..dag.nodes import FilterNode, InputNode` to:

```python
from ..dag.nodes import FilterNode, InputNode, OutputNode
```

3b. In `add_split`, change the input-node exemption branch:

```python
            elif isinstance(stream.node, InputNode):
```

to:

```python
            elif isinstance(stream.node, (InputNode, OutputNode)):
                # Input streams are shared without splitting; output streams
                # (tapped by loopback decoders) likewise cannot be split.
```

(Keep the branch body — the loop that maps every outgoing connection to the same shared stream — unchanged.)

- [ ] **Step 4: REGEN ALL, run tests**

```bash
pytest packages/tests-shared/compile/test_loopback.py -v
pytest packages/tests-shared -x -q -k "not test_view"
pytest src/scripts/code_gen/tests/test_gen.py::test_render --snapshot-update
pytest src/scripts/code_gen/tests -x -q
```

Expected: all PASS.

- [ ] **Step 5: Commit**

```bash
git add src/scripts/code_gen packages/v5 packages/v6 packages/v7 packages/v8 packages/tests-shared/compile/test_loopback.py
git commit -m "feat(python): integrate loopback decoders with auto-split validation

Tapped output streams are shared (never split), mirroring input streams;
reused decoder output streams get split/asplit automatically.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 5: Python — static typing verification (pyright)

**Files:**
- Modify: `packages/tests-shared/compile/test_loopback.py` (append test)

**Interfaces:**
- Consumes: `loopback()` / `.video` from Task 2.
- Produces: CI-checked guarantee that the API is statically visible and correctly typed.

- [ ] **Step 1: Append the pyright test**

```python
import subprocess
import sys
import textwrap

_PYRIGHT_SAMPLE = textwrap.dedent("""
    import ffmpeg
    from ffmpeg.dag.nodes import LoopbackDecoderNode
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("in.mp4").video.output(
        filename="-", f="null", vcodec="libx264"
    )
    dec: LoopbackDecoderNode = out.loopback(0)
    v: VideoStream = dec.video
    stacked = ffmpeg.input("in.mp4").video.hstack(v)
""")


@requires_loopback
def test_pyright_loopback_typing(tmp_path) -> None:
    probe = subprocess.run(
        [sys.executable, "-m", "pyright", "--version"],
        capture_output=True,
        text=True,
    )
    if probe.returncode != 0:
        pytest.skip("pyright not installed")

    sample = tmp_path / "loopback_typing.py"
    sample.write_text(_PYRIGHT_SAMPLE)
    result = subprocess.run(
        [sys.executable, "-m", "pyright", str(sample)],
        capture_output=True,
        text=True,
    )
    assert "0 errors" in result.stdout, (
        f"Pyright reported errors for the loopback API.\n"
        f"stdout:\n{result.stdout}\nstderr:\n{result.stderr}"
    )
```

(Put the `import subprocess/sys/textwrap` lines at the top of the file with the other imports, not mid-file.)

- [ ] **Step 2: Run the test**

```bash
pytest packages/tests-shared/compile/test_loopback.py::test_pyright_loopback_typing -v
```

Expected: PASS (or SKIP if pyright missing — then `pip install pyright` and re-run to get a real PASS locally).

- [ ] **Step 3: Commit**

```bash
git add packages/tests-shared/compile/test_loopback.py
git commit -m "test(python): verify loopback API is statically typed via pyright

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 6: TypeScript — `LoopbackDecoderNode` model + `loopback()` API

**Files:**
- Modify: `packages/ts-core/src/dag/nodes.ts`
- Modify: `packages/ts-core/src/index.ts`, `packages/ts-core/src/index.browser.ts` (export lists)
- Create: `packages/ts-core/src/__tests__/loopback.test.ts`

**Interfaces:**
- Consumes: existing `Node`/`Stream` bases (`Node` ctor: `(kwargs, inputs)`; `Stream` ctor: `(node, index=null, optional=false)`), `StreamType.Video`/`StreamType.Audio`, `FFMpegValueError`/`FFMpegTypeError` from `../exceptions.js`.
- Produces: `class LoopbackDecoderNode extends Node` with `get video`/`get audio` and private `tappedType()`; `OutputStream` ctor gains `index: number | null = null`; `OutputStream.loopback(streamIndex = 0, kwargs = {}) : LoopbackDecoderNode`; `OutputNode` ctor rejects decoder-stream inputs. Task 7 consumes these.

- [ ] **Step 1: Write the failing tests**

Create `packages/ts-core/src/__tests__/loopback.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  InputNode,
  LoopbackDecoderNode,
  OutputNode,
  VideoStream,
  AudioStream,
} from "../dag/nodes.js";
import { FFMpegTypeError, FFMpegValueError } from "../exceptions.js";

describe("LoopbackDecoderNode model", () => {
  it("constructs via OutputStream.loopback()", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);

    expect(dec).toBeInstanceOf(LoopbackDecoderNode);
    expect(dec.inputs[0].node).toBe(enc);
    expect(dec.inputs[0].index).toBe(0);
    expect(dec.video).toBeInstanceOf(VideoStream);
  });

  it("records decoder options in kwargs", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0, { c: "h264", threads: 2 });

    expect(dec.kwargs["c"]).toBe("h264");
    expect(dec.kwargs["threads"]).toBe(2);
  });

  it("rejects mismatched typed accessors", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);
    expect(() => dec.audio).toThrow(FFMpegTypeError);

    const aenc = new OutputNode([source.audio], "-", { f: "null", acodec: "aac" });
    const adec = aenc.stream().loopback(0);
    expect(adec.audio).toBeInstanceOf(AudioStream);
    expect(() => adec.video).toThrow(FFMpegTypeError);
  });

  it("rejects streamcopy taps", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "c.mkv", { c: "copy" });
    expect(() => enc.stream().loopback(0)).toThrow(FFMpegValueError);

    const enc2 = new OutputNode([source.video], "c.mkv", { vcodec: "copy" });
    expect(() => enc2.stream().loopback(0)).toThrow(FFMpegValueError);
  });

  it("rejects out-of-range stream index", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "o.mkv", { vcodec: "libx264" });
    expect(() => enc.stream().loopback(1)).toThrow(FFMpegValueError);
  });

  it("skips static checks when the output maps an AVStream", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.stream()], "o.mkv", { vcodec: "libx264" });
    const dec = enc.stream().loopback(3); // no bounds error
    expect(dec.video).toBeInstanceOf(VideoStream); // no type error
  });

  it("rejects decoder streams mapped directly to an output", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);
    expect(() => new OutputNode([dec.video], "direct.mkv")).toThrow(FFMpegValueError);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /Users/davidchen/repo/typed-ffmpeg/packages/ts-core
npm install
npx vitest run src/__tests__/loopback.test.ts
```

Expected: FAIL — `LoopbackDecoderNode` has no export; `loopback` is not a function.

(`InputNode.stream()` returning an `AVStream` exists in ts-core — `nodes.ts:258` — so the AVStream test line is valid as written.)

- [ ] **Step 3: Implement in `packages/ts-core/src/dag/nodes.ts`**

3a. In `OutputNode`'s constructor, add the guard after the `super(...)` call (adjusting to the actual ctor shape `constructor(inputs, filename, kwargs = {})`):

```ts
    for (const stream of inputs) {
      if (stream.node instanceof LoopbackDecoderNode) {
        throw new FFMpegValueError(
          "A loopback decoder stream cannot be mapped to an output directly; " +
            "route it through a filter",
        );
      }
    }
```

(Ensure `FFMpegValueError`/`FFMpegTypeError` are imported at the top; add if missing.)

3b. Change `OutputStream`'s constructor to accept the tapped stream index:

```ts
  constructor(node: OutputNode, index: number | null = null) {
    super(node, index);
  }
```

3c. Add `loopback` to `OutputStream` (after `overwriteOutput()`):

```ts
  /**
   * Create a loopback decoder tapping a stream of this output.
   *
   * Requires FFmpeg >= 7.0. A loopback decoder (`-dec of:ost`) decodes the
   * encoded output of an existing output stream and exposes the decoded
   * frames as a filtergraph input labeled `[dec:N]`. The referenced output
   * stream must be re-encoded (streamcopy outputs have no encoder to tap).
   */
  loopback(
    streamIndex: number = 0,
    kwargs: Record<string, KwargsValue> = {},
  ): LoopbackDecoderNode {
    return new LoopbackDecoderNode(
      [new OutputStream(this.node, streamIndex)],
      kwargs,
    );
  }
```

3d. Add the node class at the end of the file (before the factory wiring at the bottom):

```ts
/**
 * A node representing an FFmpeg loopback decoder (`-dec of:ost`).
 *
 * Requires FFmpeg >= 7.0. Its input references an already-defined output
 * stream (node = the OutputNode, index = the output stream index); its
 * output is a filterable stream labeled `[dec:N]` in filter graphs.
 */
export class LoopbackDecoderNode extends Node {
  declare readonly inputs: readonly OutputStream[];

  constructor(
    inputs: readonly [OutputStream],
    kwargs: Record<string, KwargsValue> = {},
  ) {
    super(kwargs, inputs);

    const tapped = inputs[0];
    const index = tapped.index ?? 0;
    const outInputs = tapped.node.inputs;

    const hasAVStream = outInputs.some((s) => s instanceof AVStream);
    if (!hasAVStream && index >= outInputs.length) {
      throw new FFMpegValueError(
        `stream_index ${index} is out of range for an output with ${outInputs.length} streams`,
      );
    }

    const codecKeys = ["c", "codec"];
    const tappedType = this.tappedType();
    if (tappedType === StreamType.Video) codecKeys.push("vcodec", "c:v");
    if (tappedType === StreamType.Audio) codecKeys.push("acodec", "c:a");
    for (const key of codecKeys) {
      const value = tapped.node.kwargs[key];
      if (value != null && String(value) === "copy") {
        throw new FFMpegValueError(
          `Cannot create a loopback decoder for a streamcopy output stream (${key}=copy): there is no encoder to tap`,
        );
      }
    }
  }

  override repr(): string {
    return "loopback";
  }

  /** Best-effort static type of the tapped output stream (null if unknowable). */
  private tappedType(): StreamType | null {
    const tapped = this.inputs[0];
    const index = tapped.index ?? 0;
    const outInputs = tapped.node.inputs;

    if (outInputs.slice(0, index + 1).some((s) => s instanceof AVStream)) {
      return null;
    }
    if (index >= outInputs.length) return null;
    const stream = outInputs[index];
    if (stream instanceof AVStream) return null;
    if (stream instanceof VideoStream) return StreamType.Video;
    if (stream instanceof AudioStream) return StreamType.Audio;
    return null;
  }

  get video(): VideoStream {
    const t = this.tappedType();
    if (t !== null && t !== StreamType.Video) {
      throw new FFMpegTypeError(`Tapped output stream is ${t}, not video`);
    }
    return new VideoStream(this);
  }

  get audio(): AudioStream {
    const t = this.tappedType();
    if (t !== null && t !== StreamType.Audio) {
      throw new FFMpegTypeError(`Tapped output stream is ${t}, not audio`);
    }
    return new AudioStream(this);
  }
}
```

(Note: TS `AVStream` is a sibling of `VideoStream`/`AudioStream` — not a subclass as in Python — so the explicit `instanceof AVStream` early return is required.)

3e. Add `LoopbackDecoderNode` to the export lists in `packages/ts-core/src/index.ts` and `packages/ts-core/src/index.browser.ts` (next to `OutputNode`).

- [ ] **Step 4: Run tests + typecheck**

```bash
cd /Users/davidchen/repo/typed-ffmpeg/packages/ts-core
npx vitest run src/__tests__/loopback.test.ts
npx tsc --noEmit
npx vitest run
```

Expected: all PASS, 0 type errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
git add packages/ts-core
git commit -m "feat(ts): add LoopbackDecoderNode model and OutputStream.loopback()

TS mirror of the Python loopback decoder model (FFmpeg >= 7.0), with the
same construction-time validation: streamcopy taps, out-of-range index,
typed video/audio getters, and the direct-map guard on OutputNode.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 7: TypeScript — compile emission, labels, validate integration, parse rejection

**Files:**
- Modify: `packages/ts-core/src/compile/compileCli.ts`
- Modify: `packages/ts-core/src/compile/validate.ts`
- Modify: `packages/ts-core/src/__tests__/loopback.test.ts` (append)

**Interfaces:**
- Consumes: `LoopbackDecoderNode` from Task 6.
- Produces: `getLoopbackIndices(context): Map<Node, number>`, `getArgsLoopbackDecoderNode(node, context): string[]`, `getStreamLabel` → `dec:N`, `compileAsList` interleaved emission, `parse` throws on `-dec`; `validate.ts` rebuild/split support.

- [ ] **Step 1: Append the failing tests**

```ts
import { StreamType } from "../common/schema.js";
import { FilterNode } from "../dag/nodes.js";
import { compileAsList } from "../compile/compileCli.js";

describe("loopback compile", () => {
  function canonicalGraph() {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", {
      f: "null",
      vcodec: "libx264",
      crf: 45,
    });
    const dec = enc.stream().loopback(0);
    const stacked = new FilterNode(
      "hstack",
      [source.video, dec.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    return new OutputNode([stacked.video(0)], "OUT.mkv", { vcodec: "ffv1" });
  }

  it("compiles the canonical hstack example", () => {
    const args = compileAsList(canonicalGraph().stream());
    expect(args).toEqual([
      "-i", "INPUT",
      "-filter_complex", "[0:v][dec:0]hstack[s0]",
      "-map", "0:v", "-f", "null", "-vcodec", "libx264", "-crf", "45", "-",
      "-dec", "0:0",
      "-map", "[s0]", "-vcodec", "ffv1", "OUT.mkv",
    ]);
  });

  it("emits decoder options before -dec", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0, { c: "h264", threads: 2 });
    const stacked = new FilterNode(
      "hstack",
      [source.video, dec.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    const decPos = args.indexOf("-dec");
    expect(args.slice(decPos, decPos + 2)).toEqual(["-dec", "0:0"]);
    expect(args.slice(decPos - 4, decPos)).toEqual(["-c", "h264", "-threads", "2"]);
  });

  it("numbers dec:N labels in -dec occurrence order", () => {
    const source = new InputNode("INPUT");
    const encA = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const encB = new OutputNode([source.video], "-", { f: "null", vcodec: "libx265" });
    const decA = encA.stream().loopback(0);
    const decB = encB.stream().loopback(0);
    const stacked = new FilterNode(
      "hstack",
      [decA.video, decB.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    const fc = args[args.indexOf("-filter_complex") + 1];
    expect(fc).toContain("[dec:0][dec:1]hstack");

    const decPositions = args
      .map((a, i) => (a === "-dec" ? i : -1))
      .filter((i) => i >= 0);
    expect(decPositions).toHaveLength(2);
    expect(args[decPositions[0] + 1]).toBe("0:0");
    expect(args[decPositions[1] + 1]).toBe("1:0");
  });

  it("splits reused decoder streams but never the tapped output stream", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const decA = enc.stream().loopback(0);
    const decB = enc.stream().loopback(0, { threads: 2 });
    const stacked = new FilterNode(
      "hstack",
      [decA.video, decB.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    expect(args.filter((a) => a === "-dec")).toHaveLength(2);
  });
});
```

Also add a parse-rejection test. `parse` in ts-core is `parse(cli, ffmpegFilters: Map<string, FFMpegFilter>, ffmpegOptions: Map<string, FFMpegOption>)` (`compileCli.ts:661`); the `-dec` check fires before either map is consulted, so empty maps suffice:

```ts
import { parse } from "../compile/compileCli.js";

describe("parse -dec rejection", () => {
  it("throws a clear error on -dec", () => {
    expect(() =>
      parse(
        "ffmpeg -i INPUT -map 0:v -c:v libx264 -f null - -dec 0:0 -filter_complex [0:v][dec:0]hstack[s] -map [s] out.mkv",
        new Map(),
        new Map(),
      ),
    ).toThrow(/-dec/);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd /Users/davidchen/repo/typed-ffmpeg/packages/ts-core
npx vitest run src/__tests__/loopback.test.ts
```

Expected: compile tests FAIL with `Unknown node type: LoopbackDecoderNode` (from `getArgs`/`rebuildNodeWithInputs`); parse test FAILS (no error thrown).

- [ ] **Step 3: Implement in `packages/ts-core/src/compile/compileCli.ts`**

3a. Import `LoopbackDecoderNode` in the existing `../dag/nodes.js` import.

3b. Add before `getStreamLabel`:

```ts
/**
 * Map each LoopbackDecoderNode to its dec:N label index.
 *
 * FFmpeg numbers [dec:N] labels by -dec occurrence order on the command
 * line; compileAsList emits outputs in DAG order with each output's
 * decoders immediately after it, so indices are assigned in that order.
 */
export function getLoopbackIndices(context: DAGContext): Map<Node, number> {
  const outputNodes = context.allNodes.filter(
    (n): n is OutputNode => n instanceof OutputNode,
  );
  const loopbackNodes = context.allNodes.filter(
    (n): n is LoopbackDecoderNode => n instanceof LoopbackDecoderNode,
  );

  const indices = new Map<Node, number>();
  for (const outputNode of outputNodes) {
    for (const decNode of loopbackNodes) {
      if (decNode.inputs[0].node.hex === outputNode.hex) {
        indices.set(decNode, indices.size);
      }
    }
  }
  return indices;
}
```

(Node equality: Python uses structural `==`; TS nodes are compared via `.hex` — confirm `context.allNodes` dedup also uses `hex` (see `removeDuplicates` in `context.ts`) and use the same comparison. If dedup uses object identity, compare with `===` instead — MATCH THE EXISTING CONVENTION.)

3c. In `getStreamLabel`, add before the `OutputNode` branch:

```ts
  if (stream.node instanceof LoopbackDecoderNode) {
    return `dec:${getLoopbackIndices(context).get(stream.node)}`;
  }
```

3d. Add after `getArgsOutputNode`:

```ts
/**
 * Resolve the output-file index (of) for a node, tolerating structural
 * duplicates: context.nodeIds is keyed by object identity, but the tapped
 * node may be a structurally-equal instance that dedup dropped (Python's
 * dict handles this via value equality; TS needs the hex fallback).
 */
function outputNodeId(context: DAGContext, node: Node): number {
  const direct = context.nodeIds.get(node);
  if (direct !== undefined) return direct;
  for (const [n, id] of context.nodeIds) {
    if (n instanceof OutputNode && n.hex === node.hex) return id;
  }
  throw new FFMpegValueError("Tapped output node not found in DAG context");
}

/** Generate CLI args for a LoopbackDecoderNode: decoder options then -dec of:ost. */
export function getArgsLoopbackDecoderNode(
  node: LoopbackDecoderNode,
  context: DAGContext,
): string[] {
  const commands: string[] = [];
  for (const [key, value] of Object.entries(node.kwargs)) {
    if (typeof value === "boolean") {
      commands.push(value ? `-${key}` : `-no${key}`);
    } else {
      commands.push(`-${key}`, String(value));
    }
  }
  const tapped = node.inputs[0];
  const of = outputNodeId(context, tapped.node);
  const ost = tapped.index ?? 0;
  commands.push("-dec", `${of}:${ost}`);
  return commands;
}
```

3e. In `getArgs`, add before the final `throw`:

```ts
  if (node instanceof LoopbackDecoderNode)
    return getArgsLoopbackDecoderNode(node, context);
```

3f. In `compileAsList`, replace the output-nodes loop with:

```ts
  // Output nodes, each immediately followed by any loopback decoders
  // tapping it (-dec references an already-defined output stream)
  const outputNodes = context.allNodes.filter(
    (n): n is OutputNode => n instanceof OutputNode,
  );
  const loopbackNodes = context.allNodes.filter(
    (n): n is LoopbackDecoderNode => n instanceof LoopbackDecoderNode,
  );
  for (const n of outputNodes) {
    commands.push(...getArgsOutputNode(n, context));
    for (const decNode of loopbackNodes) {
      if (decNode.inputs[0].node.hex === n.hex) {
        commands.push(...getArgsLoopbackDecoderNode(decNode, context));
      }
    }
  }
```

(Same node-comparison caveat as 3b.)

3g. In `parse()`, right after the binary-name strip block, add:

```ts
  if (tokens.includes("-dec")) {
    throw new FFMpegValueError(
      "loopback decoders (-dec) are not supported by parse()",
    );
  }
```

- [ ] **Step 4: Implement in `packages/ts-core/src/compile/validate.ts`**

4a. Import `LoopbackDecoderNode` in the `../dag/nodes.js` import.

4b. In `rebuildNodeWithInputs`, add before the final `throw`:

```ts
  if (node instanceof LoopbackDecoderNode) {
    return new LoopbackDecoderNode(
      [newInputs[0] as OutputStream],
      { ...node.kwargs },
    );
  }
```

4c. In `rebuildStream`, fix the `OutputStream` branch to preserve the tapped index:

```ts
  if (stream instanceof OutputStream) {
    return new OutputStream(newNode as OutputNode, stream.index);
  }
```

4d. In `addSplit`, extend the shared-stream exemption:

```ts
  if (
    currentStream.node instanceof InputNode ||
    currentStream.node instanceof OutputNode
  ) {
```

(Add `// output streams tapped by loopback decoders are shared, never split` above it. Keep the body unchanged.)

- [ ] **Step 5: Run tests + typecheck**

```bash
cd /Users/davidchen/repo/typed-ffmpeg/packages/ts-core
npx vitest run src/__tests__/loopback.test.ts
npx vitest run
npx tsc --noEmit
```

Expected: all PASS, 0 type errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
git add packages/ts-core
git commit -m "feat(ts): compile LoopbackDecoderNode to -dec groups with dec:N labels

Mirrors the Python compile changes: outputs emit their loopback decoders
immediately after their own group; dec:N labels follow -dec occurrence
order; parse() rejects -dec; validate rebuild/split handles the new node
and preserves the tapped OutputStream index.

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 8: TypeScript — version package re-exports + typecheck sweep

**Files:**
- Modify: `packages/ts-v7/src/index.ts`, `packages/ts-v8/src/index.ts` (hand-written re-export lists)

**Interfaces:**
- Consumes: `LoopbackDecoderNode` export from ts-core (Task 6).
- Produces: `import { LoopbackDecoderNode } from "@typed-ffmpeg/v7"` (and v8) works. ts-v5/ts-v6 do NOT re-export it (version-gating parity with Python).

- [ ] **Step 1: Add the re-export**

In `packages/ts-v7/src/index.ts` and `packages/ts-v8/src/index.ts`, add `LoopbackDecoderNode` to the `export { ... } from "@typed-ffmpeg/core"` list (next to `OutputNode`). Do NOT touch ts-v5/ts-v6.

- [ ] **Step 2: Typecheck every ts package**

```bash
for P in ts-core ts-v5 ts-v6 ts-v7 ts-v8; do
  echo "== $P =="
  (cd /Users/davidchen/repo/typed-ffmpeg/packages/$P && npm install --silent && npx tsc --noEmit) || exit 1
done
```

Expected: 0 errors in all five packages.

- [ ] **Step 3: Commit**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
git add packages/ts-v7 packages/ts-v8
git commit -m "feat(ts): re-export LoopbackDecoderNode from ts-v7 and ts-v8

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL"
```

---

### Task 9: Real-binary verification (spec §4.5)

Verify against real ffmpeg 8.0.1 (≥ 7, has loopback decoders) that our emission order — `-filter_complex` BEFORE the `-dec` groups — is accepted, since the canonical example orders them the other way.

**Files:**
- Create (scratchpad only, NOT committed): `/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/loopback-verify/`

- [ ] **Step 1: Generate a test input and run the compiled command**

```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
VDIR=/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/loopback-verify
mkdir -p "$VDIR"
ffmpeg -y -f lavfi -i "testsrc=duration=1:size=320x240:rate=10" "$VDIR/in.mp4"
python - <<'EOF'
import subprocess, sys, os
import ffmpeg
from ffmpeg.compile.compile_cli import compile_as_list

VDIR = "/private/tmp/claude-501/-Users-davidchen-repo-typed-ffmpeg/76bdc9bb-594d-4e5e-8707-eca08a25f1a0/scratchpad/loopback-verify"
source = ffmpeg.input(f"{VDIR}/in.mp4")
encoded = source.video.output(filename="-", f="null", vcodec="libx264", extra_options={"crf": 45})
dec = encoded.loopback(0)
out = source.video.hstack(dec.video).output(filename=f"{VDIR}/out.mkv", vcodec="ffv1")
args = ["ffmpeg", "-y"] + compile_as_list(out)
print("RUN:", " ".join(args))
r = subprocess.run(args, capture_output=True, text=True)
print("exit:", r.returncode)
print(r.stderr[-2000:])
sys.exit(r.returncode)
EOF
```

Expected: exit 0 and `$VDIR/out.mkv` exists with a 640x240 video stream (`ffprobe "$VDIR/out.mkv"` to confirm). **If ffmpeg rejects the `[dec:0]` reference due to ordering**, change `compile_as_list` (both templates AND ts-core) to emit `-filter_complex` AFTER the outputs+dec groups when loopback nodes are present, update the canonical tests' expected arg lists accordingly, REGEN ALL, and re-run this step.

- [ ] **Step 2: Record the result**

Note the exact ffmpeg version and outcome; this goes into the PR description in Task 10. Nothing to commit.

---

### Task 10: Full sweep, per-version checks, lint, push, CI green

**Files:**
- Possibly modify: anything CI flags.

- [ ] **Step 1: Full local Python suite under v8, then v7, then v5**

```bash
cd /Users/davidchen/repo/typed-ffmpeg && source .venv/bin/activate
pytest packages/tests-shared -q -k "not test_view"
pytest src/scripts/code_gen/tests -q

pip install -e "packages/v7[dev]"
pytest packages/tests-shared -q -k "not test_view"

pip install -e "packages/v5[dev]"
pytest packages/tests-shared/compile/test_loopback.py -v   # absence test runs, others skip
pytest packages/tests-shared -q -k "not test_view"

pip install -e "packages/v8[dev]"   # restore
```

Expected: all PASS at every step (v5 run exercises `test_loopback_absent_on_older_versions`).

- [ ] **Step 2: TS suite**

```bash
cd /Users/davidchen/repo/typed-ffmpeg/packages/ts-core && npx vitest run && npx tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Lint / pre-commit over the whole tree**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
prek run -a || pre-commit run -a || true
git status --short   # commit any formatter fixups
```

If formatters changed files: `git add -A && git commit -m "style: formatter fixups" (with the standard footer)`.

- [ ] **Step 4: Push and update PR #967**

```bash
git push origin feat/loopback-decoder-966
gh pr edit 967 --title "feat: support FFmpeg 7.0 loopback decoders (-dec / [dec:N])" --body "$(cat <<'EOF'
## Summary

Implements **#966**: FFmpeg 7.0 loopback decoders as a first-class DAG node in Python (v7/v8) and TypeScript.

- `out.loopback(stream_index, ...)` → `LoopbackDecoderNode`; `dec.video` / `dec.audio` typed accessors
- Compile: `[decoder opts] -dec of:ost` emitted immediately after the tapped output's group; `[dec:N]` labels assigned in `-dec` occurrence order
- Validation: streamcopy taps, out-of-range indices, type-mismatched accessors, and direct `-map` of decoder streams are rejected; auto-split integrates correctly
- Version gating: `loopback()` generated only for v7/v8; `parse()` rejects `-dec` with a clear error (parser support tracked separately)
- Design spec: `docs/superpowers/specs/2026-07-05-loopback-decoder-design.md` (first commit in this PR)

## Real-binary verification

<REPLACE: ffmpeg version + result from Task 9>

## Test plan

- `packages/tests-shared/compile/test_loopback.py` — canonical example (exact args), multi-decoder label ordering, audio, all validation errors, v5/v6 absence, pyright typing
- `packages/ts-core/src/__tests__/loopback.test.ts` — mirrored TS cases

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01SrT2aq5dzBEuWyWiJ6gbGL
EOF
)"
```

(Fill in the Task 9 result before running.)

- [ ] **Step 5: Watch CI and fix failures**

```bash
gh pr checks 967 --watch
```

Expected: all checks green. If a check fails, read its log (`gh run view <id> --log-failed`), fix (remember: generated files ONLY via templates + REGEN ALL), commit, push, re-watch. Repeat until green.
