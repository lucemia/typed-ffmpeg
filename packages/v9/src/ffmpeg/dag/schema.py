# NOTE: this file is auto-generated, do not modify
"""DAG schema definitions for FFmpeg filter graphs."""

from __future__ import annotations

from dataclasses import dataclass, fields, replace
from functools import cached_property
from typing import Literal

from ..common.serialize import Serializable
from ..utils.frozendict import FrozenDict
from ..utils.lazy_eval.schema import LazyValue
from .utils import is_dag


@dataclass(frozen=True, kw_only=True)
class HashableBaseModel(Serializable):
    """A base class for hashable dataclasses."""

    @cached_property
    def hex(self) -> str:
        """Get the hexadecimal hash of the object."""
        return hex(abs(hash(self)))[2:]


@dataclass(frozen=True, kw_only=True)
class Stream(HashableBaseModel):
    """
    A 'Stream' represents a sequence of data flow in the Directed Acyclic Graph (DAG).

    Note:
        Each stream in the DAG is a sequence of operations that transforms the data from its input form to its output form. The stream is an essential component of the DAG, as it defines the order and the nature of the operations that are performed on the data.

    """

    node: Node
    """
    Represents the node that the stream is connected to in the upstream direction.

    Note:
        In the context of a data stream, the 'upstream' refers to the source of the data, or where the data is coming from. Therefore, the 'upstream node' is the node that is providing the data to the current stream.
    """

    index: int | None = None  # the nth child of the node
    """
    Represents the index of the stream in the node's output streams.

    Note:
        See Also: [Stream specifiers](https://ffmpeg.org/ffmpeg.html#Stream-specifiers-1) `stream_index`
    """

    optional: bool = False
    """
    Represents whether the stream is optional.

    Note:
        See Also: [Advanced options](https://ffmpeg.org/ffmpeg.html#Advanced-options)
    """

    def view(self, format: Literal["png", "svg", "dot"] = "png") -> str:
        """
        Visualize the stream.

        Args:
            format: The format of the view.

        Returns:
            The file path of the visualization.

        """
        from ..utils.view import view

        return view(self.node, format=format)

    def _repr_png_(self) -> bytes:  # pragma: no cover
        with open(self.view(format="png"), "rb") as f:
            return f.read()

    def _repr_svg_(self) -> str:  # pragma: no cover
        with open(self.view(format="svg")) as f:
            return f.read()


