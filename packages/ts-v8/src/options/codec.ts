// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg codec context options.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";

export type FFMpegAVCodecContextEncoderOption = Readonly<Record<string, unknown>>;
export type FFMpegAVCodecContextDecoderOption = Readonly<Record<string, unknown>>;

/**
 * Encoder codec context options.
 * @param options.b - set bitrate (in bits/s) (from 0 to I64_MAX) (default 200000)
 * @param options.ab - set bitrate (in bits/s) (from 0 to INT_MAX) (default 128000)
 * @param options.bt - Set video bitrate tolerance (in bits/s). In 1-pass mode, bitrate tolerance specifies how far ratecontrol is willing to deviate from the target average bitrate value. This is not related to minimum/maximum bitrate. Lowering tolerance too much has an adverse effect on quality. (from 0 to INT_MAX) (default 4000000)
 * @param options.flags - (default 0)
 * @param options.export_side_data - Export metadata as side data (default 0)
 * @param options.g - set the group of picture (GOP) size (from INT_MIN to INT_MAX) (default 12)
 * @param options.ar - set audio sampling rate (in Hz) (from 0 to INT_MAX) (default 0)
 * @param options.cutoff - set cutoff bandwidth (from INT_MIN to INT_MAX) (default 0)
 * @param options.frame_size - (from 0 to INT_MAX) (default 0)
 * @param options.qcomp - video quantizer scale compression (VBR). Constant of ratecontrol equation. Recommended range for default rc_eq: 0.0-1.0 (from -FLT_MAX to FLT_MAX) (default 0.5)
 * @param options.qblur - video quantizer scale blur (VBR) (from -1 to FLT_MAX) (default 0.5)
 * @param options.qmin - minimum video quantizer scale (VBR) (from -1 to 69) (default 2)
 * @param options.qmax - maximum video quantizer scale (VBR) (from -1 to 1024) (default 31)
 * @param options.qdiff - maximum difference between the quantizer scales (VBR) (from INT_MIN to INT_MAX) (default 3)
 * @param options.bf - set maximum number of B-frames between non-B-frames (from -1 to INT_MAX) (default 0)
 * @param options.b_qfactor - QP factor between P- and B-frames (from -FLT_MAX to FLT_MAX) (default 1.25)
 * @param options.strict - how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal)
 * @param options.b_qoffset - QP offset between P- and B-frames (from -FLT_MAX to FLT_MAX) (default 1.25)
 * @param options.err_detect - set error detection flags (default 0)
 * @param options.maxrate - maximum bitrate (in bits/s). Used for VBV together with bufsize. (from 0 to INT_MAX) (default 0)
 * @param options.minrate - minimum bitrate (in bits/s). Most useful in setting up a CBR encode. It is of little use otherwise. (from INT_MIN to INT_MAX) (default 0)
 * @param options.bufsize - set ratecontrol buffer size (in bits) (from INT_MIN to INT_MAX) (default 0)
 * @param options.i_qfactor - QP factor between P- and I-frames (from -FLT_MAX to FLT_MAX) (default -0.8)
 * @param options.i_qoffset - QP offset between P- and I-frames (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.dct - DCT algorithm (from 0 to INT_MAX) (default auto)
 * @param options.lumi_mask - compresses bright areas stronger than medium ones (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.tcplx_mask - temporal complexity masking (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.scplx_mask - spatial complexity masking (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.p_mask - inter masking (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.dark_mask - compresses dark areas stronger than medium ones (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.idct - select IDCT implementation (from 0 to INT_MAX) (default auto)
 * @param options.aspect - sample aspect ratio (from 0 to 10) (default 0/1)
 * @param options.debug - print specific debug info (default 0)
 * @param options.dia_size - diamond type & size for motion estimation (from INT_MIN to INT_MAX) (default 0)
 * @param options.last_pred - amount of motion predictors from the previous frame (from INT_MIN to INT_MAX) (default 0)
 * @param options.pre_dia_size - diamond type & size for motion estimation pre-pass (from INT_MIN to INT_MAX) (default 0)
 * @param options.subq - sub-pel motion estimation quality (from INT_MIN to INT_MAX) (default 8)
 * @param options.me_range - limit motion vectors range (1023 for DivX player) (from INT_MIN to INT_MAX) (default 0)
 * @param options.global_quality - (from INT_MIN to INT_MAX) (default 0)
 * @param options.mbd - macroblock decision algorithm (high quality mode) (from 0 to 2) (default simple)
 * @param options.rc_init_occupancy - number of bits which should be loaded into the rc buffer before decoding starts (from INT_MIN to INT_MAX) (default 0)
 * @param options.threads - set the number of threads (from 0 to INT_MAX) (default 1)
 * @param options.dc - intra_dc_precision (from -8 to 16) (default 0)
 * @param options.nssew - nsse weight (from INT_MIN to INT_MAX) (default 8)
 * @param options.profile - (from INT_MIN to INT_MAX) (default unknown)
 * @param options.level - encoding level, usually corresponding to the profile level, codec-specific (from INT_MIN to INT_MAX) (default unknown)
 * @param options.cmp - full-pel ME compare function (from INT_MIN to INT_MAX) (default sad)
 * @param options.subcmp - sub-pel ME compare function (from INT_MIN to INT_MAX) (default sad)
 * @param options.mbcmp - macroblock compare function (from INT_MIN to INT_MAX) (default sad)
 * @param options.ildctcmp - interlaced DCT compare function (from INT_MIN to INT_MAX) (default vsad)
 * @param options.precmp - pre motion estimation compare function (from INT_MIN to INT_MAX) (default sad)
 * @param options.mblmin - minimum macroblock Lagrange factor (VBR) (from 1 to 32767) (default 236)
 * @param options.mblmax - maximum macroblock Lagrange factor (VBR) (from 1 to 32767) (default 3658)
 * @param options.bidir_refine - refine the two motion vectors used in bidirectional macroblocks (from 0 to 4) (default 1)
 * @param options.keyint_min - minimum interval between IDR-frames (from INT_MIN to INT_MAX) (default 25)
 * @param options.refs - reference frames to consider for motion compensation (from INT_MIN to INT_MAX) (default 1)
 * @param options.trellis - rate-distortion optimal quantization (from INT_MIN to INT_MAX) (default 0)
 * @param options.mv0_threshold - (from 0 to INT_MAX) (default 256)
 * @param options.compression_level - (from INT_MIN to INT_MAX) (default -1)
 * @param options.ch_layout -
 * @param options.rc_max_vbv_use - (from 0 to FLT_MAX) (default 0)
 * @param options.rc_min_vbv_use - (from 0 to FLT_MAX) (default 3)
 * @param options.color_primaries - color primaries (from 1 to INT_MAX) (default unknown)
 * @param options.color_trc - color transfer characteristics (from 1 to INT_MAX) (default unknown)
 * @param options.colorspace - color space (from 0 to INT_MAX) (default unknown)
 * @param options.color_range - color range (from 0 to INT_MAX) (default unknown)
 * @param options.chroma_sample_location - chroma sample location (from 0 to INT_MAX) (default unknown)
 * @param options.slices - set the number of slices, used in parallelized encoding (from 0 to INT_MAX) (default 0)
 * @param options.thread_type - select multithreading type (default slice+frame)
 * @param options.audio_service_type - audio service type (from 0 to 8) (default ma)
 * @param options.field_order - Field order (from 0 to 5) (default 0)
 * @param options.dump_separator - set information dump field separator
 * @param options.max_pixels - Maximum number of pixels (from 0 to INT_MAX) (default INT_MAX)
 * @param options.max_samples - Maximum number of samples (from 0 to INT_MAX) (default INT_MAX)
 */
