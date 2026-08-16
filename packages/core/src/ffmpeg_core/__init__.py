"""
ffmpeg-core: Core runtime for typed-ffmpeg.

This package contains the hand-written runtime code that is shared across
all FFmpeg version bindings. It includes:

- Compile layer: FFmpeg command generation
- IR layer: Intermediate representation for multi-backend support
- Common utilities: Serialization, schemas, etc.
- FFprobe: Media file probing

Note: DAG layer has been moved to version-specific packages to avoid
circular dependencies with generated code.
"""

__version__ = "1.0.0"

# Export commonly used classes and exceptions
from .exceptions import FFMpegExecuteError, FFMpegTypeError, FFMpegValueError

__all__ = [
    "FFMpegExecuteError",
    "FFMpegTypeError",
    "FFMpegValueError",
    "__version__",
]
