"""
DAG (Directed Acyclic Graph) layer for FFmpeg filter graphs.

This module provides the core classes for building and manipulating
FFmpeg filter graphs as Python objects.
"""

from .factory import filter_node_factory
from .nodes import (
    FilterableStream,
    FilterNode,
    GlobalNode,
    GlobalStream,
    InputNode,
    LoopbackDecoderNode,
    OutputNode,
    OutputStream,
    Stream,
)
# from .schema import EdgeInfo  # EdgeInfo not defined

__all__ = [
    "FilterNode",
    "FilterableStream",
    "GlobalNode",
    "GlobalStream",
    "InputNode",
    "LoopbackDecoderNode",
    "OutputStream",
    "OutputNode",
    "Stream",
    "filter_node_factory",
]