export function encoderCodecContext(options?: {
  b?: number | null;
  ab?: number | null;
  bt?: number | null;
  flags?: string | null;
  export_side_data?: string | null;
  g?: number | null;
  ar?: number | null;
  cutoff?: number | null;
  frame_size?: number | null;
  qcomp?: number | null;
  qblur?: number | null;
  qmin?: number | null;
  qmax?: number | null;
  qdiff?: number | null;
  bf?: number | null;
  b_qfactor?: number | null;
  strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  b_qoffset?: number | null;
  err_detect?: string | null;
  maxrate?: number | null;
  minrate?: number | null;
  bufsize?: number | null;
  i_qfactor?: number | null;
  i_qoffset?: number | null;
  dct?: number | null | "auto" | "fastint" | "int" | "mmx" | "altivec" | "faan" | "neon";
  lumi_mask?: number | null;
  tcplx_mask?: number | null;
  scplx_mask?: number | null;
  p_mask?: number | null;
  dark_mask?: number | null;
  idct?: number | null | "auto" | "int" | "simple" | "simplemmx" | "arm" | "altivec" | "simplearm" | "simplearmv5te" | "simplearmv6" | "simpleneon" | "xvid" | "xvidmmx" | "faani" | "simpleauto";
  aspect?: string | null;
  debug?: string | null;
  dia_size?: number | null;
  last_pred?: number | null;
  pre_dia_size?: number | null;
  subq?: number | null;
  me_range?: number | null;
  global_quality?: number | null;
  mbd?: number | null | "simple" | "bits" | "rd";
  rc_init_occupancy?: number | null;
  threads?: number | null | "auto";
  dc?: number | null;
  nssew?: number | null;
  profile?: number | null | "unknown" | "main10";
  level?: number | null | "unknown";
  cmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "w53" | "w97" | "dctmax" | "chroma" | "msad";
  subcmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "w53" | "w97" | "dctmax" | "chroma" | "msad";
  mbcmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "w53" | "w97" | "dctmax" | "chroma" | "msad";
  ildctcmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "w53" | "w97" | "dctmax" | "chroma" | "msad";
  precmp?: number | null | "sad" | "sse" | "satd" | "dct" | "psnr" | "bit" | "rd" | "zero" | "vsad" | "vsse" | "nsse" | "w53" | "w97" | "dctmax" | "chroma" | "msad";
  mblmin?: number | null;
  mblmax?: number | null;
  bidir_refine?: number | null;
  keyint_min?: number | null;
  refs?: number | null;
  trellis?: number | null;
  mv0_threshold?: number | null;
  compression_level?: number | null;
  ch_layout?: string | null;
  rc_max_vbv_use?: number | null;
  rc_min_vbv_use?: number | null;
  color_primaries?: number | null | "bt709" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte428_1" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213" | "unspecified";
  color_trc?: number | null | "bt709" | "unknown" | "gamma22" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "log100" | "log316" | "iec61966-2-4" | "bt1361e" | "iec61966-2-1" | "bt2020-10" | "bt2020-12" | "smpte2084" | "smpte428" | "arib-std-b67" | "unspecified" | "log" | "log_sqrt" | "iec61966_2_4" | "bt1361" | "iec61966_2_1" | "bt2020_10bit" | "bt2020_12bit" | "smpte428_1";
  colorspace?: number | null | "rgb" | "bt709" | "unknown" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "bt2020nc" | "bt2020c" | "smpte2085" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp" | "ipt-c2" | "unspecified" | "ycocg" | "ycgco-re" | "ycgco-ro" | "bt2020_ncl" | "bt2020_cl";
  color_range?: number | null | "unknown" | "tv" | "pc" | "unspecified" | "mpeg" | "jpeg" | "limited" | "full";
  chroma_sample_location?: number | null | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom" | "unspecified";
  slices?: number | null;
  thread_type?: string | null;
  audio_service_type?: number | null | "ma" | "ef" | "vi" | "hi" | "di" | "co" | "em" | "vo" | "ka";
  field_order?: number | null | "progressive" | "tt" | "bb" | "tb" | "bt";
  dump_separator?: string | null;
  max_pixels?: number | null;
  max_samples?: number | null;
}): FFMpegAVCodecContextEncoderOption {
  return merge({
    "b": options?.b,
    "ab": options?.ab,
    "bt": options?.bt,
    "flags": options?.flags,
    "export_side_data": options?.export_side_data,
    "g": options?.g,
    "ar": options?.ar,
    "cutoff": options?.cutoff,
    "frame_size": options?.frame_size,
    "qcomp": options?.qcomp,
    "qblur": options?.qblur,
    "qmin": options?.qmin,
    "qmax": options?.qmax,
    "qdiff": options?.qdiff,
    "bf": options?.bf,
    "b_qfactor": options?.b_qfactor,
    "strict": options?.strict,
    "b_qoffset": options?.b_qoffset,
    "err_detect": options?.err_detect,
    "maxrate": options?.maxrate,
    "minrate": options?.minrate,
    "bufsize": options?.bufsize,
    "i_qfactor": options?.i_qfactor,
    "i_qoffset": options?.i_qoffset,
    "dct": options?.dct,
    "lumi_mask": options?.lumi_mask,
    "tcplx_mask": options?.tcplx_mask,
    "scplx_mask": options?.scplx_mask,
    "p_mask": options?.p_mask,
    "dark_mask": options?.dark_mask,
    "idct": options?.idct,
    "aspect": options?.aspect,
    "debug": options?.debug,
    "dia_size": options?.dia_size,
    "last_pred": options?.last_pred,
    "pre_dia_size": options?.pre_dia_size,
    "subq": options?.subq,
    "me_range": options?.me_range,
    "global_quality": options?.global_quality,
    "mbd": options?.mbd,
    "rc_init_occupancy": options?.rc_init_occupancy,
    "threads": options?.threads,
    "dc": options?.dc,
    "nssew": options?.nssew,
    "profile": options?.profile,
    "level": options?.level,
    "cmp": options?.cmp,
    "subcmp": options?.subcmp,
    "mbcmp": options?.mbcmp,
    "ildctcmp": options?.ildctcmp,
    "precmp": options?.precmp,
    "mblmin": options?.mblmin,
    "mblmax": options?.mblmax,
    "bidir_refine": options?.bidir_refine,
    "keyint_min": options?.keyint_min,
    "refs": options?.refs,
    "trellis": options?.trellis,
    "mv0_threshold": options?.mv0_threshold,
    "compression_level": options?.compression_level,
    "ch_layout": options?.ch_layout,
    "rc_max_vbv_use": options?.rc_max_vbv_use,
    "rc_min_vbv_use": options?.rc_min_vbv_use,
    "color_primaries": options?.color_primaries,
    "color_trc": options?.color_trc,
    "colorspace": options?.colorspace,
    "color_range": options?.color_range,
    "chroma_sample_location": options?.chroma_sample_location,
    "slices": options?.slices,
    "thread_type": options?.thread_type,
    "audio_service_type": options?.audio_service_type,
    "field_order": options?.field_order,
    "dump_separator": options?.dump_separator,
    "max_pixels": options?.max_pixels,
    "max_samples": options?.max_samples,
  });
}

