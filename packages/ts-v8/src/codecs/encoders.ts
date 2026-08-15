// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg encoder option factories.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegEncoderOption = Readonly<Record<string, unknown>>;







/**
 * Multicolor charset for Commodore 64 (codec a64_multi)
 */
export function a64multi(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Multicolor charset for Commodore 64, extended with 5th color (colram) (codec a64_multi5)
 */
export function a64multi5(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Alias/Wavefront PIX image
 */
export function alias_pix(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * AMV Video
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 */
export function amv(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,

  });
}







/**
 * APNG (Animated Portable Network Graphics) image
 * @param options.dpi - Set image resolution (in dots per inch) (from 0 to 65536) (default 0)
 * @param options.dpm - Set image resolution (in dots per meter) (from 0 to 65536) (default 0)
 * @param options.pred - Prediction method (from 0 to 5) (default paeth)
 */
export function apng(options?: {
  dpi?: number | null;
  dpm?: number | null;
  pred?: number | null | "none" | "sub" | "up" | "avg" | "paeth" | "mixed";

}): FFMpegEncoderOption {
  return merge({
    "dpi": options?.dpi,
    "dpm": options?.dpm,
    "pred": options?.pred,

  });
}







/**
 * ASUS V1
 */
export function asv1(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * ASUS V2
 */
export function asv2(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * librav1e AV1 (codec av1)
 * @param options.qp - use constant quantizer mode (from -1 to 255) (default -1)
 * @param options.speed - what speed preset to use (from -1 to 10) (default -1)
 * @param options.tiles - number of tiles encode with (from -1 to I64_MAX) (default 0)
 * @param options.tile_rows - number of tiles rows to encode with (from -1 to I64_MAX) (default 0)
 * @param options.tile_columns - number of tiles columns to encode with (from -1 to I64_MAX) (default 0)
 * @param options.rav1e_params - set the rav1e configuration using a :-separated list of key=value parameters
 */
export function librav1e(options?: {
  qp?: number | null;
  speed?: number | null;
  tiles?: number | null;
  tile_rows?: number | null;
  tile_columns?: number | null;
  rav1e_params?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "qp": options?.qp,
    "speed": options?.speed,
    "tiles": options?.tiles,
    "tile-rows": options?.tile_rows,
    "tile-columns": options?.tile_columns,
    "rav1e-params": options?.rav1e_params,

  });
}







/**
 * NVIDIA NVENC av1 encoder (codec av1)
 * @param options.preset - Set the encoding preset (from 0 to 18) (default p4)
 * @param options.tune - Set the encoding tuning info (from 1 to 5) (default hq)
 * @param options.level - Set the encoding level restriction (from 0 to 24) (default auto)
 * @param options.tier - Set the encoding tier (from 0 to 1) (default 0)
 * @param options.rc - Override the preset rate-control (from -1 to INT_MAX) (default -1)
 * @param options.multipass - Set the multipass encoding (from 0 to 2) (default disabled)
 * @param options.highbitdepth - Enable 10 bit encode for 8 bit input (default false)
 * @param options.tile_rows - Number of tile rows to encode with (from -1 to 64) (default -1)
 * @param options.tile_columns - Number of tile columns to encode with (from -1 to 64) (default -1)
 * @param options.surfaces - Number of concurrent surfaces (from 0 to 64) (default 0)
 * @param options.gpu - Selects which NVENC capable GPU to use. First GPU is 0, second is 1, and so on. (from -2 to INT_MAX) (default any)
 * @param options.rgb_mode - Configure how nvenc handles packed RGB input. (from 0 to INT_MAX) (default yuv420)
 * @param options.delay - Delay frame output by the given amount of frames (from 0 to INT_MAX) (default INT_MAX)
 * @param options.rc_lookahead - Number of frames to look ahead for rate-control (from 0 to INT_MAX) (default 0)
 * @param options.cq - Set target quality level (0 to 63, 0 means automatic) for constant quality mode in VBR rate control (from 0 to 63) (default 0)
 * @param options.init_qpP - Initial QP value for P frame (from -1 to 255) (default -1)
 * @param options.init_qpB - Initial QP value for B frame (from -1 to 255) (default -1)
 * @param options.init_qpI - Initial QP value for I frame (from -1 to 255) (default -1)
 * @param options.qp - Constant quantization parameter rate control method (from -1 to 255) (default -1)
 * @param options.qp_cb_offset - Quantization parameter offset for cb channel (from -12 to 12) (default 0)
 * @param options.qp_cr_offset - Quantization parameter offset for cr channel (from -12 to 12) (default 0)
 * @param options.qmin - Specifies the minimum QP used for rate control (from -1 to 255) (default -1)
 * @param options.qmax - Specifies the maximum QP used for rate control (from -1 to 255) (default -1)
 * @param options.no_scenecut - When lookahead is enabled, set this to 1 to disable adaptive I-frame insertion at scene cuts (default false)
 * @param options.forced_idr - If forcing keyframes, force them as IDR frames. (default false)
 * @param options.b_adapt - When lookahead is enabled, set this to 0 to disable adaptive B-frame decision (default true)
 * @param options.spatial_aq - set to 1 to enable Spatial AQ (default false)
 * @param options.temporal_aq - set to 1 to enable Temporal AQ (default false)
 * @param options.zerolatency - Set 1 to indicate zero latency operation (no reordering delay) (default false)
 * @param options.nonref_p - Set this to 1 to enable automatic insertion of non-reference P-frames (default false)
 * @param options.strict_gop - Set 1 to minimize GOP-to-GOP rate fluctuations (default false)
 * @param options.aq_strength - When Spatial AQ is enabled, this field is used to specify AQ strength. AQ strength scale is from 1 (low) - 15 (aggressive) (from 1 to 15) (default 8)
 * @param options.weighted_pred - Enable weighted prediction (default false)
 * @param options.b_ref_mode - Use B frames as references (from -1 to 2) (default -1)
 * @param options.dpb_size - Specifies the DPB size used for encoding (0 means automatic) (from 0 to INT_MAX) (default 0)
 * @param options.ldkfs - Low delay key frame scale; Specifies the Scene Change frame size increase allowed in case of single frame VBV and CBR (from 0 to 255) (default 0)
 * @param options.intra_refresh - Use Periodic Intra Refresh instead of IDR frames (default false)
 * @param options.timing_info - Include timing info in sequence/frame headers (default false)
 * @param options.extra_sei - Pass on extra SEI data (e.g. a53 cc) to be included in the bitstream (default true)
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.s12m_tc - Use timecode (if available) (default true)
 * @param options.cbr_padding - Pad the bitstream to ensure bitrate does not drop below the target in CBR mode (default false)
 * @param options.tf_level - Specifies the strength of the temporal filtering (from -1 to INT_MAX) (default -1)
 * @param options.lookahead_level - Specifies the lookahead level. Higher level may improve quality at the expense of performance. (from -1 to 15) (default -1)
 * @param options.split_encode_mode - Specifies the split encoding mode (from 0 to 15) (default auto)
 */
export function av1_nvenc(options?: {
  preset?: number | null | "default" | "slow" | "medium" | "fast" | "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7";
  tune?: number | null | "hq" | "uhq" | "ll" | "ull" | "lossless";
  level?: number | null | "auto" | "2" | "2.0" | "2.1" | "2.2" | "2.3" | "3" | "3.0" | "3.1" | "3.2" | "3.3" | "4" | "4.0" | "4.1" | "4.2" | "4.3" | "5" | "5.0" | "5.1" | "5.2" | "5.3" | "6" | "6.0" | "6.1" | "6.2" | "6.3" | "7" | "7.0" | "7.1" | "7.2" | "7.3";
  tier?: number | null | "0" | "1";
  rc?: number | null | "constqp" | "vbr" | "cbr";
  multipass?: number | null | "disabled" | "qres" | "fullres";
  highbitdepth?: boolean | null;
  tile_rows?: number | null;
  tile_columns?: number | null;
  surfaces?: number | null;
  gpu?: number | null | "any" | "list";
  rgb_mode?: number | null | "yuv420" | "yuv444" | "disabled";
  delay?: number | null;
  rc_lookahead?: number | null;
  cq?: number | null;
  init_qpP?: number | null;
  init_qpB?: number | null;
  init_qpI?: number | null;
  qp?: number | null;
  qp_cb_offset?: number | null;
  qp_cr_offset?: number | null;
  qmin?: number | null;
  qmax?: number | null;
  no_scenecut?: boolean | null;
  forced_idr?: boolean | null;
  b_adapt?: boolean | null;
  spatial_aq?: boolean | null;
  temporal_aq?: boolean | null;
  zerolatency?: boolean | null;
  nonref_p?: boolean | null;
  strict_gop?: boolean | null;
  aq_strength?: number | null;
  weighted_pred?: boolean | null;
  b_ref_mode?: number | null | "disabled" | "each" | "middle";
  dpb_size?: number | null;
  ldkfs?: number | null;
  intra_refresh?: boolean | null;
  timing_info?: boolean | null;
  extra_sei?: boolean | null;
  a53cc?: boolean | null;
  s12m_tc?: boolean | null;
  cbr_padding?: boolean | null;
  tf_level?: number | null | "0" | "4";
  lookahead_level?: number | null | "auto" | "0" | "1" | "2" | "3";
  split_encode_mode?: number | null | "disabled" | "auto" | "forced" | "2" | "3";

}): FFMpegEncoderOption {
  return merge({
    "preset": options?.preset,
    "tune": options?.tune,
    "level": options?.level,
    "tier": options?.tier,
    "rc": options?.rc,
    "multipass": options?.multipass,
    "highbitdepth": options?.highbitdepth,
    "tile-rows": options?.tile_rows,
    "tile-columns": options?.tile_columns,
    "surfaces": options?.surfaces,
    "gpu": options?.gpu,
    "rgb_mode": options?.rgb_mode,
    "delay": options?.delay,
    "rc-lookahead": options?.rc_lookahead,
    "cq": options?.cq,
    "init_qpP": options?.init_qpP,
    "init_qpB": options?.init_qpB,
    "init_qpI": options?.init_qpI,
    "qp": options?.qp,
    "qp_cb_offset": options?.qp_cb_offset,
    "qp_cr_offset": options?.qp_cr_offset,
    "qmin": options?.qmin,
    "qmax": options?.qmax,
    "no-scenecut": options?.no_scenecut,
    "forced-idr": options?.forced_idr,
    "b_adapt": options?.b_adapt,
    "spatial-aq": options?.spatial_aq,
    "temporal-aq": options?.temporal_aq,
    "zerolatency": options?.zerolatency,
    "nonref_p": options?.nonref_p,
    "strict_gop": options?.strict_gop,
    "aq-strength": options?.aq_strength,
    "weighted_pred": options?.weighted_pred,
    "b_ref_mode": options?.b_ref_mode,
    "dpb_size": options?.dpb_size,
    "ldkfs": options?.ldkfs,
    "intra-refresh": options?.intra_refresh,
    "timing-info": options?.timing_info,
    "extra_sei": options?.extra_sei,
    "a53cc": options?.a53cc,
    "s12m_tc": options?.s12m_tc,
    "cbr_padding": options?.cbr_padding,
    "tf_level": options?.tf_level,
    "lookahead_level": options?.lookahead_level,
    "split_encode_mode": options?.split_encode_mode,

  });
}







/**
 * AV1 (VAAPI) (codec av1)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.profile - Set profile (seq_profile) (from -99 to 255) (default -99)
 * @param options.tier - Set tier (seq_tier) (from 0 to 1) (default main)
 * @param options.level - Set level (seq_level_idx) (from -99 to 31) (default -99)
 * @param options.tiles - Tile columns x rows (Use minimal tile column/row number automatically by default)
 * @param options.tile_groups - Number of tile groups for encoding (from 1 to 4096) (default 1)
 */
export function av1_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  profile?: number | null | "main" | "high" | "professional";
  tier?: number | null | "main" | "high";
  level?: number | null | "2.0" | "2.1" | "3.0" | "3.1" | "4.0" | "4.1" | "5.0" | "5.1" | "5.2" | "5.3" | "6.0" | "6.1" | "6.2" | "6.3";
  tiles?: string | null;
  tile_groups?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "profile": options?.profile,
    "tier": options?.tier,
    "level": options?.level,
    "tiles": options?.tiles,
    "tile_groups": options?.tile_groups,

  });
}







/**
 * Avid 1:1 10-bit RGB Packer
 */
export function avrp(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Avid Meridien Uncompressed
 */
export function avui(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Bitpacked
 */
export function bitpacked(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * BMP (Windows and OS/2 bitmap)
 */
export function bmp(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * GoPro CineForm HD
 * @param options.quality - set quality (from 0 to 12) (default film3+)
 */
export function cfhd(options?: {
  quality?: number | null | "film3+" | "film3" | "film2+" | "film2" | "film1.5" | "film1+" | "film1" | "high+" | "high" | "medium+" | "medium" | "low+" | "low";

}): FFMpegEncoderOption {
  return merge({
    "quality": options?.quality,

  });
}







/**
 * Cinepak
 * @param options.max_extra_cb_iterations - Max extra codebook recalculation passes, more is better and slower (from 0 to INT_MAX) (default 2)
 * @param options.skip_empty_cb - Avoid wasting bytes, ignore vintage MacOS decoder (default false)
 * @param options.max_strips - Limit strips/frame, vintage compatible is 1..3, otherwise the more the better (from 1 to 32) (default 3)
 * @param options.min_strips - Enforce min strips/frame, more is worse and faster, must be <= max_strips (from 1 to 32) (default 1)
 * @param options.strip_number_adaptivity - How fast the strip number adapts, more is slightly better, much slower (from 0 to 31) (default 0)
 */
export function cinepak(options?: {
  max_extra_cb_iterations?: number | null;
  skip_empty_cb?: boolean | null;
  max_strips?: number | null;
  min_strips?: number | null;
  strip_number_adaptivity?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "max_extra_cb_iterations": options?.max_extra_cb_iterations,
    "skip_empty_cb": options?.skip_empty_cb,
    "max_strips": options?.max_strips,
    "min_strips": options?.min_strips,
    "strip_number_adaptivity": options?.strip_number_adaptivity,

  });
}







/**
 * Cirrus Logic AccuPak
 * @param options.dither_type - Dither type (from 0 to 2) (default 1)
 */
export function cljr(options?: {
  dither_type?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "dither_type": options?.dither_type,

  });
}







/**
 * SMPTE VC-2 (codec dirac)
 * @param options.tolerance - Max undershoot in percent (from 0 to 45) (default 5)
 * @param options.slice_width - Slice width (from 32 to 1024) (default 32)
 * @param options.slice_height - Slice height (from 8 to 1024) (default 16)
 * @param options.wavelet_depth - Transform depth (from 1 to 5) (default 4)
 * @param options.wavelet_type - Transform type (from 0 to 7) (default 9_7)
 * @param options.qm - Custom quantization matrix (from 0 to 3) (default default)
 */
export function vc2(options?: {
  tolerance?: number | null;
  slice_width?: number | null;
  slice_height?: number | null;
  wavelet_depth?: number | null;
  wavelet_type?: number | null | "9_7" | "5_3" | "haar" | "haar_noshift";
  qm?: number | null | "default" | "color" | "flat";

}): FFMpegEncoderOption {
  return merge({
    "tolerance": options?.tolerance,
    "slice_width": options?.slice_width,
    "slice_height": options?.slice_height,
    "wavelet_depth": options?.wavelet_depth,
    "wavelet_type": options?.wavelet_type,
    "qm": options?.qm,

  });
}







/**
 * VC3/DNxHD
 * @param options.nitris_compat - encode with Avid Nitris compatibility (default false)
 * @param options.ibias - intra quant bias (from INT_MIN to INT_MAX) (default 0)
 * @param options.profile - (from 0 to 5) (default dnxhd)
 */
export function dnxhd(options?: {
  nitris_compat?: boolean | null;
  ibias?: number | null;
  profile?: number | null | "dnxhd" | "dnxhr_444" | "dnxhr_hqx" | "dnxhr_hq" | "dnxhr_sq" | "dnxhr_lb";

}): FFMpegEncoderOption {
  return merge({
    "nitris_compat": options?.nitris_compat,
    "ibias": options?.ibias,
    "profile": options?.profile,

  });
}







/**
 * DPX (Digital Picture Exchange) image
 */
export function dpx(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * DV (Digital Video)
 * @param options.quant_deadzone - Quantizer dead zone (from 0 to 1024) (default 7)
 */
export function dvvideo(options?: {
  quant_deadzone?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "quant_deadzone": options?.quant_deadzone,

  });
}







/**
 * Resolume DXV
 * @param options.format - (from 1.14664e+09 to 1.14664e+09) (default dxt1)
 */
export function dxv(options?: {
  format?: number | null | "dxt1";

}): FFMpegEncoderOption {
  return merge({
    "format": options?.format,

  });
}







/**
 * OpenEXR image
 * @param options.compression - set compression type (from 0 to 3) (default none)
 * @param options.format - set pixel type (from 1 to 2) (default float)
 * @param options.gamma - set gamma (from 0.001 to FLT_MAX) (default 1)
 */
export function exr(options?: {
  compression?: number | null | "none" | "rle" | "zip1" | "zip16";
  format?: number | null | "half" | "float";
  gamma?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "compression": options?.compression,
    "format": options?.format,
    "gamma": options?.gamma,

  });
}







/**
 * FFmpeg video codec #1
 * @param options.slicecrc - Protect slices with CRCs (from -1 to 2) (default -1)
 * @param options.coder - Coder type (from -2 to 2) (default rice)
 * @param options.context - Context model (from 0 to 1) (default 0)
 * @param options.qtable - Quantization table (from -1 to 2) (default default)
 * @param options.remap_mode - Remap Mode (from -1 to 2) (default auto)
 * @param options.remap_optimizer - Remap Optimizer (from 0 to 5) (default 3)
 */
export function ffv1(options?: {
  slicecrc?: number | null;
  coder?: number | null | "rice" | "range_def" | "range_tab" | "ac";
  context?: number | null;
  qtable?: number | null | "default" | "8bit" | "greater8bit";
  remap_mode?: number | null | "auto" | "off" | "dualrle" | "flipdualrle";
  remap_optimizer?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "slicecrc": options?.slicecrc,
    "coder": options?.coder,
    "context": options?.context,
    "qtable": options?.qtable,
    "remap_mode": options?.remap_mode,
    "remap_optimizer": options?.remap_optimizer,

  });
}







