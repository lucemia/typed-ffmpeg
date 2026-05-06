import tempfile
from pathlib import Path

from syrupy.assertion import SnapshotAssertion
from syrupy.extensions.single_file import SingleFileSnapshotExtension

from ffmpeg_core.common.schema import (
    FFMpegFilter,
    FFMpegFilterOption,
    FFMpegFilterOptionType,
    FFMpegIOType,
    StreamType,
)

from ..gen import render


def test_render(snapshot: SnapshotAssertion) -> None:
    filters = [
        FFMpegFilter(
            id="ff_af_aap",
            name="aap",
            description="description",
            is_dynamic_input=False,
            is_dynamic_output=False,
            stream_typings_input=(
                FFMpegIOType(name="input", type=StreamType.audio),
                FFMpegIOType(name="desired", type=StreamType.audio),
            ),
            stream_typings_output=(
                FFMpegIOType(name="default", type=StreamType.audio),
            ),
            options=(
                FFMpegFilterOption(
                    name="order",
                    description="set the filter order",
                    type=FFMpegFilterOptionType.int,
                    required=False,
                ),
                FFMpegFilterOption(
                    name="projection",
                    description="set the filter projection",
                    type=FFMpegFilterOptionType.int,
                    required=False,
                ),
            ),
        )
    ]

    with tempfile.TemporaryDirectory() as outpath:
        outpath_obj = Path(outpath)
        outputs = render(
            filters=filters, options=[], codecs=[], muxers=[], outpath=outpath_obj
        )

        for outfile in outputs:
            name = str(outfile.relative_to(outpath_obj))
            assert (
                snapshot(name=name, extension_class=SingleFileSnapshotExtension)
                == outfile.read_bytes()
            )
