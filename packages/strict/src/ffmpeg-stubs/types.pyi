"""
Strict typing overlay for ``ffmpeg.types``.

Identical to ``ffmpeg_core.types`` except that ``Expr`` no longer accepts a
plain ``str``: an expression option takes a number or an
:class:`~ffmpeg_core.expressions.Expression`, so ``drawbox(x="(iw-w)/2")`` is a
type error and ``drawbox(x=(Expression("iw") - "w") / 2)`` is not.

Names are imported explicitly rather than with ``*``: mypy keeps the first
binding of a name in a stub, so a star import would shadow the strict ``Expr``.
"""

from typing import TypeAlias

from ffmpeg_core.expressions import Expression
from ffmpeg_core.schema import Default
from ffmpeg_core.types import (
    Binary,
    Boolean,
    Color,
    Dictionary,
    Double,
    Duration,
    Flags,
    Float,
    Func,
    Image_size,
    Int,
    Int64,
    Pix_fmt,
    Rational,
    Sample_fmt,
    String,
    Time,
    Video_rate,
)
from ffmpeg_core.utils.lazy_eval.schema import LazyValue

__all__ = [
    "Binary",
    "Boolean",
    "Color",
    "Dictionary",
    "Double",
    "Duration",
    "Expr",
    "Flags",
    "Float",
    "Func",
    "Image_size",
    "Int",
    "Int64",
    "Pix_fmt",
    "Rational",
    "Sample_fmt",
    "String",
    "Time",
    "Video_rate",
]

Expr: TypeAlias = Expression | int | float | Default | LazyValue | None
