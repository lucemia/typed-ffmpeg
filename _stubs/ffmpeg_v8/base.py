"""
Core functions for creating and manipulating FFmpeg filter graphs.

This module defines the fundamental functions for building FFmpeg filter graphs
in typed-ffmpeg. It provides functions to create custom filters, handle
multi-output filters, and merge output streams. These functions serve as the
foundation for the more specialized filters defined in the filters module.
"""

from typing import Any

from .dag.io._input import input
from .dag.io._output import output
from .dag.nodes import (
    FilterableStream,
    FilterNode,
    GlobalNode,
    GlobalStream,
    OutputStream,
)
from .schema import StreamType
from .streams.audio import AudioStream
from .streams.video import VideoStream
from .utils.frozendict import FrozenDict


def merge_outputs(*streams: OutputStream) -> GlobalStream:
    """
    Merge multiple output streams into a single command execution.

    This function combines multiple output streams that need to be executed together
    in a single FFmpeg command. This is useful when you need to generate multiple
    outputs from the same input(s) in a single pass, which is more efficient than
    running separate commands.

    Args:
        *streams: Two or more output streams to be merged together

    Returns:
        A global stream representing all merged outputs

    Example:
        ```python
        input_video = ffmpeg.input("input.mp4")
        output1 = input_video.output("output1.mp4", vcodec="libx264")
        output2 = input_video.output("output2.mp4", vcodec="libx265")
        merged = ffmpeg.merge_outputs(output1, output2)
        merged.run()  # Executes both outputs in a single FFmpeg command
        ```

    """
    return GlobalNode(inputs=streams).stream()


def vfilter(
    *streams: FilterableStream,
    name: str,
    input_typings: tuple[StreamType, ...] = (StreamType.video,),
    **kwargs: Any,
) -> VideoStream:
    """
    Apply a custom video filter that has a single video output.

    This function allows you to use any FFmpeg video filter that isn't explicitly
    implemented in typed-ffmpeg. It creates a FilterNode with a video output type
    and returns the resulting video stream.

    Args:
        *streams: One or more input streams to apply the filter to
        name: The FFmpeg filter name (e.g., 'hflip', 'scale', etc.)
        input_typings: The expected types of the input streams (defaults to video)
        **kwargs: Filter-specific parameters as keyword arguments

    Returns:
        A VideoStream representing the filtered output

    Example:
        ```python
        # Apply a custom deflicker filter (if not directly implemented)
        filtered = ffmpeg.vfilter(stream, name="deflicker", mode="pm", size=10)
        ```

    Note:
        This function is for custom filters not implemented in typed-ffmpeg.
        Use the built-in filters from the filters module when available.

    """
    return FilterNode(
        name=name,
        inputs=streams,
        output_typings=(StreamType.video,),
        input_typings=input_typings,
        kwargs=FrozenDict(kwargs),
    ).video(0)


def afilter(
    *streams: FilterableStream,
    name: str,
    input_typings: tuple[StreamType, ...] = (StreamType.audio,),
    **kwargs: Any,
) -> AudioStream:
    """
    Apply a custom audio filter that has a single audio output.

    This function allows you to use any FFmpeg audio filter that isn't explicitly
    implemented in typed-ffmpeg. It creates a FilterNode with an audio output type
    and returns the resulting audio stream.

    Args:
        *streams: One or more input streams to apply the filter to
        name: The FFmpeg filter name (e.g., 'equalizer', 'dynaudnorm', etc.)
        input_typings: The expected types of the input streams (defaults to audio)
        **kwargs: Filter-specific parameters as keyword arguments

    Returns:
        An AudioStream representing the filtered output

    Example:
        ```python
        # Apply a custom audio compressor filter (if not directly implemented)
        compressed = ffmpeg.afilter(stream, name="acompressor", threshold=0.1, ratio=2)
        ```

    Note:
        This function is for custom filters not implemented in typed-ffmpeg.
        Use the built-in filters from the filters module when available.

    """
    return FilterNode(
        name=name,
        inputs=streams,
        output_typings=(StreamType.audio,),
        input_typings=input_typings,
        kwargs=FrozenDict(kwargs),
    ).audio(0)


def filter_multi_output(
    *streams: FilterableStream,
    name: str,
    input_typings: tuple[StreamType, ...] = (),
    output_typings: tuple[StreamType, ...] = (),
    **kwargs: Any,
) -> FilterNode:
    """
    Apply a custom filter that produces multiple output streams.

    This function allows you to use any FFmpeg filter that generates multiple outputs
    (like split, asplit, or complex filters). Unlike vfilter and afilter which return
    a single stream, this returns a FilterNode that you can extract specific outputs from.

    Args:
        *streams: One or more input streams to apply the filter to
        name: The FFmpeg filter name (e.g., 'split', 'channelsplit', etc.)
        input_typings: The expected types of the input streams
        output_typings: The expected types of each output stream
        **kwargs: Filter-specific parameters as keyword arguments

    Returns:
        A FilterNode object that you can extract specific outputs from
        using methods like .video(0), .audio(1), etc.

    Example:
        ```python
        # Split a video into two identical streams
        split_node = ffmpeg.filter_multi_output(
            stream, name="split", output_typings=(StreamType.video, StreamType.video)
        )
        stream1 = split_node.video(0)
        stream2 = split_node.video(1)
        ```

    Note:
        This function is for custom filters not implemented in typed-ffmpeg.
        Use the built-in filters from the filters module when available.

    """
    return FilterNode(
        name=name,
        kwargs=FrozenDict(kwargs),
        inputs=streams,
        input_typings=input_typings,
        output_typings=output_typings,
    )


__all__ = [
    "input",
    "output",
    "merge_outputs",
    "vfilter",
    "afilter",
    "filter_multi_output",
]
