"""Tests for FFmpeg 7.0 loopback decoder support (-dec / [dec:N])."""

import subprocess
import sys
import textwrap

import pytest

import ffmpeg
from ffmpeg.exceptions import FFMpegTypeError, FFMpegValueError

FFMPEG_VERSION = f"v{ffmpeg.__version__.split('.')[0]}"
# Compare rather than enumerate: an ("v7", "v8") membership test silently
# skips every future major, so v9 would have reported "loopback decoders
# require FFmpeg >= 7.0" while running against FFmpeg 9.
SUPPORTS_LOOPBACK = int(ffmpeg.__version__.split(".")[0]) >= 7

requires_loopback = pytest.mark.skipif(
    not SUPPORTS_LOOPBACK, reason="loopback decoders require FFmpeg >= 7.0"
)


@requires_loopback
def test_loopback_node_construction() -> None:
    from ffmpeg.dag.nodes import LoopbackDecoderNode
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(stream_index=0)

    assert isinstance(dec, LoopbackDecoderNode)
    assert dec.inputs[0].node is out.node
    assert dec.inputs[0].index == 0
    assert isinstance(dec.video, VideoStream)


@requires_loopback
def test_loopback_decoder_options_recorded() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(0, codec="h264", extra_options={"threads": 2})

    assert dec.kwargs["c"] == "h264"
    assert dec.kwargs["threads"] == 2


@requires_loopback
def test_loopback_accessor_type_mismatch() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="-", f="null", vcodec="libx264")
    dec = out.loopback(0)
    with pytest.raises(FFMpegTypeError):
        _ = dec.audio


@requires_loopback
def test_loopback_audio_accessor() -> None:
    from ffmpeg.streams.audio import AudioStream

    out = ffmpeg.input("INPUT").audio.output(filename="-", f="null", acodec="aac")
    dec = out.loopback(0)
    assert isinstance(dec.audio, AudioStream)
    with pytest.raises(FFMpegTypeError):
        _ = dec.video


@requires_loopback
def test_loopback_rejects_streamcopy() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="c.mkv", c="copy")
    with pytest.raises(FFMpegValueError, match="streamcopy"):
        out.loopback(0)


@requires_loopback
def test_loopback_rejects_streamcopy_vcodec() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="c.mkv", vcodec="copy")
    with pytest.raises(FFMpegValueError, match="streamcopy"):
        out.loopback(0)


@requires_loopback
def test_loopback_rejects_out_of_range_index() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv", vcodec="libx264")
    with pytest.raises(FFMpegValueError, match="out of range"):
        out.loopback(1)


@requires_loopback
def test_loopback_avstream_output_skips_static_checks() -> None:
    # -map 0 style output: ost<->input correspondence is unknowable statically
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("INPUT").output(filename="o.mkv", vcodec="libx264")
    dec = out.loopback(3)  # no bounds error
    assert isinstance(dec.video, VideoStream)  # no type error either


@requires_loopback
def test_loopback_stream_cannot_feed_output_directly() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv", vcodec="libx264")
    dec = out.loopback(0)
    with pytest.raises(FFMpegValueError, match="filter"):
        dec.video.output(filename="direct.mkv")


@requires_loopback
def test_loopback_exported_from_dag() -> None:
    from ffmpeg.dag import LoopbackDecoderNode  # noqa: F401


@pytest.mark.skipif(SUPPORTS_LOOPBACK, reason="absence check is for v5/v6 only")
def test_loopback_absent_on_older_versions() -> None:
    out = ffmpeg.input("INPUT").video.output(filename="o.mkv")
    assert not hasattr(out, "loopback")


@requires_loopback
def test_loopback_canonical_hstack() -> None:
    """The canonical example from issue #966: compare an encode with its source."""
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(
        filename="-", f="null", vcodec="libx264", extra_options={"crf": 45}
    )
    dec = encoded.loopback(stream_index=0)
    stacked = ffmpeg.filters.hstack(source.video, dec.video)
    out = stacked.output(filename="OUT.mkv", vcodec="ffv1")

    assert compile_as_list(out) == [
        "-i",
        "INPUT",
        "-filter_complex",
        # NOTE: hstack always serializes its Auto-computed `inputs` option;
        # `hstack=inputs=2` is the pre-existing form for any two-input
        # hstack (unrelated to loopback)
        "[0:v][dec:0]hstack=inputs=2[s0]",
        "-map",
        "0:v",
        "-f",
        "null",
        "-vcodec",
        "libx264",
        "-crf",
        "45",
        "-",
        "-dec",
        "0:0",
        "-map",
        "[s0]",
        "-vcodec",
        "ffv1",
        "OUT.mkv",
    ]


