"""
Utilities for escaping special characters in FFmpeg command arguments.

This module provides functions for properly escaping special characters in
FFmpeg command-line arguments and converting Python dictionaries to FFmpeg
command-line parameter formats.
"""

from collections.abc import Iterable
from typing import Any


def escape(text: str | float, chars: str = "\\'=:") -> str:
    r"""
    Escape special characters in a string for use in FFmpeg commands.

    This function adds backslash escaping to specified characters in a string,
    making it safe to use in FFmpeg filter strings and command-line arguments
    where certain characters have special meaning.

    Args:
        text: The text to escape (will be converted to string if not already)
        chars: A string containing all characters that should be escaped
               (default: "\\'=:" which handles most common special chars in FFmpeg)

    Returns:
        The input text with all specified characters escaped with backslashes

    Example:
        ```python
        # Escape a filename with spaces for FFmpeg
        safe_filename = escape("input file.mp4")  # "input\\ file.mp4"

        # Escape a filter parameter value
        safe_value = escape("key=value", "=:")  # "key\\=value"
        ```

    """
    text = str(text)
    _chars = list(set(chars))
    if "\\" in _chars:
        _chars.remove("\\")
        _chars.insert(0, "\\")

    for ch in _chars:
        text = text.replace(ch, "\\" + ch)

    return text


def convert_kwargs_to_cmd_line_args(kwargs: dict[str, Any]) -> list[str]:
    """
    Convert a Python dictionary to FFmpeg command-line arguments.

    This function takes a dictionary of parameter names and values and converts
    them to a list of strings in the format expected by FFmpeg command-line tools.
    Each key becomes a parameter prefixed with '-', and its value follows as a
    separate argument.

    Args:
        kwargs: Dictionary mapping parameter names to their values

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Example:
        ```python
        args = convert_kwargs_to_cmd_line_args({
            "c:v": "libx264",
            "crf": 23,
            "preset": "medium",
        })
        # Returns ['-c:v', 'libx264', '-crf', '23', '-preset', 'medium']
        ```

    Note:
        If a value is None, only the parameter name is included.
        If a value is an iterable (but not a string), the parameter is repeated
        for each value in the iterable.

    """
    args = []
    for k in sorted(kwargs.keys()):
        v = kwargs[k]
        if isinstance(v, Iterable) and not isinstance(v, str):
            for value in v:
                args.append(f"-{k}")
                if value is not None:
                    args.append(f"{value}")
            continue
        args.append(f"-{k}")
        if v is not None:
            args.append(f"{v}")
    return args