@dataclass(frozen=True, kw_only=True)
class Node(HashableBaseModel):
    """
    A 'Node' represents a single operation in the Directed Acyclic Graph (DAG).

    Note:
        Each node in the DAG represents a single operation that transforms the data from its input form to its output form. The node is an essential component of the DAG, as it defines the nature of the operations that are performed on the data.

    """

    # Filter_Node_Option_Type
    # kwargs: tuple[tuple[str, str | int | float | bool | LazyValue], ...] = ()
    kwargs: FrozenDict[str, str | int | float | bool | LazyValue] = FrozenDict({})
    """
    Represents the keyword arguments of the node.
    """

    inputs: tuple[Stream, ...] = ()
    """
    Represents the input streams of the node.
    """

    def __post_init__(self) -> None:
        """
        Validate that the graph is a DAG (Directed Acyclic Graph).

        Raises:
            ValueError: If the graph is not a DAG

        """
        # Frozen dataclass instances cannot form cycles (inputs must be fully
        # constructed before a node can reference them).  Checking only the
        # immediate adjacency is sufficient — all upstream subgraphs were
        # already validated when their nodes were created.
        output = {self.hex: {k.node.hex for k in self.inputs}}
        for k in self.inputs:
            if k.node.hex not in output:
                output[k.node.hex] = set()
        if not is_dag(output):
            raise ValueError(f"Graph is not a DAG: {output}")  # pragma: no cover

    def __hash__(self) -> int:
        # Return cached hash if already computed (writing to __dict__ bypasses frozen)
        cached = self.__dict__.get('_hash_val_')
        if cached is not None:
            return cached

        # Iterative post-order traversal: compute structural hash bottom-up to avoid
        # Python recursion limits on deep graphs (1000+ filters).
        node_hashes: dict[int, int] = {}
        stack: list[tuple[Node, bool]] = [(self, False)]

        while stack:
            node, processed = stack.pop()
            nid = id(node)
            if processed:
                own_fields = tuple(
                    getattr(node, f.name)
                    for f in fields(node)
                    if f.name != 'inputs'
                )
                stream_hashes = tuple(
                    (node_hashes[id(inp.node)], inp.index, inp.optional, inp.__class__)
                    for inp in node.inputs
                )
                h = hash((node.__class__,) + own_fields + stream_hashes)
                node_hashes[nid] = h
                node.__dict__['_hash_val_'] = h
            else:
                if nid in node_hashes:  # pragma: no cover
                    continue
                cached_val = node.__dict__.get('_hash_val_')
                if cached_val is not None:  # pragma: no cover
                    node_hashes[nid] = cached_val
                    continue
                stack.append((node, True))
                for inp in node.inputs:
                    inp_nid = id(inp.node)
                    if inp_nid in node_hashes:
                        continue
                    cached_inp = inp.node.__dict__.get('_hash_val_')
                    if cached_inp is not None:
                        node_hashes[inp_nid] = cached_inp
                    else:  # pragma: no cover
                        stack.append((inp.node, False))

        return node_hashes[id(self)]

    def repr(self) -> str:
        """
        Get the representation of the node.

        Returns:
            The representation of the node.

        """
        return repr(self)

    def replace(self, old_node: Node, new_node: Node) -> Node:
        """
        Replace the old node in the graph with the new node.

        Args:
            old_node: The old node to replace.
            new_node: The new node to replace with.

        Returns:
            The new graph with the replaced node.

        """
        if self == old_node:
            return new_node

        inputs = []

        for stream in self.inputs:
            new_stream_node = stream.node.replace(old_node, new_node)

            if new_stream_node != stream.node:
                # need to create a new stream
                new_stream = replace(stream, node=new_stream_node)
                inputs.append(new_stream)
            else:
                inputs.append(stream)

        return replace(self, inputs=tuple(inputs))

    @cached_property
    def max_depth(self) -> int:
        """
        Get the maximum depth of the node (longest path from any input).

        The result is cached.  The iterative computation also pre-populates the
        cache for all upstream nodes so that subsequent calls are O(1).

        Returns:
            The maximum depth of the node.

        """
        depths: dict[int, int] = {}  # id(node) -> depth
        stack: list[tuple[Node, bool]] = [(self, False)]
        while stack:
            node, processed = stack.pop()
            nid = id(node)
            if processed:
                d = max((depths[id(i.node)] for i in node.inputs), default=0) + 1
                depths[nid] = d
                node.__dict__['max_depth'] = d  # pre-populate cached_property cache
            else:
                if nid in depths:
                    continue
                cached_val = node.__dict__.get('max_depth')
                if cached_val is not None:  # pragma: no cover
                    depths[nid] = cached_val
                    continue
                stack.append((node, True))
                for inp in node.inputs:
                    inp_nid = id(inp.node)
                    if inp_nid not in depths:
                        cached_inp = inp.node.__dict__.get('max_depth')
                        if cached_inp is not None:
                            depths[inp_nid] = cached_inp
                        else:
                            stack.append((inp.node, False))
        return depths[id(self)]

    @property
    def upstream_nodes(self) -> set[Node]:
        """
        Get all upstream nodes of the node.

        Returns:
            The upstream nodes of the node.

        """
        output: set[Node] = set()
        stack: list[Node] = [self]
        while stack:
            current = stack.pop()
            if current not in output:
                output.add(current)
                for inp in current.inputs:
                    stack.append(inp.node)
        return output

    def view(self, format: Literal["png", "svg", "dot"] = "png") -> str:
        """
        Visualize the Node.

        Args:
            format: The format of the view.

        Returns:
            The file path of the visualization.

        """
        from ..utils.view import view

        return view(self, format=format)

    def _repr_png_(self) -> bytes:  # pragma: no cover
        with open(self.view(format="png"), "rb") as f:
            return f.read()

    def _repr_svg_(self) -> str:  # pragma: no cover
        with open(self.view(format="svg")) as f:
            return f.read()
