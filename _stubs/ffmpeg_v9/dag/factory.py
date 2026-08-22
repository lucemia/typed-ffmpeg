"""
Factory functions for creating FFmpeg filter nodes.

This module provides factory functions that create filter nodes based on
FFmpeg filter definitions. These factories handle the evaluation of automatic
parameters and the conversion of input/output typing specifications.
"""

import re
from typing import Any

from ..common.schema import FFMpegFilterDef, StreamType
from ..schema import Auto
from ..utils.run import ignore_default
from .nodes import FilterableStream, FilterNode


def eval_formula(formula: str, **kwargs: Any) -> list[StreamType]:
    """
    Evaluate a formula string with the given parameters.

    This function evaluates a formula string using the provided parameters.
    It supports basic arithmetic operations and conditional logic.

    Args:
        formula: The formula string to evaluate
        **kwargs: Additional keyword arguments to pass to the formula

    Returns:
        The result of the formula evaluation

    """
    # Convert formula to Python code
    return eval(
        formula,
        {"StreamType": StreamType, "re": re, **kwargs},
    )


def filter_node_factory(
    ffmpeg_filter_def: FFMpegFilterDef, *inputs: FilterableStream, **kwargs: Any
) -> FilterNode:
    """
    Create a FilterNode from an FFmpeg filter definition.

    This function creates a FilterNode based on the provided FFmpeg filter definition.
    It handles the evaluation of Auto parameters and the conversion of input/output
    typing specifications from the filter definition.

    Args:
        ffmpeg_filter_def: The FFmpeg filter definition to create a node from
        *inputs: The input streams to connect to the filter
        **kwargs: Filter-specific parameters as keyword arguments

    Returns:
        A FilterNode configured according to the filter definition

    Note:
        This function is primarily used internally by the filter generation system
        to create filter nodes from the FFmpeg filter definitions.

    """
    for k, v in kwargs.items():
        if isinstance(v, Auto):
            kwargs[k] = eval(
                v, {"StreamType": StreamType, "re": re, **kwargs, "streams": inputs}
            )

    if isinstance(ffmpeg_filter_def.typings_input, str):
        input_typings = tuple(
            eval_formula(
                ffmpeg_filter_def.typings_input,
                **kwargs,
            )
        )
    else:
        input_typings = tuple(
            StreamType.video if k == "video" else StreamType.audio
            for k in ffmpeg_filter_def.typings_input
        )

    if isinstance(ffmpeg_filter_def.typings_output, str):
        output_typings = tuple(
            eval_formula(
                ffmpeg_filter_def.typings_output,
                **kwargs,
            )
        )
    else:
        output_typings = tuple(
            StreamType.video if k == "video" else StreamType.audio
            for k in ffmpeg_filter_def.typings_output
        )

    return FilterNode(
        name=ffmpeg_filter_def.name,
        input_typings=input_typings,
        output_typings=output_typings,
        inputs=inputs,
        kwargs=ignore_default(kwargs),
    )
