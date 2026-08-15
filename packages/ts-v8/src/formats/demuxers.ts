// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg demuxer option factories.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegDemuxerOption = Readonly<Record<string, unknown>>;























































































































































































































































































































































































/**
 * 3DO STR
 */
export function _3dostr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * 4X Technologies
 */
export function _4xm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Audible AA format files
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
 * raw ADTS AAC (Advanced Audio Coding)
 */
export function aac(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * CRI AAX
 */
export function aax(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw AC-3
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
 * raw AC-4
 */
export function ac4(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * tri-Ace Audio Container
 */
export function ace(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Interplay ACM
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
 * Artworx Data Format
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
 * ADP
 */
export function adp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sony PS2 ADS
 */
export function ads(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * CRI ADX
 */
export function adx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MD STUDIO audio
 */
export function aea(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * AFC
 */
export function afc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Audio IFF
 */
export function aiff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * CRI AIX
 */
export function aix(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PCM A-law
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function alaw(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * Alias/Wavefront PIX image
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
 * LEGO Racers ALP
 */
export function alp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * 3GPP AMR
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
 * raw AMR-NB
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
 * raw AMR-WB
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
 * Deluxe Paint Animation
 */
export function anm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw APAC
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function apac(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * CRYO APC
 */
export function apc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Monkey's Audio
 */
export function ape(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Ubisoft Rayman 2 APM
 */
export function apm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Animated Portable Network Graphics
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
 * raw aptX
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
 * raw aptX HD
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
 * APV raw bitstream
 * @param options.framerate - set frame rate (default "30")
 */
export function apv(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * AQTitle subtitles
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
 * Argonaut Games ASF
 */
export function argo_asf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Argonaut Games BRP
 */
export function argo_brp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Argonaut Games CVG
 */
export function argo_cvg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * ASF (Advanced / Active Streaming Format)
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
 * ASF (Advanced / Active Streaming Format)
 */
export function asf_o(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SSA (SubStation Alpha) subtitle
 */
export function ass(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * AST (Audio Stream)
 */
export function ast(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sun AU
 */
export function au(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * AV1 Annex B
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
 * AVI (Audio Video Interleaved)
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
 * AVR (Audio Visual Research)
 */
export function avr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Argonaut Games Creature Shock
 */
export function avs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw AVS2-P2/IEEE1857.4
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
 * raw AVS3-P2/IEEE1857.10
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
 * Bethesda Softworks VID
 */
export function bethsoftvid(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Brute Force & Ignorance
 */
export function bfi(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * BFSTM (Binary Cafe Stream)
 */
export function bfstm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Binary text
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
 * Bink
 */
export function bink(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Bink Audio
 */
export function binka(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * G.729 BIT file format
 */
export function bit(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Bitpacked
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
 * piped bmp sequence
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
 * Discworld II BMV
 */
export function bmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Black Ops Audio
 */
export function boa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw Bonk
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function bonk(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * BRender PIX image
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
 * BRSTM (Binary Revolution Stream)
 */
export function brstm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Interplay C93
 */
export function c93(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Apple CAF (Core Audio Format)
 */
export function caf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw Chinese AVS (Audio Video Standard)
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
 * CD Graphics
 */
export function cdg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Commodore CDXL video
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
 * Phantom Cine
 */
export function cine(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * codec2 .c2 demuxer
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
 * raw codec2 demuxer
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
 * Virtual concatenation script
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
 * piped cri sequence
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
 * raw data
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
 * D-Cinema audio
 */
export function daud(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sega DC STR
 */
export function dcstr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped dds sequence
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
 * Xilam DERF
 */
export function derf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Chronomaster DFA
 */
export function dfa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw DFPWM1a
 * @param options.sample_rate - (from 0 to INT_MAX) (default 48000)
 * @param options.ch_layout - (default "mono")
 */
export function dfpwm(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * Video DAV
 */
export function dhav(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw Dirac
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
 * raw DNxHD (SMPTE VC-3)
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
 * piped dpx sequence
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
 * DSD Stream File (DSF)
 */
export function dsf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Delphine Software International CIN
 */
export function dsicin(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Digital Speech Standard (DSS)
 */
export function dss(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw DTS
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
 * raw DTS-HD
 */
export function dtshd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * DV (Digital Video)
 */
export function dv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw dvbsub
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
 * DXA
 */
export function dxa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Electronic Arts Multimedia
 * @param options.merge_alpha - return VP6 alpha in the main video stream (default false)
 */
export function ea(options?: {
  merge_alpha?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "merge_alpha": options?.merge_alpha,

  });
}







/**
 * Electronic Arts cdata
 */
export function ea_cdata(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw E-AC-3
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
 * Ensoniq Paris Audio File
 */
export function epaf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * EVC Annex B
 * @param options.framerate - (default "25")
 */
export function evc(options?: {
  framerate?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,

  });
}







/**
 * piped exr sequence
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
 * PCM 32-bit floating-point big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function f32be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM 32-bit floating-point little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function f32le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM 64-bit floating-point big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function f64be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM 64-bit floating-point little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function f64le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * fbdev           Linux framebuffer
 */
export function d(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * FFmpeg metadata in text
 */
export function ffmetadata(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sega FILM / CPK
 */
export function film_cpk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Adobe Filmstrip
 */
export function filmstrip(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Flexible Image Transport System
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
 * raw FLAC
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
 * FLI/FLC/FLX animation
 */
export function flic(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * FLV (Flash Video)
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 */
export function flv(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,

  });
}







/**
 * Megalux Frame
 */
export function frm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * FMOD Sample Bank
 */
export function fsb(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Capcom's MT Framework sound
 */
export function fwse(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw G.722
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
 * G.723.1
 */
export function g723_1(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw big-endian G.726 ("left aligned")
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
 * raw little-endian G.726 ("right aligned")
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
 * raw G.728
 */
export function g728(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * G.729 raw format demuxer
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
 * Gremlin Digital Video
 */
export function gdv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped gem sequence
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
 * GENeric Header
 */
export function genh(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * CompuServe Graphics Interchange Format (GIF)
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
 * piped gif sequence
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
 * raw GSM
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
 * GXF (General eXchange Format)
 */
export function gxf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw H.261
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
 * raw H.263
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
 * raw H.264 video
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
 * CRI HCA
 * @param options.hca_lowkey - Low key used for handling CRI HCA files (from 0 to UINT32_MAX) (default 0)
 * @param options.hca_highkey - High key used for handling CRI HCA files (from 0 to UINT32_MAX) (default 0)
 * @param options.hca_subkey - Subkey used for handling CRI HCA files (from 0 to 65535) (default 0)
 */
export function hca(options?: {
  hca_lowkey?: number | null;
  hca_highkey?: number | null;
  hca_subkey?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "hca_lowkey": options?.hca_lowkey,
    "hca_highkey": options?.hca_highkey,
    "hca_subkey": options?.hca_subkey,

  });
}







/**
 * Macintosh HCOM
 */
export function hcom(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped hdr sequence
 * @param options.frame_size - force frame size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.framerate - set the video framerate (default "25")
 * @param options.pixel_format - set video pixel format
 * @param options.video_size - set video size
 * @param options.loop - force loop over input file sequence (default false)
 */
export function hdr_pipe(options?: {
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
 * raw HEVC video
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
 * Apple HTTP Live Streaming
 * @param options.live_start_index - segment index to start live streams at (negative values are from the end) (from INT_MIN to INT_MAX) (default -3)
 * @param options.prefer_x_start - prefer to use #EXT-X-START if it's in playlist instead of live_start_index (default false)
 * @param options.allowed_extensions - List of file extensions that hls is allowed to access (default "3gp,aac,avi,ac3,eac3,flac,mkv,m3u8,m4a,m4s,m4v,mpg,mov,mp2,mp3,mp4,mpeg,mpegts,ogg,ogv,oga,ts,vob,vtt,wav,webvtt,cmfv,cmfa,ec3,fmp4")
 * @param options.allowed_segment_extensions - List of file extensions that hls is allowed to access (default "3gp,aac,avi,ac3,eac3,flac,mkv,m3u8,m4a,m4s,m4v,mpg,mov,mp2,mp3,mp4,mpeg,mpegts,ogg,ogv,oga,ts,vob,vtt,wav,webvtt,cmfv,cmfa,ec3,fmp4,html")
 * @param options.extension_picky - Be picky with all extensions matching (default true)
 * @param options.max_reload - Maximum number of times a insufficient list is attempted to be reloaded (from 0 to INT_MAX) (default 100)
 * @param options.m3u8_hold_counters - The maximum number of times to load m3u8 when it refreshes without new segments (from 0 to INT_MAX) (default 1000)
 * @param options.http_persistent - Use persistent HTTP connections (default true)
 * @param options.http_multiple - Use multiple HTTP connections for fetching segments (default auto)
 * @param options.http_seekable - Use HTTP partial requests, 0 = disable, 1 = enable, -1 = auto (default auto)
 * @param options.seg_format_options - Set options for segment demuxer
 * @param options.seg_max_retry - Maximum number of times to reload a segment on error. (from 0 to INT_MAX) (default 0)
 */
export function hls(options?: {
  live_start_index?: number | null;
  prefer_x_start?: boolean | null;
  allowed_extensions?: string | null;
  allowed_segment_extensions?: string | null;
  extension_picky?: boolean | null;
  max_reload?: number | null;
  m3u8_hold_counters?: number | null;
  http_persistent?: boolean | null;
  http_multiple?: boolean | null;
  http_seekable?: boolean | null;
  seg_format_options?: string | null;
  seg_max_retry?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "live_start_index": options?.live_start_index,
    "prefer_x_start": options?.prefer_x_start,
    "allowed_extensions": options?.allowed_extensions,
    "allowed_segment_extensions": options?.allowed_segment_extensions,
    "extension_picky": options?.extension_picky,
    "max_reload": options?.max_reload,
    "m3u8_hold_counters": options?.m3u8_hold_counters,
    "http_persistent": options?.http_persistent,
    "http_multiple": options?.http_multiple,
    "http_seekable": options?.http_seekable,
    "seg_format_options": options?.seg_format_options,
    "seg_max_retry": options?.seg_max_retry,

  });
}







/**
 * Cryo HNM v4
 */
export function hnm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Raw Immersive Audio Model and Formats
 */
export function iamf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Microsoft Windows ICO
 */
export function ico(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * id Cinematic
 */
export function idcin(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * iCE Draw File
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
 * IFF (Interchange File Format)
 */
export function iff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * IFV CCTV DVR
 */
export function ifv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * iLBC storage
 */
export function ilbc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * image2 sequence
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
 * piped image2 sequence
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
 * raw Ingenient MJPEG
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
 * Interplay MVE
 */
export function ipmovie(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw IPU Video
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
 * Berkeley/IRCAM/CARL Sound Format
 */
export function ircam(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Funcom ISS
 */
export function iss(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * IndigoVision 8000 video
 */
export function iv8(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * On2 IVF
 */
export function ivf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * IVR (Internet Video Recording)
 */
export function ivr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped j2k sequence
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
 * JACOsub subtitle format
 */
export function jacosub(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped jpeg sequence
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
 * piped jpegls sequence
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
 * Animated JPEG XL
 */
export function jpegxl_anim(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped jpegxl sequence
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
 * Bitmap Brothers JV
 */
export function jv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}












/**
 * KUX (YouKu)
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 */
export function kux(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,

  });
}







/**
 * Simon & Schuster Interactive VAG
 */
export function kvag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * LAF (Limitless Audio Format)
 */
export function laf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}












/**
 * LC3 (Low Complexity Communication Codec)
 */
export function lc3(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * live RTMP FLV (Flash Video)
 * @param options.flv_metadata - Allocate streams according to the onMetaData array (default false)
 * @param options.flv_full_metadata - Dump full metadata of the onMetadata (default false)
 * @param options.flv_ignore_prevtag - Ignore the Size of previous tag (default false)
 */
export function live_flv(options?: {
  flv_metadata?: boolean | null;
  flv_full_metadata?: boolean | null;
  flv_ignore_prevtag?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "flv_metadata": options?.flv_metadata,
    "flv_full_metadata": options?.flv_full_metadata,
    "flv_ignore_prevtag": options?.flv_ignore_prevtag,

  });
}







/**
 * raw lmlm4
 */
export function lmlm4(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * LOAS AudioSyncStream
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
 * LRC lyrics
 */
export function lrc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Video CCTV DAT
 */
export function luodat(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * LVF
 */
export function lvf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * VR native stream (LXF)
 */
export function lxf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw MPEG-4 video
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
 * MCA Audio Format
 */
export function mca(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MacCaption
 * @param options.eia608_extract - extract EIA-608/708 captions from VANC packets (default true)
 */
export function mcc(options?: {
  eia608_extract?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "eia608_extract": options?.eia608_extract,

  });
}







/**
 * Metal Gear Solid: The Twin Snakes
 */
export function mgsts(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MicroDVD subtitle format
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
 * raw MJPEG video
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
 * raw MJPEG 2000 video
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
 * raw MLP
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
 * Magic Lantern Video (MLV)
 */
export function mlv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * American Laser Games MM
 */
export function mm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Yamaha SMAF
 */
export function mmf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MobiClip MODS
 */
export function mods(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MobiClip MOFLEX
 */
export function moflex(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MP2/3 (MPEG audio layer 2/3)
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
 * Musepack
 */
export function mpc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Musepack SV8
 */
export function mpc8(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MPEG-PS (MPEG-2 Program Stream)
 */
export function mpeg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MPEG-TS (MPEG-2 Transport Stream)
 * @param options.resync_size - set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
 * @param options.fix_teletext_pts - try to fix pts values of dvb teletext streams (default true)
 * @param options.scan_all_pmts - scan and combine all PMTs (default auto)
 * @param options.skip_unknown_pmt - skip PMTs for programs not advertised in the PAT (default false)
 * @param options.merge_pmt_versions - reuse streams when PMT's version/pids change (default false)
 * @param options.max_packet_size - maximum size of emitted packet (from 1 to 1.07374e+09) (default 204800)
 */
export function mpegts(options?: {
  resync_size?: number | null;
  fix_teletext_pts?: boolean | null;
  scan_all_pmts?: boolean | null;
  skip_unknown_pmt?: boolean | null;
  merge_pmt_versions?: boolean | null;
  max_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "resync_size": options?.resync_size,
    "fix_teletext_pts": options?.fix_teletext_pts,
    "scan_all_pmts": options?.scan_all_pmts,
    "skip_unknown_pmt": options?.skip_unknown_pmt,
    "merge_pmt_versions": options?.merge_pmt_versions,
    "max_packet_size": options?.max_packet_size,

  });
}







/**
 * raw MPEG-TS (MPEG-2 Transport Stream)
 * @param options.resync_size - set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
 * @param options.compute_pcr - compute exact PCR for each transport stream packet (default false)
 */
export function mpegtsraw(options?: {
  resync_size?: number | null;
  compute_pcr?: boolean | null;

}): FFMpegDemuxerOption {
  return merge({
    "resync_size": options?.resync_size,
    "compute_pcr": options?.compute_pcr,

  });
}







/**
 * raw MPEG video
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
 * MIME multipart JPEG
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
 * MPL2 subtitles
 */
export function mpl2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MPlayer subtitles
 */
export function mpsub(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sony PS3 MSF
 */
export function msf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MSN TCP Webcam stream
 */
export function msnwctcp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Microsoft Paint (MSP))
 */
export function msp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Konami PS2 MTAF
 */
export function mtaf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MTV
 */
export function mtv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PCM mu-law
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function mulaw(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * Eurocom MUSX
 */
export function musx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Silicon Graphics Movie
 */
export function mv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Motion Pixels MVI
 */
export function mvi(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MXF (Material eXchange Format)
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
 * MxPEG clip
 */
export function mxg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * NC camera feed
 */
export function nc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * NIST SPeech HEader REsources
 */
export function nistsphere(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Computerized Speech Lab NSP
 */
export function nsp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Nullsoft Streaming Video
 */
export function nsv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * NUT
 */
export function nut(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * NuppelVideo
 */
export function nuv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * AV1 low overhead OBU
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
 * Ogg
 */
export function ogg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sony OpenMG audio
 */
export function oma(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw OSQ
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function osq(options?: {
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "raw_packet_size": options?.raw_packet_size,

  });
}












/**
 * Amazing Studio Packed Animation File
 */
export function paf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped pam sequence
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
 * piped pbm sequence
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
 * piped pcx sequence
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
 * PlayDate Video
 */
export function pdv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped pfm sequence
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
 * piped pgm sequence
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
 * piped pgmyuv sequence
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
 * piped pgx sequence
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
 * piped phm sequence
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
 * piped photocd sequence
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
 * piped pictor sequence
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
 * PJS (Phoenix Japanimation Society) subtitles
 */
export function pjs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Playstation Portable PMP
 */
export function pmp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped png sequence
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
 * Pro Pinball Series Soundbank
 */
export function pp_bnk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped ppm sequence
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
 * piped psd sequence
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
 * Sony Playstation STR
 */
export function psxstr(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * TechnoTrend PVA
 */
export function pva(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PVF (Portable Voice Format)
 */
export function pvf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * QCP
 */
export function qcp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped qdraw sequence
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
 * QOA
 */
export function qoa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped qoi sequence
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
 * REDCODE R3D
 */
export function r3d(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw video
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
 * RCWT (Raw Captions With Time)
 */
export function rcwt(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RealText subtitle format
 */
export function realtext(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RedSpark
 */
export function redspark(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RKA (RK Audio)
 */
export function rka(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RL2
 */
export function rl2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RealMedia
 */
export function rm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * id RoQ
 */
export function roq(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RPL / ARMovie
 */
export function rpl(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * GameCube RSD
 */
export function rsd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Lego Mindstorms RSO
 */
export function rso(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * RTP input
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
 * RTSP input
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
 * @param options.user_agent - override User-Agent header (default "Lavf62.3.100")
 * @param options.ca_file - Certificate Authority database file
 * @param options.tls_verify - Verify the peer certificate (from 0 to 1) (default 0)
 * @param options.cert_file - Certificate file
 * @param options.key_file - Private key file
 * @param options.verifyhost - Verify against a specific hostname
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
  ca_file?: string | null;
  tls_verify?: number | null;
  cert_file?: string | null;
  key_file?: string | null;
  verifyhost?: string | null;

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
    "ca_file": options?.ca_file,
    "tls_verify": options?.tls_verify,
    "cert_file": options?.cert_file,
    "key_file": options?.key_file,
    "verifyhost": options?.verifyhost,

  });
}







/**
 * PCM signed 16-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s16be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM signed 16-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s16le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM signed 24-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s24be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM signed 24-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s24le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM signed 32-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s32be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM signed 32-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s32le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * SMPTE 337M
 */
export function s337m(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function s8(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * SAMI subtitle format
 */
export function sami(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SAP input
 */
export function sap(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw SBC (low-complexity subband codec)
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
 * SBaGen binaural beats script
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
 * Scenarist Closed Captions
 */
export function scc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Square Enix SCD
 */
export function scd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Xbox SDNS
 */
export function sdns(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SDP
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
 * SDR2
 */
export function sdr2(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * MIDI Sample Dump Standard
 */
export function sds(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sample Dump eXchange
 */
export function sdx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SER (Simple uncompressed video format for astronomical capturing)
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
 * Digital Pictures SGA
 */
export function sga(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped sgi sequence
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
 * raw Shorten
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
 * Beam Software SIFF
 */
export function siff(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Simbiosis Interactive IMX
 */
export function simbiosis_imx(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Asterisk raw pcm
 * @param options.sample_rate - (from 0 to INT_MAX) (default 8000)
 * @param options.ch_layout - (default "mono")
 */
export function sln(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * Loki SDL MJPEG
 */
export function smjpeg(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Smacker
 */
export function smk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * LucasArts Smush
 */
export function smush(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sierra SOL
 */
export function sol(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SoX (Sound eXchange) native
 */
export function sox(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * IEC 61937 (compressed data in S/PDIF)
 */
export function spdif(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SubRip subtitle
 */
export function srt(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Spruce subtitle format
 */
export function stl(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SubViewer subtitle format
 */
export function subviewer(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SubViewer v1 subtitle format
 */
export function subviewer1(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped sunrast sequence
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
 * raw HDMV Presentation Graphic Stream subtitles
 */
export function sup(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Konami PS2 SVAG
 */
export function svag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped svg sequence
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
 * Square SVS
 */
export function svs(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * SWF (ShockWave Flash)
 */
export function swf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw TAK
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
 * TED Talks captions
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
 * THP
 */
export function thp(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Tiertex Limited SEQ
 */
export function tiertexseq(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped tiff sequence
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
 * 8088flex TMV
 */
export function tmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw TrueHD
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
 * TTA (True Audio)
 */
export function tta(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Tele-typewriter
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
 * Renderware TeXture Dictionary
 */
export function txd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * TiVo TY Stream
 */
export function ty(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u16be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 16-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u16le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 24-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u24be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 24-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u24le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 32-bit big-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u32be(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 32-bit little-endian
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u32le(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * PCM unsigned 8-bit
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function u8(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}







/**
 * CRI USM
 */
export function usm(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Uncompressed 4:2:2 10-bit
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
 * Uncompressed 4:2:2 10-bit
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
 * Sony PS2 VAG
 */
export function vag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped vbn sequence
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
 * raw VC-1
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
 * VC-1 test bitstream
 */
export function vc1test(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * PCM Archimedes VIDC
 * @param options.sample_rate - (from 0 to INT_MAX) (default 44100)
 * @param options.ch_layout - (default "mono")
 */
export function vidc(options?: {
  sample_rate?: number | null;
  ch_layout?: string | null;

}): FFMpegDemuxerOption {
  return merge({
    "sample_rate": options?.sample_rate,
    "ch_layout": options?.ch_layout,

  });
}












/**
 * Vividas VIV
 */
export function vividas(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Vivo
 */
export function vivo(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sierra VMD
 */
export function vmd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * VobSub subtitle format
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
 * Creative Voice
 */
export function voc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Sony PS2 VPK
 */
export function vpk(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * VPlayer subtitles
 */
export function vplayer(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Nippon Telegraph and Telephone Corporation (NTT) TwinVQ
 */
export function vqf(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * raw H.266/VVC video
 * @param options.framerate - (default "25")
 * @param options.raw_packet_size - (from 1 to INT_MAX) (default 1024)
 */
export function vvc(options?: {
  framerate?: string | null;
  raw_packet_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "framerate": options?.framerate,
    "raw_packet_size": options?.raw_packet_size,

  });
}







/**
 * Sony Wave64
 * @param options.max_size - max size of single packet (from 0 to 4.1943e+06) (default 0)
 */
export function w64(options?: {
  max_size?: number | null;

}): FFMpegDemuxerOption {
  return merge({
    "max_size": options?.max_size,

  });
}







/**
 * Marble WADY
 */
export function wady(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * WAV / WAVE (Waveform Audio)
 * @param options.ignore_length - Ignore length (default false)
 * @param options.max_size - max size of single packet (from 0 to 4.1943e+06) (default 0)
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
 * Waveform Archiver
 */
export function wavarc(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Wing Commander III movie
 */
export function wc3movie(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * WebM DASH Manifest
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
 * piped webp sequence
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
 * WebVTT subtitle
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
 * Westwood Studios audio
 */
export function wsaud(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Wideband Single-bit Data (WSD)
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
 * Westwood Studios VQA
 */
export function wsvqa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Windows Television (WTV)
 */
export function wtv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * WavPack
 */
export function wv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Psion 3 audio
 */
export function wve(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}












/**
 * Maxis XA
 */
export function xa(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * eXtended BINary text (XBIN)
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
 * piped xbm sequence
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
 * Konami XMD
 */
export function xmd(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Microsoft XMV
 */
export function xmv(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped xpm sequence
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
 * Sony PS3 XVAG
 */
export function xvag(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * piped xwd sequence
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
 * Microsoft xWMA
 */
export function xwma(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * Psygnosis YOP
 */
export function yop(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}







/**
 * YUV4MPEG pipe
 */
export function yuv4mpegpipe(options?: {

}): FFMpegDemuxerOption {
  return merge({

  });
}
