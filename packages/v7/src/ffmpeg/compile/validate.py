"""
Graph validation and transformation for FFmpeg filter chains.

This module provides functionality to validate and fix FFmpeg filter graphs,
particularly handling the case of stream reuse. In FFmpeg, a stream cannot
be used as input to multiple filters without explicit split/asplit filters.
This module detects such cases and automatically inserts the necessary split
filters to ensure the graph is valid for FFmpeg processing.
"""

from __future__ import annotations

from dataclasses import replace

from ..dag.nodes import FilterNode, InputNode
from ..dag.schema import Node, Stream
from ..exceptions import FFMpegValueError
from ..streams.audio import AudioStream
from ..streams.video import VideoStream
from .context import DAGContext


def remove_split(
    current_stream: Stream, mapping: dict[Stream, Stream] | None = None
) -> tuple[Stream, dict[Stream, Stream]]:
    """
    Remove all split nodes from the graph to prepare for reconstruction.

    This function performs the first step of graph repair by iteratively traversing
    the graph and removing all existing split/asplit nodes. This creates a clean
    graph without any stream splitting, which will then be reconstructed with proper
    split nodes where needed.

    Args:
        current_stream: The starting stream to process
        mapping: Dictionary mapping original streams to their new versions without splits
                (used for memoization)

    Returns:
        A tuple containing:
        - The new stream corresponding to the input stream but with splits removed
        - A mapping dictionary relating original streams to their new versions

    """
    if mapping is None:
        mapping = {}

    # Iterative post-order DFS: process children before parents
    stack: list[tuple[Stream, bool]] = [(current_stream, False)]

    while stack:
        stream, processed = stack.pop()

        if stream in mapping:
            continue

        if not stream.node.inputs:
            mapping[stream] = stream
            continue

        if isinstance(stream.node, FilterNode) and stream.node.name in ("split", "asplit"):
            inp = stream.node.inputs[0]
            if inp in mapping:
                mapping[stream] = mapping[inp]
            else:
                # Re-push self, then process input first
                stack.append((stream, False))
                stack.append((inp, False))
            continue

        if processed:
            # All inputs are in mapping; rebuild the node with remapped inputs
            new_node = replace(
                stream.node,
                inputs=tuple(mapping[inp] for inp in stream.node.inputs),
            )
            mapping[stream] = replace(stream, node=new_node)
        else:
            # Push self as post-process marker, then push unprocessed inputs
            stack.append((stream, True))
            for _, inp in sorted(
                enumerate(stream.node.inputs),
                key=lambda x: -x[1].node.max_depth,
            ):
                if inp not in mapping:
                    stack.append((inp, False))

    return mapping[current_stream], mapping


