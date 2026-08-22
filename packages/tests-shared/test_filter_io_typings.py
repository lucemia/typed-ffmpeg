"""
Guard the input typings of generated filter bindings.

`VideoStream.scale()` shipped broken in typed-ffmpeg-v7/v8/v9: its
`FFMpegFilterDef` declared `typings_input=()`, so calling the most common
filter in the library raised `FFMpegValueError: Expected 0 inputs, got 1`.

Nothing caught it. The only test in this suite that calls `.scale()` lives in
`utils/test_view.py`, where every test is skipped unless graphviz is installed,
so the flagship filter had no effective coverage at all. These tests assert the
invariant directly against the generated bindings, which are committed source
rather than cache data — so they hold in a checkout and on a wheel install
alike, unlike anything that reads `cache/list`.
"""

import inspect
import re

import ffmpeg
from ffmpeg.streams.audio import AudioStream
from ffmpeg.streams.video import VideoStream

# `FFMpegFilterDef(name="scale", typings_input=(), typings_output=("video",))`
_EMPTY_INPUT_DEF = re.compile(
    r"FFMpegFilterDef\(\s*name=\"(?P<name>\w+)\",\s*typings_input=\(\)", re.S
)


def test_scale_accepts_its_input() -> None:
    """Regression: scale declared zero inputs and rejected the stream it was called on."""
    scaled = ffmpeg.input("in.mp4").video.scale(w="1280", h="720")

    assert scaled.node.name == "scale"
    assert len(scaled.node.inputs) == 1


def test_no_stream_method_declares_zero_inputs() -> None:
    """
    A filter reached by a stream method always receives at least that stream.

    `typings_input=()` on such a filter is therefore always wrong, whatever the
    filter is — the call cannot succeed. Checking the whole module rather than
    a list of filters means a future parser regression is caught for any filter,
    not just the one that happened to break here.
    """
    offenders: list[str] = []
    for stream_cls in (VideoStream, AudioStream):
        source = inspect.getsource(inspect.getmodule(stream_cls))
        offenders += [
            f"{stream_cls.__name__}.{m.group('name')}"
            for m in _EMPTY_INPUT_DEF.finditer(source)
        ]

    assert not offenders, (
        "stream methods declaring no inputs, so calling them raises "
        f"'Expected 0 inputs': {sorted(set(offenders))}"
    )
