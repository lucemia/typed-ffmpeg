// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg muxer option factories.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegMuxerOption = Readonly<Record<string, unknown>>;







/**
 * 3GP2 (3GPP2 file format)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function _3g2(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * 3GP (3GPP file format)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function _3gp(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * a64 - video for Commodore 64
 */
export function a64(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw AC-3
 */
export function ac3(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw AC-4
 * @param options.write_crc - enable checksum (default false)
 */
export function ac4(options?: {
  write_crc?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "write_crc": options?.write_crc,

  });
}







/**
 * ADTS AAC (Advanced Audio Coding)
 * @param options.write_id3v2 - Enable ID3v2 tag writing (default false)
 * @param options.write_apetag - Enable APE tag writing (default false)
 * @param options.write_mpeg2 - Set MPEG version to MPEG-2 (default false)
 */
export function adts(options?: {
  write_id3v2?: boolean | null;
  write_apetag?: boolean | null;
  write_mpeg2?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "write_id3v2": options?.write_id3v2,
    "write_apetag": options?.write_apetag,
    "write_mpeg2": options?.write_mpeg2,

  });
}







/**
 * CRI ADX
 */
export function adx(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MD STUDIO audio
 */
export function aea(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Audio IFF
 * @param options.write_id3v2 - Enable ID3 tags writing. (default false)
 * @param options.id3v2_version - Select ID3v2 version to write. Currently 3 and 4 are supported. (from 3 to 4) (default 4)
 */
export function aiff(options?: {
  write_id3v2?: boolean | null;
  id3v2_version?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "write_id3v2": options?.write_id3v2,
    "id3v2_version": options?.id3v2_version,

  });
}







/**
 * PCM A-law
 */
export function alaw(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * LEGO Racers ALP
 * @param options._type - set file type (from 0 to 2) (default auto)
 */
export function alp(options?: {
  _type?: number | null | "auto" | "tun" | "pcm";

}): FFMpegMuxerOption {
  return merge({
    "type": options?._type,

  });
}







/**
 * 3GPP AMR
 */
export function amr(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * AMV
 */
export function amv(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Ubisoft Rayman 2 APM
 */
export function apm(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Animated Portable Network Graphics
 * @param options.plays - Number of times to play the output: 0 - infinite loop, 1 - no loop (from 0 to 65535) (default 1)
 * @param options.final_delay - Force delay after the last frame (from 0 to 65535) (default 0/1)
 */
export function apng(options?: {
  plays?: number | null;
  final_delay?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "plays": options?.plays,
    "final_delay": options?.final_delay,

  });
}







/**
 * raw aptX (Audio Processing Technology for Bluetooth)
 */
export function aptx(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw aptX HD (Audio Processing Technology for Bluetooth)
 */
export function aptx_hd(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * APV raw bitstream
 */
export function apv(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Argonaut Games ASF
 * @param options.version_major - override file major version (from 0 to 65535) (default 2)
 * @param options.version_minor - override file minor version (from 0 to 65535) (default 1)
 * @param options.name - embedded file name (max 8 characters)
 */
export function argo_asf(options?: {
  version_major?: number | null;
  version_minor?: number | null;
  name?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "version_major": options?.version_major,
    "version_minor": options?.version_minor,
    "name": options?.name,

  });
}







/**
 * Argonaut Games CVG
 * @param options.skip_rate_check - skip sample rate check (default false)
 * @param options.loop - set loop flag (default false)
 * @param options.reverb - set reverb flag (default true)
 */
export function argo_cvg(options?: {
  skip_rate_check?: boolean | null;
  loop?: boolean | null;
  reverb?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "skip_rate_check": options?.skip_rate_check,
    "loop": options?.loop,
    "reverb": options?.reverb,

  });
}







/**
 * ASF (Advanced / Active Streaming Format)
 * @param options.packet_size - Packet size (from 100 to 65536) (default 3200)
 */
export function asf(options?: {
  packet_size?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "packet_size": options?.packet_size,

  });
}







/**
 * ASF (Advanced / Active Streaming Format)
 * @param options.packet_size - Packet size (from 100 to 65536) (default 3200)
 */
export function asf_stream(options?: {
  packet_size?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "packet_size": options?.packet_size,

  });
}







/**
 * SSA (SubStation Alpha) subtitle
 * @param options.ignore_readorder - write events immediately, even if they're out-of-order (default false)
 */
export function ass(options?: {
  ignore_readorder?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "ignore_readorder": options?.ignore_readorder,

  });
}







/**
 * AST (Audio Stream)
 * @param options.loopstart - Loopstart position in milliseconds. (from -1 to INT_MAX) (default -1)
 * @param options.loopend - Loopend position in milliseconds. (from 0 to INT_MAX) (default 0)
 */
export function ast(options?: {
  loopstart?: number | null;
  loopend?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "loopstart": options?.loopstart,
    "loopend": options?.loopend,

  });
}







/**
 * Sun AU
 */
export function au(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * AVI (Audio Video Interleaved)
 * @param options.reserve_index_space - reserve space (in bytes) at the beginning of the file for each stream index (from 0 to INT_MAX) (default 0)
 * @param options.write_channel_mask - write channel mask into wave format header (default true)
 * @param options.flipped_raw_rgb - Raw RGB bitmaps are stored bottom-up (default false)
 */
export function avi(options?: {
  reserve_index_space?: number | null;
  write_channel_mask?: boolean | null;
  flipped_raw_rgb?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "reserve_index_space": options?.reserve_index_space,
    "write_channel_mask": options?.write_channel_mask,
    "flipped_raw_rgb": options?.flipped_raw_rgb,

  });
}







/**
 * AVIF
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.loop - Number of times to loop animated AVIF: 0 - infinite loop (from 0 to INT_MAX) (default 0)
 */
export function avif(options?: {
  movie_timescale?: number | null;
  loop?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "movie_timescale": options?.movie_timescale,
    "loop": options?.loop,

  });
}







/**
 * SWF (ShockWave Flash) (AVM2)
 */
