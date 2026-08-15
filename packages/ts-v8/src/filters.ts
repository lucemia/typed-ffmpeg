// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg filter functions (multi-input and dynamic-input filters).
 */


import { StreamType, type FFMpegFilterDef } from "@typed-ffmpeg/core/common/schema";
import { Default, Auto } from "@typed-ffmpeg/core/utils/types";
import { filterNodeFactory } from "@typed-ffmpeg/core/dag/factory";
import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import { FilterableStream } from "@typed-ffmpeg/core/dag/baseStreams";
import { FilterNode, VideoStream, AudioStream } from "@typed-ffmpeg/core/dag/nodes";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFColor, FFFlags, FFDictionary, FFPixFmt,
  FFVideoRate, FFImageSize, FFRational, FFSampleFmt, FFBinary,
} from "@typed-ffmpeg/core/types";







/**
 * Apply Affine Projection algorithm to the first audio stream using the second audio stream. This adaptive filter is used to estimate unknown audio based on multiple input audio samples. Affine projection algorithm can make trade-offs between computation complexity with convergence speed. A description of the accepted options follows.

 *
 * @param options.order - Set the filter order.
 * @param options.projection - Set the projection order.
 * @param options.mu - Set the filter mu.
 * @param options.delta - Set the coefficient to initialize internal covariance matrix.
 * @param options.out_mode - Set the filter output samples. It accepts the following values: @end table
 * @param options.precision - Set which precision to use when processing samples. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#aap
 */
