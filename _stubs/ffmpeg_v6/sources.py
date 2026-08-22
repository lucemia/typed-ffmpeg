# NOTE: this file is auto-generated, do not modify
"""
FFmpeg sources.
"""


from typing import Any, Literal


from .types import Binary, Boolean, Color, Dictionary, Double, Duration, Flags, Float, Func, Image_size, Int, Int64, Pix_fmt, Rational, Sample_fmt, String, Time, Video_rate

from .dag.factory import filter_node_factory

from .utils.frozendict import FrozenDict, merge
from .utils.typing import override
from .schema import Default, StreamType, Auto, FFMpegOptionGroup
from .common.schema import FFMpegFilterDef
from .options.framesync import FFMpegFrameSyncOption
from .options.timeline import FFMpegTimelineOption

from .options.codec import FFMpegAVCodecContextEncoderOption, FFMpegAVCodecContextDecoderOption


from .options.format import FFMpegAVFormatContextEncoderOption, FFMpegAVFormatContextDecoderOption


from .streams.av import AVStream

from .streams.channel_layout import CHANNEL_LAYOUT
from .codecs.schema import FFMpegEncoderOption, FFMpegDecoderOption
from .formats.schema import FFMpegMuxerOption, FFMpegDemuxerOption

from .dag.nodes import FilterableStream, FilterNode, OutputStream, OutputNode, InputNode, GlobalNode, GlobalStream


from .streams.video import VideoStream


from .streams.audio import AudioStream



import re











