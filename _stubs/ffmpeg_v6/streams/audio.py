# NOTE: this file is auto-generated, do not modify
"""
Audio stream.
"""


from __future__ import annotations

import re
from typing import TYPE_CHECKING, Any, Literal


from ..types import Binary, Boolean, Color, Dictionary, Double, Duration, Flags, Float, Func, Image_size, Int, Int64, Pix_fmt, Rational, Sample_fmt, String, Time, Video_rate

from ..dag.factory import filter_node_factory

from ..utils.frozendict import FrozenDict, merge
from ..utils.typing import override
from ..schema import Default, StreamType, Auto, FFMpegOptionGroup
from ..common.schema import FFMpegFilterDef
from ..options.framesync import FFMpegFrameSyncOption
from ..options.timeline import FFMpegTimelineOption

from ..options.codec import FFMpegAVCodecContextEncoderOption, FFMpegAVCodecContextDecoderOption


from ..options.format import FFMpegAVFormatContextEncoderOption, FFMpegAVFormatContextDecoderOption


from .channel_layout import CHANNEL_LAYOUT
from ..codecs.schema import FFMpegEncoderOption, FFMpegDecoderOption
from ..formats.schema import FFMpegMuxerOption, FFMpegDemuxerOption

from ..dag.nodes import FilterableStream, FilterNode, OutputStream, OutputNode, InputNode, GlobalNode, GlobalStream







if TYPE_CHECKING:
    from .video import VideoStream