export function avm2(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw AVS2-P2/IEEE1857.4 video
 */
export function avs2(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * AVS3-P2/IEEE1857.10
 */
export function avs3(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * G.729 BIT file format
 */
export function bit(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Apple CAF (Core Audio Format)
 */
export function caf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw Chinese AVS (Audio Video Standard) video
 */
export function cavsvideo(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * codec2 .c2 muxer
 */
export function codec2(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw codec2 muxer
 */
export function codec2raw(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * CRC testing
 */
export function crc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * DASH Muxer
 * @param options.adaptation_sets - Adaptation sets. Syntax: id=0,streams=0,1,2 id=1,streams=3,4 and so on
 * @param options.dash_segment_type - set dash segment files type (from 0 to 2) (default auto)
 * @param options.extra_window_size - number of segments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
 * @param options.format_options - set list of options for the container format (mp4/webm) used for dash
 * @param options.frag_duration - fragment duration (in seconds, fractional value can be set) (default 0)
 * @param options.frag_type - set type of interval for fragments (from 0 to 3) (default none)
 * @param options.global_sidx - Write global SIDX atom. Applicable only for single file, mp4 output, non-streaming mode (default false)
 * @param options.hls_master_name - HLS master playlist name (default "master.m3u8")
 * @param options.hls_playlist - Generate HLS playlist files(master.m3u8, media_%d.m3u8) (default false)
 * @param options.http_opts - HTTP protocol options
 * @param options.http_persistent - Use persistent HTTP connections (default false)
 * @param options.http_user_agent - override User-Agent field in HTTP header
 * @param options.ignore_io_errors - Ignore IO errors during open and write. Useful for long-duration runs with network output (default false)
 * @param options.index_correction - Enable/Disable segment index correction logic (default false)
 * @param options.init_seg_name - DASH-templated name to used for the initialization segment (default "init-stream$RepresentationID$.$ext$")
 * @param options.ldash - Enable Low-latency dash. Constrains the value of a few elements (default false)
 * @param options.lhls - Enable Low-latency HLS(Experimental). Adds #EXT-X-PREFETCH tag with current segment's URI (default false)
 * @param options.master_m3u8_publish_rate - Publish master playlist every after this many segment intervals (from 0 to UINT32_MAX) (default 0)
 * @param options.max_playback_rate - Set desired maximum playback rate (from 0.5 to 1.5) (default 1/1)
 * @param options.media_seg_name - DASH-templated name to used for the media segments (default "chunk-stream$RepresentationID$-$Number%05d$.$ext$")
 * @param options.method - set the HTTP method
 * @param options.min_playback_rate - Set desired minimum playback rate (from 0.5 to 1.5) (default 1/1)
 * @param options.mpd_profile - Set profiles. Elements and values used in the manifest may be constrained by them (default dash)
 * @param options.remove_at_exit - remove all segments when finished (default false)
 * @param options.seg_duration - segment duration (in seconds, fractional value can be set) (default 5)
 * @param options.single_file - Store all segments in one file, accessed using byte ranges (default false)
 * @param options.single_file_name - DASH-templated name to be used for baseURL. Implies storing all segments in one file, accessed using byte ranges
 * @param options.streaming - Enable/Disable streaming mode of output. Each frame will be moof fragment (default false)
 * @param options.target_latency - Set desired target latency for Low-latency dash (default 0)
 * @param options.timeout - set timeout for socket I/O operations (default -0.000001)
 * @param options.update_period - Set the mpd update interval (from 0 to I64_MAX) (default 0)
 * @param options.use_template - Use SegmentTemplate instead of SegmentList (default true)
 * @param options.use_timeline - Use SegmentTimeline in SegmentTemplate (default true)
 * @param options.utc_timing_url - URL of the page that will return the UTC timestamp in ISO format
 * @param options.window_size - number of segments kept in the manifest (from 0 to INT_MAX) (default 0)
 * @param options.write_prft - Write producer reference time element (default auto)
 */
export function dash(options?: {
  adaptation_sets?: string | null;
  dash_segment_type?: number | null | "auto" | "mp4" | "webm";
  extra_window_size?: number | null;
  format_options?: string | null;
  frag_duration?: string | null;
  frag_type?: number | null | "none" | "every_frame" | "duration" | "pframes";
  global_sidx?: boolean | null;
  hls_master_name?: string | null;
  hls_playlist?: boolean | null;
  http_opts?: string | null;
  http_persistent?: boolean | null;
  http_user_agent?: string | null;
  ignore_io_errors?: boolean | null;
  index_correction?: boolean | null;
  init_seg_name?: string | null;
  ldash?: boolean | null;
  lhls?: boolean | null;
  master_m3u8_publish_rate?: number | null;
  max_playback_rate?: string | null;
  media_seg_name?: string | null;
  method?: string | null;
  min_playback_rate?: string | null;
  mpd_profile?: string | null;
  remove_at_exit?: boolean | null;
  seg_duration?: string | null;
  single_file?: boolean | null;
  single_file_name?: string | null;
  streaming?: boolean | null;
  target_latency?: string | null;
  timeout?: string | null;
  update_period?: number | null;
  use_template?: boolean | null;
  use_timeline?: boolean | null;
  utc_timing_url?: string | null;
  window_size?: number | null;
  write_prft?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "adaptation_sets": options?.adaptation_sets,
    "dash_segment_type": options?.dash_segment_type,
    "extra_window_size": options?.extra_window_size,
    "format_options": options?.format_options,
    "frag_duration": options?.frag_duration,
    "frag_type": options?.frag_type,
    "global_sidx": options?.global_sidx,
    "hls_master_name": options?.hls_master_name,
    "hls_playlist": options?.hls_playlist,
    "http_opts": options?.http_opts,
    "http_persistent": options?.http_persistent,
    "http_user_agent": options?.http_user_agent,
    "ignore_io_errors": options?.ignore_io_errors,
    "index_correction": options?.index_correction,
    "init_seg_name": options?.init_seg_name,
    "ldash": options?.ldash,
    "lhls": options?.lhls,
    "master_m3u8_publish_rate": options?.master_m3u8_publish_rate,
    "max_playback_rate": options?.max_playback_rate,
    "media_seg_name": options?.media_seg_name,
    "method": options?.method,
    "min_playback_rate": options?.min_playback_rate,
    "mpd_profile": options?.mpd_profile,
    "remove_at_exit": options?.remove_at_exit,
    "seg_duration": options?.seg_duration,
    "single_file": options?.single_file,
    "single_file_name": options?.single_file_name,
    "streaming": options?.streaming,
    "target_latency": options?.target_latency,
    "timeout": options?.timeout,
    "update_period": options?.update_period,
    "use_template": options?.use_template,
    "use_timeline": options?.use_timeline,
    "utc_timing_url": options?.utc_timing_url,
    "window_size": options?.window_size,
    "write_prft": options?.write_prft,

  });
}







/**
 * raw data
 */
export function data(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * D-Cinema audio
 */
export function daud(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw DFPWM1a
 */
export function dfpwm(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw Dirac
 */
export function dirac(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw DNxHD (SMPTE VC-3)
 */
export function dnxhd(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw DTS
 */
export function dts(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * DV (Digital Video)
 */
export function dv(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MPEG-2 PS (DVD VOB)
 * @param options.muxrate - mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
 * @param options.preload - initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)
 */
export function dvd(options?: {
  muxrate?: number | null;
  preload?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "muxrate": options?.muxrate,
    "preload": options?.preload,

  });
}







/**
 * raw E-AC-3
 */
export function eac3(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw EVC video
 */
export function evc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating-point big-endian
 */
export function f32be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating-point little-endian
 */
export function f32le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * F4V Adobe Flash Video
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function f4v(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * PCM 64-bit floating-point big-endian
 */
export function f64be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM 64-bit floating-point little-endian
 */
export function f64le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * fbdev           Linux framebuffer
 */
export function d(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * FFmpeg metadata in text
 */
export function ffmetadata(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * FIFO queue pseudo-muxer
 * @param options.attempt_recovery - Attempt recovery in case of failure (default false)
 * @param options.drop_pkts_on_overflow - Drop packets on fifo queue overflow not to block encoder (default false)
 * @param options.fifo_format - Target muxer
 * @param options.format_opts - Options to be passed to underlying muxer
 * @param options.max_recovery_attempts - Maximal number of recovery attempts (from 0 to INT_MAX) (default 0)
 * @param options.queue_size - Size of fifo queue (from 1 to INT_MAX) (default 60)
 * @param options.recovery_wait_streamtime - Use stream time instead of real time while waiting for recovery (default false)
 * @param options.recovery_wait_time - Waiting time between recovery attempts (default 5)
 * @param options.recover_any_error - Attempt recovery regardless of type of the error (default false)
 * @param options.restart_with_keyframe - Wait for keyframe when restarting output (default false)
 * @param options.timeshift - Delay fifo output (default 0)
 */
export function fifo(options?: {
  attempt_recovery?: boolean | null;
  drop_pkts_on_overflow?: boolean | null;
  fifo_format?: string | null;
  format_opts?: string | null;
  max_recovery_attempts?: number | null;
  queue_size?: number | null;
  recovery_wait_streamtime?: boolean | null;
  recovery_wait_time?: string | null;
  recover_any_error?: boolean | null;
  restart_with_keyframe?: boolean | null;
  timeshift?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "attempt_recovery": options?.attempt_recovery,
    "drop_pkts_on_overflow": options?.drop_pkts_on_overflow,
    "fifo_format": options?.fifo_format,
    "format_opts": options?.format_opts,
    "max_recovery_attempts": options?.max_recovery_attempts,
    "queue_size": options?.queue_size,
    "recovery_wait_streamtime": options?.recovery_wait_streamtime,
    "recovery_wait_time": options?.recovery_wait_time,
    "recover_any_error": options?.recover_any_error,
    "restart_with_keyframe": options?.restart_with_keyframe,
    "timeshift": options?.timeshift,

  });
}







/**
 * Sega FILM / CPK
 */
export function film_cpk(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Adobe Filmstrip
 */
export function filmstrip(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Flexible Image Transport System
 */
export function fits(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw FLAC
 * @param options.write_header - Write the file header (default true)
 */
export function flac(options?: {
  write_header?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "write_header": options?.write_header,

  });
}







/**
 * FLV (Flash Video)
 * @param options.flvflags - FLV muxer flags (default 0)
 */
export function flv(options?: {
  flvflags?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "flvflags": options?.flvflags,

  });
}







/**
 * framecrc testing
 */
export function framecrc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Per-frame hash testing
 * @param options.hash - set hash to use (default "sha256")
 * @param options.format_version - file format version (from 1 to 2) (default 2)
 */
export function framehash(options?: {
  hash?: string | null;
  format_version?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "hash": options?.hash,
    "format_version": options?.format_version,

  });
}







/**
 * Per-frame MD5 testing
 * @param options.hash - set hash to use (default "md5")
 * @param options.format_version - file format version (from 1 to 2) (default 2)
 */
export function framemd5(options?: {
  hash?: string | null;
  format_version?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "hash": options?.hash,
    "format_version": options?.format_version,

  });
}







/**
 * raw G.722
 */
export function g722(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw G.723.1
 */
export function g723_1(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw big-endian G.726 ("left-justified")
 */
export function g726(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw little-endian G.726 ("right-justified")
 */
export function g726le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * CompuServe Graphics Interchange Format (GIF)
 * @param options.loop - Number of times to loop the output: -1 - no loop, 0 - infinite loop (from -1 to 65535) (default 0)
 * @param options.final_delay - Force delay (in centiseconds) after the last frame (from -1 to 65535) (default -1)
 */
export function gif(options?: {
  loop?: number | null;
  final_delay?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "loop": options?.loop,
    "final_delay": options?.final_delay,

  });
}







/**
 * raw GSM
 */
export function gsm(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * GXF (General eXchange Format)
 */
export function gxf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw H.261
 */
export function h261(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw H.263
 */
export function h263(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw H.264 video
 */
export function h264(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Hash testing
 * @param options.hash - set hash to use (default "sha256")
 */
export function hash(options?: {
  hash?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "hash": options?.hash,

  });
}







/**
 * HDS Muxer
 * @param options.window_size - number of fragments kept in the manifest (from 0 to INT_MAX) (default 0)
 * @param options.extra_window_size - number of fragments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
 * @param options.min_frag_duration - minimum fragment duration (in microseconds) (from 0 to INT_MAX) (default 10000000)
 * @param options.remove_at_exit - remove all fragments when finished (default false)
 */
export function hds(options?: {
  window_size?: number | null;
  extra_window_size?: number | null;
  min_frag_duration?: number | null;
  remove_at_exit?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "window_size": options?.window_size,
    "extra_window_size": options?.extra_window_size,
    "min_frag_duration": options?.min_frag_duration,
    "remove_at_exit": options?.remove_at_exit,

  });
}







/**
 * raw HEVC video
 */
export function hevc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Apple HTTP Live Streaming
 * @param options.start_number - set first number in the sequence (from 0 to I64_MAX) (default 0)
 * @param options.hls_time - set segment length (default 2)
 * @param options.hls_init_time - set segment length at init list (default 0)
 * @param options.hls_list_size - set maximum number of playlist entries (from 0 to INT_MAX) (default 5)
 * @param options.hls_delete_threshold - set number of unreferenced segments to keep before deleting (from 1 to INT_MAX) (default 1)
 * @param options.hls_vtt_options - set hls vtt list of options for the container format used for hls
 * @param options.hls_allow_cache - explicitly set whether the client MAY (1) or MUST NOT (0) cache media segments (from INT_MIN to INT_MAX) (default -1)
 * @param options.hls_base_url - url to prepend to each playlist entry
 * @param options.hls_segment_filename - filename template for segment files
 * @param options.hls_segment_options - set segments files format options of hls
 * @param options.hls_segment_size - maximum size per segment file, (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.hls_key_info_file - file with key URI and key file path
 * @param options.hls_enc - enable AES128 encryption support (default false)
 * @param options.hls_enc_key - hex-coded 16 byte key to encrypt the segments
 * @param options.hls_enc_key_url - url to access the key to decrypt the segments
 * @param options.hls_enc_iv - hex-coded 16 byte initialization vector
 * @param options.hls_subtitle_path - set path of hls subtitles
 * @param options.hls_segment_type - set hls segment files type (from 0 to 1) (default mpegts)
 * @param options.hls_fmp4_init_filename - set fragment mp4 file init filename (default "init.mp4")
 * @param options.hls_fmp4_init_resend - resend fragment mp4 init file after refresh m3u8 every time (default false)
 * @param options.hls_flags - set flags affecting HLS playlist and media file generation (default 0)
 * @param options.strftime - set filename expansion with strftime at segment creation (default false)
 * @param options.strftime_mkdir - create last directory component in strftime-generated filename (default false)
 * @param options.hls_playlist_type - set the HLS playlist type (from 0 to 2) (default 0)
 * @param options.method - set the HTTP method(default: PUT)
 * @param options.hls_start_number_source - set source of first number in sequence (from 0 to 3) (default generic)
 * @param options.http_user_agent - override User-Agent field in HTTP header
 * @param options.var_stream_map - Variant stream map string
 * @param options.cc_stream_map - Closed captions stream map string
 * @param options.master_pl_name - Create HLS master playlist with this name
 * @param options.master_pl_publish_rate - Publish master play list every after this many segment intervals (from 0 to UINT32_MAX) (default 0)
 * @param options.http_persistent - Use persistent HTTP connections (default false)
 * @param options.timeout - set timeout for socket I/O operations (default -0.000001)
 * @param options.ignore_io_errors - Ignore IO errors for stable long-duration runs with network output (default false)
 * @param options.headers - set custom HTTP headers, can override built in default headers
 */
export function hls(options?: {
  start_number?: number | null;
  hls_time?: string | null;
  hls_init_time?: string | null;
  hls_list_size?: number | null;
  hls_delete_threshold?: number | null;
  hls_vtt_options?: string | null;
  hls_allow_cache?: number | null;
  hls_base_url?: string | null;
  hls_segment_filename?: string | null;
  hls_segment_options?: string | null;
  hls_segment_size?: number | null;
  hls_key_info_file?: string | null;
  hls_enc?: boolean | null;
  hls_enc_key?: string | null;
  hls_enc_key_url?: string | null;
  hls_enc_iv?: string | null;
  hls_subtitle_path?: string | null;
  hls_segment_type?: number | null | "mpegts" | "fmp4";
  hls_fmp4_init_filename?: string | null;
  hls_fmp4_init_resend?: boolean | null;
  hls_flags?: string | null;
  strftime?: boolean | null;
  strftime_mkdir?: boolean | null;
  hls_playlist_type?: number | null | "event" | "vod";
  method?: string | null;
  hls_start_number_source?: number | null | "generic" | "epoch" | "epoch_us" | "datetime";
  http_user_agent?: string | null;
  var_stream_map?: string | null;
  cc_stream_map?: string | null;
  master_pl_name?: string | null;
  master_pl_publish_rate?: number | null;
  http_persistent?: boolean | null;
  timeout?: string | null;
  ignore_io_errors?: boolean | null;
  headers?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "start_number": options?.start_number,
    "hls_time": options?.hls_time,
    "hls_init_time": options?.hls_init_time,
    "hls_list_size": options?.hls_list_size,
    "hls_delete_threshold": options?.hls_delete_threshold,
    "hls_vtt_options": options?.hls_vtt_options,
    "hls_allow_cache": options?.hls_allow_cache,
    "hls_base_url": options?.hls_base_url,
    "hls_segment_filename": options?.hls_segment_filename,
    "hls_segment_options": options?.hls_segment_options,
    "hls_segment_size": options?.hls_segment_size,
    "hls_key_info_file": options?.hls_key_info_file,
    "hls_enc": options?.hls_enc,
    "hls_enc_key": options?.hls_enc_key,
    "hls_enc_key_url": options?.hls_enc_key_url,
    "hls_enc_iv": options?.hls_enc_iv,
    "hls_subtitle_path": options?.hls_subtitle_path,
    "hls_segment_type": options?.hls_segment_type,
    "hls_fmp4_init_filename": options?.hls_fmp4_init_filename,
    "hls_fmp4_init_resend": options?.hls_fmp4_init_resend,
    "hls_flags": options?.hls_flags,
    "strftime": options?.strftime,
    "strftime_mkdir": options?.strftime_mkdir,
    "hls_playlist_type": options?.hls_playlist_type,
    "method": options?.method,
    "hls_start_number_source": options?.hls_start_number_source,
    "http_user_agent": options?.http_user_agent,
    "var_stream_map": options?.var_stream_map,
    "cc_stream_map": options?.cc_stream_map,
    "master_pl_name": options?.master_pl_name,
    "master_pl_publish_rate": options?.master_pl_publish_rate,
    "http_persistent": options?.http_persistent,
    "timeout": options?.timeout,
    "ignore_io_errors": options?.ignore_io_errors,
    "headers": options?.headers,

  });
}







/**
 * Raw Immersive Audio Model and Formats
 */
export function iamf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Microsoft Windows ICO
 */
export function ico(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * iLBC storage
 */
export function ilbc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * image2 sequence
 * @param options.update - continuously overwrite one file (default false)
 * @param options.start_number - set first number in the sequence (from 0 to INT_MAX) (default 1)
 * @param options.strftime - use strftime for filename (default false)
 * @param options.frame_pts - use current frame pts for filename (default false)
 * @param options.atomic_writing - write files atomically (using temporary files and renames) (default false)
 * @param options.protocol_opts - specify protocol options for the opened files
 */
export function image2(options?: {
  update?: boolean | null;
  start_number?: number | null;
  strftime?: boolean | null;
  frame_pts?: boolean | null;
  atomic_writing?: boolean | null;
  protocol_opts?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "update": options?.update,
    "start_number": options?.start_number,
    "strftime": options?.strftime,
    "frame_pts": options?.frame_pts,
    "atomic_writing": options?.atomic_writing,
    "protocol_opts": options?.protocol_opts,

  });
}







/**
 * piped image2 sequence
 */
export function image2pipe(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * iPod H.264 MP4 (MPEG-4 Part 14)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function ipod(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * Berkeley/IRCAM/CARL Sound Format
 */
export function ircam(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * ISMV/ISMA (Smooth Streaming)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function ismv(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * On2 IVF
 */
export function ivf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * JACOsub subtitle format
 */
export function jacosub(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Simon & Schuster Interactive VAG
 */
export function kvag(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * LOAS/LATM
 * @param options.smc_interval - StreamMuxConfig interval. (from 1 to 65535) (default 20)
 */
export function latm(options?: {
  smc_interval?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "smc-interval": options?.smc_interval,

  });
}







/**
 * LC3 (Low Complexity Communication Codec)
 */
export function lc3(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * LRC lyrics
 * @param options.precision - precision of the fractional part of the timestamp, 2 for centiseconds (from 1 to 6) (default 2)
 */
export function lrc(options?: {
  precision?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "precision": options?.precision,

  });
}







/**
 * raw MPEG-4 video
 */
export function m4v(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Matroska
 * @param options.reserve_index_space - reserve a given amount of space (in bytes) at the beginning of the file for the index (cues) (from 0 to INT_MAX) (default 0)
 * @param options.cues_to_front - move Cues (the index) to the front by shifting data if necessary (default false)
 * @param options.cluster_size_limit - store at most the provided amount of bytes in a cluster (from -1 to INT_MAX) (default -1)
 * @param options.cluster_time_limit - store at most the provided number of milliseconds in a cluster (from -1 to I64_MAX) (default -1)
 * @param options.dash - create a WebM file conforming to WebM DASH specification (default false)
 * @param options.dash_track_number - track number for the DASH stream (from 1 to INT_MAX) (default 1)
 * @param options.live - write files assuming it is a live stream (default false)
 * @param options.allow_raw_vfw - allow raw VFW mode (default false)
 * @param options.flipped_raw_rgb - store raw RGB bitmaps in VFW mode in bottom-up mode (default false)
 * @param options.write_crc32 - write a CRC32 element inside every Level 1 element (default true)
 * @param options.default_mode - control how a track's FlagDefault is inferred (from 0 to 2) (default passthrough)
 */
export function matroska(options?: {
  reserve_index_space?: number | null;
  cues_to_front?: boolean | null;
  cluster_size_limit?: number | null;
  cluster_time_limit?: number | null;
  dash?: boolean | null;
  dash_track_number?: number | null;
  live?: boolean | null;
  allow_raw_vfw?: boolean | null;
  flipped_raw_rgb?: boolean | null;
  write_crc32?: boolean | null;
  default_mode?: number | null | "infer" | "infer_no_subs" | "passthrough";

}): FFMpegMuxerOption {
  return merge({
    "reserve_index_space": options?.reserve_index_space,
    "cues_to_front": options?.cues_to_front,
    "cluster_size_limit": options?.cluster_size_limit,
    "cluster_time_limit": options?.cluster_time_limit,
    "dash": options?.dash,
    "dash_track_number": options?.dash_track_number,
    "live": options?.live,
    "allow_raw_vfw": options?.allow_raw_vfw,
    "flipped_raw_rgb": options?.flipped_raw_rgb,
    "write_crc32": options?.write_crc32,
    "default_mode": options?.default_mode,

  });
}







/**
 * MacCaption
 * @param options.override_time_code_rate - override the `Time Code Rate` value in the output
 * @param options.use_u_alias - use the U alias for E1h 00h 00h 00h, disabled by default because some .mcc files disagree on whether it has 2 or 3 zero bytes (default false)
 * @param options.mcc_version - the mcc file format version (from 1 to 2) (default 2)
 * @param options.creation_program - the creation program
 * @param options.creation_time - the creation time (default "now")
 */
export function mcc(options?: {
  override_time_code_rate?: string | null;
  use_u_alias?: boolean | null;
  mcc_version?: number | null;
  creation_program?: string | null;
  creation_time?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "override_time_code_rate": options?.override_time_code_rate,
    "use_u_alias": options?.use_u_alias,
    "mcc_version": options?.mcc_version,
    "creation_program": options?.creation_program,
    "creation_time": options?.creation_time,

  });
}







/**
 * MD5 testing
 * @param options.hash - set hash to use (default "md5")
 */
export function md5(options?: {
  hash?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "hash": options?.hash,

  });
}







/**
 * MicroDVD subtitle format
 */
export function microdvd(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw MJPEG video
 */
export function mjpeg(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * extract pts as timecode v2 format, as defined by mkvtoolnix
 */
export function mkvtimestamp_v2(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw MLP
 */
export function mlp(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Yamaha SMAF
 */
export function mmf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * QuickTime / MOV
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function mov(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * MP2 (MPEG audio layer 2)
 */
export function mp2(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MP3 (MPEG audio layer 3)
 * @param options.id3v2_version - Select ID3v2 version to write. Currently 3 and 4 are supported. (from 0 to 4) (default 4)
 * @param options.write_id3v1 - Enable ID3v1 writing. ID3v1 tags are written in UTF-8 which may not be supported by most software. (default false)
 * @param options.write_xing - Write the Xing header containing file duration. (default true)
 */
export function mp3(options?: {
  id3v2_version?: number | null;
  write_id3v1?: boolean | null;
  write_xing?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "id3v2_version": options?.id3v2_version,
    "write_id3v1": options?.write_id3v1,
    "write_xing": options?.write_xing,

  });
}







/**
 * MP4 (MPEG-4 Part 14)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function mp4(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * MPEG-1 Systems / MPEG program stream
 * @param options.muxrate - mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
 * @param options.preload - initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)
 */
export function mpeg(options?: {
  muxrate?: number | null;
  preload?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "muxrate": options?.muxrate,
    "preload": options?.preload,

  });
}







/**
 * raw MPEG-1 video
 */
export function mpeg1video(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw MPEG-2 video
 */
export function mpeg2video(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MPEG-TS (MPEG-2 Transport Stream)
 * @param options.mpegts_transport_stream_id - Set transport_stream_id field. (from 1 to 65535) (default 1)
 * @param options.mpegts_original_network_id - Set original_network_id field. (from 1 to 65535) (default 65281)
 * @param options.mpegts_service_id - Set service_id field. (from 1 to 65535) (default 1)
 * @param options.mpegts_service_type - Set service_type field. (from 1 to 255) (default digital_tv)
 * @param options.mpegts_pmt_start_pid - Set the first pid of the PMT. (from 32 to 8186) (default 4096)
 * @param options.mpegts_start_pid - Set the first pid. (from 32 to 8186) (default 256)
 * @param options.mpegts_m2ts_mode - Enable m2ts mode. (default auto)
 * @param options.muxrate - (from 0 to INT_MAX) (default 1)
 * @param options.pes_payload_size - Minimum PES packet payload in bytes (from 0 to INT_MAX) (default 2930)
 * @param options.mpegts_flags - MPEG-TS muxing flags (default 0)
 * @param options.mpegts_copyts - don't offset dts/pts (default auto)
 * @param options.tables_version - set PAT, PMT, SDT and NIT version (from 0 to 31) (default 0)
 * @param options.omit_video_pes_length - Omit the PES packet length for video packets (default true)
 * @param options.pcr_period - PCR retransmission time in milliseconds (from -1 to INT_MAX) (default -1)
 * @param options.pat_period - PAT/PMT retransmission time limit in seconds (default 0.1)
 * @param options.sdt_period - SDT retransmission time limit in seconds (default 0.5)
 * @param options.nit_period - NIT retransmission time limit in seconds (default 0.5)
 */
export function mpegts(options?: {
  mpegts_transport_stream_id?: number | null;
  mpegts_original_network_id?: number | null;
  mpegts_service_id?: number | null;
  mpegts_service_type?: number | null | "digital_tv" | "digital_radio" | "teletext" | "advanced_codec_digital_radio" | "mpeg2_digital_hdtv" | "advanced_codec_digital_sdtv" | "advanced_codec_digital_hdtv" | "hevc_digital_hdtv";
  mpegts_pmt_start_pid?: number | null;
  mpegts_start_pid?: number | null;
  mpegts_m2ts_mode?: boolean | null;
  muxrate?: number | null;
  pes_payload_size?: number | null;
  mpegts_flags?: string | null;
  mpegts_copyts?: boolean | null;
  tables_version?: number | null;
  omit_video_pes_length?: boolean | null;
  pcr_period?: number | null;
  pat_period?: string | null;
  sdt_period?: string | null;
  nit_period?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "mpegts_transport_stream_id": options?.mpegts_transport_stream_id,
    "mpegts_original_network_id": options?.mpegts_original_network_id,
    "mpegts_service_id": options?.mpegts_service_id,
    "mpegts_service_type": options?.mpegts_service_type,
    "mpegts_pmt_start_pid": options?.mpegts_pmt_start_pid,
    "mpegts_start_pid": options?.mpegts_start_pid,
    "mpegts_m2ts_mode": options?.mpegts_m2ts_mode,
    "muxrate": options?.muxrate,
    "pes_payload_size": options?.pes_payload_size,
    "mpegts_flags": options?.mpegts_flags,
    "mpegts_copyts": options?.mpegts_copyts,
    "tables_version": options?.tables_version,
    "omit_video_pes_length": options?.omit_video_pes_length,
    "pcr_period": options?.pcr_period,
    "pat_period": options?.pat_period,
    "sdt_period": options?.sdt_period,
    "nit_period": options?.nit_period,

  });
}







/**
 * MIME multipart JPEG
 * @param options.boundary_tag - Boundary tag (default "ffmpeg")
 */
export function mpjpeg(options?: {
  boundary_tag?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "boundary_tag": options?.boundary_tag,

  });
}







/**
 * PCM mu-law
 */
export function mulaw(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MXF (Material eXchange Format)
 * @param options.signal_standard - Force/set Signal Standard (from -1 to 7) (default -1)
 * @param options.store_user_comments - (default true)
 */
export function mxf(options?: {
  signal_standard?: number | null | "bt601" | "bt1358" | "smpte347m" | "smpte274m" | "smpte296m" | "smpte349m" | "smpte428";
  store_user_comments?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "signal_standard": options?.signal_standard,
    "store_user_comments": options?.store_user_comments,

  });
}







/**
 * MXF (Material eXchange Format) D-10 Mapping
 * @param options.d10_channelcount - Force/set channelcount in generic sound essence descriptor (from -1 to 8) (default -1)
 * @param options.signal_standard - Force/set Signal Standard (from -1 to 7) (default -1)
 * @param options.store_user_comments - (default false)
 */
export function mxf_d10(options?: {
  d10_channelcount?: number | null;
  signal_standard?: number | null | "bt601" | "bt1358" | "smpte347m" | "smpte274m" | "smpte296m" | "smpte349m" | "smpte428";
  store_user_comments?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "d10_channelcount": options?.d10_channelcount,
    "signal_standard": options?.signal_standard,
    "store_user_comments": options?.store_user_comments,

  });
}







/**
 * MXF (Material eXchange Format) Operational Pattern Atom
 * @param options.mxf_audio_edit_rate - Audio edit rate for timecode (from 0 to INT_MAX) (default 25/1)
 * @param options.signal_standard - Force/set Signal Standard (from -1 to 7) (default -1)
 * @param options.store_user_comments - (default true)
 */
export function mxf_opatom(options?: {
  mxf_audio_edit_rate?: string | null;
  signal_standard?: number | null | "bt601" | "bt1358" | "smpte347m" | "smpte274m" | "smpte296m" | "smpte349m" | "smpte428";
  store_user_comments?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "mxf_audio_edit_rate": options?.mxf_audio_edit_rate,
    "signal_standard": options?.signal_standard,
    "store_user_comments": options?.store_user_comments,

  });
}







/**
 * raw null video
 */
export function _null(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * NUT
 * @param options.syncpoints - NUT syncpoint behaviour (default 0)
 * @param options.write_index - Write index (default true)
 */
export function nut(options?: {
  syncpoints?: string | null;
  write_index?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "syncpoints": options?.syncpoints,
    "write_index": options?.write_index,

  });
}







/**
 * AV1 low overhead OBU
 */
export function obu(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Ogg Audio
 * @param options.serial_offset - serial number offset (from 0 to INT_MAX) (default 0)
 * @param options.oggpagesize - Set preferred Ogg page size. (from 0 to 65025) (default 0)
 * @param options.pagesize - preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
 * @param options.page_duration - preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)
 */
export function oga(options?: {
  serial_offset?: number | null;
  oggpagesize?: number | null;
  pagesize?: number | null;
  page_duration?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "serial_offset": options?.serial_offset,
    "oggpagesize": options?.oggpagesize,
    "pagesize": options?.pagesize,
    "page_duration": options?.page_duration,

  });
}







/**
 * Ogg
 * @param options.serial_offset - serial number offset (from 0 to INT_MAX) (default 0)
 * @param options.oggpagesize - Set preferred Ogg page size. (from 0 to 65025) (default 0)
 * @param options.pagesize - preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
 * @param options.page_duration - preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)
 */
export function ogg(options?: {
  serial_offset?: number | null;
  oggpagesize?: number | null;
  pagesize?: number | null;
  page_duration?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "serial_offset": options?.serial_offset,
    "oggpagesize": options?.oggpagesize,
    "pagesize": options?.pagesize,
    "page_duration": options?.page_duration,

  });
}







/**
 * Ogg Video
 * @param options.serial_offset - serial number offset (from 0 to INT_MAX) (default 0)
 * @param options.oggpagesize - Set preferred Ogg page size. (from 0 to 65025) (default 0)
 * @param options.pagesize - preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
 * @param options.page_duration - preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)
 */
export function ogv(options?: {
  serial_offset?: number | null;
  oggpagesize?: number | null;
  pagesize?: number | null;
  page_duration?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "serial_offset": options?.serial_offset,
    "oggpagesize": options?.oggpagesize,
    "pagesize": options?.pagesize,
    "page_duration": options?.page_duration,

  });
}







/**
 * Sony OpenMG audio
 */
export function oma(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Ogg Opus
 * @param options.serial_offset - serial number offset (from 0 to INT_MAX) (default 0)
 * @param options.oggpagesize - Set preferred Ogg page size. (from 0 to 65025) (default 0)
 * @param options.pagesize - preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
 * @param options.page_duration - preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)
 */
export function opus(options?: {
  serial_offset?: number | null;
  oggpagesize?: number | null;
  pagesize?: number | null;
  page_duration?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "serial_offset": options?.serial_offset,
    "oggpagesize": options?.oggpagesize,
    "pagesize": options?.pagesize,
    "page_duration": options?.page_duration,

  });
}












/**
 * PSP MP4 (MPEG-4 Part 14)
 * @param options.brand - Override major brand
 * @param options.empty_hdlr_name - write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
 * @param options.encryption_key - The media encryption key (hex)
 * @param options.encryption_kid - The media encryption key identifier (hex)
 * @param options.encryption_scheme - Configures the encryption scheme, allowed values are none, cenc-aes-ctr
 * @param options.frag_duration - Maximum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.frag_interleave - Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
 * @param options.frag_size - Maximum fragment size (from 0 to INT_MAX) (default 0)
 * @param options.fragment_index - Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
 * @param options.iods_audio_profile - iods audio profile atom. (from -1 to 255) (default -1)
 * @param options.iods_video_profile - iods video profile atom. (from -1 to 255) (default -1)
 * @param options.ism_lookahead - Number of lookahead entries for ISM files (from 0 to 255) (default 0)
 * @param options.movflags - MOV muxer flags (default 0)
 * @param options.moov_size - maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
 * @param options.min_frag_duration - Minimum fragment duration (from 0 to INT_MAX) (default 0)
 * @param options.mov_gamma - gamma value for gama atom (from 0 to 10) (default 0)
 * @param options.movie_timescale - set movie timescale (from 1 to INT_MAX) (default 1000)
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.skip_iods - Skip writing iods atom. (default true)
 * @param options.use_editlist - use edit list (default auto)
 * @param options.use_stream_ids_as_track_ids - use stream ids as track ids (default false)
 * @param options.video_track_timescale - set timescale of all video tracks (from 0 to INT_MAX) (default 0)
 * @param options.write_btrt - force or disable writing btrt (default auto)
 * @param options.write_prft - Write producer reference time box with specified time source (from 0 to 2) (default 0)
 * @param options.write_tmcd - force or disable writing tmcd (default auto)
 */
export function psp(options?: {
  brand?: string | null;
  empty_hdlr_name?: boolean | null;
  encryption_key?: string | null;
  encryption_kid?: string | null;
  encryption_scheme?: string | null;
  frag_duration?: number | null;
  frag_interleave?: number | null;
  frag_size?: number | null;
  fragment_index?: number | null;
  iods_audio_profile?: number | null;
  iods_video_profile?: number | null;
  ism_lookahead?: number | null;
  movflags?: string | null;
  moov_size?: number | null;
  min_frag_duration?: number | null;
  mov_gamma?: number | null;
  movie_timescale?: number | null;
  rtpflags?: string | null;
  skip_iods?: boolean | null;
  use_editlist?: boolean | null;
  use_stream_ids_as_track_ids?: boolean | null;
  video_track_timescale?: number | null;
  write_btrt?: boolean | null;
  write_prft?: number | null | "pts" | "wallclock";
  write_tmcd?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "brand": options?.brand,
    "empty_hdlr_name": options?.empty_hdlr_name,
    "encryption_key": options?.encryption_key,
    "encryption_kid": options?.encryption_kid,
    "encryption_scheme": options?.encryption_scheme,
    "frag_duration": options?.frag_duration,
    "frag_interleave": options?.frag_interleave,
    "frag_size": options?.frag_size,
    "fragment_index": options?.fragment_index,
    "iods_audio_profile": options?.iods_audio_profile,
    "iods_video_profile": options?.iods_video_profile,
    "ism_lookahead": options?.ism_lookahead,
    "movflags": options?.movflags,
    "moov_size": options?.moov_size,
    "min_frag_duration": options?.min_frag_duration,
    "mov_gamma": options?.mov_gamma,
    "movie_timescale": options?.movie_timescale,
    "rtpflags": options?.rtpflags,
    "skip_iods": options?.skip_iods,
    "use_editlist": options?.use_editlist,
    "use_stream_ids_as_track_ids": options?.use_stream_ids_as_track_ids,
    "video_track_timescale": options?.video_track_timescale,
    "write_btrt": options?.write_btrt,
    "write_prft": options?.write_prft,
    "write_tmcd": options?.write_tmcd,

  });
}







/**
 * raw video
 */
export function rawvideo(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * RCWT (Raw Captions With Time)
 */
export function rcwt(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * RealMedia
 */
export function rm(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw id RoQ
 */
export function roq(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Lego Mindstorms RSO
 */
export function rso(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * RTP output
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.payload_type - Specify RTP payload type (from -1 to 127) (default -1)
 * @param options.ssrc - Stream identifier (from INT_MIN to INT_MAX) (default 0)
 * @param options.cname - CNAME to include in RTCP SR packets
 * @param options.seq - Starting sequence number (from -1 to 65535) (default -1)
 */
export function rtp(options?: {
  rtpflags?: string | null;
  payload_type?: number | null;
  ssrc?: number | null;
  cname?: string | null;
  seq?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "rtpflags": options?.rtpflags,
    "payload_type": options?.payload_type,
    "ssrc": options?.ssrc,
    "cname": options?.cname,
    "seq": options?.seq,

  });
}







/**
 * RTP/mpegts output format
 * @param options.mpegts_muxer_options - set list of options for the MPEG-TS muxer
 * @param options.rtp_muxer_options - set list of options for the RTP muxer
 */
export function rtp_mpegts(options?: {
  mpegts_muxer_options?: string | null;
  rtp_muxer_options?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "mpegts_muxer_options": options?.mpegts_muxer_options,
    "rtp_muxer_options": options?.rtp_muxer_options,

  });
}







/**
 * RTSP output
 * @param options.rtpflags - RTP muxer flags (default 0)
 * @param options.rtsp_transport - set RTSP transport protocols (default 0)
 * @param options.min_port - set minimum local UDP port (from 0 to 65535) (default 5000)
 * @param options.max_port - set maximum local UDP port (from 0 to 65535) (default 65000)
 * @param options.buffer_size - Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
 * @param options.pkt_size - Underlying protocol send packet size (from -1 to INT_MAX) (default 1472)
 * @param options.ca_file - Certificate Authority database file
 * @param options.tls_verify - Verify the peer certificate (from 0 to 1) (default 0)
 * @param options.cert_file - Certificate file
 * @param options.key_file - Private key file
 * @param options.verifyhost - Verify against a specific hostname
 */
export function rtsp(options?: {
  rtpflags?: string | null;
  rtsp_transport?: string | null;
  min_port?: number | null;
  max_port?: number | null;
  buffer_size?: number | null;
  pkt_size?: number | null;
  ca_file?: string | null;
  tls_verify?: number | null;
  cert_file?: string | null;
  key_file?: string | null;
  verifyhost?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "rtpflags": options?.rtpflags,
    "rtsp_transport": options?.rtsp_transport,
    "min_port": options?.min_port,
    "max_port": options?.max_port,
    "buffer_size": options?.buffer_size,
    "pkt_size": options?.pkt_size,
    "ca_file": options?.ca_file,
    "tls_verify": options?.tls_verify,
    "cert_file": options?.cert_file,
    "key_file": options?.key_file,
    "verifyhost": options?.verifyhost,

  });
}







/**
 * PCM signed 16-bit big-endian
 */
export function s16be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit little-endian
 */
export function s16le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit big-endian
 */
export function s24be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit little-endian
 */
export function s24le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit big-endian
 */
export function s32be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit little-endian
 */
export function s32le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit
 */
export function s8(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * SAP output
 */
export function sap(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw SBC
 */
export function sbc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Scenarist Closed Captions
 */
export function scc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * segment
 * @param options.reference_stream - set reference stream (default "auto")
 * @param options.segment_format - set container format used for the segments
 * @param options.segment_format_options - set list of options for the container format used for the segments
 * @param options.segment_list - set the segment list filename
 * @param options.segment_header_filename - write a single file containing the header
 * @param options.segment_list_flags - set flags affecting segment list generation (default cache)
 * @param options.segment_list_size - set the maximum number of playlist entries (from 0 to INT_MAX) (default 0)
 * @param options.segment_list_type - set the segment list type (from -1 to 4) (default -1)
 * @param options.segment_atclocktime - set segment to be cut at clocktime (default false)
 * @param options.segment_clocktime_offset - set segment clocktime offset (default 0)
 * @param options.segment_clocktime_wrap_duration - set segment clocktime wrapping duration (default INT64_MAX)
 * @param options.segment_time - set segment duration (default 2)
 * @param options.segment_time_delta - set approximation value used for the segment times (default 0)
 * @param options.min_seg_duration - set minimum segment duration (default 0)
 * @param options.segment_times - set segment split time points
 * @param options.segment_frames - set segment split frame numbers
 * @param options.segment_wrap - set number after which the index wraps (from 0 to INT_MAX) (default 0)
 * @param options.segment_list_entry_prefix - set base url prefix for segments
 * @param options.segment_start_number - set the sequence number of the first segment (from 0 to INT_MAX) (default 0)
 * @param options.segment_wrap_number - set the number of wrap before the first segment (from 0 to INT_MAX) (default 0)
 * @param options.strftime - set filename expansion with strftime at segment creation (default false)
 * @param options.increment_tc - increment timecode between each segment (default false)
 * @param options.break_non_keyframes - allow breaking segments on non-keyframes (default false)
 * @param options.individual_header_trailer - write header/trailer to each segment (default true)
 * @param options.write_header_trailer - write a header to the first segment and a trailer to the last one (default true)
 * @param options.reset_timestamps - reset timestamps at the beginning of each segment (default false)
 * @param options.initial_offset - set initial timestamp offset (default 0)
 * @param options.write_empty_segments - allow writing empty 'filler' segments (default false)
 */
export function segment(options?: {
  reference_stream?: string | null;
  segment_format?: string | null;
  segment_format_options?: string | null;
  segment_list?: string | null;
  segment_header_filename?: string | null;
  segment_list_flags?: string | null;
  segment_list_size?: number | null;
  segment_list_type?: number | null | "flat" | "csv" | "ext" | "ffconcat" | "m3u8" | "hls";
  segment_atclocktime?: boolean | null;
  segment_clocktime_offset?: string | null;
  segment_clocktime_wrap_duration?: string | null;
  segment_time?: string | null;
  segment_time_delta?: string | null;
  min_seg_duration?: string | null;
  segment_times?: string | null;
  segment_frames?: string | null;
  segment_wrap?: number | null;
  segment_list_entry_prefix?: string | null;
  segment_start_number?: number | null;
  segment_wrap_number?: number | null;
  strftime?: boolean | null;
  increment_tc?: boolean | null;
  break_non_keyframes?: boolean | null;
  individual_header_trailer?: boolean | null;
  write_header_trailer?: boolean | null;
  reset_timestamps?: boolean | null;
  initial_offset?: string | null;
  write_empty_segments?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "reference_stream": options?.reference_stream,
    "segment_format": options?.segment_format,
    "segment_format_options": options?.segment_format_options,
    "segment_list": options?.segment_list,
    "segment_header_filename": options?.segment_header_filename,
    "segment_list_flags": options?.segment_list_flags,
    "segment_list_size": options?.segment_list_size,
    "segment_list_type": options?.segment_list_type,
    "segment_atclocktime": options?.segment_atclocktime,
    "segment_clocktime_offset": options?.segment_clocktime_offset,
    "segment_clocktime_wrap_duration": options?.segment_clocktime_wrap_duration,
    "segment_time": options?.segment_time,
    "segment_time_delta": options?.segment_time_delta,
    "min_seg_duration": options?.min_seg_duration,
    "segment_times": options?.segment_times,
    "segment_frames": options?.segment_frames,
    "segment_wrap": options?.segment_wrap,
    "segment_list_entry_prefix": options?.segment_list_entry_prefix,
    "segment_start_number": options?.segment_start_number,
    "segment_wrap_number": options?.segment_wrap_number,
    "strftime": options?.strftime,
    "increment_tc": options?.increment_tc,
    "break_non_keyframes": options?.break_non_keyframes,
    "individual_header_trailer": options?.individual_header_trailer,
    "write_header_trailer": options?.write_header_trailer,
    "reset_timestamps": options?.reset_timestamps,
    "initial_offset": options?.initial_offset,
    "write_empty_segments": options?.write_empty_segments,

  });
}







/**
 * Loki SDL MJPEG
 */
export function smjpeg(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Smooth Streaming Muxer
 * @param options.window_size - number of fragments kept in the manifest (from 0 to INT_MAX) (default 0)
 * @param options.extra_window_size - number of fragments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
 * @param options.lookahead_count - number of lookahead fragments (from 0 to INT_MAX) (default 2)
 * @param options.min_frag_duration - minimum fragment duration (in microseconds) (from 0 to INT_MAX) (default 5000000)
 * @param options.remove_at_exit - remove all fragments when finished (default false)
 */
export function smoothstreaming(options?: {
  window_size?: number | null;
  extra_window_size?: number | null;
  lookahead_count?: number | null;
  min_frag_duration?: number | null;
  remove_at_exit?: boolean | null;

}): FFMpegMuxerOption {
  return merge({
    "window_size": options?.window_size,
    "extra_window_size": options?.extra_window_size,
    "lookahead_count": options?.lookahead_count,
    "min_frag_duration": options?.min_frag_duration,
    "remove_at_exit": options?.remove_at_exit,

  });
}







/**
 * SoX (Sound eXchange) native
 */
export function sox(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * IEC 61937 (used on S/PDIF - IEC958)
 * @param options.spdif_flags - IEC 61937 encapsulation flags (default 0)
 * @param options.dtshd_rate - mux complete DTS frames in HD mode at the specified IEC958 rate (in Hz, default 0=disabled) (from 0 to 768000) (default 0)
 * @param options.dtshd_fallback_time - min secs to strip HD for after an overflow (-1: till the end, default 60) (from -1 to INT_MAX) (default 60)
 */
export function spdif(options?: {
  spdif_flags?: string | null;
  dtshd_rate?: number | null;
  dtshd_fallback_time?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "spdif_flags": options?.spdif_flags,
    "dtshd_rate": options?.dtshd_rate,
    "dtshd_fallback_time": options?.dtshd_fallback_time,

  });
}







/**
 * Ogg Speex
 * @param options.serial_offset - serial number offset (from 0 to INT_MAX) (default 0)
 * @param options.oggpagesize - Set preferred Ogg page size. (from 0 to 65025) (default 0)
 * @param options.pagesize - preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
 * @param options.page_duration - preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)
 */
export function spx(options?: {
  serial_offset?: number | null;
  oggpagesize?: number | null;
  pagesize?: number | null;
  page_duration?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "serial_offset": options?.serial_offset,
    "oggpagesize": options?.oggpagesize,
    "pagesize": options?.pagesize,
    "page_duration": options?.page_duration,

  });
}







/**
 * SubRip subtitle
 */
export function srt(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Per-stream hash testing
 * @param options.hash - set hash to use (default "sha256")
 */
export function streamhash(options?: {
  hash?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "hash": options?.hash,

  });
}







/**
 * raw HDMV Presentation Graphic Stream subtitles
 */
export function sup(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MPEG-2 PS (SVCD)
 * @param options.muxrate - mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
 * @param options.preload - initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)
 */
export function svcd(options?: {
  muxrate?: number | null;
  preload?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "muxrate": options?.muxrate,
    "preload": options?.preload,

  });
}







/**
 * SWF (ShockWave Flash)
 */
export function swf(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Multiple muxer tee
 * @param options.use_fifo - Use fifo pseudo-muxer to separate actual muxers from encoder (default false)
 * @param options.fifo_options - fifo pseudo-muxer options
 */
export function tee(options?: {
  use_fifo?: boolean | null;
  fifo_options?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "use_fifo": options?.use_fifo,
    "fifo_options": options?.fifo_options,

  });
}







/**
 * raw TrueHD
 */
export function truehd(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * TTA (True Audio)
 */
export function tta(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * TTML subtitle
 */
export function ttml(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit big-endian
 */
export function u16be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit little-endian
 */
export function u16le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit big-endian
 */
export function u24be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit little-endian
 */
export function u24le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit big-endian
 */
export function u32be(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit little-endian
 */
export function u32le(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 8-bit
 */
export function u8(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * uncoded framecrc testing
 */
export function uncodedframecrc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw VC-1 video
 */
export function vc1(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * VC-1 test bitstream
 */
export function vc1test(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * MPEG-1 Systems / MPEG program stream (VCD)
 * @param options.muxrate - mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
 * @param options.preload - initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)
 */
export function vcd(options?: {
  muxrate?: number | null;
  preload?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "muxrate": options?.muxrate,
    "preload": options?.preload,

  });
}







/**
 * PCM Archimedes VIDC
 */
export function vidc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}












/**
 * MPEG-2 PS (VOB)
 * @param options.muxrate - mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
 * @param options.preload - initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)
 */
export function vob(options?: {
  muxrate?: number | null;
  preload?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "muxrate": options?.muxrate,
    "preload": options?.preload,

  });
}







/**
 * Creative Voice
 */
export function voc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw H.266/VVC video
 */
export function vvc(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Sony Wave64
 */
export function w64(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * WAV / WAVE (Waveform Audio)
 * @param options.write_bext - Write BEXT chunk. (default false)
 * @param options.write_peak - Write Peak Envelope chunk. (from 0 to 2) (default off)
 * @param options.rf64 - Use RF64 header rather than RIFF for large files. (from -1 to 1) (default never)
 * @param options.peak_block_size - Number of audio samples used to generate each peak frame. (from 0 to 65536) (default 256)
 * @param options.peak_format - The format of the peak envelope data (1: uint8, 2: uint16). (from 1 to 2) (default 2)
 * @param options.peak_ppv - Number of peak points per peak value (1 or 2). (from 1 to 2) (default 2)
 */
export function wav(options?: {
  write_bext?: boolean | null;
  write_peak?: number | null | "off" | "on" | "only";
  rf64?: number | null | "auto" | "always" | "never";
  peak_block_size?: number | null;
  peak_format?: number | null;
  peak_ppv?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "write_bext": options?.write_bext,
    "write_peak": options?.write_peak,
    "rf64": options?.rf64,
    "peak_block_size": options?.peak_block_size,
    "peak_format": options?.peak_format,
    "peak_ppv": options?.peak_ppv,

  });
}







/**
 * WebM
 * @param options.reserve_index_space - reserve a given amount of space (in bytes) at the beginning of the file for the index (cues) (from 0 to INT_MAX) (default 0)
 * @param options.cues_to_front - move Cues (the index) to the front by shifting data if necessary (default false)
 * @param options.cluster_size_limit - store at most the provided amount of bytes in a cluster (from -1 to INT_MAX) (default -1)
 * @param options.cluster_time_limit - store at most the provided number of milliseconds in a cluster (from -1 to I64_MAX) (default -1)
 * @param options.dash - create a WebM file conforming to WebM DASH specification (default false)
 * @param options.dash_track_number - track number for the DASH stream (from 1 to INT_MAX) (default 1)
 * @param options.live - write files assuming it is a live stream (default false)
 * @param options.allow_raw_vfw - allow raw VFW mode (default false)
 * @param options.flipped_raw_rgb - store raw RGB bitmaps in VFW mode in bottom-up mode (default false)
 * @param options.write_crc32 - write a CRC32 element inside every Level 1 element (default true)
 * @param options.default_mode - control how a track's FlagDefault is inferred (from 0 to 2) (default passthrough)
 */
export function webm(options?: {
  reserve_index_space?: number | null;
  cues_to_front?: boolean | null;
  cluster_size_limit?: number | null;
  cluster_time_limit?: number | null;
  dash?: boolean | null;
  dash_track_number?: number | null;
  live?: boolean | null;
  allow_raw_vfw?: boolean | null;
  flipped_raw_rgb?: boolean | null;
  write_crc32?: boolean | null;
  default_mode?: number | null | "infer" | "infer_no_subs" | "passthrough";

}): FFMpegMuxerOption {
  return merge({
    "reserve_index_space": options?.reserve_index_space,
    "cues_to_front": options?.cues_to_front,
    "cluster_size_limit": options?.cluster_size_limit,
    "cluster_time_limit": options?.cluster_time_limit,
    "dash": options?.dash,
    "dash_track_number": options?.dash_track_number,
    "live": options?.live,
    "allow_raw_vfw": options?.allow_raw_vfw,
    "flipped_raw_rgb": options?.flipped_raw_rgb,
    "write_crc32": options?.write_crc32,
    "default_mode": options?.default_mode,

  });
}







/**
 * WebM Chunk Muxer
 * @param options.chunk_start_index - start index of the chunk (from 0 to INT_MAX) (default 0)
 * @param options.header - filename of the header where the initialization data will be written
 * @param options.audio_chunk_duration - duration of each chunk in milliseconds (from 0 to INT_MAX) (default 5000)
 * @param options.method - set the HTTP method
 */
export function webm_chunk(options?: {
  chunk_start_index?: number | null;
  header?: string | null;
  audio_chunk_duration?: number | null;
  method?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "chunk_start_index": options?.chunk_start_index,
    "header": options?.header,
    "audio_chunk_duration": options?.audio_chunk_duration,
    "method": options?.method,

  });
}







/**
 * WebM DASH Manifest
 * @param options.adaptation_sets - Adaptation sets. Syntax: id=0,streams=0,1,2 id=1,streams=3,4 and so on
 * @param options.live - create a live stream manifest (default false)
 * @param options.chunk_start_index - start index of the chunk (from 0 to INT_MAX) (default 0)
 * @param options.chunk_duration_ms - duration of each chunk (in milliseconds) (from 0 to INT_MAX) (default 1000)
 * @param options.utc_timing_url - URL of the page that will return the UTC timestamp in ISO format
 * @param options.time_shift_buffer_depth - Smallest time (in seconds) shifting buffer for which any Representation is guaranteed to be available. (from 1 to DBL_MAX) (default 60)
 * @param options.minimum_update_period - Minimum Update Period (in seconds) of the manifest. (from 0 to INT_MAX) (default 0)
 */
export function webm_dash_manifest(options?: {
  adaptation_sets?: string | null;
  live?: boolean | null;
  chunk_start_index?: number | null;
  chunk_duration_ms?: number | null;
  utc_timing_url?: string | null;
  time_shift_buffer_depth?: number | null;
  minimum_update_period?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "adaptation_sets": options?.adaptation_sets,
    "live": options?.live,
    "chunk_start_index": options?.chunk_start_index,
    "chunk_duration_ms": options?.chunk_duration_ms,
    "utc_timing_url": options?.utc_timing_url,
    "time_shift_buffer_depth": options?.time_shift_buffer_depth,
    "minimum_update_period": options?.minimum_update_period,

  });
}







/**
 * WebP
 * @param options.loop - Number of times to loop the output: 0 - infinite loop (from 0 to 65535) (default 1)
 */
export function webp(options?: {
  loop?: number | null;

}): FFMpegMuxerOption {
  return merge({
    "loop": options?.loop,

  });
}







/**
 * WebVTT subtitle
 */
export function webvtt(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * WHIP(WebRTC-HTTP ingestion protocol) muxer
 * @param options.handshake_timeout - Timeout in milliseconds for ICE and DTLS handshake. (from -1 to INT_MAX) (default 5000)
 * @param options.pkt_size - The maximum size, in bytes, of RTP packets that send out (from -1 to INT_MAX) (default 1200)
 * @param options.authorization - The optional Bearer token for WHIP Authorization
 * @param options.cert_file - The optional certificate file path for DTLS
 * @param options.key_file - The optional private key file path for DTLS
 */
export function whip(options?: {
  handshake_timeout?: number | null;
  pkt_size?: number | null;
  authorization?: string | null;
  cert_file?: string | null;
  key_file?: string | null;

}): FFMpegMuxerOption {
  return merge({
    "handshake_timeout": options?.handshake_timeout,
    "pkt_size": options?.pkt_size,
    "authorization": options?.authorization,
    "cert_file": options?.cert_file,
    "key_file": options?.key_file,

  });
}







/**
 * Westwood Studios audio
 */
export function wsaud(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * Windows Television (WTV)
 */
export function wtv(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * raw WavPack
 */
export function wv(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}







/**
 * YUV4MPEG pipe
 */
export function yuv4mpegpipe(options?: {

}): FFMpegMuxerOption {
  return merge({

  });
}
