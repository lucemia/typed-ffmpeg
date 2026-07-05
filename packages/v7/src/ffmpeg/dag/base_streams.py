"""
Base stream classes to avoid circular import dependencies.

This module contains the base FilterableStream class that is used by both
the DAG layer and the streams layer. By keeping it separate, we avoid
circular imports between dag/nodes.py and streams/*.py.
"""

from __future__ import annotations

from pathlib import Path
from typing import TYPE_CHECKING, Any

from ..schema import StreamType
from ..utils.frozendict import FrozenDict
from ..utils.typing import override
from .io.output_args import OutputArgs
from .schema import Stream

if TYPE_CHECKING:
    from ..streams.audio import AudioStream
    from ..streams.video import VideoStream
    from .nodes import FilterNode, InputNode, LoopbackDecoderNode, OutputNode


class FilterableStreamBase(Stream, OutputArgs):
    """
    A stream that can be used as input to an FFmpeg filter.

    FilterableStream represents a media stream (audio or video) that can be
    processed by FFmpeg filters. It provides methods for applying various
    filters to the stream and for outputting the stream to a file.

    This class serves as a base for specific stream types like VideoStream
    and AudioStream, providing common functionality for filter operations.

    Note: This class is defined separately from nodes.py to avoid circular
    import dependencies between dag/nodes.py and streams/*.py.
    """

    if TYPE_CHECKING:
        node: FilterNode | InputNode | LoopbackDecoderNode

    @override
    def _output_node(
        self, *streams: FilterableStream, filename: str | Path, **kwargs: Any
    ) -> OutputNode:
        """
        Create an output node that writes this stream (and optionally others) to a file.

        This method creates an OutputNode that represents writing one or more
        streams to a file. The resulting node can be used to generate the
        FFmpeg command-line arguments for the output file.

        Args:
            *streams: Additional streams to include in the same output file
            filename: Path to the output file
            **kwargs: FFmpeg output options (e.g., codec, bitrate, format)
                     as keyword arguments

        Returns:
            An OutputNode representing the file output operation

        Example:
            ```python
            # Output a video stream to an MP4 file with H.264 codec
            output_node = video_stream._output_node(
                filename="output.mp4", c="libx264", crf=23
            )
            ```

        """
        from .nodes import OutputNode

        return OutputNode(
            inputs=(self, *streams),
            filename=str(filename),
            kwargs=FrozenDict(kwargs),
        )

    def vfilter(
        self,
        *streams: FilterableStream,
        name: str,
        input_typings: tuple[StreamType, ...] = (StreamType.video,),
        **kwargs: Any,
    ) -> VideoStream:
        """
        Apply a custom video filter to this stream.

        This method applies a custom FFmpeg video filter to this stream and
        returns the resulting video stream. It's a convenience wrapper around
        filter_multi_output that handles the case of filters with a single
        video output.

        Args:
            *streams: Additional input streams for the filter
            name: The name of the FFmpeg filter to apply
            input_typings: The expected types of the input streams
                          (defaults to all video)
            **kwargs: Filter-specific parameters as keyword arguments

        Returns:
            A VideoStream representing the filter's output

        Example:
            ```python
            # Apply a blur filter to a video stream
            blurred = stream.vfilter(name="boxblur", luma_radius=2)
            ```

        """
        return self.filter_multi_output(
            *streams,
            name=name,
            input_typings=input_typings,
            output_typings=(StreamType.video,),
            **kwargs,
        ).video(0)

    def afilter(
        self,
        *streams: FilterableStream,
        name: str,
        input_typings: tuple[StreamType, ...] = (StreamType.audio,),
        **kwargs: Any,
    ) -> AudioStream:
        """
        Apply a custom audio filter to this stream.

        This method applies a custom FFmpeg audio filter to this stream and
        returns the resulting audio stream. It's a convenience wrapper around
        filter_multi_output that handles the case of filters with a single
        audio output.

        Args:
            *streams: Additional input streams for the filter
            name: The name of the FFmpeg filter to apply
            input_typings: The expected types of the input streams
                          (defaults to all audio)
            **kwargs: Filter-specific parameters as keyword arguments

        Returns:
            An AudioStream representing the filter's output

        Example:
            ```python
            # Apply a volume filter to an audio stream
            louder = stream.afilter(name="volume", volume=2.0)
            ```

        """
        return self.filter_multi_output(
            *streams,
            name=name,
            input_typings=input_typings,
            output_typings=(StreamType.audio,),
            **kwargs,
        ).audio(0)

    def filter_multi_output(
        self,
        *streams: FilterableStream,
        name: str,
        input_typings: tuple[StreamType, ...] = (),
        output_typings: tuple[StreamType, ...] = (),
        **kwargs: Any,
    ) -> FilterNode:
        """
        Apply a custom filter with multiple outputs to this stream.

        This method creates a FilterNode that applies a custom FFmpeg filter
        to this stream (and optionally additional streams). Unlike vfilter and
        afilter which return a single stream, this method returns the FilterNode
        itself, allowing access to multiple output streams.

        Args:
            *streams: Additional input streams for the filter
            name: The name of the FFmpeg filter to apply
            input_typings: The expected types of the input streams
            output_typings: The types of output streams this filter produces
            **kwargs: Filter-specific parameters as keyword arguments

        Returns:
            A FilterNode representing the filter operation

        Example:
            ```python
            # Apply a split filter that produces two output streams
            filter_node = stream.filter_multi_output(
                name="split", output_typings=(StreamType.video, StreamType.video)
            )
            output1 = filter_node.video(0)
            output2 = filter_node.video(1)
            ```

        """
        from .nodes import FilterNode

        return FilterNode(
            name=name,
            inputs=(self, *streams),
            kwargs=FrozenDict(kwargs),
            input_typings=input_typings
            or (self.stream_type, *(s.stream_type for s in streams)),
            output_typings=output_typings,
        )


FilterableStream = FilterableStreamBase

__all__ = ["FilterableStream"]