/**
 * FFmpeg video codec #1 (Vulkan) (codec ffv1)
 * @param options.slicecrc - Protect slices with CRCs (from -1 to 2) (default -1)
 * @param options.context - Context model (from 0 to 1) (default 0)
 * @param options.coder - Coder type (from -2 to 2) (default range_tab)
 * @param options.qtable - Quantization table (from -1 to 2) (default default)
 * @param options.slices_h - Number of horizontal slices (from -1 to 1024) (default -1)
 * @param options.slices_v - Number of vertical slices (from -1 to 1024) (default -1)
 * @param options.force_pcm - Code all slices with no prediction (default false)
 * @param options.rct_search - Run a search for RCT parameters (level 4 only) (default true)
 * @param options.async_depth - Internal parallelization depth (from 1 to INT_MAX) (default 1)
 */
export function ffv1_vulkan(options?: {
  slicecrc?: number | null;
  context?: number | null;
  coder?: number | null | "rice" | "range_def" | "range_tab";
  qtable?: number | null | "default" | "8bit" | "greater8bit";
  slices_h?: number | null;
  slices_v?: number | null;
  force_pcm?: boolean | null;
  rct_search?: boolean | null;
  async_depth?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "slicecrc": options?.slicecrc,
    "context": options?.context,
    "coder": options?.coder,
    "qtable": options?.qtable,
    "slices_h": options?.slices_h,
    "slices_v": options?.slices_v,
    "force_pcm": options?.force_pcm,
    "rct_search": options?.rct_search,
    "async_depth": options?.async_depth,

  });
}







/**
 * Huffyuv FFmpeg variant
 * @param options.context - Set per-frame huffman tables (from 0 to 1) (default 0)
 * @param options.non_deterministic - Allow multithreading for e.g. context=1 at the expense of determinism (default false)
 * @param options.pred - Prediction method (from 0 to 2) (default left)
 */
export function ffvhuff(options?: {
  context?: number | null;
  non_deterministic?: boolean | null;
  pred?: number | null | "left" | "plane" | "median";

}): FFMpegEncoderOption {
  return merge({
    "context": options?.context,
    "non_deterministic": options?.non_deterministic,
    "pred": options?.pred,

  });
}







/**
 * Flexible Image Transport System
 */