@requires_loopback
def test_loopback_decoder_options_emitted_before_dec() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(filename="-", f="null", vcodec="libx264")
    dec = encoded.loopback(0, codec="h264", extra_options={"threads": 2})
    out = ffmpeg.filters.hstack(source.video, dec.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    dec_pos = args.index("-dec")
    assert args[dec_pos : dec_pos + 2] == ["-dec", "0:0"]
    # decoder options belong to the -dec option group: contiguous, before -dec
    assert args[dec_pos - 4 : dec_pos] == ["-c", "h264", "-threads", "2"]


@requires_loopback
def test_loopback_multiple_decoders_label_order() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    enc_a = source.video.output(filename="-", f="null", vcodec="libx264")
    enc_b = source.video.output(filename="-", f="null", vcodec="libx265")
    dec_a = enc_a.loopback(0)
    dec_b = enc_b.loopback(0)
    out = ffmpeg.filters.hstack(dec_a.video, dec_b.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    assert "[dec:0][dec:1]hstack" in fc

    dec_positions = [i for i, a in enumerate(args) if a == "-dec"]
    assert len(dec_positions) == 2
    # [dec:N] numbering must match -dec occurrence order
    assert args[dec_positions[0] + 1] == "0:0"
    assert args[dec_positions[1] + 1] == "1:0"


@requires_loopback
def test_loopback_audio_compile() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.audio.output(filename="-", f="null", acodec="aac")
    dec = encoded.loopback(0)
    out = ffmpeg.filters.amix(dec.audio, source.audio).output(filename="OUT.mka")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    assert "[dec:0]" in fc
    assert "-dec" in args
    assert args[args.index("-dec") + 1] == "0:0"


@requires_loopback
def test_parse_dec_roundtrip_hstack() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(
        filename="-", f="null", vcodec="libx264", extra_options={"crf": 45}
    )
    dec = encoded.loopback(0)
    out = ffmpeg.filters.hstack(source.video, dec.video).output(
        filename="OUT.mkv", vcodec="ffv1"
    )
    compiled = compile(out)
    recompiled = compile(parse(compiled))
    assert recompiled == compiled


@requires_loopback
def test_parse_dec_multi_decoder_roundtrip() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    enc_a = source.video.output(filename="-", f="null", vcodec="libx264")
    enc_b = source.video.output(filename="-", f="null", vcodec="libx265")
    out = ffmpeg.filters.hstack(
        enc_a.loopback(0).video, enc_b.loopback(0).video
    ).output(filename="OUT.mkv")
    compiled = compile(out)
    assert compile(parse(compiled)) == compiled


@requires_loopback
def test_parse_dec_audio_roundtrip() -> None:
    from ffmpeg.compile.compile_cli import compile, parse

    source = ffmpeg.input("INPUT")
    encoded = source.audio.output(filename="-", f="null", acodec="aac")
    out = ffmpeg.filters.amix(source.audio, encoded.loopback(0).audio).output(
        filename="OUT.mka"
    )
    compiled = compile(out)
    assert compile(parse(compiled)) == compiled


@requires_loopback
def test_parse_dec_builds_loopback_node() -> None:
    from ffmpeg.compile.compile_cli import parse
    from ffmpeg.dag.nodes import LoopbackDecoderNode

    stream = parse(
        'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
        "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] -vcodec ffv1 OUT.mkv"
    )
    nodes = stream.node.upstream_nodes
    dec_nodes = [n for n in nodes if isinstance(n, LoopbackDecoderNode)]
    assert len(dec_nodes) == 1
    assert dec_nodes[0].inputs[0].index == 0


@requires_loopback
def test_parse_dec_out_of_range_output() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
            "-map 0:v -f null -vcodec libx264 - -dec 5:0 -map [s0] OUT.mkv"
        )


@requires_loopback
def test_parse_dec_streamcopy_rejected() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
            "-map 0:v -c:v copy out0.mkv -dec 0:0 -map [s0] OUT.mkv"
        )


