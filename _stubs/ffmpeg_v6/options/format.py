# NOTE: this file is auto-generated, do not modify
"""
FFmpeg format options.
"""



from typing import Literal


from ..types import Binary, Boolean, Color, Dictionary, Double, Duration, Flags, Float, Func, Image_size, Int, Int64, Pix_fmt, Rational, Sample_fmt, String, Time, Video_rate

from ..utils.frozendict import FrozenDict, merge
from ..utils.typing import override
from ..schema import Default, StreamType, Auto, FFMpegOptionGroup
from ..common.schema import FFMpegFilterDef
from .framesync import FFMpegFrameSyncOption
from .timeline import FFMpegTimelineOption



from ..streams.channel_layout import CHANNEL_LAYOUT
from ..codecs.schema import FFMpegEncoderOption, FFMpegDecoderOption
from ..formats.schema import FFMpegMuxerOption, FFMpegDemuxerOption






class FFMpegAVFormatContextEncoderOption(FFMpegOptionGroup):
    """AVFormatContext Encoder options."""

class FFMpegAVFormatContextDecoderOption(FFMpegOptionGroup):
    """AVFormatContext Decoder options."""

def encoder_format_context(
*,
avioflags: str | None = None,
packetsize: int | None = None,
fflags: str | None = None,
fdebug: str | None = None,
max_delay: int | None = None,
start_time_realtime: int | None = None,
audio_preload: int | None = None,
chunk_duration: int | None = None,
chunk_size: int | None = None,
flush_packets: int | None = None,
metadata_header_padding: int | None = None,
output_ts_offset: str | None = None,
max_interleave_delta: int | None = None,
f_strict: int | None| Literal["very", "strict", "normal", "unofficial", "experimental"] = None,
strict: int | None| Literal["very", "strict", "normal", "unofficial", "experimental"] = None,
avoid_negative_ts: int | None| Literal["auto", "disabled", "make_non_negative", "make_zero"] = None,
dump_separator: str | None = None,
) -> FFMpegAVFormatContextEncoderOption:
    """
        Encoder format context options.

        Args:
            avioflags: (default 0),
            packetsize: set packet size (from 0 to INT_MAX) (default 0),
            fflags: (default autobsf),
            fdebug: print specific debug info (default 0),
            max_delay: maximum muxing or demuxing delay in microseconds (from -1 to INT_MAX) (default -1),
            start_time_realtime: wall-clock time when stream begins (PTS==0) (from I64_MIN to I64_MAX) (default I64_MIN),
            audio_preload: microseconds by which audio packets should be interleaved earlier (from 0 to 2.14748e+09) (default 0),
            chunk_duration: microseconds for each chunk (from 0 to 2.14748e+09) (default 0),
            chunk_size: size in bytes for each chunk (from 0 to 2.14748e+09) (default 0),
            flush_packets: enable flushing of the I/O context after each packet (from -1 to 1) (default -1),
            metadata_header_padding: set number of bytes to be written as padding in a metadata header (from -1 to INT_MAX) (default -1),
            output_ts_offset: set output timestamp offset (default 0),
            max_interleave_delta: maximum buffering duration for interleaving (from 0 to I64_MAX) (default 10000000),
            f_strict: how strictly to follow the standards (deprecated; use strict, save via avconv) (from INT_MIN to INT_MAX) (default normal),
            strict: how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal),
            avoid_negative_ts: shift timestamps so they start at 0 (from -1 to 2) (default auto),
            dump_separator: set information dump field separator (default ", "),

        Returns:
            FFMpegAVFormatContextEncoderOption

    """

    return FFMpegAVFormatContextEncoderOption(merge({
        "avioflags": avioflags,
        "packetsize": packetsize,
        "fflags": fflags,
        "fdebug": fdebug,
        "max_delay": max_delay,
        "start_time_realtime": start_time_realtime,
        "audio_preload": audio_preload,
        "chunk_duration": chunk_duration,
        "chunk_size": chunk_size,
        "flush_packets": flush_packets,
        "metadata_header_padding": metadata_header_padding,
        "output_ts_offset": output_ts_offset,
        "max_interleave_delta": max_interleave_delta,
        "f_strict": f_strict,
        "strict": strict,
        "avoid_negative_ts": avoid_negative_ts,
        "dump_separator": dump_separator,
    }))


