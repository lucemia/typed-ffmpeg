"""Tests for FFmpeg 7.0 loopback decoder support (-dec / [dec:N])."""

import pytest

import ffmpeg
from ffmpeg.exceptions import FFMpegTypeError, FFMpegValueError

FFMPEG_VERSION = f"v{ffmpeg.__version__.split('.')[0]}"
SUPPORTS_LOOPBACK = FFMPEG_VERSION in ("v7", "v8")

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
