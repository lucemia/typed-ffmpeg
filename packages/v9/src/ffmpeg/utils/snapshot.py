"""
Snapshot testing utilities for FFmpeg DAG structures.

This module provides extensions for the syrupy snapshot testing library that
enable serialization and testing of FFmpeg's Directed Acyclic Graph (DAG)
structures. It helps in writing tests that verify the correct structure and
behavior of filter graphs.
"""

from dataclasses import asdict
from typing import Optional

from syrupy.extensions.json import JSONSnapshotExtension
from syrupy.types import (
    PropertyFilter,  # ty: ignore[possibly-unbound-import]
    PropertyMatcher,  # ty: ignore[possibly-unbound-import]
    SerializableData,
    SerializedData,
)

from ..dag.schema import Stream


class DAGSnapshotExtension(JSONSnapshotExtension):
    """
    A snapshot extension for serializing and testing FFmpeg DAG structures.

    This extension extends the JSON snapshot extension from syrupy to handle
    the special case of FFmpeg DAG nodes. It converts DAG nodes into a serializable
    form suitable for snapshot testing by wrapping them in a Stream object and
    converting to a dictionary.

    This allows for robust testing of filter graph structures and ensures that
    changes to the graph structure are intentional and documented through
    snapshot testing.
    """

    def serialize(
        self,
        data: "SerializableData",
        *,
        exclude: Optional["PropertyFilter"] = None,
        include: Optional["PropertyFilter"] = None,
        matcher: Optional["PropertyMatcher"] = None,
    ) -> "SerializedData":
        """
        Serialize a DAG node for snapshot testing.

        This method converts a DAG node into a serializable format by wrapping
        it in a Stream object and then converting that to a dictionary. This
        approach ensures that all relevant properties of the node are captured
        in the snapshot.

        Args:
            data: The DAG node to serialize
            exclude: Optional filter specifying properties to exclude
            include: Optional filter specifying properties to include
            matcher: Optional property matcher

        Returns:
            The serialized representation of the DAG node

        """
        stream = Stream(node=data)

        return super().serialize(asdict(stream))