def decoder_format_context(
*,
avioflags: str | None = None,
probesize: int | None = None,
formatprobesize: int | None = None,
fflags: str | None = None,
seek2any: bool | None = None,
analyzeduration: int | None = None,
cryptokey: str | None = None,
indexmem: int | None = None,
rtbufsize: int | None = None,
fdebug: str | None = None,
max_delay: int | None = None,
fpsprobesize: int | None = None,
f_err_detect: str | None = None,
err_detect: str | None = None,
use_wallclock_as_timestamps: bool | None = None,
skip_initial_bytes: int | None = None,
correct_ts_overflow: bool | None = None,
f_strict: int | None| Literal["very", "strict", "normal", "unofficial", "experimental"] = None,
strict: int | None| Literal["very", "strict", "normal", "unofficial", "experimental"] = None,
max_ts_probe: int | None = None,
dump_separator: str | None = None,
codec_whitelist: str | None = None,
format_whitelist: str | None = None,
protocol_whitelist: str | None = None,
protocol_blacklist: str | None = None,
max_streams: int | None = None,
skip_estimate_duration_from_pts: bool | None = None,
max_probe_packets: int | None = None,
) -> FFMpegAVFormatContextDecoderOption:
    """
        Decoder format context options.

        Args:
            avioflags: (default 0),
            probesize: set probing size (from 32 to I64_MAX) (default 5000000),
            formatprobesize: number of bytes to probe file format (from 0 to 2.14748e+09) (default 1048576),
            fflags: (default autobsf),
            seek2any: allow seeking to non-keyframes on demuxer level when supported (default false),
            analyzeduration: specify how many microseconds are analyzed to probe the input (from 0 to I64_MAX) (default 0),
            cryptokey: decryption key,
            indexmem: max memory used for timestamp index (per stream) (from 0 to INT_MAX) (default 1048576),
            rtbufsize: max memory used for buffering real-time frames (from 0 to INT_MAX) (default 3041280),
            fdebug: print specific debug info (default 0),
            max_delay: maximum muxing or demuxing delay in microseconds (from -1 to INT_MAX) (default -1),
            fpsprobesize: number of frames used to probe fps (from -1 to 2.14748e+09) (default -1),
            f_err_detect: set error detection flags (deprecated; use err_detect, save via avconv) (default crccheck),
            err_detect: set error detection flags (default crccheck),
            use_wallclock_as_timestamps: use wallclock as timestamps (default false),
            skip_initial_bytes: set number of bytes to skip before reading header and frames (from 0 to I64_MAX) (default 0),
            correct_ts_overflow: correct single timestamp overflows (default true),
            f_strict: how strictly to follow the standards (deprecated; use strict, save via avconv) (from INT_MIN to INT_MAX) (default normal),
            strict: how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal),
            max_ts_probe: maximum number of packets to read while waiting for the first timestamp (from 0 to INT_MAX) (default 50),
            dump_separator: set information dump field separator (default ", "),
            codec_whitelist: List of decoders that are allowed to be used,
            format_whitelist: List of demuxers that are allowed to be used,
            protocol_whitelist: List of protocols that are allowed to be used,
            protocol_blacklist: List of protocols that are not allowed to be used,
            max_streams: maximum number of streams (from 0 to INT_MAX) (default 1000),
            skip_estimate_duration_from_pts: skip duration calculation in estimate_timings_from_pts (default false),
            max_probe_packets: Maximum number of packets to probe a codec (from 0 to INT_MAX) (default 2500),

        Returns:
            FFMpegAVFormatContextDecoderOption

    """

    return FFMpegAVFormatContextDecoderOption(merge({
        "avioflags": avioflags,
        "probesize": probesize,
        "formatprobesize": formatprobesize,
        "fflags": fflags,
        "seek2any": seek2any,
        "analyzeduration": analyzeduration,
        "cryptokey": cryptokey,
        "indexmem": indexmem,
        "rtbufsize": rtbufsize,
        "fdebug": fdebug,
        "max_delay": max_delay,
        "fpsprobesize": fpsprobesize,
        "f_err_detect": f_err_detect,
        "err_detect": err_detect,
        "use_wallclock_as_timestamps": use_wallclock_as_timestamps,
        "skip_initial_bytes": skip_initial_bytes,
        "correct_ts_overflow": correct_ts_overflow,
        "f_strict": f_strict,
        "strict": strict,
        "max_ts_probe": max_ts_probe,
        "dump_separator": dump_separator,
        "codec_whitelist": codec_whitelist,
        "format_whitelist": format_whitelist,
        "protocol_whitelist": protocol_whitelist,
        "protocol_blacklist": protocol_blacklist,
        "max_streams": max_streams,
        "skip_estimate_duration_from_pts": skip_estimate_duration_from_pts,
        "max_probe_packets": max_probe_packets,
    }))
