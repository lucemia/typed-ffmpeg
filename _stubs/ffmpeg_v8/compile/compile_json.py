"""JSON compilation utilities for FFmpeg streams."""

from ffmpeg_core.common.serialize import dumps, loads
from ..dag.schema import Stream
from .validate import validate


def compile(stream: Stream, auto_fix: bool = True) -> str:
    """
    Compile a stream into a JSON string.

    This function takes a Stream object representing an FFmpeg filter graph
    and converts it into a JSON string that can be passed to FFmpeg.

    Args:
        stream: The Stream object to compile into a JSON string
        auto_fix: Whether to automatically fix issues in the stream

    Returns:
        A JSON string that can be passed to FFmpeg

    """
    stream = validate(stream, auto_fix=auto_fix)

    return dumps(stream)


def parse(json: str) -> Stream:
    """
    Parse a JSON string into a Stream object.

    This function takes a JSON string that can be passed to FFmpeg
    and converts it into a Stream object.

    Args:
        json: The JSON string to parse into a Stream object

    Returns:
        A Stream object

    """
    return loads(json)
