import pytest

from ffmpeg.base import input, merge_outputs
from ffmpeg.dag.schema import Stream
from ffmpeg.filters import amix, concat


def simple_global_args() -> Stream:
    input1 = input("input1.mp4")
    return input1.output(filename="tmp.mp4").global_args(loglevel="info")


def not_utilize_split() -> Stream:
    input1 = input("input1.mp4")
    return input1.reverse().split(outputs=2).video(0).output(filename="tmp.mp4")


def redundant_split_outputs_1() -> Stream:
    input1 = input("input1.mp4")
    graph = input1.reverse().split(outputs=1).video(0).output(filename="tmp.mp4")
    return graph


def redundant_split_duplicate() -> Stream:
    input1 = input("input1.mp4")
    s = input1.reverse().split(outputs=2)
    s0 = s.video(0)
    s1 = s.video(1)

    s00 = s0.split(outputs=2).video(0)
    s01 = s0.split(outputs=2).video(1)

    graph = concat(s00, s01, s1, n=3).video(0).output(filename="tmp.mp4")
    return graph


def reuse_input() -> Stream:
    input_stream = input("input.mp4")
    graph = (
        concat(input_stream.video, input_stream.video)
        .video(0)
        .output(filename="tmp.mp4")
    )
    return graph


def reuse_stream() -> Stream:
    input_stream = input("input.mp4")
    stream = input_stream.reverse()
    graph = concat(stream, stream).video(0).output(filename="tmp.mp4")
    return graph


def complex_stream() -> Stream:
    input1 = input("input1.mp4")
    input2 = input("input2.mp4")

    v = input1.video.reverse()
    a = input2.audio.areverse()

    f = concat(v, a, v, a, v=1, a=1)
    graph = f.video(0).output(f.audio(0), filename="tmp.mp4")
    return graph


def amix_stream() -> Stream:
    input1 = input("input1.mp4")

    graph = amix(
        input1.audio.areverse().areverse(), input1.audio.areverse(), duration="first"
    ).output(filename="tmp.mp4")
    return graph


def amix_stream_2() -> Stream:
    input1 = input("input1.mp4")

    graph = amix(
        input1.audio.areverse(), input1.audio.areverse().areverse(), duration="first"
    ).output(filename="tmp.mp4")
    return graph


def merged_output_1() -> Stream:
    input1 = input("input1.mp4")
    input2 = input("input2.mp4")
    graph = merge_outputs(
        input1.output(filename="output1.mp4"), input2.output(filename="output2.mp4")
    )

    return graph.global_args(loglevel="info")


def global_args() -> Stream:
    input1 = input("input1.mp4")
    graph = input1.video.output(filename="tmp.mp4").global_args(loglevel="info")
    return graph


def global_args_2() -> Stream:
    input1 = input("input1.mp4")
    graph = (
        input1.video
        .output(filename="tmp.mp4")
        .global_args(loglevel="info")
        .global_args(loglevel="warning")
    )
    return graph


def multi_output_filter() -> Stream:
    input1 = input("input1.mp4")
    input2 = input("input2.mp4")
    # Apply a filter that generates multiple outputs
    video, feedout = input1.feedback(input2)  # Generates two output streams

    # Process and output each stream separately
    o1 = video.drawbox(
        x=10, y=10, width=180, height=60, color="red", thickness=2
    ).output(filename="output1.mp4")
    o2 = feedout.drawbox(
        x=10, y=10, width=180, height=60, color="red", thickness=2
    ).output(filename="output2.mp4")

    # Merge the outputs
    return merge_outputs(o1, o2)


def stream_selector() -> Stream:
    return input("input1.mp4").video_stream(0).output(filename="tmp.mp4")


def stream_selector_with_filter() -> Stream:
    return (
        input("input1.mp4")
        .video_stream(0)
        .drawbox(x=10, y=10, width=180, height=60, color="red", thickness=2)
        .output(filename="tmp.mp4")
    )


def stream_selector_with_subtitle_and_index() -> Stream:
    return input("input1.mp4").subtitle_stream(0).output(filename="tmp.mp4")


def stream_selector_with_subtitle() -> Stream:
    return input("input1.mp4").subtitle.output(filename="tmp.mp4")


def stream_select_with_optional() -> Stream:
    return (
        input("input1.mp4").subtitle_stream(0, optional=True).output(filename="tmp.mp4")
    )


shared_cases = [
    pytest.param(simple_global_args(), id="simple-global-args"),
    pytest.param(not_utilize_split(), id="not-utilize-split"),
    pytest.param(redundant_split_outputs_1(), id="redundant-split-outputs-1"),
    pytest.param(redundant_split_duplicate(), id="redundant-split-duplicate"),
    pytest.param(reuse_input(), id="reuse-input"),
    pytest.param(reuse_stream(), id="reuse-stream"),
    pytest.param(complex_stream(), id="complex-stream"),
    pytest.param(amix_stream(), id="amix-stream"),
    pytest.param(amix_stream_2(), id="amix-stream-2"),
    pytest.param(merged_output_1(), id="merged-output-1"),
    pytest.param(global_args(), id="global-args"),
    pytest.param(global_args_2(), id="global-args-2"),
    pytest.param(multi_output_filter(), id="multi-output-filter"),
    pytest.param(stream_selector(), id="stream-selector"),
    pytest.param(stream_selector_with_filter(), id="stream-selector-with-filter"),
    pytest.param(
        stream_selector_with_subtitle_and_index(),
        id="stream-selector-with-subtitle-and-index",
    ),
    pytest.param(stream_selector_with_subtitle(), id="stream-selector-with-subtitle"),
    pytest.param(stream_select_with_optional(), id="stream-select-with-optional"),
]