export function fits(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Flash Screen Video
 */
export function flashsv(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Flash Screen Video Version 2
 */
export function flashsv2(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * FLV / Sorenson Spark / Sorenson H.263 (Flash Video) (codec flv1)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function flv(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * GIF (Graphics Interchange Format)
 * @param options.gifflags - set GIF flags (default offsetting+transdiff)
 * @param options.gifimage - enable encoding only images per frame (default false)
 * @param options.global_palette - write a palette to the global gif header where feasible (default true)
 */
export function gif(options?: {
  gifflags?: string | null;
  gifimage?: boolean | null;
  global_palette?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "gifflags": options?.gifflags,
    "gifimage": options?.gifimage,
    "global_palette": options?.global_palette,

  });
}







/**
 * H.261
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function h261(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * H.263 / H.263-1996
 * @param options.obmc - use overlapped block motion compensation. (default false)
 * @param options.mb_info - emit macroblock info for RFC 2190 packetization, the parameter value is the maximum payload size (from 0 to INT_MAX) (default 0)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function h263(options?: {
  obmc?: boolean | null;
  mb_info?: number | null;
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "obmc": options?.obmc,
    "mb_info": options?.mb_info,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * V4L2 mem2mem H.263 encoder wrapper (codec h263)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 4 to INT_MAX) (default 4)
 */
export function h263_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * H.263+ / H.263-1998 / H.263 version 2
 * @param options.umv - Use unlimited motion vectors. (default false)
 * @param options.aiv - Use alternative inter VLC. (default false)
 * @param options.obmc - use overlapped block motion compensation. (default false)
 * @param options.structured_slices - Write slice start position at every GOB header instead of just GOB number. (default false)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function h263p(options?: {
  umv?: boolean | null;
  aiv?: boolean | null;
  obmc?: boolean | null;
  structured_slices?: boolean | null;
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "umv": options?.umv,
    "aiv": options?.aiv,
    "obmc": options?.obmc,
    "structured_slices": options?.structured_slices,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * libx264 H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 (codec h264)
 * @param options.preset - Set the encoding preset (cf. x264 --fullhelp) (default "medium")
 * @param options.tune - Tune the encoding params (cf. x264 --fullhelp)
 * @param options.profile - Set profile restrictions (cf. x264 --fullhelp)
 * @param options.fastfirstpass - Use fast settings when encoding first pass (default true)
 * @param options.level - Specify level (as defined by Annex A)
 * @param options.passlogfile - Filename for 2 pass stats
 * @param options.wpredp - Weighted prediction for P-frames
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.x264opts - x264 options
 * @param options.crf - Select the quality for constant quality mode (from -1 to FLT_MAX) (default -1)
 * @param options.crf_max - In CRF mode, prevents VBV from lowering quality beyond this point. (from -1 to FLT_MAX) (default -1)
 * @param options.qp - Constant quantization parameter rate control method (from -1 to INT_MAX) (default -1)
 * @param options.aq_mode - AQ method (from -1 to INT_MAX) (default -1)
 * @param options.aq_strength - AQ strength. Reduces blocking and blurring in flat and textured areas. (from -1 to FLT_MAX) (default -1)
 * @param options.psy - Use psychovisual optimizations. (default auto)
 * @param options.psy_rd - Strength of psychovisual optimization, in <psy-rd>:<psy-trellis> format.
 * @param options.rc_lookahead - Number of frames to look ahead for frametype and ratecontrol (from -1 to INT_MAX) (default -1)
 * @param options.weightb - Weighted prediction for B-frames. (default auto)
 * @param options.weightp - Weighted prediction analysis method. (from -1 to INT_MAX) (default -1)
 * @param options.ssim - Calculate and print SSIM stats. (default auto)
 * @param options.intra_refresh - Use Periodic Intra Refresh instead of IDR frames. (default auto)
 * @param options.bluray_compat - Bluray compatibility workarounds. (default auto)
 * @param options.b_bias - Influences how often B-frames are used (from INT_MIN to INT_MAX) (default INT_MIN)
 * @param options.b_pyramid - Keep some B-frames as references. (from -1 to INT_MAX) (default -1)
 * @param options.mixed_refs - One reference per partition, as opposed to one reference per macroblock (default auto)
 * @param options._8x8dct - High profile 8x8 transform. (default auto)
 * @param options.fast_pskip - (default auto)
 * @param options.aud - Use access unit delimiters. (default auto)
 * @param options.mbtree - Use macroblock tree ratecontrol. (default auto)
 * @param options.deblock - Loop filter parameters, in <alpha:beta> form.
 * @param options.cplxblur - Reduce fluctuations in QP (before curve compression) (from -1 to FLT_MAX) (default -1)
 * @param options.partitions - A comma-separated list of partitions to consider. Possible values: p8x8, p4x4, b8x8, i8x8, i4x4, none, all
 * @param options.direct_pred - Direct MV prediction mode (from -1 to INT_MAX) (default -1)
 * @param options.slice_max_size - Limit the size of each slice in bytes (from -1 to INT_MAX) (default -1)
 * @param options.stats - Filename for 2 pass stats
 * @param options.nal_hrd - Signal HRD information (requires vbv-bufsize; cbr not allowed in .mp4) (from -1 to INT_MAX) (default -1)
 * @param options.avcintra_class - AVC-Intra class 50/100/200/300/480 (from -1 to 480) (default -1)
 * @param options.me_method - Set motion estimation method (from -1 to 4) (default -1)
 * @param options.forced_idr - If forcing keyframes, force them as IDR frames. (default false)
 * @param options.coder - Coder type (from -1 to 1) (default default)
 * @param options.b_strategy - Strategy to choose between I/P/B-frames (from -1 to 2) (default -1)
 * @param options.chromaoffset - QP difference between chroma and luma (from INT_MIN to INT_MAX) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default -1)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default -1)
 * @param options.udu_sei - Use user data unregistered SEI if available (default false)
 * @param options.x264_params - Override the x264 configuration using a :-separated list of key=value parameters
 * @param options.mb_info - Set mb_info data through AVSideData, only useful when used from the API (default false)
 */
export function libx264(options?: {
  preset?: string | null;
  tune?: string | null;
  profile?: string | null;
  fastfirstpass?: boolean | null;
  level?: string | null;
  passlogfile?: string | null;
  wpredp?: string | null;
  a53cc?: boolean | null;
  x264opts?: string | null;
  crf?: number | null;
  crf_max?: number | null;
  qp?: number | null;
  aq_mode?: number | null | "none" | "variance" | "autovariance" | "autovariance-biased";
  aq_strength?: number | null;
  psy?: boolean | null;
  psy_rd?: string | null;
  rc_lookahead?: number | null;
  weightb?: boolean | null;
  weightp?: number | null | "none" | "simple" | "smart";
  ssim?: boolean | null;
  intra_refresh?: boolean | null;
  bluray_compat?: boolean | null;
  b_bias?: number | null;
  b_pyramid?: number | null | "none" | "strict" | "normal";
  mixed_refs?: boolean | null;
  _8x8dct?: boolean | null;
  fast_pskip?: boolean | null;
  aud?: boolean | null;
  mbtree?: boolean | null;
  deblock?: string | null;
  cplxblur?: number | null;
  partitions?: string | null;
  direct_pred?: number | null | "none" | "spatial" | "temporal" | "auto";
  slice_max_size?: number | null;
  stats?: string | null;
  nal_hrd?: number | null | "none" | "vbr" | "cbr";
  avcintra_class?: number | null;
  me_method?: number | null | "dia" | "hex" | "umh" | "esa" | "tesa";
  forced_idr?: boolean | null;
  coder?: number | null | "default" | "cavlc" | "cabac" | "vlc" | "ac";
  b_strategy?: number | null;
  chromaoffset?: number | null;
  sc_threshold?: number | null;
  noise_reduction?: number | null;
  udu_sei?: boolean | null;
  x264_params?: string | null;
  mb_info?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "preset": options?.preset,
    "tune": options?.tune,
    "profile": options?.profile,
    "fastfirstpass": options?.fastfirstpass,
    "level": options?.level,
    "passlogfile": options?.passlogfile,
    "wpredp": options?.wpredp,
    "a53cc": options?.a53cc,
    "x264opts": options?.x264opts,
    "crf": options?.crf,
    "crf_max": options?.crf_max,
    "qp": options?.qp,
    "aq-mode": options?.aq_mode,
    "aq-strength": options?.aq_strength,
    "psy": options?.psy,
    "psy-rd": options?.psy_rd,
    "rc-lookahead": options?.rc_lookahead,
    "weightb": options?.weightb,
    "weightp": options?.weightp,
    "ssim": options?.ssim,
    "intra-refresh": options?.intra_refresh,
    "bluray-compat": options?.bluray_compat,
    "b-bias": options?.b_bias,
    "b-pyramid": options?.b_pyramid,
    "mixed-refs": options?.mixed_refs,
    "8x8dct": options?._8x8dct,
    "fast-pskip": options?.fast_pskip,
    "aud": options?.aud,
    "mbtree": options?.mbtree,
    "deblock": options?.deblock,
    "cplxblur": options?.cplxblur,
    "partitions": options?.partitions,
    "direct-pred": options?.direct_pred,
    "slice-max-size": options?.slice_max_size,
    "stats": options?.stats,
    "nal-hrd": options?.nal_hrd,
    "avcintra-class": options?.avcintra_class,
    "me_method": options?.me_method,
    "forced-idr": options?.forced_idr,
    "coder": options?.coder,
    "b_strategy": options?.b_strategy,
    "chromaoffset": options?.chromaoffset,
    "sc_threshold": options?.sc_threshold,
    "noise_reduction": options?.noise_reduction,
    "udu_sei": options?.udu_sei,
    "x264-params": options?.x264_params,
    "mb_info": options?.mb_info,

  });
}







/**
 * libx264 H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10 RGB (codec h264)
 * @param options.preset - Set the encoding preset (cf. x264 --fullhelp) (default "medium")
 * @param options.tune - Tune the encoding params (cf. x264 --fullhelp)
 * @param options.profile - Set profile restrictions (cf. x264 --fullhelp)
 * @param options.fastfirstpass - Use fast settings when encoding first pass (default true)
 * @param options.level - Specify level (as defined by Annex A)
 * @param options.passlogfile - Filename for 2 pass stats
 * @param options.wpredp - Weighted prediction for P-frames
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.x264opts - x264 options
 * @param options.crf - Select the quality for constant quality mode (from -1 to FLT_MAX) (default -1)
 * @param options.crf_max - In CRF mode, prevents VBV from lowering quality beyond this point. (from -1 to FLT_MAX) (default -1)
 * @param options.qp - Constant quantization parameter rate control method (from -1 to INT_MAX) (default -1)
 * @param options.aq_mode - AQ method (from -1 to INT_MAX) (default -1)
 * @param options.aq_strength - AQ strength. Reduces blocking and blurring in flat and textured areas. (from -1 to FLT_MAX) (default -1)
 * @param options.psy - Use psychovisual optimizations. (default auto)
 * @param options.psy_rd - Strength of psychovisual optimization, in <psy-rd>:<psy-trellis> format.
 * @param options.rc_lookahead - Number of frames to look ahead for frametype and ratecontrol (from -1 to INT_MAX) (default -1)
 * @param options.weightb - Weighted prediction for B-frames. (default auto)
 * @param options.weightp - Weighted prediction analysis method. (from -1 to INT_MAX) (default -1)
 * @param options.ssim - Calculate and print SSIM stats. (default auto)
 * @param options.intra_refresh - Use Periodic Intra Refresh instead of IDR frames. (default auto)
 * @param options.bluray_compat - Bluray compatibility workarounds. (default auto)
 * @param options.b_bias - Influences how often B-frames are used (from INT_MIN to INT_MAX) (default INT_MIN)
 * @param options.b_pyramid - Keep some B-frames as references. (from -1 to INT_MAX) (default -1)
 * @param options.mixed_refs - One reference per partition, as opposed to one reference per macroblock (default auto)
 * @param options._8x8dct - High profile 8x8 transform. (default auto)
 * @param options.fast_pskip - (default auto)
 * @param options.aud - Use access unit delimiters. (default auto)
 * @param options.mbtree - Use macroblock tree ratecontrol. (default auto)
 * @param options.deblock - Loop filter parameters, in <alpha:beta> form.
 * @param options.cplxblur - Reduce fluctuations in QP (before curve compression) (from -1 to FLT_MAX) (default -1)
 * @param options.partitions - A comma-separated list of partitions to consider. Possible values: p8x8, p4x4, b8x8, i8x8, i4x4, none, all
 * @param options.direct_pred - Direct MV prediction mode (from -1 to INT_MAX) (default -1)
 * @param options.slice_max_size - Limit the size of each slice in bytes (from -1 to INT_MAX) (default -1)
 * @param options.stats - Filename for 2 pass stats
 * @param options.nal_hrd - Signal HRD information (requires vbv-bufsize; cbr not allowed in .mp4) (from -1 to INT_MAX) (default -1)
 * @param options.avcintra_class - AVC-Intra class 50/100/200/300/480 (from -1 to 480) (default -1)
 * @param options.me_method - Set motion estimation method (from -1 to 4) (default -1)
 * @param options.forced_idr - If forcing keyframes, force them as IDR frames. (default false)
 * @param options.coder - Coder type (from -1 to 1) (default default)
 * @param options.b_strategy - Strategy to choose between I/P/B-frames (from -1 to 2) (default -1)
 * @param options.chromaoffset - QP difference between chroma and luma (from INT_MIN to INT_MAX) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default -1)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default -1)
 * @param options.udu_sei - Use user data unregistered SEI if available (default false)
 * @param options.x264_params - Override the x264 configuration using a :-separated list of key=value parameters
 * @param options.mb_info - Set mb_info data through AVSideData, only useful when used from the API (default false)
 */
export function libx264rgb(options?: {
  preset?: string | null;
  tune?: string | null;
  profile?: string | null;
  fastfirstpass?: boolean | null;
  level?: string | null;
  passlogfile?: string | null;
  wpredp?: string | null;
  a53cc?: boolean | null;
  x264opts?: string | null;
  crf?: number | null;
  crf_max?: number | null;
  qp?: number | null;
  aq_mode?: number | null | "none" | "variance" | "autovariance" | "autovariance-biased";
  aq_strength?: number | null;
  psy?: boolean | null;
  psy_rd?: string | null;
  rc_lookahead?: number | null;
  weightb?: boolean | null;
  weightp?: number | null | "none" | "simple" | "smart";
  ssim?: boolean | null;
  intra_refresh?: boolean | null;
  bluray_compat?: boolean | null;
  b_bias?: number | null;
  b_pyramid?: number | null | "none" | "strict" | "normal";
  mixed_refs?: boolean | null;
  _8x8dct?: boolean | null;
  fast_pskip?: boolean | null;
  aud?: boolean | null;
  mbtree?: boolean | null;
  deblock?: string | null;
  cplxblur?: number | null;
  partitions?: string | null;
  direct_pred?: number | null | "none" | "spatial" | "temporal" | "auto";
  slice_max_size?: number | null;
  stats?: string | null;
  nal_hrd?: number | null | "none" | "vbr" | "cbr";
  avcintra_class?: number | null;
  me_method?: number | null | "dia" | "hex" | "umh" | "esa" | "tesa";
  forced_idr?: boolean | null;
  coder?: number | null | "default" | "cavlc" | "cabac" | "vlc" | "ac";
  b_strategy?: number | null;
  chromaoffset?: number | null;
  sc_threshold?: number | null;
  noise_reduction?: number | null;
  udu_sei?: boolean | null;
  x264_params?: string | null;
  mb_info?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "preset": options?.preset,
    "tune": options?.tune,
    "profile": options?.profile,
    "fastfirstpass": options?.fastfirstpass,
    "level": options?.level,
    "passlogfile": options?.passlogfile,
    "wpredp": options?.wpredp,
    "a53cc": options?.a53cc,
    "x264opts": options?.x264opts,
    "crf": options?.crf,
    "crf_max": options?.crf_max,
    "qp": options?.qp,
    "aq-mode": options?.aq_mode,
    "aq-strength": options?.aq_strength,
    "psy": options?.psy,
    "psy-rd": options?.psy_rd,
    "rc-lookahead": options?.rc_lookahead,
    "weightb": options?.weightb,
    "weightp": options?.weightp,
    "ssim": options?.ssim,
    "intra-refresh": options?.intra_refresh,
    "bluray-compat": options?.bluray_compat,
    "b-bias": options?.b_bias,
    "b-pyramid": options?.b_pyramid,
    "mixed-refs": options?.mixed_refs,
    "8x8dct": options?._8x8dct,
    "fast-pskip": options?.fast_pskip,
    "aud": options?.aud,
    "mbtree": options?.mbtree,
    "deblock": options?.deblock,
    "cplxblur": options?.cplxblur,
    "partitions": options?.partitions,
    "direct-pred": options?.direct_pred,
    "slice-max-size": options?.slice_max_size,
    "stats": options?.stats,
    "nal-hrd": options?.nal_hrd,
    "avcintra-class": options?.avcintra_class,
    "me_method": options?.me_method,
    "forced-idr": options?.forced_idr,
    "coder": options?.coder,
    "b_strategy": options?.b_strategy,
    "chromaoffset": options?.chromaoffset,
    "sc_threshold": options?.sc_threshold,
    "noise_reduction": options?.noise_reduction,
    "udu_sei": options?.udu_sei,
    "x264-params": options?.x264_params,
    "mb_info": options?.mb_info,

  });
}







/**
 * NVIDIA NVENC H.264 encoder (codec h264)
 * @param options.preset - Set the encoding preset (from 0 to 18) (default p4)
 * @param options.tune - Set the encoding tuning info (from 1 to 4) (default hq)
 * @param options.profile - Set the encoding profile (from 0 to 5) (default main)
 * @param options.level - Set the encoding level restriction (from 0 to 62) (default auto)
 * @param options.rc - Override the preset rate-control (from -1 to INT_MAX) (default -1)
 * @param options.rc_lookahead - Number of frames to look ahead for rate-control (from 0 to INT_MAX) (default 0)
 * @param options.surfaces - Number of concurrent surfaces (from 0 to 64) (default 0)
 * @param options.cbr - Use cbr encoding mode (default false)
 * @param options._2pass - Use 2pass encoding mode (default auto)
 * @param options.gpu - Selects which NVENC capable GPU to use. First GPU is 0, second is 1, and so on. (from -2 to INT_MAX) (default any)
 * @param options.rgb_mode - Configure how nvenc handles packed RGB input. (from 0 to INT_MAX) (default yuv420)
 * @param options.delay - Delay frame output by the given amount of frames (from 0 to INT_MAX) (default INT_MAX)
 * @param options.no_scenecut - When lookahead is enabled, set this to 1 to disable adaptive I-frame insertion at scene cuts (default false)
 * @param options.forced_idr - If forcing keyframes, force them as IDR frames. (default false)
 * @param options.b_adapt - When lookahead is enabled, set this to 0 to disable adaptive B-frame decision (default true)
 * @param options.spatial_aq - set to 1 to enable Spatial AQ (default false)
 * @param options.temporal_aq - set to 1 to enable Temporal AQ (default false)
 * @param options.zerolatency - Set 1 to indicate zero latency operation (no reordering delay) (default false)
 * @param options.nonref_p - Set this to 1 to enable automatic insertion of non-reference P-frames (default false)
 * @param options.strict_gop - Set 1 to minimize GOP-to-GOP rate fluctuations (default false)
 * @param options.aq_strength - When Spatial AQ is enabled, this field is used to specify AQ strength. AQ strength scale is from 1 (low) - 15 (aggressive) (from 1 to 15) (default 8)
 * @param options.cq - Set target quality level (0 to 51, 0 means automatic) for constant quality mode in VBR rate control (from 0 to 51) (default 0)
 * @param options.aud - Use access unit delimiters (default false)
 * @param options.bluray_compat - Bluray compatibility workarounds (default false)
 * @param options.init_qpP - Initial QP value for P frame (from -1 to 51) (default -1)
 * @param options.init_qpB - Initial QP value for B frame (from -1 to 51) (default -1)
 * @param options.init_qpI - Initial QP value for I frame (from -1 to 51) (default -1)
 * @param options.qp - Constant quantization parameter rate control method (from -1 to 51) (default -1)
 * @param options.qp_cb_offset - Quantization parameter offset for cb channel (from -12 to 12) (default 0)
 * @param options.qp_cr_offset - Quantization parameter offset for cr channel (from -12 to 12) (default 0)
 * @param options.qmin - Specifies the minimum QP used for rate control (from -1 to 51) (default -1)
 * @param options.qmax - Specifies the maximum QP used for rate control (from -1 to 51) (default -1)
 * @param options.weighted_pred - Set 1 to enable weighted prediction (from 0 to 1) (default 0)
 * @param options.coder - Coder type (from -1 to 2) (default default)
 * @param options.b_ref_mode - Use B frames as references (from -1 to 2) (default -1)
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.s12m_tc - Use timecode (if available) (default true)
 * @param options.dpb_size - Specifies the DPB size used for encoding (0 means automatic) (from 0 to INT_MAX) (default 0)
 * @param options.multipass - Set the multipass encoding (from 0 to 2) (default disabled)
 * @param options.highbitdepth - Enable 10 bit encode for 8 bit input (default false)
 * @param options.ldkfs - Low delay key frame scale; Specifies the Scene Change frame size increase allowed in case of single frame VBV and CBR (from 0 to 255) (default 0)
 * @param options.extra_sei - Pass on extra SEI data (e.g. a53 cc) to be included in the bitstream (default true)
 * @param options.udu_sei - Pass on user data unregistered SEI if available (default false)
 * @param options.intra_refresh - Use Periodic Intra Refresh instead of IDR frames (default false)
 * @param options.single_slice_intra_refresh - Use single slice intra refresh (default false)
 * @param options.max_slice_size - Maximum encoded slice size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.constrained_encoding - Enable constrainedFrame encoding where each slice in the constrained picture is independent of other slices (default false)
 * @param options.cbr_padding - Pad the bitstream to ensure bitrate does not drop below the target in CBR mode (default false)
 * @param options.tf_level - Specifies the strength of the temporal filtering (from -1 to INT_MAX) (default -1)
 * @param options.lookahead_level - Specifies the lookahead level. Higher level may improve quality at the expense of performance. (from -1 to 15) (default -1)
 */
export function h264_nvenc(options?: {
  preset?: number | null | "default" | "slow" | "medium" | "fast" | "hp" | "hq" | "bd" | "ll" | "llhq" | "llhp" | "lossless" | "losslesshp" | "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7";
  tune?: number | null | "hq" | "ll" | "ull" | "lossless";
  profile?: number | null | "baseline" | "main" | "high" | "high10" | "high422" | "high444p";
  level?: number | null | "auto" | "1" | "1.0" | "1b" | "1.0b" | "1.1" | "1.2" | "1.3" | "2" | "2.0" | "2.1" | "2.2" | "3" | "3.0" | "3.1" | "3.2" | "4" | "4.0" | "4.1" | "4.2" | "5" | "5.0" | "5.1" | "5.2" | "6.0" | "6.1" | "6.2";
  rc?: number | null | "constqp" | "vbr" | "cbr" | "vbr_minqp" | "ll_2pass_quality" | "ll_2pass_size" | "vbr_2pass" | "cbr_ld_hq" | "cbr_hq" | "vbr_hq";
  rc_lookahead?: number | null;
  surfaces?: number | null;
  cbr?: boolean | null;
  _2pass?: boolean | null;
  gpu?: number | null | "any" | "list";
  rgb_mode?: number | null | "yuv420" | "yuv444" | "disabled";
  delay?: number | null;
  no_scenecut?: boolean | null;
  forced_idr?: boolean | null;
  b_adapt?: boolean | null;
  spatial_aq?: boolean | null;
  temporal_aq?: boolean | null;
  zerolatency?: boolean | null;
  nonref_p?: boolean | null;
  strict_gop?: boolean | null;
  aq_strength?: number | null;
  cq?: number | null;
  aud?: boolean | null;
  bluray_compat?: boolean | null;
  init_qpP?: number | null;
  init_qpB?: number | null;
  init_qpI?: number | null;
  qp?: number | null;
  qp_cb_offset?: number | null;
  qp_cr_offset?: number | null;
  qmin?: number | null;
  qmax?: number | null;
  weighted_pred?: number | null;
  coder?: number | null | "default" | "auto" | "cabac" | "cavlc" | "ac" | "vlc";
  b_ref_mode?: number | null | "disabled" | "each" | "middle";
  a53cc?: boolean | null;
  s12m_tc?: boolean | null;
  dpb_size?: number | null;
  multipass?: number | null | "disabled" | "qres" | "fullres";
  highbitdepth?: boolean | null;
  ldkfs?: number | null;
  extra_sei?: boolean | null;
  udu_sei?: boolean | null;
  intra_refresh?: boolean | null;
  single_slice_intra_refresh?: boolean | null;
  max_slice_size?: number | null;
  constrained_encoding?: boolean | null;
  cbr_padding?: boolean | null;
  tf_level?: number | null | "0" | "4";
  lookahead_level?: number | null | "auto" | "0" | "1" | "2" | "3";

}): FFMpegEncoderOption {
  return merge({
    "preset": options?.preset,
    "tune": options?.tune,
    "profile": options?.profile,
    "level": options?.level,
    "rc": options?.rc,
    "rc-lookahead": options?.rc_lookahead,
    "surfaces": options?.surfaces,
    "cbr": options?.cbr,
    "2pass": options?._2pass,
    "gpu": options?.gpu,
    "rgb_mode": options?.rgb_mode,
    "delay": options?.delay,
    "no-scenecut": options?.no_scenecut,
    "forced-idr": options?.forced_idr,
    "b_adapt": options?.b_adapt,
    "spatial-aq": options?.spatial_aq,
    "temporal-aq": options?.temporal_aq,
    "zerolatency": options?.zerolatency,
    "nonref_p": options?.nonref_p,
    "strict_gop": options?.strict_gop,
    "aq-strength": options?.aq_strength,
    "cq": options?.cq,
    "aud": options?.aud,
    "bluray-compat": options?.bluray_compat,
    "init_qpP": options?.init_qpP,
    "init_qpB": options?.init_qpB,
    "init_qpI": options?.init_qpI,
    "qp": options?.qp,
    "qp_cb_offset": options?.qp_cb_offset,
    "qp_cr_offset": options?.qp_cr_offset,
    "qmin": options?.qmin,
    "qmax": options?.qmax,
    "weighted_pred": options?.weighted_pred,
    "coder": options?.coder,
    "b_ref_mode": options?.b_ref_mode,
    "a53cc": options?.a53cc,
    "s12m_tc": options?.s12m_tc,
    "dpb_size": options?.dpb_size,
    "multipass": options?.multipass,
    "highbitdepth": options?.highbitdepth,
    "ldkfs": options?.ldkfs,
    "extra_sei": options?.extra_sei,
    "udu_sei": options?.udu_sei,
    "intra-refresh": options?.intra_refresh,
    "single-slice-intra-refresh": options?.single_slice_intra_refresh,
    "max_slice_size": options?.max_slice_size,
    "constrained-encoding": options?.constrained_encoding,
    "cbr_padding": options?.cbr_padding,
    "tf_level": options?.tf_level,
    "lookahead_level": options?.lookahead_level,

  });
}







/**
 * V4L2 mem2mem H.264 encoder wrapper (codec h264)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 4 to INT_MAX) (default 4)
 */
export function h264_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * H.264/AVC (VAAPI) (codec h264)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.qp - Constant QP (for P-frames; scaled by qfactor/qoffset for I/B) (from 0 to 52) (default 0)
 * @param options.quality - Set encode quality (trades off against speed, higher is faster) (from -1 to INT_MAX) (default -1)
 * @param options.coder - Entropy coder type (from 0 to 1) (default cabac)
 * @param options.aud - Include AUD (default false)
 * @param options.sei - Set SEI to include (default identifier+timing+recovery_point+a53_cc)
 * @param options.profile - Set profile (profile_idc and constraint_set*_flag) (from -99 to 65535) (default -99)
 * @param options.level - Set level (level_idc) (from -99 to 255) (default -99)
 */
export function h264_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  qp?: number | null;
  quality?: number | null;
  coder?: number | null | "cavlc" | "cabac" | "vlc" | "ac";
  aud?: boolean | null;
  sei?: string | null;
  profile?: number | null | "constrained_baseline" | "main" | "high" | "high10";
  level?: number | null | "1" | "1.1" | "1.2" | "1.3" | "2" | "2.1" | "2.2" | "3" | "3.1" | "3.2" | "4" | "4.1" | "4.2" | "5" | "5.1" | "5.2" | "6" | "6.1" | "6.2";

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "qp": options?.qp,
    "quality": options?.quality,
    "coder": options?.coder,
    "aud": options?.aud,
    "sei": options?.sei,
    "profile": options?.profile,
    "level": options?.level,

  });
}