def abuffer(





    *,
    time_base: Rational = Default('0/1'),sample_rate: Int = Default('0'),sample_fmt: Sample_fmt = Default('none'),channel_layout: String = Default(None),channels: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Buffer audio frames, and make them available to the filter chain.

This source is mainly intended for a programmatic use, in particular
through the interface defined in libavfilter/buffersrc.h.

It accepts the following parameters:


Args:
    time_base: The timebase which will be used for timestamps of submitted frames. It must be either a floating-point number or in numerator/denominator form.
    sample_rate: The sample rate of the incoming audio buffers.
    sample_fmt: The sample format of the incoming audio buffers. Either a sample format name or its corresponding integer representation from the enum AVSampleFormat in libavutil/samplefmt.h
    channel_layout: The channel layout of the incoming audio buffers. Either a channel layout name from channel_layout_map in libavutil/channel_layout.c or its corresponding integer representation from the AV_CH_LAYOUT_* macros in libavutil/channel_layout.h
    channels: The number of channels of the incoming audio buffers. If both channels and channel_layout are specified, then they must be consistent.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#abuffer)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='abuffer', typings_input=(), typings_output=('audio',)),





        **merge({

            "time_base": time_base,

            "sample_rate": sample_rate,

            "sample_fmt": sample_fmt,

            "channel_layout": channel_layout,

            "channels": channels,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)



















































def aevalsrc(





    *,
    exprs: String = Default(None),nb_samples: Int = Default('1024'),sample_rate: String = Default('44100'),duration: Duration = Default('-0.000001'),channel_layout: String = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate an audio signal specified by an expression.

This source accepts in input one or more expressions (one for each
channel), which are evaluated and used to generate a corresponding
audio signal.

This source accepts the following options:


Args:
    exprs: Set the '|'-separated expressions list for each separate channel. In case the channel_layout option is not specified, the selected channel layout depends on the number of provided expressions. Otherwise the last specified expression is applied to the remaining output channels.
    nb_samples: Set the number of samples per channel per each output frame, default to 1024.
    sample_rate: Specify the sample rate, default to 44100.
    duration: Set the minimum duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. Note that the resulting duration may be greater than the specified duration, as the generated audio is always cut at the end of a complete frame. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
    channel_layout: Set the channel layout. The number of channels in the specified layout must be equal to the number of specified expressions.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#aevalsrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='aevalsrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "exprs": exprs,

            "nb_samples": nb_samples,

            "sample_rate": sample_rate,

            "duration": duration,

            "channel_layout": channel_layout,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)











def afdelaysrc(





    *,
    delay: Double = Default('0'),sample_rate: Int = Default('44100'),nb_samples: Int = Default('1024'),taps: Int = Default('0'),channel_layout: String = Default('stereo'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate a fractional delay FIR coefficients.

The resulting stream can be used with afir filter for filtering the audio signal.

The filter accepts the following options:


Args:
    delay: Set the fractional delay. Default is 0.
    sample_rate: Set the sample rate, default is 44100.
    nb_samples: Set the number of samples per each frame. Default is 1024.
    taps: Set the number of filter coefficents in output audio stream. Default value is 0.
    channel_layout: Specifies the channel layout, and can be a string representing a channel layout. The default value of channel_layout is "stereo".
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afdelaysrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='afdelaysrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "delay": delay,

            "sample_rate": sample_rate,

            "nb_samples": nb_samples,

            "taps": taps,

            "channel_layout": channel_layout,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)













def afireqsrc(





    *,
    preset: Int| Literal["custom","flat","acoustic","bass","beats","classic","clear","deep bass","dubstep","electronic","hardstyle","hip-hop","jazz","metal","movie","pop","r&b","rock","vocal booster"] | Default = Default('flat'),gains: String = Default('0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'),bands: String = Default('25 40 63 100 160 250 400 630 1000 1600 2500 4000 6300 10000 16000 24000'),taps: Int = Default('4096'),sample_rate: Int = Default('44100'),nb_samples: Int = Default('1024'),interp: Int| Literal["linear","cubic"] | Default = Default('linear'),phase: Int| Literal["linear","min"] | Default = Default('min'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate a FIR equalizer coefficients.

The resulting stream can be used with afir filter for filtering the audio signal.

The filter accepts the following options:


Args:
    preset: Set equalizer preset. Default preset is flat. Available presets are: @end table
    gains: Set custom gains for each band. Only used if the preset option is set to custom. Gains are separated by white spaces and each gain is set in dBFS. Default is 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.
    bands: Set the custom bands from where custon equalizer gains are set. This must be in strictly increasing order. Only used if the preset option is set to custom. Bands are separated by white spaces and each band represent frequency in Hz. Default is 25 40 63 100 160 250 400 630 1000 1600 2500 4000 6300 10000 16000 24000.
    taps: Set number of filter coefficents in output audio stream. Default value is 4096.
    sample_rate: Set sample rate of output audio stream, default is 44100.
    nb_samples: Set number of samples per each frame in output audio stream. Default is 1024.
    interp: Set interpolation method for FIR equalizer coefficients. Can be linear or cubic.
    phase: Set phase type of FIR filter. Can be linear or min: minimum-phase. Default is minimum-phase filter.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afireqsrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='afireqsrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "preset": preset,

            "gains": gains,

            "bands": bands,

            "taps": taps,

            "sample_rate": sample_rate,

            "nb_samples": nb_samples,

            "interp": interp,

            "phase": phase,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)







def afirsrc(





    *,
    taps: Int = Default('1025'),frequency: String = Default('0 1'),magnitude: String = Default('1 1'),phase: String = Default('0 0'),sample_rate: Int = Default('44100'),nb_samples: Int = Default('1024'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('blackman'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate a FIR coefficients using frequency sampling method.

The resulting stream can be used with afir filter for filtering the audio signal.

The filter accepts the following options:


Args:
    taps: Set number of filter coefficents in output audio stream. Default value is 1025.
    frequency: Set frequency points from where magnitude and phase are set. This must be in non decreasing order, and first element must be 0, while last element must be 1. Elements are separated by white spaces.
    magnitude: Set magnitude value for every frequency point set by frequency. Number of values must be same as number of frequency points. Values are separated by white spaces.
    phase: Set phase value for every frequency point set by frequency. Number of values must be same as number of frequency points. Values are separated by white spaces.
    sample_rate: Set sample rate, default is 44100.
    nb_samples: Set number of samples per each frame. Default is 1024.
    win_func: Set window function. Default is blackman.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#afirsrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='afirsrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "taps": taps,

            "frequency": frequency,

            "magnitude": magnitude,

            "phase": phase,

            "sample_rate": sample_rate,

            "nb_samples": nb_samples,

            "win_func": win_func,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)























def ainterleave(



    *streams: AudioStream,




    nb_inputs: Int = Auto('len(streams)'),duration: Int| Literal["longest","shortest","first"] | Default = Default('longest'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Temporally interleave frames from several inputs.

interleave works with video inputs, ainterleave with audio.

These filters read frames from several inputs and send the oldest
queued frame to the output.

Input streams must have well defined, monotonically increasing frame
timestamp values.

In order to submit one frame to output, these filters need to enqueue
at least one frame for each input, so they cannot work in case one
input is not yet terminated and will not receive incoming frames.

For example consider the case when one input is a select filter
which always drops input frames. The interleave filter will keep
reading from that input, but it will never be able to send new frames
to output until the input sends an end-of-stream signal.

Also, depending on inputs synchronization, the filters will drop
frames in case one input receives more frames than the other ones, and
the queue is already filled.

These filters accept the following options:


Args:
    nb_inputs: Set the number of different inputs, it is 2 by default.
    duration: How to determine the end-of-stream. @end table
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#interleave)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='ainterleave', typings_input='[StreamType.audio] * int(nb_inputs)', typings_output=('audio',)),



        *streams,



        **merge({

            "nb_inputs": nb_inputs,

            "duration": duration,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)













def allrgb(





    *,
    rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='allrgb', typings_input=(), typings_output=('video',)),





        **merge({

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def allyuv(





    *,
    rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='allyuv', typings_input=(), typings_output=('video',)),





        **merge({

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)













def amerge(



    *streams: AudioStream,




    inputs: Int = Auto('len(streams)'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Merge two or more audio streams into a single multi-channel stream.

The filter accepts the following options:


Args:
    inputs: Set the number of inputs. Default is 2.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#amerge)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='amerge', typings_input='[StreamType.audio] * int(inputs)', typings_output=('audio',)),



        *streams,



        **merge({

            "inputs": inputs,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)









def amix(



    *streams: AudioStream,




    inputs: Int = Auto('len(streams)'),duration: Int| Literal["longest","shortest","first"] | Default = Default('longest'),dropout_transition: Float = Default('2'),weights: String = Default('1 1'),normalize: Boolean = Default('true'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Mixes multiple audio inputs into a single output.

Note that this filter only supports float samples (the amerge
and pan audio filters support many formats). If the amix
input has integer samples then aresample will be automatically
inserted to perform the conversion to float samples.

It accepts the following parameters:


Args:
    inputs: The number of inputs. If unspecified, it defaults to 2.
    duration: How to determine the end-of-stream. @end table
    dropout_transition: The transition time, in seconds, for volume renormalization when an input stream ends. The default value is 2 seconds.
    weights: Set weight for each input. (default "1 1")
    normalize: Syntax is same as option with same name.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#amix)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='amix', typings_input='[StreamType.audio] * int(inputs)', typings_output=('audio',)),



        *streams,



        **merge({

            "inputs": inputs,

            "duration": duration,

            "dropout_transition": dropout_transition,

            "weights": weights,

            "normalize": normalize,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)







def amovie(





    *,
    filename: String = Default(None),format_name: String = Default(None),stream_index: Int = Default('-1'),seek_point: Double = Default('0'),streams: String = Default(None),loop: Int = Default('1'),discontinuity: Duration = Default('0'),dec_threads: Int = Default('0'),format_opts: Dictionary = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> FilterNode:
    """

This is the same as movie source, except it selects an audio
stream by default.


Args:
    filename:
    format_name: set format name
    stream_index: set stream index (from -1 to INT_MAX) (default -1)
    seek_point: set seekpoint (seconds) (from 0 to 9.22337e+12) (default 0)
    streams: set streams
    loop: set loop count (from 0 to INT_MAX) (default 1)
    discontinuity: set discontinuity threshold (default 0)
    dec_threads: set the number of threads for decoding (from 0 to INT_MAX) (default 0)
    format_opts: set format options for the opened file
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#amovie)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='amovie', typings_input="[StreamType.audio] * len(streams.split('+'))", typings_output="[StreamType.audio] * len(streams.split('+'))"),





        **merge({

            "filename": filename,

            "format_name": format_name,

            "stream_index": stream_index,

            "seek_point": seek_point,

            "streams": streams,

            "loop": loop,

            "discontinuity": discontinuity,

            "dec_threads": dec_threads,

            "format_opts": format_opts,

        },
        extra_options,


        )
    )

    return filter_node



















def anoisesrc(





    *,
    sample_rate: Int = Default('48000'),amplitude: Double = Default('1'),duration: Duration = Default('0'),color: Int| Literal["white","pink","brown","blue","violet","velvet"] | Default = Default('white'),seed: Int64 = Default('-1'),nb_samples: Int = Default('1024'),density: Double = Default('0.05'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate a noise audio signal.

The filter accepts the following options:


Args:
    sample_rate: Specify the sample rate. Default value is 48000 Hz.
    amplitude: Specify the amplitude (0.0 - 1.0) of the generated audio stream. Default value is 1.0.
    duration: Specify the duration of the generated audio stream. Not specifying this option results in noise with an infinite length.
    color: Specify the color of noise. Available noise colors are white, pink, brown, blue, violet and velvet. Default color is white.
    seed: Specify a value used to seed the PRNG.
    nb_samples: Set the number of samples per each output frame, default is 1024.
    density: Set the density (0.0 - 1.0) for the velvet noise generator, default is 0.05.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anoisesrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='anoisesrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "sample_rate": sample_rate,

            "amplitude": amplitude,

            "duration": duration,

            "color": color,

            "seed": seed,

            "nb_samples": nb_samples,

            "density": density,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)











def anullsrc(





    *,
    channel_layout: String = Default('stereo'),sample_rate: String = Default('44100'),nb_samples: Int = Default('1024'),duration: Duration = Default('-0.000001'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

The null audio source, return unprocessed audio frames. It is mainly useful
as a template and to be employed in analysis / debugging tools, or as
the source for filters which ignore the input data (for example the sox
synth filter).

This source accepts the following options:


Args:
    channel_layout: Specifies the channel layout, and can be either an integer or a string representing a channel layout. The default value of channel_layout is "stereo". Check the channel_layout_map definition in libavutil/channel_layout.c for the mapping between strings and channel layout values.
    sample_rate: Specifies the sample rate, and defaults to 44100.
    nb_samples: Set the number of samples per requested frames.
    duration: Set the duration of the sourced audio. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the audio is supposed to be generated forever.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#anullsrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='anullsrc', typings_input=(), typings_output=('audio',)),





        **merge({

            "channel_layout": channel_layout,

            "sample_rate": sample_rate,

            "nb_samples": nb_samples,

            "duration": duration,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)

































































def astreamselect(



    *streams: AudioStream,




    inputs: Int = Auto('len(streams)'),map: String = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> FilterNode:
    """

Select video or audio streams.

The filter accepts the following options:


Args:
    inputs: Set number of inputs. Default is 2.
    map: Set input indexes to remap to outputs.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#streamselect)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='astreamselect', typings_input='[StreamType.audio] * int(inputs)', typings_output="[StreamType.audio] * len(re.findall(r'\\d+', str(map)))"),



        *streams,



        **merge({

            "inputs": inputs,

            "map": map,

        },
        extra_options,


        )
    )

    return filter_node





























def avsynctest(





    *,
    size: Image_size = Default('hd720'),framerate: Video_rate = Default('30'),samplerate: Int = Default('44100'),amplitude: Float = Default('0.7'),period: Int = Default('3'),delay: Int = Default('0'),cycle: Boolean = Default('false'),duration: Duration = Default('0'),fg: Color = Default('white'),bg: Color = Default('black'),ag: Color = Default('gray'),


    extra_options: dict[str, Any] | None = None,
)-> tuple[


            AudioStream,



            VideoStream,


]:
    """

Generate an Audio/Video Sync Test.

Generated stream periodically shows flash video frame and emits beep in audio.
Useful to inspect A/V sync issues.

It accepts the following options:


Args:
    size: Set output video size. Default value is hd720.
    framerate: Set output video frame rate. Default value is 30.
    samplerate: Set output audio sample rate. Default value is 44100.
    amplitude: Set output audio beep amplitude. Default value is 0.7.
    period: Set output audio beep period in seconds. Default value is 3.
    delay: Set output video flash delay in number of frames. Default value is 0.
    cycle: Enable cycling of video delays, by default is disabled.
    duration: Set stream output duration. By default duration is unlimited.
    fg: Set foreground/background/additional color.
    bg: Set foreground/background/additional color.
    ag: Set foreground/background/additional color.
    extra_options: Extra options for the filter

Returns:
    audio: the audio stream
    video: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#avsynctest)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='avsynctest', typings_input=(), typings_output=('audio', 'video')),





        **merge({

            "size": size,

            "framerate": framerate,

            "samplerate": samplerate,

            "amplitude": amplitude,

            "period": period,

            "delay": delay,

            "cycle": cycle,

            "duration": duration,

            "fg": fg,

            "bg": bg,

            "ag": ag,

        },
        extra_options,


        )
    )
    return (


                filter_node.audio(0),



                filter_node.video(0),


    )








































def bm3d(



    *streams: VideoStream,




    sigma: Float = Default('1'),block: Int = Default('16'),bstep: Int = Default('4'),group: Int = Default('1'),range: Int = Default('9'),mstep: Int = Default('1'),thmse: Float = Default('0'),hdthr: Float = Default('2.7'),estim: Int| Literal["basic","final"] | Default = Default('basic'),ref: Boolean = Default('false'),planes: Int = Default('7'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Denoise frames using Block-Matching 3D algorithm.

The filter accepts the following options.


Args:
    sigma: Set denoising strength. Default value is 1. Allowed range is from 0 to 999.9. The denoising algorithm is very sensitive to sigma, so adjust it according to the source.
    block: Set local patch size. This sets dimensions in 2D.
    bstep: Set sliding step for processing blocks. Default value is 4. Allowed range is from 1 to 64. Smaller values allows processing more reference blocks and is slower.
    group: Set maximal number of similar blocks for 3rd dimension. Default value is 1. When set to 1, no block matching is done. Larger values allows more blocks in single group. Allowed range is from 1 to 256.
    range: Set radius for search block matching. Default is 9. Allowed range is from 1 to INT32_MAX.
    mstep: Set step between two search locations for block matching. Default is 1. Allowed range is from 1 to 64. Smaller is slower.
    thmse: Set threshold of mean square error for block matching. Valid range is 0 to INT32_MAX.
    hdthr: Set thresholding parameter for hard thresholding in 3D transformed domain. Larger values results in stronger hard-thresholding filtering in frequency domain.
    estim: Set filtering estimation mode. Can be basic or final. Default is basic.
    ref: If enabled, filter will use 2nd stream for block matching. Default is disabled for basic value of estim option, and always enabled if value of estim is final.
    planes: Set planes to filter. Default is all available except alpha.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bm3d)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='bm3d', typings_input='[StreamType.video] + [StreamType.video] if ref else []', typings_output=('video',)),



        *streams,



        **merge({

            "sigma": sigma,

            "block": block,

            "bstep": bstep,

            "group": group,

            "range": range,

            "mstep": mstep,

            "thmse": thmse,

            "hdthr": hdthr,

            "estim": estim,

            "ref": ref,

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)









def buffer(





    *,
    width: Int = Default('0'),video_size: Image_size = Default(None),height: Int = Default('0'),pix_fmt: Pix_fmt = Default('none'),sar: Rational = Default('0/1'),time_base: Rational = Default('0/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Buffer video frames, and make them available to the filter chain.

This source is mainly intended for a programmatic use, in particular
through the interface defined in libavfilter/buffersrc.h.

It accepts the following parameters:


Args:
    width: The input video width.
    video_size: Specify the size (width and height) of the buffered video frames. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
    height: The input video height.
    pix_fmt: A string representing the pixel format of the buffered video frames. It may be a number corresponding to a pixel format, or a pixel format name.
    sar: The sample (pixel) aspect ratio of the input video.
    time_base: Specify the timebase assumed by the timestamps of the buffered frames.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#buffer)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='buffer', typings_input=(), typings_output=('video',)),





        **merge({

            "width": width,

            "video_size": video_size,

            "height": height,

            "pix_fmt": pix_fmt,

            "sar": sar,

            "time_base": time_base,

        },
        extra_options,


        )
    )
    return filter_node.video(0)















def cellauto(





    *,
    filename: String = Default(None),pattern: String = Default(None),rate: Video_rate = Default('25'),size: Image_size = Default(None),rule: Int = Default('110'),random_fill_ratio: Double = Default('0.618034'),random_seed: Int64 = Default('-1'),scroll: Boolean = Default('true'),start_full: Boolean = Default('false'),full: Boolean = Default('true'),stitch: Boolean = Default('true'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Create a pattern generated by an elementary cellular automaton.

The initial state of the cellular automaton can be defined through the
filename and pattern options. If such options are
not specified an initial state is created randomly.

At each new frame a new row in the video is filled with the result of
the cellular automaton next generation. The behavior when the whole
frame is filled is defined by the scroll option.

This source accepts the following options:


Args:
    filename: Read the initial cellular automaton state, i.e. the starting row, from the specified file. In the file, each non-whitespace character is considered an alive cell, a newline will terminate the row, and further characters in the file will be ignored.
    pattern: Read the initial cellular automaton state, i.e. the starting row, from the specified string. Each non-whitespace character in the string is considered an alive cell, a newline will terminate the row, and further characters in the string will be ignored.
    rate: Set the video rate, that is the number of frames generated per second. Default is 25.
    size: Set the size of the output video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. If filename or pattern is specified, the size is set by default to the width of the specified initial state row, and the height is set to width * PHI. If size is set, it must contain the width of the specified pattern string, and the specified pattern will be centered in the larger row. If a filename or a pattern string is not specified, the size value defaults to "320x518" (used for a randomly generated initial state).
    rule: Set the cellular automaton rule, it is a number ranging from 0 to 255. Default value is 110.
    random_fill_ratio: Set the random fill ratio for the initial cellular automaton row. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. This option is ignored when a file or a pattern is specified.
    random_seed: Set the seed for filling randomly the initial row, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
    scroll: If set to 1, scroll the output upward when all the rows in the output have been already filled. If set to 0, the new generated row will be written over the top row just after the bottom row is filled. Defaults to 1.
    start_full: If set to 1, completely fill the output with generated rows before outputting the first frame. This is the default behavior, for disabling set the value to 0.
    full: If set to 1, completely fill the output with generated rows before outputting the first frame. This is the default behavior, for disabling set the value to 0.
    stitch: If set to 1, stitch the left and right row edges together. This is the default behavior, for disabling set the value to 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#cellauto)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='cellauto', typings_input=(), typings_output=('video',)),





        **merge({

            "filename": filename,

            "pattern": pattern,

            "rate": rate,

            "size": size,

            "rule": rule,

            "random_fill_ratio": random_fill_ratio,

            "random_seed": random_seed,

            "scroll": scroll,

            "start_full": start_full,

            "full": full,

            "stitch": stitch,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

























def color(





    *,
    color: Color = Default('black'),size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    color: Set the color of the created image. Accepts the same syntax of the corresponding color option.
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='color', typings_input=(), typings_output=('video',)),





        **merge({

            "color": color,

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)











def colorchart(





    *,
    rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),patch_size: Image_size = Default('64x64'),preset: Int| Literal["reference","skintones"] | Default = Default('reference'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    patch_size: Set patch size of single color patch, only available in the colorchart source. Default is 64x64.
    preset: Set colorchecker colors preset, only available in the colorchart source. Available values are: @end table Default value is reference.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='colorchart', typings_input=(), typings_output=('video',)),





        **merge({

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "patch_size": patch_size,

            "preset": preset,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

























def colorspectrum(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),type: Int| Literal["black","white","all"] | Default = Default('black'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    type: Set the type of the color spectrum, only available in the colorspectrum source. Can be one of the following: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='colorspectrum', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "type": type,

        },
        extra_options,


        )
    )
    return filter_node.video(0)













def concat(



    *streams: FilterableStream,




    n: Int = Auto('len(streams) // (int(v) + int(a))'),v: Int = Default('1'),a: Int = Default('0'),unsafe: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> FilterNode:
    """

Concatenate audio and video streams, joining them together one after the
other.

The filter works on segments of synchronized video and audio streams. All
segments must have the same number of streams of each type, and that will
also be the number of streams at output.

The filter accepts the following options:


Args:
    n: Set the number of segments. Default is 2.
    v: Set the number of output video streams, that is also the number of video streams in each segment. Default is 1.
    a: Set the number of output audio streams, that is also the number of audio streams in each segment. Default is 0.
    unsafe: Activate unsafe mode: do not fail if segments have a different format.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#concat)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='concat', typings_input='([StreamType.video]*int(v) + [StreamType.audio]*int(a))*int(n)', typings_output='[StreamType.video]*int(v) + [StreamType.audio]*int(a)'),



        *streams,



        **merge({

            "n": n,

            "v": v,

            "a": a,

            "unsafe": unsafe,

        },
        extra_options,


        )
    )

    return filter_node









































def decimate(



    *streams: VideoStream,




    cycle: Int = Default('5'),dupthresh: Double = Default('1.1'),scthresh: Double = Default('15'),blockx: Int = Default('32'),blocky: Int = Default('32'),ppsrc: Boolean = Default('false'),chroma: Boolean = Default('true'),mixed: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Drop duplicated frames at regular intervals.

The filter accepts the following options:


Args:
    cycle: Set the number of frames from which one will be dropped. Setting this to N means one frame in every batch of N frames will be dropped. Default is 5.
    dupthresh: Set the threshold for duplicate detection. If the difference metric for a frame is less than or equal to this value, then it is declared as duplicate. Default is 1.1
    scthresh: Set scene change threshold. Default is 15.
    blockx: set the size of the x-axis blocks used during metric calculations (from 4 to 512) (default 32)
    blocky: Set the size of the x and y-axis blocks used during metric calculations. Larger blocks give better noise suppression, but also give worse detection of small movements. Must be a power of two. Default is 32.
    ppsrc: Mark main input as a pre-processed input and activate clean source input stream. This allows the input to be pre-processed with various filters to help the metrics calculation while keeping the frame selection lossless. When set to 1, the first stream is for the pre-processed input, and the second stream is the clean source from where the kept frames are chosen. Default is 0.
    chroma: Set whether or not chroma is considered in the metric calculations. Default is 1.
    mixed: Set whether or not the input only partially contains content to be decimated. Default is false. If enabled video output stream will be in variable frame rate.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#decimate)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='decimate', typings_input='[StreamType.video] + ([StreamType.video] if ppsrc else [])', typings_output=('video',)),



        *streams,



        **merge({

            "cycle": cycle,

            "dupthresh": dupthresh,

            "scthresh": scthresh,

            "blockx": blockx,

            "blocky": blocky,

            "ppsrc": ppsrc,

            "chroma": chroma,

            "mixed": mixed,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

































































































def fieldmatch(



    *streams: VideoStream,




    order: Int| Literal["auto","bff","tff"] | Default = Default('auto'),mode: Int| Literal["pc","pc_n","pc_u","pc_n_ub","pcn","pcn_ub"] | Default = Default('pc_n'),ppsrc: Boolean = Default('false'),field: Int| Literal["auto","bottom","top"] | Default = Default('auto'),mchroma: Boolean = Default('true'),y0: Int = Default('0'),scthresh: Double = Default('12'),combmatch: Int| Literal["none","sc","full"] | Default = Default('sc'),combdbg: Int| Literal["none","pcn","pcnub"] | Default = Default('none'),cthresh: Int = Default('9'),chroma: Boolean = Default('false'),blockx: Int = Default('16'),blocky: Int = Default('16'),combpel: Int = Default('80'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Field matching filter for inverse telecine. It is meant to reconstruct the
progressive frames from a telecined stream. The filter does not drop duplicated
frames, so to achieve a complete inverse telecine fieldmatch needs to be
followed by a decimation filter such as decimate in the filtergraph.

The separation of the field matching and the decimation is notably motivated by
the possibility of inserting a de-interlacing filter fallback between the two.
If the source has mixed telecined and real interlaced content,
fieldmatch will not be able to match fields for the interlaced parts.
But these remaining combed frames will be marked as interlaced, and thus can be
de-interlaced by a later filter such as yadif before decimation.

In addition to the various configuration options, fieldmatch can take an
optional second stream, activated through the ppsrc option. If
enabled, the frames reconstruction will be based on the fields and frames from
this second stream. This allows the first input to be pre-processed in order to
help the various algorithms of the filter, while keeping the output lossless
(assuming the fields are matched properly). Typically, a field-aware denoiser,
or brightness/contrast adjustments can help.

Note that this filter uses the same algorithms as TIVTC/TFM (AviSynth project)
and VIVTC/VFM (VapourSynth project). The later is a light clone of TFM from
which fieldmatch is based on. While the semantic and usage are very
close, some behaviour and options names can differ.

The decimate filter currently only works for constant frame rate input.
If your input has mixed telecined (30fps) and progressive content with a lower
framerate like 24fps use the following filterchain to produce the necessary cfr
stream: dejudder,fps=30000/1001,fieldmatch,decimate.

The filter accepts the following options:


Args:
    order: Specify the assumed field order of the input stream. Available values are: @end table Note that it is sometimes recommended not to trust the parity announced by the stream. Default value is auto.
    mode: Set the matching mode or strategy to use. pc mode is the safest in the sense that it won't risk creating jerkiness due to duplicate frames when possible, but if there are bad edits or blended fields it will end up outputting combed frames when a good match might actually exist. On the other hand, pcn_ub mode is the most risky in terms of creating jerkiness, but will almost always find a good frame if there is one. The other values are all somewhere in between pc and pcn_ub in terms of risking jerkiness and creating duplicate frames versus finding good matches in sections with bad edits, orphaned fields, blended fields, etc. More details about p/c/n/u/b are available in p/c/n/u/b meaning section. Available values are: @end table The parenthesis at the end indicate the matches that would be used for that mode assuming order=tff (and field on auto or top). In terms of speed pc mode is by far the fastest and pcn_ub is the slowest. Default value is pc_n.
    ppsrc: Mark the main input stream as a pre-processed input, and enable the secondary input stream as the clean source to pick the fields from. See the filter introduction for more details. It is similar to the clip2 feature from VFM/TFM. Default value is 0 (disabled).
    field: Set the field to match from. It is recommended to set this to the same value as order unless you experience matching failures with that setting. In certain circumstances changing the field that is used to match from can have a large impact on matching performance. Available values are: @end table Default value is auto.
    mchroma: Set whether or not chroma is included during the match comparisons. In most cases it is recommended to leave this enabled. You should set this to 0 only if your clip has bad chroma problems such as heavy rainbowing or other artifacts. Setting this to 0 could also be used to speed things up at the cost of some accuracy. Default value is 1.
    y0: define an exclusion band which excludes the lines between y0 and y1 from the field matching decision (from 0 to INT_MAX) (default 0)
    scthresh: Set the scene change detection threshold as a percentage of maximum change on the luma plane. Good values are in the [8.0, 14.0] range. Scene change detection is only relevant in case combmatch=sc. The range for scthresh is [0.0, 100.0]. Default value is 12.0.
    combmatch: When combatch is not none, fieldmatch will take into account the combed scores of matches when deciding what match to use as the final match. Available values are: @end table Default is sc.
    combdbg: Force fieldmatch to calculate the combed metrics for certain matches and print them. This setting is known as micout in TFM/VFM vocabulary. Available values are: @end table Default value is none.
    cthresh: This is the area combing threshold used for combed frame detection. This essentially controls how "strong" or "visible" combing must be to be detected. Larger values mean combing must be more visible and smaller values mean combing can be less visible or strong and still be detected. Valid settings are from -1 (every pixel will be detected as combed) to 255 (no pixel will be detected as combed). This is basically a pixel difference value. A good range is [8, 12]. Default value is 9.
    chroma: Sets whether or not chroma is considered in the combed frame decision. Only disable this if your source has chroma problems (rainbowing, etc.) that are causing problems for the combed frame detection with chroma enabled. Actually, using chroma=0 is usually more reliable, except for the case where there is chroma only combing in the source. Default value is 0.
    blockx: set the x-axis size of the window used during combed frame detection (from 4 to 512) (default 16)
    blocky: Respectively set the x-axis and y-axis size of the window used during combed frame detection. This has to do with the size of the area in which combpel pixels are required to be detected as combed for a frame to be declared combed. See the combpel parameter description for more info. Possible values are any number that is a power of 2 starting at 4 and going up to 512. Default value is 16.
    combpel: The number of combed pixels inside any of the blocky by blockx size blocks on the frame for the frame to be detected as combed. While cthresh controls how "visible" the combing must be, this setting controls "how much" combing there must be in any localized area (a window defined by the blockx and blocky settings) on the frame. Minimum value is 0 and maximum is blocky x blockx (at which point no frames will ever be detected as combed). This setting is known as MI in TFM/VFM vocabulary. Default value is 80.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fieldmatch)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='fieldmatch', typings_input='[StreamType.video] + [StreamType.video] if ppsrc else []', typings_output=('video',)),



        *streams,



        **merge({

            "order": order,

            "mode": mode,

            "ppsrc": ppsrc,

            "field": field,

            "mchroma": mchroma,

            "y0": y0,

            "scthresh": scthresh,

            "combmatch": combmatch,

            "combdbg": combdbg,

            "cthresh": cthresh,

            "chroma": chroma,

            "blockx": blockx,

            "blocky": blocky,

            "combpel": combpel,

        },
        extra_options,


        )
    )
    return filter_node.video(0)











































def gradients(





    *,
    size: Image_size = Default('640x480'),rate: Video_rate = Default('25'),c0: Color = Default('random'),c1: Color = Default('random'),c2: Color = Default('random'),c3: Color = Default('random'),c4: Color = Default('random'),c5: Color = Default('random'),c6: Color = Default('random'),c7: Color = Default('random'),x0: Int = Default('-1'),y0: Int = Default('-1'),x1: Int = Default('-1'),y1: Int = Default('-1'),nb_colors: Int = Default('2'),seed: Int64 = Default('-1'),duration: Duration = Default('-0.000001'),speed: Float = Default('0.01'),type: Int| Literal["linear","radial","circular","spiral"] | Default = Default('linear'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate several gradients.


Args:
    size: Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    c0: Set 8 colors. Default values for colors is to pick random one.
    c1: Set 8 colors. Default values for colors is to pick random one.
    c2: Set 8 colors. Default values for colors is to pick random one.
    c3: Set 8 colors. Default values for colors is to pick random one.
    c4: Set 8 colors. Default values for colors is to pick random one.
    c5: Set 8 colors. Default values for colors is to pick random one.
    c6: Set 8 colors. Default values for colors is to pick random one.
    c7: Set 8 colors. Default values for colors is to pick random one.
    x0: Set gradient line source and destination points. If negative or out of range, random ones are picked.
    y0: Set gradient line source and destination points. If negative or out of range, random ones are picked.
    x1: set gradient line destination x1 (from -1 to INT_MAX) (default -1)
    y1: Set gradient line source and destination points. If negative or out of range, random ones are picked.
    nb_colors: Set number of colors to use at once. Allowed range is from 2 to 8. Default value is 2.
    seed: Set seed for picking gradient line points.
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
    speed: Set speed of gradients rotation.
    type: Set type of gradients, can be linear or radial or circular or spiral.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#gradients)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='gradients', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "c0": c0,

            "c1": c1,

            "c2": c2,

            "c3": c3,

            "c4": c4,

            "c5": c5,

            "c6": c6,

            "c7": c7,

            "x0": x0,

            "y0": y0,

            "x1": x1,

            "y1": y1,

            "nb_colors": nb_colors,

            "seed": seed,

            "duration": duration,

            "speed": speed,

            "type": type,

        },
        extra_options,


        )
    )
    return filter_node.video(0)













def guided(



    *streams: VideoStream,




    radius: Int = Default('3'),eps: Float = Default('0.01'),mode: Int| Literal["basic","fast"] | Default = Default('basic'),sub: Int = Default('4'),guidance: Int| Literal["off","on"] | Default = Default('off'),planes: Int = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply guided filter for edge-preserving smoothing, dehazing and so on.

The filter accepts the following options:


Args:
    radius: Set the box radius in pixels. Allowed range is 1 to 20. Default is 3.
    eps: Set regularization parameter (with square). Allowed range is 0 to 1. Default is 0.01.
    mode: Set filter mode. Can be basic or fast. Default is basic.
    sub: Set subsampling ratio for fast mode. Range is 2 to 64. Default is 4. No subsampling occurs in basic mode.
    guidance: Set guidance mode. Can be off or on. Default is off. If off, single input is required. If on, two inputs of the same resolution and pixel format are required. The second input serves as the guidance.
    planes: Set planes to filter. Default is first only.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#guided)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='guided', typings_input='[StreamType.video] + [StreamType.video] if guidance else []', typings_output=('video',)),



        *streams,



        **merge({

            "radius": radius,

            "eps": eps,

            "mode": mode,

            "sub": sub,

            "guidance": guidance,

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)











def haldclutsrc(





    *,
    level: Int = Default('6'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    level: Specify the level of the Hald CLUT, only available in the haldclutsrc source. A level of N generates a picture of N*N*N by N*N*N pixels to be used as identity matrix for 3D lookup tables. Each component is coded on a 1/(N*N) scale.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='haldclutsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "level": level,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)









def headphone(



    *streams: AudioStream,




    map: String = Default(None),gain: Float = Default('0'),lfe: Float = Default('0'),type: Int| Literal["time","freq"] | Default = Default('freq'),size: Int = Default('1024'),hrir: Int| Literal["stereo","multich"] | Default = Default('stereo'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Apply head-related transfer functions (HRTFs) to create virtual
loudspeakers around the user for binaural listening via headphones.
The HRIRs are provided via additional streams, for each channel
one stereo input stream is needed.

The filter accepts the following options:


Args:
    map: Set mapping of input streams for convolution. The argument is a '|'-separated list of channel names in order as they are given as additional stream inputs for filter. This also specify number of input streams. Number of input streams must be not less than number of channels in first stream plus one.
    gain: Set gain applied to audio. Value is in dB. Default is 0.
    lfe: Set custom gain for LFE channels. Value is in dB. Default is 0.
    type: Set processing type. Can be time or freq. time is processing audio in time domain which is slow. freq is processing audio in frequency domain which is fast. Default is freq.
    size: Set size of frame in number of samples which will be processed at once. Default value is 1024. Allowed range is from 1024 to 96000.
    hrir: Set format of hrir stream. Default value is stereo. Alternative value is multich. If value is set to stereo, number of additional streams should be greater or equal to number of input channels in first input stream. Also each additional stream should have stereo number of channels. If value is set to multich, number of additional streams should be exactly one. Also number of input channels of additional stream should be equal or greater than twice number of channels of first input stream.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#headphone)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='headphone', typings_input="[StreamType.audio] + [StreamType.audio] * (len(str(map).split('|')) - 1) if int(hrir) == 1 else []", typings_output=('audio',)),



        *streams,



        **merge({

            "map": map,

            "gain": gain,

            "lfe": lfe,

            "type": type,

            "size": size,

            "hrir": hrir,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)













def hilbert(





    *,
    sample_rate: Int = Default('44100'),taps: Int = Default('22051'),nb_samples: Int = Default('1024'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('blackman'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate odd-tap Hilbert transform FIR coefficients.

The resulting stream can be used with afir filter for phase-shifting
the signal by 90 degrees.

This is used in many matrix coding schemes and for analytic signal generation.
The process is often written as a multiplication by i (or j), the imaginary unit.

The filter accepts the following options:


Args:
    sample_rate: Set sample rate, default is 44100.
    taps: Set length of FIR filter, default is 22051.
    nb_samples: Set number of samples per each frame.
    win_func: Set window function to be used when generating FIR coefficients.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hilbert)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='hilbert', typings_input=(), typings_output=('audio',)),





        **merge({

            "sample_rate": sample_rate,

            "taps": taps,

            "nb_samples": nb_samples,

            "win_func": win_func,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)















def hstack(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),shortest: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack input videos horizontally.

All streams must be of same pixel format and of same height.

Note that this filter is faster than using overlay and pad filter
to create same output.

The filter accepts the following option:


Args:
    inputs: Set number of input streams. Default is 2.
    shortest: If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hstack)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='hstack', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "shortest": shortest,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def hstack_vaapi(



    *streams: VideoStream,




    inputs: Int = Default('2'),shortest: Boolean = Default('false'),height: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack input videos horizontally.

This is the VA-API variant of the hstack filter, each input stream may
have different height, this filter will scale down/up each input stream while
keeping the orignal aspect.

It accepts the following options:


Args:
    inputs: See hstack.
    shortest: See hstack.
    height: Set height of output. If set to 0, this filter will set height of output to height of the first input stream. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hstack_vaapi)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='hstack_vaapi', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "shortest": shortest,

            "height": height,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

































def interleave(



    *streams: VideoStream,




    nb_inputs: Int = Auto('len(streams)'),duration: Int| Literal["longest","shortest","first"] | Default = Default('longest'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Temporally interleave frames from several inputs.

interleave works with video inputs, ainterleave with audio.

These filters read frames from several inputs and send the oldest
queued frame to the output.

Input streams must have well defined, monotonically increasing frame
timestamp values.

In order to submit one frame to output, these filters need to enqueue
at least one frame for each input, so they cannot work in case one
input is not yet terminated and will not receive incoming frames.

For example consider the case when one input is a select filter
which always drops input frames. The interleave filter will keep
reading from that input, but it will never be able to send new frames
to output until the input sends an end-of-stream signal.

Also, depending on inputs synchronization, the filters will drop
frames in case one input receives more frames than the other ones, and
the queue is already filled.

These filters accept the following options:


Args:
    nb_inputs: Set the number of different inputs, it is 2 by default.
    duration: How to determine the end-of-stream. @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#interleave)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='interleave', typings_input='[StreamType.video] * int(nb_inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "nb_inputs": nb_inputs,

            "duration": duration,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def join(



    *streams: AudioStream,




    inputs: Int = Auto('len(streams)'),channel_layout: String = Default('stereo'),map: String = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Join multiple input streams into one multi-channel stream.

It accepts the following parameters:


Args:
    inputs: The number of input streams. It defaults to 2.
    channel_layout: The desired output channel layout. It defaults to stereo.
    map: Map channels from inputs to output. The argument is a '|'-separated list of mappings, each in the input_idx.in_channel-out_channel form. input_idx is the 0-based index of the input stream. in_channel can be either the name of the input channel (e.g. FL for front left) or its index in the specified input stream. out_channel is the name of the output channel.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#join)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='join', typings_input='[StreamType.audio] * int(inputs)', typings_output=('audio',)),



        *streams,



        **merge({

            "inputs": inputs,

            "channel_layout": channel_layout,

            "map": map,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)



















def life(





    *,
    filename: String = Default(None),size: Image_size = Default(None),rate: Video_rate = Default('25'),rule: String = Default('B3/S23'),random_fill_ratio: Double = Default('0.618034'),random_seed: Int64 = Default('-1'),stitch: Boolean = Default('true'),mold: Int = Default('0'),life_color: Color = Default('white'),death_color: Color = Default('black'),mold_color: Color = Default('black'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate a life pattern.

This source is based on a generalization of John Conway's life game.

The sourced input represents a life grid, each pixel represents a cell
which can be in one of two possible states, alive or dead. Every cell
interacts with its eight neighbours, which are the cells that are
horizontally, vertically, or diagonally adjacent.

At each interaction the grid evolves according to the adopted rule,
which specifies the number of neighbor alive cells which will make a
cell stay alive or born. The rule option allows one to specify
the rule to adopt.

This source accepts the following options:


Args:
    filename: Set the file from which to read the initial grid state. In the file, each non-whitespace character is considered an alive cell, and newline is used to delimit the end of each row. If this option is not specified, the initial grid is generated randomly.
    size: Set the size of the output video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. If filename is specified, the size is set by default to the same size of the input file. If size is set, it must contain the size specified in the input file, and the initial grid defined in that file is centered in the larger resulting area. If a filename is not specified, the size value defaults to "320x240" (used for a randomly generated initial grid).
    rate: Set the video rate, that is the number of frames generated per second. Default is 25.
    rule: Set the life rule. A rule can be specified with a code of the kind "SNS/BNB", where NS and NB are sequences of numbers in the range 0-8, NS specifies the number of alive neighbor cells which make a live cell stay alive, and NB the number of alive neighbor cells which make a dead cell to become alive (i.e. to "born"). "s" and "b" can be used in place of "S" and "B", respectively. Alternatively a rule can be specified by an 18-bits integer. The 9 high order bits are used to encode the next cell state if it is alive for each number of neighbor alive cells, the low order bits specify the rule for "borning" new cells. Higher order bits encode for an higher number of neighbor cells. For example the number 6153 = (12<<9)+9 specifies a stay alive rule of 12 and a born rule of 9, which corresponds to "S23/B03". Default value is "S23/B3", which is the original Conway's game of life rule, and will keep a cell alive if it has 2 or 3 neighbor alive cells, and will born a new cell if there are three alive cells around a dead cell.
    random_fill_ratio: Set the random fill ratio for the initial random grid. It is a floating point number value ranging from 0 to 1, defaults to 1/PHI. It is ignored when a file is specified.
    random_seed: Set the seed for filling the initial random grid, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
    stitch: If set to 1, stitch the left and right grid edges together, and the top and bottom edges also. Defaults to 1.
    mold: Set cell mold speed. If set, a dead cell will go from death_color to mold_color with a step of mold. mold can have a value from 0 to 255.
    life_color: Set the color of living (or new born) cells.
    death_color: Set the color of dead cells. If mold is set, this is the first color used to represent a dead cell.
    mold_color: Set mold color, for definitely dead and moldy cells. For the syntax of these 3 color options, check the "Color" section in the ffmpeg-utils manual.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#life)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='life', typings_input=(), typings_output=('video',)),





        **merge({

            "filename": filename,

            "size": size,

            "rate": rate,

            "rule": rule,

            "random_fill_ratio": random_fill_ratio,

            "random_seed": random_seed,

            "stitch": stitch,

            "mold": mold,

            "life_color": life_color,

            "death_color": death_color,

            "mold_color": mold_color,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def limitdiff(



    *streams: VideoStream,




    threshold: Float = Default('0.00392157'),elasticity: Float = Default('2'),reference: Boolean = Default('false'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply limited difference filter using second and optionally third video stream.

The filter accepts the following options:


Args:
    threshold: Set the threshold to use when allowing certain differences between video streams. Any absolute difference value lower or exact than this threshold will pick pixel components from first video stream.
    elasticity: Set the elasticity of soft thresholding when processing video streams. This value multiplied with first one sets second threshold. Any absolute difference value greater or exact than second threshold will pick pixel components from second video stream. For values between those two threshold linear interpolation between first and second video stream will be used.
    reference: Enable the reference (third) video stream processing. By default is disabled. If set, this video stream will be used for calculating absolute difference with first video stream.
    planes: Specify which planes will be processed. Defaults to all available.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#limitdiff)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='limitdiff', typings_input='[StreamType.video, StreamType.video] + ([StreamType.video] if reference else [])', typings_output=('video',)),



        *streams,



        **merge({

            "threshold": threshold,

            "elasticity": elasticity,

            "reference": reference,

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)































def mandelbrot(





    *,
    size: Image_size = Default('640x480'),rate: Video_rate = Default('25'),maxiter: Int = Default('7189'),start_x: Double = Default('-0.743644'),start_y: Double = Default('-0.131826'),start_scale: Double = Default('3'),end_scale: Double = Default('0.3'),end_pts: Double = Default('400'),bailout: Double = Default('10'),morphxf: Double = Default('0.01'),morphyf: Double = Default('0.0123'),morphamp: Double = Default('0'),outer: Int| Literal["iteration_count","normalized_iteration_count","white","outz"] | Default = Default('normalized_iteration_count'),inner: Int| Literal["black","period","convergence","mincol"] | Default = Default('mincol'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate a Mandelbrot set fractal, and progressively zoom towards the
point specified with start_x and start_y.

This source accepts the following options:


Args:
    size: Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    maxiter: Set the maximum of iterations performed by the rendering algorithm. Default value is 7189.
    start_x: Set the initial x position. Must be a floating point value between -100 and 100. Default value is -0.743643887037158704752191506114774.
    start_y: Set the initial y position. Must be a floating point value between -100 and 100. Default value is -0.131825904205311970493132056385139.
    start_scale: Set the initial scale value. Default value is 3.0.
    end_scale: Set the terminal scale value. Must be a floating point value. Default value is 0.3.
    end_pts: Set the terminal pts value. Default value is 400.
    bailout: Set the bailout value. Default value is 10.0.
    morphxf: set morph x frequency (from -FLT_MAX to FLT_MAX) (default 0.01)
    morphyf: set morph y frequency (from -FLT_MAX to FLT_MAX) (default 0.0123)
    morphamp: set morph amplitude (from -FLT_MAX to FLT_MAX) (default 0)
    outer: Set outer coloring mode. It shall assume one of following values: @end table Default value is normalized_iteration_count.
    inner: Set the inner coloring mode, that is the algorithm used to draw the Mandelbrot fractal internal region. It shall assume one of the following values: @end table Default value is mincol.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mandelbrot)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='mandelbrot', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "maxiter": maxiter,

            "start_x": start_x,

            "start_y": start_y,

            "start_scale": start_scale,

            "end_scale": end_scale,

            "end_pts": end_pts,

            "bailout": bailout,

            "morphxf": morphxf,

            "morphyf": morphyf,

            "morphamp": morphamp,

            "outer": outer,

            "inner": inner,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

























def mergeplanes(



    *streams: VideoStream,




    mapping: Int = Default('-1'),format: Pix_fmt = Default('yuva444p'),map0s: Int = Default('0'),map0p: Int = Default('0'),map1s: Int = Default('0'),map1p: Int = Default('0'),map2s: Int = Default('0'),map2p: Int = Default('0'),map3s: Int = Default('0'),map3p: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Merge color channel components from several video streams.

The filter accepts up to 4 input streams, and merge selected input
planes to the output video.

This filter accepts the following options:


Args:
    mapping: Set input to output plane mapping. Default is 0. The mappings is specified as a bitmap. It should be specified as a hexadecimal number in the form 0xAa[Bb[Cc[Dd]]]. 'Aa' describes the mapping for the first plane of the output stream. 'A' sets the number of the input stream to use (from 0 to 3), and 'a' the plane number of the corresponding input to use (from 0 to 3). The rest of the mappings is similar, 'Bb' describes the mapping for the output stream second plane, 'Cc' describes the mapping for the output stream third plane and 'Dd' describes the mapping for the output stream fourth plane.
    format: Set output pixel format. Default is yuva444p.
    map0s: set 1st input to output stream mapping (from 0 to 3) (default 0)
    map0p: set 1st input to output plane mapping (from 0 to 3) (default 0)
    map1s: set 2nd input to output stream mapping (from 0 to 3) (default 0)
    map1p: set 2nd input to output plane mapping (from 0 to 3) (default 0)
    map2s: set 3rd input to output stream mapping (from 0 to 3) (default 0)
    map2p: set 3rd input to output plane mapping (from 0 to 3) (default 0)
    map3s: Set input to output stream mapping for output Nth plane. Default is 0.
    map3p: Set input to output plane mapping for output Nth plane. Default is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mergeplanes)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='mergeplanes', typings_input='[StreamType.video] * int(max(hex(int(mapping))[2::2]))', typings_output=('video',)),



        *streams,



        **merge({

            "mapping": mapping,

            "format": format,

            "map0s": map0s,

            "map0p": map0p,

            "map1s": map1s,

            "map1p": map1p,

            "map2s": map2s,

            "map2p": map2p,

            "map3s": map3s,

            "map3p": map3p,

        },
        extra_options,


        )
    )
    return filter_node.video(0)















def mix(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),weights: String = Default('1 1'),scale: Float = Default('0'),planes: Flags = Default('F'),duration: Int| Literal["longest","shortest","first"] | Default = Default('longest'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Mix several video input streams into one video stream.

A description of the accepted options follows.


Args:
    inputs: The number of inputs. If unspecified, it defaults to 2.
    weights: set weight for each input (default "1 1")
    scale: set scale (from 0 to 32767) (default 0)
    planes: Syntax is same as option with same name.
    duration: Specify how end of stream is determined. @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mix)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='mix', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "weights": weights,

            "scale": scale,

            "planes": planes,

            "duration": duration,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)











def movie(





    *,
    filename: String = Default(None),format_name: String = Default(None),stream_index: Int = Default('-1'),seek_point: Double = Default('0'),streams: String = Default(None),loop: Int = Default('1'),discontinuity: Duration = Default('0'),dec_threads: Int = Default('0'),format_opts: Dictionary = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> FilterNode:
    """

Read audio and/or video stream(s) from a movie container.

It accepts the following parameters:


Args:
    filename: The name of the resource to read (not necessarily a file; it can also be a device or a stream accessed through some protocol).
    format_name: Specifies the format assumed for the movie to read, and can be either the name of a container or an input device. If not specified, the format is guessed from movie_name or by probing.
    stream_index: Specifies the index of the video stream to read. If the value is -1, the most suitable video stream will be automatically selected. The default value is "-1". Deprecated. If the filter is called "amovie", it will select audio instead of video.
    seek_point: Specifies the seek point in seconds. The frames will be output starting from this seek point. The parameter is evaluated with av_strtod, so the numerical value may be suffixed by an IS postfix. The default value is "0".
    streams: Specifies the streams to read. Several streams can be specified, separated by "+". The source will then have as many outputs, in the same order. The syntax is explained in the "Stream specifiers" section in the ffmpeg manual. Two special names, "dv" and "da" specify respectively the default (best suited) video and audio stream. Default is "dv", or "da" if the filter is called as "amovie".
    loop: Specifies how many times to read the stream in sequence. If the value is 0, the stream will be looped infinitely. Default value is "1". Note that when the movie is looped the source timestamps are not changed, so it will generate non monotonically increasing timestamps.
    discontinuity: Specifies the time difference between frames above which the point is considered a timestamp discontinuity which is removed by adjusting the later timestamps.
    dec_threads: Specifies the number of threads for decoding
    format_opts: Specify format options for the opened file. Format options can be specified as a list of key=value pairs separated by ':'. The following example shows how to add protocol_whitelist and protocol_blacklist options: @example ffplay -f lavfi "movie=filename='1.sdp':format_opts='protocol_whitelist=file,rtp,udp\:protocol_blacklist=http'" @end example
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#movie)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='movie', typings_input="[StreamType.video] * len(streams.split('+'))", typings_output="[StreamType.video] * len(streams.split('+'))"),





        **merge({

            "filename": filename,

            "format_name": format_name,

            "stream_index": stream_index,

            "seek_point": seek_point,

            "streams": streams,

            "loop": loop,

            "discontinuity": discontinuity,

            "dec_threads": dec_threads,

            "format_opts": format_opts,

        },
        extra_options,


        )
    )

    return filter_node









def mptestsrc(





    *,
    rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),test: Int| Literal["dc_luma","dc_chroma","freq_luma","freq_chroma","amp_luma","amp_chroma","cbp","mv","ring1","ring2","all"] | Default = Default('all'),max_frames: Int64 = Default('30'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate various test patterns, as generated by the MPlayer test filter.

The size of the generated video is fixed, and is 256x256.
This source is useful in particular for testing encoding features.

This source accepts the following options:


Args:
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
    test: Set the number or the name of the test to perform. Supported tests are: @end table Default value is "all", which will cycle through the list of all tests.
    max_frames: Set the maximum number of frames generated for each test (from 1 to I64_MAX) (default 30)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mptestsrc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='mptestsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "rate": rate,

            "duration": duration,

            "test": test,

            "max_frames": max_frames,

        },
        extra_options,


        )
    )
    return filter_node.video(0)



























def nullsrc(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='nullsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)

















def pal100bars(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='pal100bars', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def pal75bars(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='pal75bars', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)































def premultiply(



    *streams: VideoStream,




    planes: Int = Default('15'),inplace: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply alpha premultiply effect to input video stream using first plane
of second stream as alpha.

Both streams must have same dimensions and same pixel format.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    inplace: Do not require 2nd input for processing, instead use alpha plane from input stream.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#premultiply)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='premultiply', typings_input='[StreamType.video] + [StreamType.video] if inplace else []', typings_output=('video',)),



        *streams,



        **merge({

            "planes": planes,

            "inplace": inplace,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)









































def rgbtestsrc(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),complement: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    complement: set complement colors (default false)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='rgbtestsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "complement": complement,

        },
        extra_options,


        )
    )
    return filter_node.video(0)























































































def sierpinski(





    *,
    size: Image_size = Default('640x480'),rate: Video_rate = Default('25'),seed: Int64 = Default('-1'),jump: Int = Default('100'),type: Int| Literal["carpet","triangle"] | Default = Default('carpet'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate a Sierpinski carpet/triangle fractal, and randomly pan around.

This source accepts the following options:


Args:
    size: Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "640x480".
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    seed: Set seed which is used for random panning.
    jump: Set max jump for single pan destination. Allowed range is from 1 to 10000.
    type: Set fractal type, can be default carpet or triangle.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sierpinski)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='sierpinski', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "seed": seed,

            "jump": jump,

            "type": type,

        },
        extra_options,


        )
    )
    return filter_node.video(0)









def signature(



    *streams: VideoStream,




    detectmode: Int| Literal["off","full","fast"] | Default = Default('off'),nb_inputs: Int = Auto('len(streams)'),filename: String = Default(''),format: Int| Literal["binary","xml"] | Default = Default('binary'),th_d: Int = Default('9000'),th_dc: Int = Default('60000'),th_xh: Int = Default('116'),th_di: Int = Default('0'),th_it: Double = Default('0.5'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Calculates the MPEG-7 Video Signature. The filter can handle more than one
input. In this case the matching between the inputs can be calculated additionally.
The filter always passes through the first input. The signature of each stream can
be written into a file.

It accepts the following options:


Args:
    detectmode: Enable or disable the matching process. Available values are: @end table
    nb_inputs: Set the number of inputs. The option value must be a non negative integer. Default value is 1.
    filename: Set the path to which the output is written. If there is more than one input, the path must be a prototype, i.e. must contain %d or %0nd (where n is a positive integer), that will be replaced with the input number. If no filename is specified, no output will be written. This is the default.
    format: Choose the output format. Available values are: @end table
    th_d: Set threshold to detect one word as similar. The option value must be an integer greater than zero. The default value is 9000.
    th_dc: Set threshold to detect all words as similar. The option value must be an integer greater than zero. The default value is 60000.
    th_xh: Set threshold to detect frames as similar. The option value must be an integer greater than zero. The default value is 116.
    th_di: Set the minimum length of a sequence in frames to recognize it as matching sequence. The option value must be a non negative integer value. The default value is 0.
    th_it: Set the minimum relation, that matching frames to all frames must have. The option value must be a double value between 0 and 1. The default value is 0.5.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#signature)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='signature', typings_input='[StreamType.video] * int(nb_inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "detectmode": detectmode,

            "nb_inputs": nb_inputs,

            "filename": filename,

            "format": format,

            "th_d": th_d,

            "th_dc": th_dc,

            "th_xh": th_xh,

            "th_di": th_di,

            "th_it": th_it,

        },
        extra_options,


        )
    )
    return filter_node.video(0)











def sinc(





    *,
    sample_rate: Int = Default('44100'),nb_samples: Int = Default('1024'),hp: Float = Default('0'),lp: Float = Default('0'),phase: Float = Default('50'),beta: Float = Default('-1'),att: Float = Default('120'),round: Boolean = Default('false'),hptaps: Int = Default('0'),lptaps: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate a sinc kaiser-windowed low-pass, high-pass, band-pass, or band-reject FIR coefficients.

The resulting stream can be used with afir filter for filtering the audio signal.

The filter accepts the following options:


Args:
    sample_rate: Set sample rate, default is 44100.
    nb_samples: Set number of samples per each frame. Default is 1024.
    hp: Set high-pass frequency. Default is 0.
    lp: Set low-pass frequency. Default is 0. If high-pass frequency is lower than low-pass frequency and low-pass frequency is higher than 0 then filter will create band-pass filter coefficients, otherwise band-reject filter coefficients.
    phase: Set filter phase response. Default is 50. Allowed range is from 0 to 100.
    beta: Set Kaiser window beta.
    att: Set stop-band attenuation. Default is 120dB, allowed range is from 40 to 180 dB.
    round: Enable rounding, by default is disabled.
    hptaps: Set number of taps for high-pass filter.
    lptaps: Set number of taps for low-pass filter.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sinc)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='sinc', typings_input=(), typings_output=('audio',)),





        **merge({

            "sample_rate": sample_rate,

            "nb_samples": nb_samples,

            "hp": hp,

            "lp": lp,

            "phase": phase,

            "beta": beta,

            "att": att,

            "round": round,

            "hptaps": hptaps,

            "lptaps": lptaps,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)







def sine(





    *,
    frequency: Double = Default('440'),beep_factor: Double = Default('0'),sample_rate: Int = Default('44100'),duration: Duration = Default('0'),samples_per_frame: String = Default('1024'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Generate an audio signal made of a sine wave with amplitude 1/8.

The audio signal is bit-exact.

The filter accepts the following options:


Args:
    frequency: Set the carrier frequency. Default is 440 Hz.
    beep_factor: Enable a periodic beep every second with frequency beep_factor times the carrier frequency. Default is 0, meaning the beep is disabled.
    sample_rate: Specify the sample rate, default is 44100.
    duration: Specify the duration of the generated audio stream.
    samples_per_frame: Set the number of samples per output frame. The expression can contain the following constants: @end table Default is 1024.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sine)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='sine', typings_input=(), typings_output=('audio',)),





        **merge({

            "frequency": frequency,

            "beep_factor": beep_factor,

            "sample_rate": sample_rate,

            "duration": duration,

            "samples_per_frame": samples_per_frame,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)











def smptebars(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='smptebars', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def smptehdbars(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='smptehdbars', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)





























def streamselect(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),map: String = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> FilterNode:
    """

Select video or audio streams.

The filter accepts the following options:


Args:
    inputs: Set number of inputs. Default is 2.
    map: Set input indexes to remap to outputs.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#streamselect)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='streamselect', typings_input='[StreamType.video] * int(inputs)', typings_output="[StreamType.video] * len(re.findall(r'\\d+', str(map)))"),



        *streams,



        **merge({

            "inputs": inputs,

            "map": map,

        },
        extra_options,


        )
    )

    return filter_node























def testsrc(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),decimals: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    decimals: Set the number of decimals to show in the timestamp, only available in the testsrc source. The displayed timestamp value will correspond to the original timestamp value multiplied by the power of 10 of the specified value. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='testsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "decimals": decimals,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def testsrc2(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),alpha: Int = Default('255'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    alpha: Specify the alpha (opacity) of the background, only available in the testsrc2 source. The value must be between 0 (fully transparent) and 255 (fully opaque, the default).
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='testsrc2', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "alpha": alpha,

        },
        extra_options,


        )
    )
    return filter_node.video(0)











































def unpremultiply(



    *streams: VideoStream,




    planes: Int = Default('15'),inplace: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply alpha unpremultiply effect to input video stream using first plane
of second stream as alpha.

Both streams must have same dimensions and same pixel format.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed. If the format has 1 or 2 components, then luma is bit 0. If the format has 3 or 4 components: for RGB formats bit 0 is green, bit 1 is blue and bit 2 is red; for YUV formats bit 0 is luma, bit 1 is chroma-U and bit 2 is chroma-V. If present, the alpha channel is always the last bit.
    inplace: Do not require 2nd input for processing, instead use alpha plane from input stream.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#unpremultiply)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='unpremultiply', typings_input='[StreamType.video] + ([StreamType.video] if inplace else [])', typings_output=('video',)),



        *streams,



        **merge({

            "planes": planes,

            "inplace": inplace,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)













































def vstack(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),shortest: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack input videos vertically.

All streams must be of same pixel format and of same width.

Note that this filter is faster than using overlay and pad filter
to create same output.

The filter accepts the following options:


Args:
    inputs: Set number of input streams. Default is 2.
    shortest: If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vstack)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='vstack', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "shortest": shortest,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def vstack_vaapi(



    *streams: VideoStream,




    inputs: Int = Default('2'),shortest: Boolean = Default('false'),width: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack input videos vertically.

This is the VA-API variant of the vstack filter, each input stream may
have different width, this filter will scale down/up each input stream while
keeping the orignal aspect.

It accepts the following options:


Args:
    inputs: See vstack.
    shortest: See vstack.
    width: Set width of output. If set to 0, this filter will set width of output to width of the first input stream. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vstack_vaapi)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='vstack_vaapi', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "shortest": shortest,

            "width": width,

        },
        extra_options,


        )
    )
    return filter_node.video(0)



















def xmedian(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),planes: Int = Default('15'),percentile: Float = Default('0.5'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Pick median pixels from several input videos.

The filter accepts the following options:


Args:
    inputs: Set number of inputs. Default is 3. Allowed range is from 3 to 255. If number of inputs is even number, than result will be mean value between two median values.
    planes: Set which planes to filter. Default value is 15, by which all planes are processed.
    percentile: Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xmedian)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='xmedian', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "planes": planes,

            "percentile": percentile,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def xstack(



    *streams: VideoStream,




    inputs: Int = Auto('len(streams)'),layout: String = Default(None),grid: Image_size = Default(None),shortest: Boolean = Default('false'),fill: String = Default('none'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack video inputs into custom layout.

All streams must be of same pixel format.

The filter accepts the following options:


Args:
    inputs: Set number of input streams. Default is 2.
    layout: Specify layout of inputs. This option requires the desired layout configuration to be explicitly set by the user. This sets position of each video input in output. Each input is separated by '|'. The first number represents the column, and the second number represents the row. Numbers start at 0 and are separated by '_'. Optionally one can use wX and hX, where X is video input from which to take width or height. Multiple values can be used when separated by '+'. In such case values are summed together. Note that if inputs are of different sizes gaps may appear, as not all of the output video frame will be filled. Similarly, videos can overlap each other if their position doesn't leave enough space for the full frame of adjoining videos. For 2 inputs, a default layout of 0_0|w0_0 (equivalent to grid=2x1) is set. In all other cases, a layout or a grid must be set by the user. Either grid or layout can be specified at a time. Specifying both will result in an error.
    grid: Specify a fixed size grid of inputs. This option is used to create a fixed size grid of the input streams. Set the grid size in the form COLUMNSxROWS. There must be ROWS * COLUMNS input streams and they will be arranged as a grid with ROWS rows and COLUMNS columns. When using this option, each input stream within a row must have the same height and all the rows must have the same width. If grid is set, then inputs option is ignored and is implicitly set to ROWS * COLUMNS. For 2 inputs, a default grid of 2x1 (equivalent to layout=0_0|w0_0) is set. In all other cases, a layout or a grid must be set by the user. Either grid or layout can be specified at a time. Specifying both will result in an error.
    shortest: If set to 1, force the output to terminate when the shortest input terminates. Default value is 0.
    fill: If set to valid color, all unused pixels will be filled with that color. By default fill is set to none, so it is disabled.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xstack)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='xstack', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "layout": layout,

            "grid": grid,

            "shortest": shortest,

            "fill": fill,

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def xstack_vaapi(



    *streams: VideoStream,




    inputs: Int = Default('2'),shortest: Boolean = Default('false'),layout: String = Default(None),grid: Image_size = Default(None),grid_tile_size: Image_size = Default(None),fill: String = Default('none'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Stack video inputs into custom layout.

This is the VA-API variant of the xstack filter,  each input stream may
have different size, this filter will scale down/up each input stream to the
given output size, or the size of the first input stream.

It accepts the following options:


Args:
    inputs: See xstack.
    shortest: See xstack.
    layout: See xstack. Moreover, this permits the user to supply output size for each input stream. @example xstack_vaapi=inputs=4:layout=0_0_1920x1080|0_h0_1920x1080|w0_0_1920x1080|w0_h0_1920x1080 @end example
    grid: See xstack.
    grid_tile_size: Set output size for each input stream when grid is set. If this option is not set, this filter will set output size by default to the size of the first input stream. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
    fill: See xstack.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xstack_vaapi)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='xstack_vaapi', typings_input='[StreamType.video] * int(inputs)', typings_output=('video',)),



        *streams,



        **merge({

            "inputs": inputs,

            "shortest": shortest,

            "layout": layout,

            "grid": grid,

            "grid_tile_size": grid_tile_size,

            "fill": fill,

        },
        extra_options,


        )
    )
    return filter_node.video(0)











def yuvtestsrc(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The allrgb source returns frames of size 4096x4096 of all rgb colors.

The allyuv source returns frames of size 4096x4096 of all yuv colors.

The color source provides an uniformly colored input.

The colorchart source provides a colors checker chart.

The colorspectrum source provides a color spectrum input.

The haldclutsrc source provides an identity Hald CLUT. See also
haldclut filter.

The nullsrc source returns unprocessed video frames. It is
mainly useful to be employed in analysis / debugging tools, or as the
source for filters which ignore the input data.

The pal75bars source generates a color bars pattern, based on
EBU PAL recommendations with 75% color levels.

The pal100bars source generates a color bars pattern, based on
EBU PAL recommendations with 100% color levels.

The rgbtestsrc source generates an RGB test pattern useful for
detecting RGB vs BGR issues. You should see a red, green and blue
stripe from top to bottom.

The smptebars source generates a color bars pattern, based on
the SMPTE Engineering Guideline EG 1-1990.

The smptehdbars source generates a color bars pattern, based on
the SMPTE RP 219-2002.

The testsrc source generates a test video pattern, showing a
color pattern, a scrolling gradient and a timestamp. This is mainly
intended for testing purposes.

The testsrc2 source is similar to testsrc, but supports more
pixel formats instead of just rgb24. This allows using it as an
input for other tests without requiring a format conversion.

The yuvtestsrc source generates an YUV test pattern. You should
see a y, cb and cr stripe from top to bottom.

The sources accept the following parameters:


Args:
    size: Specify the size of the sourced video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 320x240. This option is not available with the allrgb, allyuv, and haldclutsrc filters.
    rate: Specify the frame rate of the sourced video, as the number of frames generated per second. It has to be a string in the format frame_rate_num/frame_rate_den, an integer number, a floating point number or a valid video frame rate abbreviation. The default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever. Since the frame rate is used as time base, all frames including the last one will have their full duration. If the specified duration is not a multiple of the frame duration, it will be rounded up.
    sar: Set the sample aspect ratio of the sourced video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#allrgb)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='yuvtestsrc', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

        },
        extra_options,


        )
    )
    return filter_node.video(0)









def zoneplate(





    *,
    size: Image_size = Default('320x240'),rate: Video_rate = Default('25'),duration: Duration = Default('-0.000001'),sar: Rational = Default('1/1'),precision: Int = Default('10'),xo: Int = Default('0'),yo: Int = Default('0'),to: Int = Default('0'),k0: Int = Default('0'),kx: Int = Default('0'),ky: Int = Default('0'),kt: Int = Default('0'),kxt: Int = Default('0'),kyt: Int = Default('0'),kxy: Int = Default('0'),kx2: Int = Default('0'),ky2: Int = Default('0'),kt2: Int = Default('0'),ku: Int = Default('0'),kv: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Generate a zoneplate test video pattern.

This source accepts the following options:


Args:
    size: Set frame size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Default value is "320x240".
    rate: Set frame rate, expressed as number of frames per second. Default value is "25".
    duration: Set the duration of the sourced video. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. If not specified, or the expressed duration is negative, the video is supposed to be generated forever.
    sar: Set the sample aspect ratio of the sourced video.
    precision: Set precision in bits for look-up table for sine calculations. Default value is 10. Allowed range is from 4 to 16.
    xo: Set horizontal axis offset for output signal. Default value is 0.
    yo: Set vertical axis offset for output signal. Default value is 0.
    to: Set time axis offset for output signal. Default value is 0.
    k0: Set 0-order, constant added to signal phase. Default value is 0.
    kx: Set 1-order, phase factor multiplier for horizontal axis. Default value is 0.
    ky: Set 1-order, phase factor multiplier for vertical axis. Default value is 0.
    kt: Set 1-order, phase factor multiplier for time axis. Default value is 0.
    kxt: Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
    kyt: Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
    kxy: Set phase factor multipliers for combination of spatial and temporal axis. Default value is 0.
    kx2: Set 2-order, phase factor multiplier for horizontal axis. Default value is 0.
    ky2: Set 2-order, phase factor multiplier for vertical axis. Default value is 0.
    kt2: Set 2-order, phase factor multiplier for time axis. Default value is 0.
    ku: Set the constant added to final phase to produce chroma-blue component of signal. Default value is 0.
    kv: Set the constant added to final phase to produce chroma-red component of signal. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#zoneplate)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='zoneplate', typings_input=(), typings_output=('video',)),





        **merge({

            "size": size,

            "rate": rate,

            "duration": duration,

            "sar": sar,

            "precision": precision,

            "xo": xo,

            "yo": yo,

            "to": to,

            "k0": k0,

            "kx": kx,

            "ky": ky,

            "kt": kt,

            "kxt": kxt,

            "kyt": kyt,

            "kxy": kxy,

            "kx2": kx2,

            "ky2": ky2,

            "kt2": kt2,

            "ku": ku,

            "kv": kv,

        },
        extra_options,


        )
    )
    return filter_node.video(0)
