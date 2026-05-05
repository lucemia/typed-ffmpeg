"""DAG node definitions for FFmpeg filter graphs."""

from __future__ import annotations

import logging
import os.path
from dataclasses import dataclass, replace
from typing import TYPE_CHECKING, Any

from ..exceptions import FFMpegTypeError, FFMpegValueError
from ..schema import StreamType
from ..utils.frozendict import FrozenDict
from ..utils.typing import override
from .base_streams import FilterableStream
from .global_runnable.runnable import GlobalRunable
from .schema import Node, Stream

if TYPE_CHECKING:
    from ..streams.audio import AudioStream
    from ..streams.av import AVStream
    from ..streams.video import VideoStream


logger = logging.getLogger(__name__)


@dataclass(frozen=True, kw_only=True)
class FilterNode(Node):
    """
    A node that represents an FFmpeg filter operation in the filter graph.

    FilterNode represents a single filter operation in the FFmpeg filter graph,
    such as scaling, cropping, or audio mixing. It connects input streams to
    output streams and defines the parameters for the filter operation.
    """

    __hash__ = Node.__hash__

    name: str
    """
    The name of the filter as used in FFmpeg (e.g., 'scale', 'overlay', 'amix')
    """

    inputs: tuple[FilterableStream, ...] = ()
    """
    The input streams that this filter processes
    """

    input_typings: tuple[StreamType, ...] = ()
    """
    The expected types (audio/video) for each input stream
    """

    output_typings: tuple[StreamType, ...] = ()
    """
    The types (audio/video) of each output stream this filter produces
    """

    @override
    def repr(self) -> str:
        """
        Get a string representation of this filter node.

        Returns:
            The name of the filter

        """
        return self.name

    def video(self, index: int) -> VideoStream:
        """
        Get a video output stream from this filter node.

        This method retrieves a specific video output stream from the filter,
        identified by its index among all video outputs. For example, if a filter
        produces multiple video outputs (like 'split'), this method allows
        accessing each one individually.

        Args:
            index: The index of the video stream to retrieve (0-based)
                  among all video outputs of this filter

        Returns:
            A VideoStream object representing the specified output

        Raises:
            FFMpegValueError: If the specified index is out of range

        """
        from ..streams.video import VideoStream

        video_outputs = [
            i for i, k in enumerate(self.output_typings) if k == StreamType.video
        ]
        if not len(video_outputs) > index:
            raise FFMpegValueError(
                f"Specified index {index} is out of range for video outputs {len(video_outputs)}"
            )
        return VideoStream(node=self, index=video_outputs[index])

    def audio(self, index: int) -> AudioStream:
        """
        Get an audio output stream from this filter node.

        This method retrieves a specific audio output stream from the filter,
        identified by its index among all audio outputs. For example, if a filter
        produces multiple audio outputs (like 'asplit'), this method allows
        accessing each one individually.

        Args:
            index: The index of the audio stream to retrieve (0-based)
                  among all audio outputs of this filter

        Returns:
            An AudioStream object representing the specified output

        Raises:
            FFMpegValueError: If the specified index is out of range

        """
        from ..streams.audio import AudioStream

        audio_outputs = [
            i for i, k in enumerate(self.output_typings) if k == StreamType.audio
        ]
        if not len(audio_outputs) > index:
            raise FFMpegValueError(
                f"Specified index {index} is out of range for audio outputs {len(audio_outputs)}"
            )

        return AudioStream(node=self, index=audio_outputs[index])

    def __post_init__(self) -> None:
        """
        Validate the filter node after initialization.

        This method performs type checking to ensure that the input streams
        match the expected types (audio/video) specified in input_typings.
        It also verifies that the number of inputs matches the number of
        input type specifications.

        Raises:
            FFMpegValueError: If the number of inputs doesn't match input_typings
            FFMpegTypeError: If an input stream doesn't match its expected type

        """
        from ..streams.audio import AudioStream
        from ..streams.video import VideoStream

        super().__post_init__()

        if len(self.inputs) != len(self.input_typings):
            raise FFMpegValueError(
                f"Expected {len(self.input_typings)} inputs, got {len(self.inputs)}"
            )

        stream: FilterableStream
        expected_type: StreamType

        for i, (stream, expected_type) in enumerate(
            zip(self.inputs, self.input_typings)
        ):
            if expected_type == StreamType.video:
                if not isinstance(stream, VideoStream):
                    raise FFMpegTypeError(
                        f"Expected input {i} to have video component, got {stream.__class__.__name__}"
                    )
            if expected_type == StreamType.audio:
                if not isinstance(stream, AudioStream):
                    raise FFMpegTypeError(
                        f"Expected input {i} to have audio component, got {stream.__class__.__name__}"
                    )