/**
 * H.264/AVC (Vulkan) (codec h264)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.qp - Use an explicit constant quantizer for the whole stream (from -1 to 255) (default -1)
 * @param options.quality - Set encode quality (trades off against speed, higher is faster) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Select rate control type (from 0 to UINT32_MAX) (default auto)
 * @param options.tune - Select tuning type (from 0 to INT_MAX) (default default)
 * @param options.usage - Select usage type (default 0)
 * @param options.content - Select content type (default 0)
 * @param options.profile - Set profile (profile_idc and constraint_set*_flag) (from -99 to 65535) (default -99)
 * @param options.level - Set level (level_idc) (from -99 to 255) (default -99)
 * @param options.coder - Entropy coder type (from 0 to 1) (default cabac)
 * @param options.units - Set units to include (default aud+identifier+timing+recovery+a53_cc)
 */
export function h264_vulkan(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  qp?: number | null;
  quality?: number | null;
  rc_mode?: number | null | "auto" | "driver" | "cqp" | "cbr" | "vbr";
  tune?: number | null | "default" | "hq" | "ll" | "ull" | "lossless";
  usage?: string | null;
  content?: string | null;
  profile?: number | null | "constrained_baseline" | "main" | "high" | "high444p";
  level?: number | null | "1" | "1.1" | "1.2" | "1.3" | "2" | "2.1" | "2.2" | "3" | "3.1" | "3.2" | "4" | "4.1" | "4.2" | "5" | "5.1" | "5.2" | "6" | "6.1" | "6.2";
  coder?: number | null | "cabac" | "vlc";
  units?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "qp": options?.qp,
    "quality": options?.quality,
    "rc_mode": options?.rc_mode,
    "tune": options?.tune,
    "usage": options?.usage,
    "content": options?.content,
    "profile": options?.profile,
    "level": options?.level,
    "coder": options?.coder,
    "units": options?.units,

  });
}







/**
 * Vidvox Hap
 * @param options.format - (from 11 to 15) (default hap)
 * @param options.chunks - chunk count (from 1 to 64) (default 1)
 * @param options.compressor - second-stage compressor (from 160 to 176) (default snappy)
 */
export function hap(options?: {
  format?: number | null | "hap" | "hap_alpha" | "hap_q";
  chunks?: number | null;
  compressor?: number | null | "none" | "snappy";

}): FFMpegEncoderOption {
  return merge({
    "format": options?.format,
    "chunks": options?.chunks,
    "compressor": options?.compressor,

  });
}







/**
 * HDR (Radiance RGBE format) image
 */
export function hdr(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libx265 H.265 / HEVC (codec hevc)
 * @param options.crf - set the x265 crf (from -1 to FLT_MAX) (default -1)
 * @param options.qp - set the x265 qp (from -1 to INT_MAX) (default -1)
 * @param options.forced_idr - if forcing keyframes, force them as IDR frames (default false)
 * @param options.preset - set the x265 preset
 * @param options.tune - set the x265 tune parameter
 * @param options.profile - set the x265 profile
 * @param options.udu_sei - Use user data unregistered SEI if available (default false)
 * @param options.a53cc - Use A53 Closed Captions (if available) (default false)
 * @param options.x265_params - set the x265 configuration using a :-separated list of key=value parameters
 * @param options.dolbyvision - Enable Dolby Vision RPU coding (default auto)
 */
export function libx265(options?: {
  crf?: number | null;
  qp?: number | null;
  forced_idr?: boolean | null;
  preset?: string | null;
  tune?: string | null;
  profile?: string | null;
  udu_sei?: boolean | null;
  a53cc?: boolean | null;
  x265_params?: string | null;
  dolbyvision?: boolean | null | "auto";

}): FFMpegEncoderOption {
  return merge({
    "crf": options?.crf,
    "qp": options?.qp,
    "forced-idr": options?.forced_idr,
    "preset": options?.preset,
    "tune": options?.tune,
    "profile": options?.profile,
    "udu_sei": options?.udu_sei,
    "a53cc": options?.a53cc,
    "x265-params": options?.x265_params,
    "dolbyvision": options?.dolbyvision,

  });
}







/**
 * NVIDIA NVENC hevc encoder (codec hevc)
 * @param options.preset - Set the encoding preset (from 0 to 18) (default p4)
 * @param options.tune - Set the encoding tuning info (from 1 to 5) (default hq)
 * @param options.profile - Set the encoding profile (from 0 to 3) (default main)
 * @param options.level - Set the encoding level restriction (from 0 to 186) (default auto)
 * @param options.tier - Set the encoding tier (from 0 to 1) (default main)
 * @param options.rc - Override the preset rate-control (from -1 to INT_MAX) (default -1)
 * @param options.rc_lookahead - Number of frames to look ahead for rate-control (from 0 to INT_MAX) (default 0)
 * @param options.surfaces - Number of concurrent surfaces (from 0 to 64) (default 0)
 * @param options.cbr - Use cbr encoding mode (default false)
 * @param options._2pass - Use 2pass encoding mode (default auto)
 * @param options.gpu - Selects which NVENC capable GPU to use. First GPU is 0, second is 1, and so on. (from -2 to INT_MAX) (default any)
 * @param options.rgb_mode - Configure how nvenc handles packed RGB input. (from 0 to INT_MAX) (default yuv420)
 * @param options.delay - Delay frame output by the given amount of frames (from 0 to INT_MAX) (default INT_MAX)
 * @param options.no_scenecut - When lookahead is enabled, set this to 1 to disable adaptive I-frame insertion at scene cuts (default false)
 * @param options.forced_idr - If forcing keyframes, force them as IDR frames. (default false)
 * @param options.spatial_aq - set to 1 to enable Spatial AQ (default false)
 * @param options.temporal_aq - set to 1 to enable Temporal AQ (default false)
 * @param options.zerolatency - Set 1 to indicate zero latency operation (no reordering delay) (default false)
 * @param options.nonref_p - Set this to 1 to enable automatic insertion of non-reference P-frames (default false)
 * @param options.strict_gop - Set 1 to minimize GOP-to-GOP rate fluctuations (default false)
 * @param options.aq_strength - When Spatial AQ is enabled, this field is used to specify AQ strength. AQ strength scale is from 1 (low) - 15 (aggressive) (from 1 to 15) (default 8)
 * @param options.cq - Set target quality level (0 to 51, 0 means automatic) for constant quality mode in VBR rate control (from 0 to 51) (default 0)
 * @param options.aud - Use access unit delimiters (default false)
 * @param options.bluray_compat - Bluray compatibility workarounds (default false)
 * @param options.init_qpP - Initial QP value for P frame (from -1 to 51) (default -1)
 * @param options.init_qpB - Initial QP value for B frame (from -1 to 51) (default -1)
 * @param options.init_qpI - Initial QP value for I frame (from -1 to 51) (default -1)
 * @param options.qp - Constant quantization parameter rate control method (from -1 to 51) (default -1)
 * @param options.qp_cb_offset - Quantization parameter offset for cb channel (from -12 to 12) (default 0)
 * @param options.qp_cr_offset - Quantization parameter offset for cr channel (from -12 to 12) (default 0)
 * @param options.qmin - Specifies the minimum QP used for rate control (from -1 to 51) (default -1)
 * @param options.qmax - Specifies the maximum QP used for rate control (from -1 to 51) (default -1)
 * @param options.weighted_pred - Set 1 to enable weighted prediction (from 0 to 1) (default 0)
 * @param options.b_ref_mode - Use B frames as references (from -1 to 2) (default -1)
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.s12m_tc - Use timecode (if available) (default true)
 * @param options.dpb_size - Specifies the DPB size used for encoding (0 means automatic) (from 0 to INT_MAX) (default 0)
 * @param options.multipass - Set the multipass encoding (from 0 to 2) (default disabled)
 * @param options.highbitdepth - Enable 10 bit encode for 8 bit input (default false)
 * @param options.ldkfs - Low delay key frame scale; Specifies the Scene Change frame size increase allowed in case of single frame VBV and CBR (from 0 to 255) (default 0)
 * @param options.extra_sei - Pass on extra SEI data (e.g. a53 cc) to be included in the bitstream (default true)
 * @param options.udu_sei - Pass on user data unregistered SEI if available (default false)
 * @param options.intra_refresh - Use Periodic Intra Refresh instead of IDR frames (default false)
 * @param options.single_slice_intra_refresh - Use single slice intra refresh (default false)
 * @param options.max_slice_size - Maximum encoded slice size in bytes (from 0 to INT_MAX) (default 0)
 * @param options.constrained_encoding - Enable constrainedFrame encoding where each slice in the constrained picture is independent of other slices (default false)
 * @param options.cbr_padding - Pad the bitstream to ensure bitrate does not drop below the target in CBR mode (default false)
 * @param options.tf_level - Specifies the strength of the temporal filtering (from -1 to INT_MAX) (default -1)
 * @param options.lookahead_level - Specifies the lookahead level. Higher level may improve quality at the expense of performance. (from -1 to 15) (default -1)
 * @param options.unidir_b - Enable use of unidirectional B-Frames. (default false)
 * @param options.split_encode_mode - Specifies the split encoding mode (from 0 to 15) (default auto)
 */
export function hevc_nvenc(options?: {
  preset?: number | null | "default" | "slow" | "medium" | "fast" | "hp" | "hq" | "bd" | "ll" | "llhq" | "llhp" | "lossless" | "losslesshp" | "p1" | "p2" | "p3" | "p4" | "p5" | "p6" | "p7";
  tune?: number | null | "hq" | "uhq" | "ll" | "ull" | "lossless";
  profile?: number | null | "main" | "main10" | "rext" | "mv";
  level?: number | null | "auto" | "1" | "1.0" | "2" | "2.0" | "2.1" | "3" | "3.0" | "3.1" | "4" | "4.0" | "4.1" | "5" | "5.0" | "5.1" | "5.2" | "6" | "6.0" | "6.1" | "6.2";
  tier?: number | null | "main" | "high";
  rc?: number | null | "constqp" | "vbr" | "cbr" | "vbr_minqp" | "ll_2pass_quality" | "ll_2pass_size" | "vbr_2pass" | "cbr_ld_hq" | "cbr_hq" | "vbr_hq";
  rc_lookahead?: number | null;
  surfaces?: number | null;
  cbr?: boolean | null;
  _2pass?: boolean | null;
  gpu?: number | null | "any" | "list";
  rgb_mode?: number | null | "yuv420" | "yuv444" | "disabled";
  delay?: number | null;
  no_scenecut?: boolean | null;
  forced_idr?: boolean | null;
  spatial_aq?: boolean | null;
  temporal_aq?: boolean | null;
  zerolatency?: boolean | null;
  nonref_p?: boolean | null;
  strict_gop?: boolean | null;
  aq_strength?: number | null;
  cq?: number | null;
  aud?: boolean | null;
  bluray_compat?: boolean | null;
  init_qpP?: number | null;
  init_qpB?: number | null;
  init_qpI?: number | null;
  qp?: number | null;
  qp_cb_offset?: number | null;
  qp_cr_offset?: number | null;
  qmin?: number | null;
  qmax?: number | null;
  weighted_pred?: number | null;
  b_ref_mode?: number | null | "disabled" | "each" | "middle";
  a53cc?: boolean | null;
  s12m_tc?: boolean | null;
  dpb_size?: number | null;
  multipass?: number | null | "disabled" | "qres" | "fullres";
  highbitdepth?: boolean | null;
  ldkfs?: number | null;
  extra_sei?: boolean | null;
  udu_sei?: boolean | null;
  intra_refresh?: boolean | null;
  single_slice_intra_refresh?: boolean | null;
  max_slice_size?: number | null;
  constrained_encoding?: boolean | null;
  cbr_padding?: boolean | null;
  tf_level?: number | null | "0" | "4";
  lookahead_level?: number | null | "auto" | "0" | "1" | "2" | "3";
  unidir_b?: boolean | null;
  split_encode_mode?: number | null | "disabled" | "auto" | "forced" | "2" | "3";

}): FFMpegEncoderOption {
  return merge({
    "preset": options?.preset,
    "tune": options?.tune,
    "profile": options?.profile,
    "level": options?.level,
    "tier": options?.tier,
    "rc": options?.rc,
    "rc-lookahead": options?.rc_lookahead,
    "surfaces": options?.surfaces,
    "cbr": options?.cbr,
    "2pass": options?._2pass,
    "gpu": options?.gpu,
    "rgb_mode": options?.rgb_mode,
    "delay": options?.delay,
    "no-scenecut": options?.no_scenecut,
    "forced-idr": options?.forced_idr,
    "spatial_aq": options?.spatial_aq,
    "temporal_aq": options?.temporal_aq,
    "zerolatency": options?.zerolatency,
    "nonref_p": options?.nonref_p,
    "strict_gop": options?.strict_gop,
    "aq-strength": options?.aq_strength,
    "cq": options?.cq,
    "aud": options?.aud,
    "bluray-compat": options?.bluray_compat,
    "init_qpP": options?.init_qpP,
    "init_qpB": options?.init_qpB,
    "init_qpI": options?.init_qpI,
    "qp": options?.qp,
    "qp_cb_offset": options?.qp_cb_offset,
    "qp_cr_offset": options?.qp_cr_offset,
    "qmin": options?.qmin,
    "qmax": options?.qmax,
    "weighted_pred": options?.weighted_pred,
    "b_ref_mode": options?.b_ref_mode,
    "a53cc": options?.a53cc,
    "s12m_tc": options?.s12m_tc,
    "dpb_size": options?.dpb_size,
    "multipass": options?.multipass,
    "highbitdepth": options?.highbitdepth,
    "ldkfs": options?.ldkfs,
    "extra_sei": options?.extra_sei,
    "udu_sei": options?.udu_sei,
    "intra-refresh": options?.intra_refresh,
    "single-slice-intra-refresh": options?.single_slice_intra_refresh,
    "max_slice_size": options?.max_slice_size,
    "constrained-encoding": options?.constrained_encoding,
    "cbr_padding": options?.cbr_padding,
    "tf_level": options?.tf_level,
    "lookahead_level": options?.lookahead_level,
    "unidir_b": options?.unidir_b,
    "split_encode_mode": options?.split_encode_mode,

  });
}







/**
 * V4L2 mem2mem HEVC encoder wrapper (codec hevc)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 4 to INT_MAX) (default 4)
 */
export function hevc_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * H.265/HEVC (VAAPI) (codec hevc)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.qp - Constant QP (for P-frames; scaled by qfactor/qoffset for I/B) (from 0 to 52) (default 0)
 * @param options.aud - Include AUD (default false)
 * @param options.profile - Set profile (general_profile_idc) (from -99 to 255) (default -99)
 * @param options.tier - Set tier (general_tier_flag) (from 0 to 1) (default main)
 * @param options.level - Set level (general_level_idc) (from -99 to 255) (default -99)
 * @param options.sei - Set SEI to include (default hdr+a53_cc)
 * @param options.tiles - Tile columns x rows
 */
export function hevc_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  qp?: number | null;
  aud?: boolean | null;
  profile?: number | null | "main" | "main10" | "rext";
  tier?: number | null | "main" | "high";
  level?: number | null | "1" | "2" | "2.1" | "3" | "3.1" | "4" | "4.1" | "5" | "5.1" | "5.2" | "6" | "6.1" | "6.2";
  sei?: string | null;
  tiles?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "qp": options?.qp,
    "aud": options?.aud,
    "profile": options?.profile,
    "tier": options?.tier,
    "level": options?.level,
    "sei": options?.sei,
    "tiles": options?.tiles,

  });
}







/**
 * H.265/HEVC (Vulkan) (codec hevc)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.qp - Use an explicit constant quantizer for the whole stream (from -1 to 255) (default -1)
 * @param options.quality - Set encode quality (trades off against speed, higher is faster) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Select rate control type (from 0 to UINT32_MAX) (default auto)
 * @param options.tune - Select tuning type (from 0 to INT_MAX) (default default)
 * @param options.usage - Select usage type (default 0)
 * @param options.content - Select content type (default 0)
 * @param options.profile - Set profile (profile_idc and constraint_set*_flag) (from -99 to 65535) (default -99)
 * @param options.tier - Set tier (general_tier_flag) (from 0 to 1) (default main)
 * @param options.level - Set level (general_level_idc) (from -99 to 255) (default -99)
 * @param options.units - Set units to include (default hdr+a53_cc)
 */