export function aap(


  _input: AudioStream,

  _desired: AudioStream,


  options?: {
    order?: FFInt;
    projection?: FFInt;
    mu?: FFFloat;
    delta?: FFFloat;
    out_mode?: FFInt | "i" | "d" | "o" | "n" | "e";
    precision?: FFInt | "auto" | "float" | "double";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input, _desired];

  const filterNode = filterNodeFactory(
    { name: "aap", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "order": options?.order,
      "projection": options?.projection,
      "mu": options?.mu,
      "delta": options?.delta,
      "out_mode": options?.out_mode,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}




















/**
 * Apply cross fade from one input audio stream to another input audio stream. The cross fade is applied for specified duration near the end of first stream. The filter accepts the following options:

 *
 * @param options.nb_samples - Specify the number of samples for which the cross fade effect has to last. At the end of the cross fade effect the first input audio will be completely silent. Default is 44100.
 * @param options.duration - Specify the duration of the cross fade effect. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
 * @param options.overlap - Should first stream end overlap with second stream start. Default is enabled.
 * @param options.curve1 - Set curve for cross fade transition for first stream.
 * @param options.curve2 - Set curve for cross fade transition for second stream. For description of available curve types see afade filter description.
 * @see https://ffmpeg.org/ffmpeg-filters.html#acrossfade
 */
export function acrossfade(


  _crossfade0: AudioStream,

  _crossfade1: AudioStream,


  options?: {
    nb_samples?: FFInt64;
    duration?: FFDuration;
    overlap?: FFBoolean;
    curve1?: FFInt | "nofade" | "tri" | "qsin" | "esin" | "hsin" | "log" | "ipar" | "qua" | "cub" | "squ" | "cbr" | "par" | "exp" | "iqsin" | "ihsin" | "dese" | "desi" | "losi" | "sinc" | "isinc" | "quat" | "quatr" | "qsin2" | "hsin2";
    curve2?: FFInt | "nofade" | "tri" | "qsin" | "esin" | "hsin" | "log" | "ipar" | "qua" | "cub" | "squ" | "cbr" | "par" | "exp" | "iqsin" | "ihsin" | "dese" | "desi" | "losi" | "sinc" | "isinc" | "quat" | "quatr" | "qsin2" | "hsin2";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_crossfade0, _crossfade1];

  const filterNode = filterNodeFactory(
    { name: "acrossfade", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "nb_samples": options?.nb_samples,
      "duration": options?.duration,
      "overlap": options?.overlap,
      "curve1": options?.curve1,
      "curve2": options?.curve2,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}








































































/**
 * Temporally interleave frames from several inputs. interleave works with video inputs, ainterleave with audio. These filters read frames from several inputs and send the oldest queued frame to the output. Input streams must have well defined, monotonically increasing frame timestamp values. In order to submit one frame to output, these filters need to enqueue at least one frame for each input, so they cannot work in case one input is not yet terminated and will not receive incoming frames. For example consider the case when one input is a select filter which always drops input frames. The interleave filter will keep reading from that input, but it will never be able to send new frames to output until the input sends an end-of-stream signal. Also, depending on inputs synchronization, the filters will drop frames in case one input receives more frames than the other ones, and the queue is already filled. These filters accept the following options:

 *
 * @param options.nb_inputs - Set the number of different inputs, it is 2 by default.
 * @param options.duration - How to determine the end-of-stream. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#interleave
 */
export function ainterleave(

  streams: FilterableStream[],

  options?: {
    nb_inputs?: FFInt;
    duration?: FFInt | "longest" | "shortest" | "first";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "ainterleave", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "nb_inputs": options?.nb_inputs,
      "duration": options?.duration,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}




















/**
 * Add or replace the alpha component of the primary input with the grayscale value of a second input. This is intended for use with alphaextract to allow the transmission or storage of frame sequences that have alpha in a format that doesn't support an alpha channel. For example, to reconstruct full frames from a normal YUV-encoded video and a separate video created with alphaextract, you might use: @example movie=in_alpha.mkv [alpha]; [in][alpha] alphamerge [out] @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#alphamerge
 */
export function alphamerge(


  _main: VideoStream,

  _alpha: VideoStream,


  options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _alpha];

  const filterNode = filterNodeFactory(
    { name: "alphamerge", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Merge two or more audio streams into a single multi-channel stream. The filter accepts the following options:

 *
 * @param options.inputs - Set the number of inputs. Default is 2.
 * @see https://ffmpeg.org/ffmpeg-filters.html#amerge
 */
export function amerge(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "amerge", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}








/**
 * Mixes multiple audio inputs into a single output. Note that this filter only supports float samples (the amerge and pan audio filters support many formats). If the amix input has integer samples then aresample will be automatically inserted to perform the conversion to float samples. It accepts the following parameters:

 *
 * @param options.inputs - The number of inputs. If unspecified, it defaults to 2.
 * @param options.duration - How to determine the end-of-stream. @end table
 * @param options.dropout_transition - The transition time, in seconds, for volume renormalization when an input stream ends. The default value is 2 seconds.
 * @param options.weights - Set weight for each input. (default "1 1")
 * @param options.normalize - Syntax is same as option with same name.
 * @see https://ffmpeg.org/ffmpeg-filters.html#amix
 */
export function amix(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    duration?: FFInt | "longest" | "shortest" | "first";
    dropout_transition?: FFFloat;
    weights?: FFString;
    normalize?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "amix", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "duration": options?.duration,
      "dropout_transition": options?.dropout_transition,
      "weights": options?.weights,
      "normalize": options?.normalize,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * Multiply first audio stream with second audio stream and store result in output audio stream. Multiplication is done by multiplying each sample from first stream with sample at same position from second stream. With this element-wise multiplication one can create amplitude fades and amplitude modulations.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#amultiply
 */
export function amultiply(


  _multiply0: AudioStream,

  _multiply1: AudioStream,


  options?: {
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_multiply0, _multiply1];

  const filterNode = filterNodeFactory(
    { name: "amultiply", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * Apply Normalized Least-Mean-(Squares|Fourth) algorithm to the first audio stream using the second audio stream. This adaptive filter is used to mimic a desired filter by finding the filter coefficients that relate to producing the least mean square of the error signal (difference between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream). A description of the accepted options follows.

 *
 * @param options.order - Set filter order.
 * @param options.mu - Set filter mu.
 * @param options.eps - Set the filter eps.
 * @param options.leakage - Set the filter leakage.
 * @param options.out_mode - It accepts the following values: @end table
 * @param options.precision - Set which precision to use when processing samples. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#anlmf
 */
export function anlmf(


  _input: AudioStream,

  _desired: AudioStream,


  options?: {
    order?: FFInt;
    mu?: FFFloat;
    eps?: FFFloat;
    leakage?: FFFloat;
    out_mode?: FFInt | "i" | "d" | "o" | "n" | "e";
    precision?: FFInt | "auto" | "float" | "double";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input, _desired];

  const filterNode = filterNodeFactory(
    { name: "anlmf", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "order": options?.order,
      "mu": options?.mu,
      "eps": options?.eps,
      "leakage": options?.leakage,
      "out_mode": options?.out_mode,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}






/**
 * Apply Normalized Least-Mean-(Squares|Fourth) algorithm to the first audio stream using the second audio stream. This adaptive filter is used to mimic a desired filter by finding the filter coefficients that relate to producing the least mean square of the error signal (difference between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream). A description of the accepted options follows.

 *
 * @param options.order - Set filter order.
 * @param options.mu - Set filter mu.
 * @param options.eps - Set the filter eps.
 * @param options.leakage - Set the filter leakage.
 * @param options.out_mode - It accepts the following values: @end table
 * @param options.precision - Set which precision to use when processing samples. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#anlmf
 */
export function anlms(


  _input: AudioStream,

  _desired: AudioStream,


  options?: {
    order?: FFInt;
    mu?: FFFloat;
    eps?: FFFloat;
    leakage?: FFFloat;
    out_mode?: FFInt | "i" | "d" | "o" | "n" | "e";
    precision?: FFInt | "auto" | "float" | "double";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input, _desired];

  const filterNode = filterNodeFactory(
    { name: "anlms", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "order": options?.order,
      "mu": options?.mu,
      "eps": options?.eps,
      "leakage": options?.leakage,
      "out_mode": options?.out_mode,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
























/**
 * Measure Audio Peak Signal-to-Noise Ratio. This filter takes two audio streams for input, and outputs first audio stream. Results are in dB per channel at end of either input.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#apsnr
 */
export function apsnr(


  _input0: AudioStream,

  _input1: AudioStream,


  options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input0, _input1];

  const filterNode = filterNodeFactory(
    { name: "apsnr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
















/**
 * Apply Recursive Least Squares algorithm to the first audio stream using the second audio stream. This adaptive filter is used to mimic a desired filter by recursively finding the filter coefficients that relate to producing the minimal weighted linear least squares cost function of the error signal (difference between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream). A description of the accepted options follows.

 *
 * @param options.order - Set the filter order.
 * @param options._lambda - Set the forgetting factor.
 * @param options.delta - Set the coefficient to initialize internal covariance matrix.
 * @param options.out_mode - Set the filter output samples. It accepts the following values: @end table
 * @param options.precision - Set which precision to use when processing samples. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#arls
 */
export function arls(


  _input: AudioStream,

  _desired: AudioStream,


  options?: {
    order?: FFInt;
    _lambda?: FFFloat;
    delta?: FFFloat;
    out_mode?: FFInt | "i" | "d" | "o" | "n" | "e";
    precision?: FFInt | "auto" | "float" | "double";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input, _desired];

  const filterNode = filterNodeFactory(
    { name: "arls", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "order": options?.order,
      "lambda": options?._lambda,
      "delta": options?.delta,
      "out_mode": options?.out_mode,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}








/**
 * Measure Audio Signal-to-Distortion Ratio. This filter takes two audio streams for input, and outputs first audio stream. Results are in dB per channel at end of either input.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#asdr
 */
export function asdr(


  _input0: AudioStream,

  _input1: AudioStream,


  options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input0, _input1];

  const filterNode = filterNodeFactory(
    { name: "asdr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
























/**
 * Measure Audio Scaled-Invariant Signal-to-Distortion Ratio. This filter takes two audio streams for input, and outputs first audio stream. Results are in dB per channel at end of either input.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#asisdr
 */
export function asisdr(


  _input0: AudioStream,

  _input1: AudioStream,


  options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_input0, _input1];

  const filterNode = filterNodeFactory(
    { name: "asisdr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
















/**
 * Select video or audio streams. The filter accepts the following options:

 *
 * @param options.inputs - Set number of inputs. Default is 2.
 * @param options.map - Set input indexes to remap to outputs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#streamselect
 */
export function astreamselect(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    map?: FFString;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "astreamselect", typingsInput: [], typingsOutput: [] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "map": options?.map,
},
    options?.extraOptions,
  ),
  );
return filterNode;
}


































/**
 * Calculate normalized windowed cross-correlation between two input audio streams. Resulted samples are always between -1 and 1 inclusive. If result is 1 it means two input samples are highly correlated in that selected segment. Result 0 means they are not correlated at all. If result is -1 it means two input samples are out of phase, which means they cancel each other. The filter accepts the following options:

 *
 * @param options.size - Set size of segment over which cross-correlation is calculated. Default is 256. Allowed range is from 2 to 131072.
 * @param options.algo - Set algorithm for cross-correlation. Can be slow or fast or best. Default is best. Fast algorithm assumes mean values over any given segment are always zero and thus need much less calculations to make. This is generally not true, but is valid for typical audio streams.
 * @see https://ffmpeg.org/ffmpeg-filters.html#axcorrelate
 */
export function axcorrelate(


  _axcorrelate0: AudioStream,

  _axcorrelate1: AudioStream,


  options?: {
    size?: FFInt;
    algo?: FFInt | "slow" | "fast" | "best";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_axcorrelate0, _axcorrelate1];

  const filterNode = filterNodeFactory(
    { name: "axcorrelate", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "algo": options?.algo,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
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
export function blend(


  _top: VideoStream,

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

  const inputStreams: FilterableStream[] = [_top, _bottom];

  const filterNode = filterNodeFactory(
    { name: "blend", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function blend_vulkan(


  _top: VideoStream,

  _bottom: VideoStream,


  options?: {
    c0_mode?: FFInt | "normal" | "multiply";
    c1_mode?: FFInt | "normal" | "multiply";
    c2_mode?: FFInt | "normal" | "multiply";
    c3_mode?: FFInt | "normal" | "multiply";
    all_mode?: FFInt | "normal" | "multiply";
    c0_opacity?: FFDouble;
    c1_opacity?: FFDouble;
    c2_opacity?: FFDouble;
    c3_opacity?: FFDouble;
    all_opacity?: FFDouble;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_top, _bottom];

  const filterNode = filterNodeFactory(
    { name: "blend_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Denoise frames using Block-Matching 3D algorithm. The filter accepts the following options.

 *
 * @param options.sigma - Set denoising strength. Default value is 1. Allowed range is from 0 to 999.9. The denoising algorithm is very sensitive to sigma, so adjust it according to the source.
 * @param options.block - Set local patch size. This sets dimensions in 2D.
 * @param options.bstep - Set sliding step for processing blocks. Default value is 4. Allowed range is from 1 to 64. Smaller values allows processing more reference blocks and is slower.
 * @param options.group - Set maximal number of similar blocks for 3rd dimension. Default value is 1. When set to 1, no block matching is done. Larger values allows more blocks in single group. Allowed range is from 1 to 256.
 * @param options.range - Set radius for search block matching. Default is 9. Allowed range is from 1 to INT32_MAX.
 * @param options.mstep - Set step between two search locations for block matching. Default is 1. Allowed range is from 1 to 64. Smaller is slower.
 * @param options.thmse - Set threshold of mean square error for block matching. Valid range is 0 to INT32_MAX.
 * @param options.hdthr - Set thresholding parameter for hard thresholding in 3D transformed domain. Larger values results in stronger hard-thresholding filtering in frequency domain.
 * @param options.estim - Set filtering estimation mode. Can be basic or final. Default is basic.
 * @param options.ref - If enabled, filter will use 2nd stream for block matching. Default is disabled for basic value of estim option, and always enabled if value of estim is final.
 * @param options.planes - Set planes to filter. Default is all available except alpha.
 * @see https://ffmpeg.org/ffmpeg-filters.html#bm3d
 */
export function bm3d(

  streams: FilterableStream[],

  options?: {
    sigma?: FFFloat;
    block?: FFInt;
    bstep?: FFInt;
    group?: FFInt;
    range?: FFInt;
    mstep?: FFInt;
    thmse?: FFFloat;
    hdthr?: FFFloat;
    estim?: FFInt | "basic" | "final";
    ref?: FFBoolean;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "bm3d", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "sigma": options?.sigma,
      "block": options?.block,
      "bstep": options?.bstep,
      "group": options?.group,
      "range": options?.range,
      "mstep": options?.mstep,
      "thmse": options?.thmse,
      "hdthr": options?.hdthr,
      "estim": options?.estim,
      "ref": options?.ref,
      "planes": options?.planes,
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
export function colormap(


  __default: VideoStream,

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

  const inputStreams: FilterableStream[] = [__default, _source, _target];

  const filterNode = filterNodeFactory(
    { name: "colormap", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Concatenate audio and video streams, joining them together one after the other. The filter works on segments of synchronized video and audio streams. All segments must have the same number of streams of each type, and that will also be the number of streams at output. The filter accepts the following options:

 *
 * @param options.n - Set the number of segments. Default is 2.
 * @param options.v - Set the number of output video streams, that is also the number of video streams in each segment. Default is 1.
 * @param options.a - Set the number of output audio streams, that is also the number of audio streams in each segment. Default is 0.
 * @param options.unsafe - Activate unsafe mode: do not fail if segments have a different format.
 * @see https://ffmpeg.org/ffmpeg-filters.html#concat
 */
export function concat(

  streams: FilterableStream[],

  options?: {
    n?: FFInt;
    v?: FFInt;
    a?: FFInt;
    unsafe?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "concat", typingsInput: [], typingsOutput: [] },
    inputStreams,
    merge(
    {
      "n": options?.n,
      "v": options?.v,
      "a": options?.a,
      "unsafe": options?.unsafe,
},
    options?.extraOptions,
  ),
  );
return filterNode;
}










/**
 * Apply 2D convolution of video stream in frequency domain using second stream as impulse. The filter accepts the following options:

 *
 * @param options.planes - Set which planes to process.
 * @param options.impulse - Set which impulse video frames will be processed, can be first or all. Default is all.
 * @param options.noise - set noise (from 0 to 1) (default 1e-07)
 * @see https://ffmpeg.org/ffmpeg-filters.html#convolve
 */
export function convolve(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _impulse];

  const filterNode = filterNodeFactory(
    { name: "convolve", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Obtain the correlation between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained per component, average, min and max correlation is printed through the logging system. The filter stores the calculated correlation of each frame in frame metadata. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi corr -f null - @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#corr
 */
export function corr(


  _main: VideoStream,

  _reference: VideoStream,


  options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "corr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Drop duplicated frames at regular intervals. The filter accepts the following options:

 *
 * @param options.cycle - Set the number of frames from which one will be dropped. Setting this to N means one frame in every batch of N frames will be dropped. Default is 5.
 * @param options.dupthresh - Set the threshold for duplicate detection. If the difference metric for a frame is less than or equal to this value, then it is declared as duplicate. Default is 1.1
 * @param options.scthresh - Set scene change threshold. Default is 15.
 * @param options.blockx - set the size of the x-axis blocks used during metric calculations (from 4 to 512) (default 32)
 * @param options.blocky - Set the size of the x and y-axis blocks used during metric calculations. Larger blocks give better noise suppression, but also give worse detection of small movements. Must be a power of two. Default is 32.
 * @param options.ppsrc - Mark main input as a pre-processed input and activate clean source input stream. This allows the input to be pre-processed with various filters to help the metrics calculation while keeping the frame selection lossless. When set to 1, the first stream is for the pre-processed input, and the second stream is the clean source from where the kept frames are chosen. Default is 0.
 * @param options.chroma - Set whether or not chroma is considered in the metric calculations. Default is 1.
 * @param options.mixed - Set whether or not the input only partially contains content to be decimated. Default is false. If enabled video output stream will be in variable frame rate.
 * @see https://ffmpeg.org/ffmpeg-filters.html#decimate
 */
export function decimate(

  streams: FilterableStream[],

  options?: {
    cycle?: FFInt;
    dupthresh?: FFDouble;
    scthresh?: FFDouble;
    blockx?: FFInt;
    blocky?: FFInt;
    ppsrc?: FFBoolean;
    chroma?: FFBoolean;
    mixed?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "decimate", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "cycle": options?.cycle,
      "dupthresh": options?.dupthresh,
      "scthresh": options?.scthresh,
      "blockx": options?.blockx,
      "blocky": options?.blocky,
      "ppsrc": options?.ppsrc,
      "chroma": options?.chroma,
      "mixed": options?.mixed,
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
export function deconvolve(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _impulse];

  const filterNode = filterNodeFactory(
    { name: "deconvolve", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Displace pixels as indicated by second and third input stream. It takes three input streams and outputs one stream, the first input is the source, and second and third input are displacement maps. The second input specifies how much to displace pixels along the x-axis, while the third input specifies how much to displace pixels along the y-axis. If one of displacement map streams terminates, last frame from that displacement map will be used. Note that once generated, displacements maps can be reused over and over again. A description of the accepted options follows.

 *
 * @param options.edge - Set displace behavior for pixels that are out of range. Available values are: @end table Default is smear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#displace
 */
export function displace(


  _source: VideoStream,

  _xmap: VideoStream,

  _ymap: VideoStream,


  options?: {
    edge?: FFInt | "blank" | "smear" | "wrap" | "mirror";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _xmap, _ymap];

  const filterNode = filterNodeFactory(
    { name: "displace", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Apply feedback video filter. This filter pass cropped input frames to 2nd output. From there it can be filtered with other video filters. After filter receives frame from 2nd input, that frame is combined on top of original frame from 1st input and passed to 1st output. The typical usage is filter only part of frame. The filter accepts the following options:

 *
 * @param options.x - set top left crop position (from 0 to INT_MAX) (default 0)
 * @param options.w - set crop size (from 0 to INT_MAX) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#feedback
 */
export function feedback(


  __default: VideoStream,

  _feedin: VideoStream,


  options?: {
    x?: FFInt;
    w?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams: FilterableStream[] = [__default, _feedin];

  const filterNode = filterNodeFactory(
    { name: "feedback", typingsInput: ["video", "video"], typingsOutput: ["video", "video"] },
    inputStreams,
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
 * Field matching filter for inverse telecine. It is meant to reconstruct the progressive frames from a telecined stream. The filter does not drop duplicated frames, so to achieve a complete inverse telecine fieldmatch needs to be followed by a decimation filter such as decimate in the filtergraph. The separation of the field matching and the decimation is notably motivated by the possibility of inserting a de-interlacing filter fallback between the two. If the source has mixed telecined and real interlaced content, fieldmatch will not be able to match fields for the interlaced parts. But these remaining combed frames will be marked as interlaced, and thus can be de-interlaced by a later filter such as yadif before decimation. In addition to the various configuration options, fieldmatch can take an optional second stream, activated through the ppsrc option. If enabled, the frames reconstruction will be based on the fields and frames from this second stream. This allows the first input to be pre-processed in order to help the various algorithms of the filter, while keeping the output lossless (assuming the fields are matched properly). Typically, a field-aware denoiser, or brightness/contrast adjustments can help. Note that this filter uses the same algorithms as TIVTC/TFM (AviSynth project) and VIVTC/VFM (VapourSynth project). The later is a light clone of TFM from which fieldmatch is based on. While the semantic and usage are very close, some behaviour and options names can differ. The decimate filter currently only works for constant frame rate input. If your input has mixed telecined (30fps) and progressive content with a lower framerate like 24fps use the following filterchain to produce the necessary cfr stream: dejudder,fps=30000/1001,fieldmatch,decimate. The filter accepts the following options:

 *
 * @param options.order - Specify the assumed field order of the input stream. Available values are: @end table Note that it is sometimes recommended not to trust the parity announced by the stream. Default value is auto.
 * @param options.mode - Set the matching mode or strategy to use. pc mode is the safest in the sense that it won't risk creating jerkiness due to duplicate frames when possible, but if there are bad edits or blended fields it will end up outputting combed frames when a good match might actually exist. On the other hand, pcn_ub mode is the most risky in terms of creating jerkiness, but will almost always find a good frame if there is one. The other values are all somewhere in between pc and pcn_ub in terms of risking jerkiness and creating duplicate frames versus finding good matches in sections with bad edits, orphaned fields, blended fields, etc. More details about p/c/n/u/b are available in p/c/n/u/b meaning section. Available values are: @end table The parenthesis at the end indicate the matches that would be used for that mode assuming order=tff (and field on auto or top). In terms of speed pc mode is by far the fastest and pcn_ub is the slowest. Default value is pc_n.
 * @param options.ppsrc - Mark the main input stream as a pre-processed input, and enable the secondary input stream as the clean source to pick the fields from. See the filter introduction for more details. It is similar to the clip2 feature from VFM/TFM. Default value is 0 (disabled).
 * @param options.field - Set the field to match from. It is recommended to set this to the same value as order unless you experience matching failures with that setting. In certain circumstances changing the field that is used to match from can have a large impact on matching performance. Available values are: @end table Default value is auto.
 * @param options.mchroma - Set whether or not chroma is included during the match comparisons. In most cases it is recommended to leave this enabled. You should set this to 0 only if your clip has bad chroma problems such as heavy rainbowing or other artifacts. Setting this to 0 could also be used to speed things up at the cost of some accuracy. Default value is 1.
 * @param options.y0 - define an exclusion band which excludes the lines between y0 and y1 from the field matching decision (from 0 to INT_MAX) (default 0)
 * @param options.scthresh - Set the scene change detection threshold as a percentage of maximum change on the luma plane. Good values are in the [8.0, 14.0] range. Scene change detection is only relevant in case combmatch=sc. The range for scthresh is [0.0, 100.0]. Default value is 12.0.
 * @param options.combmatch - When combatch is not none, fieldmatch will take into account the combed scores of matches when deciding what match to use as the final match. Available values are: @end table Default is sc.
 * @param options.combdbg - Force fieldmatch to calculate the combed metrics for certain matches and print them. This setting is known as micout in TFM/VFM vocabulary. Available values are: @end table Default value is none.
 * @param options.cthresh - This is the area combing threshold used for combed frame detection. This essentially controls how "strong" or "visible" combing must be to be detected. Larger values mean combing must be more visible and smaller values mean combing can be less visible or strong and still be detected. Valid settings are from -1 (every pixel will be detected as combed) to 255 (no pixel will be detected as combed). This is basically a pixel difference value. A good range is [8, 12]. Default value is 9.
 * @param options.chroma - Sets whether or not chroma is considered in the combed frame decision. Only disable this if your source has chroma problems (rainbowing, etc.) that are causing problems for the combed frame detection with chroma enabled. Actually, using chroma=0 is usually more reliable, except for the case where there is chroma only combing in the source. Default value is 0.
 * @param options.blockx - set the x-axis size of the window used during combed frame detection (from 4 to 512) (default 16)
 * @param options.blocky - Respectively set the x-axis and y-axis size of the window used during combed frame detection. This has to do with the size of the area in which combpel pixels are required to be detected as combed for a frame to be declared combed. See the combpel parameter description for more info. Possible values are any number that is a power of 2 starting at 4 and going up to 512. Default value is 16.
 * @param options.combpel - The number of combed pixels inside any of the blocky by blockx size blocks on the frame for the frame to be detected as combed. While cthresh controls how "visible" the combing must be, this setting controls "how much" combing there must be in any localized area (a window defined by the blockx and blocky settings) on the frame. Minimum value is 0 and maximum is blocky x blockx (at which point no frames will ever be detected as combed). This setting is known as MI in TFM/VFM vocabulary. Default value is 80.
 * @see https://ffmpeg.org/ffmpeg-filters.html#fieldmatch
 */
export function fieldmatch(

  streams: FilterableStream[],

  options?: {
    order?: FFInt | "auto" | "bff" | "tff";
    mode?: FFInt | "pc" | "pc_n" | "pc_u" | "pc_n_ub" | "pcn" | "pcn_ub";
    ppsrc?: FFBoolean;
    field?: FFInt | "auto" | "bottom" | "top";
    mchroma?: FFBoolean;
    y0?: FFInt;
    scthresh?: FFDouble;
    combmatch?: FFInt | "none" | "sc" | "full";
    combdbg?: FFInt | "none" | "pcn" | "pcnub";
    cthresh?: FFInt;
    chroma?: FFBoolean;
    blockx?: FFInt;
    blocky?: FFInt;
    combpel?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "fieldmatch", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "order": options?.order,
      "mode": options?.mode,
      "ppsrc": options?.ppsrc,
      "field": options?.field,
      "mchroma": options?.mchroma,
      "y0": options?.y0,
      "scthresh": options?.scthresh,
      "combmatch": options?.combmatch,
      "combdbg": options?.combdbg,
      "cthresh": options?.cthresh,
      "chroma": options?.chroma,
      "blockx": options?.blockx,
      "blocky": options?.blocky,
      "combpel": options?.combpel,
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
export function framepack(


  _left: VideoStream,

  _right: VideoStream,


  options?: {
    format?: FFInt | "sbs" | "tab" | "frameseq" | "lines" | "columns";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_left, _right];

  const filterNode = filterNodeFactory(
    { name: "framepack", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Freeze video frames. This filter freezes video frames using frame from 2nd input. The filter accepts the following options:

 *
 * @param options.first - Set number of first frame from which to start freeze.
 * @param options.last - Set number of last frame from which to end freeze.
 * @param options.replace - Set number of frame from 2nd input which will be used instead of replaced frames.
 * @see https://ffmpeg.org/ffmpeg-filters.html#freezeframes
 */
export function freezeframes(


  _source: VideoStream,

  _replace: VideoStream,


  options?: {
    first?: FFInt64;
    last?: FFInt64;
    replace?: FFInt64;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _replace];

  const filterNode = filterNodeFactory(
    { name: "freezeframes", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Apply guided filter for edge-preserving smoothing, dehazing and so on. The filter accepts the following options:

 *
 * @param options.radius - Set the box radius in pixels. Allowed range is 1 to 20. Default is 3.
 * @param options.eps - Set regularization parameter (with square). Allowed range is 0 to 1. Default is 0.01.
 * @param options.mode - Set filter mode. Can be basic or fast. Default is basic.
 * @param options.sub - Set subsampling ratio for fast mode. Range is 2 to 64. Default is 4. No subsampling occurs in basic mode.
 * @param options.guidance - Set guidance mode. Can be off or on. Default is off. If off, single input is required. If on, two inputs of the same resolution and pixel format are required. The second input serves as the guidance.
 * @param options.planes - Set planes to filter. Default is first only.
 * @see https://ffmpeg.org/ffmpeg-filters.html#guided
 */
export function guided(

  streams: FilterableStream[],

  options?: {
    radius?: FFInt;
    eps?: FFFloat;
    mode?: FFInt | "basic" | "fast";
    sub?: FFInt;
    guidance?: FFInt | "off" | "on";
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "guided", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "radius": options?.radius,
      "eps": options?.eps,
      "mode": options?.mode,
      "sub": options?.sub,
      "guidance": options?.guidance,
      "planes": options?.planes,
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
export function haldclut(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _clut];

  const filterNode = filterNodeFactory(
    { name: "haldclut", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Apply head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones. The HRIRs are provided via additional streams, for each channel one stereo input stream is needed. The filter accepts the following options:

 *
 * @param options.map - Set mapping of input streams for convolution. The argument is a '|'-separated list of channel names in order as they are given as additional stream inputs for filter. This also specify number of input streams. Number of input streams must be not less than number of channels in first stream plus one.
 * @param options.gain - Set gain applied to audio. Value is in dB. Default is 0.
 * @param options.lfe - Set custom gain for LFE channels. Value is in dB. Default is 0.
 * @param options._type - Set processing type. Can be time or freq. time is processing audio in time domain which is slow. freq is processing audio in frequency domain which is fast. Default is freq.
 * @param options.size - Set size of frame in number of samples which will be processed at once. Default value is 1024. Allowed range is from 1024 to 96000.
 * @param options.hrir - Set format of hrir stream. Default value is stereo. Alternative value is multich. If value is set to stereo, number of additional streams should be greater or equal to number of input channels in first input stream. Also each additional stream should have stereo number of channels. If value is set to multich, number of additional streams should be exactly one. Also number of input channels of additional stream should be equal or greater than twice number of channels of first input stream.
 * @see https://ffmpeg.org/ffmpeg-filters.html#headphone
 */
export function headphone(

  streams: FilterableStream[],

  options?: {
    map?: FFString;
    gain?: FFFloat;
    lfe?: FFFloat;
    _type?: FFInt | "time" | "freq";
    size?: FFInt;
    hrir?: FFInt | "stereo" | "multich";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "headphone", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "map": options?.map,
      "gain": options?.gain,
      "lfe": options?.lfe,
      "type": options?._type,
      "size": options?.size,
      "hrir": options?.hrir,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
























/**
 * Stack input videos horizontally. All streams must be of same pixel format and of same height. Note that this filter is faster than using overlay and pad filter to create same output. The filter accepts the following option:

 *
 * @param options.inputs - Set number of input streams. Default is 2.
 * @param options.shortest - If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hstack
 */
export function hstack(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    shortest?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "hstack", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "shortest": options?.shortest,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Stack input videos horizontally. This is the VA-API variant of the hstack filter, each input stream may have different height, this filter will scale down/up each input stream while keeping the original aspect. It accepts the following options:

 *
 * @param options.inputs - See hstack.
 * @param options.shortest - See hstack.
 * @param options.height - Set height of output. If set to 0, this filter will set height of output to height of the first input stream. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hstack_vaapi
 */
export function hstack_vaapi(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    shortest?: FFBoolean;
    height?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "hstack_vaapi", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "shortest": options?.shortest,
      "height": options?.height,
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
export function hysteresis(


  _base: VideoStream,

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

  const inputStreams: FilterableStream[] = [_base, _alt];

  const filterNode = filterNodeFactory(
    { name: "hysteresis", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function identity(


  _main: VideoStream,

  _reference: VideoStream,


  options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "identity", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Temporally interleave frames from several inputs. interleave works with video inputs, ainterleave with audio. These filters read frames from several inputs and send the oldest queued frame to the output. Input streams must have well defined, monotonically increasing frame timestamp values. In order to submit one frame to output, these filters need to enqueue at least one frame for each input, so they cannot work in case one input is not yet terminated and will not receive incoming frames. For example consider the case when one input is a select filter which always drops input frames. The interleave filter will keep reading from that input, but it will never be able to send new frames to output until the input sends an end-of-stream signal. Also, depending on inputs synchronization, the filters will drop frames in case one input receives more frames than the other ones, and the queue is already filled. These filters accept the following options:

 *
 * @param options.nb_inputs - Set the number of different inputs, it is 2 by default.
 * @param options.duration - How to determine the end-of-stream. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#interleave
 */
export function interleave(

  streams: FilterableStream[],

  options?: {
    nb_inputs?: FFInt;
    duration?: FFInt | "longest" | "shortest" | "first";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "interleave", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "nb_inputs": options?.nb_inputs,
      "duration": options?.duration,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Join multiple input streams into one multi-channel stream. It accepts the following parameters:

 *
 * @param options.inputs - The number of input streams. It defaults to 2.
 * @param options.channel_layout - The desired output channel layout. It defaults to stereo.
 * @param options.map - Map channels from inputs to output. The argument is a '|'-separated list of mappings, each in the input_idx.in_channel-out_channel form. input_idx is the 0-based index of the input stream. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the specified input stream. out_channel is the name of the output channel.
 * @see https://ffmpeg.org/ffmpeg-filters.html#join
 */
export function join(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    channel_layout?: FFString;
    map?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "join", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "channel_layout": options?.channel_layout,
      "map": options?.map,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * Load a LADSPA (Linux Audio Developer's Simple Plugin API) plugin. To enable compilation of this filter you need to configure FFmpeg with --enable-ladspa.

 *
 * @param options.file - Specifies the name of LADSPA plugin library to load. If the environment variable LADSPA_PATH is defined, the LADSPA plugin is searched in each one of the directories specified by the colon separated list in LADSPA_PATH, otherwise in the standard LADSPA paths, which are in this order: HOME/.ladspa/lib/, /usr/local/lib/ladspa/, /usr/lib/ladspa/.
 * @param options.plugin - Specifies the plugin within the library. Some libraries contain only one plugin, but others contain many of them. If this is not set filter will list all available plugins within the specified library.
 * @param options.controls - Set the '|' separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). Controls need to be defined using the following syntax: c0=value0|c1=value1|c2=value2|..., where valuei is the value set on the i-th control. Alternatively they can be also defined using the following syntax: value0|value1|value2|..., where valuei is the value set on the i-th control. If controls is set to help, all available controls and their valid ranges are printed.
 * @param options.sample_rate - Specify the sample rate, default to 44100. Only used if plugin have zero inputs.
 * @param options.nb_samples - Set the number of samples per channel per each output frame, default is 1024. Only used if plugin have zero inputs.
 * @param options.duration - Set the minimum duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever. Only used if plugin have zero inputs.
 * @param options.latency - Enable latency compensation, by default is disabled. Only used if plugin have inputs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ladspa
 */
export function ladspa(

  streams: FilterableStream[],

  options?: {
    file?: FFString;
    plugin?: FFString;
    controls?: FFString;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    duration?: FFDuration;
    latency?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "ladspa", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "file": options?.file,
      "plugin": options?.plugin,
      "controls": options?.controls,
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "duration": options?.duration,
      "latency": options?.latency,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}














/**
 * Apply limited difference filter using second and optionally third video stream. The filter accepts the following options:

 *
 * @param options.threshold - Set the threshold to use when allowing certain differences between video streams. Any absolute difference value lower or exact than this threshold will pick pixel components from first video stream.
 * @param options.elasticity - Set the elasticity of soft thresholding when processing video streams. This value multiplied with first one sets second threshold. Any absolute difference value greater or exact than second threshold will pick pixel components from second video stream. For values between those two threshold linear interpolation between first and second video stream will be used.
 * @param options.reference - Enable the reference (third) video stream processing. By default is disabled. If set, this video stream will be used for calculating absolute difference with first video stream.
 * @param options.planes - Specify which planes will be processed. Defaults to all available.
 * @see https://ffmpeg.org/ffmpeg-filters.html#limitdiff
 */
export function limitdiff(

  streams: FilterableStream[],

  options?: {
    threshold?: FFFloat;
    elasticity?: FFFloat;
    reference?: FFBoolean;
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "limitdiff", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "threshold": options?.threshold,
      "elasticity": options?.elasticity,
      "reference": options?.reference,
      "planes": options?.planes,
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
export function lut2(


  _srcx: VideoStream,

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

  const inputStreams: FilterableStream[] = [_srcx, _srcy];

  const filterNode = filterNodeFactory(
    { name: "lut2", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Load a LV2 (LADSPA Version 2) plugin. To enable compilation of this filter you need to configure FFmpeg with --enable-lv2.

 *
 * @param options.plugin - Specifies the plugin URI. You may need to escape ':'.
 * @param options.controls - Set the '|' separated list of controls which are zero or more floating point values that determine the behavior of the loaded plugin (for example delay, threshold or gain). If controls is set to help, all available controls and their valid ranges are printed.
 * @param options.sample_rate - Specify the sample rate, default to 44100. Only used if plugin have zero inputs.
 * @param options.nb_samples - Set the number of samples per channel per each output frame, default is 1024. Only used if plugin have zero inputs.
 * @param options.duration - Set the minimum duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever. Only used if plugin have zero inputs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#lv2
 */
export function lv2(

  streams: FilterableStream[],

  options?: {
    plugin?: FFString;
    controls?: FFString;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    duration?: FFDuration;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "lv2", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "plugin": options?.plugin,
      "controls": options?.controls,
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "duration": options?.duration,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}








/**
 * Clamp the first input stream with the second input and third input stream. Returns the value of first stream to be between second input stream - undershoot and third input stream + overshoot. This filter accepts the following options:

 *
 * @param options.undershoot - Default value is 0.
 * @param options.overshoot - Default value is 0.
 * @param options.planes - Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#maskedclamp
 */
export function maskedclamp(


  _base: VideoStream,

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

  const inputStreams: FilterableStream[] = [_base, _dark, _bright];

  const filterNode = filterNodeFactory(
    { name: "maskedclamp", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function maskedmax(


  _source: VideoStream,

  _filter1: VideoStream,

  _filter2: VideoStream,


  options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _filter1, _filter2];

  const filterNode = filterNodeFactory(
    { name: "maskedmax", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function maskedmerge(


  _base: VideoStream,

  _overlay: VideoStream,

  _mask: VideoStream,


  options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_base, _overlay, _mask];

  const filterNode = filterNodeFactory(
    { name: "maskedmerge", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function maskedmin(


  _source: VideoStream,

  _filter1: VideoStream,

  _filter2: VideoStream,


  options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _filter1, _filter2];

  const filterNode = filterNodeFactory(
    { name: "maskedmin", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function maskedthreshold(


  _source: VideoStream,

  _reference: VideoStream,


  options?: {
    threshold?: FFInt;
    planes?: FFInt;
    mode?: FFInt | "abs" | "diff";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _reference];

  const filterNode = filterNodeFactory(
    { name: "maskedthreshold", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Merge color channel components from several video streams. The filter accepts up to 4 input streams, and merge selected input planes to the output video. This filter accepts the following options:

 *
 * @param options.mapping - Set input to output plane mapping. Default is 0. The mappings is specified as a bitmap. It should be specified as a hexadecimal number in the form 0xAa[Bb[Cc[Dd]]]. 'Aa' describes the mapping for the first plane of the output stream. 'A' sets the number of the input stream to use (from 0 to 3), and 'a' the plane number of the corresponding input to use (from 0 to 3). The rest of the mappings is similar, 'Bb' describes the mapping for the output stream second plane, 'Cc' describes the mapping for the output stream third plane and 'Dd' describes the mapping for the output stream fourth plane.
 * @param options.format - Set output pixel format. Default is yuva444p.
 * @param options.map0s - set 1st input to output stream mapping (from 0 to 3) (default 0)
 * @param options.map0p - set 1st input to output plane mapping (from 0 to 3) (default 0)
 * @param options.map1s - set 2nd input to output stream mapping (from 0 to 3) (default 0)
 * @param options.map1p - set 2nd input to output plane mapping (from 0 to 3) (default 0)
 * @param options.map2s - set 3rd input to output stream mapping (from 0 to 3) (default 0)
 * @param options.map2p - set 3rd input to output plane mapping (from 0 to 3) (default 0)
 * @param options.map3s - Set input to output stream mapping for output Nth plane. Default is 0.
 * @param options.map3p - Set input to output plane mapping for output Nth plane. Default is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mergeplanes
 */
export function mergeplanes(

  streams: FilterableStream[],

  options?: {
    mapping?: FFInt;
    format?: FFPixFmt;
    map0s?: FFInt;
    map0p?: FFInt;
    map1s?: FFInt;
    map1p?: FFInt;
    map2s?: FFInt;
    map2p?: FFInt;
    map3s?: FFInt;
    map3p?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "mergeplanes", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "mapping": options?.mapping,
      "format": options?.format,
      "map0s": options?.map0s,
      "map0p": options?.map0p,
      "map1s": options?.map1s,
      "map1p": options?.map1p,
      "map2s": options?.map2s,
      "map2p": options?.map2p,
      "map3s": options?.map3s,
      "map3p": options?.map3p,
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
export function midequalizer(


  _in0: VideoStream,

  _in1: VideoStream,


  options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_in0, _in1];

  const filterNode = filterNodeFactory(
    { name: "midequalizer", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Mix several video input streams into one video stream. A description of the accepted options follows.

 *
 * @param options.inputs - The number of inputs. If unspecified, it defaults to 2.
 * @param options.weights - set weight for each input (default "1 1")
 * @param options.scale - set scale (from 0 to 32767) (default 0)
 * @param options.planes - Syntax is same as option with same name.
 * @param options.duration - Specify how end of stream is determined. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#mix
 */
export function mix(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    weights?: FFString;
    scale?: FFFloat;
    planes?: FFFlags;
    duration?: FFInt | "longest" | "shortest" | "first";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "mix", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "weights": options?.weights,
      "scale": options?.scale,
      "planes": options?.planes,
      "duration": options?.duration,
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
export function morpho(


  __default: VideoStream,

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

  const inputStreams: FilterableStream[] = [__default, _structure];

  const filterNode = filterNodeFactory(
    { name: "morpho", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Obtain the MSAD (Mean Sum of Absolute Differences) between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained per component, average, min and max MSAD is printed through the logging system. The filter stores the calculated MSAD of each frame in frame metadata. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi msad -f null - @end example

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#msad
 */
export function msad(


  _main: VideoStream,

  _reference: VideoStream,


  options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "msad", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function multiply(


  _source: VideoStream,

  _factor: VideoStream,


  options?: {
    scale?: FFFloat;
    offset?: FFFloat;
    planes?: FFFlags;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _factor];

  const filterNode = filterNodeFactory(
    { name: "multiply", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Overlay one video on top of another. It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid. It accepts the following parameters: A description of the accepted options follows.

 *
 * @param options.x - set the x expression (default "0")
 * @param options.y - Modify the x and y of the overlay input. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.eof_action - See framesync.
 * @param options.eval - Set when the expressions for x, and y are evaluated. It accepts the following values: @end table Default value is frame.
 * @param options.shortest - See framesync.
 * @param options.format - Set the format for the output video. It accepts the following values: @end table Default value is yuv420.
 * @param options.repeatlast - See framesync.
 * @param options.alpha - Set format of alpha of the overlaid video, it can be straight or premultiplied. Default is straight.
 * @see https://ffmpeg.org/ffmpeg-filters.html#overlay
 */
export function overlay(


  _main: VideoStream,

  _overlay: VideoStream,


  options?: {
    x?: FFString;
    y?: FFString;
    eof_action?: FFInt | "repeat" | "endall" | "pass";
    eval?: FFInt | "init" | "frame";
    shortest?: FFBoolean;
    format?: FFInt | "yuv420" | "yuv420p10" | "yuv422" | "yuv422p10" | "yuv444" | "yuv444p10" | "rgb" | "gbrp" | "auto";
    repeatlast?: FFBoolean;
    alpha?: FFInt | "straight" | "premultiplied";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _overlay];

  const filterNode = filterNodeFactory(
    { name: "overlay", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Overlay one video on top of another using CUDA

 *
 * @param options.x - set the x expression of overlay (default "0")
 * @param options.y - set the y expression of overlay (default "0")
 * @param options.eof_action - Action to take when encountering EOF from secondary input (from 0 to 2) (default repeat)
 * @param options.eval - specify when to evaluate expressions (from 0 to 1) (default frame)
 * @param options.shortest - force termination when the shortest input terminates (default false)
 * @param options.repeatlast - repeat overlay of the last overlay frame (default true)
 */
export function overlay_cuda(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _overlay];

  const filterNode = filterNodeFactory(
    { name: "overlay_cuda", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function overlay_opencl(


  _main: VideoStream,

  _overlay: VideoStream,


  options?: {
    x?: FFInt;
    y?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _overlay];

  const filterNode = filterNodeFactory(
    { name: "overlay_opencl", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function overlay_vaapi(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _overlay];

  const filterNode = filterNodeFactory(
    { name: "overlay_vaapi", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function overlay_vulkan(


  _main: VideoStream,

  _overlay: VideoStream,


  options?: {
    x?: FFInt;
    y?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _overlay];

  const filterNode = filterNodeFactory(
    { name: "overlay_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function paletteuse(


  __default: VideoStream,

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

  const inputStreams: FilterableStream[] = [__default, _palette];

  const filterNode = filterNodeFactory(
    { name: "paletteuse", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Apply alpha premultiply effect to input video stream using first plane of second stream as alpha. Both streams must have same dimensions and same pixel format. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @param options.inplace - Do not require 2nd input for processing, instead use alpha plane from input stream.
 * @see https://ffmpeg.org/ffmpeg-filters.html#premultiply
 */
export function premultiply(

  streams: FilterableStream[],

  options?: {
    planes?: FFInt;
    inplace?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "premultiply", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "planes": options?.planes,
      "inplace": options?.inplace,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}












/**
 * Filter video using an OpenCL program.

 *
 * @param options.source - OpenCL program source file.
 * @param options.kernel - Kernel name in program.
 * @param options.inputs - Number of inputs to the filter. Defaults to 1.
 * @param options.size - Size of output frames. Defaults to the same as the first input.
 * @see https://ffmpeg.org/ffmpeg-filters.html#program_opencl
 */
export function program_opencl(

  streams: FilterableStream[],

  options?: {
    source?: FFString;
    kernel?: FFString;
    inputs?: FFInt;
    size?: FFImageSize;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "program_opencl", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "source": options?.source,
      "kernel": options?.kernel,
      "inputs": options?.inputs,
      "size": options?.size,
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
 * Obtain the average, maximum and minimum PSNR (Peak Signal to Noise Ratio) between two input videos. This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the PSNR. Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained average PSNR is printed through the logging system. The filter stores the accumulated MSE (mean squared error) of each frame, and at the end of the processing it is averaged across all frames equally, and the following formula is applied to obtain the PSNR: @example PSNR = 10*log10(MAX^2/MSE) @end example Where MAX is the average of the maximum values of each component of the image. The description of the accepted parameters follows.

 *
 * @param options.stats_file - If specified the filter will use the named file to save the PSNR of each individual frame. When filename equals "-" the data is sent to standard output.
 * @param options.stats_version - Specifies which version of the stats file format to use. Details of each format are written below. Default value is 1.
 * @param options.output_max - Add raw stats (max values) to the output log. (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#psnr
 */
export function psnr(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "psnr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream. Destination pixel at position (X, Y) will be picked from source (x, y) position where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero value for pixel will be used for destination pixel. Xmap and Ymap input video streams must be of same dimensions. Output video stream will have Xmap/Ymap video stream dimensions. Xmap and Ymap input video streams are 16bit depth, single channel.

 *
 * @param options.format - Specify pixel format of output from this filter. Can be color or gray. Default is color.
 * @param options.fill - Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black.
 * @see https://ffmpeg.org/ffmpeg-filters.html#remap
 */
export function remap(


  _source: VideoStream,

  _xmap: VideoStream,

  _ymap: VideoStream,


  options?: {
    format?: FFInt | "color" | "gray";
    fill?: FFColor;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _xmap, _ymap];

  const filterNode = filterNodeFactory(
    { name: "remap", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function remap_opencl(


  _source: VideoStream,

  _xmap: VideoStream,

  _ymap: VideoStream,


  options?: {
    interp?: FFInt | "near" | "linear";
    fill?: FFColor;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_source, _xmap, _ymap];

  const filterNode = filterNodeFactory(
    { name: "remap_opencl", typingsInput: ["video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function scale2ref(


  __default: VideoStream,

  _ref: VideoStream,


  options?: {
    w?: FFString;
    h?: FFString;
    flags?: FFString;
    interl?: FFBoolean;
    size?: FFString;
    in_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt709" | "fcc" | "smpte240m" | "bt2020";
    out_color_matrix?: FFInt | "auto" | "bt601" | "bt470" | "smpte170m" | "bt709" | "fcc" | "smpte240m" | "bt2020";
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

  const inputStreams: FilterableStream[] = [__default, _ref];

  const filterNode = filterNodeFactory(
    { name: "scale2ref", typingsInput: ["video", "video"], typingsOutput: ["video", "video"] },
    inputStreams,
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
 * This filter acts like normal compressor but has the ability to compress detected signal using second input signal. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal. The filtered signal then can be filtered with other filters in later stages of processing. See pan and amerge filter. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain. Default is 1. Range is between 0.015625 and 64.
 * @param options.mode - Set mode of compressor operation. Can be upward or downward. Default is downward.
 * @param options.threshold - If a signal of second stream raises above this level it will affect the gain reduction of first stream. By default is 0.125. Range is between 0.00097563 and 1.
 * @param options.ratio - Set a ratio about which the signal is reduced. 1:2 means that if the level raised 4dB above the threshold, it will be only 2dB above after the reduction. Default is 2. Range is between 1 and 20.
 * @param options.attack - Amount of milliseconds the signal has to rise above the threshold before gain reduction starts. Default is 20. Range is between 0.01 and 2000.
 * @param options.release - Amount of milliseconds the signal has to fall below the threshold before reduction is decreased again. Default is 250. Range is between 0.01 and 9000.
 * @param options.makeup - Set the amount by how much signal will be amplified after processing. Default is 1. Range is from 1 to 64.
 * @param options.knee - Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.82843. Range is between 1 and 8.
 * @param options.link - Choose if the average level between all channels of side-chain stream or the louder(maximum) channel of side-chain stream affects the reduction. Default is average.
 * @param options.detection - Should the exact signal be taken in case of peak or an RMS one in case of rms. Default is rms which is mainly smoother.
 * @param options.level_sc - Set sidechain gain. Default is 1. Range is between 0.015625 and 64.
 * @param options.mix - How much to use compressed signal in output. Default is 1. Range is between 0 and 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sidechaincompress
 */
export function sidechaincompress(


  _main: AudioStream,

  _sidechain: AudioStream,


  options?: {
    level_in?: FFDouble;
    mode?: FFInt | "downward" | "upward";
    threshold?: FFDouble;
    ratio?: FFDouble;
    attack?: FFDouble;
    release?: FFDouble;
    makeup?: FFDouble;
    knee?: FFDouble;
    link?: FFInt | "average" | "maximum";
    detection?: FFInt | "peak" | "rms";
    level_sc?: FFDouble;
    mix?: FFDouble;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_main, _sidechain];

  const filterNode = filterNodeFactory(
    { name: "sidechaincompress", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "level_in": options?.level_in,
      "mode": options?.mode,
      "threshold": options?.threshold,
      "ratio": options?.ratio,
      "attack": options?.attack,
      "release": options?.release,
      "makeup": options?.makeup,
      "knee": options?.knee,
      "link": options?.link,
      "detection": options?.detection,
      "level_sc": options?.level_sc,
      "mix": options?.mix,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}






/**
 * A sidechain gate acts like a normal (wideband) gate but has the ability to filter the detected signal before sending it to the gain reduction stage. Normally a gate uses the full range signal to detect a level above the threshold. For example: If you cut all lower frequencies from your sidechain signal the gate will decrease the volume of your track only if not enough highs appear. With this technique you are able to reduce the resonation of a natural drum or remove "rumbling" of muted strokes from a heavily distorted guitar. It needs two input streams and returns one output stream. First input stream will be processed depending on second stream signal. The filter accepts the following options:

 *
 * @param options.level_in - Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64.
 * @param options.mode - Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced.
 * @param options.range - Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander.
 * @param options.threshold - If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1.
 * @param options.ratio - Set a ratio about which the signal is reduced. Default is 2. Allowed range is from 1 to 9000.
 * @param options.attack - Amount of milliseconds the signal has to rise above the threshold before gain reduction stops. Default is 20 milliseconds. Allowed range is from 0.01 to 9000.
 * @param options.release - Amount of milliseconds the signal has to fall below the threshold before the reduction is increased again. Default is 250 milliseconds. Allowed range is from 0.01 to 9000.
 * @param options.makeup - Set amount of amplification of signal after processing. Default is 1. Allowed range is from 1 to 64.
 * @param options.knee - Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.828427125. Allowed range is from 1 to 8.
 * @param options.detection - Choose if exact signal should be taken for detection or an RMS like one. Default is rms. Can be peak or rms.
 * @param options.link - Choose if the average level between all channels or the louder channel affects the reduction. Default is average. Can be average or maximum.
 * @param options.level_sc - Set sidechain gain. Default is 1. Range is from 0.015625 to 64.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sidechaingate
 */
export function sidechaingate(


  _main: AudioStream,

  _sidechain: AudioStream,


  options?: {
    level_in?: FFDouble;
    mode?: FFInt | "downward" | "upward";
    range?: FFDouble;
    threshold?: FFDouble;
    ratio?: FFDouble;
    attack?: FFDouble;
    release?: FFDouble;
    makeup?: FFDouble;
    knee?: FFDouble;
    detection?: FFInt | "peak" | "rms";
    link?: FFInt | "average" | "maximum";
    level_sc?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [_main, _sidechain];

  const filterNode = filterNodeFactory(
    { name: "sidechaingate", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "level_in": options?.level_in,
      "mode": options?.mode,
      "range": options?.range,
      "threshold": options?.threshold,
      "ratio": options?.ratio,
      "attack": options?.attack,
      "release": options?.release,
      "makeup": options?.makeup,
      "knee": options?.knee,
      "detection": options?.detection,
      "link": options?.link,
      "level_sc": options?.level_sc,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}












/**
 * Calculates the MPEG-7 Video Signature. The filter can handle more than one input. In this case the matching between the inputs can be calculated additionally. The filter always passes through the first input. The signature of each stream can be written into a file. It accepts the following options:

 *
 * @param options.detectmode - Enable or disable the matching process. Available values are: @end table
 * @param options.nb_inputs - Set the number of inputs. The option value must be a non negative integer. Default value is 1.
 * @param options.filename - Set the path to which the output is written. If there is more than one input, the path must be a prototype, i.e. must contain %d or %0nd (where n is a positive integer), that will be replaced with the input number. If no filename is specified, no output will be written. This is the default.
 * @param options.format - Choose the output format. Available values are: @end table
 * @param options.th_d - Set threshold to detect one word as similar. The option value must be an integer greater than zero. The default value is 9000.
 * @param options.th_dc - Set threshold to detect all words as similar. The option value must be an integer greater than zero. The default value is 60000.
 * @param options.th_xh - Set threshold to detect frames as similar. The option value must be an integer greater than zero. The default value is 116.
 * @param options.th_di - Set the minimum length of a sequence in frames to recognize it as matching sequence. The option value must be a non negative integer value. The default value is 0.
 * @param options.th_it - Set the minimum relation, that matching frames to all frames must have. The option value must be a double value between 0 and 1. The default value is 0.5.
 * @see https://ffmpeg.org/ffmpeg-filters.html#signature
 */
export function signature(

  streams: FilterableStream[],

  options?: {
    detectmode?: FFInt | "off" | "full" | "fast";
    nb_inputs?: FFInt;
    filename?: FFString;
    format?: FFInt | "binary" | "xml";
    th_d?: FFInt;
    th_dc?: FFInt;
    th_xh?: FFInt;
    th_di?: FFInt;
    th_it?: FFDouble;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "signature", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "detectmode": options?.detectmode,
      "nb_inputs": options?.nb_inputs,
      "filename": options?.filename,
      "format": options?.format,
      "th_d": options?.th_d,
      "th_dc": options?.th_dc,
      "th_xh": options?.th_xh,
      "th_di": options?.th_di,
      "th_it": options?.th_it,
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
export function spectrumsynth(


  _magnitude: VideoStream,

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

  const inputStreams: FilterableStream[] = [_magnitude, _phase];

  const filterNode = filterNodeFactory(
    { name: "spectrumsynth", typingsInput: ["video", "video"], typingsOutput: ["audio"] },
    inputStreams,
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
 * Obtain the SSIM (Structural SImilarity Metric) between two input videos. This filter takes in input two input videos, the first input is considered the "main" source and is passed unchanged to the output. The second input is used as a "reference" video for computing the SSIM. Both video inputs must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The filter stores the calculated SSIM of each frame. The description of the accepted parameters follows.

 *
 * @param options.stats_file - If specified the filter will use the named file to save the SSIM of each individual frame. When filename equals "-" the data is sent to standard output.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ssim
 */
export function ssim(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "ssim", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function ssim360(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "ssim360", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Select video or audio streams. The filter accepts the following options:

 *
 * @param options.inputs - Set number of inputs. Default is 2.
 * @param options.map - Set input indexes to remap to outputs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#streamselect
 */
export function streamselect(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    map?: FFString;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "streamselect", typingsInput: [], typingsOutput: [] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "map": options?.map,
},
    options?.extraOptions,
  ),
  );
return filterNode;
}




























/**
 * Apply threshold effect to video stream. This filter needs four video streams to perform thresholding. First stream is stream we are filtering. Second stream is holding threshold values, third stream is holding min values, and last, fourth stream is holding max values. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#threshold
 */
export function threshold(


  __default: VideoStream,

  _threshold: VideoStream,

  _min: VideoStream,

  _max: VideoStream,


  options?: {
    planes?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [__default, _threshold, _min, _max];

  const filterNode = filterNodeFactory(
    { name: "threshold", typingsInput: ["video", "video", "video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Apply alpha unpremultiply effect to input video stream using first plane of second stream as alpha. Both streams must have same dimensions and same pixel format. The filter accepts the following option:

 *
 * @param options.planes - Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. If the format has 1 or 2 components, then luma is bit 0. If the format has 3 or 4 components: for RGB formats bit 0 is green, bit 1 is blue and bit 2 is red; for YUV formats bit 0 is luma, bit 1 is chroma-U and bit 2 is chroma-V. If present, the alpha channel is always the last bit.
 * @param options.inplace - Do not require 2nd input for processing, instead use alpha plane from input stream.
 * @see https://ffmpeg.org/ffmpeg-filters.html#unpremultiply
 */
export function unpremultiply(

  streams: FilterableStream[],

  options?: {
    planes?: FFInt;
    inplace?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "unpremultiply", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "planes": options?.planes,
      "inplace": options?.inplace,
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
export function varblur(


  __default: VideoStream,

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

  const inputStreams: FilterableStream[] = [__default, _radius];

  const filterNode = filterNodeFactory(
    { name: "varblur", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Obtain the average VIF (Visual Information Fidelity) between two input videos. This filter takes two input videos. Both input videos must have the same resolution and pixel format for this filter to work correctly. Also it assumes that both inputs have the same number of frames, which are compared one by one. The obtained average VIF score is printed through the logging system. The filter stores the calculated VIF score of each frame. This filter also supports the framesync options. In the below example the input file main.mpg being processed is compared with the reference file ref.mpg. @example ffmpeg -i main.mpg -i ref.mpg -lavfi vif -f null - @end example @anchor{vignette}

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#vif
 */
export function vif(


  _main: VideoStream,

  _reference: VideoStream,


  options?: {
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "vif", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Stack input videos vertically. All streams must be of same pixel format and of same width. Note that this filter is faster than using overlay and pad filter to create same output. The filter accepts the following options:

 *
 * @param options.inputs - Set number of input streams. Default is 2.
 * @param options.shortest - If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vstack
 */
export function vstack(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    shortest?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "vstack", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "shortest": options?.shortest,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Stack input videos vertically. This is the VA-API variant of the vstack filter, each input stream may have different width, this filter will scale down/up each input stream while keeping the original aspect. It accepts the following options:

 *
 * @param options.inputs - See vstack.
 * @param options.shortest - See vstack.
 * @param options.width - Set width of output. If set to 0, this filter will set width of output to width of the first input stream. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vstack_vaapi
 */
export function vstack_vaapi(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    shortest?: FFBoolean;
    width?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "vstack_vaapi", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "shortest": options?.shortest,
      "width": options?.width,
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
export function xcorrelate(


  _primary: VideoStream,

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

  const inputStreams: FilterableStream[] = [_primary, _secondary];

  const filterNode = filterNodeFactory(
    { name: "xcorrelate", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function xfade(


  _main: VideoStream,

  _xfade: VideoStream,


  options?: {
    transition?: FFInt | "custom" | "fade" | "wipeleft" | "wiperight" | "wipeup" | "wipedown" | "slideleft" | "slideright" | "slideup" | "slidedown" | "circlecrop" | "rectcrop" | "distance" | "fadeblack" | "fadewhite" | "radial" | "smoothleft" | "smoothright" | "smoothup" | "smoothdown" | "circleopen" | "circleclose" | "vertopen" | "vertclose" | "horzopen" | "horzclose" | "dissolve" | "pixelize" | "diagtl" | "diagtr" | "diagbl" | "diagbr" | "hlslice" | "hrslice" | "vuslice" | "vdslice" | "hblur" | "fadegrays" | "wipetl" | "wipetr" | "wipebl" | "wipebr" | "squeezeh" | "squeezev" | "zoomin" | "fadefast" | "fadeslow" | "hlwind" | "hrwind" | "vuwind" | "vdwind" | "coverleft" | "coverright" | "coverup" | "coverdown" | "revealleft" | "revealright" | "revealup" | "revealdown";
    duration?: FFDuration;
    offset?: FFDuration;
    expr?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _xfade];

  const filterNode = filterNodeFactory(
    { name: "xfade", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function xfade_opencl(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _xfade];

  const filterNode = filterNodeFactory(
    { name: "xfade_opencl", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
export function xfade_vulkan(


  _main: VideoStream,

  _xfade: VideoStream,


  options?: {
    transition?: FFInt | "fade" | "wipeleft" | "wiperight" | "wipeup" | "wipedown" | "slidedown" | "slideup" | "slideleft" | "slideright" | "circleopen" | "circleclose" | "dissolve" | "pixelize" | "wipetl" | "wipetr" | "wipebl" | "wipebr";
    duration?: FFDuration;
    offset?: FFDuration;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [_main, _xfade];

  const filterNode = filterNodeFactory(
    { name: "xfade_vulkan", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Pick median pixels from several input videos. The filter accepts the following options:

 *
 * @param options.inputs - Set number of inputs. Default is 3. Allowed range is from 3 to 255. If number of inputs is even number, than result will be mean value between two median values.
 * @param options.planes - Set which planes to filter. Default value is 15, by which all planes are processed.
 * @param options.percentile - Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xmedian
 */
export function xmedian(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    planes?: FFInt;
    percentile?: FFFloat;
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "xmedian", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "planes": options?.planes,
      "percentile": options?.percentile,
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
 * Obtain the average (across all input frames) and minimum (across all color plane averages) eXtended Perceptually weighted peak Signal-to-Noise Ratio (XPSNR) between two input videos. The XPSNR is a low-complexity psychovisually motivated distortion measurement algorithm for assessing the difference between two video streams or images. This is especially useful for objectively quantifying the distortions caused by video and image codecs, as an alternative to a formal subjective test. The logarithmic XPSNR output values are in a similar range as those of traditional psnr assessments but better reflect human impressions of visual coding quality. More details on the XPSNR measure, which essentially represents a blockwise weighted variant of the PSNR measure, can be found in the following freely available papers:

 *
 * @param options.stats_file - If specified, the filter will use the named file to save the XPSNR value of each individual frame and color plane. When the file name equals "-", that data is sent to standard output.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xpsnr
 */
export function xpsnr(


  _main: VideoStream,

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

  const inputStreams: FilterableStream[] = [_main, _reference];

  const filterNode = filterNodeFactory(
    { name: "xpsnr", typingsInput: ["video", "video"], typingsOutput: ["video"] },
    inputStreams,
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
 * Stack video inputs into custom layout. All streams must be of same pixel format. The filter accepts the following options:

 *
 * @param options.inputs - Set number of input streams. Default is 2.
 * @param options.layout - Specify layout of inputs. This option requires the desired layout configuration to be explicitly set by the user. This sets position of each video input in output. Each input is separated by '|'. The first number represents the column, and the second number represents the row. Numbers start at 0 and are separated by '_'. Optionally one can use wX and hX, where X is video input from which to take width or height. Multiple values can be used when separated by '+'. In such case values are summed together. Note that if inputs are of different sizes gaps may appear, as not all of the output video frame will be filled. Similarly, videos can overlap each other if their position doesn't leave enough space for the full frame of adjoining videos. For 2 inputs, a default layout of 0_0|w0_0 (equivalent to grid=2x1) is set. In all other cases, a layout or a grid must be set by the user. Either grid or layout can be specified at a time. Specifying both will result in an error.
 * @param options.grid - Specify a fixed size grid of inputs. This option is used to create a fixed size grid of the input streams. Set the grid size in the form COLUMNSxROWS. There must be ROWS * COLUMNS input streams and they will be arranged as a grid with ROWS rows and COLUMNS columns. When using this option, each input stream within a row must have the same height and all the rows must have the same width. If grid is set, then inputs option is ignored and is implicitly set to ROWS * COLUMNS. For 2 inputs, a default grid of 2x1 (equivalent to layout=0_0|w0_0) is set. In all other cases, a layout or a grid must be set by the user. Either grid or layout can be specified at a time. Specifying both will result in an error.
 * @param options.shortest - If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
 * @param options.fill - If set to valid color, all unused pixels will be filled with that color. By default fill is set to none, so it is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xstack
 */
export function xstack(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    layout?: FFString;
    grid?: FFImageSize;
    shortest?: FFBoolean;
    fill?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "xstack", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "layout": options?.layout,
      "grid": options?.grid,
      "shortest": options?.shortest,
      "fill": options?.fill,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Stack video inputs into custom layout. This is the VA-API variant of the xstack filter, each input stream may have different size, this filter will scale down/up each input stream to the given output size, or the size of the first input stream. It accepts the following options:

 *
 * @param options.inputs - See xstack.
 * @param options.shortest - See xstack.
 * @param options.layout - See xstack. Moreover, this permits the user to supply output size for each input stream. @example xstack_vaapi=inputs=4:layout=0_0_1920x1080|0_h0_1920x1080|w0_0_1920x1080|w0_h0_1920x1080 @end example
 * @param options.grid - See xstack.
 * @param options.grid_tile_size - Set output size for each input stream when grid is set. If this option is not set, this filter will set output size by default to the size of the first input stream. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @param options.fill - See xstack.
 * @see https://ffmpeg.org/ffmpeg-filters.html#xstack_vaapi
 */
export function xstack_vaapi(

  streams: FilterableStream[],

  options?: {
    inputs?: FFInt;
    shortest?: FFBoolean;
    layout?: FFString;
    grid?: FFImageSize;
    grid_tile_size?: FFImageSize;
    fill?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams = streams;

  const filterNode = filterNodeFactory(
    { name: "xstack_vaapi", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "inputs": options?.inputs,
      "shortest": options?.shortest,
      "layout": options?.layout,
      "grid": options?.grid,
      "grid_tile_size": options?.grid_tile_size,
      "fill": options?.fill,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}
