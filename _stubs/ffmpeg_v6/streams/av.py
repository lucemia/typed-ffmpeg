"""Audio-video stream utilities."""

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from ..dag.nodes import InputNode

from .audio import AudioStream
from .subtitle import SubtitleStream
from .video import VideoStream


class AVStream(AudioStream, VideoStream):
    """A stream that contains both audio and video. This is for input nodes only."""

    if TYPE_CHECKING:
        node: InputNode

    @property
    def video(self) -> VideoStream:
        """
        Get the video stream from the input node.

        Returns:
            VideoStream: The video stream from the input node.

        """
        return VideoStream(node=self.node, index=self.index)

    @property
    def audio(self) -> AudioStream:
        """
        Get the audio stream from the input node.

        Returns:
            AudioStream: The audio stream from the input node.

        """
        return AudioStream(node=self.node, index=self.index)

    @property
    def subtitle(self) -> SubtitleStream:
        """
        Get the subtitle stream from the input node.

        Returns:
            SubtitleStream: The subtitle stream from the input node.

        """
        return SubtitleStream(node=self.node, index=self.index)

    def video_stream(
        self, index: int | None = None, optional: bool = False
    ) -> VideoStream:
        """
        Get the video stream from the input node with a specified index.

        Args:
            index: The index of the video stream.
            optional: Whether the video stream is optional.

        Returns:
            VideoStream: The video stream from the input node.

        """
        return VideoStream(node=self.node, index=index, optional=optional)

    def audio_stream(
        self, index: int | None = None, optional: bool = False
    ) -> AudioStream:
        """
        Get the audio stream from the input node with a specified index.

        Args:
            index: The index of the audio stream.
            optional: Whether the audio stream is optional.

        Returns:
            AudioStream: The audio stream from the input node.

        """
        return AudioStream(node=self.node, index=index, optional=optional)

    def subtitle_stream(
        self, index: int | None = None, optional: bool = False
    ) -> SubtitleStream:
        """
        Get the subtitle stream from the input node with a specified index.

        Args:
            index: The index of the subtitle stream.
            optional: Whether the subtitle stream is optional.

        Returns:
            SubtitleStream: The subtitle stream from the input node.

        """
        return SubtitleStream(node=self.node, index=index, optional=optional)