export function hevc_vulkan(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  qp?: number | null;
  quality?: number | null;
  rc_mode?: number | null | "auto" | "driver" | "cqp" | "cbr" | "vbr";
  tune?: number | null | "default" | "hq" | "ll" | "ull" | "lossless";
  usage?: string | null;
  content?: string | null;
  profile?: number | null | "main" | "main10" | "rext";
  tier?: number | null | "main" | "high";
  level?: number | null | "1" | "2" | "2.1" | "3" | "3.1" | "4" | "4.1" | "5" | "5.1" | "5.2" | "6" | "6.1" | "6.2";
  units?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "qp": options?.qp,
    "quality": options?.quality,
    "rc_mode": options?.rc_mode,
    "tune": options?.tune,
    "usage": options?.usage,
    "content": options?.content,
    "profile": options?.profile,
    "tier": options?.tier,
    "level": options?.level,
    "units": options?.units,

  });
}







/**
 * Huffyuv / HuffYUV
 * @param options.non_deterministic - Allow multithreading for e.g. context=1 at the expense of determinism (default false)
 * @param options.pred - Prediction method (from 0 to 2) (default left)
 */
export function huffyuv(options?: {
  non_deterministic?: boolean | null;
  pred?: number | null | "left" | "plane" | "median";

}): FFMpegEncoderOption {
  return merge({
    "non_deterministic": options?.non_deterministic,
    "pred": options?.pred,

  });
}







/**
 * JPEG 2000
 * @param options.format - Codec Format (from 0 to 1) (default jp2)
 * @param options.tile_width - Tile Width (from 1 to 1.07374e+09) (default 256)
 * @param options.tile_height - Tile Height (from 1 to 1.07374e+09) (default 256)
 * @param options.pred - DWT Type (from 0 to 1) (default dwt97int)
 * @param options.sop - SOP marker (from 0 to 1) (default 0)
 * @param options.eph - EPH marker (from 0 to 1) (default 0)
 * @param options.prog - Progression Order (from 0 to 4) (default lrcp)
 * @param options.layer_rates - Layer Rates
 */
export function jpeg2000(options?: {
  format?: number | null | "j2k" | "jp2";
  tile_width?: number | null;
  tile_height?: number | null;
  pred?: number | null | "dwt97int" | "dwt53";
  sop?: number | null;
  eph?: number | null;
  prog?: number | null | "lrcp" | "rlcp" | "rpcl" | "pcrl" | "cprl";
  layer_rates?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "format": options?.format,
    "tile_width": options?.tile_width,
    "tile_height": options?.tile_height,
    "pred": options?.pred,
    "sop": options?.sop,
    "eph": options?.eph,
    "prog": options?.prog,
    "layer_rates": options?.layer_rates,

  });
}







/**
 * OpenJPEG JPEG 2000 (codec jpeg2000)
 * @param options.format - Codec Format (from 0 to 2) (default jp2)
 * @param options.profile - (from 0 to 4) (default jpeg2000)
 * @param options.cinema_mode - Digital Cinema (from 0 to 3) (default off)
 * @param options.prog_order - Progression Order (from 0 to 4) (default lrcp)
 * @param options.numresolution - (from 0 to 33) (default 6)
 * @param options.irreversible - (from 0 to 1) (default 0)
 * @param options.disto_alloc - (from 0 to 1) (default 1)
 * @param options.fixed_quality - (from 0 to 1) (default 0)
 */
export function libopenjpeg(options?: {
  format?: number | null | "j2k" | "jp2";
  profile?: number | null | "jpeg2000" | "cinema2k" | "cinema4k";
  cinema_mode?: number | null | "off" | "2k_24" | "2k_48" | "4k_24";
  prog_order?: number | null | "lrcp" | "rlcp" | "rpcl" | "pcrl" | "cprl";
  numresolution?: number | null;
  irreversible?: number | null;
  disto_alloc?: number | null;
  fixed_quality?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "format": options?.format,
    "profile": options?.profile,
    "cinema_mode": options?.cinema_mode,
    "prog_order": options?.prog_order,
    "numresolution": options?.numresolution,
    "irreversible": options?.irreversible,
    "disto_alloc": options?.disto_alloc,
    "fixed_quality": options?.fixed_quality,

  });
}







/**
 * JPEG-LS
 * @param options.pred - Prediction method (from 0 to 2) (default left)
 */
export function jpegls(options?: {
  pred?: number | null | "left" | "plane" | "median";

}): FFMpegEncoderOption {
  return merge({
    "pred": options?.pred,

  });
}







/**
 * libjxl JPEG XL (codec jpegxl)
 * @param options.effort - Encoding effort (from 1 to 9) (default 7)
 * @param options.distance - Maximum Butteraugli distance (quality setting, lower = better, zero = lossless, default 1.0) (from -1 to 15) (default -1)
 * @param options.modular - Force modular mode (from 0 to 1) (default 0)
 * @param options.xyb - Use XYB-encoding for lossy images (from 0 to 1) (default 1)
 */
export function libjxl(options?: {
  effort?: number | null;
  distance?: number | null;
  modular?: number | null;
  xyb?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "effort": options?.effort,
    "distance": options?.distance,
    "modular": options?.modular,
    "xyb": options?.xyb,

  });
}







/**
 * libjxl JPEG XL animated (codec jpegxl_anim)
 * @param options.effort - Encoding effort (from 1 to 9) (default 7)
 * @param options.distance - Maximum Butteraugli distance (quality setting, lower = better, zero = lossless, default 1.0) (from -1 to 15) (default -1)
 * @param options.modular - Force modular mode (from 0 to 1) (default 0)
 * @param options.xyb - Use XYB-encoding for lossy images (from 0 to 1) (default 1)
 */
export function libjxl_anim(options?: {
  effort?: number | null;
  distance?: number | null;
  modular?: number | null;
  xyb?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "effort": options?.effort,
    "distance": options?.distance,
    "modular": options?.modular,
    "xyb": options?.xyb,

  });
}







/**
 * Lossless JPEG
 * @param options.pred - Prediction method (from 1 to 3) (default left)
 */
export function ljpeg(options?: {
  pred?: number | null | "left" | "plane" | "median";

}): FFMpegEncoderOption {
  return merge({
    "pred": options?.pred,

  });
}







/**
 * MagicYUV video
 * @param options.pred - Prediction method (from 1 to 3) (default left)
 */
export function magicyuv(options?: {
  pred?: number | null | "left" | "gradient" | "median";

}): FFMpegEncoderOption {
  return merge({
    "pred": options?.pred,

  });
}







/**
 * MJPEG (Motion JPEG)
 * @param options.huffman - Huffman table strategy (from 0 to 1) (default optimal)
 * @param options.force_duplicated_matrix - Always write luma and chroma matrix for mjpeg, useful for rtp streaming. (default false)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 */
export function mjpeg(options?: {
  huffman?: number | null | "default" | "optimal";
  force_duplicated_matrix?: boolean | null;
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "huffman": options?.huffman,
    "force_duplicated_matrix": options?.force_duplicated_matrix,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,

  });
}







/**
 * MJPEG (VAAPI) (codec mjpeg)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.jfif - Include JFIF header (default false)
 * @param options.huffman - Include huffman tables (default true)
 */
export function mjpeg_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  jfif?: boolean | null;
  huffman?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "jfif": options?.jfif,
    "huffman": options?.huffman,

  });
}







/**
 * MPEG-1 video
 * @param options.gop_timecode - MPEG GOP Timecode in hh:mm:ss[:;.]ff format. Overrides timecode_frame_start.
 * @param options.drop_frame_timecode - Timecode is in drop frame format. (default false)
 * @param options.scan_offset - Reserve space for SVCD scan offset user data. (default false)
 * @param options.timecode_frame_start - GOP timecode frame start number, in non-drop-frame format (from -1 to I64_MAX) (default -1)
 * @param options.b_strategy - Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
 * @param options.b_sensitivity - Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
 * @param options.brd_scale - Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function mpeg1video(options?: {
  gop_timecode?: string | null;
  drop_frame_timecode?: boolean | null;
  scan_offset?: boolean | null;
  timecode_frame_start?: number | null;
  b_strategy?: number | null;
  b_sensitivity?: number | null;
  brd_scale?: number | null;
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "gop_timecode": options?.gop_timecode,
    "drop_frame_timecode": options?.drop_frame_timecode,
    "scan_offset": options?.scan_offset,
    "timecode_frame_start": options?.timecode_frame_start,
    "b_strategy": options?.b_strategy,
    "b_sensitivity": options?.b_sensitivity,
    "brd_scale": options?.brd_scale,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * MPEG-2 video
 * @param options.gop_timecode - MPEG GOP Timecode in hh:mm:ss[:;.]ff format. Overrides timecode_frame_start.
 * @param options.drop_frame_timecode - Timecode is in drop frame format. (default false)
 * @param options.scan_offset - Reserve space for SVCD scan offset user data. (default false)
 * @param options.timecode_frame_start - GOP timecode frame start number, in non-drop-frame format (from -1 to I64_MAX) (default -1)
 * @param options.b_strategy - Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
 * @param options.b_sensitivity - Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
 * @param options.brd_scale - Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
 * @param options.intra_vlc - Use MPEG-2 intra VLC table. (default false)
 * @param options.non_linear_quant - Use nonlinear quantizer. (default false)
 * @param options.alternate_scan - Enable alternate scantable. (default false)
 * @param options.a53cc - Use A53 Closed Captions (if available) (default true)
 * @param options.seq_disp_ext - Write sequence_display_extension blocks. (from -1 to 1) (default auto)
 * @param options.video_format - Video_format in the sequence_display_extension indicating the source of the video. (from 0 to 7) (default unspecified)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function mpeg2video(options?: {
  gop_timecode?: string | null;
  drop_frame_timecode?: boolean | null;
  scan_offset?: boolean | null;
  timecode_frame_start?: number | null;
  b_strategy?: number | null;
  b_sensitivity?: number | null;
  brd_scale?: number | null;
  intra_vlc?: boolean | null;
  non_linear_quant?: boolean | null;
  alternate_scan?: boolean | null;
  a53cc?: boolean | null;
  seq_disp_ext?: number | null | "auto" | "never" | "always";
  video_format?: number | null | "component" | "pal" | "ntsc" | "secam" | "mac" | "unspecified";
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "gop_timecode": options?.gop_timecode,
    "drop_frame_timecode": options?.drop_frame_timecode,
    "scan_offset": options?.scan_offset,
    "timecode_frame_start": options?.timecode_frame_start,
    "b_strategy": options?.b_strategy,
    "b_sensitivity": options?.b_sensitivity,
    "brd_scale": options?.brd_scale,
    "intra_vlc": options?.intra_vlc,
    "non_linear_quant": options?.non_linear_quant,
    "alternate_scan": options?.alternate_scan,
    "a53cc": options?.a53cc,
    "seq_disp_ext": options?.seq_disp_ext,
    "video_format": options?.video_format,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * MPEG-2 (VAAPI) (codec mpeg2video)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.profile - Set profile (in profile_and_level_indication) (from -99 to 7) (default -99)
 * @param options.level - Set level (in profile_and_level_indication) (from 0 to 15) (default high)
 */
export function mpeg2_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  profile?: number | null | "simple" | "main";
  level?: number | null | "low" | "main" | "high_1440" | "high";

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "profile": options?.profile,
    "level": options?.level,

  });
}







/**
 * MPEG-4 part 2
 * @param options.data_partitioning - Use data partitioning. (default false)
 * @param options.alternate_scan - Enable alternate scantable. (default false)
 * @param options.mpeg_quant - Use MPEG quantizers instead of H.263 (from 0 to 1) (default 0)
 * @param options.b_strategy - Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
 * @param options.b_sensitivity - Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
 * @param options.brd_scale - Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function mpeg4(options?: {
  data_partitioning?: boolean | null;
  alternate_scan?: boolean | null;
  mpeg_quant?: number | null;
  b_strategy?: number | null;
  b_sensitivity?: number | null;
  brd_scale?: number | null;
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "data_partitioning": options?.data_partitioning,
    "alternate_scan": options?.alternate_scan,
    "mpeg_quant": options?.mpeg_quant,
    "b_strategy": options?.b_strategy,
    "b_sensitivity": options?.b_sensitivity,
    "brd_scale": options?.brd_scale,
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * libxvidcore MPEG-4 part 2 (codec mpeg4)
 * @param options.lumi_aq - Luminance masking AQ (from 0 to 1) (default 0)
 * @param options.variance_aq - Variance AQ (from 0 to 1) (default 0)
 * @param options.ssim - Show SSIM information to stdout (from 0 to 2) (default off)
 * @param options.ssim_acc - SSIM accuracy (from 0 to 4) (default 2)
 * @param options.gmc - use GMC (from 0 to 1) (default 0)
 * @param options.me_quality - Motion estimation quality (from 0 to 6) (default 4)
 * @param options.mpeg_quant - Use MPEG quantizers instead of H.263 (from 0 to 1) (default 0)
 */
export function libxvid(options?: {
  lumi_aq?: number | null;
  variance_aq?: number | null;
  ssim?: number | null | "off" | "avg" | "frame";
  ssim_acc?: number | null;
  gmc?: number | null;
  me_quality?: number | null;
  mpeg_quant?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "lumi_aq": options?.lumi_aq,
    "variance_aq": options?.variance_aq,
    "ssim": options?.ssim,
    "ssim_acc": options?.ssim_acc,
    "gmc": options?.gmc,
    "me_quality": options?.me_quality,
    "mpeg_quant": options?.mpeg_quant,

  });
}







/**
 * V4L2 mem2mem MPEG4 encoder wrapper (codec mpeg4)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 4 to INT_MAX) (default 4)
 */