@dataclass(frozen=True, kw_only=True)
class InputNode(Node):
    """
    A node that represents an input file in the FFmpeg filter graph.

    InputNode represents a media file that serves as input to the FFmpeg
    command. It provides access to the video and audio streams contained
    in the file, which can then be processed by filters.
    """

    __hash__ = Node.__hash__

    filename: str
    """
    The path to the input media file
    """

    inputs: tuple[()] = ()
    """
    Input nodes have no inputs themselves (they are source nodes)
    """

    @override
    def repr(self) -> str:
        """
        Get a string representation of this input node.

        Returns:
            The basename of the input file

        """
        return os.path.basename(self.filename)

    @property
    def video(self) -> VideoStream:
        """
        Get the video stream from this input file.

        This property provides access to the video component of the input file.
        The resulting VideoStream can be used as input to video filters.

        Returns:
            A VideoStream representing the video content of this input file

        Example:
            ```python
            # Access the video stream from an input file
            input_node = ffmpeg.input("input.mp4")
            video = input_node.video
            # Apply a filter to the video stream
            scaled = video.scale(width=1280, height=720)
            ```

        """
        from ..streams.video import VideoStream

        return VideoStream(node=self)

    @property
    def audio(self) -> AudioStream:
        """
        Get the audio stream from this input file.

        This property provides access to the audio component of the input file.
        The resulting AudioStream can be used as input to audio filters.

        Returns:
            An AudioStream representing the audio content of this input file

        Example:
            ```python
            # Access the audio stream from an input file
            input_node = ffmpeg.input("input.mp4")
            audio = input_node.audio
            # Apply a filter to the audio stream
            volume_adjusted = audio.volume(volume=2.0)
            ```

        """
        from ..streams.audio import AudioStream

        return AudioStream(node=self)

    def stream(self) -> AVStream:
        """
        Get a combined audio-video stream from this input file.

        This method provides access to both the audio and video components
        of the input file as a single AVStream. This is useful when you need
        to work with both components together.

        Returns:
            An AVStream representing both audio and video content

        Example:
            ```python
            # Access both audio and video from an input file
            input_node = ffmpeg.input("input.mp4")
            av_stream = input_node.stream()
            # Output both audio and video to a new file
            output = av_stream.output("output.mp4")
            ```

        """
        from ..streams.av import AVStream

        return AVStream(node=self)


@dataclass(frozen=True, kw_only=True)
class OutputNode(Node):
    """
    A node that represents an output file in the FFmpeg filter graph.

    OutputNode represents a destination file where processed media streams
    will be written. It connects one or more streams (video, audio, or both)
    to an output file and specifies output options like codecs and formats.
    """

    __hash__ = Node.__hash__

    filename: str
    """
    The path to the output media file
    """

    inputs: tuple[FilterableStream, ...]
    """
    The streams to be written to this output file
    """

    @override
    def repr(self) -> str:
        """
        Get a string representation of this output node.

        Returns:
            The basename of the output file

        """
        return os.path.basename(self.filename)

    def stream(self) -> OutputStream:
        """
        Get an output stream representing this output file.

        This method creates an OutputStream object that wraps this OutputNode,
        allowing it to be used in operations that require an output stream,
        such as adding global options.

        Returns:
            An OutputStream representing this output file

        Example:
            ```python
            # Create an output file and add global options
            output_node = video.output("output.mp4")
            output_stream = output_node.stream()
            with_global_opts = output_stream.global_args(y=True)
            ```

        """
        return OutputStream(node=self)


