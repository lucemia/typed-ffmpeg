// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg format context options.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegAVFormatContextEncoderOption = Readonly<Record<string, unknown>>;
export type FFMpegAVFormatContextDecoderOption = Readonly<Record<string, unknown>>;

/**
 * Encoder format context options.
 * @param options.avioflags - (default 0)
 * @param options.packetsize - set packet size (from 0 to INT_MAX) (default 0)
 * @param options.fflags - (default autobsf)
 * @param options.fdebug - print specific debug info (default 0)
 * @param options.max_delay - maximum muxing or demuxing delay in microseconds (from -1 to INT_MAX) (default -1)
 * @param options.start_time_realtime - wall-clock time when stream begins (PTS==0) (from I64_MIN to I64_MAX) (default I64_MIN)
 * @param options.audio_preload - microseconds by which audio packets should be interleaved earlier (from 0 to 2.14748e+09) (default 0)
 * @param options.chunk_duration - microseconds for each chunk (from 0 to 2.14748e+09) (default 0)
 * @param options.chunk_size - size in bytes for each chunk (from 0 to 2.14748e+09) (default 0)
 * @param options.flush_packets - enable flushing of the I/O context after each packet (from -1 to 1) (default -1)
 * @param options.metadata_header_padding - set number of bytes to be written as padding in a metadata header (from -1 to INT_MAX) (default -1)
 * @param options.output_ts_offset - set output timestamp offset (default 0)
 * @param options.max_interleave_delta - maximum buffering duration for interleaving (from 0 to I64_MAX) (default 10000000)
 * @param options.f_strict - how strictly to follow the standards (deprecated; use strict, save via avconv) (from INT_MIN to INT_MAX) (default normal)
 * @param options.strict - how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal)
 * @param options.avoid_negative_ts - shift timestamps so they start at 0 (from -1 to 2) (default auto)
 * @param options.dump_separator - set information dump field separator (default ", ")
 */
export function encoderFormatContext(options?: {
  avioflags?: string | null;
  packetsize?: number | null;
  fflags?: string | null;
  fdebug?: string | null;
  max_delay?: number | null;
  start_time_realtime?: number | null;
  audio_preload?: number | null;
  chunk_duration?: number | null;
  chunk_size?: number | null;
  flush_packets?: number | null;
  metadata_header_padding?: number | null;
  output_ts_offset?: string | null;
  max_interleave_delta?: number | null;
  f_strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  avoid_negative_ts?: number | null | "auto" | "disabled" | "make_non_negative" | "make_zero";
  dump_separator?: string | null;
}): FFMpegAVFormatContextEncoderOption {
  return merge({
    "avioflags": options?.avioflags,
    "packetsize": options?.packetsize,
    "fflags": options?.fflags,
    "fdebug": options?.fdebug,
    "max_delay": options?.max_delay,
    "start_time_realtime": options?.start_time_realtime,
    "audio_preload": options?.audio_preload,
    "chunk_duration": options?.chunk_duration,
    "chunk_size": options?.chunk_size,
    "flush_packets": options?.flush_packets,
    "metadata_header_padding": options?.metadata_header_padding,
    "output_ts_offset": options?.output_ts_offset,
    "max_interleave_delta": options?.max_interleave_delta,
    "f_strict": options?.f_strict,
    "strict": options?.strict,
    "avoid_negative_ts": options?.avoid_negative_ts,
    "dump_separator": options?.dump_separator,
  });
}