export function mpeg4_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * MPEG-4 part 2 Microsoft variant version 2
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function msmpeg4v2(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * MPEG-4 part 2 Microsoft variant version 3 (codec msmpeg4v3)
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function msmpeg4(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * Microsoft RLE
 */
export function msrle(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Microsoft Video-1
 */
export function msvideo1(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PAM (Portable AnyMap) image
 */
export function pam(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PBM (Portable BitMap) image
 */
export function pbm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PC Paintbrush PCX image
 */
export function pcx(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PFM (Portable FloatMap) image
 */
export function pfm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PGM (Portable GrayMap) image
 */
export function pgm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PGMYUV (Portable GrayMap YUV) image
 */
export function pgmyuv(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PHM (Portable HalfFloatMap) image
 */
export function phm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PNG (Portable Network Graphics) image
 * @param options.dpi - Set image resolution (in dots per inch) (from 0 to 65536) (default 0)
 * @param options.dpm - Set image resolution (in dots per meter) (from 0 to 65536) (default 0)
 * @param options.pred - Prediction method (from 0 to 5) (default paeth)
 */
export function png(options?: {
  dpi?: number | null;
  dpm?: number | null;
  pred?: number | null | "none" | "sub" | "up" | "avg" | "paeth" | "mixed";

}): FFMpegEncoderOption {
  return merge({
    "dpi": options?.dpi,
    "dpm": options?.dpm,
    "pred": options?.pred,

  });
}







/**
 * PPM (Portable PixelMap) image
 */
export function ppm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Apple ProRes
 * @param options.vendor - vendor ID (default "fmpg")
 */
export function prores(options?: {
  vendor?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "vendor": options?.vendor,

  });
}







/**
 * Apple ProRes (codec prores)
 * @param options.vendor - vendor ID (default "fmpg")
 */
export function prores_aw(options?: {
  vendor?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "vendor": options?.vendor,

  });
}







/**
 * Apple ProRes (iCodec Pro) (codec prores)
 * @param options.mbs_per_slice - macroblocks per slice (from 1 to 8) (default 8)
 * @param options.profile - (from -1 to 5) (default auto)
 * @param options.vendor - vendor ID (default "Lavc")
 * @param options.bits_per_mb - desired bits per macroblock (from 0 to 8192) (default 0)
 * @param options.quant_mat - quantiser matrix (from -1 to 6) (default auto)
 * @param options.alpha_bits - bits for alpha plane (from 0 to 16) (default 16)
 */
export function prores_ks(options?: {
  mbs_per_slice?: number | null;
  profile?: number | null | "auto" | "proxy" | "lt" | "standard" | "hq" | "4444" | "4444xq";
  vendor?: string | null;
  bits_per_mb?: number | null;
  quant_mat?: number | null | "auto" | "proxy" | "lt" | "standard" | "hq" | "default";
  alpha_bits?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mbs_per_slice": options?.mbs_per_slice,
    "profile": options?.profile,
    "vendor": options?.vendor,
    "bits_per_mb": options?.bits_per_mb,
    "quant_mat": options?.quant_mat,
    "alpha_bits": options?.alpha_bits,

  });
}







/**
 * QOI (Quite OK Image format) image
 */
export function qoi(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * QuickTime Animation (RLE) video
 */
export function qtrle(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * AJA Kona 10-bit RGB Codec
 */
export function r10k(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed RGB 10-bit
 */
export function r210(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * raw video
 */
export function rawvideo(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * id RoQ video (codec roq)
 * @param options.quake3_compat - Whether to respect known limitations in Quake 3 decoder (default true)
 */
export function roqvideo(options?: {
  quake3_compat?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "quake3_compat": options?.quake3_compat,

  });
}







/**
 * QuickTime video (RPZA)
 * @param options.skip_frame_thresh - (from 0 to 24) (default 1)
 * @param options.continue_one_color_thresh - (from 0 to 24) (default 0)
 * @param options.sixteen_color_thresh - (from 0 to 24) (default 1)
 */
export function rpza(options?: {
  skip_frame_thresh?: number | null;
  continue_one_color_thresh?: number | null;
  sixteen_color_thresh?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "skip_frame_thresh": options?.skip_frame_thresh,
    "continue_one_color_thresh": options?.continue_one_color_thresh,
    "sixteen_color_thresh": options?.sixteen_color_thresh,

  });
}







/**
 * RealVideo 1.0
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function rv10(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * RealVideo 2.0
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function rv20(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * SGI image
 * @param options.rle - Use run-length compression (from 0 to 1) (default 1)
 */
export function sgi(options?: {
  rle?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "rle": options?.rle,

  });
}







/**
 * QuickTime Graphics (SMC)
 */
export function smc(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Snow
 * @param options.motion_est - motion estimation algorithm (from 0 to 3) (default epzs)
 * @param options.memc_only - Only do ME/MC (I frames -> ref, P frame -> ME+MC). (default false)
 * @param options.no_bitstream - Skip final bitstream writeout. (default false)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to INT_MAX) (default 0)
 * @param options.iterative_dia_size - Dia size for the iterative ME (from 0 to INT_MAX) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.pred - Spatial decomposition type (from 0 to 1) (default dwt97)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 */
export function snow(options?: {
  motion_est?: number | null | "zero" | "epzs" | "xone" | "iter";
  memc_only?: boolean | null;
  no_bitstream?: boolean | null;
  intra_penalty?: number | null;
  iterative_dia_size?: number | null;
  sc_threshold?: number | null;
  pred?: number | null | "dwt97" | "dwt53";
  rc_eq?: string | null;

}): FFMpegEncoderOption {
  return merge({
    "motion_est": options?.motion_est,
    "memc_only": options?.memc_only,
    "no_bitstream": options?.no_bitstream,
    "intra_penalty": options?.intra_penalty,
    "iterative_dia_size": options?.iterative_dia_size,
    "sc_threshold": options?.sc_threshold,
    "pred": options?.pred,
    "rc_eq": options?.rc_eq,

  });
}







/**
 * NewTek SpeedHQ
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function speedhq(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * Sun Rasterfile image
 * @param options.rle - Use run-length compression (from 0 to 1) (default 1)
 */
export function sunrast(options?: {
  rle?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "rle": options?.rle,

  });
}







/**
 * Sorenson Vector Quantizer 1 / Sorenson Video 1 / SVQ1
 * @param options.motion_est - Motion estimation algorithm (from 0 to 2) (default epzs)
 */
export function svq1(options?: {
  motion_est?: number | null | "zero" | "epzs" | "xone";

}): FFMpegEncoderOption {
  return merge({
    "motion-est": options?.motion_est,

  });
}







/**
 * Truevision Targa image
 * @param options.rle - Use run-length compression (from 0 to 1) (default 1)
 */
export function targa(options?: {
  rle?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "rle": options?.rle,

  });
}







/**
 * libtheora Theora (codec theora)
 * @param options.speed_level - Sets the encoding speed level (from -1 to INT_MAX) (default -1)
 */
export function libtheora(options?: {
  speed_level?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "speed_level": options?.speed_level,

  });
}







/**
 * TIFF image
 * @param options.dpi - set the image resolution (in dpi) (from 1 to 65536) (default 72)
 * @param options.compression_algo - (from 1 to 32946) (default packbits)
 */
export function tiff(options?: {
  dpi?: number | null;
  compression_algo?: number | null | "packbits" | "raw" | "lzw" | "deflate";

}): FFMpegEncoderOption {
  return merge({
    "dpi": options?.dpi,
    "compression_algo": options?.compression_algo,

  });
}







/**
 * Ut Video
 * @param options.pred - Prediction method (from 0 to 3) (default left)
 */
export function utvideo(options?: {
  pred?: number | null | "none" | "left" | "median";

}): FFMpegEncoderOption {
  return merge({
    "pred": options?.pred,

  });
}







/**
 * Uncompressed 4:2:2 10-bit
 */
export function v210(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed 4:4:4
 */
export function v308(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed QT 4:4:4:4
 */
export function v408(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed 4:4:4 10-bit
 */
export function v410(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Vizrt Binary Image
 * @param options.format - Texture format (from 0 to 3) (default dxt5)
 */
export function vbn(options?: {
  format?: number | null | "raw" | "dxt1" | "dxt5";

}): FFMpegEncoderOption {
  return merge({
    "format": options?.format,

  });
}







/**
 * null video
 */
export function vnull(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libvpx VP8 (codec vp8)
 * @param options.lag_in_frames - Number of frames to look ahead for alternate reference frame selection (from -1 to INT_MAX) (default -1)
 * @param options.arnr_maxframes - altref noise reduction max frame count (from -1 to INT_MAX) (default -1)
 * @param options.arnr_strength - altref noise reduction filter strength (from -1 to INT_MAX) (default -1)
 * @param options.arnr_type - altref noise reduction filter type (from -1 to INT_MAX) (default -1)
 * @param options.tune - Tune the encoding to a specific scenario (from -1 to INT_MAX) (default -1)
 * @param options.deadline - Time to spend encoding, in microseconds. (from INT_MIN to INT_MAX) (default good)
 * @param options.error_resilient - Error resilience configuration (default 0)
 * @param options.max_intra_rate - Maximum I-frame bitrate (pct) 0=unlimited (from -1 to INT_MAX) (default -1)
 * @param options.crf - Select the quality for constant quality mode (from -1 to 63) (default -1)
 * @param options.static_thresh - A change threshold on blocks below which they will be skipped by the encoder (from 0 to INT_MAX) (default 0)
 * @param options.drop_threshold - Frame drop threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.noise_sensitivity - Noise sensitivity (from 0 to 4) (default 0)
 * @param options.undershoot_pct - Datarate undershoot (min) target (%) (from -1 to 100) (default -1)
 * @param options.overshoot_pct - Datarate overshoot (max) target (%) (from -1 to 1000) (default -1)
 * @param options.ts_parameters - Temporal scaling configuration using a :-separated list of key=value parameters
 * @param options.auto_alt_ref - Enable use of alternate reference frames (2-pass only) (from -1 to 2) (default -1)
 * @param options.cpu_used - Quality/Speed ratio modifier (from -16 to 16) (default 1)
 * @param options.screen_content_mode - Encoder screen content mode (from -1 to 2) (default -1)
 * @param options.speed - (from -16 to 16) (default 1)
 * @param options.quality - (from INT_MIN to INT_MAX) (default good)
 * @param options.vp8flags - (default 0)
 * @param options.arnr_max_frames - altref noise reduction max frame count (from 0 to 15) (default 0)
 * @param options.rc_lookahead - Number of frames to look ahead for alternate reference frame selection (from 0 to 25) (default 25)
 * @param options.sharpness - Increase sharpness at the expense of lower PSNR (from -1 to 7) (default -1)
 */
export function libvpx(options?: {
  lag_in_frames?: number | null;
  arnr_maxframes?: number | null;
  arnr_strength?: number | null;
  arnr_type?: number | null | "backward" | "forward" | "centered";
  tune?: number | null | "psnr" | "ssim";
  deadline?: number | null | "best" | "good" | "realtime";
  error_resilient?: string | null;
  max_intra_rate?: number | null;
  crf?: number | null;
  static_thresh?: number | null;
  drop_threshold?: number | null;
  noise_sensitivity?: number | null;
  undershoot_pct?: number | null;
  overshoot_pct?: number | null;
  ts_parameters?: string | null;
  auto_alt_ref?: number | null;
  cpu_used?: number | null;
  screen_content_mode?: number | null;
  speed?: number | null;
  quality?: number | null | "best" | "good" | "realtime";
  vp8flags?: string | null;
  arnr_max_frames?: number | null;
  rc_lookahead?: number | null;
  sharpness?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "lag-in-frames": options?.lag_in_frames,
    "arnr-maxframes": options?.arnr_maxframes,
    "arnr-strength": options?.arnr_strength,
    "arnr-type": options?.arnr_type,
    "tune": options?.tune,
    "deadline": options?.deadline,
    "error-resilient": options?.error_resilient,
    "max-intra-rate": options?.max_intra_rate,
    "crf": options?.crf,
    "static-thresh": options?.static_thresh,
    "drop-threshold": options?.drop_threshold,
    "noise-sensitivity": options?.noise_sensitivity,
    "undershoot-pct": options?.undershoot_pct,
    "overshoot-pct": options?.overshoot_pct,
    "ts-parameters": options?.ts_parameters,
    "auto-alt-ref": options?.auto_alt_ref,
    "cpu-used": options?.cpu_used,
    "screen-content-mode": options?.screen_content_mode,
    "speed": options?.speed,
    "quality": options?.quality,
    "vp8flags": options?.vp8flags,
    "arnr_max_frames": options?.arnr_max_frames,
    "rc_lookahead": options?.rc_lookahead,
    "sharpness": options?.sharpness,

  });
}







/**
 * V4L2 mem2mem VP8 encoder wrapper (codec vp8)
 * @param options.num_output_buffers - Number of buffers in the output context (from 2 to INT_MAX) (default 16)
 * @param options.num_capture_buffers - Number of buffers in the capture context (from 4 to INT_MAX) (default 4)
 */
export function vp8_v4l2m2m(options?: {
  num_output_buffers?: number | null;
  num_capture_buffers?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "num_output_buffers": options?.num_output_buffers,
    "num_capture_buffers": options?.num_capture_buffers,

  });
}







/**
 * VP8 (VAAPI) (codec vp8)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.loop_filter_level - Loop filter level (from 0 to 63) (default 16)
 * @param options.loop_filter_sharpness - Loop filter sharpness (from 0 to 15) (default 4)
 */
export function vp8_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  loop_filter_level?: number | null;
  loop_filter_sharpness?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "loop_filter_level": options?.loop_filter_level,
    "loop_filter_sharpness": options?.loop_filter_sharpness,

  });
}







/**
 * VP9 (VAAPI) (codec vp9)
 * @param options.idr_interval - Distance (in I-frames) between key frames (from 0 to INT_MAX) (default 0)
 * @param options.b_depth - Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
 * @param options.async_depth - Maximum processing parallelism. Increase this to improve single channel performance. (from 1 to 64) (default 2)
 * @param options.low_power - Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
 * @param options.max_frame_size - Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
 * @param options.rc_mode - Set rate control mode (from 0 to 6) (default auto)
 * @param options.blbrc - Block level based bitrate control (default false)
 * @param options.loop_filter_level - Loop filter level (from 0 to 63) (default 16)
 * @param options.loop_filter_sharpness - Loop filter sharpness (from 0 to 15) (default 4)
 */
export function vp9_vaapi(options?: {
  idr_interval?: number | null;
  b_depth?: number | null;
  async_depth?: number | null;
  low_power?: boolean | null;
  max_frame_size?: number | null;
  rc_mode?: number | null | "auto" | "CQP" | "CBR" | "VBR" | "ICQ" | "QVBR" | "AVBR";
  blbrc?: boolean | null;
  loop_filter_level?: number | null;
  loop_filter_sharpness?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "idr_interval": options?.idr_interval,
    "b_depth": options?.b_depth,
    "async_depth": options?.async_depth,
    "low_power": options?.low_power,
    "max_frame_size": options?.max_frame_size,
    "rc_mode": options?.rc_mode,
    "blbrc": options?.blbrc,
    "loop_filter_level": options?.loop_filter_level,
    "loop_filter_sharpness": options?.loop_filter_sharpness,

  });
}







/**
 * WBMP (Wireless Application Protocol Bitmap) image
 */
export function wbmp(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libwebp WebP image (codec webp)
 * @param options.lossless - Use lossless mode (from 0 to 1) (default 0)
 * @param options.preset - Configuration preset (from -1 to 5) (default none)
 * @param options.cr_threshold - Conditional replenishment threshold (from 0 to INT_MAX) (default 0)
 * @param options.cr_size - Conditional replenishment block size (from 0 to 256) (default 16)
 * @param options.quality - Quality (from 0 to 100) (default 75)
 */
export function libwebp_anim(options?: {
  lossless?: number | null;
  preset?: number | null | "none" | "default" | "picture" | "photo" | "drawing" | "icon" | "text";
  cr_threshold?: number | null;
  cr_size?: number | null;
  quality?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "lossless": options?.lossless,
    "preset": options?.preset,
    "cr_threshold": options?.cr_threshold,
    "cr_size": options?.cr_size,
    "quality": options?.quality,

  });
}







/**
 * libwebp WebP image (codec webp)
 * @param options.lossless - Use lossless mode (from 0 to 1) (default 0)
 * @param options.preset - Configuration preset (from -1 to 5) (default none)
 * @param options.cr_threshold - Conditional replenishment threshold (from 0 to INT_MAX) (default 0)
 * @param options.cr_size - Conditional replenishment block size (from 0 to 256) (default 16)
 * @param options.quality - Quality (from 0 to 100) (default 75)
 */
export function libwebp(options?: {
  lossless?: number | null;
  preset?: number | null | "none" | "default" | "picture" | "photo" | "drawing" | "icon" | "text";
  cr_threshold?: number | null;
  cr_size?: number | null;
  quality?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "lossless": options?.lossless,
    "preset": options?.preset,
    "cr_threshold": options?.cr_threshold,
    "cr_size": options?.cr_size,
    "quality": options?.quality,

  });
}







/**
 * Windows Media Video 7
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function wmv1(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * Windows Media Video 8
 * @param options.mpv_flags - Flags common for all mpegvideo-based encoders. (default 0)
 * @param options.luma_elim_threshold - single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.chroma_elim_threshold - single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
 * @param options.quantizer_noise_shaping - (from 0 to INT_MAX) (default 0)
 * @param options.error_rate - Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
 * @param options.qsquish - how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
 * @param options.rc_qmod_amp - experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_qmod_freq - experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
 * @param options.rc_eq - Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
 * @param options.rc_init_cplx - initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.rc_buf_aggressivity - currently useless (from -FLT_MAX to FLT_MAX) (default 1)
 * @param options.border_mask - increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.lmin - minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
 * @param options.lmax - maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
 * @param options.skip_threshold - Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_factor - Frame skip factor (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_exp - Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_cmp - Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
 * @param options.noise_reduction - Noise reduction (from INT_MIN to INT_MAX) (default 0)
 * @param options.ps - RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
 * @param options.motion_est - motion estimation algorithm (from 0 to 2) (default epzs)
 * @param options.mepc - Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
 * @param options.mepre - pre motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.intra_penalty - Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)
 * @param options.sc_threshold - Scene change threshold (from INT_MIN to INT_MAX) (default 0)
 */
export function wmv2(options?: {
  mpv_flags?: string | null;
  luma_elim_threshold?: number | null;
  chroma_elim_threshold?: number | null;
  quantizer_noise_shaping?: number | null;
  error_rate?: number | null;
  qsquish?: number | null;
  rc_qmod_amp?: number | null;
  rc_qmod_freq?: number | null;
  rc_eq?: string | null;
  rc_init_cplx?: number | null;
  rc_buf_aggressivity?: number | null;
  border_mask?: number | null;
  lmin?: number | null;
  lmax?: number | null;
  skip_threshold?: number | null;
  skip_factor?: number | null;
  skip_exp?: number | null;
  skip_cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "dct264" | "dctmax" | "chroma" | "msad";
  noise_reduction?: number | null;
  ps?: number | null;
  motion_est?: number | null | "zero" | "epzs" | "xone";
  mepc?: number | null;
  mepre?: number | null;
  intra_penalty?: number | null;
  sc_threshold?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mpv_flags": options?.mpv_flags,
    "luma_elim_threshold": options?.luma_elim_threshold,
    "chroma_elim_threshold": options?.chroma_elim_threshold,
    "quantizer_noise_shaping": options?.quantizer_noise_shaping,
    "error_rate": options?.error_rate,
    "qsquish": options?.qsquish,
    "rc_qmod_amp": options?.rc_qmod_amp,
    "rc_qmod_freq": options?.rc_qmod_freq,
    "rc_eq": options?.rc_eq,
    "rc_init_cplx": options?.rc_init_cplx,
    "rc_buf_aggressivity": options?.rc_buf_aggressivity,
    "border_mask": options?.border_mask,
    "lmin": options?.lmin,
    "lmax": options?.lmax,
    "skip_threshold": options?.skip_threshold,
    "skip_factor": options?.skip_factor,
    "skip_exp": options?.skip_exp,
    "skip_cmp": options?.skip_cmp,
    "noise_reduction": options?.noise_reduction,
    "ps": options?.ps,
    "motion_est": options?.motion_est,
    "mepc": options?.mepc,
    "mepre": options?.mepre,
    "intra_penalty": options?.intra_penalty,
    "sc_threshold": options?.sc_threshold,

  });
}







