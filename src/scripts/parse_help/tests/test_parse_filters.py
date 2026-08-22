from dataclasses import asdict

import pytest
from syrupy.assertion import SnapshotAssertion
from syrupy.extensions.json import JSONSnapshotExtension

from ..parse_filters import (
    _extract_filter,
    _extract_list,
    _parse_filter,
    _parse_list,
    extract,
)


@pytest.mark.dev_only
def test_extract_list(snapshot: SnapshotAssertion) -> None:
    codecs = _extract_list()
    assert snapshot(extension_class=JSONSnapshotExtension) == codecs


def test_parse_list(snapshot: SnapshotAssertion) -> None:
    text = """Filters:
  T.. = Timeline support
  .S. = Slice threading
  ..C = Command support
  A = Audio input/output
  V = Video input/output
  N = Dynamic number and/or type of input/output
  | = Source or sink filter
 ... abench            A->A       Benchmark part of a filtergraph.
 ..C acompressor       A->A       Audio compressor.
 ... acontrast         A->A       Simple audio dynamic range compression/expansion filter.
 ... acopy             A->A       Copy the input audio unchanged to the output.
 ... acue              A->A       Delay filtering to match a cue.
 ... acrossfade        AA->A      Cross fade two input audio streams.
 .S. acrossover        A->N       Split audio into per-bands streams.
    """
    filters = _parse_list(text)
    assert snapshot(extension_class=JSONSnapshotExtension) == filters


@pytest.mark.parametrize(
    "text",
    [
        pytest.param(
            """Filter overlay
  Overlay a video source on top of the input.
    slice threading supported
    Inputs:
       #0: main (video)
       #1: overlay (video)
    Outputs:
       #0: default (video)
overlay AVOptions:
   x                 <string>     ..FV....... set the x expression (default "0")
   y                 <string>     ..FV....... set the y expression (default "0")
   eof_action        <int>        ..FV....... Action to take when encountering EOF from secondary input  (from 0 to 2) (default repeat)
     repeat          0            ..FV....... Repeat the previous frame.
     endall          1            ..FV....... End both streams.
     pass            2            ..FV....... Pass through the main input.
        """,
            id="overlay",
        ),
        pytest.param(
            """Filter scale
  Scale the input video size and/or convert the image format.
    Inputs:
       #0: default (video)
    Outputs:
       #0: default (video)
scale(2ref) AVOptions:
   w                 <string>     ..FV.....T. Output video width
   width             <string>     ..FV.....T. Output video width
   h                 <string>     ..FV.....T. Output video height
   height            <string>     ..FV.....T. Output video height
   flags             <string>     ..FV....... Flags to pass to libswscale (default "")
   interl            <boolean>    ..FV....... set interlacing (default false)
   in_color_matrix   <string>     ..FV....... set input YCbCr type (default "auto")
     auto                         ..FV.......
                     """,
            id="scale",
        ),
    ],
)
def test_parse_filter_options(snapshot: SnapshotAssertion, text: str) -> None:
    options = _parse_filter(text)
    assert snapshot(extension_class=JSONSnapshotExtension) == asdict(options)


# FFmpeg >= 7 prints scale's static pad and the dynamic marker together, with
# the marker indented one level deeper:
#
#     Inputs:
#        #0: default (video)
#         dynamic (depending on the options)
#
# The marker used to suppress the pad list entirely, so scale reached the cache
# claiming zero inputs. `parse()` then raised "Expected 0 inputs, got 1" for any
# command line using scale, and codegen emitted it into sources.py as a bogus
# source filter. Only reproduced on FFmpeg >= 7, which is why v5/v6 are correct.
SCALE_WITH_DYNAMIC_MARKER = """Filter scale
  Scale the input video size and/or convert the image format.
    Inputs:
       #0: default (video)
        dynamic (depending on the options)
    Outputs:
       #0: default (video)
scale AVOptions:
   w                 <string>     ..FV.....T. Output video width
"""

# A genuinely dynamic filter lists the marker alone, with no pads.
CONCAT_DYNAMIC_ONLY = """Filter concat
  Concatenate audio and video streams.
    Inputs:
        dynamic (depending on the options)
    Outputs:
        dynamic (depending on the options)
concat AVOptions:
   n                 <int>        ..FVA...... specify the number of segments (from 1 to INT_MAX) (default 2)
"""


def test_dynamic_marker_does_not_discard_static_pads() -> None:
    """A pad list and the dynamic marker can both be present; keep both."""
    parsed = _parse_filter(SCALE_WITH_DYNAMIC_MARKER)

    assert parsed.is_dynamic_input is True
    assert [(i.name, i.type) for i in parsed.stream_typings_input] == [
        ("default", "video")
    ]
    assert [(i.name, i.type) for i in parsed.stream_typings_output] == [
        ("default", "video")
    ]
    assert parsed.is_dynamic_output is False


def test_dynamic_marker_alone_yields_no_pads() -> None:
    """A filter that only reports the marker still has no static pads."""
    parsed = _parse_filter(CONCAT_DYNAMIC_ONLY)

    assert parsed.is_dynamic_input is True
    assert parsed.stream_typings_input == ()
    assert parsed.is_dynamic_output is True
    assert parsed.stream_typings_output == ()


@pytest.mark.parametrize(
    "filter",
    [
        "overlay",  # framesync, slice threading
        "scale",
        "concat",  # dynamic input/output
        "alphamerge",  # timeline
        "acopy",  # no options
        "ainterleave",
        "stereotools",  # option choices contain special characters e.g. "lr>lr           0            ..F.A....T."
        "afireqsrc",  # option choices contains space e.g. "vocal booster   17           ..F.A......"
        "acrossfade",  # contains option alias e.g. nb_samples = ns
        "abuffer",  # default value contains special characters  e.g. "time_base         <rational>   ..F.A...... (from 0 to INT_MAX) (default 0/1)"
        "amix",  # default value contains space e.g.  "weights           <string>     ..F.A....T. Set weight for each input. (default "1 1")"
        "bm3d",
        "libplacebo",  # default value contains parentheses e.g. "   crop_y            <string>     ..FV.....T. Input video crop y (default "(ih-ch)/2")"
    ],
)
@pytest.mark.dev_only
def test_extract_filter(snapshot: SnapshotAssertion, filter: str) -> None:
    options = _extract_filter(filter)
    assert snapshot(extension_class=JSONSnapshotExtension) == asdict(options)


@pytest.mark.dev_only
def test_extract_all_filters(snapshot: SnapshotAssertion) -> None:
    filters = extract()
    assert snapshot(extension_class=JSONSnapshotExtension) == filters