@requires_loopback
def test_parse_dec_mapped_to_output_rejected() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:0]hstack=inputs=2[s0]" '
            "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [dec:0] OUT.mkv"
        )


@requires_loopback
def test_parse_dangling_dec_label() -> None:
    from ffmpeg.compile.compile_cli import parse

    with pytest.raises(FFMpegValueError):
        parse(
            'ffmpeg -i INPUT -filter_complex "[0:v][dec:2]hstack=inputs=2[s0]" '
            "-map 0:v -f null -vcodec libx264 - -dec 0:0 -map [s0] OUT.mkv"
        )


@requires_loopback
def test_loopback_stream_reuse_gets_split() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    source = ffmpeg.input("INPUT")
    encoded = source.video.output(filename="-", f="null", vcodec="libx264")
    dec = encoded.loopback(0)
    # NOTE: VideoStream has no `.hstack`/`.scale` methods usable here (scale's
    # generated typings_input is a pre-existing, unrelated bug making it
    # unusable as a single-video-input filter); use boxblur + the free
    # ffmpeg.filters.hstack function instead, which exercise the same
    # reused-decoder-stream split path.
    blurred = dec.video.boxblur()
    out = ffmpeg.filters.hstack(dec.video, blurred).output(filename="OUT.mkv")

    args = compile_as_list(out)
    fc = args[args.index("-filter_complex") + 1]
    # dec stream used twice -> auto split; [dec:0] itself binds exactly once
    assert "split" in fc
    assert fc.count("[dec:0]") == 1


@requires_loopback
def test_two_distinct_loopbacks_on_same_output_stream() -> None:
    from ffmpeg.compile.compile_cli import compile_as_list

    encoded = ffmpeg.input("INPUT").video.output(
        filename="-", f="null", vcodec="libx264"
    )
    dec_a = encoded.loopback(0)
    dec_b = encoded.loopback(0, extra_options={"threads": 2})
    out = ffmpeg.filters.hstack(dec_a.video, dec_b.video).output(filename="OUT.mkv")

    args = compile_as_list(out)
    # two distinct decoders tapping the same output stream: both emitted,
    # and the tapped OutputStream must NOT go through split machinery
    assert args.count("-dec") == 2


# Minimal reproduction proving the loopback API is statically visible and
# correctly typed. Streams are combined via the free `ffmpeg.filters.hstack`
# function (VideoStream has no `.hstack()` method) since it's a known-good,
# exported multi-input video filter that type-checks cleanly.
_PYRIGHT_SAMPLE = textwrap.dedent("""
    import ffmpeg
    from ffmpeg.dag.nodes import LoopbackDecoderNode
    from ffmpeg.streams.video import VideoStream

    out = ffmpeg.input("in.mp4").video.output(
        filename="-", f="null", vcodec="libx264"
    )
    dec: LoopbackDecoderNode = out.loopback(0)
    v: VideoStream = dec.video
    stacked = ffmpeg.filters.hstack(ffmpeg.input("in.mp4").video, v)
""")


@requires_loopback
def test_pyright_loopback_typing(tmp_path) -> None:
    probe = subprocess.run(
        [sys.executable, "-m", "pyright", "--version"],
        capture_output=True,
        text=True,
    )
    if probe.returncode != 0:
        pytest.skip("pyright not installed")

    sample = tmp_path / "loopback_typing.py"
    sample.write_text(_PYRIGHT_SAMPLE)
    result = subprocess.run(
        [sys.executable, "-m", "pyright", str(sample)],
        capture_output=True,
        text=True,
    )
    import re as _re

    assert (
        _re.search(r"\b0 errors\b", result.stdout) and "error:" not in result.stdout
    ), (
        f"Pyright reported errors for the loopback API.\n"
        f"stdout:\n{result.stdout}\nstderr:\n{result.stderr}"
    )