@dataclass(frozen=True, kw_only=True)
class OutputStream(Stream, GlobalRunable):
    """
    A stream representing an output file with additional capabilities.

    OutputStream wraps an OutputNode and provides additional functionality,
    particularly the ability to add global FFmpeg options. This class serves
    as an intermediate step between creating an output file and executing
    the FFmpeg command.
    """

    node: OutputNode
    """The output node this stream represents"""

    @override
    def _global_node(self, *streams: OutputStream, **kwargs: Any) -> GlobalNode:
        """
        Create a GlobalNode with additional global FFmpeg options.

        This method creates a GlobalNode that applies global options to the
        FFmpeg command. These options affect the entire command rather than
        specific inputs or outputs.

        Args:
            *streams: Additional output streams to include in the same command
            **kwargs: Global FFmpeg options as keyword arguments

        Returns:
            A GlobalNode with the specified options

        Example:
            ```python
            # Add global options to an output stream
            global_node = output_stream._global_node(y=True, loglevel="quiet")
            ```

        """
        return GlobalNode(inputs=(self, *streams), kwargs=FrozenDict(kwargs))


@dataclass(frozen=True, kw_only=True)
class GlobalNode(Node):
    """
    A node that represents global FFmpeg options.

    GlobalNode represents options that apply to the entire FFmpeg command
    rather than to specific inputs or outputs. These include options like
    overwrite (-y), log level, and other general FFmpeg settings.
    """

    __hash__ = Node.__hash__

    inputs: tuple[OutputStream, ...]
    """The output streams this node applies to"""

    def stream(self) -> GlobalStream:
        """
        Get a global stream representing this global node.

        This method creates a GlobalStream object that wraps this GlobalNode,
        allowing it to be used in operations that require a global stream,
        such as adding more global options or executing the command.

        Returns:
            A GlobalStream representing this global node

        Example:
            ```python
            # Create a global node and get its stream
            global_node = ffmpeg.global_args(y=True)
            global_stream = global_node.stream()
            # Execute the command
            global_stream.run()
            ```

        """
        return GlobalStream(node=self)


@dataclass(frozen=True, kw_only=True)
class GlobalStream(Stream, GlobalRunable):
    """
    A stream representing a set of global FFmpeg options.

    GlobalStream wraps a GlobalNode and provides additional functionality,
    particularly the ability to add more global options or execute the
    FFmpeg command. This class is typically the final step in the FFmpeg
    command construction process.
    """

    node: GlobalNode
    """The global node this stream represents"""

    @override
    def _global_node(self, *streams: OutputStream, **kwargs: Any) -> GlobalNode:
        """
        Add additional global FFmpeg options to this stream.

        This method creates a new GlobalNode that combines the existing global
        options with new ones. It also allows adding more output streams to
        the command.

        Args:
            *streams: Additional output streams to include in the command
            **kwargs: Additional global FFmpeg options as keyword arguments

        Returns:
            A new GlobalNode with the combined options and streams

        Example:
            ```python
            # Add more global options to an existing global stream
            global_stream = ffmpeg.output("output.mp4").global_args(y=True)
            enhanced = global_stream._global_node(loglevel="quiet")
            ```

        """
        inputs = (*self.node.inputs, *streams)
        kwargs = dict(self.node.kwargs) | kwargs

        new_node = replace(self.node, inputs=inputs, kwargs=FrozenDict(kwargs))
        return new_node
