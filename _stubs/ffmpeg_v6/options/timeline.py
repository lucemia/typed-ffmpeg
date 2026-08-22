"""FFmpeg timeline options module."""

from ..expressions import Expression
from ..schema import FFMpegOptionGroup


class FFMpegTimelineOption(FFMpegOptionGroup):
    """Timeline options."""


def timeline(*, enable: str | Expression) -> FFMpegTimelineOption:
    """
    Create timeline options.

    Args:
        enable: The timeline enable parameter.

    Returns:
        FFMpegTimelineOption with the specified enable parameter.

    """
    return FFMpegTimelineOption(enable=enable)
