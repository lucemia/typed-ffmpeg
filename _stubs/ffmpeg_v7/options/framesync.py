"""Framesync options. Some filters with several inputs support a common set of options. These options can only be set by name, not with the short notation."""

from typing import Literal

from ..schema import FFMpegOptionGroup
from ..utils.frozendict import merge


class FFMpegFrameSyncOption(FFMpegOptionGroup):
    """Framesync options."""


def framesync(
    *,
    eof_action: Literal["repeat", "pass", "endall"] | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,
    ts_sync_mode: Literal["default", "nearest"] | None = None,
) -> FFMpegFrameSyncOption:
    """
    Framesync options. Some filters with several inputs support a common set of options. These options can only be set by name, not with the short notation.

    Args:
        eof_action: Action to take when encountering EOF from secondary input  (from 0 to 2) (default repeat)
        shortest: force termination when the shortest input terminates (default false)
        repeatlast: extend last frame of secondary streams beyond EOF (default true)
        ts_sync_mode: How strictly to sync streams based on secondary input timestamps (from 0 to 1) (default default)

    References:
        [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#framesync)

    Returns:
        FFMpegFrameSyncOption

    """
    return FFMpegFrameSyncOption(
        merge({
            "eof_action": eof_action,
            "shortest": shortest,
            "repeatlast": repeatlast,
            "ts_sync_mode": ts_sync_mode,
        })
    )
