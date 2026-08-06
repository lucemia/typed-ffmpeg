// NOTE: this file is auto-generated, do not modify
/**
 * Video stream with typed filter methods.
 */


import type { AudioStream } from "./audio.js";
import { StreamType, type FFMpegFilterDef } from "@typed-ffmpeg/core/common/schema";
import { Default, Auto } from "@typed-ffmpeg/core/utils/types";
import { filterNodeFactory } from "@typed-ffmpeg/core/dag/factory";
import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import { FilterableStream } from "@typed-ffmpeg/core/dag/baseStreams";
import { VideoStream as VideoStreamBase, FilterNode } from "@typed-ffmpeg/core/dag/nodes";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFColor, FFFlags, FFDictionary, FFPixFmt,
  FFVideoRate, FFImageSize, FFRational, FFSampleFmt, FFBinary,
} from "@typed-ffmpeg/core/types";

export class VideoStream extends VideoStreamBase {






























/**
 * Mark a region of interest in a video frame. The frame data is passed through unchanged, but metadata is attached to the frame indicating regions of interest which can affect the behaviour of later encoding. Multiple regions can be marked by applying the filter multiple times.

 *
 * @param options.x - Region distance in pixels from the left edge of the frame.
 * @param options.y - Region distance in pixels from the top edge of the frame.
 * @param options.w - Region width in pixels.
 * @param options.h - Region height in pixels. The parameters x, y, w and h are expressions, and may contain the following variables: @end table
 * @param options.qoffset - Quantisation offset to apply within the region. This must be a real value in the range -1 to +1. A value of zero indicates no quality change. A negative value asks for better quality (less quantisation), while a positive value asks for worse quality (greater quantisation). The range is calibrated so that the extreme values indicate the largest possible offset - if the rest of the frame is encoded with the worst possible quality, an offset of -1 indicates that this region should be encoded with the best possible quality anyway. Intermediate values are then interpolated in some codec-dependent way. For example, in 10-bit H.264 the quantisation parameter varies between -12 and 51. A typical qoffset value of -1/10 therefore indicates that this region should be encoded with a QP around one-tenth of the full range better than the rest of the frame. So, if most of the frame were to be encoded with a QP of around 30, this region would get a QP of around 24 (an offset of approximately -1/10 * (51 - -12) = -6.3). An extreme value of -1 would indicate that this region should be encoded with the best possible quality regardless of the treatment of the rest of the frame - that is, should be encoded at a QP of -12.
 * @param options.clear - If set to true, remove any existing regions of interest marked on the frame before adding the new one.
 * @see https://ffmpeg.org/ffmpeg-filters.html#addroi
 */
  addroi(
    options?: {
    x?: FFString;
    y?: FFString;
    w?: FFString;
    h?: FFString;
    qoffset?: FFRational;
    clear?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "addroi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "w": options?.w,
      "h": options?.h,
      "qoffset": options?.qoffset,
      "clear": options?.clear,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














































































/**
 * Extract the alpha component from the input as a grayscale video. This is especially useful with the alphamerge filter.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#alphaextract
 */
  alphaextract(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "alphaextract", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add or replace the alpha component of the primary input with the grayscale value of a second input. This is intended for use with alphaextract to allow the transmission or storage of frame sequences that have alpha in a format that doesn't support an alpha channel. For example, to reconstruct full frames from a normal YUV-encoded video and a separate video created with alphaextract, you might use: @example movie=in_alpha.mkv [alpha]; [in][alpha] alphamerge [out] @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#alphamerge
 */
  alphamerge(
    _alpha: VideoStream,

    options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "alphamerge", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _alpha],
      merge(
    {
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Amplify differences between current pixel and pixels of adjacent frames in same pixel location. This filter accepts the following options:

 *
 * @param options.radius - Set frame radius. Default is 2. Allowed range is from 1 to 63. For example radius of 3 will instruct filter to calculate average of 7 frames.
 * @param options.factor - set factor (from 0 to 65535) (default 2)
 * @param options.threshold - set threshold (from 0 to 65535) (default 10)
 * @param options.tolerance - set tolerance (from 0 to 65535) (default 0)
 * @param options.low - set low limit for amplification (from 0 to 65535) (default 65535)
 * @param options.high - set high limit for amplification (from 0 to 65535) (default 65535)
 * @param options.planes - set what planes to filter (default 7)
 * @see https://ffmpeg.org/ffmpeg-filters.html#amplify
 */
  amplify(
    options?: {
    radius?: FFInt;
    factor?: FFFloat;
    threshold?: FFFloat;
    tolerance?: FFFloat;
    low?: FFFloat;
    high?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "amplify", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "radius": options?.radius,
      "factor": options?.factor,
      "threshold": options?.threshold,
      "tolerance": options?.tolerance,
      "low": options?.low,
      "high": options?.high,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














































































/**
 * Same as the subtitles filter, except that it doesn't require libavcodec and libavformat to work. On the other hand, it is limited to ASS (Advanced Substation Alpha) subtitles files. This filter accepts filename/f, original_size, fontsdir, and alpha from the subtitles filter, plus the following option:

 *
 * @param options.filename - set the filename of file to read
 * @param options.original_size - set the size of the original video (used to scale fonts)
 * @param options.fontsdir - set the directory containing the fonts to read
 * @param options.alpha - enable processing of alpha channel (default false)
 * @param options.shaping - Set the shaping engine. Available values are: @end table The default is auto.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ass
 */
  ass(
    options?: {
    filename?: FFString;
    original_size?: FFImageSize;
    fontsdir?: FFString;
    alpha?: FFBoolean;
    shaping?: FFInt | "auto" | "simple" | "complex";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ass", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filename": options?.filename,
      "original_size": options?.original_size,
      "fontsdir": options?.fontsdir,
      "alpha": options?.alpha,
      "shaping": options?.shaping,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }




















/**
 * Apply an Adaptive Temporal Averaging Denoiser to the video input. The filter accepts the following options:

 *
 * @param options._0a - Set threshold A for 1st plane. Default is 0.02. Valid range is 0 to 0.3.
 * @param options._0b - Set threshold B for 1st plane. Default is 0.04. Valid range is 0 to 5.
 * @param options._1a - Set threshold A for 2nd plane. Default is 0.02. Valid range is 0 to 0.3.
 * @param options._1b - Set threshold B for 2nd plane. Default is 0.04. Valid range is 0 to 5.
 * @param options._2a - Set threshold A for 3rd plane. Default is 0.02. Valid range is 0 to 0.3.
 * @param options._2b - Set threshold B for 3rd plane. Default is 0.04. Valid range is 0 to 5. Threshold A is designed to react on abrupt changes in the input signal and threshold B is designed to react on continuous changes in the input signal.
 * @param options.s - Set number of frames filter will use for averaging. Default is 9. Must be odd number in range [5, 129].
 * @param options.p - Set what planes of frame filter will use for averaging. Default is all.
 * @param options.a - Set what variant of algorithm filter will use for averaging. Default is p parallel. Alternatively can be set to s serial. Parallel can be faster then serial, while other way around is never true. Parallel will abort early on first change being greater then thresholds, while serial will continue processing other side of frames if they are equal or below thresholds.
 * @param options._0s - set sigma for 1st plane (from 0 to 32767) (default 32767)
 * @param options._1s - set sigma for 2nd plane (from 0 to 32767) (default 32767)
 * @param options._2s - Set sigma for 1st plane, 2nd plane or 3rd plane. Default is 32767. Valid range is from 0 to 32767. This options controls weight for each pixel in radius defined by size. Default value means every pixel have same weight. Setting this option to 0 effectively disables filtering.
 * @see https://ffmpeg.org/ffmpeg-filters.html#atadenoise
 */
  atadenoise(
    options?: {
    _0a?: FFFloat;
    _0b?: FFFloat;
    _1a?: FFFloat;
    _1b?: FFFloat;
    _2a?: FFFloat;
    _2b?: FFFloat;
    s?: FFInt;
    p?: FFFlags;
    a?: FFInt | "p" | "s";
    _0s?: FFFloat;
    _1s?: FFFloat;
    _2s?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "atadenoise", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "0a": options?._0a,
      "0b": options?._0b,
      "1a": options?._1a,
      "1b": options?._1b,
      "2a": options?._2a,
      "2b": options?._2b,
      "s": options?.s,
      "p": options?.p,
      "a": options?.a,
      "0s": options?._0s,
      "1s": options?._1s,
      "2s": options?._2s,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Apply average blur filter. The filter accepts the following options:

 *
 * @param options.sizeX - Set horizontal radius size.
 * @param options.planes - Set which planes to filter. By default all planes are filtered.
 * @param options.sizeY - Set vertical radius size, if zero it will be same as sizeX. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#avgblur
 */
  avgblur(
    options?: {
    sizeX?: FFInt;
    planes?: FFInt;
    sizeY?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "avgblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sizeX": options?.sizeX,
      "planes": options?.planes,
      "sizeY": options?.sizeY,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply average blur filter. The filter accepts the following options:

 *
 * @param options.sizeX - Set horizontal radius size. Range is [1, 1024] and default value is 1.
 * @param options.planes - Set which planes to filter. Default value is 0xf, by which all planes are processed.
 * @param options.sizeY - Set vertical radius size. Range is [1, 1024] and default value is 0. If zero, sizeX value will be used.
 * @see https://ffmpeg.org/ffmpeg-filters.html#avgblur_opencl
 */
  avgblur_opencl(
    options?: {
    sizeX?: FFInt;
    planes?: FFInt;
    sizeY?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "avgblur_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sizeX": options?.sizeX,
      "planes": options?.planes,
      "sizeY": options?.sizeY,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply an average blur filter, implemented on the GPU using Vulkan. The filter accepts the following options:

 *
 * @param options.sizeX - Set horizontal radius size. Range is [1, 32] and default value is 3.
 * @param options.sizeY - Set vertical radius size. Range is [1, 32] and default value is 3.
 * @param options.planes - Set which planes to filter. Default value is 0xf, by which all planes are processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#avgblur_vulkan
 */
  avgblur_vulkan(
    options?: {
    sizeX?: FFInt;
    sizeY?: FFInt;
    planes?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "avgblur_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sizeX": options?.sizeX,
      "sizeY": options?.sizeY,
      "planes": options?.planes,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Turns a static background into transparency. The filter accepts the following option:

 *
 * @param options.threshold - Threshold for scene change detection.
 * @param options.similarity - Similarity percentage with the background.
 * @param options.blend - Set the blend amount for pixels that are not similar.
 * @see https://ffmpeg.org/ffmpeg-filters.html#backgroundkey
 */
  backgroundkey(
    options?: {
    threshold?: FFFloat;
    similarity?: FFFloat;
    blend?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "backgroundkey", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Compute the bounding box for the non-black pixels in the input frame luma plane. This filter computes the bounding box containing all the pixels with a luma value greater than the minimum allowed value. The parameters describing the bounding box are printed on the filter log. The filter accepts the following option:

 *
 * @param options.min_val - Set the minimal luma value. Default is 16.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bbox
 */
  bbox(
    options?: {
    min_val?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bbox", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "min_val": options?.min_val,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Benchmark part of a filtergraph. The filter accepts the following options:

 *
 * @param options.action - Start or stop a timer. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#bench
 */
  bench(
    options?: {
    action?: FFInt | "start" | "stop";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bench", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "action": options?.action,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply bilateral filter, spatial smoothing while preserving edges. The filter accepts the following options:

 *
 * @param options.sigmaS - Set sigma of gaussian function to calculate spatial weight. Allowed range is 0 to 512. Default is 0.1.
 * @param options.sigmaR - Set sigma of gaussian function to calculate range weight. Allowed range is 0 to 1. Default is 0.1.
 * @param options.planes - Set planes to filter. Default is first only.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bilateral
 */
  bilateral(
    options?: {
    sigmaS?: FFFloat;
    sigmaR?: FFFloat;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bilateral", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigmaS": options?.sigmaS,
      "sigmaR": options?.sigmaR,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * CUDA accelerated bilateral filter, an edge preserving filter. This filter is mathematically accurate thanks to the use of GPU acceleration. For best output quality, use one to one chroma subsampling, i.e. yuv444p format. The filter accepts the following options:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.sigmaS - Set sigma of gaussian function to calculate spatial weight, also called sigma space. Allowed range is 0.1 to 512. Default is 0.1.
 * @param options.sigmaR - Set sigma of gaussian function to calculate color range weight, also called sigma color. Allowed range is 0.1 to 512. Default is 0.1.
 * @param options.window_size - Set window size of the bilateral function to determine the number of neighbours to loop on. If the number entered is even, one will be added automatically. Allowed range is 1 to 255. Default is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bilateral_cuda
 */
  bilateral_cuda(
    options?: {
    sigmaS?: FFFloat;
    sigmaR?: FFFloat;
    window_size?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bilateral_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigmaS": options?.sigmaS,
      "sigmaR": options?.sigmaR,
      "window_size": options?.window_size,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Show and measure bit plane noise. The filter accepts the following options:

 *
 * @param options.bitplane - Set which plane to analyze. Default is 1.
 * @param options.filter - Filter out noisy pixels from bitplane set above. Default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bitplanenoise
 */
  bitplanenoise(
    options?: {
    bitplane?: FFInt;
    filter?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bitplanenoise", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "bitplane": options?.bitplane,
      "filter": options?.filter,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect video intervals that are (almost) completely black. Can be useful to detect chapter transitions, commercials, or invalid recordings. The filter outputs its detection analysis to both the log as well as frame metadata. If a black segment of at least the specified minimum duration is found, a line with the start and end timestamps as well as duration is printed to the log with level info. In addition, a log line with level debug is printed per frame showing the black amount detected for that frame. The filter also attaches metadata to the first frame of a black segment with key lavfi.black_start and to the first frame after the black segment ends with key lavfi.black_end. The value is the frame's timestamp. This metadata is added regardless of the minimum duration specified. The filter accepts the following options:

 *
 * @param options.d - Set the minimum detected black duration expressed in seconds. It must be a non-negative floating point number. Default value is 2.0.
 * @param options.picture_black_ratio_th - Set the threshold for considering a picture "black". Express the minimum value for the ratio: @example nb_black_pixels / nb_pixels @end example for which a picture is considered black. Default value is 0.98.
 * @param options.pixel_black_th - Set the threshold for considering a pixel "black". The threshold expresses the maximum pixel luma value for which a pixel is considered "black". The provided value is scaled according to the following equation: @example absolute_threshold = luma_minimum_value + pixel_black_th * luma_range_size @end example luma_range_size and luma_minimum_value depend on the input video format, the range is [0-255] for YUV full-range formats and [16-235] for YUV non full-range formats. Default value is 0.10.
 * @param options.alpha - If true, check the alpha channel instead of the luma channel. Detects frames which are (almost) transparent, instead of frames which are almost black. Default value is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blackdetect
 */
  blackdetect(
    options?: {
    d?: FFDouble;
    picture_black_ratio_th?: FFDouble;
    pixel_black_th?: FFDouble;
    alpha?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blackdetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "d": options?.d,
      "picture_black_ratio_th": options?.picture_black_ratio_th,
      "pixel_black_th": options?.pixel_black_th,
      "alpha": options?.alpha,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect video intervals that are (almost) completely black. Can be useful to detect chapter transitions, commercials, or invalid recordings. The filter outputs its detection analysis to both the log as well as frame metadata. If a black segment of at least the specified minimum duration is found, a line with the start and end timestamps as well as duration is printed to the log with level info. In addition, a log line with level debug is printed per frame showing the black amount detected for that frame. The filter also attaches metadata to the first frame of a black segment with key lavfi.black_start and to the first frame after the black segment ends with key lavfi.black_end. The value is the frame's timestamp. This metadata is added regardless of the minimum duration specified. The filter accepts the following options:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.d - Set the minimum detected black duration expressed in seconds. It must be a non-negative floating point number. Default value is 2.0.
 * @param options.picture_black_ratio_th - Set the threshold for considering a picture "black". Express the minimum value for the ratio: @example nb_black_pixels / nb_pixels @end example for which a picture is considered black. Default value is 0.98.
 * @param options.pixel_black_th - Set the threshold for considering a pixel "black". The threshold expresses the maximum pixel luma value for which a pixel is considered "black". The provided value is scaled according to the following equation: @example absolute_threshold = luma_minimum_value + pixel_black_th * luma_range_size @end example luma_range_size and luma_minimum_value depend on the input video format, the range is [0-255] for YUV full-range formats and [16-235] for YUV non full-range formats. Default value is 0.10.
 * @param options.alpha - If true, check the alpha channel instead of the luma channel. Detects frames which are (almost) transparent, instead of frames which are almost black. Default value is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blackdetect
 */
  blackdetect_vulkan(
    options?: {
    d?: FFDouble;
    picture_black_ratio_th?: FFDouble;
    pixel_black_th?: FFDouble;
    alpha?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blackdetect_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "d": options?.d,
      "picture_black_ratio_th": options?.picture_black_ratio_th,
      "pixel_black_th": options?.pixel_black_th,
      "alpha": options?.alpha,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect frames that are (almost) completely black. Can be useful to detect chapter transitions or commercials. Output lines consist of the frame number of the detected frame, the percentage of blackness, the position in the file if known or -1 and the timestamp in seconds. In order to display the output lines, you need to set the loglevel at least to the AV_LOG_INFO value. This filter exports frame metadata lavfi.blackframe.pblack. The value represents the percentage of pixels in the picture that are below the threshold value. It accepts the following parameters:

 *
 * @param options.amount - The percentage of the pixels that have to be below the threshold; it defaults to 98.
 * @param options.threshold - The threshold below which a pixel value is considered black; it defaults to 32.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blackframe
 */
  blackframe(
    options?: {
    amount?: FFInt;
    threshold?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blackframe", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "amount": options?.amount,
      "threshold": options?.threshold,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Blend two video frames into each other. The blend filter takes two input streams and outputs one stream, the first input is the "top" layer and second input is "bottom" layer. By default, the output terminates when the longest input terminates. The tblend (time blend) filter takes two consecutive frames from one single stream, and outputs the result obtained by blending the new frame on top of the old frame. A description of the accepted options follows.

 *
 * @param options.c0_mode - set component #0 blend mode (from 0 to 39) (default normal)
 * @param options.c1_mode - set component #1 blend mode (from 0 to 39) (default normal)
 * @param options.c2_mode - set component #2 blend mode (from 0 to 39) (default normal)
 * @param options.c3_mode - set component #3 blend mode (from 0 to 39) (default normal)
 * @param options.all_mode - Set blend mode for specific pixel component or all pixel components in case of all_mode. Default value is normal. Available values for component modes are: @end table
 * @param options.c0_expr - set color component #0 expression
 * @param options.c1_expr - set color component #1 expression
 * @param options.c2_expr - set color component #2 expression
 * @param options.c3_expr - set color component #3 expression
 * @param options.all_expr - Set blend expression for specific pixel component or all pixel components in case of all_expr. Note that related mode options will be ignored if those are set. The expressions can use the following variables: @end table
 * @param options.c0_opacity - set color component #0 opacity (from 0 to 1) (default 1)
 * @param options.c1_opacity - set color component #1 opacity (from 0 to 1) (default 1)
 * @param options.c2_opacity - set color component #2 opacity (from 0 to 1) (default 1)
 * @param options.c3_opacity - set color component #3 opacity (from 0 to 1) (default 1)
 * @param options.all_opacity - Set blend opacity for specific pixel component or all pixel components in case of all_opacity. Only used in combination with pixel component blend modes.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blend
 */
  blend(
    _bottom: VideoStream,

    options?: {
    c0_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c1_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c2_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c3_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    all_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c0_expr?: FFString;
    c1_expr?: FFString;
    c2_expr?: FFString;
    c3_expr?: FFString;
    all_expr?: FFString;
    c0_opacity?: FFDouble;
    c1_opacity?: FFDouble;
    c2_opacity?: FFDouble;
    c3_opacity?: FFDouble;
    all_opacity?: FFDouble;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blend", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _bottom],
      merge(
    {
      "c0_mode": options?.c0_mode,
      "c1_mode": options?.c1_mode,
      "c2_mode": options?.c2_mode,
      "c3_mode": options?.c3_mode,
      "all_mode": options?.all_mode,
      "c0_expr": options?.c0_expr,
      "c1_expr": options?.c1_expr,
      "c2_expr": options?.c2_expr,
      "c3_expr": options?.c3_expr,
      "all_expr": options?.all_expr,
      "c0_opacity": options?.c0_opacity,
      "c1_opacity": options?.c1_opacity,
      "c2_opacity": options?.c2_opacity,
      "c3_opacity": options?.c3_opacity,
      "all_opacity": options?.all_opacity,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Blend two Vulkan frames into each other. The blend filter takes two input streams and outputs one stream, the first input is the "top" layer and second input is "bottom" layer. By default, the output terminates when the longest input terminates. A description of the accepted options follows.

 *
 * @param options.c0_mode - set component #0 blend mode (from 0 to 39) (default normal)
 * @param options.c1_mode - set component #1 blend mode (from 0 to 39) (default normal)
 * @param options.c2_mode - set component #2 blend mode (from 0 to 39) (default normal)
 * @param options.c3_mode - set component #3 blend mode (from 0 to 39) (default normal)
 * @param options.all_mode - Set blend mode for specific pixel component or all pixel components in case of all_mode. Default value is normal. Available values for component modes are: @end table
 * @param options.c0_opacity - set color component #0 opacity (from 0 to 1) (default 1)
 * @param options.c1_opacity - set color component #1 opacity (from 0 to 1) (default 1)
 * @param options.c2_opacity - set color component #2 opacity (from 0 to 1) (default 1)
 * @param options.c3_opacity - set color component #3 opacity (from 0 to 1) (default 1)
 * @param options.all_opacity - set opacity for all color components (from 0 to 1) (default 1)
 * @see https://ffmpeg.org/ffmpeg-filters.html#blend_vulkan
 */
  blend_vulkan(
    _bottom: VideoStream,

    options?: {
    c0_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c1_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c2_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c3_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    all_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c0_opacity?: FFFloat;
    c1_opacity?: FFFloat;
    c2_opacity?: FFFloat;
    c3_opacity?: FFFloat;
    all_opacity?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blend_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _bottom],
      merge(
    {
      "c0_mode": options?.c0_mode,
      "c1_mode": options?.c1_mode,
      "c2_mode": options?.c2_mode,
      "c3_mode": options?.c3_mode,
      "all_mode": options?.all_mode,
      "c0_opacity": options?.c0_opacity,
      "c1_opacity": options?.c1_opacity,
      "c2_opacity": options?.c2_opacity,
      "c3_opacity": options?.c3_opacity,
      "all_opacity": options?.all_opacity,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Determines blockiness of frames without altering the input frames. Based on Remco Muijs and Ihor Kirenko: "A no-reference blocking artifact measure for adaptive video processing." 2005 13th European signal processing conference. The filter accepts the following options:

 *
 * @param options.period_min - Minimum period to search for (from 2 to 32) (default 3)
 * @param options.period_max - Set minimum and maximum values for determining pixel grids (periods). Default values are [3,24].
 * @param options.planes - Set planes to filter. Default is first only.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blockdetect
 */
  blockdetect(
    options?: {
    period_min?: FFInt;
    period_max?: FFInt;
    planes?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blockdetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "period_min": options?.period_min,
      "period_max": options?.period_max,
      "planes": options?.planes,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Determines blurriness of frames without altering the input frames. Based on Marziliano, Pina, et al. "A no-reference perceptual blur metric." Allows for a block-based abbreviation. The filter accepts the following options:

 *
 * @param options.high - Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 20/255, and default value for high is 50/255.
 * @param options.low - set low threshold (from 0 to 1) (default 0.0588235)
 * @param options.radius - Define the radius to search around an edge pixel for local maxima.
 * @param options.block_pct - Determine blurriness only for the most significant blocks, given in percentage.
 * @param options.block_width - Determine blurriness for blocks of width block_width. If set to any value smaller 1, no blocks are used and the whole image is processed as one no matter of block_height.
 * @param options.planes - Set planes to filter. Default is first only.
 * @see https://ffmpeg.org/ffmpeg-filters.html#blurdetect
 */
  blurdetect(
    options?: {
    high?: FFFloat;
    low?: FFFloat;
    radius?: FFInt;
    block_pct?: FFInt;
    block_width?: FFInt;
    planes?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "blurdetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "high": options?.high,
      "low": options?.low,
      "radius": options?.radius,
      "block_pct": options?.block_pct,
      "block_width": options?.block_width,
      "planes": options?.planes,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply a boxblur algorithm to the input video. It accepts the following parameters:

 *
 * @param options.luma_radius - Radius of the luma blurring box (default "2")
 * @param options.luma_power - How many times should the boxblur be applied to luma (from 0 to INT_MAX) (default 2)
 * @param options.chroma_radius - Radius of the chroma blurring box
 * @param options.chroma_power - How many times should the boxblur be applied to chroma (from -1 to INT_MAX) (default -1)
 * @param options.alpha_radius - Set an expression for the box radius in pixels used for blurring the corresponding input plane. The radius value must be a non-negative number, and must not be greater than the value of the expression min(w,h)/2 for the luma and alpha planes, and of min(cw,ch)/2 for the chroma planes. Default value for luma_radius is "2". If not specified, chroma_radius and alpha_radius default to the corresponding value set for luma_radius. The expressions can contain the following constants: @end table
 * @param options.alpha_power - Specify how many times the boxblur filter is applied to the corresponding plane. Default value for luma_power is 2. If not specified, chroma_power and alpha_power default to the corresponding value set for luma_power. A value of 0 will disable the effect.
 * @see https://ffmpeg.org/ffmpeg-filters.html#boxblur
 */
  boxblur(
    options?: {
    luma_radius?: FFString;
    luma_power?: FFInt;
    chroma_radius?: FFString;
    chroma_power?: FFInt;
    alpha_radius?: FFString;
    alpha_power?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "boxblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_radius": options?.luma_radius,
      "luma_power": options?.luma_power,
      "chroma_radius": options?.chroma_radius,
      "chroma_power": options?.chroma_power,
      "alpha_radius": options?.alpha_radius,
      "alpha_power": options?.alpha_power,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a boxblur algorithm to the input video. It accepts the following parameters:

 *
 * @param options.luma_radius - Radius of the luma blurring box (default "2")
 * @param options.luma_power - How many times should the boxblur be applied to luma (from 0 to INT_MAX) (default 2)
 * @param options.chroma_radius - Radius of the chroma blurring box
 * @param options.chroma_power - How many times should the boxblur be applied to chroma (from -1 to INT_MAX) (default -1)
 * @param options.alpha_radius - Set an expression for the box radius in pixels used for blurring the corresponding input plane. The radius value must be a non-negative number, and must not be greater than the value of the expression min(w,h)/2 for the luma and alpha planes, and of min(cw,ch)/2 for the chroma planes. Default value for luma_radius is "2". If not specified, chroma_radius and alpha_radius default to the corresponding value set for luma_radius. The expressions can contain the following constants: @end table
 * @param options.alpha_power - Specify how many times the boxblur filter is applied to the corresponding plane. Default value for luma_power is 2. If not specified, chroma_power and alpha_power default to the corresponding value set for luma_power. A value of 0 will disable the effect.
 * @see https://ffmpeg.org/ffmpeg-filters.html#boxblur_opencl
 */
  boxblur_opencl(
    options?: {
    luma_radius?: FFString;
    luma_power?: FFInt;
    chroma_radius?: FFString;
    chroma_power?: FFInt;
    alpha_radius?: FFString;
    alpha_power?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "boxblur_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_radius": options?.luma_radius,
      "luma_power": options?.luma_power,
      "chroma_radius": options?.chroma_radius,
      "chroma_power": options?.chroma_power,
      "alpha_radius": options?.alpha_radius,
      "alpha_power": options?.alpha_power,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Deinterlace the input video ("bwdif" stands for "Bob Weaver Deinterlacing Filter"). Motion adaptive deinterlacing based on yadif with the use of w3fdif and cubic interpolation algorithms. It accepts the following parameters:

 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bwdif
 */
  bwdif(
    options?: {
    mode?: FFInt | "send_frame" | "send_field";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bwdif", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlace the input video using the bwdif algorithm, but implemented in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec and/or nvenc. It accepts the following parameters:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bwdif_cuda
 */
  bwdif_cuda(
    options?: {
    mode?: FFInt | "send_frame" | "send_field" | "send_frame_nospatial" | "send_field_nospatial";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bwdif_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlacer using bwdif, the "Bob Weaver Deinterlacing Filter" algorithm, implemented on the GPU using Vulkan. It accepts the following parameters:

 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bwdif_vulkan
 */
  bwdif_vulkan(
    options?: {
    mode?: FFInt | "send_frame" | "send_field" | "send_frame_nospatial" | "send_field_nospatial";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "bwdif_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Contrast Adaptive Sharpen filter to video stream. The filter accepts the following options:

 *
 * @param options.strength - Set the sharpening strength. Default value is 0.
 * @param options.planes - Set planes to filter. Default value is to filter all planes except alpha plane.
 * @see https://ffmpeg.org/ffmpeg-filters.html#cas
 */
  cas(
    options?: {
    strength?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "cas", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "strength": options?.strength,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Repack CEA-708 closed captioning side data This filter fixes various issues seen with commercial encoders related to upstream malformed CEA-708 payloads, specifically incorrect number of tuples (wrong cc_count for the target FPS), and incorrect ordering of tuples (i.e. the CEA-608 tuples are not at the first entries in the payload).

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#ccrepack
 */
  ccrepack(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ccrepack", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Apply an effect that emulates chromatic aberration. Works best with RGB inputs, but provides a similar effect with YCbCr inputs too.

 *
 * @param options.dist_x - Horizontal displacement multiplier. Each chroma pixel's position will be multiplied by this amount, starting from the center of the image. Default is 0.
 * @param options.dist_y - Similarly, this sets the vertical displacement multiplier. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromaber_vulkan
 */
  chromaber_vulkan(
    options?: {
    dist_x?: FFFloat;
    dist_y?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromaber_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dist_x": options?.dist_x,
      "dist_y": options?.dist_y,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove all color information for all colors except for certain one. The filter accepts the following options:

 *
 * @param options.color - The color which will not be replaced with neutral chroma.
 * @param options.similarity - Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. 0.0 makes pixels either fully gray, or not gray at all. Higher values result in more preserved color.
 * @param options.yuv - Signals that the color passed is already in YUV instead of RGB. Literal colors like "green" or "red" don't make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromahold
 */
  chromahold(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
    yuv?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromahold", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "yuv": options?.yuv,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * YUV colorspace color/chroma keying. The filter accepts the following options:

 *
 * @param options.color - The color which will be replaced with transparency.
 * @param options.similarity - Similarity percentage with the key color. 0.01 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
 * @param options.yuv - Signals that the color passed is already in YUV instead of RGB. Literal colors like "green" or "red" don't make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromakey
 */
  chromakey(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
    yuv?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromakey", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "yuv": options?.yuv,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * CUDA accelerated YUV colorspace color/chroma keying. This filter works like normal chromakey filter but operates on CUDA frames. for more details and parameters see chromakey.
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.color - set the chromakey key color (default "black")
 * @param options.similarity - set the chromakey similarity value (from 0.01 to 1) (default 0.01)
 * @param options.blend - set the chromakey key blend value (from 0 to 1) (default 0)
 * @param options.yuv - color parameter is in yuv instead of rgb (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromakey_cuda
 */
  chromakey_cuda(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
    yuv?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromakey_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "yuv": options?.yuv,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Reduce chrominance noise. The filter accepts the following options:

 *
 * @param options.thres - Set threshold for averaging chrominance values. Sum of absolute difference of Y, U and V pixel components of current pixel and neighbour pixels lower than this threshold will be used in averaging. Luma component is left unchanged and is copied to output. Default value is 30. Allowed range is from 1 to 200.
 * @param options.sizew - Set horizontal radius of rectangle used for averaging. Allowed range is from 1 to 100. Default value is 5.
 * @param options.sizeh - Set vertical radius of rectangle used for averaging. Allowed range is from 1 to 100. Default value is 5.
 * @param options.stepw - Set horizontal step when averaging. Default value is 1. Allowed range is from 1 to 50. Mostly useful to speed-up filtering.
 * @param options.steph - Set vertical step when averaging. Default value is 1. Allowed range is from 1 to 50. Mostly useful to speed-up filtering.
 * @param options.threy - Set Y threshold for averaging chrominance values. Set finer control for max allowed difference between Y components of current pixel and neighbour pixels. Default value is 200. Allowed range is from 1 to 200.
 * @param options.threu - Set U threshold for averaging chrominance values. Set finer control for max allowed difference between U components of current pixel and neighbour pixels. Default value is 200. Allowed range is from 1 to 200.
 * @param options.threv - Set V threshold for averaging chrominance values. Set finer control for max allowed difference between V components of current pixel and neighbour pixels. Default value is 200. Allowed range is from 1 to 200.
 * @param options.distance - Set distance type used in calculations. @end table Default distance type is manhattan.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromanr
 */
  chromanr(
    options?: {
    thres?: FFFloat;
    sizew?: FFInt;
    sizeh?: FFInt;
    stepw?: FFInt;
    steph?: FFInt;
    threy?: FFFloat;
    threu?: FFFloat;
    threv?: FFFloat;
    distance?: FFInt | "manhattan" | "euclidean";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromanr", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "thres": options?.thres,
      "sizew": options?.sizew,
      "sizeh": options?.sizeh,
      "stepw": options?.stepw,
      "steph": options?.steph,
      "threy": options?.threy,
      "threu": options?.threu,
      "threv": options?.threv,
      "distance": options?.distance,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Shift chroma pixels horizontally and/or vertically. The filter accepts the following options:

 *
 * @param options.cbh - Set amount to shift chroma-blue horizontally.
 * @param options.cbv - Set amount to shift chroma-blue vertically.
 * @param options.crh - Set amount to shift chroma-red horizontally.
 * @param options.crv - Set amount to shift chroma-red vertically.
 * @param options.edge - Set edge mode, can be smear, default, or warp.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chromashift
 */
  chromashift(
    options?: {
    cbh?: FFInt;
    cbv?: FFInt;
    crh?: FFInt;
    crv?: FFInt;
    edge?: FFInt | "smear" | "wrap";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "chromashift", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cbh": options?.cbh,
      "cbv": options?.cbv,
      "crh": options?.crh,
      "crv": options?.crv,
      "edge": options?.edge,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Display CIE color diagram with pixels overlaid onto it. The filter accepts the following options:

 *
 * @param options.system - Set color system. @end table
 * @param options.cie - Set CIE system. @end table
 * @param options.gamuts - Set what gamuts to draw. See system option for available values.
 * @param options.size - Set ciescope size, by default set to 512.
 * @param options.intensity - Set intensity used to map input pixel values to CIE diagram.
 * @param options.contrast - Set contrast used to draw tongue colors that are out of active color system gamut.
 * @param options.corrgamma - Correct gamma displayed on scope, by default enabled.
 * @param options.showwhite - Show white point on CIE diagram, by default disabled.
 * @param options.gamma - Set input gamma. Used only with XYZ input color space.
 * @param options.fill - Fill with CIE colors. By default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ciescope
 */
  ciescope(
    options?: {
    system?: FFInt | "ntsc" | "470m" | "ebu" | "470bg" | "smpte" | "240m" | "apple" | "widergb" | "cie1931" | "hdtv" | "rec709" | "uhdtv" | "rec2020" | "dcip3";
    cie?: FFInt | "xyy" | "ucs" | "luv";
    gamuts?: FFFlags | "ntsc" | "470m" | "ebu" | "470bg" | "smpte" | "240m" | "apple" | "widergb" | "cie1931" | "hdtv" | "rec709" | "uhdtv" | "rec2020" | "dcip3";
    size?: FFInt;
    intensity?: FFFloat;
    contrast?: FFFloat;
    corrgamma?: FFBoolean;
    showwhite?: FFBoolean;
    gamma?: FFDouble;
    fill?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ciescope", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "system": options?.system,
      "cie": options?.cie,
      "gamuts": options?.gamuts,
      "size": options?.size,
      "intensity": options?.intensity,
      "contrast": options?.contrast,
      "corrgamma": options?.corrgamma,
      "showwhite": options?.showwhite,
      "gamma": options?.gamma,
      "fill": options?.fill,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Visualize information exported by some codecs. Some codecs can export information through frames using side-data or other means. For example, some MPEG based codecs export motion vectors through the export_mvs flag in the codec flags2 option. The filter accepts the following option:

 *
 * @param options.mv - Set motion vectors to visualize. Available flags for mv are: @end table
 * @param options.qp - Display quantization parameters using the chroma planes.
 * @param options.mv_type - Set motion vectors type to visualize. Includes MVs from all frames unless specified by frame_type option. Available flags for mv_type are: @end table
 * @param options.frame_type - Set frame type to visualize motion vectors of. Available flags for frame_type are: @end table
 * @param options.block - Display block partition structure using the luma plane.
 * @see https://ffmpeg.org/ffmpeg-filters.html#codecview
 */
  codecview(
    options?: {
    mv?: FFFlags | "pf" | "bf" | "bb";
    qp?: FFBoolean;
    mv_type?: FFFlags | "fp" | "bp";
    frame_type?: FFFlags | "if" | "pf" | "bf";
    block?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "codecview", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mv": options?.mv,
      "qp": options?.qp,
      "mv_type": options?.mv_type,
      "frame_type": options?.frame_type,
      "block": options?.block,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Modify intensity of primary colors (red, green and blue) of input frames. The filter allows an input frame to be adjusted in the shadows, midtones or highlights regions for the red-cyan, green-magenta or blue-yellow balance. A positive adjustment value shifts the balance towards the primary color, a negative value towards the complementary color. The filter accepts the following options:

 *
 * @param options.rs - set red shadows (from -1 to 1) (default 0)
 * @param options.gs - set green shadows (from -1 to 1) (default 0)
 * @param options.bs - Adjust red, green and blue shadows (darkest pixels).
 * @param options.rm - set red midtones (from -1 to 1) (default 0)
 * @param options.gm - set green midtones (from -1 to 1) (default 0)
 * @param options.bm - Adjust red, green and blue midtones (medium pixels).
 * @param options.rh - set red highlights (from -1 to 1) (default 0)
 * @param options.gh - set green highlights (from -1 to 1) (default 0)
 * @param options.bh - Adjust red, green and blue highlights (brightest pixels). Allowed ranges for options are [-1.0, 1.0]. Defaults are 0.
 * @param options.pl - Preserve lightness when changing color balance. Default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorbalance
 */
  colorbalance(
    options?: {
    rs?: FFFloat;
    gs?: FFFloat;
    bs?: FFFloat;
    rm?: FFFloat;
    gm?: FFFloat;
    bm?: FFFloat;
    rh?: FFFloat;
    gh?: FFFloat;
    bh?: FFFloat;
    pl?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorbalance", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rs": options?.rs,
      "gs": options?.gs,
      "bs": options?.bs,
      "rm": options?.rm,
      "gm": options?.gm,
      "bm": options?.bm,
      "rh": options?.rh,
      "gh": options?.gh,
      "bh": options?.bh,
      "pl": options?.pl,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Adjust video input frames by re-mixing color channels. This filter modifies a color channel by adding the values associated to the other channels of the same pixels. For example if the value to modify is red, the output value will be: @example red=red*rr + blue*rb + green*rg + alpha*ra @end example The filter accepts the following options:

 *
 * @param options.rr - set the red gain for the red channel (from -2 to 2) (default 1)
 * @param options.rg - set the green gain for the red channel (from -2 to 2) (default 0)
 * @param options.rb - set the blue gain for the red channel (from -2 to 2) (default 0)
 * @param options.ra - Adjust contribution of input red, green, blue and alpha channels for output red channel. Default is 1 for rr, and 0 for rg, rb and ra.
 * @param options.gr - set the red gain for the green channel (from -2 to 2) (default 0)
 * @param options.gg - set the green gain for the green channel (from -2 to 2) (default 1)
 * @param options.gb - set the blue gain for the green channel (from -2 to 2) (default 0)
 * @param options.ga - Adjust contribution of input red, green, blue and alpha channels for output green channel. Default is 1 for gg, and 0 for gr, gb and ga.
 * @param options.br - set the red gain for the blue channel (from -2 to 2) (default 0)
 * @param options.bg - set the green gain for the blue channel (from -2 to 2) (default 0)
 * @param options.bb - set the blue gain for the blue channel (from -2 to 2) (default 1)
 * @param options.ba - Adjust contribution of input red, green, blue and alpha channels for output blue channel. Default is 1 for bb, and 0 for br, bg and ba.
 * @param options.ar - set the red gain for the alpha channel (from -2 to 2) (default 0)
 * @param options.ag - set the green gain for the alpha channel (from -2 to 2) (default 0)
 * @param options.ab - set the blue gain for the alpha channel (from -2 to 2) (default 0)
 * @param options.aa - Adjust contribution of input red, green, blue and alpha channels for output alpha channel. Default is 1 for aa, and 0 for ar, ag and ab. Allowed ranges for options are [-2.0, 2.0].
 * @param options.pc - Set preserve color mode. The accepted values are: @end table
 * @param options.pa - Set the preserve color amount when changing colors. Allowed range is from [0.0, 1.0]. Default is 0.0, thus disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorchannelmixer
 */
  colorchannelmixer(
    options?: {
    rr?: FFDouble;
    rg?: FFDouble;
    rb?: FFDouble;
    ra?: FFDouble;
    gr?: FFDouble;
    gg?: FFDouble;
    gb?: FFDouble;
    ga?: FFDouble;
    br?: FFDouble;
    bg?: FFDouble;
    bb?: FFDouble;
    ba?: FFDouble;
    ar?: FFDouble;
    ag?: FFDouble;
    ab?: FFDouble;
    aa?: FFDouble;
    pc?: FFInt | "none" | "lum" | "max" | "avg" | "sum" | "nrm" | "pwr";
    pa?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorchannelmixer", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rr": options?.rr,
      "rg": options?.rg,
      "rb": options?.rb,
      "ra": options?.ra,
      "gr": options?.gr,
      "gg": options?.gg,
      "gb": options?.gb,
      "ga": options?.ga,
      "br": options?.br,
      "bg": options?.bg,
      "bb": options?.bb,
      "ba": options?.ba,
      "ar": options?.ar,
      "ag": options?.ag,
      "ab": options?.ab,
      "aa": options?.aa,
      "pc": options?.pc,
      "pa": options?.pa,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Adjust color contrast between RGB components. The filter accepts the following options:

 *
 * @param options.rc - Set the red-cyan contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
 * @param options.gm - Set the green-magenta contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
 * @param options.by - Set the blue-yellow contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
 * @param options.rcw - set the red-cyan weight (from 0 to 1) (default 0)
 * @param options.gmw - set the green-magenta weight (from 0 to 1) (default 0)
 * @param options.byw - Set the weight of each rc, gm, by option value. Default value is 0.0. Allowed range is from 0.0 to 1.0. If all weights are 0.0 filtering is disabled.
 * @param options.pl - Set the amount of preserving lightness. Default value is 0.0. Allowed range is from 0.0 to 1.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorcontrast
 */
  colorcontrast(
    options?: {
    rc?: FFFloat;
    gm?: FFFloat;
    by?: FFFloat;
    rcw?: FFFloat;
    gmw?: FFFloat;
    byw?: FFFloat;
    pl?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorcontrast", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rc": options?.rc,
      "gm": options?.gm,
      "by": options?.by,
      "rcw": options?.rcw,
      "gmw": options?.gmw,
      "byw": options?.byw,
      "pl": options?.pl,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Adjust color white balance selectively for blacks and whites. This filter operates in YUV colorspace. The filter accepts the following options:

 *
 * @param options.rl - Set the red shadow spot. Allowed range is from -1.0 to 1.0. Default value is 0.
 * @param options.bl - Set the blue shadow spot. Allowed range is from -1.0 to 1.0. Default value is 0.
 * @param options.rh - Set the red highlight spot. Allowed range is from -1.0 to 1.0. Default value is 0.
 * @param options.bh - Set the blue highlight spot. Allowed range is from -1.0 to 1.0. Default value is 0.
 * @param options.saturation - Set the amount of saturation. Allowed range is from -3.0 to 3.0. Default value is 1.
 * @param options.analyze - If set to anything other than manual it will analyze every frame and use derived parameters for filtering output frame. Possible values are: @end table Default value is manual.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorcorrect
 */
  colorcorrect(
    options?: {
    rl?: FFFloat;
    bl?: FFFloat;
    rh?: FFFloat;
    bh?: FFFloat;
    saturation?: FFFloat;
    analyze?: FFInt | "manual" | "average" | "minmax" | "median";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorcorrect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rl": options?.rl,
      "bl": options?.bl,
      "rh": options?.rh,
      "bh": options?.bh,
      "saturation": options?.saturation,
      "analyze": options?.analyze,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Analyze the video frames to determine the effective value range and alpha mode. The filter accepts the following options:

 *
 * @param options.mode - Set of properties to detect. Unavailable properties, such as alpha mode for an input image without an alpha channel, will be ignored automatically. Accepts a combination of the following flags: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#colordetect
 */
  colordetect(
    options?: {
    mode?: FFFlags | "color_range" | "alpha_mode" | "all";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colordetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove all color information for all RGB colors except for certain one. The filter accepts the following options:

 *
 * @param options.color - The color which will not be replaced with neutral gray.
 * @param options.similarity - Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. 0.0 makes pixels fully gray. Higher values result in more preserved color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorhold
 */
  colorhold(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorhold", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay a solid color on the video stream. The filter accepts the following options:

 *
 * @param options.hue - Set the color hue. Allowed range is from 0 to 360. Default value is 0.
 * @param options.saturation - Set the color saturation. Allowed range is from 0 to 1. Default value is 0.5.
 * @param options.lightness - Set the color lightness. Allowed range is from 0 to 1. Default value is 0.5.
 * @param options.mix - Set the mix of source lightness. By default is set to 1.0. Allowed range is from 0.0 to 1.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorize
 */
  colorize(
    options?: {
    hue?: FFFloat;
    saturation?: FFFloat;
    lightness?: FFFloat;
    mix?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorize", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "hue": options?.hue,
      "saturation": options?.saturation,
      "lightness": options?.lightness,
      "mix": options?.mix,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * RGB colorspace color keying. This filter operates on 8-bit RGB format frames by setting the alpha component of each pixel which falls within the similarity radius of the key color to 0. The alpha value for pixels outside the similarity radius depends on the value of the blend option. The filter accepts the following options:

 *
 * @param options.color - Set the color for which alpha will be set to 0 (full transparency). See "Color" section in the ffmpeg-utils manual. Default is black.
 * @param options.similarity - Set the radius from the key color within which other colors also have full transparency. The computed distance is related to the unit fractional distance in 3D space between the RGB values of the key color and the pixel's color. Range is 0.01 to 1.0. 0.01 matches within a very small radius around the exact key color, while 1.0 matches everything. Default is 0.01.
 * @param options.blend - Set how the alpha value for pixels that fall outside the similarity radius is computed. 0.0 makes pixels either fully transparent or fully opaque. Higher values result in semi-transparent pixels, with greater transparency the more similar the pixel color is to the key color. Range is 0.0 to 1.0. Default is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorkey
 */
  colorkey(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorkey", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * RGB colorspace color keying. The filter accepts the following options:

 *
 * @param options.color - The color which will be replaced with transparency.
 * @param options.similarity - Similarity percentage with the key color. 0.01 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorkey_opencl
 */
  colorkey_opencl(
    options?: {
    color?: FFColor;
    similarity?: FFFloat;
    blend?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorkey_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "color": options?.color,
      "similarity": options?.similarity,
      "blend": options?.blend,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Adjust video input frames using levels. The filter accepts the following options:

 *
 * @param options.rimin - set input red black point (from -1 to 1) (default 0)
 * @param options.gimin - set input green black point (from -1 to 1) (default 0)
 * @param options.bimin - set input blue black point (from -1 to 1) (default 0)
 * @param options.aimin - Adjust red, green, blue and alpha input black point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 0.
 * @param options.rimax - set input red white point (from -1 to 1) (default 1)
 * @param options.gimax - set input green white point (from -1 to 1) (default 1)
 * @param options.bimax - set input blue white point (from -1 to 1) (default 1)
 * @param options.aimax - Adjust red, green, blue and alpha input white point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 1. Input levels are used to lighten highlights (bright tones), darken shadows (dark tones), change the balance of bright and dark tones.
 * @param options.romin - set output red black point (from 0 to 1) (default 0)
 * @param options.gomin - set output green black point (from 0 to 1) (default 0)
 * @param options.bomin - set output blue black point (from 0 to 1) (default 0)
 * @param options.aomin - Adjust red, green, blue and alpha output black point. Allowed ranges for options are [0, 1.0]. Defaults are 0.
 * @param options.romax - set output red white point (from 0 to 1) (default 1)
 * @param options.gomax - set output green white point (from 0 to 1) (default 1)
 * @param options.bomax - set output blue white point (from 0 to 1) (default 1)
 * @param options.aomax - Adjust red, green, blue and alpha output white point. Allowed ranges for options are [0, 1.0]. Defaults are 1. Output levels allows manual selection of a constrained output level range.
 * @param options.preserve - Set preserve color mode. The accepted values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorlevels
 */
  colorlevels(
    options?: {
    rimin?: FFDouble;
    gimin?: FFDouble;
    bimin?: FFDouble;
    aimin?: FFDouble;
    rimax?: FFDouble;
    gimax?: FFDouble;
    bimax?: FFDouble;
    aimax?: FFDouble;
    romin?: FFDouble;
    gomin?: FFDouble;
    bomin?: FFDouble;
    aomin?: FFDouble;
    romax?: FFDouble;
    gomax?: FFDouble;
    bomax?: FFDouble;
    aomax?: FFDouble;
    preserve?: FFInt | "none" | "lum" | "max" | "avg" | "sum" | "nrm" | "pwr";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorlevels", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rimin": options?.rimin,
      "gimin": options?.gimin,
      "bimin": options?.bimin,
      "aimin": options?.aimin,
      "rimax": options?.rimax,
      "gimax": options?.gimax,
      "bimax": options?.bimax,
      "aimax": options?.aimax,
      "romin": options?.romin,
      "gomin": options?.gomin,
      "bomin": options?.bomin,
      "aomin": options?.aomin,
      "romax": options?.romax,
      "gomax": options?.gomax,
      "bomax": options?.bomax,
      "aomax": options?.aomax,
      "preserve": options?.preserve,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply custom color maps to video stream. This filter needs three input video streams. First stream is video stream that is going to be filtered out. Second and third video stream specify color patches for source color to target color mapping. The filter accepts the following options:

 *
 * @param options.patch_size - Set the source and target video stream patch size in pixels.
 * @param options.nb_patches - Set the max number of used patches from source and target video stream. Default value is number of patches available in additional video streams. Max allowed number of patches is 64.
 * @param options._type - Set the adjustments used for target colors. Can be relative or absolute. Defaults is absolute.
 * @param options.kernel - Set the kernel used to measure color differences between mapped colors. The accepted values are: @end table Default is euclidean.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colormap
 */
  colormap(
    _source: VideoStream,
    _target: VideoStream,

    options?: {
    patch_size?: FFImageSize;
    nb_patches?: FFInt;
    _type?: FFInt | "relative" | "absolute";
    kernel?: FFInt | "euclidean" | "weuclidean";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colormap", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _source, _target],
      merge(
    {
      "patch_size": options?.patch_size,
      "nb_patches": options?.nb_patches,
      "type": options?._type,
      "kernel": options?.kernel,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert color matrix. The filter accepts the following options:

 *
 * @param options.src - set source color matrix (from -1 to 4) (default -1)
 * @param options.dst - Specify the source and destination color matrix. Both values must be specified. The accepted values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#colormatrix
 */
  colormatrix(
    options?: {
    src?: FFInt | "bt709" | "fcc" | "bt601" | "bt470" | "bt470bg" | "smpte170m" | "smpte240m" | "bt2020";
    dst?: FFInt | "bt709" | "fcc" | "bt601" | "bt470" | "bt470bg" | "smpte170m" | "smpte240m" | "bt2020";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colormatrix", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "src": options?.src,
      "dst": options?.dst,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert colorspace, transfer characteristics or color primaries. Input video needs to have an even size. The filter accepts the following options:

 *
 * @param options.all - Specify all color properties at once. The accepted values are: @end table @anchor{space}
 * @param options.space - Specify output colorspace. The accepted values are: @end table @anchor{trc}
 * @param options.range - Specify output color range. The accepted values are: @end table
 * @param options.primaries - Specify output color primaries. The accepted values are: @end table @anchor{range}
 * @param options.trc - Specify output transfer characteristics. The accepted values are: @end table @anchor{primaries}
 * @param options.format - Specify output color format. The accepted values are: @end table
 * @param options.fast - Do a fast conversion, which skips gamma/primary correction. This will take significantly less CPU, but will be mathematically incorrect. To get output compatible with that produced by the colormatrix filter, use fast=1.
 * @param options.dither - Specify dithering mode. The accepted values are: @end table
 * @param options.wpadapt - Whitepoint adaptation mode. The accepted values are: @end table
 * @param options.clipgamut - Controls how to clip out-of-gamut colors that arise as a result of colorspace conversion. The accepted values are: @end table
 * @param options.iall - Override all input properties at once. Same accepted values as all.
 * @param options.ispace - Override input colorspace. Same accepted values as space.
 * @param options.irange - Override input color range. Same accepted values as range.
 * @param options.iprimaries - Override input color primaries. Same accepted values as primaries.
 * @param options.itrc - Override input transfer characteristics. Same accepted values as trc.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorspace
 */
  colorspace(
    options?: {
    all?: FFInt | "bt470m" | "bt470bg" | "bt601-6-525" | "bt601-6-625" | "bt709" | "smpte170m" | "smpte240m" | "bt2020";
    space?: FFInt | "bt709" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "gbr" | "bt2020nc" | "bt2020ncl";
    range?: FFInt | "tv" | "mpeg" | "pc" | "jpeg";
    primaries?: FFInt | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "smpte428" | "film" | "smpte431" | "smpte432" | "bt2020" | "jedec-p22" | "ebu3213" | "vgamut";
    trc?: FFInt | "bt709" | "bt470m" | "gamma22" | "bt470bg" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "srgb" | "iec61966-2-1" | "xvycc" | "iec61966-2-4" | "bt2020-10" | "bt2020-12" | "vlog";
    format?: FFInt | "yuv420p" | "yuv420p10" | "yuv420p12" | "yuv422p" | "yuv422p10" | "yuv422p12" | "yuv444p" | "yuv444p10" | "yuv444p12";
    fast?: FFBoolean;
    dither?: FFInt | "none" | "fsb";
    wpadapt?: FFInt | "bradford" | "vonkries" | "identity";
    clipgamut?: FFInt | "none" | "rgb";
    iall?: FFInt | "bt470m" | "bt470bg" | "bt601-6-525" | "bt601-6-625" | "bt709" | "smpte170m" | "smpte240m" | "bt2020";
    ispace?: FFInt | "bt709" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "gbr" | "bt2020nc" | "bt2020ncl";
    irange?: FFInt | "tv" | "mpeg" | "pc" | "jpeg";
    iprimaries?: FFInt | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "smpte428" | "film" | "smpte431" | "smpte432" | "bt2020" | "jedec-p22" | "ebu3213" | "vgamut";
    itrc?: FFInt | "bt709" | "bt470m" | "gamma22" | "bt470bg" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "srgb" | "iec61966-2-1" | "xvycc" | "iec61966-2-4" | "bt2020-10" | "bt2020-12" | "vlog";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorspace", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "all": options?.all,
      "space": options?.space,
      "range": options?.range,
      "primaries": options?.primaries,
      "trc": options?.trc,
      "format": options?.format,
      "fast": options?.fast,
      "dither": options?.dither,
      "wpadapt": options?.wpadapt,
      "clipgamut": options?.clipgamut,
      "iall": options?.iall,
      "ispace": options?.ispace,
      "irange": options?.irange,
      "iprimaries": options?.iprimaries,
      "itrc": options?.itrc,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * CUDA accelerated implementation of the colorspace filter. It is by no means feature complete compared to the software colorspace filter, and at the current time only supports color range conversion between jpeg/full and mpeg/limited range. The filter accepts the following options:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.range - Specify output color range. The accepted values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#colorspace_cuda
 */
  colorspace_cuda(
    options?: {
    range?: FFInt | "tv" | "mpeg" | "pc" | "jpeg";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colorspace_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "range": options?.range,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Adjust color temperature in video to simulate variations in ambient color temperature. The filter accepts the following options:

 *
 * @param options.temperature - Set the temperature in Kelvin. Allowed range is from 1000 to 40000. Default value is 6500 K.
 * @param options.mix - Set mixing with filtered output. Allowed range is from 0 to 1. Default value is 1.
 * @param options.pl - Set the amount of preserving lightness. Allowed range is from 0 to 1. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#colortemperature
 */
  colortemperature(
    options?: {
    temperature?: FFFloat;
    mix?: FFFloat;
    pl?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "colortemperature", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "temperature": options?.temperature,
      "mix": options?.mix,
      "pl": options?.pl,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Apply convolution of 3x3, 5x5, 7x7 or horizontal/vertical up to 49 elements. The filter accepts the following options:

 *
 * @param options._0m - set matrix for 1st plane (default "0 0 0 0 1 0 0 0 0")
 * @param options._1m - set matrix for 2nd plane (default "0 0 0 0 1 0 0 0 0")
 * @param options._2m - set matrix for 3rd plane (default "0 0 0 0 1 0 0 0 0")
 * @param options._3m - Set matrix for each plane. Matrix is sequence of 9, 25 or 49 signed integers in square mode, and from 1 to 49 odd number of signed integers in row mode.
 * @param options._0rdiv - set rdiv for 1st plane (from 0 to INT_MAX) (default 0)
 * @param options._1rdiv - set rdiv for 2nd plane (from 0 to INT_MAX) (default 0)
 * @param options._2rdiv - set rdiv for 3rd plane (from 0 to INT_MAX) (default 0)
 * @param options._3rdiv - Set multiplier for calculated value for each plane. If unset or 0, it will be 1/sum of all matrix elements.
 * @param options._0bias - set bias for 1st plane (from 0 to INT_MAX) (default 0)
 * @param options._1bias - set bias for 2nd plane (from 0 to INT_MAX) (default 0)
 * @param options._2bias - set bias for 3rd plane (from 0 to INT_MAX) (default 0)
 * @param options._3bias - Set bias for each plane. This value is added to the result of the multiplication. Useful for making the overall image brighter or darker. Default is 0.0.
 * @param options._0mode - set matrix mode for 1st plane (from 0 to 2) (default square)
 * @param options._1mode - set matrix mode for 2nd plane (from 0 to 2) (default square)
 * @param options._2mode - set matrix mode for 3rd plane (from 0 to 2) (default square)
 * @param options._3mode - Set matrix mode for each plane. Can be square, row or column. Default is square.
 * @see https://ffmpeg.org/ffmpeg-filters.html#convolution
 */
  convolution(
    options?: {
    _0m?: FFString;
    _1m?: FFString;
    _2m?: FFString;
    _3m?: FFString;
    _0rdiv?: FFFloat;
    _1rdiv?: FFFloat;
    _2rdiv?: FFFloat;
    _3rdiv?: FFFloat;
    _0bias?: FFFloat;
    _1bias?: FFFloat;
    _2bias?: FFFloat;
    _3bias?: FFFloat;
    _0mode?: FFInt | "square" | "row" | "column";
    _1mode?: FFInt | "square" | "row" | "column";
    _2mode?: FFInt | "square" | "row" | "column";
    _3mode?: FFInt | "square" | "row" | "column";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "convolution", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "0m": options?._0m,
      "1m": options?._1m,
      "2m": options?._2m,
      "3m": options?._3m,
      "0rdiv": options?._0rdiv,
      "1rdiv": options?._1rdiv,
      "2rdiv": options?._2rdiv,
      "3rdiv": options?._3rdiv,
      "0bias": options?._0bias,
      "1bias": options?._1bias,
      "2bias": options?._2bias,
      "3bias": options?._3bias,
      "0mode": options?._0mode,
      "1mode": options?._1mode,
      "2mode": options?._2mode,
      "3mode": options?._3mode,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply convolution of 3x3, 5x5, 7x7 matrix. The filter accepts the following options:

 *
 * @param options._0m - set matrix for 2nd plane (default "0 0 0 0 1 0 0 0 0")
 * @param options._2m - set matrix for 3rd plane (default "0 0 0 0 1 0 0 0 0")
 * @param options._3m - Set matrix for each plane. Matrix is sequence of 9, 25 or 49 signed numbers. Default value for each plane is 0 0 0 0 1 0 0 0 0.
 * @param options._0rdiv - set rdiv for 1st plane (from 0 to INT_MAX) (default 1)
 * @param options._1rdiv - set rdiv for 2nd plane (from 0 to INT_MAX) (default 1)
 * @param options._2rdiv - set rdiv for 3rd plane (from 0 to INT_MAX) (default 1)
 * @param options._3rdiv - Set multiplier for calculated value for each plane. If unset or 0, it will be sum of all matrix elements. The option value must be a float number greater or equal to 0.0. Default value is 1.0.
 * @param options._0bias - set bias for 1st plane (from 0 to INT_MAX) (default 0)
 * @param options._1bias - set bias for 2nd plane (from 0 to INT_MAX) (default 0)
 * @param options._2bias - set bias for 3rd plane (from 0 to INT_MAX) (default 0)
 * @param options._3bias - Set bias for each plane. This value is added to the result of the multiplication. Useful for making the overall image brighter or darker. The option value must be a float number greater or equal to 0.0. Default value is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#convolution_opencl
 */
  convolution_opencl(
    options?: {
    _0m?: FFString;
    _2m?: FFString;
    _3m?: FFString;
    _0rdiv?: FFFloat;
    _1rdiv?: FFFloat;
    _2rdiv?: FFFloat;
    _3rdiv?: FFFloat;
    _0bias?: FFFloat;
    _1bias?: FFFloat;
    _2bias?: FFFloat;
    _3bias?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "convolution_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "0m": options?._0m,
      "2m": options?._2m,
      "3m": options?._3m,
      "0rdiv": options?._0rdiv,
      "1rdiv": options?._1rdiv,
      "2rdiv": options?._2rdiv,
      "3rdiv": options?._3rdiv,
      "0bias": options?._0bias,
      "1bias": options?._1bias,
      "2bias": options?._2bias,
      "3bias": options?._3bias,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply 2D convolution of video stream in frequency domain using second stream as impulse. The filter accepts the following options:

 *
 * @param options.planes - Set which planes to process.
 * @param options.impulse - Set which impulse video frames will be processed, can be first or all. Default is all.
 * @param options.noise - set noise (from 0 to 1) (default 1e-07)
 * @see https://ffmpeg.org/ffmpeg-filters.html#convolve
 */
  convolve(
    _impulse: VideoStream,

    options?: {
    planes?: FFInt;
    impulse?: FFInt | "first" | "all";
    noise?: FFFloat;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "convolve", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _impulse],
      merge(
    {
      "planes": options?.planes,
      "impulse": options?.impulse,
      "noise": options?.noise,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Copy the input video source unchanged to the output. This is mainly useful for testing purposes. @anchor{coreimage}

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#copy
 */
  copy(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "copy", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Obtain the correlation between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained per component, average, min and max correlation is printed through the logging system. The filter stores the calculated correlation of each frame in frame metadata. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi corr -f null - @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#corr
 */
  corr(
    _reference: VideoStream,

    options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "corr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Cover a rectangular object It accepts the following options:

 *
 * @param options.cover - Filepath of the optional cover image, needs to be in yuv420.
 * @param options.mode - Set covering mode. It accepts the following values: @end table Default value is blur.
 * @see https://ffmpeg.org/ffmpeg-filters.html#cover_rect
 */
  cover_rect(
    options?: {
    cover?: FFString;
    mode?: FFInt | "cover" | "blur";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "cover_rect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cover": options?.cover,
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Crop the input video to given dimensions. It accepts the following parameters:

 *
 * @param options.out_w - set the width crop area expression (default "iw")
 * @param options.out_h - set the height crop area expression (default "ih")
 * @param options.x - set the x crop area expression (default "(in_w-out_w)/2")
 * @param options.y - Set width/height of the output video and the horizontal/vertical position in the input video. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.keep_aspect - If set to 1 will force the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio. It defaults to 0.
 * @param options.exact - Enable exact cropping. If enabled, subsampled videos will be cropped at exact width/height/x/y as specified and will not be rounded to nearest smaller value. It defaults to 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#crop
 */
  crop(
    options?: {
    out_w?: FFString;
    out_h?: FFString;
    x?: FFString;
    y?: FFString;
    keep_aspect?: FFBoolean;
    exact?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "crop", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "out_w": options?.out_w,
      "out_h": options?.out_h,
      "x": options?.x,
      "y": options?.y,
      "keep_aspect": options?.keep_aspect,
      "exact": options?.exact,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Auto-detect the crop size. It calculates the necessary cropping parameters and prints the recommended parameters via the logging system. The detected dimensions correspond to the non-black or video area of the input video according to mode. It accepts the following parameters:

 *
 * @param options.limit - The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.round - The value which the width/height should be divisible by. It defaults to 16. The offset is automatically adjusted to center the video. Use 2 to get only even dimensions (needed for 4:2:2 video). 16 is best when encoding to most video codecs.
 * @param options.reset - Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0. This can be useful when channel logos distort the video area. 0 indicates 'never reset', and returns the largest area encountered during playback.
 * @param options.skip - Set the number of initial frames for which evaluation is skipped. Default is 2. Range is 0 to INT_MAX.
 * @param options.reset_count - Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0. This can be useful when channel logos distort the video area. 0 indicates 'never reset', and returns the largest area encountered during playback.
 * @param options.max_outliers - Threshold count of outliers (from 0 to INT_MAX) (default 0)
 * @param options.mode - Depending on mode crop detection is based on either the mere black value of surrounding pixels or a combination of motion vectors and edge pixels. @end table
 * @param options.high - Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 5/255, and default value for high is 15/255.
 * @param options.low - Set low threshold for edge detection (from 0 to 1) (default 0.0588235)
 * @param options.mv_threshold - Set motion in pixel units as threshold for motion detection. It defaults to 8.
 * @see https://ffmpeg.org/ffmpeg-filters.html#cropdetect
 */
  cropdetect(
    options?: {
    limit?: FFFloat;
    round?: FFInt;
    reset?: FFInt;
    skip?: FFInt;
    reset_count?: FFInt;
    max_outliers?: FFInt;
    mode?: FFInt | "black" | "mvedges";
    high?: FFFloat;
    low?: FFFloat;
    mv_threshold?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "cropdetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "limit": options?.limit,
      "round": options?.round,
      "reset": options?.reset,
      "skip": options?.skip,
      "reset_count": options?.reset_count,
      "max_outliers": options?.max_outliers,
      "mode": options?.mode,
      "high": options?.high,
      "low": options?.low,
      "mv_threshold": options?.mv_threshold,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Delay video filtering until a given wallclock timestamp. The filter first passes on preroll amount of frames, then it buffers at most buffer amount of frames and waits for the cue. After reaching the cue it forwards the buffered frames and also any subsequent frames coming in its input. The filter can be used synchronize the output of multiple ffmpeg processes for realtime output devices like decklink. By putting the delay in the filtering chain and pre-buffering frames the process can pass on data to output almost immediately after the target wallclock timestamp is reached. Perfect frame accuracy cannot be guaranteed, but the result is good enough for some use cases.

 *
 * @param options.cue - The cue timestamp expressed in a UNIX timestamp in microseconds. Default is 0.
 * @param options.preroll - The duration of content to pass on as preroll expressed in seconds. Default is 0.
 * @param options.buffer - The maximum duration of content to buffer before waiting for the cue expressed in seconds. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#cue
 */
  cue(
    options?: {
    cue?: FFInt64;
    preroll?: FFDuration;
    buffer?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "cue", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cue": options?.cue,
      "preroll": options?.preroll,
      "buffer": options?.buffer,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply color adjustments using curves. This filter is similar to the Adobe Photoshop and GIMP curves tools. Each component (red, green and blue) has its values defined by N key points tied from each other using a smooth curve. The x-axis represents the pixel values from the input frame, and the y-axis the new pixel values to be set for the output frame. By default, a component curve is defined by the two points (0;0) and (1;1). This creates a straight line where each original pixel value is "adjusted" to its own value, which means no change to the image. The filter allows you to redefine these two points and add some more. A new curve will be defined to pass smoothly through all these new coordinates. The new defined points need to be strictly increasing over the x-axis, and their x and y values must be in the [0;1] interval. The curve is formed by using a natural or monotonic cubic spline interpolation, depending on the interp option (default: natural). The natural spline produces a smoother curve in general while the monotonic (pchip) spline guarantees the transitions between the specified points to be monotonic. If the computed curves happened to go outside the vector spaces, the values will be clipped accordingly. The filter accepts the following options:

 *
 * @param options.preset - Select one of the available color presets. This option can be used in addition to the r, g, b parameters; in this case, the later options takes priority on the preset values. Available presets are: @end table Default is none.
 * @param options.master - Set the master key points. These points will define a second pass mapping. It is sometimes called a "luminance" or "value" mapping. It can be used with r, g, b or all since it acts like a post-processing LUT.
 * @param options.red - Set the key points for the red component.
 * @param options.green - Set the key points for the green component.
 * @param options.blue - Set the key points for the blue component.
 * @param options.all - Set the key points for all components (not including master). Can be used in addition to the other key points component options. In this case, the unset component(s) will fallback on this all setting.
 * @param options.psfile - Specify a Photoshop curves file (.acv) to import the settings from.
 * @param options.plot - Save Gnuplot script of the curves in specified file.
 * @param options.interp - Specify the kind of interpolation. Available algorithms are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#curves
 */
  curves(
    options?: {
    preset?: FFInt | "none" | "color_negative" | "cross_process" | "darker" | "increase_contrast" | "lighter" | "linear_contrast" | "medium_contrast" | "negative" | "strong_contrast" | "vintage";
    master?: FFString;
    red?: FFString;
    green?: FFString;
    blue?: FFString;
    all?: FFString;
    psfile?: FFString;
    plot?: FFString;
    interp?: FFInt | "natural" | "pchip";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "curves", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "preset": options?.preset,
      "master": options?.master,
      "red": options?.red,
      "green": options?.green,
      "blue": options?.blue,
      "all": options?.all,
      "psfile": options?.psfile,
      "plot": options?.plot,
      "interp": options?.interp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Video data analysis filter. This filter shows hexadecimal pixel values of part of video. The filter accepts the following options:

 *
 * @param options.size - Set output video size.
 * @param options.x - Set x offset from where to pick pixels.
 * @param options.y - Set y offset from where to pick pixels.
 * @param options.mode - Set scope mode, can be one of the following: @end table
 * @param options.axis - Draw rows and columns numbers on left and top of video.
 * @param options.opacity - Set background opacity.
 * @param options.format - Set display number format. Can be hex, or dec. Default is hex.
 * @param options.components - Set pixel components to display. By default all pixel components are displayed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#datascope
 */
  datascope(
    options?: {
    size?: FFImageSize;
    x?: FFInt;
    y?: FFInt;
    mode?: FFInt | "mono" | "color" | "color2";
    axis?: FFBoolean;
    opacity?: FFFloat;
    format?: FFInt | "hex" | "dec";
    components?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "datascope", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "x": options?.x,
      "y": options?.y,
      "mode": options?.mode,
      "axis": options?.axis,
      "opacity": options?.opacity,
      "format": options?.format,
      "components": options?.components,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Directional blur filter. The filter accepts the following options:

 *
 * @param options.angle - Set angle of directional blur. Default is 45.
 * @param options.radius - Set radius of directional blur. Default is 5.
 * @param options.planes - Set which planes to filter. By default all planes are filtered.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dblur
 */
  dblur(
    options?: {
    angle?: FFFloat;
    radius?: FFFloat;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "angle": options?.angle,
      "radius": options?.radius,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Denoise frames using 2D DCT (frequency domain filtering). This filter is not designed for real time. The filter accepts the following options:

 *
 * @param options.sigma - Set the noise sigma constant. This sigma defines a hard threshold of 3 * sigma; every DCT coefficient (absolute value) below this threshold with be dropped. If you need a more advanced filtering, see expr. Default is 0.
 * @param options.overlap - Set number overlapping pixels for each block. Since the filter can be slow, you may want to reduce this value, at the cost of a less effective filter and the risk of various artefacts. If the overlapping value doesn't permit processing the whole input width or height, a warning will be displayed and according borders won't be denoised. Default value is blocksize-1, which is the best possible setting.
 * @param options.expr - Set the coefficient factor expression. For each coefficient of a DCT block, this expression will be evaluated as a multiplier value for the coefficient. If this is option is set, the sigma option will be ignored. The absolute value of the coefficient can be accessed through the c variable.
 * @param options.n - Set the blocksize using the number of bits. 1<<n defines the blocksize, which is the width and height of the processed blocks. The default value is 3 (8x8) and can be raised to 4 for a blocksize of 16x16. Note that changing this setting has huge consequences on the speed processing. Also, a larger block size does not necessarily means a better de-noising.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dctdnoiz
 */
  dctdnoiz(
    options?: {
    sigma?: FFFloat;
    overlap?: FFInt;
    expr?: FFString;
    n?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dctdnoiz", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigma": options?.sigma,
      "overlap": options?.overlap,
      "expr": options?.expr,
      "n": options?.n,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove banding artifacts from input video. It works by replacing banded pixels with average value of referenced pixels. The filter accepts the following options:

 *
 * @param options._1thr - set 1st plane threshold (from 3e-05 to 0.5) (default 0.02)
 * @param options._2thr - set 2nd plane threshold (from 3e-05 to 0.5) (default 0.02)
 * @param options._3thr - set 3rd plane threshold (from 3e-05 to 0.5) (default 0.02)
 * @param options._4thr - Set banding detection threshold for each plane. Default is 0.02. Valid range is 0.00003 to 0.5. If difference between current pixel and reference pixel is less than threshold, it will be considered as banded.
 * @param options.range - Banding detection range in pixels. Default is 16. If positive, random number in range 0 to set value will be used. If negative, exact absolute value will be used. The range defines square of four pixels around current pixel.
 * @param options.direction - Set direction in radians from which four pixel will be compared. If positive, random direction from 0 to set direction will be picked. If negative, exact of absolute value will be picked. For example direction 0, -PI or -2*PI radians will pick only pixels on same row and -PI/2 will pick only pixels on same column.
 * @param options.blur - If enabled, current pixel is compared with average value of all four surrounding pixels. The default is enabled. If disabled current pixel is compared with all four surrounding pixels. The pixel is considered banded if only all four differences with surrounding pixels are less than threshold.
 * @param options.coupling - If enabled, current pixel is changed if and only if all pixel components are banded, e.g. banding detection threshold is triggered for all color components. The default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deband
 */
  deband(
    options?: {
    _1thr?: FFFloat;
    _2thr?: FFFloat;
    _3thr?: FFFloat;
    _4thr?: FFFloat;
    range?: FFInt;
    direction?: FFFloat;
    blur?: FFBoolean;
    coupling?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deband", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "1thr": options?._1thr,
      "2thr": options?._2thr,
      "3thr": options?._3thr,
      "4thr": options?._4thr,
      "range": options?.range,
      "direction": options?.direction,
      "blur": options?.blur,
      "coupling": options?.coupling,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove blocking artifacts from input video. The filter accepts the following options:

 *
 * @param options.filter - Set filter type, can be weak or strong. Default is strong. This controls what kind of deblocking is applied.
 * @param options.block - Set size of block, allowed range is from 4 to 512. Default is 8.
 * @param options.alpha - set 1st detection threshold (from 0 to 1) (default 0.098)
 * @param options.beta - set 2nd detection threshold (from 0 to 1) (default 0.05)
 * @param options.gamma - set 3rd detection threshold (from 0 to 1) (default 0.05)
 * @param options.delta - Set blocking detection thresholds. Allowed range is 0 to 1. Defaults are: 0.098 for alpha and 0.05 for the rest. Using higher threshold gives more deblocking strength. Setting alpha controls threshold detection at exact edge of block. Remaining options controls threshold detection near the edge. Each one for below/above or left/right. Setting any of those to 0 disables deblocking.
 * @param options.planes - Set planes to filter. Default is to filter all available planes.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deblock
 */
  deblock(
    options?: {
    filter?: FFInt | "weak" | "strong";
    block?: FFInt;
    alpha?: FFFloat;
    beta?: FFFloat;
    gamma?: FFFloat;
    delta?: FFFloat;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deblock", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filter": options?.filter,
      "block": options?.block,
      "alpha": options?.alpha,
      "beta": options?.beta,
      "gamma": options?.gamma,
      "delta": options?.delta,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply 2D deconvolution of video stream in frequency domain using second stream as impulse. The filter accepts the following options:

 *
 * @param options.planes - Set which planes to process.
 * @param options.impulse - Set which impulse video frames will be processed, can be first or all. Default is all.
 * @param options.noise - Set noise when doing divisions. Default is 0.0000001. Useful when width and height are not same and not power of 2 or if stream prior to convolving had noise.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deconvolve
 */
  deconvolve(
    _impulse: VideoStream,

    options?: {
    planes?: FFInt;
    impulse?: FFInt | "first" | "all";
    noise?: FFFloat;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deconvolve", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _impulse],
      merge(
    {
      "planes": options?.planes,
      "impulse": options?.impulse,
      "noise": options?.noise,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Reduce cross-luminance (dot-crawl) and cross-color (rainbows) from video. It accepts the following options:

 *
 * @param options.m - Set mode of operation. Can be combination of dotcrawl for cross-luminance reduction and/or rainbows for cross-color reduction.
 * @param options.lt - Set spatial luma threshold. Lower values increases reduction of cross-luminance.
 * @param options.tl - Set tolerance for temporal luma. Higher values increases reduction of cross-luminance.
 * @param options.tc - Set tolerance for chroma temporal variation. Higher values increases reduction of cross-color.
 * @param options.ct - Set temporal chroma threshold. Lower values increases reduction of cross-color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dedot
 */
  dedot(
    options?: {
    m?: FFFlags | "dotcrawl" | "rainbows";
    lt?: FFFloat;
    tl?: FFFloat;
    tc?: FFFloat;
    ct?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dedot", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "m": options?.m,
      "lt": options?.lt,
      "tl": options?.tl,
      "tc": options?.tc,
      "ct": options?.ct,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply deflate effect to the video. This filter replaces the pixel by the local(3x3) average by taking into account only values lower than the pixel. It accepts the following options:

 *
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deflate
 */
  deflate(
    options?: {
    threshold0?: FFInt;
    threshold1?: FFInt;
    threshold2?: FFInt;
    threshold3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deflate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove temporal frame luminance variations. It accepts the following options:

 *
 * @param options.size - Set moving-average filter size in frames. Default is 5. Allowed range is 2 - 129.
 * @param options.mode - Set averaging mode to smooth temporal luminance variations. Available values are: @end table
 * @param options.bypass - Do not actually modify frame. Useful when one only wants metadata.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deflicker
 */
  deflicker(
    options?: {
    size?: FFInt;
    mode?: FFInt | "am" | "gm" | "hm" | "qm" | "cm" | "pm" | "median";
    bypass?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deflicker", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "mode": options?.mode,
      "bypass": options?.bypass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlacing of VAAPI surfaces

 *
 * @param options.mode - Deinterlacing mode (from 0 to 4) (default default)
 * @param options.rate - Generate output at frame rate or field rate (from 1 to 2) (default frame)
 * @param options.auto - Only deinterlace fields, passing frames through unchanged (from 0 to 1) (default 0)
 */
  deinterlace_vaapi(
    options?: {
    mode?: FFInt | "default" | "bob" | "weave" | "motion_adaptive" | "motion_compensated";
    rate?: FFInt | "frame" | "field";
    auto?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deinterlace_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "rate": options?.rate,
      "auto": options?.auto,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove judder produced by partially interlaced telecined content. Judder can be introduced, for instance, by pullup filter. If the original source was partially telecined content then the output of pullup,dejudder will have a variable frame rate. May change the recorded frame rate of the container. Aside from that change, this filter will not affect constant frame rate video. The option available in this filter is:

 *
 * @param options.cycle - Specify the length of the window over which the judder repeats. Accepts any integer greater than 1. Useful values are: @end table The default is 4.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dejudder
 */
  dejudder(
    options?: {
    cycle?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dejudder", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cycle": options?.cycle,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Suppress a TV station logo by a simple interpolation of the surrounding pixels. Just set a rectangle covering the logo and watch it disappear (and sometimes something even uglier appear - your mileage may vary). It accepts the following parameters:

 *
 * @param options.x - set logo x position (default "-1")
 * @param options.y - Specify the top left corner coordinates of the logo. They must be specified.
 * @param options.w - set logo width (default "-1")
 * @param options.h - Specify the width and height of the logo to clear. They must be specified.
 * @param options.show - When set to 1, a green rectangle is drawn on the screen to simplify finding the right x, y, w, and h parameters. The default value is 0. The rectangle is drawn on the outermost pixels which will be (partly) replaced with interpolated values. The values of the next pixels immediately outside this rectangle in each direction will be used to compute the interpolated pixel values inside the rectangle.
 * @see https://ffmpeg.org/ffmpeg-filters.html#delogo
 */
  delogo(
    options?: {
    x?: FFString;
    y?: FFString;
    w?: FFString;
    h?: FFString;
    show?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "delogo", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "w": options?.w,
      "h": options?.h,
      "show": options?.show,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * VAAPI VPP for de-noise

 *
 * @param options.denoise - denoise level (from 0 to 64) (default 0)
 */
  denoise_vaapi(
    options?: {
    denoise?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "denoise_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "denoise": options?.denoise,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Attempt to fix small changes in horizontal and/or vertical shift. This filter helps remove camera shake from hand-holding a camera, bumping a tripod, moving on a vehicle, etc. The filter accepts the following options:

 *
 * @param options.x - set x for the rectangular search area (from -1 to INT_MAX) (default -1)
 * @param options.y - set y for the rectangular search area (from -1 to INT_MAX) (default -1)
 * @param options.w - set width for the rectangular search area (from -1 to INT_MAX) (default -1)
 * @param options.h - Specify a rectangular area where to limit the search for motion vectors. If desired the search for motion vectors can be limited to a rectangular area of the frame defined by its top left corner, width and height. These parameters have the same meaning as the drawbox filter which can be used to visualise the position of the bounding box. This is useful when simultaneous movement of subjects within the frame might be confused for camera motion by the motion vector search. If any or all of x, y, w and h are set to -1 then the full frame is used. This allows later options to be set without specifying the bounding box for the motion vector search. Default - search the whole frame.
 * @param options.rx - set x for the rectangular search area (from 0 to 64) (default 16)
 * @param options.ry - Specify the maximum extent of movement in x and y directions in the range 0-64 pixels. Default 16.
 * @param options.edge - Specify how to generate pixels to fill blanks at the edge of the frame. Available values are: @end table Default value is mirror.
 * @param options.blocksize - Specify the blocksize to use for motion search. Range 4-128 pixels, default 8.
 * @param options.contrast - Specify the contrast threshold for blocks. Only blocks with more than the specified contrast (difference between darkest and lightest pixels) will be considered. Range 1-255, default 125.
 * @param options.search - Specify the search strategy. Available values are: @end table Default value is exhaustive.
 * @param options.filename - If set then a detailed log of the motion search is written to the specified file.
 * @param options.opencl - ignored (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#deshake
 */
  deshake(
    options?: {
    x?: FFInt;
    y?: FFInt;
    w?: FFInt;
    h?: FFInt;
    rx?: FFInt;
    ry?: FFInt;
    edge?: FFInt | "blank" | "original" | "clamp" | "mirror";
    blocksize?: FFInt;
    contrast?: FFInt;
    search?: FFInt | "exhaustive" | "less";
    filename?: FFString;
    opencl?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deshake", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "w": options?.w,
      "h": options?.h,
      "rx": options?.rx,
      "ry": options?.ry,
      "edge": options?.edge,
      "blocksize": options?.blocksize,
      "contrast": options?.contrast,
      "search": options?.search,
      "filename": options?.filename,
      "opencl": options?.opencl,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Feature-point based video stabilization filter. The filter accepts the following options:

 *
 * @param options.tripod - Simulates a tripod by preventing any camera movement whatsoever from the original frame. Defaults to 0.
 * @param options.debug - Whether or not additional debug info should be displayed, both in the processed output and in the console. Note that in order to see console debug output you will also need to pass -v verbose to ffmpeg. Viewing point matches in the output video is only supported for RGB input. Defaults to 0.
 * @param options.adaptive_crop - Whether or not to do a tiny bit of cropping at the borders to cut down on the amount of mirrored pixels. Defaults to 1.
 * @param options.refine_features - Whether or not feature points should be refined at a sub-pixel level. This can be turned off for a slight performance gain at the cost of precision. Defaults to 1.
 * @param options.smooth_strength - The strength of the smoothing applied to the camera path from 0.0 to 1.0. 1.0 is the maximum smoothing strength while values less than that result in less smoothing. 0.0 causes the filter to adaptively choose a smoothing strength on a per-frame basis. Defaults to 0.0.
 * @param options.smooth_window_multiplier - Controls the size of the smoothing window (the number of frames buffered to determine motion information from). The size of the smoothing window is determined by multiplying the framerate of the video by this number. Acceptable values range from 0.1 to 10.0. Larger values increase the amount of motion data available for determining how to smooth the camera path, potentially improving smoothness, but also increase latency and memory usage. Defaults to 2.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#deshake_opencl
 */
  deshake_opencl(
    options?: {
    tripod?: FFBoolean;
    debug?: FFBoolean;
    adaptive_crop?: FFBoolean;
    refine_features?: FFBoolean;
    smooth_strength?: FFFloat;
    smooth_window_multiplier?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "deshake_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "tripod": options?.tripod,
      "debug": options?.debug,
      "adaptive_crop": options?.adaptive_crop,
      "refine_features": options?.refine_features,
      "smooth_strength": options?.smooth_strength,
      "smooth_window_multiplier": options?.smooth_window_multiplier,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remove unwanted contamination of foreground colors, caused by reflected color of greenscreen or bluescreen. This filter accepts the following options:

 *
 * @param options._type - Set what type of despill to use.
 * @param options.mix - Set how spillmap will be generated.
 * @param options.expand - Set how much to get rid of still remaining spill.
 * @param options.red - Controls amount of red in spill area.
 * @param options.green - Controls amount of green in spill area. Should be -1 for greenscreen.
 * @param options.blue - Controls amount of blue in spill area. Should be -1 for bluescreen.
 * @param options.brightness - Controls brightness of spill area, preserving colors.
 * @param options.alpha - Modify alpha from generated spillmap.
 * @see https://ffmpeg.org/ffmpeg-filters.html#despill
 */
  despill(
    options?: {
    _type?: FFInt | "green" | "blue";
    mix?: FFFloat;
    expand?: FFFloat;
    red?: FFFloat;
    green?: FFFloat;
    blue?: FFFloat;
    brightness?: FFFloat;
    alpha?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "despill", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "type": options?._type,
      "mix": options?.mix,
      "expand": options?.expand,
      "red": options?.red,
      "green": options?.green,
      "blue": options?.blue,
      "brightness": options?.brightness,
      "alpha": options?.alpha,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply an exact inverse of the telecine operation. It requires a predefined pattern specified using the pattern option which must be the same as that passed to the telecine filter. This filter accepts the following options:

 *
 * @param options.first_field - @end table
 * @param options.pattern - A string of numbers representing the pulldown pattern you wish to apply. The default value is 23.
 * @param options.start_frame - A number representing position of the first frame with respect to the telecine pattern. This is to be used if the stream is cut. The default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#detelecine
 */
  detelecine(
    options?: {
    first_field?: FFInt | "top" | "t" | "bottom" | "b";
    pattern?: FFString;
    start_frame?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "detelecine", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "first_field": options?.first_field,
      "pattern": options?.pattern,
      "start_frame": options?.start_frame,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply dilation effect to the video. This filter replaces the pixel by the local(3x3) maximum. It accepts the following options:

 *
 * @param options.coordinates - Flag which specifies the pixel to refer to. Default is 255 i.e. all eight pixels are used. Flags to local 3x3 coordinates maps like this: 1 2 3 4 5 6 7 8
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dilation
 */
  dilation(
    options?: {
    coordinates?: FFInt;
    threshold0?: FFInt;
    threshold1?: FFInt;
    threshold2?: FFInt;
    threshold3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dilation", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "coordinates": options?.coordinates,
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply dilation effect to the video. This filter replaces the pixel by the local(3x3) maximum. It accepts the following options:

 *
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane. Range is [0, 65535] and default value is 65535. If 0, plane will remain unchanged.
 * @param options.coordinates - Flag which specifies the pixel to refer to. Range is [0, 255] and default value is 255, i.e. all eight pixels are used. Flags to local 3x3 coordinates region centered on x: 1 2 3 4 x 5 6 7 8
 * @see https://ffmpeg.org/ffmpeg-filters.html#dilation_opencl
 */
  dilation_opencl(
    options?: {
    threshold0?: FFFloat;
    threshold1?: FFFloat;
    threshold2?: FFFloat;
    threshold3?: FFFloat;
    coordinates?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "dilation_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "coordinates": options?.coordinates,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Displace pixels as indicated by second and third input stream. It takes three input streams and outputs one stream, the first input is the source, and second and third input are displacement maps. The second input specifies how much to displace pixels along the x-axis, while the third input specifies how much to displace pixels along the y-axis. If one of displacement map streams terminates, last frame from that displacement map will be used. Note that once generated, displacements maps can be reused over and over again. A description of the accepted options follows.

 *
 * @param options.edge - Set displace behavior for pixels that are out of range. Available values are: @end table Default is smear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#displace
 */
  displace(
    _xmap: VideoStream,
    _ymap: VideoStream,

    options?: {
    edge?: FFInt | "blank" | "smear" | "wrap" | "mirror";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "displace", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _xmap, _ymap],
      merge(
    {
      "edge": options?.edge,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count. The doubleweave works same as weave but without halving frame rate and frame count. It accepts the following option:

 *
 * @param options.first_field - Set first field. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#weave
 */
  doubleweave(
    options?: {
    first_field?: FFInt | "top" | "t" | "bottom" | "b";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "doubleweave", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "first_field": options?.first_field,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Draw a colored box on the input image. It accepts the following parameters:

 *
 * @param options.x - set horizontal position of the left box edge (default "0")
 * @param options.y - The x and y offset coordinates where the box is drawn.
 * @param options.width - set width of the box (default "0")
 * @param options.height - The expressions which specify the width and height of the box; if 0 they are interpreted as the input width and height. It defaults to 0.
 * @param options.color - Specify the color of the box to write. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value invert is used, the box edge color is the same as the video with inverted luma.
 * @param options.thickness - The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3. See below for the list of accepted constants.
 * @param options.replace - Applicable if the input has alpha. With value 1, the pixels of the painted box will overwrite the video's color and alpha pixels. Default is 0, which composites the box onto the input, leaving the video's alpha intact.
 * @param options.box_source - Box source can be set as side_data_detection_bboxes if you want to use box data in detection bboxes of side data. If box_source is set, the x, y, width and height will be ignored and still use box data in detection bboxes of side data. So please do not use this parameter if you were not sure about the box source.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drawbox
 */
  drawbox(
    options?: {
    x?: FFString;
    y?: FFString;
    width?: FFString;
    height?: FFString;
    color?: FFString;
    thickness?: FFString;
    replace?: FFBoolean;
    box_source?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "drawbox", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "width": options?.width,
      "height": options?.height,
      "color": options?.color,
      "thickness": options?.thickness,
      "replace": options?.replace,
      "box_source": options?.box_source,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Draw a colored box on the input image. It accepts the following parameters:

 *
 * @param options.x - set horizontal position of the left box edge (default "0")
 * @param options.y - The x and y offset coordinates where the box is drawn.
 * @param options.width - set width of the box (default "0")
 * @param options.height - The expressions which specify the width and height of the box; if 0 they are interpreted as the input width and height. It defaults to 0.
 * @param options.color - Specify the color of the box to write. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual.
 * @param options.thickness - The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3. See below for the list of accepted constants.
 * @param options.replace - With value 1, the pixels of the painted box will overwrite the video's color and alpha pixels. Default is 0, which composites the box onto the input video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drawbox_vaapi
 */
  drawbox_vaapi(
    options?: {
    x?: FFString;
    y?: FFString;
    width?: FFString;
    height?: FFString;
    color?: FFColor;
    thickness?: FFString;
    replace?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "drawbox_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "width": options?.width,
      "height": options?.height,
      "color": options?.color,
      "thickness": options?.thickness,
      "replace": options?.replace,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Draw a graph using input video metadata. It accepts the following parameters:

 *
 * @param options.m1 - Set 1st frame metadata key from which metadata values will be used to draw a graph.
 * @param options.fg1 - Set 1st foreground color expression.
 * @param options.m2 - Set 2nd frame metadata key from which metadata values will be used to draw a graph.
 * @param options.fg2 - Set 2nd foreground color expression.
 * @param options.m3 - Set 3rd frame metadata key from which metadata values will be used to draw a graph.
 * @param options.fg3 - Set 3rd foreground color expression.
 * @param options.m4 - Set 4th frame metadata key from which metadata values will be used to draw a graph.
 * @param options.fg4 - Set 4th foreground color expression.
 * @param options.bg - Set graph background color. Default is white.
 * @param options.min - Set minimal value of metadata value.
 * @param options.max - Set maximal value of metadata value.
 * @param options.mode - Set graph mode. Available values for mode is: @end table Default is line.
 * @param options.slide - Set slide mode. Available values for slide is: @end table Default is frame.
 * @param options.size - Set size of graph video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 900x256.
 * @param options.rate - Set the output frame rate. Default value is 25. The foreground color expressions can use the following variables: @end table The color is defined as 0xAABBGGRR.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drawgraph
 */
  drawgraph(
    options?: {
    m1?: FFString;
    fg1?: FFString;
    m2?: FFString;
    fg2?: FFString;
    m3?: FFString;
    fg3?: FFString;
    m4?: FFString;
    fg4?: FFString;
    bg?: FFColor;
    min?: FFFloat;
    max?: FFFloat;
    mode?: FFInt | "bar" | "dot" | "line";
    slide?: FFInt | "frame" | "replace" | "scroll" | "rscroll" | "picture";
    size?: FFImageSize;
    rate?: FFVideoRate;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "drawgraph", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "m1": options?.m1,
      "fg1": options?.fg1,
      "m2": options?.m2,
      "fg2": options?.fg2,
      "m3": options?.m3,
      "fg3": options?.fg3,
      "m4": options?.m4,
      "fg4": options?.fg4,
      "bg": options?.bg,
      "min": options?.min,
      "max": options?.max,
      "mode": options?.mode,
      "slide": options?.slide,
      "size": options?.size,
      "rate": options?.rate,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Draw a grid on the input image. It accepts the following parameters:

 *
 * @param options.x - set horizontal offset (default "0")
 * @param options.y - The x and y coordinates of some point of grid intersection (meant to configure offset).
 * @param options.width - set width of grid cell (default "0")
 * @param options.height - The expressions which specify the width and height of the grid cell, if 0 they are interpreted as the input width and height, respectively, minus thickness, so image gets framed. Default to 0.
 * @param options.color - Specify the color of the grid. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value invert is used, the grid color is the same as the video with inverted luma.
 * @param options.thickness - The expression which sets the thickness of the grid line. Default value is 1. See below for the list of accepted constants.
 * @param options.replace - Applicable if the input has alpha. With 1 the pixels of the painted grid will overwrite the video's color and alpha pixels. Default is 0, which composites the grid onto the input, leaving the video's alpha intact.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drawgrid
 */
  drawgrid(
    options?: {
    x?: FFString;
    y?: FFString;
    width?: FFString;
    height?: FFString;
    color?: FFString;
    thickness?: FFString;
    replace?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "drawgrid", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "width": options?.width,
      "height": options?.height,
      "color": options?.color,
      "thickness": options?.thickness,
      "replace": options?.replace,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Draw a text string or text from a specified file on top of a video, using the libfreetype library. To enable compilation of this filter, you need to configure FFmpeg with --enable-libfreetype and --enable-libharfbuzz. To enable default font fallback and the font option you need to configure FFmpeg with --enable-libfontconfig. To enable the text_shaping option, you need to configure FFmpeg with --enable-libfribidi.

 *
 * @param options.fontfile - The font file to be used for drawing text. The path must be included. This parameter is mandatory if the fontconfig support is disabled.
 * @param options.text - The text string to be drawn. The text must be a sequence of UTF-8 encoded characters. This parameter is mandatory if no file is specified with the parameter textfile.
 * @param options.textfile - A text file containing text to be drawn. The text must be a sequence of UTF-8 encoded characters. This parameter is mandatory if no text string is specified with the parameter text. If both text and textfile are specified, an error is thrown.
 * @param options.fontcolor - The color to be used for drawing fonts. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of fontcolor is "black".
 * @param options.fontcolor_expr - String which is expanded the same way as text to obtain dynamic fontcolor value. By default this option has empty value and is not processed. When this option is set, it overrides fontcolor option.
 * @param options.boxcolor - The color to be used for drawing box around text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of boxcolor is "white".
 * @param options.bordercolor - Set the color to be used for drawing border around text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of bordercolor is "black".
 * @param options.shadowcolor - The color to be used for drawing a shadow behind the drawn text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of shadowcolor is "black".
 * @param options.box - Used to draw a box around text using the background color. The value must be either 1 (enable) or 0 (disable). The default value of box is 0.
 * @param options.boxborderw - Set the width of the border to be drawn around the box using boxcolor. The value must be specified using one of the following formats: @itemize @bullet
 * @param options.line_spacing - Set the line spacing in pixels. The default value of line_spacing is 0.
 * @param options.fontsize - The font size to be used for drawing text. The default value of fontsize is 16.
 * @param options.text_align - Set the vertical and horizontal alignment of the text with respect to the box boundaries. The value is combination of flags, one for the vertical alignment (T=top, M=middle, B=bottom) and one for the horizontal alignment (L=left, C=center, R=right). Please note that tab characters are only supported with the left horizontal alignment.
 * @param options.x - set x expression (default "0")
 * @param options.y - the x and y offset coordinates where the text is drawn. These parameters allow the x and y expressions to refer to each other, so you can for example specify y=x/dar.
 * @param options.boxw - Set the width of the box to be drawn around text. The default value of boxw is computed automatically to match the text width
 * @param options.boxh - Set the height of the box to be drawn around text. The default value of boxh is computed automatically to match the text height
 * @param options.shadowx - set shadow x offset (from INT_MIN to INT_MAX) (default 0)
 * @param options.shadowy - The x and y offsets for the text shadow position with respect to the position of the text. They can be either positive or negative values. The default value for both is "0".
 * @param options.borderw - Set the width of the border to be drawn around the text using bordercolor. The default value of borderw is 0.
 * @param options.tabsize - The size in number of spaces to use for rendering the tab. Default value is 4.
 * @param options.basetime - Set a start time for the count. Value is in microseconds. Only applied in the deprecated strftime expansion mode. To emulate in normal expansion mode use the pts function, supplying the start time (in seconds) as the second argument.
 * @param options.font - The font family to be used for drawing text. By default Sans.
 * @param options.expansion - Select how the text is expanded. Can be either none, strftime (deprecated) or normal (default). See the drawtext_expansion section below for details.
 * @param options.y_align - Specify what the y value is referred to. Possible values are: @itemize @bullet
 * @param options.timecode - Set the initial timecode representation in "hh:mm:ss[:;.]ff" format. It can be used with or without text parameter. timecode_rate option must be specified.
 * @param options.tc24hmax - If set to 1, the output of the timecode option will wrap around at 24 hours. Default is 0 (disabled).
 * @param options.timecode_rate - Set the timecode frame rate (timecode only). Value will be rounded to nearest integer. Minimum value is "1". Drop-frame timecode is supported for frame rates 30 & 60.
 * @param options.reload - The textfile will be reloaded at specified frame interval. Be sure to update textfile atomically, or it may be read partially, or even fail. Range is 0 to INT_MAX. Default is 0.
 * @param options.alpha - Draw the text applying alpha blending. The value can be a number between 0.0 and 1.0. The expression accepts the same variables x, y as well. The default value is 1. Please see fontcolor_expr.
 * @param options.fix_bounds - If true, check and fix text coords to avoid clipping.
 * @param options.start_number - The starting frame number for the n/frame_num variable. The default value is "0".
 * @param options.text_source - Text source should be set as side_data_detection_bboxes if you want to use text data in detection bboxes of side data. If text source is set, text and textfile will be ignored and still use text data in detection bboxes of side data. So please do not use this parameter if you are not sure about the text source.
 * @param options.text_shaping - If set to 1, attempt to shape the text (for example, reverse the order of right-to-left text and join Arabic characters) before drawing it. Otherwise, just draw the text exactly as given. By default 1 (if supported).
 * @param options.ft_load_flags - The flags to be used for loading the fonts. The flags map the corresponding flags supported by libfreetype, and are a combination of the following values: @end table Default value is "default". For more information consult the documentation for the FT_LOAD_* libfreetype flags.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drawtext
 */
  drawtext(
    options?: {
    fontfile?: FFString;
    text?: FFString;
    textfile?: FFString;
    fontcolor?: FFColor;
    fontcolor_expr?: FFString;
    boxcolor?: FFColor;
    bordercolor?: FFColor;
    shadowcolor?: FFColor;
    box?: FFBoolean;
    boxborderw?: FFString;
    line_spacing?: FFInt;
    fontsize?: FFString;
    text_align?: FFFlags | "left" | "L" | "right" | "R" | "center" | "C" | "top" | "T" | "bottom" | "B" | "middle" | "M";
    x?: FFString;
    y?: FFString;
    boxw?: FFInt;
    boxh?: FFInt;
    shadowx?: FFInt;
    shadowy?: FFInt;
    borderw?: FFInt;
    tabsize?: FFInt;
    basetime?: FFInt64;
    font?: FFString;
    expansion?: FFInt | "none" | "normal" | "strftime";
    y_align?: FFInt | "text" | "baseline" | "font";
    timecode?: FFString;
    tc24hmax?: FFBoolean;
    timecode_rate?: FFRational;
    reload?: FFInt;
    alpha?: FFString;
    fix_bounds?: FFBoolean;
    start_number?: FFInt;
    text_source?: FFString;
    text_shaping?: FFBoolean;
    ft_load_flags?: FFFlags | "default" | "no_scale" | "no_hinting" | "render" | "no_bitmap" | "vertical_layout" | "force_autohint" | "crop_bitmap" | "pedantic" | "ignore_global_advance_width" | "no_recurse" | "ignore_transform" | "monochrome" | "linear_design" | "no_autohint";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "drawtext", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "fontfile": options?.fontfile,
      "text": options?.text,
      "textfile": options?.textfile,
      "fontcolor": options?.fontcolor,
      "fontcolor_expr": options?.fontcolor_expr,
      "boxcolor": options?.boxcolor,
      "bordercolor": options?.bordercolor,
      "shadowcolor": options?.shadowcolor,
      "box": options?.box,
      "boxborderw": options?.boxborderw,
      "line_spacing": options?.line_spacing,
      "fontsize": options?.fontsize,
      "text_align": options?.text_align,
      "x": options?.x,
      "y": options?.y,
      "boxw": options?.boxw,
      "boxh": options?.boxh,
      "shadowx": options?.shadowx,
      "shadowy": options?.shadowy,
      "borderw": options?.borderw,
      "tabsize": options?.tabsize,
      "basetime": options?.basetime,
      "font": options?.font,
      "expansion": options?.expansion,
      "y_align": options?.y_align,
      "timecode": options?.timecode,
      "tc24hmax": options?.tc24hmax,
      "timecode_rate": options?.timecode_rate,
      "reload": options?.reload,
      "alpha": options?.alpha,
      "fix_bounds": options?.fix_bounds,
      "start_number": options?.start_number,
      "text_source": options?.text_source,
      "text_shaping": options?.text_shaping,
      "ft_load_flags": options?.ft_load_flags,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Detect and draw edges. The filter uses the Canny Edge Detection algorithm. The filter accepts the following options:

 *
 * @param options.high - Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 20/255, and default value for high is 50/255.
 * @param options.low - set low threshold (from 0 to 1) (default 0.0784314)
 * @param options.mode - Define the drawing mode. @end table Default value is wires.
 * @param options.planes - Select planes for filtering. By default all available planes are filtered.
 * @see https://ffmpeg.org/ffmpeg-filters.html#edgedetect
 */
  edgedetect(
    options?: {
    high?: FFDouble;
    low?: FFDouble;
    mode?: FFInt | "wires" | "colormix" | "canny";
    planes?: FFFlags | "y" | "u" | "v" | "r" | "g" | "b";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "edgedetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "high": options?.high,
      "low": options?.low,
      "mode": options?.mode,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a posterize effect using the ELBG (Enhanced LBG) algorithm. For each input image, the filter will compute the optimal mapping from the input to the output given the codebook length, that is the number of distinct output colors. This filter accepts the following options.

 *
 * @param options.codebook_length - Set codebook length. The value must be a positive integer, and represents the number of distinct output colors. Default value is 256.
 * @param options.nb_steps - Set the maximum number of iterations to apply for computing the optimal mapping. The higher the value the better the result and the higher the computation time. Default value is 1.
 * @param options.seed - Set a random seed, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
 * @param options.pal8 - Set pal8 output pixel format. This option does not work with codebook length greater than 256. Default is disabled.
 * @param options.use_alpha - Include alpha values in the quantization calculation. Allows creating palettized output images (e.g. PNG8) with multiple alpha smooth blending.
 * @see https://ffmpeg.org/ffmpeg-filters.html#elbg
 */
  elbg(
    options?: {
    codebook_length?: FFInt;
    nb_steps?: FFInt;
    seed?: FFInt64;
    pal8?: FFBoolean;
    use_alpha?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "elbg", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "codebook_length": options?.codebook_length,
      "nb_steps": options?.nb_steps,
      "seed": options?.seed,
      "pal8": options?.pal8,
      "use_alpha": options?.use_alpha,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Measure graylevel entropy in histogram of color channels of video frames. It accepts the following parameters:

 *
 * @param options.mode - Can be either normal or diff. Default is normal. diff mode measures entropy of histogram delta values, absolute differences between neighbour histogram values.
 * @see https://ffmpeg.org/ffmpeg-filters.html#entropy
 */
  entropy(
    options?: {
    mode?: FFInt | "normal" | "diff";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "entropy", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply the EPX magnification filter which is designed for pixel art. It accepts the following option:

 *
 * @param options.n - Set the scaling dimension: 2 for 2xEPX, 3 for 3xEPX. Default is 3.
 * @see https://ffmpeg.org/ffmpeg-filters.html#epx
 */
  epx(
    options?: {
    n?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "epx", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Set brightness, contrast, saturation and approximate gamma adjustment. The filter accepts the following options:

 *
 * @param options.contrast - Set the contrast expression.
 * @param options.brightness - Set the brightness expression.
 * @param options.saturation - Set the saturation expression.
 * @param options.gamma - Set the gamma expression.
 * @param options.gamma_r - Set the gamma_r expression.
 * @param options.gamma_g - Set gamma_g expression.
 * @param options.gamma_b - Set gamma_b expression.
 * @param options.gamma_weight - Set gamma_weight expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.eval - Set when the expressions for brightness, contrast, saturation and gamma expressions are evaluated. It accepts the following values: @end table Default value is init.
 * @see https://ffmpeg.org/ffmpeg-filters.html#eq
 */
  eq(
    options?: {
    contrast?: FFString;
    brightness?: FFString;
    saturation?: FFString;
    gamma?: FFString;
    gamma_r?: FFString;
    gamma_g?: FFString;
    gamma_b?: FFString;
    gamma_weight?: FFString;
    eval?: FFInt | "init" | "frame";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "eq", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "contrast": options?.contrast,
      "brightness": options?.brightness,
      "saturation": options?.saturation,
      "gamma": options?.gamma,
      "gamma_r": options?.gamma_r,
      "gamma_g": options?.gamma_g,
      "gamma_b": options?.gamma_b,
      "gamma_weight": options?.gamma_weight,
      "eval": options?.eval,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply erosion effect to the video. This filter replaces the pixel by the local(3x3) minimum. It accepts the following options:

 *
 * @param options.coordinates - Flag which specifies the pixel to refer to. Default is 255 i.e. all eight pixels are used. Flags to local 3x3 coordinates maps like this: 1 2 3 4 5 6 7 8
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
 * @see https://ffmpeg.org/ffmpeg-filters.html#erosion
 */
  erosion(
    options?: {
    coordinates?: FFInt;
    threshold0?: FFInt;
    threshold1?: FFInt;
    threshold2?: FFInt;
    threshold3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "erosion", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "coordinates": options?.coordinates,
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply erosion effect to the video. This filter replaces the pixel by the local(3x3) minimum. It accepts the following options:

 *
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane. Range is [0, 65535] and default value is 65535. If 0, plane will remain unchanged.
 * @param options.coordinates - Flag which specifies the pixel to refer to. Range is [0, 255] and default value is 255, i.e. all eight pixels are used. Flags to local 3x3 coordinates region centered on x: 1 2 3 4 x 5 6 7 8
 * @see https://ffmpeg.org/ffmpeg-filters.html#erosion_opencl
 */
  erosion_opencl(
    options?: {
    threshold0?: FFFloat;
    threshold1?: FFFloat;
    threshold2?: FFFloat;
    threshold3?: FFFloat;
    coordinates?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "erosion_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "coordinates": options?.coordinates,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlace the input video ("estdif" stands for "Edge Slope Tracing Deinterlacing Filter"). Spatial only filter that uses edge slope tracing algorithm to interpolate missing lines. It accepts the following parameters:

 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is field.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @param options.rslope - Specify the search radius for edge slope tracing. Default value is 1. Allowed range is from 1 to 15.
 * @param options.redge - Specify the search radius for best edge matching. Default value is 2. Allowed range is from 0 to 15.
 * @param options.ecost - Specify the edge cost for edge matching. Default value is 2. Allowed range is from 0 to 50.
 * @param options.mcost - Specify the middle cost for edge matching. Default value is 1. Allowed range is from 0 to 50.
 * @param options.dcost - Specify the distance cost for edge matching. Default value is 1. Allowed range is from 0 to 50.
 * @param options.interp - Specify the interpolation used. Default is 4-point interpolation. It accepts one of the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#estdif
 */
  estdif(
    options?: {
    mode?: FFInt | "frame" | "field";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    rslope?: FFInt;
    redge?: FFInt;
    ecost?: FFInt;
    mcost?: FFInt;
    dcost?: FFInt;
    interp?: FFInt | "2p" | "4p" | "6p";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "estdif", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "rslope": options?.rslope,
      "redge": options?.redge,
      "ecost": options?.ecost,
      "mcost": options?.mcost,
      "dcost": options?.dcost,
      "interp": options?.interp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Adjust exposure of the video stream. The filter accepts the following options:

 *
 * @param options.exposure - Set the exposure correction in EV. Allowed range is from -3.0 to 3.0 EV Default value is 0 EV.
 * @param options.black - Set the black level correction. Allowed range is from -1.0 to 1.0. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#exposure
 */
  exposure(
    options?: {
    exposure?: FFFloat;
    black?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "exposure", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "exposure": options?.exposure,
      "black": options?.black,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Extract color channel components from input video stream into separate grayscale video streams. The filter accepts the following option:

 *
 * @param options.planes - Set plane(s) to extract. Available values for planes are: @end table Choosing planes not available in the input will result in an error. That means you cannot select r, g, b planes with y, u, v planes at same time.
 * @see https://ffmpeg.org/ffmpeg-filters.html#extractplanes
 */
  extractplanes(
    options?: {
    planes?: FFFlags | "y" | "u" | "v" | "r" | "g" | "b" | "a";
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "extractplanes", typingsInput: ["video"], typingsOutput: [] },
      [this],
      merge(
    {
      "planes": options?.planes,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }








/**
 * Apply a fade-in/out effect to the input video. It accepts the following parameters:

 *
 * @param options._type - The effect type can be either "in" for a fade-in, or "out" for a fade-out effect. Default is in.
 * @param options.start_frame - Specify the number of the frame to start applying the fade effect at. Default is 0.
 * @param options.nb_frames - The number of frames that the fade effect lasts. At the end of the fade-in effect, the output video will have the same intensity as the input video. At the end of the fade-out transition, the output video will be filled with the selected color. Default is 25.
 * @param options.alpha - If set to 1, fade only alpha channel, if one exists on the input. Default value is 0.
 * @param options.start_time - Specify the timestamp (in seconds) of the frame to start to apply the fade effect. If both start_frame and start_time are specified, the fade will start at whichever comes last. Default is 0.
 * @param options.duration - The number of seconds for which the fade effect has to last. At the end of the fade-in effect the output video will have the same intensity as the input video, at the end of the fade-out transition the output video will be filled with the selected color. If both duration and nb_frames are specified, duration is used. Default is 0 (nb_frames is used by default).
 * @param options.color - Specify the color of the fade. Default is "black".
 * @see https://ffmpeg.org/ffmpeg-filters.html#fade
 */
  fade(
    options?: {
    _type?: FFInt | "in" | "out";
    start_frame?: FFInt;
    nb_frames?: FFInt;
    alpha?: FFBoolean;
    start_time?: FFDuration;
    duration?: FFDuration;
    color?: FFColor;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fade", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "type": options?._type,
      "start_frame": options?.start_frame,
      "nb_frames": options?.nb_frames,
      "alpha": options?.alpha,
      "start_time": options?.start_time,
      "duration": options?.duration,
      "color": options?.color,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply feedback video filter. This filter pass cropped input frames to 2nd output. From there it can be filtered with other video filters. After filter receives frame from 2nd input, that frame is combined on top of original frame from 1st input and passed to 1st output. The typical usage is filter only part of frame. The filter accepts the following options:

 *
 * @param options.x - set top left crop position (from 0 to INT_MAX) (default 0)
 * @param options.w - set crop size (from 0 to INT_MAX) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#feedback
 */
  feedback(
    _feedin: VideoStream,

    options?: {
    x?: FFInt;
    w?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "feedback", typingsInput: ["video", "video"], typingsOutput: ["video", "video"] },
      [this, _feedin],
      merge(
    {
      "x": options?.x,
      "w": options?.w,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Denoise frames using 3D FFT (frequency domain filtering). The filter accepts the following options:

 *
 * @param options.sigma - Set the noise sigma constant. This sets denoising strength. Default value is 1. Allowed range is from 0 to 30. Using very high sigma with low overlap may give blocking artifacts.
 * @param options.amount - Set amount of denoising. By default all detected noise is reduced. Default value is 1. Allowed range is from 0 to 1.
 * @param options.block - Set size of block in pixels, Default is 32, can be 8 to 256.
 * @param options.overlap - Set block overlap. Default is 0.5. Allowed range is from 0.2 to 0.8.
 * @param options.method - Set denoising method. Default is wiener, can also be hard.
 * @param options.prev - Set number of previous frames to use for denoising. By default is set to 0.
 * @param options.next - Set number of next frames to to use for denoising. By default is set to 0.
 * @param options.planes - Set planes which will be filtered, by default are all available filtered except alpha.
 * @param options.window - set window function (from 0 to 20) (default hann)
 * @see https://ffmpeg.org/ffmpeg-filters.html#fftdnoiz
 */
  fftdnoiz(
    options?: {
    sigma?: FFFloat;
    amount?: FFFloat;
    block?: FFInt;
    overlap?: FFFloat;
    method?: FFInt | "wiener" | "hard";
    prev?: FFInt;
    next?: FFInt;
    planes?: FFInt;
    window?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fftdnoiz", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigma": options?.sigma,
      "amount": options?.amount,
      "block": options?.block,
      "overlap": options?.overlap,
      "method": options?.method,
      "prev": options?.prev,
      "next": options?.next,
      "planes": options?.planes,
      "window": options?.window,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply arbitrary expressions to samples in frequency domain

 *
 * @param options.dc_Y - Adjust the dc value (gain) of the luma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
 * @param options.dc_U - Adjust the dc value (gain) of the 1st chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
 * @param options.dc_V - Adjust the dc value (gain) of the 2nd chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
 * @param options.weight_Y - Set the frequency domain weight expression for the luma plane.
 * @param options.weight_U - Set the frequency domain weight expression for the 1st chroma plane.
 * @param options.weight_V - Set the frequency domain weight expression for the 2nd chroma plane.
 * @param options.eval - Set when the expressions are evaluated. It accepts the following values: @end table Default value is init. The filter accepts the following variables:
 * @see https://ffmpeg.org/ffmpeg-filters.html#fftfilt
 */
  fftfilt(
    options?: {
    dc_Y?: FFInt;
    dc_U?: FFInt;
    dc_V?: FFInt;
    weight_Y?: FFString;
    weight_U?: FFString;
    weight_V?: FFString;
    eval?: FFInt | "init" | "frame";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fftfilt", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dc_Y": options?.dc_Y,
      "dc_U": options?.dc_U,
      "dc_V": options?.dc_V,
      "weight_Y": options?.weight_Y,
      "weight_U": options?.weight_U,
      "weight_V": options?.weight_V,
      "eval": options?.eval,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Extract a single field from an interlaced image using stride arithmetic to avoid wasting CPU time. The output frames are marked as non-interlaced. The filter accepts the following options:

 *
 * @param options._type - Specify whether to extract the top (if the value is 0 or top) or the bottom field (if the value is 1 or bottom).
 * @see https://ffmpeg.org/ffmpeg-filters.html#field
 */
  field(
    options?: {
    _type?: FFInt | "top" | "bottom";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "field", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "type": options?._type,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Create new frames by copying the top and bottom fields from surrounding frames supplied as numbers by the hint file.

 *
 * @param options.hint - Set file containing hints: absolute/relative frame numbers. There must be one line for each frame in a clip. Each line must contain two numbers separated by the comma, optionally followed by - or +. Numbers supplied on each line of file can not be out of [N-1,N+1] where N is current frame number for absolute mode or out of [-1, 1] range for relative mode. First number tells from which frame to pick up top field and second number tells from which frame to pick up bottom field. If optionally followed by + output frame will be marked as interlaced, else if followed by - output frame will be marked as progressive, else it will be marked same as input frame. If optionally followed by t output frame will use only top field, or in case of b it will use only bottom field. If line starts with # or ; that line is skipped.
 * @param options.mode - Can be item absolute or relative or pattern. Default is absolute. The pattern mode is same as relative mode, except at last entry of file if there are more frames to process than hint file is seek back to start.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fieldhint
 */
  fieldhint(
    options?: {
    hint?: FFString;
    mode?: FFInt | "absolute" | "relative" | "pattern";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fieldhint", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "hint": options?.hint,
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Transform the field order of the input video. It accepts the following parameters:

 *
 * @param options.order - The output field order. Valid values are tff for top field first or bff for bottom field first.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fieldorder
 */
  fieldorder(
    options?: {
    order?: FFInt | "bff" | "tff";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fieldorder", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "order": options?.order,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Fill borders of the input video, without changing video stream dimensions. Sometimes video can have garbage at the four edges and you may not want to crop video input to keep size multiple of some number. This filter accepts the following options:

 *
 * @param options.left - Number of pixels to fill from left border.
 * @param options.right - Number of pixels to fill from right border.
 * @param options.top - Number of pixels to fill from top border.
 * @param options.bottom - Number of pixels to fill from bottom border.
 * @param options.mode - Set fill mode. It accepts the following values: @end table Default is smear.
 * @param options.color - Set color for pixels in fixed or fade mode. Default is black.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fillborders
 */
  fillborders(
    options?: {
    left?: FFInt;
    right?: FFInt;
    top?: FFInt;
    bottom?: FFInt;
    mode?: FFInt | "smear" | "mirror" | "fixed" | "reflect" | "wrap" | "fade" | "margins";
    color?: FFColor;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fillborders", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "left": options?.left,
      "right": options?.right,
      "top": options?.top,
      "bottom": options?.bottom,
      "mode": options?.mode,
      "color": options?.color,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Find a rectangular object in the input video. The object to search for must be specified as a gray8 image specified with the object option. For each possible match, a score is computed. If the score reaches the specified threshold, the object is considered found. If the input video contains multiple instances of the object, the filter will find only one of them. When an object is found, the following metadata entries are set in the matching frame:

 *
 * @param options.object - Filepath of the object image, needs to be in gray8.
 * @param options.threshold - Detection threshold, expressed as a decimal number in the range 0-1. A threshold value of 0.01 means only exact matches, a threshold of 0.99 means almost everything matches. Default value is 0.5.
 * @param options.mipmaps - Number of mipmaps, default is 3.
 * @param options.xmin - Specifies the rectangle in which to search.
 * @param options.xmax - Specifies the rectangle in which to search.
 * @param options.discard - Discard frames where object is not detected. Default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#find_rect
 */
  find_rect(
    options?: {
    object?: FFString;
    threshold?: FFFloat;
    mipmaps?: FFInt;
    xmin?: FFInt;
    xmax?: FFInt;
    discard?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "find_rect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "object": options?.object,
      "threshold": options?.threshold,
      "mipmaps": options?.mipmaps,
      "xmin": options?.xmin,
      "xmax": options?.xmax,
      "discard": options?.discard,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Flips an image along both the vertical and horizontal axis.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#flip_vulkan
 */
  flip_vulkan(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "flip_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Flood area with values of same pixel components with another values. It accepts the following options:

 *
 * @param options.x - Set pixel x coordinate.
 * @param options.y - Set pixel y coordinate.
 * @param options.s0 - Set source #0 component value.
 * @param options.s1 - Set source #1 component value.
 * @param options.s2 - Set source #2 component value.
 * @param options.s3 - Set source #3 component value.
 * @param options.d0 - Set destination #0 component value.
 * @param options.d1 - Set destination #1 component value.
 * @param options.d2 - Set destination #2 component value.
 * @param options.d3 - Set destination #3 component value.
 * @see https://ffmpeg.org/ffmpeg-filters.html#floodfill
 */
  floodfill(
    options?: {
    x?: FFInt;
    y?: FFInt;
    s0?: FFInt;
    s1?: FFInt;
    s2?: FFInt;
    s3?: FFInt;
    d0?: FFInt;
    d1?: FFInt;
    d2?: FFInt;
    d3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "floodfill", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "s0": options?.s0,
      "s1": options?.s1,
      "s2": options?.s2,
      "s3": options?.s3,
      "d0": options?.d0,
      "d1": options?.d1,
      "d2": options?.d2,
      "d3": options?.d3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert the input video to one of the specified pixel formats. Libavfilter will try to pick one that is suitable as input to the next filter. It accepts the following parameters:

 *
 * @param options.pix_fmts - A '|'-separated list of pixel format names, such as "pix_fmts=yuv420p|monow|rgb24".
 * @param options.color_spaces - A '|'-separated list of color space names, such as "color_spaces=bt709|bt470bg|bt2020nc".
 * @param options.color_ranges - A '|'-separated list of color range names, such as "color_ranges=tv|pc".
 * @param options.alpha_modes - A '|'-separated list of color range names, such as "alpha_modes=straight|premultiplied".
 * @see https://ffmpeg.org/ffmpeg-filters.html#format
 */
  format(
    options?: {
    pix_fmts?: FFString;
    color_spaces?: FFString;
    color_ranges?: FFString;
    alpha_modes?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "format", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "pix_fmts": options?.pix_fmts,
      "color_spaces": options?.color_spaces,
      "color_ranges": options?.color_ranges,
      "alpha_modes": options?.alpha_modes,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert the video to specified constant frame rate by duplicating or dropping frames as necessary. It accepts the following parameters:

 *
 * @param options.fps - The desired output frame rate. It accepts expressions containing the following constants: @end table The default is 25.
 * @param options.start_time - Assume the first PTS should be the given value, in seconds. This allows for padding/trimming at the start of stream. By default, no assumption is made about the first frame's expected PTS, so no padding or trimming is done. For example, this could be set to 0 to pad the beginning with duplicates of the first frame if a video stream starts after the audio stream or to trim any frames with a negative PTS.
 * @param options.round - Timestamp (PTS) rounding method. Possible values are: @end table The default is near.
 * @param options.eof_action - Action performed when reading the last frame. Possible values are: @end table The default is round.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fps
 */
  fps(
    options?: {
    fps?: FFString;
    start_time?: FFDouble;
    round?: FFInt | "zero" | "inf" | "down" | "up" | "near";
    eof_action?: FFInt | "round" | "pass";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fps", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "fps": options?.fps,
      "start_time": options?.start_time,
      "round": options?.round,
      "eof_action": options?.eof_action,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pack two different video streams into a stereoscopic video, setting proper metadata on supported codecs. The two views should have the same size and framerate and processing will stop when the shorter video ends. Please note that you may conveniently adjust view properties with the scale and fps filters. It accepts the following parameters:

 *
 * @param options.format - The desired packing format. Supported values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#framepack
 */
  framepack(
    _right: VideoStream,

    options?: {
    format?: FFInt | "sbs" | "tab" | "frameseq" | "lines" | "columns";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "framepack", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _right],
      merge(
    {
      "format": options?.format,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Change the frame rate by interpolating new video output frames from the source frames. This filter is not designed to function correctly with interlaced media. If you wish to change the frame rate of interlaced media then you are required to deinterlace before this filter and re-interlace after this filter. A description of the accepted options follows.

 *
 * @param options.fps - Specify the output frames per second. This option can also be specified as a value alone. The default is 50.
 * @param options.interp_start - Specify the start of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 15.
 * @param options.interp_end - Specify the end of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 240.
 * @param options.scene - Specify the level at which a scene change is detected as a value between 0 and 100 to indicate a new scene; a low value reflects a low probability for the current frame to introduce a new scene, while a higher value means the current frame is more likely to be one. The default is 8.2.
 * @param options.flags - Specify flags influencing the filter process. Available value for flags is: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#framerate
 */
  framerate(
    options?: {
    fps?: FFVideoRate;
    interp_start?: FFInt;
    interp_end?: FFInt;
    scene?: FFDouble;
    flags?: FFFlags | "scene_change_detect" | "scd";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "framerate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "fps": options?.fps,
      "interp_start": options?.interp_start,
      "interp_end": options?.interp_end,
      "scene": options?.scene,
      "flags": options?.flags,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Select one frame every N-th frame. This filter accepts the following option:

 *
 * @param options.step - Select frame after every step frames. Allowed values are positive integers higher than 0. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#framestep
 */
  framestep(
    options?: {
    step?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "framestep", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "step": options?.step,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect frozen video. This filter logs a message and sets frame metadata when it detects that the input video has no significant change in content during a specified duration. Video freeze detection calculates the mean average absolute difference of all the components of video frames and compares it to a noise floor. The printed times and duration are expressed in seconds. The lavfi.freezedetect.freeze_start metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the freeze. The lavfi.freezedetect.freeze_duration and lavfi.freezedetect.freeze_end metadata keys are set on the first frame after the freeze. The filter accepts the following options:

 *
 * @param options.n - Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or as a difference ratio between 0 and 1. Default is -60dB, or 0.001.
 * @param options.d - Set freeze duration until notification (default is 2 seconds).
 * @see https://ffmpeg.org/ffmpeg-filters.html#freezedetect
 */
  freezedetect(
    options?: {
    n?: FFDouble;
    d?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "freezedetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
      "d": options?.d,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Freeze video frames. This filter freezes video frames using frame from 2nd input. The filter accepts the following options:

 *
 * @param options.first - Set number of first frame from which to start freeze.
 * @param options.last - Set number of last frame from which to end freeze.
 * @param options.replace - Set number of frame from 2nd input which will be used instead of replaced frames.
 * @see https://ffmpeg.org/ffmpeg-filters.html#freezeframes
 */
  freezeframes(
    _replace: VideoStream,

    options?: {
    first?: FFInt64;
    last?: FFInt64;
    replace?: FFInt64;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "freezeframes", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _replace],
      merge(
    {
      "first": options?.first,
      "last": options?.last,
      "replace": options?.replace,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a frei0r effect to the input video. To enable the compilation of this filter, you need to install the frei0r header and configure FFmpeg with --enable-frei0r. It accepts the following parameters:

 *
 * @param options.filter_name - The name of the frei0r effect to load. If the environment variable FREI0R_PATH is defined, the frei0r effect is searched for in each of the directories specified by the colon-separated list in FREI0R_PATH. Otherwise, the standard frei0r paths are searched, in this order: HOME/.frei0r-1/lib/, /usr/local/lib/frei0r-1/, /usr/lib/frei0r-1/.
 * @param options.filter_params - A '|'-separated list of parameters to pass to the frei0r effect.
 * @see https://ffmpeg.org/ffmpeg-filters.html#frei0r
 */
  frei0r(
    options?: {
    filter_name?: FFString;
    filter_params?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "frei0r", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filter_name": options?.filter_name,
      "filter_params": options?.filter_params,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply fast and simple postprocessing. It is a faster version of spp. It splits (I)DCT into horizontal/vertical passes. Unlike the simple post- processing filter, one of them is performed once per block, not per pixel. This allows for much higher speed. The filter accepts the following options:

 *
 * @param options.quality - Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 4-5. Default value is 4.
 * @param options.qp - Force a constant quantization parameter. It accepts an integer in range 0-63. If not set, the filter will use the QP from the video stream (if available).
 * @param options.strength - Set filter strength. It accepts an integer in range -15 to 32. Lower values mean more details but also more artifacts, while higher values make the image smoother but also blurrier. Default value is 0 − PSNR optimal.
 * @param options.use_bframe_qp - Enable the use of the QP from the B-Frames if set to 1. Using this option may cause flicker since the B-Frames have often larger QP. Default is 0 (not enabled).
 * @see https://ffmpeg.org/ffmpeg-filters.html#fspp
 */
  fspp(
    options?: {
    quality?: FFInt;
    qp?: FFInt;
    strength?: FFInt;
    use_bframe_qp?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fspp", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "quality": options?.quality,
      "qp": options?.qp,
      "strength": options?.strength,
      "use_bframe_qp": options?.use_bframe_qp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Synchronize video frames with an external mapping from a file. For each input PTS given in the map file it either drops or creates as many frames as necessary to recreate the sequence of output frames given in the map file. This filter is useful to recreate the output frames of a framerate conversion by the fps filter, recorded into a map file using the ffmpeg option -stats_mux_pre, and do further processing to the corresponding frames e.g. quality comparison. Each line of the map file must contain three items per input frame, the input PTS (decimal), the output PTS (decimal) and the output TIMEBASE (decimal/decimal), separated by a space. This file format corresponds to the output of @code{-stats_mux_pre_fmt="@{ptsi@} @{pts@} @{tb@}"}. The filter assumes the map file is sorted by increasing input PTS. The filter accepts the following options:

 *
 * @param options.file - The filename of the map file to be used.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fsync
 */
  fsync(
    options?: {
    file?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "fsync", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "file": options?.file,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Gaussian blur filter. The filter accepts the following options:

 *
 * @param options.sigma - Set horizontal sigma, standard deviation of Gaussian blur. Default is 0.5.
 * @param options.steps - Set number of steps for Gaussian approximation. Default is 1.
 * @param options.planes - Set which planes to filter. By default all planes are filtered.
 * @param options.sigmaV - Set vertical sigma, if negative it will be same as sigma. Default is -1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#gblur
 */
  gblur(
    options?: {
    sigma?: FFFloat;
    steps?: FFInt;
    planes?: FFInt;
    sigmaV?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "gblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigma": options?.sigma,
      "steps": options?.steps,
      "planes": options?.planes,
      "sigmaV": options?.sigmaV,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Gaussian blur filter on Vulkan frames. The filter accepts the following options:

 *
 * @param options.sigma - Set horizontal sigma, standard deviation of Gaussian blur. Default is 0.5.
 * @param options.sigmaV - Set vertical sigma, if negative it will be same as sigma. Default is -1.
 * @param options.planes - Set which planes to filter. By default all planes are filtered.
 * @param options.size - Set the kernel size along the horizontal axis. Default is 19.
 * @param options.sizeV - Set the kernel size along the vertical axis. Default is 0, which sets to use the same value as size.
 * @see https://ffmpeg.org/ffmpeg-filters.html#gblur_vulkan
 */
  gblur_vulkan(
    options?: {
    sigma?: FFFloat;
    sigmaV?: FFFloat;
    planes?: FFInt;
    size?: FFInt;
    sizeV?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "gblur_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sigma": options?.sigma,
      "sigmaV": options?.sigmaV,
      "planes": options?.planes,
      "size": options?.size,
      "sizeV": options?.sizeV,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply generic equation to each pixel. The filter accepts the following options:

 *
 * @param options.lum_expr - Set the luma expression.
 * @param options.cb_expr - Set the chrominance blue expression.
 * @param options.cr_expr - Set the chrominance red expression.
 * @param options.alpha_expr - Set the alpha expression.
 * @param options.red_expr - Set the red expression.
 * @param options.green_expr - Set the green expression.
 * @param options.blue_expr - Set the blue expression.
 * @param options.interpolation - Set one of interpolation methods: @end table Default is bilinear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#geq
 */
  geq(
    options?: {
    lum_expr?: FFString;
    cb_expr?: FFString;
    cr_expr?: FFString;
    alpha_expr?: FFString;
    red_expr?: FFString;
    green_expr?: FFString;
    blue_expr?: FFString;
    interpolation?: FFInt | "nearest" | "n" | "bilinear" | "b";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "geq", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "lum_expr": options?.lum_expr,
      "cb_expr": options?.cb_expr,
      "cr_expr": options?.cr_expr,
      "alpha_expr": options?.alpha_expr,
      "red_expr": options?.red_expr,
      "green_expr": options?.green_expr,
      "blue_expr": options?.blue_expr,
      "interpolation": options?.interpolation,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Fix the banding artifacts that are sometimes introduced into nearly flat regions by truncation to 8-bit color depth. Interpolate the gradients that should go where the bands are, and dither them. It is designed for playback only. Do not use it prior to lossy compression, because compression tends to lose the dither and bring back the bands. It accepts the following parameters:

 *
 * @param options.strength - The maximum amount by which the filter will change any one pixel. This is also the threshold for detecting nearly flat regions. Acceptable values range from .51 to 64; the default value is 1.2. Out-of-range values will be clipped to the valid range.
 * @param options.radius - The neighborhood to fit the gradient to. A larger radius makes for smoother gradients, but also prevents the filter from modifying the pixels near detailed regions. Acceptable values are 8-32; the default value is 16. Out-of-range values will be clipped to the valid range.
 * @see https://ffmpeg.org/ffmpeg-filters.html#gradfun
 */
  gradfun(
    options?: {
    strength?: FFFloat;
    radius?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "gradfun", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "strength": options?.strength,
      "radius": options?.radius,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Show various filtergraph stats. With this filter one can debug complete filtergraph. Especially issues with links filling with queued frames. The filter accepts the following options:

 *
 * @param options.size - Set video output size. Default is hd720.
 * @param options.opacity - Set video opacity. Default is 0.9. Allowed range is from 0 to 1.
 * @param options.mode - Set output mode flags. Available values for flags are: @end table
 * @param options.flags - Set flags which enable which stats are shown in video. Available values for flags are: @end table
 * @param options.rate - Set upper limit for video rate of output stream, Default value is 25. This guarantee that output video frame rate will not be higher than this value.
 * @see https://ffmpeg.org/ffmpeg-filters.html#graphmonitor
 */
  graphmonitor(
    options?: {
    size?: FFImageSize;
    opacity?: FFFloat;
    mode?: FFFlags | "full" | "compact" | "nozero" | "noeof" | "nodisabled";
    flags?: FFFlags | "none" | "all" | "queue" | "frame_count_in" | "frame_count_out" | "frame_count_delta" | "pts" | "pts_delta" | "time" | "time_delta" | "timebase" | "format" | "size" | "rate" | "eof" | "sample_count_in" | "sample_count_out" | "sample_count_delta" | "disabled";
    rate?: FFVideoRate;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "graphmonitor", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "opacity": options?.opacity,
      "mode": options?.mode,
      "flags": options?.flags,
      "rate": options?.rate,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * A color constancy filter that applies color correction based on the grayworld assumption See: https://www.researchgate.net/publication/275213614_A_New_Color_Correction_Method_for_Underwater_Imaging The algorithm uses linear light, so input data should be linearized beforehand (and possibly correctly tagged). @example ffmpeg -i INPUT -vf zscale=transfer=linear,grayworld,zscale=transfer=bt709,format=yuv420p OUTPUT @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#grayworld
 */
  grayworld(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "grayworld", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * A color constancy variation filter which estimates scene illumination via grey edge algorithm and corrects the scene colors accordingly. See: https://staff.science.uva.nl/th.gevers/pub/GeversTIP07.pdf The filter accepts the following options:

 *
 * @param options.difford - The order of differentiation to be applied on the scene. Must be chosen in the range [0,2] and default value is 1.
 * @param options.minknorm - The Minkowski parameter to be used for calculating the Minkowski distance. Must be chosen in the range [0,20] and default value is 1. Set to 0 for getting max value instead of calculating Minkowski distance.
 * @param options.sigma - The standard deviation of Gaussian blur to be applied on the scene. Must be chosen in the range [0,1024.0] and default value = 1. floor( sigma * break_off_sigma(3) ) can't be equal to 0 if difford is greater than 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#greyedge
 */
  greyedge(
    options?: {
    difford?: FFInt;
    minknorm?: FFInt;
    sigma?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "greyedge", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "difford": options?.difford,
      "minknorm": options?.minknorm,
      "sigma": options?.sigma,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Apply a Hald CLUT to a video stream. First input is the video stream to process, and second one is the Hald CLUT. The Hald CLUT input can be a simple picture or a complete video stream. The filter accepts the following options:

 *
 * @param options.clut - Set which CLUT video frames will be processed from second input stream, can be first or all. Default is all.
 * @param options.interp - select interpolation mode (from 0 to 4) (default tetrahedral)
 * @see https://ffmpeg.org/ffmpeg-filters.html#haldclut
 */
  haldclut(
    _clut: VideoStream,

    options?: {
    clut?: FFInt | "first" | "all";
    interp?: FFInt | "nearest" | "trilinear" | "tetrahedral" | "pyramid" | "prism";
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "haldclut", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _clut],
      merge(
    {
      "clut": options?.clut,
      "interp": options?.interp,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Flip the input video horizontally. For example, to horizontally flip the input video with ffmpeg: @example ffmpeg -i in.avi -vf "hflip" out.avi @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#hflip
 */
  hflip(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hflip", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Flips an image horizontally.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#hflip_vulkan
 */
  hflip_vulkan(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hflip_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * This filter applies a global color histogram equalization on a per-frame basis. It can be used to correct video that has a compressed range of pixel intensities. The filter redistributes the pixel intensities to equalize their distribution across the intensity range. It may be viewed as an "automatically adjusting contrast filter". This filter is useful only for correcting degraded or poorly captured source video. The filter accepts the following options:

 *
 * @param options.strength - Determine the amount of equalization to be applied. As the strength is reduced, the distribution of pixel intensities more-and-more approaches that of the input frame. The value must be a float number in the range [0,1] and defaults to 0.200.
 * @param options.intensity - Set the maximum intensity that can generated and scale the output values appropriately. The strength should be set as desired and then the intensity can be limited if needed to avoid washing-out. The value must be a float number in the range [0,1] and defaults to 0.210.
 * @param options.antibanding - Set the antibanding level. If enabled the filter will randomly vary the luminance of output pixels by a small amount to avoid banding of the histogram. Possible values are none, weak or strong. It defaults to none.
 * @see https://ffmpeg.org/ffmpeg-filters.html#histeq
 */
  histeq(
    options?: {
    strength?: FFFloat;
    intensity?: FFFloat;
    antibanding?: FFInt | "none" | "weak" | "strong";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "histeq", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "strength": options?.strength,
      "intensity": options?.intensity,
      "antibanding": options?.antibanding,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Compute and draw a color distribution histogram for the input video. The computed histogram is a representation of the color component distribution in an image. Standard histogram displays the color components distribution in an image. Displays color graph for each color component. Shows distribution of the Y, U, V, A or R, G, B components, depending on input format, in the current frame. Below each graph a color component scale meter is shown. The filter accepts the following options:

 *
 * @param options.level_height - Set height of level. Default value is 200. Allowed range is [50, 2048].
 * @param options.scale_height - Set height of color scale. Default value is 12. Allowed range is [0, 40].
 * @param options.display_mode - Set display mode. It accepts the following values: @end table Default is stack.
 * @param options.levels_mode - Set mode. Can be either linear, or logarithmic. Default is linear.
 * @param options.components - Set what color components to display. Default is 7.
 * @param options.fgopacity - Set foreground opacity. Default is 0.7.
 * @param options.bgopacity - Set background opacity. Default is 0.5.
 * @param options.colors_mode - Set colors mode. It accepts the following values: @end table Default is whiteonblack.
 * @see https://ffmpeg.org/ffmpeg-filters.html#histogram
 */
  histogram(
    options?: {
    level_height?: FFInt;
    scale_height?: FFInt;
    display_mode?: FFInt | "overlay" | "parade" | "stack";
    levels_mode?: FFInt | "linear" | "logarithmic";
    components?: FFInt;
    fgopacity?: FFFloat;
    bgopacity?: FFFloat;
    colors_mode?: FFInt | "whiteonblack" | "blackonwhite" | "whiteongray" | "blackongray" | "coloronblack" | "coloronwhite" | "colorongray" | "blackoncolor" | "whiteoncolor" | "grayoncolor";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "histogram", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "level_height": options?.level_height,
      "scale_height": options?.scale_height,
      "display_mode": options?.display_mode,
      "levels_mode": options?.levels_mode,
      "components": options?.components,
      "fgopacity": options?.fgopacity,
      "bgopacity": options?.bgopacity,
      "colors_mode": options?.colors_mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * This is a high precision/quality 3d denoise filter. It aims to reduce image noise, producing smooth images and making still images really still. It should enhance compressibility. It accepts the following optional parameters:

 *
 * @param options.luma_spatial - A non-negative floating point number which specifies spatial luma strength. It defaults to 4.0.
 * @param options.chroma_spatial - A non-negative floating point number which specifies spatial chroma strength. It defaults to 3.0*luma_spatial/4.0.
 * @param options.luma_tmp - A floating point number which specifies luma temporal strength. It defaults to 6.0*luma_spatial/4.0.
 * @param options.chroma_tmp - A floating point number which specifies chroma temporal strength. It defaults to luma_tmp*chroma_spatial/luma_spatial.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hqdn3d
 */
  hqdn3d(
    options?: {
    luma_spatial?: FFDouble;
    chroma_spatial?: FFDouble;
    luma_tmp?: FFDouble;
    chroma_tmp?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hqdn3d", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_spatial": options?.luma_spatial,
      "chroma_spatial": options?.chroma_spatial,
      "luma_tmp": options?.luma_tmp,
      "chroma_tmp": options?.chroma_tmp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a high-quality magnification filter designed for pixel art. This filter was originally created by Maxim Stepin. It accepts the following option:

 *
 * @param options.n - Set the scaling dimension: 2 for hq2x, 3 for hq3x and 4 for hq4x. Default is 3.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hqx
 */
  hqx(
    options?: {
    n?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hqx", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Turns a certain HSV range into gray values. This filter measures color difference between set HSV color in options and ones measured in video stream. Depending on options, output colors can be changed to be gray or not. The filter accepts the following options:

 *
 * @param options.hue - Set the hue value which will be used in color difference calculation. Allowed range is from -360 to 360. Default value is 0.
 * @param options.sat - Set the saturation value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
 * @param options.val - Set the value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
 * @param options.similarity - Set similarity percentage with the key color. Allowed range is from 0 to 1. Default value is 0.01. 0.00001 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. Allowed range is from 0 to 1. Default value is 0. 0.0 makes pixels either fully gray, or not gray at all. Higher values result in more gray pixels, with a higher gray pixel the more similar the pixels color is to the key color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hsvhold
 */
  hsvhold(
    options?: {
    hue?: FFFloat;
    sat?: FFFloat;
    val?: FFFloat;
    similarity?: FFFloat;
    blend?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hsvhold", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "hue": options?.hue,
      "sat": options?.sat,
      "val": options?.val,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Turns a certain HSV range into transparency. This filter measures color difference between set HSV color in options and ones measured in video stream. Depending on options, output colors can be changed to transparent by adding alpha channel. The filter accepts the following options:

 *
 * @param options.hue - Set the hue value which will be used in color difference calculation. Allowed range is from -360 to 360. Default value is 0.
 * @param options.sat - Set the saturation value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
 * @param options.val - Set the value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
 * @param options.similarity - Set similarity percentage with the key color. Allowed range is from 0 to 1. Default value is 0.01. 0.00001 matches only the exact key color, while 1.0 matches everything.
 * @param options.blend - Blend percentage. Allowed range is from 0 to 1. Default value is 0. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hsvkey
 */
  hsvkey(
    options?: {
    hue?: FFFloat;
    sat?: FFFloat;
    val?: FFFloat;
    similarity?: FFFloat;
    blend?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hsvkey", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "hue": options?.hue,
      "sat": options?.sat,
      "val": options?.val,
      "similarity": options?.similarity,
      "blend": options?.blend,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Modify the hue and/or the saturation of the input. It accepts the following parameters:

 *
 * @param options.h - set the hue angle degrees expression
 * @param options.s - set the saturation expression (default "1")
 * @param options.H - Modify the hue and/or the saturation and/or brightness of the input video. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.b - set the brightness expression (default "0")
 * @see https://ffmpeg.org/ffmpeg-filters.html#hue
 */
  hue(
    options?: {
    h?: FFString;
    s?: FFString;
    H?: FFString;
    b?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hue", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "h": options?.h,
      "s": options?.s,
      "H": options?.H,
      "b": options?.b,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply hue-saturation-intensity adjustments to input video stream. This filter operates in RGB colorspace. This filter accepts the following options:

 *
 * @param options.hue - Set the hue shift in degrees to apply. Default is 0. Allowed range is from -180 to 180.
 * @param options.saturation - Set the saturation shift. Default is 0. Allowed range is from -1 to 1.
 * @param options.intensity - Set the intensity shift. Default is 0. Allowed range is from -1 to 1.
 * @param options.colors - Set which primary and complementary colors are going to be adjusted. This options is set by providing one or multiple values. This can select multiple colors at once. By default all colors are selected. @end table
 * @param options.strength - Set strength of filtering. Allowed range is from 0 to 100. Default value is 1.
 * @param options.rw - Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
 * @param options.gw - Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
 * @param options.bw - Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
 * @param options.lightness - Set preserving lightness, by default is disabled. Adjusting hues can change lightness from original RGB triplet, with this option enabled lightness is kept at same value.
 * @see https://ffmpeg.org/ffmpeg-filters.html#huesaturation
 */
  huesaturation(
    options?: {
    hue?: FFFloat;
    saturation?: FFFloat;
    intensity?: FFFloat;
    colors?: FFFlags | "r" | "y" | "g" | "c" | "b" | "m" | "a";
    strength?: FFFloat;
    rw?: FFFloat;
    gw?: FFFloat;
    bw?: FFFloat;
    lightness?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "huesaturation", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "hue": options?.hue,
      "saturation": options?.saturation,
      "intensity": options?.intensity,
      "colors": options?.colors,
      "strength": options?.strength,
      "rw": options?.rw,
      "gw": options?.gw,
      "bw": options?.bw,
      "lightness": options?.lightness,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Download hardware frames to system memory. The input must be in hardware frames, and the output a non-hardware format. Not all formats will be supported on the output - it may be necessary to insert an additional format filter immediately following in the graph to get the output in a supported format.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#hwdownload
 */
  hwdownload(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hwdownload", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Map hardware frames to system memory or to another device. This filter has several different modes of operation; which one is used depends on the input and output formats:

 *
 * @param options.mode - Set the frame mapping mode. Some combination of: @end table Defaults to read+write if not specified.
 * @param options.derive_device - Derive a new device of this type
 * @param options.reverse - In a hardware to hardware mapping, map in reverse - create frames in the sink and map them back to the source. This may be necessary in some cases where a mapping in one direction is required but only the opposite direction is supported by the devices being used. This option is dangerous - it may break the preceding filter in undefined ways if there are any additional constraints on that filter's output. Do not use it without fully understanding the implications of its use.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hwmap
 */
  hwmap(
    options?: {
    mode?: FFFlags | "read" | "write" | "overwrite" | "direct";
    derive_device?: FFString;
    reverse?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hwmap", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "derive_device": options?.derive_device,
      "reverse": options?.reverse,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Upload system memory frames to hardware surfaces. The device to upload to must be supplied when the filter is initialised. If using ffmpeg, select the appropriate device with the -filter_hw_device option or with the derive_device option. The input and output devices must be of different types and compatible - the exact meaning of this is system-dependent, but typically it means that they must refer to the same underlying hardware context (for example, refer to the same graphics card). The following additional parameters are accepted:

 *
 * @param options.derive_device - Derive a new device of this type
 * @see https://ffmpeg.org/ffmpeg-filters.html#hwupload
 */
  hwupload(
    options?: {
    derive_device?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hwupload", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "derive_device": options?.derive_device,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Upload system memory frames to a CUDA device. It accepts the following optional parameters:

 *
 * @param options.device - The number of the CUDA device to use
 * @see https://ffmpeg.org/ffmpeg-filters.html#hwupload_cuda
 */
  hwupload_cuda(
    options?: {
    device?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hwupload_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "device": options?.device,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Grow first stream into second stream by connecting components. This makes it possible to build more robust edge masks. This filter accepts the following options:

 *
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @param options.threshold - Set threshold which is used in filtering. If pixel component value is higher than this value filter algorithm for connecting components is activated. By default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hysteresis
 */
  hysteresis(
    _alt: VideoStream,

    options?: {
    planes?: FFInt;
    threshold?: FFInt;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "hysteresis", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _alt],
      merge(
    {
      "planes": options?.planes,
      "threshold": options?.threshold,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Obtain the identity score between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained per component, average, min and max identity score is printed through the logging system. The filter stores the calculated identity scores of each frame in frame metadata. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi identity -f null - @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#identity
 */
  identity(
    _reference: VideoStream,

    options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "identity", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect video interlacing type. This filter tries to detect if the input frames are interlaced, progressive, top or bottom field first. It will also try to detect fields that are repeated between adjacent frames (a sign of telecine). Single frame detection considers only immediately adjacent frames when classifying each frame. Multiple frame detection incorporates the classification history of previous frames. The filter will log these metadata values:

 *
 * @param options.intl_thres - Set interlacing threshold.
 * @param options.prog_thres - Set progressive threshold.
 * @param options.rep_thres - Threshold for repeated field detection.
 * @param options.half_life - Number of frames after which a given frame's contribution to the statistics is halved (i.e., it contributes only 0.5 to its classification). The default of 0 means that all frames seen are given full weight of 1.0 forever.
 * @param options.analyze_interlaced_flag - When this is not 0 then idet will use the specified number of frames to determine if the interlaced flag is accurate, it will not count undetermined frames. If the flag is found to be accurate it will be used without any further computations, if it is found to be inaccurate it will be cleared without any further computations. This allows inserting the idet filter as a low computational method to clean up the interlaced flag
 * @see https://ffmpeg.org/ffmpeg-filters.html#idet
 */
  idet(
    options?: {
    intl_thres?: FFFloat;
    prog_thres?: FFFloat;
    rep_thres?: FFFloat;
    half_life?: FFFloat;
    analyze_interlaced_flag?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "idet", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "intl_thres": options?.intl_thres,
      "prog_thres": options?.prog_thres,
      "rep_thres": options?.rep_thres,
      "half_life": options?.half_life,
      "analyze_interlaced_flag": options?.analyze_interlaced_flag,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterleave or interleave fields. This filter allows one to process interlaced images fields without deinterlacing them. Deinterleaving splits the input frame into 2 fields (so called half pictures). Odd lines are moved to the top half of the output image, even lines to the bottom half. You can process (filter) them independently and then re-interleave them. The filter accepts the following options:

 *
 * @param options.luma_mode - select luma mode (from 0 to 2) (default none)
 * @param options.chroma_mode - select chroma mode (from 0 to 2) (default none)
 * @param options.alpha_mode - Available values for luma_mode, chroma_mode and alpha_mode are: @end table Default value is none.
 * @param options.luma_swap - swap luma fields (default false)
 * @param options.chroma_swap - swap chroma fields (default false)
 * @param options.alpha_swap - Swap luma/chroma/alpha fields. Exchange even & odd lines. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#il
 */
  il(
    options?: {
    luma_mode?: FFInt | "none" | "interleave" | "i" | "deinterleave" | "d";
    chroma_mode?: FFInt | "none" | "interleave" | "i" | "deinterleave" | "d";
    alpha_mode?: FFInt | "none" | "interleave" | "i" | "deinterleave" | "d";
    luma_swap?: FFBoolean;
    chroma_swap?: FFBoolean;
    alpha_swap?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "il", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_mode": options?.luma_mode,
      "chroma_mode": options?.chroma_mode,
      "alpha_mode": options?.alpha_mode,
      "luma_swap": options?.luma_swap,
      "chroma_swap": options?.chroma_swap,
      "alpha_swap": options?.alpha_swap,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply inflate effect to the video. This filter replaces the pixel by the local(3x3) average by taking into account only values higher than the pixel. It accepts the following options:

 *
 * @param options.threshold0 - set threshold for 1st plane (from 0 to 65535) (default 65535)
 * @param options.threshold1 - set threshold for 2nd plane (from 0 to 65535) (default 65535)
 * @param options.threshold2 - set threshold for 3rd plane (from 0 to 65535) (default 65535)
 * @param options.threshold3 - Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
 * @see https://ffmpeg.org/ffmpeg-filters.html#inflate
 */
  inflate(
    options?: {
    threshold0?: FFInt;
    threshold1?: FFInt;
    threshold2?: FFInt;
    threshold3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "inflate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold0": options?.threshold0,
      "threshold1": options?.threshold1,
      "threshold2": options?.threshold2,
      "threshold3": options?.threshold3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Simple interlacing filter from progressive contents. This interleaves upper (or lower) lines from odd frames with lower (or upper) lines from even frames, halving the frame rate and preserving image height. @example Original Original New Frame Frame 'j' Frame 'j+1' (tff) ========== =========== ================== Line 0 --------------------> Frame 'j' Line 0 Line 1 Line 1 ----> Frame 'j+1' Line 1 Line 2 ---------------------> Frame 'j' Line 2 Line 3 Line 3 ----> Frame 'j+1' Line 3 ... ... ... New Frame + 1 will be generated by Frame 'j+2' and Frame 'j+3' and so on @end example It accepts the following optional parameters:

 *
 * @param options.scan - This determines whether the interlaced frame is taken from the even (tff - default) or odd (bff) lines of the progressive frame.
 * @param options.lowpass - Vertical lowpass filter to avoid twitter interlacing and reduce moire patterns. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#interlace
 */
  interlace(
    options?: {
    scan?: FFInt | "tff" | "bff";
    lowpass?: FFInt | "off" | "linear" | "complex";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "interlace", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "scan": options?.scan,
      "lowpass": options?.lowpass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Simple interlacing filter from progressive contents. This interleaves upper (or lower) lines from odd frames with lower (or upper) lines from even frames, halving the frame rate and preserving image height. @example Original Original New Frame Frame 'j' Frame 'j+1' (tff) ========== =========== ================== Line 0 --------------------> Frame 'j' Line 0 Line 1 Line 1 ----> Frame 'j+1' Line 1 Line 2 ---------------------> Frame 'j' Line 2 Line 3 Line 3 ----> Frame 'j+1' Line 3 ... ... ... New Frame + 1 will be generated by Frame 'j+2' and Frame 'j+3' and so on @end example It accepts the following optional parameters:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.scan - This determines whether the interlaced frame is taken from the even (tff - default) or odd (bff) lines of the progressive frame.
 * @param options.lowpass - Vertical lowpass filter to avoid twitter interlacing and reduce moire patterns. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#interlace
 */
  interlace_vulkan(
    options?: {
    scan?: FFInt | "tff" | "bff";
    lowpass?: FFInt | "off" | "linear" | "complex";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "interlace_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "scan": options?.scan,
      "lowpass": options?.lowpass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Deinterlace input video by applying Donald Graft's adaptive kernel deinterling. Work on interlaced parts of a video to produce progressive frames. The description of the accepted parameters follows.

 *
 * @param options.thresh - Set the threshold which affects the filter's tolerance when determining if a pixel line must be processed. It must be an integer in the range [0,255] and defaults to 10. A value of 0 will result in applying the process on every pixels.
 * @param options.map - Paint pixels exceeding the threshold value to white if set to 1. Default is 0.
 * @param options.order - Set the fields order. Swap fields if set to 1, leave fields alone if 0. Default is 0.
 * @param options.sharp - Enable additional sharpening if set to 1. Default is 0.
 * @param options.twoway - Enable twoway sharpening if set to 1. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#kerndeint
 */
  kerndeint(
    options?: {
    thresh?: FFInt;
    map?: FFBoolean;
    order?: FFBoolean;
    sharp?: FFBoolean;
    twoway?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "kerndeint", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "thresh": options?.thresh,
      "map": options?.map,
      "order": options?.order,
      "sharp": options?.sharp,
      "twoway": options?.twoway,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply kirsch operator to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.scale - Set value which will be multiplied with filtered result.
 * @param options.delta - Set value which will be added to filtered result.
 * @see https://ffmpeg.org/ffmpeg-filters.html#kirsch
 */
  kirsch(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "kirsch", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Slowly update darker pixels. This filter makes short flashes of light appear longer. This filter accepts the following options:

 *
 * @param options.decay - Set factor for decaying. Default is .95. Allowed range is from 0 to 1.
 * @param options.planes - Set which planes to filter. Default is all. Allowed range is from 0 to 15.
 * @see https://ffmpeg.org/ffmpeg-filters.html#lagfun
 */
  lagfun(
    options?: {
    decay?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lagfun", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "decay": options?.decay,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Measure filtering latency. Report previous filter filtering latency, delay in number of audio samples for audio filters or number of video frames for video filters. On end of input stream, filter will report min and max measured latency for previous running filter in filtergraph.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#latency
 */
  latency(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "latency", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Correct radial lens distortion This filter can be used to correct for radial distortion as can result from the use of wide angle lenses, and thereby re-rectify the image. To find the right parameters one can use tools available for example as part of opencv or simply trial-and-error. To use opencv use the calibration sample (under samples/cpp) from the opencv sources and extract the k1 and k2 coefficients from the resulting matrix. Note that effectively the same filter is available in the open-source tools Krita and Digikam from the KDE project. In contrast to the vignette filter, which can also be used to compensate lens errors, this filter corrects the distortion of the image, whereas vignette corrects the brightness distribution, so you may want to use both filters together in certain cases, though you will have to take care of ordering, i.e. whether vignetting should be applied before or after lens correction.

 *
 * @param options.cx - Relative x-coordinate of the focal point of the image, and thereby the center of the distortion. This value has a range [0,1] and is expressed as fractions of the image width. Default is 0.5.
 * @param options.cy - Relative y-coordinate of the focal point of the image, and thereby the center of the distortion. This value has a range [0,1] and is expressed as fractions of the image height. Default is 0.5.
 * @param options.k1 - Coefficient of the quadratic correction term. This value has a range [-1,1]. 0 means no correction. Default is 0.
 * @param options.k2 - Coefficient of the double quadratic correction term. This value has a range [-1,1]. 0 means no correction. Default is 0.
 * @param options.i - Set interpolation type. Can be nearest or bilinear. Default is nearest.
 * @param options.fc - Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black@0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#lenscorrection
 */
  lenscorrection(
    options?: {
    cx?: FFDouble;
    cy?: FFDouble;
    k1?: FFDouble;
    k2?: FFDouble;
    i?: FFInt | "nearest" | "bilinear";
    fc?: FFColor;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lenscorrection", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cx": options?.cx,
      "cy": options?.cy,
      "k1": options?.k1,
      "k2": options?.k2,
      "i": options?.i,
      "fc": options?.fc,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Limits the pixel components values to the specified range [min, max]. The filter accepts the following options:

 *
 * @param options.min - Lower bound. Defaults to the lowest allowed value for the input.
 * @param options.max - Upper bound. Defaults to the highest allowed value for the input.
 * @param options.planes - Specify which planes will be processed. Defaults to all available.
 * @see https://ffmpeg.org/ffmpeg-filters.html#limiter
 */
  limiter(
    options?: {
    min?: FFInt;
    max?: FFInt;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "limiter", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "min": options?.min,
      "max": options?.max,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Loop video frames. The filter accepts the following options:

 *
 * @param options.loop - Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0.
 * @param options.size - Set maximal size in number of frames. Default is 0.
 * @param options.start - Set first frame of loop. Default is 0.
 * @param options.time - Set the time of loop start in seconds. Only used if option named start is set to -1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#loop
 */
  loop(
    options?: {
    loop?: FFInt;
    size?: FFInt64;
    start?: FFInt64;
    time?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "loop", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "loop": options?.loop,
      "size": options?.size,
      "start": options?.start,
      "time": options?.time,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Turn certain luma values into transparency. The filter accepts the following options:

 *
 * @param options.threshold - Set the luma which will be used as base for transparency. Default value is 0.
 * @param options.tolerance - Set the range of luma values to be keyed out. Default value is 0.01.
 * @param options.softness - Set the range of softness. Default value is 0. Use this to control gradual transition from zero to full transparency.
 * @see https://ffmpeg.org/ffmpeg-filters.html#lumakey
 */
  lumakey(
    options?: {
    threshold?: FFDouble;
    tolerance?: FFDouble;
    softness?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lumakey", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "tolerance": options?.tolerance,
      "softness": options?.softness,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Compute a look-up table for binding each pixel component input value to an output value, and apply it to the input video. lutyuv applies a lookup table to a YUV input video, lutrgb to an RGB input video. These filters accept the following parameters:

 *
 * @param options.c0 - set first pixel component expression
 * @param options.c1 - set second pixel component expression
 * @param options.c2 - set third pixel component expression
 * @param options.c3 - set fourth pixel component expression, corresponds to the alpha component
 * @param options.y - set Y/luma component expression
 * @param options.u - set U/Cb component expression
 * @param options.v - set V/Cr component expression
 * @param options.r - set red component expression
 * @param options.g - set green component expression
 * @param options.b - set blue component expression
 * @param options.a - alpha component expression
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut
 */
  lut(
    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    y?: FFString;
    u?: FFString;
    v?: FFString;
    r?: FFString;
    g?: FFString;
    b?: FFString;
    a?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lut", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "y": options?.y,
      "u": options?.u,
      "v": options?.v,
      "r": options?.r,
      "g": options?.g,
      "b": options?.b,
      "a": options?.a,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a 1D LUT to an input video. The filter accepts the following options:

 *
 * @param options.file - Set the 1D LUT file name. Currently supported formats: @end table
 * @param options.interp - Select interpolation mode. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut1d
 */
  lut1d(
    options?: {
    file?: FFString;
    interp?: FFInt | "nearest" | "linear" | "cosine" | "cubic" | "spline";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lut1d", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "file": options?.file,
      "interp": options?.interp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The lut2 filter takes two input streams and outputs one stream. The tlut2 (time lut2) filter takes two consecutive frames from one single stream. This filter accepts the following parameters:

 *
 * @param options.c0 - set first pixel component expression
 * @param options.c1 - set second pixel component expression
 * @param options.c2 - set third pixel component expression
 * @param options.c3 - set fourth pixel component expression, corresponds to the alpha component
 * @param options.d - set output bit depth, only available for lut2 filter. By default is 0, which means bit depth is automatically picked from first input format.
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut2
 */
  lut2(
    _srcy: VideoStream,

    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    d?: FFInt;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lut2", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _srcy],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "d": options?.d,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a 3D LUT to an input video. The filter accepts the following options:

 *
 * @param options.file - Set the 3D LUT file name. Currently supported formats: @end table
 * @param options.clut - when to process CLUT (from 0 to 1) (default all)
 * @param options.interp - Select interpolation mode. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut3d
 */
  lut3d(
    options?: {
    file?: FFString;
    clut?: FFInt | "first" | "all";
    interp?: FFInt | "nearest" | "trilinear" | "tetrahedral" | "pyramid" | "prism";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lut3d", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "file": options?.file,
      "clut": options?.clut,
      "interp": options?.interp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Compute a look-up table for binding each pixel component input value to an output value, and apply it to the input video. lutyuv applies a lookup table to a YUV input video, lutrgb to an RGB input video. These filters accept the following parameters:

 *
 * @param options.c0 - set first pixel component expression
 * @param options.c1 - set second pixel component expression
 * @param options.c2 - set third pixel component expression
 * @param options.c3 - set fourth pixel component expression, corresponds to the alpha component
 * @param options.y - set Y/luma component expression
 * @param options.u - set U/Cb component expression
 * @param options.v - set V/Cr component expression
 * @param options.r - set red component expression
 * @param options.g - set green component expression
 * @param options.b - set blue component expression
 * @param options.a - alpha component expression
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut
 */
  lutrgb(
    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    y?: FFString;
    u?: FFString;
    v?: FFString;
    r?: FFString;
    g?: FFString;
    b?: FFString;
    a?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lutrgb", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "y": options?.y,
      "u": options?.u,
      "v": options?.v,
      "r": options?.r,
      "g": options?.g,
      "b": options?.b,
      "a": options?.a,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Compute a look-up table for binding each pixel component input value to an output value, and apply it to the input video. lutyuv applies a lookup table to a YUV input video, lutrgb to an RGB input video. These filters accept the following parameters:

 *
 * @param options.c0 - set first pixel component expression
 * @param options.c1 - set second pixel component expression
 * @param options.c2 - set third pixel component expression
 * @param options.c3 - set fourth pixel component expression, corresponds to the alpha component
 * @param options.y - set Y/luma component expression
 * @param options.u - set U/Cb component expression
 * @param options.v - set V/Cr component expression
 * @param options.r - set red component expression
 * @param options.g - set green component expression
 * @param options.b - set blue component expression
 * @param options.a - alpha component expression
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut
 */
  lutyuv(
    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    y?: FFString;
    u?: FFString;
    v?: FFString;
    r?: FFString;
    g?: FFString;
    b?: FFString;
    a?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "lutyuv", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "y": options?.y,
      "u": options?.u,
      "v": options?.v,
      "r": options?.r,
      "g": options?.g,
      "b": options?.b,
      "a": options?.a,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Clamp the first input stream with the second input and third input stream. Returns the value of first stream to be between second input stream - undershoot and third input stream + overshoot. This filter accepts the following options:

 *
 * @param options.undershoot - Default value is 0.
 * @param options.overshoot - Default value is 0.
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedclamp
 */
  maskedclamp(
    _dark: VideoStream,
    _bright: VideoStream,

    options?: {
    undershoot?: FFInt;
    overshoot?: FFInt;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskedclamp", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _dark, _bright],
      merge(
    {
      "undershoot": options?.undershoot,
      "overshoot": options?.overshoot,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Merge the second and third input stream into output stream using absolute differences between second input stream and first input stream and absolute difference between third input stream and first input stream. The picked value will be from second input stream if second absolute difference is greater than first one or from third input stream otherwise. This filter accepts the following options:

 *
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedmax
 */
  maskedmax(
    _filter1: VideoStream,
    _filter2: VideoStream,

    options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskedmax", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _filter1, _filter2],
      merge(
    {
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Merge the first input stream with the second input stream using per pixel weights in the third input stream. A value of 0 in the third stream pixel component means that pixel component from first stream is returned unchanged, while maximum value (eg. 255 for 8-bit videos) means that pixel component from second stream is returned unchanged. Intermediate values define the amount of merging between both input stream's pixel components. This filter accepts the following options:

 *
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedmerge
 */
  maskedmerge(
    _overlay: VideoStream,
    _mask: VideoStream,

    options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskedmerge", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _overlay, _mask],
      merge(
    {
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Merge the second and third input stream into output stream using absolute differences between second input stream and first input stream and absolute difference between third input stream and first input stream. The picked value will be from second input stream if second absolute difference is less than first one or from third input stream otherwise. This filter accepts the following options:

 *
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedmin
 */
  maskedmin(
    _filter1: VideoStream,
    _filter2: VideoStream,

    options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskedmin", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _filter1, _filter2],
      merge(
    {
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pick pixels comparing absolute difference of two video streams with fixed threshold. If absolute difference between pixel component of first and second video stream is equal or lower than user supplied threshold than pixel component from first video stream is picked, otherwise pixel component from second video stream is picked. This filter accepts the following options:

 *
 * @param options.threshold - Set threshold used when picking pixels from absolute difference from two input video streams.
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from second stream. By default value 0xf, all planes will be processed.
 * @param options.mode - Set mode of filter operation. Can be abs or diff. Default is abs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedthreshold
 */
  maskedthreshold(
    _reference: VideoStream,

    options?: {
    threshold?: FFInt;
    planes?: FFInt;
    mode?: FFInt | "abs" | "diff";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskedthreshold", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "threshold": options?.threshold,
      "planes": options?.planes,
      "mode": options?.mode,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Create mask from input video. For example it is useful to create motion masks after tblend filter. This filter accepts the following options:

 *
 * @param options.low - Set low threshold. Any pixel component lower or exact than this value will be set to 0.
 * @param options.high - Set high threshold. Any pixel component higher than this value will be set to max value allowed for current pixel format.
 * @param options.planes - Set planes to filter, by default all available planes are filtered.
 * @param options.fill - Fill all frame pixels with this value.
 * @param options.sum - Set max average pixel value for frame. If sum of all pixel components is higher that this average, output frame will be completely filled with value set by fill option. Typically useful for scene changes when used in combination with tblend filter.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskfun
 */
  maskfun(
    options?: {
    low?: FFInt;
    high?: FFInt;
    planes?: FFInt;
    fill?: FFInt;
    sum?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "maskfun", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "low": options?.low,
      "high": options?.high,
      "planes": options?.planes,
      "fill": options?.fill,
      "sum": options?.sum,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply motion-compensation deinterlacing. It needs one field per frame as input and must thus be used together with yadif=1/3 or equivalent. This filter accepts the following options:

 *
 * @param options.mode - Set the deinterlacing mode. It accepts one of the following values: @end table Default value is fast.
 * @param options.parity - Set the picture field parity assumed for the input video. It must be one of the following values: @end table Default value is bff.
 * @param options.qp - Set per-block quantization parameter (QP) used by the internal encoder. Higher values should result in a smoother motion vector field but less optimal individual vectors. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mcdeint
 */
  mcdeint(
    options?: {
    mode?: FFInt | "fast" | "medium" | "slow" | "extra_slow";
    parity?: FFInt | "tff" | "bff";
    qp?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "mcdeint", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "qp": options?.qp,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Pick median pixel from certain rectangle defined by radius. This filter accepts the following options:

 *
 * @param options.radius - Set horizontal radius size. Default value is 1. Allowed range is integer from 1 to 127.
 * @param options.planes - Set which planes to process. Default is 15, which is all available planes.
 * @param options.radiusV - Set vertical radius size. Default value is 0. Allowed range is integer from 0 to 127. If it is 0, value will be picked from horizontal radius option.
 * @param options.percentile - Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
 * @see https://ffmpeg.org/ffmpeg-filters.html#median
 */
  median(
    options?: {
    radius?: FFInt;
    planes?: FFInt;
    radiusV?: FFInt;
    percentile?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "median", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "radius": options?.radius,
      "planes": options?.planes,
      "radiusV": options?.radiusV,
      "percentile": options?.percentile,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Estimate and export motion vectors using block matching algorithms. Motion vectors are stored in frame side data to be used by other filters. This filter accepts the following options:

 *
 * @param options.method - Specify the motion estimation method. Accepts one of the following values: @end table Default value is esa.
 * @param options.mb_size - Macroblock size. Default 16.
 * @param options.search_param - Search parameter. Default 7.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mestimate
 */
  mestimate(
    options?: {
    method?: FFInt | "esa" | "tss" | "tdls" | "ntss" | "fss" | "ds" | "hexbs" | "epzs" | "umh";
    mb_size?: FFInt;
    search_param?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "mestimate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "method": options?.method,
      "mb_size": options?.mb_size,
      "search_param": options?.search_param,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Manipulate frame metadata. This filter accepts the following options:

 *
 * @param options.mode - Set mode of operation of the filter. Can be one of the following: @end table
 * @param options.key - Set key used with all modes. Must be set for all modes except print and delete.
 * @param options.value - Set metadata value which will be used. This option is mandatory for modify and add mode.
 * @param options._function - Which function to use when comparing metadata value and value. Can be one of following: @end table
 * @param options.expr - Set expression which is used when function is set to expr. The expression is evaluated through the eval API and can contain the following constants: @end table
 * @param options.file - If specified in print mode, output is written to the named file. Instead of plain filename any writable url can be specified. Filename ``-'' is a shorthand for standard output. If file option is not set, output is written to the log with AV_LOG_INFO loglevel.
 * @param options.direct - Reduces buffering in print mode when output is written to a URL set using file.
 * @see https://ffmpeg.org/ffmpeg-filters.html#metadata
 */
  metadata(
    options?: {
    mode?: FFInt | "select" | "add" | "modify" | "delete" | "print";
    key?: FFString;
    value?: FFString;
    _function?: FFInt | "same_str" | "starts_with" | "less" | "equal" | "greater" | "expr" | "ends_with";
    expr?: FFString;
    file?: FFString;
    direct?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "metadata", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "key": options?.key,
      "value": options?.value,
      "function": options?._function,
      "expr": options?.expr,
      "file": options?.file,
      "direct": options?.direct,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Midway Image Equalization effect using two video streams. Midway Image Equalization adjusts a pair of images to have the same histogram, while maintaining their dynamics as much as possible. It's useful for e.g. matching exposures from a pair of stereo cameras. This filter has two inputs and one output, which must be of same pixel format, but may be of different sizes. The output of filter is first input adjusted with midway histogram of both inputs. This filter accepts the following option:

 *
 * @param options.planes - Set which planes to process. Default is 15, which is all available planes.
 * @see https://ffmpeg.org/ffmpeg-filters.html#midequalizer
 */
  midequalizer(
    _in1: VideoStream,

    options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "midequalizer", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _in1],
      merge(
    {
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert the video to specified frame rate using motion interpolation. This filter accepts the following options:

 *
 * @param options.fps - Specify the output frame rate. This can be rational e.g. 60000/1001. Frames are dropped if fps is lower than source fps. Default 60.
 * @param options.mi_mode - Motion interpolation mode. Following values are accepted: @end table
 * @param options.mc_mode - motion compensation mode (from 0 to 1) (default obmc)
 * @param options.me_mode - motion estimation mode (from 0 to 1) (default bilat)
 * @param options.me - motion estimation method (from 1 to 9) (default epzs)
 * @param options.mb_size - macroblock size (from 4 to 16) (default 16)
 * @param options.search_param - search parameter (from 4 to INT_MAX) (default 32)
 * @param options.vsbmc - variable-size block motion compensation (from 0 to 1) (default 0)
 * @param options.scd - Scene change detection method. Scene change leads motion vectors to be in random direction. Scene change detection replace interpolated frames by duplicate ones. May not be needed for other modes. Following values are accepted: @end table Default method is fdiff.
 * @param options.scd_threshold - Scene change detection threshold. Default is 10..
 * @see https://ffmpeg.org/ffmpeg-filters.html#minterpolate
 */
  minterpolate(
    options?: {
    fps?: FFVideoRate;
    mi_mode?: FFInt | "dup" | "blend" | "mci";
    mc_mode?: FFInt | "obmc" | "aobmc";
    me_mode?: FFInt | "bidir" | "bilat";
    me?: FFInt | "esa" | "tss" | "tdls" | "ntss" | "fss" | "ds" | "hexbs" | "epzs" | "umh";
    mb_size?: FFInt;
    search_param?: FFInt;
    vsbmc?: FFInt;
    scd?: FFInt | "none" | "fdiff";
    scd_threshold?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "minterpolate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "fps": options?.fps,
      "mi_mode": options?.mi_mode,
      "mc_mode": options?.mc_mode,
      "me_mode": options?.me_mode,
      "me": options?.me,
      "mb_size": options?.mb_size,
      "search_param": options?.search_param,
      "vsbmc": options?.vsbmc,
      "scd": options?.scd,
      "scd_threshold": options?.scd_threshold,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Convert video to gray using custom color filter. A description of the accepted options follows.

 *
 * @param options.cb - Set the chroma blue spot. Allowed range is from -1 to 1. Default value is 0.
 * @param options.cr - Set the chroma red spot. Allowed range is from -1 to 1. Default value is 0.
 * @param options.size - Set the color filter size. Allowed range is from .1 to 10. Default value is 1.
 * @param options.high - Set the highlights strength. Allowed range is from 0 to 1. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#monochrome
 */
  monochrome(
    options?: {
    cb?: FFFloat;
    cr?: FFFloat;
    size?: FFFloat;
    high?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "monochrome", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "cb": options?.cb,
      "cr": options?.cr,
      "size": options?.size,
      "high": options?.high,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * This filter allows to apply main morphological grayscale transforms, erode and dilate with arbitrary structures set in second input stream. Unlike naive implementation and much slower performance in erosion and dilation filters, when speed is critical morpho filter should be used instead. A description of accepted options follows,

 *
 * @param options.mode - Set morphological transform to apply, can be: @end table Default is erode.
 * @param options.planes - Set planes to filter, by default all planes except alpha are filtered.
 * @param options.structure - Set which structure video frames will be processed from second input stream, can be first or all. Default is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#morpho
 */
  morpho(
    _structure: VideoStream,

    options?: {
    mode?: FFInt | "erode" | "dilate" | "open" | "close" | "gradient" | "tophat" | "blackhat";
    planes?: FFInt;
    structure?: FFInt | "first" | "all";
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "morpho", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _structure],
      merge(
    {
      "mode": options?.mode,
      "planes": options?.planes,
      "structure": options?.structure,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Drop frames that do not differ greatly from the previous frame in order to reduce frame rate. The main use of this filter is for very-low-bitrate encoding (e.g. streaming over dialup modem), but it could in theory be used for fixing movies that were inverse-telecined incorrectly. A description of the accepted options follows.

 *
 * @param options.max - Set the maximum number of consecutive frames which can be dropped (if positive), or the minimum interval between dropped frames (if negative). If the value is 0, the frame is dropped disregarding the number of previous sequentially dropped frames. Default value is 0.
 * @param options.keep - Set the maximum number of consecutive similar frames to ignore before to start dropping them. If the value is 0, the frame is dropped disregarding the number of previous sequentially similar frames. Default value is 0.
 * @param options.hi - set high dropping threshold (from INT_MIN to INT_MAX) (default 768)
 * @param options.lo - set low dropping threshold (from INT_MIN to INT_MAX) (default 320)
 * @param options.frac - Set the dropping threshold values. Values for hi and lo are for 8x8 pixel blocks and represent actual pixel value differences, so a threshold of 64 corresponds to 1 unit of difference for each pixel, or the same spread out differently over the block. A frame is a candidate for dropping if no 8x8 blocks differ by more than a threshold of hi, and if no more than frac blocks (1 meaning the whole image) differ by more than a threshold of lo. Default value for hi is 64*12, default value for lo is 64*5, and default value for frac is 0.33.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mpdecimate
 */
  mpdecimate(
    options?: {
    max?: FFInt;
    keep?: FFInt;
    hi?: FFInt;
    lo?: FFInt;
    frac?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "mpdecimate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "max": options?.max,
      "keep": options?.keep,
      "hi": options?.hi,
      "lo": options?.lo,
      "frac": options?.frac,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Obtain the MSAD (Mean Sum of Absolute Differences) between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained per component, average, min and max MSAD is printed through the logging system. The filter stores the calculated MSAD of each frame in frame metadata. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi msad -f null - @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#msad
 */
  msad(
    _reference: VideoStream,

    options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "msad", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Multiply first video stream pixels values with second video stream pixels values. The filter accepts the following options:

 *
 * @param options.scale - Set the scale applied to second video stream. By default is 1. Allowed range is from 0 to 9.
 * @param options.offset - Set the offset applied to second video stream. By default is 0.5. Allowed range is from -1 to 1.
 * @param options.planes - Specify planes from input video stream that will be processed. By default all planes are processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#multiply
 */
  multiply(
    _factor: VideoStream,

    options?: {
    scale?: FFFloat;
    offset?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "multiply", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _factor],
      merge(
    {
      "scale": options?.scale,
      "offset": options?.offset,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Negate (invert) the input video. It accepts the following option:

 *
 * @param options.components - Set components to negate. Available values for components are: @end table
 * @param options.negate_alpha - With value 1, it negates the alpha component, if present. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#negate
 */
  negate(
    options?: {
    components?: FFFlags | "y" | "u" | "v" | "r" | "g" | "b" | "a";
    negate_alpha?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "negate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "components": options?.components,
      "negate_alpha": options?.negate_alpha,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Denoise frames using Non-Local Means algorithm. Each pixel is adjusted by looking for other pixels with similar contexts. This context similarity is defined by comparing their surrounding patches of size pxp. Patches are searched in an area of rxr around the pixel. Note that the research area defines centers for patches, which means some patches will be made of pixels outside that research area. The filter accepts the following options.

 *
 * @param options.s - Set denoising strength. Default is 1.0. Must be in range [1.0, 30.0].
 * @param options.p - Set patch size. Default is 7. Must be odd number in range [0, 99].
 * @param options.pc - Same as p but for chroma planes. The default value is 0 and means automatic.
 * @param options.r - Set research size. Default is 15. Must be odd number in range [0, 99].
 * @param options.rc - Same as r but for chroma planes. The default value is 0 and means automatic.
 * @see https://ffmpeg.org/ffmpeg-filters.html#nlmeans
 */
  nlmeans(
    options?: {
    s?: FFDouble;
    p?: FFInt;
    pc?: FFInt;
    r?: FFInt;
    rc?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "nlmeans", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "s": options?.s,
      "p": options?.p,
      "pc": options?.pc,
      "r": options?.r,
      "rc": options?.rc,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Non-local Means denoise filter through OpenCL, this filter accepts same options as nlmeans.

 *
 * @param options.s - denoising strength (from 1 to 30) (default 1)
 * @param options.p - patch size (from 0 to 99) (default 7)
 * @param options.pc - patch size for chroma planes (from 0 to 99) (default 0)
 * @param options.r - research window (from 0 to 99) (default 15)
 * @param options.rc - research window for chroma planes (from 0 to 99) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#nlmeans_opencl
 */
  nlmeans_opencl(
    options?: {
    s?: FFDouble;
    p?: FFInt;
    pc?: FFInt;
    r?: FFInt;
    rc?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "nlmeans_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "s": options?.s,
      "p": options?.p,
      "pc": options?.pc,
      "r": options?.r,
      "rc": options?.rc,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Denoise frames using Non-Local Means algorithm, implemented on the GPU using Vulkan. Supports more pixel formats than nlmeans or nlmeans_opencl, including alpha channel support. The filter accepts the following options.

 *
 * @param options.s - Set denoising strength for all components. Default is 1.0. Must be in range [0.0, 100.0].
 * @param options.p - Set patch size for all planes. Default is 7. Must be odd number in range [0, 99].
 * @param options.r - Set research size. Default is 15. Must be odd number in range [0, 99].
 * @param options.t - Set parallelism. Default is 8. Must be a number in the range [1, 64]. Larger values will use more VRAM but may not result in greater speed. The optimal value is hardware and input dependent.
 * @param options.s1 - denoising strength for component 1 (from 0 to 100) (default nan)
 * @param options.s2 - denoising strength for component 2 (from 0 to 100) (default nan)
 * @param options.s3 - Set denoising strength for a specific component. Default is 1.0, equal to s. Must be in range [0.0, 100.0]. 0.0 disables denoising in that component.
 * @param options.s4 - denoising strength for component 4 (from 0 to 100) (default nan)
 * @param options.p1 - patch size for component 1 (from 0 to 99) (default 0)
 * @param options.p2 - patch size for component 2 (from 0 to 99) (default 0)
 * @param options.p3 - Set patch size for a specific component. Default is 7, equal to p. Must be odd number in range [0, 99].
 * @param options.p4 - patch size for component 4 (from 0 to 99) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#nlmeans_vulkan
 */
  nlmeans_vulkan(
    options?: {
    s?: FFDouble;
    p?: FFInt;
    r?: FFInt;
    t?: FFInt;
    s1?: FFDouble;
    s2?: FFDouble;
    s3?: FFDouble;
    s4?: FFDouble;
    p1?: FFInt;
    p2?: FFInt;
    p3?: FFInt;
    p4?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "nlmeans_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "s": options?.s,
      "p": options?.p,
      "r": options?.r,
      "t": options?.t,
      "s1": options?.s1,
      "s2": options?.s2,
      "s3": options?.s3,
      "s4": options?.s4,
      "p1": options?.p1,
      "p2": options?.p2,
      "p3": options?.p3,
      "p4": options?.p4,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlace video using neural network edge directed interpolation. This filter accepts the following options:

 *
 * @param options.weights - Mandatory option, without binary file filter can not work. Currently file can be found here: https://github.com/dubhater/vapoursynth-nnedi3/blob/master/src/nnedi3_weights.bin
 * @param options.deint - Set which frames to deinterlace, by default it is all. Can be all or interlaced.
 * @param options.field - Set mode of operation. Can be one of the following: @end table
 * @param options.planes - Set which planes to process, by default filter process all frames.
 * @param options.nsize - Set size of local neighborhood around each pixel, used by the predictor neural network. Can be one of the following: @end table
 * @param options.nns - Set the number of neurons in predictor neural network. Can be one of the following: @end table
 * @param options.qual - Controls the number of different neural network predictions that are blended together to compute the final output value. Can be fast, default or slow.
 * @param options.etype - Set which set of weights to use in the predictor. Can be one of the following: @end table
 * @param options.pscrn - Controls whether or not the prescreener neural network is used to decide which pixels should be processed by the predictor neural network and which can be handled by simple cubic interpolation. The prescreener is trained to know whether cubic interpolation will be sufficient for a pixel or whether it should be predicted by the predictor nn. The computational complexity of the prescreener nn is much less than that of the predictor nn. Since most pixels can be handled by cubic interpolation, using the prescreener generally results in much faster processing. The prescreener is pretty accurate, so the difference between using it and not using it is almost always unnoticeable. Can be one of the following: @end table Default is new.
 * @see https://ffmpeg.org/ffmpeg-filters.html#nnedi
 */
  nnedi(
    options?: {
    weights?: FFString;
    deint?: FFInt | "all" | "interlaced";
    field?: FFInt | "af" | "a" | "t" | "b" | "tf" | "bf";
    planes?: FFInt;
    nsize?: FFInt | "s8x6" | "s16x6" | "s32x6" | "s48x6" | "s8x4" | "s16x4" | "s32x4";
    nns?: FFInt | "n16" | "n32" | "n64" | "n128" | "n256";
    qual?: FFInt | "fast" | "slow";
    etype?: FFInt | "a" | "abs" | "s" | "mse";
    pscrn?: FFInt | "none" | "original" | "new" | "new2" | "new3";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "nnedi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "weights": options?.weights,
      "deint": options?.deint,
      "field": options?.field,
      "planes": options?.planes,
      "nsize": options?.nsize,
      "nns": options?.nns,
      "qual": options?.qual,
      "etype": options?.etype,
      "pscrn": options?.pscrn,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Force libavfilter not to use any of the specified pixel formats for the input to the next filter. It accepts the following parameters:

 *
 * @param options.pix_fmts - A '|'-separated list of pixel format names, such as pix_fmts=yuv420p|monow|rgb24".
 * @param options.color_spaces - A '|'-separated list of color spaces
 * @param options.color_ranges - A '|'-separated list of color ranges
 * @param options.alpha_modes - A '|'-separated list of alpha modes
 * @see https://ffmpeg.org/ffmpeg-filters.html#noformat
 */
  noformat(
    options?: {
    pix_fmts?: FFString;
    color_spaces?: FFString;
    color_ranges?: FFString;
    alpha_modes?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "noformat", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "pix_fmts": options?.pix_fmts,
      "color_spaces": options?.color_spaces,
      "color_ranges": options?.color_ranges,
      "alpha_modes": options?.alpha_modes,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add noise on video input frame. The filter accepts the following options:

 *
 * @param options.all_seed - set component #0 noise seed (from -1 to INT_MAX) (default -1)
 * @param options.all_strength - set component #0 strength (from 0 to 100) (default 0)
 * @param options.all_flags - set component #0 flags (default 0)
 * @param options.c0_seed - set component #0 noise seed (from -1 to INT_MAX) (default -1)
 * @param options.c0_strength - set component #0 strength (from 0 to 100) (default 0)
 * @param options.c0_flags - set component #0 flags (default 0)
 * @param options.c1_seed - set component #1 noise seed (from -1 to INT_MAX) (default -1)
 * @param options.c1_strength - set component #1 strength (from 0 to 100) (default 0)
 * @param options.c1_flags - set component #1 flags (default 0)
 * @param options.c2_seed - set component #2 noise seed (from -1 to INT_MAX) (default -1)
 * @param options.c2_strength - set component #2 strength (from 0 to 100) (default 0)
 * @param options.c2_flags - set component #2 flags (default 0)
 * @param options.c3_seed - Set noise seed for specific pixel component or all pixel components in case of all_seed. Default value is 123457.
 * @param options.c3_strength - Set noise strength for specific pixel component or all pixel components in case all_strength. Default value is 0. Allowed range is [0, 100].
 * @param options.c3_flags - Set pixel component flags or set flags for all components if all_flags. Available values for component flags are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#noise
 */
  noise(
    options?: {
    all_seed?: FFInt;
    all_strength?: FFInt;
    all_flags?: FFFlags | "a" | "p" | "t" | "u";
    c0_seed?: FFInt;
    c0_strength?: FFInt;
    c0_flags?: FFFlags | "a" | "p" | "t" | "u";
    c1_seed?: FFInt;
    c1_strength?: FFInt;
    c1_flags?: FFFlags | "a" | "p" | "t" | "u";
    c2_seed?: FFInt;
    c2_strength?: FFInt;
    c2_flags?: FFFlags | "a" | "p" | "t" | "u";
    c3_seed?: FFInt;
    c3_strength?: FFInt;
    c3_flags?: FFFlags | "a" | "p" | "t" | "u";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "noise", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "all_seed": options?.all_seed,
      "all_strength": options?.all_strength,
      "all_flags": options?.all_flags,
      "c0_seed": options?.c0_seed,
      "c0_strength": options?.c0_strength,
      "c0_flags": options?.c0_flags,
      "c1_seed": options?.c1_seed,
      "c1_strength": options?.c1_strength,
      "c1_flags": options?.c1_flags,
      "c2_seed": options?.c2_seed,
      "c2_strength": options?.c2_strength,
      "c2_flags": options?.c2_flags,
      "c3_seed": options?.c3_seed,
      "c3_strength": options?.c3_strength,
      "c3_flags": options?.c3_flags,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Normalize RGB video (aka histogram stretching, contrast stretching). See: https://en.wikipedia.org/wiki/Normalization_(image_processing) For each channel of each frame, the filter computes the input range and maps it linearly to the user-specified output range. The output range defaults to the full dynamic range from pure black to pure white. Temporal smoothing can be used on the input range to reduce flickering (rapid changes in brightness) caused when small dark or bright objects enter or leave the scene. This is similar to the auto-exposure (automatic gain control) on a video camera, and, like a video camera, it may cause a period of over- or under-exposure of the video. The R,G,B channels can be normalized independently, which may cause some color shifting, or linked together as a single channel, which prevents color shifting. Linked normalization preserves hue. Independent normalization does not, so it can be used to remove some color casts. Independent and linked normalization can be combined in any ratio. The normalize filter accepts the following options:

 *
 * @param options.blackpt - output color to which darkest input color is mapped (default "black")
 * @param options.whitept - Colors which define the output range. The minimum input value is mapped to the blackpt. The maximum input value is mapped to the whitept. The defaults are black and white respectively. Specifying white for blackpt and black for whitept will give color-inverted, normalized video. Shades of grey can be used to reduce the dynamic range (contrast). Specifying saturated colors here can create some interesting effects.
 * @param options.smoothing - The number of previous frames to use for temporal smoothing. The input range of each channel is smoothed using a rolling average over the current frame and the smoothing previous frames. The default is 0 (no temporal smoothing).
 * @param options.independence - Controls the ratio of independent (color shifting) channel normalization to linked (color preserving) normalization. 0.0 is fully linked, 1.0 is fully independent. Defaults to 1.0 (fully independent).
 * @param options.strength - Overall strength of the filter. 1.0 is full strength. 0.0 is a rather expensive no-op. Defaults to 1.0 (full strength).
 * @see https://ffmpeg.org/ffmpeg-filters.html#normalize
 */
  normalize(
    options?: {
    blackpt?: FFColor;
    whitept?: FFColor;
    smoothing?: FFInt;
    independence?: FFFloat;
    strength?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "normalize", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "blackpt": options?.blackpt,
      "whitept": options?.whitept,
      "smoothing": options?.smoothing,
      "independence": options?.independence,
      "strength": options?.strength,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pass the video source unchanged to the output.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#null
 */
  _null(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "null", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * 2D Video Oscilloscope. Useful to measure spatial impulse, step responses, chroma delays, etc. It accepts the following parameters:

 *
 * @param options.x - Set scope center x position.
 * @param options.y - Set scope center y position.
 * @param options.s - Set scope size, relative to frame diagonal.
 * @param options.t - Set scope tilt/rotation.
 * @param options.o - Set trace opacity.
 * @param options.tx - Set trace center x position.
 * @param options.ty - Set trace center y position.
 * @param options.tw - Set trace width, relative to width of frame.
 * @param options.th - Set trace height, relative to height of frame.
 * @param options.c - Set which components to trace. By default it traces first three components.
 * @param options.g - Draw trace grid. By default is enabled.
 * @param options.st - Draw some statistics. By default is enabled.
 * @param options.sc - Draw scope. By default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#oscilloscope
 */
  oscilloscope(
    options?: {
    x?: FFFloat;
    y?: FFFloat;
    s?: FFFloat;
    t?: FFFloat;
    o?: FFFloat;
    tx?: FFFloat;
    ty?: FFFloat;
    tw?: FFFloat;
    th?: FFFloat;
    c?: FFInt;
    g?: FFBoolean;
    st?: FFBoolean;
    sc?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "oscilloscope", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "s": options?.s,
      "t": options?.t,
      "o": options?.o,
      "tx": options?.tx,
      "ty": options?.ty,
      "tw": options?.tw,
      "th": options?.th,
      "c": options?.c,
      "g": options?.g,
      "st": options?.st,
      "sc": options?.sc,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay one video on top of another. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. It accepts the following parameters: A description of the accepted options follows.

 *
 * @param options.x - set the x expression (default "0")
 * @param options.y - Modify the x and y of the overlay input. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.eof_action - See framesync.
 * @param options.eval - Set when the expressions for x, and y are evaluated. It accepts the following values: @end table Default value is frame.
 * @param options.shortest - See framesync.
 * @param options.format - Set the format for the output video. It accepts the following values: @end table Default value is yuv420.
 * @param options.repeatlast - See framesync.
 * @param options.alpha - Set format of alpha of the overlaid video, it can be straight or premultiplied, or auto to choose the alpha mode automatically. Default is auto.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay
 */
  overlay(
    _overlay: VideoStream,

    options?: {
    x?: FFString;
    y?: FFString;
    eof_action?: FFInt | "repeat" | "endall" | "pass";
    eval?: FFInt | "init" | "frame";
    shortest?: FFBoolean;
    format?: FFInt | "yuv420" | "yuv420p10" | "yuv422" | "yuv422p10" | "yuv444" | "yuv444p10" | "rgb" | "gbrp" | "auto";
    repeatlast?: FFBoolean;
    alpha?: FFInt | "auto" | "unknown" | "straight" | "premultiplied";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "overlay", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _overlay],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "eof_action": options?.eof_action,
      "eval": options?.eval,
      "shortest": options?.shortest,
      "format": options?.format,
      "repeatlast": options?.repeatlast,
      "alpha": options?.alpha,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay one video on top of another. This is the CUDA variant of the overlay filter. It only accepts CUDA frames. The underlying input pixel formats have to match. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. It accepts the following parameters:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.x - set the x expression of overlay (default "0")
 * @param options.y - Set expressions for the x and y coordinates of the overlaid video on the main video. They can contain the following parameters: @end table Default value is "0" for both expressions.
 * @param options.eof_action - See framesync.
 * @param options.eval - Set when the expressions for x and y are evaluated. It accepts the following values: @end table Default value is frame.
 * @param options.shortest - See framesync.
 * @param options.repeatlast - See framesync.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay_cuda
 */
  overlay_cuda(
    _overlay: VideoStream,

    options?: {
    x?: FFString;
    y?: FFString;
    eof_action?: FFInt | "repeat" | "endall" | "pass";
    eval?: FFInt | "init" | "frame";
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "overlay_cuda", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _overlay],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "eof_action": options?.eof_action,
      "eval": options?.eval,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay one video on top of another. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. This filter requires same memory layout for all the inputs. So, format conversion may be needed. The filter accepts the following options:

 *
 * @param options.x - Set the x coordinate of the overlaid video on the main video. Default value is 0.
 * @param options.y - Set the y coordinate of the overlaid video on the main video. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay_opencl
 */
  overlay_opencl(
    _overlay: VideoStream,

    options?: {
    x?: FFInt;
    y?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "overlay_opencl", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _overlay],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay one video on the top of another. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. The filter accepts the following options:

 *
 * @param options.x - Overlay x position (default "0")
 * @param options.y - Set expressions for the x and y coordinates of the overlaid video on the main video. Default value is "0" for both expressions.
 * @param options.w - Overlay width (default "overlay_iw")
 * @param options.h - Set expressions for the width and height the overlaid video on the main video. Default values are 'overlay_iw' for 'w' and 'overlay_ih*w/overlay_iw' for 'h'. The expressions can contain the following parameters: @end table
 * @param options.alpha - Set transparency of overlaid video. Allowed range is 0.0 to 1.0. Higher value means lower transparency. Default value is 1.0.
 * @param options.eof_action - See framesync.
 * @param options.shortest - See framesync.
 * @param options.repeatlast - See framesync.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay_vaapi
 */
  overlay_vaapi(
    _overlay: VideoStream,

    options?: {
    x?: FFString;
    y?: FFString;
    w?: FFString;
    h?: FFString;
    alpha?: FFFloat;
    eof_action?: FFInt | "repeat" | "endall" | "pass";
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "overlay_vaapi", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _overlay],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "w": options?.w,
      "h": options?.h,
      "alpha": options?.alpha,
      "eof_action": options?.eof_action,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Overlay one video on top of another. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. This filter requires all inputs to use the same pixel format. So, format conversion may be needed. The filter accepts the following options:

 *
 * @param options.x - Set the x coordinate of the overlaid video on the main video. Default value is 0.
 * @param options.y - Set the y coordinate of the overlaid video on the main video. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay_vulkan
 */
  overlay_vulkan(
    _overlay: VideoStream,

    options?: {
    x?: FFInt;
    y?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "overlay_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _overlay],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Overcomplete Wavelet denoiser. The filter accepts the following options:

 *
 * @param options.depth - Set depth. Larger depth values will denoise lower frequency components more, but slow down filtering. Must be an int in the range 8-16, default is 8.
 * @param options.luma_strength - Set luma strength. Must be a double value in the range 0-1000, default is 1.0.
 * @param options.chroma_strength - Set chroma strength. Must be a double value in the range 0-1000, default is 1.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#owdenoise
 */
  owdenoise(
    options?: {
    depth?: FFInt;
    luma_strength?: FFDouble;
    chroma_strength?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "owdenoise", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "depth": options?.depth,
      "luma_strength": options?.luma_strength,
      "chroma_strength": options?.chroma_strength,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add paddings to the input image, and place the original input at the provided x, y coordinates. It accepts the following parameters:

 *
 * @param options.width - set the pad area width expression (default "iw")
 * @param options.height - Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
 * @param options.x - set the x offset expression for the input image position (default "0")
 * @param options.y - The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
 * @param options.color - Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
 * @param options.eval - Specify when to evaluate width, height, x and y expression. It accepts the following values: @end table Default value is init.
 * @param options.aspect - Pad to aspect instead to a resolution.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pad
 */
  pad(
    options?: {
    width?: FFString;
    height?: FFString;
    x?: FFString;
    y?: FFString;
    color?: FFColor;
    eval?: FFInt | "init" | "frame";
    aspect?: FFRational;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pad", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "height": options?.height,
      "x": options?.x,
      "y": options?.y,
      "color": options?.color,
      "eval": options?.eval,
      "aspect": options?.aspect,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add paddings to an input video stream using CUDA. This filter is the CUDA-accelerated version of the pad filter. It accepts the same options and expressions and provides the same core functionality. For a detailed description of available options, please see the documentation for the pad filter.
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.width - set the pad area width expression (default "iw")
 * @param options.height - set the pad area height expression (default "ih")
 * @param options.x - set the x offset expression for the input image position (default "0")
 * @param options.y - set the y offset expression for the input image position (default "0")
 * @param options.color - set the color of the padded area border (default "black")
 * @param options.eval - specify when to evaluate expressions (from 0 to 1) (default init)
 * @param options.aspect - pad to fit an aspect instead of a resolution (from 0 to DBL_MAX) (default 0/1)
 * @see https://ffmpeg.org/ffmpeg-filters.html#pad_cuda
 */
  pad_cuda(
    options?: {
    width?: FFString;
    height?: FFString;
    x?: FFString;
    y?: FFString;
    color?: FFColor;
    eval?: FFInt | "init" | "frame";
    aspect?: FFRational;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pad_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "height": options?.height,
      "x": options?.x,
      "y": options?.y,
      "color": options?.color,
      "eval": options?.eval,
      "aspect": options?.aspect,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add paddings to the input image, and place the original input at the provided x, y coordinates. It accepts the following options:

 *
 * @param options.width - set the pad area width (default "iw")
 * @param options.height - Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
 * @param options.x - set the x offset for the input image position (default "0")
 * @param options.y - The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
 * @param options.color - Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual.
 * @param options.aspect - Pad to an aspect instead to a resolution.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pad_opencl
 */
  pad_opencl(
    options?: {
    width?: FFString;
    height?: FFString;
    x?: FFString;
    y?: FFString;
    color?: FFColor;
    aspect?: FFRational;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pad_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "height": options?.height,
      "x": options?.x,
      "y": options?.y,
      "color": options?.color,
      "aspect": options?.aspect,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Add paddings to the input image, and place the original input at the provided x, y coordinates. It accepts the following options:

 *
 * @param options.width - set the pad area width (default "iw")
 * @param options.height - Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
 * @param options.x - set the x offset for the input image position (default "0")
 * @param options.y - The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
 * @param options.color - Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual.
 * @param options.aspect - Pad to an aspect instead to a resolution.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pad_vaapi
 */
  pad_vaapi(
    options?: {
    width?: FFString;
    height?: FFString;
    x?: FFString;
    y?: FFString;
    color?: FFColor;
    aspect?: FFRational;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pad_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "height": options?.height,
      "x": options?.x,
      "y": options?.y,
      "color": options?.color,
      "aspect": options?.aspect,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Generate one palette for a whole video stream. It accepts the following options:

 *
 * @param options.max_colors - Set the maximum number of colors to quantize in the palette. Note: the palette will still contain 256 colors; the unused palette entries will be black.
 * @param options.reserve_transparent - Create a palette of 255 colors maximum and reserve the last one for transparency. Reserving the transparency color is useful for GIF optimization. If not set, the maximum of colors in the palette will be 256. You probably want to disable this option for a standalone image. Set by default.
 * @param options.transparency_color - Set the color that will be used as background for transparency.
 * @param options.stats_mode - Set statistics mode. It accepts the following values: @end table Default value is full.
 * @see https://ffmpeg.org/ffmpeg-filters.html#palettegen
 */
  palettegen(
    options?: {
    max_colors?: FFInt;
    reserve_transparent?: FFBoolean;
    transparency_color?: FFColor;
    stats_mode?: FFInt | "full" | "diff" | "single";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "palettegen", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "max_colors": options?.max_colors,
      "reserve_transparent": options?.reserve_transparent,
      "transparency_color": options?.transparency_color,
      "stats_mode": options?.stats_mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Use a palette to downsample an input video stream. The filter takes two inputs: one video stream and a palette. The palette must be a 256 pixels image. It accepts the following options:

 *
 * @param options.dither - Select dithering mode. Available algorithms are: @end table Default is sierra2_4a.
 * @param options.bayer_scale - When bayer dithering is selected, this option defines the scale of the pattern (how much the crosshatch pattern is visible). A low value means more visible pattern for less banding, and higher value means less visible pattern at the cost of more banding. The option must be an integer value in the range [0,5]. Default is 2.
 * @param options.diff_mode - If set, define the zone to process @end table Default is none.
 * @param options._new - Take new palette for each output frame.
 * @param options.alpha_threshold - Sets the alpha threshold for transparency. Alpha values above this threshold will be treated as completely opaque, and values below this threshold will be treated as completely transparent. The option must be an integer value in the range [0,255]. Default is 128.
 * @param options.debug_kdtree - save Graphviz graph of the kdtree in specified file
 * @see https://ffmpeg.org/ffmpeg-filters.html#paletteuse
 */
  paletteuse(
    _palette: VideoStream,

    options?: {
    dither?: FFInt | "bayer" | "heckbert" | "floyd_steinberg" | "sierra2" | "sierra2_4a" | "sierra3" | "burkes" | "atkinson";
    bayer_scale?: FFInt;
    diff_mode?: FFInt | "rectangle";
    _new?: FFBoolean;
    alpha_threshold?: FFInt;
    debug_kdtree?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "paletteuse", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _palette],
      merge(
    {
      "dither": options?.dither,
      "bayer_scale": options?.bayer_scale,
      "diff_mode": options?.diff_mode,
      "new": options?._new,
      "alpha_threshold": options?.alpha_threshold,
      "debug_kdtree": options?.debug_kdtree,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Set read/write permissions for the output frames. These filters are mainly aimed at developers to test direct path in the following filter in the filtergraph. The filters accept the following options:

 *
 * @param options.mode - Select the permissions mode. It accepts the following values: @end table
 * @param options.seed - Set the seed for the random mode, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
 * @see https://ffmpeg.org/ffmpeg-filters.html#perms
 */
  perms(
    options?: {
    mode?: FFInt | "none" | "ro" | "rw" | "toggle" | "random";
    seed?: FFInt64;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "perms", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "seed": options?.seed,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Correct perspective of video not recorded perpendicular to the screen. A description of the accepted parameters follows.

 *
 * @param options.x0 - set top left x coordinate (default "0")
 * @param options.y0 - set top left y coordinate (default "0")
 * @param options.x1 - set top right x coordinate (default "W")
 * @param options.y1 - set top right y coordinate (default "0")
 * @param options.x2 - set bottom left x coordinate (default "0")
 * @param options.y2 - set bottom left y coordinate (default "H")
 * @param options.x3 - set bottom right x coordinate (default "W")
 * @param options.y3 - Set coordinates expression for top left, top right, bottom left and bottom right corners. Default values are 0:0:W:0:0:H:W:H with which perspective will remain unchanged. If the sense option is set to source, then the specified points will be sent to the corners of the destination. If the sense option is set to destination, then the corners of the source will be sent to the specified coordinates. The expressions can use the following variables: @end table
 * @param options.interpolation - Set interpolation for perspective correction. It accepts the following values: @end table Default value is linear.
 * @param options.sense - Set interpretation of coordinate options. It accepts the following values: @end table
 * @param options.eval - Set when the expressions for coordinates x0,y0,...x3,y3 are evaluated. It accepts the following values: @end table Default value is init.
 * @see https://ffmpeg.org/ffmpeg-filters.html#perspective
 */
  perspective(
    options?: {
    x0?: FFString;
    y0?: FFString;
    x1?: FFString;
    y1?: FFString;
    x2?: FFString;
    y2?: FFString;
    x3?: FFString;
    y3?: FFString;
    interpolation?: FFInt | "linear" | "cubic";
    sense?: FFInt | "source" | "destination";
    eval?: FFInt | "init" | "frame";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "perspective", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x0": options?.x0,
      "y0": options?.y0,
      "x1": options?.x1,
      "y1": options?.y1,
      "x2": options?.x2,
      "y2": options?.y2,
      "x3": options?.x3,
      "y3": options?.y3,
      "interpolation": options?.interpolation,
      "sense": options?.sense,
      "eval": options?.eval,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Delay interlaced video by one field time so that the field order changes. The intended use is to fix PAL movies that have been captured with the opposite field order to the film-to-video transfer. A description of the accepted parameters follows.

 *
 * @param options.mode - Set phase mode. It accepts the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#phase
 */
  phase(
    options?: {
    mode?: FFInt | "p" | "t" | "b" | "T" | "B" | "u" | "U" | "a" | "A";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "phase", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Reduce various flashes in video, so to help users with epilepsy. It accepts the following options:

 *
 * @param options.frames - Set how many frames to use when filtering. Default is 30.
 * @param options.threshold - Set detection threshold factor. Default is 1. Lower is stricter.
 * @param options.skip - Set how many pixels to skip when sampling frames. Default is 1. Allowed range is from 1 to 1024.
 * @param options.bypass - Leave frames unchanged. Default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#photosensitivity
 */
  photosensitivity(
    options?: {
    frames?: FFInt;
    threshold?: FFFloat;
    skip?: FFInt;
    bypass?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "photosensitivity", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "frames": options?.frames,
      "threshold": options?.threshold,
      "skip": options?.skip,
      "bypass": options?.bypass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pixel format descriptor test filter, mainly useful for internal testing. The output video should be equal to the input video. For example: @example format=monow, pixdesctest @end example can be used to test the monowhite pixel format descriptor definition.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#pixdesctest
 */
  pixdesctest(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pixdesctest", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply pixelization to video stream. The filter accepts the following options:

 *
 * @param options.width - set block width (from 1 to 1024) (default 16)
 * @param options.height - Set block dimensions that will be used for pixelization. Default value is 16.
 * @param options.mode - Set the mode of pixelization used. Possible values are: @end table Default value is avg.
 * @param options.planes - Set what planes to filter. Default is to filter all planes.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pixelize
 */
  pixelize(
    options?: {
    width?: FFInt;
    height?: FFInt;
    mode?: FFInt | "avg" | "min" | "max";
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pixelize", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "height": options?.height,
      "mode": options?.mode,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Display sample values of color channels. Mainly useful for checking color and levels. Minimum supported resolution is 640x480. The filters accept the following options:

 *
 * @param options.x - Set scope X position, relative offset on X axis.
 * @param options.y - Set scope Y position, relative offset on Y axis.
 * @param options.w - Set scope width.
 * @param options.h - Set scope height.
 * @param options.o - Set window opacity. This window also holds statistics about pixel area.
 * @param options.wx - Set window X position, relative offset on X axis.
 * @param options.wy - Set window Y position, relative offset on Y axis.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pixscope
 */
  pixscope(
    options?: {
    x?: FFFloat;
    y?: FFFloat;
    w?: FFInt;
    h?: FFInt;
    o?: FFFloat;
    wx?: FFFloat;
    wy?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pixscope", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "x": options?.x,
      "y": options?.y,
      "w": options?.w,
      "h": options?.h,
      "o": options?.o,
      "wx": options?.wx,
      "wy": options?.wy,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Postprocessing filter 7. It is variant of the spp filter, similar to spp = 6 with 7 point DCT, where only the center sample is used after IDCT. The filter accepts the following options:

 *
 * @param options.qp - Force a constant quantization parameter. It accepts an integer in range 0 to 63. If not set, the filter will use the QP from the video stream (if available).
 * @param options.mode - Set thresholding mode. Available modes are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#pp7
 */
  pp7(
    options?: {
    qp?: FFInt;
    mode?: FFInt | "hard" | "soft" | "medium";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pp7", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "qp": options?.qp,
      "mode": options?.mode,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Dynamically premultiply or unpremultiply the input video stream as needed, to match the requirements of the downstream filter graph. This is roughly equivalent to either premultiply:inplace=yes or unpremultiply:inplace=yes, or otherwise a noop. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.inplace - enable inplace mode (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#premultiply_dynamic
 */
  premultiply_dynamic(
    options?: {
    planes?: FFInt;
    inplace?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "premultiply_dynamic", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "inplace": options?.inplace,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply prewitt operator to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.scale - Set value which will be multiplied with filtered result.
 * @param options.delta - Set value which will be added to filtered result.
 * @see https://ffmpeg.org/ffmpeg-filters.html#prewitt
 */
  prewitt(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "prewitt", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply the Prewitt operator (https://en.wikipedia.org/wiki/Prewitt_operator) to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes to filter. Default value is 0xf, by which all planes are processed.
 * @param options.scale - Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
 * @param options.delta - Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#prewitt_opencl
 */
  prewitt_opencl(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "prewitt_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * ProcAmp (color balance) adjustments for hue, saturation, brightness, contrast

 *
 * @param options.b - Output video brightness (from -100 to 100) (default 0)
 * @param options.s - Output video saturation (from 0 to 10) (default 1)
 * @param options.c - Output video contrast (from 0 to 10) (default 1)
 * @param options.h - Output video hue (from -180 to 180) (default 0)
 */
  procamp_vaapi(
    options?: {
    b?: FFFloat;
    s?: FFFloat;
    c?: FFFloat;
    h?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "procamp_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "b": options?.b,
      "s": options?.s,
      "c": options?.c,
      "h": options?.h,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Alter frame colors in video with pseudocolors. This filter accepts the following options:

 *
 * @param options.c0 - set pixel first component expression
 * @param options.c1 - set pixel second component expression
 * @param options.c2 - set pixel third component expression
 * @param options.c3 - set pixel fourth component expression, corresponds to the alpha component
 * @param options.index - set component to use as base for altering colors
 * @param options.preset - Pick one of built-in LUTs. By default is set to none. Available LUTs: @end table
 * @param options.opacity - Set opacity of output colors. Allowed range is from 0 to 1. Default value is set to 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pseudocolor
 */
  pseudocolor(
    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    index?: FFInt;
    preset?: FFInt | "none" | "magma" | "inferno" | "plasma" | "viridis" | "turbo" | "cividis" | "range1" | "range2" | "shadows" | "highlights" | "solar" | "nominal" | "preferred" | "total" | "spectral" | "cool" | "heat" | "fiery" | "blues" | "green" | "helix";
    opacity?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pseudocolor", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "index": options?.index,
      "preset": options?.preset,
      "opacity": options?.opacity,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Obtain the average, maximum and minimum PSNR (Peak Signal to Noise Ratio) between two input videos. This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the PSNR. Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained average PSNR is printed through the logging system. The filter stores the accumulated MSE (mean squared error) of each frame, and at the end of the processing it is averaged across all frames equally, and the following formula is applied to obtain the PSNR: @example PSNR = 10*log10(MAX^2/MSE) @end example Where MAX is the average of the maximum values of each component of the image. The description of the accepted parameters follows.

 *
 * @param options.stats_file - If specified the filter will use the named file to save the PSNR of each individual frame. When filename equals "-" the data is sent to standard output.
 * @param options.stats_version - Specifies which version of the stats file format to use. Details of each format are written below. Default value is 1.
 * @param options.output_max - Determines whether the max value is output to the stats log. Default value is 0. Requires stats_version >= 2. If this is set and stats_version < 2, the filter will return an error.
 * @see https://ffmpeg.org/ffmpeg-filters.html#psnr
 */
  psnr(
    _reference: VideoStream,

    options?: {
    stats_file?: FFString;
    stats_version?: FFInt;
    output_max?: FFBoolean;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "psnr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "stats_file": options?.stats_file,
      "stats_version": options?.stats_version,
      "output_max": options?.output_max,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pulldown reversal (inverse telecine) filter, capable of handling mixed hard-telecine, 24000/1001 fps progressive, and 30000/1001 fps progressive content. The pullup filter is designed to take advantage of future context in making its decisions. This filter is stateless in the sense that it does not lock onto a pattern to follow, but it instead looks forward to the following fields in order to identify matches and rebuild progressive frames. To produce content with an even framerate, insert the fps filter after pullup, use fps=24000/1001 if the input frame rate is 29.97fps, fps=24 for 30fps and the (rare) telecined 25fps input. The filter accepts the following options:

 *
 * @param options.jl - set left junk size (from 0 to INT_MAX) (default 1)
 * @param options.jr - set right junk size (from 0 to INT_MAX) (default 1)
 * @param options.jt - set top junk size (from 1 to INT_MAX) (default 4)
 * @param options.jb - These options set the amount of "junk" to ignore at the left, right, top, and bottom of the image, respectively. Left and right are in units of 8 pixels, while top and bottom are in units of 2 lines. The default is 8 pixels on each side.
 * @param options.sb - Set the strict breaks. Setting this option to 1 will reduce the chances of filter generating an occasional mismatched frame, but it may also cause an excessive number of frames to be dropped during high motion sequences. Conversely, setting it to -1 will make filter match fields more easily. This may help processing of video where there is slight blurring between the fields, but may also cause there to be interlaced frames in the output. Default value is 0.
 * @param options.mp - Set the metric plane to use. It accepts the following values: @end table This option may be set to use chroma plane instead of the default luma plane for doing filter's computations. This may improve accuracy on very clean source material, but more likely will decrease accuracy, especially if there is chroma noise (rainbow effect) or any grayscale video. The main purpose of setting mp to a chroma plane is to reduce CPU load and make pullup usable in realtime on slow machines.
 * @see https://ffmpeg.org/ffmpeg-filters.html#pullup
 */
  pullup(
    options?: {
    jl?: FFInt;
    jr?: FFInt;
    jt?: FFInt;
    jb?: FFInt;
    sb?: FFBoolean;
    mp?: FFInt | "y" | "u" | "v";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "pullup", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "jl": options?.jl,
      "jr": options?.jr,
      "jt": options?.jt,
      "jb": options?.jb,
      "sb": options?.sb,
      "mp": options?.mp,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Change video quantization parameters (QP). The filter accepts the following option:

 *
 * @param options.qp - Set expression for quantization parameter.
 * @see https://ffmpeg.org/ffmpeg-filters.html#qp
 */
  qp(
    options?: {
    qp?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "qp", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "qp": options?.qp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Flush video frames from internal cache of frames into a random order. No frame is discarded. Inspired by frei0r nervous filter.

 *
 * @param options.frames - Set size in number of frames of internal cache, in range from 2 to 512. Default is 30.
 * @param options.seed - Set seed for random number generator, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to less than 0, the filter will try to use a good random seed on a best effort basis.
 * @see https://ffmpeg.org/ffmpeg-filters.html#random
 */
  random(
    options?: {
    frames?: FFInt;
    seed?: FFInt64;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "random", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "frames": options?.frames,
      "seed": options?.seed,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Read closed captioning (EIA-608) information from the top lines of a video frame. This filter adds frame metadata for lavfi.readeia608.X.cc and lavfi.readeia608.X.line, where X is the number of the identified line with EIA-608 data (starting from 0). A description of each metadata value follows:

 *
 * @param options.scan_min - Set the line to start scanning for EIA-608 data. Default is 0.
 * @param options.scan_max - Set the line to end scanning for EIA-608 data. Default is 29.
 * @param options.spw - Set the ratio of width reserved for sync code detection. Default is 0.27. Allowed range is [0.1 - 0.7].
 * @param options.chp - Enable checking the parity bit. In the event of a parity error, the filter will output 0x00 for that character. Default is false.
 * @param options.lp - Lowpass lines prior to further processing. Default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#readeia608
 */
  readeia608(
    options?: {
    scan_min?: FFInt;
    scan_max?: FFInt;
    spw?: FFFloat;
    chp?: FFBoolean;
    lp?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "readeia608", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "scan_min": options?.scan_min,
      "scan_max": options?.scan_max,
      "spw": options?.spw,
      "chp": options?.chp,
      "lp": options?.lp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Read vertical interval timecode (VITC) information from the top lines of a video frame. The filter adds frame metadata key lavfi.readvitc.tc_str with the timecode value, if a valid timecode has been detected. Further metadata key lavfi.readvitc.found is set to 0/1 depending on whether timecode data has been found or not. This filter accepts the following options:

 *
 * @param options.scan_max - Set the maximum number of lines to scan for VITC data. If the value is set to -1 the full video frame is scanned. Default is 45.
 * @param options.thr_b - Set the luma threshold for black. Accepts float numbers in the range [0.0,1.0], default value is 0.2. The value must be equal or less than thr_w.
 * @param options.thr_w - Set the luma threshold for white. Accepts float numbers in the range [0.0,1.0], default value is 0.6. The value must be equal or greater than thr_b.
 * @see https://ffmpeg.org/ffmpeg-filters.html#readvitc
 */
  readvitc(
    options?: {
    scan_max?: FFInt;
    thr_b?: FFDouble;
    thr_w?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "readvitc", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "scan_max": options?.scan_max,
      "thr_b": options?.thr_b,
      "thr_w": options?.thr_w,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Slow down filtering to match real time approximately. These filters will pause the filtering for a variable amount of time to match the output rate with the input timestamps. They are similar to the re option to ffmpeg. They accept the following options:

 *
 * @param options.limit - Time limit for the pauses. Any pause longer than that will be considered a timestamp discontinuity and reset the timer. Default is 2 seconds.
 * @param options.speed - Speed factor for processing. The value must be a float larger than zero. Values larger than 1.0 will result in faster than realtime processing, smaller will slow processing down. The limit is automatically adapted accordingly. Default is 1.0. A processing speed faster than what is possible without these filters cannot be achieved.
 * @see https://ffmpeg.org/ffmpeg-filters.html#realtime
 */
  realtime(
    options?: {
    limit?: FFDuration;
    speed?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "realtime", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "limit": options?.limit,
      "speed": options?.speed,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream. Destination pixel at position (X, Y) will be picked from source (x, y) position where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero value for pixel will be used for destination pixel. Xmap and Ymap input video streams must be of same dimensions. Output video stream will have Xmap/Ymap video stream dimensions. Xmap and Ymap input video streams are 16bit depth, single channel.

 *
 * @param options.format - Specify pixel format of output from this filter. Can be color or gray. Default is color.
 * @param options.fill - Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black.
 * @see https://ffmpeg.org/ffmpeg-filters.html#remap
 */
  remap(
    _xmap: VideoStream,
    _ymap: VideoStream,

    options?: {
    format?: FFInt | "color" | "gray";
    fill?: FFColor;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "remap", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _xmap, _ymap],
      merge(
    {
      "format": options?.format,
      "fill": options?.fill,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream. Destination pixel at position (X, Y) will be picked from source (x, y) position where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero value for pixel will be used for destination pixel. Xmap and Ymap input video streams must be of same dimensions. Output video stream will have Xmap/Ymap video stream dimensions. Xmap and Ymap input video streams are 32bit float pixel format, single channel.

 *
 * @param options.interp - Specify interpolation used for remapping of pixels. Allowed values are near and linear. Default value is linear.
 * @param options.fill - Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black.
 * @see https://ffmpeg.org/ffmpeg-filters.html#remap_opencl
 */
  remap_opencl(
    _xmap: VideoStream,
    _ymap: VideoStream,

    options?: {
    interp?: FFInt | "near" | "linear";
    fill?: FFColor;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "remap_opencl", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
      [this, _xmap, _ymap],
      merge(
    {
      "interp": options?.interp,
      "fill": options?.fill,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The removegrain filter is a spatial denoiser for progressive video.

 *
 * @param options.m0 - Set mode for the first plane.
 * @param options.m1 - Set mode for the second plane.
 * @param options.m2 - Set mode for the third plane.
 * @param options.m3 - Set mode for the fourth plane.
 * @see https://ffmpeg.org/ffmpeg-filters.html#removegrain
 */
  removegrain(
    options?: {
    m0?: FFInt;
    m1?: FFInt;
    m2?: FFInt;
    m3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "removegrain", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "m0": options?.m0,
      "m1": options?.m1,
      "m2": options?.m2,
      "m3": options?.m3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Suppress a TV station logo, using an image file to determine which pixels comprise the logo. It works by filling in the pixels that comprise the logo with neighboring pixels. The filter accepts the following options:

 *
 * @param options.filename - Set the filter bitmap file, which can be any image format supported by libavformat. The width and height of the image file must match those of the video stream being processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#removelogo
 */
  removelogo(
    options?: {
    filename?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "removelogo", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filename": options?.filename,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * This filter uses the repeat_field flag from the Video ES headers and hard repeats fields based on its value.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#repeatfields
 */
  repeatfields(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "repeatfields", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Reverse a video clip. Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#reverse
 */
  reverse(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "reverse", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Shift R/G/B/A pixels horizontally and/or vertically. The filter accepts the following options:

 *
 * @param options.rh - Set amount to shift red horizontally.
 * @param options.rv - Set amount to shift red vertically.
 * @param options.gh - Set amount to shift green horizontally.
 * @param options.gv - Set amount to shift green vertically.
 * @param options.bh - Set amount to shift blue horizontally.
 * @param options.bv - Set amount to shift blue vertically.
 * @param options.ah - Set amount to shift alpha horizontally.
 * @param options.av - Set amount to shift alpha vertically.
 * @param options.edge - Set edge mode, can be smear, default, or warp.
 * @see https://ffmpeg.org/ffmpeg-filters.html#rgbashift
 */
  rgbashift(
    options?: {
    rh?: FFInt;
    rv?: FFInt;
    gh?: FFInt;
    gv?: FFInt;
    bh?: FFInt;
    bv?: FFInt;
    ah?: FFInt;
    av?: FFInt;
    edge?: FFInt | "smear" | "wrap";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "rgbashift", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rh": options?.rh,
      "rv": options?.rv,
      "gh": options?.gh,
      "gv": options?.gv,
      "bh": options?.bh,
      "bv": options?.bv,
      "ah": options?.ah,
      "av": options?.av,
      "edge": options?.edge,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply roberts cross operator to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.scale - Set value which will be multiplied with filtered result.
 * @param options.delta - Set value which will be added to filtered result.
 * @see https://ffmpeg.org/ffmpeg-filters.html#roberts
 */
  roberts(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "roberts", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply the Roberts cross operator (https://en.wikipedia.org/wiki/Roberts_cross) to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes to filter. Default value is 0xf, by which all planes are processed.
 * @param options.scale - Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
 * @param options.delta - Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#roberts_opencl
 */
  roberts_opencl(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "roberts_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Rotate video by an arbitrary angle expressed in radians. The filter accepts the following options: A description of the optional parameters follows.

 *
 * @param options.angle - Set the angle expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.out_w - set output width expression (default "iw")
 * @param options.out_h - the output width and height, that is the size of the padded area as specified by the width and height expressions
 * @param options.fillcolor - Set the color used to fill the output area not covered by the rotated image. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown). Default value is "black".
 * @param options.bilinear - Enable bilinear interpolation if set to 1, a value of 0 disables it. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#rotate
 */
  rotate(
    options?: {
    angle?: FFString;
    out_w?: FFString;
    out_h?: FFString;
    fillcolor?: FFString;
    bilinear?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "rotate", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "angle": options?.angle,
      "out_w": options?.out_w,
      "out_h": options?.out_h,
      "fillcolor": options?.fillcolor,
      "bilinear": options?.bilinear,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply Shape Adaptive Blur. The filter accepts the following options:

 *
 * @param options.luma_radius - Set luma blur filter strength, must be a value in range 0.1-4.0, default value is 1.0. A greater value will result in a more blurred image, and in slower processing.
 * @param options.luma_pre_filter_radius - Set luma pre-filter radius, must be a value in the 0.1-2.0 range, default value is 1.0.
 * @param options.luma_strength - Set luma maximum difference between pixels to still be considered, must be a value in the 0.1-100.0 range, default value is 1.0.
 * @param options.chroma_radius - Set chroma blur filter strength, must be a value in range -0.9-4.0. A greater value will result in a more blurred image, and in slower processing.
 * @param options.chroma_pre_filter_radius - Set chroma pre-filter radius, must be a value in the -0.9-2.0 range.
 * @param options.chroma_strength - Set chroma maximum difference between pixels to still be considered, must be a value in the -0.9-100.0 range.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sab
 */
  sab(
    options?: {
    luma_radius?: FFFloat;
    luma_pre_filter_radius?: FFFloat;
    luma_strength?: FFFloat;
    chroma_radius?: FFFloat;
    chroma_pre_filter_radius?: FFFloat;
    chroma_strength?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sab", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_radius": options?.luma_radius,
      "luma_pre_filter_radius": options?.luma_pre_filter_radius,
      "luma_strength": options?.luma_strength,
      "chroma_radius": options?.chroma_radius,
      "chroma_pre_filter_radius": options?.chroma_pre_filter_radius,
      "chroma_strength": options?.chroma_strength,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale (resize) the input video, using the libswscale library. The scale filter forces the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio. If the input image format is different from the format requested by the next filter, the scale filter will convert the input to the requested format.

 *
 * @param options.w - Output video width
 * @param options.h - Set the output video dimension expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.flags - Set libswscale scaling flags. See the ffmpeg-scaler manual for the complete list of values. If not explicitly specified the filter applies the default flags.
 * @param options.interl - Set the interlacing mode. It accepts the following values: @end table Default value is 0.
 * @param options.size - Set the video size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @param options.in_color_matrix - set input YCbCr type (from -1 to 17) (default auto)
 * @param options.out_color_matrix - Set in/output YCbCr color space type. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. If not specified, the color space type depends on the pixel format. Possible values: @end table
 * @param options.in_range - set input color range (from 0 to 2) (default auto)
 * @param options.out_range - Set in/output YCbCr sample range. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. If not specified, the range depends on the pixel format. Possible values: @end table
 * @param options.in_chroma_loc - set input chroma sample location (from 0 to 6) (default auto)
 * @param options.out_chroma_loc - Set in/output chroma sample location. If not specified, center-sited chroma is used by default. Possible values: @end table
 * @param options.in_primaries - set input primaries (from -1 to 22) (default auto)
 * @param options.out_primaries - Set in/output RGB primaries. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. Possible values: @end table
 * @param options.in_transfer - set output color transfer (from -1 to 18) (default auto)
 * @param options.in_v_chr_pos - input vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.in_h_chr_pos - input horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.out_v_chr_pos - output vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.out_h_chr_pos - output horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.force_original_aspect_ratio - Enable decreasing or increasing output video width or height if necessary to keep the original aspect ratio. Possible values: @end table One useful instance of this option is that when you know a specific device's maximum allowed resolution, you can use this to limit the output video to that, while retaining the aspect ratio. For example, device A allows 1280x720 playback, and your video is 1920x800. Using this option (set it to decrease) and specifying 1280x720 to the command line makes the output 1280x533. Please note that this is a different thing than specifying -1 for w or h, you still need to specify the output resolution for this option to work.
 * @param options.force_divisible_by - Ensures that both the output dimensions, width and height, are divisible by the given integer when used together with force_original_aspect_ratio. This works similar to using -n in the w and h options. This option respects the value set for force_original_aspect_ratio, increasing or decreasing the resolution accordingly. The video's aspect ratio may be slightly modified. This option can be handy if you need to have a video fit within or exceed a defined resolution using force_original_aspect_ratio but also have encoder restrictions on width or height divisibility.
 * @param options.reset_sar - Enabling this option leads to the output SAR being reset to 1. Additionally, if the user requests proportional scaling either through the width or height expressions, e.g. w=-4:h=360 or w=iw/2:h=-1 or by enabling force_original_aspect_ratio, then the input DAR is taken into account and the output is scaled to produce square pixels. Default is false.
 * @param options.param0 - Set libswscale input parameters for scaling algorithms that need them. See the ffmpeg-scaler manual for the complete documentation. If not explicitly specified the filter applies empty parameters.
 * @param options.param1 - Set libswscale input parameters for scaling algorithms that need them. See the ffmpeg-scaler manual for the complete documentation. If not explicitly specified the filter applies empty parameters.
 * @param options.eval - Specify when to evaluate width and height expression. It accepts the following values: @end table Default value is init.
 * @see https://ffmpeg.org/ffmpeg-filters.html#scale
 */
  scale(
    options?: {
    w?: FFString;
    h?: FFString;
    flags?: FFString;
    interl?: FFBoolean;
    size?: FFString;
    in_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt470bg" | "bt709" | "fcc" | "smpte240m" | "bt2020" | "bt2020nc";
    out_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt470bg" | "bt709" | "fcc" | "smpte240m" | "bt2020" | "bt2020nc";
    in_range?: FFInt | "auto" | "unknown" | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
    out_range?: FFInt | "auto" | "unknown" | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
    in_chroma_loc?: FFInt | "auto" | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    out_chroma_loc?: FFInt | "auto" | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    in_primaries?: FFInt | "auto" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    out_primaries?: FFInt | "auto" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    in_transfer?: FFInt | "auto" | "bt709" | "bt470m" | "gamma22" | "bt470bg" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "iec61966-2-1" | "srgb" | "iec61966-2-4" | "xvycc" | "bt1361e" | "bt2020-10" | "bt2020-12" | "smpte2084" | "smpte428" | "arib-std-b67";
    in_v_chr_pos?: FFInt;
    in_h_chr_pos?: FFInt;
    out_v_chr_pos?: FFInt;
    out_h_chr_pos?: FFInt;
    force_original_aspect_ratio?: FFInt | "disable" | "decrease" | "increase";
    force_divisible_by?: FFInt;
    reset_sar?: FFBoolean;
    param0?: FFDouble;
    param1?: FFDouble;
    eval?: FFInt | "init" | "frame";
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scale", typingsInput: [], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "flags": options?.flags,
      "interl": options?.interl,
      "size": options?.size,
      "in_color_matrix": options?.in_color_matrix,
      "out_color_matrix": options?.out_color_matrix,
      "in_range": options?.in_range,
      "out_range": options?.out_range,
      "in_chroma_loc": options?.in_chroma_loc,
      "out_chroma_loc": options?.out_chroma_loc,
      "in_primaries": options?.in_primaries,
      "out_primaries": options?.out_primaries,
      "in_transfer": options?.in_transfer,
      "in_v_chr_pos": options?.in_v_chr_pos,
      "in_h_chr_pos": options?.in_h_chr_pos,
      "out_v_chr_pos": options?.out_v_chr_pos,
      "out_h_chr_pos": options?.out_h_chr_pos,
      "force_original_aspect_ratio": options?.force_original_aspect_ratio,
      "force_divisible_by": options?.force_divisible_by,
      "reset_sar": options?.reset_sar,
      "param0": options?.param0,
      "param1": options?.param1,
      "eval": options?.eval,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale the input video size and/or convert the image format to the given reference.

 *
 * @param options.w - Output video width
 * @param options.h - Output video height
 * @param options.flags - Flags to pass to libswscale (default "")
 * @param options.interl - set interlacing (default false)
 * @param options.size - set video size
 * @param options.in_color_matrix - set input YCbCr type (from -1 to 17) (default auto)
 * @param options.out_color_matrix - set output YCbCr type (from 0 to 17) (default 2)
 * @param options.in_range - set input color range (from 0 to 2) (default auto)
 * @param options.out_range - set output color range (from 0 to 2) (default auto)
 * @param options.in_chroma_loc - set input chroma sample location (from 0 to 6) (default auto)
 * @param options.out_chroma_loc - set output chroma sample location (from 0 to 6) (default auto)
 * @param options.in_primaries - set input primaries (from -1 to 22) (default auto)
 * @param options.out_primaries - set output primaries (from -1 to 22) (default auto)
 * @param options.in_transfer - set output color transfer (from -1 to 18) (default auto)
 * @param options.in_v_chr_pos - input vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.in_h_chr_pos - input horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.out_v_chr_pos - output vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.out_h_chr_pos - output horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
 * @param options.force_original_aspect_ratio - decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
 * @param options.force_divisible_by - enforce that the output resolution is divisible by a defined integer when force_original_aspect_ratio is used (from 1 to 256) (default 1)
 * @param options.reset_sar - reset SAR to 1 and scale to square pixels if scaling proportionally (default false)
 * @param options.param0 - Scaler param 0 (from -DBL_MAX to DBL_MAX) (default DBL_MAX)
 * @param options.param1 - Scaler param 1 (from -DBL_MAX to DBL_MAX) (default DBL_MAX)
 * @param options.eval - specify when to evaluate expressions (from 0 to 1) (default init)
 */
  scale2ref(
    _ref: VideoStream,

    options?: {
    w?: FFString;
    h?: FFString;
    flags?: FFString;
    interl?: FFBoolean;
    size?: FFString;
    in_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt470bg" | "bt709" | "fcc" | "smpte240m" | "bt2020" | "bt2020nc";
    out_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt470bg" | "bt709" | "fcc" | "smpte240m" | "bt2020" | "bt2020nc";
    in_range?: FFInt | "auto" | "unknown" | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
    out_range?: FFInt | "auto" | "unknown" | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
    in_chroma_loc?: FFInt | "auto" | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    out_chroma_loc?: FFInt | "auto" | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    in_primaries?: FFInt | "auto" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    out_primaries?: FFInt | "auto" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    in_transfer?: FFInt | "auto" | "bt709" | "bt470m" | "gamma22" | "bt470bg" | "gamma28" | "smpte170m" | "smpte240m" | "linear" | "iec61966-2-1" | "srgb" | "iec61966-2-4" | "xvycc" | "bt1361e" | "bt2020-10" | "bt2020-12" | "smpte2084" | "smpte428" | "arib-std-b67";
    in_v_chr_pos?: FFInt;
    in_h_chr_pos?: FFInt;
    out_v_chr_pos?: FFInt;
    out_h_chr_pos?: FFInt;
    force_original_aspect_ratio?: FFInt | "disable" | "decrease" | "increase";
    force_divisible_by?: FFInt;
    reset_sar?: FFBoolean;
    param0?: FFDouble;
    param1?: FFDouble;
    eval?: FFInt | "init" | "frame";
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "scale2ref", typingsInput: ["video", "video"], typingsOutput: ["video", "video"] },
      [this, _ref],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "flags": options?.flags,
      "interl": options?.interl,
      "size": options?.size,
      "in_color_matrix": options?.in_color_matrix,
      "out_color_matrix": options?.out_color_matrix,
      "in_range": options?.in_range,
      "out_range": options?.out_range,
      "in_chroma_loc": options?.in_chroma_loc,
      "out_chroma_loc": options?.out_chroma_loc,
      "in_primaries": options?.in_primaries,
      "out_primaries": options?.out_primaries,
      "in_transfer": options?.in_transfer,
      "in_v_chr_pos": options?.in_v_chr_pos,
      "in_h_chr_pos": options?.in_h_chr_pos,
      "out_v_chr_pos": options?.out_v_chr_pos,
      "out_h_chr_pos": options?.out_h_chr_pos,
      "force_original_aspect_ratio": options?.force_original_aspect_ratio,
      "force_divisible_by": options?.force_divisible_by,
      "reset_sar": options?.reset_sar,
      "param0": options?.param0,
      "param1": options?.param1,
      "eval": options?.eval,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Scale (resize) and convert (pixel format) the input video, using accelerated CUDA kernels. Setting the output width and height works in the same way as for the scale filter. The filter accepts the following options:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.w - Output video width (default "iw")
 * @param options.h - Set the output video dimension expression. Default value is the input dimension. Allows for the same expressions as the scale filter.
 * @param options.interp_algo - Sets the algorithm used for scaling: @end table
 * @param options.format - Controls the output pixel format. By default, or if none is specified, the input pixel format is used. The filter does not support converting between YUV and RGB pixel formats.
 * @param options.passthrough - If set to 0, every frame is processed, even if no conversion is necessary. This mode can be useful to use the filter as a buffer for a downstream frame-consumer that exhausts the limited decoder frame pool. If set to 1, frames are passed through as-is if they match the desired output parameters. This is the default behaviour.
 * @param options.use_filters - If set to 1, filter with a generic weight LUT instead of using fixed-function shader kernels. May be faster or slower depending on the hardware. A value of auto (the default) enables this automatically when required for correct anti-aliasing when downscaling.
 * @param options.param - Algorithm-Specific parameter. Affects the curves of the bicubic algorithm.
 * @param options.force_original_aspect_ratio - decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
 * @param options.force_divisible_by - Work the same as the identical scale filter options.
 * @param options.reset_sar - Works the same as the identical scale filter option.
 * @see https://ffmpeg.org/ffmpeg-filters.html#scale_cuda
 */
  scale_cuda(
    options?: {
    w?: FFString;
    h?: FFString;
    interp_algo?: FFInt | "nearest" | "bilinear" | "bicubic" | "lanczos";
    format?: FFPixFmt;
    passthrough?: FFBoolean;
    use_filters?: FFInt | "auto";
    param?: FFFloat;
    force_original_aspect_ratio?: FFInt | "disable" | "decrease" | "increase";
    force_divisible_by?: FFInt;
    reset_sar?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scale_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "interp_algo": options?.interp_algo,
      "format": options?.format,
      "passthrough": options?.passthrough,
      "use_filters": options?.use_filters,
      "param": options?.param,
      "force_original_aspect_ratio": options?.force_original_aspect_ratio,
      "force_divisible_by": options?.force_divisible_by,
      "reset_sar": options?.reset_sar,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale to/from VAAPI surfaces.

 *
 * @param options.w - Output video width (default "iw")
 * @param options.h - Output video height (default "ih")
 * @param options.format - Output video format (software format of hardware frames)
 * @param options.mode - Scaling mode (from 0 to 768) (default hq)
 * @param options.out_color_matrix - Output colour matrix coefficient set
 * @param options.out_range - Output colour range (from 0 to 2) (default 0)
 * @param options.out_color_primaries - Output colour primaries
 * @param options.out_color_transfer - Output colour transfer characteristics
 * @param options.out_chroma_location - Output chroma sample location
 * @param options.force_original_aspect_ratio - decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
 * @param options.force_divisible_by - enforce that the output resolution is divisible by a defined integer when force_original_aspect_ratio is used (from 1 to 256) (default 1)
 * @param options.reset_sar - reset SAR to 1 and scale to square pixels if scaling proportionally (default false)
 */
  scale_vaapi(
    options?: {
    w?: FFString;
    h?: FFString;
    format?: FFString;
    mode?: FFInt | "default" | "fast" | "hq" | "nl_anamorphic";
    out_color_matrix?: FFString;
    out_range?: FFInt | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
    out_color_primaries?: FFString;
    out_color_transfer?: FFString;
    out_chroma_location?: FFString;
    force_original_aspect_ratio?: FFInt | "disable" | "decrease" | "increase";
    force_divisible_by?: FFInt;
    reset_sar?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scale_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "format": options?.format,
      "mode": options?.mode,
      "out_color_matrix": options?.out_color_matrix,
      "out_range": options?.out_range,
      "out_color_primaries": options?.out_color_primaries,
      "out_color_transfer": options?.out_color_transfer,
      "out_chroma_location": options?.out_chroma_location,
      "force_original_aspect_ratio": options?.force_original_aspect_ratio,
      "force_divisible_by": options?.force_divisible_by,
      "reset_sar": options?.reset_sar,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale Vulkan frames

 *
 * @param options.w - Output video width (default "iw")
 * @param options.h - Output video height (default "ih")
 * @param options.scaler - Scaler function (from 0 to 2) (default bilinear)
 * @param options.debayer - Debayer algorithm to use (from 0 to 2) (default bilinear_hq)
 * @param options.format - Output video format (software format of hardware frames)
 * @param options.out_range - Output colour range (from 0 to 2) (default 0) (from 0 to 2) (default 0)
 */
  scale_vulkan(
    options?: {
    w?: FFString;
    h?: FFString;
    scaler?: FFInt | "bilinear" | "nearest";
    debayer?: FFInt | "bilinear" | "bilinear_hq";
    format?: FFString;
    out_range?: FFInt | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scale_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "scaler": options?.scaler,
      "debayer": options?.debayer,
      "format": options?.format,
      "out_range": options?.out_range,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect video scene change. This filter sets frame metadata with mafd between frame, the scene score, and forward the frame to the next filter, so they can use these metadata to detect scene change or others. In addition, this filter logs a message and sets frame metadata when it detects a scene change by threshold. lavfi.scd.mafd metadata keys are set with mafd for every frame. lavfi.scd.score metadata keys are set with scene change score for every frame to detect scene change. lavfi.scd.time metadata keys are set with current filtered frame time which detect scene change with threshold. The filter accepts the following options:

 *
 * @param options.threshold - Set the scene change detection threshold as a percentage of maximum change. Good values are in the [8.0, 14.0] range. The range for threshold is [0., 100.]. Default value is 10..
 * @param options.sc_pass - Set the flag to pass scene change frames to the next filter. Default value is 0 You can enable it if you want to get snapshot of scene change frames only.
 * @see https://ffmpeg.org/ffmpeg-filters.html#scdet
 */
  scdet(
    options?: {
    threshold?: FFDouble;
    sc_pass?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scdet", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "sc_pass": options?.sc_pass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect video scene change
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.threshold - set scene change detect threshold (from 0 to 100) (default 10)
 * @param options.sc_pass - Set the flag to pass scene change frames (default false)
 */
  scdet_vulkan(
    options?: {
    threshold?: FFDouble;
    sc_pass?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scdet_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "sc_pass": options?.sc_pass,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply scharr operator to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.scale - Set value which will be multiplied with filtered result.
 * @param options.delta - Set value which will be added to filtered result.
 * @see https://ffmpeg.org/ffmpeg-filters.html#scharr
 */
  scharr(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scharr", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scroll input video horizontally and/or vertically by constant speed. The filter accepts the following options:

 *
 * @param options.horizontal - Set the horizontal scrolling speed.
 * @param options.vertical - Set the vertical scrolling speed.
 * @param options.hpos - Set the initial horizontal scrolling position. Default is 0. Allowed range is from 0 to 1.
 * @param options.vpos - Set the initial vertical scrolling position. Default is 0. Allowed range is from 0 to 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#scroll
 */
  scroll(
    options?: {
    horizontal?: FFFloat;
    vertical?: FFFloat;
    hpos?: FFFloat;
    vpos?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "scroll", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "horizontal": options?.horizontal,
      "vertical": options?.vertical,
      "hpos": options?.hpos,
      "vpos": options?.vpos,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Split single input stream into multiple streams. This filter does opposite of concat filters. segment works on video frames, asegment on audio samples. This filter accepts the following options:

 *
 * @param options.timestamps - Timestamps of output segments separated by '|'. The first segment will run from the beginning of the input stream. The last segment will run until the end of the input stream
 * @param options.frames - Exact frame/sample count to split the segments.
 * @see https://ffmpeg.org/ffmpeg-filters.html#segment
 */
  segment(
    options?: {
    timestamps?: FFString;
    frames?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "segment", typingsInput: ["video"], typingsOutput: [] },
      [this],
      merge(
    {
      "timestamps": options?.timestamps,
      "frames": options?.frames,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Select frames to pass in output. This filter accepts the following options:

 *
 * @param options.expr - Set expression, which is evaluated for each input frame. If the expression is evaluated to zero, the frame is discarded. If the evaluation result is negative or NaN, the frame is sent to the first output; otherwise it is sent to the output with index ceil(val)-1, assuming that the input index starts from 0. For example a value of 1.2 corresponds to the output with index ceil(1.2)-1 = 2-1 = 1, that is the second output.
 * @param options.outputs - Set the number of outputs. The output to which to send the selected frame is based on the result of the evaluation. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#select
 */
  select(
    options?: {
    expr?: FFString;
    outputs?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "select", typingsInput: ["video"], typingsOutput: [] },
      [this],
      merge(
    {
      "expr": options?.expr,
      "outputs": options?.outputs,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Adjust cyan, magenta, yellow and black (CMYK) to certain ranges of colors (such as "reds", "yellows", "greens", "cyans", ...). The adjustment range is defined by the "purity" of the color (that is, how saturated it already is). This filter is similar to the Adobe Photoshop Selective Color tool. The filter accepts the following options:

 *
 * @param options.correction_method - Select color correction method. Available values are: @end table Default is absolute.
 * @param options.reds - Adjustments for red pixels (pixels where the red component is the maximum)
 * @param options.yellows - Adjustments for yellow pixels (pixels where the blue component is the minimum)
 * @param options.greens - Adjustments for green pixels (pixels where the green component is the maximum)
 * @param options.cyans - Adjustments for cyan pixels (pixels where the red component is the minimum)
 * @param options.blues - Adjustments for blue pixels (pixels where the blue component is the maximum)
 * @param options.magentas - Adjustments for magenta pixels (pixels where the green component is the minimum)
 * @param options.whites - Adjustments for white pixels (pixels where all components are greater than 128)
 * @param options.neutrals - Adjustments for all pixels except pure black and pure white
 * @param options.blacks - Adjustments for black pixels (pixels where all components are lesser than 128)
 * @param options.psfile - Specify a Photoshop selective color file (.asv) to import the settings from.
 * @see https://ffmpeg.org/ffmpeg-filters.html#selectivecolor
 */
  selectivecolor(
    options?: {
    correction_method?: FFInt | "absolute" | "relative";
    reds?: FFString;
    yellows?: FFString;
    greens?: FFString;
    cyans?: FFString;
    blues?: FFString;
    magentas?: FFString;
    whites?: FFString;
    neutrals?: FFString;
    blacks?: FFString;
    psfile?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "selectivecolor", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "correction_method": options?.correction_method,
      "reds": options?.reds,
      "yellows": options?.yellows,
      "greens": options?.greens,
      "cyans": options?.cyans,
      "blues": options?.blues,
      "magentas": options?.magentas,
      "whites": options?.whites,
      "neutrals": options?.neutrals,
      "blacks": options?.blacks,
      "psfile": options?.psfile,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Send commands to filters in the filtergraph. These filters read commands to be sent to other filters in the filtergraph. sendcmd must be inserted between two video filters, asendcmd must be inserted between two audio filters, but apart from that they act the same way. The specification of commands can be provided in the filter arguments with the commands option, or in a file specified by the filename option. These filters accept the following options:

 *
 * @param options.commands - Set the commands to be read and sent to the other filters.
 * @param options.filename - Set the filename of the commands to be read and sent to the other filters.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sendcmd
 */
  sendcmd(
    options?: {
    commands?: FFString;
    filename?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sendcmd", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "commands": options?.commands,
      "filename": options?.filename,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The separatefields takes a frame-based video input and splits each frame into its components fields, producing a new half height clip with twice the frame rate and twice the frame count. This filter use field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before separatefields filter.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#separatefields
 */
  separatefields(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "separatefields", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The setdar filter sets the Display Aspect Ratio for the filter output video. This is done by changing the specified Sample (aka Pixel) Aspect Ratio, according to the following equation: @example DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR @end example Keep in mind that the setdar filter does not modify the pixel dimensions of the video frame. Also, the display aspect ratio set by this filter may be changed by later filters in the filterchain, e.g. in case of scaling or if another "setdar" or a "setsar" filter is applied. The setsar filter sets the Sample (aka Pixel) Aspect Ratio for the filter output video. Note that as a consequence of the application of this filter, the output display aspect ratio will change according to the equation above. Keep in mind that the sample aspect ratio set by the setsar filter may be changed by later filters in the filterchain, e.g. if another "setsar" or a "setdar" filter is applied. It accepts the following parameters:

 *
 * @param options.dar - The input display aspect ratio. It is the same as (w / h) * sar.
 * @param options.max - Set the maximum integer value to use for expressing numerator and denominator when reducing the expressed aspect ratio to a rational. Default value is 100.
 * @see https://ffmpeg.org/ffmpeg-filters.html#setdar
 */
  setdar(
    options?: {
    dar?: FFString;
    max?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setdar", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dar": options?.dar,
      "max": options?.max,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Force field for the output video frame. The setfield filter marks the interlace type field for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters (e.g. fieldorder or yadif). The filter accepts the following options:

 *
 * @param options.mode - Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#setfield
 */
  setfield(
    options?: {
    mode?: FFInt | "auto" | "bff" | "tff" | "prog";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setfield", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Force frame parameter for the output video frame. The setparams filter marks interlace and color range for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by filters/encoders.

 *
 * @param options.field_mode - Available values are: @end table
 * @param options.range - Available values are: @end table
 * @param options.color_primaries - Set the color primaries. Available values are: @end table
 * @param options.color_trc - Set the color transfer. Available values are: @end table
 * @param options.colorspace - Set the colorspace. Available values are: @end table
 * @param options.chroma_location - Set the chroma sample location. Available values are: @end table
 * @param options.alpha_mode - Set the alpha moda. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#setparams
 */
  setparams(
    options?: {
    field_mode?: FFInt | "auto" | "bff" | "tff" | "prog";
    range?: FFInt | "auto" | "unspecified" | "unknown" | "limited" | "tv" | "mpeg" | "full" | "pc" | "jpeg";
    color_primaries?: FFInt | "auto" | "bt709" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213" | "vgamut";
    color_trc?: FFInt | "auto" | "bt709" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "linear" | "log100" | "log316" | "iec61966-2-4" | "bt1361e" | "iec61966-2-1" | "bt2020-10" | "bt2020-12" | "smpte2084" | "smpte428" | "arib-std-b67" | "vlog";
    colorspace?: FFInt | "auto" | "gbr" | "bt709" | "unknown" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "ycgco-re" | "ycgco-ro" | "bt2020nc" | "bt2020c" | "smpte2085" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp" | "ipt-c2";
    chroma_location?: FFInt | "auto" | "unspecified" | "unknown" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    alpha_mode?: FFInt | "auto" | "unspecified" | "unknown" | "premultiplied" | "straight";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setparams", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "field_mode": options?.field_mode,
      "range": options?.range,
      "color_primaries": options?.color_primaries,
      "color_trc": options?.color_trc,
      "colorspace": options?.colorspace,
      "chroma_location": options?.chroma_location,
      "alpha_mode": options?.alpha_mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Change the PTS (presentation timestamp) of the input frames. setpts works on video frames, asetpts on audio frames. This filter accepts the following options:

 *
 * @param options.expr - The expression which is evaluated for each frame to construct its timestamp.
 * @param options.strip_fps - Unset framerate metadata (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#setpts
 */
  setpts(
    options?: {
    expr?: FFString;
    strip_fps?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setpts", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "expr": options?.expr,
      "strip_fps": options?.strip_fps,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Force color range for the output video frame. The setrange filter marks the color range property for the output frames. It does not change the input frame, but only sets the corresponding property, which affects how the frame is treated by following filters. The filter accepts the following options:

 *
 * @param options.range - Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#setrange
 */
  setrange(
    options?: {
    range?: FFInt | "auto" | "unspecified" | "unknown" | "limited" | "tv" | "mpeg" | "full" | "pc" | "jpeg";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setrange", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "range": options?.range,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The setdar filter sets the Display Aspect Ratio for the filter output video. This is done by changing the specified Sample (aka Pixel) Aspect Ratio, according to the following equation: @example DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR @end example Keep in mind that the setdar filter does not modify the pixel dimensions of the video frame. Also, the display aspect ratio set by this filter may be changed by later filters in the filterchain, e.g. in case of scaling or if another "setdar" or a "setsar" filter is applied. The setsar filter sets the Sample (aka Pixel) Aspect Ratio for the filter output video. Note that as a consequence of the application of this filter, the output display aspect ratio will change according to the equation above. Keep in mind that the sample aspect ratio set by the setsar filter may be changed by later filters in the filterchain, e.g. if another "setsar" or a "setdar" filter is applied. It accepts the following parameters:

 *
 * @param options.sar - The input sample aspect ratio.
 * @param options.max - Set the maximum integer value to use for expressing numerator and denominator when reducing the expressed aspect ratio to a rational. Default value is 100.
 * @see https://ffmpeg.org/ffmpeg-filters.html#setdar
 */
  setsar(
    options?: {
    sar?: FFString;
    max?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "setsar", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sar": options?.sar,
      "max": options?.max,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration. It accepts the following parameters:

 *
 * @param options.expr - The expression which is evaluated into the output timebase.
 * @see https://ffmpeg.org/ffmpeg-filters.html#settb
 */
  settb(
    options?: {
    expr?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "settb", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "expr": options?.expr,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * VAAPI VPP for sharpness

 *
 * @param options.sharpness - sharpness level (from 0 to 64) (default 44)
 */
  sharpness_vaapi(
    options?: {
    sharpness?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sharpness_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "sharpness": options?.sharpness,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply shear transform to input video. This filter supports the following options:

 *
 * @param options.shx - Shear factor in X-direction. Default value is 0. Allowed range is from -2 to 2.
 * @param options.shy - Shear factor in Y-direction. Default value is 0. Allowed range is from -2 to 2.
 * @param options.fillcolor - Set the color used to fill the output area not covered by the transformed video. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown). Default value is "black".
 * @param options.interp - Set interpolation type. Can be bilinear or nearest. Default is bilinear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#shear
 */
  shear(
    options?: {
    shx?: FFFloat;
    shy?: FFFloat;
    fillcolor?: FFString;
    interp?: FFInt | "nearest" | "bilinear";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "shear", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "shx": options?.shx,
      "shy": options?.shy,
      "fillcolor": options?.fillcolor,
      "interp": options?.interp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Show a line containing various information for each input video frame. The input video is not modified. This filter supports the following options:

 *
 * @param options.checksum - The Adler-32 checksum (printed in hexadecimal) of all the planes of the input frame.
 * @param options.udu_sei_as_ascii - Try to print user data unregistered SEI as ascii character when possible, in hex format otherwise.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showinfo
 */
  showinfo(
    options?: {
    checksum?: FFBoolean;
    udu_sei_as_ascii?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showinfo", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "checksum": options?.checksum,
      "udu_sei_as_ascii": options?.udu_sei_as_ascii,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Displays the 256 colors palette of each frame. This filter is only relevant for pal8 pixel format frames. It accepts the following option:

 *
 * @param options.s - Set the size of the box used to represent one palette color entry. Default is 30 (for a 30x30 pixel box).
 * @see https://ffmpeg.org/ffmpeg-filters.html#showpalette
 */
  showpalette(
    options?: {
    s?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showpalette", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "s": options?.s,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }


















/**
 * Reorder and/or duplicate and/or drop video frames. It accepts the following parameters:

 *
 * @param options.mapping - Set the destination indexes of input frames. This is space or '|' separated list of indexes that maps input frames to output frames. Number of indexes also sets maximal value that each index may have. '-1' index have special meaning and that is to drop frame.
 * @see https://ffmpeg.org/ffmpeg-filters.html#shuffleframes
 */
  shuffleframes(
    options?: {
    mapping?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "shuffleframes", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mapping": options?.mapping,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Reorder pixels in video frames. This filter accepts the following options:

 *
 * @param options.direction - Set shuffle direction. Can be forward or inverse direction. Default direction is forward.
 * @param options.mode - Set shuffle mode. Can be horizontal, vertical or block mode.
 * @param options.width - set block width (from 1 to 8000) (default 10)
 * @param options.height - Set shuffle block_size. In case of horizontal shuffle mode only width part of size is used, and in case of vertical shuffle mode only height part of size is used.
 * @param options.seed - Set random seed used with shuffling pixels. Mainly useful to set to be able to reverse filtering process to get original input. For example, to reverse forward shuffle you need to use same parameters and exact same seed and to set direction to inverse.
 * @see https://ffmpeg.org/ffmpeg-filters.html#shufflepixels
 */
  shufflepixels(
    options?: {
    direction?: FFInt | "forward" | "inverse";
    mode?: FFInt | "horizontal" | "vertical" | "block";
    width?: FFInt;
    height?: FFInt;
    seed?: FFInt64;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "shufflepixels", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "direction": options?.direction,
      "mode": options?.mode,
      "width": options?.width,
      "height": options?.height,
      "seed": options?.seed,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Reorder and/or duplicate video planes. It accepts the following parameters:

 *
 * @param options.map0 - The index of the input plane to be used as the first output plane.
 * @param options.map1 - The index of the input plane to be used as the second output plane.
 * @param options.map2 - The index of the input plane to be used as the third output plane.
 * @param options.map3 - The index of the input plane to be used as the fourth output plane.
 * @see https://ffmpeg.org/ffmpeg-filters.html#shuffleplanes
 */
  shuffleplanes(
    options?: {
    map0?: FFInt;
    map1?: FFInt;
    map2?: FFInt;
    map3?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "shuffleplanes", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "map0": options?.map0,
      "map1": options?.map1,
      "map2": options?.map2,
      "map3": options?.map3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Delete frame side data, or select frames based on it. This filter accepts the following options:

 *
 * @param options.mode - Set mode of operation of the filter. Can be one of the following: @end table
 * @param options._type - Set side data type used with all modes. Must be set for select mode. Possible values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#sidedata
 */
  sidedata(
    options?: {
    mode?: FFInt | "select" | "delete";
    _type?: FFInt | "PANSCAN" | "A53_CC" | "STEREO3D" | "MATRIXENCODING" | "DOWNMIX_INFO" | "REPLAYGAIN" | "DISPLAYMATRIX" | "AFD" | "MOTION_VECTORS" | "SKIP_SAMPLES" | "AUDIO_SERVICE_TYPE" | "MASTERING_DISPLAY_METADATA" | "GOP_TIMECODE" | "SPHERICAL" | "CONTENT_LIGHT_LEVEL" | "ICC_PROFILE" | "S12M_TIMECOD" | "S12M_TIMECODE" | "DYNAMIC_HDR_PLUS" | "REGIONS_OF_INTEREST" | "VIDEO_ENC_PARAMS" | "SEI_UNREGISTERED" | "FILM_GRAIN_PARAMS" | "DETECTION_BOUNDING_BOXES" | "DETECTION_BBOXES" | "DOVI_RPU_BUFFER" | "DOVI_METADATA" | "DYNAMIC_HDR_VIVID" | "AMBIENT_VIEWING_ENVIRONMENT" | "VIDEO_HINT";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sidedata", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "type": options?._type,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Evaluate various visual metrics that assist in determining issues associated with the digitization of analog video media. By default the filter will log these metadata values:

 *
 * @param options.stat - set statistics filters (default 0)
 * @param options.out - stat specify an additional form of image analysis. out output video with the specified type of pixel highlighted. Both options accept the following values: @end table
 * @param options.c - Set the highlight color for the out option. The default color is yellow.
 * @see https://ffmpeg.org/ffmpeg-filters.html#signalstats
 */
  signalstats(
    options?: {
    stat?: FFFlags | "tout" | "vrep" | "brng";
    out?: FFInt | "tout" | "vrep" | "brng";
    c?: FFColor;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "signalstats", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "stat": options?.stat,
      "out": options?.out,
      "c": options?.c,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }
















/**
 * Calculate Spatial Information (SI) and Temporal Information (TI) scores for a video, as defined in ITU-T Rec. P.910 (11/21): Subjective video quality assessment methods for multimedia applications. Available PDF at https://www.itu.int/rec/T-REC-P.910-202111-S/en. Note that this is a legacy implementation that corresponds to a superseded recommendation. Refer to ITU-T Rec. P.910 (07/22) for the latest version: https://www.itu.int/rec/T-REC-P.910-202207-I/en It accepts the following option:

 *
 * @param options.print_summary - If set to 1, Summary statistics will be printed to the console. Default 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#siti
 */
  siti(
    options?: {
    print_summary?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "siti", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "print_summary": options?.print_summary,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Blur the input video without impacting the outlines. It accepts the following options:

 *
 * @param options.luma_radius - Set the luma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is 1.0.
 * @param options.luma_strength - Set the luma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is 1.0.
 * @param options.luma_threshold - Set the luma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is 0.
 * @param options.chroma_radius - Set the chroma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
 * @param options.chroma_strength - Set the chroma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
 * @param options.chroma_threshold - Set the chroma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
 * @param options.alpha_radius - Set the alpha radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
 * @param options.alpha_strength - Set the alpha strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
 * @param options.alpha_threshold - Set the alpha threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
 * @see https://ffmpeg.org/ffmpeg-filters.html#smartblur
 */
  smartblur(
    options?: {
    luma_radius?: FFFloat;
    luma_strength?: FFFloat;
    luma_threshold?: FFInt;
    chroma_radius?: FFFloat;
    chroma_strength?: FFFloat;
    chroma_threshold?: FFInt;
    alpha_radius?: FFFloat;
    alpha_strength?: FFFloat;
    alpha_threshold?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "smartblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_radius": options?.luma_radius,
      "luma_strength": options?.luma_strength,
      "luma_threshold": options?.luma_threshold,
      "chroma_radius": options?.chroma_radius,
      "chroma_strength": options?.chroma_strength,
      "chroma_threshold": options?.chroma_threshold,
      "alpha_radius": options?.alpha_radius,
      "alpha_strength": options?.alpha_strength,
      "alpha_threshold": options?.alpha_threshold,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Apply sobel operator to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.scale - Set value which will be multiplied with filtered result.
 * @param options.delta - Set value which will be added to filtered result.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sobel
 */
  sobel(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sobel", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply the Sobel operator (https://en.wikipedia.org/wiki/Sobel_operator) to input video stream. The filter accepts the following option:

 *
 * @param options.planes - Set which planes to filter. Default value is 0xf, by which all planes are processed.
 * @param options.scale - Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
 * @param options.delta - Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sobel_opencl
 */
  sobel_opencl(
    options?: {
    planes?: FFInt;
    scale?: FFFloat;
    delta?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "sobel_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "planes": options?.planes,
      "scale": options?.scale,
      "delta": options?.delta,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Synthesize audio from 2 input video spectrums, first input stream represents magnitude across time and second represents phase across time. The filter will transform from frequency domain as displayed in videos back to time domain as presented in audio output. This filter is primarily created for reversing processed showspectrum filter outputs, but can synthesize sound from other spectrograms too. But in such case results are going to be poor if the phase data is not available, because in such cases phase data need to be recreated, usually it's just recreated from random noise. For best results use gray only output (channel color mode in showspectrum filter) and log scale for magnitude video and lin scale for phase video. To produce phase, for 2nd video, use data option. Inputs videos should generally use fullframe slide mode as that saves resources needed for decoding video. The filter accepts the following options:

 *
 * @param options.sample_rate - Specify sample rate of output audio, the sample rate of audio from which spectrum was generated may differ.
 * @param options.channels - Set number of channels represented in input video spectrums.
 * @param options.scale - Set scale which was used when generating magnitude input spectrum. Can be lin or log. Default is log.
 * @param options.slide - Set slide which was used when generating inputs spectrums. Can be replace, scroll, fullframe or rscroll. Default is fullframe.
 * @param options.win_func - Set window function used for resynthesis.
 * @param options.overlap - Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked.
 * @param options.orientation - Set orientation of input videos. Can be vertical or horizontal. Default is vertical.
 * @see https://ffmpeg.org/ffmpeg-filters.html#spectrumsynth
 */
  spectrumsynth(
    _phase: VideoStream,

    options?: {
    sample_rate?: FFInt;
    channels?: FFInt;
    scale?: FFInt | "lin" | "log";
    slide?: FFInt | "replace" | "scroll" | "fullframe" | "rscroll";
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    overlap?: FFFloat;
    orientation?: FFInt | "vertical" | "horizontal";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "spectrumsynth", typingsInput: ["video", "video"], typingsOutput: ["audio"] },
      [this, _phase],
      merge(
    {
      "sample_rate": options?.sample_rate,
      "channels": options?.channels,
      "scale": options?.scale,
      "slide": options?.slide,
      "win_func": options?.win_func,
      "overlap": options?.overlap,
      "orientation": options?.orientation,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Split input into several identical outputs. asplit works with audio input, split with video. The filter accepts a single parameter which specifies the number of outputs. If unspecified, it defaults to 2.

 *
 * @param options.outputs - set number of outputs (from 1 to INT_MAX) (default 2)
 * @see https://ffmpeg.org/ffmpeg-filters.html#split
 */
  split(
    options?: {
    outputs?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "split", typingsInput: ["video"], typingsOutput: [] },
      [this],
      merge(
    {
      "outputs": options?.outputs,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Apply a simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 6 - all) shifts and average the results. The filter accepts the following options:

 *
 * @param options.quality - Set quality level. The value max can be used to set the maximum level, currently 6.
 * @param options.qp - Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available).
 * @param options.mode - Set thresholding mode. Available modes are: @end table
 * @param options.use_bframe_qp - Enable the use of the QP from the B-Frames if set to 1. Using this option may cause flicker since the B-Frames have often larger QP. Default is 0 (not enabled).
 * @see https://ffmpeg.org/ffmpeg-filters.html#spp
 */
  spp(
    options?: {
    quality?: FFInt;
    qp?: FFInt;
    mode?: FFInt | "hard" | "soft";
    use_bframe_qp?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "spp", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "quality": options?.quality,
      "qp": options?.qp,
      "mode": options?.mode,
      "use_bframe_qp": options?.use_bframe_qp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Obtain the SSIM (Structural SImilarity Metric) between two input videos. This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the SSIM. Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The filter stores the calculated SSIM of each frame. The description of the accepted parameters follows.

 *
 * @param options.stats_file - If specified the filter will use the named file to save the SSIM of each individual frame. When filename equals "-" the data is sent to standard output.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ssim
 */
  ssim(
    _reference: VideoStream,

    options?: {
    stats_file?: FFString;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ssim", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "stats_file": options?.stats_file,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Calculate the SSIM between two 360 video streams.

 *
 * @param options.stats_file - Set file where to store per-frame difference information
 * @param options.compute_chroma - Specifies if non-luma channels must be computed (from 0 to 1) (default 1)
 * @param options.frame_skip_ratio - Specifies the number of frames to be skipped from evaluation, for every evaluated frame (from 0 to 1e+06) (default 0)
 * @param options.ref_projection - projection of the reference video (from 0 to 4) (default e)
 * @param options.main_projection - projection of the main video (from 0 to 5) (default 5)
 * @param options.ref_stereo - stereo format of the reference video (from 0 to 2) (default mono)
 * @param options.main_stereo - stereo format of main video (from 0 to 3) (default 3)
 * @param options.ref_pad - Expansion (padding) coefficient for each cube face of the reference video (from 0 to 10) (default 0)
 * @param options.main_pad - Expansion (padding) coefficient for each cube face of the main video (from 0 to 10) (default 0)
 * @param options.use_tape - Specifies if the tape based SSIM 360 algorithm must be used independent of the input video types (from 0 to 1) (default 0)
 * @param options.heatmap_str - Heatmap data for view-based evaluation. For heatmap file format, please refer to EntSphericalVideoHeatmapData.
 * @param options.default_heatmap_width - Default heatmap dimension. Will be used when dimension is not specified in heatmap data. (from 1 to 4096) (default 32)
 * @param options.default_heatmap_height - Default heatmap dimension. Will be used when dimension is not specified in heatmap data. (from 1 to 4096) (default 16)
 */
  ssim360(
    _reference: VideoStream,

    options?: {
    stats_file?: FFString;
    compute_chroma?: FFInt;
    frame_skip_ratio?: FFInt;
    ref_projection?: FFInt | "e" | "equirect" | "c3x2" | "c2x3" | "barrel" | "barrelsplit";
    main_projection?: FFInt | "e" | "equirect" | "c3x2" | "c2x3" | "barrel" | "barrelsplit";
    ref_stereo?: FFInt | "mono" | "tb" | "lr";
    main_stereo?: FFInt | "mono" | "tb" | "lr";
    ref_pad?: FFFloat;
    main_pad?: FFFloat;
    use_tape?: FFInt;
    heatmap_str?: FFString;
    default_heatmap_width?: FFInt;
    default_heatmap_height?: FFInt;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ssim360", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "stats_file": options?.stats_file,
      "compute_chroma": options?.compute_chroma,
      "frame_skip_ratio": options?.frame_skip_ratio,
      "ref_projection": options?.ref_projection,
      "main_projection": options?.main_projection,
      "ref_stereo": options?.ref_stereo,
      "main_stereo": options?.main_stereo,
      "ref_pad": options?.ref_pad,
      "main_pad": options?.main_pad,
      "use_tape": options?.use_tape,
      "heatmap_str": options?.heatmap_str,
      "default_heatmap_width": options?.default_heatmap_width,
      "default_heatmap_height": options?.default_heatmap_height,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert between different stereoscopic image formats. The filters accept the following options:

 *
 * @param options._in - Set stereoscopic image format of input. Available values for input image formats are: @end table
 * @param options.out - Set stereoscopic image format of output. @end table Default value is arcd.
 * @see https://ffmpeg.org/ffmpeg-filters.html#stereo3d
 */
  stereo3d(
    options?: {
    _in?: FFInt | "ab2l" | "tb2l" | "ab2r" | "tb2r" | "abl" | "tbl" | "abr" | "tbr" | "al" | "ar" | "sbs2l" | "sbs2r" | "sbsl" | "sbsr" | "irl" | "irr" | "icl" | "icr";
    out?: FFInt | "ab2l" | "tb2l" | "ab2r" | "tb2r" | "abl" | "tbl" | "abr" | "tbr" | "agmc" | "agmd" | "agmg" | "agmh" | "al" | "ar" | "arbg" | "arcc" | "arcd" | "arcg" | "arch" | "argg" | "aybc" | "aybd" | "aybg" | "aybh" | "irl" | "irr" | "ml" | "mr" | "sbs2l" | "sbs2r" | "sbsl" | "sbsr" | "chl" | "chr" | "icl" | "icr" | "hdmi";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "stereo3d", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "in": options?._in,
      "out": options?.out,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }












/**
 * Draw subtitles on top of input video using the libass library. To enable compilation of this filter you need to configure FFmpeg with --enable-libass. This filter also requires a build with libavcodec and libavformat to convert the passed subtitles file to ASS (Advanced Substation Alpha) subtitles format. The filter accepts the following options:

 *
 * @param options.filename - Set the filename of the subtitle file to read. It must be specified.
 * @param options.original_size - Specify the size of the original video, the video for which the ASS file was composed. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Due to a misdesign in ASS aspect ratio arithmetic, this is necessary to correctly scale the fonts if the aspect ratio has been changed.
 * @param options.fontsdir - Set a directory path containing fonts that can be used by the filter. These fonts will be used in addition to whatever the font provider uses.
 * @param options.alpha - Process alpha channel, by default alpha channel is untouched.
 * @param options.charenc - Set subtitles input character encoding. subtitles filter only. Only useful if not UTF-8.
 * @param options.stream_index - Set subtitles stream index. subtitles filter only.
 * @param options.force_style - Override default style or script info parameters of the subtitles. It accepts a string containing ASS style format KEY=VALUE couples separated by ",".
 * @param options.wrap_unicode - Break lines according to the Unicode Line Breaking Algorithm. Availability requires at least libass release 0.17.0 (or LIBASS_VERSION 0x01600010), and libass must have been built with libunibreak. The option is enabled by default except for native ASS.
 * @param options.shaping - Set the shaping engine. Available values are: @end table The default is auto.
 * @see https://ffmpeg.org/ffmpeg-filters.html#subtitles
 */
  subtitles(
    options?: {
    filename?: FFString;
    original_size?: FFImageSize;
    fontsdir?: FFString;
    alpha?: FFBoolean;
    charenc?: FFString;
    stream_index?: FFInt;
    force_style?: FFString;
    wrap_unicode?: FFBoolean;
    shaping?: FFInt | "auto" | "simple" | "complex";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "subtitles", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filename": options?.filename,
      "original_size": options?.original_size,
      "fontsdir": options?.fontsdir,
      "alpha": options?.alpha,
      "charenc": options?.charenc,
      "stream_index": options?.stream_index,
      "force_style": options?.force_style,
      "wrap_unicode": options?.wrap_unicode,
      "shaping": options?.shaping,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale the input by 2x and smooth using the Super2xSaI (Scale and Interpolate) pixel art scaling algorithm. Useful for enlarging pixel art images without reducing sharpness.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#super2xsai
 */
  super2xsai(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "super2xsai", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Swap two rectangular objects in video. This filter accepts the following options:

 *
 * @param options.w - set rect width (default "w/2")
 * @param options.h - The input width and height.
 * @param options.x1 - Set 1st rect x coordinate.
 * @param options.y1 - Set 1st rect y coordinate.
 * @param options.x2 - Set 2nd rect x coordinate.
 * @param options.y2 - Set 2nd rect y coordinate. All expressions are evaluated once for each frame.
 * @see https://ffmpeg.org/ffmpeg-filters.html#swaprect
 */
  swaprect(
    options?: {
    w?: FFString;
    h?: FFString;
    x1?: FFString;
    y1?: FFString;
    x2?: FFString;
    y2?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "swaprect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "x1": options?.x1,
      "y1": options?.y1,
      "x2": options?.x2,
      "y2": options?.y2,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Swap U & V plane.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#swapuv
 */
  swapuv(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "swapuv", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Blend successive video frames. See blend

 *
 * @param options.c0_mode - set component #0 blend mode (from 0 to 39) (default normal)
 * @param options.c1_mode - set component #1 blend mode (from 0 to 39) (default normal)
 * @param options.c2_mode - set component #2 blend mode (from 0 to 39) (default normal)
 * @param options.c3_mode - set component #3 blend mode (from 0 to 39) (default normal)
 * @param options.all_mode - set blend mode for all components (from -1 to 39) (default -1)
 * @param options.c0_expr - set color component #0 expression
 * @param options.c1_expr - set color component #1 expression
 * @param options.c2_expr - set color component #2 expression
 * @param options.c3_expr - set color component #3 expression
 * @param options.all_expr - set expression for all color components
 * @param options.c0_opacity - set color component #0 opacity (from 0 to 1) (default 1)
 * @param options.c1_opacity - set color component #1 opacity (from 0 to 1) (default 1)
 * @param options.c2_opacity - set color component #2 opacity (from 0 to 1) (default 1)
 * @param options.c3_opacity - set color component #3 opacity (from 0 to 1) (default 1)
 * @param options.all_opacity - set opacity for all color components (from 0 to 1) (default 1)
 * @see https://ffmpeg.org/ffmpeg-filters.html#tblend
 */
  tblend(
    options?: {
    c0_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c1_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c2_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c3_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    all_mode?: FFInt | "addition" | "addition128" | "grainmerge" | "and" | "average" | "burn" | "darken" | "difference" | "difference128" | "grainextract" | "divide" | "dodge" | "exclusion" | "extremity" | "freeze" | "glow" | "hardlight" | "hardmix" | "heat" | "lighten" | "linearlight" | "multiply" | "multiply128" | "negation" | "normal" | "or" | "overlay" | "phoenix" | "pinlight" | "reflect" | "screen" | "softlight" | "subtract" | "vividlight" | "xor" | "softdifference" | "geometric" | "harmonic" | "bleach" | "stain" | "interpolate" | "hardoverlay";
    c0_expr?: FFString;
    c1_expr?: FFString;
    c2_expr?: FFString;
    c3_expr?: FFString;
    all_expr?: FFString;
    c0_opacity?: FFDouble;
    c1_opacity?: FFDouble;
    c2_opacity?: FFDouble;
    c3_opacity?: FFDouble;
    all_opacity?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tblend", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0_mode": options?.c0_mode,
      "c1_mode": options?.c1_mode,
      "c2_mode": options?.c2_mode,
      "c3_mode": options?.c3_mode,
      "all_mode": options?.all_mode,
      "c0_expr": options?.c0_expr,
      "c1_expr": options?.c1_expr,
      "c2_expr": options?.c2_expr,
      "c3_expr": options?.c3_expr,
      "all_expr": options?.all_expr,
      "c0_opacity": options?.c0_opacity,
      "c1_opacity": options?.c1_opacity,
      "c2_opacity": options?.c2_opacity,
      "c3_opacity": options?.c3_opacity,
      "all_opacity": options?.all_opacity,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply telecine process to the video. This filter accepts the following options:

 *
 * @param options.first_field - @end table
 * @param options.pattern - A string of numbers representing the pulldown pattern you wish to apply. The default value is 23.
 * @see https://ffmpeg.org/ffmpeg-filters.html#telecine
 */
  telecine(
    options?: {
    first_field?: FFInt | "top" | "t" | "bottom" | "b";
    pattern?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "telecine", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "first_field": options?.first_field,
      "pattern": options?.pattern,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Compute and draw a color distribution histogram for the input video across time. Unlike histogram video filter which only shows histogram of single input frame at certain time, this filter shows also past histograms of number of frames defined by width option. The computed histogram is a representation of the color component distribution in an image. The filter accepts the following options:

 *
 * @param options.width - Set width of single color component output. Default value is 0. Value of 0 means width will be picked from input video. This also set number of passed histograms to keep. Allowed range is [0, 8192].
 * @param options.display_mode - Set display mode. It accepts the following values: @end table Default is stack.
 * @param options.levels_mode - Set mode. Can be either linear, or logarithmic. Default is linear.
 * @param options.components - Set what color components to display. Default is 7.
 * @param options.bgopacity - Set background opacity. Default is 0.9.
 * @param options.envelope - Show envelope. Default is disabled.
 * @param options.ecolor - Set envelope color. Default is gold.
 * @param options.slide - Set slide mode. Available values for slide is: @end table Default is replace.
 * @see https://ffmpeg.org/ffmpeg-filters.html#thistogram
 */
  thistogram(
    options?: {
    width?: FFInt;
    display_mode?: FFInt | "overlay" | "parade" | "stack";
    levels_mode?: FFInt | "linear" | "logarithmic";
    components?: FFInt;
    bgopacity?: FFFloat;
    envelope?: FFBoolean;
    ecolor?: FFColor;
    slide?: FFInt | "frame" | "replace" | "scroll" | "rscroll" | "picture";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "thistogram", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "width": options?.width,
      "display_mode": options?.display_mode,
      "levels_mode": options?.levels_mode,
      "components": options?.components,
      "bgopacity": options?.bgopacity,
      "envelope": options?.envelope,
      "ecolor": options?.ecolor,
      "slide": options?.slide,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply threshold effect to video stream. This filter needs four video streams to perform thresholding. First stream is stream we are filtering. Second stream is holding threshold values, third stream is holding min values, and last, fourth stream is holding max values. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#threshold
 */
  threshold(
    _threshold: VideoStream,
    _min: VideoStream,
    _max: VideoStream,

    options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "threshold", typingsInput: ["video", "video", "video", "video"], typingsOutput: ["video"] },
      [this, _threshold, _min, _max],
      merge(
    {
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Select the most representative frame in a given sequence of consecutive frames. The filter accepts the following options:

 *
 * @param options.n - Set the frames batch size to analyze; in a set of n frames, the filter will pick one of them, and then handle the next batch of n frames until the end. Default is 100.
 * @param options.log - Set the log level to display picked frame stats. Default is info.
 * @see https://ffmpeg.org/ffmpeg-filters.html#thumbnail
 */
  thumbnail(
    options?: {
    n?: FFInt;
    log?: FFInt | "quiet" | "info" | "verbose";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "thumbnail", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
      "log": options?.log,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Select the most representative frame in a given sequence of consecutive frames using CUDA. The filter accepts the following options:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.n - Set the frames batch size to analyze; in a set of n frames, the filter will pick one of them, and then handle the next batch of n frames until the end. Default is 100.
 * @see https://ffmpeg.org/ffmpeg-filters.html#thumbnail_cuda
 */
  thumbnail_cuda(
    options?: {
    n?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "thumbnail_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Tile several successive frames together. The untile filter can do the reverse. The filter accepts the following options:

 *
 * @param options.layout - Set the grid size in the form COLUMNSxROWS. Range is up to UINT_MAX cells. Default is 6x5.
 * @param options.nb_frames - Set the maximum number of frames to render in the given area. It must be less than or equal to wxh. The default value is 0, meaning all the area will be used.
 * @param options.margin - Set the outer border margin in pixels. Range is 0 to 1024. Default is 0.
 * @param options.padding - Set the inner border thickness (i.e. the number of pixels between frames). For more advanced padding options (such as having different values for the edges), refer to the pad video filter. Range is 0 to 1024. Default is 0.
 * @param options.color - Specify the color of the unused area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
 * @param options.overlap - Set the number of frames to overlap when tiling several successive frames together. The value must be between 0 and nb_frames - 1. Default is 0.
 * @param options.init_padding - Set the number of frames to initially be empty before displaying first output frame. This controls how soon will one get first output frame. The value must be between 0 and nb_frames - 1. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tile
 */
  tile(
    options?: {
    layout?: FFImageSize;
    nb_frames?: FFInt;
    margin?: FFInt;
    padding?: FFInt;
    color?: FFColor;
    overlap?: FFInt;
    init_padding?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tile", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "layout": options?.layout,
      "nb_frames": options?.nb_frames,
      "margin": options?.margin,
      "padding": options?.padding,
      "color": options?.color,
      "overlap": options?.overlap,
      "init_padding": options?.init_padding,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply tilt-and-shift effect. What happens when you invert time and space? Normally a video is composed of several frames that represent a different instant of time and shows a scene that evolves in the space captured by the frame. This filter is the antipode of that concept, taking inspiration from tilt and shift photography. A filtered frame contains the whole timeline of events composing the sequence, and this is obtained by placing a slice of pixels from each frame into a single one. However, since there are no infinite-width frames, this is done up the width of the input frame, and a video is recomposed by shifting away one column for each subsequent frame. In order to map space to time, the filter tilts each input frame as well, so that motion is preserved. This is accomplished by progressively selecting a different column from each input frame. The end result is a sort of inverted parallax, so that far away objects move much faster that the ones in the front. The ideal conditions for this video effect are when there is either very little motion and the background is static, or when there is a lot of motion and a very wide depth of field (e.g. wide panorama, while moving on a train). The filter accepts the following parameters:

 *
 * @param options.tilt - Tilt video while shifting (default). When unset, video will be sliding a static image, composed of the first column of each frame.
 * @param options.start - What to do at the start of filtering (see below).
 * @param options.end - What to do at the end of filtering (see below).
 * @param options.hold - How many columns should pass through before start of filtering.
 * @param options.pad - How many columns should be inserted before end of filtering.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tiltandshift
 */
  tiltandshift(
    options?: {
    tilt?: FFInt;
    start?: FFInt | "none" | "frame" | "black";
    end?: FFInt | "none" | "frame" | "black";
    hold?: FFInt;
    pad?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tiltandshift", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "tilt": options?.tilt,
      "start": options?.start,
      "end": options?.end,
      "hold": options?.hold,
      "pad": options?.pad,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Perform various types of temporal field interlacing. Frames are counted starting from 1, so the first input frame is considered odd. The filter accepts the following options:

 *
 * @param options.mode - Specify the mode of the interlacing. This option can also be specified as a value alone. See below for a list of values for this option. Available values are: @end table Numeric values are deprecated but are accepted for backward compatibility reasons. Default mode is merge.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tinterlace
 */
  tinterlace(
    options?: {
    mode?: FFInt | "merge" | "drop_even" | "drop_odd" | "pad" | "interleave_top" | "interleave_bottom" | "interlacex2" | "mergex2";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tinterlace", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The lut2 filter takes two input streams and outputs one stream. The tlut2 (time lut2) filter takes two consecutive frames from one single stream. This filter accepts the following parameters:

 *
 * @param options.c0 - set first pixel component expression
 * @param options.c1 - set second pixel component expression
 * @param options.c2 - set third pixel component expression
 * @param options.c3 - set fourth pixel component expression, corresponds to the alpha component
 * @see https://ffmpeg.org/ffmpeg-filters.html#lut2
 */
  tlut2(
    options?: {
    c0?: FFString;
    c1?: FFString;
    c2?: FFString;
    c3?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tlut2", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Pick median pixels from several successive input video frames. The filter accepts the following options:

 *
 * @param options.radius - Set radius of median filter. Default is 1. Allowed range is from 1 to 127.
 * @param options.planes - Set which planes to filter. Default value is 15, by which all planes are processed.
 * @param options.percentile - Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tmedian
 */
  tmedian(
    options?: {
    radius?: FFInt;
    planes?: FFInt;
    percentile?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tmedian", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "radius": options?.radius,
      "planes": options?.planes,
      "percentile": options?.percentile,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply Temporal Midway Video Equalization effect. Midway Video Equalization adjusts a sequence of video frames to have the same histograms, while maintaining their dynamics as much as possible. It's useful for e.g. matching exposures from a video frames sequence. This filter accepts the following option:

 *
 * @param options.radius - Set filtering radius. Default is 5. Allowed range is from 1 to 127.
 * @param options.sigma - Set filtering sigma. Default is 0.5. This controls strength of filtering. Setting this option to 0 effectively does nothing.
 * @param options.planes - Set which planes to process. Default is 15, which is all available planes.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tmidequalizer
 */
  tmidequalizer(
    options?: {
    radius?: FFInt;
    sigma?: FFFloat;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tmidequalizer", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "radius": options?.radius,
      "sigma": options?.sigma,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Mix successive video frames. A description of the accepted options follows.

 *
 * @param options.frames - The number of successive frames to mix. If unspecified, it defaults to 3.
 * @param options.weights - set weight for each frame (default "1 1 1")
 * @param options.scale - set scale (from 0 to 32767) (default 0)
 * @param options.planes - Syntax is same as option with same name.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tmix
 */
  tmix(
    options?: {
    frames?: FFInt;
    weights?: FFString;
    scale?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tmix", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "frames": options?.frames,
      "weights": options?.weights,
      "scale": options?.scale,
      "planes": options?.planes,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Tone map colors from different dynamic ranges. This filter expects data in single precision floating point, as it needs to operate on (and can output) out-of-range values. Another filter, such as zscale, is needed to convert the resulting frame to a usable format. The tonemapping algorithms implemented only work on linear light, so input data should be linearized beforehand (and possibly correctly tagged). @example ffmpeg -i INPUT -vf zscale=transfer=linear,tonemap=clip,zscale=transfer=bt709,format=yuv420p OUTPUT @end example

 *
 * @param options.tonemap - Set the tone map algorithm to use. Possible values are: @end table Default is none.
 * @param options.param - Tune the tone mapping algorithm. This affects the following algorithms: @end table
 * @param options.desat - Apply desaturation for highlights that exceed this level of brightness. The higher the parameter, the more color information will be preserved. This setting helps prevent unnaturally blown-out colors for super-highlights, by (smoothly) turning into white instead. This makes images feel more natural, at the cost of reducing information about out-of-range colors. The default of 2.0 is somewhat conservative and will mostly just apply to skies or directly sunlit surfaces. A setting of 0.0 disables this option. This option works only if the input frame has a supported color tag.
 * @param options.peak - Override signal/nominal/reference peak with this value. Useful when the embedded peak information in display metadata is not reliable or when tone mapping from a lower range to a higher range.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tonemap
 */
  tonemap(
    options?: {
    tonemap?: FFInt | "none" | "linear" | "gamma" | "clip" | "reinhard" | "hable" | "mobius";
    param?: FFDouble;
    desat?: FFDouble;
    peak?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tonemap", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "tonemap": options?.tonemap,
      "param": options?.param,
      "desat": options?.desat,
      "peak": options?.peak,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Perform HDR(PQ/HLG) to SDR conversion with tone-mapping. It accepts the following parameters:

 *
 * @param options.tonemap - Specify the tone-mapping operator to be used. Same as tonemap option in tonemap.
 * @param options.transfer - Set the output transfer characteristics. Possible values are: @end table Default is bt709.
 * @param options.matrix - Set the output colorspace matrix. Possible value are: @end table Default is same as input.
 * @param options.primaries - Set the output color primaries. Possible values are: @end table Default is same as input.
 * @param options.range - Set the output color range. Possible values are: @end table Default is same as input.
 * @param options.format - Specify the output pixel format. Currently supported formats are: @end table
 * @param options.peak - signal peak override (from 0 to DBL_MAX) (default 0)
 * @param options.param - Tune the tone mapping algorithm. same as param option in tonemap.
 * @param options.desat - Apply desaturation for highlights that exceed this level of brightness. The higher the parameter, the more color information will be preserved. This setting helps prevent unnaturally blown-out colors for super-highlights, by (smoothly) turning into white instead. This makes images feel more natural, at the cost of reducing information about out-of-range colors. The default value is 0.5, and the algorithm here is a little different from the cpu version tonemap currently. A setting of 0.0 disables this option.
 * @param options.threshold - The tonemapping algorithm parameters is fine-tuned per each scene. And a threshold is used to detect whether the scene has changed or not. If the distance between the current frame average brightness and the current running average exceeds a threshold value, we would re-calculate scene average and peak brightness. The default value is 0.2.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tonemap_opencl
 */
  tonemap_opencl(
    options?: {
    tonemap?: FFInt | "none" | "linear" | "gamma" | "clip" | "reinhard" | "hable" | "mobius";
    transfer?: FFInt | "bt709" | "bt2020";
    matrix?: FFInt | "bt709" | "bt2020";
    primaries?: FFInt | "bt709" | "bt2020";
    range?: FFInt | "tv" | "pc" | "limited" | "full";
    format?: FFPixFmt;
    peak?: FFDouble;
    param?: FFDouble;
    desat?: FFDouble;
    threshold?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tonemap_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "tonemap": options?.tonemap,
      "transfer": options?.transfer,
      "matrix": options?.matrix,
      "primaries": options?.primaries,
      "range": options?.range,
      "format": options?.format,
      "peak": options?.peak,
      "param": options?.param,
      "desat": options?.desat,
      "threshold": options?.threshold,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Perform HDR-to-SDR or HDR-to-HDR tone-mapping. It currently only accepts HDR10 as input. It accepts the following parameters:

 *
 * @param options.format - Specify the output pixel format. Default is nv12 for HDR-to-SDR tone-mapping and p010 for HDR-to-HDR tone-mapping.
 * @param options.matrix - Set the output colorspace matrix. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
 * @param options.primaries - Set the output color primaries. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
 * @param options.transfer - Set the output transfer characteristics. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
 * @param options.display - Set the output mastering display colour volume. It is given by a '|'-separated list of two values, two values are space separated. It set display primaries x & y in G, B, R order, then white point x & y, the nominal minimum & maximum display luminances. HDR-to-HDR tone-mapping will be performed when this option is set.
 * @param options.light - Set the output content light level information. It accepts 2 space-separated values, the first input is the maximum light level and the second input is the maximum average light level. It is ignored for HDR-to-SDR tone-mapping, and optional for HDR-to-HDR tone-mapping.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tonemap_vaapi
 */
  tonemap_vaapi(
    options?: {
    format?: FFString;
    matrix?: FFString;
    primaries?: FFString;
    transfer?: FFString;
    display?: FFString;
    light?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tonemap_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "format": options?.format,
      "matrix": options?.matrix,
      "primaries": options?.primaries,
      "transfer": options?.transfer,
      "display": options?.display,
      "light": options?.light,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Temporarily pad video frames. The filter accepts the following options:

 *
 * @param options.start - Specify number of delay frames before input video stream. Default is 0.
 * @param options.stop - Specify number of padding frames after input video stream. Set to -1 to pad indefinitely. Default is 0.
 * @param options.start_mode - Set kind of frames added to beginning of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of first frame. Default is add.
 * @param options.stop_mode - Set kind of frames added to end of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of last frame. Default is add.
 * @param options.start_duration - Specify the duration of the start/stop delay. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop. Default is 0.
 * @param options.stop_duration - Specify the duration of the start/stop delay. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop. Default is 0.
 * @param options.color - Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
 * @see https://ffmpeg.org/ffmpeg-filters.html#tpad
 */
  tpad(
    options?: {
    start?: FFInt;
    stop?: FFInt;
    start_mode?: FFInt | "add" | "clone";
    stop_mode?: FFInt | "add" | "clone";
    start_duration?: FFDuration;
    stop_duration?: FFDuration;
    color?: FFColor;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "tpad", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "start": options?.start,
      "stop": options?.stop,
      "start_mode": options?.start_mode,
      "stop_mode": options?.stop_mode,
      "start_duration": options?.start_duration,
      "stop_duration": options?.stop_duration,
      "color": options?.color,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Transpose rows with columns in the input video and optionally flip it. It accepts the following parameters:

 *
 * @param options.dir - Specify the transposition direction. Can assume the following values: @end table For values between 4-7, the transposition is only done if the input video geometry is portrait and not landscape. These values are deprecated, the passthrough option should be used instead. Numerical values are deprecated, and should be dropped in favor of symbolic constants.
 * @param options.passthrough - Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values: @end table Default value is none.
 * @see https://ffmpeg.org/ffmpeg-filters.html#transpose
 */
  transpose(
    options?: {
    dir?: FFInt | "cclock_flip" | "clock" | "cclock" | "clock_flip";
    passthrough?: FFInt | "none" | "portrait" | "landscape";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "transpose", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dir": options?.dir,
      "passthrough": options?.passthrough,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Transpose rows with columns in the input video and optionally flip it. For more in depth examples see the transpose video filter, which shares mostly the same options. It accepts the following parameters:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.dir - Specify the transposition direction. Can assume the following values: @end table
 * @param options.passthrough - Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#transpose_cuda
 */
  transpose_cuda(
    options?: {
    dir?: FFInt | "cclock_flip" | "clock" | "cclock" | "clock_flip" | "reversal" | "hflip" | "vflip";
    passthrough?: FFInt | "none" | "landscape" | "portrait";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "transpose_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dir": options?.dir,
      "passthrough": options?.passthrough,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Transpose input video

 *
 * @param options.dir - set transpose direction (from 0 to 3) (default cclock_flip)
 * @param options.passthrough - do not apply transposition if the input matches the specified geometry (from 0 to INT_MAX) (default none)
 */
  transpose_opencl(
    options?: {
    dir?: FFInt | "cclock_flip" | "clock" | "cclock" | "clock_flip";
    passthrough?: FFInt | "none" | "portrait" | "landscape";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "transpose_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dir": options?.dir,
      "passthrough": options?.passthrough,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * VAAPI VPP for transpose

 *
 * @param options.dir - set transpose direction (from 0 to 6) (default cclock_flip)
 * @param options.passthrough - do not apply transposition if the input matches the specified geometry (from 0 to INT_MAX) (default none)
 */
  transpose_vaapi(
    options?: {
    dir?: FFInt | "cclock_flip" | "clock" | "cclock" | "clock_flip" | "reversal" | "hflip" | "vflip";
    passthrough?: FFInt | "none" | "portrait" | "landscape";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "transpose_vaapi", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dir": options?.dir,
      "passthrough": options?.passthrough,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Transpose rows with columns in the input video and optionally flip it. For more in depth examples see the transpose video filter, which shares mostly the same options. It accepts the following parameters:

 *
 * @param options.dir - Specify the transposition direction. Can assume the following values: @end table
 * @param options.passthrough - Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#transpose_vulkan
 */
  transpose_vulkan(
    options?: {
    dir?: FFInt | "cclock_flip" | "clock" | "cclock" | "clock_flip";
    passthrough?: FFInt | "none" | "portrait" | "landscape";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "transpose_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dir": options?.dir,
      "passthrough": options?.passthrough,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Trim the input so that the output contains one continuous subpart of the input. It accepts the following parameters:

 *
 * @param options.start - Specify the time of the start of the kept section, i.e. the frame with the timestamp start will be the first frame in the output.
 * @param options.end - Specify the time of the first frame that will be dropped, i.e. the frame immediately preceding the one with the timestamp end will be the last frame in the output.
 * @param options.start_pts - This is the same as start, except this option sets the start timestamp in timebase units instead of seconds.
 * @param options.end_pts - This is the same as end, except this option sets the end timestamp in timebase units instead of seconds.
 * @param options.duration - The maximum duration of the output in seconds.
 * @param options.start_frame - The number of the first frame that should be passed to the output.
 * @param options.end_frame - The number of the first frame that should be dropped.
 * @see https://ffmpeg.org/ffmpeg-filters.html#trim
 */
  trim(
    options?: {
    start?: FFDuration;
    end?: FFDuration;
    start_pts?: FFInt64;
    end_pts?: FFInt64;
    duration?: FFDuration;
    start_frame?: FFInt64;
    end_frame?: FFInt64;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "trim", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "start": options?.start,
      "end": options?.end,
      "start_pts": options?.start_pts,
      "end_pts": options?.end_pts,
      "duration": options?.duration,
      "start_frame": options?.start_frame,
      "end_frame": options?.end_frame,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Sharpen or blur the input video. It accepts the following parameters:

 *
 * @param options.luma_msize_x - Set the luma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.luma_msize_y - Set the luma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.luma_amount - Set the luma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 1.0.
 * @param options.chroma_msize_x - Set the chroma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.chroma_msize_y - Set the chroma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.chroma_amount - Set the chroma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 0.0.
 * @param options.alpha_msize_x - Set the alpha matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.alpha_msize_y - Set the alpha matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
 * @param options.alpha_amount - Set the alpha effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 0.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#unsharp
 */
  unsharp(
    options?: {
    luma_msize_x?: FFInt;
    luma_msize_y?: FFInt;
    luma_amount?: FFFloat;
    chroma_msize_x?: FFInt;
    chroma_msize_y?: FFInt;
    chroma_amount?: FFFloat;
    alpha_msize_x?: FFInt;
    alpha_msize_y?: FFInt;
    alpha_amount?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "unsharp", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_msize_x": options?.luma_msize_x,
      "luma_msize_y": options?.luma_msize_y,
      "luma_amount": options?.luma_amount,
      "chroma_msize_x": options?.chroma_msize_x,
      "chroma_msize_y": options?.chroma_msize_y,
      "chroma_amount": options?.chroma_amount,
      "alpha_msize_x": options?.alpha_msize_x,
      "alpha_msize_y": options?.alpha_msize_y,
      "alpha_amount": options?.alpha_amount,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Sharpen or blur the input video. It accepts the following parameters:

 *
 * @param options.luma_msize_x - Set the luma matrix horizontal size. Range is [1, 23] and default value is 5.
 * @param options.luma_msize_y - Set the luma matrix vertical size. Range is [1, 23] and default value is 5.
 * @param options.luma_amount - Set the luma effect strength. Range is [-10, 10] and default value is 1.0. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
 * @param options.chroma_msize_x - Set the chroma matrix horizontal size. Range is [1, 23] and default value is 5.
 * @param options.chroma_msize_y - Set the chroma matrix vertical size. Range is [1, 23] and default value is 5.
 * @param options.chroma_amount - Set the chroma effect strength. Range is [-10, 10] and default value is 0.0. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
 * @see https://ffmpeg.org/ffmpeg-filters.html#unsharp_opencl
 */
  unsharp_opencl(
    options?: {
    luma_msize_x?: FFFloat;
    luma_msize_y?: FFFloat;
    luma_amount?: FFFloat;
    chroma_msize_x?: FFFloat;
    chroma_msize_y?: FFFloat;
    chroma_amount?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "unsharp_opencl", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "luma_msize_x": options?.luma_msize_x,
      "luma_msize_y": options?.luma_msize_y,
      "luma_amount": options?.luma_amount,
      "chroma_msize_x": options?.chroma_msize_x,
      "chroma_msize_y": options?.chroma_msize_y,
      "chroma_amount": options?.chroma_amount,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Decompose a video made of tiled images into the individual images. The frame rate of the output video is the frame rate of the input video multiplied by the number of tiles. This filter does the reverse of tile. The filter accepts the following options:

 *
 * @param options.layout - Set the grid size (i.e. the number of lines and columns). For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @see https://ffmpeg.org/ffmpeg-filters.html#untile
 */
  untile(
    options?: {
    layout?: FFImageSize;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "untile", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "layout": options?.layout,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply ultra slow/simple postprocessing filter that compresses and decompresses the image at several (or - in the case of quality level 8 - all) shifts and average the results. The way this differs from the behavior of spp is that uspp actually encodes & decodes each case with libavcodec Snow, whereas spp uses a simplified intra only 8x8 DCT similar to MJPEG. This filter is not available in ffmpeg versions between 5.0 and 6.0. The filter accepts the following options:

 *
 * @param options.quality - Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 0-8. If set to 0, the filter will have no effect. A value of 8 means the higher quality. For each increment of that value the speed drops by a factor of approximately 2. Default value is 3.
 * @param options.qp - Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available).
 * @param options.use_bframe_qp - use B-frames' QP (default false)
 * @param options.codec - Use specified codec instead of snow.
 * @see https://ffmpeg.org/ffmpeg-filters.html#uspp
 */
  uspp(
    options?: {
    quality?: FFInt;
    qp?: FFInt;
    use_bframe_qp?: FFBoolean;
    codec?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "uspp", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "quality": options?.quality,
      "qp": options?.qp,
      "use_bframe_qp": options?.use_bframe_qp,
      "codec": options?.codec,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert 360 videos between various formats. The filter accepts the following options:

 *
 * @param options.input - set input projection (from 0 to 24) (default e)
 * @param options.output - Set format of the input/output video. Available formats: @end table
 * @param options.interp - Set interpolation method.@* Note: more complex interpolation methods require much more memory to run. Available methods: @end table Default value is line.
 * @param options.w - output width (from 0 to 32767) (default 0)
 * @param options.h - Set the output video resolution. Default resolution depends on formats.
 * @param options.in_stereo - input stereo format (from 0 to 2) (default 2d)
 * @param options.out_stereo - Set the input/output stereo format. @end table Default value is 2d for input and output format.
 * @param options.in_forder - input cubemap face order (default "rludfb")
 * @param options.out_forder - output cubemap face order (default "rludfb")
 * @param options.in_frot - input cubemap face rotation (default "000000")
 * @param options.out_frot - output cubemap face rotation (default "000000")
 * @param options.in_pad - percent input cubemap pads (from 0 to 0.1) (default 0)
 * @param options.out_pad - percent output cubemap pads (from 0 to 0.1) (default 0)
 * @param options.fin_pad - fixed input cubemap pads (from 0 to 100) (default 0)
 * @param options.fout_pad - fixed output cubemap pads (from 0 to 100) (default 0)
 * @param options.yaw - yaw rotation (from -180 to 180) (default 0)
 * @param options.pitch - pitch rotation (from -180 to 180) (default 0)
 * @param options.roll - Set rotation for the output video. Values in degrees.
 * @param options.rorder - Set rotation order for the output video. Choose one item for each position. @end table Default value is ypr.
 * @param options.h_fov - output horizontal field of view (from 0 to 360) (default 0)
 * @param options.v_fov - output vertical field of view (from 0 to 360) (default 0)
 * @param options.d_fov - output diagonal field of view (from 0 to 360) (default 0)
 * @param options.h_flip - flip out video horizontally (default false)
 * @param options.v_flip - flip out video vertically (default false)
 * @param options.d_flip - Flip the output video horizontally(swaps left-right)/vertically(swaps up-down)/in-depth(swaps back-forward). Boolean values.
 * @param options.ih_flip - flip in video horizontally (default false)
 * @param options.iv_flip - Set if input video is flipped horizontally/vertically. Boolean values.
 * @param options.in_trans - Set if input video is transposed. Boolean value, by default disabled.
 * @param options.out_trans - Set if output video needs to be transposed. Boolean value, by default disabled.
 * @param options.ih_fov - input horizontal field of view (from 0 to 360) (default 0)
 * @param options.iv_fov - input vertical field of view (from 0 to 360) (default 0)
 * @param options.id_fov - input diagonal field of view (from 0 to 360) (default 0)
 * @param options.h_offset - output horizontal off-axis offset (from -1 to 1) (default 0)
 * @param options.v_offset - Set output horizontal/vertical off-axis offset. Default is set to 0. Allowed range is from -1 to 1.
 * @param options.alpha_mask - Build mask in alpha plane for all unmapped pixels by marking them fully transparent. Boolean value, by default disabled.
 * @param options.reset_rot - Reset rotation of output video. Boolean value, by default disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#v360
 */
  v360(
    options?: {
    input?: FFInt | "e" | "equirect" | "c3x2" | "c6x1" | "eac" | "dfisheye" | "flat" | "rectilinear" | "gnomonic" | "barrel" | "fb" | "c1x6" | "sg" | "mercator" | "ball" | "hammer" | "sinusoidal" | "fisheye" | "pannini" | "cylindrical" | "tetrahedron" | "barrelsplit" | "tsp" | "hequirect" | "he" | "equisolid" | "og" | "octahedron" | "cylindricalea";
    output?: FFInt | "e" | "equirect" | "c3x2" | "c6x1" | "eac" | "dfisheye" | "flat" | "rectilinear" | "gnomonic" | "barrel" | "fb" | "c1x6" | "sg" | "mercator" | "ball" | "hammer" | "sinusoidal" | "fisheye" | "pannini" | "cylindrical" | "perspective" | "tetrahedron" | "barrelsplit" | "tsp" | "hequirect" | "he" | "equisolid" | "og" | "octahedron" | "cylindricalea";
    interp?: FFInt | "near" | "nearest" | "line" | "linear" | "lagrange9" | "cube" | "cubic" | "lanc" | "lanczos" | "sp16" | "spline16" | "gauss" | "gaussian" | "mitchell";
    w?: FFInt;
    h?: FFInt;
    in_stereo?: FFInt | "2d" | "sbs" | "tb";
    out_stereo?: FFInt | "2d" | "sbs" | "tb";
    in_forder?: FFString;
    out_forder?: FFString;
    in_frot?: FFString;
    out_frot?: FFString;
    in_pad?: FFFloat;
    out_pad?: FFFloat;
    fin_pad?: FFInt;
    fout_pad?: FFInt;
    yaw?: FFFloat;
    pitch?: FFFloat;
    roll?: FFFloat;
    rorder?: FFString;
    h_fov?: FFFloat;
    v_fov?: FFFloat;
    d_fov?: FFFloat;
    h_flip?: FFBoolean;
    v_flip?: FFBoolean;
    d_flip?: FFBoolean;
    ih_flip?: FFBoolean;
    iv_flip?: FFBoolean;
    in_trans?: FFBoolean;
    out_trans?: FFBoolean;
    ih_fov?: FFFloat;
    iv_fov?: FFFloat;
    id_fov?: FFFloat;
    h_offset?: FFFloat;
    v_offset?: FFFloat;
    alpha_mask?: FFBoolean;
    reset_rot?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "v360", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "input": options?.input,
      "output": options?.output,
      "interp": options?.interp,
      "w": options?.w,
      "h": options?.h,
      "in_stereo": options?.in_stereo,
      "out_stereo": options?.out_stereo,
      "in_forder": options?.in_forder,
      "out_forder": options?.out_forder,
      "in_frot": options?.in_frot,
      "out_frot": options?.out_frot,
      "in_pad": options?.in_pad,
      "out_pad": options?.out_pad,
      "fin_pad": options?.fin_pad,
      "fout_pad": options?.fout_pad,
      "yaw": options?.yaw,
      "pitch": options?.pitch,
      "roll": options?.roll,
      "rorder": options?.rorder,
      "h_fov": options?.h_fov,
      "v_fov": options?.v_fov,
      "d_fov": options?.d_fov,
      "h_flip": options?.h_flip,
      "v_flip": options?.v_flip,
      "d_flip": options?.d_flip,
      "ih_flip": options?.ih_flip,
      "iv_flip": options?.iv_flip,
      "in_trans": options?.in_trans,
      "out_trans": options?.out_trans,
      "ih_fov": options?.ih_fov,
      "iv_fov": options?.iv_fov,
      "id_fov": options?.id_fov,
      "h_offset": options?.h_offset,
      "v_offset": options?.v_offset,
      "alpha_mask": options?.alpha_mask,
      "reset_rot": options?.reset_rot,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert 360 projection of video.
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.input - set input projection (from 0 to 24) (default e)
 * @param options.output - set output projection (from 0 to 24) (default flat)
 * @param options.w - output width (from 0 to 32767) (default 0)
 * @param options.h - output height (from 0 to 32767) (default 0)
 * @param options.yaw - yaw rotation (from -180 to 180) (default 0)
 * @param options.pitch - pitch rotation (from -180 to 180) (default 0)
 * @param options.roll - roll rotation (from -180 to 180) (default 0)
 * @param options.rorder - rotation order (default "ypr")
 * @param options.h_fov - set output horizontal FOV angle (from 1e-05 to 360) (default 90)
 * @param options.v_fov - set output vertical FOV angle (from 1e-05 to 360) (default 45)
 * @param options.ih_fov - set input horizontal FOV angle (from 1e-05 to 360) (default 90)
 * @param options.iv_fov - set input vertical FOV angle (from 1e-05 to 360) (default 45)
 */
  v360_vulkan(
    options?: {
    input?: FFInt | "e" | "equirect" | "flat" | "dfisheye" | "sg" | "fisheye";
    output?: FFInt | "e" | "equirect" | "flat" | "dfisheye" | "sg" | "fisheye";
    w?: FFInt;
    h?: FFInt;
    yaw?: FFFloat;
    pitch?: FFFloat;
    roll?: FFFloat;
    rorder?: FFString;
    h_fov?: FFFloat;
    v_fov?: FFFloat;
    ih_fov?: FFFloat;
    iv_fov?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "v360_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "input": options?.input,
      "output": options?.output,
      "w": options?.w,
      "h": options?.h,
      "yaw": options?.yaw,
      "pitch": options?.pitch,
      "roll": options?.roll,
      "rorder": options?.rorder,
      "h_fov": options?.h_fov,
      "v_fov": options?.v_fov,
      "ih_fov": options?.ih_fov,
      "iv_fov": options?.iv_fov,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply a wavelet based denoiser. It transforms each frame from the video input into the wavelet domain, using Cohen-Daubechies-Feauveau 9/7. Then it applies some filtering to the obtained coefficients. It does an inverse wavelet transform after. Due to wavelet properties, it should give a nice smoothed result, and reduced noise, without blurring picture features. This filter accepts the following options:

 *
 * @param options.threshold - The filtering strength. The higher, the more filtered the video will be. Hard thresholding can use a higher threshold than soft thresholding before the video looks overfiltered. Default value is 2.
 * @param options.method - The filtering method the filter will use. It accepts the following values: @end table Default is garrote.
 * @param options.nsteps - Number of times, the wavelet will decompose the picture. Picture can't be decomposed beyond a particular point (typically, 8 for a 640x480 frame - as 2^9 = 512 > 480). Valid values are integers between 1 and 32. Default value is 6.
 * @param options.percent - Partial of full denoising (limited coefficients shrinking), from 0 to 100. Default value is 85.
 * @param options.planes - A list of the planes to process. By default all planes are processed.
 * @param options._type - The threshold type the filter will use. It accepts the following values: @end table Default is universal.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vaguedenoiser
 */
  vaguedenoiser(
    options?: {
    threshold?: FFFloat;
    method?: FFInt | "hard" | "soft" | "garrote";
    nsteps?: FFInt;
    percent?: FFFloat;
    planes?: FFInt;
    _type?: FFInt | "universal" | "bayes";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vaguedenoiser", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "method": options?.method,
      "nsteps": options?.nsteps,
      "percent": options?.percent,
      "planes": options?.planes,
      "type": options?._type,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply variable blur filter by using 2nd video stream to set blur radius. The 2nd stream must have the same dimensions. This filter accepts the following options:

 *
 * @param options.min_r - Set min allowed radius. Allowed range is from 0 to 254. Default is 0.
 * @param options.max_r - Set max allowed radius. Allowed range is from 1 to 255. Default is 8.
 * @param options.planes - Set which planes to process. By default, all are used.
 * @see https://ffmpeg.org/ffmpeg-filters.html#varblur
 */
  varblur(
    _radius: VideoStream,

    options?: {
    min_r?: FFInt;
    max_r?: FFInt;
    planes?: FFInt;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "varblur", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _radius],
      merge(
    {
      "min_r": options?.min_r,
      "max_r": options?.max_r,
      "planes": options?.planes,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Display 2 color component values in the two dimensional graph (which is called a vectorscope). This filter accepts the following options:

 *
 * @param options.mode - Set vectorscope mode. It accepts the following values: @end table
 * @param options.x - Set which color component will be represented on X-axis. Default is 1.
 * @param options.y - Set which color component will be represented on Y-axis. Default is 2.
 * @param options.intensity - Set intensity, used by modes: gray, color, color3 and color5 for increasing brightness of color component which represents frequency of (X, Y) location in graph.
 * @param options.envelope - @end table
 * @param options.graticule - Set what kind of graticule to draw. @end table
 * @param options.opacity - Set graticule opacity.
 * @param options.flags - Set graticule flags. @end table
 * @param options.bgopacity - Set background opacity.
 * @param options.lthreshold - Set low threshold for color component not represented on X or Y axis. Values lower than this value will be ignored. Default is 0. Note this value is multiplied with actual max possible value one pixel component can have. So for 8-bit input and low threshold value of 0.1 actual threshold is 0.1 * 255 = 25.
 * @param options.hthreshold - Set high threshold for color component not represented on X or Y axis. Values higher than this value will be ignored. Default is 1. Note this value is multiplied with actual max possible value one pixel component can have. So for 8-bit input and high threshold value of 0.9 actual threshold is 0.9 * 255 = 230.
 * @param options.colorspace - Set what kind of colorspace to use when drawing graticule. @end table Default is auto.
 * @param options.tint0 - set 1st tint (from -1 to 1) (default 0)
 * @param options.tint1 - Set color tint for gray/tint vectorscope mode. By default both options are zero. This means no tint, and output will remain gray.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vectorscope
 */
  vectorscope(
    options?: {
    mode?: FFInt | "gray" | "tint" | "color" | "color2" | "color3" | "color4" | "color5";
    x?: FFInt;
    y?: FFInt;
    intensity?: FFFloat;
    envelope?: FFInt | "none" | "instant" | "peak" | "peak+instant";
    graticule?: FFInt | "none" | "green" | "color" | "invert";
    opacity?: FFFloat;
    flags?: FFFlags | "white" | "black" | "name";
    bgopacity?: FFFloat;
    lthreshold?: FFFloat;
    hthreshold?: FFFloat;
    colorspace?: FFInt | "auto" | "601" | "709";
    tint0?: FFFloat;
    tint1?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vectorscope", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "x": options?.x,
      "y": options?.y,
      "intensity": options?.intensity,
      "envelope": options?.envelope,
      "graticule": options?.graticule,
      "opacity": options?.opacity,
      "flags": options?.flags,
      "bgopacity": options?.bgopacity,
      "lthreshold": options?.lthreshold,
      "hthreshold": options?.hthreshold,
      "colorspace": options?.colorspace,
      "tint0": options?.tint0,
      "tint1": options?.tint1,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Flip the input video vertically. For example, to vertically flip a video with ffmpeg: @example ffmpeg -i in.avi -vf "vflip" out.avi @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#vflip
 */
  vflip(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vflip", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Flips an image vertically.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#vflip_vulkan
 */
  vflip_vulkan(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vflip_vulkan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Detect variable frame rate video. This filter tries to detect if the input is variable or constant frame rate. At end it will output number of frames detected as having variable delta pts, and ones with constant delta pts. If there was frames with variable delta, than it will also show min, max and average delta encountered.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#vfrdet
 */
  vfrdet(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vfrdet", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Boost or alter saturation. The filter accepts the following options:

 *
 * @param options.intensity - Set strength of boost if positive value or strength of alter if negative value. Default is 0. Allowed range is from -2 to 2.
 * @param options.rbal - Set the red balance. Default is 1. Allowed range is from -10 to 10.
 * @param options.gbal - Set the green balance. Default is 1. Allowed range is from -10 to 10.
 * @param options.bbal - Set the blue balance. Default is 1. Allowed range is from -10 to 10.
 * @param options.rlum - Set the red luma coefficient.
 * @param options.glum - Set the green luma coefficient.
 * @param options.blum - Set the blue luma coefficient.
 * @param options.alternate - If intensity is negative and this is set to 1, colors will change, otherwise colors will be less saturated, more towards gray.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vibrance
 */
  vibrance(
    options?: {
    intensity?: FFFloat;
    rbal?: FFFloat;
    gbal?: FFFloat;
    bbal?: FFFloat;
    rlum?: FFFloat;
    glum?: FFFloat;
    blum?: FFFloat;
    alternate?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vibrance", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "intensity": options?.intensity,
      "rbal": options?.rbal,
      "gbal": options?.gbal,
      "bbal": options?.bbal,
      "rlum": options?.rlum,
      "glum": options?.glum,
      "blum": options?.blum,
      "alternate": options?.alternate,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Analyze video stabilization/deshaking. Perform pass 1 of 2, see vidstabtransform for pass 2. This filter generates a file with relative translation and rotation transform information about subsequent frames, which is then used by the vidstabtransform filter. To enable compilation of this filter you need to configure FFmpeg with --enable-libvidstab. This filter accepts the following options:

 *
 * @param options.result - Set the path to the file used to write the transforms information. Default value is transforms.trf.
 * @param options.shakiness - Set how shaky the video is and how quick the camera is. It accepts an integer in the range 1-10, a value of 1 means little shakiness, a value of 10 means strong shakiness. Default value is 5.
 * @param options.accuracy - Set the accuracy of the detection process. It must be a value in the range 1-15. A value of 1 means low accuracy, a value of 15 means high accuracy. Default value is 15.
 * @param options.stepsize - Set stepsize of the search process. The region around minimum is scanned with 1 pixel resolution. Default value is 6.
 * @param options.mincontrast - Set minimum contrast. Below this value a local measurement field is discarded. Must be a floating point value in the range 0-1. Default value is 0.3.
 * @param options.show - Show fields and transforms in the resulting frames. It accepts an integer in the range 0-2. Default value is 0, which disables any visualization.
 * @param options.tripod - Set reference frame number for tripod mode. If enabled, the motion of the frames is compared to a reference frame in the filtered stream, identified by the specified number. The idea is to compensate all movements in a more-or-less static scene and keep the camera view absolutely still. If set to 0, it is disabled. The frames are counted starting from 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vidstabdetect
 */
  vidstabdetect(
    options?: {
    result?: FFString;
    shakiness?: FFInt;
    accuracy?: FFInt;
    stepsize?: FFInt;
    mincontrast?: FFDouble;
    show?: FFInt;
    tripod?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vidstabdetect", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "result": options?.result,
      "shakiness": options?.shakiness,
      "accuracy": options?.accuracy,
      "stepsize": options?.stepsize,
      "mincontrast": options?.mincontrast,
      "show": options?.show,
      "tripod": options?.tripod,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Video stabilization/deshaking: pass 2 of 2, see vidstabdetect for pass 1. Read a file with transform information for each frame and apply/compensate them. Together with the vidstabdetect filter this can be used to deshake videos. See also http://public.hronopik.de/vid.stab. It is important to also use the unsharp filter, see below. To enable compilation of this filter you need to configure FFmpeg with --enable-libvidstab.

 *
 * @param options.input - Set path to the file used to read the transforms. Default value is transforms.trf.
 * @param options.smoothing - Set the number of frames (value*2 + 1) used for lowpass filtering the camera movements. Default value is 10. For example a number of 10 means that 21 frames are used (10 in the past and 10 in the future) to smoothen the motion in the video. A larger value leads to a smoother video, but limits the acceleration of the camera (pan/tilt movements). 0 is a special case where a static camera is simulated.
 * @param options.optalgo - Set the camera path optimization algorithm. Accepted values are: @end table
 * @param options.maxshift - Set maximal number of pixels to translate frames. Default value is -1, meaning no limit.
 * @param options.maxangle - Set maximal angle in radians (degree*PI/180) to rotate frames. Default value is -1, meaning no limit.
 * @param options.crop - Specify how to deal with borders that may be visible due to movement compensation. Available values are: @end table
 * @param options.invert - Invert transforms if set to 1. Default value is 0.
 * @param options.relative - Consider transforms as relative to previous frame if set to 1, absolute if set to 0. Default value is 0.
 * @param options.zoom - Set percentage to zoom. A positive value will result in a zoom-in effect, a negative value in a zoom-out effect. Default value is 0 (no zoom).
 * @param options.optzoom - Set optimal zooming to avoid borders. Accepted values are: @end table Note that the value given at zoom is added to the one calculated here.
 * @param options.zoomspeed - Set percent to zoom maximally each frame (enabled when optzoom is set to 2). Range is from 0 to 5, default value is 0.25.
 * @param options.interpol - Specify type of interpolation. Available values are: @end table
 * @param options.tripod - Enable virtual tripod mode if set to 1, which is equivalent to relative=0:smoothing=0. Default value is 0. Use also tripod option of vidstabdetect.
 * @param options.debug - Increase log verbosity if set to 1. Also the detected global motions are written to the temporary file global_motions.trf. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vidstabtransform
 */
  vidstabtransform(
    options?: {
    input?: FFString;
    smoothing?: FFInt;
    optalgo?: FFInt | "opt" | "gauss" | "avg";
    maxshift?: FFInt;
    maxangle?: FFDouble;
    crop?: FFInt | "keep" | "black";
    invert?: FFInt;
    relative?: FFInt;
    zoom?: FFDouble;
    optzoom?: FFInt;
    zoomspeed?: FFDouble;
    interpol?: FFInt | "no" | "linear" | "bilinear" | "bicubic";
    tripod?: FFBoolean;
    debug?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vidstabtransform", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "input": options?.input,
      "smoothing": options?.smoothing,
      "optalgo": options?.optalgo,
      "maxshift": options?.maxshift,
      "maxangle": options?.maxangle,
      "crop": options?.crop,
      "invert": options?.invert,
      "relative": options?.relative,
      "zoom": options?.zoom,
      "optzoom": options?.optzoom,
      "zoomspeed": options?.zoomspeed,
      "interpol": options?.interpol,
      "tripod": options?.tripod,
      "debug": options?.debug,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Obtain the average VIF (Visual Information Fidelity) between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained average VIF score is printed through the logging system. The filter stores the calculated VIF score of each frame. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi vif -f null - @end example @anchor{vignette}

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#vif
 */
  vif(
    _reference: VideoStream,

    options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vif", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Make or reverse a natural vignetting effect. The filter accepts the following options:

 *
 * @param options.angle - Set lens angle expression as a number of radians. The value is clipped in the [0,PI/2] range. Default value: "PI/5"
 * @param options.x0 - set circle center position on x-axis (default "w/2")
 * @param options.y0 - Set center coordinates expressions. Respectively "w/2" and "h/2" by default.
 * @param options.mode - Set forward/backward mode. Available modes are: @end table Default value is forward.
 * @param options.eval - Set evaluation mode for the expressions (angle, x0, y0). It accepts the following values: @end table Default value is init.
 * @param options.dither - Set dithering to reduce the circular banding effects. Default is 1 (enabled).
 * @param options.aspect - Set vignette aspect. This setting allows one to adjust the shape of the vignette. Setting this value to the SAR of the input will make a rectangular vignetting following the dimensions of the video. Default is 1/1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vignette
 */
  vignette(
    options?: {
    angle?: FFString;
    x0?: FFString;
    y0?: FFString;
    mode?: FFInt | "forward" | "backward";
    eval?: FFInt | "init" | "frame";
    dither?: FFBoolean;
    aspect?: FFRational;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vignette", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "angle": options?.angle,
      "x0": options?.x0,
      "y0": options?.y0,
      "mode": options?.mode,
      "eval": options?.eval,
      "dither": options?.dither,
      "aspect": options?.aspect,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Obtain the average VMAF motion score of a video. It is one of the component metrics of VMAF. The obtained average motion score is printed through the logging system. The filter accepts the following options:

 *
 * @param options.stats_file - If specified, the filter will use the named file to save the motion score of each frame with respect to the previous frame. When filename equals "-" the data is sent to standard output.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vmafmotion
 */
  vmafmotion(
    options?: {
    stats_file?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "vmafmotion", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "stats_file": options?.stats_file,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Deinterlace the input video ("w3fdif" stands for "Weston 3 Field Deinterlacing Filter"). Based on the process described by Martin Weston for BBC R&D, and implemented based on the de-interlace algorithm written by Jim Easterbrook for BBC R&D, the Weston 3 field deinterlacing filter uses filter coefficients calculated by BBC R&D. This filter uses field-dominance information in frame to decide which of each pair of fields to place first in the output. If it gets it wrong use setfield filter before w3fdif filter. There are two sets of filter coefficients, so called "simple" and "complex". Which set of filter coefficients is used can be set by passing an optional parameter:

 *
 * @param options.filter - Set the interlacing filter coefficients. Accepts one of the following values: @end table Default value is complex.
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is field.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table Default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#w3fdif
 */
  w3fdif(
    options?: {
    filter?: FFInt | "simple" | "complex";
    mode?: FFInt | "frame" | "field";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "w3fdif", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "filter": options?.filter,
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Video waveform monitor. The waveform monitor plots color component intensity. By default luma only. Each column of the waveform corresponds to a column of pixels in the source video. It accepts the following options:

 *
 * @param options.mode - Can be either row, or column. Default is column. In row mode, the graph on the left side represents color component value 0 and the right side represents value = 255. In column mode, the top side represents color component value = 0 and bottom side represents value = 255.
 * @param options.intensity - Set intensity. Smaller values are useful to find out how many values of the same luminance are distributed across input rows/columns. Default value is 0.04. Allowed range is [0, 1].
 * @param options.mirror - Set mirroring mode. 0 means unmirrored, 1 means mirrored. In mirrored mode, higher values will be represented on the left side for row mode and at the top for column mode. Default is 1 (mirrored).
 * @param options.display - Set display mode. It accepts the following values: @end table Default is stack.
 * @param options.components - Set which color components to display. Default is 1, which means only luma or red color component if input is in RGB colorspace. If is set for example to 7 it will display all 3 (if) available color components.
 * @param options.envelope - @end table
 * @param options.filter - @end table
 * @param options.graticule - Set which graticule to display. @end table
 * @param options.opacity - Set graticule opacity.
 * @param options.flags - Set graticule flags. @end table
 * @param options.scale - Set scale used for displaying graticule. @end table Default is digital.
 * @param options.bgopacity - Set background opacity.
 * @param options.tint0 - set 1st tint (from -1 to 1) (default 0)
 * @param options.tint1 - Set tint for output. Only used with lowpass filter and when display is not overlay and input pixel formats are not RGB.
 * @param options.fitmode - Set sample aspect ratio of video output frames. Can be used to configure waveform so it is not stretched too much in one of directions. @end table Default is none.
 * @param options.input - Set input formats for filter to pick from. Can be all, for selecting from all available formats, or first, for selecting first available format. Default is first.
 * @see https://ffmpeg.org/ffmpeg-filters.html#waveform
 */
  waveform(
    options?: {
    mode?: FFInt | "row" | "column";
    intensity?: FFFloat;
    mirror?: FFBoolean;
    display?: FFInt | "overlay" | "stack" | "parade";
    components?: FFInt;
    envelope?: FFInt | "none" | "instant" | "peak" | "peak+instant";
    filter?: FFInt | "lowpass" | "flat" | "aflat" | "chroma" | "color" | "acolor" | "xflat" | "yflat";
    graticule?: FFInt | "none" | "green" | "orange" | "invert";
    opacity?: FFFloat;
    flags?: FFFlags | "numbers" | "dots";
    scale?: FFInt | "digital" | "millivolts" | "ire";
    bgopacity?: FFFloat;
    tint0?: FFFloat;
    tint1?: FFFloat;
    fitmode?: FFInt | "none" | "size";
    input?: FFInt | "all" | "first";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "waveform", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "intensity": options?.intensity,
      "mirror": options?.mirror,
      "display": options?.display,
      "components": options?.components,
      "envelope": options?.envelope,
      "filter": options?.filter,
      "graticule": options?.graticule,
      "opacity": options?.opacity,
      "flags": options?.flags,
      "scale": options?.scale,
      "bgopacity": options?.bgopacity,
      "tint0": options?.tint0,
      "tint1": options?.tint1,
      "fitmode": options?.fitmode,
      "input": options?.input,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * The weave takes a field-based video input and join each two sequential fields into single frame, producing a new double height clip with half the frame rate and half the frame count. The doubleweave works same as weave but without halving frame rate and frame count. It accepts the following option:

 *
 * @param options.first_field - Set first field. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#weave
 */
  weave(
    options?: {
    first_field?: FFInt | "top" | "t" | "bottom" | "b";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "weave", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "first_field": options?.first_field,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply the xBR high-quality magnification filter which is designed for pixel art. It follows a set of edge-detection rules, see https://forums.libretro.com/t/xbr-algorithm-tutorial/123. It accepts the following option:

 *
 * @param options.n - Set the scaling dimension: 2 for 2xBR, 3 for 3xBR and 4 for 4xBR. Default is 3.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xbr
 */
  xbr(
    options?: {
    n?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xbr", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "n": options?.n,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply normalized cross-correlation between first and second input video stream. Second input video stream dimensions must be lower than first input video stream. The filter accepts the following options:

 *
 * @param options.planes - Set which planes to process.
 * @param options.secondary - Set which secondary video frames will be processed from second input video stream, can be first or all. Default is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xcorrelate
 */
  xcorrelate(
    _secondary: VideoStream,

    options?: {
    planes?: FFInt;
    secondary?: FFInt | "first" | "all";
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xcorrelate", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _secondary],
      merge(
    {
      "planes": options?.planes,
      "secondary": options?.secondary,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply cross fade from one input video stream to another input video stream. The cross fade is applied for specified duration. Both inputs must be constant frame-rate and have the same resolution, pixel format, frame rate and timebase. The filter accepts the following options:

 *
 * @param options.transition - Set one of available transition effects: @end table Default transition effect is fade.
 * @param options.duration - Set cross fade duration in seconds. Range is 0 to 60 seconds. Default duration is 1 second.
 * @param options.offset - Set cross fade start relative to first input stream in seconds. Default offset is 0.
 * @param options.expr - Set expression for custom transition effect. The expressions can use the following variables and functions: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#xfade
 */
  xfade(
    _xfade: VideoStream,

    options?: {
    transition?: FFInt | "custom" | "fade" | "wipeleft" | "wiperight" | "wipeup" | "wipedown" | "slideleft" | "slideright" | "slideup" | "slidedown" | "circlecrop" | "rectcrop" | "distance" | "fadeblack" | "fadewhite" | "radial" | "smoothleft" | "smoothright" | "smoothup" | "smoothdown" | "circleopen" | "circleclose" | "vertopen" | "vertclose" | "horzopen" | "horzclose" | "dissolve" | "pixelize" | "diagtl" | "diagtr" | "diagbl" | "diagbr" | "hlslice" | "hrslice" | "vuslice" | "vdslice" | "hblur" | "fadegrays" | "wipetl" | "wipetr" | "wipebl" | "wipebr" | "squeezeh" | "squeezev" | "zoomin" | "fadefast" | "fadeslow" | "hlwind" | "hrwind" | "vuwind" | "vdwind" | "coverleft" | "coverright" | "coverup" | "coverdown" | "revealleft" | "revealright" | "revealup" | "revealdown";
    duration?: FFDuration;
    offset?: FFDuration;
    expr?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xfade", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _xfade],
      merge(
    {
      "transition": options?.transition,
      "duration": options?.duration,
      "offset": options?.offset,
      "expr": options?.expr,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Cross fade two videos with custom transition effect by using OpenCL. It accepts the following options:

 *
 * @param options.transition - Set one of possible transition effects. @end table
 * @param options.source - OpenCL program source file for custom transition.
 * @param options.kernel - Set name of kernel to use for custom transition from program source file.
 * @param options.duration - Set duration of video transition.
 * @param options.offset - Set time of start of transition relative to first video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xfade_opencl
 */
  xfade_opencl(
    _xfade: VideoStream,

    options?: {
    transition?: FFInt | "custom" | "fade" | "wipeleft" | "wiperight" | "wipeup" | "wipedown" | "slideleft" | "slideright" | "slideup" | "slidedown";
    source?: FFString;
    kernel?: FFString;
    duration?: FFDuration;
    offset?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xfade_opencl", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _xfade],
      merge(
    {
      "transition": options?.transition,
      "source": options?.source,
      "kernel": options?.kernel,
      "duration": options?.duration,
      "offset": options?.offset,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Cross fade one video with another video.

 *
 * @param options.transition - set cross fade transition (from 0 to 16) (default fade)
 * @param options.duration - set cross fade duration (default 1)
 * @param options.offset - set cross fade start relative to first input stream (default 0)
 */
  xfade_vulkan(
    _xfade: VideoStream,

    options?: {
    transition?: FFInt | "fade" | "wipeleft" | "wiperight" | "wipeup" | "wipedown" | "slidedown" | "slideup" | "slideleft" | "slideright" | "circleopen" | "circleclose" | "dissolve" | "pixelize" | "wipetl" | "wipetr" | "wipebl" | "wipebr";
    duration?: FFDuration;
    offset?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xfade_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _xfade],
      merge(
    {
      "transition": options?.transition,
      "duration": options?.duration,
      "offset": options?.offset,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Obtain the average (across all input frames) and minimum (across all color plane averages) eXtended Perceptually weighted peak Signal-to-Noise Ratio (XPSNR) between two input videos. The XPSNR is a low-complexity psychovisually motivated distortion measurement algorithm for assessing the difference between two video streams or images. This is especially useful for objectively quantifying the distortions caused by video and image codecs, as an alternative to a formal subjective test. The logarithmic XPSNR output values are in a similar range as those of traditional psnr assessments but better reflect human impressions of visual coding quality. More details on the XPSNR measure, which essentially represents a blockwise weighted variant of the PSNR measure, can be found in the following freely available papers:

 *
 * @param options.stats_file - If specified, the filter will use the named file to save the XPSNR value of each individual frame and color plane. When the file name equals "-", that data is sent to standard output.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xpsnr
 */
  xpsnr(
    _reference: VideoStream,

    options?: {
    stats_file?: FFString;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "xpsnr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
      [this, _reference],
      merge(
    {
      "stats_file": options?.stats_file,
      "eof_action": options?.eofAction,
      "shortest": options?.shortest,
      "repeatlast": options?.repeatlast,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Deinterlace the input video ("yadif" means "yet another deinterlacing filter"). It accepts the following parameters:

 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_frame.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#yadif
 */
  yadif(
    options?: {
    mode?: FFInt | "send_frame" | "send_field" | "send_frame_nospatial" | "send_field_nospatial";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "yadif", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Deinterlace the input video using the yadif algorithm, but implemented in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec and/or nvenc. It accepts the following parameters:
 *
 * Note: New in FFmpeg 9.0.
 *
 * @param options.mode - The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_frame.
 * @param options.parity - The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
 * @param options.deint - Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
 * @see https://ffmpeg.org/ffmpeg-filters.html#yadif_cuda
 */
  yadif_cuda(
    options?: {
    mode?: FFInt | "send_frame" | "send_field" | "send_frame_nospatial" | "send_field_nospatial";
    parity?: FFInt | "tff" | "bff" | "auto";
    deint?: FFInt | "all" | "interlaced";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "yadif_cuda", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "parity": options?.parity,
      "deint": options?.deint,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply blur filter while preserving edges ("yaepblur" means "yet another edge preserving blur filter"). The algorithm is described in "J. S. Lee, Digital image enhancement and noise filtering by use of local statistics, IEEE Trans. Pattern Anal. Mach. Intell. PAMI-2, 1980." It accepts the following parameters:

 *
 * @param options.radius - Set the window radius. Default value is 3.
 * @param options.planes - Set which planes to filter. Default is only the first plane.
 * @param options.sigma - Set blur strength. Default value is 128.
 * @see https://ffmpeg.org/ffmpeg-filters.html#yaepblur
 */
  yaepblur(
    options?: {
    radius?: FFInt;
    planes?: FFInt;
    sigma?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "yaepblur", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "radius": options?.radius,
      "planes": options?.planes,
      "sigma": options?.sigma,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Receive commands sent through a libzmq client, and forward them to filters in the filtergraph. zmq and azmq work as a pass-through filters. zmq must be inserted between two video filters, azmq between two audio filters. Both are capable to send messages to any filter type. To enable these filters you need to install the libzmq library and headers and configure FFmpeg with --enable-libzmq. For more information about libzmq see: http://www.zeromq.org/ The zmq and azmq filters work as a libzmq server, which receives messages sent through a network interface defined by the bind_address (or the abbreviation "b") option. Default value of this option is tcp://localhost:5555. You may want to alter this value to your needs, but do not forget to escape any ':' signs (see filtergraph escaping). The received message must be in the form: @example TARGET COMMAND [ARG] @end example TARGET specifies the target of the command, usually the name of the filter class or a specific filter instance name. The default filter instance name uses the pattern Parsed__, but you can override this by using the filter_name@id syntax (see Filtergraph syntax). COMMAND specifies the name of the command for the target filter. ARG is optional and specifies the optional argument list for the given COMMAND. Upon reception, the message is processed and the corresponding command is injected into the filtergraph. Depending on the result, the filter will send a reply to the client, adopting the format: @example ERROR_CODE ERROR_REASON MESSAGE @end example MESSAGE is optional.

 *
 * @param options.bind_address - set bind address (default "tcp://*:5555")
 * @see https://ffmpeg.org/ffmpeg-filters.html#zmq
 */
  zmq(
    options?: {
    bind_address?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "zmq", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "bind_address": options?.bind_address,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }








/**
 * Apply Zoom & Pan effect. This filter accepts the following options:

 *
 * @param options.zoom - Last calculated zoom from 'z' expression for current input frame.
 * @param options.x - set the x expression (default "0")
 * @param options.y - Last calculated 'x' and 'y' position from 'x' and 'y' expression for current input frame.
 * @param options.d - Set the duration expression in number of frames. This sets for how many number of frames effect will last for single input image. Default is 90.
 * @param options.s - Set the output image size, default is 'hd720'.
 * @param options.fps - Set the output frame rate, default is '25'.
 * @see https://ffmpeg.org/ffmpeg-filters.html#zoompan
 */
  zoompan(
    options?: {
    zoom?: FFString;
    x?: FFString;
    y?: FFString;
    d?: FFString;
    s?: FFImageSize;
    fps?: FFVideoRate;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "zoompan", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "zoom": options?.zoom,
      "x": options?.x,
      "y": options?.y,
      "d": options?.d,
      "s": options?.s,
      "fps": options?.fps,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Scale (resize) the input video, using the z.lib library: https://github.com/sekrit-twc/zimg. To enable compilation of this filter, you need to configure FFmpeg with --enable-libzimg. The zscale filter forces the output display aspect ratio to be the same as the input, by changing the output sample aspect ratio. If the input image format is different from the format requested by the next filter, the zscale filter will convert the input to the requested format.

 *
 * @param options.w - Output video width
 * @param options.h - Set the output video dimension expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.size - Set the video size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @param options.dither - Set the dither type. Possible values are: @end table Default is none.
 * @param options.filter - Set the resize filter type. Possible values are: @end table Default is bilinear.
 * @param options.out_range - set color range (from -1 to 1) (default input)
 * @param options.primaries - Set the color primaries. Possible values are: @end table Default is same as input.
 * @param options.transfer - Set the transfer characteristics. Possible values are: @end table Default is same as input.
 * @param options.matrix - Set the colorspace matrix. Possible value are: @end table Default is same as input.
 * @param options.in_range - set input color range (from -1 to 1) (default input)
 * @param options.primariesin - Set the input color primaries. Possible values are: @end table Default is same as input.
 * @param options.transferin - Set the input transfer characteristics. Possible values are: @end table Default is same as input.
 * @param options.matrixin - Set the input colorspace matrix. Possible value are: @end table
 * @param options.chromal - Set the output chroma location. Possible values are: @end table
 * @param options.chromalin - Set the input chroma location. Possible values are: @end table
 * @param options.npl - Set the nominal peak luminance.
 * @param options.agamma - allow approximate gamma (default true)
 * @param options.param_a - Parameter A for scaling filters. Parameter "b" for bicubic, and the number of filter taps for lanczos.
 * @param options.param_b - Parameter B for scaling filters. Parameter "c" for bicubic.
 * @see https://ffmpeg.org/ffmpeg-filters.html#zscale
 */
  zscale(
    options?: {
    w?: FFString;
    h?: FFString;
    size?: FFString;
    dither?: FFInt | "none" | "ordered" | "random" | "error_diffusion";
    filter?: FFInt | "point" | "bilinear" | "bicubic" | "spline16" | "spline36" | "spline64" | "lanczos";
    out_range?: FFInt | "input" | "limited" | "full" | "unknown" | "tv" | "pc";
    primaries?: FFInt | "input" | "709" | "unspecified" | "170m" | "240m" | "2020" | "unknown" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    transfer?: FFInt | "input" | "709" | "unspecified" | "601" | "linear" | "2020_10" | "2020_12" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "bt709" | "log100" | "log316" | "bt2020-10" | "bt2020-12" | "smpte2084" | "iec61966-2-4" | "iec61966-2-1" | "arib-std-b67";
    matrix?: FFInt | "input" | "709" | "unspecified" | "470bg" | "170m" | "2020_ncl" | "2020_cl" | "unknown" | "gbr" | "bt709" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "bt2020nc" | "bt2020c" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp";
    in_range?: FFInt | "input" | "limited" | "full" | "unknown" | "tv" | "pc";
    primariesin?: FFInt | "input" | "709" | "unspecified" | "170m" | "240m" | "2020" | "unknown" | "bt709" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "film" | "bt2020" | "smpte428" | "smpte431" | "smpte432" | "jedec-p22" | "ebu3213";
    transferin?: FFInt | "input" | "709" | "unspecified" | "601" | "linear" | "2020_10" | "2020_12" | "unknown" | "bt470m" | "bt470bg" | "smpte170m" | "smpte240m" | "bt709" | "log100" | "log316" | "bt2020-10" | "bt2020-12" | "smpte2084" | "iec61966-2-4" | "iec61966-2-1" | "arib-std-b67";
    matrixin?: FFInt | "input" | "709" | "unspecified" | "470bg" | "170m" | "2020_ncl" | "2020_cl" | "unknown" | "gbr" | "bt709" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "bt2020nc" | "bt2020c" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp";
    chromal?: FFInt | "input" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    chromalin?: FFInt | "input" | "left" | "center" | "topleft" | "top" | "bottomleft" | "bottom";
    npl?: FFDouble;
    agamma?: FFBoolean;
    param_a?: FFDouble;
    param_b?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "zscale", typingsInput: ["video"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "w": options?.w,
      "h": options?.h,
      "size": options?.size,
      "dither": options?.dither,
      "filter": options?.filter,
      "out_range": options?.out_range,
      "primaries": options?.primaries,
      "transfer": options?.transfer,
      "matrix": options?.matrix,
      "in_range": options?.in_range,
      "primariesin": options?.primariesin,
      "transferin": options?.transferin,
      "matrixin": options?.matrixin,
      "chromal": options?.chromal,
      "chromalin": options?.chromalin,
      "npl": options?.npl,
      "agamma": options?.agamma,
      "param_a": options?.param_a,
      "param_b": options?.param_b,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }



}
