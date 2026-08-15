"""
typed-ffmpeg-compatible: use typed-ffmpeg without conflicting with ffmpeg-python.

Install this package instead of ``typed-ffmpeg`` when you also have
``ffmpeg-python`` installed.  It provides the same API under ``typed_ffmpeg``::

    import typed_ffmpeg as ffmpeg

    ffmpeg.input("in.mp4").hflip().output(filename="out.mp4").run()
"""

# Re-export everything from the v9 bindings
from ffmpeg import *  # noqa: F401, F403
from ffmpeg import __all__ as _all  # noqa: F401

__all__ = _all
