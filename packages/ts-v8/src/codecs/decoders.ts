// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg decoder option factories.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegDecoderOption = Readonly<Record<string, unknown>>;



























































































































































































































































































































































































































































/**
 * Uncompressed 4:2:2 10-bit
 */
export function _012v(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * 4X Movie
 */
export function _4xm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QuickTime 8BPS video
 */
export function _8bps(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Autodesk RLE
 */
export function aasc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Amuse Graphics Movie
 */
export function agm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Apple Intermediate Codec
 */
export function aic(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Alias/Wavefront PIX image
 */
export function alias_pix(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AMV Video
 */
export function amv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Deluxe Paint Animation
 */
export function anm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ASCII/ANSI art
 */
export function ansi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * APNG (Animated Portable Network Graphics) image
 */
export function apng(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Advanced Professional Video
 */
export function apv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Gryphon's Anim Compressor
 */
export function arbc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Argonaut Games Video
 */
export function argo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ASUS V1
 */
export function asv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ASUS V2
 */
export function asv2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Auravision AURA
 */
export function aura(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Auravision Aura 2
 */
export function aura2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * dav1d AV1 decoder by VideoLAN (codec av1)
 * @param options.tilethreads - Tile threads (from 0 to 256) (default 0)
 * @param options.framethreads - Frame threads (from 0 to 256) (default 0)
 * @param options.max_frame_delay - Max frame delay (from 0 to 256) (default 0)
 * @param options.filmgrain - Apply Film Grain (default auto)
 * @param options.oppoint - Select an operating point of the scalable bitstream (from -1 to 31) (default -1)
 * @param options.alllayers - Output all spatial layers (default false)
 */
export function libdav1d(options?: {
  tilethreads?: number | null;
  framethreads?: number | null;
  max_frame_delay?: number | null;
  filmgrain?: boolean | null;
  oppoint?: number | null;
  alllayers?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "tilethreads": options?.tilethreads,
    "framethreads": options?.framethreads,
    "max_frame_delay": options?.max_frame_delay,
    "filmgrain": options?.filmgrain,
    "oppoint": options?.oppoint,
    "alllayers": options?.alllayers,

  });
}







/**
 * Alliance for Open Media AV1
 * @param options.operating_point - Select an operating point of the scalable bitstream (from 0 to 31) (default 0)
 */
export function av1(options?: {
  operating_point?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "operating_point": options?.operating_point,

  });
}







/**
 * Nvidia CUVID AV1 decoder (codec av1)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function av1_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * Avid AVI Codec
 */
export function avrn(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Avid 1:1 10-bit RGB Packer
 */
export function avrp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AVS (Audio Video Standard) video
 */
export function avs(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Avid Meridien Uncompressed
 */
export function avui(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bethesda VID video
 */
export function bethsoftvid(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Brute Force & Ignorance
 */
export function bfi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bink video
 */
export function binkvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Binary text
 */
export function bintext(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bitpacked
 */
export function bitpacked(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * BMP (Windows and OS/2 bitmap)
 */
export function bmp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Discworld II BMV video
 */
export function bmv_video(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * BRender PIX image
 */
export function brender_pix(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Interplay C93
 */
export function c93(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Chinese AVS (Audio Video Standard) (AVS1-P2, JiZhun profile)
 */
export function cavs(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * CD Graphics video
 */
export function cdgraphics(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * CDToons video
 */
export function cdtoons(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Commodore CDXL video
 */
export function cdxl(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * GoPro CineForm HD
 */
export function cfhd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Cinepak
 */
export function cinepak(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Iterated Systems ClearVideo
 */
export function clearvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Cirrus Logic AccuPak
 */
export function cljr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Canopus Lossless Codec
 */
export function cllc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Electronic Arts CMV video (codec cmv)
 */
export function eacmv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * CPiA video format
 */
export function cpia(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Cintel RAW
 */
export function cri(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * CamStudio (codec cscd)
 */
export function camstudio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Creative YUV (CYUV)
 */
export function cyuv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DirectDraw Surface image decoder
 */
export function dds(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Chronomaster DFA
 */
export function dfa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * BBC Dirac VC-2
 */
export function dirac(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * VC3/DNxHD
 */
export function dnxhd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPX (Digital Picture Exchange) image
 */
export function dpx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Delphine Software International CIN video
 */
export function dsicinvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DV (Digital Video)
 */
export function dvvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Feeble Files/ScummVM DXA
 */
export function dxa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Dxtory
 */
export function dxtory(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Resolume DXV
 */
export function dxv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Escape 124
 */
export function escape124(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Escape 130
 */
export function escape130(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * OpenEXR image
 * @param options.layer - Set the decoding layer (default "")
 * @param options.part - Set the decoding part (from 0 to INT_MAX) (default 0)
 * @param options.gamma - Set the float gamma value when decoding (deprecated, use a scaler) (from 0.001 to FLT_MAX) (default 1)
 * @param options.apply_trc - color transfer characteristics to apply to EXR linear input (deprecated, use a scaler) (from 1 to 18) (default gamma)
 */
export function exr(options?: {
  layer?: string | null;
  part?: number | null;
  gamma?: number | null;
  apply_trc?: number | null | "bt709" | "gamma" | "gamma22" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "log" | "log_sqrt" | "iec61966_2_4" | "bt1361" | "iec61966_2_1" | "bt2020_10bit" | "bt2020_12bit" | "smpte2084" | "smpte428_1";

}): FFMpegDecoderOption {
  return merge({
    "layer": options?.layer,
    "part": options?.part,
    "gamma": options?.gamma,
    "apply_trc": options?.apply_trc,

  });
}







/**
 * FFmpeg video codec #1
 */
export function ffv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Huffyuv FFmpeg variant
 */
export function ffvhuff(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Mirillis FIC
 * @param options.skip_cursor - skip the cursor (default false)
 */
export function fic(options?: {
  skip_cursor?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "skip_cursor": options?.skip_cursor,

  });
}







/**
 * Flexible Image Transport System
 * @param options.blank_value - value that is used to replace BLANK pixels in data array (from 0 to 65535) (default 0)
 */
export function fits(options?: {
  blank_value?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "blank_value": options?.blank_value,

  });
}







/**
 * Flash Screen Video v1
 */
export function flashsv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Flash Screen Video v2
 */
export function flashsv2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Autodesk Animator Flic video
 */
export function flic(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * FLV / Sorenson Spark / Sorenson H.263 (Flash Video) (codec flv1)
 */
export function flv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * FM Screen Capture Codec
 */
export function fmvc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Fraps
 */
export function fraps(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Forward Uncompressed
 * @param options.change_field_order - Change field order (default false)
 */
export function frwu(options?: {
  change_field_order?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "change_field_order": options?.change_field_order,

  });
}







/**
 * Go2Meeting
 */
export function g2m(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Gremlin Digital Video
 */
export function gdv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * GEM Raster image
 */
export function gem(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * GIF (Graphics Interchange Format)
 * @param options.trans_color - color value (ARGB) that is used instead of transparent color (from 0 to UINT32_MAX) (default 16777215)
 */
export function gif(options?: {
  trans_color?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "trans_color": options?.trans_color,

  });
}







/**
 * H.261
 */
export function h261(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * H.263 / H.263-1996, H.263+ / H.263-1998 / H.263 version 2
 */
export function h263(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem H.263 decoder wrapper (codec h263)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function h263_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Intel H.263
 */
export function h263i(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * H.263 / H.263-1996, H.263+ / H.263-1998 / H.263 version 2
 */
export function h263p(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
 * @param options.is_avc - is avc (default false)
 * @param options.nal_length_size - nal_length_size (from 0 to 4) (default 0)
 * @param options.enable_er - Enable error resilience on damaged frames (unsafe) (default auto)
 * @param options.x264_build - Assume this x264 version if no x264 version found in any SEI (from -1 to INT_MAX) (default -1)
 * @param options.skip_gray - Do not return gray gap frames (default false)
 * @param options.noref_gray - Avoid using gray gap frames as references (default true)
 */
export function h264(options?: {
  is_avc?: boolean | null;
  nal_length_size?: number | null;
  enable_er?: boolean | null;
  x264_build?: number | null;
  skip_gray?: boolean | null;
  noref_gray?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "is_avc": options?.is_avc,
    "nal_length_size": options?.nal_length_size,
    "enable_er": options?.enable_er,
    "x264_build": options?.x264_build,
    "skip_gray": options?.skip_gray,
    "noref_gray": options?.noref_gray,

  });
}







/**
 * V4L2 mem2mem H.264 decoder wrapper (codec h264)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function h264_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID H264 decoder (codec h264)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function h264_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * Vidvox Hap
 */
export function hap(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * HDR (Radiance RGBE format) image
 */
export function hdr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * HEVC (High Efficiency Video Coding)
 * @param options.apply_defdispwin - Apply default display window from VUI (default false)
 * @param options.strict_displaywin - strictly apply default display window size (default false)
 * @param options.view_ids - Array of view IDs that should be decoded and output; a single -1 to decode all views
 * @param options.view_ids_available - Array of available view IDs is exported here
 * @param options.view_pos_available - Array of view positions for view_ids_available is exported here, as AVStereo3DView
 */
export function hevc(options?: {
  apply_defdispwin?: boolean | null;
  strict_displaywin?: boolean | null;
  view_ids?: number | null;
  view_ids_available?: number | null;
  view_pos_available?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "apply_defdispwin": options?.apply_defdispwin,
    "strict-displaywin": options?.strict_displaywin,
    "view_ids": options?.view_ids,
    "view_ids_available": options?.view_ids_available,
    "view_pos_available": options?.view_pos_available,

  });
}







/**
 * V4L2 mem2mem HEVC decoder wrapper (codec hevc)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function hevc_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID HEVC decoder (codec hevc)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function hevc_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * HNM 4 video
 */
export function hnm4video(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Canopus HQ/HQA
 */
export function hq_hqa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Canopus HQX
 */
export function hqx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Huffyuv / HuffYUV
 */
export function huffyuv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * HuffYUV MT
 */
export function hymt(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * id Quake II CIN video (codec idcin)
 */
export function idcinvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * iCEDraw text
 */
export function idf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * IFF ACBM/ANIM/DEEP/ILBM/PBM/RGB8/RGBN (codec iff_ilbm)
 */
export function iff(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Infinity IMM4
 */
export function imm4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Infinity IMM5
 */
export function imm5(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Intel Indeo 2
 */
export function indeo2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Intel Indeo 3
 */
export function indeo3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Intel Indeo Video Interactive 4
 */
export function indeo4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Intel Indeo Video Interactive 5
 */
export function indeo5(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Interplay MVE video
 */
export function interplayvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * IPU Video
 */
export function ipu(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * JPEG 2000
 * @param options.lowres - Lower the decoding resolution by a power of two (from 0 to 33) (default 0)
 */
export function jpeg2000(options?: {
  lowres?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "lowres": options?.lowres,

  });
}







/**
 * JPEG-LS
 */
export function jpegls(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libjxl JPEG XL (codec jpegxl)
 */
export function libjxl(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libjxl JPEG XL animated (codec jpegxl_anim)
 */
export function libjxl_anim(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bitmap Brothers JV video
 */
export function jv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Kega Game Video
 */
export function kgv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Karl Morton's video codec
 */
export function kmvc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Lagarith lossless
 */
export function lagarith(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LEAD MCMP
 */
export function lead(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LOCO
 */
export function loco(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LEAD Screen Capture
 */
export function lscr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Matrox Uncompressed SD
 */
export function m101(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Electronic Arts Madcow Video (codec mad)
 */
export function eamad(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MagicYUV video
 */
export function magicyuv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sony PlayStation MDEC (Motion DECoder)
 */
export function mdec(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Media 100
 */
export function media100(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Mimic
 */
export function mimic(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MJPEG (Motion JPEG)
 * @param options.extern_huff - Use external huffman table. (default false)
 */
export function mjpeg(options?: {
  extern_huff?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "extern_huff": options?.extern_huff,

  });
}







/**
 * Nvidia CUVID MJPEG decoder (codec mjpeg)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function mjpeg_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * Apple MJPEG-B
 */
export function mjpegb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * American Laser Games MM Video
 */
export function mmvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MobiClip Video
 */
export function mobiclip(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Motion Pixels video
 */
export function motionpixels(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MPEG-1 video
 */
export function mpeg1video(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem MPEG1 decoder wrapper (codec mpeg1video)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function mpeg1_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID MPEG1VIDEO decoder (codec mpeg1video)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function mpeg1_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * MPEG-2 video
 * @param options.cc_format - extract a specific Closed Captions format (from 0 to 4) (default auto)
 */
export function mpeg2video(options?: {
  cc_format?: number | null | "auto" | "a53" | "scte20" | "dvd" | "dish";

}): FFMpegDecoderOption {
  return merge({
    "cc_format": options?.cc_format,

  });
}







/**
 * MPEG-1 video (codec mpeg2video)
 */
export function mpegvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem MPEG2 decoder wrapper (codec mpeg2video)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function mpeg2_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID MPEG2VIDEO decoder (codec mpeg2video)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function mpeg2_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * MPEG-4 part 2
 */
export function mpeg4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem MPEG4 decoder wrapper (codec mpeg4)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function mpeg4_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID MPEG4 decoder (codec mpeg4)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function mpeg4_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * MS ATC Screen
 */
export function msa1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Mandsoft Screen Capture Codec
 */
export function mscc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MPEG-4 part 2 Microsoft variant version 1
 */
export function msmpeg4v1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MPEG-4 part 2 Microsoft variant version 2
 */
export function msmpeg4v2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MPEG-4 part 2 Microsoft variant version 3 (codec msmpeg4v3)
 */
export function msmpeg4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Microsoft Paint (MSP) version 2
 */
export function msp2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Microsoft RLE
 */
export function msrle(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MS Screen 1
 */
export function mss1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MS Windows Media Video V9 Screen
 */
export function mss2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Microsoft Video 1
 */
export function msvideo1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LCL (LossLess Codec Library) MSZH
 */
export function mszh(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MS Expression Encoder Screen
 */
export function mts2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MidiVid 3.0
 */
export function mv30(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Silicon Graphics Motion Video Compressor 1
 */
export function mvc1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Silicon Graphics Motion Video Compressor 2
 */
export function mvc2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MidiVid VQ
 */
export function mvdv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MidiVid Archive Codec
 */
export function mvha(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MatchWare Screen Capture Codec
 */
export function mwsc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Mobotix MxPEG video
 */
export function mxpeg(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * NotchLC
 */
export function notchlc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * NuppelVideo/RTJPEG
 */
export function nuv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Amazing Studio Packed Animation File Video
 */
export function paf_video(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PAM (Portable AnyMap) image
 */
export function pam(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PBM (Portable BitMap) image
 */
export function pbm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PC Paintbrush PCX image
 */
export function pcx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PDV (PlayDate Video)
 */
export function pdv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PFM (Portable FloatMap) image
 */
export function pfm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PGM (Portable GrayMap) image
 */
export function pgm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PGMYUV (Portable GrayMap YUV) image
 */
export function pgmyuv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PGX (JPEG2000 Test Format)
 */
export function pgx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PHM (Portable HalfFloatMap) image
 */
export function phm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Kodak Photo CD
 * @param options.lowres - Lower the decoding resolution by a power of two (from 0 to 4) (default 0)
 */
export function photocd(options?: {
  lowres?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "lowres": options?.lowres,

  });
}







/**
 * Pictor/PC Paint
 */
export function pictor(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Apple Pixlet
 */
export function pixlet(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PNG (Portable Network Graphics) image
 */
export function png(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PPM (Portable PixelMap) image
 */
export function ppm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Apple ProRes (iCodec Pro)
 */
export function prores(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Apple ProRes RAW
 */
export function prores_raw(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Brooktree ProSumer Video
 */
export function prosumer(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Photoshop PSD file
 */
export function psd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V.Flash PTX image
 */
export function ptx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Apple QuickDraw
 */
export function qdraw(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QOI (Quite OK Image format) image
 */
export function qoi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Q-team QPEG
 */
export function qpeg(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QuickTime Animation (RLE) video
 */
export function qtrle(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AJA Kona 10-bit RGB Codec
 */
export function r10k(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed RGB 10-bit
 */
export function r210(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RemotelyAnywhere Screen Capture
 * @param options.skip_cursor - skip the cursor (default false)
 */
export function rasc(options?: {
  skip_cursor?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "skip_cursor": options?.skip_cursor,

  });
}







/**
 * raw video
 * @param options.top - top field first (default auto)
 */
export function rawvideo(options?: {
  top?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "top": options?.top,

  });
}







/**
 * RL2 video
 */
export function rl2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * id RoQ video (codec roq)
 */
export function roqvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QuickTime video (RPZA)
 */
export function rpza(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * innoHeim/Rsupport Screen Capture Codec
 */
export function rscc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RTV1 (RivaTuner Video)
 */
export function rtv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealVideo 1.0
 */
export function rv10(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealVideo 2.0
 */
export function rv20(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealVideo 3.0
 */
export function rv30(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealVideo 4.0
 */
export function rv40(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealVideo 6.0
 */
export function rv60(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LucasArts SANM/Smush video
 */
export function sanm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ScreenPressor
 */
export function scpr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Screenpresso
 */
export function screenpresso(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Digital Pictures SGA Video
 */
export function sga(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SGI image
 */
export function sgi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Silicon Graphics RLE 8-bit video
 */
export function sgirle(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * BitJazz SheerVideo
 */
export function sheervideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Simbiosis Interactive IMX Video
 */
export function simbiosis_imx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Smacker video (codec smackvideo)
 */
export function smackvid(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QuickTime Graphics (SMC)
 */
export function smc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SMV JPEG
 */
export function smvjpeg(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Snow
 */
export function snow(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sunplus JPEG (SP5X)
 */
export function sp5x(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * NewTek SpeedHQ
 */
export function speedhq(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Screen Recorder Gold Codec
 */
export function srgc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sun Rasterfile image
 */
export function sunrast(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Librsvg rasterizer (codec svg)
 * @param options.width - Width to render to (0 for default) (from 0 to INT_MAX) (default 0)
 * @param options.height - Height to render to (0 for default) (from 0 to INT_MAX) (default 0)
 * @param options.keep_ar - Keep aspect ratio with custom width/height (default true)
 */
export function librsvg(options?: {
  width?: number | null;
  height?: number | null;
  keep_ar?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "width": options?.width,
    "height": options?.height,
    "keep_ar": options?.keep_ar,

  });
}







/**
 * Sorenson Vector Quantizer 1 / Sorenson Video 1 / SVQ1
 */
export function svq1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sorenson Vector Quantizer 3 / Sorenson Video 3 / SVQ3
 */
export function svq3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Truevision Targa image
 */
export function targa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Pinnacle TARGA CineWave YUV16
 */
export function targa_y216(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TDSC
 */
export function tdsc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Electronic Arts TGQ video (codec tgq)
 */
export function eatgq(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Electronic Arts TGV video (codec tgv)
 */
export function eatgv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Theora
 */
export function theora(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Nintendo Gamecube THP video
 */
export function thp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Tiertex Limited SEQ video
 */
export function tiertexseqvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TIFF image
 * @param options.subimage - decode subimage instead if available (default false)
 * @param options.thumbnail - decode embedded thumbnail subimage instead if available (default false)
 * @param options.page - page number of multi-page image to decode (starting from 1) (from 0 to 65535) (default 0)
 */
export function tiff(options?: {
  subimage?: boolean | null;
  thumbnail?: boolean | null;
  page?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "subimage": options?.subimage,
    "thumbnail": options?.thumbnail,
    "page": options?.page,

  });
}







/**
 * 8088flex TMV
 */
export function tmv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Electronic Arts TQI Video (codec tqi)
 */
export function eatqi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Duck TrueMotion 1.0
 */
export function truemotion1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Duck TrueMotion 2.0
 */
export function truemotion2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Duck TrueMotion 2.0 Real Time
 */
export function truemotion2rt(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TechSmith Screen Capture Codec (codec tscc)
 */
export function camtasia(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TechSmith Screen Codec 2
 */
export function tscc2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Renderware TXD (TeXture Dictionary) image
 */
export function txd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * IBM UltiMotion (codec ulti)
 */
export function ultimotion(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Ut Video
 */
export function utvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed 4:2:2 10-bit
 * @param options.custom_stride - Custom V210 stride (from -1 to INT_MAX) (default 0)
 */
export function v210(options?: {
  custom_stride?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "custom_stride": options?.custom_stride,

  });
}







/**
 * Uncompressed 4:2:2 10-bit
 */
export function v210x(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed 4:4:4
 */
export function v308(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed QT 4:4:4:4
 */
export function v408(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed 4:4:4 10-bit
 */
export function v410(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Beam Software VB
 */
export function vb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * VBLE Lossless Codec
 */
export function vble(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Vizrt Binary Image
 */
export function vbn(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SMPTE VC-1
 */
export function vc1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem VC1 decoder wrapper (codec vc1)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function vc1_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID VC1 decoder (codec vc1)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function vc1_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * Windows Media Video 9 Image v2
 */
export function vc1image(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATI VCR1
 */
export function vcr1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Miro VideoXL (codec vixl)
 */
export function xl(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sierra VMD video
 */
export function vmdvideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * vMix Video
 */
export function vmix(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * VMware Screen Codec / VMware Video
 */
export function vmnc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * null video
 */
export function vnull(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP3
 */
export function vp3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP4
 */
export function vp4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP5
 */
export function vp5(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP6
 */
export function vp6(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP6 (Flash version, with alpha channel)
 */
export function vp6a(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP6 (Flash version)
 */
export function vp6f(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP7
 */
export function vp7(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 VP8
 */
export function vp8(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem VP8 decoder wrapper (codec vp8)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function vp8_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * libvpx VP8 (codec vp8)
 */
export function libvpx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Nvidia CUVID VP8 decoder (codec vp8)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function vp8_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * Google VP9
 */
export function vp9(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * V4L2 mem2mem VP9 decoder wrapper (codec vp9)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 2 to INT_MAX) (default 20)
 */
export function vp9_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * Nvidia CUVID VP9 decoder (codec vp9)
 * @param options.deint - Set deinterlacing mode (from 0 to 2) (default weave)
 * @param options.gpu - GPU to be used for decoding
 * @param options.surfaces - Maximum surfaces to be used for decoding (from -1 to INT_MAX) (default -1)
 * @param options.drop_second_field - Drop second field when deinterlacing (default false)
 * @param options.crop - Crop (top)x(bottom)x(left)x(right)
 * @param options.resize - Resize (width)x(height)
 */
export function vp9_cuvid(options?: {
  deint?: number | null | "weave" | "bob" | "adaptive";
  gpu?: string | null;
  surfaces?: number | null;
  drop_second_field?: boolean | null;
  crop?: string | null;
  resize?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "deint": options?.deint,
    "gpu": options?.gpu,
    "surfaces": options?.surfaces,
    "drop_second_field": options?.drop_second_field,
    "crop": options?.crop,
    "resize": options?.resize,

  });
}







/**
 * ViewQuest VQC
 */
export function vqc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * VVC (Versatile Video Coding)
 */
export function vvc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * WBMP (Wireless Application Protocol Bitmap) image
 */
export function wbmp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * WinCAM Motion Video
 */
export function wcmv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * WebP image
 */
export function webp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Video 7
 */
export function wmv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Video 8
 */
export function wmv2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Video 9
 */
export function wmv3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Video 9 Image
 */
export function wmv3image(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Winnov WNV1
 */
export function wnv1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AVPacket to AVFrame passthrough
 */
export function wrapped_avframe(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Westwood Studios VQA (Vector Quantized Animation) video (codec ws_vqa)
 */
export function vqavideo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Wing Commander III / Xan
 */
export function xan_wc3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Wing Commander IV / Xxan
 */
export function xan_wc4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * eXtended BINary text
 */
export function xbin(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * XBM (X BitMap) image
 */
export function xbm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * X-face image
 */
export function xface(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * XPM (X PixMap) image
 */
export function xpm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * XWD (X Window Dump) image
 */
export function xwd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed YUV 4:1:1 12-bit
 */
export function y41p(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * YUY2 Lossless Codec
 */
export function ylc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Psygnosis YOP Video
 */
export function yop(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed 4:2:0
 */
export function yuv4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ZeroCodec Lossless Video
 */
export function zerocodec(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LCL (LossLess Codec Library) ZLIB
 */
export function zlib(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Zip Motion Blocks Video
 */
export function zmbv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * 8SVX exponential
 */
export function _8svx_exp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * 8SVX fibonacci
 */
export function _8svx_fib(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AAC (Advanced Audio Coding)
 * @param options.dual_mono_mode - Select the channel to decode for dual mono (from -1 to 2) (default auto)
 * @param options.channel_order - Order in which the channels are to be exported (from 0 to 1) (default default)
 */
export function aac(options?: {
  dual_mono_mode?: number | null | "auto" | "main" | "sub" | "both";
  channel_order?: number | null | "default" | "coded";

}): FFMpegDecoderOption {
  return merge({
    "dual_mono_mode": options?.dual_mono_mode,
    "channel_order": options?.channel_order,

  });
}







/**
 * AAC (Advanced Audio Coding) (codec aac)
 * @param options.dual_mono_mode - Select the channel to decode for dual mono (from -1 to 2) (default auto)
 * @param options.channel_order - Order in which the channels are to be exported (from 0 to 1) (default default)
 */
export function aac_fixed(options?: {
  dual_mono_mode?: number | null | "auto" | "main" | "sub" | "both";
  channel_order?: number | null | "default" | "coded";

}): FFMpegDecoderOption {
  return merge({
    "dual_mono_mode": options?.dual_mono_mode,
    "channel_order": options?.channel_order,

  });
}







/**
 * Fraunhofer FDK AAC (codec aac)
 * @param options.conceal - Error concealment method (from 0 to 2) (default noise)
 * @param options.drc_boost - Dynamic Range Control: boost, where [0] is none and [127] is max boost (from -1 to 127) (default -1)
 * @param options.drc_cut - Dynamic Range Control: attenuation factor, where [0] is none and [127] is max compression (from -1 to 127) (default -1)
 * @param options.drc_level - Dynamic Range Control: reference level, quantized to 0.25dB steps where [0] is 0dB and [127] is -31.75dB, -1 for auto, and -2 for disabled (from -2 to 127) (default -1)
 * @param options.drc_heavy - Dynamic Range Control: heavy compression, where [1] is on (RF mode) and [0] is off (from -1 to 1) (default -1)
 * @param options.level_limit - Signal level limiting (default auto)
 * @param options.drc_effect - Dynamic Range Control: effect type, where e.g. [0] is none and [6] is general (from -1 to 8) (default -1)
 * @param options.album_mode - Dynamic Range Control: album mode, where [0] is off and [1] is on (from -1 to 1) (default -1)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function libfdk_aac(options?: {
  conceal?: number | null | "spectral" | "noise" | "energy";
  drc_boost?: number | null;
  drc_cut?: number | null;
  drc_level?: number | null;
  drc_heavy?: number | null;
  level_limit?: boolean | null;
  drc_effect?: number | null;
  album_mode?: number | null;
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "conceal": options?.conceal,
    "drc_boost": options?.drc_boost,
    "drc_cut": options?.drc_cut,
    "drc_level": options?.drc_level,
    "drc_heavy": options?.drc_heavy,
    "level_limit": options?.level_limit,
    "drc_effect": options?.drc_effect,
    "album_mode": options?.album_mode,
    "downmix": options?.downmix,

  });
}







/**
 * AAC LATM (Advanced Audio Coding LATM syntax)
 */
export function aac_latm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATSC A/52A (AC-3)
 * @param options.cons_noisegen - enable consistent noise generation (default false)
 * @param options.drc_scale - percentage of dynamic range compression to apply (from 0 to 6) (default 1)
 * @param options.heavy_compr - enable heavy dynamic range compression (default false)
 * @param options.target_level - target level in -dBFS (0 not applied) (from -31 to 0) (default 0)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function ac3(options?: {
  cons_noisegen?: boolean | null;
  drc_scale?: number | null;
  heavy_compr?: boolean | null;
  target_level?: number | null;
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "cons_noisegen": options?.cons_noisegen,
    "drc_scale": options?.drc_scale,
    "heavy_compr": options?.heavy_compr,
    "target_level": options?.target_level,
    "downmix": options?.downmix,

  });
}







/**
 * ATSC A/52A (AC-3) (codec ac3)
 * @param options.cons_noisegen - enable consistent noise generation (default false)
 * @param options.drc_scale - percentage of dynamic range compression to apply (from 0 to 6) (default 1)
 * @param options.heavy_compr - enable heavy dynamic range compression (default false)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function ac3_fixed(options?: {
  cons_noisegen?: boolean | null;
  drc_scale?: number | null;
  heavy_compr?: boolean | null;
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "cons_noisegen": options?.cons_noisegen,
    "drc_scale": options?.drc_scale,
    "heavy_compr": options?.heavy_compr,
    "downmix": options?.downmix,

  });
}







/**
 * ADPCM 4X Movie
 */
export function adpcm_4xm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SEGA CRI ADX ADPCM
 */
export function adpcm_adx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Nintendo Gamecube AFC
 */
export function adpcm_afc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM AmuseGraphics Movie
 */
export function adpcm_agm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Yamaha AICA
 */
export function adpcm_aica(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Argonaut Games
 */
export function adpcm_argo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Creative Technology
 */
export function adpcm_ct(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Nintendo Gamecube DTK
 */
export function adpcm_dtk(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts
 */
export function adpcm_ea(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts Maxis CDROM XA
 */
export function adpcm_ea_maxis_xa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts R1
 */
export function adpcm_ea_r1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts R2
 */
export function adpcm_ea_r2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts R3
 */
export function adpcm_ea_r3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Electronic Arts XAS
 */
export function adpcm_ea_xas(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * G.722 ADPCM (codec adpcm_g722)
 * @param options.bits_per_codeword - Bits per G722 codeword (from 6 to 8) (default 8)
 */
export function g722(options?: {
  bits_per_codeword?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "bits_per_codeword": options?.bits_per_codeword,

  });
}







/**
 * G.726 ADPCM (codec adpcm_g726)
 */
export function g726(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * G.726 ADPCM little-endian (codec adpcm_g726le)
 */
export function g726le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Acorn Replay
 */
export function adpcm_ima_acorn(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA High Voltage Software ALP
 */
export function adpcm_ima_alp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA AMV
 */
export function adpcm_ima_amv(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA CRYO APC
 */
export function adpcm_ima_apc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Ubisoft APM
 */
export function adpcm_ima_apm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Cunning Developments
 */
export function adpcm_ima_cunning(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Eurocom DAT4
 */
export function adpcm_ima_dat4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Duck DK3
 */
export function adpcm_ima_dk3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Duck DK4
 */
export function adpcm_ima_dk4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Electronic Arts EACS
 */
export function adpcm_ima_ea_eacs(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Electronic Arts SEAD
 */
export function adpcm_ima_ea_sead(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Funcom ISS
 */
export function adpcm_ima_iss(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA MobiClip MOFLEX
 */
export function adpcm_ima_moflex(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Capcom's MT Framework
 */
export function adpcm_ima_mtf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Dialogic OKI
 */
export function adpcm_ima_oki(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA QuickTime
 */
export function adpcm_ima_qt(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Radical
 */
export function adpcm_ima_rad(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Loki SDL MJPEG
 */
export function adpcm_ima_smjpeg(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Simon & Schuster Interactive
 */
export function adpcm_ima_ssi(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA WAV
 */
export function adpcm_ima_wav(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Westwood
 */
export function adpcm_ima_ws(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM IMA Xbox
 */
export function adpcm_ima_xbox(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Microsoft
 */
export function adpcm_ms(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM MTAF
 */
export function adpcm_mtaf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Playstation
 */
export function adpcm_psx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Sanyo
 */
export function adpcm_sanyo(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Sound Blaster Pro 2-bit
 */
export function adpcm_sbpro_2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Sound Blaster Pro 2.6-bit
 */
export function adpcm_sbpro_3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Sound Blaster Pro 4-bit
 */
export function adpcm_sbpro_4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Shockwave Flash
 */
export function adpcm_swf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Nintendo THP
 */
export function adpcm_thp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Nintendo THP (little-endian)
 */
export function adpcm_thp_le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * LucasArts VIMA audio
 */
export function adpcm_vima(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM CDROM XA
 */
export function adpcm_xa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Konami XMD
 */
export function adpcm_xmd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Yamaha
 */
export function adpcm_yamaha(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADPCM Zork
 */
export function adpcm_zork(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ALAC (Apple Lossless Audio Codec)
 * @param options.extra_bits_bug - Force non-standard decoding process (default false)
 */
export function alac(options?: {
  extra_bits_bug?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "extra_bits_bug": options?.extra_bits_bug,

  });
}







/**
 * AMR-NB (Adaptive Multi-Rate NarrowBand) (codec amr_nb)
 */
export function amrnb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * OpenCORE AMR-NB (Adaptive Multi-Rate Narrow-Band) (codec amr_nb)
 */
export function libopencore_amrnb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * AMR-WB (Adaptive Multi-Rate WideBand) (codec amr_wb)
 */
export function amrwb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * OpenCORE AMR-WB (Adaptive Multi-Rate Wide-Band) (codec amr_wb)
 */
export function libopencore_amrwb(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * null audio
 */
export function anull(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Marian's A-pac audio
 */
export function apac(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Monkey's Audio
 * @param options.max_samples - maximum number of samples decoded per call (from 1 to INT_MAX) (default 4608)
 */
export function ape(options?: {
  max_samples?: number | null | "all";

}): FFMpegDecoderOption {
  return merge({
    "max_samples": options?.max_samples,

  });
}







/**
 * aptX (Audio Processing Technology for Bluetooth)
 */
export function aptx(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * aptX HD (Audio Processing Technology for Bluetooth)
 */
export function aptx_hd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC1 (Adaptive TRansform Acoustic Coding)
 */
export function atrac1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC3 (Adaptive TRansform Acoustic Coding 3)
 */
export function atrac3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC3 AL (Adaptive TRansform Acoustic Coding 3 Advanced Lossless)
 */
export function atrac3al(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC3+ (Adaptive TRansform Acoustic Coding 3+) (codec atrac3p)
 */
export function atrac3plus(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC3+ AL (Adaptive TRansform Acoustic Coding 3+ Advanced Lossless) (codec atrac3pal)
 */
export function atrac3plusal(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATRAC9 (Adaptive TRansform Acoustic Coding 9)
 */
export function atrac9(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * On2 Audio for Video Codec (codec avc)
 */
export function on2avc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bink Audio (DCT)
 */
export function binkaudio_dct(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bink Audio (RDFT)
 */
export function binkaudio_rdft(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Discworld II BMV audio
 */
export function bmv_audio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Bonk audio
 */
export function bonk(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Cuberoot-Delta-Exact
 */
export function cbd2_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * codec2 decoder using libcodec2 (codec codec2)
 */
export function libcodec2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RFC 3389 comfort noise generator
 */
export function comfortnoise(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Cook / Cooker / Gecko (RealAudio G2)
 */
export function cook(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Xilam DERF
 */
export function derf_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DFPWM1a audio
 */
export function dfpwm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Dolby E
 * @param options.channel_order - Order in which the channels are to be exported (from 0 to 1) (default default)
 */
export function dolby_e(options?: {
  channel_order?: number | null | "default" | "coded";

}): FFMpegDecoderOption {
  return merge({
    "channel_order": options?.channel_order,

  });
}







/**
 * DSD (Direct Stream Digital), least significant bit first
 */
export function dsd_lsbf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DSD (Direct Stream Digital), least significant bit first, planar
 */
export function dsd_lsbf_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DSD (Direct Stream Digital), most significant bit first
 */
export function dsd_msbf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DSD (Direct Stream Digital), most significant bit first, planar
 */
export function dsd_msbf_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Delphine Software International CIN audio
 */
export function dsicinaudio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Digital Speech Standard - Standard Play mode (DSS SP)
 */
export function dss_sp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DST (Digital Stream Transfer)
 */
export function dst(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DCA (DTS Coherent Acoustics) (codec dts)
 * @param options.core_only - Decode core only without extensions (default false)
 * @param options.channel_order - Order in which the channels are to be exported (from 0 to 1) (default default)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function dca(options?: {
  core_only?: boolean | null;
  channel_order?: number | null | "default" | "coded";
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "core_only": options?.core_only,
    "channel_order": options?.channel_order,
    "downmix": options?.downmix,

  });
}







/**
 * Ulead DV Audio
 */
export function dvaudio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ATSC A/52B (AC-3, E-AC-3)
 * @param options.cons_noisegen - enable consistent noise generation (default false)
 * @param options.drc_scale - percentage of dynamic range compression to apply (from 0 to 6) (default 1)
 * @param options.heavy_compr - enable heavy dynamic range compression (default false)
 * @param options.target_level - target level in -dBFS (0 not applied) (from -31 to 0) (default 0)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function eac3(options?: {
  cons_noisegen?: boolean | null;
  drc_scale?: number | null;
  heavy_compr?: boolean | null;
  target_level?: number | null;
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "cons_noisegen": options?.cons_noisegen,
    "drc_scale": options?.drc_scale,
    "heavy_compr": options?.heavy_compr,
    "target_level": options?.target_level,
    "downmix": options?.downmix,

  });
}







/**
 * EVRC (Enhanced Variable Rate Codec)
 * @param options.postfilter - enable postfilter (default true)
 */
export function evrc(options?: {
  postfilter?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "postfilter": options?.postfilter,

  });
}







/**
 * MobiClip FastAudio
 */
export function fastaudio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * FLAC (Free Lossless Audio Codec)
 * @param options.use_buggy_lpc - emulate old buggy lavc behavior (default false)
 */
export function flac(options?: {
  use_buggy_lpc?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "use_buggy_lpc": options?.use_buggy_lpc,

  });
}







/**
 * FTR Voice
 */
export function ftr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * G.723.1
 * @param options.postfilter - enable postfilter (default true)
 */
export function g723_1(options?: {
  postfilter?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "postfilter": options?.postfilter,

  });
}







/**
 * G.728)
 */
export function g728(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * G.729
 */
export function g729(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Gremlin
 */
export function gremlin_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * GSM
 */
export function gsm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libgsm GSM (codec gsm)
 */
export function libgsm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * GSM Microsoft variant
 */
export function gsm_ms(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libgsm GSM Microsoft variant (codec gsm_ms)
 */
export function libgsm_ms(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * CRI HCA
 */
export function hca(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * HCOM Audio
 */
export function hcom(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * IAC (Indeo Audio Coder)
 */
export function iac(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * iLBC (Internet Low Bitrate Codec)
 */
export function ilbc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * IMC (Intel Music Coder)
 */
export function imc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Interplay
 */
export function interplay_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Interplay ACM
 */
export function interplayacm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MACE (Macintosh Audio Compression/Expansion) 3:1
 */
export function mace3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MACE (Macintosh Audio Compression/Expansion) 6:1
 */
export function mace6(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Voxware MetaSound
 */
export function metasound(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Micronas SC-4 Audio
 */
export function misc4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MLP (Meridian Lossless Packing)
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function mlp(options?: {
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "downmix": options?.downmix,

  });
}







/**
 * MP1 (MPEG audio layer 1)
 */
export function mp1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP1 (MPEG audio layer 1) (codec mp1)
 */
export function mp1float(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP2 (MPEG audio layer 2)
 */
export function mp2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP2 (MPEG audio layer 2) (codec mp2)
 */
export function mp2float(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP3 (MPEG audio layer 3) (codec mp3)
 */
export function mp3float(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP3 (MPEG audio layer 3)
 */
export function mp3(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADU (Application Data Unit) MP3 (MPEG audio layer 3) (codec mp3adu)
 */
export function mp3adufloat(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ADU (Application Data Unit) MP3 (MPEG audio layer 3)
 */
export function mp3adu(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP3onMP4 (codec mp3on4)
 */
export function mp3on4float(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MP3onMP4
 */
export function mp3on4(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MPEG-4 Audio Lossless Coding (ALS) (codec mp4als)
 * @param options.max_order - Sets the maximum order (ALS simple profile allows max 15) (from 0 to 1023) (default 1023)
 */
export function als(options?: {
  max_order?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "max_order": options?.max_order,

  });
}







/**
 * MSN Siren
 */
export function msnsiren(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Musepack SV7 (codec musepack7)
 */
export function mpc7(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Musepack SV8 (codec musepack8)
 */
export function mpc8(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Nellymoser Asao
 */
export function nellymoser(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Opus
 * @param options.apply_phase_inv - Apply intensity stereo phase inversion (default true)
 */
export function opus(options?: {
  apply_phase_inv?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "apply_phase_inv": options?.apply_phase_inv,

  });
}







/**
 * libopus Opus (codec opus)
 * @param options.apply_phase_inv - Apply intensity stereo phase inversion (default true)
 */
export function libopus(options?: {
  apply_phase_inv?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "apply_phase_inv": options?.apply_phase_inv,

  });
}







/**
 * OSQ (Original Sound Quality)
 */
export function osq(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Amazing Studio Packed Animation File Audio
 */
export function paf_audio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM A-law / G.711 A-law
 */
export function pcm_alaw(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16|20|24-bit big-endian for Blu-ray media
 */
export function pcm_bluray(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16|20|24-bit big-endian for DVD media
 */
export function pcm_dvd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 16.8 floating point little-endian
 */
export function pcm_f16le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 24.0 floating point little-endian
 */
export function pcm_f24le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating point big-endian
 */
export function pcm_f32be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating point little-endian
 */
export function pcm_f32le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 64-bit floating point big-endian
 */
export function pcm_f64be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM 64-bit floating point little-endian
 */
export function pcm_f64le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 20-bit little-endian planar
 */
export function pcm_lxf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM mu-law / G.711 mu-law
 */
export function pcm_mulaw(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit big-endian
 */
export function pcm_s16be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit big-endian planar
 */
export function pcm_s16be_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit little-endian
 */
export function pcm_s16le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit little-endian planar
 */
export function pcm_s16le_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit big-endian
 */
export function pcm_s24be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM D-Cinema audio signed 24-bit
 */
export function pcm_s24daud(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit little-endian
 */
export function pcm_s24le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit little-endian planar
 */
export function pcm_s24le_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit big-endian
 */
export function pcm_s32be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit little-endian
 */
export function pcm_s32le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit little-endian planar
 */
export function pcm_s32le_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 64-bit big-endian
 */
export function pcm_s64be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 64-bit little-endian
 */
export function pcm_s64le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit
 */
export function pcm_s8(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit planar
 */
export function pcm_s8_planar(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM SGA
 */
export function pcm_sga(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit big-endian
 */
export function pcm_u16be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit little-endian
 */
export function pcm_u16le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit big-endian
 */
export function pcm_u24be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit little-endian
 */
export function pcm_u24le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit big-endian
 */
export function pcm_u32be(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit little-endian
 */
export function pcm_u32le(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 8-bit
 */
export function pcm_u8(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PCM Archimedes VIDC
 */
export function pcm_vidc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QCELP / PureVoice
 */
export function qcelp(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QDesign Music Codec 2
 */
export function qdm2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QDesign Music Codec 1
 */
export function qdmc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * QOA (Quite OK Audio)
 */
export function qoa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealAudio 1.0 (14.4K) (codec ra_144)
 */
export function real_144(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealAudio 2.0 (28.8K) (codec ra_288)
 */
export function real_288(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealAudio Lossless
 */
export function ralf(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RKA (RK Audio)
 */
export function rka(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM id RoQ
 */
export function roq_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SMPTE 302M
 * @param options.non_pcm_mode - Chooses what to do with NON-PCM (from 0 to 3) (default decode_drop)
 */
export function s302m(options?: {
  non_pcm_mode?: number | null | "copy" | "drop" | "decode_copy" | "decode_drop";

}): FFMpegDecoderOption {
  return merge({
    "non_pcm_mode": options?.non_pcm_mode,

  });
}







/**
 * SBC (low-complexity subband codec)
 */
export function sbc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Squareroot-Delta-Exact
 */
export function sdx2_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Shorten
 */
export function shorten(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * RealAudio SIPR / ACELP.NET
 */
export function sipr(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Siren
 */
export function siren(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Smacker audio (codec smackaudio)
 */
export function smackaud(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Sol
 */
export function sol_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sonic
 */
export function sonic(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Speex
 */
export function speex(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libspeex Speex (codec speex)
 */
export function libspeex(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TAK (Tom's lossless Audio Kompressor)
 */
export function tak(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TrueHD
 * @param options.downmix - Request a specific channel layout from the decoder
 */
export function truehd(options?: {
  downmix?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "downmix": options?.downmix,

  });
}







/**
 * DSP Group TrueSpeech
 */
export function truespeech(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * TTA (True Audio)
 * @param options.password - Set decoding password
 */
export function tta(options?: {
  password?: string | null;

}): FFMpegDecoderOption {
  return merge({
    "password": options?.password,

  });
}







/**
 * VQF TwinVQ
 */
export function twinvq(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Sierra VMD audio
 */
export function vmdaudio(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Vorbis
 */
export function vorbis(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * libvorbis (codec vorbis)
 */
export function libvorbis(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Marble WADY
 */
export function wady_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Waveform Archiver
 */
export function wavarc(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Wave synthesis pseudo-codec
 */
export function wavesynth(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * WavPack
 */
export function wavpack(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Westwood Audio (SND1) (codec westwood_snd1)
 */
export function ws_snd1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio Lossless
 */
export function wmalossless(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio 9 Professional
 */
export function wmapro(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio 1
 */
export function wmav1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio 2
 */
export function wmav2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio Voice
 */
export function wmavoice(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DPCM Xan
 */
export function xan_dpcm(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Xbox Media Audio 1
 */
export function xma1(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Xbox Media Audio 2
 */
export function xma2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ASS (Advanced SubStation Alpha) subtitle (codec ass)
 */
export function ssa(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * ASS (Advanced SubStation Alpha) subtitle
 */
export function ass(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * DVB subtitles (codec dvb_subtitle)
 * @param options.compute_edt - compute end of time using pts or timeout (default false)
 * @param options.compute_clut - compute clut when not available(-1) or only once (-2) or always(1) or never(0) (default auto)
 * @param options.dvb_substream - (from -1 to 63) (default -1)
 */
export function dvbsub(options?: {
  compute_edt?: boolean | null;
  compute_clut?: boolean | null;
  dvb_substream?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "compute_edt": options?.compute_edt,
    "compute_clut": options?.compute_clut,
    "dvb_substream": options?.dvb_substream,

  });
}







/**
 * DVD subtitles (codec dvd_subtitle)
 * @param options.palette - set the global palette
 * @param options.ifo_palette - obtain the global palette from .IFO file
 * @param options.forced_subs_only - Only show forced subtitles (default false)
 */
export function dvdsub(options?: {
  palette?: string | null;
  ifo_palette?: string | null;
  forced_subs_only?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "palette": options?.palette,
    "ifo_palette": options?.ifo_palette,
    "forced_subs_only": options?.forced_subs_only,

  });
}







/**
 * Closed Captions (EIA-608 / CEA-708) (codec eia_608)
 * @param options.real_time - emit subtitle events as they are decoded for real-time display (default false)
 * @param options.real_time_latency_msec - minimum elapsed time between emitting real-time subtitle events (from 0 to 500) (default 200)
 * @param options.data_field - select data field (from -1 to 1) (default auto)
 */
export function cc_dec(options?: {
  real_time?: boolean | null;
  real_time_latency_msec?: number | null;
  data_field?: number | null | "auto" | "first" | "second";

}): FFMpegDecoderOption {
  return merge({
    "real_time": options?.real_time,
    "real_time_latency_msec": options?.real_time_latency_msec,
    "data_field": options?.data_field,

  });
}







/**
 * HDMV Presentation Graphic Stream subtitles (codec hdmv_pgs_subtitle)
 * @param options.forced_subs_only - Only show forced subtitles (default false)
 */
export function pgssub(options?: {
  forced_subs_only?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "forced_subs_only": options?.forced_subs_only,

  });
}







/**
 * JACOsub subtitle
 */
export function jacosub(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * MicroDVD subtitle
 */
export function microdvd(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * 3GPP Timed Text subtitle
 * @param options.width - Frame width, usually video width (from 0 to INT_MAX) (default 0)
 * @param options.height - Frame height, usually video height (from 0 to INT_MAX) (default 0)
 */
export function mov_text(options?: {
  width?: number | null;
  height?: number | null;

}): FFMpegDecoderOption {
  return merge({
    "width": options?.width,
    "height": options?.height,

  });
}







/**
 * MPL2 subtitle
 */
export function mpl2(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * PJS subtitle
 * @param options.keep_ass_markup - Set if ASS tags must be escaped (default false)
 */
export function pjs(options?: {
  keep_ass_markup?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "keep_ass_markup": options?.keep_ass_markup,

  });
}







/**
 * RealText subtitle
 */
export function realtext(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SAMI subtitle
 */
export function sami(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * Spruce subtitle format
 * @param options.keep_ass_markup - Set if ASS tags must be escaped (default false)
 */
export function stl(options?: {
  keep_ass_markup?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "keep_ass_markup": options?.keep_ass_markup,

  });
}







/**
 * SubRip subtitle (codec subrip)
 */
export function srt(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SubRip subtitle
 */
export function subrip(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SubViewer subtitle
 */
export function subviewer(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * SubViewer1 subtitle
 * @param options.keep_ass_markup - Set if ASS tags must be escaped (default false)
 */
export function subviewer1(options?: {
  keep_ass_markup?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "keep_ass_markup": options?.keep_ass_markup,

  });
}







/**
 * Raw text subtitle
 * @param options.keep_ass_markup - Set if ASS tags must be escaped (default false)
 */
export function text(options?: {
  keep_ass_markup?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "keep_ass_markup": options?.keep_ass_markup,

  });
}







/**
 * VPlayer subtitle
 * @param options.keep_ass_markup - Set if ASS tags must be escaped (default false)
 */
export function vplayer(options?: {
  keep_ass_markup?: boolean | null;

}): FFMpegDecoderOption {
  return merge({
    "keep_ass_markup": options?.keep_ass_markup,

  });
}







/**
 * WebVTT subtitle
 */
export function webvtt(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}







/**
 * XSUB
 */
export function xsub(options?: {

}): FFMpegDecoderOption {
  return merge({

  });
}
