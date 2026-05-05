"""
Regression tests for large filter graph handling (issue #866).

Verifies that chains of 1000+ filters do not raise RecursionError and
compile in reasonable time.
"""

import time

import pytest

from ffmpeg.base import input
from ffmpeg.compile.compile_cli import compile_as_list
from ffmpeg.compile.context import DAGContext


def build_drawtext_chain(n: int):
    f = input("in.mp4")
    for _ in range(n):
        f = f.drawtext(text="123", x="100", y="100", fontsize=100, fontcolor="red")
    return f.output(filename="out.mp4")


def test_large_chain_no_recursion_error():
    """1000-filter chain must not raise RecursionError."""
    stream = build_drawtext_chain(1000)
    # Should not raise RecursionError
    args = compile_as_list(stream)
    assert "-filter_complex" in args


def test_large_chain_dag_context():
    """DAGContext.build must succeed for 1000-filter chain."""
    stream = build_drawtext_chain(1000)
    context = DAGContext.build(stream.node)
    # 1 input + 1000 filter + 1 output = 1002 nodes
    assert len(context.nodes) == 1002


def test_large_chain_performance():
    """1000-filter chain must compile in under 10 seconds."""
    stream = build_drawtext_chain(1000)
    start = time.monotonic()
    compile_as_list(stream)
    elapsed = time.monotonic() - start
    assert elapsed < 10, f"Compilation took {elapsed:.2f}s, expected < 10s"


@pytest.mark.parametrize("n", [100, 500, 1000])
def test_chain_sizes(n: int):
    """Various chain sizes must compile without error."""
    stream = build_drawtext_chain(n)
    args = compile_as_list(stream)
    assert "-filter_complex" in args
