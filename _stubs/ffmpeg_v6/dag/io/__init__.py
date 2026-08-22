"""Input/output utilities for FFmpeg DAG operations."""

from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from ._input import input
    from ._output import output


def __getattr__(name: str) -> object:
    if name == "input":
        from ._input import input
        return input
    if name == "output":
        from ._output import output
        return output
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")


# merge_outputs is defined in base.py, not here
__all__ = ["input", "output"]
