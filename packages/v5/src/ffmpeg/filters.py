# NOTE: this file is auto-generated, do not modify
"""
FFmpeg filters.
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




















def acrossfade(




        _crossfade0: AudioStream,



        _crossfade1: AudioStream,




    *,
    nb_samples: Int = Default('44100'),duration: Duration = Default('0'),overlap: Boolean = Default('true'),curve1: Int| Literal["nofade","tri","qsin","esin","hsin","log","ipar","qua","cub","squ","cbr","par","exp","iqsin","ihsin","dese","desi","losi","sinc","isinc"] | Default = Default('tri'),curve2: Int| Literal["nofade","tri","qsin","esin","hsin","log","ipar","qua","cub","squ","cbr","par","exp","iqsin","ihsin","dese","desi","losi","sinc","isinc"] | Default = Default('tri'),


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




            _crossfade0,



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





















def alphamerge(




        _main: VideoStream,



        _alpha: VideoStream,







    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Add or replace the alpha component of the primary input with the
grayscale value of a second input. This is intended for use with
alphaextract to allow the transmission or storage of frame
sequences that have alpha in a format that doesn't support an alpha
channel.

For example, to reconstruct full frames from a normal YUV-encoded video
and a separate video created with alphaextract, you might use:
@example
movie=in_alpha.mkv [alpha]; [in][alpha] alphamerge [out]
@end example


Args:
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#alphamerge)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='alphamerge', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _alpha,




        **merge({

        },
        extra_options,

        framesync_options,


        timeline_options,

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

For example
@example
ffmpeg -i INPUT1 -i INPUT2 -i INPUT3 -filter_complex amix=inputs=3:duration=first:dropout_transition=3 OUTPUT
@end example
will mix 3 input audio streams to a single output with the same duration as the
first input and a dropout transition time of 3 seconds.

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











def amultiply(




        _multiply0: AudioStream,



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




            _multiply0,



            _multiply1,




        **merge({

        },
        extra_options,


        )
    )
    return filter_node.audio(0)











def anlmf(




        _input: AudioStream,



        _desired: AudioStream,




    *,
    order: Int = Default('256'),mu: Float = Default('0.75'),eps: Float = Default('1'),leakage: Float = Default('0'),out_mode: Int| Literal["i","d","o","n"] | Default = Default('o'),


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




            _input,



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




        _input: AudioStream,



        _desired: AudioStream,




    *,
    order: Int = Default('256'),mu: Float = Default('0.75'),eps: Float = Default('1'),leakage: Float = Default('0'),out_mode: Int| Literal["i","d","o","n"] | Default = Default('o'),


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




            _input,



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





































def asdr(




        _input0: AudioStream,



        _input1: AudioStream,








    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Measure Audio Signal-to-Distortion Ratio.

This filter takes two audio streams for input, and outputs first
audio stream.
Results are in dB per channel at end of either input.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#asdr)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='asdr', typings_input=('audio', 'audio'), typings_output=('audio',)),




            _input0,



            _input1,




        **merge({

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































def axcorrelate(




        _axcorrelate0: AudioStream,



        _axcorrelate1: AudioStream,




    *,
    size: Int = Default('256'),algo: Int| Literal["slow","fast"] | Default = Default('slow'),


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
    algo: Set algorithm for cross-correlation. Can be slow or fast. Default is slow. Fast algorithm assumes mean values over any given segment are always zero and thus need much less calculations to make. This is generally not true, but is valid for typical audio streams.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#axcorrelate)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='axcorrelate', typings_input=('audio', 'audio'), typings_output=('audio',)),




            _axcorrelate0,



            _axcorrelate1,




        **merge({

            "size": size,

            "algo": algo,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)





























def blend(




        _top: VideoStream,



        _bottom: VideoStream,




    *,
    c0_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c1_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c2_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c3_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),all_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('-1'),c0_expr: String = Default(None),c1_expr: String = Default(None),c2_expr: String = Default(None),c3_expr: String = Default(None),all_expr: String = Default(None),c0_opacity: Double = Default('1'),c1_opacity: Double = Default('1'),c2_opacity: Double = Default('1'),c3_opacity: Double = Default('1'),all_opacity: Double = Default('1'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Blend two video frames into each other.

The blend filter takes two input streams and outputs one
stream, the first input is the "top" layer and second input is
"bottom" layer.  By default, the output terminates when the longest input terminates.

The tblend (time blend) filter takes two consecutive frames
from one single stream, and outputs the result obtained by blending
the new frame on top of the old frame.

A description of the accepted options follows.


Args:
    c0_mode: set component #0 blend mode (from 0 to 39) (default normal)
    c1_mode: set component #1 blend mode (from 0 to 39) (default normal)
    c2_mode: set component #2 blend mode (from 0 to 39) (default normal)
    c3_mode: set component #3 blend mode (from 0 to 39) (default normal)
    all_mode: Set blend mode for specific pixel component or all pixel components in case of all_mode. Default value is normal. Available values for component modes are: @end table
    c0_expr: set color component #0 expression
    c1_expr: set color component #1 expression
    c2_expr: set color component #2 expression
    c3_expr: set color component #3 expression
    all_expr: Set blend expression for specific pixel component or all pixel components in case of all_expr. Note that related mode options will be ignored if those are set. The expressions can use the following variables: @end table
    c0_opacity: set color component #0 opacity (from 0 to 1) (default 1)
    c1_opacity: set color component #1 opacity (from 0 to 1) (default 1)
    c2_opacity: set color component #2 opacity (from 0 to 1) (default 1)
    c3_opacity: set color component #3 opacity (from 0 to 1) (default 1)
    all_opacity: Set blend opacity for specific pixel component or all pixel components in case of all_opacity. Only used in combination with pixel component blend modes.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blend)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='blend', typings_input=('video', 'video'), typings_output=('video',)),




            _top,



            _bottom,




        **merge({

            "c0_mode": c0_mode,

            "c1_mode": c1_mode,

            "c2_mode": c2_mode,

            "c3_mode": c3_mode,

            "all_mode": all_mode,

            "c0_expr": c0_expr,

            "c1_expr": c1_expr,

            "c2_expr": c2_expr,

            "c3_expr": c3_expr,

            "all_expr": all_expr,

            "c0_opacity": c0_opacity,

            "c1_opacity": c1_opacity,

            "c2_opacity": c2_opacity,

            "c3_opacity": c3_opacity,

            "all_opacity": all_opacity,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)











def bm3d(



    *streams: VideoStream,




    sigma: Float = Default('1'),block: Int = Default('4'),bstep: Int = Default('4'),group: Int = Default('1'),range: Int = Default('9'),mstep: Int = Default('1'),thmse: Float = Default('0'),hdthr: Float = Default('2.7'),estim: Int| Literal["basic","final"] | Default = Default('basic'),ref: Boolean = Default('false'),planes: Int = Default('7'),


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

























































def colormap(




        _default: VideoStream,



        _source: VideoStream,



        _target: VideoStream,




    *,
    patch_size: Image_size = Default('64x64'),nb_patches: Int = Default('0'),type: Int| Literal["relative","absolute"] | Default = Default('absolute'),kernel: Int| Literal["euclidean","weuclidean"] | Default = Default('euclidean'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply custom color maps to video stream.

This filter needs three input video streams.
First stream is video stream that is going to be filtered out.
Second and third video stream specify color patches for source
color to target color mapping.

The filter accepts the following options:


Args:
    patch_size: Set the source and target video stream patch size in pixels.
    nb_patches: Set the max number of used patches from source and target video stream. Default value is number of patches available in additional video streams. Max allowed number of patches is 64.
    type: Set the adjustments used for target colors. Can be relative or absolute. Defaults is absolute.
    kernel: Set the kernel used to measure color differences between mapped colors. The accepted values are: @end table Default is euclidean.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colormap)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='colormap', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _default,



            _source,



            _target,




        **merge({

            "patch_size": patch_size,

            "nb_patches": nb_patches,

            "type": type,

            "kernel": kernel,

        },
        extra_options,


        timeline_options,

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









def convolve(




        _main: VideoStream,



        _impulse: VideoStream,




    *,
    planes: Int = Default('7'),impulse: Int| Literal["first","all"] | Default = Default('all'),noise: Float = Default('1e-07'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply 2D convolution of video stream in frequency domain using second stream
as impulse.

The filter accepts the following options:


Args:
    planes: Set which planes to process.
    impulse: Set which impulse video frames will be processed, can be first or all. Default is all.
    noise: set noise (from 0 to 1) (default 1e-07)
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#convolve)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='convolve', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _impulse,




        **merge({

            "planes": planes,

            "impulse": impulse,

            "noise": noise,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)



































def decimate(



    *streams: VideoStream,




    cycle: Int = Default('5'),dupthresh: Double = Default('1.1'),scthresh: Double = Default('15'),blockx: Int = Default('32'),blocky: Int = Default('32'),ppsrc: Boolean = Default('false'),chroma: Boolean = Default('true'),


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

        },
        extra_options,


        )
    )
    return filter_node.video(0)







def deconvolve(




        _main: VideoStream,



        _impulse: VideoStream,




    *,
    planes: Int = Default('7'),impulse: Int| Literal["first","all"] | Default = Default('all'),noise: Float = Default('1e-07'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply 2D deconvolution of video stream in frequency domain using second stream
as impulse.

The filter accepts the following options:


Args:
    planes: Set which planes to process.
    impulse: Set which impulse video frames will be processed, can be first or all. Default is all.
    noise: Set noise when doing divisions. Default is 0.0000001. Useful when width and height are not same and not power of 2 or if stream prior to convolving had noise.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deconvolve)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='deconvolve', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _impulse,




        **merge({

            "planes": planes,

            "impulse": impulse,

            "noise": noise,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)































def displace(




        _source: VideoStream,



        _xmap: VideoStream,



        _ymap: VideoStream,




    *,
    edge: Int| Literal["blank","smear","wrap","mirror"] | Default = Default('smear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Displace pixels as indicated by second and third input stream.

It takes three input streams and outputs one stream, the first input is the
source, and second and third input are displacement maps.

The second input specifies how much to displace pixels along the
x-axis, while the third input specifies how much to displace pixels
along the y-axis.
If one of displacement map streams terminates, last frame from that
displacement map will be used.

Note that once generated, displacements maps can be reused over and over again.

A description of the accepted options follows.


Args:
    edge: Set displace behavior for pixels that are out of range. Available values are: @end table Default is smear.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#displace)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='displace', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _source,



            _xmap,



            _ymap,




        **merge({

            "edge": edge,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)























































def feedback(




        _default: VideoStream,



        _feedin: VideoStream,




    *,
    x: Int = Default('0'),w: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> tuple[


            VideoStream,



            VideoStream,


]:
    """

