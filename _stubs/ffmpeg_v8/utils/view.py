"""
Visualization utilities for FFmpeg filter graphs.

This module provides functionality to generate visual representations of
FFmpeg filter graphs using Graphviz. These visualizations can be useful for
understanding complex filter chains, debugging, and documentation purposes.
"""

from __future__ import annotations

from typing import Literal

from ..compile.compile_cli import get_args, get_stream_label
from ..compile.context import DAGContext
from ..dag.nodes import FilterNode, InputNode, OutputNode
from ..dag.schema import Node


def _get_node_color(node: Node) -> str | None:
    """
    Determine the appropriate color for a node in the graph visualization.

    This internal helper function assigns specific colors to different types of nodes
    to enhance visual differentiation in the rendered graph:
    - Input nodes: green (#99cc00)
    - Output nodes: blue (#99ccff)
    - Filter nodes: yellow (#ffcc00)
    - Other nodes: no specific color (None)

    Args:
        node: The node to assign a color to

    Returns:
        A hex color string or None if no specific color is assigned

    """
    if isinstance(node, InputNode):
        color = "#99cc00"
    elif isinstance(node, OutputNode):
        color = "#99ccff"
    elif isinstance(node, FilterNode):
        color = "#ffcc00"
    else:
        color = None
    return color


def view(node: Node, format: Literal["png", "svg", "dot"]) -> str:
    """
    Visualize a filter graph node and its dependencies using Graphviz.

    This function creates a graphical representation of the FFmpeg filter graph
    starting from the given node. It traverses the entire graph and generates
    a visual diagram showing all nodes and their connections. The visualization
    uses different colors to distinguish between input, output, and filter nodes.

    Args:
        node: The root node to visualize (typically an output node)
        format: The output format for the visualization (png, svg, or dot)

    Returns:
        The path to the rendered graph file

    Raises:
        ImportError: If the graphviz package is not installed

    Example:
        ```python
        # Create a filter graph and visualize it
        output = (
            ffmpeg.input("input.mp4").filter("scale", 1280, 720).output("output.mp4")
        )
        graph_path = ffmpeg.utils.view(output, format="png")
        print(f"Graph visualization saved to {graph_path}")
        ```

    """
    try:
        import graphviz  # type: ignore
    except ImportError:
        raise ImportError(
            "failed to import graphviz; please make sure graphviz is installed (e.g. "
            "`pip install graphviz`)"
        )

    graph = graphviz.Digraph(format=format)
    graph.attr(rankdir="LR")
    graph.attr(fontname="Helvetica")
    graph.attr(fontsize="12")

    context = DAGContext.build(node)

    for node in context.all_nodes:
        color = _get_node_color(node)
        graph.node(
            name=node.hex,
            label=" ".join(get_args(node, context)),
            shape="box",
            style="filled",
            fillcolor=color,
            fontname="Helvetica",
            fontsize="12",
        )

    for node in context.all_nodes:
        for idx, stream in enumerate(node.inputs):
            graph.edge(
                stream.node.hex,
                node.hex,
                label=f"{get_stream_label(stream, context)} -> {idx}",
            )

    return graph.render(engine="dot")