/**
 * Decoder codec context options.
 * @param options.flags - (default 0)
 * @param options.export_side_data - Export metadata as side data (default 0)
 * @param options.ar - set audio sampling rate (in Hz) (from 0 to INT_MAX) (default 0)
 * @param options.bug - work around not autodetected encoder bugs (default autodetect)
 * @param options.strict - how strictly to follow the standards (from INT_MIN to INT_MAX) (default normal)
 * @param options.err_detect - set error detection flags (default 0)
 * @param options.idct - select IDCT implementation (from 0 to INT_MAX) (default auto)
 * @param options.ec - set error concealment strategy (default guess_mvs+deblock)
 * @param options.debug - print specific debug info (default 0)
 * @param options.threads - set the number of threads (from 0 to INT_MAX) (default 1)
 * @param options.skip_top - number of macroblock rows at the top which are skipped (from INT_MIN to INT_MAX) (default 0)
 * @param options.skip_bottom - number of macroblock rows at the bottom which are skipped (from INT_MIN to INT_MAX) (default 0)
 * @param options.lowres - decode at 1= 1/2, 2=1/4, 3=1/8 resolutions (from 0 to INT_MAX) (default 0)
 * @param options.skip_loop_filter - skip loop filtering process for the selected frames (from INT_MIN to INT_MAX) (default default)
 * @param options.skip_idct - skip IDCT/dequantization for the selected frames (from INT_MIN to INT_MAX) (default default)
 * @param options.skip_frame - skip decoding for the selected frames (from INT_MIN to INT_MAX) (default default)
 * @param options.ch_layout -
 * @param options.color_primaries - color primaries (from 1 to INT_MAX) (default unknown)
 * @param options.color_trc - color transfer characteristics (from 1 to INT_MAX) (default unknown)
 * @param options.colorspace - color space (from 0 to INT_MAX) (default unknown)
 * @param options.color_range - color range (from 0 to INT_MAX) (default unknown)
 * @param options.chroma_sample_location - chroma sample location (from 0 to INT_MAX) (default unknown)
 * @param options.thread_type - select multithreading type (default slice+frame)
 * @param options.request_sample_fmt - sample format audio decoders should prefer (default none)
 * @param options.sub_charenc - set input text subtitles character encoding
 * @param options.sub_charenc_mode - set input text subtitles character encoding mode (default 0)
 * @param options.apply_cropping - (default true)
 * @param options.skip_alpha - Skip processing alpha (default false)
 * @param options.field_order - Field order (from 0 to 5) (default 0)
 * @param options.dump_separator - set information dump field separator
 * @param options.codec_whitelist - List of decoders that are allowed to be used
 * @param options.max_pixels - Maximum number of pixels (from 0 to INT_MAX) (default INT_MAX)
 * @param options.max_samples - Maximum number of samples (from 0 to INT_MAX) (default INT_MAX)
 * @param options.hwaccel_flags - (default ignore_level)
 * @param options.extra_hw_frames - Number of extra hardware frames to allocate for the user (from -1 to INT_MAX) (default -1)
 * @param options.discard_damaged_percentage - Percentage of damaged samples to discard a frame (from 0 to 100) (default 95)
 * @param options.side_data_prefer_packet - Comma-separated list of side data types for which user-supplied (container) data is preferred over coded bytestream
 */
