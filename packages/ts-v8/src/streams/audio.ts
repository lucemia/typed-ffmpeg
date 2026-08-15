// NOTE: this file is auto-generated, do not modify
/**
 * Audio stream with typed filter methods.
 */


import type { VideoStream } from "./video.js";
import { StreamType, type FFMpegFilterDef } from "@typed-ffmpeg/core/common/schema";
import { Default, Auto } from "@typed-ffmpeg/core/utils/types";
import { filterNodeFactory } from "@typed-ffmpeg/core/dag/factory";
import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import { FilterableStream } from "@typed-ffmpeg/core/dag/baseStreams";
import { AudioStream as AudioStreamBase, FilterNode } from "@typed-ffmpeg/core/dag/nodes";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFColor, FFFlags, FFDictionary, FFPixFmt,
  FFVideoRate, FFImageSize, FFRational, FFSampleFmt, FFBinary,
} from "@typed-ffmpeg/core/types";

export class AudioStream extends AudioStreamBase {




/**
 * Convert input audio to 3d scope video output. The filter accepts the following options:

 *
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is hd720.
 * @param options.fov - Set the camera field of view. Default is 90 degrees. Allowed range is from 40 to 150.
 * @param options.roll - Set the camera roll.
 * @param options.pitch - Set the camera pitch.
 * @param options.yaw - Set the camera yaw.
 * @param options.xzoom - Set the camera zoom on X-axis.
 * @param options.xpos - Set the camera position on X-axis.
 * @param options.length - Set the length of displayed audio waves in number of frames.
 * @see https://ffmpeg.org/ffmpeg-filters.html#a3dscope
 */
  a3dscope(
    options?: {
    rate?: FFVideoRate;
    size?: FFImageSize;
    fov?: FFFloat;
    roll?: FFFloat;
    pitch?: FFFloat;
    yaw?: FFFloat;
    xzoom?: FFFloat;
    xpos?: FFFloat;
    length?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "a3dscope", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rate": options?.rate,
      "size": options?.size,
      "fov": options?.fov,
      "roll": options?.roll,
      "pitch": options?.pitch,
      "yaw": options?.yaw,
      "xzoom": options?.xzoom,
      "xpos": options?.xpos,
      "length": options?.length,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






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
  aap(
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
    const filterNode = filterNodeFactory(
      { name: "aap", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _desired],
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
 * Benchmark part of a filtergraph. The filter accepts the following options:

 *
 * @param options.action - Start or stop a timer. Available values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#bench
 */
  abench(
    options?: {
    action?: FFInt | "start" | "stop";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "abench", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "action": options?.action,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Convert input audio to a video output, displaying the audio bit scope. The filter accepts the following options:

 *
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 1024x256.
 * @param options.colors - Specify list of colors separated by space or by '|' which will be used to draw channels. Unrecognized or missing colors will be replaced by white color.
 * @param options.mode - Set output mode. Can be bars or trace. Default is bars.
 * @see https://ffmpeg.org/ffmpeg-filters.html#abitscope
 */
  abitscope(
    options?: {
    rate?: FFVideoRate;
    size?: FFImageSize;
    colors?: FFString;
    mode?: FFInt | "bars" | "trace";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "abitscope", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rate": options?.rate,
      "size": options?.size,
      "colors": options?.colors,
      "mode": options?.mode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * A compressor is mainly used to reduce the dynamic range of a signal. Especially modern music is mostly compressed at a high ratio to improve the overall loudness. It's done to get the highest attention of a listener, "fatten" the sound and bring more "power" to the track. If a signal is compressed too much it may sound dull or "dead" afterwards or it may start to "pump" (which could be a powerful effect but can also destroy a track completely). The right compression is the key to reach a professional sound and is the high art of mixing and mastering. Because of its complex settings it may take a long time to get the right feeling for this kind of effect. Compression is done by detecting the volume above a chosen level threshold and dividing it by the factor set with ratio. So if you set the threshold to -12dB and your signal reaches -6dB a ratio of 2:1 will result in a signal at -9dB. Because an exact manipulation of the signal would cause distortion of the waveform the reduction can be levelled over the time. This is done by setting "Attack" and "Release". attack determines how long the signal has to rise above the threshold before any reduction will occur and release sets the time the signal has to fall below the threshold to reduce the reduction again. Shorter signals than the chosen attack time will be left untouched. The overall reduction of the signal can be made up afterwards with the makeup setting. So compressing the peaks of a signal about 6dB and raising the makeup to this level results in a signal twice as loud than the source. To gain a softer entry in the compression the knee flattens the hard edge at the threshold in the range of the chosen decibels. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain. Default is 1. Range is between 0.015625 and 64.
 * @param options.mode - Set mode of compressor operation. Can be upward or downward. Default is downward.
 * @param options.threshold - If a signal of stream rises above this level it will affect the gain reduction. By default it is 0.125. Range is between 0.00097563 and 1.
 * @param options.ratio - Set a ratio by which the signal is reduced. 1:2 means that if the level rose 4dB above the threshold, it will be only 2dB above after the reduction. Default is 2. Range is between 1 and 20.
 * @param options.attack - Amount of milliseconds the signal has to rise above the threshold before gain reduction starts. Default is 20. Range is between 0.01 and 2000.
 * @param options.release - Amount of milliseconds the signal has to fall below the threshold before reduction is decreased again. Default is 250. Range is between 0.01 and 9000.
 * @param options.makeup - Set the amount by how much signal will be amplified after processing. Default is 1. Range is from 1 to 64.
 * @param options.knee - Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.82843. Range is between 1 and 8.
 * @param options.link - Choose if the average level between all channels of input stream or the louder(maximum) channel of input stream affects the reduction. Default is average.
 * @param options.detection - Should the exact signal be taken in case of peak or an RMS one in case of rms. Default is rms which is mostly smoother.
 * @param options.level_sc - set sidechain gain (from 0.015625 to 64) (default 1)
 * @param options.mix - How much to use compressed signal in output. Default is 1. Range is between 0 and 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#acompressor
 */
  acompressor(
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
    const filterNode = filterNodeFactory(
      { name: "acompressor", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
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
 * Simple audio dynamic range compression/expansion filter. The filter accepts the following options:

 *
 * @param options.contrast - Set contrast. Default is 33. Allowed range is between 0 and 100.
 * @see https://ffmpeg.org/ffmpeg-filters.html#acontrast
 */
  acontrast(
    options?: {
    contrast?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "acontrast", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "contrast": options?.contrast,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Copy the input audio source unchanged to the output. This is mainly useful for testing purposes.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#acopy
 */
  acopy(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "acopy", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
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
  acrossfade(
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
    const filterNode = filterNodeFactory(
      { name: "acrossfade", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _crossfade1],
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
 * Split audio stream into several bands. This filter splits audio stream into two or more frequency ranges. Summing all streams back will give flat output. The filter accepts the following options:

 *
 * @param options.split - Set split frequencies. Those must be positive and increasing.
 * @param options.order - Set filter order for each band split. This controls filter roll-off or steepness of filter transfer function. Available values are: @end table Default is 4th.
 * @param options.level - Set input gain level. Allowed range is from 0 to 1. Default value is 1.
 * @param options.gain - set output bands gain (default "1.f")
 * @param options.precision - Set which precision to use when processing samples. @end table Default value is auto.
 * @see https://ffmpeg.org/ffmpeg-filters.html#acrossover
 */
  acrossover(
    options?: {
    split?: FFString;
    order?: FFInt | "2nd" | "4th" | "6th" | "8th" | "10th" | "12th" | "14th" | "16th" | "18th" | "20th";
    level?: FFFloat;
    gain?: FFString;
    precision?: FFInt | "auto" | "float" | "double";
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "acrossover", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "split": options?.split,
      "order": options?.order,
      "level": options?.level,
      "gain": options?.gain,
      "precision": options?.precision,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Reduce audio bit resolution. This filter is bit crusher with enhanced functionality. A bit crusher is used to audibly reduce number of bits an audio signal is sampled with. This doesn't change the bit depth at all, it just produces the effect. Material reduced in bit depth sounds more harsh and "digital". This filter is able to even round to continuous values instead of discrete bit depths. Additionally it has a D/C offset which results in different crushing of the lower and the upper half of the signal. An Anti-Aliasing setting is able to produce "softer" crushing sounds. Another feature of this filter is the logarithmic mode. This setting switches from linear distances between bits to logarithmic ones. The result is a much more "natural" sounding crusher which doesn't gate low signals for example. The human ear has a logarithmic perception, so this kind of crushing is much more pleasant. Logarithmic crushing is also able to get anti-aliased. The filter accepts the following options:

 *
 * @param options.level_in - Set level in.
 * @param options.level_out - Set level out.
 * @param options.bits - Set bit reduction.
 * @param options.mix - Set mixing amount.
 * @param options.mode - Can be linear: lin or logarithmic: log.
 * @param options.dc - Set DC.
 * @param options.aa - Set anti-aliasing.
 * @param options.samples - Set sample reduction.
 * @param options.lfo - Enable LFO. By default disabled.
 * @param options.lforange - Set LFO range.
 * @param options.lforate - Set LFO rate.
 * @see https://ffmpeg.org/ffmpeg-filters.html#acrusher
 */
  acrusher(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    bits?: FFDouble;
    mix?: FFDouble;
    mode?: FFInt | "lin" | "log";
    dc?: FFDouble;
    aa?: FFDouble;
    samples?: FFDouble;
    lfo?: FFBoolean;
    lforange?: FFDouble;
    lforate?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "acrusher", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "bits": options?.bits,
      "mix": options?.mix,
      "mode": options?.mode,
      "dc": options?.dc,
      "aa": options?.aa,
      "samples": options?.samples,
      "lfo": options?.lfo,
      "lforange": options?.lforange,
      "lforate": options?.lforate,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Delay audio filtering until a given wallclock timestamp. See the cue filter.

 *
 * @param options.cue - cue unix timestamp in microseconds (from 0 to I64_MAX) (default 0)
 * @param options.preroll - preroll duration in seconds (default 0)
 * @param options.buffer - buffer duration in seconds (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#acue
 */
  acue(
    options?: {
    cue?: FFInt64;
    preroll?: FFDuration;
    buffer?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "acue", typingsInput: ["audio"], typingsOutput: ["audio"] },
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
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Remove impulsive noise from input audio. Samples detected as impulsive noise are replaced by interpolated samples using autoregressive modelling.

 *
 * @param options.window - Set window size, in milliseconds. Allowed range is from 10 to 100. Default value is 55 milliseconds. This sets size of window which will be processed at once.
 * @param options.overlap - Set window overlap, in percentage of window size. Allowed range is from 50 to 95. Default value is 75 percent. Setting this to a very high value increases impulsive noise removal but makes whole process much slower.
 * @param options.arorder - Set autoregression order, in percentage of window size. Allowed range is from 0 to 25. Default value is 2 percent. This option also controls quality of interpolated samples using neighbour good samples.
 * @param options.threshold - Set threshold value. Allowed range is from 1 to 100. Default value is 2. This controls the strength of impulsive noise which is going to be removed. The lower value, the more samples will be detected as impulsive noise.
 * @param options.burst - Set burst fusion, in percentage of window size. Allowed range is 0 to 10. Default value is 2. If any two samples detected as noise are spaced less than this value then any sample between those two samples will be also detected as noise.
 * @param options.method - Set overlap method. It accepts the following values: @end table Default value is a.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adeclick
 */
  adeclick(
    options?: {
    window?: FFDouble;
    overlap?: FFDouble;
    arorder?: FFDouble;
    threshold?: FFDouble;
    burst?: FFDouble;
    method?: FFInt | "add" | "a" | "save" | "s";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adeclick", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "window": options?.window,
      "overlap": options?.overlap,
      "arorder": options?.arorder,
      "threshold": options?.threshold,
      "burst": options?.burst,
      "method": options?.method,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Remove clipped samples from input audio. Samples detected as clipped are replaced by interpolated samples using autoregressive modelling.

 *
 * @param options.window - Set window size, in milliseconds. Allowed range is from 10 to 100. Default value is 55 milliseconds. This sets size of window which will be processed at once.
 * @param options.overlap - Set window overlap, in percentage of window size. Allowed range is from 50 to 95. Default value is 75 percent.
 * @param options.arorder - Set autoregression order, in percentage of window size. Allowed range is from 0 to 25. Default value is 8 percent. This option also controls quality of interpolated samples using neighbour good samples.
 * @param options.threshold - Set threshold value. Allowed range is from 1 to 100. Default value is 10. Higher values make clip detection less aggressive.
 * @param options.hsize - Set size of histogram used to detect clips. Allowed range is from 100 to 9999. Default value is 1000. Higher values make clip detection less aggressive.
 * @param options.method - Set overlap method. It accepts the following values: @end table Default value is a.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adeclip
 */
  adeclip(
    options?: {
    window?: FFDouble;
    overlap?: FFDouble;
    arorder?: FFDouble;
    threshold?: FFDouble;
    hsize?: FFInt;
    method?: FFInt | "add" | "a" | "save" | "s";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adeclip", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "window": options?.window,
      "overlap": options?.overlap,
      "arorder": options?.arorder,
      "threshold": options?.threshold,
      "hsize": options?.hsize,
      "method": options?.method,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply decorrelation to input audio stream. The filter accepts the following options:

 *
 * @param options.stages - Set decorrelation stages of filtering. Allowed range is from 1 to 16. Default value is 6.
 * @param options.seed - Set random seed used for setting delay in samples across channels.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adecorrelate
 */
  adecorrelate(
    options?: {
    stages?: FFInt;
    seed?: FFInt64;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adecorrelate", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "stages": options?.stages,
      "seed": options?.seed,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Delay one or more audio channels. Samples in delayed channel are filled with silence. The filter accepts the following option:

 *
 * @param options.delays - Set list of delays in milliseconds for each channel separated by '|'. Unused delays will be silently ignored. If number of given delays is smaller than number of channels all remaining channels will not be delayed. If you want to delay exact number of samples, append 'S' to number. If you want instead to delay in seconds, append 's' to number.
 * @param options.all - Use last set delay for all remaining channels. By default is disabled. This option if enabled changes how option delays is interpreted.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adelay
 */
  adelay(
    options?: {
    delays?: FFString;
    all?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adelay", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "delays": options?.delays,
      "all": options?.all,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Remedy denormals in audio by adding extremely low-level noise. This filter shall be placed before any filter that can produce denormals. A description of the accepted parameters follows.

 *
 * @param options.level - Set level of added noise in dB. Default is -351. Allowed range is from -451 to -90.
 * @param options._type - Set type of added noise. @end table Default is dc.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adenorm
 */
  adenorm(
    options?: {
    level?: FFDouble;
    _type?: FFInt | "dc" | "ac" | "square" | "pulse";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adenorm", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level": options?.level,
      "type": options?._type,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Compute derivative/integral of audio stream. Applying both filters one after another produces original audio.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#aderivative
 */
  aderivative(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aderivative", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
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
 * Draw a graph using input audio metadata. See drawgraph

 *
 * @param options.m1 - set 1st metadata key (default "")
 * @param options.fg1 - set 1st foreground color expression (default "0xffff0000")
 * @param options.m2 - set 2nd metadata key (default "")
 * @param options.fg2 - set 2nd foreground color expression (default "0xff00ff00")
 * @param options.m3 - set 3rd metadata key (default "")
 * @param options.fg3 - set 3rd foreground color expression (default "0xffff00ff")
 * @param options.m4 - set 4th metadata key (default "")
 * @param options.fg4 - set 4th foreground color expression (default "0xffffff00")
 * @param options.bg - set background color (default "white")
 * @param options.min - set minimal value (from INT_MIN to INT_MAX) (default -1)
 * @param options.max - set maximal value (from INT_MIN to INT_MAX) (default 1)
 * @param options.mode - set graph mode (from 0 to 2) (default line)
 * @param options.slide - set slide mode (from 0 to 4) (default frame)
 * @param options.size - set graph size (default "900x256")
 * @param options.rate - set video rate (default "25")
 * @see https://ffmpeg.org/ffmpeg-filters.html#adrawgraph
 */
  adrawgraph(
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
      { name: "adrawgraph", typingsInput: ["audio"], typingsOutput: ["video"] },
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
 * Apply spectral dynamic range controller filter to input audio stream. A description of the accepted options follows.

 *
 * @param options.transfer - Set the transfer expression. The expression can contain the following constants: @end table Default value is p.
 * @param options.attack - Set the attack in milliseconds. Default is 50 milliseconds. Allowed range is from 1 to 1000 milliseconds.
 * @param options.release - Set the release in milliseconds. Default is 100 milliseconds. Allowed range is from 5 to 2000 milliseconds.
 * @param options.channels - Set which channels to filter, by default all channels in audio stream are filtered.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adrc
 */
  adrc(
    options?: {
    transfer?: FFString;
    attack?: FFDouble;
    release?: FFDouble;
    channels?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adrc", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "transfer": options?.transfer,
      "attack": options?.attack,
      "release": options?.release,
      "channels": options?.channels,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply dynamic equalization to input audio stream. A description of the accepted options follows.

 *
 * @param options.threshold - Set the detection threshold used to trigger equalization. Threshold detection is using detection filter. Default value is 0. Allowed range is from 0 to 100.
 * @param options.dfrequency - Set the detection frequency in Hz used for detection filter used to trigger equalization. Default value is 1000 Hz. Allowed range is between 2 and 1000000 Hz.
 * @param options.dqfactor - Set the detection resonance factor for detection filter used to trigger equalization. Default value is 1. Allowed range is from 0.001 to 1000.
 * @param options.tfrequency - Set the target frequency of equalization filter. Default value is 1000 Hz. Allowed range is between 2 and 1000000 Hz.
 * @param options.tqfactor - Set the target resonance factor for target equalization filter. Default value is 1. Allowed range is from 0.001 to 1000.
 * @param options.attack - Set the amount of milliseconds the signal from detection has to rise above the detection threshold before equalization starts. Default is 20. Allowed range is between 1 and 2000.
 * @param options.release - Set the amount of milliseconds the signal from detection has to fall below the detection threshold before equalization ends. Default is 200. Allowed range is between 1 and 2000.
 * @param options.ratio - Set the ratio by which the equalization gain is raised. Default is 1. Allowed range is between 0 and 30.
 * @param options.makeup - Set the makeup offset by which the equalization gain is raised. Default is 0. Allowed range is between 0 and 100.
 * @param options.range - Set the max allowed cut/boost amount. Default is 50. Allowed range is from 1 to 200.
 * @param options.mode - Set the mode of filter operation, can be one of the following: @end table Default mode is cutbelow.
 * @param options.dftype - Set the type of detection filter, can be one of the following: @end table Default type is bandpass.
 * @param options.tftype - Set the type of target filter, can be one of the following: @end table Default type is bell.
 * @param options.auto - Automatically gather threshold from detection filter. By default is disabled. This option is useful to detect threshold in certain time frame of input audio stream, in such case option value is changed at runtime. Available values are: @end table
 * @param options.precision - Set which precision to use when processing samples. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#adynamicequalizer
 */
  adynamicequalizer(
    options?: {
    threshold?: FFDouble;
    dfrequency?: FFDouble;
    dqfactor?: FFDouble;
    tfrequency?: FFDouble;
    tqfactor?: FFDouble;
    attack?: FFDouble;
    release?: FFDouble;
    ratio?: FFDouble;
    makeup?: FFDouble;
    range?: FFDouble;
    mode?: FFInt | "listen" | "cutbelow" | "cutabove" | "boostbelow" | "boostabove";
    dftype?: FFInt | "bandpass" | "lowpass" | "highpass" | "peak";
    tftype?: FFInt | "bell" | "lowshelf" | "highshelf";
    auto?: FFInt | "disabled" | "off" | "on" | "adaptive";
    precision?: FFInt | "auto" | "float" | "double";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adynamicequalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "threshold": options?.threshold,
      "dfrequency": options?.dfrequency,
      "dqfactor": options?.dqfactor,
      "tfrequency": options?.tfrequency,
      "tqfactor": options?.tqfactor,
      "attack": options?.attack,
      "release": options?.release,
      "ratio": options?.ratio,
      "makeup": options?.makeup,
      "range": options?.range,
      "mode": options?.mode,
      "dftype": options?.dftype,
      "tftype": options?.tftype,
      "auto": options?.auto,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply dynamic smoothing to input audio stream. A description of the accepted options follows.

 *
 * @param options.sensitivity - Set an amount of sensitivity to frequency fluctations. Default is 2. Allowed range is from 0 to 1e+06.
 * @param options.basefreq - Set a base frequency for smoothing. Default value is 22050. Allowed range is from 2 to 1e+06.
 * @see https://ffmpeg.org/ffmpeg-filters.html#adynamicsmooth
 */
  adynamicsmooth(
    options?: {
    sensitivity?: FFDouble;
    basefreq?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "adynamicsmooth", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sensitivity": options?.sensitivity,
      "basefreq": options?.basefreq,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply echoing to the input audio. Echoes are reflected sound and can occur naturally amongst mountains (and sometimes large buildings) when talking or shouting; digital echo effects emulate this behaviour and are often used to help fill out the sound of a single instrument or vocal. The time difference between the original signal and the reflection is the delay, and the loudness of the reflected signal is the decay. Multiple echoes can have different delays and decays. A description of the accepted parameters follows.

 *
 * @param options.in_gain - Set input gain of reflected signal. Default is 0.6.
 * @param options.out_gain - Set output gain of reflected signal. Default is 0.3.
 * @param options.delays - Set list of time intervals in milliseconds between original signal and reflections separated by '|'. Allowed range for each delay is (0 - 90000.0]. Default is 1000.
 * @param options.decays - Set list of loudness of reflected signals separated by '|'. Allowed range for each decay is (0 - 1.0]. Default is 0.5.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aecho
 */
  aecho(
    options?: {
    in_gain?: FFFloat;
    out_gain?: FFFloat;
    delays?: FFString;
    decays?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aecho", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "in_gain": options?.in_gain,
      "out_gain": options?.out_gain,
      "delays": options?.delays,
      "decays": options?.decays,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Audio emphasis filter creates or restores material directly taken from LPs or emphased CDs with different filter curves. E.g. to store music on vinyl the signal has to be altered by a filter first to even out the disadvantages of this recording medium. Once the material is played back the inverse filter has to be applied to restore the distortion of the frequency response. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain.
 * @param options.level_out - Set output gain.
 * @param options.mode - Set filter mode. For restoring material use reproduction mode, otherwise use production mode. Default is reproduction mode.
 * @param options._type - Set filter type. Selects medium. Can be one of the following: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#aemphasis
 */
  aemphasis(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    mode?: FFInt | "reproduction" | "production";
    _type?: FFInt | "col" | "emi" | "bsi" | "riaa" | "cd" | "50fm" | "75fm" | "50kf" | "75kf";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aemphasis", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "mode": options?.mode,
      "type": options?._type,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Modify an audio signal according to the specified expressions. This filter accepts one or more expressions (one for each channel), which are evaluated and used to modify a corresponding audio signal. It accepts the following parameters:

 *
 * @param options.exprs - Set the '|'-separated expressions list for each separate channel. If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels.
 * @param options.channel_layout - Set output channel layout. If not specified, the channel layout is specified by the number of expressions. If set to same, it will use by default the same input channel layout.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aeval
 */
  aeval(
    options?: {
    exprs?: FFString;
    channel_layout?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aeval", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "exprs": options?.exprs,
      "channel_layout": options?.channel_layout,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * An exciter is used to produce high sound that is not present in the original signal. This is done by creating harmonic distortions of the signal which are restricted in range and added to the original signal. An Exciter raises the upper end of an audio signal without simply raising the higher frequencies like an equalizer would do to create a more "crisp" or "brilliant" sound. The filter accepts the following options:

 *
 * @param options.level_in - Set input level prior processing of signal. Allowed range is from 0 to 64. Default value is 1.
 * @param options.level_out - Set output level after processing of signal. Allowed range is from 0 to 64. Default value is 1.
 * @param options.amount - Set the amount of harmonics added to original signal. Allowed range is from 0 to 64. Default value is 1.
 * @param options.drive - Set the amount of newly created harmonics. Allowed range is from 0.1 to 10. Default value is 8.5.
 * @param options.blend - Set the octave of newly created harmonics. Allowed range is from -10 to 10. Default value is 0.
 * @param options.freq - Set the lower frequency limit of producing harmonics in Hz. Allowed range is from 2000 to 12000 Hz. Default is 7500 Hz.
 * @param options.ceil - Set the upper frequency limit of producing harmonics. Allowed range is from 9999 to 20000 Hz. If value is lower than 10000 Hz no limit is applied.
 * @param options.listen - Mute the original signal and output only added harmonics. By default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aexciter
 */
  aexciter(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    amount?: FFDouble;
    drive?: FFDouble;
    blend?: FFDouble;
    freq?: FFDouble;
    ceil?: FFDouble;
    listen?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aexciter", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "amount": options?.amount,
      "drive": options?.drive,
      "blend": options?.blend,
      "freq": options?.freq,
      "ceil": options?.ceil,
      "listen": options?.listen,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply fade-in/out effect to input audio. A description of the accepted parameters follows.

 *
 * @param options._type - Specify the effect type, can be either in for fade-in, or out for a fade-out effect. Default is in.
 * @param options.start_sample - Specify the number of the start sample for starting to apply the fade effect. Default is 0.
 * @param options.nb_samples - Specify the number of samples for which the fade effect has to last. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. Default is 44100.
 * @param options.start_time - Specify the start time of the fade effect. Default is 0. The value must be specified as a time duration; see the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If set this option is used instead of start_sample.
 * @param options.duration - Specify the duration of the fade effect. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
 * @param options.curve - Set curve for fade transition. It accepts the following values: @end table
 * @param options.silence - Set the initial gain for fade-in or final gain for fade-out. Default value is 0.0.
 * @param options.unity - Set the initial gain for fade-out or final gain for fade-in. Default value is 1.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afade
 */
  afade(
    options?: {
    _type?: FFInt | "in" | "out";
    start_sample?: FFInt64;
    nb_samples?: FFInt64;
    start_time?: FFDuration;
    duration?: FFDuration;
    curve?: FFInt | "nofade" | "tri" | "qsin" | "esin" | "hsin" | "log" | "ipar" | "qua" | "cub" | "squ" | "cbr" | "par" | "exp" | "iqsin" | "ihsin" | "dese" | "desi" | "losi" | "sinc" | "isinc" | "quat" | "quatr" | "qsin2" | "hsin2";
    silence?: FFDouble;
    unity?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "afade", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "type": options?._type,
      "start_sample": options?.start_sample,
      "nb_samples": options?.nb_samples,
      "start_time": options?.start_time,
      "duration": options?.duration,
      "curve": options?.curve,
      "silence": options?.silence,
      "unity": options?.unity,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Denoise audio samples with FFT. A description of the accepted parameters follows.

 *
 * @param options.noise_reduction - Set the noise reduction in dB, allowed range is 0.01 to 97. Default value is 12 dB.
 * @param options.noise_floor - Set the noise floor in dB, allowed range is -80 to -20. Default value is -50 dB.
 * @param options.noise_type - Set the noise type. It accepts the following values: @end table
 * @param options.band_noise - Set custom band noise profile for every one of 15 bands. Bands are separated by ' ' or '|'.
 * @param options.residual_floor - Set the residual floor in dB, allowed range is -80 to -20. Default value is -38 dB.
 * @param options.track_noise - Enable noise floor tracking. By default is disabled. With this enabled, noise floor is automatically adjusted.
 * @param options.track_residual - Enable residual tracking. By default is disabled.
 * @param options.output_mode - Set the output mode. It accepts the following values: @end table
 * @param options.adaptivity - Set the adaptivity factor, used how fast to adapt gains adjustments per each frequency bin. Value 0 enables instant adaptation, while higher values react much slower. Allowed range is from 0 to 1. Default value is 0.5.
 * @param options.floor_offset - Set the noise floor offset factor. This option is used to adjust offset applied to measured noise floor. It is only effective when noise floor tracking is enabled. Allowed range is from -2.0 to 2.0. Default value is 1.0.
 * @param options.noise_link - Set the noise link used for multichannel audio. It accepts the following values: @end table
 * @param options.band_multiplier - Set the band multiplier factor, used how much to spread bands across frequency bins. Allowed range is from 0.2 to 5. Default value is 1.25.
 * @param options.sample_noise - Toggle capturing and measurement of noise profile from input audio. It accepts the following values: @end table
 * @param options.gain_smooth - Set gain smooth spatial radius, used to smooth gains applied to each frequency bin. Useful to reduce random music noise artefacts. Higher values increases smoothing of gains. Allowed range is from 0 to 50. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afftdn
 */
  afftdn(
    options?: {
    noise_reduction?: FFFloat;
    noise_floor?: FFFloat;
    noise_type?: FFInt | "white" | "w" | "vinyl" | "v" | "shellac" | "s" | "custom" | "c";
    band_noise?: FFString;
    residual_floor?: FFFloat;
    track_noise?: FFBoolean;
    track_residual?: FFBoolean;
    output_mode?: FFInt | "input" | "i" | "output" | "o" | "noise" | "n";
    adaptivity?: FFFloat;
    floor_offset?: FFFloat;
    noise_link?: FFInt | "none" | "min" | "max" | "average";
    band_multiplier?: FFFloat;
    sample_noise?: FFInt | "none" | "start" | "begin" | "stop" | "end";
    gain_smooth?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "afftdn", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "noise_reduction": options?.noise_reduction,
      "noise_floor": options?.noise_floor,
      "noise_type": options?.noise_type,
      "band_noise": options?.band_noise,
      "residual_floor": options?.residual_floor,
      "track_noise": options?.track_noise,
      "track_residual": options?.track_residual,
      "output_mode": options?.output_mode,
      "adaptivity": options?.adaptivity,
      "floor_offset": options?.floor_offset,
      "noise_link": options?.noise_link,
      "band_multiplier": options?.band_multiplier,
      "sample_noise": options?.sample_noise,
      "gain_smooth": options?.gain_smooth,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply arbitrary expressions to samples in frequency domain.

 *
 * @param options.real - Set frequency domain real expression for each separate channel separated by '|'. Default is "re". If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels.
 * @param options.imag - Set frequency domain imaginary expression for each separate channel separated by '|'. Default is "im". Each expression in real and imag can contain the following constants and functions: @end table
 * @param options.win_size - Set window size. Allowed range is from 16 to 131072. Default is 4096
 * @param options.win_func - Set window function. It accepts the following values: @end table Default is hann.
 * @param options.overlap - Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.75.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afftfilt
 */
  afftfilt(
    options?: {
    real?: FFString;
    imag?: FFString;
    win_size?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    overlap?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "afftfilt", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "real": options?.real,
      "imag": options?.imag,
      "win_size": options?.win_size,
      "win_func": options?.win_func,
      "overlap": options?.overlap,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }










/**
 * Set output format constraints for the input audio. The framework will negotiate the most appropriate format to minimize conversions. It accepts the following parameters:

 *
 * @param options.sample_fmts - A '|'-separated list of requested sample formats.
 * @param options.sample_rates - A '|'-separated list of requested sample rates.
 * @param options.channel_layouts - A '|'-separated list of requested channel layouts. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aformat
 */
  aformat(
    options?: {
    sample_fmts?: FFSampleFmt;
    sample_rates?: FFInt;
    channel_layouts?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aformat", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sample_fmts": options?.sample_fmts,
      "sample_rates": options?.sample_rates,
      "channel_layouts": options?.channel_layouts,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply frequency shift to input audio samples. The filter accepts the following options:

 *
 * @param options.shift - Specify frequency shift. Allowed range is -INT_MAX to INT_MAX. Default value is 0.0.
 * @param options.level - Set output gain applied to final output. Allowed range is from 0.0 to 1.0. Default value is 1.0.
 * @param options.order - Set filter order used for filtering. Allowed range is from 1 to 16. Default value is 8.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afreqshift
 */
  afreqshift(
    options?: {
    shift?: FFDouble;
    level?: FFDouble;
    order?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "afreqshift", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "shift": options?.shift,
      "level": options?.level,
      "order": options?.order,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Reduce broadband noise from input samples using Wavelets. A description of the accepted options follows.

 *
 * @param options.sigma - Set the noise sigma, allowed range is from 0 to 1. Default value is 0. This option controls strength of denoising applied to input samples. Most useful way to set this option is via decibels, eg. -45dB.
 * @param options.levels - Set the number of wavelet levels of decomposition. Allowed range is from 1 to 12. Default value is 10. Setting this too low make denoising performance very poor.
 * @param options.wavet - Set wavelet type for decomposition of input frame. They are sorted by number of coefficients, from lowest to highest. More coefficients means worse filtering speed, but overall better quality. Available wavelets are: @end table
 * @param options.percent - Set percent of full denoising. Allowed range is from 0 to 100 percent. Default value is 85 percent or partial denoising.
 * @param options.profile - If enabled, first input frame will be used as noise profile. If first frame samples contain non-noise performance will be very poor.
 * @param options.adaptive - If enabled, input frames are analyzed for presence of noise. If noise is detected with high possibility then input frame profile will be used for processing following frames, until new noise frame is detected.
 * @param options.samples - Set size of single frame in number of samples. Allowed range is from 512 to 65536. Default frame size is 8192 samples.
 * @param options.softness - Set softness applied inside thresholding function. Allowed range is from 0 to 10. Default softness is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afwtdn
 */
  afwtdn(
    options?: {
    sigma?: FFDouble;
    levels?: FFInt;
    wavet?: FFInt | "sym2" | "sym4" | "rbior68" | "deb10" | "sym10" | "coif5" | "bl3";
    percent?: FFDouble;
    profile?: FFBoolean;
    adaptive?: FFBoolean;
    samples?: FFInt;
    softness?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "afwtdn", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sigma": options?.sigma,
      "levels": options?.levels,
      "wavet": options?.wavet,
      "percent": options?.percent,
      "profile": options?.profile,
      "adaptive": options?.adaptive,
      "samples": options?.samples,
      "softness": options?.softness,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * A gate is mainly used to reduce lower parts of a signal. This kind of signal processing reduces disturbing noise between useful signals. Gating is done by detecting the volume below a chosen level threshold and dividing it by the factor set with ratio. The bottom of the noise floor is set via range. Because an exact manipulation of the signal would cause distortion of the waveform the reduction can be levelled over time. This is done by setting attack and release. attack determines how long the signal has to fall below the threshold before any reduction will occur and release sets the time the signal has to rise above the threshold to reduce the reduction again. Shorter signals than the chosen attack time will be left untouched.

 *
 * @param options.level_in - Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64.
 * @param options.mode - Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced.
 * @param options.range - Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander.
 * @param options.threshold - If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1.
 * @param options.ratio - Set a ratio by which the signal is reduced. Default is 2. Allowed range is from 1 to 9000.
 * @param options.attack - Amount of milliseconds the signal has to rise above the threshold before gain reduction stops. Default is 20 milliseconds. Allowed range is from 0.01 to 9000.
 * @param options.release - Amount of milliseconds the signal has to fall below the threshold before the reduction is increased again. Default is 250 milliseconds. Allowed range is from 0.01 to 9000.
 * @param options.makeup - Set amount of amplification of signal after processing. Default is 1. Allowed range is from 1 to 64.
 * @param options.knee - Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.828427125. Allowed range is from 1 to 8.
 * @param options.detection - Choose if exact signal should be taken for detection or an RMS like one. Default is rms. Can be peak or rms.
 * @param options.link - Choose if the average level between all channels or the louder channel affects the reduction. Default is average. Can be average or maximum.
 * @param options.level_sc - set sidechain gain (from 0.015625 to 64) (default 1)
 * @see https://ffmpeg.org/ffmpeg-filters.html#agate
 */
  agate(
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
    const filterNode = filterNodeFactory(
      { name: "agate", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
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
 * See graphmonitor.

 *
 * @param options.size - set monitor size (default "hd720")
 * @param options.opacity - set video opacity (from 0 to 1) (default 0.9)
 * @param options.mode - set mode (default 0)
 * @param options.flags - set flags (default all+queue)
 * @param options.rate - set video rate (default "25")
 * @see https://ffmpeg.org/ffmpeg-filters.html#agraphmonitor
 */
  agraphmonitor(
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
      { name: "agraphmonitor", typingsInput: ["audio"], typingsOutput: ["video"] },
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
 * Convert input audio to a video output, displaying the volume histogram. The filter accepts the following options:

 *
 * @param options.dmode - Specify how histogram is calculated. It accepts the following values: @end table Default is single.
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is hd720.
 * @param options.scale - Set display scale. It accepts the following values: @end table Default is log.
 * @param options.ascale - Set amplitude scale. It accepts the following values: @end table Default is log.
 * @param options.acount - Set how much frames to accumulate in histogram. Default is 1. Setting this to -1 accumulates all frames.
 * @param options.rheight - Set histogram ratio of window height.
 * @param options.slide - Set sonogram sliding. It accepts the following values: @end table Default is replace.
 * @param options.hmode - Set histogram mode. It accepts the following values: @end table Default is abs.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ahistogram
 */
  ahistogram(
    options?: {
    dmode?: FFInt | "single" | "separate";
    rate?: FFVideoRate;
    size?: FFImageSize;
    scale?: FFInt | "log" | "sqrt" | "cbrt" | "lin" | "rlog";
    ascale?: FFInt | "log" | "lin";
    acount?: FFInt;
    rheight?: FFFloat;
    slide?: FFInt | "replace" | "scroll";
    hmode?: FFInt | "abs" | "sign";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "ahistogram", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "dmode": options?.dmode,
      "rate": options?.rate,
      "size": options?.size,
      "scale": options?.scale,
      "ascale": options?.ascale,
      "acount": options?.acount,
      "rheight": options?.rheight,
      "slide": options?.slide,
      "hmode": options?.hmode,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Apply an arbitrary Infinite Impulse Response filter. It accepts the following parameters:

 *
 * @param options.zeros - Set B/numerator/zeros/reflection coefficients.
 * @param options.poles - Set A/denominator/poles/ladder coefficients.
 * @param options.gains - Set channels gains.
 * @param options.dry - set dry gain (from 0 to 1) (default 1)
 * @param options.wet - set wet gain (from 0 to 1) (default 1)
 * @param options.format - Set coefficients format. @end table
 * @param options.process - Set type of processing. @end table
 * @param options.precision - Set filtering precision. @end table
 * @param options.e - Set filtering precision. @end table
 * @param options.normalize - Normalize filter coefficients, by default is enabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.mix - How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
 * @param options.response - Show IR frequency response, magnitude(magenta), phase(green) and group delay(yellow) in additional video stream. By default it is disabled.
 * @param options.channel - Set for which IR channel to display frequency response. By default is first channel displayed. This option is used only when response is enabled.
 * @param options.size - Set video stream size. This option is used only when response is enabled.
 * @param options.rate - set video rate (default "25")
 * @see https://ffmpeg.org/ffmpeg-filters.html#aiir
 */
  aiir(
    options?: {
    zeros?: FFString;
    poles?: FFString;
    gains?: FFString;
    dry?: FFDouble;
    wet?: FFDouble;
    format?: FFInt | "ll" | "sf" | "tf" | "zp" | "pr" | "pd" | "sp";
    process?: FFInt | "d" | "s" | "p";
    precision?: FFInt | "dbl" | "flt" | "i32" | "i16";
    e?: FFInt | "dbl" | "flt" | "i32" | "i16";
    normalize?: FFBoolean;
    mix?: FFDouble;
    response?: FFBoolean;
    channel?: FFInt;
    size?: FFImageSize;
    rate?: FFVideoRate;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "aiir", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "zeros": options?.zeros,
      "poles": options?.poles,
      "gains": options?.gains,
      "dry": options?.dry,
      "wet": options?.wet,
      "format": options?.format,
      "process": options?.process,
      "precision": options?.precision,
      "e": options?.e,
      "normalize": options?.normalize,
      "mix": options?.mix,
      "response": options?.response,
      "channel": options?.channel,
      "size": options?.size,
      "rate": options?.rate,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Compute derivative/integral of audio stream. Applying both filters one after another produces original audio.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#aderivative
 */
  aintegral(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aintegral", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
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
 * Measure filtering latency. Report previous filter filtering latency, delay in number of audio samples for audio filters or number of video frames for video filters. On end of input stream, filter will report min and max measured latency for previous running filter in filtergraph.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#latency
 */
  alatency(
    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "alatency", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
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
 * The limiter prevents an input signal from rising over a desired threshold. This limiter uses lookahead technology to prevent your signal from distorting. It means that there is a small delay after the signal is processed. Keep in mind that the delay it produces is the attack time you set. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain. Default is 1.
 * @param options.level_out - Set output gain. Default is 1.
 * @param options.limit - Don't let signals above this level pass the limiter. Default is 1.
 * @param options.attack - The limiter will reach its attenuation level in this amount of time in milliseconds. Default is 5 milliseconds.
 * @param options.release - Come back from limiting to attenuation 1.0 in this amount of milliseconds. Default is 50 milliseconds.
 * @param options.asc - When gain reduction is always needed ASC takes care of releasing to an average reduction level rather than reaching a reduction of 0 in the release time.
 * @param options.asc_level - Select how much the release time is affected by ASC, 0 means nearly no changes in release time while 1 produces higher release times.
 * @param options.level - Auto level output signal. Default is enabled. This normalizes audio back to 0dB if enabled.
 * @param options.latency - Compensate the delay introduced by using the lookahead buffer set with attack parameter. Also flush the valid audio data in the lookahead buffer when the stream hits EOF.
 * @see https://ffmpeg.org/ffmpeg-filters.html#alimiter
 */
  alimiter(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    limit?: FFDouble;
    attack?: FFDouble;
    release?: FFDouble;
    asc?: FFBoolean;
    asc_level?: FFDouble;
    level?: FFBoolean;
    latency?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "alimiter", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "limit": options?.limit,
      "attack": options?.attack,
      "release": options?.release,
      "asc": options?.asc,
      "asc_level": options?.asc_level,
      "level": options?.level,
      "latency": options?.latency,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply a two-pole all-pass filter with central frequency (in Hz) frequency, and filter-width width. An all-pass filter changes the audio's frequency to phase relationship without changing its frequency to amplitude relationship. The filter accepts the following options:

 *
 * @param options.frequency - Change allpass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change allpass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change allpass width. Syntax for the command is : "width"
 * @param options.mix - Change allpass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.order - Set the filter order, can be 1 or 2. Default is 2.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#allpass
 */
  allpass(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    order?: FFInt;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "allpass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "order": options?.order,
      "transform": options?.transform,
      "precision": options?.precision,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }










/**
 * Loop audio samples. The filter accepts the following options:

 *
 * @param options.loop - Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0.
 * @param options.size - Set maximal number of samples. Default is 0.
 * @param options.start - Set first sample of loop. Default is 0.
 * @param options.time - Set the time of loop start in seconds. Only used if option named start is set to -1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aloop
 */
  aloop(
    options?: {
    loop?: FFInt;
    size?: FFInt64;
    start?: FFInt64;
    time?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aloop", typingsInput: ["audio"], typingsOutput: ["audio"] },
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
return filterNode.audio(0) as unknown as AudioStream;
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
  ametadata(
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
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "ametadata", typingsInput: ["audio"], typingsOutput: ["audio"] },
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
return filterNode.audio(0) as unknown as AudioStream;
  }












/**
 * Multiply first audio stream with second audio stream and store result in output audio stream. Multiplication is done by multiplying each sample from first stream with sample at same position from second stream. With this element-wise multiplication one can create amplitude fades and amplitude modulations.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#amultiply
 */
  amultiply(
    _multiply1: AudioStream,

    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "amultiply", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _multiply1],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * High-order parametric multiband equalizer for each channel. It accepts the following parameters:

 *
 * @param options.params - This option string is in format: "cchn f=cf w=w g=g t=f | ..." Each equalizer band is separated by '|'. @end table
 * @param options.curves - With this option activated frequency response of anequalizer is displayed in video stream.
 * @param options.size - Set video stream size. Only useful if curves option is activated.
 * @param options.mgain - Set max gain that will be displayed. Only useful if curves option is activated. Setting this to a reasonable value makes it possible to display gain which is derived from neighbour bands which are too close to each other and thus produce higher gain when both are activated.
 * @param options.fscale - Set frequency scale used to draw frequency response in video output. Can be linear or logarithmic. Default is logarithmic.
 * @param options.colors - Set color for each channel curve which is going to be displayed in video stream. This is list of color names separated by space or by '|'. Unrecognised or missing colors will be replaced by white color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#anequalizer
 */
  anequalizer(
    options?: {
    params?: FFString;
    curves?: FFBoolean;
    size?: FFImageSize;
    mgain?: FFDouble;
    fscale?: FFInt | "lin" | "log";
    colors?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "anequalizer", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "params": options?.params,
      "curves": options?.curves,
      "size": options?.size,
      "mgain": options?.mgain,
      "fscale": options?.fscale,
      "colors": options?.colors,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Reduce broadband noise in audio samples using Non-Local Means algorithm. Each sample is adjusted by looking for other samples with similar contexts. This context similarity is defined by comparing their surrounding patches of size p. Patches are searched in an area of r around the sample. The filter accepts the following options:

 *
 * @param options.strength - Set denoising strength. Allowed range is from 0.00001 to 10000. Default value is 0.00001.
 * @param options.patch - Set patch radius duration. Allowed range is from 1 to 100 milliseconds. Default value is 2 milliseconds.
 * @param options.research - Set research radius duration. Allowed range is from 2 to 300 milliseconds. Default value is 6 milliseconds.
 * @param options.output - Set the output mode. It accepts the following values: @end table
 * @param options.smooth - Set smooth factor. Default value is 11. Allowed range is from 1 to 1000.
 * @see https://ffmpeg.org/ffmpeg-filters.html#anlmdn
 */
  anlmdn(
    options?: {
    strength?: FFFloat;
    patch?: FFDuration;
    research?: FFDuration;
    output?: FFInt | "i" | "o" | "n";
    smooth?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "anlmdn", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "strength": options?.strength,
      "patch": options?.patch,
      "research": options?.research,
      "output": options?.output,
      "smooth": options?.smooth,
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
  anlmf(
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
    const filterNode = filterNodeFactory(
      { name: "anlmf", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _desired],
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
  anlms(
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
    const filterNode = filterNodeFactory(
      { name: "anlms", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _desired],
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
 * Pass the audio source unchanged to the output.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#anull
 */
  anull(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "anull", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }










/**
 * Pad the end of an audio stream with silence. This can be used together with ffmpeg -shortest to extend audio streams to the same length as the video stream. A description of the accepted options follows.

 *
 * @param options.packet_size - Set silence packet size. Default value is 4096.
 * @param options.pad_len - Set the number of samples of silence to add to the end. After the value is reached, the stream is terminated. This option is mutually exclusive with whole_len.
 * @param options.whole_len - Set the minimum total number of samples in the output audio stream. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_len.
 * @param options.pad_dur - Specify the duration of samples of silence to add. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-negative value.
 * @param options.whole_dur - Specify the minimum total duration in the output audio stream. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-negative value. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_dur
 * @see https://ffmpeg.org/ffmpeg-filters.html#apad
 */
  apad(
    options?: {
    packet_size?: FFInt;
    pad_len?: FFInt64;
    whole_len?: FFInt64;
    pad_dur?: FFDuration;
    whole_dur?: FFDuration;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "apad", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "packet_size": options?.packet_size,
      "pad_len": options?.pad_len,
      "whole_len": options?.whole_len,
      "pad_dur": options?.pad_dur,
      "whole_dur": options?.whole_dur,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Set read/write permissions for the output frames. These filters are mainly aimed at developers to test direct path in the following filter in the filtergraph. The filters accept the following options:

 *
 * @param options.mode - Select the permissions mode. It accepts the following values: @end table
 * @param options.seed - Set the seed for the random mode, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
 * @see https://ffmpeg.org/ffmpeg-filters.html#perms
 */
  aperms(
    options?: {
    mode?: FFInt | "none" | "ro" | "rw" | "toggle" | "random";
    seed?: FFInt64;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aperms", typingsInput: ["audio"], typingsOutput: ["audio"] },
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
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Measures phase of input audio, which is exported as metadata lavfi.aphasemeter.phase, representing mean phase of current audio frame. A video output can also be produced and is enabled by default. The audio is passed through as first output. Audio will be rematrixed to stereo if it has a different channel layout. Phase value is in range [-1, 1] where -1 means left and right channels are completely out of phase and 1 means channels are in phase. The filter accepts the following options, all related to its video output:

 *
 * @param options.rate - Set the output frame rate. Default value is 25.
 * @param options.size - Set the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 800x400.
 * @param options.rc - set red contrast (from 0 to 255) (default 2)
 * @param options.gc - set green contrast (from 0 to 255) (default 7)
 * @param options.bc - Specify the red, green, blue contrast. Default values are 2, 7 and 1. Allowed range is [0, 255].
 * @param options.mpc - Set color which will be used for drawing median phase. If color is none which is default, no median phase value will be drawn.
 * @param options.video - Enable video output. Default is enabled.
 * @param options.phasing - Enable mono and out of phase detection. Default is disabled.
 * @param options.tolerance - Set phase tolerance for mono detection, in amplitude ratio. Default is 0. Allowed range is [0, 1].
 * @param options.angle - Set angle threshold for out of phase detection, in degree. Default is 170. Allowed range is [90, 180].
 * @param options.duration - Set mono or out of phase duration until notification, expressed in seconds. Default is 2.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aphasemeter
 */
  aphasemeter(
    options?: {
    rate?: FFVideoRate;
    size?: FFImageSize;
    rc?: FFInt;
    gc?: FFInt;
    bc?: FFInt;
    mpc?: FFString;
    video?: FFBoolean;
    phasing?: FFBoolean;
    tolerance?: FFFloat;
    angle?: FFFloat;
    duration?: FFDuration;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "aphasemeter", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "rate": options?.rate,
      "size": options?.size,
      "rc": options?.rc,
      "gc": options?.gc,
      "bc": options?.bc,
      "mpc": options?.mpc,
      "video": options?.video,
      "phasing": options?.phasing,
      "tolerance": options?.tolerance,
      "angle": options?.angle,
      "duration": options?.duration,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Add a phasing effect to the input audio. A phaser filter creates series of peaks and troughs in the frequency spectrum. The position of the peaks and troughs are modulated so that they vary over time, creating a sweeping effect. A description of the accepted parameters follows.

 *
 * @param options.in_gain - Set input gain. Default is 0.4.
 * @param options.out_gain - Set output gain. Default is 0.74
 * @param options.delay - Set delay in milliseconds. Default is 3.0.
 * @param options.decay - Set decay. Default is 0.4.
 * @param options.speed - Set modulation speed in Hz. Default is 0.5.
 * @param options._type - Set modulation type. Default is triangular. It accepts the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#aphaser
 */
  aphaser(
    options?: {
    in_gain?: FFDouble;
    out_gain?: FFDouble;
    delay?: FFDouble;
    decay?: FFDouble;
    speed?: FFDouble;
    _type?: FFInt | "triangular" | "t" | "sinusoidal" | "s";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aphaser", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "in_gain": options?.in_gain,
      "out_gain": options?.out_gain,
      "delay": options?.delay,
      "decay": options?.decay,
      "speed": options?.speed,
      "type": options?._type,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply phase shift to input audio samples. The filter accepts the following options:

 *
 * @param options.shift - Specify phase shift. Allowed range is from -1.0 to 1.0. Default value is 0.0.
 * @param options.level - Set output gain applied to final output. Allowed range is from 0.0 to 1.0. Default value is 1.0.
 * @param options.order - Set filter order used for filtering. Allowed range is from 1 to 16. Default value is 8.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aphaseshift
 */
  aphaseshift(
    options?: {
    shift?: FFDouble;
    level?: FFDouble;
    order?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aphaseshift", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "shift": options?.shift,
      "level": options?.level,
      "order": options?.order,
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
  apsnr(
    _input1: AudioStream,

    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "apsnr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _input1],
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
 * Apply Psychoacoustic clipper to input audio stream. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain. By default it is 1. Range is [0.015625 - 64].
 * @param options.level_out - Set output gain. By default it is 1. Range is [0.015625 - 64].
 * @param options.clip - Set the clipping start value. Default value is 0dBFS or 1.
 * @param options.diff - Output only difference samples, useful to hear introduced distortions. By default is disabled.
 * @param options.adaptive - Set strength of adaptive distortion applied. Default value is 0.5. Allowed range is from 0 to 1.
 * @param options.iterations - Set number of iterations of psychoacoustic clipper. Allowed range is from 1 to 20. Default value is 10.
 * @param options.level - Auto level output signal. Default is disabled. This normalizes audio back to 0dBFS if enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#apsyclip
 */
  apsyclip(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    clip?: FFDouble;
    diff?: FFBoolean;
    adaptive?: FFDouble;
    iterations?: FFInt;
    level?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "apsyclip", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "clip": options?.clip,
      "diff": options?.diff,
      "adaptive": options?.adaptive,
      "iterations": options?.iterations,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Audio pulsator is something between an autopanner and a tremolo. But it can produce funny stereo effects as well. Pulsator changes the volume of the left and right channel based on a LFO (low frequency oscillator) with different waveforms and shifted phases. This filter have the ability to define an offset between left and right channel. An offset of 0 means that both LFO shapes match each other. The left and right channel are altered equally - a conventional tremolo. An offset of 50% means that the shape of the right channel is exactly shifted in phase (or moved backwards about half of the frequency) - pulsator acts as an autopanner. At 1 both curves match again. Every setting in between moves the phase shift gapless between all stages and produces some "bypassing" sounds with sine and triangle waveforms. The more you set the offset near 1 (starting from the 0.5) the faster the signal passes from the left to the right speaker. The filter accepts the following options:

 *
 * @param options.level_in - Set input gain. By default it is 1. Range is [0.015625 - 64].
 * @param options.level_out - Set output gain. By default it is 1. Range is [0.015625 - 64].
 * @param options.mode - Set waveform shape the LFO will use. Can be one of: sine, triangle, square, sawup or sawdown. Default is sine.
 * @param options.amount - Set modulation. Define how much of original signal is affected by the LFO.
 * @param options.offset_l - Set left channel offset. Default is 0. Allowed range is [0 - 1].
 * @param options.offset_r - Set right channel offset. Default is 0.5. Allowed range is [0 - 1].
 * @param options.width - Set pulse width. Default is 1. Allowed range is [0 - 2].
 * @param options.timing - Set possible timing mode. Can be one of: bpm, ms or hz. Default is hz.
 * @param options.bpm - Set bpm. Default is 120. Allowed range is [30 - 300]. Only used if timing is set to bpm.
 * @param options.ms - Set ms. Default is 500. Allowed range is [10 - 2000]. Only used if timing is set to ms.
 * @param options.hz - Set frequency in Hz. Default is 2. Allowed range is [0.01 - 100]. Only used if timing is set to hz.
 * @see https://ffmpeg.org/ffmpeg-filters.html#apulsator
 */
  apulsator(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    mode?: FFInt | "sine" | "triangle" | "square" | "sawup" | "sawdown";
    amount?: FFDouble;
    offset_l?: FFDouble;
    offset_r?: FFDouble;
    width?: FFDouble;
    timing?: FFInt | "bpm" | "ms" | "hz";
    bpm?: FFDouble;
    ms?: FFInt;
    hz?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "apulsator", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "mode": options?.mode,
      "amount": options?.amount,
      "offset_l": options?.offset_l,
      "offset_r": options?.offset_r,
      "width": options?.width,
      "timing": options?.timing,
      "bpm": options?.bpm,
      "ms": options?.ms,
      "hz": options?.hz,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Slow down filtering to match real time approximately. These filters will pause the filtering for a variable amount of time to match the output rate with the input timestamps. They are similar to the re option to ffmpeg. They accept the following options:

 *
 * @param options.limit - Time limit for the pauses. Any pause longer than that will be considered a timestamp discontinuity and reset the timer. Default is 2 seconds.
 * @param options.speed - Speed factor for processing. The value must be a float larger than zero. Values larger than 1.0 will result in faster than realtime processing, smaller will slow processing down. The limit is automatically adapted accordingly. Default is 1.0. A processing speed faster than what is possible without these filters cannot be achieved.
 * @see https://ffmpeg.org/ffmpeg-filters.html#realtime
 */
  arealtime(
    options?: {
    limit?: FFDuration;
    speed?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "arealtime", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "limit": options?.limit,
      "speed": options?.speed,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Resample the input audio to the specified parameters, using the libswresample library. If none are specified then the filter will automatically convert between its input and output. This filter is also able to stretch/squeeze the audio data to make it match the timestamps or to inject silence / cut out audio to make it match the timestamps, do a combination of both or do neither. The filter accepts the syntax [sample_rate:]resampler_options, where sample_rate expresses a sample rate and resampler_options is a list of key=value pairs, separated by ":". See the "Resampler Options" section in the ffmpeg-resampler(1) manual for the complete list of supported options.

 *
 * @param options.sample_rate - (from 0 to INT_MAX) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#aresample
 */
  aresample(
    options?: {
    sample_rate?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aresample", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sample_rate": options?.sample_rate,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Reverse an audio clip. Warning: This filter requires memory to buffer the entire clip, so trimming is suggested.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#areverse
 */
  areverse(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "areverse", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
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
  arls(
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
    const filterNode = filterNodeFactory(
      { name: "arls", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _desired],
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
 * Reduce noise from speech using Recurrent Neural Networks. This filter accepts the following options:

 *
 * @param options.model - Set train model file to load. This option is always required.
 * @param options.mix - Set how much to mix filtered samples into final output. Allowed range is from -1 to 1. Default value is 1. Negative values are special, they set how much to keep filtered noise in the final filter output. Set this option to -1 to hear actual noise removed from input signal.
 * @see https://ffmpeg.org/ffmpeg-filters.html#arnndn
 */
  arnndn(
    options?: {
    model?: FFString;
    mix?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "arnndn", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "model": options?.model,
      "mix": options?.mix,
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
  asdr(
    _input1: AudioStream,

    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asdr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _input1],
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
 * Split single input stream into multiple streams. This filter does opposite of concat filters. segment works on video frames, asegment on audio samples. This filter accepts the following options:

 *
 * @param options.timestamps - Timestamps of output segments separated by '|'. The first segment will run from the beginning of the input stream. The last segment will run until the end of the input stream
 * @param options.samples - Exact frame/sample count to split the segments.
 * @see https://ffmpeg.org/ffmpeg-filters.html#segment
 */
  asegment(
    options?: {
    timestamps?: FFString;
    samples?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "asegment", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "timestamps": options?.timestamps,
      "samples": options?.samples,
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
  aselect(
    options?: {
    expr?: FFString;
    outputs?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "aselect", typingsInput: ["audio"], typingsOutput: [] },
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
 * Send commands to filters in the filtergraph. These filters read commands to be sent to other filters in the filtergraph. sendcmd must be inserted between two video filters, asendcmd must be inserted between two audio filters, but apart from that they act the same way. The specification of commands can be provided in the filter arguments with the commands option, or in a file specified by the filename option. These filters accept the following options:

 *
 * @param options.commands - Set the commands to be read and sent to the other filters.
 * @param options.filename - Set the filename of the commands to be read and sent to the other filters.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sendcmd
 */
  asendcmd(
    options?: {
    commands?: FFString;
    filename?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asendcmd", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "commands": options?.commands,
      "filename": options?.filename,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Set the number of samples per each output audio frame. The last output packet may contain a different number of samples, as the filter will flush all the remaining samples when the input audio signals its end. The filter accepts the following options:

 *
 * @param options.nb_out_samples - Set the number of frames per each output audio frame. The number is intended as the number of samples per each channel. Default value is 1024.
 * @param options.pad - If set to 1, the filter will pad the last audio frame with zeroes, so that the last frame will contain the same number of samples as the previous ones. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asetnsamples
 */
  asetnsamples(
    options?: {
    nb_out_samples?: FFInt;
    pad?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asetnsamples", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "nb_out_samples": options?.nb_out_samples,
      "pad": options?.pad,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Change the PTS (presentation timestamp) of the input frames. setpts works on video frames, asetpts on audio frames. This filter accepts the following options:

 *
 * @param options.expr - The expression which is evaluated for each frame to construct its timestamp.
 * @see https://ffmpeg.org/ffmpeg-filters.html#setpts
 */
  asetpts(
    options?: {
    expr?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asetpts", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "expr": options?.expr,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Set the sample rate without altering the PCM data. This will result in a change of speed and pitch. The filter accepts the following options:

 *
 * @param options.sample_rate - Set the output sample rate. Default is 44100 Hz.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asetrate
 */
  asetrate(
    options?: {
    sample_rate?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asetrate", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sample_rate": options?.sample_rate,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Set the timebase to use for the output frames timestamps. It is mainly useful for testing timebase configuration. It accepts the following parameters:

 *
 * @param options.expr - The expression which is evaluated into the output timebase.
 * @see https://ffmpeg.org/ffmpeg-filters.html#settb
 */
  asettb(
    options?: {
    expr?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asettb", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "expr": options?.expr,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Show a line containing various information for each input audio frame. The input audio is not modified. The shown line contains a sequence of key/value pairs of the form key:value. The following values are shown in the output:

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#ashowinfo
 */
  ashowinfo(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "ashowinfo", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Delete frame side data, or select frames based on it. This filter accepts the following options:

 *
 * @param options.mode - Set mode of operation of the filter. Can be one of the following: @end table
 * @param options._type - Set side data type used with all modes. Must be set for select mode. For the list of frame side data types, refer to the AVFrameSideDataType enum in libavutil/frame.h. For example, to choose AV_FRAME_DATA_PANSCAN side data, you must specify PANSCAN.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sidedata
 */
  asidedata(
    options?: {
    mode?: FFInt | "select" | "delete";
    _type?: FFInt | "PANSCAN" | "A53_CC" | "STEREO3D" | "MATRIXENCODING" | "DOWNMIX_INFO" | "REPLAYGAIN" | "DISPLAYMATRIX" | "AFD" | "MOTION_VECTORS" | "SKIP_SAMPLES" | "AUDIO_SERVICE_TYPE" | "MASTERING_DISPLAY_METADATA" | "GOP_TIMECODE" | "SPHERICAL" | "CONTENT_LIGHT_LEVEL" | "ICC_PROFILE" | "S12M_TIMECOD" | "DYNAMIC_HDR_PLUS" | "REGIONS_OF_INTEREST" | "VIDEO_ENC_PARAMS" | "SEI_UNREGISTERED" | "FILM_GRAIN_PARAMS" | "DETECTION_BOUNDING_BOXES" | "DETECTION_BBOXES" | "DOVI_RPU_BUFFER" | "DOVI_METADATA" | "DYNAMIC_HDR_VIVID" | "AMBIENT_VIEWING_ENVIRONMENT" | "VIDEO_HINT";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asidedata", typingsInput: ["audio"], typingsOutput: ["audio"] },
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
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Measure Audio Scaled-Invariant Signal-to-Distortion Ratio. This filter takes two audio streams for input, and outputs first audio stream. Results are in dB per channel at end of either input.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#asisdr
 */
  asisdr(
    _input1: AudioStream,

    options?: {
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asisdr", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _input1],
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
 * Apply audio soft clipping. Soft clipping is a type of distortion effect where the amplitude of a signal is saturated along a smooth curve, rather than the abrupt shape of hard-clipping. This filter accepts the following options:

 *
 * @param options._type - Set type of soft-clipping. It accepts the following values: @end table
 * @param options.threshold - Set threshold from where to start clipping. Default value is 0dB or 1.
 * @param options.output - Set gain applied to output. Default value is 0dB or 1.
 * @param options.param - Set additional parameter which controls sigmoid function.
 * @param options.oversample - Set oversampling factor.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asoftclip
 */
  asoftclip(
    options?: {
    _type?: FFInt | "hard" | "tanh" | "atan" | "cubic" | "exp" | "alg" | "quintic" | "sin" | "erf";
    threshold?: FFDouble;
    output?: FFDouble;
    param?: FFDouble;
    oversample?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asoftclip", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "type": options?._type,
      "threshold": options?.threshold,
      "output": options?.output,
      "param": options?.param,
      "oversample": options?.oversample,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Display frequency domain statistical information about the audio channels. Statistics are calculated and stored as metadata for each audio channel and for each audio frame. It accepts the following option:

 *
 * @param options.win_size - Set the window length in samples. Default value is 2048. Allowed range is from 32 to 65536.
 * @param options.win_func - Set window function. It accepts the following values: @end table Default is hann.
 * @param options.overlap - Set window overlap. Allowed range is from 0 to 1. Default value is 0.5.
 * @param options.measure - Select the parameters which are measured. The metadata keys can be used as flags, default is all which measures everything. none disables all measurement.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aspectralstats
 */
  aspectralstats(
    options?: {
    win_size?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    overlap?: FFFloat;
    measure?: FFFlags | "none" | "all" | "mean" | "variance" | "centroid" | "spread" | "skewness" | "kurtosis" | "entropy" | "flatness" | "crest" | "flux" | "slope" | "decrease" | "rolloff";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "aspectralstats", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "win_size": options?.win_size,
      "win_func": options?.win_func,
      "overlap": options?.overlap,
      "measure": options?.measure,
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
  asplit(
    options?: {
    outputs?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "asplit", typingsInput: ["audio"], typingsOutput: [] },
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
 * Display time domain statistical information about the audio channels. Statistics are calculated and displayed for each audio channel and, where applicable, an overall figure is also given. It accepts the following option:

 *
 * @param options.length - Short window length in seconds, used for peak and through RMS measurement. Default is 0.05 (50 milliseconds). Allowed range is [0 - 10].
 * @param options.metadata - Set metadata injection. All the metadata keys are prefixed with lavfi.astats.X, where X is channel number starting from 1 or string Overall. Default is disabled. Available keys for each channel are: Bit_depth Crest_factor DC_offset Dynamic_range Entropy Flat_factor Max_difference Max_level Mean_difference Min_difference Min_level Noise_floor Noise_floor_count Number_of_Infs Number_of_NaNs Number_of_denormals Peak_count Abs_Peak_count Peak_level RMS_difference RMS_peak RMS_trough Zero_crossings Zero_crossings_rate and for Overall: Bit_depth DC_offset Entropy Flat_factor Max_difference Max_level Mean_difference Min_difference Min_level Noise_floor Noise_floor_count Number_of_Infs Number_of_NaNs Number_of_denormals Number_of_samples Peak_count Abs_Peak_count Peak_level RMS_difference RMS_level RMS_peak RMS_trough For example, a full key looks like lavfi.astats.1.DC_offset or lavfi.astats.Overall.Peak_count. Read below for the description of the keys.
 * @param options.reset - Set the number of frames over which cumulative stats are calculated before being reset. Default is disabled.
 * @param options.measure_perchannel - Select the parameters which are measured per channel. The metadata keys can be used as flags, default is all which measures everything. none disables all per channel measurement.
 * @param options.measure_overall - Select the parameters which are measured overall. The metadata keys can be used as flags, default is all which measures everything. none disables all overall measurement.
 * @see https://ffmpeg.org/ffmpeg-filters.html#astats
 */
  astats(
    options?: {
    length?: FFDouble;
    metadata?: FFBoolean;
    reset?: FFInt;
    measure_perchannel?: FFFlags | "none" | "all" | "Bit_depth" | "Crest_factor" | "DC_offset" | "Dynamic_range" | "Entropy" | "Flat_factor" | "Max_difference" | "Max_level" | "Mean_difference" | "Min_difference" | "Min_level" | "Noise_floor" | "Noise_floor_count" | "Number_of_Infs" | "Number_of_NaNs" | "Number_of_denormals" | "Number_of_samples" | "Peak_count" | "Peak_level" | "RMS_difference" | "RMS_level" | "RMS_peak" | "RMS_trough" | "Zero_crossings" | "Zero_crossings_rate" | "Abs_Peak_count";
    measure_overall?: FFFlags | "none" | "all" | "Bit_depth" | "Crest_factor" | "DC_offset" | "Dynamic_range" | "Entropy" | "Flat_factor" | "Max_difference" | "Max_level" | "Mean_difference" | "Min_difference" | "Min_level" | "Noise_floor" | "Noise_floor_count" | "Number_of_Infs" | "Number_of_NaNs" | "Number_of_denormals" | "Number_of_samples" | "Peak_count" | "Peak_level" | "RMS_difference" | "RMS_level" | "RMS_peak" | "RMS_trough" | "Zero_crossings" | "Zero_crossings_rate" | "Abs_Peak_count";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "astats", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "length": options?.length,
      "metadata": options?.metadata,
      "reset": options?.reset,
      "measure_perchannel": options?.measure_perchannel,
      "measure_overall": options?.measure_overall,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Boost subwoofer frequencies. The filter accepts the following options:

 *
 * @param options.dry - Set dry gain, how much of original signal is kept. Allowed range is from 0 to 1. Default value is 1.0.
 * @param options.wet - Set wet gain, how much of filtered signal is kept. Allowed range is from 0 to 1. Default value is 1.0.
 * @param options.boost - Set max boost factor. Allowed range is from 1 to 12. Default value is 2.
 * @param options.decay - Set delay line decay gain value. Allowed range is from 0 to 1. Default value is 0.0.
 * @param options.feedback - Set delay line feedback gain value. Allowed range is from 0 to 1. Default value is 0.9.
 * @param options.cutoff - Set cutoff frequency in Hertz. Allowed range is 50 to 900. Default value is 100.
 * @param options.slope - Set slope amount for cutoff frequency. Allowed range is 0.0001 to 1. Default value is 0.5.
 * @param options.delay - Set delay. Allowed range is from 1 to 100. Default value is 20.
 * @param options.channels - Set the channels to process. Default value is all available.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asubboost
 */
  asubboost(
    options?: {
    dry?: FFDouble;
    wet?: FFDouble;
    boost?: FFDouble;
    decay?: FFDouble;
    feedback?: FFDouble;
    cutoff?: FFDouble;
    slope?: FFDouble;
    delay?: FFDouble;
    channels?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asubboost", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "dry": options?.dry,
      "wet": options?.wet,
      "boost": options?.boost,
      "decay": options?.decay,
      "feedback": options?.feedback,
      "cutoff": options?.cutoff,
      "slope": options?.slope,
      "delay": options?.delay,
      "channels": options?.channels,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Cut subwoofer frequencies. This filter allows to set custom, steeper roll off than highpass filter, and thus is able to more attenuate frequency content in stop-band. The filter accepts the following options:

 *
 * @param options.cutoff - Set cutoff frequency in Hertz. Allowed range is 2 to 200. Default value is 20.
 * @param options.order - Set filter order. Available values are from 3 to 20. Default value is 10.
 * @param options.level - Set input gain level. Allowed range is from 0 to 1. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asubcut
 */
  asubcut(
    options?: {
    cutoff?: FFDouble;
    order?: FFInt;
    level?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asubcut", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "cutoff": options?.cutoff,
      "order": options?.order,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Cut super frequencies. The filter accepts the following options:

 *
 * @param options.cutoff - Set cutoff frequency in Hertz. Allowed range is 20000 to 192000. Default value is 20000.
 * @param options.order - Set filter order. Available values are from 3 to 20. Default value is 10.
 * @param options.level - Set input gain level. Allowed range is from 0 to 1. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asupercut
 */
  asupercut(
    options?: {
    cutoff?: FFDouble;
    order?: FFInt;
    level?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asupercut", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "cutoff": options?.cutoff,
      "order": options?.order,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply high order Butterworth band-pass filter. The filter accepts the following options:

 *
 * @param options.centerf - Set center frequency in Hertz. Allowed range is 2 to 999999. Default value is 1000.
 * @param options.order - Set filter order. Available values are from 4 to 20. Default value is 4.
 * @param options.qfactor - Set Q-factor. Allowed range is from 0.01 to 100. Default value is 1.
 * @param options.level - Set input gain level. Allowed range is from 0 to 2. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asuperpass
 */
  asuperpass(
    options?: {
    centerf?: FFDouble;
    order?: FFInt;
    qfactor?: FFDouble;
    level?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asuperpass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "centerf": options?.centerf,
      "order": options?.order,
      "qfactor": options?.qfactor,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply high order Butterworth band-stop filter. The filter accepts the following options:

 *
 * @param options.centerf - Set center frequency in Hertz. Allowed range is 2 to 999999. Default value is 1000.
 * @param options.order - Set filter order. Available values are from 4 to 20. Default value is 4.
 * @param options.qfactor - Set Q-factor. Allowed range is from 0.01 to 100. Default value is 1.
 * @param options.level - Set input gain level. Allowed range is from 0 to 2. Default value is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#asuperstop
 */
  asuperstop(
    options?: {
    centerf?: FFDouble;
    order?: FFInt;
    qfactor?: FFDouble;
    level?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "asuperstop", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "centerf": options?.centerf,
      "order": options?.order,
      "qfactor": options?.qfactor,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. If for any reason this is a concern it is always possible to daisy-chain several instances of atempo to achieve the desired product tempo.

 *
 * @param options.tempo - Change filter tempo scale factor. Syntax for the command is : "tempo"
 * @see https://ffmpeg.org/ffmpeg-filters.html#atempo
 */
  atempo(
    options?: {
    tempo?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "atempo", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "tempo": options?.tempo,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply spectral tilt filter to audio stream. This filter apply any spectral roll-off slope over any specified frequency band. The filter accepts the following options:

 *
 * @param options.freq - Set central frequency of tilt in Hz. Default is 10000 Hz.
 * @param options.slope - Set slope direction of tilt. Default is 0. Allowed range is from -1 to 1.
 * @param options.width - Set width of tilt. Default is 1000. Allowed range is from 100 to 10000.
 * @param options.order - Set order of tilt filter.
 * @param options.level - Set input volume level. Allowed range is from 0 to 4. Default is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#atilt
 */
  atilt(
    options?: {
    freq?: FFDouble;
    slope?: FFDouble;
    width?: FFDouble;
    order?: FFInt;
    level?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "atilt", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "freq": options?.freq,
      "slope": options?.slope,
      "width": options?.width,
      "order": options?.order,
      "level": options?.level,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Trim the input so that the output contains one continuous subpart of the input. It accepts the following parameters:

 *
 * @param options.start - Timestamp (in seconds) of the start of the section to keep. I.e. the audio sample with the timestamp start will be the first sample in the output.
 * @param options.end - Specify time of the first audio sample that will be dropped, i.e. the audio sample immediately preceding the one with the timestamp end will be the last sample in the output.
 * @param options.start_pts - Same as start, except this option sets the start timestamp in samples instead of seconds.
 * @param options.end_pts - Same as end, except this option sets the end timestamp in samples instead of seconds.
 * @param options.duration - The maximum duration of the output in seconds.
 * @param options.start_sample - The number of the first sample that should be output.
 * @param options.end_sample - The number of the first sample that should be dropped.
 * @see https://ffmpeg.org/ffmpeg-filters.html#atrim
 */
  atrim(
    options?: {
    start?: FFDuration;
    end?: FFDuration;
    start_pts?: FFInt64;
    end_pts?: FFInt64;
    duration?: FFDuration;
    start_sample?: FFInt64;
    end_sample?: FFInt64;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "atrim", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "start": options?.start,
      "end": options?.end,
      "start_pts": options?.start_pts,
      "end_pts": options?.end_pts,
      "duration": options?.duration,
      "start_sample": options?.start_sample,
      "end_sample": options?.end_sample,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Convert input audio to a video output, representing the audio vector scope. The filter is used to measure the difference between channels of stereo audio stream. A monaural signal, consisting of identical left and right signal, results in straight vertical line. Any stereo separation is visible as a deviation from this line, creating a Lissajous figure. If the straight (or deviation from it) but horizontal line appears this indicates that the left and right channels are out of phase. The filter accepts the following options:

 *
 * @param options.mode - Set the vectorscope mode. Available values are: @end table Default value is lissajous.
 * @param options.rate - Set the output frame rate. Default value is 25.
 * @param options.size - Set the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 400x400.
 * @param options.rc - set red contrast (from 0 to 255) (default 40)
 * @param options.gc - set green contrast (from 0 to 255) (default 160)
 * @param options.bc - set blue contrast (from 0 to 255) (default 80)
 * @param options.ac - Specify the red, green, blue and alpha contrast. Default values are 40, 160, 80 and 255. Allowed range is [0, 255].
 * @param options.rf - set red fade (from 0 to 255) (default 15)
 * @param options.gf - set green fade (from 0 to 255) (default 10)
 * @param options.bf - set blue fade (from 0 to 255) (default 5)
 * @param options.af - Specify the red, green, blue and alpha fade. Default values are 15, 10, 5 and 5. Allowed range is [0, 255].
 * @param options.zoom - Set the zoom factor. Default value is 1. Allowed range is [0, 10]. Values lower than 1 will auto adjust zoom factor to maximal possible value.
 * @param options.draw - Set the vectorscope drawing mode. Available values are: @end table Default value is dot.
 * @param options.scale - Specify amplitude scale of audio samples. Available values are: @end table
 * @param options.swap - Swap left channel axis with right channel axis.
 * @param options.mirror - Mirror axis. @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#avectorscope
 */
  avectorscope(
    options?: {
    mode?: FFInt | "lissajous" | "lissajous_xy" | "polar";
    rate?: FFVideoRate;
    size?: FFImageSize;
    rc?: FFInt;
    gc?: FFInt;
    bc?: FFInt;
    ac?: FFInt;
    rf?: FFInt;
    gf?: FFInt;
    bf?: FFInt;
    af?: FFInt;
    zoom?: FFDouble;
    draw?: FFInt | "dot" | "line" | "aaline";
    scale?: FFInt | "lin" | "sqrt" | "cbrt" | "log";
    swap?: FFBoolean;
    mirror?: FFInt | "none" | "x" | "y" | "xy";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "avectorscope", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "mode": options?.mode,
      "rate": options?.rate,
      "size": options?.size,
      "rc": options?.rc,
      "gc": options?.gc,
      "bc": options?.bc,
      "ac": options?.ac,
      "rf": options?.rf,
      "gf": options?.gf,
      "bf": options?.bf,
      "af": options?.af,
      "zoom": options?.zoom,
      "draw": options?.draw,
      "scale": options?.scale,
      "swap": options?.swap,
      "mirror": options?.mirror,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }














/**
 * Calculate normalized windowed cross-correlation between two input audio streams. Resulted samples are always between -1 and 1 inclusive. If result is 1 it means two input samples are highly correlated in that selected segment. Result 0 means they are not correlated at all. If result is -1 it means two input samples are out of phase, which means they cancel each other. The filter accepts the following options:

 *
 * @param options.size - Set size of segment over which cross-correlation is calculated. Default is 256. Allowed range is from 2 to 131072.
 * @param options.algo - Set algorithm for cross-correlation. Can be slow or fast or best. Default is best. Fast algorithm assumes mean values over any given segment are always zero and thus need much less calculations to make. This is generally not true, but is valid for typical audio streams.
 * @see https://ffmpeg.org/ffmpeg-filters.html#axcorrelate
 */
  axcorrelate(
    _axcorrelate1: AudioStream,

    options?: {
    size?: FFInt;
    algo?: FFInt | "slow" | "fast" | "best";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "axcorrelate", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _axcorrelate1],
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
 * Receive commands sent through a libzmq client, and forward them to filters in the filtergraph. zmq and azmq work as a pass-through filters. zmq must be inserted between two video filters, azmq between two audio filters. Both are capable to send messages to any filter type. To enable these filters you need to install the libzmq library and headers and configure FFmpeg with --enable-libzmq. For more information about libzmq see: http://www.zeromq.org/ The zmq and azmq filters work as a libzmq server, which receives messages sent through a network interface defined by the bind_address (or the abbreviation "b") option. Default value of this option is tcp://localhost:5555. You may want to alter this value to your needs, but do not forget to escape any ':' signs (see filtergraph escaping). The received message must be in the form: @example TARGET COMMAND [ARG] @end example TARGET specifies the target of the command, usually the name of the filter class or a specific filter instance name. The default filter instance name uses the pattern Parsed__, but you can override this by using the filter_name@id syntax (see Filtergraph syntax). COMMAND specifies the name of the command for the target filter. ARG is optional and specifies the optional argument list for the given COMMAND. Upon reception, the message is processed and the corresponding command is injected into the filtergraph. Depending on the result, the filter will send a reply to the client, adopting the format: @example ERROR_CODE ERROR_REASON MESSAGE @end example MESSAGE is optional.

 *
 * @param options.bind_address - set bind address (default "tcp://*:5555")
 * @see https://ffmpeg.org/ffmpeg-filters.html#zmq
 */
  azmq(
    options?: {
    bind_address?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "azmq", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "bind_address": options?.bind_address,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Apply a two-pole Butterworth band-pass filter with central frequency frequency, and (3dB-point) band-width width. The csg option selects a constant skirt gain (peak gain = Q) instead of the default: constant 0dB peak gain. The filter roll off at 6dB per octave (20dB per decade). The filter accepts the following options:

 *
 * @param options.frequency - Change bandpass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change bandpass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change bandpass width. Syntax for the command is : "width"
 * @param options.csg - Constant skirt gain if set to 1. Defaults to 0.
 * @param options.mix - Change bandpass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#bandpass
 */
  bandpass(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    csg?: FFBoolean;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "bandpass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "csg": options?.csg,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply a two-pole Butterworth band-reject filter with central frequency frequency, and (3dB-point) band-width width. The filter roll off at 6dB per octave (20dB per decade). The filter accepts the following options:

 *
 * @param options.frequency - Change bandreject frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change bandreject width_type. Syntax for the command is : "width_type"
 * @param options.width - Change bandreject width. Syntax for the command is : "width"
 * @param options.mix - Change bandreject mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#bandreject
 */
  bandreject(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "bandreject", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Boost or cut the bass (lower) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi's tone-controls. This is also known as shelving equalisation (EQ). The filter accepts the following options:

 *
 * @param options.frequency - Change bass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change bass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change bass width. Syntax for the command is : "width"
 * @param options.gain - Change bass gain. Syntax for the command is : "gain"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change bass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#bass
 */
  bass(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "bass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }














/**
 * Apply a biquad IIR filter with the given coefficients. Where b0, b1, b2 and a0, a1, a2 are the numerator and denominator coefficients respectively. and channels, c specify which channels to filter, by default all available are filtered.

 *
 * @param options.a0 - (from INT_MIN to INT_MAX) (default 1)
 * @param options.a1 - (from INT_MIN to INT_MAX) (default 0)
 * @param options.mix - How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#biquad
 */
  biquad(
    options?: {
    a0?: FFDouble;
    a1?: FFDouble;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "biquad", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "a0": options?.a0,
      "a1": options?.a1,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }




























/**
 * Bauer stereo to binaural transformation, which improves headphone listening of stereo audio records. To enable compilation of this filter you need to configure FFmpeg with --enable-libbs2b. It accepts the following parameters:

 *
 * @param options.profile - Pre-defined crossfeed level. @end table
 * @param options.fcut - Cut frequency (in Hz).
 * @param options.feed - Feed level (in Hz).
 * @see https://ffmpeg.org/ffmpeg-filters.html#bs2b
 */
  bs2b(
    options?: {
    profile?: FFInt | "default" | "cmoy" | "jmeier";
    fcut?: FFInt;
    feed?: FFInt;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "bs2b", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "profile": options?.profile,
      "fcut": options?.fcut,
      "feed": options?.feed,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






















/**
 * Remap input channels to new locations. It accepts the following parameters:

 *
 * @param options.map - Map channels from input to output. The argument is a '|'-separated list of mappings, each in the in_channel-out_channel or in_channel form. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the input channel layout. out_channel is the name of the output channel or its index in the output channel layout. If out_channel is not given then it is implicitly an index, starting with zero and increasing by one for each mapping. Mixing different types of mappings is not allowed and will result in a parse error.
 * @param options.channel_layout - The channel layout of the output stream. If not specified, then filter will guess it based on the out_channel names or the number of mappings. Guessed layouts will not necessarily contain channels in the order of the mappings.
 * @see https://ffmpeg.org/ffmpeg-filters.html#channelmap
 */
  channelmap(
    options?: {
    map?: FFString;
    channel_layout?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "channelmap", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "map": options?.map,
      "channel_layout": options?.channel_layout,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Split each channel from an input audio stream into a separate output stream. It accepts the following parameters:

 *
 * @param options.channel_layout - The channel layout of the input stream. The default is "stereo".
 * @param options.channels - A channel layout describing the channels to be extracted as separate output streams or "all" to extract each input channel as a separate stream. The default is "all". Choosing channels not present in channel layout in the input will result in an error.
 * @see https://ffmpeg.org/ffmpeg-filters.html#channelsplit
 */
  channelsplit(
    options?: {
    channel_layout?: FFString;
    channels?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "channelsplit", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "channel_layout": options?.channel_layout,
      "channels": options?.channels,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }






/**
 * Add a chorus effect to the audio. Can make a single vocal sound like a chorus, but can also be applied to instrumentation. Chorus resembles an echo effect with a short delay, but whereas with echo the delay is constant, with chorus, it is varied using using sinusoidal or triangular modulation. The modulation depth defines the range the modulated delay is played before or after the delay. Hence the delayed sound will sound slower or faster, that is the delayed sound tuned around the original one, like in a chorus where some vocals are slightly off key. It accepts the following parameters:

 *
 * @param options.in_gain - Set input gain. Default is 0.4.
 * @param options.out_gain - Set output gain. Default is 0.4.
 * @param options.delays - Set delays. A typical delay is around 40ms to 60ms.
 * @param options.decays - Set decays.
 * @param options.speeds - Set speeds.
 * @param options.depths - Set depths.
 * @see https://ffmpeg.org/ffmpeg-filters.html#chorus
 */
  chorus(
    options?: {
    in_gain?: FFFloat;
    out_gain?: FFFloat;
    delays?: FFString;
    decays?: FFString;
    speeds?: FFString;
    depths?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "chorus", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "in_gain": options?.in_gain,
      "out_gain": options?.out_gain,
      "delays": options?.delays,
      "decays": options?.decays,
      "speeds": options?.speeds,
      "depths": options?.depths,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }




























































/**
 * Compress or expand the audio's dynamic range. It accepts the following parameters:

 *
 * @param options.attacks - set time over which increase of volume is determined (default "0")
 * @param options.decays - A list of times in seconds for each channel over which the instantaneous level of the input signal is averaged to determine its volume. attacks refers to increase of volume and decays refers to decrease of volume. For most situations, the attack time (response to the audio getting louder) should be shorter than the decay time, because the human ear is more sensitive to sudden loud audio than sudden soft audio. A typical value for attack is 0.3 seconds and a typical value for decay is 0.8 seconds. If specified number of attacks & decays is lower than number of channels, the last set attack/decay will be used for all remaining channels.
 * @param options.points - A list of points for the transfer function, specified in dB relative to the maximum possible signal amplitude. Each key points list must be defined using the following syntax: x0/y0|x1/y1|x2/y2|.... or x0/y0 x1/y1 x2/y2 .... The input values must be in strictly increasing order but the transfer function does not have to be monotonically rising. The point 0/0 is assumed but may be overridden (by 0/out-dBn). Typical values for the transfer function are -70/-70|-60/-20|1/0.
 * @param options.soft_knee - Set the curve radius in dB for all joints. It defaults to 0.01.
 * @param options.gain - Set the additional gain in dB to be applied at all points on the transfer function. This allows for easy adjustment of the overall gain. It defaults to 0.
 * @param options.volume - Set an initial volume, in dB, to be assumed for each channel when filtering starts. This permits the user to supply a nominal level initially, so that, for example, a very large gain is not applied to initial signal levels before the companding has begun to operate. A typical value for audio which is initially quiet is -90 dB. It defaults to 0.
 * @param options.delay - Set a delay, in seconds. The input audio is analyzed immediately, but audio is delayed before being fed to the volume adjuster. Specifying a delay approximately equal to the attack/decay times allows the filter to effectively operate in predictive rather than reactive mode. It defaults to 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#compand
 */
  compand(
    options?: {
    attacks?: FFString;
    decays?: FFString;
    points?: FFString;
    soft_knee?: FFDouble;
    gain?: FFDouble;
    volume?: FFDouble;
    delay?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "compand", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "attacks": options?.attacks,
      "decays": options?.decays,
      "points": options?.points,
      "soft-knee": options?.soft_knee,
      "gain": options?.gain,
      "volume": options?.volume,
      "delay": options?.delay,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Compensation Delay Line is a metric based delay to compensate differing positions of microphones or speakers. For example, you have recorded guitar with two microphones placed in different locations. Because the front of sound wave has fixed speed in normal conditions, the phasing of microphones can vary and depends on their location and interposition. The best sound mix can be achieved when these microphones are in phase (synchronized). Note that a distance of ~30 cm between microphones makes one microphone capture the signal in antiphase to the other microphone. That makes the final mix sound moody. This filter helps to solve phasing problems by adding different delays to each microphone track and make them synchronized. The best result can be reached when you take one track as base and synchronize other tracks one by one with it. Remember that synchronization/delay tolerance depends on sample rate, too. Higher sample rates will give more tolerance. The filter accepts the following parameters:

 *
 * @param options.mm - Set millimeters distance. This is compensation distance for fine tuning. Default is 0.
 * @param options.cm - Set cm distance. This is compensation distance for tightening distance setup. Default is 0.
 * @param options.m - Set meters distance. This is compensation distance for hard distance setup. Default is 0.
 * @param options.dry - Set dry amount. Amount of unprocessed (dry) signal. Default is 0.
 * @param options.wet - Set wet amount. Amount of processed (wet) signal. Default is 1.
 * @param options.temp - Set temperature in degrees Celsius. This is the temperature of the environment. Default is 20.
 * @see https://ffmpeg.org/ffmpeg-filters.html#compensationdelay
 */
  compensationdelay(
    options?: {
    mm?: FFInt;
    cm?: FFInt;
    m?: FFInt;
    dry?: FFDouble;
    wet?: FFDouble;
    temp?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "compensationdelay", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "mm": options?.mm,
      "cm": options?.cm,
      "m": options?.m,
      "dry": options?.dry,
      "wet": options?.wet,
      "temp": options?.temp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
























/**
 * Apply headphone crossfeed filter. Crossfeed is the process of blending the left and right channels of stereo audio recording. It is mainly used to reduce extreme stereo separation of low frequencies. The intent is to produce more speaker like sound to the listener. The filter accepts the following options:

 *
 * @param options.strength - Set strength of crossfeed. Default is 0.2. Allowed range is from 0 to 1. This sets gain of low shelf filter for side part of stereo image. Default is -6dB. Max allowed is -30db when strength is set to 1.
 * @param options.range - Set soundstage wideness. Default is 0.5. Allowed range is from 0 to 1. This sets cut off frequency of low shelf filter. Default is cut off near 1550 Hz. With range set to 1 cut off frequency is set to 2100 Hz.
 * @param options.slope - Set curve slope of low shelf filter. Default is 0.5. Allowed range is from 0.01 to 1.
 * @param options.level_in - Set input gain. Default is 0.9.
 * @param options.level_out - Set output gain. Default is 1.
 * @param options.block_size - Set block size used for reverse IIR processing. If this value is set to high enough value (higher than impulse response length truncated when reaches near zero values) filtering will become linear phase otherwise if not big enough it will just produce nasty artifacts. Note that filter delay will be exactly this many samples when set to non-zero value.
 * @see https://ffmpeg.org/ffmpeg-filters.html#crossfeed
 */
  crossfeed(
    options?: {
    strength?: FFDouble;
    range?: FFDouble;
    slope?: FFDouble;
    level_in?: FFDouble;
    level_out?: FFDouble;
    block_size?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "crossfeed", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "strength": options?.strength,
      "range": options?.range,
      "slope": options?.slope,
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "block_size": options?.block_size,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Simple algorithm for audio noise sharpening. This filter linearly increases differences between each audio sample. The filter accepts the following options:

 *
 * @param options.i - Sets the intensity of effect (default: 2.0). Must be in range between -10.0 to 0 (unchanged sound) to 10.0 (maximum effect). To inverse filtering use negative value.
 * @param options.c - Enable clipping. By default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#crystalizer
 */
  crystalizer(
    options?: {
    i?: FFFloat;
    c?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "crystalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "i": options?.i,
      "c": options?.c,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }














/**
 * Apply a DC shift to the audio. This can be useful to remove a DC offset (caused perhaps by a hardware problem in the recording chain) from the audio. The effect of a DC offset is reduced headroom and hence volume. The astats filter can be used to determine if a signal has a DC offset.

 *
 * @param options.shift - Set the DC shift, allowed range is [-1, 1]. It indicates the amount to shift the audio.
 * @param options.limitergain - Optional. It should have a value much less than 1 (e.g. 0.05 or 0.02) and is used to prevent clipping.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dcshift
 */
  dcshift(
    options?: {
    shift?: FFDouble;
    limitergain?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "dcshift", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "shift": options?.shift,
      "limitergain": options?.limitergain,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }


















/**
 * Apply de-essing to the audio samples.

 *
 * @param options.i - Set intensity for triggering de-essing. Allowed range is from 0 to 1. Default is 0.
 * @param options.m - Set amount of ducking on treble part of sound. Allowed range is from 0 to 1. Default is 0.5.
 * @param options.f - How much of original frequency content to keep when de-essing. Allowed range is from 0 to 1. Default is 0.5.
 * @param options.s - Set the output mode. It accepts the following values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#deesser
 */
  deesser(
    options?: {
    i?: FFDouble;
    m?: FFDouble;
    f?: FFDouble;
    s?: FFInt | "i" | "o" | "e";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "deesser", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "i": options?.i,
      "m": options?.m,
      "f": options?.f,
      "s": options?.s,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }


























/**
 * Enhance dialogue in stereo audio. This filter accepts stereo input and produce surround (3.0) channels output. The newly produced front center channel have enhanced speech dialogue originally available in both stereo channels. This filter outputs front left and front right channels same as available in stereo input. The filter accepts the following options:

 *
 * @param options.original - Set the original center factor to keep in front center channel output. Allowed range is from 0 to 1. Default value is 1.
 * @param options.enhance - Set the dialogue enhance factor to put in front center channel output. Allowed range is from 0 to 3. Default value is 1.
 * @param options.voice - Set the voice detection factor. Allowed range is from 2 to 32. Default value is 2.
 * @see https://ffmpeg.org/ffmpeg-filters.html#dialoguenhance
 */
  dialoguenhance(
    options?: {
    original?: FFDouble;
    enhance?: FFDouble;
    voice?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "dialoguenhance", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "original": options?.original,
      "enhance": options?.enhance,
      "voice": options?.voice,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
























/**
 * Measure audio dynamic range. DR values of 14 and higher is found in very dynamic material. DR of 8 to 13 is found in transition material. And anything less that 8 have very poor dynamics and is very compressed. The filter accepts the following options:

 *
 * @param options.length - Set window length in seconds used to split audio into segments of equal length. Default is 3 seconds.
 * @see https://ffmpeg.org/ffmpeg-filters.html#drmeter
 */
  drmeter(
    options?: {
    length?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "drmeter", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "length": options?.length,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Dynamic Audio Normalizer. This filter applies a certain amount of gain to the input audio in order to bring its peak magnitude to a target level (e.g. 0 dBFS). However, in contrast to more "simple" normalization algorithms, the Dynamic Audio Normalizer *dynamically* re-adjusts the gain factor to the input audio. This allows for applying extra gain to the "quiet" sections of the audio while avoiding distortions or clipping the "loud" sections. In other words: The Dynamic Audio Normalizer will "even out" the volume of quiet and loud sections, in the sense that the volume of each section is brought to the same target level. Note, however, that the Dynamic Audio Normalizer achieves this goal *without* applying "dynamic range compressing". It will retain 100% of the dynamic range *within* each section of the audio file.

 *
 * @param options.framelen - Set the frame length in milliseconds. In range from 10 to 8000 milliseconds. Default is 500 milliseconds. The Dynamic Audio Normalizer processes the input audio in small chunks, referred to as frames. This is required, because a peak magnitude has no meaning for just a single sample value. Instead, we need to determine the peak magnitude for a contiguous sequence of sample values. While a "standard" normalizer would simply use the peak magnitude of the complete file, the Dynamic Audio Normalizer determines the peak magnitude individually for each frame. The length of a frame is specified in milliseconds. By default, the Dynamic Audio Normalizer uses a frame length of 500 milliseconds, which has been found to give good results with most files. Note that the exact frame length, in number of samples, will be determined automatically, based on the sampling rate of the individual input audio file.
 * @param options.gausssize - Set the Gaussian filter window size. In range from 3 to 301, must be odd number. Default is 31. Probably the most important parameter of the Dynamic Audio Normalizer is the window size of the Gaussian smoothing filter. The filter's window size is specified in frames, centered around the current frame. For the sake of simplicity, this must be an odd number. Consequently, the default value of 31 takes into account the current frame, as well as the 15 preceding frames and the 15 subsequent frames. Using a larger window results in a stronger smoothing effect and thus in less gain variation, i.e. slower gain adaptation. Conversely, using a smaller window results in a weaker smoothing effect and thus in more gain variation, i.e. faster gain adaptation. In other words, the more you increase this value, the more the Dynamic Audio Normalizer will behave like a "traditional" normalization filter. On the contrary, the more you decrease this value, the more the Dynamic Audio Normalizer will behave like a dynamic range compressor.
 * @param options.peak - Set the target peak value. This specifies the highest permissible magnitude level for the normalized audio input. This filter will try to approach the target peak magnitude as closely as possible, but at the same time it also makes sure that the normalized signal will never exceed the peak magnitude. A frame's maximum local gain factor is imposed directly by the target peak magnitude. The default value is 0.95 and thus leaves a headroom of 5%*. It is not recommended to go above this value.
 * @param options.maxgain - Set the maximum gain factor. In range from 1.0 to 100.0. Default is 10.0. The Dynamic Audio Normalizer determines the maximum possible (local) gain factor for each input frame, i.e. the maximum gain factor that does not result in clipping or distortion. The maximum gain factor is determined by the frame's highest magnitude sample. However, the Dynamic Audio Normalizer additionally bounds the frame's maximum gain factor by a predetermined (global) maximum gain factor. This is done in order to avoid excessive gain factors in "silent" or almost silent frames. By default, the maximum gain factor is 10.0, For most inputs the default value should be sufficient and it usually is not recommended to increase this value. Though, for input with an extremely low overall volume level, it may be necessary to allow even higher gain factors. Note, however, that the Dynamic Audio Normalizer does not simply apply a "hard" threshold (i.e. cut off values above the threshold). Instead, a "sigmoid" threshold function will be applied. This way, the gain factors will smoothly approach the threshold value, but never exceed that value.
 * @param options.targetrms - Set the target RMS. In range from 0.0 to 1.0. Default is 0.0 - disabled. By default, the Dynamic Audio Normalizer performs "peak" normalization. This means that the maximum local gain factor for each frame is defined (only) by the frame's highest magnitude sample. This way, the samples can be amplified as much as possible without exceeding the maximum signal level, i.e. without clipping. Optionally, however, the Dynamic Audio Normalizer can also take into account the frame's root mean square, abbreviated RMS. In electrical engineering, the RMS is commonly used to determine the power of a time-varying signal. It is therefore considered that the RMS is a better approximation of the "perceived loudness" than just looking at the signal's peak magnitude. Consequently, by adjusting all frames to a constant RMS value, a uniform "perceived loudness" can be established. If a target RMS value has been specified, a frame's local gain factor is defined as the factor that would result in exactly that RMS value. Note, however, that the maximum local gain factor is still restricted by the frame's highest magnitude sample, in order to prevent clipping.
 * @param options.coupling - Enable channels coupling. By default is enabled. By default, the Dynamic Audio Normalizer will amplify all channels by the same amount. This means the same gain factor will be applied to all channels, i.e. the maximum possible gain factor is determined by the "loudest" channel. However, in some recordings, it may happen that the volume of the different channels is uneven, e.g. one channel may be "quieter" than the other one(s). In this case, this option can be used to disable the channel coupling. This way, the gain factor will be determined independently for each channel, depending only on the individual channel's highest magnitude sample. This allows for harmonizing the volume of the different channels.
 * @param options.correctdc - Enable DC bias correction. By default is disabled. An audio signal (in the time domain) is a sequence of sample values. In the Dynamic Audio Normalizer these sample values are represented in the -1.0 to 1.0 range, regardless of the original input format. Normally, the audio signal, or "waveform", should be centered around the zero point. That means if we calculate the mean value of all samples in a file, or in a single frame, then the result should be 0.0 or at least very close to that value. If, however, there is a significant deviation of the mean value from 0.0, in either positive or negative direction, this is referred to as a DC bias or DC offset. Since a DC bias is clearly undesirable, the Dynamic Audio Normalizer provides optional DC bias correction. With DC bias correction enabled, the Dynamic Audio Normalizer will determine the mean value, or "DC correction" offset, of each input frame and subtract that value from all of the frame's sample values which ensures those samples are centered around 0.0 again. Also, in order to avoid "gaps" at the frame boundaries, the DC correction offset values will be interpolated smoothly between neighbouring frames.
 * @param options.altboundary - Enable alternative boundary mode. By default is disabled. The Dynamic Audio Normalizer takes into account a certain neighbourhood around each frame. This includes the preceding frames as well as the subsequent frames. However, for the "boundary" frames, located at the very beginning and at the very end of the audio file, not all neighbouring frames are available. In particular, for the first few frames in the audio file, the preceding frames are not known. And, similarly, for the last few frames in the audio file, the subsequent frames are not known. Thus, the question arises which gain factors should be assumed for the missing frames in the "boundary" region. The Dynamic Audio Normalizer implements two modes to deal with this situation. The default boundary mode assumes a gain factor of exactly 1.0 for the missing frames, resulting in a smooth "fade in" and "fade out" at the beginning and at the end of the input, respectively.
 * @param options.compress - Set the compress factor. In range from 0.0 to 30.0. Default is 0.0. By default, the Dynamic Audio Normalizer does not apply "traditional" compression. This means that signal peaks will not be pruned and thus the full dynamic range will be retained within each local neighbourhood. However, in some cases it may be desirable to combine the Dynamic Audio Normalizer's normalization algorithm with a more "traditional" compression. For this purpose, the Dynamic Audio Normalizer provides an optional compression (thresholding) function. If (and only if) the compression feature is enabled, all input frames will be processed by a soft knee thresholding function prior to the actual normalization process. Put simply, the thresholding function is going to prune all samples whose magnitude exceeds a certain threshold value. However, the Dynamic Audio Normalizer does not simply apply a fixed threshold value. Instead, the threshold value will be adjusted for each individual frame. In general, smaller parameters result in stronger compression, and vice versa. Values below 3.0 are not recommended, because audible distortion may appear.
 * @param options.threshold - Set the target threshold value. This specifies the lowest permissible magnitude level for the audio input which will be normalized. If input frame volume is above this value frame will be normalized. Otherwise frame may not be normalized at all. The default value is set to 0, which means all input frames will be normalized. This option is mostly useful if digital noise is not wanted to be amplified.
 * @param options.channels - Specify which channels to filter, by default all available channels are filtered.
 * @param options.overlap - Specify overlap for frames. If set to 0 (default) no frame overlapping is done. Using >0 and <1 values will make less conservative gain adjustments, like when framelen option is set to smaller value, if framelen option value is compensated for non-zero overlap then gain adjustments will be smoother across time compared to zero overlap case.
 * @param options.curve - Specify the peak mapping curve expression which is going to be used when calculating gain applied to frames. The max output frame gain will still be limited by other options mentioned previously for this filter. The expression can contain the following constants: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#dynaudnorm
 */
  dynaudnorm(
    options?: {
    framelen?: FFInt;
    gausssize?: FFInt;
    peak?: FFDouble;
    maxgain?: FFDouble;
    targetrms?: FFDouble;
    coupling?: FFBoolean;
    correctdc?: FFBoolean;
    altboundary?: FFBoolean;
    compress?: FFDouble;
    threshold?: FFDouble;
    channels?: FFString;
    overlap?: FFDouble;
    curve?: FFString;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "dynaudnorm", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "framelen": options?.framelen,
      "gausssize": options?.gausssize,
      "peak": options?.peak,
      "maxgain": options?.maxgain,
      "targetrms": options?.targetrms,
      "coupling": options?.coupling,
      "correctdc": options?.correctdc,
      "altboundary": options?.altboundary,
      "compress": options?.compress,
      "threshold": options?.threshold,
      "channels": options?.channels,
      "overlap": options?.overlap,
      "curve": options?.curve,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Make audio easier to listen to on headphones. This filter adds `cues' to 44.1kHz stereo (i.e. audio CD format) audio so that when listened to on headphones the stereo image is moved from inside your head (standard for headphones) to outside and in front of the listener (standard for speakers). Ported from SoX.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#earwax
 */
  earwax(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "earwax", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * EBU R128 scanner filter. This filter takes an audio stream and analyzes its loudness level. By default, it logs a message at a frequency of 10Hz with the Momentary loudness (identified by M), Short-term loudness (S), Integrated loudness (I) and Loudness Range (LRA). The filter can only analyze streams which have sample format is double-precision floating point. The input stream will be converted to this specification, if needed. Users may need to insert aformat and/or aresample filters after this filter to obtain the original parameters. The filter also has a video output (see the video option) with a real time graph to observe the loudness evolution. The graphic contains the logged message mentioned above, so it is not printed anymore when this option is set, unless the verbose logging is set. The main graphing area contains the short-term loudness (3 seconds of analysis), and the gauge on the right is for the momentary loudness (400 milliseconds), but can optionally be configured to instead display short-term loudness (see gauge). The green area marks a +/- 1LU target range around the target loudness (-23LUFS by default, unless modified through target). More information about the Loudness Recommendation EBU R128 on http://tech.ebu.ch/loudness. The filter accepts the following options:

 *
 * @param options.video - Activate the video output. The audio stream is passed unchanged whether this option is set or no. The video stream will be the first output stream if activated. Default is 0.
 * @param options.size - Set the video size. This option is for video only. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default and minimum resolution is 640x480.
 * @param options.meter - Set the EBU scale meter. Default is 9. Common values are 9 and 18, respectively for EBU scale meter +9 and EBU scale meter +18. Any other integer value between this range is allowed.
 * @param options.framelog - Force the frame logging level. Available values are: @end table By default, the logging level is set to info. If the video or the metadata options are set, it switches to verbose.
 * @param options.metadata - Set metadata injection. If set to 1, the audio input will be segmented into 100ms output frames, each of them containing various loudness information in metadata. All the metadata keys are prefixed with lavfi.r128.. Default is 0.
 * @param options.peak - Set peak mode(s). Available modes can be cumulated (the option is a flag type). Possible values are: @end table
 * @param options.dualmono - Treat mono input files as "dual mono". If a mono file is intended for playback on a stereo system, its EBU R128 measurement will be perceptually incorrect. If set to true, this option will compensate for this effect. Multi-channel input files are not affected by this option.
 * @param options.panlaw - Set a specific pan law to be used for the measurement of dual mono files. This parameter is optional, and has a default value of -3.01dB.
 * @param options.target - Set a specific target level (in LUFS) used as relative zero in the visualization. This parameter is optional and has a default value of -23LUFS as specified by EBU R128. However, material published online may prefer a level of -16LUFS (e.g. for use with podcasts or video platforms).
 * @param options.gauge - Set the value displayed by the gauge. Valid values are momentary and s shortterm. By default the momentary value will be used, but in certain scenarios it may be more useful to observe the short term value instead (e.g. live mixing).
 * @param options.scale - Sets the display scale for the loudness. Valid parameters are absolute (in LUFS) or relative (LU) relative to the target. This only affects the video output, not the summary or continuous log output.
 * @param options.integrated - Read-only exported value for measured integrated loudness, in LUFS.
 * @param options.range - Read-only exported value for measured loudness range, in LU.
 * @param options.lra_low - Read-only exported value for measured LRA low, in LUFS.
 * @param options.lra_high - Read-only exported value for measured LRA high, in LUFS.
 * @param options.sample_peak - Read-only exported value for measured sample peak, in dBFS.
 * @param options.true_peak - Read-only exported value for measured true peak, in dBFS.
 * @see https://ffmpeg.org/ffmpeg-filters.html#ebur128
 */
  ebur128(
    options?: {
    video?: FFBoolean;
    size?: FFImageSize;
    meter?: FFInt;
    framelog?: FFInt | "quiet" | "info" | "verbose";
    metadata?: FFBoolean;
    peak?: FFFlags | "none" | "sample" | "true";
    dualmono?: FFBoolean;
    panlaw?: FFDouble;
    target?: FFInt;
    gauge?: FFInt | "momentary" | "m" | "shortterm" | "s";
    scale?: FFInt | "absolute" | "LUFS" | "relative" | "LU";
    integrated?: FFDouble;
    range?: FFDouble;
    lra_low?: FFDouble;
    lra_high?: FFDouble;
    sample_peak?: FFDouble;
    true_peak?: FFDouble;
extraOptions?: Record<string, unknown>;
    },
  ): FilterNode {
    const filterNode = filterNodeFactory(
      { name: "ebur128", typingsInput: ["audio"], typingsOutput: [] },
      [this],
      merge(
    {
      "video": options?.video,
      "size": options?.size,
      "meter": options?.meter,
      "framelog": options?.framelog,
      "metadata": options?.metadata,
      "peak": options?.peak,
      "dualmono": options?.dualmono,
      "panlaw": options?.panlaw,
      "target": options?.target,
      "gauge": options?.gauge,
      "scale": options?.scale,
      "integrated": options?.integrated,
      "range": options?.range,
      "lra_low": options?.lra_low,
      "lra_high": options?.lra_high,
      "sample_peak": options?.sample_peak,
      "true_peak": options?.true_peak,
},
    options?.extraOptions,
  ),
    );
return filterNode;
  }
















/**
 * Apply a two-pole peaking equalisation (EQ) filter. With this filter, the signal-level at and around a selected frequency can be increased or decreased, whilst (unlike bandpass and bandreject filters) that at all other frequencies is unchanged. In order to produce complex equalisation curves, this filter can be given several times, each with a different central frequency. The filter accepts the following options:

 *
 * @param options.frequency - Change equalizer frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change equalizer width_type. Syntax for the command is : "width_type"
 * @param options.width - Change equalizer width. Syntax for the command is : "width"
 * @param options.gain - Change equalizer gain. Syntax for the command is : "gain"
 * @param options.mix - Change equalizer mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#equalizer
 */
  equalizer(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "equalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
















/**
 * Linearly increases the difference between left and right channels which adds some sort of "live" effect to playback. The filter accepts the following options:

 *
 * @param options.m - Sets the difference coefficient (default: 2.5). 0.0 means mono sound (average of both channels), with 1.0 sound will be unchanged, with -1.0 left and right channels will be swapped.
 * @param options.c - Enable clipping. By default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#extrastereo
 */
  extrastereo(
    options?: {
    m?: FFFloat;
    c?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "extrastereo", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "m": options?.m,
      "c": options?.c,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }


























/**
 * Apply FIR Equalization using arbitrary frequency response. The filter accepts the following option:

 *
 * @param options.gain - Set gain curve equation (in dB). The expression can contain variables: @end table and functions: @end table This option is also available as command. Default is gain_interpolate(f).
 * @param options.gain_entry - Set gain entry for gain_interpolate function. The expression can contain functions: @end table This option is also available as command.
 * @param options.delay - Set filter delay in seconds. Higher value means more accurate. Default is 0.01.
 * @param options.accuracy - Set filter accuracy in Hz. Lower value means more accurate. Default is 5.
 * @param options.wfunc - Set window function. Acceptable values are: @end table
 * @param options.fixed - If enabled, use fixed number of audio samples. This improves speed when filtering with large delay. Default is disabled.
 * @param options.multi - Enable multichannels evaluation on gain. Default is disabled.
 * @param options.zero_phase - Enable zero phase mode by subtracting timestamp to compensate delay. Default is disabled.
 * @param options.scale - Set scale used by gain. Acceptable values are: @end table
 * @param options.dumpfile - Set file for dumping, suitable for gnuplot.
 * @param options.dumpscale - Set scale for dumpfile. Acceptable values are same with scale option. Default is linlog.
 * @param options.fft2 - Enable 2-channel convolution using complex FFT. This improves speed significantly. Default is disabled.
 * @param options.min_phase - Enable minimum phase impulse response. Default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#firequalizer
 */
  firequalizer(
    options?: {
    gain?: FFString;
    gain_entry?: FFString;
    delay?: FFDouble;
    accuracy?: FFDouble;
    wfunc?: FFInt | "rectangular" | "hann" | "hamming" | "blackman" | "nuttall3" | "mnuttall3" | "nuttall" | "bnuttall" | "bharris" | "tukey";
    fixed?: FFBoolean;
    multi?: FFBoolean;
    zero_phase?: FFBoolean;
    scale?: FFInt | "linlin" | "linlog" | "loglin" | "loglog";
    dumpfile?: FFString;
    dumpscale?: FFInt | "linlin" | "linlog" | "loglin" | "loglog";
    fft2?: FFBoolean;
    min_phase?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "firequalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "gain": options?.gain,
      "gain_entry": options?.gain_entry,
      "delay": options?.delay,
      "accuracy": options?.accuracy,
      "wfunc": options?.wfunc,
      "fixed": options?.fixed,
      "multi": options?.multi,
      "zero_phase": options?.zero_phase,
      "scale": options?.scale,
      "dumpfile": options?.dumpfile,
      "dumpscale": options?.dumpscale,
      "fft2": options?.fft2,
      "min_phase": options?.min_phase,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply a flanging effect to the audio. The filter accepts the following options:

 *
 * @param options.delay - Set base delay in milliseconds. Range from 0 to 30. Default value is 0.
 * @param options.depth - Set added sweep delay in milliseconds. Range from 0 to 10. Default value is 2.
 * @param options.regen - Set percentage regeneration (delayed signal feedback). Range from -95 to 95. Default value is 0.
 * @param options.width - Set percentage of delayed signal mixed with original. Range from 0 to 100. Default value is 71.
 * @param options.speed - Set sweeps per second (Hz). Range from 0.1 to 10. Default value is 0.5.
 * @param options.shape - Set swept wave shape, can be triangular or sinusoidal. Default value is sinusoidal.
 * @param options.phase - Set swept wave percentage-shift for multi channel. Range from 0 to 100. Default value is 25.
 * @param options.interp - Set delay-line interpolation, linear or quadratic. Default is linear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#flanger
 */
  flanger(
    options?: {
    delay?: FFDouble;
    depth?: FFDouble;
    regen?: FFDouble;
    width?: FFDouble;
    speed?: FFDouble;
    shape?: FFInt | "triangular" | "t" | "sinusoidal" | "s";
    phase?: FFDouble;
    interp?: FFInt | "linear" | "quadratic";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "flanger", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "delay": options?.delay,
      "depth": options?.depth,
      "regen": options?.regen,
      "width": options?.width,
      "speed": options?.speed,
      "shape": options?.shape,
      "phase": options?.phase,
      "interp": options?.interp,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }




















































/**
 * Apply Haas effect to audio. Note that this makes most sense to apply on mono signals. With this filter applied to mono signals it give some directionality and stretches its stereo image. The filter accepts the following options:

 *
 * @param options.level_in - Set input level. By default is 1, or 0dB
 * @param options.level_out - Set output level. By default is 1, or 0dB.
 * @param options.side_gain - Set gain applied to side part of signal. By default is 1.
 * @param options.middle_source - Set kind of middle source. Can be one of the following: @end table
 * @param options.middle_phase - Change middle phase. By default is disabled.
 * @param options.left_delay - Set left channel delay. By default is 2.05 milliseconds.
 * @param options.left_balance - Set left channel balance. By default is -1.
 * @param options.left_gain - Set left channel gain. By default is 1.
 * @param options.left_phase - Change left phase. By default is disabled.
 * @param options.right_delay - Set right channel delay. By defaults is 2.12 milliseconds.
 * @param options.right_balance - Set right channel balance. By default is 1.
 * @param options.right_gain - Set right channel gain. By default is 1.
 * @param options.right_phase - Change right phase. By default is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#haas
 */
  haas(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    side_gain?: FFDouble;
    middle_source?: FFInt | "left" | "right" | "mid" | "side";
    middle_phase?: FFBoolean;
    left_delay?: FFDouble;
    left_balance?: FFDouble;
    left_gain?: FFDouble;
    left_phase?: FFBoolean;
    right_delay?: FFDouble;
    right_balance?: FFDouble;
    right_gain?: FFDouble;
    right_phase?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "haas", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "side_gain": options?.side_gain,
      "middle_source": options?.middle_source,
      "middle_phase": options?.middle_phase,
      "left_delay": options?.left_delay,
      "left_balance": options?.left_balance,
      "left_gain": options?.left_gain,
      "left_phase": options?.left_phase,
      "right_delay": options?.right_delay,
      "right_balance": options?.right_balance,
      "right_gain": options?.right_gain,
      "right_phase": options?.right_phase,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }










/**
 * Decodes High Definition Compatible Digital (HDCD) data. A 16-bit PCM stream with embedded HDCD codes is expanded into a 20-bit PCM stream. The filter supports the Peak Extend and Low-level Gain Adjustment features of HDCD, and detects the Transient Filter flag. @example ffmpeg -i HDCD16.flac -af hdcd OUT24.flac @end example When using the filter with wav, note the default encoding for wav is 16-bit, so the resulting 20-bit stream will be truncated back to 16-bit. Use something like -acodec pcm_s24le after the filter to get 24-bit PCM output. @example ffmpeg -i HDCD16.wav -af hdcd OUT16.wav ffmpeg -i HDCD16.wav -af hdcd -c:a pcm_s24le OUT24.wav @end example The filter accepts the following options:

 *
 * @param options.disable_autoconvert - Disable any automatic format conversion or resampling in the filter graph.
 * @param options.process_stereo - Process the stereo channels together. If target_gain does not match between channels, consider it invalid and use the last valid target_gain.
 * @param options.cdt_ms - Set the code detect timer period in ms.
 * @param options.force_pe - Always extend peaks above -3dBFS even if PE isn't signaled.
 * @param options.analyze_mode - Replace audio with a solid tone and adjust the amplitude to signal some specific aspect of the decoding process. The output file can be loaded in an audio editor alongside the original to aid analysis. analyze_mode=pe:force_pe=true can be used to see all samples above the PE level. Modes are: @end table
 * @param options.bits_per_sample - Valid bits per sample (location of the true LSB). (from 16 to 24) (default 16)
 * @see https://ffmpeg.org/ffmpeg-filters.html#hdcd
 */
  hdcd(
    options?: {
    disable_autoconvert?: FFBoolean;
    process_stereo?: FFBoolean;
    cdt_ms?: FFInt;
    force_pe?: FFBoolean;
    analyze_mode?: FFInt | "off" | "lle" | "pe" | "cdt" | "tgm";
    bits_per_sample?: FFInt | "16" | "20" | "24";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "hdcd", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "disable_autoconvert": options?.disable_autoconvert,
      "process_stereo": options?.process_stereo,
      "cdt_ms": options?.cdt_ms,
      "force_pe": options?.force_pe,
      "analyze_mode": options?.analyze_mode,
      "bits_per_sample": options?.bits_per_sample,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }












/**
 * Apply a high-pass filter with 3dB point frequency. The filter can be either single-pole, or double-pole (the default). The filter roll off at 6dB per pole per octave (20dB per pole per decade). The filter accepts the following options:

 *
 * @param options.frequency - Change highpass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change highpass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change highpass width. Syntax for the command is : "width"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change highpass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#highpass
 */
  highpass(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "highpass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Boost or cut treble (upper) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi's tone-controls. This is also known as shelving equalisation (EQ). The filter accepts the following options:

 *
 * @param options.frequency - Change treble frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change treble width_type. Syntax for the command is : "width_type"
 * @param options.width - Change treble width. Syntax for the command is : "width"
 * @param options.gain - Change treble gain. Syntax for the command is : "gain"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change treble mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#treble
 */
  highshelf(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "highshelf", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }










































































/**
 * EBU R128 loudness normalization. Includes both dynamic and linear normalization modes. Support for both single pass (livestreams, files) and double pass (files) modes. This algorithm can target IL, LRA, and maximum true peak. In dynamic mode, to accurately detect true peaks, the audio stream will be upsampled to 192 kHz. Use the -ar option or aresample filter to explicitly set an output sample rate. The filter accepts the following options:

 *
 * @param options.I - Set integrated loudness target. Range is -70.0 - -5.0. Default value is -24.0.
 * @param options.LRA - Set loudness range target. Range is 1.0 - 50.0. Default value is 7.0.
 * @param options.TP - Set maximum true peak. Range is -9.0 - +0.0. Default value is -2.0.
 * @param options.measured_I - Measured IL of input file. Range is -99.0 - +0.0.
 * @param options.measured_LRA - Measured LRA of input file. Range is 0.0 - 99.0.
 * @param options.measured_TP - Measured true peak of input file. Range is -99.0 - +99.0.
 * @param options.measured_thresh - Measured threshold of input file. Range is -99.0 - +0.0.
 * @param options.offset - Set offset gain. Gain is applied before the true-peak limiter. Range is -99.0 - +99.0. Default is +0.0.
 * @param options.linear - Normalize by linearly scaling the source audio. measured_I, measured_LRA, measured_TP, and measured_thresh must all be specified. Target LRA shouldn't be lower than source LRA and the change in integrated loudness shouldn't result in a true peak which exceeds the target TP. If any of these conditions aren't met, normalization mode will revert to dynamic. Options are true or false. Default is true.
 * @param options.dual_mono - Treat mono input files as "dual-mono". If a mono file is intended for playback on a stereo system, its EBU R128 measurement will be perceptually incorrect. If set to true, this option will compensate for this effect. Multi-channel input files are not affected by this option. Options are true or false. Default is false.
 * @param options.print_format - Set print format for stats. Options are summary, json, or none. Default value is none.
 * @see https://ffmpeg.org/ffmpeg-filters.html#loudnorm
 */
  loudnorm(
    options?: {
    I?: FFDouble;
    LRA?: FFDouble;
    TP?: FFDouble;
    measured_I?: FFDouble;
    measured_LRA?: FFDouble;
    measured_TP?: FFDouble;
    measured_thresh?: FFDouble;
    offset?: FFDouble;
    linear?: FFBoolean;
    dual_mono?: FFBoolean;
    print_format?: FFInt | "none" | "json" | "summary";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "loudnorm", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "I": options?.I,
      "LRA": options?.LRA,
      "TP": options?.TP,
      "measured_I": options?.measured_I,
      "measured_LRA": options?.measured_LRA,
      "measured_TP": options?.measured_TP,
      "measured_thresh": options?.measured_thresh,
      "offset": options?.offset,
      "linear": options?.linear,
      "dual_mono": options?.dual_mono,
      "print_format": options?.print_format,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply a low-pass filter with 3dB point frequency. The filter can be either single-pole or double-pole (the default). The filter roll off at 6dB per pole per octave (20dB per pole per decade). The filter accepts the following options:

 *
 * @param options.frequency - Change lowpass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change lowpass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change lowpass width. Syntax for the command is : "width"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change lowpass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#lowpass
 */
  lowpass(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "lowpass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Boost or cut the bass (lower) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi's tone-controls. This is also known as shelving equalisation (EQ). The filter accepts the following options:

 *
 * @param options.frequency - Change bass frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change bass width_type. Syntax for the command is : "width_type"
 * @param options.width - Change bass width. Syntax for the command is : "width"
 * @param options.gain - Change bass gain. Syntax for the command is : "gain"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change bass mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#bass
 */
  lowshelf(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "lowshelf", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






































/**
 * Multiband Compress or expand the audio's dynamic range. The input audio is divided into bands using 4th order Linkwitz-Riley IIRs. This is akin to the crossover of a loudspeaker, and results in flat frequency response when absent compander action. It accepts the following parameters:

 *
 * @param options.args - This option syntax is: attack,decay,[attack,decay..] soft-knee points crossover_frequency [delay [initial_volume [gain]]] | attack,decay ... For explanation of each item refer to compand filter documentation.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mcompand
 */
  mcompand(
    options?: {
    args?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "mcompand", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "args": options?.args,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
























































































/**
 * Mix channels with specific gain levels. The filter accepts the output channel layout followed by a set of channels definitions. This filter is also designed to efficiently remap the channels of an audio stream. The filter accepts parameters of the form: "l|outdef|outdef|..."

 *
 * @param options.args -
 * @see https://ffmpeg.org/ffmpeg-filters.html#pan
 */
  pan(
    options?: {
    args?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "pan", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "args": options?.args,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }




























































/**
 * ReplayGain scanner filter. This filter takes an audio stream as an input and outputs it unchanged. At end of filtering it displays track_gain and track_peak. The filter accepts the following exported read-only options:

 *
 * @param options.track_gain - Exported track gain in dB at end of stream.
 * @param options.track_peak - Exported track peak at end of stream.
 * @see https://ffmpeg.org/ffmpeg-filters.html#replaygain
 */
  replaygain(
    options?: {
    track_gain?: FFFloat;
    track_peak?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "replaygain", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "track_gain": options?.track_gain,
      "track_peak": options?.track_peak,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }


















/**
 * Apply time-stretching and pitch-shifting with librubberband. To enable compilation of this filter, you need to configure FFmpeg with --enable-librubberband. The filter accepts the following options:

 *
 * @param options.tempo - Change filter tempo scale factor. Syntax for the command is : "tempo"
 * @param options.pitch - Change filter pitch scale factor. Syntax for the command is : "pitch"
 * @param options.transients - Set transients detector. Possible values are: @end table
 * @param options.detector - Set detector. Possible values are: @end table
 * @param options.phase - Set phase. Possible values are: @end table
 * @param options.window - Set processing window size. Possible values are: @end table
 * @param options.smoothing - Set smoothing. Possible values are: @end table
 * @param options.formant - Enable formant preservation when shift pitching. Possible values are: @end table
 * @param options.pitchq - Set pitch quality. Possible values are: @end table
 * @param options.channels - Set channels. Possible values are: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#rubberband
 */
  rubberband(
    options?: {
    tempo?: FFDouble;
    pitch?: FFDouble;
    transients?: FFInt | "crisp" | "mixed" | "smooth";
    detector?: FFInt | "compound" | "percussive" | "soft";
    phase?: FFInt | "laminar" | "independent";
    window?: FFInt | "standard" | "short" | "long";
    smoothing?: FFInt | "off" | "on";
    formant?: FFInt | "shifted" | "preserved";
    pitchq?: FFInt | "quality" | "speed" | "consistency";
    channels?: FFInt | "apart" | "together";
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "rubberband", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "tempo": options?.tempo,
      "pitch": options?.pitch,
      "transients": options?.transients,
      "detector": options?.detector,
      "phase": options?.phase,
      "window": options?.window,
      "smoothing": options?.smoothing,
      "formant": options?.formant,
      "pitchq": options?.pitchq,
      "channels": options?.channels,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






















































/**
 * Convert input audio to a video output representing frequency spectrum logarithmically using Brown-Puckette constant Q transform algorithm with direct frequency domain coefficient calculation (but the transform itself is not really constant Q, instead the Q factor is actually variable/clamped), with musical tone scale, from E0 to D#10. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. It must be even. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 1920x1080.
 * @param options.fps - Set the output frame rate. Default value is 25.
 * @param options.bar_h - Set the bargraph height. It must be even. Default value is -1 which computes the bargraph height automatically.
 * @param options.axis_h - Set the axis height. It must be even. Default value is -1 which computes the axis height automatically.
 * @param options.sono_h - Set the sonogram height. It must be even. Default value is -1 which computes the sonogram height automatically.
 * @param options.fullhd - Set the fullhd resolution. This option is deprecated, use size, s instead. Default value is 1.
 * @param options.sono_v - Specify the sonogram volume expression. It can contain variables: @end table and functions: @end table Default value is 16.
 * @param options.bar_v - Specify the bargraph volume expression. It can contain variables: @end table and functions: @end table Default value is sono_v.
 * @param options.sono_g - Specify the sonogram gamma. Lower gamma makes the spectrum more contrast, higher gamma makes the spectrum having more range. Default value is 3. Acceptable range is [1, 7].
 * @param options.bar_g - Specify the bargraph gamma. Default value is 1. Acceptable range is [1, 7].
 * @param options.bar_t - Specify the bargraph transparency level. Lower value makes the bargraph sharper. Default value is 1. Acceptable range is [0, 1].
 * @param options.timeclamp - Specify the transform timeclamp. At low frequency, there is trade-off between accuracy in time domain and frequency domain. If timeclamp is lower, event in time domain is represented more accurately (such as fast bass drum), otherwise event in frequency domain is represented more accurately (such as bass guitar). Acceptable range is [0.002, 1]. Default value is 0.17.
 * @param options.attack - Set attack time in seconds. The default is 0 (disabled). Otherwise, it limits future samples by applying asymmetric windowing in time domain, useful when low latency is required. Accepted range is [0, 1].
 * @param options.basefreq - Specify the transform base frequency. Default value is 20.01523126408007475, which is frequency 50 cents below E0. Acceptable range is [10, 100000].
 * @param options.endfreq - Specify the transform end frequency. Default value is 20495.59681441799654, which is frequency 50 cents above D#10. Acceptable range is [10, 100000].
 * @param options.coeffclamp - This option is deprecated and ignored.
 * @param options.tlength - Specify the transform length in time domain. Use this option to control accuracy trade-off between time domain and frequency domain at every frequency sample. It can contain variables: @end table Default value is 384*tc/(384+tc*f).
 * @param options.count - Specify the transform count for every video frame. Default value is 6. Acceptable range is [1, 30].
 * @param options.fcount - Specify the transform count for every single pixel. Default value is 0, which makes it computed automatically. Acceptable range is [0, 10].
 * @param options.fontfile - Specify font file for use with freetype to draw the axis. If not specified, use embedded font. Note that drawing with font file or embedded font is not implemented with custom basefreq and endfreq, use axisfile option instead.
 * @param options.font - Specify fontconfig pattern. This has lower priority than fontfile. The : in the pattern may be replaced by | to avoid unnecessary escaping.
 * @param options.fontcolor - Specify font color expression. This is arithmetic expression that should return integer value 0xRRGGBB. It can contain variables: @end table and functions: @end table Default value is st(0, (midi(f)-59.5)/12); st(1, if(between(ld(0),0,1), 0.5-0.5*cos(2*PI*ld(0)), 0)); r(1-ld(1)) + b(ld(1)).
 * @param options.axisfile - Specify image file to draw the axis. This option override fontfile and fontcolor option.
 * @param options.axis - Enable/disable drawing text to the axis. If it is set to 0, drawing to the axis is disabled, ignoring fontfile and axisfile option. Default value is 1.
 * @param options.csp - Set colorspace. The accepted values are: @end table
 * @param options.cscheme - Set spectrogram color scheme. This is list of floating point values with format left_r|left_g|left_b|right_r|right_g|right_b. The default is 1|0.5|0|0|0.5|1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showcqt
 */
  showcqt(
    options?: {
    size?: FFImageSize;
    fps?: FFVideoRate;
    bar_h?: FFInt;
    axis_h?: FFInt;
    sono_h?: FFInt;
    fullhd?: FFBoolean;
    sono_v?: FFString;
    bar_v?: FFString;
    sono_g?: FFFloat;
    bar_g?: FFFloat;
    bar_t?: FFFloat;
    timeclamp?: FFDouble;
    attack?: FFDouble;
    basefreq?: FFDouble;
    endfreq?: FFDouble;
    coeffclamp?: FFFloat;
    tlength?: FFString;
    count?: FFInt;
    fcount?: FFInt;
    fontfile?: FFString;
    font?: FFString;
    fontcolor?: FFString;
    axisfile?: FFString;
    axis?: FFBoolean;
    csp?: FFInt | "unspecified" | "bt709" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "bt2020ncl";
    cscheme?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showcqt", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "fps": options?.fps,
      "bar_h": options?.bar_h,
      "axis_h": options?.axis_h,
      "sono_h": options?.sono_h,
      "fullhd": options?.fullhd,
      "sono_v": options?.sono_v,
      "bar_v": options?.bar_v,
      "sono_g": options?.sono_g,
      "bar_g": options?.bar_g,
      "bar_t": options?.bar_t,
      "timeclamp": options?.timeclamp,
      "attack": options?.attack,
      "basefreq": options?.basefreq,
      "endfreq": options?.endfreq,
      "coeffclamp": options?.coeffclamp,
      "tlength": options?.tlength,
      "count": options?.count,
      "fcount": options?.fcount,
      "fontfile": options?.fontfile,
      "font": options?.font,
      "fontcolor": options?.fontcolor,
      "axisfile": options?.axisfile,
      "axis": options?.axis,
      "csp": options?.csp,
      "cscheme": options?.cscheme,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to video output representing frequency spectrum using Continuous Wavelet Transform and Morlet wavelet. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 640x512.
 * @param options.rate - Set the output frame rate. Default value is 25.
 * @param options.scale - Set the frequency scale used. Allowed values are: @end table Default value is linear.
 * @param options.iscale - Set the intensity scale used. Allowed values are: @end table Default value is log.
 * @param options.min - Set the minimum frequency that will be used in output. Default is 20 Hz.
 * @param options.max - Set the maximum frequency that will be used in output. Default is 20000 Hz. The real frequency upper limit depends on input audio's sample rate and such will be enforced on this value when it is set to value greater than Nyquist frequency.
 * @param options.imin - Set the minimum intensity that will be used in output.
 * @param options.imax - Set the maximum intensity that will be used in output.
 * @param options.logb - Set the logarithmic basis for brightness strength when mapping calculated magnitude values to pixel values. Allowed range is from 0 to 1. Default value is 0.0001.
 * @param options.deviation - Set the frequency deviation. Lower values than 1 are more frequency oriented, while higher values than 1 are more time oriented. Allowed range is from 0 to 10. Default value is 1.
 * @param options.pps - Set the number of pixel output per each second in one row. Allowed range is from 1 to 1024. Default value is 64.
 * @param options.mode - Set the output visual mode. Allowed values are: @end table Default value is magnitude.
 * @param options.slide - Set the output slide method. Allowed values are: @end table
 * @param options.direction - Set the direction method for output slide method. Allowed values are: @end table
 * @param options.bar - Set the ratio of bargraph display to display size. Default is 0.
 * @param options.rotation - Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showcwt
 */
  showcwt(
    options?: {
    size?: FFImageSize;
    rate?: FFString;
    scale?: FFInt | "linear" | "log" | "bark" | "mel" | "erbs" | "sqrt" | "cbrt" | "qdrt" | "fm";
    iscale?: FFInt | "linear" | "log" | "sqrt" | "cbrt" | "qdrt";
    min?: FFFloat;
    max?: FFFloat;
    imin?: FFFloat;
    imax?: FFFloat;
    logb?: FFFloat;
    deviation?: FFFloat;
    pps?: FFInt;
    mode?: FFInt | "magnitude" | "phase" | "magphase" | "channel" | "stereo";
    slide?: FFInt | "replace" | "scroll" | "frame";
    direction?: FFInt | "lr" | "rl" | "ud" | "du";
    bar?: FFFloat;
    rotation?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showcwt", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "scale": options?.scale,
      "iscale": options?.iscale,
      "min": options?.min,
      "max": options?.max,
      "imin": options?.imin,
      "imax": options?.imax,
      "logb": options?.logb,
      "deviation": options?.deviation,
      "pps": options?.pps,
      "mode": options?.mode,
      "slide": options?.slide,
      "direction": options?.direction,
      "bar": options?.bar,
      "rotation": options?.rotation,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to video output representing the audio power spectrum. Audio amplitude is on Y-axis while frequency is on X-axis. The filter accepts the following options:

 *
 * @param options.size - Specify size of video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default is 1024x512.
 * @param options.rate - Set video rate. Default is 25.
 * @param options.mode - Set display mode. This set how each frequency bin will be represented. It accepts the following values: @end table Default is bar.
 * @param options.ascale - Set amplitude scale. It accepts the following values: @end table Default is log.
 * @param options.fscale - Set frequency scale. It accepts the following values: @end table Default is lin.
 * @param options.win_size - Set window size. Allowed range is from 16 to 65536. Default is 2048
 * @param options.win_func - Set windowing function. It accepts the following values: @end table Default is hanning.
 * @param options.overlap - Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked.
 * @param options.averaging - Set time averaging. Setting this to 0 will display current maximal peaks. Default is 1, which means time averaging is disabled.
 * @param options.colors - Specify list of colors separated by space or by '|' which will be used to draw channel frequencies. Unrecognized or missing colors will be replaced by white color.
 * @param options.cmode - Set channel display mode. It accepts the following values: @end table Default is combined.
 * @param options.minamp - Set minimum amplitude used in log amplitude scaler.
 * @param options.data - Set data display mode. It accepts the following values: @end table Default is magnitude.
 * @param options.channels - Set channels to use when processing audio. By default all are processed.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showfreqs
 */
  showfreqs(
    options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    mode?: FFInt | "line" | "bar" | "dot";
    ascale?: FFInt | "lin" | "sqrt" | "cbrt" | "log";
    fscale?: FFInt | "lin" | "log" | "rlog";
    win_size?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    overlap?: FFFloat;
    averaging?: FFInt;
    colors?: FFString;
    cmode?: FFInt | "combined" | "separate";
    minamp?: FFFloat;
    data?: FFInt | "magnitude" | "phase" | "delay";
    channels?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showfreqs", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "mode": options?.mode,
      "ascale": options?.ascale,
      "fscale": options?.fscale,
      "win_size": options?.win_size,
      "win_func": options?.win_func,
      "overlap": options?.overlap,
      "averaging": options?.averaging,
      "colors": options?.colors,
      "cmode": options?.cmode,
      "minamp": options?.minamp,
      "data": options?.data,
      "channels": options?.channels,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }










/**
 * Convert stereo input audio to a video output, representing the spatial relationship between two channels. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 512x512.
 * @param options.win_size - Set window size. Allowed range is from 1024 to 65536. Default size is 4096.
 * @param options.win_func - Set window function. It accepts the following values: @end table Default value is hann.
 * @param options.rate - Set output framerate.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showspatial
 */
  showspatial(
    options?: {
    size?: FFImageSize;
    win_size?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    rate?: FFVideoRate;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showspatial", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "win_size": options?.win_size,
      "win_func": options?.win_func,
      "rate": options?.rate,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to a video output, representing the audio frequency spectrum. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 640x512.
 * @param options.slide - Specify how the spectrum should slide along the window. It accepts the following values: @end table Default value is replace.
 * @param options.mode - Specify display mode. It accepts the following values: @end table Default value is combined.
 * @param options.color - Specify display color mode. It accepts the following values: @end table Default value is channel.
 * @param options.scale - Specify scale used for calculating intensity color values. It accepts the following values: @end table Default value is sqrt.
 * @param options.fscale - Specify frequency scale. It accepts the following values: @end table Default value is lin.
 * @param options.saturation - Set saturation modifier for displayed colors. Negative values provide alternative color scheme. 0 is no saturation at all. Saturation must be in [-10.0, 10.0] range. Default value is 1.
 * @param options.win_func - Set window function. It accepts the following values: @end table Default value is hann.
 * @param options.orientation - Set orientation of time vs frequency axis. Can be vertical or horizontal. Default is vertical.
 * @param options.overlap - Set ratio of overlap window. Default value is 0. When value is 1 overlap is set to recommended size for specific window function currently used.
 * @param options.gain - Set scale gain for calculating intensity color values. Default value is 1.
 * @param options.data - Set which data to display. Can be magnitude, default or phase, or unwrapped phase: uphase.
 * @param options.rotation - Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
 * @param options.start - Set start frequency from which to display spectrogram. Default is 0.
 * @param options.stop - Set stop frequency to which to display spectrogram. Default is 0.
 * @param options.fps - Set upper frame rate limit. Default is auto, unlimited.
 * @param options.legend - Draw time and frequency axes and legends. Default is disabled.
 * @param options.drange - Set dynamic range used to calculate intensity color values. Default is 120 dBFS. Allowed range is from 10 to 200.
 * @param options.limit - Set upper limit of input audio samples volume in dBFS. Default is 0 dBFS. Allowed range is from -100 to 100.
 * @param options.opacity - Set opacity strength when using pixel format output with alpha component.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showspectrum
 */
  showspectrum(
    options?: {
    size?: FFImageSize;
    slide?: FFInt | "replace" | "scroll" | "fullframe" | "rscroll" | "lreplace";
    mode?: FFInt | "combined" | "separate";
    color?: FFInt | "channel" | "intensity" | "rainbow" | "moreland" | "nebulae" | "fire" | "fiery" | "fruit" | "cool" | "magma" | "green" | "viridis" | "plasma" | "cividis" | "terrain";
    scale?: FFInt | "lin" | "sqrt" | "cbrt" | "log" | "4thrt" | "5thrt";
    fscale?: FFInt | "lin" | "log";
    saturation?: FFFloat;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    orientation?: FFInt | "vertical" | "horizontal";
    overlap?: FFFloat;
    gain?: FFFloat;
    data?: FFInt | "magnitude" | "phase" | "uphase";
    rotation?: FFFloat;
    start?: FFInt;
    stop?: FFInt;
    fps?: FFString;
    legend?: FFBoolean;
    drange?: FFFloat;
    limit?: FFFloat;
    opacity?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showspectrum", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "slide": options?.slide,
      "mode": options?.mode,
      "color": options?.color,
      "scale": options?.scale,
      "fscale": options?.fscale,
      "saturation": options?.saturation,
      "win_func": options?.win_func,
      "orientation": options?.orientation,
      "overlap": options?.overlap,
      "gain": options?.gain,
      "data": options?.data,
      "rotation": options?.rotation,
      "start": options?.start,
      "stop": options?.stop,
      "fps": options?.fps,
      "legend": options?.legend,
      "drange": options?.drange,
      "limit": options?.limit,
      "opacity": options?.opacity,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to a single video frame, representing the audio frequency spectrum. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 4096x2048.
 * @param options.mode - Specify display mode. It accepts the following values: @end table Default value is combined.
 * @param options.color - Specify display color mode. It accepts the following values: @end table Default value is intensity.
 * @param options.scale - Specify scale used for calculating intensity color values. It accepts the following values: @end table Default value is log.
 * @param options.fscale - Specify frequency scale. It accepts the following values: @end table Default value is lin.
 * @param options.saturation - Set saturation modifier for displayed colors. Negative values provide alternative color scheme. 0 is no saturation at all. Saturation must be in [-10.0, 10.0] range. Default value is 1.
 * @param options.win_func - Set window function. It accepts the following values: @end table Default value is hann.
 * @param options.orientation - Set orientation of time vs frequency axis. Can be vertical or horizontal. Default is vertical.
 * @param options.gain - Set scale gain for calculating intensity color values. Default value is 1.
 * @param options.legend - Draw time and frequency axes and legends. Default is enabled.
 * @param options.rotation - Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
 * @param options.start - Set start frequency from which to display spectrogram. Default is 0.
 * @param options.stop - Set stop frequency to which to display spectrogram. Default is 0.
 * @param options.drange - Set dynamic range used to calculate intensity color values. Default is 120 dBFS. Allowed range is from 10 to 200.
 * @param options.limit - Set upper limit of input audio samples volume in dBFS. Default is 0 dBFS. Allowed range is from -100 to 100.
 * @param options.opacity - Set opacity strength when using pixel format output with alpha component.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showspectrumpic
 */
  showspectrumpic(
    options?: {
    size?: FFImageSize;
    mode?: FFInt | "combined" | "separate";
    color?: FFInt | "channel" | "intensity" | "rainbow" | "moreland" | "nebulae" | "fire" | "fiery" | "fruit" | "cool" | "magma" | "green" | "viridis" | "plasma" | "cividis" | "terrain";
    scale?: FFInt | "lin" | "sqrt" | "cbrt" | "log" | "4thrt" | "5thrt";
    fscale?: FFInt | "lin" | "log";
    saturation?: FFFloat;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    orientation?: FFInt | "vertical" | "horizontal";
    gain?: FFFloat;
    legend?: FFBoolean;
    rotation?: FFFloat;
    start?: FFInt;
    stop?: FFInt;
    drange?: FFFloat;
    limit?: FFFloat;
    opacity?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showspectrumpic", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "mode": options?.mode,
      "color": options?.color,
      "scale": options?.scale,
      "fscale": options?.fscale,
      "saturation": options?.saturation,
      "win_func": options?.win_func,
      "orientation": options?.orientation,
      "gain": options?.gain,
      "legend": options?.legend,
      "rotation": options?.rotation,
      "start": options?.start,
      "stop": options?.stop,
      "drange": options?.drange,
      "limit": options?.limit,
      "opacity": options?.opacity,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio volume to a video output. The filter accepts the following options:

 *
 * @param options.rate - Set video rate.
 * @param options.b - Set border width, allowed range is [0, 5]. Default is 1.
 * @param options.w - Set channel width, allowed range is [80, 8192]. Default is 400.
 * @param options.h - Set channel height, allowed range is [1, 900]. Default is 20.
 * @param options.f - Set fade, allowed range is [0, 1]. Default is 0.95.
 * @param options.c - Set volume color expression. The expression can use the following variables: @end table
 * @param options.t - If set, displays channel names. Default is enabled.
 * @param options.v - If set, displays volume values. Default is enabled.
 * @param options.dm - In second. If set to > 0., display a line for the max level in the previous seconds. default is disabled: 0.
 * @param options.dmc - The color of the max line. Use when dm option is set to > 0. default is: orange
 * @param options.o - Set orientation, can be horizontal: h or vertical: v, default is h.
 * @param options.s - Set step size, allowed range is [0, 5]. Default is 0, which means step is disabled.
 * @param options.p - Set background opacity, allowed range is [0, 1]. Default is 0.
 * @param options.m - Set metering mode, can be peak: p or rms: r, default is p.
 * @param options.ds - Set display scale, can be linear: lin or log: log, default is lin.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showvolume
 */
  showvolume(
    options?: {
    rate?: FFVideoRate;
    b?: FFInt;
    w?: FFInt;
    h?: FFInt;
    f?: FFDouble;
    c?: FFString;
    t?: FFBoolean;
    v?: FFBoolean;
    dm?: FFDouble;
    dmc?: FFColor;
    o?: FFInt | "h" | "v";
    s?: FFInt;
    p?: FFFloat;
    m?: FFInt | "p" | "r";
    ds?: FFInt | "lin" | "log";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showvolume", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "rate": options?.rate,
      "b": options?.b,
      "w": options?.w,
      "h": options?.h,
      "f": options?.f,
      "c": options?.c,
      "t": options?.t,
      "v": options?.v,
      "dm": options?.dm,
      "dmc": options?.dmc,
      "o": options?.o,
      "s": options?.s,
      "p": options?.p,
      "m": options?.m,
      "ds": options?.ds,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to a video output, representing the samples waves. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 600x240.
 * @param options.mode - Set display mode. Available values are: @end table Default value is point.
 * @param options.n - Set the number of samples which are printed on the same column. A larger value will decrease the frame rate. Must be a positive integer. This option can be set only if the value for rate is not explicitly specified.
 * @param options.rate - Set the (approximate) output frame rate. This is done by setting the option n. Default value is "25".
 * @param options.split_channels - Set if channels should be drawn separately or overlap. Default value is 0.
 * @param options.colors - Set colors separated by '|' which are going to be used for drawing of each channel.
 * @param options.scale - Set amplitude scale. Available values are: @end table Default is linear.
 * @param options.draw - Set the draw mode. This is mostly useful to set for high n. Available values are: @end table Default value is scale.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showwaves
 */
  showwaves(
    options?: {
    size?: FFImageSize;
    mode?: FFInt | "point" | "line" | "p2p" | "cline";
    n?: FFRational;
    rate?: FFVideoRate;
    split_channels?: FFBoolean;
    colors?: FFString;
    scale?: FFInt | "lin" | "log" | "sqrt" | "cbrt";
    draw?: FFInt | "scale" | "full";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showwaves", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "mode": options?.mode,
      "n": options?.n,
      "rate": options?.rate,
      "split_channels": options?.split_channels,
      "colors": options?.colors,
      "scale": options?.scale,
      "draw": options?.draw,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
  }






/**
 * Convert input audio to a single video frame, representing the samples waves. The filter accepts the following options:

 *
 * @param options.size - Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 600x240.
 * @param options.split_channels - Set if channels should be drawn separately or overlap. Default value is 0.
 * @param options.colors - Set colors separated by '|' which are going to be used for drawing of each channel.
 * @param options.scale - Set amplitude scale. Available values are: @end table Default is linear.
 * @param options.draw - Set the draw mode. Available values are: @end table Default value is scale.
 * @param options.filter - Set the filter mode. Available values are: @end table Default value is average.
 * @see https://ffmpeg.org/ffmpeg-filters.html#showwavespic
 */
  showwavespic(
    options?: {
    size?: FFImageSize;
    split_channels?: FFBoolean;
    colors?: FFString;
    scale?: FFInt | "lin" | "log" | "sqrt" | "cbrt";
    draw?: FFInt | "scale" | "full";
    filter?: FFInt | "average" | "peak";
extraOptions?: Record<string, unknown>;
    },
  ): VideoStream {
    const filterNode = filterNodeFactory(
      { name: "showwavespic", typingsInput: ["audio"], typingsOutput: ["video"] },
      [this],
      merge(
    {
      "size": options?.size,
      "split_channels": options?.split_channels,
      "colors": options?.colors,
      "scale": options?.scale,
      "draw": options?.draw,
      "filter": options?.filter,
},
    options?.extraOptions,
  ),
    );
return filterNode.video(0) as unknown as VideoStream;
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
  sidechaincompress(
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
    const filterNode = filterNodeFactory(
      { name: "sidechaincompress", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _sidechain],
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
  sidechaingate(
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
    const filterNode = filterNodeFactory(
      { name: "sidechaingate", typingsInput: ["audio", "audio"], typingsOutput: ["audio"] },
      [this, _sidechain],
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
 * Detect silence in an audio stream. This filter logs a message when it detects that the input audio volume is less or equal to a noise tolerance value for a duration greater or equal to the minimum detected noise duration. The printed times and duration are expressed in seconds. The lavfi.silence_start or lavfi.silence_start.X metadata key is set on the first frame whose timestamp equals or exceeds the detection duration and it contains the timestamp of the first frame of the silence. The lavfi.silence_duration or lavfi.silence_duration.X and lavfi.silence_end or lavfi.silence_end.X metadata keys are set on the first frame after the silence. If mono is enabled, and each channel is evaluated separately, the .X suffixed keys are used, and X corresponds to the channel number. The filter accepts the following options:

 *
 * @param options.n - Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default is -60dB, or 0.001.
 * @param options.d - Set silence duration until notification (default is 2 seconds). See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
 * @param options.mono - Process each channel separately, instead of combined. By default is disabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#silencedetect
 */
  silencedetect(
    options?: {
    n?: FFDouble;
    d?: FFDuration;
    mono?: FFBoolean;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "silencedetect", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "n": options?.n,
      "d": options?.d,
      "mono": options?.mono,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Remove silence from the beginning, middle or end of the audio. The filter accepts the following options:

 *
 * @param options.start_periods - This value is used to indicate if audio should be trimmed at beginning of the audio. A value of zero indicates no silence should be trimmed from the beginning. When specifying a non-zero value, it trims audio up until it finds non-silence. Normally, when trimming silence from beginning of audio the start_periods will be 1 but it can be increased to higher values to trim all audio up to specific count of non-silence periods. Default value is 0.
 * @param options.start_duration - Specify the amount of time that non-silence must be detected before it stops trimming audio. By increasing the duration, bursts of noises can be treated as silence and trimmed off. Default value is 0.
 * @param options.start_threshold - This indicates what sample value should be treated as silence. For digital audio, a value of 0 may be fine but for audio recorded from analog, you may wish to increase the value to account for background noise. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0.
 * @param options.start_silence - Specify max duration of silence at beginning that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence.
 * @param options.start_mode - Specify mode of detection of silence end at start of multi-channel audio. Can be any or all. Default is any. With any, any sample from any channel that is detected as non-silence will trigger end of silence trimming at start of audio stream. With all, only if every sample from every channel is detected as non-silence will trigger end of silence trimming at start of audio stream, limited usage.
 * @param options.stop_periods - Set the count for trimming silence from the end of audio. When specifying a positive value, it trims audio after it finds specified silence period. To remove silence from the middle of a file, specify a stop_periods that is negative. This value is then treated as a positive value and is used to indicate the effect should restart processing as specified by stop_periods, making it suitable for removing periods of silence in the middle of the audio. Default value is 0.
 * @param options.stop_duration - Specify a duration of silence that must exist before audio is not copied any more. By specifying a higher duration, silence that is wanted can be left in the audio. Default value is 0.
 * @param options.stop_threshold - This is the same as start_threshold but for trimming silence from the end of audio. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0.
 * @param options.stop_silence - Specify max duration of silence at end that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence.
 * @param options.stop_mode - Specify mode of detection of silence start after start of multi-channel audio. Can be any or all. Default is all. With any, any sample from any channel that is detected as silence will trigger start of silence trimming after start of audio stream, limited usage. With all, only if every sample from every channel is detected as silence will trigger start of silence trimming after start of audio stream.
 * @param options.detection - Set how is silence detected. @end table Default value is rms.
 * @param options.window - Set duration in number of seconds used to calculate size of window in number of samples for detecting silence. Using 0 will effectively disable any windowing and use only single sample per channel for silence detection. In that case it may be needed to also set start_silence and/or stop_silence to nonzero values with also start_duration and/or stop_duration to nonzero values. Default value is 0.02. Allowed range is from 0 to 10.
 * @param options.timestamp - Set processing mode of every audio frame output timestamp. @end table Defaults value is write.
 * @see https://ffmpeg.org/ffmpeg-filters.html#silenceremove
 */
  silenceremove(
    options?: {
    start_periods?: FFInt;
    start_duration?: FFDuration;
    start_threshold?: FFDouble;
    start_silence?: FFDuration;
    start_mode?: FFInt | "any" | "all";
    stop_periods?: FFInt;
    stop_duration?: FFDuration;
    stop_threshold?: FFDouble;
    stop_silence?: FFDuration;
    stop_mode?: FFInt | "any" | "all";
    detection?: FFInt | "avg" | "rms" | "peak" | "median" | "ptp" | "dev";
    window?: FFDuration;
    timestamp?: FFInt | "write" | "copy";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "silenceremove", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "start_periods": options?.start_periods,
      "start_duration": options?.start_duration,
      "start_threshold": options?.start_threshold,
      "start_silence": options?.start_silence,
      "start_mode": options?.start_mode,
      "stop_periods": options?.stop_periods,
      "stop_duration": options?.stop_duration,
      "stop_threshold": options?.stop_threshold,
      "stop_silence": options?.stop_silence,
      "stop_mode": options?.stop_mode,
      "detection": options?.detection,
      "window": options?.window,
      "timestamp": options?.timestamp,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






















/**
 * SOFAlizer uses head-related transfer functions (HRTFs) to create virtual loudspeakers around the user for binaural listening via headphones (audio formats up to 9 channels supported). The HRTFs are stored in SOFA files (see http://www.sofacoustics.org/ for a database). SOFAlizer is developed at the Acoustics Research Institute (ARI) of the Austrian Academy of Sciences. To enable compilation of this filter you need to configure FFmpeg with --enable-libmysofa. The filter accepts the following options:

 *
 * @param options.sofa - Set the SOFA file used for rendering.
 * @param options.gain - Set gain applied to audio. Value is in dB. Default is 0.
 * @param options.rotation - Set rotation of virtual loudspeakers in deg. Default is 0.
 * @param options.elevation - Set elevation of virtual speakers in deg. Default is 0.
 * @param options.radius - Set distance in meters between loudspeakers and the listener with near-field HRTFs. Default is 1.
 * @param options._type - Set processing type. Can be time or freq. time is processing audio in time domain which is slow. freq is processing audio in frequency domain which is fast. Default is freq.
 * @param options.speakers - Set custom positions of virtual loudspeakers. Syntax for this option is: [| |...]. Each virtual loudspeaker is described with short channel name following with azimuth and elevation in degrees. Each virtual loudspeaker description is separated by '|'. For example to override front left and front right channel positions use: 'speakers=FL 45 15|FR 345 15'. Descriptions with unrecognised channel names are ignored.
 * @param options.lfegain - Set custom gain for LFE channels. Value is in dB. Default is 0.
 * @param options.framesize - Set custom frame size in number of samples. Default is 1024. Allowed range is from 1024 to 96000. Only used if option type is set to freq.
 * @param options.normalize - Should all IRs be normalized upon importing SOFA file. By default is enabled.
 * @param options.interpolate - Should nearest IRs be interpolated with neighbor IRs if exact position does not match. By default is disabled.
 * @param options.minphase - Minphase all IRs upon loading of SOFA file. By default is disabled.
 * @param options.anglestep - Set neighbor search angle step. Only used if option interpolate is enabled.
 * @param options.radstep - Set neighbor search radius step. Only used if option interpolate is enabled.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sofalizer
 */
  sofalizer(
    options?: {
    sofa?: FFString;
    gain?: FFFloat;
    rotation?: FFFloat;
    elevation?: FFFloat;
    radius?: FFFloat;
    _type?: FFInt | "time" | "freq";
    speakers?: FFString;
    lfegain?: FFFloat;
    framesize?: FFInt;
    normalize?: FFBoolean;
    interpolate?: FFBoolean;
    minphase?: FFBoolean;
    anglestep?: FFFloat;
    radstep?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "sofalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "sofa": options?.sofa,
      "gain": options?.gain,
      "rotation": options?.rotation,
      "elevation": options?.elevation,
      "radius": options?.radius,
      "type": options?._type,
      "speakers": options?.speakers,
      "lfegain": options?.lfegain,
      "framesize": options?.framesize,
      "normalize": options?.normalize,
      "interpolate": options?.interpolate,
      "minphase": options?.minphase,
      "anglestep": options?.anglestep,
      "radstep": options?.radstep,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Speech Normalizer. This filter expands or compresses each half-cycle of audio samples (local set of samples all above or all below zero and between two nearest zero crossings) depending on threshold value, so audio reaches target peak value under conditions controlled by below options. The filter accepts the following options:

 *
 * @param options.peak - Set the expansion target peak value. This specifies the highest allowed absolute amplitude level for the normalized audio input. Default value is 0.95. Allowed range is from 0.0 to 1.0.
 * @param options.expansion - Set the maximum expansion factor. Allowed range is from 1.0 to 50.0. Default value is 2.0. This option controls maximum local half-cycle of samples expansion. The maximum expansion would be such that local peak value reaches target peak value but never to surpass it and that ratio between new and previous peak value does not surpass this option value.
 * @param options.compression - Set the maximum compression factor. Allowed range is from 1.0 to 50.0. Default value is 2.0. This option controls maximum local half-cycle of samples compression. This option is used only if threshold option is set to value greater than 0.0, then in such cases when local peak is lower or same as value set by threshold all samples belonging to that peak's half-cycle will be compressed by current compression factor.
 * @param options.threshold - Set the threshold value. Default value is 0.0. Allowed range is from 0.0 to 1.0. This option specifies which half-cycles of samples will be compressed and which will be expanded. Any half-cycle samples with their local peak value below or same as this option value will be compressed by current compression factor, otherwise, if greater than threshold value they will be expanded with expansion factor so that it could reach peak target value but never surpass it.
 * @param options._raise - Set the expansion raising amount per each half-cycle of samples. Default value is 0.001. Allowed range is from 0.0 to 1.0. This controls how fast expansion factor is raised per each new half-cycle until it reaches expansion value. Setting this options too high may lead to distortions.
 * @param options.fall - Set the compression raising amount per each half-cycle of samples. Default value is 0.001. Allowed range is from 0.0 to 1.0. This controls how fast compression factor is raised per each new half-cycle until it reaches compression value.
 * @param options.channels - Specify which channels to filter, by default all available channels are filtered.
 * @param options.invert - Enable inverted filtering, by default is disabled. This inverts interpretation of threshold option. When enabled any half-cycle of samples with their local peak value below or same as threshold option will be expanded otherwise it will be compressed.
 * @param options.link - Link channels when calculating gain applied to each filtered channel sample, by default is disabled. When disabled each filtered channel gain calculation is independent, otherwise when this option is enabled the minimum of all possible gains for each filtered channel is used.
 * @param options.rms - Set the expansion target RMS value. This specifies the highest allowed RMS level for the normalized audio input. Default value is 0.0, thus disabled. Allowed range is from 0.0 to 1.0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#speechnorm
 */
  speechnorm(
    options?: {
    peak?: FFDouble;
    expansion?: FFDouble;
    compression?: FFDouble;
    threshold?: FFDouble;
    _raise?: FFDouble;
    fall?: FFDouble;
    channels?: FFString;
    invert?: FFBoolean;
    link?: FFBoolean;
    rms?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "speechnorm", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "peak": options?.peak,
      "expansion": options?.expansion,
      "compression": options?.compression,
      "threshold": options?.threshold,
      "raise": options?._raise,
      "fall": options?.fall,
      "channels": options?.channels,
      "invert": options?.invert,
      "link": options?.link,
      "rms": options?.rms,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
















/**
 * This filter has some handy utilities to manage stereo signals, for converting M/S stereo recordings to L/R signal while having control over the parameters or spreading the stereo image of master track. The filter accepts the following options:

 *
 * @param options.level_in - Set input level before filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64.
 * @param options.level_out - Set output level after filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64.
 * @param options.balance_in - Set input balance between both channels. Default is 0. Allowed range is from -1 to 1.
 * @param options.balance_out - Set output balance between both channels. Default is 0. Allowed range is from -1 to 1.
 * @param options.softclip - Enable softclipping. Results in analog distortion instead of harsh digital 0dB clipping. Disabled by default.
 * @param options.mutel - Mute the left channel. Disabled by default.
 * @param options.muter - Mute the right channel. Disabled by default.
 * @param options.phasel - Change the phase of the left channel. Disabled by default.
 * @param options.phaser - Change the phase of the right channel. Disabled by default.
 * @param options.mode - Set stereo mode. Available values are: @end table
 * @param options.slev - Set level of side signal. Default is 1. Allowed range is from 0.015625 to 64.
 * @param options.sbal - Set balance of side signal. Default is 0. Allowed range is from -1 to 1.
 * @param options.mlev - Set level of the middle signal. Default is 1. Allowed range is from 0.015625 to 64.
 * @param options.mpan - Set middle signal pan. Default is 0. Allowed range is from -1 to 1.
 * @param options.base - Set stereo base between mono and inversed channels. Default is 0. Allowed range is from -1 to 1.
 * @param options.delay - Set delay in milliseconds how much to delay left from right channel and vice versa. Default is 0. Allowed range is from -20 to 20.
 * @param options.sclevel - Set S/C level. Default is 1. Allowed range is from 1 to 100.
 * @param options.phase - Set the stereo phase in degrees. Default is 0. Allowed range is from 0 to 360.
 * @param options.bmode_in - Set balance mode for balance_in/balance_out option. Can be one of the following: @end table
 * @param options.bmode_out - Set balance mode for balance_in/balance_out option. Can be one of the following: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#stereotools
 */
  stereotools(
    options?: {
    level_in?: FFDouble;
    level_out?: FFDouble;
    balance_in?: FFDouble;
    balance_out?: FFDouble;
    softclip?: FFBoolean;
    mutel?: FFBoolean;
    muter?: FFBoolean;
    phasel?: FFBoolean;
    phaser?: FFBoolean;
    mode?: FFInt | "lr\u003elr" | "lr\u003ems" | "ms\u003elr" | "lr\u003ell" | "lr\u003err" | "lr\u003el+r" | "lr\u003erl" | "ms\u003ell" | "ms\u003err" | "ms\u003erl" | "lr\u003el-r";
    slev?: FFDouble;
    sbal?: FFDouble;
    mlev?: FFDouble;
    mpan?: FFDouble;
    base?: FFDouble;
    delay?: FFDouble;
    sclevel?: FFDouble;
    phase?: FFDouble;
    bmode_in?: FFInt | "balance" | "amplitude" | "power";
    bmode_out?: FFInt | "balance" | "amplitude" | "power";
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "stereotools", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "balance_in": options?.balance_in,
      "balance_out": options?.balance_out,
      "softclip": options?.softclip,
      "mutel": options?.mutel,
      "muter": options?.muter,
      "phasel": options?.phasel,
      "phaser": options?.phaser,
      "mode": options?.mode,
      "slev": options?.slev,
      "sbal": options?.sbal,
      "mlev": options?.mlev,
      "mpan": options?.mpan,
      "base": options?.base,
      "delay": options?.delay,
      "sclevel": options?.sclevel,
      "phase": options?.phase,
      "bmode_in": options?.bmode_in,
      "bmode_out": options?.bmode_out,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * This filter enhance the stereo effect by suppressing signal common to both channels and by delaying the signal of left into right and vice versa, thereby widening the stereo effect. The filter accepts the following options:

 *
 * @param options.delay - Time in milliseconds of the delay of left signal into right and vice versa. Default is 20 milliseconds.
 * @param options.feedback - Amount of gain in delayed signal into right and vice versa. Gives a delay effect of left signal in right output and vice versa which gives widening effect. Default is 0.3.
 * @param options.crossfeed - Cross feed of left into right with inverted phase. This helps in suppressing the mono. If the value is 1 it will cancel all the signal common to both channels. Default is 0.3.
 * @param options.drymix - Set level of input signal of original channel. Default is 0.8.
 * @see https://ffmpeg.org/ffmpeg-filters.html#stereowiden
 */
  stereowiden(
    options?: {
    delay?: FFFloat;
    feedback?: FFFloat;
    crossfeed?: FFFloat;
    drymix?: FFFloat;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "stereowiden", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "delay": options?.delay,
      "feedback": options?.feedback,
      "crossfeed": options?.crossfeed,
      "drymix": options?.drymix,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }












/**
 * Apply 18 band equalizer. The filter accepts the following options:

 *
 * @param options._1b - Set 65Hz band gain.
 * @param options._2b - Set 92Hz band gain.
 * @param options._3b - Set 131Hz band gain.
 * @param options._4b - Set 185Hz band gain.
 * @param options._5b - Set 262Hz band gain.
 * @param options._6b - Set 370Hz band gain.
 * @param options._7b - Set 523Hz band gain.
 * @param options._8b - Set 740Hz band gain.
 * @param options._9b - Set 1047Hz band gain.
 * @param options._10b - Set 1480Hz band gain.
 * @param options._11b - Set 2093Hz band gain.
 * @param options._12b - Set 2960Hz band gain.
 * @param options._13b - Set 4186Hz band gain.
 * @param options._14b - Set 5920Hz band gain.
 * @param options._15b - Set 8372Hz band gain.
 * @param options._16b - Set 11840Hz band gain.
 * @param options._17b - Set 16744Hz band gain.
 * @param options._18b - Set 20000Hz band gain.
 * @see https://ffmpeg.org/ffmpeg-filters.html#superequalizer
 */
  superequalizer(
    options?: {
    _1b?: FFFloat;
    _2b?: FFFloat;
    _3b?: FFFloat;
    _4b?: FFFloat;
    _5b?: FFFloat;
    _6b?: FFFloat;
    _7b?: FFFloat;
    _8b?: FFFloat;
    _9b?: FFFloat;
    _10b?: FFFloat;
    _11b?: FFFloat;
    _12b?: FFFloat;
    _13b?: FFFloat;
    _14b?: FFFloat;
    _15b?: FFFloat;
    _16b?: FFFloat;
    _17b?: FFFloat;
    _18b?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "superequalizer", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "1b": options?._1b,
      "2b": options?._2b,
      "3b": options?._3b,
      "4b": options?._4b,
      "5b": options?._5b,
      "6b": options?._6b,
      "7b": options?._7b,
      "8b": options?._8b,
      "9b": options?._9b,
      "10b": options?._10b,
      "11b": options?._11b,
      "12b": options?._12b,
      "13b": options?._13b,
      "14b": options?._14b,
      "15b": options?._15b,
      "16b": options?._16b,
      "17b": options?._17b,
      "18b": options?._18b,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Apply audio surround upmix filter. This filter allows to produce multichannel output from audio stream. The filter accepts the following options:

 *
 * @param options.chl_out - Set output channel layout. By default, this is 5.1. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
 * @param options.chl_in - Set input channel layout. By default, this is stereo. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
 * @param options.level_in - Set input volume level. By default, this is 1.
 * @param options.level_out - Set output volume level. By default, this is 1.
 * @param options.lfe - Enable LFE channel output if output channel layout has it. By default, this is enabled.
 * @param options.lfe_low - Set LFE low cut off frequency. By default, this is 128 Hz.
 * @param options.lfe_high - Set LFE high cut off frequency. By default, this is 256 Hz.
 * @param options.lfe_mode - Set LFE mode, can be add or sub. Default is add. In add mode, LFE channel is created from input audio and added to output. In sub mode, LFE channel is created from input audio and added to output but also all non-LFE output channels are subtracted with output LFE channel.
 * @param options.smooth - Set temporal smoothness strength, used to gradually change factors when transforming stereo sound in time. Allowed range is from 0.0 to 1.0. Useful to improve output quality with focus option values greater than 0.0. Default is 0.0. Only values inside this range and without edges are effective.
 * @param options.angle - Set angle of stereo surround transform, Allowed range is from 0 to 360. Default is 90.
 * @param options.focus - Set focus of stereo surround transform, Allowed range is from -1 to 1. Default is 0.
 * @param options.fc_in - Set front center input volume. By default, this is 1.
 * @param options.fc_out - Set front center output volume. By default, this is 1.
 * @param options.fl_in - Set front left input volume. By default, this is 1.
 * @param options.fl_out - Set front left output volume. By default, this is 1.
 * @param options.fr_in - Set front right input volume. By default, this is 1.
 * @param options.fr_out - Set front right output volume. By default, this is 1.
 * @param options.sl_in - Set side left input volume. By default, this is 1.
 * @param options.sl_out - Set side left output volume. By default, this is 1.
 * @param options.sr_in - Set side right input volume. By default, this is 1.
 * @param options.sr_out - Set side right output volume. By default, this is 1.
 * @param options.bl_in - Set back left input volume. By default, this is 1.
 * @param options.bl_out - Set back left output volume. By default, this is 1.
 * @param options.br_in - Set back right input volume. By default, this is 1.
 * @param options.br_out - Set back right output volume. By default, this is 1.
 * @param options.bc_in - Set back center input volume. By default, this is 1.
 * @param options.bc_out - Set back center output volume. By default, this is 1.
 * @param options.lfe_in - Set LFE input volume. By default, this is 1.
 * @param options.lfe_out - Set LFE output volume. By default, this is 1.
 * @param options.allx - Set spread usage of stereo image across X axis for all channels. Allowed range is from -1 to 15. By default this value is negative -1, and thus unused.
 * @param options.ally - Set spread usage of stereo image across Y axis for all channels. Allowed range is from -1 to 15. By default this value is negative -1, and thus unused.
 * @param options.fcx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.flx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.frx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.blx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.brx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.slx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.srx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.bcx - Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.fcy - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.fly - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.fry - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.bly - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.bry - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.sly - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.sry - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.bcy - Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
 * @param options.win_size - Set window size. Allowed range is from 1024 to 65536. Default size is 4096.
 * @param options.win_func - Set window function. It accepts the following values: @end table Default is hann.
 * @param options.overlap - Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.5.
 * @see https://ffmpeg.org/ffmpeg-filters.html#surround
 */
  surround(
    options?: {
    chl_out?: FFString;
    chl_in?: FFString;
    level_in?: FFFloat;
    level_out?: FFFloat;
    lfe?: FFBoolean;
    lfe_low?: FFInt;
    lfe_high?: FFInt;
    lfe_mode?: FFInt | "add" | "sub";
    smooth?: FFFloat;
    angle?: FFFloat;
    focus?: FFFloat;
    fc_in?: FFFloat;
    fc_out?: FFFloat;
    fl_in?: FFFloat;
    fl_out?: FFFloat;
    fr_in?: FFFloat;
    fr_out?: FFFloat;
    sl_in?: FFFloat;
    sl_out?: FFFloat;
    sr_in?: FFFloat;
    sr_out?: FFFloat;
    bl_in?: FFFloat;
    bl_out?: FFFloat;
    br_in?: FFFloat;
    br_out?: FFFloat;
    bc_in?: FFFloat;
    bc_out?: FFFloat;
    lfe_in?: FFFloat;
    lfe_out?: FFFloat;
    allx?: FFFloat;
    ally?: FFFloat;
    fcx?: FFFloat;
    flx?: FFFloat;
    frx?: FFFloat;
    blx?: FFFloat;
    brx?: FFFloat;
    slx?: FFFloat;
    srx?: FFFloat;
    bcx?: FFFloat;
    fcy?: FFFloat;
    fly?: FFFloat;
    fry?: FFFloat;
    bly?: FFFloat;
    bry?: FFFloat;
    sly?: FFFloat;
    sry?: FFFloat;
    bcy?: FFFloat;
    win_size?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
    overlap?: FFFloat;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "surround", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "chl_out": options?.chl_out,
      "chl_in": options?.chl_in,
      "level_in": options?.level_in,
      "level_out": options?.level_out,
      "lfe": options?.lfe,
      "lfe_low": options?.lfe_low,
      "lfe_high": options?.lfe_high,
      "lfe_mode": options?.lfe_mode,
      "smooth": options?.smooth,
      "angle": options?.angle,
      "focus": options?.focus,
      "fc_in": options?.fc_in,
      "fc_out": options?.fc_out,
      "fl_in": options?.fl_in,
      "fl_out": options?.fl_out,
      "fr_in": options?.fr_in,
      "fr_out": options?.fr_out,
      "sl_in": options?.sl_in,
      "sl_out": options?.sl_out,
      "sr_in": options?.sr_in,
      "sr_out": options?.sr_out,
      "bl_in": options?.bl_in,
      "bl_out": options?.bl_out,
      "br_in": options?.br_in,
      "br_out": options?.br_out,
      "bc_in": options?.bc_in,
      "bc_out": options?.bc_out,
      "lfe_in": options?.lfe_in,
      "lfe_out": options?.lfe_out,
      "allx": options?.allx,
      "ally": options?.ally,
      "fcx": options?.fcx,
      "flx": options?.flx,
      "frx": options?.frx,
      "blx": options?.blx,
      "brx": options?.brx,
      "slx": options?.slx,
      "srx": options?.srx,
      "bcx": options?.bcx,
      "fcy": options?.fcy,
      "fly": options?.fly,
      "fry": options?.fry,
      "bly": options?.bly,
      "bry": options?.bry,
      "sly": options?.sly,
      "sry": options?.sry,
      "bcy": options?.bcy,
      "win_size": options?.win_size,
      "win_func": options?.win_func,
      "overlap": options?.overlap,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






























/**
 * Boost or cut the lower frequencies and cut or boost higher frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi's tone-controls. This is also known as shelving equalisation (EQ). The filter accepts the following options:

 *
 * @param options.frequency - Set the filter's central frequency and so can be used to extend or reduce the frequency range to be boosted or cut. The default value is 3000 Hz.
 * @param options.width_type - Set method to specify band-width of filter. @end table
 * @param options.width - Determine how steep is the filter's shelf transition.
 * @param options.gain - Give the gain at 0 Hz. Its useful range is about -20 (for a large cut) to +20 (for a large boost). Beware of clipping when using a positive gain.
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#tiltshelf
 */
  tiltshelf(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "tiltshelf", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }
































/**
 * Boost or cut treble (upper) frequencies of the audio using a two-pole shelving filter with a response similar to that of a standard hi-fi's tone-controls. This is also known as shelving equalisation (EQ). The filter accepts the following options:

 *
 * @param options.frequency - Change treble frequency. Syntax for the command is : "frequency"
 * @param options.width_type - Change treble width_type. Syntax for the command is : "width_type"
 * @param options.width - Change treble width. Syntax for the command is : "width"
 * @param options.gain - Change treble gain. Syntax for the command is : "gain"
 * @param options.poles - Set number of poles. Default is 2.
 * @param options.mix - Change treble mix. Syntax for the command is : "mix"
 * @param options.channels - Specify which channels to filter, by default all available are filtered.
 * @param options.normalize - Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
 * @param options.transform - Set transform type of IIR filter. @end table
 * @param options.precision - Set precision of filtering. @end table
 * @param options.blocksize - set the block size (from 0 to 32768) (default 0)
 * @see https://ffmpeg.org/ffmpeg-filters.html#treble
 */
  treble(
    options?: {
    frequency?: FFDouble;
    width_type?: FFInt | "h" | "q" | "o" | "s" | "k";
    width?: FFDouble;
    gain?: FFDouble;
    poles?: FFInt;
    mix?: FFDouble;
    channels?: FFString;
    normalize?: FFBoolean;
    transform?: FFInt | "di" | "dii" | "tdi" | "tdii" | "latt" | "svf" | "zdf";
    precision?: FFInt | "auto" | "s16" | "s32" | "f32" | "f64";
    blocksize?: FFInt;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "treble", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "frequency": options?.frequency,
      "width_type": options?.width_type,
      "width": options?.width,
      "gain": options?.gain,
      "poles": options?.poles,
      "mix": options?.mix,
      "channels": options?.channels,
      "normalize": options?.normalize,
      "transform": options?.transform,
      "precision": options?.precision,
      "blocksize": options?.blocksize,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Sinusoidal amplitude modulation. The filter accepts the following options:

 *
 * @param options.f - Modulation frequency in Hertz. Modulation frequencies in the subharmonic range (20 Hz or lower) will result in a tremolo effect. This filter may also be used as a ring modulator by specifying a modulation frequency higher than 20 Hz. Range is 0.1 - 20000.0. Default value is 5.0 Hz.
 * @param options.d - Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5.
 * @see https://ffmpeg.org/ffmpeg-filters.html#tremolo
 */
  tremolo(
    options?: {
    f?: FFDouble;
    d?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "tremolo", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "f": options?.f,
      "d": options?.d,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }


































/**
 * Sinusoidal phase modulation. The filter accepts the following options:

 *
 * @param options.f - Modulation frequency in Hertz. Range is 0.1 - 20000.0. Default value is 5.0 Hz.
 * @param options.d - Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5.
 * @see https://ffmpeg.org/ffmpeg-filters.html#vibrato
 */
  vibrato(
    options?: {
    f?: FFDouble;
    d?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "vibrato", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "f": options?.f,
      "d": options?.d,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }














/**
 * Apply audio Virtual Bass filter. This filter accepts stereo input and produce stereo with LFE (2.1) channels output. The newly produced LFE channel have enhanced virtual bass originally obtained from both stereo channels. This filter outputs front left and front right channels unchanged as available in stereo input. The filter accepts the following options:

 *
 * @param options.cutoff - Set the virtual bass cutoff frequency. Default value is 250 Hz. Allowed range is from 100 to 500 Hz.
 * @param options.strength - Set the virtual bass strength. Allowed range is from 0.5 to 3. Default value is 3.
 * @see https://ffmpeg.org/ffmpeg-filters.html#virtualbass
 */
  virtualbass(
    options?: {
    cutoff?: FFDouble;
    strength?: FFDouble;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "virtualbass", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "cutoff": options?.cutoff,
      "strength": options?.strength,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }








/**
 * Adjust the input audio volume. It accepts the following parameters:

 *
 * @param options.volume - Modify the volume expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
 * @param options.precision - This parameter represents the mathematical precision. It determines which input sample formats will be allowed, which affects the precision of the volume scaling. @end table
 * @param options.eval - Set when the volume expression is evaluated. It accepts the following values: @end table Default value is once.
 * @param options.replaygain - Choose the behaviour on encountering ReplayGain side data in input frames. @end table
 * @param options.replaygain_preamp - Pre-amplification gain in dB to apply to the selected replaygain gain. Default value for replaygain_preamp is 0.0.
 * @param options.replaygain_noclip - Prevent clipping by limiting the gain applied. Default value for replaygain_noclip is 1.
 * @see https://ffmpeg.org/ffmpeg-filters.html#volume
 */
  volume(
    options?: {
    volume?: FFString;
    precision?: FFInt | "fixed" | "float" | "double";
    eval?: FFInt | "once" | "frame";
    replaygain?: FFInt | "drop" | "ignore" | "track" | "album";
    replaygain_preamp?: FFDouble;
    replaygain_noclip?: FFBoolean;
    enable?: FFString;
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "volume", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
      "volume": options?.volume,
      "precision": options?.precision,
      "eval": options?.eval,
      "replaygain": options?.replaygain,
      "replaygain_preamp": options?.replaygain_preamp,
      "replaygain_noclip": options?.replaygain_noclip,
      "enable": options?.enable,
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }






/**
 * Detect the volume of the input video. The filter has no parameters. It supports only 16-bit signed integer samples, so the input will be converted when needed. Statistics about the volume will be printed in the log when the input stream end is reached. In particular it will show the mean volume (root mean square), maximum volume (on a per-sample basis), and the beginning of a histogram of the registered volume values (from the maximum value to a cumulated 1/1000 of the samples). All volumes are in decibels relative to the maximum PCM value.

 *
 * @see https://ffmpeg.org/ffmpeg-filters.html#volumedetect
 */
  volumedetect(
    options?: {
extraOptions?: Record<string, unknown>;
    },
  ): AudioStream {
    const filterNode = filterNodeFactory(
      { name: "volumedetect", typingsInput: ["audio"], typingsOutput: ["audio"] },
      [this],
      merge(
    {
},
    options?.extraOptions,
  ),
    );
return filterNode.audio(0) as unknown as AudioStream;
  }















































}
