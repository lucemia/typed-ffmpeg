"""
Defines the basic schema for the FFmpeg command line options.

This module contains base classes used throughout the typed-ffmpeg library to handle
default values, automatic parameter derivation, and stream type definitions.
These components form the foundation of the type annotation system that
enables static type checking in the FFmpeg filter graph.
"""

from typing import Any

from .common.schema import StreamType


class Default(str):
    """
    Represents a default value for an FFmpeg option.

    This class is used for annotation purposes only and indicates that a parameter
    should use its default value. When a parameter is marked with Default, it
    will not be explicitly passed to the FFmpeg command line, letting FFmpeg use
    its built-in default value instead.

    Example:
        ```python
        # This will use FFmpeg's default crf value
        video.output("output.mp4", crf=Default("23"))
        ```

    """


class Auto(Default):
    """
    Represents an automatically derived value for an FFmpeg option.

    This is a special case of Default that indicates the value should be
    calculated automatically based on the context. For example, the number
    of inputs to a filter might be derived from the number of streams passed
    to that filter.

    Auto contains an expression string that defines how the value should be computed.

    Example:
        ```python
        # The number of inputs is automatically derived from the length of streams
        hstack(*streams, inputs=Auto("len(streams)"))
        ```

    """


class FFMpegOptionGroup(dict[str, Any]):
    """
    Represents a group of FFmpeg options.

    This class is used to group options together, such as a codec or format.
    """

    def as_av_options(self) -> dict[str, Any]:
        """
        Convert the option group to a dictionary of AV options.

        AV options are the options that are used to configure the codec, format, or filter.
        Boolean options are converted to their corresponding flags. if v is a boolean, it is converted to 0 or 1.

        Returns:
            A dictionary of AV options.

        """
        output = {}
        for k, v in self.items():
            if v is None:
                continue
            if isinstance(v, bool):
                output[k] = 1 if v is True else 0
            else:
                output[k] = v
        return output


__all__ = [
    "Auto",
    "Default",
    "FFMpegOptionGroup",
    "StreamType",
]