export function decoderCodecContext(options?: {
  flags?: string | null;
  export_side_data?: string | null;
  ar?: number | null;
  bug?: string | null;
  strict?: number | null | "very" | "strict" | "normal" | "unofficial" | "experimental";
  err_detect?: string | null;
  idct?: number | null | "auto" | "int" | "simple" | "simplemmx" | "arm" | "altivec" | "simplearm" | "simplearmv5te" | "simplearmv6" | "simpleneon" | "xvid" | "xvidmmx" | "faani" | "simpleauto";
  ec?: string | null;
  debug?: string | null;
  threads?: number | null | "auto";
  skip_top?: number | null;
  skip_bottom?: number | null;
  lowres?: number | null;
  skip_loop_filter?: number | null | "none" | "default" | "noref" | "bidir" | "nointra" | "nokey" | "all";
  skip_idct?: number | null | "none" | "default" | "noref" | "bidir" | "nointra" | "nokey" | "all";
  skip_frame?: number | null | "none" | "default" | "noref" | "bidir" | "nointra" | "nokey" | "all";
  ch_layout?: string | null;
  color_primaries?: number | null | "bt709" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte428_1" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213" | "unspecified";
  color_trc?: number | null | "bt709" | "unknown" | "gamma22" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "log100" | "log316" | "iec61966-2-4" | "bt1361e" | "iec61966-2-1" | "bt2020-10" | "bt2020-12" | "smpte2084" | "smpte428" | "arib-std-b67" | "unspecified" | "log" | "log_sqrt" | "iec61966_2_4" | "bt1361" | "iec61966_2_1" | "bt2020_10bit" | "bt2020_12bit" | "smpte428_1";
  colorspace?: number | null | "rgb" | "bt709" | "unknown" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "bt2020nc" | "bt2020c" | "smpte2085" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp" | "ipt-c2" | "unspecified" | "ycocg" | "ycgco-re" | "ycgco-ro" | "bt2020_ncl" | "bt2020_cl";
  color_range?: number | null | "unknown" | "tv" | "pc" | "unspecified" | "mpeg" | "jpeg" | "limited" | "full";
  chroma_sample_location?: number | null | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom" | "unspecified";
  thread_type?: string | null;
  request_sample_fmt?: string | null;
  sub_charenc?: string | null;
  sub_charenc_mode?: string | null;
  apply_cropping?: boolean | null;
  skip_alpha?: boolean | null;
  field_order?: number | null | "progressive" | "tt" | "bb" | "tb" | "bt";
  dump_separator?: string | null;
  codec_whitelist?: string | null;
  max_pixels?: number | null;
  max_samples?: number | null;
  hwaccel_flags?: string | null;
  extra_hw_frames?: number | null;
  discard_damaged_percentage?: number | null;
  side_data_prefer_packet?: number | null | "replaygain" | "displaymatrix" | "spherical" | "stereo3d" | "audio_service_type" | "mastering_display_metadata" | "content_light_level" | "icc_profile";
}): FFMpegAVCodecContextDecoderOption {
  return merge({
    "flags": options?.flags,
    "export_side_data": options?.export_side_data,
    "ar": options?.ar,
    "bug": options?.bug,
    "strict": options?.strict,
    "err_detect": options?.err_detect,
    "idct": options?.idct,
    "ec": options?.ec,
    "debug": options?.debug,
    "threads": options?.threads,
    "skip_top": options?.skip_top,
    "skip_bottom": options?.skip_bottom,
    "lowres": options?.lowres,
    "skip_loop_filter": options?.skip_loop_filter,
    "skip_idct": options?.skip_idct,
    "skip_frame": options?.skip_frame,
    "ch_layout": options?.ch_layout,
    "color_primaries": options?.color_primaries,
    "color_trc": options?.color_trc,
    "colorspace": options?.colorspace,
    "color_range": options?.color_range,
    "chroma_sample_location": options?.chroma_sample_location,
    "thread_type": options?.thread_type,
    "request_sample_fmt": options?.request_sample_fmt,
    "sub_charenc": options?.sub_charenc,
    "sub_charenc_mode": options?.sub_charenc_mode,
    "apply_cropping": options?.apply_cropping,
    "skip_alpha": options?.skip_alpha,
    "field_order": options?.field_order,
    "dump_separator": options?.dump_separator,
    "codec_whitelist": options?.codec_whitelist,
    "max_pixels": options?.max_pixels,
    "max_samples": options?.max_samples,
    "hwaccel_flags": options?.hwaccel_flags,
    "extra_hw_frames": options?.extra_hw_frames,
    "discard_damaged_percentage": options?.discard_damaged_percentage,
    "side_data_prefer_packet": options?.side_data_prefer_packet,
  });
}
