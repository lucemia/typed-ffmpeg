"""FFmpeg codec schema definitions."""

from ..schema import FFMpegOptionGroup


class FFMpegEncoderOption(FFMpegOptionGroup):
    """FFmpeg encoder option group."""


class FFMpegDecoderOption(FFMpegOptionGroup):
    """FFmpeg decoder option group."""
