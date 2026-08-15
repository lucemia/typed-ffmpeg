// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg demuxer option factories.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegDemuxerOption = Readonly<Record<string, unknown>>;



































































































































































































































































































































































/**
 * 3dostr
 */
export function _3dostr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * 4xm
 */
export function _4xm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * aa
 * @param options.aa_fixed_key - Fixed key used for handling Audible AA files
 */
export function aa(options?: {
  aa_fixed_key?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "aa_fixed_key": options?.aa_fixed_key,

  });
}







/**
 * aac
 */
export function aac(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * aax
 */
export function aax(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ac3
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function ac3(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * ace
 */
export function ace(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * acm
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function acm(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * ACT Voice file format
 */
export function act(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * adf
 * @param options.linespeed - set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
 * @param options.video_size - set video size, such as 640x480 or hd720.
 * @param options.framerate - set framerate (frames per second) (default "25")
 */
export function adf(options?: {
  linespeed?: number | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "linespeed": options?.linespeed,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * adp
 */
export function adp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ads
 */
export function ads(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * adx
 */
export function adx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * aea
 */
export function aea(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * afc
 */
export function afc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * aiff
 */
export function aiff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * aix
 */
export function aix(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * alaw
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function alaw(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * alias_pix
 * @param options.pattern_type - set pattern type (from 0 to INT_MAX) (default 4)
 * @param options.start_number - set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
 * @param options.start_number_range - set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
 * @param options.ts_from_file - set frame timestamp from file's one (from 0 to 2) (default none)
 * @param options.export_path_metadata - enable metadata containing input path information (default false)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function alias_pix(options?: {
  pattern_type?: number | null | "glob_sequence" | "glob" | "sequence" | "none";
  start_number?: number | null;
  start_number_range?: number | null;
  ts_from_file?: number | null | "none" | "sec" | "ns";
  export_path_metadata?: boolean | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "pattern_type": options?.pattern_type,
    "start_number": options?.start_number,
    "start_number_range": options?.start_number_range,
    "ts_from_file": options?.ts_from_file,
    "export_path_metadata": options?.export_path_metadata,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * alp
 */
export function alp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * amr
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function amr(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * amrnb
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function amrnb(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * amrwb
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function amrwb(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * anm
 */
export function anm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * apc
 */
export function apc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ape
 */
export function ape(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * apm
 */
export function apm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * apng
 * @param options.ignore_loop - ignore loop setting (default true)
 * @param options.max_fps - maximum framerate (0 is no limit) (from 0 to INT_MAX) (default 0)
 * @param options.default_fps - default framerate (0 is as fast as possible) (from 0 to INT_MAX) (default 15)
 */
export function apng(options?: {
  ignore_loop?: boolean | null;
  max_fps?: number | null;
  default_fps?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "ignore_loop": options?.ignore_loop,
    "max_fps": options?.max_fps,
    "default_fps": options?.default_fps,

  });
}







/**
 * aptx
 * @param options.sample_rate - (from 0 to INT_MAX) (default 48000)
 */
export function aptx(options?: {
  sample_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,

  });
}







/**
 * aptx_hd
 * @param options.sample_rate - (from 0 to INT_MAX) (default 48000)
 */
export function aptx_hd(options?: {
  sample_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,

  });
}







/**
 * aqtitle
 * @param options.subfps - set the movie frame rate (from 0 to INT_MAX) (default 25/1)
 */
export function aqtitle(options?: {
  subfps?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "subfps": options?.subfps,

  });
}







/**
 * argo_asf
 */
export function argo_asf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * argo_brp
 */
export function argo_brp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * argo_cvg
 */
export function argo_cvg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * asf
 * @param options.no_resync_search - Don't try to resynchronize by looking for a certain optional start code (default false)
 * @param options.export_xmp - Export full XMP metadata (default false)
 */
export function asf(options?: {
  no_resync_search?: boolean | null;
  export_xmp?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "no_resync_search": options?.no_resync_search,
    "export_xmp": options?.export_xmp,

  });
}







/**
 * asf_o
 */
export function asf_o(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ass
 */
export function ass(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ast
 */
export function ast(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * au
 */
export function au(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * av1
 * @param options.framerate - (default "25")
 */
export function av1(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * avi
 * @param options.use_odml - use odml index (default true)
 */
export function avi(options?: {
  use_odml?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "use_odml": options?.use_odml,

  });
}







/**
 * avr
 */
export function avr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * avs
 */
export function avs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * avs2
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function avs2(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * avs3
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function avs3(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * bethsoftvid
 */
export function bethsoftvid(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * bfi
 */
export function bfi(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * bfstm
 */
export function bfstm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * bin
 * @param options.linespeed - set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
 * @param options.video_size - set video size, such as 640x480 or hd720.
 * @param options.framerate - set framerate (frames per second) (default "25")
 */
export function bin(options?: {
  linespeed?: number | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "linespeed": options?.linespeed,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * bink
 */
export function bink(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * binka
 */
export function binka(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * bit
 */
export function bit(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * bitpacked
 * @param options.pixel_format - set pixel format (default "yuv420p")
 * @param options.video_size - set frame size
 * @param options.framerate - set frame rate (default "25")
 */
export function bitpacked(options?: {
  pixel_format?: string | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * bmp_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function bmp_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * bmv
 */
export function bmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * boa
 */
export function boa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * brender_pix
 * @param options.pattern_type - set pattern type (from 0 to INT_MAX) (default 4)
 * @param options.start_number - set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
 * @param options.start_number_range - set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
 * @param options.ts_from_file - set frame timestamp from file's one (from 0 to 2) (default none)
 * @param options.export_path_metadata - enable metadata containing input path information (default false)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function brender_pix(options?: {
  pattern_type?: number | null | "glob_sequence" | "glob" | "sequence" | "none";
  start_number?: number | null;
  start_number_range?: number | null;
  ts_from_file?: number | null | "none" | "sec" | "ns";
  export_path_metadata?: boolean | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "pattern_type": options?.pattern_type,
    "start_number": options?.start_number,
    "start_number_range": options?.start_number_range,
    "ts_from_file": options?.ts_from_file,
    "export_path_metadata": options?.export_path_metadata,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * brstm
 */
export function brstm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * c93
 */
export function c93(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * caf
 */
export function caf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * cavsvideo
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function cavsvideo(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * cdg
 */
export function cdg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * cdxl
 * @param options.sample_rate - (from 8000 to INT_MAX) (default 11025)
 * @param options.frame_rate - (default "15")
 */
export function cdxl(options?: {
  sample_rate?: number | null;
  frame_rate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "frame_rate": options?.frame_rate,

  });
}







/**
 * cine
 */
export function cine(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * codec2
 * @param options.frames_per_packet - Number of frames to read at a time. Higher = faster decoding, lower granularity (from 1 to INT_MAX) (default 1)
 */
export function codec2(options?: {
  frames_per_packet?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "frames_per_packet": options?.frames_per_packet,

  });
}







/**
 * codec2raw
 * @param options.mode - codec2 mode [mandatory] (from -1 to 8) (default -1)
 * @param options.frames_per_packet - Number of frames to read at a time. Higher = faster decoding, lower granularity (from 1 to INT_MAX) (default 1)
 */
export function codec2raw(options?: {
  mode?: number | null | "3200" | "2400" | "1600" | "1400" | "1300" | "1200" | "700" | "700B" | "700C";
  frames_per_packet?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "mode": options?.mode,
    "frames_per_packet": options?.frames_per_packet,

  });
}







/**
 * concat
 * @param options.safe - enable safe mode (default true)
 * @param options.auto_convert - automatically convert bitstream format (default true)
 * @param options.segment_time_metadata - output file segment start time and duration as packet metadata (default false)
 */
export function concat(options?: {
  safe?: boolean | null;
  auto_convert?: boolean | null;
  segment_time_metadata?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "safe": options?.safe,
    "auto_convert": options?.auto_convert,
    "segment_time_metadata": options?.segment_time_metadata,

  });
}







/**
 * cri_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function cri_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * data
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function data(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * daud
 */
export function daud(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dcstr
 */
export function dcstr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dds_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function dds_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * derf
 */
export function derf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dfa
 */
export function dfa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dfpwm
 * @param options.sample_rate - (from 0 to INT_MAX) (default 48000)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function dfpwm(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * dhav
 */
export function dhav(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dirac
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function dirac(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * dnxhd
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function dnxhd(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * dpx_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function dpx_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * dsf
 */
export function dsf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dsicin
 */
export function dsicin(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dss
 */
export function dss(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dts
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function dts(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * dtshd
 */
export function dtshd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dv
 */
export function dv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * dvbsub
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function dvbsub(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * dvbtxt
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function dvbtxt(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * dxa
 */
export function dxa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ea
 */
export function ea(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ea_cdata
 */
export function ea_cdata(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * eac3
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function eac3(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * epaf
 */
export function epaf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * exr_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function exr_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * f32be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function f32be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * f32le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function f32le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * f64be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function f64be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * f64le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function f64le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * fbdev
 * @param options.framerate - (default "25")
 */
export function fbdev(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * ffmetadata
 */
export function ffmetadata(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * film_cpk
 */
export function film_cpk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * filmstrip
 */
export function filmstrip(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * fits
 * @param options.framerate - set the framerate (default "1")
 */
export function fits(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * flac
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function flac(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * flic
 */
export function flic(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * flv
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 * @param options.missing_streams - (from 0 to 255) (default 0)
 */
export function flv(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;
  missing_streams?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,
    "missing_streams": options?.missing_streams,

  });
}







/**
 * frm
 */
export function frm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * fsb
 */
export function fsb(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * fwse
 */
export function fwse(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * g722
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function g722(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * g723_1
 */
export function g723_1(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * g726
 * @param options.code_size - Bits per G.726 code (from 2 to 5) (default 4)
 * @param options.sample_rate - (from 0 to INT_MAX) (default 8000)
 */
export function g726(options?: {
  code_size?: number | null;
  sample_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "code_size": options?.code_size,
    "sample_rate": options?.sample_rate,

  });
}







/**
 * g726le
 * @param options.code_size - Bits per G.726 code (from 2 to 5) (default 4)
 * @param options.sample_rate - (from 0 to INT_MAX) (default 8000)
 */
export function g726le(options?: {
  code_size?: number | null;
  sample_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "code_size": options?.code_size,
    "sample_rate": options?.sample_rate,

  });
}







/**
 * g729
 * @param options.bit_rate - (from 0 to INT_MAX) (default 8000)
 */
export function g729(options?: {
  bit_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "bit_rate": options?.bit_rate,

  });
}







/**
 * gdv
 */
export function gdv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * gem_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function gem_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * genh
 */
export function genh(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * gif
 * @param options.min_delay - minimum valid delay between frames (in hundredths of second) (from 0 to 6000) (default 2)
 * @param options.max_gif_delay - maximum valid delay between frames (in hundredths of seconds) (from 0 to 65535) (default 65535)
 * @param options.default_delay - default delay between frames (in hundredths of second) (from 0 to 6000) (default 10)
 * @param options.ignore_loop - ignore loop setting (netscape extension) (default true)
 */
export function gif(options?: {
  min_delay?: number | null;
  max_gif_delay?: number | null;
  default_delay?: number | null;
  ignore_loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "min_delay": options?.min_delay,
    "max_gif_delay": options?.max_gif_delay,
    "default_delay": options?.default_delay,
    "ignore_loop": options?.ignore_loop,

  });
}







/**
 * gif_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function gif_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * gsm
 * @param options.sample_rate - (from 1 to 6.50753e+07) (default 8000)
 */
export function gsm(options?: {
  sample_rate?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,

  });
}







/**
 * gxf
 */
export function gxf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * h261
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function h261(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * h263
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function h263(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * h264
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function h264(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * hca
 */
export function hca(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * hcom
 */
export function hcom(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * hevc
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function hevc(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * hls
 * @param options.live_start_index - segment index to start live streams at (negative values are from the end) (from INT_MIN to INT_MAX) (default -3)
 * @param options.prefer_x_start - prefer to use #EXT-X-START if it's in playlist instead of live_start_index (default false)
 * @param options.allowed_extensions - List of file extensions that hls is allowed to access (default "3gp,aac,avi,ac3,eac3,flac,mkv,m3u8,m4a,m4s,m4v,mpg,mov,mp2,mp3,mp4,mpeg,mpegts,ogg,ogv,oga,ts,vob,wav")
 * @param options.max_reload - Maximum number of times a insufficient list is attempted to be reloaded (from 0 to INT_MAX) (default 3)
 * @param options.m3u8_hold_counters - The maximum number of times to load m3u8 when it refreshes without new segments (from 0 to INT_MAX) (default 1000)
 * @param options.http_persistent - Use persistent HTTP connections (default true)
 * @param options.http_multiple - Use multiple HTTP connections for fetching segments (default auto)
 * @param options.http_seekable - Use HTTP partial requests, 0 = disable, 1 = enable, -1 = auto (default auto)
 * @param options.seg_format_options - Set options for segment demuxer
 */
export function hls(options?: {
  live_start_index?: number | null;
  prefer_x_start?: boolean | null;
  allowed_extensions?: string | null;
  max_reload?: number | null;
  m3u8_hold_counters?: number | null;
  http_persistent?: boolean | null;
  http_multiple?: boolean | null;
  http_seekable?: boolean | null;
  seg_format_options?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "live_start_index": options?.live_start_index,
    "prefer_x_start": options?.prefer_x_start,
    "allowed_extensions": options?.allowed_extensions,
    "max_reload": options?.max_reload,
    "m3u8_hold_counters": options?.m3u8_hold_counters,
    "http_persistent": options?.http_persistent,
    "http_multiple": options?.http_multiple,
    "http_seekable": options?.http_seekable,
    "seg_format_options": options?.seg_format_options,

  });
}







/**
 * hnm
 */
export function hnm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ico
 */
export function ico(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * idcin
 */
export function idcin(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * idf
 * @param options.linespeed - set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
 * @param options.video_size - set video size, such as 640x480 or hd720.
 * @param options.framerate - set framerate (frames per second) (default "25")
 */
export function idf(options?: {
  linespeed?: number | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "linespeed": options?.linespeed,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * iff
 */
export function iff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ifv
 */
export function ifv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ilbc
 */
export function ilbc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * image2
 * @param options.pattern_type - set pattern type (from 0 to INT_MAX) (default 4)
 * @param options.start_number - set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
 * @param options.start_number_range - set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
 * @param options.ts_from_file - set frame timestamp from file's one (from 0 to 2) (default none)
 * @param options.export_path_metadata - enable metadata containing input path information (default false)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function image2(options?: {
  pattern_type?: number | null | "glob_sequence" | "glob" | "sequence" | "none";
  start_number?: number | null;
  start_number_range?: number | null;
  ts_from_file?: number | null | "none" | "sec" | "ns";
  export_path_metadata?: boolean | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "pattern_type": options?.pattern_type,
    "start_number": options?.start_number,
    "start_number_range": options?.start_number_range,
    "ts_from_file": options?.ts_from_file,
    "export_path_metadata": options?.export_path_metadata,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * image2pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function image2pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * ingenient
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function ingenient(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * ipmovie
 */
export function ipmovie(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ipu
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function ipu(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * ircam
 */
export function ircam(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * iss
 */
export function iss(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * iv8
 */
export function iv8(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ivf
 */
export function ivf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ivr
 */
export function ivr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * j2k_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function j2k_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * jacosub
 */
export function jacosub(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * jpeg_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function jpeg_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * jpegls_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function jpegls_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * jpegxl_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function jpegxl_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * jv
 */
export function jv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * kux
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 * @param options.missing_streams - (from 0 to 255) (default 0)
 */
export function kux(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;
  missing_streams?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,
    "missing_streams": options?.missing_streams,

  });
}







/**
 * kvag
 */
export function kvag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * lavfi
 * @param options.graph - set libavfilter graph
 * @param options.graph_file - set libavfilter graph filename
 * @param options.dumpgraph - dump graph to stderr
 */
export function lavfi(options?: {
  graph?: string | null;
  graph_file?: string | null;
  dumpgraph?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "graph": options?.graph,
    "graph_file": options?.graph_file,
    "dumpgraph": options?.dumpgraph,

  });
}







/**
 * live_flv
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 * @param options.missing_streams - (from 0 to 255) (default 0)
 */
export function live_flv(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;
  missing_streams?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,
    "missing_streams": options?.missing_streams,

  });
}







/**
 * lmlm4
 */
export function lmlm4(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * loas
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function loas(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * lrc
 */
export function lrc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * luodat
 */
export function luodat(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * lvf
 */
export function lvf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * lxf
 */
export function lxf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * m4v
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function m4v(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * mca
 */
export function mca(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mcc
 */
export function mcc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mgsts
 */
export function mgsts(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * microdvd
 * @param options.subfps - set the movie frame rate fallback (from 0 to INT_MAX) (default 0/1)
 */
export function microdvd(options?: {
  subfps?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "subfps": options?.subfps,

  });
}







/**
 * mjpeg
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function mjpeg(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * mjpeg_2000
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function mjpeg_2000(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * mlp
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function mlp(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * mlv
 */
export function mlv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mm
 */
export function mm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mmf
 */
export function mmf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mods
 */
export function mods(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * moflex
 */
export function moflex(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mp3
 * @param options.usetoc - use table of contents (default false)
 */
export function mp3(options?: {
  usetoc?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "usetoc": options?.usetoc,

  });
}







/**
 * mpc
 */
export function mpc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mpc8
 */
export function mpc8(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mpeg
 */
export function mpeg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mpegts
 * @param options.resync_size - set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
 * @param options.fix_teletext_pts - try to fix pts values of dvb teletext streams (default true)
 * @param options.ts_packetsize - output option carrying the raw packet size (from 0 to 0) (default 0)
 * @param options.scan_all_pmts - scan and combine all PMTs (default auto)
 * @param options.skip_unknown_pmt - skip PMTs for programs not advertised in the PAT (default false)
 * @param options.merge_pmt_versions - re-use streams when PMT's version/pids change (default false)
 * @param options.max_packet_size - maximum size of emitted packet (from 1 to 1.07374e+09) (default 204800)
 */
export function mpegts(options?: {
  resync_size?: number | null;
  fix_teletext_pts?: boolean | null;
  ts_packetsize?: number | null;
  scan_all_pmts?: boolean | null;
  skip_unknown_pmt?: boolean | null;
  merge_pmt_versions?: boolean | null;
  max_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "resync_size": options?.resync_size,
    "fix_teletext_pts": options?.fix_teletext_pts,
    "ts_packetsize": options?.ts_packetsize,
    "scan_all_pmts": options?.scan_all_pmts,
    "skip_unknown_pmt": options?.skip_unknown_pmt,
    "merge_pmt_versions": options?.merge_pmt_versions,
    "max_packet_size": options?.max_packet_size,

  });
}







/**
 * mpegtsraw
 * @param options.resync_size - set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
 * @param options.compute_pcr - compute exact PCR for each transport stream packet (default false)
 * @param options.ts_packetsize - output option carrying the raw packet size (from 0 to 0) (default 0)
 */
export function mpegtsraw(options?: {
  resync_size?: number | null;
  compute_pcr?: boolean | null;
  ts_packetsize?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "resync_size": options?.resync_size,
    "compute_pcr": options?.compute_pcr,
    "ts_packetsize": options?.ts_packetsize,

  });
}







/**
 * mpegvideo
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function mpegvideo(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * mpjpeg
 * @param options.strict_mime_boundary - require MIME boundaries match (default false)
 */
export function mpjpeg(options?: {
  strict_mime_boundary?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "strict_mime_boundary": options?.strict_mime_boundary,

  });
}







/**
 * mpl2
 */
export function mpl2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mpsub
 */
export function mpsub(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * msf
 */
export function msf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * msnwctcp
 */
export function msnwctcp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * msp
 */
export function msp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mtaf
 */
export function mtaf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mtv
 */
export function mtv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mulaw
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function mulaw(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * musx
 */
export function musx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mv
 */
export function mv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mvi
 */
export function mvi(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * mxf
 * @param options.eia608_extract - extract eia 608 captions from s436m track (default false)
 */
export function mxf(options?: {
  eia608_extract?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "eia608_extract": options?.eia608_extract,

  });
}







/**
 * mxg
 */
export function mxg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nc
 */
export function nc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nistsphere
 */
export function nistsphere(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nsp
 */
export function nsp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nsv
 */
export function nsv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nut
 */
export function nut(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * nuv
 */
export function nuv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * obu
 * @param options.framerate - (default "25")
 */
export function obu(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * ogg
 */
export function ogg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * oma
 */
export function oma(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * oss
 * @param options.sample_rate - (from 1 to INT_MAX) (default 48000)
 * @param options.channels - (from 1 to INT_MAX) (default 2)
 */
export function oss(options?: {
  sample_rate?: number | null;
  channels?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,

  });
}







/**
 * paf
 */
export function paf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * pam_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pam_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pbm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pbm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pcx_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pcx_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pfm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pfm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pgm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pgm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pgmyuv_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pgmyuv_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pgx_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pgx_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * phm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function phm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * photocd_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function photocd_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pictor_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function pictor_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pjs
 */
export function pjs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * pmp
 */
export function pmp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * png_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function png_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * pp_bnk
 */
export function pp_bnk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ppm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function ppm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * psd_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function psd_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * psxstr
 */
export function psxstr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * pva
 */
export function pva(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * pvf
 */
export function pvf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * qcp
 */
export function qcp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * qdraw_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function qdraw_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * qoi_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function qoi_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * r3d
 */
export function r3d(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rawvideo
 * @param options.pixel_format - set pixel format (default "yuv420p")
 * @param options.video_size - set frame size
 * @param options.framerate - set frame rate (default "25")
 */
export function rawvideo(options?: {
  pixel_format?: string | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * realtext
 */
export function realtext(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * redspark
 */
export function redspark(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rl2
 */
export function rl2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rm
 */
export function rm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * roq
 */
export function roq(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rpl
 */
export function rpl(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rsd
 */
export function rsd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rso
 */
export function rso(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * rtp
 * @param options.rtp_flags - set RTP flags (default 0)
 * @param options.listen_timeout - set maximum timeout (in seconds) to wait for incoming connections (default 10)
 * @param options.localaddr - local address
 * @param options.allowed_media_types - set media types to accept from the server (default video+audio+data+subtitle)
 * @param options.reorder_queue_size - set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
 * @param options.buffer_size - Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
 */
export function rtp(options?: {
  rtp_flags?: string | null;
  listen_timeout?: string | null;
  localaddr?: string | null;
  allowed_media_types?: string | null;
  reorder_queue_size?: number | null;
  buffer_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "rtp_flags": options?.rtp_flags,
    "listen_timeout": options?.listen_timeout,
    "localaddr": options?.localaddr,
    "allowed_media_types": options?.allowed_media_types,
    "reorder_queue_size": options?.reorder_queue_size,
    "buffer_size": options?.buffer_size,

  });
}







/**
 * rtsp
 * @param options.initial_pause - do not start playing the stream immediately (default false)
 * @param options.rtsp_transport - set RTSP transport protocols (default 0)
 * @param options.rtsp_flags - set RTSP flags (default 0)
 * @param options.allowed_media_types - set media types to accept from the server (default video+audio+data+subtitle)
 * @param options.min_port - set minimum local UDP port (from 0 to 65535) (default 5000)
 * @param options.max_port - set maximum local UDP port (from 0 to 65535) (default 65000)
 * @param options.listen_timeout - set maximum timeout (in seconds) to wait for incoming connections (-1 is infinite, imply flag listen) (from INT_MIN to INT_MAX) (default -1)
 * @param options.timeout - set timeout (in microseconds) of socket I/O operations (from INT_MIN to I64_MAX) (default 0)
 * @param options.reorder_queue_size - set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
 * @param options.buffer_size - Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
 * @param options.user_agent - override User-Agent header (default "Lavf59.27.100")
 */
export function rtsp(options?: {
  initial_pause?: boolean | null;
  rtsp_transport?: string | null;
  rtsp_flags?: string | null;
  allowed_media_types?: string | null;
  min_port?: number | null;
  max_port?: number | null;
  listen_timeout?: number | null;
  timeout?: number | null;
  reorder_queue_size?: number | null;
  buffer_size?: number | null;
  user_agent?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "initial_pause": options?.initial_pause,
    "rtsp_transport": options?.rtsp_transport,
    "rtsp_flags": options?.rtsp_flags,
    "allowed_media_types": options?.allowed_media_types,
    "min_port": options?.min_port,
    "max_port": options?.max_port,
    "listen_timeout": options?.listen_timeout,
    "timeout": options?.timeout,
    "reorder_queue_size": options?.reorder_queue_size,
    "buffer_size": options?.buffer_size,
    "user_agent": options?.user_agent,

  });
}







/**
 * s16be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s16be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s16le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s16le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s24be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s24be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s24le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s24le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s32be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s32be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s32le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s32le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * s337m
 */
export function s337m(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * s8
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function s8(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * sami
 */
export function sami(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sap
 */
export function sap(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sbc
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function sbc(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * sbg
 * @param options.sample_rate - (from 0 to INT_MAX) (default 0)
 * @param options.max_file_size - (from 0 to INT_MAX) (default 5000000)
 */
export function sbg(options?: {
  sample_rate?: number | null;
  max_file_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "max_file_size": options?.max_file_size,

  });
}







/**
 * scc
 */
export function scc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * scd
 */
export function scd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sdp
 * @param options.sdp_flags - SDP flags (default 0)
 * @param options.listen_timeout - set maximum timeout (in seconds) to wait for incoming connections (default 10)
 * @param options.localaddr - local address
 * @param options.allowed_media_types - set media types to accept from the server (default video+audio+data+subtitle)
 * @param options.reorder_queue_size - set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
 * @param options.buffer_size - Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
 */
export function sdp(options?: {
  sdp_flags?: string | null;
  listen_timeout?: string | null;
  localaddr?: string | null;
  allowed_media_types?: string | null;
  reorder_queue_size?: number | null;
  buffer_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "sdp_flags": options?.sdp_flags,
    "listen_timeout": options?.listen_timeout,
    "localaddr": options?.localaddr,
    "allowed_media_types": options?.allowed_media_types,
    "reorder_queue_size": options?.reorder_queue_size,
    "buffer_size": options?.buffer_size,

  });
}







/**
 * sdr2
 */
export function sdr2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sds
 */
export function sds(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sdx
 */
export function sdx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ser
 * @param options.framerate - set frame rate (default "25")
 */
export function ser(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * sga
 */
export function sga(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sgi_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function sgi_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * shn
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function shn(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * siff
 */
export function siff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * simbiosis_imx
 */
export function simbiosis_imx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sln
 * @param options.sample_rate - (from 0 to INT_MAX) (default 8000)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function sln(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * smjpeg
 */
export function smjpeg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * smk
 */
export function smk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * smush
 */
export function smush(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sol
 */
export function sol(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sox
 */
export function sox(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * spdif
 */
export function spdif(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * srt
 */
export function srt(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * stl
 */
export function stl(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * subviewer
 */
export function subviewer(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * subviewer1
 */
export function subviewer1(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * sunrast_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function sunrast_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * sup
 */
export function sup(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * svag
 */
export function svag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * svg_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function svg_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * svs
 */
export function svs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * swf
 */
export function swf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * tak
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function tak(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * tedcaptions
 * @param options.start_time - set the start time (offset) of the subtitles, in ms (from I64_MIN to I64_MAX) (default 15000)
 */
export function tedcaptions(options?: {
  start_time?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "start_time": options?.start_time,

  });
}







/**
 * thp
 */
export function thp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * tiertexseq
 */
export function tiertexseq(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * tiff_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function tiff_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * tmv
 */
export function tmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * truehd
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function truehd(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * tta
 */
export function tta(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * tty
 * @param options.chars_per_frame - (from 1 to INT_MAX) (default 6000)
 * @param options.video_size - A string describing frame size, such as 640x480 or hd720.
 * @param options.framerate - (default "25")
 */
export function tty(options?: {
  chars_per_frame?: number | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "chars_per_frame": options?.chars_per_frame,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * txd
 */
export function txd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ty
 */
export function ty(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * u16be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u16be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u16le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u16le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u24be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u24be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u24le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u24le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u32be
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u32be(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u32le
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u32le(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * u8
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function u8(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * v210
 * @param options.video_size - set frame size
 * @param options.framerate - set frame rate (default "25")
 */
export function v210(options?: {
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * v210x
 * @param options.video_size - set frame size
 * @param options.framerate - set frame rate (default "25")
 */
export function v210x(options?: {
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * vag
 */
export function vag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vbn_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function vbn_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * vc1
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function vc1(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * vc1test
 */
export function vc1test(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vidc
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.channels - (from 0 to INT_MAX) (default 1)
 * @param options.ch_layout -
 */
export function vidc(options?: {
  sample_rate?: number | null;
  channels?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "channels": options?.channels,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * vividas
 */
export function vividas(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vivo
 */
export function vivo(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vmd
 */
export function vmd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vobsub
 * @param options.sub_name - URI for .sub file
 */
export function vobsub(options?: {
  sub_name?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sub_name": options?.sub_name,

  });
}







/**
 * voc
 */
export function voc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vpk
 */
export function vpk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vplayer
 */
export function vplayer(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * vqf
 */
export function vqf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * w64
 * @param options.max_size - max size of single packet (from 1024 to 4.1943e+06) (default 4096)
 */
export function w64(options?: {
  max_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "max_size": options?.max_size,

  });
}







/**
 * wav
 * @param options.ignore_length - Ignore length (default false)
 * @param options.max_size - max size of single packet (from 1024 to 4.1943e+06) (default 4096)
 */
export function wav(options?: {
  ignore_length?: boolean | null;
  max_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "ignore_length": options?.ignore_length,
    "max_size": options?.max_size,

  });
}







/**
 * wc3movie
 */
export function wc3movie(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * webm_dash_manifest
 * @param options.live - flag indicating that the input is a live file that only has the headers. (default false)
 * @param options.bandwidth - bandwidth of this stream to be specified in the DASH manifest. (from 0 to INT_MAX) (default 0)
 */
export function webm_dash_manifest(options?: {
  live?: boolean | null;
  bandwidth?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "live": options?.live,
    "bandwidth": options?.bandwidth,

  });
}







/**
 * webp_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function webp_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * webvtt
 * @param options.kind - Set kind of WebVTT track (from 0 to INT_MAX) (default subtitles)
 */
export function webvtt(options?: {
  kind?: number | null | "subtitles" | "captions" | "descriptions" | "metadata";

}): FFMpegDemuxerOption {
  return merge({
    "kind": options?.kind,

  });
}







/**
 * wsaud
 */
export function wsaud(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * wsd
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function wsd(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * wsvqa
 */
export function wsvqa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * wtv
 */
export function wtv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * wv
 */
export function wv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * wve
 */
export function wve(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * xa
 */
export function xa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * xbin
 * @param options.linespeed - set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
 * @param options.video_size - set video size, such as 640x480 or hd720.
 * @param options.framerate - set framerate (frames per second) (default "25")
 */
export function xbin(options?: {
  linespeed?: number | null;
  video_size?: string | null;
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "linespeed": options?.linespeed,
    "video_size": options?.video_size,
    "framerate": options?.framerate,

  });
}







/**
 * xbm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function xbm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * xmv
 */
export function xmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * xpm_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function xpm_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * xvag
 */
export function xvag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * xwd_pipe
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function xwd_pipe(options?: {
  frame_size?: number | null;
  framerate?: string | null;
  pixel_format?: string | null;
  video_size?: string | null;
  loop?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "frame_size": options?.frame_size,
    "framerate": options?.framerate,
    "pixel_format": options?.pixel_format,
    "video_size": options?.video_size,
    "loop": options?.loop,

  });
}







/**
 * xwma
 */
export function xwma(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * yop
 */
export function yop(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * yuv4mpegpipe
 */
export function yuv4mpegpipe(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}
