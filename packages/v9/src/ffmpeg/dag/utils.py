"""
Utility functions for working with directed acyclic graphs (DAGs).

This module provides functions for validating and analyzing graph structures,
particularly for ensuring that filter graphs are properly formed as DAGs
without cycles, which is a requirement for FFmpeg filter chains.
"""

from __future__ import annotations

from collections import deque


def is_dag(graph: dict[str, set[str]]) -> bool:
    """
    Determine if a graph is a directed acyclic graph (DAG) using topological sorting.

    This function implements Kahn's algorithm for topological sorting to check
    if the given graph is a DAG. A graph is a DAG if it has no directed cycles.
    The algorithm works by repeatedly removing nodes with no incoming edges
    and their outgoing edges. If all nodes can be removed this way, the graph
    is a DAG; otherwise, it contains at least one cycle.

    Args:
        graph: A dictionary representing the graph, where keys are node IDs and
               values are sets of node IDs that the key node points to

    Returns:
        True if the graph is a DAG (has no cycles), False otherwise

    Example:
        ```python
        # A simple linear graph (A -> B -> C)
        graph = {"A": {"B"}, "B": {"C"}, "C": set()}
        assert is_dag(graph) == True

        # A graph with a cycle (A -> B -> C -> A)
        graph = {"A": {"B"}, "B": {"C"}, "C": {"A"}}
        assert is_dag(graph) == False
        ```

    """
    in_degree = dict.fromkeys(graph, 0)  # Initialize in-degree of each node to 0

    # Calculate in-degree of each node
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1

    queue = deque([u for u in graph if in_degree[u] == 0])
    count = 0

    while queue:
        u = queue.popleft()
        count += 1

        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    return count == len(graph)