/**
 * AVFrame to AVPacket passthrough
 */
export function wrapped_avframe(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * XBM (X BitMap) image
 */
export function xbm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * X-face image
 */
export function xface(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * XWD (X Window Dump) image
 */
export function xwd(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed YUV 4:1:1 12-bit
 */
export function y41p(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Uncompressed packed 4:2:0
 */
export function yuv4(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * LCL (LossLess Codec Library) ZLIB
 */
export function zlib(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Zip Motion Blocks Video
 */
export function zmbv(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * AAC (Advanced Audio Coding)
 * @param options.aac_coder - Coding algorithm (from 0 to 1) (default twoloop)
 * @param options.aac_ms - Force M/S stereo coding (default auto)
 * @param options.aac_is - Intensity stereo coding (default true)
 * @param options.aac_pns - Perceptual noise substitution (default true)
 * @param options.aac_tns - Temporal noise shaping (default true)
 * @param options.aac_pce - Forces the use of PCEs (default false)
 */
export function aac(options?: {
  aac_coder?: number | null | "twoloop" | "fast";
  aac_ms?: boolean | null;
  aac_is?: boolean | null;
  aac_pns?: boolean | null;
  aac_tns?: boolean | null;
  aac_pce?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "aac_coder": options?.aac_coder,
    "aac_ms": options?.aac_ms,
    "aac_is": options?.aac_is,
    "aac_pns": options?.aac_pns,
    "aac_tns": options?.aac_tns,
    "aac_pce": options?.aac_pce,

  });
}







/**
 * Fraunhofer FDK AAC (codec aac)
 * @param options.afterburner - Afterburner (improved quality) (from 0 to 1) (default 1)
 * @param options.eld_sbr - Enable SBR for ELD (for SBR in other configurations, use the -profile parameter) (from 0 to 1) (default 0)
 * @param options.eld_v2 - Enable ELDv2 (LD-MPS extension for ELD stereo signals) (from 0 to 1) (default 0)
 * @param options.signaling - SBR/PS signaling style (from -1 to 2) (default default)
 * @param options.latm - Output LATM/LOAS encapsulated data (from 0 to 1) (default 0)
 * @param options.header_period - StreamMuxConfig and PCE repetition period (in frames) (from 0 to 65535) (default 0)
 * @param options.vbr - VBR mode (1-5) (from 0 to 5) (default 0)
 * @param options.drc_profile - The desired compression profile for AAC DRC (from 0 to 256) (default 0)
 * @param options.drc_target_ref - Expected target reference level at decoder side in dB (for clipping prevention/limiter) (from -31.75 to 0) (default 0)
 * @param options.comp_profile - The desired compression profile for AAC DRC (from 0 to 256) (default 0)
 * @param options.comp_target_ref - Expected target reference level at decoder side in dB (for clipping prevention/limiter) (from -31.75 to 0) (default 0)
 * @param options.prog_ref - The program reference level or dialog level in dB (from -31.75 to 0) (default 0)
 * @param options.frame_length - The desired frame length (from -1 to 1024) (default -1)
 */
export function libfdk_aac(options?: {
  afterburner?: number | null;
  eld_sbr?: number | null;
  eld_v2?: number | null;
  signaling?: number | null | "default" | "implicit" | "explicit_sbr" | "explicit_hierarchical";
  latm?: number | null;
  header_period?: number | null;
  vbr?: number | null;
  drc_profile?: number | null;
  drc_target_ref?: number | null;
  comp_profile?: number | null;
  comp_target_ref?: number | null;
  prog_ref?: number | null;
  frame_length?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "afterburner": options?.afterburner,
    "eld_sbr": options?.eld_sbr,
    "eld_v2": options?.eld_v2,
    "signaling": options?.signaling,
    "latm": options?.latm,
    "header_period": options?.header_period,
    "vbr": options?.vbr,
    "drc_profile": options?.drc_profile,
    "drc_target_ref": options?.drc_target_ref,
    "comp_profile": options?.comp_profile,
    "comp_target_ref": options?.comp_target_ref,
    "prog_ref": options?.prog_ref,
    "frame_length": options?.frame_length,

  });
}







/**
 * ATSC A/52A (AC-3)
 * @param options.center_mixlev - Center Mix Level (from 0 to 1) (default 0.594604)
 * @param options.surround_mixlev - Surround Mix Level (from 0 to 1) (default 0.5)
 * @param options.mixing_level - Mixing Level (from -1 to 111) (default -1)
 * @param options.room_type - Room Type (from -1 to 2) (default -1)
 * @param options.per_frame_metadata - Allow Changing Metadata Per-Frame (default false)
 * @param options.copyright - Copyright Bit (from -1 to 1) (default -1)
 * @param options.dialnorm - Dialogue Level (dB) (from -31 to -1) (default -31)
 * @param options.dsur_mode - Dolby Surround Mode (from -1 to 2) (default -1)
 * @param options.original - Original Bit Stream (from -1 to 1) (default -1)
 * @param options.dmix_mode - Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
 * @param options.ltrt_cmixlev - Lt/Rt Center Mix Level (from -1 to 2) (default -1)
 * @param options.ltrt_surmixlev - Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
 * @param options.loro_cmixlev - Lo/Ro Center Mix Level (from -1 to 2) (default -1)
 * @param options.loro_surmixlev - Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
 * @param options.dsurex_mode - Dolby Surround EX Mode (from -1 to 3) (default -1)
 * @param options.dheadphone_mode - Dolby Headphone Mode (from -1 to 2) (default -1)
 * @param options.ad_conv_type - A/D Converter Type (from -1 to 1) (default -1)
 * @param options.stereo_rematrixing - Stereo Rematrixing (default true)
 * @param options.channel_coupling - Channel Coupling (from -1 to 1) (default auto)
 * @param options.cpl_start_band - Coupling Start Band (from -1 to 15) (default auto)
 */
export function ac3(options?: {
  center_mixlev?: number | null;
  surround_mixlev?: number | null;
  mixing_level?: number | null;
  room_type?: number | null | "notindicated" | "large" | "small";
  per_frame_metadata?: boolean | null;
  copyright?: number | null;
  dialnorm?: number | null;
  dsur_mode?: number | null | "notindicated" | "on" | "off";
  original?: number | null;
  dmix_mode?: number | null | "notindicated" | "ltrt" | "loro" | "dplii";
  ltrt_cmixlev?: number | null;
  ltrt_surmixlev?: number | null;
  loro_cmixlev?: number | null;
  loro_surmixlev?: number | null;
  dsurex_mode?: number | null | "notindicated" | "on" | "off" | "dpliiz";
  dheadphone_mode?: number | null | "notindicated" | "on" | "off";
  ad_conv_type?: number | null | "standard" | "hdcd";
  stereo_rematrixing?: boolean | null;
  channel_coupling?: number | null | "auto";
  cpl_start_band?: number | null | "auto";

}): FFMpegEncoderOption {
  return merge({
    "center_mixlev": options?.center_mixlev,
    "surround_mixlev": options?.surround_mixlev,
    "mixing_level": options?.mixing_level,
    "room_type": options?.room_type,
    "per_frame_metadata": options?.per_frame_metadata,
    "copyright": options?.copyright,
    "dialnorm": options?.dialnorm,
    "dsur_mode": options?.dsur_mode,
    "original": options?.original,
    "dmix_mode": options?.dmix_mode,
    "ltrt_cmixlev": options?.ltrt_cmixlev,
    "ltrt_surmixlev": options?.ltrt_surmixlev,
    "loro_cmixlev": options?.loro_cmixlev,
    "loro_surmixlev": options?.loro_surmixlev,
    "dsurex_mode": options?.dsurex_mode,
    "dheadphone_mode": options?.dheadphone_mode,
    "ad_conv_type": options?.ad_conv_type,
    "stereo_rematrixing": options?.stereo_rematrixing,
    "channel_coupling": options?.channel_coupling,
    "cpl_start_band": options?.cpl_start_band,

  });
}







/**
 * ATSC A/52A (AC-3) (codec ac3)
 * @param options.center_mixlev - Center Mix Level (from 0 to 1) (default 0.594604)
 * @param options.surround_mixlev - Surround Mix Level (from 0 to 1) (default 0.5)
 * @param options.mixing_level - Mixing Level (from -1 to 111) (default -1)
 * @param options.room_type - Room Type (from -1 to 2) (default -1)
 * @param options.per_frame_metadata - Allow Changing Metadata Per-Frame (default false)
 * @param options.copyright - Copyright Bit (from -1 to 1) (default -1)
 * @param options.dialnorm - Dialogue Level (dB) (from -31 to -1) (default -31)
 * @param options.dsur_mode - Dolby Surround Mode (from -1 to 2) (default -1)
 * @param options.original - Original Bit Stream (from -1 to 1) (default -1)
 * @param options.dmix_mode - Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
 * @param options.ltrt_cmixlev - Lt/Rt Center Mix Level (from -1 to 2) (default -1)
 * @param options.ltrt_surmixlev - Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
 * @param options.loro_cmixlev - Lo/Ro Center Mix Level (from -1 to 2) (default -1)
 * @param options.loro_surmixlev - Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
 * @param options.dsurex_mode - Dolby Surround EX Mode (from -1 to 3) (default -1)
 * @param options.dheadphone_mode - Dolby Headphone Mode (from -1 to 2) (default -1)
 * @param options.ad_conv_type - A/D Converter Type (from -1 to 1) (default -1)
 * @param options.stereo_rematrixing - Stereo Rematrixing (default true)
 * @param options.channel_coupling - Channel Coupling (from -1 to 1) (default auto)
 * @param options.cpl_start_band - Coupling Start Band (from -1 to 15) (default auto)
 */
export function ac3_fixed(options?: {
  center_mixlev?: number | null;
  surround_mixlev?: number | null;
  mixing_level?: number | null;
  room_type?: number | null | "notindicated" | "large" | "small";
  per_frame_metadata?: boolean | null;
  copyright?: number | null;
  dialnorm?: number | null;
  dsur_mode?: number | null | "notindicated" | "on" | "off";
  original?: number | null;
  dmix_mode?: number | null | "notindicated" | "ltrt" | "loro" | "dplii";
  ltrt_cmixlev?: number | null;
  ltrt_surmixlev?: number | null;
  loro_cmixlev?: number | null;
  loro_surmixlev?: number | null;
  dsurex_mode?: number | null | "notindicated" | "on" | "off" | "dpliiz";
  dheadphone_mode?: number | null | "notindicated" | "on" | "off";
  ad_conv_type?: number | null | "standard" | "hdcd";
  stereo_rematrixing?: boolean | null;
  channel_coupling?: number | null | "auto";
  cpl_start_band?: number | null | "auto";

}): FFMpegEncoderOption {
  return merge({
    "center_mixlev": options?.center_mixlev,
    "surround_mixlev": options?.surround_mixlev,
    "mixing_level": options?.mixing_level,
    "room_type": options?.room_type,
    "per_frame_metadata": options?.per_frame_metadata,
    "copyright": options?.copyright,
    "dialnorm": options?.dialnorm,
    "dsur_mode": options?.dsur_mode,
    "original": options?.original,
    "dmix_mode": options?.dmix_mode,
    "ltrt_cmixlev": options?.ltrt_cmixlev,
    "ltrt_surmixlev": options?.ltrt_surmixlev,
    "loro_cmixlev": options?.loro_cmixlev,
    "loro_surmixlev": options?.loro_surmixlev,
    "dsurex_mode": options?.dsurex_mode,
    "dheadphone_mode": options?.dheadphone_mode,
    "ad_conv_type": options?.ad_conv_type,
    "stereo_rematrixing": options?.stereo_rematrixing,
    "channel_coupling": options?.channel_coupling,
    "cpl_start_band": options?.cpl_start_band,

  });
}







/**
 * SEGA CRI ADX ADPCM
 */
export function adpcm_adx(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * ADPCM Argonaut Games
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_argo(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * G.722 ADPCM (codec adpcm_g722)
 */
export function g722(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * G.726 ADPCM (codec adpcm_g726)
 * @param options.code_size - Bits per code (from 2 to 5) (default 4)
 */
export function g726(options?: {
  code_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "code_size": options?.code_size,

  });
}







/**
 * G.726 little endian ADPCM ("right-justified") (codec adpcm_g726le)
 * @param options.code_size - Bits per code (from 2 to 5) (default 4)
 */
export function g726le(options?: {
  code_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "code_size": options?.code_size,

  });
}







/**
 * ADPCM IMA High Voltage Software ALP
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_alp(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA AMV
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_amv(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA Ubisoft APM
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_apm(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA QuickTime
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_qt(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA Simon & Schuster Interactive
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_ssi(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA WAV
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_wav(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM IMA Westwood
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ima_ws(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM Microsoft
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_ms(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM Shockwave Flash
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_swf(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ADPCM Yamaha
 * @param options.block_size - set the block size (from 32 to 8192) (default 1024)
 */
export function adpcm_yamaha(options?: {
  block_size?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "block_size": options?.block_size,

  });
}







/**
 * ALAC (Apple Lossless Audio Codec)
 * @param options.min_prediction_order - (from 1 to 30) (default 4)
 * @param options.max_prediction_order - (from 1 to 30) (default 6)
 */
export function alac(options?: {
  min_prediction_order?: number | null;
  max_prediction_order?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "min_prediction_order": options?.min_prediction_order,
    "max_prediction_order": options?.max_prediction_order,

  });
}







/**
 * OpenCORE AMR-NB (Adaptive Multi-Rate Narrow-Band) (codec amr_nb)
 * @param options.dtx - Allow DTX (generate comfort noise) (from 0 to 1) (default 0)
 */
export function libopencore_amrnb(options?: {
  dtx?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "dtx": options?.dtx,

  });
}







/**
 * null audio
 */
export function anull(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * aptX (Audio Processing Technology for Bluetooth)
 */
export function aptx(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * aptX HD (Audio Processing Technology for Bluetooth)
 */
export function aptx_hd(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * codec2 encoder using libcodec2 (codec codec2)
 * @param options.mode - codec2 mode (from 0 to 8) (default 1300)
 */
export function libcodec2(options?: {
  mode?: number | null | "3200" | "2400" | "1600" | "1400" | "1300" | "1200" | "700" | "700B" | "700C";

}): FFMpegEncoderOption {
  return merge({
    "mode": options?.mode,

  });
}







/**
 * RFC 3389 comfort noise generator
 */
export function comfortnoise(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * DFPWM1a audio
 */
export function dfpwm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * DCA (DTS Coherent Acoustics) (codec dts)
 * @param options.dca_adpcm - Use ADPCM encoding (default false)
 */
export function dca(options?: {
  dca_adpcm?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "dca_adpcm": options?.dca_adpcm,

  });
}







/**
 * ATSC A/52 E-AC-3
 * @param options.mixing_level - Mixing Level (from -1 to 111) (default -1)
 * @param options.room_type - Room Type (from -1 to 2) (default -1)
 * @param options.per_frame_metadata - Allow Changing Metadata Per-Frame (default false)
 * @param options.copyright - Copyright Bit (from -1 to 1) (default -1)
 * @param options.dialnorm - Dialogue Level (dB) (from -31 to -1) (default -31)
 * @param options.dsur_mode - Dolby Surround Mode (from -1 to 2) (default -1)
 * @param options.original - Original Bit Stream (from -1 to 1) (default -1)
 * @param options.dmix_mode - Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
 * @param options.ltrt_cmixlev - Lt/Rt Center Mix Level (from -1 to 2) (default -1)
 * @param options.ltrt_surmixlev - Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
 * @param options.loro_cmixlev - Lo/Ro Center Mix Level (from -1 to 2) (default -1)
 * @param options.loro_surmixlev - Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
 * @param options.dsurex_mode - Dolby Surround EX Mode (from -1 to 3) (default -1)
 * @param options.dheadphone_mode - Dolby Headphone Mode (from -1 to 2) (default -1)
 * @param options.ad_conv_type - A/D Converter Type (from -1 to 1) (default -1)
 * @param options.stereo_rematrixing - Stereo Rematrixing (default true)
 * @param options.channel_coupling - Channel Coupling (from -1 to 1) (default auto)
 * @param options.cpl_start_band - Coupling Start Band (from -1 to 15) (default auto)
 */
export function eac3(options?: {
  mixing_level?: number | null;
  room_type?: number | null | "notindicated" | "large" | "small";
  per_frame_metadata?: boolean | null;
  copyright?: number | null;
  dialnorm?: number | null;
  dsur_mode?: number | null | "notindicated" | "on" | "off";
  original?: number | null;
  dmix_mode?: number | null | "notindicated" | "ltrt" | "loro" | "dplii";
  ltrt_cmixlev?: number | null;
  ltrt_surmixlev?: number | null;
  loro_cmixlev?: number | null;
  loro_surmixlev?: number | null;
  dsurex_mode?: number | null | "notindicated" | "on" | "off" | "dpliiz";
  dheadphone_mode?: number | null | "notindicated" | "on" | "off";
  ad_conv_type?: number | null | "standard" | "hdcd";
  stereo_rematrixing?: boolean | null;
  channel_coupling?: number | null | "auto";
  cpl_start_band?: number | null | "auto";

}): FFMpegEncoderOption {
  return merge({
    "mixing_level": options?.mixing_level,
    "room_type": options?.room_type,
    "per_frame_metadata": options?.per_frame_metadata,
    "copyright": options?.copyright,
    "dialnorm": options?.dialnorm,
    "dsur_mode": options?.dsur_mode,
    "original": options?.original,
    "dmix_mode": options?.dmix_mode,
    "ltrt_cmixlev": options?.ltrt_cmixlev,
    "ltrt_surmixlev": options?.ltrt_surmixlev,
    "loro_cmixlev": options?.loro_cmixlev,
    "loro_surmixlev": options?.loro_surmixlev,
    "dsurex_mode": options?.dsurex_mode,
    "dheadphone_mode": options?.dheadphone_mode,
    "ad_conv_type": options?.ad_conv_type,
    "stereo_rematrixing": options?.stereo_rematrixing,
    "channel_coupling": options?.channel_coupling,
    "cpl_start_band": options?.cpl_start_band,

  });
}







/**
 * FLAC (Free Lossless Audio Codec)
 * @param options.lpc_coeff_precision - LPC coefficient precision (from 0 to 15) (default 15)
 * @param options.lpc_type - LPC algorithm (from -1 to 3) (default -1)
 * @param options.lpc_passes - Number of passes to use for Cholesky factorization during LPC analysis (from 1 to INT_MAX) (default 2)
 * @param options.min_partition_order - (from -1 to 8) (default -1)
 * @param options.prediction_order_method - Search method for selecting prediction order (from -1 to 5) (default -1)
 * @param options.ch_mode - Stereo decorrelation mode (from -1 to 3) (default auto)
 * @param options.exact_rice_parameters - Calculate rice parameters exactly (default false)
 * @param options.multi_dim_quant - Multi-dimensional quantization (default false)
 * @param options.min_prediction_order - (from -1 to 32) (default -1)
 */
export function flac(options?: {
  lpc_coeff_precision?: number | null;
  lpc_type?: number | null | "none" | "fixed" | "levinson" | "cholesky";
  lpc_passes?: number | null;
  min_partition_order?: number | null;
  prediction_order_method?: number | null | "estimation" | "2level" | "4level" | "8level" | "search" | "log";
  ch_mode?: number | null | "auto" | "indep" | "left_side" | "right_side" | "mid_side";
  exact_rice_parameters?: boolean | null;
  multi_dim_quant?: boolean | null;
  min_prediction_order?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "lpc_coeff_precision": options?.lpc_coeff_precision,
    "lpc_type": options?.lpc_type,
    "lpc_passes": options?.lpc_passes,
    "min_partition_order": options?.min_partition_order,
    "prediction_order_method": options?.prediction_order_method,
    "ch_mode": options?.ch_mode,
    "exact_rice_parameters": options?.exact_rice_parameters,
    "multi_dim_quant": options?.multi_dim_quant,
    "min_prediction_order": options?.min_prediction_order,

  });
}







/**
 * G.723.1
 */
export function g723_1(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libgsm GSM (codec gsm)
 */
export function libgsm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libgsm GSM Microsoft variant (codec gsm_ms)
 */
export function libgsm_ms(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * MLP (Meridian Lossless Packing)
 * @param options.max_interval - Max number of frames between each new header (from 8 to 128) (default 16)
 * @param options.lpc_coeff_precision - LPC coefficient precision (from 0 to 15) (default 15)
 * @param options.lpc_type - LPC algorithm (from 2 to 3) (default levinson)
 * @param options.lpc_passes - Number of passes to use for Cholesky factorization during LPC analysis (from 1 to INT_MAX) (default 2)
 * @param options.codebook_search - Max number of codebook searches (from 1 to 100) (default 3)
 * @param options.prediction_order - Search method for selecting prediction order (from 0 to 4) (default estimation)
 * @param options.rematrix_precision - Rematrix coefficient precision (from 0 to 14) (default 1)
 */
export function mlp(options?: {
  max_interval?: number | null;
  lpc_coeff_precision?: number | null;
  lpc_type?: number | null | "levinson" | "cholesky";
  lpc_passes?: number | null;
  codebook_search?: number | null;
  prediction_order?: number | null | "estimation" | "search";
  rematrix_precision?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "max_interval": options?.max_interval,
    "lpc_coeff_precision": options?.lpc_coeff_precision,
    "lpc_type": options?.lpc_type,
    "lpc_passes": options?.lpc_passes,
    "codebook_search": options?.codebook_search,
    "prediction_order": options?.prediction_order,
    "rematrix_precision": options?.rematrix_precision,

  });
}







/**
 * MP2 (MPEG audio layer 2)
 */
export function mp2(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * MP2 fixed point (MPEG audio layer 2) (codec mp2)
 */
export function mp2fixed(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libtwolame MP2 (MPEG audio layer 2) (codec mp2)
 * @param options.mode - Mpeg Mode (from -1 to 3) (default auto)
 * @param options.psymodel - Psychoacoustic Model (from -1 to 4) (default 3)
 * @param options.energy_levels - enable energy levels (from 0 to 1) (default 0)
 * @param options.error_protection - enable CRC error protection (from 0 to 1) (default 0)
 * @param options.copyright - set MPEG Audio Copyright flag (from 0 to 1) (default 0)
 * @param options.original - set MPEG Audio Original flag (from 0 to 1) (default 0)
 * @param options.verbosity - set library optput level (0-10) (from 0 to 10) (default 0)
 */
export function libtwolame(options?: {
  mode?: number | null | "auto" | "stereo" | "joint_stereo" | "dual_channel" | "mono";
  psymodel?: number | null;
  energy_levels?: number | null;
  error_protection?: number | null;
  copyright?: number | null;
  original?: number | null;
  verbosity?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "mode": options?.mode,
    "psymodel": options?.psymodel,
    "energy_levels": options?.energy_levels,
    "error_protection": options?.error_protection,
    "copyright": options?.copyright,
    "original": options?.original,
    "verbosity": options?.verbosity,

  });
}







/**
 * libmp3lame MP3 (MPEG audio layer 3) (codec mp3)
 * @param options.reservoir - use bit reservoir (default true)
 * @param options.joint_stereo - use joint stereo (default true)
 * @param options.abr - use ABR (default false)
 * @param options.copyright - set copyright flag (default false)
 * @param options.original - set original flag (default true)
 */
export function libmp3lame(options?: {
  reservoir?: boolean | null;
  joint_stereo?: boolean | null;
  abr?: boolean | null;
  copyright?: boolean | null;
  original?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "reservoir": options?.reservoir,
    "joint_stereo": options?.joint_stereo,
    "abr": options?.abr,
    "copyright": options?.copyright,
    "original": options?.original,

  });
}







/**
 * libshine MP3 (MPEG audio layer 3) (codec mp3)
 */
export function libshine(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Nellymoser Asao
 */
export function nellymoser(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Opus
 * @param options.opus_delay - Maximum delay in milliseconds (from 2.5 to 360) (default 360)
 * @param options.apply_phase_inv - Apply intensity stereo phase inversion (default true)
 */
export function opus(options?: {
  opus_delay?: number | null;
  apply_phase_inv?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "opus_delay": options?.opus_delay,
    "apply_phase_inv": options?.apply_phase_inv,

  });
}







/**
 * libopus Opus (codec opus)
 * @param options.application - Intended application type (from 2048 to 2051) (default audio)
 * @param options.frame_duration - Duration of a frame in milliseconds (from 2.5 to 120) (default 20)
 * @param options.packet_loss - Expected packet loss percentage (from 0 to 100) (default 0)
 * @param options.fec - Enable inband FEC. Expected packet loss must be non-zero (default false)
 * @param options.vbr - Variable bit rate mode (from 0 to 2) (default on)
 * @param options.mapping_family - Channel Mapping Family (from -1 to 255) (default -1)
 * @param options.apply_phase_inv - Apply intensity stereo phase inversion (default true)
 */
export function libopus(options?: {
  application?: number | null | "voip" | "audio" | "lowdelay";
  frame_duration?: number | null;
  packet_loss?: number | null;
  fec?: boolean | null;
  vbr?: number | null | "off" | "on" | "constrained";
  mapping_family?: number | null;
  apply_phase_inv?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "application": options?.application,
    "frame_duration": options?.frame_duration,
    "packet_loss": options?.packet_loss,
    "fec": options?.fec,
    "vbr": options?.vbr,
    "mapping_family": options?.mapping_family,
    "apply_phase_inv": options?.apply_phase_inv,

  });
}







/**
 * PCM A-law / G.711 A-law
 */
export function pcm_alaw(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16|20|24-bit big-endian for Blu-ray media
 */
export function pcm_bluray(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16|20|24-bit big-endian for DVD media
 */
export function pcm_dvd(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating point big-endian
 */
export function pcm_f32be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM 32-bit floating point little-endian
 */
export function pcm_f32le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM 64-bit floating point big-endian
 */
export function pcm_f64be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM 64-bit floating point little-endian
 */
export function pcm_f64le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM mu-law / G.711 mu-law
 */
export function pcm_mulaw(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit big-endian
 */
export function pcm_s16be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit big-endian planar
 */
export function pcm_s16be_planar(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit little-endian
 */
export function pcm_s16le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 16-bit little-endian planar
 */
export function pcm_s16le_planar(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit big-endian
 */
export function pcm_s24be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM D-Cinema audio signed 24-bit
 */
export function pcm_s24daud(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit little-endian
 */
export function pcm_s24le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 24-bit little-endian planar
 */
export function pcm_s24le_planar(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit big-endian
 */
export function pcm_s32be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit little-endian
 */
export function pcm_s32le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 32-bit little-endian planar
 */
export function pcm_s32le_planar(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 64-bit big-endian
 */
export function pcm_s64be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 64-bit little-endian
 */
export function pcm_s64le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit
 */
export function pcm_s8(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM signed 8-bit planar
 */
export function pcm_s8_planar(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit big-endian
 */
export function pcm_u16be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 16-bit little-endian
 */
export function pcm_u16le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit big-endian
 */
export function pcm_u24be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 24-bit little-endian
 */
export function pcm_u24le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit big-endian
 */
export function pcm_u32be(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 32-bit little-endian
 */
export function pcm_u32le(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM unsigned 8-bit
 */
export function pcm_u8(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * PCM Archimedes VIDC
 */
export function pcm_vidc(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * RealAudio 1.0 (14.4K) (codec ra_144)
 */
export function real_144(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * id RoQ DPCM
 */
export function roq_dpcm(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * SMPTE 302M
 */
export function s302m(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * SBC (low-complexity subband codec)
 * @param options.sbc_delay - set maximum algorithmic latency (default 0.013)
 * @param options.msbc - use mSBC mode (wideband speech mono SBC) (default false)
 */
export function sbc(options?: {
  sbc_delay?: string | null;
  msbc?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "sbc_delay": options?.sbc_delay,
    "msbc": options?.msbc,

  });
}







/**
 * libspeex Speex (codec speex)
 * @param options.abr - Use average bit rate (from 0 to 1) (default 0)
 * @param options.cbr_quality - Set quality value (0 to 10) for CBR (from 0 to 10) (default 8)
 * @param options.frames_per_packet - Number of frames to encode in each packet (from 1 to 8) (default 1)
 * @param options.vad - Voice Activity Detection (from 0 to 1) (default 0)
 * @param options.dtx - Discontinuous Transmission (from 0 to 1) (default 0)
 */
export function libspeex(options?: {
  abr?: number | null;
  cbr_quality?: number | null;
  frames_per_packet?: number | null;
  vad?: number | null;
  dtx?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "abr": options?.abr,
    "cbr_quality": options?.cbr_quality,
    "frames_per_packet": options?.frames_per_packet,
    "vad": options?.vad,
    "dtx": options?.dtx,

  });
}







/**
 * TrueHD
 * @param options.max_interval - Max number of frames between each new header (from 8 to 128) (default 16)
 * @param options.lpc_coeff_precision - LPC coefficient precision (from 0 to 15) (default 15)
 * @param options.lpc_type - LPC algorithm (from 2 to 3) (default levinson)
 * @param options.lpc_passes - Number of passes to use for Cholesky factorization during LPC analysis (from 1 to INT_MAX) (default 2)
 * @param options.codebook_search - Max number of codebook searches (from 1 to 100) (default 3)
 * @param options.prediction_order - Search method for selecting prediction order (from 0 to 4) (default estimation)
 * @param options.rematrix_precision - Rematrix coefficient precision (from 0 to 14) (default 1)
 */
export function truehd(options?: {
  max_interval?: number | null;
  lpc_coeff_precision?: number | null;
  lpc_type?: number | null | "levinson" | "cholesky";
  lpc_passes?: number | null;
  codebook_search?: number | null;
  prediction_order?: number | null | "estimation" | "search";
  rematrix_precision?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "max_interval": options?.max_interval,
    "lpc_coeff_precision": options?.lpc_coeff_precision,
    "lpc_type": options?.lpc_type,
    "lpc_passes": options?.lpc_passes,
    "codebook_search": options?.codebook_search,
    "prediction_order": options?.prediction_order,
    "rematrix_precision": options?.rematrix_precision,

  });
}







/**
 * TTA (True Audio)
 */
export function tta(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Vorbis
 */
export function vorbis(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * libvorbis (codec vorbis)
 * @param options.iblock - Sets the impulse block bias (from -15 to 0) (default 0)
 */
export function libvorbis(options?: {
  iblock?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "iblock": options?.iblock,

  });
}







/**
 * WavPack
 * @param options.joint_stereo - (default auto)
 * @param options.optimize_mono - (default false)
 */
export function wavpack(options?: {
  joint_stereo?: boolean | null;
  optimize_mono?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "joint_stereo": options?.joint_stereo,
    "optimize_mono": options?.optimize_mono,

  });
}







/**
 * Windows Media Audio 1
 */
export function wmav1(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Windows Media Audio 2
 */
export function wmav2(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * ASS (Advanced SubStation Alpha) subtitle (codec ass)
 */
export function ssa(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * ASS (Advanced SubStation Alpha) subtitle
 */
export function ass(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * DVB subtitles (codec dvb_subtitle)
 * @param options.min_bpp - minimum bits-per-pixel for subtitle colors (2, 4 or 8) (from 2 to 8) (default 4)
 */
export function dvbsub(options?: {
  min_bpp?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "min_bpp": options?.min_bpp,

  });
}







/**
 * DVD subtitles (codec dvd_subtitle)
 * @param options.palette - set the global palette
 * @param options.even_rows_fix - Make number of rows even (workaround for some players) (default false)
 */
export function dvdsub(options?: {
  palette?: string | null;
  even_rows_fix?: boolean | null;

}): FFMpegEncoderOption {
  return merge({
    "palette": options?.palette,
    "even_rows_fix": options?.even_rows_fix,

  });
}







/**
 * 3GPP Timed Text subtitle
 * @param options.height - Frame height, usually video height (from 0 to INT_MAX) (default 0)
 */
export function mov_text(options?: {
  height?: number | null;

}): FFMpegEncoderOption {
  return merge({
    "height": options?.height,

  });
}







/**
 * SubRip subtitle (codec subrip)
 */
export function srt(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * SubRip subtitle
 */
export function subrip(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * Raw text subtitle
 */
export function text(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * TTML subtitle
 */
export function ttml(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * WebVTT subtitle
 */
export function webvtt(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}







/**
 * DivX subtitles (XSUB)
 */
export function xsub(options?: {

}): FFMpegEncoderOption {
  return merge({

  });
}