class AudioStream(FilterableStream):
    """
    Audio stream.
    """





    def a3dscope(

    self,




    *,
    rate: Video_rate = Default('25'),size: Image_size = Default('hd720'),fov: Float = Default('90'),roll: Float = Default('0'),pitch: Float = Default('0'),yaw: Float = Default('0'),xzoom: Float = Default('1'),xpos: Float = Default('0'),length: Int = Default('15'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to 3d scope video output.

The filter accepts the following options:


Args:
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is hd720.
    fov: Set the camera field of view. Default is 90 degrees. Allowed range is from 40 to 150.
    roll: Set the camera roll.
    pitch: Set the camera pitch.
    yaw: Set the camera yaw.
    xzoom: Set the camera zoom on X-axis.
    xpos: Set the camera position on X-axis.
    length: Set the length of displayed audio waves in number of frames.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#a3dscope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='a3dscope', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "rate": rate,

                "size": size,

                "fov": fov,

                "roll": roll,

                "pitch": pitch,

                "yaw": yaw,

                "xzoom": xzoom,

                "xpos": xpos,

                "length": length,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def abench(

    self,




    *,
    action: Int| Literal["start","stop"] | Default = Default('start'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Benchmark part of a filtergraph.

The filter accepts the following options:


Args:
    action: Start or stop a timer. Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bench)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='abench', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "action": action,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def abitscope(

    self,




    *,
    rate: Video_rate = Default('25'),size: Image_size = Default('1024x256'),colors: String = Default('red|green|blue|yellow|orange|lime|pink|magenta|brown'),mode: Int| Literal["bars","trace"] | Default = Default('bars'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output, displaying the audio bit scope.

The filter accepts the following options:


Args:
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 1024x256.
    colors: Specify list of colors separated by space or by '|' which will be used to draw channels. Unrecognized or missing colors will be replaced by white color.
    mode: Set output mode. Can be bars or trace. Default is bars.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#abitscope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='abitscope', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "rate": rate,

                "size": size,

                "colors": colors,

                "mode": mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def acompressor(

    self,




    *,
    level_in: Double = Default('1'),mode: Int| Literal["downward","upward"] | Default = Default('downward'),threshold: Double = Default('0.125'),ratio: Double = Default('2'),attack: Double = Default('20'),release: Double = Default('250'),makeup: Double = Default('1'),knee: Double = Default('2.82843'),link: Int| Literal["average","maximum"] | Default = Default('average'),detection: Int| Literal["peak","rms"] | Default = Default('rms'),level_sc: Double = Default('1'),mix: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

A compressor is mainly used to reduce the dynamic range of a signal.
Especially modern music is mostly compressed at a high ratio to
improve the overall loudness. It's done to get the highest attention
of a listener, "fatten" the sound and bring more "power" to the track.
If a signal is compressed too much it may sound dull or "dead"
afterwards or it may start to "pump" (which could be a powerful effect
but can also destroy a track completely).
The right compression is the key to reach a professional sound and is
the high art of mixing and mastering. Because of its complex settings
it may take a long time to get the right feeling for this kind of effect.

Compression is done by detecting the volume above a chosen level
threshold and dividing it by the factor set with ratio.
So if you set the threshold to -12dB and your signal reaches -6dB a ratio
of 2:1 will result in a signal at -9dB. Because an exact manipulation of
the signal would cause distortion of the waveform the reduction can be
levelled over the time. This is done by setting "Attack" and "Release".
attack determines how long the signal has to rise above the threshold
before any reduction will occur and release sets the time the signal
has to fall below the threshold to reduce the reduction again. Shorter signals
than the chosen attack time will be left untouched.
The overall reduction of the signal can be made up afterwards with the
makeup setting. So compressing the peaks of a signal about 6dB and
raising the makeup to this level results in a signal twice as loud than the
source. To gain a softer entry in the compression the knee flattens the
hard edge at the threshold in the range of the chosen decibels.

The filter accepts the following options:


Args:
    level_in: Set input gain. Default is 1. Range is between 0.015625 and 64.
    mode: Set mode of compressor operation. Can be upward or downward. Default is downward.
    threshold: If a signal of stream rises above this level it will affect the gain reduction. By default it is 0.125. Range is between 0.00097563 and 1.
    ratio: Set a ratio by which the signal is reduced. 1:2 means that if the level rose 4dB above the threshold, it will be only 2dB above after the reduction. Default is 2. Range is between 1 and 20.
    attack: Amount of milliseconds the signal has to rise above the threshold before gain reduction starts. Default is 20. Range is between 0.01 and 2000.
    release: Amount of milliseconds the signal has to fall below the threshold before reduction is decreased again. Default is 250. Range is between 0.01 and 9000.
    makeup: Set the amount by how much signal will be amplified after processing. Default is 1. Range is from 1 to 64.
    knee: Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.82843. Range is between 1 and 8.
    link: Choose if the average level between all channels of input stream or the louder(maximum) channel of input stream affects the reduction. Default is average.
    detection: Should the exact signal be taken in case of peak or an RMS one in case of rms. Default is rms which is mostly smoother.
    level_sc: set sidechain gain (from 0.015625 to 64) (default 1)
    mix: How much to use compressed signal in output. Default is 1. Range is between 0 and 1.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acompressor)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acompressor', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "mode": mode,

                "threshold": threshold,

                "ratio": ratio,

                "attack": attack,

                "release": release,

                "makeup": makeup,

                "knee": knee,

                "link": link,

                "detection": detection,

                "level_sc": level_sc,

                "mix": mix,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def acontrast(

    self,




    *,
    contrast: Float = Default('33'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Simple audio dynamic range compression/expansion filter.

The filter accepts the following options:


Args:
    contrast: Set contrast. Default is 33. Allowed range is between 0 and 100.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acontrast)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acontrast', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "contrast": contrast,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def acopy(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Copy the input audio source unchanged to the output. This is mainly useful for
testing purposes.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acopy)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acopy', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def acrossfade(

    self,







        _crossfade1: AudioStream,




    *,
    nb_samples: Int = Default('44100'),duration: Duration = Default('0'),overlap: Boolean = Default('true'),curve1: Int| Literal["nofade","tri","qsin","esin","hsin","log","ipar","qua","cub","squ","cbr","par","exp","iqsin","ihsin","dese","desi","losi","sinc","isinc","quat","quatr","qsin2","hsin2"] | Default = Default('tri'),curve2: Int| Literal["nofade","tri","qsin","esin","hsin","log","ipar","qua","cub","squ","cbr","par","exp","iqsin","ihsin","dese","desi","losi","sinc","isinc","quat","quatr","qsin2","hsin2"] | Default = Default('tri'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply cross fade from one input audio stream to another input audio stream.
The cross fade is applied for specified duration near the end of first stream.

The filter accepts the following options:


Args:
    nb_samples: Specify the number of samples for which the cross fade effect has to last. At the end of the cross fade effect the first input audio will be completely silent. Default is 44100.
    duration: Specify the duration of the cross fade effect. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
    overlap: Should first stream end overlap with second stream start. Default is enabled.
    curve1: Set curve for cross fade transition for first stream.
    curve2: Set curve for cross fade transition for second stream. For description of available curve types see afade filter description.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acrossfade)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acrossfade', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _crossfade1,




            **merge({

                "nb_samples": nb_samples,

                "duration": duration,

                "overlap": overlap,

                "curve1": curve1,

                "curve2": curve2,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def acrossover(

    self,




    *,
    split: String = Default('500'),order: Int| Literal["2nd","4th","6th","8th","10th","12th","14th","16th","18th","20th"] | Default = Default('4th'),level: Float = Default('1'),gain: String = Default('1.f'),precision: Int| Literal["auto","float","double"] | Default = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Split audio stream into several bands.

This filter splits audio stream into two or more frequency ranges.
Summing all streams back will give flat output.

The filter accepts the following options:


Args:
    split: Set split frequencies. Those must be positive and increasing.
    order: Set filter order for each band split. This controls filter roll-off or steepness of filter transfer function. Available values are: @end table Default is 4th.
    level: Set input gain level. Allowed range is from 0 to 1. Default value is 1.
    gain: set output bands gain (default "1.f")
    precision: Set which precision to use when processing samples. @end table Default value is auto.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acrossover)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acrossover', typings_input=('audio',), typings_output="[StreamType.audio] * len(re.split(r'[ |]+', str(split)))"),

            self,




            **merge({

                "split": split,

                "order": order,

                "level": level,

                "gain": gain,

                "precision": precision,

            },
            extra_options,


            )
        )

        return filter_node







    def acrusher(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),bits: Double = Default('8'),mix: Double = Default('0.5'),mode: Int| Literal["lin","log"] | Default = Default('lin'),dc: Double = Default('1'),aa: Double = Default('0.5'),samples: Double = Default('1'),lfo: Boolean = Default('false'),lforange: Double = Default('20'),lforate: Double = Default('0.3'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Reduce audio bit resolution.

This filter is bit crusher with enhanced functionality. A bit crusher
is used to audibly reduce number of bits an audio signal is sampled
with. This doesn't change the bit depth at all, it just produces the
effect. Material reduced in bit depth sounds more harsh and "digital".
This filter is able to even round to continuous values instead of discrete
bit depths.
Additionally it has a D/C offset which results in different crushing of
the lower and the upper half of the signal.
An Anti-Aliasing setting is able to produce "softer" crushing sounds.

Another feature of this filter is the logarithmic mode.
This setting switches from linear distances between bits to logarithmic ones.
The result is a much more "natural" sounding crusher which doesn't gate low
signals for example. The human ear has a logarithmic perception,
so this kind of crushing is much more pleasant.
Logarithmic crushing is also able to get anti-aliased.

The filter accepts the following options:


Args:
    level_in: Set level in.
    level_out: Set level out.
    bits: Set bit reduction.
    mix: Set mixing amount.
    mode: Can be linear: lin or logarithmic: log.
    dc: Set DC.
    aa: Set anti-aliasing.
    samples: Set sample reduction.
    lfo: Enable LFO. By default disabled.
    lforange: Set LFO range.
    lforate: Set LFO rate.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acrusher)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acrusher', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "bits": bits,

                "mix": mix,

                "mode": mode,

                "dc": dc,

                "aa": aa,

                "samples": samples,

                "lfo": lfo,

                "lforange": lforange,

                "lforate": lforate,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def acue(

    self,




    *,
    cue: Int64 = Default('0'),preroll: Duration = Default('0'),buffer: Duration = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Delay audio filtering until a given wallclock timestamp. See the cue
filter.


Args:
    cue: cue unix timestamp in microseconds (from 0 to I64_MAX) (default 0)
    preroll: preroll duration in seconds (default 0)
    buffer: buffer duration in seconds (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#acue)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='acue', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "cue": cue,

                "preroll": preroll,

                "buffer": buffer,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)









    def adeclick(

    self,




    *,
    window: Double = Default('55'),overlap: Double = Default('75'),arorder: Double = Default('2'),threshold: Double = Default('2'),burst: Double = Default('2'),method: Int| Literal["add","a","save","s"] | Default = Default('add'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Remove impulsive noise from input audio.

Samples detected as impulsive noise are replaced by interpolated samples using
autoregressive modelling.


Args:
    window: Set window size, in milliseconds. Allowed range is from 10 to 100. Default value is 55 milliseconds. This sets size of window which will be processed at once.
    overlap: Set window overlap, in percentage of window size. Allowed range is from 50 to 95. Default value is 75 percent. Setting this to a very high value increases impulsive noise removal but makes whole process much slower.
    arorder: Set autoregression order, in percentage of window size. Allowed range is from 0 to 25. Default value is 2 percent. This option also controls quality of interpolated samples using neighbour good samples.
    threshold: Set threshold value. Allowed range is from 1 to 100. Default value is 2. This controls the strength of impulsive noise which is going to be removed. The lower value, the more samples will be detected as impulsive noise.
    burst: Set burst fusion, in percentage of window size. Allowed range is 0 to 10. Default value is 2. If any two samples detected as noise are spaced less than this value then any sample between those two samples will be also detected as noise.
    method: Set overlap method. It accepts the following values: @end table Default value is a.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adeclick)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adeclick', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "window": window,

                "overlap": overlap,

                "arorder": arorder,

                "threshold": threshold,

                "burst": burst,

                "method": method,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adeclip(

    self,




    *,
    window: Double = Default('55'),overlap: Double = Default('75'),arorder: Double = Default('8'),threshold: Double = Default('10'),hsize: Int = Default('1000'),method: Int| Literal["add","a","save","s"] | Default = Default('add'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Remove clipped samples from input audio.

Samples detected as clipped are replaced by interpolated samples using
autoregressive modelling.


Args:
    window: Set window size, in milliseconds. Allowed range is from 10 to 100. Default value is 55 milliseconds. This sets size of window which will be processed at once.
    overlap: Set window overlap, in percentage of window size. Allowed range is from 50 to 95. Default value is 75 percent.
    arorder: Set autoregression order, in percentage of window size. Allowed range is from 0 to 25. Default value is 8 percent. This option also controls quality of interpolated samples using neighbour good samples.
    threshold: Set threshold value. Allowed range is from 1 to 100. Default value is 10. Higher values make clip detection less aggressive.
    hsize: Set size of histogram used to detect clips. Allowed range is from 100 to 9999. Default value is 1000. Higher values make clip detection less aggressive.
    method: Set overlap method. It accepts the following values: @end table Default value is a.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adeclip)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adeclip', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "window": window,

                "overlap": overlap,

                "arorder": arorder,

                "threshold": threshold,

                "hsize": hsize,

                "method": method,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adecorrelate(

    self,




    *,
    stages: Int = Default('6'),seed: Int64 = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply decorrelation to input audio stream.

The filter accepts the following options:


Args:
    stages: Set decorrelation stages of filtering. Allowed range is from 1 to 16. Default value is 6.
    seed: Set random seed used for setting delay in samples across channels.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adecorrelate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adecorrelate', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "stages": stages,

                "seed": seed,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adelay(

    self,




    *,
    delays: String = Default(None),all: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Delay one or more audio channels.

Samples in delayed channel are filled with silence.

The filter accepts the following option:


Args:
    delays: Set list of delays in milliseconds for each channel separated by '|'. Unused delays will be silently ignored. If number of given delays is smaller than number of channels all remaining channels will not be delayed. If you want to delay exact number of samples, append 'S' to number. If you want instead to delay in seconds, append 's' to number.
    all: Use last set delay for all remaining channels. By default is disabled. This option if enabled changes how option delays is interpreted.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adelay)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adelay', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "delays": delays,

                "all": all,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adenorm(

    self,




    *,
    level: Double = Default('-351'),type: Int| Literal["dc","ac","square","pulse"] | Default = Default('dc'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Remedy denormals in audio by adding extremely low-level noise.

This filter shall be placed before any filter that can produce denormals.

A description of the accepted parameters follows.


Args:
    level: Set level of added noise in dB. Default is -351. Allowed range is from -451 to -90.
    type: Set type of added noise. @end table Default is dc.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adenorm)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adenorm', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level": level,

                "type": type,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aderivative(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Compute derivative/integral of audio stream.

Applying both filters one after another produces original audio.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aderivative)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aderivative', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adrawgraph(

    self,




    *,
    m1: String = Default(''),fg1: String = Default('0xffff0000'),m2: String = Default(''),fg2: String = Default('0xff00ff00'),m3: String = Default(''),fg3: String = Default('0xffff00ff'),m4: String = Default(''),fg4: String = Default('0xffffff00'),bg: Color = Default('white'),min: Float = Default('-1'),max: Float = Default('1'),mode: Int| Literal["bar","dot","line"] | Default = Default('line'),slide: Int| Literal["frame","replace","scroll","rscroll","picture"] | Default = Default('frame'),size: Image_size = Default('900x256'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a graph using input audio metadata.

See drawgraph


Args:
    m1: set 1st metadata key (default "")
    fg1: set 1st foreground color expression (default "0xffff0000")
    m2: set 2nd metadata key (default "")
    fg2: set 2nd foreground color expression (default "0xff00ff00")
    m3: set 3rd metadata key (default "")
    fg3: set 3rd foreground color expression (default "0xffff00ff")
    m4: set 4th metadata key (default "")
    fg4: set 4th foreground color expression (default "0xffffff00")
    bg: set background color (default "white")
    min: set minimal value (from INT_MIN to INT_MAX) (default -1)
    max: set maximal value (from INT_MIN to INT_MAX) (default 1)
    mode: set graph mode (from 0 to 2) (default line)
    slide: set slide mode (from 0 to 4) (default frame)
    size: set graph size (default "900x256")
    rate: set video rate (default "25")
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adrawgraph)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adrawgraph', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "m1": m1,

                "fg1": fg1,

                "m2": m2,

                "fg2": fg2,

                "m3": m3,

                "fg3": fg3,

                "m4": m4,

                "fg4": fg4,

                "bg": bg,

                "min": min,

                "max": max,

                "mode": mode,

                "slide": slide,

                "size": size,

                "rate": rate,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def adrc(

    self,




    *,
    transfer: String = Default('p'),attack: Double = Default('50'),release: Double = Default('100'),channels: String = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply spectral dynamic range controller filter to input audio stream.

A description of the accepted options follows.


Args:
    transfer: Set the transfer expression. The expression can contain the following constants: @end table Default value is p.
    attack: Set the attack in milliseconds. Default is 50 milliseconds. Allowed range is from 1 to 1000 milliseconds.
    release: Set the release in milliseconds. Default is 100 milliseconds. Allowed range is from 5 to 2000 milliseconds.
    channels: Set which channels to filter, by default all channels in audio stream are filtered.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adrc)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adrc', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "transfer": transfer,

                "attack": attack,

                "release": release,

                "channels": channels,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adynamicequalizer(

    self,




    *,
    threshold: Double = Default('0'),dfrequency: Double = Default('1000'),dqfactor: Double = Default('1'),tfrequency: Double = Default('1000'),tqfactor: Double = Default('1'),attack: Double = Default('20'),release: Double = Default('200'),ratio: Double = Default('1'),makeup: Double = Default('0'),range: Double = Default('50'),mode: Int| Literal["listen","cut","boost"] | Default = Default('cut'),dftype: Int| Literal["bandpass","lowpass","highpass","peak"] | Default = Default('bandpass'),tftype: Int| Literal["bell","lowshelf","highshelf"] | Default = Default('bell'),direction: Int| Literal["downward","upward"] | Default = Default('downward'),auto: Int| Literal["disabled","off","on"] | Default = Default('disabled'),precision: Int| Literal["auto","float","double"] | Default = Default('auto'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply dynamic equalization to input audio stream.

A description of the accepted options follows.


Args:
    threshold: Set the detection threshold used to trigger equalization. Threshold detection is using detection filter. Default value is 0. Allowed range is from 0 to 100.
    dfrequency: Set the detection frequency in Hz used for detection filter used to trigger equalization. Default value is 1000 Hz. Allowed range is between 2 and 1000000 Hz.
    dqfactor: Set the detection resonance factor for detection filter used to trigger equalization. Default value is 1. Allowed range is from 0.001 to 1000.
    tfrequency: Set the target frequency of equalization filter. Default value is 1000 Hz. Allowed range is between 2 and 1000000 Hz.
    tqfactor: Set the target resonance factor for target equalization filter. Default value is 1. Allowed range is from 0.001 to 1000.
    attack: Set the amount of milliseconds the signal from detection has to rise above the detection threshold before equalization starts. Default is 20. Allowed range is between 1 and 2000.
    release: Set the amount of milliseconds the signal from detection has to fall below the detection threshold before equalization ends. Default is 200. Allowed range is between 1 and 2000.
    ratio: Set the ratio by which the equalization gain is raised. Default is 1. Allowed range is between 0 and 30.
    makeup: Set the makeup offset by which the equalization gain is raised. Default is 0. Allowed range is between 0 and 100.
    range: Set the max allowed cut/boost amount. Default is 50. Allowed range is from 1 to 200.
    mode: Set the mode of filter operation, can be one of the following: @end table Default mode is cut.
    dftype: Set the type of detection filter, can be one of the following: @end table Default type is bandpass.
    tftype: Set the type of target filter, can be one of the following: @end table Default type is bell.
    direction: Set processing direction relative to threshold. @end table Default direction is downward.
    auto: Automatically gather threshold from detection filter. By default is disabled. This option is useful to detect threshold in certain time frame of input audio stream, in such case option value is changed at runtime. Available values are: @end table
    precision: Set which precision to use when processing samples. @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adynamicequalizer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adynamicequalizer', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "threshold": threshold,

                "dfrequency": dfrequency,

                "dqfactor": dqfactor,

                "tfrequency": tfrequency,

                "tqfactor": tqfactor,

                "attack": attack,

                "release": release,

                "ratio": ratio,

                "makeup": makeup,

                "range": range,

                "mode": mode,

                "dftype": dftype,

                "tftype": tftype,

                "direction": direction,

                "auto": auto,

                "precision": precision,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def adynamicsmooth(

    self,




    *,
    sensitivity: Double = Default('2'),basefreq: Double = Default('22050'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply dynamic smoothing to input audio stream.

A description of the accepted options follows.


Args:
    sensitivity: Set an amount of sensitivity to frequency fluctations. Default is 2. Allowed range is from 0 to 1e+06.
    basefreq: Set a base frequency for smoothing. Default value is 22050. Allowed range is from 2 to 1e+06.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#adynamicsmooth)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='adynamicsmooth', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "sensitivity": sensitivity,

                "basefreq": basefreq,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aecho(

    self,




    *,
    in_gain: Float = Default('0.6'),out_gain: Float = Default('0.3'),delays: String = Default('1000'),decays: String = Default('0.5'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply echoing to the input audio.

Echoes are reflected sound and can occur naturally amongst mountains
(and sometimes large buildings) when talking or shouting; digital echo
effects emulate this behaviour and are often used to help fill out the
sound of a single instrument or vocal. The time difference between the
original signal and the reflection is the delay, and the
loudness of the reflected signal is the decay.
Multiple echoes can have different delays and decays.

A description of the accepted parameters follows.


Args:
    in_gain: Set input gain of reflected signal. Default is 0.6.
    out_gain: Set output gain of reflected signal. Default is 0.3.
    delays: Set list of time intervals in milliseconds between original signal and reflections separated by '|'. Allowed range for each delay is (0 - 90000.0]. Default is 1000.
    decays: Set list of loudness of reflected signals separated by '|'. Allowed range for each decay is (0 - 1.0]. Default is 0.5.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aecho)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aecho', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "in_gain": in_gain,

                "out_gain": out_gain,

                "delays": delays,

                "decays": decays,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def aemphasis(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),mode: Int| Literal["reproduction","production"] | Default = Default('reproduction'),type: Int| Literal["col","emi","bsi","riaa","cd","50fm","75fm","50kf","75kf"] | Default = Default('cd'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Audio emphasis filter creates or restores material directly taken from LPs or
emphased CDs with different filter curves. E.g. to store music on vinyl the
signal has to be altered by a filter first to even out the disadvantages of
this recording medium.
Once the material is played back the inverse filter has to be applied to
restore the distortion of the frequency response.

The filter accepts the following options:


Args:
    level_in: Set input gain.
    level_out: Set output gain.
    mode: Set filter mode. For restoring material use reproduction mode, otherwise use production mode. Default is reproduction mode.
    type: Set filter type. Selects medium. Can be one of the following: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aemphasis)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aemphasis', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "mode": mode,

                "type": type,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aeval(

    self,




    *,
    exprs: String = Default(None),channel_layout: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Modify an audio signal according to the specified expressions.

This filter accepts one or more expressions (one for each channel),
which are evaluated and used to modify a corresponding audio signal.

It accepts the following parameters:


Args:
    exprs: Set the '|'-separated expressions list for each separate channel. If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels.
    channel_layout: Set output channel layout. If not specified, the channel layout is specified by the number of expressions. If set to same, it will use by default the same input channel layout.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aeval)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aeval', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "exprs": exprs,

                "channel_layout": channel_layout,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def aexciter(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),amount: Double = Default('1'),drive: Double = Default('8.5'),blend: Double = Default('0'),freq: Double = Default('7500'),ceil: Double = Default('9999'),listen: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

An exciter is used to produce high sound that is not present in the
original signal. This is done by creating harmonic distortions of the
signal which are restricted in range and added to the original signal.
An Exciter raises the upper end of an audio signal without simply raising
the higher frequencies like an equalizer would do to create a more
"crisp" or "brilliant" sound.

The filter accepts the following options:


Args:
    level_in: Set input level prior processing of signal. Allowed range is from 0 to 64. Default value is 1.
    level_out: Set output level after processing of signal. Allowed range is from 0 to 64. Default value is 1.
    amount: Set the amount of harmonics added to original signal. Allowed range is from 0 to 64. Default value is 1.
    drive: Set the amount of newly created harmonics. Allowed range is from 0.1 to 10. Default value is 8.5.
    blend: Set the octave of newly created harmonics. Allowed range is from -10 to 10. Default value is 0.
    freq: Set the lower frequency limit of producing harmonics in Hz. Allowed range is from 2000 to 12000 Hz. Default is 7500 Hz.
    ceil: Set the upper frequency limit of producing harmonics. Allowed range is from 9999 to 20000 Hz. If value is lower than 10000 Hz no limit is applied.
    listen: Mute the original signal and output only added harmonics. By default is disabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aexciter)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aexciter', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "amount": amount,

                "drive": drive,

                "blend": blend,

                "freq": freq,

                "ceil": ceil,

                "listen": listen,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def afade(

    self,




    *,
    type: Int| Literal["in","out"] | Default = Default('in'),start_sample: Int64 = Default('0'),nb_samples: Int64 = Default('44100'),start_time: Duration = Default('0'),duration: Duration = Default('0'),curve: Int| Literal["nofade","tri","qsin","esin","hsin","log","ipar","qua","cub","squ","cbr","par","exp","iqsin","ihsin","dese","desi","losi","sinc","isinc","quat","quatr","qsin2","hsin2"] | Default = Default('tri'),silence: Double = Default('0'),unity: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply fade-in/out effect to input audio.

A description of the accepted parameters follows.


Args:
    type: Specify the effect type, can be either in for fade-in, or out for a fade-out effect. Default is in.
    start_sample: Specify the number of the start sample for starting to apply the fade effect. Default is 0.
    nb_samples: Specify the number of samples for which the fade effect has to last. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. Default is 44100.
    start_time: Specify the start time of the fade effect. Default is 0. The value must be specified as a time duration; see the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If set this option is used instead of start_sample.
    duration: Specify the duration of the fade effect. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. At the end of the fade-in effect the output audio will have the same volume as the input audio, at the end of the fade-out transition the output audio will be silence. By default the duration is determined by nb_samples. If set this option is used instead of nb_samples.
    curve: Set curve for fade transition. It accepts the following values: @end table
    silence: Set the initial gain for fade-in or final gain for fade-out. Default value is 0.0.
    unity: Set the initial gain for fade-out or final gain for fade-in. Default value is 1.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afade)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afade', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "type": type,

                "start_sample": start_sample,

                "nb_samples": nb_samples,

                "start_time": start_time,

                "duration": duration,

                "curve": curve,

                "silence": silence,

                "unity": unity,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def afftdn(

    self,




    *,
    noise_reduction: Float = Default('12'),noise_floor: Float = Default('-50'),noise_type: Int| Literal["white","w","vinyl","v","shellac","s","custom","c"] | Default = Default('white'),band_noise: String = Default(None),residual_floor: Float = Default('-38'),track_noise: Boolean = Default('false'),track_residual: Boolean = Default('false'),output_mode: Int| Literal["input","i","output","o","noise","n"] | Default = Default('output'),adaptivity: Float = Default('0.5'),floor_offset: Float = Default('1'),noise_link: Int| Literal["none","min","max","average"] | Default = Default('min'),band_multiplier: Float = Default('1.25'),sample_noise: Int| Literal["none","start","begin","stop","end"] | Default = Default('none'),gain_smooth: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Denoise audio samples with FFT.

A description of the accepted parameters follows.


Args:
    noise_reduction: Set the noise reduction in dB, allowed range is 0.01 to 97. Default value is 12 dB.
    noise_floor: Set the noise floor in dB, allowed range is -80 to -20. Default value is -50 dB.
    noise_type: Set the noise type. It accepts the following values: @end table
    band_noise: Set custom band noise profile for every one of 15 bands. Bands are separated by ' ' or '|'.
    residual_floor: Set the residual floor in dB, allowed range is -80 to -20. Default value is -38 dB.
    track_noise: Enable noise floor tracking. By default is disabled. With this enabled, noise floor is automatically adjusted.
    track_residual: Enable residual tracking. By default is disabled.
    output_mode: Set the output mode. It accepts the following values: @end table
    adaptivity: Set the adaptivity factor, used how fast to adapt gains adjustments per each frequency bin. Value 0 enables instant adaptation, while higher values react much slower. Allowed range is from 0 to 1. Default value is 0.5.
    floor_offset: Set the noise floor offset factor. This option is used to adjust offset applied to measured noise floor. It is only effective when noise floor tracking is enabled. Allowed range is from -2.0 to 2.0. Default value is 1.0.
    noise_link: Set the noise link used for multichannel audio. It accepts the following values: @end table
    band_multiplier: Set the band multiplier factor, used how much to spread bands across frequency bins. Allowed range is from 0.2 to 5. Default value is 1.25.
    sample_noise: Toggle capturing and measurement of noise profile from input audio. It accepts the following values: @end table
    gain_smooth: Set gain smooth spatial radius, used to smooth gains applied to each frequency bin. Useful to reduce random music noise artefacts. Higher values increases smoothing of gains. Allowed range is from 0 to 50. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afftdn)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afftdn', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "noise_reduction": noise_reduction,

                "noise_floor": noise_floor,

                "noise_type": noise_type,

                "band_noise": band_noise,

                "residual_floor": residual_floor,

                "track_noise": track_noise,

                "track_residual": track_residual,

                "output_mode": output_mode,

                "adaptivity": adaptivity,

                "floor_offset": floor_offset,

                "noise_link": noise_link,

                "band_multiplier": band_multiplier,

                "sample_noise": sample_noise,

                "gain_smooth": gain_smooth,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def afftfilt(

    self,




    *,
    real: String = Default('re'),imag: String = Default('im'),win_size: Int = Default('4096'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),overlap: Float = Default('0.75'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply arbitrary expressions to samples in frequency domain.


Args:
    real: Set frequency domain real expression for each separate channel separated by '|'. Default is "re". If the number of input channels is greater than the number of expressions, the last specified expression is used for the remaining output channels.
    imag: Set frequency domain imaginary expression for each separate channel separated by '|'. Default is "im". Each expression in real and imag can contain the following constants and functions: @end table
    win_size: Set window size. Allowed range is from 16 to 131072. Default is 4096
    win_func: Set window function. It accepts the following values: @end table Default is hann.
    overlap: Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.75.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afftfilt)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afftfilt', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "real": real,

                "imag": imag,

                "win_size": win_size,

                "win_func": win_func,

                "overlap": overlap,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def afifo(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Buffer input images and send them when they are requested.

It is mainly useful when auto-inserted by the libavfilter
framework.

It does not take parameters.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fifo)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afifo', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)











    def aformat(

    self,




    *,
    sample_fmts: String = Default(None),sample_rates: String = Default(None),channel_layouts: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Set output format constraints for the input audio. The framework will
negotiate the most appropriate format to minimize conversions.

It accepts the following parameters:


Args:
    sample_fmts: A '|'-separated list of requested sample formats.
    sample_rates: A '|'-separated list of requested sample rates.
    channel_layouts: A '|'-separated list of requested channel layouts. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aformat)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aformat', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "sample_fmts": sample_fmts,

                "sample_rates": sample_rates,

                "channel_layouts": channel_layouts,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def afreqshift(

    self,




    *,
    shift: Double = Default('0'),level: Double = Default('1'),order: Int = Default('8'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply frequency shift to input audio samples.

The filter accepts the following options:


Args:
    shift: Specify frequency shift. Allowed range is -INT_MAX to INT_MAX. Default value is 0.0.
    level: Set output gain applied to final output. Allowed range is from 0.0 to 1.0. Default value is 1.0.
    order: Set filter order used for filtering. Allowed range is from 1 to 16. Default value is 8.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afreqshift)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afreqshift', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "shift": shift,

                "level": level,

                "order": order,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def afwtdn(

    self,




    *,
    sigma: Double = Default('0'),levels: Int = Default('10'),wavet: Int| Literal["sym2","sym4","rbior68","deb10","sym10","coif5","bl3"] | Default = Default('sym10'),percent: Double = Default('85'),profile: Boolean = Default('false'),adaptive: Boolean = Default('false'),samples: Int = Default('8192'),softness: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Reduce broadband noise from input samples using Wavelets.

A description of the accepted options follows.


Args:
    sigma: Set the noise sigma, allowed range is from 0 to 1. Default value is 0. This option controls strength of denoising applied to input samples. Most useful way to set this option is via decibels, eg. -45dB.
    levels: Set the number of wavelet levels of decomposition. Allowed range is from 1 to 12. Default value is 10. Setting this too low make denoising performance very poor.
    wavet: Set wavelet type for decomposition of input frame. They are sorted by number of coefficients, from lowest to highest. More coefficients means worse filtering speed, but overall better quality. Available wavelets are: @end table
    percent: Set percent of full denoising. Allowed range is from 0 to 100 percent. Default value is 85 percent or partial denoising.
    profile: If enabled, first input frame will be used as noise profile. If first frame samples contain non-noise performance will be very poor.
    adaptive: If enabled, input frames are analyzed for presence of noise. If noise is detected with high possibility then input frame profile will be used for processing following frames, until new noise frame is detected.
    samples: Set size of single frame in number of samples. Allowed range is from 512 to 65536. Default frame size is 8192 samples.
    softness: Set softness applied inside thresholding function. Allowed range is from 0 to 10. Default softness is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afwtdn)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='afwtdn', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "sigma": sigma,

                "levels": levels,

                "wavet": wavet,

                "percent": percent,

                "profile": profile,

                "adaptive": adaptive,

                "samples": samples,

                "softness": softness,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def agate(

    self,




    *,
    level_in: Double = Default('1'),mode: Int| Literal["downward","upward"] | Default = Default('downward'),range: Double = Default('0.06125'),threshold: Double = Default('0.125'),ratio: Double = Default('2'),attack: Double = Default('20'),release: Double = Default('250'),makeup: Double = Default('1'),knee: Double = Default('2.82843'),detection: Int| Literal["peak","rms"] | Default = Default('rms'),link: Int| Literal["average","maximum"] | Default = Default('average'),level_sc: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

A gate is mainly used to reduce lower parts of a signal. This kind of signal
processing reduces disturbing noise between useful signals.

Gating is done by detecting the volume below a chosen level threshold
and dividing it by the factor set with ratio. The bottom of the noise
floor is set via range. Because an exact manipulation of the signal
would cause distortion of the waveform the reduction can be levelled over
time. This is done by setting attack and release.

attack determines how long the signal has to fall below the threshold
before any reduction will occur and release sets the time the signal
has to rise above the threshold to reduce the reduction again.
Shorter signals than the chosen attack time will be left untouched.


Args:
    level_in: Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64.
    mode: Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced.
    range: Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander.
    threshold: If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1.
    ratio: Set a ratio by which the signal is reduced. Default is 2. Allowed range is from 1 to 9000.
    attack: Amount of milliseconds the signal has to rise above the threshold before gain reduction stops. Default is 20 milliseconds. Allowed range is from 0.01 to 9000.
    release: Amount of milliseconds the signal has to fall below the threshold before the reduction is increased again. Default is 250 milliseconds. Allowed range is from 0.01 to 9000.
    makeup: Set amount of amplification of signal after processing. Default is 1. Allowed range is from 1 to 64.
    knee: Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.828427125. Allowed range is from 1 to 8.
    detection: Choose if exact signal should be taken for detection or an RMS like one. Default is rms. Can be peak or rms.
    link: Choose if the average level between all channels or the louder channel affects the reduction. Default is average. Can be average or maximum.
    level_sc: set sidechain gain (from 0.015625 to 64) (default 1)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#agate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='agate', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "mode": mode,

                "range": range,

                "threshold": threshold,

                "ratio": ratio,

                "attack": attack,

                "release": release,

                "makeup": makeup,

                "knee": knee,

                "detection": detection,

                "link": link,

                "level_sc": level_sc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def agraphmonitor(

    self,




    *,
    size: Image_size = Default('hd720'),opacity: Float = Default('0.9'),mode: Flags| Literal["full","compact","nozero","noeof","nodisabled"] | Default = Default('0'),flags: Flags| Literal["none","all","queue","frame_count_in","frame_count_out","frame_count_delta","pts","pts_delta","time","time_delta","timebase","format","size","rate","eof","sample_count_in","sample_count_out","sample_count_delta","disabled"] | Default = Default('all+queue'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

See graphmonitor.


Args:
    size: set monitor size (default "hd720")
    opacity: set video opacity (from 0 to 1) (default 0.9)
    mode: set mode (default 0)
    flags: set flags (default all+queue)
    rate: set video rate (default "25")
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#agraphmonitor)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='agraphmonitor', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "opacity": opacity,

                "mode": mode,

                "flags": flags,

                "rate": rate,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def ahistogram(

    self,




    *,
    dmode: Int| Literal["single","separate"] | Default = Default('single'),rate: Video_rate = Default('25'),size: Image_size = Default('hd720'),scale: Int| Literal["log","sqrt","cbrt","lin","rlog"] | Default = Default('log'),ascale: Int| Literal["log","lin"] | Default = Default('log'),acount: Int = Default('1'),rheight: Float = Default('0.1'),slide: Int| Literal["replace","scroll"] | Default = Default('replace'),hmode: Int| Literal["abs","sign"] | Default = Default('abs'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output, displaying the volume histogram.

The filter accepts the following options:


Args:
    dmode: Specify how histogram is calculated. It accepts the following values: @end table Default is single.
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is hd720.
    scale: Set display scale. It accepts the following values: @end table Default is log.
    ascale: Set amplitude scale. It accepts the following values: @end table Default is log.
    acount: Set how much frames to accumulate in histogram. Default is 1. Setting this to -1 accumulates all frames.
    rheight: Set histogram ratio of window height.
    slide: Set sonogram sliding. It accepts the following values: @end table Default is replace.
    hmode: Set histogram mode. It accepts the following values: @end table Default is abs.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ahistogram)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ahistogram', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "dmode": dmode,

                "rate": rate,

                "size": size,

                "scale": scale,

                "ascale": ascale,

                "acount": acount,

                "rheight": rheight,

                "slide": slide,

                "hmode": hmode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def aiir(

    self,




    *,
    zeros: String = Default('1+0i 1-0i'),poles: String = Default('1+0i 1-0i'),gains: String = Default('1|1'),dry: Double = Default('1'),wet: Double = Default('1'),format: Int| Literal["ll","sf","tf","zp","pr","pd","sp"] | Default = Default('zp'),process: Int| Literal["d","s","p"] | Default = Default('s'),precision: Int| Literal["dbl","flt","i32","i16"] | Default = Default('dbl'),e: Int| Literal["dbl","flt","i32","i16"] | Default = Default('dbl'),normalize: Boolean = Default('true'),mix: Double = Default('1'),response: Boolean = Default('false'),channel: Int = Default('0'),size: Image_size = Default('hd720'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Apply an arbitrary Infinite Impulse Response filter.

It accepts the following parameters:


Args:
    zeros: Set B/numerator/zeros/reflection coefficients.
    poles: Set A/denominator/poles/ladder coefficients.
    gains: Set channels gains.
    dry: set dry gain (from 0 to 1) (default 1)
    wet: set wet gain (from 0 to 1) (default 1)
    format: Set coefficients format. @end table
    process: Set type of processing. @end table
    precision: Set filtering precision. @end table
    e: Set filtering precision. @end table
    normalize: Normalize filter coefficients, by default is enabled. Enabling it will normalize magnitude response at DC to 0dB.
    mix: How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
    response: Show IR frequency response, magnitude(magenta), phase(green) and group delay(yellow) in additional video stream. By default it is disabled.
    channel: Set for which IR channel to display frequency response. By default is first channel displayed. This option is used only when response is enabled.
    size: Set video stream size. This option is used only when response is enabled.
    rate: set video rate (default "25")
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aiir)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aiir', typings_input=('audio',), typings_output='[StreamType.audio] + [StreamType.video] if response else []'),

            self,




            **merge({

                "zeros": zeros,

                "poles": poles,

                "gains": gains,

                "dry": dry,

                "wet": wet,

                "format": format,

                "process": process,

                "precision": precision,

                "e": e,

                "normalize": normalize,

                "mix": mix,

                "response": response,

                "channel": channel,

                "size": size,

                "rate": rate,

            },
            extra_options,


            )
        )

        return filter_node







    def aintegral(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Compute derivative/integral of audio stream.

Applying both filters one after another produces original audio.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aderivative)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aintegral', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def alatency(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Measure filtering latency.

Report previous filter filtering latency, delay in number of audio samples for audio filters
or number of video frames for video filters.

On end of input stream, filter will report min and max measured latency for previous running filter
in filtergraph.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#latency)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='alatency', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def alimiter(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),limit: Double = Default('1'),attack: Double = Default('5'),release: Double = Default('50'),asc: Boolean = Default('false'),asc_level: Double = Default('0.5'),level: Boolean = Default('true'),latency: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

The limiter prevents an input signal from rising over a desired threshold.
This limiter uses lookahead technology to prevent your signal from distorting.
It means that there is a small delay after the signal is processed. Keep in mind
that the delay it produces is the attack time you set.

The filter accepts the following options:


Args:
    level_in: Set input gain. Default is 1.
    level_out: Set output gain. Default is 1.
    limit: Don't let signals above this level pass the limiter. Default is 1.
    attack: The limiter will reach its attenuation level in this amount of time in milliseconds. Default is 5 milliseconds.
    release: Come back from limiting to attenuation 1.0 in this amount of milliseconds. Default is 50 milliseconds.
    asc: When gain reduction is always needed ASC takes care of releasing to an average reduction level rather than reaching a reduction of 0 in the release time.
    asc_level: Select how much the release time is affected by ASC, 0 means nearly no changes in release time while 1 produces higher release times.
    level: Auto level output signal. Default is enabled. This normalizes audio back to 0dB if enabled.
    latency: Compensate the delay introduced by using the lookahead buffer set with attack parameter. Also flush the valid audio data in the lookahead buffer when the stream hits EOF.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#alimiter)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='alimiter', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "limit": limit,

                "attack": attack,

                "release": release,

                "asc": asc,

                "asc_level": asc_level,

                "level": level,

                "latency": latency,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def allpass(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.707'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),order: Int = Default('2'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a two-pole all-pass filter with central frequency (in Hz)
frequency, and filter-width width.
An all-pass filter changes the audio's frequency to phase relationship
without changing its frequency to amplitude relationship.

The filter accepts the following options:


Args:
    frequency: Change allpass frequency. Syntax for the command is : "frequency"
    width_type: Change allpass width_type. Syntax for the command is : "width_type"
    width: Change allpass width. Syntax for the command is : "width"
    mix: Change allpass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    order: Set the filter order, can be 1 or 2. Default is 2.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allpass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='allpass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "order": order,

                "transform": transform,

                "precision": precision,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)











    def aloop(

    self,




    *,
    loop: Int = Default('0'),size: Int64 = Default('0'),start: Int64 = Default('0'),time: Duration = Default('INT64_MAX'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Loop audio samples.

The filter accepts the following options:


Args:
    loop: Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0.
    size: Set maximal number of samples. Default is 0.
    start: Set first sample of loop. Default is 0.
    time: Set the time of loop start in seconds. Only used if option named start is set to -1.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aloop)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aloop', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "loop": loop,

                "size": size,

                "start": start,

                "time": time,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)













    def ametadata(

    self,




    *,
    mode: Int| Literal["select","add","modify","delete","print"] | Default = Default('select'),key: String = Default(None),value: String = Default(None),function: Int| Literal["same_str","starts_with","less","equal","greater","expr","ends_with"] | Default = Default('same_str'),expr: String = Default(None),file: String = Default(None),direct: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Manipulate frame metadata.

This filter accepts the following options:


Args:
    mode: Set mode of operation of the filter. Can be one of the following: @end table
    key: Set key used with all modes. Must be set for all modes except print and delete.
    value: Set metadata value which will be used. This option is mandatory for modify and add mode.
    function: Which function to use when comparing metadata value and value. Can be one of following: @end table
    expr: Set expression which is used when function is set to expr. The expression is evaluated through the eval API and can contain the following constants: @end table
    file: If specified in print mode, output is written to the named file. Instead of plain filename any writable url can be specified. Filename ``-'' is a shorthand for standard output. If file option is not set, output is written to the log with AV_LOG_INFO loglevel.
    direct: Reduces buffering in print mode when output is written to a URL set using file.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#metadata)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ametadata', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "mode": mode,

                "key": key,

                "value": value,

                "function": function,

                "expr": expr,

                "file": file,

                "direct": direct,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)













    def amultiply(

    self,







        _multiply1: AudioStream,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Multiply first audio stream with second audio stream and store result
in output audio stream. Multiplication is done by multiplying each
sample from first stream with sample at same position from second stream.

With this element-wise multiplication one can create amplitude fades and
amplitude modulations.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#amultiply)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='amultiply', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _multiply1,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def anequalizer(

    self,




    *,
    params: String = Default(''),curves: Boolean = Default('false'),size: Image_size = Default('hd720'),mgain: Double = Default('60'),fscale: Int| Literal["lin","log"] | Default = Default('log'),colors: String = Default('red|green|blue|yellow|orange|lime|pink|magenta|brown'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

High-order parametric multiband equalizer for each channel.

It accepts the following parameters:


Args:
    params: This option string is in format: "cchn f=cf w=w g=g t=f | ..." Each equalizer band is separated by '|'. @end table
    curves: With this option activated frequency response of anequalizer is displayed in video stream.
    size: Set video stream size. Only useful if curves option is activated.
    mgain: Set max gain that will be displayed. Only useful if curves option is activated. Setting this to a reasonable value makes it possible to display gain which is derived from neighbour bands which are too close to each other and thus produce higher gain when both are activated.
    fscale: Set frequency scale used to draw frequency response in video output. Can be linear or logarithmic. Default is logarithmic.
    colors: Set color for each channel curve which is going to be displayed in video stream. This is list of color names separated by space or by '|'. Unrecognised or missing colors will be replaced by white color.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anequalizer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='anequalizer', typings_input=('audio',), typings_output='[StreamType.audio] + [StreamType.video] if curves else []'),

            self,




            **merge({

                "params": params,

                "curves": curves,

                "size": size,

                "mgain": mgain,

                "fscale": fscale,

                "colors": colors,

            },
            extra_options,


            timeline_options,

            )
        )

        return filter_node







    def anlmdn(

    self,




    *,
    strength: Float = Default('1e-05'),patch: Duration = Default('0.002'),research: Duration = Default('0.006'),output: Int| Literal["i","o","n"] | Default = Default('o'),smooth: Float = Default('11'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Reduce broadband noise in audio samples using Non-Local Means algorithm.

Each sample is adjusted by looking for other samples with similar contexts. This
context similarity is defined by comparing their surrounding patches of size
p. Patches are searched in an area of r around the sample.

The filter accepts the following options:


Args:
    strength: Set denoising strength. Allowed range is from 0.00001 to 10000. Default value is 0.00001.
    patch: Set patch radius duration. Allowed range is from 1 to 100 milliseconds. Default value is 2 milliseconds.
    research: Set research radius duration. Allowed range is from 2 to 300 milliseconds. Default value is 6 milliseconds.
    output: Set the output mode. It accepts the following values: @end table
    smooth: Set smooth factor. Default value is 11. Allowed range is from 1 to 1000.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anlmdn)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='anlmdn', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "strength": strength,

                "patch": patch,

                "research": research,

                "output": output,

                "smooth": smooth,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def anlmf(

    self,







        _desired: AudioStream,




    *,
    order: Int = Default('256'),mu: Float = Default('0.75'),eps: Float = Default('1'),leakage: Float = Default('0'),out_mode: Int| Literal["i","d","o","n","e"] | Default = Default('o'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply Normalized Least-Mean-(Squares|Fourth) algorithm to the first audio stream using the second audio stream.

This adaptive filter is used to mimic a desired filter by finding the filter coefficients that
relate to producing the least mean square of the error signal (difference between the desired,
2nd input audio stream and the actual signal, the 1st input audio stream).

A description of the accepted options follows.


Args:
    order: Set filter order.
    mu: Set filter mu.
    eps: Set the filter eps.
    leakage: Set the filter leakage.
    out_mode: It accepts the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anlmf)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='anlmf', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _desired,




            **merge({

                "order": order,

                "mu": mu,

                "eps": eps,

                "leakage": leakage,

                "out_mode": out_mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def anlms(

    self,







        _desired: AudioStream,




    *,
    order: Int = Default('256'),mu: Float = Default('0.75'),eps: Float = Default('1'),leakage: Float = Default('0'),out_mode: Int| Literal["i","d","o","n","e"] | Default = Default('o'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply Normalized Least-Mean-(Squares|Fourth) algorithm to the first audio stream using the second audio stream.

This adaptive filter is used to mimic a desired filter by finding the filter coefficients that
relate to producing the least mean square of the error signal (difference between the desired,
2nd input audio stream and the actual signal, the 1st input audio stream).

A description of the accepted options follows.


Args:
    order: Set filter order.
    mu: Set filter mu.
    eps: Set the filter eps.
    leakage: Set the filter leakage.
    out_mode: It accepts the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anlmf)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='anlms', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _desired,




            **merge({

                "order": order,

                "mu": mu,

                "eps": eps,

                "leakage": leakage,

                "out_mode": out_mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def anull(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Pass the audio source unchanged to the output.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anull)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='anull', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)











    def apad(

    self,




    *,
    packet_size: Int = Default('4096'),pad_len: Int64 = Default('-1'),whole_len: Int64 = Default('-1'),pad_dur: Duration = Default('-0.000001'),whole_dur: Duration = Default('-0.000001'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Pad the end of an audio stream with silence.

This can be used together with ffmpeg -shortest to
extend audio streams to the same length as the video stream.

A description of the accepted options follows.


Args:
    packet_size: Set silence packet size. Default value is 4096.
    pad_len: Set the number of samples of silence to add to the end. After the value is reached, the stream is terminated. This option is mutually exclusive with whole_len.
    whole_len: Set the minimum total number of samples in the output audio stream. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_len.
    pad_dur: Specify the duration of samples of silence to add. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-negative value.
    whole_dur: Specify the minimum total duration in the output audio stream. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Used only if set to non-negative value. If the value is longer than the input audio length, silence is added to the end, until the value is reached. This option is mutually exclusive with pad_dur
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#apad)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='apad', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "packet_size": packet_size,

                "pad_len": pad_len,

                "whole_len": whole_len,

                "pad_dur": pad_dur,

                "whole_dur": whole_dur,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aperms(

    self,




    *,
    mode: Int| Literal["none","ro","rw","toggle","random"] | Default = Default('none'),seed: Int64 = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Set read/write permissions for the output frames.

These filters are mainly aimed at developers to test direct path in the
following filter in the filtergraph.

The filters accept the following options:


Args:
    mode: Select the permissions mode. It accepts the following values: @end table
    seed: Set the seed for the random mode, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#perms)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aperms', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "mode": mode,

                "seed": seed,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aphasemeter(

    self,




    *,
    rate: Video_rate = Default('25'),size: Image_size = Default('800x400'),rc: Int = Default('2'),gc: Int = Default('7'),bc: Int = Default('1'),mpc: String = Default('none'),video: Boolean = Default('true'),phasing: Boolean = Default('false'),tolerance: Float = Default('0'),angle: Float = Default('170'),duration: Duration = Default('2'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Measures phase of input audio, which is exported as metadata lavfi.aphasemeter.phase,
representing mean phase of current audio frame. A video output can also be produced and is
enabled by default. The audio is passed through as first output.

Audio will be rematrixed to stereo if it has a different channel layout. Phase value is in
range [-1, 1] where -1 means left and right channels are completely out of phase
and 1 means channels are in phase.

The filter accepts the following options, all related to its video output:


Args:
    rate: Set the output frame rate. Default value is 25.
    size: Set the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 800x400.
    rc: set red contrast (from 0 to 255) (default 2)
    gc: set green contrast (from 0 to 255) (default 7)
    bc: Specify the red, green, blue contrast. Default values are 2, 7 and 1. Allowed range is [0, 255].
    mpc: Set color which will be used for drawing median phase. If color is none which is default, no median phase value will be drawn.
    video: Enable video output. Default is enabled.
    phasing: Enable mono and out of phase detection. Default is disabled.
    tolerance: Set phase tolerance for mono detection, in amplitude ratio. Default is 0. Allowed range is [0, 1].
    angle: Set angle threshold for out of phase detection, in degree. Default is 170. Allowed range is [90, 180].
    duration: Set mono or out of phase duration until notification, expressed in seconds. Default is 2.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aphasemeter)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aphasemeter', typings_input=('audio',), typings_output='[StreamType.audio] + ([StreamType.video] if video else [])'),

            self,




            **merge({

                "rate": rate,

                "size": size,

                "rc": rc,

                "gc": gc,

                "bc": bc,

                "mpc": mpc,

                "video": video,

                "phasing": phasing,

                "tolerance": tolerance,

                "angle": angle,

                "duration": duration,

            },
            extra_options,


            )
        )

        return filter_node







    def aphaser(

    self,




    *,
    in_gain: Double = Default('0.4'),out_gain: Double = Default('0.74'),delay: Double = Default('3'),decay: Double = Default('0.4'),speed: Double = Default('0.5'),type: Int| Literal["triangular","t","sinusoidal","s"] | Default = Default('triangular'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Add a phasing effect to the input audio.

A phaser filter creates series of peaks and troughs in the frequency spectrum.
The position of the peaks and troughs are modulated so that they vary over time, creating a sweeping effect.

A description of the accepted parameters follows.


Args:
    in_gain: Set input gain. Default is 0.4.
    out_gain: Set output gain. Default is 0.74
    delay: Set delay in milliseconds. Default is 3.0.
    decay: Set decay. Default is 0.4.
    speed: Set modulation speed in Hz. Default is 0.5.
    type: Set modulation type. Default is triangular. It accepts the following values: @end table
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aphaser)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aphaser', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "in_gain": in_gain,

                "out_gain": out_gain,

                "delay": delay,

                "decay": decay,

                "speed": speed,

                "type": type,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def aphaseshift(

    self,




    *,
    shift: Double = Default('0'),level: Double = Default('1'),order: Int = Default('8'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply phase shift to input audio samples.

The filter accepts the following options:


Args:
    shift: Specify phase shift. Allowed range is from -1.0 to 1.0. Default value is 0.0.
    level: Set output gain applied to final output. Allowed range is from 0.0 to 1.0. Default value is 1.0.
    order: Set filter order used for filtering. Allowed range is from 1 to 16. Default value is 8.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aphaseshift)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aphaseshift', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "shift": shift,

                "level": level,

                "order": order,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def apsnr(

    self,







        _input1: AudioStream,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Measure Audio Peak Signal-to-Noise Ratio.

This filter takes two audio streams for input, and outputs first
audio stream.
Results are in dB per channel at end of either input.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#apsnr)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='apsnr', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _input1,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def apsyclip(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),clip: Double = Default('1'),diff: Boolean = Default('false'),adaptive: Double = Default('0.5'),iterations: Int = Default('10'),level: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply Psychoacoustic clipper to input audio stream.

The filter accepts the following options:


Args:
    level_in: Set input gain. By default it is 1. Range is [0.015625 - 64].
    level_out: Set output gain. By default it is 1. Range is [0.015625 - 64].
    clip: Set the clipping start value. Default value is 0dBFS or 1.
    diff: Output only difference samples, useful to hear introduced distortions. By default is disabled.
    adaptive: Set strength of adaptive distortion applied. Default value is 0.5. Allowed range is from 0 to 1.
    iterations: Set number of iterations of psychoacoustic clipper. Allowed range is from 1 to 20. Default value is 10.
    level: Auto level output signal. Default is disabled. This normalizes audio back to 0dBFS if enabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#apsyclip)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='apsyclip', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "clip": clip,

                "diff": diff,

                "adaptive": adaptive,

                "iterations": iterations,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def apulsator(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),mode: Int| Literal["sine","triangle","square","sawup","sawdown"] | Default = Default('sine'),amount: Double = Default('1'),offset_l: Double = Default('0'),offset_r: Double = Default('0.5'),width: Double = Default('1'),timing: Int| Literal["bpm","ms","hz"] | Default = Default('hz'),bpm: Double = Default('120'),ms: Int = Default('500'),hz: Double = Default('2'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Audio pulsator is something between an autopanner and a tremolo.
But it can produce funny stereo effects as well. Pulsator changes the volume
of the left and right channel based on a LFO (low frequency oscillator) with
different waveforms and shifted phases.
This filter have the ability to define an offset between left and right
channel. An offset of 0 means that both LFO shapes match each other.
The left and right channel are altered equally - a conventional tremolo.
An offset of 50% means that the shape of the right channel is exactly shifted
in phase (or moved backwards about half of the frequency) - pulsator acts as
an autopanner. At 1 both curves match again. Every setting in between moves the
phase shift gapless between all stages and produces some "bypassing" sounds with
sine and triangle waveforms. The more you set the offset near 1 (starting from
the 0.5) the faster the signal passes from the left to the right speaker.

The filter accepts the following options:


Args:
    level_in: Set input gain. By default it is 1. Range is [0.015625 - 64].
    level_out: Set output gain. By default it is 1. Range is [0.015625 - 64].
    mode: Set waveform shape the LFO will use. Can be one of: sine, triangle, square, sawup or sawdown. Default is sine.
    amount: Set modulation. Define how much of original signal is affected by the LFO.
    offset_l: Set left channel offset. Default is 0. Allowed range is [0 - 1].
    offset_r: Set right channel offset. Default is 0.5. Allowed range is [0 - 1].
    width: Set pulse width. Default is 1. Allowed range is [0 - 2].
    timing: Set possible timing mode. Can be one of: bpm, ms or hz. Default is hz.
    bpm: Set bpm. Default is 120. Allowed range is [30 - 300]. Only used if timing is set to bpm.
    ms: Set ms. Default is 500. Allowed range is [10 - 2000]. Only used if timing is set to ms.
    hz: Set frequency in Hz. Default is 2. Allowed range is [0.01 - 100]. Only used if timing is set to hz.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#apulsator)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='apulsator', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "mode": mode,

                "amount": amount,

                "offset_l": offset_l,

                "offset_r": offset_r,

                "width": width,

                "timing": timing,

                "bpm": bpm,

                "ms": ms,

                "hz": hz,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def arealtime(

    self,




    *,
    limit: Duration = Default('2'),speed: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Slow down filtering to match real time approximately.

These filters will pause the filtering for a variable amount of time to
match the output rate with the input timestamps.
They are similar to the re option to ffmpeg.

They accept the following options:


Args:
    limit: Time limit for the pauses. Any pause longer than that will be considered a timestamp discontinuity and reset the timer. Default is 2 seconds.
    speed: Speed factor for processing. The value must be a float larger than zero. Values larger than 1.0 will result in faster than realtime processing, smaller will slow processing down. The limit is automatically adapted accordingly. Default is 1.0. A processing speed faster than what is possible without these filters cannot be achieved.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#realtime)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='arealtime', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "limit": limit,

                "speed": speed,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def aresample(

    self,




    *,
    sample_rate: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Resample the input audio to the specified parameters, using the
libswresample library. If none are specified then the filter will
automatically convert between its input and output.

This filter is also able to stretch/squeeze the audio data to make it match
the timestamps or to inject silence / cut out audio to make it match the
timestamps, do a combination of both or do neither.

The filter accepts the syntax
[sample_rate:]resampler_options, where sample_rate
expresses a sample rate and resampler_options is a list of
key=value pairs, separated by ":". See the
"Resampler Options" section in the
ffmpeg-resampler(1) manual
for the complete list of supported options.


Args:
    sample_rate: (from 0 to INT_MAX) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aresample)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aresample', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "sample_rate": sample_rate,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def areverse(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Reverse an audio clip.

Warning: This filter requires memory to buffer the entire clip, so trimming
is suggested.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#areverse)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='areverse', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def arls(

    self,







        _desired: AudioStream,




    *,
    order: Int = Default('16'),_lambda: Float = Default('1'),delta: Float = Default('2'),out_mode: Int| Literal["i","d","o","n","e"] | Default = Default('o'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply Recursive Least Squares algorithm to the first audio stream using the second audio stream.

This adaptive filter is used to mimic a desired filter by recursively finding the filter coefficients that
relate to producing the minimal weighted linear least squares cost function of the error signal (difference
between the desired, 2nd input audio stream and the actual signal, the 1st input audio stream).

A description of the accepted options follows.


Args:
    order: Set the filter order.
    _lambda: Set the forgetting factor.
    delta: Set the coefficient to initialize internal covariance matrix.
    out_mode: Set the filter output samples. It accepts the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#arls)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='arls', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _desired,




            **merge({

                "order": order,

                "lambda": _lambda,

                "delta": delta,

                "out_mode": out_mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def arnndn(

    self,




    *,
    model: String = Default(None),mix: Float = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Reduce noise from speech using Recurrent Neural Networks.

This filter accepts the following options:


Args:
    model: Set train model file to load. This option is always required.
    mix: Set how much to mix filtered samples into final output. Allowed range is from -1 to 1. Default value is 1. Negative values are special, they set how much to keep filtered noise in the final filter output. Set this option to -1 to hear actual noise removed from input signal.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#arnndn)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='arnndn', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "model": model,

                "mix": mix,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asdr(

    self,







        _input1: AudioStream,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Measure Audio Signal-to-Distortion Ratio.

This filter takes two audio streams for input, and outputs first
audio stream.
Results are in dB per channel at end of either input.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asdr)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asdr', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _input1,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asegment(

    self,




    *,
    timestamps: String = Default(None),samples: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Split single input stream into multiple streams.

This filter does opposite of concat filters.

segment works on video frames, asegment on audio samples.

This filter accepts the following options:


Args:
    timestamps: Timestamps of output segments separated by '|'. The first segment will run from the beginning of the input stream. The last segment will run until the end of the input stream
    samples: Exact frame/sample count to split the segments.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#segment)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asegment', typings_input=('audio',), typings_output="[StreamType.audio] * len(str(timestamps or samples).split('|'))"),

            self,




            **merge({

                "timestamps": timestamps,

                "samples": samples,

            },
            extra_options,


            )
        )

        return filter_node







    def aselect(

    self,




    *,
    expr: String = Default('1'),outputs: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Select frames to pass in output.

This filter accepts the following options:


Args:
    expr: Set expression, which is evaluated for each input frame. If the expression is evaluated to zero, the frame is discarded. If the evaluation result is negative or NaN, the frame is sent to the first output; otherwise it is sent to the output with index ceil(val)-1, assuming that the input index starts from 0. For example a value of 1.2 corresponds to the output with index ceil(1.2)-1 = 2-1 = 1, that is the second output.
    outputs: Set the number of outputs. The output to which to send the selected frame is based on the result of the evaluation. Default value is 1.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#select)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aselect', typings_input=('audio',), typings_output='[StreamType.audio] * int(outputs)'),

            self,




            **merge({

                "expr": expr,

                "outputs": outputs,

            },
            extra_options,


            )
        )

        return filter_node







    def asendcmd(

    self,




    *,
    commands: String = Default(None),filename: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Send commands to filters in the filtergraph.

These filters read commands to be sent to other filters in the
filtergraph.

sendcmd must be inserted between two video filters,
asendcmd must be inserted between two audio filters, but apart
from that they act the same way.

The specification of commands can be provided in the filter arguments
with the commands option, or in a file specified by the
filename option.

These filters accept the following options:


Args:
    commands: Set the commands to be read and sent to the other filters.
    filename: Set the filename of the commands to be read and sent to the other filters.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sendcmd)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asendcmd', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "commands": commands,

                "filename": filename,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def asetnsamples(

    self,




    *,
    nb_out_samples: Int = Default('1024'),pad: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Set the number of samples per each output audio frame.

The last output packet may contain a different number of samples, as
the filter will flush all the remaining samples when the input audio
signals its end.

The filter accepts the following options:


Args:
    nb_out_samples: Set the number of frames per each output audio frame. The number is intended as the number of samples per each channel. Default value is 1024.
    pad: If set to 1, the filter will pad the last audio frame with zeroes, so that the last frame will contain the same number of samples as the previous ones. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asetnsamples)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asetnsamples', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "nb_out_samples": nb_out_samples,

                "pad": pad,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asetpts(

    self,




    *,
    expr: String = Default('PTS'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Change the PTS (presentation timestamp) of the input frames.

setpts works on video frames, asetpts on audio frames.

This filter accepts the following options:


Args:
    expr: The expression which is evaluated for each frame to construct its timestamp.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setpts)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asetpts', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "expr": expr,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def asetrate(

    self,




    *,
    sample_rate: Int = Default('44100'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Set the sample rate without altering the PCM data.
This will result in a change of speed and pitch.

The filter accepts the following options:


Args:
    sample_rate: Set the output sample rate. Default is 44100 Hz.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asetrate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asetrate', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "sample_rate": sample_rate,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def asettb(

    self,




    *,
    expr: String = Default('intb'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Set the timebase to use for the output frames timestamps.
It is mainly useful for testing timebase configuration.

It accepts the following parameters:


Args:
    expr: The expression which is evaluated into the output timebase.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#settb)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asettb', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "expr": expr,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def ashowinfo(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Show a line containing various information for each input audio frame.
The input audio is not modified.

The shown line contains a sequence of key/value pairs of the form
key:value.

The following values are shown in the output:


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ashowinfo)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ashowinfo', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def asidedata(

    self,




    *,
    mode: Int| Literal["select","delete"] | Default = Default('select'),type: Int| Literal["PANSCAN","A53_CC","STEREO3D","MATRIXENCODING","DOWNMIX_INFO","REPLAYGAIN","DISPLAYMATRIX","AFD","MOTION_VECTORS","SKIP_SAMPLES","AUDIO_SERVICE_TYPE","MASTERING_DISPLAY_METADATA","GOP_TIMECODE","SPHERICAL","CONTENT_LIGHT_LEVEL","ICC_PROFILE","S12M_TIMECOD","DYNAMIC_HDR_PLUS","REGIONS_OF_INTEREST","DETECTION_BOUNDING_BOXES","SEI_UNREGISTERED"] | Default = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Delete frame side data, or select frames based on it.

This filter accepts the following options:


Args:
    mode: Set mode of operation of the filter. Can be one of the following: @end table
    type: Set side data type used with all modes. Must be set for select mode. For the list of frame side data types, refer to the AVFrameSideDataType enum in libavutil/frame.h. For example, to choose AV_FRAME_DATA_PANSCAN side data, you must specify PANSCAN.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sidedata)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asidedata', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "mode": mode,

                "type": type,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asisdr(

    self,







        _input1: AudioStream,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Measure Audio Scaled-Invariant Signal-to-Distortion Ratio.

This filter takes two audio streams for input, and outputs first
audio stream.
Results are in dB per channel at end of either input.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asisdr)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asisdr', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _input1,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asoftclip(

    self,




    *,
    type: Int| Literal["hard","tanh","atan","cubic","exp","alg","quintic","sin","erf"] | Default = Default('tanh'),threshold: Double = Default('1'),output: Double = Default('1'),param: Double = Default('1'),oversample: Int = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply audio soft clipping.

Soft clipping is a type of distortion effect where the amplitude of a signal is saturated
along a smooth curve, rather than the abrupt shape of hard-clipping.

This filter accepts the following options:


Args:
    type: Set type of soft-clipping. It accepts the following values: @end table
    threshold: Set threshold from where to start clipping. Default value is 0dB or 1.
    output: Set gain applied to output. Default value is 0dB or 1.
    param: Set additional parameter which controls sigmoid function.
    oversample: Set oversampling factor.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asoftclip)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asoftclip', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "type": type,

                "threshold": threshold,

                "output": output,

                "param": param,

                "oversample": oversample,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def aspectralstats(

    self,




    *,
    win_size: Int = Default('2048'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),overlap: Float = Default('0.5'),measure: Flags| Literal["none","all","mean","variance","centroid","spread","skewness","kurtosis","entropy","flatness","crest","flux","slope","decrease","rolloff"] | Default = Default('all+mean+variance+centroid+spread+skewness+kurtosis+entropy+flatness+crest+flux+slope+decrease+rolloff'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Display frequency domain statistical information about the audio channels.
Statistics are calculated and stored as metadata for each audio channel and for each audio frame.

It accepts the following option:


Args:
    win_size: Set the window length in samples. Default value is 2048. Allowed range is from 32 to 65536.
    win_func: Set window function. It accepts the following values: @end table Default is hann.
    overlap: Set window overlap. Allowed range is from 0 to 1. Default value is 0.5.
    measure: Select the parameters which are measured. The metadata keys can be used as flags, default is all which measures everything. none disables all measurement.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aspectralstats)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='aspectralstats', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "win_size": win_size,

                "win_func": win_func,

                "overlap": overlap,

                "measure": measure,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def asplit(

    self,




    *,
    outputs: Int = Default('2'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Split input into several identical outputs.

asplit works with audio input, split with video.

The filter accepts a single parameter which specifies the number of outputs. If
unspecified, it defaults to 2.


Args:
    outputs: set number of outputs (from 1 to INT_MAX) (default 2)
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#split)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asplit', typings_input=('audio',), typings_output='[StreamType.audio] * int(outputs)'),

            self,




            **merge({

                "outputs": outputs,

            },
            extra_options,


            )
        )

        return filter_node









    def astats(

    self,




    *,
    length: Double = Default('0.05'),metadata: Boolean = Default('false'),reset: Int = Default('0'),measure_perchannel: Flags| Literal["none","all","Bit_depth","Crest_factor","DC_offset","Dynamic_range","Entropy","Flat_factor","Max_difference","Max_level","Mean_difference","Min_difference","Min_level","Noise_floor","Noise_floor_count","Number_of_Infs","Number_of_NaNs","Number_of_denormals","Number_of_samples","Peak_count","Peak_level","RMS_difference","RMS_level","RMS_peak","RMS_trough","Zero_crossings","Zero_crossings_rate","Abs_Peak_count"] | Default = Default('all+Bit_depth+Crest_factor+DC_offset+Dynamic_range+Entropy+Flat_factor+Max_difference+Max_level+Mean_difference+Min_difference+Min_level+Noise_floor+Noise_floor_count+Number_of_Infs+Number_of_NaNs+Number_of_denormals+Number_of_samples+Peak_count+Peak_level+RMS_difference+RMS_level+RMS_peak+RMS_trough+Zero_crossings+Zero_crossings_rate+Abs_Peak_count'),measure_overall: Flags| Literal["none","all","Bit_depth","Crest_factor","DC_offset","Dynamic_range","Entropy","Flat_factor","Max_difference","Max_level","Mean_difference","Min_difference","Min_level","Noise_floor","Noise_floor_count","Number_of_Infs","Number_of_NaNs","Number_of_denormals","Number_of_samples","Peak_count","Peak_level","RMS_difference","RMS_level","RMS_peak","RMS_trough","Zero_crossings","Zero_crossings_rate","Abs_Peak_count"] | Default = Default('all+Bit_depth+Crest_factor+DC_offset+Dynamic_range+Entropy+Flat_factor+Max_difference+Max_level+Mean_difference+Min_difference+Min_level+Noise_floor+Noise_floor_count+Number_of_Infs+Number_of_NaNs+Number_of_denormals+Number_of_samples+Peak_count+Peak_level+RMS_difference+RMS_level+RMS_peak+RMS_trough+Zero_crossings+Zero_crossings_rate+Abs_Peak_count'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Display time domain statistical information about the audio channels.
Statistics are calculated and displayed for each audio channel and,
where applicable, an overall figure is also given.

It accepts the following option:


Args:
    length: Short window length in seconds, used for peak and trough RMS measurement. Default is 0.05 (50 milliseconds). Allowed range is [0 - 10].
    metadata: Set metadata injection. All the metadata keys are prefixed with lavfi.astats.X, where X is channel number starting from 1 or string Overall. Default is disabled. Available keys for each channel are: Bit_depth Crest_factor DC_offset Dynamic_range Entropy Flat_factor Max_difference Max_level Mean_difference Min_difference Min_level Noise_floor Noise_floor_count Number_of_Infs Number_of_NaNs Number_of_denormals Peak_count Abs_Peak_count Peak_level RMS_difference RMS_peak RMS_trough Zero_crossings Zero_crossings_rate and for Overall: Bit_depth DC_offset Entropy Flat_factor Max_difference Max_level Mean_difference Min_difference Min_level Noise_floor Noise_floor_count Number_of_Infs Number_of_NaNs Number_of_denormals Number_of_samples Peak_count Abs_Peak_count Peak_level RMS_difference RMS_level RMS_peak RMS_trough For example, a full key looks like lavfi.astats.1.DC_offset or lavfi.astats.Overall.Peak_count. Read below for the description of the keys.
    reset: Set the number of frames over which cumulative stats are calculated before being reset. Default is disabled.
    measure_perchannel: Select the parameters which are measured per channel. The metadata keys can be used as flags, default is all which measures everything. none disables all per channel measurement.
    measure_overall: Select the parameters which are measured overall. The metadata keys can be used as flags, default is all which measures everything. none disables all overall measurement.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#astats)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='astats', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "length": length,

                "metadata": metadata,

                "reset": reset,

                "measure_perchannel": measure_perchannel,

                "measure_overall": measure_overall,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)









    def asubboost(

    self,




    *,
    dry: Double = Default('1'),wet: Double = Default('1'),boost: Double = Default('2'),decay: Double = Default('0'),feedback: Double = Default('0.9'),cutoff: Double = Default('100'),slope: Double = Default('0.5'),delay: Double = Default('20'),channels: String = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost subwoofer frequencies.

The filter accepts the following options:


Args:
    dry: Set dry gain, how much of original signal is kept. Allowed range is from 0 to 1. Default value is 1.0.
    wet: Set wet gain, how much of filtered signal is kept. Allowed range is from 0 to 1. Default value is 1.0.
    boost: Set max boost factor. Allowed range is from 1 to 12. Default value is 2.
    decay: Set delay line decay gain value. Allowed range is from 0 to 1. Default value is 0.0.
    feedback: Set delay line feedback gain value. Allowed range is from 0 to 1. Default value is 0.9.
    cutoff: Set cutoff frequency in Hertz. Allowed range is 50 to 900. Default value is 100.
    slope: Set slope amount for cutoff frequency. Allowed range is 0.0001 to 1. Default value is 0.5.
    delay: Set delay. Allowed range is from 1 to 100. Default value is 20.
    channels: Set the channels to process. Default value is all available.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asubboost)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asubboost', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "dry": dry,

                "wet": wet,

                "boost": boost,

                "decay": decay,

                "feedback": feedback,

                "cutoff": cutoff,

                "slope": slope,

                "delay": delay,

                "channels": channels,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asubcut(

    self,




    *,
    cutoff: Double = Default('20'),order: Int = Default('10'),level: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Cut subwoofer frequencies.

This filter allows to set custom, steeper
roll off than highpass filter, and thus is able to more attenuate
frequency content in stop-band.

The filter accepts the following options:


Args:
    cutoff: Set cutoff frequency in Hertz. Allowed range is 2 to 200. Default value is 20.
    order: Set filter order. Available values are from 3 to 20. Default value is 10.
    level: Set input gain level. Allowed range is from 0 to 1. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asubcut)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asubcut', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "cutoff": cutoff,

                "order": order,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asupercut(

    self,




    *,
    cutoff: Double = Default('20000'),order: Int = Default('10'),level: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Cut super frequencies.

The filter accepts the following options:


Args:
    cutoff: Set cutoff frequency in Hertz. Allowed range is 20000 to 192000. Default value is 20000.
    order: Set filter order. Available values are from 3 to 20. Default value is 10.
    level: Set input gain level. Allowed range is from 0 to 1. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asupercut)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asupercut', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "cutoff": cutoff,

                "order": order,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asuperpass(

    self,




    *,
    centerf: Double = Default('1000'),order: Int = Default('4'),qfactor: Double = Default('1'),level: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply high order Butterworth band-pass filter.

The filter accepts the following options:


Args:
    centerf: Set center frequency in Hertz. Allowed range is 2 to 999999. Default value is 1000.
    order: Set filter order. Available values are from 4 to 20. Default value is 4.
    qfactor: Set Q-factor. Allowed range is from 0.01 to 100. Default value is 1.
    level: Set input gain level. Allowed range is from 0 to 2. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asuperpass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asuperpass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "centerf": centerf,

                "order": order,

                "qfactor": qfactor,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def asuperstop(

    self,




    *,
    centerf: Double = Default('1000'),order: Int = Default('4'),qfactor: Double = Default('1'),level: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply high order Butterworth band-stop filter.

The filter accepts the following options:


Args:
    centerf: Set center frequency in Hertz. Allowed range is 2 to 999999. Default value is 1000.
    order: Set filter order. Available values are from 4 to 20. Default value is 4.
    qfactor: Set Q-factor. Allowed range is from 0.01 to 100. Default value is 1.
    level: Set input gain level. Allowed range is from 0 to 2. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asuperstop)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='asuperstop', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "centerf": centerf,

                "order": order,

                "qfactor": qfactor,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def atempo(

    self,




    *,
    tempo: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Adjust audio tempo.

The filter accepts exactly one parameter, the audio tempo. If not
specified then the filter will assume nominal 1.0 tempo. Tempo must
be in the [0.5, 100.0] range.

Note that tempo greater than 2 will skip some samples rather than
blend them in.  If for any reason this is a concern it is always
possible to daisy-chain several instances of atempo to achieve the
desired product tempo.


Args:
    tempo: Change filter tempo scale factor. Syntax for the command is : "tempo"
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#atempo)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='atempo', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "tempo": tempo,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def atilt(

    self,




    *,
    freq: Double = Default('10000'),slope: Double = Default('0'),width: Double = Default('1000'),order: Int = Default('5'),level: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply spectral tilt filter to audio stream.

This filter apply any spectral roll-off slope over any specified frequency band.

The filter accepts the following options:


Args:
    freq: Set central frequency of tilt in Hz. Default is 10000 Hz.
    slope: Set slope direction of tilt. Default is 0. Allowed range is from -1 to 1.
    width: Set width of tilt. Default is 1000. Allowed range is from 100 to 10000.
    order: Set order of tilt filter.
    level: Set input volume level. Allowed range is from 0 to 4. Defalt is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#atilt)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='atilt', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "freq": freq,

                "slope": slope,

                "width": width,

                "order": order,

                "level": level,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def atrim(

    self,




    *,
    start: Duration = Default('INT64_MAX'),end: Duration = Default('INT64_MAX'),start_pts: Int64 = Default('I64_MIN'),end_pts: Int64 = Default('I64_MIN'),duration: Duration = Default('0'),start_sample: Int64 = Default('-1'),end_sample: Int64 = Default('I64_MAX'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Trim the input so that the output contains one continuous subpart of the input.

It accepts the following parameters:


Args:
    start: Timestamp (in seconds) of the start of the section to keep. I.e. the audio sample with the timestamp start will be the first sample in the output.
    end: Specify time of the first audio sample that will be dropped, i.e. the audio sample immediately preceding the one with the timestamp end will be the last sample in the output.
    start_pts: Same as start, except this option sets the start timestamp in samples instead of seconds.
    end_pts: Same as end, except this option sets the end timestamp in samples instead of seconds.
    duration: The maximum duration of the output in seconds.
    start_sample: The number of the first sample that should be output.
    end_sample: The number of the first sample that should be dropped.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#atrim)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='atrim', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "start": start,

                "end": end,

                "start_pts": start_pts,

                "end_pts": end_pts,

                "duration": duration,

                "start_sample": start_sample,

                "end_sample": end_sample,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def avectorscope(

    self,




    *,
    mode: Int| Literal["lissajous","lissajous_xy","polar"] | Default = Default('lissajous'),rate: Video_rate = Default('25'),size: Image_size = Default('400x400'),rc: Int = Default('40'),gc: Int = Default('160'),bc: Int = Default('80'),ac: Int = Default('255'),rf: Int = Default('15'),gf: Int = Default('10'),bf: Int = Default('5'),af: Int = Default('5'),zoom: Double = Default('1'),draw: Int| Literal["dot","line","aaline"] | Default = Default('dot'),scale: Int| Literal["lin","sqrt","cbrt","log"] | Default = Default('lin'),swap: Boolean = Default('true'),mirror: Int| Literal["none","x","y","xy"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output, representing the audio vector
scope.

The filter is used to measure the difference between channels of stereo
audio stream. A monaural signal, consisting of identical left and right
signal, results in straight vertical line. Any stereo separation is visible
as a deviation from this line, creating a Lissajous figure.
If the straight (or deviation from it) but horizontal line appears this
indicates that the left and right channels are out of phase.

The filter accepts the following options:


Args:
    mode: Set the vectorscope mode. Available values are: @end table Default value is lissajous.
    rate: Set the output frame rate. Default value is 25.
    size: Set the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 400x400.
    rc: set red contrast (from 0 to 255) (default 40)
    gc: set green contrast (from 0 to 255) (default 160)
    bc: set blue contrast (from 0 to 255) (default 80)
    ac: Specify the red, green, blue and alpha contrast. Default values are 40, 160, 80 and 255. Allowed range is [0, 255].
    rf: set red fade (from 0 to 255) (default 15)
    gf: set green fade (from 0 to 255) (default 10)
    bf: set blue fade (from 0 to 255) (default 5)
    af: Specify the red, green, blue and alpha fade. Default values are 15, 10, 5 and 5. Allowed range is [0, 255].
    zoom: Set the zoom factor. Default value is 1. Allowed range is [0, 10]. Values lower than 1 will auto adjust zoom factor to maximal possible value.
    draw: Set the vectorscope drawing mode. Available values are: @end table Default value is dot.
    scale: Specify amplitude scale of audio samples. Available values are: @end table
    swap: Swap left channel axis with right channel axis.
    mirror: Mirror axis. @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#avectorscope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='avectorscope', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "rate": rate,

                "size": size,

                "rc": rc,

                "gc": gc,

                "bc": bc,

                "ac": ac,

                "rf": rf,

                "gf": gf,

                "bf": bf,

                "af": af,

                "zoom": zoom,

                "draw": draw,

                "scale": scale,

                "swap": swap,

                "mirror": mirror,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def axcorrelate(

    self,







        _axcorrelate1: AudioStream,




    *,
    size: Int = Default('256'),algo: Int| Literal["slow","fast","best"] | Default = Default('best'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Calculate normalized windowed cross-correlation between two input audio streams.

Resulted samples are always between -1 and 1 inclusive.
If result is 1 it means two input samples are highly correlated in that selected segment.
Result 0 means they are not correlated at all.
If result is -1 it means two input samples are out of phase, which means they cancel each
other.

The filter accepts the following options:


Args:
    size: Set size of segment over which cross-correlation is calculated. Default is 256. Allowed range is from 2 to 131072.
    algo: Set algorithm for cross-correlation. Can be slow or fast or best. Default is best. Fast algorithm assumes mean values over any given segment are always zero and thus need much less calculations to make. This is generally not true, but is valid for typical audio streams.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#axcorrelate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='axcorrelate', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _axcorrelate1,




            **merge({

                "size": size,

                "algo": algo,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def azmq(

    self,




    *,
    bind_address: String = Default('tcp://*:5555'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Receive commands sent through a libzmq client, and forward them to
filters in the filtergraph.

zmq and azmq work as a pass-through filters. zmq
must be inserted between two video filters, azmq between two
audio filters. Both are capable to send messages to any filter type.

To enable these filters you need to install the libzmq library and
headers and configure FFmpeg with --enable-libzmq.

For more information about libzmq see:
http://www.zeromq.org/

The zmq and azmq filters work as a libzmq server, which
receives messages sent through a network interface defined by the
bind_address (or the abbreviation "b") option.
Default value of this option is tcp://localhost:5555. You may
want to alter this value to your needs, but do not forget to escape any
':' signs (see filtergraph escaping).

The received message must be in the form:
@example
TARGET COMMAND [ARG]
@end example

TARGET specifies the target of the command, usually the name of
the filter class or a specific filter instance name. The default
filter instance name uses the pattern Parsed_<filter_name>_<index>,
but you can override this by using the filter_name@id syntax
(see Filtergraph syntax).

COMMAND specifies the name of the command for the target filter.

ARG is optional and specifies the optional argument list for the
given COMMAND.

Upon reception, the message is processed and the corresponding command
is injected into the filtergraph. Depending on the result, the filter
will send a reply to the client, adopting the format:
@example
ERROR_CODE ERROR_REASON
MESSAGE
@end example

MESSAGE is optional.


Args:
    bind_address: set bind address (default "tcp://*:5555")
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#zmq)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='azmq', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "bind_address": bind_address,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)









    def bandpass(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),csg: Boolean = Default('false'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a two-pole Butterworth band-pass filter with central
frequency frequency, and (3dB-point) band-width width.
The csg option selects a constant skirt gain (peak gain = Q)
instead of the default: constant 0dB peak gain.
The filter roll off at 6dB per octave (20dB per decade).

The filter accepts the following options:


Args:
    frequency: Change bandpass frequency. Syntax for the command is : "frequency"
    width_type: Change bandpass width_type. Syntax for the command is : "width_type"
    width: Change bandpass width. Syntax for the command is : "width"
    csg: Constant skirt gain if set to 1. Defaults to 0.
    mix: Change bandpass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bandpass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bandpass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "csg": csg,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def bandreject(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a two-pole Butterworth band-reject filter with central
frequency frequency, and (3dB-point) band-width width.
The filter roll off at 6dB per octave (20dB per decade).

The filter accepts the following options:


Args:
    frequency: Change bandreject frequency. Syntax for the command is : "frequency"
    width_type: Change bandreject width_type. Syntax for the command is : "width_type"
    width: Change bandreject width. Syntax for the command is : "width"
    mix: Change bandreject mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bandreject)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bandreject', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def bass(

    self,




    *,
    frequency: Double = Default('100'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),gain: Double = Default('0'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost or cut the bass (lower) frequencies of the audio using a two-pole
shelving filter with a response similar to that of a standard
hi-fi's tone-controls. This is also known as shelving equalisation (EQ).

The filter accepts the following options:


Args:
    frequency: Change bass frequency. Syntax for the command is : "frequency"
    width_type: Change bass width_type. Syntax for the command is : "width_type"
    width: Change bass width. Syntax for the command is : "width"
    gain: Change bass gain. Syntax for the command is : "gain"
    poles: Set number of poles. Default is 2.
    mix: Change bass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)













    def biquad(

    self,




    *,
    a0: Double = Default('1'),a1: Double = Default('0'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a biquad IIR filter with the given coefficients.
Where b0, b1, b2 and a0, a1, a2
are the numerator and denominator coefficients respectively.
and channels, c specify which channels to filter, by default all
available are filtered.


Args:
    a0: (from INT_MIN to INT_MAX) (default 1)
    a1: (from INT_MIN to INT_MAX) (default 0)
    mix: How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#biquad)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='biquad', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "a0": a0,

                "a1": a1,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



































    def channelmap(

    self,




    *,
    map: String = Default(None),channel_layout: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Remap input channels to new locations.

It accepts the following parameters:


Args:
    map: Map channels from input to output. The argument is a '|'-separated list of mappings, each in the in_channel-out_channel or in_channel form. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the input channel layout. out_channel is the name of the output channel or its index in the output channel layout. If out_channel is not given then it is implicitly an index, starting with zero and increasing by one for each mapping.
    channel_layout: The channel layout of the output stream.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#channelmap)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='channelmap', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "map": map,

                "channel_layout": channel_layout,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def channelsplit(

    self,




    *,
    channel_layout: String = Default('stereo'),channels: String = Default('all'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Split each channel from an input audio stream into a separate output stream.

It accepts the following parameters:


Args:
    channel_layout: The channel layout of the input stream. The default is "stereo".
    channels: A channel layout describing the channels to be extracted as separate output streams or "all" to extract each input channel as a separate stream. The default is "all". Choosing channels not present in channel layout in the input will result in an error.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#channelsplit)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='channelsplit', typings_input=('audio',), typings_output='[StreamType.audio] * CHANNEL_LAYOUT[str(channel_layout)]'),

            self,




            **merge({

                "channel_layout": channel_layout,

                "channels": channels,

            },
            extra_options,


            )
        )

        return filter_node







    def chorus(

    self,




    *,
    in_gain: Float = Default('0.4'),out_gain: Float = Default('0.4'),delays: String = Default(None),decays: String = Default(None),speeds: String = Default(None),depths: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Add a chorus effect to the audio.

Can make a single vocal sound like a chorus, but can also be applied to instrumentation.

Chorus resembles an echo effect with a short delay, but whereas with echo the delay is
constant, with chorus, it is varied using using sinusoidal or triangular modulation.
The modulation depth defines the range the modulated delay is played before or after
the delay. Hence the delayed sound will sound slower or faster, that is the delayed
sound tuned around the original one, like in a chorus where some vocals are slightly
off key.

It accepts the following parameters:


Args:
    in_gain: Set input gain. Default is 0.4.
    out_gain: Set output gain. Default is 0.4.
    delays: Set delays. A typical delay is around 40ms to 60ms.
    decays: Set decays.
    speeds: Set speeds.
    depths: Set depths.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chorus)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chorus', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "in_gain": in_gain,

                "out_gain": out_gain,

                "delays": delays,

                "decays": decays,

                "speeds": speeds,

                "depths": depths,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)

















































    def compand(

    self,




    *,
    attacks: String = Default('0'),decays: String = Default('0.8'),points: String = Default('-70/-70|-60/-20|1/0'),soft_knee: Double = Default('0.01'),gain: Double = Default('0'),volume: Double = Default('0'),delay: Double = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Compress or expand the audio's dynamic range.

It accepts the following parameters:


Args:
    attacks: set time over which increase of volume is determined (default "0")
    decays: A list of times in seconds for each channel over which the instantaneous level of the input signal is averaged to determine its volume. attacks refers to increase of volume and decays refers to decrease of volume. For most situations, the attack time (response to the audio getting louder) should be shorter than the decay time, because the human ear is more sensitive to sudden loud audio than sudden soft audio. A typical value for attack is 0.3 seconds and a typical value for decay is 0.8 seconds. If specified number of attacks & decays is lower than number of channels, the last set attack/decay will be used for all remaining channels.
    points: A list of points for the transfer function, specified in dB relative to the maximum possible signal amplitude. Each key points list must be defined using the following syntax: x0/y0|x1/y1|x2/y2|.... or x0/y0 x1/y1 x2/y2 .... The input values must be in strictly increasing order but the transfer function does not have to be monotonically rising. The point 0/0 is assumed but may be overridden (by 0/out-dBn). Typical values for the transfer function are -70/-70|-60/-20|1/0.
    soft_knee: Set the curve radius in dB for all joints. It defaults to 0.01.
    gain: Set the additional gain in dB to be applied at all points on the transfer function. This allows for easy adjustment of the overall gain. It defaults to 0.
    volume: Set an initial volume, in dB, to be assumed for each channel when filtering starts. This permits the user to supply a nominal level initially, so that, for example, a very large gain is not applied to initial signal levels before the companding has begun to operate. A typical value for audio which is initially quiet is -90 dB. It defaults to 0.
    delay: Set a delay, in seconds. The input audio is analyzed immediately, but audio is delayed before being fed to the volume adjuster. Specifying a delay approximately equal to the attack/decay times allows the filter to effectively operate in predictive rather than reactive mode. It defaults to 0.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#compand)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='compand', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "attacks": attacks,

                "decays": decays,

                "points": points,

                "soft-knee": soft_knee,

                "gain": gain,

                "volume": volume,

                "delay": delay,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def compensationdelay(

    self,




    *,
    mm: Int = Default('0'),cm: Int = Default('0'),m: Int = Default('0'),dry: Double = Default('0'),wet: Double = Default('1'),temp: Int = Default('20'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Compensation Delay Line is a metric based delay to compensate differing
positions of microphones or speakers.

For example, you have recorded guitar with two microphones placed in
different locations. Because the front of sound wave has fixed speed in
normal conditions, the phasing of microphones can vary and depends on
their location and interposition. The best sound mix can be achieved when
these microphones are in phase (synchronized). Note that a distance of
~30 cm between microphones makes one microphone capture the signal in
antiphase to the other microphone. That makes the final mix sound moody.
This filter helps to solve phasing problems by adding different delays
to each microphone track and make them synchronized.

The best result can be reached when you take one track as base and
synchronize other tracks one by one with it.
Remember that synchronization/delay tolerance depends on sample rate, too.
Higher sample rates will give more tolerance.

The filter accepts the following parameters:


Args:
    mm: Set millimeters distance. This is compensation distance for fine tuning. Default is 0.
    cm: Set cm distance. This is compensation distance for tightening distance setup. Default is 0.
    m: Set meters distance. This is compensation distance for hard distance setup. Default is 0.
    dry: Set dry amount. Amount of unprocessed (dry) signal. Default is 0.
    wet: Set wet amount. Amount of processed (wet) signal. Default is 1.
    temp: Set temperature in degrees Celsius. This is the temperature of the environment. Default is 20.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#compensationdelay)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='compensationdelay', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "mm": mm,

                "cm": cm,

                "m": m,

                "dry": dry,

                "wet": wet,

                "temp": temp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)























    def crossfeed(

    self,




    *,
    strength: Double = Default('0.2'),range: Double = Default('0.5'),slope: Double = Default('0.5'),level_in: Double = Default('0.9'),level_out: Double = Default('1'),block_size: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply headphone crossfeed filter.

Crossfeed is the process of blending the left and right channels of stereo
audio recording.
It is mainly used to reduce extreme stereo separation of low frequencies.

The intent is to produce more speaker like sound to the listener.

The filter accepts the following options:


Args:
    strength: Set strength of crossfeed. Default is 0.2. Allowed range is from 0 to 1. This sets gain of low shelf filter for side part of stereo image. Default is -6dB. Max allowed is -30db when strength is set to 1.
    range: Set soundstage wideness. Default is 0.5. Allowed range is from 0 to 1. This sets cut off frequency of low shelf filter. Default is cut off near 1550 Hz. With range set to 1 cut off frequency is set to 2100 Hz.
    slope: Set curve slope of low shelf filter. Default is 0.5. Allowed range is from 0.01 to 1.
    level_in: Set input gain. Default is 0.9.
    level_out: Set output gain. Default is 1.
    block_size: Set block size used for reverse IIR processing. If this value is set to high enough value (higher than impulse response length truncated when reaches near zero values) filtering will become linear phase otherwise if not big enough it will just produce nasty artifacts. Note that filter delay will be exactly this many samples when set to non-zero value.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#crossfeed)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='crossfeed', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "strength": strength,

                "range": range,

                "slope": slope,

                "level_in": level_in,

                "level_out": level_out,

                "block_size": block_size,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def crystalizer(

    self,




    *,
    i: Float = Default('2'),c: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Simple algorithm for audio noise sharpening.

This filter linearly increases differences betweeen each audio sample.

The filter accepts the following options:


Args:
    i: Sets the intensity of effect (default: 2.0). Must be in range between -10.0 to 0 (unchanged sound) to 10.0 (maximum effect). To inverse filtering use negative value.
    c: Enable clipping. By default is enabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#crystalizer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='crystalizer', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "i": i,

                "c": c,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)















    def dcshift(

    self,




    *,
    shift: Double = Default('0'),limitergain: Double = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a DC shift to the audio.

This can be useful to remove a DC offset (caused perhaps by a hardware problem
in the recording chain) from the audio. The effect of a DC offset is reduced
headroom and hence volume. The astats filter can be used to determine if
a signal has a DC offset.


Args:
    shift: Set the DC shift, allowed range is [-1, 1]. It indicates the amount to shift the audio.
    limitergain: Optional. It should have a value much less than 1 (e.g. 0.05 or 0.02) and is used to prevent clipping.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dcshift)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dcshift', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "shift": shift,

                "limitergain": limitergain,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



















    def deesser(

    self,




    *,
    i: Double = Default('0'),m: Double = Default('0.5'),f: Double = Default('0.5'),s: Int| Literal["i","o","e"] | Default = Default('o'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply de-essing to the audio samples.


Args:
    i: Set intensity for triggering de-essing. Allowed range is from 0 to 1. Default is 0.
    m: Set amount of ducking on treble part of sound. Allowed range is from 0 to 1. Default is 0.5.
    f: How much of original frequency content to keep when de-essing. Allowed range is from 0 to 1. Default is 0.5.
    s: Set the output mode. It accepts the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deesser)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deesser', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "i": i,

                "m": m,

                "f": f,

                "s": s,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



























    def dialoguenhance(

    self,




    *,
    original: Double = Default('1'),enhance: Double = Default('1'),voice: Double = Default('2'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Enhance dialogue in stereo audio.

This filter accepts stereo input and produce surround (3.0) channels output.
The newly produced front center channel have enhanced speech dialogue originally
available in both stereo channels.
This filter outputs front left and front right channels same as available in stereo input.

The filter accepts the following options:


Args:
    original: Set the original center factor to keep in front center channel output. Allowed range is from 0 to 1. Default value is 1.
    enhance: Set the dialogue enhance factor to put in front center channel output. Allowed range is from 0 to 3. Default value is 1.
    voice: Set the voice detection factor. Allowed range is from 2 to 32. Default value is 2.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dialoguenhance)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dialoguenhance', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "original": original,

                "enhance": enhance,

                "voice": voice,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



























    def drmeter(

    self,




    *,
    length: Double = Default('3'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Measure audio dynamic range.

DR values of 14 and higher is found in very dynamic material. DR of 8 to 13
is found in transition material. And anything less that 8 have very poor dynamics
and is very compressed.

The filter accepts the following options:


Args:
    length: Set window length in seconds used to split audio into segments of equal length. Default is 3 seconds.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drmeter)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drmeter', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "length": length,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def dynaudnorm(

    self,




    *,
    framelen: Int = Default('500'),gausssize: Int = Default('31'),peak: Double = Default('0.95'),maxgain: Double = Default('10'),targetrms: Double = Default('0'),coupling: Boolean = Default('true'),correctdc: Boolean = Default('false'),altboundary: Boolean = Default('false'),compress: Double = Default('0'),threshold: Double = Default('0'),channels: String = Default('all'),overlap: Double = Default('0'),curve: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Dynamic Audio Normalizer.

This filter applies a certain amount of gain to the input audio in order
to bring its peak magnitude to a target level (e.g. 0 dBFS). However, in
contrast to more "simple" normalization algorithms, the Dynamic Audio
Normalizer *dynamically* re-adjusts the gain factor to the input audio.
This allows for applying extra gain to the "quiet" sections of the audio
while avoiding distortions or clipping the "loud" sections. In other words:
The Dynamic Audio Normalizer will "even out" the volume of quiet and loud
sections, in the sense that the volume of each section is brought to the
same target level. Note, however, that the Dynamic Audio Normalizer achieves
this goal *without* applying "dynamic range compressing". It will retain 100%
of the dynamic range *within* each section of the audio file.


Args:
    framelen: Set the frame length in milliseconds. In range from 10 to 8000 milliseconds. Default is 500 milliseconds. The Dynamic Audio Normalizer processes the input audio in small chunks, referred to as frames. This is required, because a peak magnitude has no meaning for just a single sample value. Instead, we need to determine the peak magnitude for a contiguous sequence of sample values. While a "standard" normalizer would simply use the peak magnitude of the complete file, the Dynamic Audio Normalizer determines the peak magnitude individually for each frame. The length of a frame is specified in milliseconds. By default, the Dynamic Audio Normalizer uses a frame length of 500 milliseconds, which has been found to give good results with most files. Note that the exact frame length, in number of samples, will be determined automatically, based on the sampling rate of the individual input audio file.
    gausssize: Set the Gaussian filter window size. In range from 3 to 301, must be odd number. Default is 31. Probably the most important parameter of the Dynamic Audio Normalizer is the window size of the Gaussian smoothing filter. The filter's window size is specified in frames, centered around the current frame. For the sake of simplicity, this must be an odd number. Consequently, the default value of 31 takes into account the current frame, as well as the 15 preceding frames and the 15 subsequent frames. Using a larger window results in a stronger smoothing effect and thus in less gain variation, i.e. slower gain adaptation. Conversely, using a smaller window results in a weaker smoothing effect and thus in more gain variation, i.e. faster gain adaptation. In other words, the more you increase this value, the more the Dynamic Audio Normalizer will behave like a "traditional" normalization filter. On the contrary, the more you decrease this value, the more the Dynamic Audio Normalizer will behave like a dynamic range compressor.
    peak: Set the target peak value. This specifies the highest permissible magnitude level for the normalized audio input. This filter will try to approach the target peak magnitude as closely as possible, but at the same time it also makes sure that the normalized signal will never exceed the peak magnitude. A frame's maximum local gain factor is imposed directly by the target peak magnitude. The default value is 0.95 and thus leaves a headroom of 5%*. It is not recommended to go above this value.
    maxgain: Set the maximum gain factor. In range from 1.0 to 100.0. Default is 10.0. The Dynamic Audio Normalizer determines the maximum possible (local) gain factor for each input frame, i.e. the maximum gain factor that does not result in clipping or distortion. The maximum gain factor is determined by the frame's highest magnitude sample. However, the Dynamic Audio Normalizer additionally bounds the frame's maximum gain factor by a predetermined (global) maximum gain factor. This is done in order to avoid excessive gain factors in "silent" or almost silent frames. By default, the maximum gain factor is 10.0, For most inputs the default value should be sufficient and it usually is not recommended to increase this value. Though, for input with an extremely low overall volume level, it may be necessary to allow even higher gain factors. Note, however, that the Dynamic Audio Normalizer does not simply apply a "hard" threshold (i.e. cut off values above the threshold). Instead, a "sigmoid" threshold function will be applied. This way, the gain factors will smoothly approach the threshold value, but never exceed that value.
    targetrms: Set the target RMS. In range from 0.0 to 1.0. Default is 0.0 - disabled. By default, the Dynamic Audio Normalizer performs "peak" normalization. This means that the maximum local gain factor for each frame is defined (only) by the frame's highest magnitude sample. This way, the samples can be amplified as much as possible without exceeding the maximum signal level, i.e. without clipping. Optionally, however, the Dynamic Audio Normalizer can also take into account the frame's root mean square, abbreviated RMS. In electrical engineering, the RMS is commonly used to determine the power of a time-varying signal. It is therefore considered that the RMS is a better approximation of the "perceived loudness" than just looking at the signal's peak magnitude. Consequently, by adjusting all frames to a constant RMS value, a uniform "perceived loudness" can be established. If a target RMS value has been specified, a frame's local gain factor is defined as the factor that would result in exactly that RMS value. Note, however, that the maximum local gain factor is still restricted by the frame's highest magnitude sample, in order to prevent clipping.
    coupling: Enable channels coupling. By default is enabled. By default, the Dynamic Audio Normalizer will amplify all channels by the same amount. This means the same gain factor will be applied to all channels, i.e. the maximum possible gain factor is determined by the "loudest" channel. However, in some recordings, it may happen that the volume of the different channels is uneven, e.g. one channel may be "quieter" than the other one(s). In this case, this option can be used to disable the channel coupling. This way, the gain factor will be determined independently for each channel, depending only on the individual channel's highest magnitude sample. This allows for harmonizing the volume of the different channels.
    correctdc: Enable DC bias correction. By default is disabled. An audio signal (in the time domain) is a sequence of sample values. In the Dynamic Audio Normalizer these sample values are represented in the -1.0 to 1.0 range, regardless of the original input format. Normally, the audio signal, or "waveform", should be centered around the zero point. That means if we calculate the mean value of all samples in a file, or in a single frame, then the result should be 0.0 or at least very close to that value. If, however, there is a significant deviation of the mean value from 0.0, in either positive or negative direction, this is referred to as a DC bias or DC offset. Since a DC bias is clearly undesirable, the Dynamic Audio Normalizer provides optional DC bias correction. With DC bias correction enabled, the Dynamic Audio Normalizer will determine the mean value, or "DC correction" offset, of each input frame and subtract that value from all of the frame's sample values which ensures those samples are centered around 0.0 again. Also, in order to avoid "gaps" at the frame boundaries, the DC correction offset values will be interpolated smoothly between neighbouring frames.
    altboundary: Enable alternative boundary mode. By default is disabled. The Dynamic Audio Normalizer takes into account a certain neighbourhood around each frame. This includes the preceding frames as well as the subsequent frames. However, for the "boundary" frames, located at the very beginning and at the very end of the audio file, not all neighbouring frames are available. In particular, for the first few frames in the audio file, the preceding frames are not known. And, similarly, for the last few frames in the audio file, the subsequent frames are not known. Thus, the question arises which gain factors should be assumed for the missing frames in the "boundary" region. The Dynamic Audio Normalizer implements two modes to deal with this situation. The default boundary mode assumes a gain factor of exactly 1.0 for the missing frames, resulting in a smooth "fade in" and "fade out" at the beginning and at the end of the input, respectively.
    compress: Set the compress factor. In range from 0.0 to 30.0. Default is 0.0. By default, the Dynamic Audio Normalizer does not apply "traditional" compression. This means that signal peaks will not be pruned and thus the full dynamic range will be retained within each local neighbourhood. However, in some cases it may be desirable to combine the Dynamic Audio Normalizer's normalization algorithm with a more "traditional" compression. For this purpose, the Dynamic Audio Normalizer provides an optional compression (thresholding) function. If (and only if) the compression feature is enabled, all input frames will be processed by a soft knee thresholding function prior to the actual normalization process. Put simply, the thresholding function is going to prune all samples whose magnitude exceeds a certain threshold value. However, the Dynamic Audio Normalizer does not simply apply a fixed threshold value. Instead, the threshold value will be adjusted for each individual frame. In general, smaller parameters result in stronger compression, and vice versa. Values below 3.0 are not recommended, because audible distortion may appear.
    threshold: Set the target threshold value. This specifies the lowest permissible magnitude level for the audio input which will be normalized. If input frame volume is above this value frame will be normalized. Otherwise frame may not be normalized at all. The default value is set to 0, which means all input frames will be normalized. This option is mostly useful if digital noise is not wanted to be amplified.
    channels: Specify which channels to filter, by default all available channels are filtered.
    overlap: Specify overlap for frames. If set to 0 (default) no frame overlapping is done. Using >0 and <1 values will make less conservative gain adjustments, like when framelen option is set to smaller value, if framelen option value is compensated for non-zero overlap then gain adjustments will be smoother across time compared to zero overlap case.
    curve: Specify the peak mapping curve expression which is going to be used when calculating gain applied to frames. The max output frame gain will still be limited by other options mentioned previously for this filter. The expression can contain the following constants: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dynaudnorm)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dynaudnorm', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "framelen": framelen,

                "gausssize": gausssize,

                "peak": peak,

                "maxgain": maxgain,

                "targetrms": targetrms,

                "coupling": coupling,

                "correctdc": correctdc,

                "altboundary": altboundary,

                "compress": compress,

                "threshold": threshold,

                "channels": channels,

                "overlap": overlap,

                "curve": curve,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def earwax(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Make audio easier to listen to on headphones.

This filter adds `cues' to 44.1kHz stereo (i.e. audio CD format) audio
so that when listened to on headphones the stereo image is moved from
inside your head (standard for headphones) to outside and in front of
the listener (standard for speakers).

Ported from SoX.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#earwax)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='earwax', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def ebur128(

    self,




    *,
    video: Boolean = Default('false'),size: Image_size = Default('640x480'),meter: Int = Default('9'),framelog: Int| Literal["quiet","info","verbose"] | Default = Default('-1'),metadata: Boolean = Default('false'),peak: Flags| Literal["none","sample","true"] | Default = Default('0'),dualmono: Boolean = Default('false'),panlaw: Double = Default('-3.0103'),target: Int = Default('-23'),gauge: Int| Literal["momentary","m","shortterm","s"] | Default = Default('momentary'),scale: Int| Literal["absolute","LUFS","relative","LU"] | Default = Default('absolute'),integrated: Double = Default('0'),range: Double = Default('0'),lra_low: Double = Default('0'),lra_high: Double = Default('0'),sample_peak: Double = Default('0'),true_peak: Double = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

EBU R128 scanner filter. This filter takes an audio stream and analyzes its loudness
level. By default, it logs a message at a frequency of 10Hz with the
Momentary loudness (identified by M), Short-term loudness (S),
Integrated loudness (I) and Loudness Range (LRA).

The filter can only analyze streams which have
sample format is double-precision floating point. The input stream will be converted to
this specification, if needed. Users may need to insert aformat and/or aresample filters
after this filter to obtain the original parameters.

The filter also has a video output (see the video option) with a real
time graph to observe the loudness evolution. The graphic contains the logged
message mentioned above, so it is not printed anymore when this option is set,
unless the verbose logging is set. The main graphing area contains the
short-term loudness (3 seconds of analysis), and the gauge on the right is for
the momentary loudness (400 milliseconds), but can optionally be configured
to instead display short-term loudness (see gauge).

The green area marks a  +/- 1LU target range around the target loudness
(-23LUFS by default, unless modified through target).

More information about the Loudness Recommendation EBU R128 on
http://tech.ebu.ch/loudness.

The filter accepts the following options:


Args:
    video: Activate the video output. The audio stream is passed unchanged whether this option is set or no. The video stream will be the first output stream if activated. Default is 0.
    size: Set the video size. This option is for video only. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default and minimum resolution is 640x480.
    meter: Set the EBU scale meter. Default is 9. Common values are 9 and 18, respectively for EBU scale meter +9 and EBU scale meter +18. Any other integer value between this range is allowed.
    framelog: Force the frame logging level. Available values are: @end table By default, the logging level is set to info. If the video or the metadata options are set, it switches to verbose.
    metadata: Set metadata injection. If set to 1, the audio input will be segmented into 100ms output frames, each of them containing various loudness information in metadata. All the metadata keys are prefixed with lavfi.r128.. Default is 0.
    peak: Set peak mode(s). Available modes can be cumulated (the option is a flag type). Possible values are: @end table
    dualmono: Treat mono input files as "dual mono". If a mono file is intended for playback on a stereo system, its EBU R128 measurement will be perceptually incorrect. If set to true, this option will compensate for this effect. Multi-channel input files are not affected by this option.
    panlaw: Set a specific pan law to be used for the measurement of dual mono files. This parameter is optional, and has a default value of -3.01dB.
    target: Set a specific target level (in LUFS) used as relative zero in the visualization. This parameter is optional and has a default value of -23LUFS as specified by EBU R128. However, material published online may prefer a level of -16LUFS (e.g. for use with podcasts or video platforms).
    gauge: Set the value displayed by the gauge. Valid values are momentary and s shortterm. By default the momentary value will be used, but in certain scenarios it may be more useful to observe the short term value instead (e.g. live mixing).
    scale: Sets the display scale for the loudness. Valid parameters are absolute (in LUFS) or relative (LU) relative to the target. This only affects the video output, not the summary or continuous log output.
    integrated: Read-only exported value for measured integrated loudness, in LUFS.
    range: Read-only exported value for measured loudness range, in LU.
    lra_low: Read-only exported value for measured LRA low, in LUFS.
    lra_high: Read-only exported value for measured LRA high, in LUFS.
    sample_peak: Read-only exported value for measured sample peak, in dBFS.
    true_peak: Read-only exported value for measured true peak, in dBFS.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ebur128)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ebur128', typings_input=('audio',), typings_output='[StreamType.video] if video else [] + [StreamType.audio]'),

            self,




            **merge({

                "video": video,

                "size": size,

                "meter": meter,

                "framelog": framelog,

                "metadata": metadata,

                "peak": peak,

                "dualmono": dualmono,

                "panlaw": panlaw,

                "target": target,

                "gauge": gauge,

                "scale": scale,

                "integrated": integrated,

                "range": range,

                "lra_low": lra_low,

                "lra_high": lra_high,

                "sample_peak": sample_peak,

                "true_peak": true_peak,

            },
            extra_options,


            )
        )

        return filter_node

















    def equalizer(

    self,




    *,
    frequency: Double = Default('0'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('1'),gain: Double = Default('0'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a two-pole peaking equalisation (EQ) filter. With this
filter, the signal-level at and around a selected frequency can
be increased or decreased, whilst (unlike bandpass and bandreject
filters) that at all other frequencies is unchanged.

In order to produce complex equalisation curves, this filter can
be given several times, each with a different central frequency.

The filter accepts the following options:


Args:
    frequency: Change equalizer frequency. Syntax for the command is : "frequency"
    width_type: Change equalizer width_type. Syntax for the command is : "width_type"
    width: Change equalizer width. Syntax for the command is : "width"
    gain: Change equalizer gain. Syntax for the command is : "gain"
    mix: Change equalizer mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#equalizer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='equalizer', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)















    def extrastereo(

    self,




    *,
    m: Float = Default('2.5'),c: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Linearly increases the difference between left and right channels which
adds some sort of "live" effect to playback.

The filter accepts the following options:


Args:
    m: Sets the difference coefficient (default: 2.5). 0.0 means mono sound (average of both channels), with 1.0 sound will be unchanged, with -1.0 left and right channels will be swapped.
    c: Enable clipping. By default is enabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#extrastereo)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='extrastereo', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "m": m,

                "c": c,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)





























    def firequalizer(

    self,




    *,
    gain: String = Default('gain_interpolate(f)'),gain_entry: String = Default(None),delay: Double = Default('0.01'),accuracy: Double = Default('5'),wfunc: Int| Literal["rectangular","hann","hamming","blackman","nuttall3","mnuttall3","nuttall","bnuttall","bharris","tukey"] | Default = Default('hann'),fixed: Boolean = Default('false'),multi: Boolean = Default('false'),zero_phase: Boolean = Default('false'),scale: Int| Literal["linlin","linlog","loglin","loglog"] | Default = Default('linlog'),dumpfile: String = Default(None),dumpscale: Int| Literal["linlin","linlog","loglin","loglog"] | Default = Default('linlog'),fft2: Boolean = Default('false'),min_phase: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply FIR Equalization using arbitrary frequency response.

The filter accepts the following option:


Args:
    gain: Set gain curve equation (in dB). The expression can contain variables: @end table and functions: @end table This option is also available as command. Default is gain_interpolate(f).
    gain_entry: Set gain entry for gain_interpolate function. The expression can contain functions: @end table This option is also available as command.
    delay: Set filter delay in seconds. Higher value means more accurate. Default is 0.01.
    accuracy: Set filter accuracy in Hz. Lower value means more accurate. Default is 5.
    wfunc: Set window function. Acceptable values are: @end table
    fixed: If enabled, use fixed number of audio samples. This improves speed when filtering with large delay. Default is disabled.
    multi: Enable multichannels evaluation on gain. Default is disabled.
    zero_phase: Enable zero phase mode by subtracting timestamp to compensate delay. Default is disabled.
    scale: Set scale used by gain. Acceptable values are: @end table
    dumpfile: Set file for dumping, suitable for gnuplot.
    dumpscale: Set scale for dumpfile. Acceptable values are same with scale option. Default is linlog.
    fft2: Enable 2-channel convolution using complex FFT. This improves speed significantly. Default is disabled.
    min_phase: Enable minimum phase impulse response. Default is disabled.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#firequalizer)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='firequalizer', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "gain": gain,

                "gain_entry": gain_entry,

                "delay": delay,

                "accuracy": accuracy,

                "wfunc": wfunc,

                "fixed": fixed,

                "multi": multi,

                "zero_phase": zero_phase,

                "scale": scale,

                "dumpfile": dumpfile,

                "dumpscale": dumpscale,

                "fft2": fft2,

                "min_phase": min_phase,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def flanger(

    self,




    *,
    delay: Double = Default('0'),depth: Double = Default('2'),regen: Double = Default('0'),width: Double = Default('71'),speed: Double = Default('0.5'),shape: Int| Literal["triangular","t","sinusoidal","s"] | Default = Default('sinusoidal'),phase: Double = Default('25'),interp: Int| Literal["linear","quadratic"] | Default = Default('linear'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a flanging effect to the audio.

The filter accepts the following options:


Args:
    delay: Set base delay in milliseconds. Range from 0 to 30. Default value is 0.
    depth: Set added sweep delay in milliseconds. Range from 0 to 10. Default value is 2.
    regen: Set percentage regeneration (delayed signal feedback). Range from -95 to 95. Default value is 0.
    width: Set percentage of delayed signal mixed with original. Range from 0 to 100. Default value is 71.
    speed: Set sweeps per second (Hz). Range from 0.1 to 10. Default value is 0.5.
    shape: Set swept wave shape, can be triangular or sinusoidal. Default value is sinusoidal.
    phase: Set swept wave percentage-shift for multi channel. Range from 0 to 100. Default value is 25.
    interp: Set delay-line interpolation, linear or quadratic. Default is linear.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#flanger)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='flanger', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "delay": delay,

                "depth": depth,

                "regen": regen,

                "width": width,

                "speed": speed,

                "shape": shape,

                "phase": phase,

                "interp": interp,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)









































    def haas(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),side_gain: Double = Default('1'),middle_source: Int| Literal["left","right","mid","side"] | Default = Default('mid'),middle_phase: Boolean = Default('false'),left_delay: Double = Default('2.05'),left_balance: Double = Default('-1'),left_gain: Double = Default('1'),left_phase: Boolean = Default('false'),right_delay: Double = Default('2.12'),right_balance: Double = Default('1'),right_gain: Double = Default('1'),right_phase: Boolean = Default('true'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply Haas effect to audio.

Note that this makes most sense to apply on mono signals.
With this filter applied to mono signals it give some directionality and
stretches its stereo image.

The filter accepts the following options:


Args:
    level_in: Set input level. By default is 1, or 0dB
    level_out: Set output level. By default is 1, or 0dB.
    side_gain: Set gain applied to side part of signal. By default is 1.
    middle_source: Set kind of middle source. Can be one of the following: @end table
    middle_phase: Change middle phase. By default is disabled.
    left_delay: Set left channel delay. By default is 2.05 milliseconds.
    left_balance: Set left channel balance. By default is -1.
    left_gain: Set left channel gain. By default is 1.
    left_phase: Change left phase. By default is disabled.
    right_delay: Set right channel delay. By defaults is 2.12 milliseconds.
    right_balance: Set right channel balance. By default is 1.
    right_gain: Set right channel gain. By default is 1.
    right_phase: Change right phase. By default is enabled.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#haas)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='haas', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "side_gain": side_gain,

                "middle_source": middle_source,

                "middle_phase": middle_phase,

                "left_delay": left_delay,

                "left_balance": left_balance,

                "left_gain": left_gain,

                "left_phase": left_phase,

                "right_delay": right_delay,

                "right_balance": right_balance,

                "right_gain": right_gain,

                "right_phase": right_phase,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)











    def hdcd(

    self,




    *,
    disable_autoconvert: Boolean = Default('true'),process_stereo: Boolean = Default('true'),cdt_ms: Int = Default('2000'),force_pe: Boolean = Default('false'),analyze_mode: Int| Literal["off","lle","pe","cdt","tgm"] | Default = Default('off'),bits_per_sample: Int| Literal["16","20","24"] | Default = Default('16'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Decodes High Definition Compatible Digital (HDCD) data. A 16-bit PCM stream with
embedded HDCD codes is expanded into a 20-bit PCM stream.

The filter supports the Peak Extend and Low-level Gain Adjustment features
of HDCD, and detects the Transient Filter flag.

@example
ffmpeg -i HDCD16.flac -af hdcd OUT24.flac
@end example

When using the filter with wav, note the default encoding for wav is 16-bit,
so the resulting 20-bit stream will be truncated back to 16-bit. Use something
like -acodec pcm_s24le after the filter to get 24-bit PCM output.
@example
ffmpeg -i HDCD16.wav -af hdcd OUT16.wav
ffmpeg -i HDCD16.wav -af hdcd -c:a pcm_s24le OUT24.wav
@end example

The filter accepts the following options:


Args:
    disable_autoconvert: Disable any automatic format conversion or resampling in the filter graph.
    process_stereo: Process the stereo channels together. If target_gain does not match between channels, consider it invalid and use the last valid target_gain.
    cdt_ms: Set the code detect timer period in ms.
    force_pe: Always extend peaks above -3dBFS even if PE isn't signaled.
    analyze_mode: Replace audio with a solid tone and adjust the amplitude to signal some specific aspect of the decoding process. The output file can be loaded in an audio editor alongside the original to aid analysis. analyze_mode=pe:force_pe=true can be used to see all samples above the PE level. Modes are: @end table
    bits_per_sample: Valid bits per sample (location of the true LSB). (from 16 to 24) (default 16)
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hdcd)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hdcd', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "disable_autoconvert": disable_autoconvert,

                "process_stereo": process_stereo,

                "cdt_ms": cdt_ms,

                "force_pe": force_pe,

                "analyze_mode": analyze_mode,

                "bits_per_sample": bits_per_sample,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)











    def highpass(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.707'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a high-pass filter with 3dB point frequency.
The filter can be either single-pole, or double-pole (the default).
The filter roll off at 6dB per pole per octave (20dB per pole per decade).

The filter accepts the following options:


Args:
    frequency: Change highpass frequency. Syntax for the command is : "frequency"
    width_type: Change highpass width_type. Syntax for the command is : "width_type"
    width: Change highpass width. Syntax for the command is : "width"
    poles: Set number of poles. Default is 2.
    mix: Change highpass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#highpass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='highpass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def highshelf(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),gain: Double = Default('0'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost or cut treble (upper) frequencies of the audio using a two-pole
shelving filter with a response similar to that of a standard
hi-fi's tone-controls. This is also known as shelving equalisation (EQ).

The filter accepts the following options:


Args:
    frequency: Change treble frequency. Syntax for the command is : "frequency"
    width_type: Change treble width_type. Syntax for the command is : "width_type"
    width: Change treble width. Syntax for the command is : "width"
    gain: Change treble gain. Syntax for the command is : "gain"
    poles: Set number of poles. Default is 2.
    mix: Change treble mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#treble)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='highshelf', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







































































    def loudnorm(

    self,




    *,
    I: Double = Default('-24'),LRA: Double = Default('7'),TP: Double = Default('-2'),measured_I: Double = Default('0'),measured_LRA: Double = Default('0'),measured_TP: Double = Default('99'),measured_thresh: Double = Default('-70'),offset: Double = Default('0'),linear: Boolean = Default('true'),dual_mono: Boolean = Default('false'),print_format: Int| Literal["none","json","summary"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

EBU R128 loudness normalization. Includes both dynamic and linear normalization modes.
Support for both single pass (livestreams, files) and double pass (files) modes.
This algorithm can target IL, LRA, and maximum true peak. In dynamic mode, to accurately
detect true peaks, the audio stream will be upsampled to 192 kHz.
Use the -ar option or aresample filter to explicitly set an output sample rate.

The filter accepts the following options:


Args:
    I: Set integrated loudness target. Range is -70.0 - -5.0. Default value is -24.0.
    LRA: Set loudness range target. Range is 1.0 - 50.0. Default value is 7.0.
    TP: Set maximum true peak. Range is -9.0 - +0.0. Default value is -2.0.
    measured_I: Measured IL of input file. Range is -99.0 - +0.0.
    measured_LRA: Measured LRA of input file. Range is 0.0 - 99.0.
    measured_TP: Measured true peak of input file. Range is -99.0 - +99.0.
    measured_thresh: Measured threshold of input file. Range is -99.0 - +0.0.
    offset: Set offset gain. Gain is applied before the true-peak limiter. Range is -99.0 - +99.0. Default is +0.0.
    linear: Normalize by linearly scaling the source audio. measured_I, measured_LRA, measured_TP, and measured_thresh must all be specified. Target LRA shouldn't be lower than source LRA and the change in integrated loudness shouldn't result in a true peak which exceeds the target TP. If any of these conditions aren't met, normalization mode will revert to dynamic. Options are true or false. Default is true.
    dual_mono: Treat mono input files as "dual-mono". If a mono file is intended for playback on a stereo system, its EBU R128 measurement will be perceptually incorrect. If set to true, this option will compensate for this effect. Multi-channel input files are not affected by this option. Options are true or false. Default is false.
    print_format: Set print format for stats. Options are summary, json, or none. Default value is none.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#loudnorm)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='loudnorm', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "I": I,

                "LRA": LRA,

                "TP": TP,

                "measured_I": measured_I,

                "measured_LRA": measured_LRA,

                "measured_TP": measured_TP,

                "measured_thresh": measured_thresh,

                "offset": offset,

                "linear": linear,

                "dual_mono": dual_mono,

                "print_format": print_format,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def lowpass(

    self,




    *,
    frequency: Double = Default('500'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.707'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply a low-pass filter with 3dB point frequency.
The filter can be either single-pole or double-pole (the default).
The filter roll off at 6dB per pole per octave (20dB per pole per decade).

The filter accepts the following options:


Args:
    frequency: Change lowpass frequency. Syntax for the command is : "frequency"
    width_type: Change lowpass width_type. Syntax for the command is : "width_type"
    width: Change lowpass width. Syntax for the command is : "width"
    poles: Set number of poles. Default is 2.
    mix: Change lowpass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lowpass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lowpass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def lowshelf(

    self,




    *,
    frequency: Double = Default('100'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),gain: Double = Default('0'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost or cut the bass (lower) frequencies of the audio using a two-pole
shelving filter with a response similar to that of a standard
hi-fi's tone-controls. This is also known as shelving equalisation (EQ).

The filter accepts the following options:


Args:
    frequency: Change bass frequency. Syntax for the command is : "frequency"
    width_type: Change bass width_type. Syntax for the command is : "width_type"
    width: Change bass width. Syntax for the command is : "width"
    gain: Change bass gain. Syntax for the command is : "gain"
    poles: Set number of poles. Default is 2.
    mix: Change bass mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lowshelf', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)





































    def mcompand(

    self,




    *,
    args: String = Default('0.005,0.1 6 -47/-40,-34/-34,-17/-33 100 | 0.003,0.05 6 -47/-40,-34/-34,-17/-33 400 | 0.000625,0.0125 6 -47/-40,-34/-34,-15/-33 1600 | 0.0001,0.025 6 -47/-40,-34/-34,-31/-31,-0/-30 6400 | 0,0.025 6 -38/-31,-28/-28,-0/-25 22000'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Multiband Compress or expand the audio's dynamic range.

The input audio is divided into bands using 4th order Linkwitz-Riley IIRs.
This is akin to the crossover of a loudspeaker, and results in flat frequency
response when absent compander action.

It accepts the following parameters:


Args:
    args: This option syntax is: attack,decay,[attack,decay..] soft-knee points crossover_frequency [delay [initial_volume [gain]]] | attack,decay ... For explanation of each item refer to compand filter documentation.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mcompand)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='mcompand', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "args": args,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







































































    def pan(

    self,




    *,
    args: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Mix channels with specific gain levels. The filter accepts the output
channel layout followed by a set of channels definitions.

This filter is also designed to efficiently remap the channels of an audio
stream.

The filter accepts parameters of the form:
"l|outdef|outdef|..."


Args:
    args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pan', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "args": args,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)























































    def replaygain(

    self,




    *,
    track_gain: Float = Default('0'),track_peak: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

ReplayGain scanner filter. This filter takes an audio stream as an input and
outputs it unchanged.
At end of filtering it displays track_gain and track_peak.

The filter accepts the following exported read-only options:


Args:
    track_gain: Exported track gain in dB at end of stream.
    track_peak: Exported track peak at end of stream.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#replaygain)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='replaygain', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "track_gain": track_gain,

                "track_peak": track_peak,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)



























































    def showcqt(

    self,




    *,
    size: Image_size = Default('1920x1080'),fps: Video_rate = Default('25'),bar_h: Int = Default('-1'),axis_h: Int = Default('-1'),sono_h: Int = Default('-1'),fullhd: Boolean = Default('true'),sono_v: String = Default('16'),bar_v: String = Default('sono_v'),sono_g: Float = Default('3'),bar_g: Float = Default('1'),bar_t: Float = Default('1'),timeclamp: Double = Default('0.17'),attack: Double = Default('0'),basefreq: Double = Default('20.0152'),endfreq: Double = Default('20495.6'),coeffclamp: Float = Default('1'),tlength: String = Default('384*tc/(384+tc*f)'),count: Int = Default('6'),fcount: Int = Default('0'),fontfile: String = Default(None),font: String = Default(None),fontcolor: String = Default('st(0, (midi(f)-59.5)/12);st(1, if(between(ld(0),0,1), 0.5-0.5*cos(2*PI*ld(0)), 0));r(1-ld(1)) + b(ld(1))'),axisfile: String = Default(None),axis: Boolean = Default('true'),csp: Int| Literal["unspecified","bt709","fcc","bt470bg","smpte170m","smpte240m","bt2020ncl"] | Default = Default('unspecified'),cscheme: String = Default('1|0.5|0|0|0.5|1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output representing frequency spectrum
logarithmically using Brown-Puckette constant Q transform algorithm with
direct frequency domain coefficient calculation (but the transform itself
is not really constant Q, instead the Q factor is actually variable/clamped),
with musical tone scale, from E0 to D#10.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. It must be even. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 1920x1080.
    fps: Set the output frame rate. Default value is 25.
    bar_h: Set the bargraph height. It must be even. Default value is -1 which computes the bargraph height automatically.
    axis_h: Set the axis height. It must be even. Default value is -1 which computes the axis height automatically.
    sono_h: Set the sonogram height. It must be even. Default value is -1 which computes the sonogram height automatically.
    fullhd: Set the fullhd resolution. This option is deprecated, use size, s instead. Default value is 1.
    sono_v: Specify the sonogram volume expression. It can contain variables: @end table and functions: @end table Default value is 16.
    bar_v: Specify the bargraph volume expression. It can contain variables: @end table and functions: @end table Default value is sono_v.
    sono_g: Specify the sonogram gamma. Lower gamma makes the spectrum more contrast, higher gamma makes the spectrum having more range. Default value is 3. Acceptable range is [1, 7].
    bar_g: Specify the bargraph gamma. Default value is 1. Acceptable range is [1, 7].
    bar_t: Specify the bargraph transparency level. Lower value makes the bargraph sharper. Default value is 1. Acceptable range is [0, 1].
    timeclamp: Specify the transform timeclamp. At low frequency, there is trade-off between accuracy in time domain and frequency domain. If timeclamp is lower, event in time domain is represented more accurately (such as fast bass drum), otherwise event in frequency domain is represented more accurately (such as bass guitar). Acceptable range is [0.002, 1]. Default value is 0.17.
    attack: Set attack time in seconds. The default is 0 (disabled). Otherwise, it limits future samples by applying asymmetric windowing in time domain, useful when low latency is required. Accepted range is [0, 1].
    basefreq: Specify the transform base frequency. Default value is 20.01523126408007475, which is frequency 50 cents below E0. Acceptable range is [10, 100000].
    endfreq: Specify the transform end frequency. Default value is 20495.59681441799654, which is frequency 50 cents above D#10. Acceptable range is [10, 100000].
    coeffclamp: This option is deprecated and ignored.
    tlength: Specify the transform length in time domain. Use this option to control accuracy trade-off between time domain and frequency domain at every frequency sample. It can contain variables: @end table Default value is 384*tc/(384+tc*f).
    count: Specify the transform count for every video frame. Default value is 6. Acceptable range is [1, 30].
    fcount: Specify the transform count for every single pixel. Default value is 0, which makes it computed automatically. Acceptable range is [0, 10].
    fontfile: Specify font file for use with freetype to draw the axis. If not specified, use embedded font. Note that drawing with font file or embedded font is not implemented with custom basefreq and endfreq, use axisfile option instead.
    font: Specify fontconfig pattern. This has lower priority than fontfile. The : in the pattern may be replaced by | to avoid unnecessary escaping.
    fontcolor: Specify font color expression. This is arithmetic expression that should return integer value 0xRRGGBB. It can contain variables: @end table and functions: @end table Default value is st(0, (midi(f)-59.5)/12); st(1, if(between(ld(0),0,1), 0.5-0.5*cos(2*PI*ld(0)), 0)); r(1-ld(1)) + b(ld(1)).
    axisfile: Specify image file to draw the axis. This option override fontfile and fontcolor option.
    axis: Enable/disable drawing text to the axis. If it is set to 0, drawing to the axis is disabled, ignoring fontfile and axisfile option. Default value is 1.
    csp: Set colorspace. The accepted values are: @end table
    cscheme: Set spectrogram color scheme. This is list of floating point values with format left_r|left_g|left_b|right_r|right_g|right_b. The default is 1|0.5|0|0|0.5|1.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showcqt)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showcqt', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "fps": fps,

                "bar_h": bar_h,

                "axis_h": axis_h,

                "sono_h": sono_h,

                "fullhd": fullhd,

                "sono_v": sono_v,

                "bar_v": bar_v,

                "sono_g": sono_g,

                "bar_g": bar_g,

                "bar_t": bar_t,

                "timeclamp": timeclamp,

                "attack": attack,

                "basefreq": basefreq,

                "endfreq": endfreq,

                "coeffclamp": coeffclamp,

                "tlength": tlength,

                "count": count,

                "fcount": fcount,

                "fontfile": fontfile,

                "font": font,

                "fontcolor": fontcolor,

                "axisfile": axisfile,

                "axis": axis,

                "csp": csp,

                "cscheme": cscheme,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showcwt(

    self,




    *,
    size: Image_size = Default('640x512'),rate: String = Default('25'),scale: Int| Literal["linear","log","bark","mel","erbs","sqrt","cbrt","qdrt"] | Default = Default('linear'),iscale: Int| Literal["linear","log","sqrt","cbrt","qdrt"] | Default = Default('log'),min: Float = Default('20'),max: Float = Default('20000'),imin: Float = Default('0'),imax: Float = Default('1'),logb: Float = Default('0.0001'),deviation: Float = Default('1'),pps: Int = Default('64'),mode: Int| Literal["magnitude","phase","magphase","channel","stereo"] | Default = Default('magnitude'),slide: Int| Literal["replace","scroll","frame"] | Default = Default('replace'),direction: Int| Literal["lr","rl","ud","du"] | Default = Default('lr'),bar: Float = Default('0'),rotation: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to video output representing frequency spectrum
using Continuous Wavelet Transform and Morlet wavelet.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 640x512.
    rate: Set the output frame rate. Default value is 25.
    scale: Set the frequency scale used. Allowed values are: @end table Default value is linear.
    iscale: Set the intensity scale used. Allowed values are: @end table Default value is log.
    min: Set the minimum frequency that will be used in output. Default is 20 Hz.
    max: Set the maximum frequency that will be used in output. Default is 20000 Hz. The real frequency upper limit depends on input audio's sample rate and such will be enforced on this value when it is set to value greater than Nyquist frequency.
    imin: Set the minimum intensity that will be used in output.
    imax: Set the maximum intensity that will be used in output.
    logb: Set the logarithmic basis for brightness strength when mapping calculated magnitude values to pixel values. Allowed range is from 0 to 1. Default value is 0.0001.
    deviation: Set the frequency deviation. Lower values than 1 are more frequency oriented, while higher values than 1 are more time oriented. Allowed range is from 0 to 10. Default value is 1.
    pps: Set the number of pixel output per each second in one row. Allowed range is from 1 to 1024. Default value is 64.
    mode: Set the output visual mode. Allowed values are: @end table Default value is magnitude.
    slide: Set the output slide method. Allowed values are: @end table
    direction: Set the direction method for output slide method. Allowed values are: @end table
    bar: Set the ratio of bargraph display to display size. Default is 0.
    rotation: Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showcwt)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showcwt', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "rate": rate,

                "scale": scale,

                "iscale": iscale,

                "min": min,

                "max": max,

                "imin": imin,

                "imax": imax,

                "logb": logb,

                "deviation": deviation,

                "pps": pps,

                "mode": mode,

                "slide": slide,

                "direction": direction,

                "bar": bar,

                "rotation": rotation,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showfreqs(

    self,




    *,
    size: Image_size = Default('1024x512'),rate: Video_rate = Default('25'),mode: Int| Literal["line","bar","dot"] | Default = Default('bar'),ascale: Int| Literal["lin","sqrt","cbrt","log"] | Default = Default('log'),fscale: Int| Literal["lin","log","rlog"] | Default = Default('lin'),win_size: Int = Default('2048'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),overlap: Float = Default('1'),averaging: Int = Default('1'),colors: String = Default('red|green|blue|yellow|orange|lime|pink|magenta|brown'),cmode: Int| Literal["combined","separate"] | Default = Default('combined'),minamp: Float = Default('1e-06'),data: Int| Literal["magnitude","phase","delay"] | Default = Default('magnitude'),channels: String = Default('all'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to video output representing the audio power spectrum.
Audio amplitude is on Y-axis while frequency is on X-axis.

The filter accepts the following options:


Args:
    size: Specify size of video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default is 1024x512.
    rate: Set video rate. Default is 25.
    mode: Set display mode. This set how each frequency bin will be represented. It accepts the following values: @end table Default is bar.
    ascale: Set amplitude scale. It accepts the following values: @end table Default is log.
    fscale: Set frequency scale. It accepts the following values: @end table Default is lin.
    win_size: Set window size. Allowed range is from 16 to 65536. Default is 2048
    win_func: Set windowing function. It accepts the following values: @end table Default is hanning.
    overlap: Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked.
    averaging: Set time averaging. Setting this to 0 will display current maximal peaks. Default is 1, which means time averaging is disabled.
    colors: Specify list of colors separated by space or by '|' which will be used to draw channel frequencies. Unrecognized or missing colors will be replaced by white color.
    cmode: Set channel display mode. It accepts the following values: @end table Default is combined.
    minamp: Set minimum amplitude used in log amplitude scaler.
    data: Set data display mode. It accepts the following values: @end table Default is magnitude.
    channels: Set channels to use when processing audio. By default all are processed.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showfreqs)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showfreqs', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "rate": rate,

                "mode": mode,

                "ascale": ascale,

                "fscale": fscale,

                "win_size": win_size,

                "win_func": win_func,

                "overlap": overlap,

                "averaging": averaging,

                "colors": colors,

                "cmode": cmode,

                "minamp": minamp,

                "data": data,

                "channels": channels,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def showspatial(

    self,




    *,
    size: Image_size = Default('512x512'),win_size: Int = Default('4096'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert stereo input audio to a video output, representing the spatial relationship
between two channels.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 512x512.
    win_size: Set window size. Allowed range is from 1024 to 65536. Default size is 4096.
    win_func: Set window function. It accepts the following values: @end table Default value is hann.
    rate: Set output framerate.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showspatial)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showspatial', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "win_size": win_size,

                "win_func": win_func,

                "rate": rate,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showspectrum(

    self,




    *,
    size: Image_size = Default('640x512'),slide: Int| Literal["replace","scroll","fullframe","rscroll","lreplace"] | Default = Default('replace'),mode: Int| Literal["combined","separate"] | Default = Default('combined'),color: Int| Literal["channel","intensity","rainbow","moreland","nebulae","fire","fiery","fruit","cool","magma","green","viridis","plasma","cividis","terrain"] | Default = Default('channel'),scale: Int| Literal["lin","sqrt","cbrt","log","4thrt","5thrt"] | Default = Default('sqrt'),fscale: Int| Literal["lin","log"] | Default = Default('lin'),saturation: Float = Default('1'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),orientation: Int| Literal["vertical","horizontal"] | Default = Default('vertical'),overlap: Float = Default('0'),gain: Float = Default('1'),data: Int| Literal["magnitude","phase","uphase"] | Default = Default('magnitude'),rotation: Float = Default('0'),start: Int = Default('0'),stop: Int = Default('0'),fps: String = Default('auto'),legend: Boolean = Default('false'),drange: Float = Default('120'),limit: Float = Default('0'),opacity: Float = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output, representing the audio frequency
spectrum.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 640x512.
    slide: Specify how the spectrum should slide along the window. It accepts the following values: @end table Default value is replace.
    mode: Specify display mode. It accepts the following values: @end table Default value is combined.
    color: Specify display color mode. It accepts the following values: @end table Default value is channel.
    scale: Specify scale used for calculating intensity color values. It accepts the following values: @end table Default value is sqrt.
    fscale: Specify frequency scale. It accepts the following values: @end table Default value is lin.
    saturation: Set saturation modifier for displayed colors. Negative values provide alternative color scheme. 0 is no saturation at all. Saturation must be in [-10.0, 10.0] range. Default value is 1.
    win_func: Set window function. It accepts the following values: @end table Default value is hann.
    orientation: Set orientation of time vs frequency axis. Can be vertical or horizontal. Default is vertical.
    overlap: Set ratio of overlap window. Default value is 0. When value is 1 overlap is set to recommended size for specific window function currently used.
    gain: Set scale gain for calculating intensity color values. Default value is 1.
    data: Set which data to display. Can be magnitude, default or phase, or unwrapped phase: uphase.
    rotation: Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
    start: Set start frequency from which to display spectrogram. Default is 0.
    stop: Set stop frequency to which to display spectrogram. Default is 0.
    fps: Set upper frame rate limit. Default is auto, unlimited.
    legend: Draw time and frequency axes and legends. Default is disabled.
    drange: Set dynamic range used to calculate intensity color values. Default is 120 dBFS. Allowed range is from 10 to 200.
    limit: Set upper limit of input audio samples volume in dBFS. Default is 0 dBFS. Allowed range is from -100 to 100.
    opacity: Set opacity strength when using pixel format output with alpha component.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showspectrum)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showspectrum', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "slide": slide,

                "mode": mode,

                "color": color,

                "scale": scale,

                "fscale": fscale,

                "saturation": saturation,

                "win_func": win_func,

                "orientation": orientation,

                "overlap": overlap,

                "gain": gain,

                "data": data,

                "rotation": rotation,

                "start": start,

                "stop": stop,

                "fps": fps,

                "legend": legend,

                "drange": drange,

                "limit": limit,

                "opacity": opacity,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showspectrumpic(

    self,




    *,
    size: Image_size = Default('4096x2048'),mode: Int| Literal["combined","separate"] | Default = Default('combined'),color: Int| Literal["channel","intensity","rainbow","moreland","nebulae","fire","fiery","fruit","cool","magma","green","viridis","plasma","cividis","terrain"] | Default = Default('intensity'),scale: Int| Literal["lin","sqrt","cbrt","log","4thrt","5thrt"] | Default = Default('log'),fscale: Int| Literal["lin","log"] | Default = Default('lin'),saturation: Float = Default('1'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),orientation: Int| Literal["vertical","horizontal"] | Default = Default('vertical'),gain: Float = Default('1'),legend: Boolean = Default('true'),rotation: Float = Default('0'),start: Int = Default('0'),stop: Int = Default('0'),drange: Float = Default('120'),limit: Float = Default('0'),opacity: Float = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a single video frame, representing the audio frequency
spectrum.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 4096x2048.
    mode: Specify display mode. It accepts the following values: @end table Default value is combined.
    color: Specify display color mode. It accepts the following values: @end table Default value is intensity.
    scale: Specify scale used for calculating intensity color values. It accepts the following values: @end table Default value is log.
    fscale: Specify frequency scale. It accepts the following values: @end table Default value is lin.
    saturation: Set saturation modifier for displayed colors. Negative values provide alternative color scheme. 0 is no saturation at all. Saturation must be in [-10.0, 10.0] range. Default value is 1.
    win_func: Set window function. It accepts the following values: @end table Default value is hann.
    orientation: Set orientation of time vs frequency axis. Can be vertical or horizontal. Default is vertical.
    gain: Set scale gain for calculating intensity color values. Default value is 1.
    legend: Draw time and frequency axes and legends. Default is enabled.
    rotation: Set color rotation, must be in [-1.0, 1.0] range. Default value is 0.
    start: Set start frequency from which to display spectrogram. Default is 0.
    stop: Set stop frequency to which to display spectrogram. Default is 0.
    drange: Set dynamic range used to calculate intensity color values. Default is 120 dBFS. Allowed range is from 10 to 200.
    limit: Set upper limit of input audio samples volume in dBFS. Default is 0 dBFS. Allowed range is from -100 to 100.
    opacity: Set opacity strength when using pixel format output with alpha component.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showspectrumpic)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showspectrumpic', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "mode": mode,

                "color": color,

                "scale": scale,

                "fscale": fscale,

                "saturation": saturation,

                "win_func": win_func,

                "orientation": orientation,

                "gain": gain,

                "legend": legend,

                "rotation": rotation,

                "start": start,

                "stop": stop,

                "drange": drange,

                "limit": limit,

                "opacity": opacity,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showvolume(

    self,




    *,
    rate: Video_rate = Default('25'),b: Int = Default('1'),w: Int = Default('400'),h: Int = Default('20'),f: Double = Default('0.95'),c: String = Default('PEAK*255+floor((1-PEAK)*255)*256+0xff000000'),t: Boolean = Default('true'),v: Boolean = Default('true'),dm: Double = Default('0'),dmc: Color = Default('orange'),o: Int| Literal["h","v"] | Default = Default('h'),s: Int = Default('0'),p: Float = Default('0'),m: Int| Literal["p","r"] | Default = Default('p'),ds: Int| Literal["lin","log"] | Default = Default('lin'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio volume to a video output.

The filter accepts the following options:


Args:
    rate: Set video rate.
    b: Set border width, allowed range is [0, 5]. Default is 1.
    w: Set channel width, allowed range is [80, 8192]. Default is 400.
    h: Set channel height, allowed range is [1, 900]. Default is 20.
    f: Set fade, allowed range is [0, 1]. Default is 0.95.
    c: Set volume color expression. The expression can use the following variables: @end table
    t: If set, displays channel names. Default is enabled.
    v: If set, displays volume values. Default is enabled.
    dm: In second. If set to > 0., display a line for the max level in the previous seconds. default is disabled: 0.
    dmc: The color of the max line. Use when dm option is set to > 0. default is: orange
    o: Set orientation, can be horizontal: h or vertical: v, default is h.
    s: Set step size, allowed range is [0, 5]. Default is 0, which means step is disabled.
    p: Set background opacity, allowed range is [0, 1]. Default is 0.
    m: Set metering mode, can be peak: p or rms: r, default is p.
    ds: Set display scale, can be linear: lin or log: log, default is lin.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showvolume)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showvolume', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "rate": rate,

                "b": b,

                "w": w,

                "h": h,

                "f": f,

                "c": c,

                "t": t,

                "v": v,

                "dm": dm,

                "dmc": dmc,

                "o": o,

                "s": s,

                "p": p,

                "m": m,

                "ds": ds,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showwaves(

    self,




    *,
    size: Image_size = Default('600x240'),mode: Int| Literal["point","line","p2p","cline"] | Default = Default('point'),n: Rational = Default('0/1'),rate: Video_rate = Default('25'),split_channels: Boolean = Default('false'),colors: String = Default('red|green|blue|yellow|orange|lime|pink|magenta|brown'),scale: Int| Literal["lin","log","sqrt","cbrt"] | Default = Default('lin'),draw: Int| Literal["scale","full"] | Default = Default('scale'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a video output, representing the samples waves.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 600x240.
    mode: Set display mode. Available values are: @end table Default value is point.
    n: Set the number of samples which are printed on the same column. A larger value will decrease the frame rate. Must be a positive integer. This option can be set only if the value for rate is not explicitly specified.
    rate: Set the (approximate) output frame rate. This is done by setting the option n. Default value is "25".
    split_channels: Set if channels should be drawn separately or overlap. Default value is 0.
    colors: Set colors separated by '|' which are going to be used for drawing of each channel.
    scale: Set amplitude scale. Available values are: @end table Default is linear.
    draw: Set the draw mode. This is mostly useful to set for high n. Available values are: @end table Default value is scale.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showwaves)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showwaves', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "mode": mode,

                "n": n,

                "rate": rate,

                "split_channels": split_channels,

                "colors": colors,

                "scale": scale,

                "draw": draw,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showwavespic(

    self,




    *,
    size: Image_size = Default('600x240'),split_channels: Boolean = Default('false'),colors: String = Default('red|green|blue|yellow|orange|lime|pink|magenta|brown'),scale: Int| Literal["lin","log","sqrt","cbrt"] | Default = Default('lin'),draw: Int| Literal["scale","full"] | Default = Default('scale'),filter: Int| Literal["average","peak"] | Default = Default('average'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert input audio to a single video frame, representing the samples waves.

The filter accepts the following options:


Args:
    size: Specify the video size for the output. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is 600x240.
    split_channels: Set if channels should be drawn separately or overlap. Default value is 0.
    colors: Set colors separated by '|' which are going to be used for drawing of each channel.
    scale: Set amplitude scale. Available values are: @end table Default is linear.
    draw: Set the draw mode. Available values are: @end table Default value is scale.
    filter: Set the filter mode. Available values are: @end table Default value is average.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showwavespic)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showwavespic', typings_input=('audio',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "split_channels": split_channels,

                "colors": colors,

                "scale": scale,

                "draw": draw,

                "filter": filter,

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def sidechaincompress(

    self,







        _sidechain: AudioStream,




    *,
    level_in: Double = Default('1'),mode: Int| Literal["downward","upward"] | Default = Default('downward'),threshold: Double = Default('0.125'),ratio: Double = Default('2'),attack: Double = Default('20'),release: Double = Default('250'),makeup: Double = Default('1'),knee: Double = Default('2.82843'),link: Int| Literal["average","maximum"] | Default = Default('average'),detection: Int| Literal["peak","rms"] | Default = Default('rms'),level_sc: Double = Default('1'),mix: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

This filter acts like normal compressor but has the ability to compress
detected signal using second input signal.
It needs two input streams and returns one output stream.
First input stream will be processed depending on second stream signal.
The filtered signal then can be filtered with other filters in later stages of
processing. See pan and amerge filter.

The filter accepts the following options:


Args:
    level_in: Set input gain. Default is 1. Range is between 0.015625 and 64.
    mode: Set mode of compressor operation. Can be upward or downward. Default is downward.
    threshold: If a signal of second stream raises above this level it will affect the gain reduction of first stream. By default is 0.125. Range is between 0.00097563 and 1.
    ratio: Set a ratio about which the signal is reduced. 1:2 means that if the level raised 4dB above the threshold, it will be only 2dB above after the reduction. Default is 2. Range is between 1 and 20.
    attack: Amount of milliseconds the signal has to rise above the threshold before gain reduction starts. Default is 20. Range is between 0.01 and 2000.
    release: Amount of milliseconds the signal has to fall below the threshold before reduction is decreased again. Default is 250. Range is between 0.01 and 9000.
    makeup: Set the amount by how much signal will be amplified after processing. Default is 1. Range is from 1 to 64.
    knee: Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.82843. Range is between 1 and 8.
    link: Choose if the average level between all channels of side-chain stream or the louder(maximum) channel of side-chain stream affects the reduction. Default is average.
    detection: Should the exact signal be taken in case of peak or an RMS one in case of rms. Default is rms which is mainly smoother.
    level_sc: Set sidechain gain. Default is 1. Range is between 0.015625 and 64.
    mix: How much to use compressed signal in output. Default is 1. Range is between 0 and 1.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sidechaincompress)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sidechaincompress', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _sidechain,




            **merge({

                "level_in": level_in,

                "mode": mode,

                "threshold": threshold,

                "ratio": ratio,

                "attack": attack,

                "release": release,

                "makeup": makeup,

                "knee": knee,

                "link": link,

                "detection": detection,

                "level_sc": level_sc,

                "mix": mix,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def sidechaingate(

    self,







        _sidechain: AudioStream,




    *,
    level_in: Double = Default('1'),mode: Int| Literal["downward","upward"] | Default = Default('downward'),range: Double = Default('0.06125'),threshold: Double = Default('0.125'),ratio: Double = Default('2'),attack: Double = Default('20'),release: Double = Default('250'),makeup: Double = Default('1'),knee: Double = Default('2.82843'),detection: Int| Literal["peak","rms"] | Default = Default('rms'),link: Int| Literal["average","maximum"] | Default = Default('average'),level_sc: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

A sidechain gate acts like a normal (wideband) gate but has the ability to
filter the detected signal before sending it to the gain reduction stage.
Normally a gate uses the full range signal to detect a level above the
threshold.
For example: If you cut all lower frequencies from your sidechain signal
the gate will decrease the volume of your track only if not enough highs
appear. With this technique you are able to reduce the resonation of a
natural drum or remove "rumbling" of muted strokes from a heavily distorted
guitar.
It needs two input streams and returns one output stream.
First input stream will be processed depending on second stream signal.

The filter accepts the following options:


Args:
    level_in: Set input level before filtering. Default is 1. Allowed range is from 0.015625 to 64.
    mode: Set the mode of operation. Can be upward or downward. Default is downward. If set to upward mode, higher parts of signal will be amplified, expanding dynamic range in upward direction. Otherwise, in case of downward lower parts of signal will be reduced.
    range: Set the level of gain reduction when the signal is below the threshold. Default is 0.06125. Allowed range is from 0 to 1. Setting this to 0 disables reduction and then filter behaves like expander.
    threshold: If a signal rises above this level the gain reduction is released. Default is 0.125. Allowed range is from 0 to 1.
    ratio: Set a ratio about which the signal is reduced. Default is 2. Allowed range is from 1 to 9000.
    attack: Amount of milliseconds the signal has to rise above the threshold before gain reduction stops. Default is 20 milliseconds. Allowed range is from 0.01 to 9000.
    release: Amount of milliseconds the signal has to fall below the threshold before the reduction is increased again. Default is 250 milliseconds. Allowed range is from 0.01 to 9000.
    makeup: Set amount of amplification of signal after processing. Default is 1. Allowed range is from 1 to 64.
    knee: Curve the sharp knee around the threshold to enter gain reduction more softly. Default is 2.828427125. Allowed range is from 1 to 8.
    detection: Choose if exact signal should be taken for detection or an RMS like one. Default is rms. Can be peak or rms.
    link: Choose if the average level between all channels or the louder channel affects the reduction. Default is average. Can be average or maximum.
    level_sc: Set sidechain gain. Default is 1. Range is from 0.015625 to 64.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sidechaingate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sidechaingate', typings_input=('audio', 'audio'), typings_output=('audio',)),

            self,







                _sidechain,




            **merge({

                "level_in": level_in,

                "mode": mode,

                "range": range,

                "threshold": threshold,

                "ratio": ratio,

                "attack": attack,

                "release": release,

                "makeup": makeup,

                "knee": knee,

                "detection": detection,

                "link": link,

                "level_sc": level_sc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)















    def silencedetect(

    self,




    *,
    n: Double = Default('0.001'),d: Duration = Default('2'),mono: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Detect silence in an audio stream.

This filter logs a message when it detects that the input audio volume is less
or equal to a noise tolerance value for a duration greater or equal to the
minimum detected noise duration.

The printed times and duration are expressed in seconds. The
lavfi.silence_start or lavfi.silence_start.X metadata key
is set on the first frame whose timestamp equals or exceeds the detection
duration and it contains the timestamp of the first frame of the silence.

The lavfi.silence_duration or lavfi.silence_duration.X
and lavfi.silence_end or lavfi.silence_end.X metadata
keys are set on the first frame after the silence. If mono is
enabled, and each channel is evaluated separately, the .X
suffixed keys are used, and X corresponds to the channel number.

The filter accepts the following options:


Args:
    n: Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default is -60dB, or 0.001.
    d: Set silence duration until notification (default is 2 seconds). See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax.
    mono: Process each channel separately, instead of combined. By default is disabled.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#silencedetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='silencedetect', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "n": n,

                "d": d,

                "mono": mono,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def silenceremove(

    self,




    *,
    start_periods: Int = Default('0'),start_duration: Duration = Default('0'),start_threshold: Double = Default('0'),start_silence: Duration = Default('0'),start_mode: Int| Literal["any","all"] | Default = Default('any'),stop_periods: Int = Default('0'),stop_duration: Duration = Default('0'),stop_threshold: Double = Default('0'),stop_silence: Duration = Default('0'),stop_mode: Int| Literal["any","all"] | Default = Default('all'),detection: Int| Literal["avg","rms","peak","median","ptp","dev"] | Default = Default('rms'),window: Duration = Default('0.02'),timestamp: Int| Literal["write","copy"] | Default = Default('write'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Remove silence from the beginning, middle or end of the audio.

The filter accepts the following options:


Args:
    start_periods: This value is used to indicate if audio should be trimmed at beginning of the audio. A value of zero indicates no silence should be trimmed from the beginning. When specifying a non-zero value, it trims audio up until it finds non-silence. Normally, when trimming silence from beginning of audio the start_periods will be 1 but it can be increased to higher values to trim all audio up to specific count of non-silence periods. Default value is 0.
    start_duration: Specify the amount of time that non-silence must be detected before it stops trimming audio. By increasing the duration, bursts of noises can be treated as silence and trimmed off. Default value is 0.
    start_threshold: This indicates what sample value should be treated as silence. For digital audio, a value of 0 may be fine but for audio recorded from analog, you may wish to increase the value to account for background noise. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0.
    start_silence: Specify max duration of silence at beginning that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence.
    start_mode: Specify mode of detection of silence end at start of multi-channel audio. Can be any or all. Default is any. With any, any sample from any channel that is detected as non-silence will trigger end of silence trimming at start of audio stream. With all, only if every sample from every channel is detected as non-silence will trigger end of silence trimming at start of audio stream, limited usage.
    stop_periods: Set the count for trimming silence from the end of audio. When specifying a positive value, it trims audio after it finds specified silence period. To remove silence from the middle of a file, specify a stop_periods that is negative. This value is then treated as a positive value and is used to indicate the effect should restart processing as specified by stop_periods, making it suitable for removing periods of silence in the middle of the audio. Default value is 0.
    stop_duration: Specify a duration of silence that must exist before audio is not copied any more. By specifying a higher duration, silence that is wanted can be left in the audio. Default value is 0.
    stop_threshold: This is the same as start_threshold but for trimming silence from the end of audio. Can be specified in dB (in case "dB" is appended to the specified value) or amplitude ratio. Default value is 0.
    stop_silence: Specify max duration of silence at end that will be kept after trimming. Default is 0, which is equal to trimming all samples detected as silence.
    stop_mode: Specify mode of detection of silence start after start of multi-channel audio. Can be any or all. Default is all. With any, any sample from any channel that is detected as silence will trigger start of silence trimming after start of audio stream, limited usage. With all, only if every sample from every channel is detected as silence will trigger start of silence trimming after start of audio stream.
    detection: Set how is silence detected. @end table Default value is rms.
    window: Set duration in number of seconds used to calculate size of window in number of samples for detecting silence. Using 0 will effectively disable any windowing and use only single sample per channel for silence detection. In that case it may be needed to also set start_silence and/or stop_silence to nonzero values with also start_duration and/or stop_duration to nonzero values. Default value is 0.02. Allowed range is from 0 to 10.
    timestamp: Set processing mode of every audio frame output timestamp. @end table Defaults value is write.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#silenceremove)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='silenceremove', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "start_periods": start_periods,

                "start_duration": start_duration,

                "start_threshold": start_threshold,

                "start_silence": start_silence,

                "start_mode": start_mode,

                "stop_periods": stop_periods,

                "stop_duration": stop_duration,

                "stop_threshold": stop_threshold,

                "stop_silence": stop_silence,

                "stop_mode": stop_mode,

                "detection": detection,

                "window": window,

                "timestamp": timestamp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)























    def speechnorm(

    self,




    *,
    peak: Double = Default('0.95'),expansion: Double = Default('2'),compression: Double = Default('2'),threshold: Double = Default('0'),_raise: Double = Default('0.001'),fall: Double = Default('0.001'),channels: String = Default('all'),invert: Boolean = Default('false'),link: Boolean = Default('false'),rms: Double = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Speech Normalizer.

This filter expands or compresses each half-cycle of audio samples
(local set of samples all above or all below zero and between two nearest zero crossings) depending
on threshold value, so audio reaches target peak value under conditions controlled by below options.

The filter accepts the following options:


Args:
    peak: Set the expansion target peak value. This specifies the highest allowed absolute amplitude level for the normalized audio input. Default value is 0.95. Allowed range is from 0.0 to 1.0.
    expansion: Set the maximum expansion factor. Allowed range is from 1.0 to 50.0. Default value is 2.0. This option controls maximum local half-cycle of samples expansion. The maximum expansion would be such that local peak value reaches target peak value but never to surpass it and that ratio between new and previous peak value does not surpass this option value.
    compression: Set the maximum compression factor. Allowed range is from 1.0 to 50.0. Default value is 2.0. This option controls maximum local half-cycle of samples compression. This option is used only if threshold option is set to value greater than 0.0, then in such cases when local peak is lower or same as value set by threshold all samples belonging to that peak's half-cycle will be compressed by current compression factor.
    threshold: Set the threshold value. Default value is 0.0. Allowed range is from 0.0 to 1.0. This option specifies which half-cycles of samples will be compressed and which will be expanded. Any half-cycle samples with their local peak value below or same as this option value will be compressed by current compression factor, otherwise, if greater than threshold value they will be expanded with expansion factor so that it could reach peak target value but never surpass it.
    _raise: Set the expansion raising amount per each half-cycle of samples. Default value is 0.001. Allowed range is from 0.0 to 1.0. This controls how fast expansion factor is raised per each new half-cycle until it reaches expansion value. Setting this options too high may lead to distortions.
    fall: Set the compression raising amount per each half-cycle of samples. Default value is 0.001. Allowed range is from 0.0 to 1.0. This controls how fast compression factor is raised per each new half-cycle until it reaches compression value.
    channels: Specify which channels to filter, by default all available channels are filtered.
    invert: Enable inverted filtering, by default is disabled. This inverts interpretation of threshold option. When enabled any half-cycle of samples with their local peak value below or same as threshold option will be expanded otherwise it will be compressed.
    link: Link channels when calculating gain applied to each filtered channel sample, by default is disabled. When disabled each filtered channel gain calculation is independent, otherwise when this option is enabled the minimum of all possible gains for each filtered channel is used.
    rms: Set the expansion target RMS value. This specifies the highest allowed RMS level for the normalized audio input. Default value is 0.0, thus disabled. Allowed range is from 0.0 to 1.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#speechnorm)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='speechnorm', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "peak": peak,

                "expansion": expansion,

                "compression": compression,

                "threshold": threshold,

                "raise": _raise,

                "fall": fall,

                "channels": channels,

                "invert": invert,

                "link": link,

                "rms": rms,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



















    def stereotools(

    self,




    *,
    level_in: Double = Default('1'),level_out: Double = Default('1'),balance_in: Double = Default('0'),balance_out: Double = Default('0'),softclip: Boolean = Default('false'),mutel: Boolean = Default('false'),muter: Boolean = Default('false'),phasel: Boolean = Default('false'),phaser: Boolean = Default('false'),mode: Int| Literal["lr>lr","lr>ms","ms>lr","lr>ll","lr>rr","lr>l+r","lr>rl","ms>ll","ms>rr","ms>rl","lr>l-r"] | Default = Default('lr>lr'),slev: Double = Default('1'),sbal: Double = Default('0'),mlev: Double = Default('1'),mpan: Double = Default('0'),base: Double = Default('0'),delay: Double = Default('0'),sclevel: Double = Default('1'),phase: Double = Default('0'),bmode_in: Int| Literal["balance","amplitude","power"] | Default = Default('balance'),bmode_out: Int| Literal["balance","amplitude","power"] | Default = Default('balance'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

This filter has some handy utilities to manage stereo signals, for converting
M/S stereo recordings to L/R signal while having control over the parameters
or spreading the stereo image of master track.

The filter accepts the following options:


Args:
    level_in: Set input level before filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64.
    level_out: Set output level after filtering for both channels. Defaults is 1. Allowed range is from 0.015625 to 64.
    balance_in: Set input balance between both channels. Default is 0. Allowed range is from -1 to 1.
    balance_out: Set output balance between both channels. Default is 0. Allowed range is from -1 to 1.
    softclip: Enable softclipping. Results in analog distortion instead of harsh digital 0dB clipping. Disabled by default.
    mutel: Mute the left channel. Disabled by default.
    muter: Mute the right channel. Disabled by default.
    phasel: Change the phase of the left channel. Disabled by default.
    phaser: Change the phase of the right channel. Disabled by default.
    mode: Set stereo mode. Available values are: @end table
    slev: Set level of side signal. Default is 1. Allowed range is from 0.015625 to 64.
    sbal: Set balance of side signal. Default is 0. Allowed range is from -1 to 1.
    mlev: Set level of the middle signal. Default is 1. Allowed range is from 0.015625 to 64.
    mpan: Set middle signal pan. Default is 0. Allowed range is from -1 to 1.
    base: Set stereo base between mono and inversed channels. Default is 0. Allowed range is from -1 to 1.
    delay: Set delay in milliseconds how much to delay left from right channel and vice versa. Default is 0. Allowed range is from -20 to 20.
    sclevel: Set S/C level. Default is 1. Allowed range is from 1 to 100.
    phase: Set the stereo phase in degrees. Default is 0. Allowed range is from 0 to 360.
    bmode_in: Set balance mode for balance_in/balance_out option. Can be one of the following: @end table
    bmode_out: Set balance mode for balance_in/balance_out option. Can be one of the following: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#stereotools)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='stereotools', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "level_in": level_in,

                "level_out": level_out,

                "balance_in": balance_in,

                "balance_out": balance_out,

                "softclip": softclip,

                "mutel": mutel,

                "muter": muter,

                "phasel": phasel,

                "phaser": phaser,

                "mode": mode,

                "slev": slev,

                "sbal": sbal,

                "mlev": mlev,

                "mpan": mpan,

                "base": base,

                "delay": delay,

                "sclevel": sclevel,

                "phase": phase,

                "bmode_in": bmode_in,

                "bmode_out": bmode_out,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def stereowiden(

    self,




    *,
    delay: Float = Default('20'),feedback: Float = Default('0.3'),crossfeed: Float = Default('0.3'),drymix: Float = Default('0.8'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

This filter enhance the stereo effect by suppressing signal common to both
channels and by delaying the signal of left into right and vice versa,
thereby widening the stereo effect.

The filter accepts the following options:


Args:
    delay: Time in milliseconds of the delay of left signal into right and vice versa. Default is 20 milliseconds.
    feedback: Amount of gain in delayed signal into right and vice versa. Gives a delay effect of left signal in right output and vice versa which gives widening effect. Default is 0.3.
    crossfeed: Cross feed of left into right with inverted phase. This helps in suppressing the mono. If the value is 1 it will cancel all the signal common to both channels. Default is 0.3.
    drymix: Set level of input signal of original channel. Default is 0.8.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#stereowiden)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='stereowiden', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "delay": delay,

                "feedback": feedback,

                "crossfeed": crossfeed,

                "drymix": drymix,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)













    def superequalizer(

    self,




    *,
    _1b: Float = Default('1'),_2b: Float = Default('1'),_3b: Float = Default('1'),_4b: Float = Default('1'),_5b: Float = Default('1'),_6b: Float = Default('1'),_7b: Float = Default('1'),_8b: Float = Default('1'),_9b: Float = Default('1'),_10b: Float = Default('1'),_11b: Float = Default('1'),_12b: Float = Default('1'),_13b: Float = Default('1'),_14b: Float = Default('1'),_15b: Float = Default('1'),_16b: Float = Default('1'),_17b: Float = Default('1'),_18b: Float = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply 18 band equalizer.

The filter accepts the following options:


Args:
    _1b: Set 65Hz band gain.
    _2b: Set 92Hz band gain.
    _3b: Set 131Hz band gain.
    _4b: Set 185Hz band gain.
    _5b: Set 262Hz band gain.
    _6b: Set 370Hz band gain.
    _7b: Set 523Hz band gain.
    _8b: Set 740Hz band gain.
    _9b: Set 1047Hz band gain.
    _10b: Set 1480Hz band gain.
    _11b: Set 2093Hz band gain.
    _12b: Set 2960Hz band gain.
    _13b: Set 4186Hz band gain.
    _14b: Set 5920Hz band gain.
    _15b: Set 8372Hz band gain.
    _16b: Set 11840Hz band gain.
    _17b: Set 16744Hz band gain.
    _18b: Set 20000Hz band gain.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#superequalizer)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='superequalizer', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "1b": _1b,

                "2b": _2b,

                "3b": _3b,

                "4b": _4b,

                "5b": _5b,

                "6b": _6b,

                "7b": _7b,

                "8b": _8b,

                "9b": _9b,

                "10b": _10b,

                "11b": _11b,

                "12b": _12b,

                "13b": _13b,

                "14b": _14b,

                "15b": _15b,

                "16b": _16b,

                "17b": _17b,

                "18b": _18b,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)







    def surround(

    self,




    *,
    chl_out: String = Default('5.1'),chl_in: String = Default('stereo'),level_in: Float = Default('1'),level_out: Float = Default('1'),lfe: Boolean = Default('true'),lfe_low: Int = Default('128'),lfe_high: Int = Default('256'),lfe_mode: Int| Literal["add","sub"] | Default = Default('add'),smooth: Float = Default('0'),angle: Float = Default('90'),focus: Float = Default('0'),fc_in: Float = Default('1'),fc_out: Float = Default('1'),fl_in: Float = Default('1'),fl_out: Float = Default('1'),fr_in: Float = Default('1'),fr_out: Float = Default('1'),sl_in: Float = Default('1'),sl_out: Float = Default('1'),sr_in: Float = Default('1'),sr_out: Float = Default('1'),bl_in: Float = Default('1'),bl_out: Float = Default('1'),br_in: Float = Default('1'),br_out: Float = Default('1'),bc_in: Float = Default('1'),bc_out: Float = Default('1'),lfe_in: Float = Default('1'),lfe_out: Float = Default('1'),allx: Float = Default('-1'),ally: Float = Default('-1'),fcx: Float = Default('0.5'),flx: Float = Default('0.5'),frx: Float = Default('0.5'),blx: Float = Default('0.5'),brx: Float = Default('0.5'),slx: Float = Default('0.5'),srx: Float = Default('0.5'),bcx: Float = Default('0.5'),fcy: Float = Default('0.5'),fly: Float = Default('0.5'),fry: Float = Default('0.5'),bly: Float = Default('0.5'),bry: Float = Default('0.5'),sly: Float = Default('0.5'),sry: Float = Default('0.5'),bcy: Float = Default('0.5'),win_size: Int = Default('4096'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),overlap: Float = Default('0.5'),


    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply audio surround upmix filter.

This filter allows to produce multichannel output from audio stream.

The filter accepts the following options:


Args:
    chl_out: Set output channel layout. By default, this is 5.1. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
    chl_in: Set input channel layout. By default, this is stereo. See the Channel Layout section in the ffmpeg-utils(1) manual for the required syntax.
    level_in: Set input volume level. By default, this is 1.
    level_out: Set output volume level. By default, this is 1.
    lfe: Enable LFE channel output if output channel layout has it. By default, this is enabled.
    lfe_low: Set LFE low cut off frequency. By default, this is 128 Hz.
    lfe_high: Set LFE high cut off frequency. By default, this is 256 Hz.
    lfe_mode: Set LFE mode, can be add or sub. Default is add. In add mode, LFE channel is created from input audio and added to output. In sub mode, LFE channel is created from input audio and added to output but also all non-LFE output channels are subtracted with output LFE channel.
    smooth: Set temporal smoothness strength, used to gradually change factors when transforming stereo sound in time. Allowed range is from 0.0 to 1.0. Useful to improve output quality with focus option values greater than 0.0. Default is 0.0. Only values inside this range and without edges are effective.
    angle: Set angle of stereo surround transform, Allowed range is from 0 to 360. Default is 90.
    focus: Set focus of stereo surround transform, Allowed range is from -1 to 1. Default is 0.
    fc_in: Set front center input volume. By default, this is 1.
    fc_out: Set front center output volume. By default, this is 1.
    fl_in: Set front left input volume. By default, this is 1.
    fl_out: Set front left output volume. By default, this is 1.
    fr_in: Set front right input volume. By default, this is 1.
    fr_out: Set front right output volume. By default, this is 1.
    sl_in: Set side left input volume. By default, this is 1.
    sl_out: Set side left output volume. By default, this is 1.
    sr_in: Set side right input volume. By default, this is 1.
    sr_out: Set side right output volume. By default, this is 1.
    bl_in: Set back left input volume. By default, this is 1.
    bl_out: Set back left output volume. By default, this is 1.
    br_in: Set back right input volume. By default, this is 1.
    br_out: Set back right output volume. By default, this is 1.
    bc_in: Set back center input volume. By default, this is 1.
    bc_out: Set back center output volume. By default, this is 1.
    lfe_in: Set LFE input volume. By default, this is 1.
    lfe_out: Set LFE output volume. By default, this is 1.
    allx: Set spread usage of stereo image across X axis for all channels. Allowed range is from -1 to 15. By default this value is negative -1, and thus unused.
    ally: Set spread usage of stereo image across Y axis for all channels. Allowed range is from -1 to 15. By default this value is negative -1, and thus unused.
    fcx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    flx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    frx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    blx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    brx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    slx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    srx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    bcx: Set spread usage of stereo image across X axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    fcy: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    fly: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    fry: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    bly: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    bry: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    sly: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    sry: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    bcy: Set spread usage of stereo image across Y axis for each channel. Allowed range is from 0.06 to 15. By default this value is 0.5.
    win_size: Set window size. Allowed range is from 1024 to 65536. Default size is 4096.
    win_func: Set window function. It accepts the following values: @end table Default is hann.
    overlap: Set window overlap. If set to 1, the recommended overlap for selected window function will be picked. Default is 0.5.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#surround)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='surround', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "chl_out": chl_out,

                "chl_in": chl_in,

                "level_in": level_in,

                "level_out": level_out,

                "lfe": lfe,

                "lfe_low": lfe_low,

                "lfe_high": lfe_high,

                "lfe_mode": lfe_mode,

                "smooth": smooth,

                "angle": angle,

                "focus": focus,

                "fc_in": fc_in,

                "fc_out": fc_out,

                "fl_in": fl_in,

                "fl_out": fl_out,

                "fr_in": fr_in,

                "fr_out": fr_out,

                "sl_in": sl_in,

                "sl_out": sl_out,

                "sr_in": sr_in,

                "sr_out": sr_out,

                "bl_in": bl_in,

                "bl_out": bl_out,

                "br_in": br_in,

                "br_out": br_out,

                "bc_in": bc_in,

                "bc_out": bc_out,

                "lfe_in": lfe_in,

                "lfe_out": lfe_out,

                "allx": allx,

                "ally": ally,

                "fcx": fcx,

                "flx": flx,

                "frx": frx,

                "blx": blx,

                "brx": brx,

                "slx": slx,

                "srx": srx,

                "bcx": bcx,

                "fcy": fcy,

                "fly": fly,

                "fry": fry,

                "bly": bly,

                "bry": bry,

                "sly": sly,

                "sry": sry,

                "bcy": bcy,

                "win_size": win_size,

                "win_func": win_func,

                "overlap": overlap,

            },
            extra_options,


            )
        )
        return filter_node.audio(0)



























    def tiltshelf(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),gain: Double = Default('0'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost or cut the lower frequencies and cut or boost higher frequencies
of the audio using a two-pole shelving filter with a response similar to
that of a standard hi-fi's tone-controls.
This is also known as shelving equalisation (EQ).

The filter accepts the following options:


Args:
    frequency: Set the filter's central frequency and so can be used to extend or reduce the frequency range to be boosted or cut. The default value is 3000 Hz.
    width_type: Set method to specify band-width of filter. @end table
    width: Determine how steep is the filter's shelf transition.
    gain: Give the gain at 0 Hz. Its useful range is about -20 (for a large cut) to +20 (for a large boost). Beware of clipping when using a positive gain.
    poles: Set number of poles. Default is 2.
    mix: How much to use filtered signal in output. Default is 1. Range is between 0 and 1.
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tiltshelf)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tiltshelf', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)



























    def treble(

    self,




    *,
    frequency: Double = Default('3000'),width_type: Int| Literal["h","q","o","s","k"] | Default = Default('q'),width: Double = Default('0.5'),gain: Double = Default('0'),poles: Int = Default('2'),mix: Double = Default('1'),channels: String = Default('all'),normalize: Boolean = Default('false'),transform: Int| Literal["di","dii","tdi","tdii","latt","svf","zdf"] | Default = Default('di'),precision: Int| Literal["auto","s16","s32","f32","f64"] | Default = Default('auto'),blocksize: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Boost or cut treble (upper) frequencies of the audio using a two-pole
shelving filter with a response similar to that of a standard
hi-fi's tone-controls. This is also known as shelving equalisation (EQ).

The filter accepts the following options:


Args:
    frequency: Change treble frequency. Syntax for the command is : "frequency"
    width_type: Change treble width_type. Syntax for the command is : "width_type"
    width: Change treble width. Syntax for the command is : "width"
    gain: Change treble gain. Syntax for the command is : "gain"
    poles: Set number of poles. Default is 2.
    mix: Change treble mix. Syntax for the command is : "mix"
    channels: Specify which channels to filter, by default all available are filtered.
    normalize: Normalize biquad coefficients, by default is disabled. Enabling it will normalize magnitude response at DC to 0dB.
    transform: Set transform type of IIR filter. @end table
    precision: Set precison of filtering. @end table
    blocksize: set the block size (from 0 to 32768) (default 0)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#treble)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='treble', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "frequency": frequency,

                "width_type": width_type,

                "width": width,

                "gain": gain,

                "poles": poles,

                "mix": mix,

                "channels": channels,

                "normalize": normalize,

                "transform": transform,

                "precision": precision,

                "blocksize": blocksize,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def tremolo(

    self,




    *,
    f: Double = Default('5'),d: Double = Default('0.5'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Sinusoidal amplitude modulation.

The filter accepts the following options:


Args:
    f: Modulation frequency in Hertz. Modulation frequencies in the subharmonic range (20 Hz or lower) will result in a tremolo effect. This filter may also be used as a ring modulator by specifying a modulation frequency higher than 20 Hz. Range is 0.1 - 20000.0. Default value is 5.0 Hz.
    d: Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tremolo)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tremolo', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "f": f,

                "d": d,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)































    def vibrato(

    self,




    *,
    f: Double = Default('5'),d: Double = Default('0.5'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Sinusoidal phase modulation.

The filter accepts the following options:


Args:
    f: Modulation frequency in Hertz. Range is 0.1 - 20000.0. Default value is 5.0 Hz.
    d: Depth of modulation as a percentage. Range is 0.0 - 1.0. Default value is 0.5.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vibrato)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vibrato', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "f": f,

                "d": d,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)















    def virtualbass(

    self,




    *,
    cutoff: Double = Default('250'),strength: Double = Default('3'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Apply audio Virtual Bass filter.

This filter accepts stereo input and produce stereo with LFE (2.1) channels output.
The newly produced LFE channel have enhanced virtual bass originally obtained from both stereo channels.
This filter outputs front left and front right channels unchanged as available in stereo input.

The filter accepts the following options:


Args:
    cutoff: Set the virtual bass cutoff frequency. Default value is 250 Hz. Allowed range is from 100 to 500 Hz.
    strength: Set the virtual bass strength. Allowed range is from 0.5 to 3. Default value is 3.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#virtualbass)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='virtualbass', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "cutoff": cutoff,

                "strength": strength,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)









    def volume(

    self,




    *,
    volume: String = Default('1.0'),precision: Int| Literal["fixed","float","double"] | Default = Default('float'),eval: Int| Literal["once","frame"] | Default = Default('once'),replaygain: Int| Literal["drop","ignore","track","album"] | Default = Default('drop'),replaygain_preamp: Double = Default('0'),replaygain_noclip: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Adjust the input audio volume.

It accepts the following parameters:


Args:
    volume: Modify the volume expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    precision: This parameter represents the mathematical precision. It determines which input sample formats will be allowed, which affects the precision of the volume scaling. @end table
    eval: Set when the volume expression is evaluated. It accepts the following values: @end table Default value is once.
    replaygain: Choose the behaviour on encountering ReplayGain side data in input frames. @end table
    replaygain_preamp: Pre-amplification gain in dB to apply to the selected replaygain gain. Default value for replaygain_preamp is 0.0.
    replaygain_noclip: Prevent clipping by limiting the gain applied. Default value for replaygain_noclip is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#volume)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='volume', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

                "volume": volume,

                "precision": precision,

                "eval": eval,

                "replaygain": replaygain,

                "replaygain_preamp": replaygain_preamp,

                "replaygain_noclip": replaygain_noclip,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.audio(0)







    def volumedetect(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> AudioStream:
        """

Detect the volume of the input video.

The filter has no parameters. It supports only 16-bit signed integer samples,
so the input will be converted when needed. Statistics about the volume will
be printed in the log when the input stream end is reached.

In particular it will show the mean volume (root mean square), maximum
volume (on a per-sample basis), and the beginning of a histogram of the
registered volume values (from the maximum value to a cumulated 1/1000 of
the samples).

All volumes are in decibels relative to the maximum PCM value.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#volumedetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='volumedetect', typings_input=('audio',), typings_output=('audio',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.audio(0)
