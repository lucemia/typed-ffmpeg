"""FFmpeg format schema definitions."""

from ..schema import FFMpegOptionGroup


class FFMpegMuxerOption(FFMpegOptionGroup):
    """FFmpeg muxer option group."""


class FFMpegDemuxerOption(FFMpegOptionGroup):
    """FFmpeg demuxer option group."""
