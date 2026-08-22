"""
typed-ffmpeg v7: FFmpeg 7.x type-safe Python bindings.

This package provides comprehensive type hints and IDE autocomplete for FFmpeg 7.x.
"""

__version__ = "7.1.0"

# Export main API functions and classes
from ffmpeg_core.ffprobe.probe import probe, probe_obj

# Make commonly used modules easily accessible
from . import codecs, compile, dag, expressions, filters, formats, options, sources, streams
from .base import afilter, filter_multi_output, merge_outputs, vfilter
from .dag import Stream
from .dag.io import input, output
from .exceptions import FFMpegExecuteError, FFMpegTypeError, FFMpegValueError
from .info import get_codecs, get_decoders, get_encoders
from .streams.audio import AudioStream
from .streams.av import AVStream
from .streams.subtitle import SubtitleStream
from .streams.video import VideoStream

__all__ = [
    "__version__",
    "input",
    "output",
    "merge_outputs",
    "probe",
    "probe_obj",
    "vfilter",
    "afilter",
    "filter_multi_output",
    "AudioStream",
    "VideoStream",
    "AVStream",
    "SubtitleStream",
    "Stream",
    "FFMpegExecuteError",
    "FFMpegTypeError",
    "FFMpegValueError",
    "get_codecs",
    "get_decoders",
    "get_encoders",
    "filters",
    "sources",
    "streams",
    "codecs",
    "formats",
    "compile",
    "dag",
    "options",
    "expressions",
]