/**
 * Decoder format context options.
 * @param options.avioflags - (default 0)
 * @param options.probesize - set probing size (from 32 to I64_MAX) (default 5000000)
 * @param options.formatprobesize - number of bytes to probe file format (from 0 to 2.14748e+09) (default 1048576)
 * @param options.fflags - (default autobsf)
 * @param options.seek2any - allow seeking to non-keyframes on demuxer level when supported (default false)
 * @param options.analyzeduration - specify how many microseconds are analyzed to probe the input (from 0 to I64_MAX) (default 0)
 * @param options.cryptokey - decryption key
 * @param options.indexmem - max memory used for timestamp index (per stream) (from 0 to INT_MAX) (default 1048576)
 * @param options.rtbufsize - max memory used for buffering real-time frames (from 0 to INT_MAX) (default 3041280)
 * @param options.fdebug - print specific debug info (default 0)
 * @param options.max_delay - maximum muxing or demuxing delay in microseconds (from -1 to INT_MAX) (default -1)
 * @param options.fpsprobesize - number of frames used to probe fps (from -1 to 2.14748e+09) (default -1)
 * @param options.f_err_detect - set error detection flags (deprecated; use err_detect, save via avconv) (default crccheck)
 * @param options.err_detect - set error detection flags (default crccheck)
 * @param options.use_wallclock_as_timestamps - use wallclock as timestamps (default false)
 * @param options.skip_initial_bytes - set number of bytes to skip before reading header and frames (from 0 to I64_MAX) (default 0)
 * @param options.correct_ts_overflow - correct single timestamp overflows (default true)
 * @param options.f_strict - how strictly to follow the standards (deprecated; use strict, save via avconv) (from INT_MIN to INT_MAX) (default normal)
 * @param options.strict - how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal)
 * @param options.max_ts_probe - maximum number of packets to read while waiting for the first timestamp (from 0 to INT_MAX) (default 50)
 * @param options.dump_separator - set information dump field separator (default ", ")
 * @param options.codec_whitelist - List of decoders that are allowed to be used
 * @param options.format_whitelist - List of demuxers that are allowed to be used
 * @param options.protocol_whitelist - List of protocols that are allowed to be used
 * @param options.protocol_blacklist - List of protocols that are not allowed to be used
 * @param options.max_streams - maximum number of streams (from 0 to INT_MAX) (default 1000)
 * @param options.skip_estimate_duration_from_pts - skip duration calculation in estimate_timings_from_pts (default false)
 * @param options.max_probe_packets - Maximum number of packets to probe a codec (from 0 to INT_MAX) (default 2500)
 * @param options.duration_probesize - Maximum number of bytes to probe the durations of the streams in estimate_timings_from_pts (from 0 to I64_MAX) (default 0)
 */
export function decoderFormatContext(options?: {
  avioflags?: string | null;
  probesize?: number | null;
  formatprobesize?: number | null;
  fflags?: string | null;
  seek2any?: boolean | null;
  analyzeduration?: number | null;
  cryptokey?: string | null;
  indexmem?: number | null;
  rtbufsize?: number | null;
  fdebug?: string | null;
  max_delay?: number | null;
  fpsprobesize?: number | null;
  f_err_detect?: string | null;
  err_detect?: string | null;
  use_wallclock_as_timestamps?: boolean | null;
  skip_initial_bytes?: number | null;
  correct_ts_overflow?: boolean | null;
  f_strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  max_ts_probe?: number | null;
  dump_separator?: string | null;
  codec_whitelist?: string | null;
  format_whitelist?: string | null;
  protocol_whitelist?: string | null;
  protocol_blacklist?: string | null;
  max_streams?: number | null;
  skip_estimate_duration_from_pts?: boolean | null;
  max_probe_packets?: number | null;
  duration_probesize?: number | null;
}): FFMpegAVFormatContextDecoderOption {
  return merge({
    "avioflags": options?.avioflags,
    "probesize": options?.probesize,
    "formatprobesize": options?.formatprobesize,
    "fflags": options?.fflags,
    "seek2any": options?.seek2any,
    "analyzeduration": options?.analyzeduration,
    "cryptokey": options?.cryptokey,
    "indexmem": options?.indexmem,
    "rtbufsize": options?.rtbufsize,
    "fdebug": options?.fdebug,
    "max_delay": options?.max_delay,
    "fpsprobesize": options?.fpsprobesize,
    "f_err_detect": options?.f_err_detect,
    "err_detect": options?.err_detect,
    "use_wallclock_as_timestamps": options?.use_wallclock_as_timestamps,
    "skip_initial_bytes": options?.skip_initial_bytes,
    "correct_ts_overflow": options?.correct_ts_overflow,
    "f_strict": options?.f_strict,
    "strict": options?.strict,
    "max_ts_probe": options?.max_ts_probe,
    "dump_separator": options?.dump_separator,
    "codec_whitelist": options?.codec_whitelist,
    "format_whitelist": options?.format_whitelist,
    "protocol_whitelist": options?.protocol_whitelist,
    "protocol_blacklist": options?.protocol_blacklist,
    "max_streams": options?.max_streams,
    "skip_estimate_duration_from_pts": options?.skip_estimate_duration_from_pts,
    "max_probe_packets": options?.max_probe_packets,
    "duration_probesize": options?.duration_probesize,
  });
}