Apply feedback video filter.

This filter pass cropped input frames to 2nd output.
From there it can be filtered with other video filters.
After filter receives frame from 2nd input, that frame
is combined on top of original frame from 1st input and passed
to 1st output.

The typical usage is filter only part of frame.

The filter accepts the following options:


Args:
    x: set top left crop position (from 0 to INT_MAX) (default 0)
    w: set crop size (from 0 to INT_MAX) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream
    feedout: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#feedback)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='feedback', typings_input=('video', 'video'), typings_output=('video', 'video')),




            _default,



            _feedin,




        **merge({

            "x": x,

            "w": w,

        },
        extra_options,


        )
    )
    return (


                filter_node.video(0),



                filter_node.video(1),


    )
















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

























def framepack(




        _left: VideoStream,



        _right: VideoStream,




    *,
    format: Int| Literal["sbs","tab","frameseq","lines","columns"] | Default = Default('sbs'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Pack two different video streams into a stereoscopic video, setting proper
metadata on supported codecs. The two views should have the same size and
framerate and processing will stop when the shorter video ends. Please note
that you may conveniently adjust view properties with the scale and
fps filters.

It accepts the following parameters:


Args:
    format: The desired packing format. Supported values are: @end table
    extra_options: Extra options for the filter

Returns:
    packed: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#framepack)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='framepack', typings_input=('video', 'video'), typings_output=('video',)),




            _left,



            _right,




        **merge({

            "format": format,

        },
        extra_options,


        )
    )
    return filter_node.video(0)













def freezeframes(




        _source: VideoStream,



        _replace: VideoStream,




    *,
    first: Int64 = Default('0'),last: Int64 = Default('0'),replace: Int64 = Default('0'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Freeze video frames.

This filter freezes video frames using frame from 2nd input.

The filter accepts the following options:


Args:
    first: Set number of first frame from which to start freeze.
    last: Set number of last frame from which to end freeze.
    replace: Set number of frame from 2nd input which will be used instead of replaced frames.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#freezeframes)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='freezeframes', typings_input=('video', 'video'), typings_output=('video',)),




            _source,



            _replace,




        **merge({

            "first": first,

            "last": last,

            "replace": replace,

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









def haldclut(




        _main: VideoStream,



        _clut: VideoStream,




    *,
    clut: Int| Literal["first","all"] | Default = Default('all'),interp: Int| Literal["nearest","trilinear","tetrahedral","pyramid","prism"] | Default = Default('tetrahedral'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply a Hald CLUT to a video stream.

First input is the video stream to process, and second one is the Hald CLUT.
The Hald CLUT input can be a simple picture or a complete video stream.

The filter accepts the following options:


Args:
    clut: Set which CLUT video frames will be processed from second input stream, can be first or all. Default is all.
    interp: select interpolation mode (from 0 to 4) (default tetrahedral)
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#haldclut)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='haldclut', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _clut,




        **merge({

            "clut": clut,

            "interp": interp,

        },
        extra_options,

        framesync_options,


        timeline_options,

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





















def hysteresis(




        _base: VideoStream,



        _alt: VideoStream,




    *,
    planes: Int = Default('15'),threshold: Int = Default('0'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Grow first stream into second stream by connecting components.
This makes it possible to build more robust edge masks.

This filter accepts the following options:


Args:
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
    threshold: Set threshold which is used in filtering. If pixel component value is higher than this value filter algorithm for connecting components is activated. By default value is 0.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hysteresis)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='hysteresis', typings_input=('video', 'video'), typings_output=('video',)),




            _base,



            _alt,




        **merge({

            "planes": planes,

            "threshold": threshold,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def identity(




        _main: VideoStream,



        _reference: VideoStream,







    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Obtain the identity score between two input videos.

This filter takes two input videos.

Both input videos must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained per component, average, min and max identity score is printed through
the logging system.

The filter stores the calculated identity scores of each frame in frame metadata.

In the below example the input file main.mpg being processed is compared
with the reference file ref.mpg.

@example
ffmpeg -i main.mpg -i ref.mpg -lavfi identity -f null -
@end example


Args:
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#identity)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='identity', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

        },
        extra_options,

        framesync_options,


        timeline_options,

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

















def libvmaf(




        _main: VideoStream,



        _reference: VideoStream,




    *,
    model_path: String = Default(None),log_path: String = Default(None),log_fmt: String = Default('xml'),enable_transform: Boolean = Default('false'),psnr: Boolean = Default('false'),ssim: Boolean = Default('false'),ms_ssim: Boolean = Default('false'),pool: String = Default(None),n_threads: Int = Default('0'),n_subsample: Int = Default('1'),enable_conf_interval: Boolean = Default('false'),model: String = Default('version=vmaf_v0.6.1'),feature: String = Default(None),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Calulate the VMAF (Video Multi-Method Assessment Fusion) score for a
reference/distorted pair of input videos.

The first input is the distorted video, and the second input is the reference video.

The obtained VMAF score is printed through the logging system.

It requires Netflix's vmaf library (libvmaf) as a pre-requisite.
After installing the library it can be enabled using:
./configure --enable-libvmaf.

The filter has following options:


Args:
    model_path: Deprecated, use model='path=...'.
    log_path: Set the file path to be used to store log files.
    log_fmt: Set the format of the log file (xml, json, csv, or sub).
    enable_transform: Deprecated, use model='enable_transform=true'.
    psnr: Deprecated, use feature='name=psnr'.
    ssim: Deprecated, use feature='name=ssim'.
    ms_ssim: Deprecated, use feature='name=ms_ssim'.
    pool: Set the pool method to be used for computing vmaf.
    n_threads: Set number of threads to be used when initializing libvmaf. Default value: 0, no threads.
    n_subsample: Set frame subsampling interval to be used.
    enable_conf_interval: Deprecated, use model='enable_conf_interval=true'.
    model: A `|` delimited list of vmaf models. Each model can be configured with a number of parameters. Default value: "version=vmaf_v0.6.1"
    feature: A `|` delimited list of features. Each feature can be configured with a number of parameters.
    framesync_options: Framesync options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#libvmaf)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    filter_node = filter_node_factory(
        FFMpegFilterDef(name='libvmaf', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

            "model_path": model_path,

            "log_path": log_path,

            "log_fmt": log_fmt,

            "enable_transform": enable_transform,

            "psnr": psnr,

            "ssim": ssim,

            "ms_ssim": ms_ssim,

            "pool": pool,

            "n_threads": n_threads,

            "n_subsample": n_subsample,

            "enable_conf_interval": enable_conf_interval,

            "model": model,

            "feature": feature,

        },
        extra_options,

        framesync_options,


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























def lut2(




        _srcx: VideoStream,



        _srcy: VideoStream,




    *,
    c0: String = Default('x'),c1: String = Default('x'),c2: String = Default('x'),c3: String = Default('x'),d: Int = Default('0'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

The lut2 filter takes two input streams and outputs one
stream.

The tlut2 (time lut2) filter takes two consecutive frames
from one single stream.

This filter accepts the following parameters:


Args:
    c0: set first pixel component expression
    c1: set second pixel component expression
    c2: set third pixel component expression
    c3: set fourth pixel component expression, corresponds to the alpha component
    d: set output bit depth, only available for lut2 filter. By default is 0, which means bit depth is automatically picked from first input format.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut2)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='lut2', typings_input=('video', 'video'), typings_output=('video',)),




            _srcx,



            _srcy,




        **merge({

            "c0": c0,

            "c1": c1,

            "c2": c2,

            "c3": c3,

            "d": d,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)















def maskedclamp(




        _base: VideoStream,



        _dark: VideoStream,



        _bright: VideoStream,




    *,
    undershoot: Int = Default('0'),overshoot: Int = Default('0'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Clamp the first input stream with the second input and third input stream.

Returns the value of first stream to be between second input
stream - undershoot and third input stream + overshoot.

This filter accepts the following options:


Args:
    undershoot: Default value is 0.
    overshoot: Default value is 0.
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskedclamp)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='maskedclamp', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _base,



            _dark,



            _bright,




        **merge({

            "undershoot": undershoot,

            "overshoot": overshoot,

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def maskedmax(




        _source: VideoStream,



        _filter1: VideoStream,



        _filter2: VideoStream,




    *,
    planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Merge the second and third input stream into output stream using absolute differences
between second input stream and first input stream and absolute difference between
third input stream and first input stream. The picked value will be from second input
stream if second absolute difference is greater than first one or from third input stream
otherwise.

This filter accepts the following options:


Args:
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskedmax)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='maskedmax', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _source,



            _filter1,



            _filter2,




        **merge({

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def maskedmerge(




        _base: VideoStream,



        _overlay: VideoStream,



        _mask: VideoStream,




    *,
    planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Merge the first input stream with the second input stream using per pixel
weights in the third input stream.

A value of 0 in the third stream pixel component means that pixel component
from first stream is returned unchanged, while maximum value (eg. 255 for
8-bit videos) means that pixel component from second stream is returned
unchanged. Intermediate values define the amount of merging between both
input stream's pixel components.

This filter accepts the following options:


Args:
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskedmerge)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='maskedmerge', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _base,



            _overlay,



            _mask,




        **merge({

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def maskedmin(




        _source: VideoStream,



        _filter1: VideoStream,



        _filter2: VideoStream,




    *,
    planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Merge the second and third input stream into output stream using absolute differences
between second input stream and first input stream and absolute difference between
third input stream and first input stream. The picked value will be from second input
stream if second absolute difference is less than first one or from third input stream
otherwise.

This filter accepts the following options:


Args:
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from first stream. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskedmin)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='maskedmin', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _source,



            _filter1,



            _filter2,




        **merge({

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def maskedthreshold(




        _source: VideoStream,



        _reference: VideoStream,




    *,
    threshold: Int = Default('1'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Pick pixels comparing absolute difference of two video streams with fixed
threshold.

If absolute difference between pixel component of first and second video
stream is equal or lower than user supplied threshold than pixel component
from first video stream is picked, otherwise pixel component from second
video stream is picked.

This filter accepts the following options:


Args:
    threshold: Set threshold used when picking pixels from absolute difference from two input video streams.
    planes: Set which planes will be processed as bitmap, unprocessed planes will be copied from second stream. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskedthreshold)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='maskedthreshold', typings_input=('video', 'video'), typings_output=('video',)),




            _source,



            _reference,




        **merge({

            "threshold": threshold,

            "planes": planes,

        },
        extra_options,


        timeline_options,

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











def midequalizer(




        _in0: VideoStream,



        _in1: VideoStream,




    *,
    planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply Midway Image Equalization effect using two video streams.

Midway Image Equalization adjusts a pair of images to have the same
histogram, while maintaining their dynamics as much as possible. It's
useful for e.g. matching exposures from a pair of stereo cameras.

This filter has two inputs and one output, which must be of same pixel format, but
may be of different sizes. The output of filter is first input adjusted with
midway histogram of both inputs.

This filter accepts the following option:


Args:
    planes: Set which planes to process. Default is 15, which is all available planes.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#midequalizer)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='midequalizer', typings_input=('video', 'video'), typings_output=('video',)),




            _in0,



            _in1,




        **merge({

            "planes": planes,

        },
        extra_options,


        timeline_options,

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









def morpho(




        _default: VideoStream,



        _structure: VideoStream,




    *,
    mode: Int| Literal["erode","dilate","open","close","gradient","tophat","blackhat"] | Default = Default('erode'),planes: Int = Default('7'),structure: Int| Literal["first","all"] | Default = Default('all'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

This filter allows to apply main morphological grayscale transforms,
erode and dilate with arbitrary structures set in second input stream.

Unlike naive implementation and much slower performance in erosion
and dilation filters, when speed is critical morpho filter
should be used instead.

A description of accepted options follows,


Args:
    mode: Set morphological transform to apply, can be: @end table Default is erode.
    planes: Set planes to filter, by default all planes except alpha are filtered.
    structure: Set which structure video frames will be processed from second input stream, can be first or all. Default is all.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#morpho)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='morpho', typings_input=('video', 'video'), typings_output=('video',)),




            _default,



            _structure,




        **merge({

            "mode": mode,

            "planes": planes,

            "structure": structure,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)













def msad(




        _main: VideoStream,



        _reference: VideoStream,







    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Obtain the MSAD (Mean Sum of Absolute Differences) between two input videos.

This filter takes two input videos.

Both input videos must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained per component, average, min and max MSAD is printed through
the logging system.

The filter stores the calculated MSAD of each frame in frame metadata.

In the below example the input file main.mpg being processed is compared
with the reference file ref.mpg.

@example
ffmpeg -i main.mpg -i ref.mpg -lavfi msad -f null -
@end example


Args:
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#msad)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='msad', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def multiply(




        _source: VideoStream,



        _factor: VideoStream,




    *,
    scale: Float = Default('1'),offset: Float = Default('0.5'),planes: Flags = Default('F'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Multiply first video stream pixels values with second video stream pixels values.

The filter accepts the following options:


Args:
    scale: Set the scale applied to second video stream. By default is 1. Allowed range is from 0 to 9.
    offset: Set the offset applied to second video stream. By default is 0.5. Allowed range is from -1 to 1.
    planes: Specify planes from input video stream that will be processed. By default all planes are processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#multiply)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='multiply', typings_input=('video', 'video'), typings_output=('video',)),




            _source,



            _factor,




        **merge({

            "scale": scale,

            "offset": offset,

            "planes": planes,

        },
        extra_options,


        timeline_options,

        )
    )
    return filter_node.video(0)



























def overlay(




        _main: VideoStream,



        _overlay: VideoStream,




    *,
    x: String = Default('0'),y: String = Default('0'),eof_action: Int| Literal["repeat","endall","pass"] | Default = Default('repeat'),eval: Int| Literal["init","frame"] | Default = Default('frame'),shortest: Boolean = Default('false'),format: Int| Literal["yuv420","yuv420p10","yuv422","yuv422p10","yuv444","rgb","gbrp","auto"] | Default = Default('yuv420'),repeatlast: Boolean = Default('true'),alpha: Int| Literal["straight","premultiplied"] | Default = Default('straight'),

    framesync_options: FFMpegFrameSyncOption | None = None,





    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Overlay one video on top of another.

It takes two inputs and has one output. The first input is the "main"
video on which the second input is overlaid.

It accepts the following parameters:

A description of the accepted options follows.


Args:
    x: set the x expression (default "0")
    y: Modify the x and y of the overlay input. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    eof_action: See framesync.
    eval: Set when the expressions for x, and y are evaluated. It accepts the following values: @end table Default value is frame.
    shortest: See framesync.
    format: Set the format for the output video. It accepts the following values: @end table Default value is yuv420.
    repeatlast: See framesync.
    alpha: Set format of alpha of the overlaid video, it can be straight or premultiplied. Default is straight.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#overlay)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='overlay', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _overlay,




        **merge({

            "x": x,

            "y": y,

            "eof_action": eof_action,

            "eval": eval,

            "shortest": shortest,

            "format": format,

            "repeatlast": repeatlast,

            "alpha": alpha,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)

















def paletteuse(




        _default: VideoStream,



        _palette: VideoStream,




    *,
    dither: Int| Literal["bayer","heckbert","floyd_steinberg","sierra2","sierra2_4a"] | Default = Default('sierra2_4a'),bayer_scale: Int = Default('2'),diff_mode: Int| Literal["rectangle"] | Default = Default('0'),new: Boolean = Default('false'),alpha_threshold: Int = Default('128'),use_alpha: Boolean = Default('false'),debug_kdtree: String = Default(None),color_search: Int| Literal["nns_iterative","nns_recursive","bruteforce"] | Default = Default('nns_iterative'),mean_err: Boolean = Default('false'),debug_accuracy: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Use a palette to downsample an input video stream.

The filter takes two inputs: one video stream and a palette. The palette must
be a 256 pixels image.

It accepts the following options:


Args:
    dither: Select dithering mode. Available algorithms are: @end table Default is sierra2_4a.
    bayer_scale: When bayer dithering is selected, this option defines the scale of the pattern (how much the crosshatch pattern is visible). A low value means more visible pattern for less banding, and higher value means less visible pattern at the cost of more banding. The option must be an integer value in the range [0,5]. Default is 2.
    diff_mode: If set, define the zone to process @end table Default is none.
    new: Take new palette for each output frame.
    alpha_threshold: Sets the alpha threshold for transparency. Alpha values above this threshold will be treated as completely opaque, and values below this threshold will be treated as completely transparent. The option must be an integer value in the range [0,255]. Default is 128.
    use_alpha: Apply the palette by taking alpha values into account. Only useful with palettes that are containing multiple colors with alpha components. Setting this will automatically disable 'alpha_treshold'.
    debug_kdtree: save Graphviz graph of the kdtree in specified file
    color_search: set reverse colormap color search method (from 0 to 2) (default nns_iterative)
    mean_err: compute and print mean error (default false)
    debug_accuracy: test color search accuracy (default false)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#paletteuse)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='paletteuse', typings_input=('video', 'video'), typings_output=('video',)),




            _default,



            _palette,




        **merge({

            "dither": dither,

            "bayer_scale": bayer_scale,

            "diff_mode": diff_mode,

            "new": new,

            "alpha_threshold": alpha_threshold,

            "use_alpha": use_alpha,

            "debug_kdtree": debug_kdtree,

            "color_search": color_search,

            "mean_err": mean_err,

            "debug_accuracy": debug_accuracy,

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











def psnr(




        _main: VideoStream,



        _reference: VideoStream,




    *,
    stats_file: String = Default(None),stats_version: Int = Default('1'),output_max: Boolean = Default('false'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Obtain the average, maximum and minimum PSNR (Peak Signal to Noise
Ratio) between two input videos.

This filter takes in input two input videos, the first input is
considered the "main" source and is passed unchanged to the
output. The second input is used as a "reference" video for computing
the PSNR.

Both video inputs must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained average PSNR is printed through the logging system.

The filter stores the accumulated MSE (mean squared error) of each
frame, and at the end of the processing it is averaged across all frames
equally, and the following formula is applied to obtain the PSNR:

@example
PSNR = 10*log10(MAX^2/MSE)
@end example

Where MAX is the average of the maximum values of each component of the
image.

The description of the accepted parameters follows.


Args:
    stats_file: If specified the filter will use the named file to save the PSNR of each individual frame. When filename equals "-" the data is sent to standard output.
    stats_version: Specifies which version of the stats file format to use. Details of each format are written below. Default value is 1.
    output_max: Add raw stats (max values) to the output log. (default false)
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#psnr)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='psnr', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

            "stats_file": stats_file,

            "stats_version": stats_version,

            "output_max": output_max,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)



















def remap(




        _source: VideoStream,



        _xmap: VideoStream,



        _ymap: VideoStream,




    *,
    format: Int| Literal["color","gray"] | Default = Default('color'),fill: Color = Default('black'),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream.

Destination pixel at position (X, Y) will be picked from source (x, y) position
where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero
value for pixel will be used for destination pixel.

Xmap and Ymap input video streams must be of same dimensions. Output video stream
will have Xmap/Ymap video stream dimensions.
Xmap and Ymap input video streams are 16bit depth, single channel.


Args:
    format: Specify pixel format of output from this filter. Can be color or gray. Default is color.
    fill: Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#remap)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='remap', typings_input=('video', 'video', 'video'), typings_output=('video',)),




            _source,



            _xmap,



            _ymap,




        **merge({

            "format": format,

            "fill": fill,

        },
        extra_options,


        )
    )
    return filter_node.video(0)





























def scale2ref(




        _default: VideoStream,



        _ref: VideoStream,




    *,
    w: String = Default(None),h: String = Default(None),flags: String = Default(''),interl: Boolean = Default('false'),in_color_matrix: String| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default('auto'),out_color_matrix: String| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default(None),in_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),out_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),in_v_chr_pos: Int = Default('-513'),in_h_chr_pos: Int = Default('-513'),out_v_chr_pos: Int = Default('-513'),out_h_chr_pos: Int = Default('-513'),force_original_aspect_ratio: Int| Literal["disable","decrease","increase"] | Default = Default('disable'),force_divisible_by: Int = Default('1'),param0: Double = Default('123456'),param1: Double = Default('123456'),eval: Int| Literal["init","frame"] | Default = Default('init'),


    extra_options: dict[str, Any] | None = None,
)-> tuple[


            VideoStream,



            VideoStream,


]:
    """

Scale (resize) the input video, based on a reference video.

See the scale filter for available options, scale2ref supports the same but
uses the reference video instead of the main input as basis. scale2ref also
supports the following additional constants for the w and
h options:


Args:
    w: Output video width
    h: Set the output video dimension expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    flags: Flags to pass to libswscale (default "")
    interl: set interlacing (default false)
    in_color_matrix: set input YCbCr type (default "auto")
    out_color_matrix: set output YCbCr type
    in_range: set input color range (from 0 to 2) (default auto)
    out_range: set output color range (from 0 to 2) (default auto)
    in_v_chr_pos: input vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    in_h_chr_pos: input horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_v_chr_pos: output vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_h_chr_pos: output horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    force_original_aspect_ratio: decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
    force_divisible_by: enforce that the output resolution is divisible by a defined integer when force_original_aspect_ratio is used (from 1 to 256) (default 1)
    param0: Scaler param 0 (from INT_MIN to INT_MAX) (default 123456)
    param1: Scaler param 1 (from INT_MIN to INT_MAX) (default 123456)
    eval: specify when to evaluate expressions (from 0 to 1) (default init)
    extra_options: Extra options for the filter

Returns:
    default: the video stream
    ref: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scale2ref)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='scale2ref', typings_input=('video', 'video'), typings_output=('video', 'video')),




            _default,



            _ref,




        **merge({

            "w": w,

            "h": h,

            "flags": flags,

            "interl": interl,

            "in_color_matrix": in_color_matrix,

            "out_color_matrix": out_color_matrix,

            "in_range": in_range,

            "out_range": out_range,

            "in_v_chr_pos": in_v_chr_pos,

            "in_h_chr_pos": in_h_chr_pos,

            "out_v_chr_pos": out_v_chr_pos,

            "out_h_chr_pos": out_h_chr_pos,

            "force_original_aspect_ratio": force_original_aspect_ratio,

            "force_divisible_by": force_divisible_by,

            "param0": param0,

            "param1": param1,

            "eval": eval,

        },
        extra_options,


        )
    )
    return (


                filter_node.video(0),



                filter_node.video(1),


    )


































































def sidechaincompress(




        _main: AudioStream,



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




            _main,



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




        _main: AudioStream,



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




            _main,



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

























def spectrumsynth(




        _magnitude: VideoStream,



        _phase: VideoStream,




    *,
    sample_rate: Int = Default('44100'),channels: Int = Default('1'),scale: Int| Literal["lin","log"] | Default = Default('log'),slide: Int| Literal["replace","scroll","fullframe","rscroll"] | Default = Default('fullframe'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman"] | Default = Default('rect'),overlap: Float = Default('1'),orientation: Int| Literal["vertical","horizontal"] | Default = Default('vertical'),


    extra_options: dict[str, Any] | None = None,
)-> AudioStream:
    """

Synthesize audio from 2 input video spectrums, first input stream represents
magnitude across time and second represents phase across time.
The filter will transform from frequency domain as displayed in videos back
to time domain as presented in audio output.

This filter is primarily created for reversing processed showspectrum
filter outputs, but can synthesize sound from other spectrograms too.
But in such case results are going to be poor if the phase data is not
available, because in such cases phase data need to be recreated, usually
it's just recreated from random noise.
For best results use gray only output (channel color mode in
showspectrum filter) and log scale for magnitude video and
lin scale for phase video. To produce phase, for 2nd video, use
data option. Inputs videos should generally use fullframe
slide mode as that saves resources needed for decoding video.

The filter accepts the following options:


Args:
    sample_rate: Specify sample rate of output audio, the sample rate of audio from which spectrum was generated may differ.
    channels: Set number of channels represented in input video spectrums.
    scale: Set scale which was used when generating magnitude input spectrum. Can be lin or log. Default is log.
    slide: Set slide which was used when generating inputs spectrums. Can be replace, scroll, fullframe or rscroll. Default is fullframe.
    win_func: Set window function used for resynthesis.
    overlap: Set window overlap. In range [0, 1]. Default is 1, which means optimal overlap for selected window function will be picked.
    orientation: Set orientation of input videos. Can be vertical or horizontal. Default is vertical.
    extra_options: Extra options for the filter

Returns:
    default: the audio stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#spectrumsynth)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='spectrumsynth', typings_input=('video', 'video'), typings_output=('audio',)),




            _magnitude,



            _phase,




        **merge({

            "sample_rate": sample_rate,

            "channels": channels,

            "scale": scale,

            "slide": slide,

            "win_func": win_func,

            "overlap": overlap,

            "orientation": orientation,

        },
        extra_options,


        )
    )
    return filter_node.audio(0)















def ssim(




        _main: VideoStream,



        _reference: VideoStream,




    *,
    stats_file: String = Default(None),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Obtain the SSIM (Structural SImilarity Metric) between two input videos.

This filter takes in input two input videos, the first input is
considered the "main" source and is passed unchanged to the
output. The second input is used as a "reference" video for computing
the SSIM.

Both video inputs must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The filter stores the calculated SSIM of each frame.

The description of the accepted parameters follows.


Args:
    stats_file: If specified the filter will use the named file to save the SSIM of each individual frame. When filename equals "-" the data is sent to standard output.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ssim)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='ssim', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

            "stats_file": stats_file,

        },
        extra_options,

        framesync_options,


        timeline_options,

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





























def threshold(




        _default: VideoStream,



        _threshold: VideoStream,



        _min: VideoStream,



        _max: VideoStream,




    *,
    planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply threshold effect to video stream.

This filter needs four video streams to perform thresholding.
First stream is stream we are filtering.
Second stream is holding threshold values, third stream is holding min values,
and last, fourth stream is holding max values.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#threshold)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='threshold', typings_input=('video', 'video', 'video', 'video'), typings_output=('video',)),




            _default,



            _threshold,



            _min,



            _max,




        **merge({

            "planes": planes,

        },
        extra_options,


        timeline_options,

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















def varblur(




        _default: VideoStream,



        _radius: VideoStream,




    *,
    min_r: Int = Default('0'),max_r: Int = Default('8'),planes: Int = Default('15'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply variable blur filter by using 2nd video stream to set blur radius.
The 2nd stream must have the same dimensions.

This filter accepts the following options:


Args:
    min_r: Set min allowed radius. Allowed range is from 0 to 254. Default is 0.
    max_r: Set max allowed radius. Allowed range is from 1 to 255. Default is 8.
    planes: Set which planes to process. By default, all are used.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#varblur)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='varblur', typings_input=('video', 'video'), typings_output=('video',)),




            _default,



            _radius,




        **merge({

            "min_r": min_r,

            "max_r": max_r,

            "planes": planes,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)





















def vif(




        _main: VideoStream,



        _reference: VideoStream,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Obtain the average VIF (Visual Information Fidelity) between two input videos.

This filter takes two input videos.

Both input videos must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained average VIF score is printed through the logging system.

The filter stores the calculated VIF score of each frame.

In the below example the input file main.mpg being processed is compared
with the reference file ref.mpg.

@example
ffmpeg -i main.mpg -i ref.mpg -lavfi vif -f null -
@end example

@anchor{vignette}


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vif)

    """



    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='vif', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _reference,




        **merge({

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















def xcorrelate(




        _primary: VideoStream,



        _secondary: VideoStream,




    *,
    planes: Int = Default('7'),secondary: Int| Literal["first","all"] | Default = Default('all'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply normalized cross-correlation between first and second input video stream.

Second input video stream dimensions must be lower than first input video stream.

The filter accepts the following options:


Args:
    planes: Set which planes to process.
    secondary: Set which secondary video frames will be processed from second input video stream, can be first or all. Default is all.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xcorrelate)

    """


    if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
        framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


    if timeline_options is None and enable is not None:
        timeline_options = FFMpegTimelineOption(enable=enable)

    filter_node = filter_node_factory(
        FFMpegFilterDef(name='xcorrelate', typings_input=('video', 'video'), typings_output=('video',)),




            _primary,



            _secondary,




        **merge({

            "planes": planes,

            "secondary": secondary,

        },
        extra_options,

        framesync_options,


        timeline_options,

        )
    )
    return filter_node.video(0)







def xfade(




        _main: VideoStream,



        _xfade: VideoStream,




    *,
    transition: Int| Literal["custom","fade","wipeleft","wiperight","wipeup","wipedown","slideleft","slideright","slideup","slidedown","circlecrop","rectcrop","distance","fadeblack","fadewhite","radial","smoothleft","smoothright","smoothup","smoothdown","circleopen","circleclose","vertopen","vertclose","horzopen","horzclose","dissolve","pixelize","diagtl","diagtr","diagbl","diagbr","hlslice","hrslice","vuslice","vdslice","hblur","fadegrays","wipetl","wipetr","wipebl","wipebr","squeezeh","squeezev","zoomin","fadefast","fadeslow"] | Default = Default('fade'),duration: Duration = Default('1'),offset: Duration = Default('0'),expr: String = Default(None),


    extra_options: dict[str, Any] | None = None,
)-> VideoStream:
    """

Apply cross fade from one input video stream to another input video stream.
The cross fade is applied for specified duration.

Both inputs must be constant frame-rate and have the same resolution, pixel format,
frame rate and timebase.

The filter accepts the following options:


Args:
    transition: Set one of available transition effects: @end table Default transition effect is fade.
    duration: Set cross fade duration in seconds. Range is 0 to 60 seconds. Default duration is 1 second.
    offset: Set cross fade start relative to first input stream in seconds. Default offset is 0.
    expr: Set expression for custom transition effect. The expressions can use the following variables and functions: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xfade)

    """



    filter_node = filter_node_factory(
        FFMpegFilterDef(name='xfade', typings_input=('video', 'video'), typings_output=('video',)),




            _main,



            _xfade,




        **merge({

            "transition": transition,

            "duration": duration,

            "offset": offset,

            "expr": expr,

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