def add_split(
    current_stream: Stream,
    down_node: Node | None = None,
    down_index: int | None = None,
    context: DAGContext | None = None,
    mapping: dict[tuple[Stream, Node | None, int | None], Stream] | None = None,
) -> tuple[Stream, dict[tuple[Stream, Node | None, int | None], Stream]]:
    """
    Add split nodes to the graph where streams are reused.

    This function performs the second step of graph repair by traversing the
    graph and adding split/asplit nodes where a stream is used as input to
    multiple downstream nodes. In FFmpeg, each stream can only be used once
    unless explicitly split.

    The function detects cases where a stream has multiple outgoing connections
    and inserts the appropriate split filter (split for video, asplit for audio),
    connecting each output of the split to the corresponding downstream node.

    Args:
        current_stream: The stream to process for potential splitting
        down_node: The downstream node that uses current_stream as input
        down_index: The input index in down_node where current_stream connects
        context: The DAG context containing graph relationship information
        mapping: Dictionary tracking the transformations

    Returns:
        Stream: The new stream (possibly from a split node output) for the specified downstream connection
        dict: A mapping dictionary relating original stream/connections to their new versions

    Raises:
        FFMpegValueError: If an unsupported stream type is encountered

    """
    if not context:
        context = DAGContext.build(current_stream.node)

    if mapping is None:
        mapping = {}

    # Iterative post-order DFS
    # Stack entries: (stream, parent_node, parent_idx, processed)
    stack: list[tuple[Stream, Node | None, int | None, bool]] = [
        (current_stream, down_node, down_index, False)
    ]

    while stack:
        stream, par_node, par_idx, processed = stack.pop()

        key = (stream, par_node, par_idx)
        if key in mapping:
            continue

        if processed:
            # All inputs have been processed; rebuild node with remapped inputs
            new_node = replace(
                stream.node,
                inputs=tuple(
                    mapping.get((inp, stream.node, idx), inp)
                    for idx, inp in enumerate(stream.node.inputs)
                ),
            )
            new_stream = replace(stream, node=new_node)

            num = len(context.get_outgoing_nodes(stream))

            if num < 2:
                mapping[key] = new_stream
            elif isinstance(stream.node, InputNode):
                for out_node, out_idx in context.get_outgoing_nodes(stream):
                    mapping[(stream, out_node, out_idx)] = new_stream
            elif isinstance(new_stream, VideoStream):
                split_node = new_stream.split(outputs=num)
                for n, (out_node, out_idx) in enumerate(context.get_outgoing_nodes(stream)):
                    mapping[(stream, out_node, out_idx)] = split_node.video(n)
            elif isinstance(new_stream, AudioStream):
                split_node = new_stream.asplit(outputs=num)
                for n, (out_node, out_idx) in enumerate(context.get_outgoing_nodes(stream)):
                    mapping[(stream, out_node, out_idx)] = split_node.audio(n)
            else:
                raise FFMpegValueError(f"unsupported stream type: {stream}")

        else:
            # Push self as post-process marker, then push unprocessed inputs
            stack.append((stream, par_node, par_idx, True))
            for idx, inp in sorted(
                enumerate(stream.node.inputs),
                key=lambda x: -x[1].node.max_depth,
            ):
                inp_key = (inp, stream.node, idx)
                if inp_key not in mapping:
                    stack.append((inp, stream.node, idx, False))

    return mapping[(current_stream, down_node, down_index)], mapping


def fix_graph(stream: Stream) -> Stream:
    """
    Fix stream reuse issues in the filter graph by properly adding split nodes.

    This function performs a complete graph repair operation by:
    1. First removing all existing split/asplit nodes from the graph
    2. Then adding new split/asplit nodes where needed to handle stream reuse

    This ensures that the graph follows FFmpeg's requirement that each stream
    output can only be used as input to one filter unless explicitly split.

    Args:
        stream: The root stream of the graph to fix (typically an output stream)

    Returns:
        A new stream representing the fixed graph with proper splitting

    Note:
        This function creates a new graph structure rather than modifying the
        existing one, preserving the original graph.

    """
    stream, _ = remove_split(stream)
    stream, _ = add_split(stream)
    return stream


def validate(stream: Stream, auto_fix: bool = True) -> Stream:
    """
    Validate a filter graph and optionally fix stream reuse issues.

    This function validates that the filter graph follows FFmpeg's rules,
    particularly regarding stream reuse. In FFmpeg, a stream cannot be used
    as input to multiple filters without an explicit split/asplit filter.

    When auto_fix is True (the default), this function automatically inserts
    the necessary split filters where needed, ensuring the graph is valid for
    FFmpeg processing.

    Args:
        stream: The stream representing the filter graph to validate
        auto_fix: Whether to automatically fix stream reuse issues by adding
                  appropriate split nodes

    Returns:
        Either the original stream (if no fixing needed/requested) or a new
        stream representing the fixed graph

    Example:
        ```python
        # Create a graph where the same stream is used twice (reused)
        input_stream = ffmpeg.input("input.mp4")
        # Use the same stream for both scaling and blurring (invalid in FFmpeg)
        scaled = input_stream.filter("scale", 1280, 720)
        blurred = input_stream.filter("boxblur", 2)
        # Validate will automatically insert a split filter
        valid_stream = ffmpeg.dag.validate(scaled.output("output.mp4"))
        ```

    """
    if auto_fix:
        stream = fix_graph(stream)

    # NOTE: we don't want to modify the original node
    # validators: list[] = []

    # for validator in validators:
    #     context = validator(context)

    return stream
