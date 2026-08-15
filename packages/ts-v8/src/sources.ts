// NOTE: this file is auto-generated, do not modify
/**
 * FFmpeg source filters (no input streams required).
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
 * Buffer audio frames, and make them available to the filter chain. This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/buffersrc.h. It accepts the following parameters:

 *
 * @param options.time_base - The timebase which will be used for timestamps of submitted frames. It must be either a floating-point number or in numerator/denominator form.
 * @param options.sample_rate - The sample rate of the incoming audio buffers.
 * @param options.sample_fmt - The sample format of the incoming audio buffers. Either a sample format name or its corresponding integer representation from the enum AVSampleFormat in libavutil/samplefmt.h
 * @param options.channel_layout - The channel layout of the incoming audio buffers. Either a channel layout name from channel_layout_map in libavutil/channel_layout.c or its corresponding integer representation from the AV_CH_LAYOUT_* macros in libavutil/channel_layout.h
 * @param options.channels - The number of channels of the incoming audio buffers. If both channels and channel_layout are specified, then they must be consistent.
 * @see https://ffmpeg.org/ffmpeg-filters.html#abuffer
 */
export function abuffer(



  options?: {
    time_base?: FFRational;
    sample_rate?: FFInt;
    sample_fmt?: FFSampleFmt;
    channel_layout?: FFString;
    channels?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "abuffer", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "time_base": options?.time_base,
      "sample_rate": options?.sample_rate,
      "sample_fmt": options?.sample_fmt,
      "channel_layout": options?.channel_layout,
      "channels": options?.channels,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}


















































/**
 * Generate an audio signal specified by an expression. This source accepts in input one or more expressions (one for each channel), which are evaluated and used to generate a corresponding audio signal. This source accepts the following options:

 *
 * @param options.exprs - Set the '|'-separated expressions list for each separate channel. In case the channel_layout option is not specified, the selected channel layout depends on the number of provided expressions. Otherwise the last specified expression is applied to the remaining output channels.
 * @param options.nb_samples - Set the number of samples per channel per each output frame, default to 1024.
 * @param options.sample_rate - Specify the sample rate, default to 44100.
 * @param options.duration - Set the minimum duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
 * @param options.channel_layout - Set the channel layout. The number of channels in the specified layout must be equal to the number of specified expressions.
 * @see https://ffmpeg.org/ffmpeg-filters.html#aevalsrc
 */
export function aevalsrc(



  options?: {
    exprs?: FFString;
    nb_samples?: FFInt;
    sample_rate?: FFString;
    duration?: FFDuration;
    channel_layout?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "aevalsrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "exprs": options?.exprs,
      "nb_samples": options?.nb_samples,
      "sample_rate": options?.sample_rate,
      "duration": options?.duration,
      "channel_layout": options?.channel_layout,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * Generate a fractional delay FIR coefficients. The resulting stream can be used with afir filter for filtering the audio signal. The filter accepts the following options:

 *
 * @param options.delay - Set the fractional delay. Default is 0.
 * @param options.sample_rate - Set the sample rate, default is 44100.
 * @param options.nb_samples - Set the number of samples per each frame. Default is 1024.
 * @param options.taps - Set the number of filter coefficients in output audio stream. Default value is 0.
 * @param options.channel_layout - Specifies the channel layout, and can be a string representing a channel layout. The default value of channel_layout is "stereo".
 * @see https://ffmpeg.org/ffmpeg-filters.html#afdelaysrc
 */
export function afdelaysrc(



  options?: {
    delay?: FFDouble;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    taps?: FFInt;
    channel_layout?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "afdelaysrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "delay": options?.delay,
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "taps": options?.taps,
      "channel_layout": options?.channel_layout,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * Generate a FIR equalizer coefficients. The resulting stream can be used with afir filter for filtering the audio signal. The filter accepts the following options:

 *
 * @param options.preset - Set equalizer preset. Default preset is flat. Available presets are: @end table
 * @param options.gains - Set custom gains for each band. Only used if the preset option is set to custom. Gains are separated by white spaces and each gain is set in dBFS. Default is 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.
 * @param options.bands - Set the custom bands from where custom equalizer gains are set. This must be in strictly increasing order. Only used if the preset option is set to custom. Bands are separated by white spaces and each band represent frequency in Hz. Default is 25 40 63 100 160 250 400 630 1000 1600 2500 4000 6300 10000 16000 24000.
 * @param options.taps - Set number of filter coefficients in output audio stream. Default value is 4096.
 * @param options.sample_rate - Set sample rate of output audio stream, default is 44100.
 * @param options.nb_samples - Set number of samples per each frame in output audio stream. Default is 1024.
 * @param options.interp - Set interpolation method for FIR equalizer coefficients. Can be linear or cubic.
 * @param options.phase - Set phase type of FIR filter. Can be linear or min: minimum-phase. Default is minimum-phase filter.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afireqsrc
 */
export function afireqsrc(



  options?: {
    preset?: FFInt | "custom" | "flat" | "acoustic" | "bass" | "beats" | "classic" | "clear" | "deep bass" | "dubstep" | "electronic" | "hardstyle" | "hip-hop" | "jazz" | "metal" | "movie" | "pop" | "r\u0026b" | "rock" | "vocal booster";
    gains?: FFString;
    bands?: FFString;
    taps?: FFInt;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    interp?: FFInt | "linear" | "cubic";
    phase?: FFInt | "linear" | "min";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "afireqsrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "preset": options?.preset,
      "gains": options?.gains,
      "bands": options?.bands,
      "taps": options?.taps,
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "interp": options?.interp,
      "phase": options?.phase,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}






/**
 * Generate a FIR coefficients using frequency sampling method. The resulting stream can be used with afir filter for filtering the audio signal. The filter accepts the following options:

 *
 * @param options.taps - Set number of filter coefficients in output audio stream. Default value is 1025.
 * @param options.frequency - Set frequency points from where magnitude and phase are set. This must be in non decreasing order, and first element must be 0, while last element must be 1. Elements are separated by white spaces.
 * @param options.magnitude - Set magnitude value for every frequency point set by frequency. Number of values must be same as number of frequency points. Values are separated by white spaces.
 * @param options.phase - Set phase value for every frequency point set by frequency. Number of values must be same as number of frequency points. Values are separated by white spaces.
 * @param options.sample_rate - Set sample rate, default is 44100.
 * @param options.nb_samples - Set number of samples per each frame. Default is 1024.
 * @param options.win_func - Set window function. Default is blackman.
 * @see https://ffmpeg.org/ffmpeg-filters.html#afirsrc
 */
export function afirsrc(



  options?: {
    taps?: FFInt;
    frequency?: FFString;
    magnitude?: FFString;
    phase?: FFString;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "afirsrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "taps": options?.taps,
      "frequency": options?.frequency,
      "magnitude": options?.magnitude,
      "phase": options?.phase,
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "win_func": options?.win_func,
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
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function allrgb(



  options?: {
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "allrgb", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function allyuv(



  options?: {
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "allyuv", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
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
 * This is the same as movie source, except it selects an audio stream by default.

 *
 * @param options.filename -
 * @param options.format_name - set format name
 * @param options.stream_index - set stream index (from -1 to INT_MAX) (default -1)
 * @param options.seek_point - set seekpoint (seconds) (from 0 to 9.22337e+12) (default 0)
 * @param options.streams - set streams
 * @param options.loop - set loop count (from 0 to INT_MAX) (default 1)
 * @param options.discontinuity - set discontinuity threshold (default 0)
 * @param options.dec_threads - set the number of threads for decoding (from 0 to INT_MAX) (default 0)
 * @param options.format_opts - set format options for the opened file
 * @see https://ffmpeg.org/ffmpeg-filters.html#amovie
 */
export function amovie(



  options?: {
    filename?: FFString;
    format_name?: FFString;
    stream_index?: FFInt;
    seek_point?: FFDouble;
    streams?: FFString;
    loop?: FFInt;
    discontinuity?: FFDuration;
    dec_threads?: FFInt;
    format_opts?: FFDictionary;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "amovie", typingsInput: [], typingsOutput: [] },
    inputStreams,
    merge(
    {
      "filename": options?.filename,
      "format_name": options?.format_name,
      "stream_index": options?.stream_index,
      "seek_point": options?.seek_point,
      "streams": options?.streams,
      "loop": options?.loop,
      "discontinuity": options?.discontinuity,
      "dec_threads": options?.dec_threads,
      "format_opts": options?.format_opts,
},
    options?.extraOptions,
  ),
  );
return filterNode;
}


















/**
 * Generate a noise audio signal. The filter accepts the following options:

 *
 * @param options.sample_rate - Specify the sample rate. Default value is 48000 Hz.
 * @param options.amplitude - Specify the amplitude (0.0 - 1.0) of the generated audio stream. Default value is 1.0.
 * @param options.duration - Specify the duration of the generated audio stream. Not specifying this option results in noise with an infinite length.
 * @param options.color - Specify the color of noise. Available noise colors are white, pink, brown, blue, violet and velvet. Default color is white.
 * @param options.seed - Specify a value used to seed the PRNG.
 * @param options.nb_samples - Set the number of samples per each output frame, default is 1024.
 * @param options.density - Set the density (0.0 - 1.0) for the velvet noise generator, default is 0.05.
 * @see https://ffmpeg.org/ffmpeg-filters.html#anoisesrc
 */
export function anoisesrc(



  options?: {
    sample_rate?: FFInt;
    amplitude?: FFDouble;
    duration?: FFDuration;
    color?: FFInt | "white" | "pink" | "brown" | "blue" | "violet" | "velvet";
    seed?: FFInt64;
    nb_samples?: FFInt;
    density?: FFDouble;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "anoisesrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "sample_rate": options?.sample_rate,
      "amplitude": options?.amplitude,
      "duration": options?.duration,
      "color": options?.color,
      "seed": options?.seed,
      "nb_samples": options?.nb_samples,
      "density": options?.density,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * The null audio source, return unprocessed audio frames. It is mainly useful as a template and to be employed in analysis / debugging tools, or as the source for filters which ignore the input data (for example the sox synth filter). This source accepts the following options:

 *
 * @param options.channel_layout - Specifies the channel layout, and can be either an integer or a string representing a channel layout. The default value of channel_layout is "stereo". Check the channel_layout_map definition in libavutil/channel_layout.c for the mapping between strings and channel layout values.
 * @param options.sample_rate - Specifies the sample rate, and defaults to 44100.
 * @param options.nb_samples - Set the number of samples per requested frames.
 * @param options.duration - Set the duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
 * @see https://ffmpeg.org/ffmpeg-filters.html#anullsrc
 */
export function anullsrc(



  options?: {
    channel_layout?: FFString;
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    duration?: FFDuration;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "anullsrc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "channel_layout": options?.channel_layout,
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
 * Generate an Audio/Video Sync Test. Generated stream periodically shows flash video frame and emits beep in audio. Useful to inspect A/V sync issues. It accepts the following options:

 *
 * @param options.size - Set output video size. Default value is hd720.
 * @param options.framerate - Set output video frame rate. Default value is 30.
 * @param options.samplerate - Set output audio sample rate. Default value is 44100.
 * @param options.amplitude - Set output audio beep amplitude. Default value is 0.7.
 * @param options.period - Set output audio beep period in seconds. Default value is 3.
 * @param options.delay - Set output video flash delay in number of frames. Default value is 0.
 * @param options.cycle - Enable cycling of video delays, by default is disabled.
 * @param options.duration - Set stream output duration. By default duration is unlimited.
 * @param options.fg - Set foreground/background/additional color.
 * @param options.bg - Set foreground/background/additional color.
 * @param options.ag - Set foreground/background/additional color.
 * @see https://ffmpeg.org/ffmpeg-filters.html#avsynctest
 */
export function avsynctest(



  options?: {
    size?: FFImageSize;
    framerate?: FFVideoRate;
    samplerate?: FFInt;
    amplitude?: FFFloat;
    period?: FFInt;
    delay?: FFInt;
    cycle?: FFBoolean;
    duration?: FFDuration;
    fg?: FFColor;
    bg?: FFColor;
    ag?: FFColor;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "avsynctest", typingsInput: [], typingsOutput: ["audio", "video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "framerate": options?.framerate,
      "samplerate": options?.samplerate,
      "amplitude": options?.amplitude,
      "period": options?.period,
      "delay": options?.delay,
      "cycle": options?.cycle,
      "duration": options?.duration,
      "fg": options?.fg,
      "bg": options?.bg,
      "ag": options?.ag,
},
    options?.extraOptions,
  ),
  );
return filterNode;
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
 * Buffer video frames, and make them available to the filter chain. This source is mainly intended for a programmatic use, in particular through the interface defined in libavfilter/buffersrc.h. It accepts the following parameters:

 *
 * @param options.width - The input video width.
 * @param options.video_size - Specify the size (width and height) of the buffered video frames. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @param options.height - The input video height.
 * @param options.pix_fmt - A string representing the pixel format of the buffered video frames. It may be a number corresponding to a pixel format, or a pixel format name.
 * @param options.sar - The sample (pixel) aspect ratio of the input video.
 * @param options.time_base - Specify the timebase assumed by the timestamps of the buffered frames.
 * @param options.colorspace - A string representing the color space of the buffered video frames. It may be a number corresponding to a color space, or a color space name.
 * @param options.range - A string representing the color range of the buffered video frames. It may be a number corresponding to a color range, or a color range name.
 * @see https://ffmpeg.org/ffmpeg-filters.html#buffer
 */
export function buffer(



  options?: {
    width?: FFInt;
    video_size?: FFImageSize;
    height?: FFInt;
    pix_fmt?: FFPixFmt;
    sar?: FFRational;
    time_base?: FFRational;
    colorspace?: FFInt | "gbr" | "bt709" | "unknown" | "fcc" | "bt470bg" | "smpte170m" | "smpte240m" | "ycgco" | "ycgco-re" | "ycgco-ro" | "bt2020nc" | "bt2020c" | "smpte2085" | "chroma-derived-nc" | "chroma-derived-c" | "ictcp" | "ipt-c2";
    range?: FFInt | "unspecified" | "unknown" | "limited" | "tv" | "mpeg" | "full" | "pc" | "jpeg";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "buffer", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "width": options?.width,
      "video_size": options?.video_size,
      "height": options?.height,
      "pix_fmt": options?.pix_fmt,
      "sar": options?.sar,
      "time_base": options?.time_base,
      "colorspace": options?.colorspace,
      "range": options?.range,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}


















/**
 * Create a pattern generated by an elementary cellular automaton. The initial state of the cellular automaton can be defined through the filename and pattern options. If such options are not specified an initial state is created randomly. At each new frame a new row in the video is filled with the result of the cellular automaton next generation. The behavior when the whole frame is filled is defined by the scroll option. This source accepts the following options:

 *
 * @param options.filename - Read the initial cellular automaton state, i.e. the starting row, from the specified file. In the file, each non-whitespace character is considered an alive cell, a newline will terminate the row, and further characters in the file will be ignored.
 * @param options.pattern - Read the initial cellular automaton state, i.e. the starting row, from the specified string. Each non-whitespace character in the string is considered an alive cell, a newline will terminate the row, and further characters in the string will be ignored.
 * @param options.rate - Set the video rate, that is the number of frames generated per second. Default is 25.
 * @param options.size - Set the size of the output video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. If filename or pattern is specified, the size is set by default to the width of the specified initial state row, and the height is set to width * PHI. If size is set, it must contain the width of the specified pattern string, and the specified pattern will be centered in the larger row. If a filename or a pattern string is not specified, the size value defaults to "320x518" (used for a randomly generated initial state).
 * @param options.rule - Set the cellular automaton rule, it is a number ranging from 0 to 255. Default value is 110.
 * @param options.random_fill_ratio - Set the random fill ratio for the initial cellular automaton row. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. This option is ignored when a file or a pattern is specified.
 * @param options.random_seed - Set the seed for filling randomly the initial row, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
 * @param options.scroll - If set to 1, scroll the output upward when all the rows in the output have been already filled. If set to 0, the new generated row will be written over the top row just after the bottom row is filled. Defaults to 1.
 * @param options.start_full - If set to 1, completely fill the output with generated rows before outputting the first frame. This is the default behavior, for disabling set the value to 0.
 * @param options.full - If set to 1, completely fill the output with generated rows before outputting the first frame. This is the default behavior, for disabling set the value to 0.
 * @param options.stitch - If set to 1, stitch the left and right row edges together. This is the default behavior, for disabling set the value to 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#cellauto
 */
export function cellauto(



  options?: {
    filename?: FFString;
    pattern?: FFString;
    rate?: FFVideoRate;
    size?: FFImageSize;
    rule?: FFInt;
    random_fill_ratio?: FFDouble;
    random_seed?: FFInt64;
    scroll?: FFBoolean;
    start_full?: FFBoolean;
    full?: FFBoolean;
    stitch?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "cellauto", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "filename": options?.filename,
      "pattern": options?.pattern,
      "rate": options?.rate,
      "size": options?.size,
      "rule": options?.rule,
      "random_fill_ratio": options?.random_fill_ratio,
      "random_seed": options?.random_seed,
      "scroll": options?.scroll,
      "start_full": options?.start_full,
      "full": options?.full,
      "stitch": options?.stitch,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}




























/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.color - Set the color of the created image. Accepts the same syntax of the corresponding color option.
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function color(



  options?: {
    color?: FFColor;
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "color", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "color": options?.color,
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Video source that creates a Vulkan frame of a solid color. Useful for benchmarking, or overlaying. It accepts the following parameters:

 *
 * @param options.color - The color to use. Either a name, or a hexadecimal value. The default value is black.
 * @param options.size - The size of the output frame. Default value is 1920x1080.
 * @param options.rate - The framerate to output at. Default value is 60 frames per second.
 * @param options.duration - The video duration. Default value is -0.000001.
 * @param options.sar - The video signal aspect ratio. Default value is 1/1.
 * @param options.format - The pixel format of the output Vulkan frames. Default value is yuv444p.
 * @param options.out_range - Set the output YCbCr sample range. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. If not specified, the range depends on the pixel format. Possible values: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#color_vulkan
 */
export function color_vulkan(



  options?: {
    color?: FFColor;
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    format?: FFString;
    out_range?: FFInt | "full" | "limited" | "jpeg" | "mpeg" | "tv" | "pc";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "color_vulkan", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "color": options?.color,
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "format": options?.format,
      "out_range": options?.out_range,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}










/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options.patch_size - Set patch size of single color patch, only available in the colorchart source. Default is 64x64.
 * @param options.preset - Set colorchecker colors preset, only available in the colorchart source. Available values are: @end table Default value is reference.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function colorchart(



  options?: {
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    patch_size?: FFImageSize;
    preset?: FFInt | "reference" | "skintones";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "colorchart", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "patch_size": options?.patch_size,
      "preset": options?.preset,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






























/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options._type - Set the type of the color spectrum, only available in the colorspectrum source. Can be one of the following: @end table
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function colorspectrum(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    _type?: FFInt | "black" | "white" | "all";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "colorspectrum", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "type": options?._type,
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
 * Synthesize a voice utterance using the libflite library. To enable compilation of this filter you need to configure FFmpeg with --enable-libflite. Note that versions of the flite library prior to 2.0 are not thread-safe. The filter accepts the following options:

 *
 * @param options.list_voices - If set to 1, list the names of the available voices and exit immediately. Default value is 0.
 * @param options.nb_samples - Set the maximum number of samples per frame. Default value is 512.
 * @param options.text - Set the text to speak.
 * @param options.textfile - Set the filename containing the text to speak.
 * @param options.v - Set the voice to use for the speech synthesis. Default value is kal. See also the list_voices option.
 * @see https://ffmpeg.org/ffmpeg-filters.html#flite
 */
export function flite(



  options?: {
    list_voices?: FFBoolean;
    nb_samples?: FFInt;
    text?: FFString;
    textfile?: FFString;
    v?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "flite", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "list_voices": options?.list_voices,
      "nb_samples": options?.nb_samples,
      "text": options?.text,
      "textfile": options?.textfile,
      "v": options?.v,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}
























/**
 * Provide a frei0r source. To enable compilation of this filter you need to install the frei0r header and configure FFmpeg with --enable-frei0r. This source accepts the following parameters:

 *
 * @param options.size - The size of the video to generate. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
 * @param options.framerate - The framerate of the generated video. It may be a string of the form num/den or a frame rate abbreviation.
 * @param options.filter_name - The name to the frei0r source to load. For more information regarding frei0r and how to set the parameters, read the frei0r section in the video filters documentation.
 * @see https://ffmpeg.org/ffmpeg-filters.html#frei0r_src
 */
export function frei0r_src(



  options?: {
    size?: FFImageSize;
    framerate?: FFVideoRate;
    filter_name?: FFString;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "frei0r_src", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "framerate": options?.framerate,
      "filter_name": options?.filter_name,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}


















/**
 * Generate several gradients.

 *
 * @param options.size - Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.c0 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c1 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c2 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c3 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c4 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c5 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c6 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.c7 - Set 8 colors. Default values for colors is to pick random one.
 * @param options.x0 - Set gradient line source and destination points. If negative or out of range, random ones are picked.
 * @param options.y0 - Set gradient line source and destination points. If negative or out of range, random ones are picked.
 * @param options.x1 - set gradient line destination x1 (from -1 to INT_MAX) (default -1)
 * @param options.y1 - Set gradient line source and destination points. If negative or out of range, random ones are picked.
 * @param options.nb_colors - Set number of colors to use at once. Allowed range is from 2 to 8. Default value is 2.
 * @param options.seed - Set seed for picking gradient line points.
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
 * @param options.speed - Set speed of gradients rotation.
 * @param options._type - Set type of gradients. Available values are: @end table Default type is linear.
 * @see https://ffmpeg.org/ffmpeg-filters.html#gradients
 */
export function gradients(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    c0?: FFColor;
    c1?: FFColor;
    c2?: FFColor;
    c3?: FFColor;
    c4?: FFColor;
    c5?: FFColor;
    c6?: FFColor;
    c7?: FFColor;
    x0?: FFInt;
    y0?: FFInt;
    x1?: FFInt;
    y1?: FFInt;
    nb_colors?: FFInt;
    seed?: FFInt64;
    duration?: FFDuration;
    speed?: FFFloat;
    _type?: FFInt | "linear" | "radial" | "circular" | "spiral" | "square";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "gradients", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "c0": options?.c0,
      "c1": options?.c1,
      "c2": options?.c2,
      "c3": options?.c3,
      "c4": options?.c4,
      "c5": options?.c5,
      "c6": options?.c6,
      "c7": options?.c7,
      "x0": options?.x0,
      "y0": options?.y0,
      "x1": options?.x1,
      "y1": options?.y1,
      "nb_colors": options?.nb_colors,
      "seed": options?.seed,
      "duration": options?.duration,
      "speed": options?.speed,
      "type": options?._type,
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
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.level - Specify the level of the Hald CLUT, only available in the haldclutsrc source. A level of N generates a picture of N*N*N by N*N*N pixels to be used as identity matrix for 3D lookup tables. Each component is coded on a 1/(N*N) scale.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function haldclutsrc(



  options?: {
    level?: FFInt;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "haldclutsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "level": options?.level,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
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
 * Generate odd-tap Hilbert transform FIR coefficients. The resulting stream can be used with afir filter for phase-shifting the signal by 90 degrees. This is used in many matrix coding schemes and for analytic signal generation. The process is often written as a multiplication by i (or j), the imaginary unit. The filter accepts the following options:

 *
 * @param options.sample_rate - Set sample rate, default is 44100.
 * @param options.taps - Set length of FIR filter, default is 22051.
 * @param options.nb_samples - Set number of samples per each frame.
 * @param options.win_func - Set window function to be used when generating FIR coefficients.
 * @see https://ffmpeg.org/ffmpeg-filters.html#hilbert
 */
export function hilbert(



  options?: {
    sample_rate?: FFInt;
    taps?: FFInt;
    nb_samples?: FFInt;
    win_func?: FFInt | "rect" | "bartlett" | "hann" | "hanning" | "hamming" | "blackman" | "welch" | "flattop" | "bharris" | "bnuttall" | "bhann" | "sine" | "nuttall" | "lanczos" | "gauss" | "tukey" | "dolph" | "cauchy" | "parzen" | "poisson" | "bohman" | "kaiser";
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "hilbert", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "sample_rate": options?.sample_rate,
      "taps": options?.taps,
      "nb_samples": options?.nb_samples,
      "win_func": options?.win_func,
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
 * Generate a life pattern. This source is based on a generalization of John Conway's life game. The sourced input represents a life grid, each pixel represents a cell which can be in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each interaction the grid evolves according to the adopted rule, which specifies the number of neighbor alive cells which will make a cell stay alive or born. The rule option allows one to specify the rule to adopt. This source accepts the following options:

 *
 * @param options.filename - Set the file from which to read the initial grid state. In the file, each non-whitespace character is considered an alive cell, and newline is used to delimit the end of each row. If this option is not specified, the initial grid is generated randomly.
 * @param options.size - Set the size of the output video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. If filename is specified, the size is set by default to the same size of the input file. If size is set, it must contain the size specified in the input file, and the initial grid defined in that file is centered in the larger resulting area. If a filename is not specified, the size value defaults to "320x240" (used for a randomly generated initial grid).
 * @param options.rate - Set the video rate, that is the number of frames generated per second. Default is 25.
 * @param options.rule - Set the life rule. A rule can be specified with a code of the kind "SNS/BNB", where NS and NB are sequences of numbers in the range 0-8, NS specifies the number of alive neighbor cells which make a live cell stay alive, and NB the number of alive neighbor cells which make a dead cell to become alive (i.e. to "born"). "s" and "b" can be used in place of "S" and "B", respectively. Alternatively a rule can be specified by an 18-bits integer. The 9 high order bits are used to encode the next cell state if it is alive for each number of neighbor alive cells, the low order bits specify the rule for "borning" new cells. Higher order bits encode for an higher number of neighbor cells. For example the number 6153 = (12<<9)+9 specifies a stay alive rule of 12 and a born rule of 9, which corresponds to "S23/B03". Default value is "S23/B3", which is the original Conway's game of life rule, and will keep a cell alive if it has 2 or 3 neighbor alive cells, and will born a new cell if there are three alive cells around a dead cell.
 * @param options.random_fill_ratio - Set the random fill ratio for the initial random grid. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. It is ignored when a file is specified.
 * @param options.random_seed - Set the seed for filling the initial random grid, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
 * @param options.stitch - If set to 1, stitch the left and right grid edges together, and the top and bottom edges also. Defaults to 1.
 * @param options.mold - Set cell mold speed. If set, a dead cell will go from death_color to mold_color with a step of mold. mold can have a value from 0 to 255.
 * @param options.life_color - Set the color of living (or new born) cells.
 * @param options.death_color - Set the color of dead cells. If mold is set, this is the first color used to represent a dead cell.
 * @param options.mold_color - Set mold color, for definitely dead and moldy cells. For the syntax of these 3 color options, check the "Color" section in the ffmpeg-utils manual.
 * @see https://ffmpeg.org/ffmpeg-filters.html#life
 */
export function life(



  options?: {
    filename?: FFString;
    size?: FFImageSize;
    rate?: FFVideoRate;
    rule?: FFString;
    random_fill_ratio?: FFDouble;
    random_seed?: FFInt64;
    stitch?: FFBoolean;
    mold?: FFInt;
    life_color?: FFColor;
    death_color?: FFColor;
    mold_color?: FFColor;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "life", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "filename": options?.filename,
      "size": options?.size,
      "rate": options?.rate,
      "rule": options?.rule,
      "random_fill_ratio": options?.random_fill_ratio,
      "random_seed": options?.random_seed,
      "stitch": options?.stitch,
      "mold": options?.mold,
      "life_color": options?.life_color,
      "death_color": options?.death_color,
      "mold_color": options?.mold_color,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
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
 * Generate a Mandelbrot set fractal, and progressively zoom towards the point specified with start_x and start_y. This source accepts the following options:

 *
 * @param options.size - Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.maxiter - Set the maximum of iterations performed by the rendering algorithm. Default value is 7189.
 * @param options.start_x - Set the initial x position. Must be a floating point value between -100 and 100. Default value is -0.743643887037158704752191506114774.
 * @param options.start_y - Set the initial y position. Must be a floating point value between -100 and 100. Default value is -0.131825904205311970493132056385139.
 * @param options.start_scale - Set the initial scale value. Default value is 3.0.
 * @param options.end_scale - Set the terminal scale value. Must be a floating point value. Default value is 0.3.
 * @param options.end_pts - Set the terminal pts value. Default value is 400.
 * @param options.bailout - Set the bailout value. Default value is 10.0.
 * @param options.morphxf - set morph x frequency (from -FLT_MAX to FLT_MAX) (default 0.01)
 * @param options.morphyf - set morph y frequency (from -FLT_MAX to FLT_MAX) (default 0.0123)
 * @param options.morphamp - set morph amplitude (from -FLT_MAX to FLT_MAX) (default 0)
 * @param options.outer - Set outer coloring mode. It shall assume one of following values: @end table Default value is normalized_iteration_count.
 * @param options.inner - Set the inner coloring mode, that is the algorithm used to draw the Mandelbrot fractal internal region. It shall assume one of the following values: @end table Default value is mincol.
 * @see https://ffmpeg.org/ffmpeg-filters.html#mandelbrot
 */
export function mandelbrot(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    maxiter?: FFInt;
    start_x?: FFDouble;
    start_y?: FFDouble;
    start_scale?: FFDouble;
    end_scale?: FFDouble;
    end_pts?: FFDouble;
    bailout?: FFDouble;
    morphxf?: FFDouble;
    morphyf?: FFDouble;
    morphamp?: FFDouble;
    outer?: FFInt | "iteration_count" | "normalized_iteration_count" | "white" | "outz";
    inner?: FFInt | "black" | "period" | "convergence" | "mincol";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "mandelbrot", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "maxiter": options?.maxiter,
      "start_x": options?.start_x,
      "start_y": options?.start_y,
      "start_scale": options?.start_scale,
      "end_scale": options?.end_scale,
      "end_pts": options?.end_pts,
      "bailout": options?.bailout,
      "morphxf": options?.morphxf,
      "morphyf": options?.morphyf,
      "morphamp": options?.morphamp,
      "outer": options?.outer,
      "inner": options?.inner,
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
 * Read audio and/or video stream(s) from a movie container. It accepts the following parameters:

 *
 * @param options.filename - The name of the resource to read (not necessarily a file; it can also be a device or a stream accessed through some protocol).
 * @param options.format_name - Specifies the format assumed for the movie to read, and can be either the name of a container or an input device. If not specified, the format is guessed from movie_name or by probing.
 * @param options.stream_index - Specifies the index of the video stream to read. If the value is -1, the most suitable video stream will be automatically selected. The default value is "-1". Deprecated. If the filter is called "amovie", it will select audio instead of video.
 * @param options.seek_point - Specifies the seek point in seconds. The frames will be output starting from this seek point. The parameter is evaluated with av_strtod, so the numerical value may be suffixed by an IS postfix. The default value is "0".
 * @param options.streams - Specifies the streams to read. Several streams can be specified, separated by "+". The source will then have as many outputs, in the same order. The syntax is explained in the "Stream specifiers" section in the ffmpeg manual. Two special names, "dv" and "da" specify respectively the default (best suited) video and audio stream. Default is "dv", or "da" if the filter is called as "amovie".
 * @param options.loop - Specifies how many times to read the stream in sequence. If the value is 0, the stream will be looped infinitely. Default value is "1". Note that when the movie is looped the source timestamps are not changed, so it will generate non monotonically increasing timestamps.
 * @param options.discontinuity - Specifies the time difference between frames above which the point is considered a timestamp discontinuity which is removed by adjusting the later timestamps.
 * @param options.dec_threads - Specifies the number of threads for decoding
 * @param options.format_opts - Specify format options for the opened file. Format options can be specified as a list of key=value pairs separated by ':'. The following example shows how to add protocol_whitelist and protocol_blacklist options: @example ffplay -f lavfi "movie=filename='1.sdp':format_opts='protocol_whitelist=file,rtp,udp\:protocol_blacklist=http'" @end example
 * @see https://ffmpeg.org/ffmpeg-filters.html#movie
 */
export function movie(



  options?: {
    filename?: FFString;
    format_name?: FFString;
    stream_index?: FFInt;
    seek_point?: FFDouble;
    streams?: FFString;
    loop?: FFInt;
    discontinuity?: FFDuration;
    dec_threads?: FFInt;
    format_opts?: FFDictionary;
extraOptions?: Record<string, unknown>;
  },
): FilterNode {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "movie", typingsInput: [], typingsOutput: [] },
    inputStreams,
    merge(
    {
      "filename": options?.filename,
      "format_name": options?.format_name,
      "stream_index": options?.stream_index,
      "seek_point": options?.seek_point,
      "streams": options?.streams,
      "loop": options?.loop,
      "discontinuity": options?.discontinuity,
      "dec_threads": options?.dec_threads,
      "format_opts": options?.format_opts,
},
    options?.extraOptions,
  ),
  );
return filterNode;
}








/**
 * Generate various test patterns, as generated by the MPlayer test filter. The size of the generated video is fixed, and is 512x512. This source is useful in particular for testing encoding features. This source accepts the following options:

 *
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
 * @param options.test - Set the number or the name of the test to perform. Supported tests are: @end table Default value is "all", which will cycle through the list of all tests.
 * @param options.max_frames - Set the maximum number of frames generated for each test (from 1 to I64_MAX) (default 30)
 * @see https://ffmpeg.org/ffmpeg-filters.html#mptestsrc
 */
export function mptestsrc(



  options?: {
    rate?: FFVideoRate;
    duration?: FFDuration;
    test?: FFInt | "dc_luma" | "dc_chroma" | "freq_luma" | "freq_chroma" | "amp_luma" | "amp_chroma" | "cbp" | "mv" | "ring1" | "ring2" | "all";
    max_frames?: FFInt64;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "mptestsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "rate": options?.rate,
      "duration": options?.duration,
      "test": options?.test,
      "max_frames": options?.max_frames,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






























/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function nullsrc(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "nullsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * Generate video using an OpenCL program.

 *
 * @param options.source - OpenCL program source file.
 * @param options.kernel - Kernel name in program.
 * @param options.size - Size of frames to generate. This must be set.
 * @param options.format - Pixel format to use for the generated frames. This must be set.
 * @param options.rate - Number of frames generated every second. Default value is '25'.
 * @see https://ffmpeg.org/ffmpeg-filters.html#openclsrc
 */
export function openclsrc(



  options?: {
    source?: FFString;
    kernel?: FFString;
    size?: FFImageSize;
    format?: FFPixFmt;
    rate?: FFVideoRate;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "openclsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "source": options?.source,
      "kernel": options?.kernel,
      "size": options?.size,
      "format": options?.format,
      "rate": options?.rate,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}




























/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function pal100bars(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "pal100bars", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function pal75bars(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "pal75bars", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}












/**
 * Generate Perlin noise. Perlin noise is a kind of noise with local continuity in space. This can be used to generate patterns with continuity in space and time, e.g. to simulate smoke, fluids, or terrain. In case more than one octave is specified through the octaves option, Perlin noise is generated as a sum of components, each one with doubled frequency. In this case the persistence option specify the ratio of the amplitude with respect to the previous component. More octave components enable to specify more high frequency details in the generated noise (e.g. small size variations due to boulders in a generated terrain).

 *
 * @param options.size - Specify the size (width and height) of the buffered video frames. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 320x240.
 * @param options.rate - Specify the frame rate expected for the video stream, expressed as a number of frames per second. Default value is 25.
 * @param options.octaves - Specify the total number of components making up the noise, each one with doubled frequency. Default value is 1.
 * @param options.persistence - Set the ratio used to compute the amplitude of the next octave component with respect to the previous component amplitude. Default value is 1.
 * @param options.xscale - set x-scale factor (from 0 to DBL_MAX) (default 1)
 * @param options.yscale - Define a scale factor used to multiple the x, y coordinates. This can be useful to define an effect with a pattern stretched along the x or y axis. Default value is 1.
 * @param options.tscale - Define a scale factor used to multiple the time coordinate. This can be useful to change the time variation speed. Default value is 1.
 * @param options.random_mode - Set random mode used to compute initial pattern. Supported values are: @end table Default value is random.
 * @param options.random_seed - When random_mode is set to random_seed, use this value to compute the initial pattern. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#perlin
 */
export function perlin(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    octaves?: FFInt;
    persistence?: FFDouble;
    xscale?: FFDouble;
    yscale?: FFDouble;
    tscale?: FFDouble;
    random_mode?: FFInt | "random" | "ken" | "seed";
    random_seed?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "perlin", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "octaves": options?.octaves,
      "persistence": options?.persistence,
      "xscale": options?.xscale,
      "yscale": options?.yscale,
      "tscale": options?.tscale,
      "random_mode": options?.random_mode,
      "random_seed": options?.random_seed,
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
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options.complement - set complement colors (default false)
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function rgbtestsrc(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    complement?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "rgbtestsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "complement": options?.complement,
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
export function scale(



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
    eofAction?: FFString;
    shortest?: FFBoolean;
    repeatlast?: FFBoolean;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "scale", typingsInput: [], typingsOutput: ["video"] },
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
 * Generate a Sierpinski carpet/triangle fractal, and randomly pan around. This source accepts the following options:

 *
 * @param options.size - Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.seed - Set seed which is used for random panning.
 * @param options.jump - Set max jump for single pan destination. Allowed range is from 1 to 10000.
 * @param options._type - Set fractal type, can be default carpet or triangle.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sierpinski
 */
export function sierpinski(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    seed?: FFInt64;
    jump?: FFInt;
    _type?: FFInt | "carpet" | "triangle";
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "sierpinski", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "seed": options?.seed,
      "jump": options?.jump,
      "type": options?._type,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
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
 * Generate a sinc kaiser-windowed low-pass, high-pass, band-pass, or band-reject FIR coefficients. The resulting stream can be used with afir filter for filtering the audio signal. The filter accepts the following options:

 *
 * @param options.sample_rate - Set sample rate, default is 44100.
 * @param options.nb_samples - Set number of samples per each frame. Default is 1024.
 * @param options.hp - Set high-pass frequency. Default is 0.
 * @param options.lp - Set low-pass frequency. Default is 0. If high-pass frequency is lower than low-pass frequency and low-pass frequency is higher than 0 then filter will create band-pass filter coefficients, otherwise band-reject filter coefficients.
 * @param options.phase - Set filter phase response. Default is 50. Allowed range is from 0 to 100.
 * @param options.beta - Set Kaiser window beta.
 * @param options.att - Set stop-band attenuation. Default is 120dB, allowed range is from 40 to 180 dB.
 * @param options.round - Enable rounding, by default is disabled.
 * @param options.hptaps - Set number of taps for high-pass filter.
 * @param options.lptaps - Set number of taps for low-pass filter.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sinc
 */
export function sinc(



  options?: {
    sample_rate?: FFInt;
    nb_samples?: FFInt;
    hp?: FFFloat;
    lp?: FFFloat;
    phase?: FFFloat;
    beta?: FFFloat;
    att?: FFFloat;
    round?: FFBoolean;
    hptaps?: FFInt;
    lptaps?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "sinc", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "sample_rate": options?.sample_rate,
      "nb_samples": options?.nb_samples,
      "hp": options?.hp,
      "lp": options?.lp,
      "phase": options?.phase,
      "beta": options?.beta,
      "att": options?.att,
      "round": options?.round,
      "hptaps": options?.hptaps,
      "lptaps": options?.lptaps,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}






/**
 * Generate an audio signal made of a sine wave with amplitude 1/8. The audio signal is bit-exact. The filter accepts the following options:

 *
 * @param options.frequency - Set the carrier frequency. Default is 440 Hz.
 * @param options.beep_factor - Enable a periodic beep every second with frequency beep_factor times the carrier frequency. Default is 0, meaning the beep is disabled.
 * @param options.sample_rate - Specify the sample rate, default is 44100.
 * @param options.duration - Specify the duration of the generated audio stream.
 * @param options.samples_per_frame - Set the number of samples per output frame. The expression can contain the following constants: @end table Default is 1024.
 * @see https://ffmpeg.org/ffmpeg-filters.html#sine
 */
export function sine(



  options?: {
    frequency?: FFDouble;
    beep_factor?: FFDouble;
    sample_rate?: FFInt;
    duration?: FFDuration;
    samples_per_frame?: FFString;
extraOptions?: Record<string, unknown>;
  },
): AudioStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "sine", typingsInput: [], typingsOutput: ["audio"] },
    inputStreams,
    merge(
    {
      "frequency": options?.frequency,
      "beep_factor": options?.beep_factor,
      "sample_rate": options?.sample_rate,
      "duration": options?.duration,
      "samples_per_frame": options?.samples_per_frame,
},
    options?.extraOptions,
  ),
  );
return filterNode.audio(0) as unknown as AudioStream;
}










/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function smptebars(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "smptebars", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function smptehdbars(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "smptehdbars", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
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
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options.decimals - Set the number of decimals to show in the timestamp, only available in the testsrc source. The displayed timestamp value will correspond to the original timestamp value multiplied by the power of 10 of the specified value. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function testsrc(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    decimals?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "testsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "decimals": options?.decimals,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}






/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options.alpha - Specify the alpha (opacity) of the background, only available in the testsrc2 source. The value must be between 0 (fully transparent) and 255 (fully opaque, the default).
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function testsrc2(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    alpha?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "testsrc2", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "alpha": options?.alpha,
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












/**
 * The allrgb source returns frames of size 4096x4096 of all rgb colors. The allyuv source returns frames of size 4096x4096 of all yuv colors. The color source provides an uniformly colored input. The colorchart source provides a colors checker chart. The colorspectrum source provides a color spectrum input. The haldclutsrc source provides an identity Hald CLUT. See also haldclut filter. The nullsrc source returns unprocessed video frames. It is mainly useful to be employed in analysis / debugging tools, or as the source for filters which ignore the input data. The pal75bars source generates a color bars pattern, based on EBU PAL recommendations with 75% color levels. The pal100bars source generates a color bars pattern, based on EBU PAL recommendations with 100% color levels. The rgbtestsrc source generates an RGB test pattern useful for detecting RGB vs BGR issues. You should see a red, green and blue stripe from top to bottom. The smptebars source generates a color bars pattern, based on the SMPTE Engineering Guideline EG 1-1990. The smptehdbars source generates a color bars pattern, based on the SMPTE RP 219-2002. The testsrc source generates a test video pattern, showing a color pattern, a scrolling gradient and a timestamp. This is mainly intended for testing purposes. The testsrc2 source is similar to testsrc, but supports more pixel formats instead of just rgb24. This allows using it as an input for other tests without requiring a format conversion. The yuvtestsrc source generates an YUV test pattern. You should see a y, cb and cr stripe from top to bottom. The sources accept the following parameters:

 *
 * @param options.size - Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
 * @param options.rate - Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @see https://ffmpeg.org/ffmpeg-filters.html#allrgb
 */
export function yuvtestsrc(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "yuvtestsrc", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}








/**
 * Generate a zoneplate test video pattern. This source accepts the following options:

 *
 * @param options.size - Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "320x240".
 * @param options.rate - Set frame rate, expressed as number of frames per second. Default value is "25".
 * @param options.duration - Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
 * @param options.sar - Set the sample aspect ratio of the sourced video.
 * @param options.precision - Set precision in bits for look-up table for sine calculations. Default value is 10. Allowed range is from 4 to 16.
 * @param options.xo - Set horizontal axis offset for output signal. Default value is 0.
 * @param options.yo - Set vertical axis offset for output signal. Default value is 0.
 * @param options.to - Set time axis offset for output signal. Default value is 0.
 * @param options.k0 - Set 0-order, constant added to signal phase. Default value is 0.
 * @param options.kx - Set 1-order, phase factor multiplier for horizontal axis. Default value is 0.
 * @param options.ky - Set 1-order, phase factor multiplier for vertical axis. Default value is 0.
 * @param options.kt - Set 1-order, phase factor multiplier for time axis. Default value is 0.
 * @param options.kxt - Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
 * @param options.kyt - Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
 * @param options.kxy - Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
 * @param options.kx2 - Set 2-order, phase factor multiplier for horizontal axis. Default value is 0.
 * @param options.ky2 - Set 2-order, phase factor multiplier for vertical axis. Default value is 0.
 * @param options.kt2 - Set 2-order, phase factor multiplier for time axis. Default value is 0.
 * @param options.ku - Set the constant added to final phase to produce chroma-blue component of signal. Default value is 0.
 * @param options.kv - Set the constant added to final phase to produce chroma-red component of signal. Default value is 0.
 * @see https://ffmpeg.org/ffmpeg-filters.html#zoneplate
 */
export function zoneplate(



  options?: {
    size?: FFImageSize;
    rate?: FFVideoRate;
    duration?: FFDuration;
    sar?: FFRational;
    precision?: FFInt;
    xo?: FFInt;
    yo?: FFInt;
    to?: FFInt;
    k0?: FFInt;
    kx?: FFInt;
    ky?: FFInt;
    kt?: FFInt;
    kxt?: FFInt;
    kyt?: FFInt;
    kxy?: FFInt;
    kx2?: FFInt;
    ky2?: FFInt;
    kt2?: FFInt;
    ku?: FFInt;
    kv?: FFInt;
extraOptions?: Record<string, unknown>;
  },
): VideoStream {

  const inputStreams: FilterableStream[] = [];

  const filterNode = filterNodeFactory(
    { name: "zoneplate", typingsInput: [], typingsOutput: ["video"] },
    inputStreams,
    merge(
    {
      "size": options?.size,
      "rate": options?.rate,
      "duration": options?.duration,
      "sar": options?.sar,
      "precision": options?.precision,
      "xo": options?.xo,
      "yo": options?.yo,
      "to": options?.to,
      "k0": options?.k0,
      "kx": options?.kx,
      "ky": options?.ky,
      "kt": options?.kt,
      "kxt": options?.kxt,
      "kyt": options?.kyt,
      "kxy": options?.kxy,
      "kx2": options?.kx2,
      "ky2": options?.ky2,
      "kt2": options?.kt2,
      "ku": options?.ku,
      "kv": options?.kv,
},
    options?.extraOptions,
  ),
  );
return filterNode.video(0) as unknown as VideoStream;
}
