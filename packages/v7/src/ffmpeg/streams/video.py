# NOTE: this file is auto-generated, do not modify
"""
Video stream.
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
    from .audio import AudioStream


class VideoStream(FilterableStream):
    """
    Video stream.
    """































    def addroi(

    self,




    *,
    x: String = Default('0'),y: String = Default('0'),w: String = Default('0'),h: String = Default('0'),qoffset: Rational = Default('-1/10'),clear: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Mark a region of interest in a video frame.

The frame data is passed through unchanged, but metadata is attached
to the frame indicating regions of interest which can affect the
behaviour of later encoding.  Multiple regions can be marked by
applying the filter multiple times.


Args:
    x: Region distance in pixels from the left edge of the frame.
    y: Region distance in pixels from the top edge of the frame.
    w: Region width in pixels.
    h: Region height in pixels. The parameters x, y, w and h are expressions, and may contain the following variables: @end table
    qoffset: Quantisation offset to apply within the region. This must be a real value in the range -1 to +1. A value of zero indicates no quality change. A negative value asks for better quality (less quantisation), while a positive value asks for worse quality (greater quantisation). The range is calibrated so that the extreme values indicate the largest possible offset - if the rest of the frame is encoded with the worst possible quality, an offset of -1 indicates that this region should be encoded with the best possible quality anyway. Intermediate values are then interpolated in some codec-dependent way. For example, in 10-bit H.264 the quantisation parameter varies between -12 and 51. A typical qoffset value of -1/10 therefore indicates that this region should be encoded with a QP around one-tenth of the full range better than the rest of the frame. So, if most of the frame were to be encoded with a QP of around 30, this region would get a QP of around 24 (an offset of approximately -1/10 * (51 - -12) = -6.3). An extreme value of -1 would indicate that this region should be encoded with the best possible quality regardless of the treatment of the rest of the frame - that is, should be encoded at a QP of -12.
    clear: If set to true, remove any existing regions of interest marked on the frame before adding the new one.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#addroi)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='addroi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "w": w,

                "h": h,

                "qoffset": qoffset,

                "clear": clear,

            },
            extra_options,


            )
        )
        return filter_node.video(0)















































































    def alphaextract(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Extract the alpha component from the input as a grayscale video. This
is especially useful with the alphamerge filter.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#alphaextract)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='alphaextract', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def alphamerge(

    self,







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

            self,







                _alpha,




            **merge({

            },
            extra_options,

            framesync_options,


            timeline_options,

            )
        )
        return filter_node.video(0)















    def amplify(

    self,




    *,
    radius: Int = Default('2'),factor: Float = Default('2'),threshold: Float = Default('10'),tolerance: Float = Default('0'),low: Float = Default('65535'),high: Float = Default('65535'),planes: Flags = Default('7'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Amplify differences between current pixel and pixels of adjacent frames in
same pixel location.

This filter accepts the following options:


Args:
    radius: Set frame radius. Default is 2. Allowed range is from 1 to 63. For example radius of 3 will instruct filter to calculate average of 7 frames.
    factor: set factor (from 0 to 65535) (default 2)
    threshold: set threshold (from 0 to 65535) (default 10)
    tolerance: set tolerance (from 0 to 65535) (default 0)
    low: set low limit for amplification (from 0 to 65535) (default 65535)
    high: set high limit for amplification (from 0 to 65535) (default 65535)
    planes: set what planes to filter (default 7)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#amplify)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='amplify', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "radius": radius,

                "factor": factor,

                "threshold": threshold,

                "tolerance": tolerance,

                "low": low,

                "high": high,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)















































































    def ass(

    self,




    *,
    filename: String = Default(None),original_size: Image_size = Default(None),fontsdir: String = Default(None),alpha: Boolean = Default('false'),shaping: Int| Literal["auto","simple","complex"] | Default = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Same as the subtitles filter, except that it doesn't require libavcodec
and libavformat to work. On the other hand, it is limited to ASS (Advanced
Substation Alpha) subtitles files.

This filter accepts the following option in addition to the common options from
the subtitles filter:


Args:
    filename: set the filename of file to read
    original_size: set the size of the original video (used to scale fonts)
    fontsdir: set the directory containing the fonts to read
    alpha: enable processing of alpha channel (default false)
    shaping: Set the shaping engine Available values are: @end table The default is auto.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ass)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ass', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filename": filename,

                "original_size": original_size,

                "fontsdir": fontsdir,

                "alpha": alpha,

                "shaping": shaping,

            },
            extra_options,


            )
        )
        return filter_node.video(0)





















    def atadenoise(

    self,




    *,
    _0a: Float = Default('0.02'),_0b: Float = Default('0.04'),_1a: Float = Default('0.02'),_1b: Float = Default('0.04'),_2a: Float = Default('0.02'),_2b: Float = Default('0.04'),s: Int = Default('9'),p: Flags = Default('7'),a: Int| Literal["p","s"] | Default = Default('p'),_0s: Float = Default('32767'),_1s: Float = Default('32767'),_2s: Float = Default('32767'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply an Adaptive Temporal Averaging Denoiser to the video input.

The filter accepts the following options:


Args:
    _0a: Set threshold A for 1st plane. Default is 0.02. Valid range is 0 to 0.3.
    _0b: Set threshold B for 1st plane. Default is 0.04. Valid range is 0 to 5.
    _1a: Set threshold A for 2nd plane. Default is 0.02. Valid range is 0 to 0.3.
    _1b: Set threshold B for 2nd plane. Default is 0.04. Valid range is 0 to 5.
    _2a: Set threshold A for 3rd plane. Default is 0.02. Valid range is 0 to 0.3.
    _2b: Set threshold B for 3rd plane. Default is 0.04. Valid range is 0 to 5. Threshold A is designed to react on abrupt changes in the input signal and threshold B is designed to react on continuous changes in the input signal.
    s: Set number of frames filter will use for averaging. Default is 9. Must be odd number in range [5, 129].
    p: Set what planes of frame filter will use for averaging. Default is all.
    a: Set what variant of algorithm filter will use for averaging. Default is p parallel. Alternatively can be set to s serial. Parallel can be faster then serial, while other way around is never true. Parallel will abort early on first change being greater then thresholds, while serial will continue processing other side of frames if they are equal or below thresholds.
    _0s: set sigma for 1st plane (from 0 to 32767) (default 32767)
    _1s: set sigma for 2nd plane (from 0 to 32767) (default 32767)
    _2s: Set sigma for 1st plane, 2nd plane or 3rd plane. Default is 32767. Valid range is from 0 to 32767. This options controls weight for each pixel in radius defined by size. Default value means every pixel have same weight. Setting this option to 0 effectively disables filtering.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#atadenoise)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='atadenoise', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "0a": _0a,

                "0b": _0b,

                "1a": _1a,

                "1b": _1b,

                "2a": _2a,

                "2b": _2b,

                "s": s,

                "p": p,

                "a": a,

                "0s": _0s,

                "1s": _1s,

                "2s": _2s,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)















    def avgblur(

    self,




    *,
    sizeX: Int = Default('1'),planes: Int = Default('15'),sizeY: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply average blur filter.

The filter accepts the following options:


Args:
    sizeX: Set horizontal radius size.
    planes: Set which planes to filter. By default all planes are filtered.
    sizeY: Set vertical radius size, if zero it will be same as sizeX. Default is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#avgblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='avgblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sizeX": sizeX,

                "planes": planes,

                "sizeY": sizeY,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def avgblur_opencl(

    self,




    *,
    sizeX: Int = Default('1'),planes: Int = Default('15'),sizeY: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply average blur filter.

The filter accepts the following options:


Args:
    sizeX: Set horizontal radius size. Range is [1, 1024] and default value is 1.
    planes: Set which planes to filter. Default value is 0xf, by which all planes are processed.
    sizeY: Set vertical radius size. Range is [1, 1024] and default value is 0. If zero, sizeX value will be used.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#avgblur_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='avgblur_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sizeX": sizeX,

                "planes": planes,

                "sizeY": sizeY,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def avgblur_vulkan(

    self,




    *,
    sizeX: Int = Default('3'),sizeY: Int = Default('3'),planes: Int = Default('15'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply an average blur filter, implemented on the GPU using Vulkan.

The filter accepts the following options:


Args:
    sizeX: Set horizontal radius size. Range is [1, 32] and default value is 3.
    sizeY: Set vertical radius size. Range is [1, 32] and default value is 3.
    planes: Set which planes to filter. Default value is 0xf, by which all planes are processed.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#avgblur_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='avgblur_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sizeX": sizeX,

                "sizeY": sizeY,

                "planes": planes,

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def backgroundkey(

    self,




    *,
    threshold: Float = Default('0.08'),similarity: Float = Default('0.1'),blend: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Turns a static background into transparency.

The filter accepts the following option:


Args:
    threshold: Threshold for scene change detection.
    similarity: Similarity percentage with the background.
    blend: Set the blend amount for pixels that are not similar.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#backgroundkey)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='backgroundkey', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold": threshold,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)













    def bbox(

    self,




    *,
    min_val: Int = Default('16'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute the bounding box for the non-black pixels in the input frame
luma plane.

This filter computes the bounding box containing all the pixels with a
luma value greater than the minimum allowed value.
The parameters describing the bounding box are printed on the filter
log.

The filter accepts the following option:


Args:
    min_val: Set the minimal luma value. Default is 16.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bbox)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bbox', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "min_val": min_val,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def bench(

    self,




    *,
    action: Int| Literal["start","stop"] | Default = Default('start'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Benchmark part of a filtergraph.

The filter accepts the following options:


Args:
    action: Start or stop a timer. Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bench)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bench', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "action": action,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def bilateral(

    self,




    *,
    sigmaS: Float = Default('0.1'),sigmaR: Float = Default('0.1'),planes: Int = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply bilateral filter, spatial smoothing while preserving edges.

The filter accepts the following options:


Args:
    sigmaS: Set sigma of gaussian function to calculate spatial weight. Allowed range is 0 to 512. Default is 0.1.
    sigmaR: Set sigma of gaussian function to calculate range weight. Allowed range is 0 to 1. Default is 0.1.
    planes: Set planes to filter. Default is first only.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bilateral)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bilateral', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigmaS": sigmaS,

                "sigmaR": sigmaR,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def bilateral_cuda(

    self,




    *,
    sigmaS: Float = Default('0.1'),sigmaR: Float = Default('0.1'),window_size: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

CUDA accelerated bilateral filter, an edge preserving filter.
This filter is mathematically accurate thanks to the use of GPU acceleration.
For best output quality, use one to one chroma subsampling, i.e. yuv444p format.

The filter accepts the following options:


Args:
    sigmaS: Set sigma of gaussian function to calculate spatial weight, also called sigma space. Allowed range is 0.1 to 512. Default is 0.1.
    sigmaR: Set sigma of gaussian function to calculate color range weight, also called sigma color. Allowed range is 0.1 to 512. Default is 0.1.
    window_size: Set window size of the bilateral function to determine the number of neighbours to loop on. If the number entered is even, one will be added automatically. Allowed range is 1 to 255. Default is 1.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bilateral_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bilateral_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigmaS": sigmaS,

                "sigmaR": sigmaR,

                "window_size": window_size,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def bitplanenoise(

    self,




    *,
    bitplane: Int = Default('1'),filter: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Show and measure bit plane noise.

The filter accepts the following options:


Args:
    bitplane: Set which plane to analyze. Default is 1.
    filter: Filter out noisy pixels from bitplane set above. Default is disabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bitplanenoise)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bitplanenoise', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "bitplane": bitplane,

                "filter": filter,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def blackdetect(

    self,




    *,
    d: Double = Default('2'),picture_black_ratio_th: Double = Default('0.98'),pixel_black_th: Double = Default('0.1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect video intervals that are (almost) completely black. Can be
useful to detect chapter transitions, commercials, or invalid
recordings.

The filter outputs its detection analysis to both the log as well as
frame metadata. If a black segment of at least the specified minimum
duration is found, a line with the start and end timestamps as well
as duration is printed to the log with level info. In addition,
a log line with level debug is printed per frame showing the
black amount detected for that frame.

The filter also attaches metadata to the first frame of a black
segment with key lavfi.black_start and to the first frame
after the black segment ends with key lavfi.black_end. The
value is the frame's timestamp. This metadata is added regardless
of the minimum duration specified.

The filter accepts the following options:


Args:
    d: Set the minimum detected black duration expressed in seconds. It must be a non-negative floating point number. Default value is 2.0.
    picture_black_ratio_th: Set the threshold for considering a picture "black". Express the minimum value for the ratio: @example nb_black_pixels / nb_pixels @end example for which a picture is considered black. Default value is 0.98.
    pixel_black_th: Set the threshold for considering a pixel "black". The threshold expresses the maximum pixel luma value for which a pixel is considered "black". The provided value is scaled according to the following equation: @example absolute_threshold = luma_minimum_value + pixel_black_th * luma_range_size @end example luma_range_size and luma_minimum_value depend on the input video format, the range is [0-255] for YUV full-range formats and [16-235] for YUV non full-range formats. Default value is 0.10.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blackdetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='blackdetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "d": d,

                "picture_black_ratio_th": picture_black_ratio_th,

                "pixel_black_th": pixel_black_th,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def blackframe(

    self,




    *,
    amount: Int = Default('98'),threshold: Int = Default('32'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect frames that are (almost) completely black. Can be useful to
detect chapter transitions or commercials. Output lines consist of
the frame number of the detected frame, the percentage of blackness,
the position in the file if known or -1 and the timestamp in seconds.

In order to display the output lines, you need to set the loglevel at
least to the AV_LOG_INFO value.

This filter exports frame metadata lavfi.blackframe.pblack.
The value represents the percentage of pixels in the picture that
are below the threshold value.

It accepts the following parameters:


Args:
    amount: The percentage of the pixels that have to be below the threshold; it defaults to 98.
    threshold: The threshold below which a pixel value is considered black; it defaults to 32.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blackframe)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='blackframe', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "amount": amount,

                "threshold": threshold,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def blend(

    self,







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

            self,







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







    def blend_vulkan(

    self,







        _bottom: VideoStream,




    *,
    c0_mode: Int| Literal["normal","multiply"] | Default = Default('normal'),c1_mode: Int| Literal["normal","multiply"] | Default = Default('normal'),c2_mode: Int| Literal["normal","multiply"] | Default = Default('normal'),c3_mode: Int| Literal["normal","multiply"] | Default = Default('normal'),all_mode: Int| Literal["normal","multiply"] | Default = Default('-1'),c0_opacity: Double = Default('1'),c1_opacity: Double = Default('1'),c2_opacity: Double = Default('1'),c3_opacity: Double = Default('1'),all_opacity: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Blend two Vulkan frames into each other.

The blend filter takes two input streams and outputs one
stream, the first input is the "top" layer and second input is
"bottom" layer.  By default, the output terminates when the longest input terminates.

A description of the accepted options follows.


Args:
    c0_mode: set component #0 blend mode (from 0 to 39) (default normal)
    c1_mode: set component #1 blend mode (from 0 to 39) (default normal)
    c2_mode: set component #2 blend mode (from 0 to 39) (default normal)
    c3_mode: set component #3 blend mode (from 0 to 39) (default normal)
    all_mode: Set blend mode for specific pixel component or all pixel components in case of all_mode. Default value is normal. Available values for component modes are: @end table
    c0_opacity: set color component #0 opacity (from 0 to 1) (default 1)
    c1_opacity: set color component #1 opacity (from 0 to 1) (default 1)
    c2_opacity: set color component #2 opacity (from 0 to 1) (default 1)
    c3_opacity: set color component #3 opacity (from 0 to 1) (default 1)
    all_opacity: set opacity for all color components (from 0 to 1) (default 1)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blend_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='blend_vulkan', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _bottom,




            **merge({

                "c0_mode": c0_mode,

                "c1_mode": c1_mode,

                "c2_mode": c2_mode,

                "c3_mode": c3_mode,

                "all_mode": all_mode,

                "c0_opacity": c0_opacity,

                "c1_opacity": c1_opacity,

                "c2_opacity": c2_opacity,

                "c3_opacity": c3_opacity,

                "all_opacity": all_opacity,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def blockdetect(

    self,




    *,
    period_min: Int = Default('3'),period_max: Int = Default('24'),planes: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Determines blockiness of frames without altering the input frames.

Based on Remco Muijs and Ihor Kirenko: "A no-reference blocking artifact measure for adaptive video processing." 2005 13th European signal processing conference.

The filter accepts the following options:


Args:
    period_min: Minimum period to search for (from 2 to 32) (default 3)
    period_max: Set minimum and maximum values for determining pixel grids (periods). Default values are [3,24].
    planes: Set planes to filter. Default is first only.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blockdetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='blockdetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "period_min": period_min,

                "period_max": period_max,

                "planes": planes,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def blurdetect(

    self,




    *,
    high: Float = Default('0.117647'),low: Float = Default('0.0588235'),radius: Int = Default('50'),block_pct: Int = Default('80'),block_width: Int = Default('-1'),planes: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Determines blurriness of frames without altering the input frames.

Based on Marziliano, Pina, et al. "A no-reference perceptual blur metric."
Allows for a block-based abbreviation.

The filter accepts the following options:


Args:
    high: Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 20/255, and default value for high is 50/255.
    low: set low threshold (from 0 to 1) (default 0.0588235)
    radius: Define the radius to search around an edge pixel for local maxima.
    block_pct: Determine blurriness only for the most significant blocks, given in percentage.
    block_width: Determine blurriness for blocks of width block_width. If set to any value smaller 1, no blocks are used and the whole image is processed as one no matter of block_height.
    planes: Set planes to filter. Default is first only.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#blurdetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='blurdetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "high": high,

                "low": low,

                "radius": radius,

                "block_pct": block_pct,

                "block_width": block_width,

                "planes": planes,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def boxblur(

    self,




    *,
    luma_radius: String = Default('2'),luma_power: Int = Default('2'),chroma_radius: String = Default(None),chroma_power: Int = Default('-1'),alpha_radius: String = Default(None),alpha_power: Int = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a boxblur algorithm to the input video.

It accepts the following parameters:


Args:
    luma_radius: Radius of the luma blurring box (default "2")
    luma_power: How many times should the boxblur be applied to luma (from 0 to INT_MAX) (default 2)
    chroma_radius: Radius of the chroma blurring box
    chroma_power: How many times should the boxblur be applied to chroma (from -1 to INT_MAX) (default -1)
    alpha_radius: Set an expression for the box radius in pixels used for blurring the corresponding input plane. The radius value must be a non-negative number, and must not be greater than the value of the expression min(w,h)/2 for the luma and alpha planes, and of min(cw,ch)/2 for the chroma planes. Default value for luma_radius is "2". If not specified, chroma_radius and alpha_radius default to the corresponding value set for luma_radius. The expressions can contain the following constants: @end table
    alpha_power: Specify how many times the boxblur filter is applied to the corresponding plane. Default value for luma_power is 2. If not specified, chroma_power and alpha_power default to the corresponding value set for luma_power. A value of 0 will disable the effect.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#boxblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='boxblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_radius": luma_radius,

                "luma_power": luma_power,

                "chroma_radius": chroma_radius,

                "chroma_power": chroma_power,

                "alpha_radius": alpha_radius,

                "alpha_power": alpha_power,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def boxblur_opencl(

    self,




    *,
    luma_radius: String = Default('2'),luma_power: Int = Default('2'),chroma_radius: String = Default(None),chroma_power: Int = Default('-1'),alpha_radius: String = Default(None),alpha_power: Int = Default('-1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a boxblur algorithm to the input video.

It accepts the following parameters:


Args:
    luma_radius: Radius of the luma blurring box (default "2")
    luma_power: How many times should the boxblur be applied to luma (from 0 to INT_MAX) (default 2)
    chroma_radius: Radius of the chroma blurring box
    chroma_power: How many times should the boxblur be applied to chroma (from -1 to INT_MAX) (default -1)
    alpha_radius: Set an expression for the box radius in pixels used for blurring the corresponding input plane. The radius value must be a non-negative number, and must not be greater than the value of the expression min(w,h)/2 for the luma and alpha planes, and of min(cw,ch)/2 for the chroma planes. Default value for luma_radius is "2". If not specified, chroma_radius and alpha_radius default to the corresponding value set for luma_radius. The expressions can contain the following constants: @end table
    alpha_power: Specify how many times the boxblur filter is applied to the corresponding plane. Default value for luma_power is 2. If not specified, chroma_power and alpha_power default to the corresponding value set for luma_power. A value of 0 will disable the effect.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#boxblur_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='boxblur_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_radius": luma_radius,

                "luma_power": luma_power,

                "chroma_radius": chroma_radius,

                "chroma_power": chroma_power,

                "alpha_radius": alpha_radius,

                "alpha_power": alpha_power,

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def bwdif(

    self,




    *,
    mode: Int| Literal["send_frame","send_field"] | Default = Default('send_field'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video ("bwdif" stands for "Bob Weaver
Deinterlacing Filter").

Motion adaptive deinterlacing based on yadif with the use of w3fdif and cubic
interpolation algorithms.
It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bwdif)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bwdif', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def bwdif_cuda(

    self,




    *,
    mode: Int| Literal["send_frame","send_field","send_frame_nospatial","send_field_nospatial"] | Default = Default('send_frame'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video using the bwdif algorithm, but implemented
in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec
and/or nvenc.

It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bwdif_cuda)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bwdif_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def bwdif_vulkan(

    self,




    *,
    mode: Int| Literal["send_frame","send_field","send_frame_nospatial","send_field_nospatial"] | Default = Default('send_frame'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlacer using bwdif, the "Bob Weaver Deinterlacing Filter" algorithm, implemented
on the GPU using Vulkan.

It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_field.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#bwdif_vulkan)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='bwdif_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def cas(

    self,




    *,
    strength: Float = Default('0'),planes: Flags = Default('7'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Contrast Adaptive Sharpen filter to video stream.

The filter accepts the following options:


Args:
    strength: Set the sharpening strength. Default value is 0.
    planes: Set planes to filter. Default value is to filter all planes except alpha plane.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#cas)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='cas', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "strength": strength,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def ccrepack(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Repack CEA-708 closed captioning side data

This filter fixes various issues seen with commerical encoders
related to upstream malformed CEA-708 payloads, specifically
incorrect number of tuples (wrong cc_count for the target FPS),
and incorrect ordering of tuples (i.e. the CEA-608 tuples are not at
the first entries in the payload).


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ccrepack)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ccrepack', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)















    def chromaber_vulkan(

    self,




    *,
    dist_x: Float = Default('0'),dist_y: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply an effect that emulates chromatic aberration. Works best with RGB inputs,
but provides a similar effect with YCbCr inputs too.


Args:
    dist_x: Horizontal displacement multiplier. Each chroma pixel's position will be multiplied by this amount, starting from the center of the image. Default is 0.
    dist_y: Similarly, this sets the vertical displacement multiplier. Default is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromaber_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromaber_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dist_x": dist_x,

                "dist_y": dist_y,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def chromahold(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),yuv: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove all color information for all colors except for certain one.

The filter accepts the following options:


Args:
    color: The color which will not be replaced with neutral chroma.
    similarity: Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. 0.0 makes pixels either fully gray, or not gray at all. Higher values result in more preserved color.
    yuv: Signals that the color passed is already in YUV instead of RGB. Literal colors like "green" or "red" don't make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromahold)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromahold', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

                "yuv": yuv,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def chromakey(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),yuv: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

YUV colorspace color/chroma keying.

The filter accepts the following options:


Args:
    color: The color which will be replaced with transparency.
    similarity: Similarity percentage with the key color. 0.01 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
    yuv: Signals that the color passed is already in YUV instead of RGB. Literal colors like "green" or "red" don't make sense with this enabled anymore. This can be used to pass exact YUV values as hexadecimal numbers.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromakey)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromakey', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

                "yuv": yuv,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def chromakey_cuda(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),yuv: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

CUDA accelerated YUV colorspace color/chroma keying.

This filter works like normal chromakey filter but operates on CUDA frames.
for more details and parameters see chromakey.


Args:
    color: set the chromakey key color (default "black")
    similarity: set the chromakey similarity value (from 0.01 to 1) (default 0.01)
    blend: set the chromakey key blend value (from 0 to 1) (default 0)
    yuv: color parameter is in yuv instead of rgb (default false)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromakey_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromakey_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

                "yuv": yuv,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def chromanr(

    self,




    *,
    thres: Float = Default('30'),sizew: Int = Default('5'),sizeh: Int = Default('5'),stepw: Int = Default('1'),steph: Int = Default('1'),threy: Float = Default('200'),threu: Float = Default('200'),threv: Float = Default('200'),distance: Int| Literal["manhattan","euclidean"] | Default = Default('manhattan'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reduce chrominance noise.

The filter accepts the following options:


Args:
    thres: Set threshold for averaging chrominance values. Sum of absolute difference of Y, U and V pixel components of current pixel and neighbour pixels lower than this threshold will be used in averaging. Luma component is left unchanged and is copied to output. Default value is 30. Allowed range is from 1 to 200.
    sizew: Set horizontal radius of rectangle used for averaging. Allowed range is from 1 to 100. Default value is 5.
    sizeh: Set vertical radius of rectangle used for averaging. Allowed range is from 1 to 100. Default value is 5.
    stepw: Set horizontal step when averaging. Default value is 1. Allowed range is from 1 to 50. Mostly useful to speed-up filtering.
    steph: Set vertical step when averaging. Default value is 1. Allowed range is from 1 to 50. Mostly useful to speed-up filtering.
    threy: Set Y threshold for averaging chrominance values. Set finer control for max allowed difference between Y components of current pixel and neigbour pixels. Default value is 200. Allowed range is from 1 to 200.
    threu: Set U threshold for averaging chrominance values. Set finer control for max allowed difference between U components of current pixel and neigbour pixels. Default value is 200. Allowed range is from 1 to 200.
    threv: Set V threshold for averaging chrominance values. Set finer control for max allowed difference between V components of current pixel and neigbour pixels. Default value is 200. Allowed range is from 1 to 200.
    distance: Set distance type used in calculations. @end table Default distance type is manhattan.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromanr)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromanr', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "thres": thres,

                "sizew": sizew,

                "sizeh": sizeh,

                "stepw": stepw,

                "steph": steph,

                "threy": threy,

                "threu": threu,

                "threv": threv,

                "distance": distance,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def chromashift(

    self,




    *,
    cbh: Int = Default('0'),cbv: Int = Default('0'),crh: Int = Default('0'),crv: Int = Default('0'),edge: Int| Literal["smear","wrap"] | Default = Default('smear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Shift chroma pixels horizontally and/or vertically.

The filter accepts the following options:


Args:
    cbh: Set amount to shift chroma-blue horizontally.
    cbv: Set amount to shift chroma-blue vertically.
    crh: Set amount to shift chroma-red horizontally.
    crv: Set amount to shift chroma-red vertically.
    edge: Set edge mode, can be smear, default, or warp.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#chromashift)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='chromashift', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cbh": cbh,

                "cbv": cbv,

                "crh": crh,

                "crv": crv,

                "edge": edge,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def ciescope(

    self,




    *,
    system: Int| Literal["ntsc","470m","ebu","470bg","smpte","240m","apple","widergb","cie1931","hdtv","rec709","uhdtv","rec2020","dcip3"] | Default = Default('hdtv'),cie: Int| Literal["xyy","ucs","luv"] | Default = Default('xyy'),gamuts: Flags| Literal["ntsc","470m","ebu","470bg","smpte","240m","apple","widergb","cie1931","hdtv","rec709","uhdtv","rec2020","dcip3"] | Default = Default('0'),size: Int = Default('512'),intensity: Float = Default('0.001'),contrast: Float = Default('0.75'),corrgamma: Boolean = Default('true'),showwhite: Boolean = Default('false'),gamma: Double = Default('2.6'),fill: Boolean = Default('true'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Display CIE color diagram with pixels overlaid onto it.

The filter accepts the following options:


Args:
    system: Set color system. @end table
    cie: Set CIE system. @end table
    gamuts: Set what gamuts to draw. See system option for available values.
    size: Set ciescope size, by default set to 512.
    intensity: Set intensity used to map input pixel values to CIE diagram.
    contrast: Set contrast used to draw tongue colors that are out of active color system gamut.
    corrgamma: Correct gamma displayed on scope, by default enabled.
    showwhite: Show white point on CIE diagram, by default disabled.
    gamma: Set input gamma. Used only with XYZ input color space.
    fill: Fill with CIE colors. By default is enabled.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#ciescope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ciescope', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "system": system,

                "cie": cie,

                "gamuts": gamuts,

                "size": size,

                "intensity": intensity,

                "contrast": contrast,

                "corrgamma": corrgamma,

                "showwhite": showwhite,

                "gamma": gamma,

                "fill": fill,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def codecview(

    self,




    *,
    mv: Flags| Literal["pf","bf","bb"] | Default = Default('0'),qp: Boolean = Default('false'),mv_type: Flags| Literal["fp","bp"] | Default = Default('0'),frame_type: Flags| Literal["if","pf","bf"] | Default = Default('0'),block: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Visualize information exported by some codecs.

Some codecs can export information through frames using side-data or other
means. For example, some MPEG based codecs export motion vectors through the
export_mvs flag in the codec flags2 option.

The filter accepts the following option:


Args:
    mv: Set motion vectors to visualize. Available flags for mv are: @end table
    qp: Display quantization parameters using the chroma planes.
    mv_type: Set motion vectors type to visualize. Includes MVs from all frames unless specified by frame_type option. Available flags for mv_type are: @end table
    frame_type: Set frame type to visualize motion vectors of. Available flags for frame_type are: @end table
    block: Display block partition structure using the luma plane.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#codecview)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='codecview', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mv": mv,

                "qp": qp,

                "mv_type": mv_type,

                "frame_type": frame_type,

                "block": block,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def colorbalance(

    self,




    *,
    rs: Float = Default('0'),gs: Float = Default('0'),bs: Float = Default('0'),rm: Float = Default('0'),gm: Float = Default('0'),bm: Float = Default('0'),rh: Float = Default('0'),gh: Float = Default('0'),bh: Float = Default('0'),pl: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Modify intensity of primary colors (red, green and blue) of input frames.

The filter allows an input frame to be adjusted in the shadows, midtones or highlights
regions for the red-cyan, green-magenta or blue-yellow balance.

A positive adjustment value shifts the balance towards the primary color, a negative
value towards the complementary color.

The filter accepts the following options:


Args:
    rs: set red shadows (from -1 to 1) (default 0)
    gs: set green shadows (from -1 to 1) (default 0)
    bs: Adjust red, green and blue shadows (darkest pixels).
    rm: set red midtones (from -1 to 1) (default 0)
    gm: set green midtones (from -1 to 1) (default 0)
    bm: Adjust red, green and blue midtones (medium pixels).
    rh: set red highlights (from -1 to 1) (default 0)
    gh: set green highlights (from -1 to 1) (default 0)
    bh: Adjust red, green and blue highlights (brightest pixels). Allowed ranges for options are [-1.0, 1.0]. Defaults are 0.
    pl: Preserve lightness when changing color balance. Default is disabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorbalance)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorbalance', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rs": rs,

                "gs": gs,

                "bs": bs,

                "rm": rm,

                "gm": gm,

                "bm": bm,

                "rh": rh,

                "gh": gh,

                "bh": bh,

                "pl": pl,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorchannelmixer(

    self,




    *,
    rr: Double = Default('1'),rg: Double = Default('0'),rb: Double = Default('0'),ra: Double = Default('0'),gr: Double = Default('0'),gg: Double = Default('1'),gb: Double = Default('0'),ga: Double = Default('0'),br: Double = Default('0'),bg: Double = Default('0'),bb: Double = Default('1'),ba: Double = Default('0'),ar: Double = Default('0'),ag: Double = Default('0'),ab: Double = Default('0'),aa: Double = Default('1'),pc: Int| Literal["none","lum","max","avg","sum","nrm","pwr"] | Default = Default('none'),pa: Double = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust video input frames by re-mixing color channels.

This filter modifies a color channel by adding the values associated to
the other channels of the same pixels. For example if the value to
modify is red, the output value will be:
@example
red=red*rr + blue*rb + green*rg + alpha*ra
@end example

The filter accepts the following options:


Args:
    rr: set the red gain for the red channel (from -2 to 2) (default 1)
    rg: set the green gain for the red channel (from -2 to 2) (default 0)
    rb: set the blue gain for the red channel (from -2 to 2) (default 0)
    ra: Adjust contribution of input red, green, blue and alpha channels for output red channel. Default is 1 for rr, and 0 for rg, rb and ra.
    gr: set the red gain for the green channel (from -2 to 2) (default 0)
    gg: set the green gain for the green channel (from -2 to 2) (default 1)
    gb: set the blue gain for the green channel (from -2 to 2) (default 0)
    ga: Adjust contribution of input red, green, blue and alpha channels for output green channel. Default is 1 for gg, and 0 for gr, gb and ga.
    br: set the red gain for the blue channel (from -2 to 2) (default 0)
    bg: set the green gain for the blue channel (from -2 to 2) (default 0)
    bb: set the blue gain for the blue channel (from -2 to 2) (default 1)
    ba: Adjust contribution of input red, green, blue and alpha channels for output blue channel. Default is 1 for bb, and 0 for br, bg and ba.
    ar: set the red gain for the alpha channel (from -2 to 2) (default 0)
    ag: set the green gain for the alpha channel (from -2 to 2) (default 0)
    ab: set the blue gain for the alpha channel (from -2 to 2) (default 0)
    aa: Adjust contribution of input red, green, blue and alpha channels for output alpha channel. Default is 1 for aa, and 0 for ar, ag and ab. Allowed ranges for options are [-2.0, 2.0].
    pc: Set preserve color mode. The accepted values are: @end table
    pa: Set the preserve color amount when changing colors. Allowed range is from [0.0, 1.0]. Default is 0.0, thus disabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorchannelmixer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorchannelmixer', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rr": rr,

                "rg": rg,

                "rb": rb,

                "ra": ra,

                "gr": gr,

                "gg": gg,

                "gb": gb,

                "ga": ga,

                "br": br,

                "bg": bg,

                "bb": bb,

                "ba": ba,

                "ar": ar,

                "ag": ag,

                "ab": ab,

                "aa": aa,

                "pc": pc,

                "pa": pa,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def colorcontrast(

    self,




    *,
    rc: Float = Default('0'),gm: Float = Default('0'),by: Float = Default('0'),rcw: Float = Default('0'),gmw: Float = Default('0'),byw: Float = Default('0'),pl: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust color contrast between RGB components.

The filter accepts the following options:


Args:
    rc: Set the red-cyan contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
    gm: Set the green-magenta contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
    by: Set the blue-yellow contrast. Defaults is 0.0. Allowed range is from -1.0 to 1.0.
    rcw: set the red-cyan weight (from 0 to 1) (default 0)
    gmw: set the green-magenta weight (from 0 to 1) (default 0)
    byw: Set the weight of each rc, gm, by option value. Default value is 0.0. Allowed range is from 0.0 to 1.0. If all weights are 0.0 filtering is disabled.
    pl: Set the amount of preserving lightness. Default value is 0.0. Allowed range is from 0.0 to 1.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorcontrast)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorcontrast', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rc": rc,

                "gm": gm,

                "by": by,

                "rcw": rcw,

                "gmw": gmw,

                "byw": byw,

                "pl": pl,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorcorrect(

    self,




    *,
    rl: Float = Default('0'),bl: Float = Default('0'),rh: Float = Default('0'),bh: Float = Default('0'),saturation: Float = Default('1'),analyze: Int| Literal["manual","average","minmax","median"] | Default = Default('manual'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust color white balance selectively for blacks and whites.
This filter operates in YUV colorspace.

The filter accepts the following options:


Args:
    rl: Set the red shadow spot. Allowed range is from -1.0 to 1.0. Default value is 0.
    bl: Set the blue shadow spot. Allowed range is from -1.0 to 1.0. Default value is 0.
    rh: Set the red highlight spot. Allowed range is from -1.0 to 1.0. Default value is 0.
    bh: Set the blue highlight spot. Allowed range is from -1.0 to 1.0. Default value is 0.
    saturation: Set the amount of saturation. Allowed range is from -3.0 to 3.0. Default value is 1.
    analyze: If set to anything other than manual it will analyze every frame and use derived parameters for filtering output frame. Possible values are: @end table Default value is manual.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorcorrect)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorcorrect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rl": rl,

                "bl": bl,

                "rh": rh,

                "bh": bh,

                "saturation": saturation,

                "analyze": analyze,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorhold(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove all color information for all RGB colors except for certain one.

The filter accepts the following options:


Args:
    color: The color which will not be replaced with neutral gray.
    similarity: Similarity percentage with the above color. 0.01 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. 0.0 makes pixels fully gray. Higher values result in more preserved color.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorhold)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorhold', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorize(

    self,




    *,
    hue: Float = Default('0'),saturation: Float = Default('0.5'),lightness: Float = Default('0.5'),mix: Float = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Overlay a solid color on the video stream.

The filter accepts the following options:


Args:
    hue: Set the color hue. Allowed range is from 0 to 360. Default value is 0.
    saturation: Set the color saturation. Allowed range is from 0 to 1. Default value is 0.5.
    lightness: Set the color lightness. Allowed range is from 0 to 1. Default value is 0.5.
    mix: Set the mix of source lightness. By default is set to 1.0. Allowed range is from 0.0 to 1.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorize)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorize', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "hue": hue,

                "saturation": saturation,

                "lightness": lightness,

                "mix": mix,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorkey(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

RGB colorspace color keying.
This filter operates on 8-bit RGB format frames by setting the alpha component of each pixel
which falls within the similarity radius of the key color to 0. The alpha value for pixels outside
the similarity radius depends on the value of the blend option.

The filter accepts the following options:


Args:
    color: Set the color for which alpha will be set to 0 (full transparency). See "Color" section in the ffmpeg-utils manual. Default is black.
    similarity: Set the radius from the key color within which other colors also have full transparency. The computed distance is related to the unit fractional distance in 3D space between the RGB values of the key color and the pixel's color. Range is 0.01 to 1.0. 0.01 matches within a very small radius around the exact key color, while 1.0 matches everything. Default is 0.01.
    blend: Set how the alpha value for pixels that fall outside the similarity radius is computed. 0.0 makes pixels either fully transparent or fully opaque. Higher values result in semi-transparent pixels, with greater transparency the more similar the pixel color is to the key color. Range is 0.0 to 1.0. Default is 0.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorkey)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorkey', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorkey_opencl(

    self,




    *,
    color: Color = Default('black'),similarity: Float = Default('0.01'),blend: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

RGB colorspace color keying.

The filter accepts the following options:


Args:
    color: The color which will be replaced with transparency.
    similarity: Similarity percentage with the key color. 0.01 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorkey_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorkey_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "color": color,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def colorlevels(

    self,




    *,
    rimin: Double = Default('0'),gimin: Double = Default('0'),bimin: Double = Default('0'),aimin: Double = Default('0'),rimax: Double = Default('1'),gimax: Double = Default('1'),bimax: Double = Default('1'),aimax: Double = Default('1'),romin: Double = Default('0'),gomin: Double = Default('0'),bomin: Double = Default('0'),aomin: Double = Default('0'),romax: Double = Default('1'),gomax: Double = Default('1'),bomax: Double = Default('1'),aomax: Double = Default('1'),preserve: Int| Literal["none","lum","max","avg","sum","nrm","pwr"] | Default = Default('none'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust video input frames using levels.

The filter accepts the following options:


Args:
    rimin: set input red black point (from -1 to 1) (default 0)
    gimin: set input green black point (from -1 to 1) (default 0)
    bimin: set input blue black point (from -1 to 1) (default 0)
    aimin: Adjust red, green, blue and alpha input black point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 0.
    rimax: set input red white point (from -1 to 1) (default 1)
    gimax: set input green white point (from -1 to 1) (default 1)
    bimax: set input blue white point (from -1 to 1) (default 1)
    aimax: Adjust red, green, blue and alpha input white point. Allowed ranges for options are [-1.0, 1.0]. Defaults are 1. Input levels are used to lighten highlights (bright tones), darken shadows (dark tones), change the balance of bright and dark tones.
    romin: set output red black point (from 0 to 1) (default 0)
    gomin: set output green black point (from 0 to 1) (default 0)
    bomin: set output blue black point (from 0 to 1) (default 0)
    aomin: Adjust red, green, blue and alpha output black point. Allowed ranges for options are [0, 1.0]. Defaults are 0.
    romax: set output red white point (from 0 to 1) (default 1)
    gomax: set output green white point (from 0 to 1) (default 1)
    bomax: set output blue white point (from 0 to 1) (default 1)
    aomax: Adjust red, green, blue and alpha output white point. Allowed ranges for options are [0, 1.0]. Defaults are 1. Output levels allows manual selection of a constrained output level range.
    preserve: Set preserve color mode. The accepted values are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorlevels)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorlevels', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rimin": rimin,

                "gimin": gimin,

                "bimin": bimin,

                "aimin": aimin,

                "rimax": rimax,

                "gimax": gimax,

                "bimax": bimax,

                "aimax": aimax,

                "romin": romin,

                "gomin": gomin,

                "bomin": bomin,

                "aomin": aomin,

                "romax": romax,

                "gomax": gomax,

                "bomax": bomax,

                "aomax": aomax,

                "preserve": preserve,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colormap(

    self,







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

            self,







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







    def colormatrix(

    self,




    *,
    src: Int| Literal["bt709","fcc","bt601","bt470","bt470bg","smpte170m","smpte240m","bt2020"] | Default = Default('-1'),dst: Int| Literal["bt709","fcc","bt601","bt470","bt470bg","smpte170m","smpte240m","bt2020"] | Default = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert color matrix.

The filter accepts the following options:


Args:
    src: set source color matrix (from -1 to 4) (default -1)
    dst: Specify the source and destination color matrix. Both values must be specified. The accepted values are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colormatrix)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colormatrix', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "src": src,

                "dst": dst,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorspace(

    self,




    *,
    all: Int| Literal["bt470m","bt470bg","bt601-6-525","bt601-6-625","bt709","smpte170m","smpte240m","bt2020"] | Default = Default('0'),space: Int| Literal["bt709","fcc","bt470bg","smpte170m","smpte240m","ycgco","gbr","bt2020nc","bt2020ncl"] | Default = Default('2'),range: Int| Literal["tv","mpeg","pc","jpeg"] | Default = Default('0'),primaries: Int| Literal["bt709","bt470m","bt470bg","smpte170m","smpte240m","smpte428","film","smpte431","smpte432","bt2020","jedec-p22","ebu3213"] | Default = Default('2'),trc: Int| Literal["bt709","bt470m","gamma22","bt470bg","gamma28","smpte170m","smpte240m","linear","srgb","iec61966-2-1","xvycc","iec61966-2-4","bt2020-10","bt2020-12"] | Default = Default('2'),format: Int| Literal["yuv420p","yuv420p10","yuv420p12","yuv422p","yuv422p10","yuv422p12","yuv444p","yuv444p10","yuv444p12"] | Default = Default('-1'),fast: Boolean = Default('false'),dither: Int| Literal["none","fsb"] | Default = Default('none'),wpadapt: Int| Literal["bradford","vonkries","identity"] | Default = Default('bradford'),iall: Int| Literal["bt470m","bt470bg","bt601-6-525","bt601-6-625","bt709","smpte170m","smpte240m","bt2020"] | Default = Default('0'),ispace: Int| Literal["bt709","fcc","bt470bg","smpte170m","smpte240m","ycgco","gbr","bt2020nc","bt2020ncl"] | Default = Default('2'),irange: Int| Literal["tv","mpeg","pc","jpeg"] | Default = Default('0'),iprimaries: Int| Literal["bt709","bt470m","bt470bg","smpte170m","smpte240m","smpte428","film","smpte431","smpte432","bt2020","jedec-p22","ebu3213"] | Default = Default('2'),itrc: Int| Literal["bt709","bt470m","gamma22","bt470bg","gamma28","smpte170m","smpte240m","linear","srgb","iec61966-2-1","xvycc","iec61966-2-4","bt2020-10","bt2020-12"] | Default = Default('2'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert colorspace, transfer characteristics or color primaries.
Input video needs to have an even size.

The filter accepts the following options:


Args:
    all: Specify all color properties at once. The accepted values are: @end table @anchor{space}
    space: Specify output colorspace. The accepted values are: @end table @anchor{trc}
    range: Specify output color range. The accepted values are: @end table
    primaries: Specify output color primaries. The accepted values are: @end table @anchor{range}
    trc: Specify output transfer characteristics. The accepted values are: @end table @anchor{primaries}
    format: Specify output color format. The accepted values are: @end table
    fast: Do a fast conversion, which skips gamma/primary correction. This will take significantly less CPU, but will be mathematically incorrect. To get output compatible with that produced by the colormatrix filter, use fast=1.
    dither: Specify dithering mode. The accepted values are: @end table
    wpadapt: Whitepoint adaptation mode. The accepted values are: @end table
    iall: Override all input properties at once. Same accepted values as all.
    ispace: Override input colorspace. Same accepted values as space.
    irange: Override input color range. Same accepted values as range.
    iprimaries: Override input color primaries. Same accepted values as primaries.
    itrc: Override input transfer characteristics. Same accepted values as trc.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorspace)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorspace', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "all": all,

                "space": space,

                "range": range,

                "primaries": primaries,

                "trc": trc,

                "format": format,

                "fast": fast,

                "dither": dither,

                "wpadapt": wpadapt,

                "iall": iall,

                "ispace": ispace,

                "irange": irange,

                "iprimaries": iprimaries,

                "itrc": itrc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def colorspace_cuda(

    self,




    *,
    range: Int| Literal["tv","mpeg","pc","jpeg"] | Default = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

CUDA accelerated implementation of the colorspace filter.

It is by no means feature complete compared to the software colorspace filter,
and at the current time only supports color range conversion between jpeg/full
and mpeg/limited range.

The filter accepts the following options:


Args:
    range: Specify output color range. The accepted values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colorspace_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colorspace_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "range": range,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def colortemperature(

    self,




    *,
    temperature: Float = Default('6500'),mix: Float = Default('1'),pl: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust color temperature in video to simulate variations in ambient color temperature.

The filter accepts the following options:


Args:
    temperature: Set the temperature in Kelvin. Allowed range is from 1000 to 40000. Default value is 6500 K.
    mix: Set mixing with filtered output. Allowed range is from 0 to 1. Default value is 1.
    pl: Set the amount of preserving lightness. Allowed range is from 0 to 1. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#colortemperature)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='colortemperature', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "temperature": temperature,

                "mix": mix,

                "pl": pl,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)













    def convolution(

    self,




    *,
    _0m: String = Default('0 0 0 0 1 0 0 0 0'),_1m: String = Default('0 0 0 0 1 0 0 0 0'),_2m: String = Default('0 0 0 0 1 0 0 0 0'),_3m: String = Default('0 0 0 0 1 0 0 0 0'),_0rdiv: Float = Default('0'),_1rdiv: Float = Default('0'),_2rdiv: Float = Default('0'),_3rdiv: Float = Default('0'),_0bias: Float = Default('0'),_1bias: Float = Default('0'),_2bias: Float = Default('0'),_3bias: Float = Default('0'),_0mode: Int| Literal["square","row","column"] | Default = Default('square'),_1mode: Int| Literal["square","row","column"] | Default = Default('square'),_2mode: Int| Literal["square","row","column"] | Default = Default('square'),_3mode: Int| Literal["square","row","column"] | Default = Default('square'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply convolution of 3x3, 5x5, 7x7 or horizontal/vertical up to 49 elements.

The filter accepts the following options:


Args:
    _0m: set matrix for 1st plane (default "0 0 0 0 1 0 0 0 0")
    _1m: set matrix for 2nd plane (default "0 0 0 0 1 0 0 0 0")
    _2m: set matrix for 3rd plane (default "0 0 0 0 1 0 0 0 0")
    _3m: Set matrix for each plane. Matrix is sequence of 9, 25 or 49 signed integers in square mode, and from 1 to 49 odd number of signed integers in row mode.
    _0rdiv: set rdiv for 1st plane (from 0 to INT_MAX) (default 0)
    _1rdiv: set rdiv for 2nd plane (from 0 to INT_MAX) (default 0)
    _2rdiv: set rdiv for 3rd plane (from 0 to INT_MAX) (default 0)
    _3rdiv: Set multiplier for calculated value for each plane. If unset or 0, it will be 1/sum of all matrix elements.
    _0bias: set bias for 1st plane (from 0 to INT_MAX) (default 0)
    _1bias: set bias for 2nd plane (from 0 to INT_MAX) (default 0)
    _2bias: set bias for 3rd plane (from 0 to INT_MAX) (default 0)
    _3bias: Set bias for each plane. This value is added to the result of the multiplication. Useful for making the overall image brighter or darker. Default is 0.0.
    _0mode: set matrix mode for 1st plane (from 0 to 2) (default square)
    _1mode: set matrix mode for 2nd plane (from 0 to 2) (default square)
    _2mode: set matrix mode for 3rd plane (from 0 to 2) (default square)
    _3mode: Set matrix mode for each plane. Can be square, row or column. Default is square.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#convolution)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='convolution', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "0m": _0m,

                "1m": _1m,

                "2m": _2m,

                "3m": _3m,

                "0rdiv": _0rdiv,

                "1rdiv": _1rdiv,

                "2rdiv": _2rdiv,

                "3rdiv": _3rdiv,

                "0bias": _0bias,

                "1bias": _1bias,

                "2bias": _2bias,

                "3bias": _3bias,

                "0mode": _0mode,

                "1mode": _1mode,

                "2mode": _2mode,

                "3mode": _3mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def convolution_opencl(

    self,




    *,
    _0m: String = Default('0 0 0 0 1 0 0 0 0'),_2m: String = Default('0 0 0 0 1 0 0 0 0'),_3m: String = Default('0 0 0 0 1 0 0 0 0'),_0rdiv: Float = Default('1'),_1rdiv: Float = Default('1'),_2rdiv: Float = Default('1'),_3rdiv: Float = Default('1'),_0bias: Float = Default('0'),_1bias: Float = Default('0'),_2bias: Float = Default('0'),_3bias: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply convolution of 3x3, 5x5, 7x7 matrix.

The filter accepts the following options:


Args:
    _0m: set matrix for 2nd plane (default "0 0 0 0 1 0 0 0 0")
    _2m: set matrix for 3rd plane (default "0 0 0 0 1 0 0 0 0")
    _3m: Set matrix for each plane. Matrix is sequence of 9, 25 or 49 signed numbers. Default value for each plane is 0 0 0 0 1 0 0 0 0.
    _0rdiv: set rdiv for 1nd plane (from 0 to INT_MAX) (default 1)
    _1rdiv: set rdiv for 2nd plane (from 0 to INT_MAX) (default 1)
    _2rdiv: set rdiv for 3rd plane (from 0 to INT_MAX) (default 1)
    _3rdiv: Set multiplier for calculated value for each plane. If unset or 0, it will be sum of all matrix elements. The option value must be a float number greater or equal to 0.0. Default value is 1.0.
    _0bias: set bias for 1st plane (from 0 to INT_MAX) (default 0)
    _1bias: set bias for 2nd plane (from 0 to INT_MAX) (default 0)
    _2bias: set bias for 3rd plane (from 0 to INT_MAX) (default 0)
    _3bias: Set bias for each plane. This value is added to the result of the multiplication. Useful for making the overall image brighter or darker. The option value must be a float number greater or equal to 0.0. Default value is 0.0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#convolution_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='convolution_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "0m": _0m,

                "2m": _2m,

                "3m": _3m,

                "0rdiv": _0rdiv,

                "1rdiv": _1rdiv,

                "2rdiv": _2rdiv,

                "3rdiv": _3rdiv,

                "0bias": _0bias,

                "1bias": _1bias,

                "2bias": _2bias,

                "3bias": _3bias,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def convolve(

    self,







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

            self,







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







    def copy(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Copy the input video source unchanged to the output. This is mainly useful for
testing purposes.

@anchor{coreimage}


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#copy)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='copy', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def corr(

    self,







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

Obtain the correlation between two input videos.

This filter takes two input videos.

Both input videos must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained per component, average, min and max correlation is printed through
the logging system.

The filter stores the calculated correlation of each frame in frame metadata.

This filter also supports the framesync options.

In the below example the input file main.mpg being processed is compared
with the reference file ref.mpg.

@example
ffmpeg -i main.mpg -i ref.mpg -lavfi corr -f null -
@end example


Args:
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#corr)

        """


        if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
            framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='corr', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _reference,




            **merge({

            },
            extra_options,

            framesync_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def cover_rect(

    self,




    *,
    cover: String = Default(None),mode: Int| Literal["cover","blur"] | Default = Default('blur'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Cover a rectangular object

It accepts the following options:


Args:
    cover: Filepath of the optional cover image, needs to be in yuv420.
    mode: Set covering mode. It accepts the following values: @end table Default value is blur.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#cover_rect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='cover_rect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cover": cover,

                "mode": mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def crop(

    self,




    *,
    out_w: String = Default('iw'),out_h: String = Default('ih'),x: String = Default('(in_w-out_w)/2'),y: String = Default('(in_h-out_h)/2'),keep_aspect: Boolean = Default('false'),exact: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Crop the input video to given dimensions.

It accepts the following parameters:


Args:
    out_w: set the width crop area expression (default "iw")
    out_h: set the height crop area expression (default "ih")
    x: set the x crop area expression (default "(in_w-out_w)/2")
    y: Set width/height of the output video and the horizontal/vertical position in the input video. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    keep_aspect: If set to 1 will force the output display aspect ratio to be the same of the input, by changing the output sample aspect ratio. It defaults to 0.
    exact: Enable exact cropping. If enabled, subsampled videos will be cropped at exact width/height/x/y as specified and will not be rounded to nearest smaller value. It defaults to 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#crop)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='crop', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "out_w": out_w,

                "out_h": out_h,

                "x": x,

                "y": y,

                "keep_aspect": keep_aspect,

                "exact": exact,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def cropdetect(

    self,




    *,
    limit: Float = Default('0.0941176'),round: Int = Default('16'),reset: Int = Default('0'),skip: Int = Default('2'),reset_count: Int = Default('0'),max_outliers: Int = Default('0'),mode: Int| Literal["black","mvedges"] | Default = Default('black'),high: Float = Default('0.0980392'),low: Float = Default('0.0588235'),mv_threshold: Int = Default('8'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Auto-detect the crop size.

It calculates the necessary cropping parameters and prints the
recommended parameters via the logging system. The detected dimensions
correspond to the non-black or video area of the input video according to mode.

It accepts the following parameters:


Args:
    limit: The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    round: The value which the width/height should be divisible by. It defaults to 16. The offset is automatically adjusted to center the video. Use 2 to get only even dimensions (needed for 4:2:2 video). 16 is best when encoding to most video codecs.
    reset: Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0. This can be useful when channel logos distort the video area. 0 indicates 'never reset', and returns the largest area encountered during playback.
    skip: Set the number of initial frames for which evaluation is skipped. Default is 2. Range is 0 to INT_MAX.
    reset_count: Set the counter that determines after how many frames cropdetect will reset the previously detected largest video area and start over to detect the current optimal crop area. Default value is 0. This can be useful when channel logos distort the video area. 0 indicates 'never reset', and returns the largest area encountered during playback.
    max_outliers: Threshold count of outliers (from 0 to INT_MAX) (default 0)
    mode: Depending on mode crop detection is based on either the mere black value of surrounding pixels or a combination of motion vectors and edge pixels. @end table
    high: Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 5/255, and default value for high is 15/255.
    low: Set low threshold for edge detection (from 0 to 1) (default 0.0588235)
    mv_threshold: Set motion in pixel units as threshold for motion detection. It defaults to 8.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#cropdetect)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='cropdetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "limit": limit,

                "round": round,

                "reset": reset,

                "skip": skip,

                "reset_count": reset_count,

                "max_outliers": max_outliers,

                "mode": mode,

                "high": high,

                "low": low,

                "mv_threshold": mv_threshold,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def cue(

    self,




    *,
    cue: Int64 = Default('0'),preroll: Duration = Default('0'),buffer: Duration = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Delay video filtering until a given wallclock timestamp. The filter first
passes on preroll amount of frames, then it buffers at most
buffer amount of frames and waits for the cue. After reaching the cue
it forwards the buffered frames and also any subsequent frames coming in its
input.

The filter can be used synchronize the output of multiple ffmpeg processes for
realtime output devices like decklink. By putting the delay in the filtering
chain and pre-buffering frames the process can pass on data to output almost
immediately after the target wallclock timestamp is reached.

Perfect frame accuracy cannot be guaranteed, but the result is good enough for
some use cases.


Args:
    cue: The cue timestamp expressed in a UNIX timestamp in microseconds. Default is 0.
    preroll: The duration of content to pass on as preroll expressed in seconds. Default is 0.
    buffer: The maximum duration of content to buffer before waiting for the cue expressed in seconds. Default is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#cue)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='cue', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cue": cue,

                "preroll": preroll,

                "buffer": buffer,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def curves(

    self,




    *,
    preset: Int| Literal["none","color_negative","cross_process","darker","increase_contrast","lighter","linear_contrast","medium_contrast","negative","strong_contrast","vintage"] | Default = Default('none'),master: String = Default(None),red: String = Default(None),green: String = Default(None),blue: String = Default(None),all: String = Default(None),psfile: String = Default(None),plot: String = Default(None),interp: Int| Literal["natural","pchip"] | Default = Default('natural'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply color adjustments using curves.

This filter is similar to the Adobe Photoshop and GIMP curves tools. Each
component (red, green and blue) has its values defined by N key points
tied from each other using a smooth curve. The x-axis represents the pixel
values from the input frame, and the y-axis the new pixel values to be set for
the output frame.

By default, a component curve is defined by the two points (0;0) and
(1;1). This creates a straight line where each original pixel value is
"adjusted" to its own value, which means no change to the image.

The filter allows you to redefine these two points and add some more. A new
curve will be defined to pass smoothly through all these new coordinates. The
new defined points need to be strictly increasing over the x-axis, and their
x and y values must be in the [0;1] interval. The curve is
formed by using a natural or monotonic cubic spline interpolation, depending
on the interp option (default: natural). The natural
spline produces a smoother curve in general while the monotonic (pchip)
spline guarantees the transitions between the specified points to be
monotonic. If the computed curves happened to go outside the vector spaces,
the values will be clipped accordingly.

The filter accepts the following options:


Args:
    preset: Select one of the available color presets. This option can be used in addition to the r, g, b parameters; in this case, the later options takes priority on the preset values. Available presets are: @end table Default is none.
    master: Set the master key points. These points will define a second pass mapping. It is sometimes called a "luminance" or "value" mapping. It can be used with r, g, b or all since it acts like a post-processing LUT.
    red: Set the key points for the red component.
    green: Set the key points for the green component.
    blue: Set the key points for the blue component.
    all: Set the key points for all components (not including master). Can be used in addition to the other key points component options. In this case, the unset component(s) will fallback on this all setting.
    psfile: Specify a Photoshop curves file (.acv) to import the settings from.
    plot: Save Gnuplot script of the curves in specified file.
    interp: Specify the kind of interpolation. Available algorithms are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#curves)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='curves', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "preset": preset,

                "master": master,

                "red": red,

                "green": green,

                "blue": blue,

                "all": all,

                "psfile": psfile,

                "plot": plot,

                "interp": interp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def datascope(

    self,




    *,
    size: Image_size = Default('hd720'),x: Int = Default('0'),y: Int = Default('0'),mode: Int| Literal["mono","color","color2"] | Default = Default('mono'),axis: Boolean = Default('false'),opacity: Float = Default('0.75'),format: Int| Literal["hex","dec"] | Default = Default('hex'),components: Int = Default('15'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Video data analysis filter.

This filter shows hexadecimal pixel values of part of video.

The filter accepts the following options:


Args:
    size: Set output video size.
    x: Set x offset from where to pick pixels.
    y: Set y offset from where to pick pixels.
    mode: Set scope mode, can be one of the following: @end table
    axis: Draw rows and columns numbers on left and top of video.
    opacity: Set background opacity.
    format: Set display number format. Can be hex, or dec. Default is hex.
    components: Set pixel components to display. By default all pixel components are displayed.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#datascope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='datascope', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "x": x,

                "y": y,

                "mode": mode,

                "axis": axis,

                "opacity": opacity,

                "format": format,

                "components": components,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def dblur(

    self,




    *,
    angle: Float = Default('45'),radius: Float = Default('5'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Directional blur filter.

The filter accepts the following options:


Args:
    angle: Set angle of directional blur. Default is 45.
    radius: Set radius of directional blur. Default is 5.
    planes: Set which planes to filter. By default all planes are filtered.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "angle": angle,

                "radius": radius,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def dctdnoiz(

    self,




    *,
    sigma: Float = Default('0'),overlap: Int = Default('-1'),expr: String = Default(None),n: Int = Default('3'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Denoise frames using 2D DCT (frequency domain filtering).

This filter is not designed for real time.

The filter accepts the following options:


Args:
    sigma: Set the noise sigma constant. This sigma defines a hard threshold of 3 * sigma; every DCT coefficient (absolute value) below this threshold with be dropped. If you need a more advanced filtering, see expr. Default is 0.
    overlap: Set number overlapping pixels for each block. Since the filter can be slow, you may want to reduce this value, at the cost of a less effective filter and the risk of various artefacts. If the overlapping value doesn't permit processing the whole input width or height, a warning will be displayed and according borders won't be denoised. Default value is blocksize-1, which is the best possible setting.
    expr: Set the coefficient factor expression. For each coefficient of a DCT block, this expression will be evaluated as a multiplier value for the coefficient. If this is option is set, the sigma option will be ignored. The absolute value of the coefficient can be accessed through the c variable.
    n: Set the blocksize using the number of bits. 1<<n defines the blocksize, which is the width and height of the processed blocks. The default value is 3 (8x8) and can be raised to 4 for a blocksize of 16x16. Note that changing this setting has huge consequences on the speed processing. Also, a larger block size does not necessarily means a better de-noising.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dctdnoiz)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dctdnoiz', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigma": sigma,

                "overlap": overlap,

                "expr": expr,

                "n": n,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def deband(

    self,




    *,
    _1thr: Float = Default('0.02'),_2thr: Float = Default('0.02'),_3thr: Float = Default('0.02'),_4thr: Float = Default('0.02'),range: Int = Default('16'),direction: Float = Default('6.28319'),blur: Boolean = Default('true'),coupling: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove banding artifacts from input video.
It works by replacing banded pixels with average value of referenced pixels.

The filter accepts the following options:


Args:
    _1thr: set 1st plane threshold (from 3e-05 to 0.5) (default 0.02)
    _2thr: set 2nd plane threshold (from 3e-05 to 0.5) (default 0.02)
    _3thr: set 3rd plane threshold (from 3e-05 to 0.5) (default 0.02)
    _4thr: Set banding detection threshold for each plane. Default is 0.02. Valid range is 0.00003 to 0.5. If difference between current pixel and reference pixel is less than threshold, it will be considered as banded.
    range: Banding detection range in pixels. Default is 16. If positive, random number in range 0 to set value will be used. If negative, exact absolute value will be used. The range defines square of four pixels around current pixel.
    direction: Set direction in radians from which four pixel will be compared. If positive, random direction from 0 to set direction will be picked. If negative, exact of absolute value will be picked. For example direction 0, -PI or -2*PI radians will pick only pixels on same row and -PI/2 will pick only pixels on same column.
    blur: If enabled, current pixel is compared with average value of all four surrounding pixels. The default is enabled. If disabled current pixel is compared with all four surrounding pixels. The pixel is considered banded if only all four differences with surrounding pixels are less than threshold.
    coupling: If enabled, current pixel is changed if and only if all pixel components are banded, e.g. banding detection threshold is triggered for all color components. The default is disabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deband)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deband', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "1thr": _1thr,

                "2thr": _2thr,

                "3thr": _3thr,

                "4thr": _4thr,

                "range": range,

                "direction": direction,

                "blur": blur,

                "coupling": coupling,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def deblock(

    self,




    *,
    filter: Int| Literal["weak","strong"] | Default = Default('strong'),block: Int = Default('8'),alpha: Float = Default('0.098'),beta: Float = Default('0.05'),gamma: Float = Default('0.05'),delta: Float = Default('0.05'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove blocking artifacts from input video.

The filter accepts the following options:


Args:
    filter: Set filter type, can be weak or strong. Default is strong. This controls what kind of deblocking is applied.
    block: Set size of block, allowed range is from 4 to 512. Default is 8.
    alpha: set 1st detection threshold (from 0 to 1) (default 0.098)
    beta: set 2nd detection threshold (from 0 to 1) (default 0.05)
    gamma: set 3rd detection threshold (from 0 to 1) (default 0.05)
    delta: Set blocking detection thresholds. Allowed range is 0 to 1. Defaults are: 0.098 for alpha and 0.05 for the rest. Using higher threshold gives more deblocking strength. Setting alpha controls threshold detection at exact edge of block. Remaining options controls threshold detection near the edge. Each one for below/above or left/right. Setting any of those to 0 disables deblocking.
    planes: Set planes to filter. Default is to filter all available planes.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deblock)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deblock', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filter": filter,

                "block": block,

                "alpha": alpha,

                "beta": beta,

                "gamma": gamma,

                "delta": delta,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def deconvolve(

    self,







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

            self,







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







    def dedot(

    self,




    *,
    m: Flags| Literal["dotcrawl","rainbows"] | Default = Default('dotcrawl+rainbows'),lt: Float = Default('0.079'),tl: Float = Default('0.079'),tc: Float = Default('0.058'),ct: Float = Default('0.019'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reduce cross-luminance (dot-crawl) and cross-color (rainbows) from video.

It accepts the following options:


Args:
    m: Set mode of operation. Can be combination of dotcrawl for cross-luminance reduction and/or rainbows for cross-color reduction.
    lt: Set spatial luma threshold. Lower values increases reduction of cross-luminance.
    tl: Set tolerance for temporal luma. Higher values increases reduction of cross-luminance.
    tc: Set tolerance for chroma temporal variation. Higher values increases reduction of cross-color.
    ct: Set temporal chroma threshold. Lower values increases reduction of cross-color.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dedot)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dedot', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "m": m,

                "lt": lt,

                "tl": tl,

                "tc": tc,

                "ct": ct,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def deflate(

    self,




    *,
    threshold0: Int = Default('65535'),threshold1: Int = Default('65535'),threshold2: Int = Default('65535'),threshold3: Int = Default('65535'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply deflate effect to the video.

This filter replaces the pixel by the local(3x3) average by taking into account
only values lower than the pixel.

It accepts the following options:


Args:
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deflate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deflate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def deflicker(

    self,




    *,
    size: Int = Default('5'),mode: Int| Literal["am","gm","hm","qm","cm","pm","median"] | Default = Default('am'),bypass: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove temporal frame luminance variations.

It accepts the following options:


Args:
    size: Set moving-average filter size in frames. Default is 5. Allowed range is 2 - 129.
    mode: Set averaging mode to smooth temporal luminance variations. Available values are: @end table
    bypass: Do not actually modify frame. Useful when one only wants metadata.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deflicker)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deflicker', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "size": size,

                "mode": mode,

                "bypass": bypass,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def deinterlace_vaapi(

    self,




    *,
    mode: Int| Literal["default","bob","weave","motion_adaptive","motion_compensated"] | Default = Default('default'),rate: Int| Literal["frame","field"] | Default = Default('frame'),auto: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlacing of VAAPI surfaces


Args:
    mode: Deinterlacing mode (from 0 to 4) (default default)
    rate: Generate output at frame rate or field rate (from 1 to 2) (default frame)
    auto: Only deinterlace fields, passing frames through unchanged (from 0 to 1) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deinterlace_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "rate": rate,

                "auto": auto,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def dejudder(

    self,




    *,
    cycle: Int = Default('4'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove judder produced by partially interlaced telecined content.

Judder can be introduced, for instance, by pullup filter. If the original
source was partially telecined content then the output of pullup,dejudder
will have a variable frame rate. May change the recorded frame rate of the
container. Aside from that change, this filter will not affect constant frame
rate video.

The option available in this filter is:


Args:
    cycle: Specify the length of the window over which the judder repeats. Accepts any integer greater than 1. Useful values are: @end table The default is 4.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dejudder)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dejudder', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cycle": cycle,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def delogo(

    self,




    *,
    x: String = Default('-1'),y: String = Default('-1'),w: String = Default('-1'),h: String = Default('-1'),show: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Suppress a TV station logo by a simple interpolation of the surrounding
pixels. Just set a rectangle covering the logo and watch it disappear
(and sometimes something even uglier appear - your mileage may vary).

It accepts the following parameters:


Args:
    x: set logo x position (default "-1")
    y: Specify the top left corner coordinates of the logo. They must be specified.
    w: set logo width (default "-1")
    h: Specify the width and height of the logo to clear. They must be specified.
    show: When set to 1, a green rectangle is drawn on the screen to simplify finding the right x, y, w, and h parameters. The default value is 0. The rectangle is drawn on the outermost pixels which will be (partly) replaced with interpolated values. The values of the next pixels immediately outside this rectangle in each direction will be used to compute the interpolated pixel values inside the rectangle.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#delogo)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='delogo', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "w": w,

                "h": h,

                "show": show,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def denoise_vaapi(

    self,




    *,
    denoise: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

VAAPI VPP for de-noise


Args:
    denoise: denoise level (from 0 to 64) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='denoise_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "denoise": denoise,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def deshake(

    self,




    *,
    x: Int = Default('-1'),y: Int = Default('-1'),w: Int = Default('-1'),h: Int = Default('-1'),rx: Int = Default('16'),ry: Int = Default('16'),edge: Int| Literal["blank","original","clamp","mirror"] | Default = Default('mirror'),blocksize: Int = Default('8'),contrast: Int = Default('125'),search: Int| Literal["exhaustive","less"] | Default = Default('exhaustive'),filename: String = Default(None),opencl: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Attempt to fix small changes in horizontal and/or vertical shift. This
filter helps remove camera shake from hand-holding a camera, bumping a
tripod, moving on a vehicle, etc.

The filter accepts the following options:


Args:
    x: set x for the rectangular search area (from -1 to INT_MAX) (default -1)
    y: set y for the rectangular search area (from -1 to INT_MAX) (default -1)
    w: set width for the rectangular search area (from -1 to INT_MAX) (default -1)
    h: Specify a rectangular area where to limit the search for motion vectors. If desired the search for motion vectors can be limited to a rectangular area of the frame defined by its top left corner, width and height. These parameters have the same meaning as the drawbox filter which can be used to visualise the position of the bounding box. This is useful when simultaneous movement of subjects within the frame might be confused for camera motion by the motion vector search. If any or all of x, y, w and h are set to -1 then the full frame is used. This allows later options to be set without specifying the bounding box for the motion vector search. Default - search the whole frame.
    rx: set x for the rectangular search area (from 0 to 64) (default 16)
    ry: Specify the maximum extent of movement in x and y directions in the range 0-64 pixels. Default 16.
    edge: Specify how to generate pixels to fill blanks at the edge of the frame. Available values are: @end table Default value is mirror.
    blocksize: Specify the blocksize to use for motion search. Range 4-128 pixels, default 8.
    contrast: Specify the contrast threshold for blocks. Only blocks with more than the specified contrast (difference between darkest and lightest pixels) will be considered. Range 1-255, default 125.
    search: Specify the search strategy. Available values are: @end table Default value is exhaustive.
    filename: If set then a detailed log of the motion search is written to the specified file.
    opencl: ignored (default false)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deshake)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deshake', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "w": w,

                "h": h,

                "rx": rx,

                "ry": ry,

                "edge": edge,

                "blocksize": blocksize,

                "contrast": contrast,

                "search": search,

                "filename": filename,

                "opencl": opencl,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def deshake_opencl(

    self,




    *,
    tripod: Boolean = Default('false'),debug: Boolean = Default('false'),adaptive_crop: Boolean = Default('true'),refine_features: Boolean = Default('true'),smooth_strength: Float = Default('0'),smooth_window_multiplier: Float = Default('2'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Feature-point based video stabilization filter.

The filter accepts the following options:


Args:
    tripod: Simulates a tripod by preventing any camera movement whatsoever from the original frame. Defaults to 0.
    debug: Whether or not additional debug info should be displayed, both in the processed output and in the console. Note that in order to see console debug output you will also need to pass -v verbose to ffmpeg. Viewing point matches in the output video is only supported for RGB input. Defaults to 0.
    adaptive_crop: Whether or not to do a tiny bit of cropping at the borders to cut down on the amount of mirrored pixels. Defaults to 1.
    refine_features: Whether or not feature points should be refined at a sub-pixel level. This can be turned off for a slight performance gain at the cost of precision. Defaults to 1.
    smooth_strength: The strength of the smoothing applied to the camera path from 0.0 to 1.0. 1.0 is the maximum smoothing strength while values less than that result in less smoothing. 0.0 causes the filter to adaptively choose a smoothing strength on a per-frame basis. Defaults to 0.0.
    smooth_window_multiplier: Controls the size of the smoothing window (the number of frames buffered to determine motion information from). The size of the smoothing window is determined by multiplying the framerate of the video by this number. Acceptable values range from 0.1 to 10.0. Larger values increase the amount of motion data available for determining how to smooth the camera path, potentially improving smoothness, but also increase latency and memory usage. Defaults to 2.0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#deshake_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='deshake_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "tripod": tripod,

                "debug": debug,

                "adaptive_crop": adaptive_crop,

                "refine_features": refine_features,

                "smooth_strength": smooth_strength,

                "smooth_window_multiplier": smooth_window_multiplier,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def despill(

    self,




    *,
    type: Int| Literal["green","blue"] | Default = Default('green'),mix: Float = Default('0.5'),expand: Float = Default('0'),red: Float = Default('0'),green: Float = Default('-1'),blue: Float = Default('0'),brightness: Float = Default('0'),alpha: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remove unwanted contamination of foreground colors, caused by reflected color of
greenscreen or bluescreen.

This filter accepts the following options:


Args:
    type: Set what type of despill to use.
    mix: Set how spillmap will be generated.
    expand: Set how much to get rid of still remaining spill.
    red: Controls amount of red in spill area.
    green: Controls amount of green in spill area. Should be -1 for greenscreen.
    blue: Controls amount of blue in spill area. Should be -1 for bluescreen.
    brightness: Controls brightness of spill area, preserving colors.
    alpha: Modify alpha from generated spillmap.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#despill)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='despill', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "type": type,

                "mix": mix,

                "expand": expand,

                "red": red,

                "green": green,

                "blue": blue,

                "brightness": brightness,

                "alpha": alpha,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def detelecine(

    self,




    *,
    first_field: Int| Literal["top","t","bottom","b"] | Default = Default('top'),pattern: String = Default('23'),start_frame: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply an exact inverse of the telecine operation. It requires a predefined
pattern specified using the pattern option which must be the same as that passed
to the telecine filter.

This filter accepts the following options:


Args:
    first_field: @end table
    pattern: A string of numbers representing the pulldown pattern you wish to apply. The default value is 23.
    start_frame: A number representing position of the first frame with respect to the telecine pattern. This is to be used if the stream is cut. The default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#detelecine)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='detelecine', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "first_field": first_field,

                "pattern": pattern,

                "start_frame": start_frame,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def dilation(

    self,




    *,
    coordinates: Int = Default('255'),threshold0: Int = Default('65535'),threshold1: Int = Default('65535'),threshold2: Int = Default('65535'),threshold3: Int = Default('65535'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply dilation effect to the video.

This filter replaces the pixel by the local(3x3) maximum.

It accepts the following options:


Args:
    coordinates: Flag which specifies the pixel to refer to. Default is 255 i.e. all eight pixels are used. Flags to local 3x3 coordinates maps like this: 1 2 3 4 5 6 7 8
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dilation)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dilation', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "coordinates": coordinates,

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def dilation_opencl(

    self,




    *,
    threshold0: Float = Default('65535'),threshold1: Float = Default('65535'),threshold2: Float = Default('65535'),threshold3: Float = Default('65535'),coordinates: Int = Default('255'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply dilation effect to the video.

This filter replaces the pixel by the local(3x3) maximum.

It accepts the following options:


Args:
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane. Range is [0, 65535] and default value is 65535. If 0, plane will remain unchanged.
    coordinates: Flag which specifies the pixel to refer to. Range is [0, 255] and default value is 255, i.e. all eight pixels are used. Flags to local 3x3 coordinates region centered on x: 1 2 3 4 x 5 6 7 8
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#dilation_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='dilation_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

                "coordinates": coordinates,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def displace(

    self,







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

            self,







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







    def doubleweave(

    self,




    *,
    first_field: Int| Literal["top","t","bottom","b"] | Default = Default('top'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The weave takes a field-based video input and join
each two sequential fields into single frame, producing a new double
height clip with half the frame rate and half the frame count.

The doubleweave works same as weave but without
halving frame rate and frame count.

It accepts the following option:


Args:
    first_field: Set first field. Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#weave)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='doubleweave', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "first_field": first_field,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def drawbox(

    self,




    *,
    x: String = Default('0'),y: String = Default('0'),width: String = Default('0'),height: String = Default('0'),color: String = Default('black'),thickness: String = Default('3'),replace: Boolean = Default('false'),box_source: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a colored box on the input image.

It accepts the following parameters:


Args:
    x: set horizontal position of the left box edge (default "0")
    y: The x and y offset coordinates where the box is drawn.
    width: set width of the box (default "0")
    height: The expressions which specify the width and height of the box; if 0 they are interpreted as the input width and height. It defaults to 0.
    color: Specify the color of the box to write. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value invert is used, the box edge color is the same as the video with inverted luma.
    thickness: The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3. See below for the list of accepted constants.
    replace: Applicable if the input has alpha. With value 1, the pixels of the painted box will overwrite the video's color and alpha pixels. Default is 0, which composites the box onto the input, leaving the video's alpha intact.
    box_source: Box source can be set as side_data_detection_bboxes if you want to use box data in detection bboxes of side data. If box_source is set, the x, y, width and height will be ignored and still use box data in detection bboxes of side data. So please do not use this parameter if you were not sure about the box source.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drawbox)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drawbox', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "width": width,

                "height": height,

                "color": color,

                "thickness": thickness,

                "replace": replace,

                "box_source": box_source,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def drawbox_vaapi(

    self,




    *,
    x: String = Default('0'),y: String = Default('0'),width: String = Default('0'),height: String = Default('0'),color: Color = Default('black'),thickness: String = Default('3'),replace: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a colored box on the input image.

It accepts the following parameters:


Args:
    x: set horizontal position of the left box edge (default "0")
    y: The x and y offset coordinates where the box is drawn.
    width: set width of the box (default "0")
    height: The expressions which specify the width and height of the box; if 0 they are interpreted as the input width and height. It defaults to 0.
    color: Specify the color of the box to write. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual.
    thickness: The expression which sets the thickness of the box edge. A value of fill will create a filled box. Default value is 3. See below for the list of accepted constants.
    replace: With value 1, the pixels of the painted box will overwrite the video's color and alpha pixels. Default is 0, which composites the box onto the input video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drawbox_vaapi)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drawbox_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "width": width,

                "height": height,

                "color": color,

                "thickness": thickness,

                "replace": replace,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def drawgraph(

    self,




    *,
    m1: String = Default(''),fg1: String = Default('0xffff0000'),m2: String = Default(''),fg2: String = Default('0xff00ff00'),m3: String = Default(''),fg3: String = Default('0xffff00ff'),m4: String = Default(''),fg4: String = Default('0xffffff00'),bg: Color = Default('white'),min: Float = Default('-1'),max: Float = Default('1'),mode: Int| Literal["bar","dot","line"] | Default = Default('line'),slide: Int| Literal["frame","replace","scroll","rscroll","picture"] | Default = Default('frame'),size: Image_size = Default('900x256'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a graph using input video metadata.

It accepts the following parameters:


Args:
    m1: Set 1st frame metadata key from which metadata values will be used to draw a graph.
    fg1: Set 1st foreground color expression.
    m2: Set 2nd frame metadata key from which metadata values will be used to draw a graph.
    fg2: Set 2nd foreground color expression.
    m3: Set 3rd frame metadata key from which metadata values will be used to draw a graph.
    fg3: Set 3rd foreground color expression.
    m4: Set 4th frame metadata key from which metadata values will be used to draw a graph.
    fg4: Set 4th foreground color expression.
    bg: Set graph background color. Default is white.
    min: Set minimal value of metadata value.
    max: Set maximal value of metadata value.
    mode: Set graph mode. Available values for mode is: @end table Default is line.
    slide: Set slide mode. Available values for slide is: @end table Default is frame.
    size: Set size of graph video. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. The default value is 900x256.
    rate: Set the output frame rate. Default value is 25. The foreground color expressions can use the following variables: @end table The color is defined as 0xAABBGGRR.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drawgraph)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drawgraph', typings_input=('video',), typings_output=('video',)),

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







    def drawgrid(

    self,




    *,
    x: String = Default('0'),y: String = Default('0'),width: String = Default('0'),height: String = Default('0'),color: String = Default('black'),thickness: String = Default('1'),replace: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a grid on the input image.

It accepts the following parameters:


Args:
    x: set horizontal offset (default "0")
    y: The x and y coordinates of some point of grid intersection (meant to configure offset).
    width: set width of grid cell (default "0")
    height: The expressions which specify the width and height of the grid cell, if 0 they are interpreted as the input width and height, respectively, minus thickness, so image gets framed. Default to 0.
    color: Specify the color of the grid. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value invert is used, the grid color is the same as the video with inverted luma.
    thickness: The expression which sets the thickness of the grid line. Default value is 1. See below for the list of accepted constants.
    replace: Applicable if the input has alpha. With 1 the pixels of the painted grid will overwrite the video's color and alpha pixels. Default is 0, which composites the grid onto the input, leaving the video's alpha intact.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drawgrid)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drawgrid', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "width": width,

                "height": height,

                "color": color,

                "thickness": thickness,

                "replace": replace,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def drawtext(

    self,




    *,
    fontfile: String = Default(None),text: String = Default(None),textfile: String = Default(None),fontcolor: Color = Default('black'),fontcolor_expr: String = Default(''),boxcolor: Color = Default('white'),bordercolor: Color = Default('black'),shadowcolor: Color = Default('black'),box: Boolean = Default('false'),boxborderw: String = Default('0'),line_spacing: Int = Default('0'),fontsize: String = Default(None),text_align: Flags| Literal["left","L","right","R","center","C","top","T","bottom","B","middle","M"] | Default = Default('0'),x: String = Default('0'),y: String = Default('0'),boxw: Int = Default('0'),boxh: Int = Default('0'),shadowx: Int = Default('0'),shadowy: Int = Default('0'),borderw: Int = Default('0'),tabsize: Int = Default('4'),basetime: Int64 = Default('I64_MIN'),font: String = Default('Sans'),expansion: Int| Literal["none","normal","strftime"] | Default = Default('normal'),y_align: Int| Literal["text","baseline","font"] | Default = Default('text'),timecode: String = Default(None),tc24hmax: Boolean = Default('false'),timecode_rate: Rational = Default('0/1'),reload: Int = Default('0'),alpha: String = Default('1'),fix_bounds: Boolean = Default('false'),start_number: Int = Default('0'),text_source: String = Default(None),text_shaping: Boolean = Default('true'),ft_load_flags: Flags| Literal["default","no_scale","no_hinting","render","no_bitmap","vertical_layout","force_autohint","crop_bitmap","pedantic","ignore_global_advance_width","no_recurse","ignore_transform","monochrome","linear_design","no_autohint"] | Default = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw a text string or text from a specified file on top of a video, using the
libfreetype library.

To enable compilation of this filter, you need to configure FFmpeg with
--enable-libfreetype and --enable-libharfbuzz.
To enable default font fallback and the font option you need to
configure FFmpeg with --enable-libfontconfig.
To enable the text_shaping option, you need to configure FFmpeg with
--enable-libfribidi.


Args:
    fontfile: The font file to be used for drawing text. The path must be included. This parameter is mandatory if the fontconfig support is disabled.
    text: The text string to be drawn. The text must be a sequence of UTF-8 encoded characters. This parameter is mandatory if no file is specified with the parameter textfile.
    textfile: A text file containing text to be drawn. The text must be a sequence of UTF-8 encoded characters. This parameter is mandatory if no text string is specified with the parameter text. If both text and textfile are specified, an error is thrown.
    fontcolor: The color to be used for drawing fonts. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of fontcolor is "black".
    fontcolor_expr: String which is expanded the same way as text to obtain dynamic fontcolor value. By default this option has empty value and is not processed. When this option is set, it overrides fontcolor option.
    boxcolor: The color to be used for drawing box around text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of boxcolor is "white".
    bordercolor: Set the color to be used for drawing border around text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of bordercolor is "black".
    shadowcolor: The color to be used for drawing a shadow behind the drawn text. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of shadowcolor is "black".
    box: Used to draw a box around text using the background color. The value must be either 1 (enable) or 0 (disable). The default value of box is 0.
    boxborderw: Set the width of the border to be drawn around the box using boxcolor. The value must be specified using one of the following formats: @itemize @bullet
    line_spacing: Set the line spacing in pixels. The default value of line_spacing is 0.
    fontsize: The font size to be used for drawing text. The default value of fontsize is 16.
    text_align: Set the vertical and horizontal alignment of the text with respect to the box boundaries. The value is combination of flags, one for the vertical alignment (T=top, M=middle, B=bottom) and one for the horizontal alignment (L=left, C=center, R=right). Please note that tab characters are only supported with the left horizontal alignment.
    x: set x expression (default "0")
    y: the x and y offset coordinates where the text is drawn. These parameters allow the x and y expressions to refer to each other, so you can for example specify y=x/dar.
    boxw: Set the width of the box to be drawn around text. The default value of boxw is computed automatically to match the text width
    boxh: Set the height of the box to be drawn around text. The default value of boxh is computed automatically to match the text height
    shadowx: set shadow x offset (from INT_MIN to INT_MAX) (default 0)
    shadowy: The x and y offsets for the text shadow position with respect to the position of the text. They can be either positive or negative values. The default value for both is "0".
    borderw: Set the width of the border to be drawn around the text using bordercolor. The default value of borderw is 0.
    tabsize: The size in number of spaces to use for rendering the tab. Default value is 4.
    basetime: Set a start time for the count. Value is in microseconds. Only applied in the deprecated strftime expansion mode. To emulate in normal expansion mode use the pts function, supplying the start time (in seconds) as the second argument.
    font: The font family to be used for drawing text. By default Sans.
    expansion: Select how the text is expanded. Can be either none, strftime (deprecated) or normal (default). See the drawtext_expansion section below for details.
    y_align: Specify what the y value is referred to. Possible values are: @itemize @bullet
    timecode: Set the initial timecode representation in "hh:mm:ss[:;.]ff" format. It can be used with or without text parameter. timecode_rate option must be specified.
    tc24hmax: If set to 1, the output of the timecode option will wrap around at 24 hours. Default is 0 (disabled).
    timecode_rate: Set the timecode frame rate (timecode only). Value will be rounded to nearest integer. Minimum value is "1". Drop-frame timecode is supported for frame rates 30 & 60.
    reload: The textfile will be reloaded at specified frame interval. Be sure to update textfile atomically, or it may be read partially, or even fail. Range is 0 to INT_MAX. Default is 0.
    alpha: Draw the text applying alpha blending. The value can be a number between 0.0 and 1.0. The expression accepts the same variables x, y as well. The default value is 1. Please see fontcolor_expr.
    fix_bounds: If true, check and fix text coords to avoid clipping.
    start_number: The starting frame number for the n/frame_num variable. The default value is "0".
    text_source: Text source should be set as side_data_detection_bboxes if you want to use text data in detection bboxes of side data. If text source is set, text and textfile will be ignored and still use text data in detection bboxes of side data. So please do not use this parameter if you are not sure about the text source.
    text_shaping: If set to 1, attempt to shape the text (for example, reverse the order of right-to-left text and join Arabic characters) before drawing it. Otherwise, just draw the text exactly as given. By default 1 (if supported).
    ft_load_flags: The flags to be used for loading the fonts. The flags map the corresponding flags supported by libfreetype, and are a combination of the following values: @end table Default value is "default". For more information consult the documentation for the FT_LOAD_* libfreetype flags.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#drawtext)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='drawtext', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "fontfile": fontfile,

                "text": text,

                "textfile": textfile,

                "fontcolor": fontcolor,

                "fontcolor_expr": fontcolor_expr,

                "boxcolor": boxcolor,

                "bordercolor": bordercolor,

                "shadowcolor": shadowcolor,

                "box": box,

                "boxborderw": boxborderw,

                "line_spacing": line_spacing,

                "fontsize": fontsize,

                "text_align": text_align,

                "x": x,

                "y": y,

                "boxw": boxw,

                "boxh": boxh,

                "shadowx": shadowx,

                "shadowy": shadowy,

                "borderw": borderw,

                "tabsize": tabsize,

                "basetime": basetime,

                "font": font,

                "expansion": expansion,

                "y_align": y_align,

                "timecode": timecode,

                "tc24hmax": tc24hmax,

                "timecode_rate": timecode_rate,

                "reload": reload,

                "alpha": alpha,

                "fix_bounds": fix_bounds,

                "start_number": start_number,

                "text_source": text_source,

                "text_shaping": text_shaping,

                "ft_load_flags": ft_load_flags,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)















    def edgedetect(

    self,




    *,
    high: Double = Default('0.196078'),low: Double = Default('0.0784314'),mode: Int| Literal["wires","colormix","canny"] | Default = Default('wires'),planes: Flags| Literal["y","u","v","r","g","b"] | Default = Default('y+u+v+r+g+b'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect and draw edges. The filter uses the Canny Edge Detection algorithm.

The filter accepts the following options:


Args:
    high: Set low and high threshold values used by the Canny thresholding algorithm. The high threshold selects the "strong" edge pixels, which are then connected through 8-connectivity with the "weak" edge pixels selected by the low threshold. low and high threshold values must be chosen in the range [0,1], and low should be lesser or equal to high. Default value for low is 20/255, and default value for high is 50/255.
    low: set low threshold (from 0 to 1) (default 0.0784314)
    mode: Define the drawing mode. @end table Default value is wires.
    planes: Select planes for filtering. By default all available planes are filtered.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#edgedetect)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='edgedetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "high": high,

                "low": low,

                "mode": mode,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def elbg(

    self,




    *,
    codebook_length: Int = Default('256'),nb_steps: Int = Default('1'),seed: Int64 = Default('-1'),pal8: Boolean = Default('false'),use_alpha: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a posterize effect using the ELBG (Enhanced LBG) algorithm.

For each input image, the filter will compute the optimal mapping from
the input to the output given the codebook length, that is the number
of distinct output colors.

This filter accepts the following options.


Args:
    codebook_length: Set codebook length. The value must be a positive integer, and represents the number of distinct output colors. Default value is 256.
    nb_steps: Set the maximum number of iterations to apply for computing the optimal mapping. The higher the value the better the result and the higher the computation time. Default value is 1.
    seed: Set a random seed, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to -1, the filter will try to use a good random seed on a best effort basis.
    pal8: Set pal8 output pixel format. This option does not work with codebook length greater than 256. Default is disabled.
    use_alpha: Include alpha values in the quantization calculation. Allows creating palettized output images (e.g. PNG8) with multiple alpha smooth blending.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#elbg)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='elbg', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "codebook_length": codebook_length,

                "nb_steps": nb_steps,

                "seed": seed,

                "pal8": pal8,

                "use_alpha": use_alpha,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def entropy(

    self,




    *,
    mode: Int| Literal["normal","diff"] | Default = Default('normal'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Measure graylevel entropy in histogram of color channels of video frames.

It accepts the following parameters:


Args:
    mode: Can be either normal or diff. Default is normal. diff mode measures entropy of histogram delta values, absolute differences between neighbour histogram values.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#entropy)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='entropy', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def epx(

    self,




    *,
    n: Int = Default('3'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply the EPX magnification filter which is designed for pixel art.

It accepts the following option:


Args:
    n: Set the scaling dimension: 2 for 2xEPX, 3 for 3xEPX. Default is 3.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#epx)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='epx', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def eq(

    self,




    *,
    contrast: String = Default('1.0'),brightness: String = Default('0.0'),saturation: String = Default('1.0'),gamma: String = Default('1.0'),gamma_r: String = Default('1.0'),gamma_g: String = Default('1.0'),gamma_b: String = Default('1.0'),gamma_weight: String = Default('1.0'),eval: Int| Literal["init","frame"] | Default = Default('init'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Set brightness, contrast, saturation and approximate gamma adjustment.

The filter accepts the following options:


Args:
    contrast: Set the contrast expression.
    brightness: Set the brightness expression.
    saturation: Set the saturation expression.
    gamma: Set the gamma expression.
    gamma_r: Set the gamma_r expression.
    gamma_g: Set gamma_g expression.
    gamma_b: Set gamma_b expression.
    gamma_weight: Set gamma_weight expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    eval: Set when the expressions for brightness, contrast, saturation and gamma expressions are evaluated. It accepts the following values: @end table Default value is init.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#eq)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='eq', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "contrast": contrast,

                "brightness": brightness,

                "saturation": saturation,

                "gamma": gamma,

                "gamma_r": gamma_r,

                "gamma_g": gamma_g,

                "gamma_b": gamma_b,

                "gamma_weight": gamma_weight,

                "eval": eval,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def erosion(

    self,




    *,
    coordinates: Int = Default('255'),threshold0: Int = Default('65535'),threshold1: Int = Default('65535'),threshold2: Int = Default('65535'),threshold3: Int = Default('65535'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply erosion effect to the video.

This filter replaces the pixel by the local(3x3) minimum.

It accepts the following options:


Args:
    coordinates: Flag which specifies the pixel to refer to. Default is 255 i.e. all eight pixels are used. Flags to local 3x3 coordinates maps like this: 1 2 3 4 5 6 7 8
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#erosion)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='erosion', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "coordinates": coordinates,

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def erosion_opencl(

    self,




    *,
    threshold0: Float = Default('65535'),threshold1: Float = Default('65535'),threshold2: Float = Default('65535'),threshold3: Float = Default('65535'),coordinates: Int = Default('255'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply erosion effect to the video.

This filter replaces the pixel by the local(3x3) minimum.

It accepts the following options:


Args:
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane. Range is [0, 65535] and default value is 65535. If 0, plane will remain unchanged.
    coordinates: Flag which specifies the pixel to refer to. Range is [0, 255] and default value is 255, i.e. all eight pixels are used. Flags to local 3x3 coordinates region centered on x: 1 2 3 4 x 5 6 7 8
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#erosion_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='erosion_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

                "coordinates": coordinates,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def estdif(

    self,




    *,
    mode: Int| Literal["frame","field"] | Default = Default('field'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),rslope: Int = Default('1'),redge: Int = Default('2'),ecost: Int = Default('2'),mcost: Int = Default('1'),dcost: Int = Default('1'),interp: Int| Literal["2p","4p","6p"] | Default = Default('4p'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video ("estdif" stands for "Edge Slope
Tracing Deinterlacing Filter").

Spatial only filter that uses edge slope tracing algorithm
to interpolate missing lines.
It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is field.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    rslope: Specify the search radius for edge slope tracing. Default value is 1. Allowed range is from 1 to 15.
    redge: Specify the search radius for best edge matching. Default value is 2. Allowed range is from 0 to 15.
    ecost: Specify the edge cost for edge matching. Default value is 2. Allowed range is from 0 to 50.
    mcost: Specify the middle cost for edge matching. Default value is 1. Allowed range is from 0 to 50.
    dcost: Specify the distance cost for edge matching. Default value is 1. Allowed range is from 0 to 50.
    interp: Specify the interpolation used. Default is 4-point interpolation. It accepts one of the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#estdif)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='estdif', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

                "rslope": rslope,

                "redge": redge,

                "ecost": ecost,

                "mcost": mcost,

                "dcost": dcost,

                "interp": interp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def exposure(

    self,




    *,
    exposure: Float = Default('0'),black: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust exposure of the video stream.

The filter accepts the following options:


Args:
    exposure: Set the exposure correction in EV. Allowed range is from -3.0 to 3.0 EV Default value is 0 EV.
    black: Set the black level correction. Allowed range is from -1.0 to 1.0. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#exposure)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='exposure', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "exposure": exposure,

                "black": black,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def extractplanes(

    self,




    *,
    planes: Flags| Literal["y","u","v","r","g","b","a"] | Default = Default('r'),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Extract color channel components from input video stream into
separate grayscale video streams.

The filter accepts the following option:


Args:
    planes: Set plane(s) to extract. Available values for planes are: @end table Choosing planes not available in the input will result in an error. That means you cannot select r, g, b planes with y, u, v planes at same time.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#extractplanes)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='extractplanes', typings_input=('video',), typings_output="[StreamType.video] * len(planes.split('+'))"),

            self,




            **merge({

                "planes": planes,

            },
            extra_options,


            )
        )

        return filter_node









    def fade(

    self,




    *,
    type: Int| Literal["in","out"] | Default = Default('in'),start_frame: Int = Default('0'),nb_frames: Int = Default('25'),alpha: Boolean = Default('false'),start_time: Duration = Default('0'),duration: Duration = Default('0'),color: Color = Default('black'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a fade-in/out effect to the input video.

It accepts the following parameters:


Args:
    type: The effect type can be either "in" for a fade-in, or "out" for a fade-out effect. Default is in.
    start_frame: Specify the number of the frame to start applying the fade effect at. Default is 0.
    nb_frames: The number of frames that the fade effect lasts. At the end of the fade-in effect, the output video will have the same intensity as the input video. At the end of the fade-out transition, the output video will be filled with the selected color. Default is 25.
    alpha: If set to 1, fade only alpha channel, if one exists on the input. Default value is 0.
    start_time: Specify the timestamp (in seconds) of the frame to start to apply the fade effect. If both start_frame and start_time are specified, the fade will start at whichever comes last. Default is 0.
    duration: The number of seconds for which the fade effect has to last. At the end of the fade-in effect the output video will have the same intensity as the input video, at the end of the fade-out transition the output video will be filled with the selected color. If both duration and nb_frames are specified, duration is used. Default is 0 (nb_frames is used by default).
    color: Specify the color of the fade. Default is "black".
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fade)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fade', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "type": type,

                "start_frame": start_frame,

                "nb_frames": nb_frames,

                "alpha": alpha,

                "start_time": start_time,

                "duration": duration,

                "color": color,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def feedback(

    self,







        _feedin: VideoStream,




    *,
    x: Int = Default('0'),w: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

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
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream
    feedout: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#feedback)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='feedback', typings_input=('video', 'video'), typings_output=('video', 'video')),

            self,







                _feedin,




            **merge({

                "x": x,

                "w": w,

            },
            extra_options,


            timeline_options,

            )
        )
        return (


                    filter_node.video(0),



                    filter_node.video(1),


        )








    def fftdnoiz(

    self,




    *,
    sigma: Float = Default('1'),amount: Float = Default('1'),block: Int = Default('32'),overlap: Float = Default('0.5'),method: Int| Literal["wiener","hard"] | Default = Default('wiener'),prev: Int = Default('0'),next: Int = Default('0'),planes: Int = Default('7'),window: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('hann'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Denoise frames using 3D FFT (frequency domain filtering).

The filter accepts the following options:


Args:
    sigma: Set the noise sigma constant. This sets denoising strength. Default value is 1. Allowed range is from 0 to 30. Using very high sigma with low overlap may give blocking artifacts.
    amount: Set amount of denoising. By default all detected noise is reduced. Default value is 1. Allowed range is from 0 to 1.
    block: Set size of block in pixels, Default is 32, can be 8 to 256.
    overlap: Set block overlap. Default is 0.5. Allowed range is from 0.2 to 0.8.
    method: Set denoising method. Default is wiener, can also be hard.
    prev: Set number of previous frames to use for denoising. By default is set to 0.
    next: Set number of next frames to to use for denoising. By default is set to 0.
    planes: Set planes which will be filtered, by default are all available filtered except alpha.
    window: set window function (from 0 to 20) (default hann)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fftdnoiz)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fftdnoiz', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigma": sigma,

                "amount": amount,

                "block": block,

                "overlap": overlap,

                "method": method,

                "prev": prev,

                "next": next,

                "planes": planes,

                "window": window,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def fftfilt(

    self,




    *,
    dc_Y: Int = Default('0'),dc_U: Int = Default('0'),dc_V: Int = Default('0'),weight_Y: String = Default('1'),weight_U: String = Default(None),weight_V: String = Default(None),eval: Int| Literal["init","frame"] | Default = Default('init'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply arbitrary expressions to samples in frequency domain


Args:
    dc_Y: Adjust the dc value (gain) of the luma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
    dc_U: Adjust the dc value (gain) of the 1st chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
    dc_V: Adjust the dc value (gain) of the 2nd chroma plane of the image. The filter accepts an integer value in range 0 to 1000. The default value is set to 0.
    weight_Y: Set the frequency domain weight expression for the luma plane.
    weight_U: Set the frequency domain weight expression for the 1st chroma plane.
    weight_V: Set the frequency domain weight expression for the 2nd chroma plane.
    eval: Set when the expressions are evaluated. It accepts the following values: @end table Default value is init. The filter accepts the following variables:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fftfilt)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fftfilt', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dc_Y": dc_Y,

                "dc_U": dc_U,

                "dc_V": dc_V,

                "weight_Y": weight_Y,

                "weight_U": weight_U,

                "weight_V": weight_V,

                "eval": eval,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def field(

    self,




    *,
    type: Int| Literal["top","bottom"] | Default = Default('top'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Extract a single field from an interlaced image using stride
arithmetic to avoid wasting CPU time. The output frames are marked as
non-interlaced.

The filter accepts the following options:


Args:
    type: Specify whether to extract the top (if the value is 0 or top) or the bottom field (if the value is 1 or bottom).
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#field)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='field', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "type": type,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def fieldhint(

    self,




    *,
    hint: String = Default(None),mode: Int| Literal["absolute","relative","pattern"] | Default = Default('absolute'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Create new frames by copying the top and bottom fields from surrounding frames
supplied as numbers by the hint file.


Args:
    hint: Set file containing hints: absolute/relative frame numbers. There must be one line for each frame in a clip. Each line must contain two numbers separated by the comma, optionally followed by - or +. Numbers supplied on each line of file can not be out of [N-1,N+1] where N is current frame number for absolute mode or out of [-1, 1] range for relative mode. First number tells from which frame to pick up top field and second number tells from which frame to pick up bottom field. If optionally followed by + output frame will be marked as interlaced, else if followed by - output frame will be marked as progressive, else it will be marked same as input frame. If optionally followed by t output frame will use only top field, or in case of b it will use only bottom field. If line starts with # or ; that line is skipped.
    mode: Can be item absolute or relative or pattern. Default is absolute. The pattern mode is same as relative mode, except at last entry of file if there are more frames to process than hint file is seek back to start.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fieldhint)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fieldhint', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "hint": hint,

                "mode": mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def fieldorder(

    self,




    *,
    order: Int| Literal["bff","tff"] | Default = Default('tff'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Transform the field order of the input video.

It accepts the following parameters:


Args:
    order: The output field order. Valid values are tff for top field first or bff for bottom field first.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fieldorder)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fieldorder', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "order": order,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def fillborders(

    self,




    *,
    left: Int = Default('0'),right: Int = Default('0'),top: Int = Default('0'),bottom: Int = Default('0'),mode: Int| Literal["smear","mirror","fixed","reflect","wrap","fade","margins"] | Default = Default('smear'),color: Color = Default('black'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Fill borders of the input video, without changing video stream dimensions.
Sometimes video can have garbage at the four edges and you may not want to
crop video input to keep size multiple of some number.

This filter accepts the following options:


Args:
    left: Number of pixels to fill from left border.
    right: Number of pixels to fill from right border.
    top: Number of pixels to fill from top border.
    bottom: Number of pixels to fill from bottom border.
    mode: Set fill mode. It accepts the following values: @end table Default is smear.
    color: Set color for pixels in fixed or fade mode. Default is black.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fillborders)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fillborders', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "left": left,

                "right": right,

                "top": top,

                "bottom": bottom,

                "mode": mode,

                "color": color,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def find_rect(

    self,




    *,
    object: String = Default(None),threshold: Float = Default('0.5'),mipmaps: Int = Default('3'),xmin: Int = Default('0'),discard: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Find a rectangular object in the input video.

The object to search for must be specified as a gray8 image specified with the
object option.

For each possible match, a score is computed. If the score reaches the specified
threshold, the object is considered found.

If the input video contains multiple instances of the object, the filter will
find only one of them.

When an object is found, the following metadata entries are set in the matching
frame:


Args:
    object: Filepath of the object image, needs to be in gray8.
    threshold: Detection threshold, expressed as a decimal number in the range 0-1. A threshold value of 0.01 means only exact matches, a threshold of 0.99 means almost everything matches. Default value is 0.5.
    mipmaps: Number of mipmaps, default is 3.
    xmin: Specifies the rectangle in which to search.
    discard: Discard frames where object is not detected. Default is disabled.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#find_rect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='find_rect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "object": object,

                "threshold": threshold,

                "mipmaps": mipmaps,

                "xmin": xmin,

                "discard": discard,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def flip_vulkan(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flips an image along both the vertical and horizontal axis.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#flip_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='flip_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def floodfill(

    self,




    *,
    x: Int = Default('0'),y: Int = Default('0'),s0: Int = Default('0'),s1: Int = Default('0'),s2: Int = Default('0'),s3: Int = Default('0'),d0: Int = Default('0'),d1: Int = Default('0'),d2: Int = Default('0'),d3: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flood area with values of same pixel components with another values.

It accepts the following options:


Args:
    x: Set pixel x coordinate.
    y: Set pixel y coordinate.
    s0: Set source #0 component value.
    s1: Set source #1 component value.
    s2: Set source #2 component value.
    s3: Set source #3 component value.
    d0: Set destination #0 component value.
    d1: Set destination #1 component value.
    d2: Set destination #2 component value.
    d3: Set destination #3 component value.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#floodfill)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='floodfill', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "s0": s0,

                "s1": s1,

                "s2": s2,

                "s3": s3,

                "d0": d0,

                "d1": d1,

                "d2": d2,

                "d3": d3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def format(

    self,




    *,
    pix_fmts: String = Default(None),color_spaces: String = Default(None),color_ranges: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert the input video to one of the specified pixel formats.
Libavfilter will try to pick one that is suitable as input to
the next filter.

It accepts the following parameters:


Args:
    pix_fmts: A '|'-separated list of pixel format names, such as "pix_fmts=yuv420p|monow|rgb24".
    color_spaces: A '|'-separated list of color space names, such as "color_spaces=bt709|bt470bg|bt2020nc".
    color_ranges: A '|'-separated list of color range names, such as "color_spaces=tv|pc".
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#format)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='format', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "pix_fmts": pix_fmts,

                "color_spaces": color_spaces,

                "color_ranges": color_ranges,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def fps(

    self,




    *,
    fps: String = Default('25'),start_time: Double = Default('DBL_MAX'),round: Int| Literal["zero","inf","down","up","near"] | Default = Default('near'),eof_action: Int| Literal["round","pass"] | Default = Default('round'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert the video to specified constant frame rate by duplicating or dropping
frames as necessary.

It accepts the following parameters:


Args:
    fps: The desired output frame rate. It accepts expressions containing the following constants: @end table The default is 25.
    start_time: Assume the first PTS should be the given value, in seconds. This allows for padding/trimming at the start of stream. By default, no assumption is made about the first frame's expected PTS, so no padding or trimming is done. For example, this could be set to 0 to pad the beginning with duplicates of the first frame if a video stream starts after the audio stream or to trim any frames with a negative PTS.
    round: Timestamp (PTS) rounding method. Possible values are: @end table The default is near.
    eof_action: Action performed when reading the last frame. Possible values are: @end table The default is round.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fps)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fps', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "fps": fps,

                "start_time": start_time,

                "round": round,

                "eof_action": eof_action,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def framepack(

    self,







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

            self,







                _right,




            **merge({

                "format": format,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def framerate(

    self,




    *,
    fps: Video_rate = Default('50'),interp_start: Int = Default('15'),interp_end: Int = Default('240'),scene: Double = Default('8.2'),flags: Flags| Literal["scene_change_detect","scd"] | Default = Default('scene_change_detect+scd'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Change the frame rate by interpolating new video output frames from the source
frames.

This filter is not designed to function correctly with interlaced media. If
you wish to change the frame rate of interlaced media then you are required
to deinterlace before this filter and re-interlace after this filter.

A description of the accepted options follows.


Args:
    fps: Specify the output frames per second. This option can also be specified as a value alone. The default is 50.
    interp_start: Specify the start of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 15.
    interp_end: Specify the end of a range where the output frame will be created as a linear interpolation of two frames. The range is [0-255], the default is 240.
    scene: Specify the level at which a scene change is detected as a value between 0 and 100 to indicate a new scene; a low value reflects a low probability for the current frame to introduce a new scene, while a higher value means the current frame is more likely to be one. The default is 8.2.
    flags: Specify flags influencing the filter process. Available value for flags is: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#framerate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='framerate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "fps": fps,

                "interp_start": interp_start,

                "interp_end": interp_end,

                "scene": scene,

                "flags": flags,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def framestep(

    self,




    *,
    step: Int = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Select one frame every N-th frame.

This filter accepts the following option:


Args:
    step: Select frame after every step frames. Allowed values are positive integers higher than 0. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#framestep)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='framestep', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "step": step,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def freezedetect(

    self,




    *,
    n: Double = Default('0.001'),d: Duration = Default('2'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect frozen video.

This filter logs a message and sets frame metadata when it detects that the
input video has no significant change in content during a specified duration.
Video freeze detection calculates the mean average absolute difference of all
the components of video frames and compares it to a noise floor.

The printed times and duration are expressed in seconds. The
lavfi.freezedetect.freeze_start metadata key is set on the first frame
whose timestamp equals or exceeds the detection duration and it contains the
timestamp of the first frame of the freeze. The
lavfi.freezedetect.freeze_duration and
lavfi.freezedetect.freeze_end metadata keys are set on the first frame
after the freeze.

The filter accepts the following options:


Args:
    n: Set noise tolerance. Can be specified in dB (in case "dB" is appended to the specified value) or as a difference ratio between 0 and 1. Default is -60dB, or 0.001.
    d: Set freeze duration until notification (default is 2 seconds).
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#freezedetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='freezedetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

                "d": d,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def freezeframes(

    self,







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

            self,







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







    def frei0r(

    self,




    *,
    filter_name: String = Default(None),filter_params: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a frei0r effect to the input video.

To enable the compilation of this filter, you need to install the frei0r
header and configure FFmpeg with --enable-frei0r.

It accepts the following parameters:


Args:
    filter_name: The name of the frei0r effect to load. If the environment variable FREI0R_PATH is defined, the frei0r effect is searched for in each of the directories specified by the colon-separated list in FREI0R_PATH. Otherwise, the standard frei0r paths are searched, in this order: HOME/.frei0r-1/lib/, /usr/local/lib/frei0r-1/, /usr/lib/frei0r-1/.
    filter_params: A '|'-separated list of parameters to pass to the frei0r effect.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#frei0r)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='frei0r', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filter_name": filter_name,

                "filter_params": filter_params,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def fspp(

    self,




    *,
    quality: Int = Default('4'),qp: Int = Default('0'),strength: Int = Default('0'),use_bframe_qp: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply fast and simple postprocessing. It is a faster version of spp.

It splits (I)DCT into horizontal/vertical passes. Unlike the simple post-
processing filter, one of them is performed once per block, not per pixel.
This allows for much higher speed.

The filter accepts the following options:


Args:
    quality: Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 4-5. Default value is 4.
    qp: Force a constant quantization parameter. It accepts an integer in range 0-63. If not set, the filter will use the QP from the video stream (if available).
    strength: Set filter strength. It accepts an integer in range -15 to 32. Lower values mean more details but also more artifacts, while higher values make the image smoother but also blurrier. Default value is 0 − PSNR optimal.
    use_bframe_qp: Enable the use of the QP from the B-Frames if set to 1. Using this option may cause flicker since the B-Frames have often larger QP. Default is 0 (not enabled).
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fspp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fspp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "quality": quality,

                "qp": qp,

                "strength": strength,

                "use_bframe_qp": use_bframe_qp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def fsync(

    self,




    *,
    file: String = Default(''),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Synchronize video frames with an external mapping from a file.

For each input PTS given in the map file it either drops or creates as many
frames as necessary to recreate the sequence of output frames given in the
map file.

This filter is useful to recreate the output frames of a framerate conversion
by the fps filter, recorded into a map file using the ffmpeg option
-stats_mux_pre, and do further processing to the corresponding frames
e.g. quality comparison.

Each line of the map file must contain three items per input frame, the input
PTS (decimal), the output PTS (decimal) and the
output TIMEBASE (decimal/decimal), seperated by a space.
This file format corresponds to the output
of @code{-stats_mux_pre_fmt="@{ptsi@} @{pts@} @{tb@}"}.

The filter assumes the map file is sorted by increasing input PTS.

The filter accepts the following options:


Args:
    file: The filename of the map file to be used.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#fsync)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='fsync', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "file": file,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def gblur(

    self,




    *,
    sigma: Float = Default('0.5'),steps: Int = Default('1'),planes: Int = Default('15'),sigmaV: Float = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Gaussian blur filter.

The filter accepts the following options:


Args:
    sigma: Set horizontal sigma, standard deviation of Gaussian blur. Default is 0.5.
    steps: Set number of steps for Gaussian approximation. Default is 1.
    planes: Set which planes to filter. By default all planes are filtered.
    sigmaV: Set vertical sigma, if negative it will be same as sigma. Default is -1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#gblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='gblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigma": sigma,

                "steps": steps,

                "planes": planes,

                "sigmaV": sigmaV,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def gblur_vulkan(

    self,




    *,
    sigma: Float = Default('0.5'),sigmaV: Float = Default('0'),planes: Int = Default('15'),size: Int = Default('19'),sizeV: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Gaussian blur filter on Vulkan frames.

The filter accepts the following options:


Args:
    sigma: Set horizontal sigma, standard deviation of Gaussian blur. Default is 0.5.
    sigmaV: Set vertical sigma, if negative it will be same as sigma. Default is -1.
    planes: Set which planes to filter. By default all planes are filtered.
    size: Set the kernel size along the horizontal axis. Default is 19.
    sizeV: Set the kernel size along the vertical axis. Default is 0, which sets to use the same value as size.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#gblur_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='gblur_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sigma": sigma,

                "sigmaV": sigmaV,

                "planes": planes,

                "size": size,

                "sizeV": sizeV,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def geq(

    self,




    *,
    lum_expr: String = Default(None),cb_expr: String = Default(None),cr_expr: String = Default(None),alpha_expr: String = Default(None),red_expr: String = Default(None),green_expr: String = Default(None),blue_expr: String = Default(None),interpolation: Int| Literal["nearest","n","bilinear","b"] | Default = Default('bilinear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply generic equation to each pixel.

The filter accepts the following options:


Args:
    lum_expr: Set the luma expression.
    cb_expr: Set the chrominance blue expression.
    cr_expr: Set the chrominance red expression.
    alpha_expr: Set the alpha expression.
    red_expr: Set the red expression.
    green_expr: Set the green expression.
    blue_expr: Set the blue expression.
    interpolation: Set one of interpolation methods: @end table Default is bilinear.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#geq)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='geq', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "lum_expr": lum_expr,

                "cb_expr": cb_expr,

                "cr_expr": cr_expr,

                "alpha_expr": alpha_expr,

                "red_expr": red_expr,

                "green_expr": green_expr,

                "blue_expr": blue_expr,

                "interpolation": interpolation,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def gradfun(

    self,




    *,
    strength: Float = Default('1.2'),radius: Int = Default('16'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Fix the banding artifacts that are sometimes introduced into nearly flat
regions by truncation to 8-bit color depth.
Interpolate the gradients that should go where the bands are, and
dither them.

It is designed for playback only.  Do not use it prior to
lossy compression, because compression tends to lose the dither and
bring back the bands.

It accepts the following parameters:


Args:
    strength: The maximum amount by which the filter will change any one pixel. This is also the threshold for detecting nearly flat regions. Acceptable values range from .51 to 64; the default value is 1.2. Out-of-range values will be clipped to the valid range.
    radius: The neighborhood to fit the gradient to. A larger radius makes for smoother gradients, but also prevents the filter from modifying the pixels near detailed regions. Acceptable values are 8-32; the default value is 16. Out-of-range values will be clipped to the valid range.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#gradfun)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='gradfun', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "strength": strength,

                "radius": radius,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def graphmonitor(

    self,




    *,
    size: Image_size = Default('hd720'),opacity: Float = Default('0.9'),mode: Flags| Literal["full","compact","nozero","noeof","nodisabled"] | Default = Default('0'),flags: Flags| Literal["none","all","queue","frame_count_in","frame_count_out","frame_count_delta","pts","pts_delta","time","time_delta","timebase","format","size","rate","eof","sample_count_in","sample_count_out","sample_count_delta","disabled"] | Default = Default('all+queue'),rate: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Show various filtergraph stats.

With this filter one can debug complete filtergraph.
Especially issues with links filling with queued frames.

The filter accepts the following options:


Args:
    size: Set video output size. Default is hd720.
    opacity: Set video opacity. Default is 0.9. Allowed range is from 0 to 1.
    mode: Set output mode flags. Available values for flags are: @end table
    flags: Set flags which enable which stats are shown in video. Available values for flags are: @end table
    rate: Set upper limit for video rate of output stream, Default value is 25. This guarantee that output video frame rate will not be higher than this value.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#graphmonitor)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='graphmonitor', typings_input=('video',), typings_output=('video',)),

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







    def grayworld(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

A color constancy filter that applies color correction based on the grayworld assumption

See: https://www.researchgate.net/publication/275213614_A_New_Color_Correction_Method_for_Underwater_Imaging

The algorithm  uses linear light, so input
data should be linearized beforehand (and possibly correctly tagged).

@example
ffmpeg -i INPUT -vf zscale=transfer=linear,grayworld,zscale=transfer=bt709,format=yuv420p OUTPUT
@end example


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#grayworld)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='grayworld', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def greyedge(

    self,




    *,
    difford: Int = Default('1'),minknorm: Int = Default('1'),sigma: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

A color constancy variation filter which estimates scene illumination via grey edge algorithm
and corrects the scene colors accordingly.

See: https://staff.science.uva.nl/th.gevers/pub/GeversTIP07.pdf

The filter accepts the following options:


Args:
    difford: The order of differentiation to be applied on the scene. Must be chosen in the range [0,2] and default value is 1.
    minknorm: The Minkowski parameter to be used for calculating the Minkowski distance. Must be chosen in the range [0,20] and default value is 1. Set to 0 for getting max value instead of calculating Minkowski distance.
    sigma: The standard deviation of Gaussian blur to be applied on the scene. Must be chosen in the range [0,1024.0] and default value = 1. floor( sigma * break_off_sigma(3) ) can't be equal to 0 if difford is greater than 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#greyedge)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='greyedge', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "difford": difford,

                "minknorm": minknorm,

                "sigma": sigma,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def haldclut(

    self,







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

            self,







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













    def hflip(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flip the input video horizontally.

For example, to horizontally flip the input video with ffmpeg:
@example
ffmpeg -i in.avi -vf "hflip" out.avi
@end example


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hflip)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hflip', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def hflip_vulkan(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flips an image horizontally.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hflip_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hflip_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def histeq(

    self,




    *,
    strength: Float = Default('0.2'),intensity: Float = Default('0.21'),antibanding: Int| Literal["none","weak","strong"] | Default = Default('none'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

This filter applies a global color histogram equalization on a
per-frame basis.

It can be used to correct video that has a compressed range of pixel
intensities.  The filter redistributes the pixel intensities to
equalize their distribution across the intensity range. It may be
viewed as an "automatically adjusting contrast filter". This filter is
useful only for correcting degraded or poorly captured source
video.

The filter accepts the following options:


Args:
    strength: Determine the amount of equalization to be applied. As the strength is reduced, the distribution of pixel intensities more-and-more approaches that of the input frame. The value must be a float number in the range [0,1] and defaults to 0.200.
    intensity: Set the maximum intensity that can generated and scale the output values appropriately. The strength should be set as desired and then the intensity can be limited if needed to avoid washing-out. The value must be a float number in the range [0,1] and defaults to 0.210.
    antibanding: Set the antibanding level. If enabled the filter will randomly vary the luminance of output pixels by a small amount to avoid banding of the histogram. Possible values are none, weak or strong. It defaults to none.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#histeq)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='histeq', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "strength": strength,

                "intensity": intensity,

                "antibanding": antibanding,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def histogram(

    self,




    *,
    level_height: Int = Default('200'),scale_height: Int = Default('12'),display_mode: Int| Literal["overlay","parade","stack"] | Default = Default('stack'),levels_mode: Int| Literal["linear","logarithmic"] | Default = Default('linear'),components: Int = Default('7'),fgopacity: Float = Default('0.7'),bgopacity: Float = Default('0.5'),colors_mode: Int| Literal["whiteonblack","blackonwhite","whiteongray","blackongray","coloronblack","coloronwhite","colorongray","blackoncolor","whiteoncolor","grayoncolor"] | Default = Default('whiteonblack'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute and draw a color distribution histogram for the input video.

The computed histogram is a representation of the color component
distribution in an image.

Standard histogram displays the color components distribution in an image.
Displays color graph for each color component. Shows distribution of
the Y, U, V, A or R, G, B components, depending on input format, in the
current frame. Below each graph a color component scale meter is shown.

The filter accepts the following options:


Args:
    level_height: Set height of level. Default value is 200. Allowed range is [50, 2048].
    scale_height: Set height of color scale. Default value is 12. Allowed range is [0, 40].
    display_mode: Set display mode. It accepts the following values: @end table Default is stack.
    levels_mode: Set mode. Can be either linear, or logarithmic. Default is linear.
    components: Set what color components to display. Default is 7.
    fgopacity: Set foreground opacity. Default is 0.7.
    bgopacity: Set background opacity. Default is 0.5.
    colors_mode: Set colors mode. It accepts the following values: @end table Default is whiteonblack.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#histogram)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='histogram', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "level_height": level_height,

                "scale_height": scale_height,

                "display_mode": display_mode,

                "levels_mode": levels_mode,

                "components": components,

                "fgopacity": fgopacity,

                "bgopacity": bgopacity,

                "colors_mode": colors_mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def hqdn3d(

    self,




    *,
    luma_spatial: Double = Default('0'),chroma_spatial: Double = Default('0'),luma_tmp: Double = Default('0'),chroma_tmp: Double = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

This is a high precision/quality 3d denoise filter. It aims to reduce
image noise, producing smooth images and making still images really
still. It should enhance compressibility.

It accepts the following optional parameters:


Args:
    luma_spatial: A non-negative floating point number which specifies spatial luma strength. It defaults to 4.0.
    chroma_spatial: A non-negative floating point number which specifies spatial chroma strength. It defaults to 3.0*luma_spatial/4.0.
    luma_tmp: A floating point number which specifies luma temporal strength. It defaults to 6.0*luma_spatial/4.0.
    chroma_tmp: A floating point number which specifies chroma temporal strength. It defaults to luma_tmp*chroma_spatial/luma_spatial.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hqdn3d)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hqdn3d', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_spatial": luma_spatial,

                "chroma_spatial": chroma_spatial,

                "luma_tmp": luma_tmp,

                "chroma_tmp": chroma_tmp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def hqx(

    self,




    *,
    n: Int = Default('3'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a high-quality magnification filter designed for pixel art. This filter
was originally created by Maxim Stepin.

It accepts the following option:


Args:
    n: Set the scaling dimension: 2 for hq2x, 3 for hq3x and 4 for hq4x. Default is 3.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hqx)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hqx', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def hsvhold(

    self,




    *,
    hue: Float = Default('0'),sat: Float = Default('0'),val: Float = Default('0'),similarity: Float = Default('0.01'),blend: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Turns a certain HSV range into gray values.

This filter measures color difference between set HSV color in options
and ones measured in video stream. Depending on options, output
colors can be changed to be gray or not.

The filter accepts the following options:


Args:
    hue: Set the hue value which will be used in color difference calculation. Allowed range is from -360 to 360. Default value is 0.
    sat: Set the saturation value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
    val: Set the value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
    similarity: Set similarity percentage with the key color. Allowed range is from 0 to 1. Default value is 0.01. 0.00001 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. Allowed range is from 0 to 1. Default value is 0. 0.0 makes pixels either fully gray, or not gray at all. Higher values result in more gray pixels, with a higher gray pixel the more similar the pixels color is to the key color.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hsvhold)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hsvhold', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "hue": hue,

                "sat": sat,

                "val": val,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def hsvkey(

    self,




    *,
    hue: Float = Default('0'),sat: Float = Default('0'),val: Float = Default('0'),similarity: Float = Default('0.01'),blend: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Turns a certain HSV range into transparency.

This filter measures color difference between set HSV color in options
and ones measured in video stream. Depending on options, output
colors can be changed to transparent by adding alpha channel.

The filter accepts the following options:


Args:
    hue: Set the hue value which will be used in color difference calculation. Allowed range is from -360 to 360. Default value is 0.
    sat: Set the saturation value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
    val: Set the value which will be used in color difference calculation. Allowed range is from -1 to 1. Default value is 0.
    similarity: Set similarity percentage with the key color. Allowed range is from 0 to 1. Default value is 0.01. 0.00001 matches only the exact key color, while 1.0 matches everything.
    blend: Blend percentage. Allowed range is from 0 to 1. Default value is 0. 0.0 makes pixels either fully transparent, or not transparent at all. Higher values result in semi-transparent pixels, with a higher transparency the more similar the pixels color is to the key color.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hsvkey)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hsvkey', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "hue": hue,

                "sat": sat,

                "val": val,

                "similarity": similarity,

                "blend": blend,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def hue(

    self,




    *,
    h: String = Default(None),s: String = Default('1'),H: String = Default(None),b: String = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Modify the hue and/or the saturation of the input.

It accepts the following parameters:


Args:
    h: set the hue angle degrees expression
    s: set the saturation expression (default "1")
    H: Modify the hue and/or the saturation and/or brightness of the input video. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    b: set the brightness expression (default "0")
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hue)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hue', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "h": h,

                "s": s,

                "H": H,

                "b": b,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def huesaturation(

    self,




    *,
    hue: Float = Default('0'),saturation: Float = Default('0'),intensity: Float = Default('0'),colors: Flags| Literal["r","y","g","c","b","m","a"] | Default = Default('r+y+g+c+b+m+a'),strength: Float = Default('1'),rw: Float = Default('0.333'),gw: Float = Default('0.334'),bw: Float = Default('0.333'),lightness: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply hue-saturation-intensity adjustments to input video stream.

This filter operates in RGB colorspace.

This filter accepts the following options:


Args:
    hue: Set the hue shift in degrees to apply. Default is 0. Allowed range is from -180 to 180.
    saturation: Set the saturation shift. Default is 0. Allowed range is from -1 to 1.
    intensity: Set the intensity shift. Default is 0. Allowed range is from -1 to 1.
    colors: Set which primary and complementary colors are going to be adjusted. This options is set by providing one or multiple values. This can select multiple colors at once. By default all colors are selected. @end table
    strength: Set strength of filtering. Allowed range is from 0 to 100. Default value is 1.
    rw: Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
    gw: Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
    bw: Set weight for each RGB component. Allowed range is from 0 to 1. By default is set to 0.333, 0.334, 0.333. Those options are used in saturation and lightess processing.
    lightness: Set preserving lightness, by default is disabled. Adjusting hues can change lightness from original RGB triplet, with this option enabled lightness is kept at same value.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#huesaturation)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='huesaturation', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "hue": hue,

                "saturation": saturation,

                "intensity": intensity,

                "colors": colors,

                "strength": strength,

                "rw": rw,

                "gw": gw,

                "bw": bw,

                "lightness": lightness,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def hwdownload(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Download hardware frames to system memory.

The input must be in hardware frames, and the output a non-hardware format.
Not all formats will be supported on the output - it may be necessary to insert
an additional format filter immediately following in the graph to get
the output in a supported format.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hwdownload)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hwdownload', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def hwmap(

    self,




    *,
    mode: Flags| Literal["read","write","overwrite","direct"] | Default = Default('read+write'),derive_device: String = Default(None),reverse: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Map hardware frames to system memory or to another device.

This filter has several different modes of operation; which one is used depends
on the input and output formats:


Args:
    mode: Set the frame mapping mode. Some combination of: @end table Defaults to read+write if not specified.
    derive_device: Derive a new device of this type
    reverse: In a hardware to hardware mapping, map in reverse - create frames in the sink and map them back to the source. This may be necessary in some cases where a mapping in one direction is required but only the opposite direction is supported by the devices being used. This option is dangerous - it may break the preceding filter in undefined ways if there are any additional constraints on that filter's output. Do not use it without fully understanding the implications of its use.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hwmap)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hwmap', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "derive_device": derive_device,

                "reverse": reverse,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def hwupload(

    self,




    *,
    derive_device: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Upload system memory frames to hardware surfaces.

The device to upload to must be supplied when the filter is initialised.  If
using ffmpeg, select the appropriate device with the -filter_hw_device
option or with the derive_device option.  The input and output devices
must be of different types and compatible - the exact meaning of this is
system-dependent, but typically it means that they must refer to the same
underlying hardware context (for example, refer to the same graphics card).

The following additional parameters are accepted:


Args:
    derive_device: Derive a new device of this type
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hwupload)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hwupload', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "derive_device": derive_device,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def hwupload_cuda(

    self,




    *,
    device: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Upload system memory frames to a CUDA device.

It accepts the following optional parameters:


Args:
    device: The number of the CUDA device to use
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#hwupload_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='hwupload_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "device": device,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def hysteresis(

    self,







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

            self,







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

    self,







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

This filter also supports the framesync options.

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

            self,







                _reference,




            **merge({

            },
            extra_options,

            framesync_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def idet(

    self,




    *,
    intl_thres: Float = Default('1.04'),prog_thres: Float = Default('1.5'),rep_thres: Float = Default('3'),half_life: Float = Default('0'),analyze_interlaced_flag: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect video interlacing type.

This filter tries to detect if the input frames are interlaced, progressive,
top or bottom field first. It will also try to detect fields that are
repeated between adjacent frames (a sign of telecine).

Single frame detection considers only immediately adjacent frames when classifying each frame.
Multiple frame detection incorporates the classification history of previous frames.

The filter will log these metadata values:


Args:
    intl_thres: Set interlacing threshold.
    prog_thres: Set progressive threshold.
    rep_thres: Threshold for repeated field detection.
    half_life: Number of frames after which a given frame's contribution to the statistics is halved (i.e., it contributes only 0.5 to its classification). The default of 0 means that all frames seen are given full weight of 1.0 forever.
    analyze_interlaced_flag: When this is not 0 then idet will use the specified number of frames to determine if the interlaced flag is accurate, it will not count undetermined frames. If the flag is found to be accurate it will be used without any further computations, if it is found to be inaccurate it will be cleared without any further computations. This allows inserting the idet filter as a low computational method to clean up the interlaced flag
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#idet)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='idet', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "intl_thres": intl_thres,

                "prog_thres": prog_thres,

                "rep_thres": rep_thres,

                "half_life": half_life,

                "analyze_interlaced_flag": analyze_interlaced_flag,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def il(

    self,




    *,
    luma_mode: Int| Literal["none","interleave","i","deinterleave","d"] | Default = Default('none'),chroma_mode: Int| Literal["none","interleave","i","deinterleave","d"] | Default = Default('none'),alpha_mode: Int| Literal["none","interleave","i","deinterleave","d"] | Default = Default('none'),luma_swap: Boolean = Default('false'),chroma_swap: Boolean = Default('false'),alpha_swap: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterleave or interleave fields.

This filter allows one to process interlaced images fields without
deinterlacing them. Deinterleaving splits the input frame into 2
fields (so called half pictures). Odd lines are moved to the top
half of the output image, even lines to the bottom half.
You can process (filter) them independently and then re-interleave them.

The filter accepts the following options:


Args:
    luma_mode: select luma mode (from 0 to 2) (default none)
    chroma_mode: select chroma mode (from 0 to 2) (default none)
    alpha_mode: Available values for luma_mode, chroma_mode and alpha_mode are: @end table Default value is none.
    luma_swap: swap luma fields (default false)
    chroma_swap: swap chroma fields (default false)
    alpha_swap: Swap luma/chroma/alpha fields. Exchange even & odd lines. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#il)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='il', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_mode": luma_mode,

                "chroma_mode": chroma_mode,

                "alpha_mode": alpha_mode,

                "luma_swap": luma_swap,

                "chroma_swap": chroma_swap,

                "alpha_swap": alpha_swap,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def inflate(

    self,




    *,
    threshold0: Int = Default('65535'),threshold1: Int = Default('65535'),threshold2: Int = Default('65535'),threshold3: Int = Default('65535'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply inflate effect to the video.

This filter replaces the pixel by the local(3x3) average by taking into account
only values higher than the pixel.

It accepts the following options:


Args:
    threshold0: set threshold for 1st plane (from 0 to 65535) (default 65535)
    threshold1: set threshold for 2nd plane (from 0 to 65535) (default 65535)
    threshold2: set threshold for 3rd plane (from 0 to 65535) (default 65535)
    threshold3: Limit the maximum change for each plane, default is 65535. If 0, plane will remain unchanged.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#inflate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='inflate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold0": threshold0,

                "threshold1": threshold1,

                "threshold2": threshold2,

                "threshold3": threshold3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def interlace(

    self,




    *,
    scan: Int| Literal["tff","bff"] | Default = Default('tff'),lowpass: Int| Literal["off","linear","complex"] | Default = Default('linear'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Simple interlacing filter from progressive contents. This interleaves upper (or
lower) lines from odd frames with lower (or upper) lines from even frames,
halving the frame rate and preserving image height.

@example
   Original        Original             New Frame
   Frame 'j'      Frame 'j+1'             (tff)
  ==========      ===========       ==================
    Line 0  -------------------->    Frame 'j' Line 0
    Line 1          Line 1  ---->   Frame 'j+1' Line 1
    Line 2 --------------------->    Frame 'j' Line 2
    Line 3          Line 3  ---->   Frame 'j+1' Line 3
     ...             ...                   ...
New Frame + 1 will be generated by Frame 'j+2' and Frame 'j+3' and so on
@end example

It accepts the following optional parameters:


Args:
    scan: This determines whether the interlaced frame is taken from the even (tff - default) or odd (bff) lines of the progressive frame.
    lowpass: Vertical lowpass filter to avoid twitter interlacing and reduce moire patterns. @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#interlace)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='interlace', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "scan": scan,

                "lowpass": lowpass,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def kerndeint(

    self,




    *,
    thresh: Int = Default('10'),map: Boolean = Default('false'),order: Boolean = Default('false'),sharp: Boolean = Default('false'),twoway: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace input video by applying Donald Graft's adaptive kernel
deinterling. Work on interlaced parts of a video to produce
progressive frames.

The description of the accepted parameters follows.


Args:
    thresh: Set the threshold which affects the filter's tolerance when determining if a pixel line must be processed. It must be an integer in the range [0,255] and defaults to 10. A value of 0 will result in applying the process on every pixels.
    map: Paint pixels exceeding the threshold value to white if set to 1. Default is 0.
    order: Set the fields order. Swap fields if set to 1, leave fields alone if 0. Default is 0.
    sharp: Enable additional sharpening if set to 1. Default is 0.
    twoway: Enable twoway sharpening if set to 1. Default is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#kerndeint)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='kerndeint', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "thresh": thresh,

                "map": map,

                "order": order,

                "sharp": sharp,

                "twoway": twoway,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def kirsch(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply kirsch operator to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    scale: Set value which will be multiplied with filtered result.
    delta: Set value which will be added to filtered result.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#kirsch)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='kirsch', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def lagfun(

    self,




    *,
    decay: Float = Default('0.95'),planes: Flags = Default('F'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Slowly update darker pixels.

This filter makes short flashes of light appear longer.
This filter accepts the following options:


Args:
    decay: Set factor for decaying. Default is .95. Allowed range is from 0 to 1.
    planes: Set which planes to filter. Default is all. Allowed range is from 0 to 15.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lagfun)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lagfun', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "decay": decay,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def latency(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#latency)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='latency', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lenscorrection(

    self,




    *,
    cx: Double = Default('0.5'),cy: Double = Default('0.5'),k1: Double = Default('0'),k2: Double = Default('0'),i: Int| Literal["nearest","bilinear"] | Default = Default('nearest'),fc: Color = Default('black@0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Correct radial lens distortion

This filter can be used to correct for radial distortion as can result from the use
of wide angle lenses, and thereby re-rectify the image. To find the right parameters
one can use tools available for example as part of opencv or simply trial-and-error.
To use opencv use the calibration sample (under samples/cpp) from the opencv sources
and extract the k1 and k2 coefficients from the resulting matrix.

Note that effectively the same filter is available in the open-source tools Krita and
Digikam from the KDE project.

In contrast to the vignette filter, which can also be used to compensate lens errors,
this filter corrects the distortion of the image, whereas vignette corrects the
brightness distribution, so you may want to use both filters together in certain
cases, though you will have to take care of ordering, i.e. whether vignetting should
be applied before or after lens correction.


Args:
    cx: Relative x-coordinate of the focal point of the image, and thereby the center of the distortion. This value has a range [0,1] and is expressed as fractions of the image width. Default is 0.5.
    cy: Relative y-coordinate of the focal point of the image, and thereby the center of the distortion. This value has a range [0,1] and is expressed as fractions of the image height. Default is 0.5.
    k1: Coefficient of the quadratic correction term. This value has a range [-1,1]. 0 means no correction. Default is 0.
    k2: Coefficient of the double quadratic correction term. This value has a range [-1,1]. 0 means no correction. Default is 0.
    i: Set interpolation type. Can be nearest or bilinear. Default is nearest.
    fc: Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black@0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lenscorrection)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lenscorrection', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cx": cx,

                "cy": cy,

                "k1": k1,

                "k2": k2,

                "i": i,

                "fc": fc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def limiter(

    self,




    *,
    min: Int = Default('0'),max: Int = Default('65535'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Limits the pixel components values to the specified range [min, max].

The filter accepts the following options:


Args:
    min: Lower bound. Defaults to the lowest allowed value for the input.
    max: Upper bound. Defaults to the highest allowed value for the input.
    planes: Specify which planes will be processed. Defaults to all available.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#limiter)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='limiter', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "min": min,

                "max": max,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def loop(

    self,




    *,
    loop: Int = Default('0'),size: Int64 = Default('0'),start: Int64 = Default('0'),time: Duration = Default('INT64_MAX'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Loop video frames.

The filter accepts the following options:


Args:
    loop: Set the number of loops. Setting this value to -1 will result in infinite loops. Default is 0.
    size: Set maximal size in number of frames. Default is 0.
    start: Set first frame of loop. Default is 0.
    time: Set the time of loop start in seconds. Only used if option named start is set to -1.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#loop)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='loop', typings_input=('video',), typings_output=('video',)),

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
        return filter_node.video(0)













    def lumakey(

    self,




    *,
    threshold: Double = Default('0'),tolerance: Double = Default('0.01'),softness: Double = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Turn certain luma values into transparency.

The filter accepts the following options:


Args:
    threshold: Set the luma which will be used as base for transparency. Default value is 0.
    tolerance: Set the range of luma values to be keyed out. Default value is 0.01.
    softness: Set the range of softness. Default value is 0. Use this to control gradual transition from zero to full transparency.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lumakey)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lumakey', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold": threshold,

                "tolerance": tolerance,

                "softness": softness,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lut(

    self,




    *,
    c0: String = Default('clipval'),c1: String = Default('clipval'),c2: String = Default('clipval'),c3: String = Default('clipval'),y: String = Default('clipval'),u: String = Default('clipval'),v: String = Default('clipval'),r: String = Default('clipval'),g: String = Default('clipval'),b: String = Default('clipval'),a: String = Default('clipval'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute a look-up table for binding each pixel component input value
to an output value, and apply it to the input video.

lutyuv applies a lookup table to a YUV input video, lutrgb
to an RGB input video.

These filters accept the following parameters:


Args:
    c0: set first pixel component expression
    c1: set second pixel component expression
    c2: set third pixel component expression
    c3: set fourth pixel component expression, corresponds to the alpha component
    y: set Y/luma component expression
    u: set U/Cb component expression
    v: set V/Cr component expression
    r: set red component expression
    g: set green component expression
    b: set blue component expression
    a: alpha component expression
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lut', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "c0": c0,

                "c1": c1,

                "c2": c2,

                "c3": c3,

                "y": y,

                "u": u,

                "v": v,

                "r": r,

                "g": g,

                "b": b,

                "a": a,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lut1d(

    self,




    *,
    file: String = Default(None),interp: Int| Literal["nearest","linear","cosine","cubic","spline"] | Default = Default('linear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a 1D LUT to an input video.

The filter accepts the following options:


Args:
    file: Set the 1D LUT file name. Currently supported formats: @end table
    interp: Select interpolation mode. Available values are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut1d)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lut1d', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "file": file,

                "interp": interp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lut2(

    self,







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

            self,







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







    def lut3d(

    self,




    *,
    file: String = Default(None),clut: Int| Literal["first","all"] | Default = Default('all'),interp: Int| Literal["nearest","trilinear","tetrahedral","pyramid","prism"] | Default = Default('tetrahedral'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a 3D LUT to an input video.

The filter accepts the following options:


Args:
    file: Set the 3D LUT file name. Currently supported formats: @end table
    clut: when to process CLUT (from 0 to 1) (default all)
    interp: Select interpolation mode. Available values are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut3d)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lut3d', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "file": file,

                "clut": clut,

                "interp": interp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lutrgb(

    self,




    *,
    c0: String = Default('clipval'),c1: String = Default('clipval'),c2: String = Default('clipval'),c3: String = Default('clipval'),y: String = Default('clipval'),u: String = Default('clipval'),v: String = Default('clipval'),r: String = Default('clipval'),g: String = Default('clipval'),b: String = Default('clipval'),a: String = Default('clipval'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute a look-up table for binding each pixel component input value
to an output value, and apply it to the input video.

lutyuv applies a lookup table to a YUV input video, lutrgb
to an RGB input video.

These filters accept the following parameters:


Args:
    c0: set first pixel component expression
    c1: set second pixel component expression
    c2: set third pixel component expression
    c3: set fourth pixel component expression, corresponds to the alpha component
    y: set Y/luma component expression
    u: set U/Cb component expression
    v: set V/Cr component expression
    r: set red component expression
    g: set green component expression
    b: set blue component expression
    a: alpha component expression
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lutrgb', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "c0": c0,

                "c1": c1,

                "c2": c2,

                "c3": c3,

                "y": y,

                "u": u,

                "v": v,

                "r": r,

                "g": g,

                "b": b,

                "a": a,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def lutyuv(

    self,




    *,
    c0: String = Default('clipval'),c1: String = Default('clipval'),c2: String = Default('clipval'),c3: String = Default('clipval'),y: String = Default('clipval'),u: String = Default('clipval'),v: String = Default('clipval'),r: String = Default('clipval'),g: String = Default('clipval'),b: String = Default('clipval'),a: String = Default('clipval'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute a look-up table for binding each pixel component input value
to an output value, and apply it to the input video.

lutyuv applies a lookup table to a YUV input video, lutrgb
to an RGB input video.

These filters accept the following parameters:


Args:
    c0: set first pixel component expression
    c1: set second pixel component expression
    c2: set third pixel component expression
    c3: set fourth pixel component expression, corresponds to the alpha component
    y: set Y/luma component expression
    u: set U/Cb component expression
    v: set V/Cr component expression
    r: set red component expression
    g: set green component expression
    b: set blue component expression
    a: alpha component expression
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='lutyuv', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "c0": c0,

                "c1": c1,

                "c2": c2,

                "c3": c3,

                "y": y,

                "u": u,

                "v": v,

                "r": r,

                "g": g,

                "b": b,

                "a": a,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def maskedclamp(

    self,







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

            self,







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

    self,







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

            self,







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

    self,







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

            self,







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

    self,







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

            self,







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

    self,







        _reference: VideoStream,




    *,
    threshold: Int = Default('1'),planes: Int = Default('15'),mode: Int| Literal["abs","diff"] | Default = Default('abs'),


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
    mode: Set mode of filter operation. Can be abs or diff. Default is abs.
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

            self,







                _reference,




            **merge({

                "threshold": threshold,

                "planes": planes,

                "mode": mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def maskfun(

    self,




    *,
    low: Int = Default('10'),high: Int = Default('10'),planes: Int = Default('15'),fill: Int = Default('0'),sum: Int = Default('10'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Create mask from input video.

For example it is useful to create motion masks after tblend filter.

This filter accepts the following options:


Args:
    low: Set low threshold. Any pixel component lower or exact than this value will be set to 0.
    high: Set high threshold. Any pixel component higher than this value will be set to max value allowed for current pixel format.
    planes: Set planes to filter, by default all available planes are filtered.
    fill: Fill all frame pixels with this value.
    sum: Set max average pixel value for frame. If sum of all pixel components is higher that this average, output frame will be completely filled with value set by fill option. Typically useful for scene changes when used in combination with tblend filter.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#maskfun)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='maskfun', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "low": low,

                "high": high,

                "planes": planes,

                "fill": fill,

                "sum": sum,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def mcdeint(

    self,




    *,
    mode: Int| Literal["fast","medium","slow","extra_slow"] | Default = Default('fast'),parity: Int| Literal["tff","bff"] | Default = Default('bff'),qp: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply motion-compensation deinterlacing.

It needs one field per frame as input and must thus be used together
with yadif=1/3 or equivalent.

This filter accepts the following options:


Args:
    mode: Set the deinterlacing mode. It accepts one of the following values: @end table Default value is fast.
    parity: Set the picture field parity assumed for the input video. It must be one of the following values: @end table Default value is bff.
    qp: Set per-block quantization parameter (QP) used by the internal encoder. Higher values should result in a smoother motion vector field but less optimal individual vectors. Default value is 1.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mcdeint)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='mcdeint', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "qp": qp,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def median(

    self,




    *,
    radius: Int = Default('1'),planes: Int = Default('15'),radiusV: Int = Default('0'),percentile: Float = Default('0.5'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Pick median pixel from certain rectangle defined by radius.

This filter accepts the following options:


Args:
    radius: Set horizontal radius size. Default value is 1. Allowed range is integer from 1 to 127.
    planes: Set which planes to process. Default is 15, which is all available planes.
    radiusV: Set vertical radius size. Default value is 0. Allowed range is integer from 0 to 127. If it is 0, value will be picked from horizontal radius option.
    percentile: Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#median)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='median', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "radius": radius,

                "planes": planes,

                "radiusV": radiusV,

                "percentile": percentile,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def mestimate(

    self,




    *,
    method: Int| Literal["esa","tss","tdls","ntss","fss","ds","hexbs","epzs","umh"] | Default = Default('esa'),mb_size: Int = Default('16'),search_param: Int = Default('7'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Estimate and export motion vectors using block matching algorithms.
Motion vectors are stored in frame side data to be used by other filters.

This filter accepts the following options:


Args:
    method: Specify the motion estimation method. Accepts one of the following values: @end table Default value is esa.
    mb_size: Macroblock size. Default 16.
    search_param: Search parameter. Default 7.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mestimate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='mestimate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "method": method,

                "mb_size": mb_size,

                "search_param": search_param,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def metadata(

    self,




    *,
    mode: Int| Literal["select","add","modify","delete","print"] | Default = Default('select'),key: String = Default(None),value: String = Default(None),function: Int| Literal["same_str","starts_with","less","equal","greater","expr","ends_with"] | Default = Default('same_str'),expr: String = Default(None),file: String = Default(None),direct: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#metadata)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='metadata', typings_input=('video',), typings_output=('video',)),

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
        return filter_node.video(0)







    def midequalizer(

    self,







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

            self,







                _in1,




            **merge({

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def minterpolate(

    self,




    *,
    fps: Video_rate = Default('60'),mi_mode: Int| Literal["dup","blend","mci"] | Default = Default('mci'),mc_mode: Int| Literal["obmc","aobmc"] | Default = Default('obmc'),me_mode: Int| Literal["bidir","bilat"] | Default = Default('bilat'),me: Int| Literal["esa","tss","tdls","ntss","fss","ds","hexbs","epzs","umh"] | Default = Default('epzs'),mb_size: Int = Default('16'),search_param: Int = Default('32'),vsbmc: Int = Default('0'),scd: Int| Literal["none","fdiff"] | Default = Default('fdiff'),scd_threshold: Double = Default('10'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert the video to specified frame rate using motion interpolation.

This filter accepts the following options:


Args:
    fps: Specify the output frame rate. This can be rational e.g. 60000/1001. Frames are dropped if fps is lower than source fps. Default 60.
    mi_mode: Motion interpolation mode. Following values are accepted: @end table
    mc_mode: motion compensation mode (from 0 to 1) (default obmc)
    me_mode: motion estimation mode (from 0 to 1) (default bilat)
    me: motion estimation method (from 1 to 9) (default epzs)
    mb_size: macroblock size (from 4 to 16) (default 16)
    search_param: search parameter (from 4 to INT_MAX) (default 32)
    vsbmc: variable-size block motion compensation (from 0 to 1) (default 0)
    scd: Scene change detection method. Scene change leads motion vectors to be in random direction. Scene change detection replace interpolated frames by duplicate ones. May not be needed for other modes. Following values are accepted: @end table Default method is fdiff.
    scd_threshold: Scene change detection threshold. Default is 10..
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#minterpolate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='minterpolate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "fps": fps,

                "mi_mode": mi_mode,

                "mc_mode": mc_mode,

                "me_mode": me_mode,

                "me": me,

                "mb_size": mb_size,

                "search_param": search_param,

                "vsbmc": vsbmc,

                "scd": scd,

                "scd_threshold": scd_threshold,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def monochrome(

    self,




    *,
    cb: Float = Default('0'),cr: Float = Default('0'),size: Float = Default('1'),high: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert video to gray using custom color filter.

A description of the accepted options follows.


Args:
    cb: Set the chroma blue spot. Allowed range is from -1 to 1. Default value is 0.
    cr: Set the chroma red spot. Allowed range is from -1 to 1. Default value is 0.
    size: Set the color filter size. Allowed range is from .1 to 10. Default value is 1.
    high: Set the highlights strength. Allowed range is from 0 to 1. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#monochrome)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='monochrome', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "cb": cb,

                "cr": cr,

                "size": size,

                "high": high,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def morpho(

    self,







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

            self,







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









    def mpdecimate(

    self,




    *,
    max: Int = Default('0'),keep: Int = Default('0'),hi: Int = Default('768'),lo: Int = Default('320'),frac: Float = Default('0.33'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Drop frames that do not differ greatly from the previous frame in
order to reduce frame rate.

The main use of this filter is for very-low-bitrate encoding
(e.g. streaming over dialup modem), but it could in theory be used for
fixing movies that were inverse-telecined incorrectly.

A description of the accepted options follows.


Args:
    max: Set the maximum number of consecutive frames which can be dropped (if positive), or the minimum interval between dropped frames (if negative). If the value is 0, the frame is dropped disregarding the number of previous sequentially dropped frames. Default value is 0.
    keep: Set the maximum number of consecutive similar frames to ignore before to start dropping them. If the value is 0, the frame is dropped disregarding the number of previous sequentially similar frames. Default value is 0.
    hi: set high dropping threshold (from INT_MIN to INT_MAX) (default 768)
    lo: set low dropping threshold (from INT_MIN to INT_MAX) (default 320)
    frac: Set the dropping threshold values. Values for hi and lo are for 8x8 pixel blocks and represent actual pixel value differences, so a threshold of 64 corresponds to 1 unit of difference for each pixel, or the same spread out differently over the block. A frame is a candidate for dropping if no 8x8 blocks differ by more than a threshold of hi, and if no more than frac blocks (1 meaning the whole image) differ by more than a threshold of lo. Default value for hi is 64*12, default value for lo is 64*5, and default value for frac is 0.33.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#mpdecimate)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='mpdecimate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "max": max,

                "keep": keep,

                "hi": hi,

                "lo": lo,

                "frac": frac,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def msad(

    self,







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

This filter also supports the framesync options.

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

            self,







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

    self,







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

            self,







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







    def negate(

    self,




    *,
    components: Flags| Literal["y","u","v","r","g","b","a"] | Default = Default('y+u+v+r+g+b'),negate_alpha: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Negate (invert) the input video.

It accepts the following option:


Args:
    components: Set components to negate. Available values for components are: @end table
    negate_alpha: With value 1, it negates the alpha component, if present. Default value is 0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#negate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='negate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "components": components,

                "negate_alpha": negate_alpha,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def nlmeans(

    self,




    *,
    s: Double = Default('1'),p: Int = Default('7'),pc: Int = Default('0'),r: Int = Default('15'),rc: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Denoise frames using Non-Local Means algorithm.

Each pixel is adjusted by looking for other pixels with similar contexts. This
context similarity is defined by comparing their surrounding patches of size
pxp. Patches are searched in an area of rxr
around the pixel.

Note that the research area defines centers for patches, which means some
patches will be made of pixels outside that research area.

The filter accepts the following options.


Args:
    s: Set denoising strength. Default is 1.0. Must be in range [1.0, 30.0].
    p: Set patch size. Default is 7. Must be odd number in range [0, 99].
    pc: Same as p but for chroma planes. The default value is 0 and means automatic.
    r: Set research size. Default is 15. Must be odd number in range [0, 99].
    rc: Same as r but for chroma planes. The default value is 0 and means automatic.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#nlmeans)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='nlmeans', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "s": s,

                "p": p,

                "pc": pc,

                "r": r,

                "rc": rc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def nlmeans_opencl(

    self,




    *,
    s: Double = Default('1'),p: Int = Default('7'),pc: Int = Default('0'),r: Int = Default('15'),rc: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Non-local Means denoise filter through OpenCL, this filter accepts same options as nlmeans.


Args:
    s: denoising strength (from 1 to 30) (default 1)
    p: patch size (from 0 to 99) (default 7)
    pc: patch size for chroma planes (from 0 to 99) (default 0)
    r: research window (from 0 to 99) (default 15)
    rc: research window for chroma planes (from 0 to 99) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#nlmeans_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='nlmeans_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "s": s,

                "p": p,

                "pc": pc,

                "r": r,

                "rc": rc,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def nlmeans_vulkan(

    self,




    *,
    s: Double = Default('1'),p: Int = Default('7'),r: Int = Default('15'),t: Int = Default('36'),s1: Double = Default('1'),s2: Double = Default('1'),s3: Double = Default('1'),s4: Double = Default('1'),p1: Int = Default('0'),p2: Int = Default('0'),p3: Int = Default('0'),p4: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Denoise frames using Non-Local Means algorithm, implemented on the GPU using
Vulkan.
Supports more pixel formats than nlmeans or nlmeans_opencl, including
alpha channel support.

The filter accepts the following options.


Args:
    s: Set denoising strength for all components. Default is 1.0. Must be in range [1.0, 100.0].
    p: Set patch size for all planes. Default is 7. Must be odd number in range [0, 99].
    r: Set research size. Default is 15. Must be odd number in range [0, 99].
    t: Set parallelism. Default is 36. Must be a number in the range [1, 168]. Larger values may speed up processing, at the cost of more VRAM. Lower values will slow it down, reducing VRAM usage. Only supported on GPUs with atomic float operations (RDNA3+, Ampere+).
    s1: denoising strength for component 1 (from 1 to 100) (default 1)
    s2: denoising strength for component 2 (from 1 to 100) (default 1)
    s3: Set denoising strength for a specific component. Default is 1, equal to s. Must be odd number in range [1, 100].
    s4: denoising strength for component 4 (from 1 to 100) (default 1)
    p1: patch size for component 1 (from 0 to 99) (default 0)
    p2: patch size for component 2 (from 0 to 99) (default 0)
    p3: Set patch size for a specific component. Default is 7, equal to p. Must be odd number in range [0, 99].
    p4: patch size for component 4 (from 0 to 99) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#nlmeans_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='nlmeans_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "s": s,

                "p": p,

                "r": r,

                "t": t,

                "s1": s1,

                "s2": s2,

                "s3": s3,

                "s4": s4,

                "p1": p1,

                "p2": p2,

                "p3": p3,

                "p4": p4,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def nnedi(

    self,




    *,
    weights: String = Default('nnedi3_weights.bin'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),field: Int| Literal["af","a","t","b","tf","bf"] | Default = Default('a'),planes: Int = Default('7'),nsize: Int| Literal["s8x6","s16x6","s32x6","s48x6","s8x4","s16x4","s32x4"] | Default = Default('s32x4'),nns: Int| Literal["n16","n32","n64","n128","n256"] | Default = Default('n32'),qual: Int| Literal["fast","slow"] | Default = Default('fast'),etype: Int| Literal["a","abs","s","mse"] | Default = Default('a'),pscrn: Int| Literal["none","original","new","new2","new3"] | Default = Default('new'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace video using neural network edge directed interpolation.

This filter accepts the following options:


Args:
    weights: Mandatory option, without binary file filter can not work. Currently file can be found here: https://github.com/dubhater/vapoursynth-nnedi3/blob/master/src/nnedi3_weights.bin
    deint: Set which frames to deinterlace, by default it is all. Can be all or interlaced.
    field: Set mode of operation. Can be one of the following: @end table
    planes: Set which planes to process, by default filter process all frames.
    nsize: Set size of local neighborhood around each pixel, used by the predictor neural network. Can be one of the following: @end table
    nns: Set the number of neurons in predictor neural network. Can be one of the following: @end table
    qual: Controls the number of different neural network predictions that are blended together to compute the final output value. Can be fast, default or slow.
    etype: Set which set of weights to use in the predictor. Can be one of the following: @end table
    pscrn: Controls whether or not the prescreener neural network is used to decide which pixels should be processed by the predictor neural network and which can be handled by simple cubic interpolation. The prescreener is trained to know whether cubic interpolation will be sufficient for a pixel or whether it should be predicted by the predictor nn. The computational complexity of the prescreener nn is much less than that of the predictor nn. Since most pixels can be handled by cubic interpolation, using the prescreener generally results in much faster processing. The prescreener is pretty accurate, so the difference between using it and not using it is almost always unnoticeable. Can be one of the following: @end table Default is new.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#nnedi)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='nnedi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "weights": weights,

                "deint": deint,

                "field": field,

                "planes": planes,

                "nsize": nsize,

                "nns": nns,

                "qual": qual,

                "etype": etype,

                "pscrn": pscrn,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def noformat(

    self,




    *,
    pix_fmts: String = Default(None),color_spaces: String = Default(None),color_ranges: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Force libavfilter not to use any of the specified pixel formats for the
input to the next filter.

It accepts the following parameters:


Args:
    pix_fmts: A '|'-separated list of pixel format names, such as pix_fmts=yuv420p|monow|rgb24".
    color_spaces: A '|'-separated list of color spaces
    color_ranges: A '|'-separated list of color ranges
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#noformat)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='noformat', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "pix_fmts": pix_fmts,

                "color_spaces": color_spaces,

                "color_ranges": color_ranges,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def noise(

    self,




    *,
    all_seed: Int = Default('-1'),all_strength: Int = Default('0'),all_flags: Flags| Literal["a","p","t","u"] | Default = Default('0'),c0_seed: Int = Default('-1'),c0_strength: Int = Default('0'),c0_flags: Flags| Literal["a","p","t","u"] | Default = Default('0'),c1_seed: Int = Default('-1'),c1_strength: Int = Default('0'),c1_flags: Flags| Literal["a","p","t","u"] | Default = Default('0'),c2_seed: Int = Default('-1'),c2_strength: Int = Default('0'),c2_flags: Flags| Literal["a","p","t","u"] | Default = Default('0'),c3_seed: Int = Default('-1'),c3_strength: Int = Default('0'),c3_flags: Flags| Literal["a","p","t","u"] | Default = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Add noise on video input frame.

The filter accepts the following options:


Args:
    all_seed: set component #0 noise seed (from -1 to INT_MAX) (default -1)
    all_strength: set component #0 strength (from 0 to 100) (default 0)
    all_flags: set component #0 flags (default 0)
    c0_seed: set component #0 noise seed (from -1 to INT_MAX) (default -1)
    c0_strength: set component #0 strength (from 0 to 100) (default 0)
    c0_flags: set component #0 flags (default 0)
    c1_seed: set component #1 noise seed (from -1 to INT_MAX) (default -1)
    c1_strength: set component #1 strength (from 0 to 100) (default 0)
    c1_flags: set component #1 flags (default 0)
    c2_seed: set component #2 noise seed (from -1 to INT_MAX) (default -1)
    c2_strength: set component #2 strength (from 0 to 100) (default 0)
    c2_flags: set component #2 flags (default 0)
    c3_seed: Set noise seed for specific pixel component or all pixel components in case of all_seed. Default value is 123457.
    c3_strength: Set noise strength for specific pixel component or all pixel components in case all_strength. Default value is 0. Allowed range is [0, 100].
    c3_flags: Set pixel component flags or set flags for all components if all_flags. Available values for component flags are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#noise)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='noise', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "all_seed": all_seed,

                "all_strength": all_strength,

                "all_flags": all_flags,

                "c0_seed": c0_seed,

                "c0_strength": c0_strength,

                "c0_flags": c0_flags,

                "c1_seed": c1_seed,

                "c1_strength": c1_strength,

                "c1_flags": c1_flags,

                "c2_seed": c2_seed,

                "c2_strength": c2_strength,

                "c2_flags": c2_flags,

                "c3_seed": c3_seed,

                "c3_strength": c3_strength,

                "c3_flags": c3_flags,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def normalize(

    self,




    *,
    blackpt: Color = Default('black'),whitept: Color = Default('white'),smoothing: Int = Default('0'),independence: Float = Default('1'),strength: Float = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Normalize RGB video (aka histogram stretching, contrast stretching).
See: https://en.wikipedia.org/wiki/Normalization_(image_processing)

For each channel of each frame, the filter computes the input range and maps
it linearly to the user-specified output range. The output range defaults
to the full dynamic range from pure black to pure white.

Temporal smoothing can be used on the input range to reduce flickering (rapid
changes in brightness) caused when small dark or bright objects enter or leave
the scene. This is similar to the auto-exposure (automatic gain control) on a
video camera, and, like a video camera, it may cause a period of over- or
under-exposure of the video.

The R,G,B channels can be normalized independently, which may cause some
color shifting, or linked together as a single channel, which prevents
color shifting. Linked normalization preserves hue. Independent normalization
does not, so it can be used to remove some color casts. Independent and linked
normalization can be combined in any ratio.

The normalize filter accepts the following options:


Args:
    blackpt: output color to which darkest input color is mapped (default "black")
    whitept: Colors which define the output range. The minimum input value is mapped to the blackpt. The maximum input value is mapped to the whitept. The defaults are black and white respectively. Specifying white for blackpt and black for whitept will give color-inverted, normalized video. Shades of grey can be used to reduce the dynamic range (contrast). Specifying saturated colors here can create some interesting effects.
    smoothing: The number of previous frames to use for temporal smoothing. The input range of each channel is smoothed using a rolling average over the current frame and the smoothing previous frames. The default is 0 (no temporal smoothing).
    independence: Controls the ratio of independent (color shifting) channel normalization to linked (color preserving) normalization. 0.0 is fully linked, 1.0 is fully independent. Defaults to 1.0 (fully independent).
    strength: Overall strength of the filter. 1.0 is full strength. 0.0 is a rather expensive no-op. Defaults to 1.0 (full strength).
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#normalize)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='normalize', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "blackpt": blackpt,

                "whitept": whitept,

                "smoothing": smoothing,

                "independence": independence,

                "strength": strength,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def null(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Pass the video source unchanged to the output.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#null)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='null', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def oscilloscope(

    self,




    *,
    x: Float = Default('0.5'),y: Float = Default('0.5'),s: Float = Default('0.8'),t: Float = Default('0.5'),o: Float = Default('0.8'),tx: Float = Default('0.5'),ty: Float = Default('0.9'),tw: Float = Default('0.8'),th: Float = Default('0.3'),c: Int = Default('7'),g: Boolean = Default('true'),st: Boolean = Default('true'),sc: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

2D Video Oscilloscope.

Useful to measure spatial impulse, step responses, chroma delays, etc.

It accepts the following parameters:


Args:
    x: Set scope center x position.
    y: Set scope center y position.
    s: Set scope size, relative to frame diagonal.
    t: Set scope tilt/rotation.
    o: Set trace opacity.
    tx: Set trace center x position.
    ty: Set trace center y position.
    tw: Set trace width, relative to width of frame.
    th: Set trace height, relative to height of frame.
    c: Set which components to trace. By default it traces first three components.
    g: Draw trace grid. By default is enabled.
    st: Draw some statistics. By default is enabled.
    sc: Draw scope. By default is enabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#oscilloscope)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='oscilloscope', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "s": s,

                "t": t,

                "o": o,

                "tx": tx,

                "ty": ty,

                "tw": tw,

                "th": th,

                "c": c,

                "g": g,

                "st": st,

                "sc": sc,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def overlay(

    self,







        _overlay: VideoStream,




    *,
    x: String = Default('0'),y: String = Default('0'),eof_action: Int| Literal["repeat","endall","pass"] | Default = Default('repeat'),eval: Int| Literal["init","frame"] | Default = Default('frame'),shortest: Boolean = Default('false'),format: Int| Literal["yuv420","yuv420p10","yuv422","yuv422p10","yuv444","yuv444p10","rgb","gbrp","auto"] | Default = Default('yuv420'),repeatlast: Boolean = Default('true'),alpha: Int| Literal["straight","premultiplied"] | Default = Default('straight'),

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

            self,







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







    def overlay_cuda(

    self,







        _overlay: VideoStream,




    *,
    x: String = Default('0'),y: String = Default('0'),eof_action: Int| Literal["repeat","endall","pass"] | Default = Default('repeat'),eval: Int| Literal["init","frame"] | Default = Default('frame'),shortest: Boolean = Default('false'),repeatlast: Boolean = Default('true'),

    framesync_options: FFMpegFrameSyncOption | None = None,





    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Overlay one video on top of another.

This is the CUDA variant of the overlay filter.
It only accepts CUDA frames. The underlying input pixel formats have to match.

It takes two inputs and has one output. The first input is the "main"
video on which the second input is overlaid.

It accepts the following parameters:


Args:
    x: set the x expression of overlay (default "0")
    y: Set expressions for the x and y coordinates of the overlaid video on the main video. They can contain the following parameters: @end table Default value is "0" for both expressions.
    eof_action: See framesync.
    eval: Set when the expressions for x and y are evaluated. It accepts the following values: @end table Default value is frame.
    shortest: See framesync.
    repeatlast: See framesync.
    framesync_options: Framesync options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#overlay_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='overlay_cuda', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _overlay,




            **merge({

                "x": x,

                "y": y,

                "eof_action": eof_action,

                "eval": eval,

                "shortest": shortest,

                "repeatlast": repeatlast,

            },
            extra_options,

            framesync_options,


            )
        )
        return filter_node.video(0)







    def overlay_opencl(

    self,







        _overlay: VideoStream,




    *,
    x: Int = Default('0'),y: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Overlay one video on top of another.

It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid.
This filter requires same memory layout for all the inputs. So, format conversion may be needed.

The filter accepts the following options:


Args:
    x: Set the x coordinate of the overlaid video on the main video. Default value is 0.
    y: Set the y coordinate of the overlaid video on the main video. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#overlay_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='overlay_opencl', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _overlay,




            **merge({

                "x": x,

                "y": y,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def overlay_vaapi(

    self,







        _overlay: VideoStream,




    *,
    x: String = Default('0'),y: String = Default('0'),w: String = Default('overlay_iw'),h: String = Default('overlay_ih*w/overlay_iw'),alpha: Float = Default('1'),eof_action: Int| Literal["repeat","endall","pass"] | Default = Default('repeat'),shortest: Boolean = Default('false'),repeatlast: Boolean = Default('true'),

    framesync_options: FFMpegFrameSyncOption | None = None,





    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Overlay one video on the top of another.

It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid.

The filter accepts the following options:


Args:
    x: Overlay x position (default "0")
    y: Set expressions for the x and y coordinates of the overlaid video on the main video. Default value is "0" for both expressions.
    w: Overlay width (default "overlay_iw")
    h: Set expressions for the width and height the overlaid video on the main video. Default values are 'overlay_iw' for 'w' and 'overlay_ih*w/overlay_iw' for 'h'. The expressions can contain the following parameters: @end table
    alpha: Set transparency of overlaid video. Allowed range is 0.0 to 1.0. Higher value means lower transparency. Default value is 1.0.
    eof_action: See framesync.
    shortest: See framesync.
    repeatlast: See framesync.
    framesync_options: Framesync options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#overlay_vaapi)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='overlay_vaapi', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _overlay,




            **merge({

                "x": x,

                "y": y,

                "w": w,

                "h": h,

                "alpha": alpha,

                "eof_action": eof_action,

                "shortest": shortest,

                "repeatlast": repeatlast,

            },
            extra_options,

            framesync_options,


            )
        )
        return filter_node.video(0)







    def overlay_vulkan(

    self,







        _overlay: VideoStream,




    *,
    x: Int = Default('0'),y: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Overlay one video on top of another.

It takes two inputs and has one output. The first input is the "main" video on which the second input is overlaid.
This filter requires all inputs to use the same pixel format. So, format conversion may be needed.

The filter accepts the following options:


Args:
    x: Set the x coordinate of the overlaid video on the main video. Default value is 0.
    y: Set the y coordinate of the overlaid video on the main video. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#overlay_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='overlay_vulkan', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _overlay,




            **merge({

                "x": x,

                "y": y,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def owdenoise(

    self,




    *,
    depth: Int = Default('8'),luma_strength: Double = Default('1'),chroma_strength: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Overcomplete Wavelet denoiser.

The filter accepts the following options:


Args:
    depth: Set depth. Larger depth values will denoise lower frequency components more, but slow down filtering. Must be an int in the range 8-16, default is 8.
    luma_strength: Set luma strength. Must be a double value in the range 0-1000, default is 1.0.
    chroma_strength: Set chroma strength. Must be a double value in the range 0-1000, default is 1.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#owdenoise)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='owdenoise', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "depth": depth,

                "luma_strength": luma_strength,

                "chroma_strength": chroma_strength,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def pad(

    self,




    *,
    width: String = Default('iw'),height: String = Default('ih'),x: String = Default('0'),y: String = Default('0'),color: Color = Default('black'),eval: Int| Literal["init","frame"] | Default = Default('init'),aspect: Rational = Default('0/1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Add paddings to the input image, and place the original input at the
provided x, y coordinates.

It accepts the following parameters:


Args:
    width: set the pad area width expression (default "iw")
    height: Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
    x: set the x offset expression for the input image position (default "0")
    y: The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
    color: Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
    eval: Specify when to evaluate width, height, x and y expression. It accepts the following values: @end table Default value is init.
    aspect: Pad to aspect instead to a resolution.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pad)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pad', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "width": width,

                "height": height,

                "x": x,

                "y": y,

                "color": color,

                "eval": eval,

                "aspect": aspect,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def pad_opencl(

    self,




    *,
    width: String = Default('iw'),height: String = Default('ih'),x: String = Default('0'),y: String = Default('0'),color: Color = Default('black'),aspect: Rational = Default('0/1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Add paddings to the input image, and place the original input at the
provided x, y coordinates.

It accepts the following options:


Args:
    width: set the pad area width (default "iw")
    height: Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
    x: set the x offset for the input image position (default "0")
    y: The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
    color: Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual.
    aspect: Pad to an aspect instead to a resolution.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pad_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pad_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "width": width,

                "height": height,

                "x": x,

                "y": y,

                "color": color,

                "aspect": aspect,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def pad_vaapi(

    self,




    *,
    width: String = Default('iw'),height: String = Default('ih'),x: String = Default('0'),y: String = Default('0'),color: Color = Default('black'),aspect: Rational = Default('0/1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Add paddings to the input image, and place the original input at the
provided x, y coordinates.

It accepts the following options:


Args:
    width: set the pad area width (default "iw")
    height: Specify an expression for the size of the output image with the paddings added. If the value for width or height is 0, the corresponding input size is used for the output. The width expression can reference the value set by the height expression, and vice versa. The default value of width and height is 0.
    x: set the x offset for the input image position (default "0")
    y: The x and y offsets as specified by the x and y expressions, or NAN if not yet specified.
    color: Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual.
    aspect: Pad to an aspect instead to a resolution.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pad_vaapi)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pad_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "width": width,

                "height": height,

                "x": x,

                "y": y,

                "color": color,

                "aspect": aspect,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def palettegen(

    self,




    *,
    max_colors: Int = Default('256'),reserve_transparent: Boolean = Default('true'),transparency_color: Color = Default('lime'),stats_mode: Int| Literal["full","diff","single"] | Default = Default('full'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Generate one palette for a whole video stream.

It accepts the following options:


Args:
    max_colors: Set the maximum number of colors to quantize in the palette. Note: the palette will still contain 256 colors; the unused palette entries will be black.
    reserve_transparent: Create a palette of 255 colors maximum and reserve the last one for transparency. Reserving the transparency color is useful for GIF optimization. If not set, the maximum of colors in the palette will be 256. You probably want to disable this option for a standalone image. Set by default.
    transparency_color: Set the color that will be used as background for transparency.
    stats_mode: Set statistics mode. It accepts the following values: @end table Default value is full.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#palettegen)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='palettegen', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "max_colors": max_colors,

                "reserve_transparent": reserve_transparent,

                "transparency_color": transparency_color,

                "stats_mode": stats_mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def paletteuse(

    self,







        _palette: VideoStream,




    *,
    dither: Int| Literal["bayer","heckbert","floyd_steinberg","sierra2","sierra2_4a","sierra3","burkes","atkinson"] | Default = Default('sierra2_4a'),bayer_scale: Int = Default('2'),diff_mode: Int| Literal["rectangle"] | Default = Default('0'),new: Boolean = Default('false'),alpha_threshold: Int = Default('128'),debug_kdtree: String = Default(None),


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
    debug_kdtree: save Graphviz graph of the kdtree in specified file
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#paletteuse)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='paletteuse', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _palette,




            **merge({

                "dither": dither,

                "bayer_scale": bayer_scale,

                "diff_mode": diff_mode,

                "new": new,

                "alpha_threshold": alpha_threshold,

                "debug_kdtree": debug_kdtree,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def perms(

    self,




    *,
    mode: Int| Literal["none","ro","rw","toggle","random"] | Default = Default('none'),seed: Int64 = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#perms)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='perms', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "seed": seed,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def perspective(

    self,




    *,
    x0: String = Default('0'),y0: String = Default('0'),x1: String = Default('W'),y1: String = Default('0'),x2: String = Default('0'),y2: String = Default('H'),x3: String = Default('W'),y3: String = Default('H'),interpolation: Int| Literal["linear","cubic"] | Default = Default('linear'),sense: Int| Literal["source","destination"] | Default = Default('source'),eval: Int| Literal["init","frame"] | Default = Default('init'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Correct perspective of video not recorded perpendicular to the screen.

A description of the accepted parameters follows.


Args:
    x0: set top left x coordinate (default "0")
    y0: set top left y coordinate (default "0")
    x1: set top right x coordinate (default "W")
    y1: set top right y coordinate (default "0")
    x2: set bottom left x coordinate (default "0")
    y2: set bottom left y coordinate (default "H")
    x3: set bottom right x coordinate (default "W")
    y3: Set coordinates expression for top left, top right, bottom left and bottom right corners. Default values are 0:0:W:0:0:H:W:H with which perspective will remain unchanged. If the sense option is set to source, then the specified points will be sent to the corners of the destination. If the sense option is set to destination, then the corners of the source will be sent to the specified coordinates. The expressions can use the following variables: @end table
    interpolation: Set interpolation for perspective correction. It accepts the following values: @end table Default value is linear.
    sense: Set interpretation of coordinate options. It accepts the following values: @end table
    eval: Set when the expressions for coordinates x0,y0,...x3,y3 are evaluated. It accepts the following values: @end table Default value is init.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#perspective)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='perspective', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x0": x0,

                "y0": y0,

                "x1": x1,

                "y1": y1,

                "x2": x2,

                "y2": y2,

                "x3": x3,

                "y3": y3,

                "interpolation": interpolation,

                "sense": sense,

                "eval": eval,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def phase(

    self,




    *,
    mode: Int| Literal["p","t","b","T","B","u","U","a","A"] | Default = Default('A'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Delay interlaced video by one field time so that the field order changes.

The intended use is to fix PAL movies that have been captured with the
opposite field order to the film-to-video transfer.

A description of the accepted parameters follows.


Args:
    mode: Set phase mode. It accepts the following values: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#phase)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='phase', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def photosensitivity(

    self,




    *,
    frames: Int = Default('30'),threshold: Float = Default('1'),skip: Int = Default('1'),bypass: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reduce various flashes in video, so to help users with epilepsy.

It accepts the following options:


Args:
    frames: Set how many frames to use when filtering. Default is 30.
    threshold: Set detection threshold factor. Default is 1. Lower is stricter.
    skip: Set how many pixels to skip when sampling frames. Default is 1. Allowed range is from 1 to 1024.
    bypass: Leave frames unchanged. Default is disabled.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#photosensitivity)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='photosensitivity', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "frames": frames,

                "threshold": threshold,

                "skip": skip,

                "bypass": bypass,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def pixdesctest(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Pixel format descriptor test filter, mainly useful for internal
testing. The output video should be equal to the input video.

For example:
@example
format=monow, pixdesctest
@end example

can be used to test the monowhite pixel format descriptor definition.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pixdesctest)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pixdesctest', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def pixelize(

    self,




    *,
    width: Int = Default('16'),height: Int = Default('16'),mode: Int| Literal["avg","min","max"] | Default = Default('avg'),planes: Flags = Default('F'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply pixelization to video stream.

The filter accepts the following options:


Args:
    width: set block width (from 1 to 1024) (default 16)
    height: Set block dimensions that will be used for pixelization. Default value is 16.
    mode: Set the mode of pixelization used. Possible values are: @end table Default value is avg.
    planes: Set what planes to filter. Default is to filter all planes.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pixelize)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pixelize', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "width": width,

                "height": height,

                "mode": mode,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def pixscope(

    self,




    *,
    x: Float = Default('0.5'),y: Float = Default('0.5'),w: Int = Default('7'),h: Int = Default('7'),o: Float = Default('0.5'),wx: Float = Default('-1'),wy: Float = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Display sample values of color channels. Mainly useful for checking color
and levels. Minimum supported resolution is 640x480.

The filters accept the following options:


Args:
    x: Set scope X position, relative offset on X axis.
    y: Set scope Y position, relative offset on Y axis.
    w: Set scope width.
    h: Set scope height.
    o: Set window opacity. This window also holds statistics about pixel area.
    wx: Set window X position, relative offset on X axis.
    wy: Set window Y position, relative offset on Y axis.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pixscope)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pixscope', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "x": x,

                "y": y,

                "w": w,

                "h": h,

                "o": o,

                "wx": wx,

                "wy": wy,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def pp(

    self,




    *,
    subfilters: String = Default('de'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Enable the specified chain of postprocessing subfilters using libpostproc. This
library should be automatically selected with a GPL build (--enable-gpl).
Subfilters must be separated by '/' and can be disabled by prepending a '-'.
Each subfilter and some options have a short and a long name that can be used
interchangeably, i.e. dr/dering are the same.

The filters accept the following options:


Args:
    subfilters: Set postprocessing subfilters string.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "subfilters": subfilters,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def pp7(

    self,




    *,
    qp: Int = Default('0'),mode: Int| Literal["hard","soft","medium"] | Default = Default('medium'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Postprocessing filter 7. It is variant of the spp filter,
similar to spp = 6 with 7 point DCT, where only the center sample is
used after IDCT.

The filter accepts the following options:


Args:
    qp: Force a constant quantization parameter. It accepts an integer in range 0 to 63. If not set, the filter will use the QP from the video stream (if available).
    mode: Set thresholding mode. Available modes are: @end table
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pp7)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pp7', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "qp": qp,

                "mode": mode,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def prewitt(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply prewitt operator to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    scale: Set value which will be multiplied with filtered result.
    delta: Set value which will be added to filtered result.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#prewitt)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='prewitt', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def prewitt_opencl(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply the Prewitt operator (https://en.wikipedia.org/wiki/Prewitt_operator) to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes to filter. Default value is 0xf, by which all planes are processed.
    scale: Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
    delta: Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#prewitt_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='prewitt_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def procamp_vaapi(

    self,




    *,
    b: Float = Default('0'),s: Float = Default('1'),c: Float = Default('1'),h: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

ProcAmp (color balance) adjustments for hue, saturation, brightness, contrast


Args:
    b: Output video brightness (from -100 to 100) (default 0)
    s: Output video saturation (from 0 to 10) (default 1)
    c: Output video contrast (from 0 to 10) (default 1)
    h: Output video hue (from -180 to 180) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='procamp_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "b": b,

                "s": s,

                "c": c,

                "h": h,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def pseudocolor(

    self,




    *,
    c0: String = Default('val'),c1: String = Default('val'),c2: String = Default('val'),c3: String = Default('val'),index: Int = Default('0'),preset: Int| Literal["none","magma","inferno","plasma","viridis","turbo","cividis","range1","range2","shadows","highlights","solar","nominal","preferred","total","spectral","cool","heat","fiery","blues","green","helix"] | Default = Default('none'),opacity: Float = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Alter frame colors in video with pseudocolors.

This filter accepts the following options:


Args:
    c0: set pixel first component expression
    c1: set pixel second component expression
    c2: set pixel third component expression
    c3: set pixel fourth component expression, corresponds to the alpha component
    index: set component to use as base for altering colors
    preset: Pick one of built-in LUTs. By default is set to none. Available LUTs: @end table
    opacity: Set opacity of output colors. Allowed range is from 0 to 1. Default value is set to 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pseudocolor)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pseudocolor', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "c0": c0,

                "c1": c1,

                "c2": c2,

                "c3": c3,

                "index": index,

                "preset": preset,

                "opacity": opacity,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def psnr(

    self,







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

            self,







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







    def pullup(

    self,




    *,
    jl: Int = Default('1'),jr: Int = Default('1'),jt: Int = Default('4'),jb: Int = Default('4'),sb: Boolean = Default('false'),mp: Int| Literal["y","u","v"] | Default = Default('y'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Pulldown reversal (inverse telecine) filter, capable of handling mixed
hard-telecine, 24000/1001 fps progressive, and 30000/1001 fps progressive
content.

The pullup filter is designed to take advantage of future context in making
its decisions. This filter is stateless in the sense that it does not lock
onto a pattern to follow, but it instead looks forward to the following
fields in order to identify matches and rebuild progressive frames.

To produce content with an even framerate, insert the fps filter after
pullup, use fps=24000/1001 if the input frame rate is 29.97fps,
fps=24 for 30fps and the (rare) telecined 25fps input.

The filter accepts the following options:


Args:
    jl: set left junk size (from 0 to INT_MAX) (default 1)
    jr: set right junk size (from 0 to INT_MAX) (default 1)
    jt: set top junk size (from 1 to INT_MAX) (default 4)
    jb: These options set the amount of "junk" to ignore at the left, right, top, and bottom of the image, respectively. Left and right are in units of 8 pixels, while top and bottom are in units of 2 lines. The default is 8 pixels on each side.
    sb: Set the strict breaks. Setting this option to 1 will reduce the chances of filter generating an occasional mismatched frame, but it may also cause an excessive number of frames to be dropped during high motion sequences. Conversely, setting it to -1 will make filter match fields more easily. This may help processing of video where there is slight blurring between the fields, but may also cause there to be interlaced frames in the output. Default value is 0.
    mp: Set the metric plane to use. It accepts the following values: @end table This option may be set to use chroma plane instead of the default luma plane for doing filter's computations. This may improve accuracy on very clean source material, but more likely will decrease accuracy, especially if there is chroma noise (rainbow effect) or any grayscale video. The main purpose of setting mp to a chroma plane is to reduce CPU load and make pullup usable in realtime on slow machines.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#pullup)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='pullup', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "jl": jl,

                "jr": jr,

                "jt": jt,

                "jb": jb,

                "sb": sb,

                "mp": mp,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def qp(

    self,




    *,
    qp: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Change video quantization parameters (QP).

The filter accepts the following option:


Args:
    qp: Set expression for quantization parameter.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#qp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='qp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "qp": qp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def random(

    self,




    *,
    frames: Int = Default('30'),seed: Int64 = Default('-1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flush video frames from internal cache of frames into a random order.
No frame is discarded.
Inspired by frei0r nervous filter.


Args:
    frames: Set size in number of frames of internal cache, in range from 2 to 512. Default is 30.
    seed: Set seed for random number generator, must be an integer included between 0 and UINT32_MAX. If not specified, or if explicitly set to less than 0, the filter will try to use a good random seed on a best effort basis.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#random)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='random', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "frames": frames,

                "seed": seed,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def readeia608(

    self,




    *,
    scan_min: Int = Default('0'),scan_max: Int = Default('29'),spw: Float = Default('0.27'),chp: Boolean = Default('false'),lp: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Read closed captioning (EIA-608) information from the top lines of a video frame.

This filter adds frame metadata for lavfi.readeia608.X.cc and
lavfi.readeia608.X.line, where X is the number of the identified line
with EIA-608 data (starting from 0). A description of each metadata value follows:


Args:
    scan_min: Set the line to start scanning for EIA-608 data. Default is 0.
    scan_max: Set the line to end scanning for EIA-608 data. Default is 29.
    spw: Set the ratio of width reserved for sync code detection. Default is 0.27. Allowed range is [0.1 - 0.7].
    chp: Enable checking the parity bit. In the event of a parity error, the filter will output 0x00 for that character. Default is false.
    lp: Lowpass lines prior to further processing. Default is enabled.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#readeia608)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='readeia608', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "scan_min": scan_min,

                "scan_max": scan_max,

                "spw": spw,

                "chp": chp,

                "lp": lp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def readvitc(

    self,




    *,
    scan_max: Int = Default('45'),thr_b: Double = Default('0.2'),thr_w: Double = Default('0.6'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Read vertical interval timecode (VITC) information from the top lines of a
video frame.

The filter adds frame metadata key lavfi.readvitc.tc_str with the
timecode value, if a valid timecode has been detected. Further metadata key
lavfi.readvitc.found is set to 0/1 depending on whether
timecode data has been found or not.

This filter accepts the following options:


Args:
    scan_max: Set the maximum number of lines to scan for VITC data. If the value is set to -1 the full video frame is scanned. Default is 45.
    thr_b: Set the luma threshold for black. Accepts float numbers in the range [0.0,1.0], default value is 0.2. The value must be equal or less than thr_w.
    thr_w: Set the luma threshold for white. Accepts float numbers in the range [0.0,1.0], default value is 0.6. The value must be equal or greater than thr_b.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#readvitc)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='readvitc', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "scan_max": scan_max,

                "thr_b": thr_b,

                "thr_w": thr_w,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def realtime(

    self,




    *,
    limit: Duration = Default('2'),speed: Double = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#realtime)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='realtime', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "limit": limit,

                "speed": speed,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def remap(

    self,







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

            self,







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







    def remap_opencl(

    self,







        _xmap: VideoStream,



        _ymap: VideoStream,




    *,
    interp: Int| Literal["near","linear"] | Default = Default('linear'),fill: Color = Default('black'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Remap pixels using 2nd: Xmap and 3rd: Ymap input video stream.

Destination pixel at position (X, Y) will be picked from source (x, y) position
where x = Xmap(X, Y) and y = Ymap(X, Y). If mapping values are out of range, zero
value for pixel will be used for destination pixel.

Xmap and Ymap input video streams must be of same dimensions. Output video stream
will have Xmap/Ymap video stream dimensions.
Xmap and Ymap input video streams are 32bit float pixel format, single channel.


Args:
    interp: Specify interpolation used for remapping of pixels. Allowed values are near and linear. Default value is linear.
    fill: Specify the color of the unmapped pixels. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. Default color is black.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#remap_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='remap_opencl', typings_input=('video', 'video', 'video'), typings_output=('video',)),

            self,







                _xmap,



                _ymap,




            **merge({

                "interp": interp,

                "fill": fill,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def removegrain(

    self,




    *,
    m0: Int = Default('0'),m1: Int = Default('0'),m2: Int = Default('0'),m3: Int = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The removegrain filter is a spatial denoiser for progressive video.


Args:
    m0: Set mode for the first plane.
    m1: Set mode for the second plane.
    m2: Set mode for the third plane.
    m3: Set mode for the fourth plane.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#removegrain)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='removegrain', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "m0": m0,

                "m1": m1,

                "m2": m2,

                "m3": m3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def removelogo(

    self,




    *,
    filename: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Suppress a TV station logo, using an image file to determine which
pixels comprise the logo. It works by filling in the pixels that
comprise the logo with neighboring pixels.

The filter accepts the following options:


Args:
    filename: Set the filter bitmap file, which can be any image format supported by libavformat. The width and height of the image file must match those of the video stream being processed.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#removelogo)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='removelogo', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filename": filename,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def repeatfields(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

This filter uses the repeat_field flag from the Video ES headers and hard repeats
fields based on its value.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#repeatfields)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='repeatfields', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def reverse(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reverse a video clip.

Warning: This filter requires memory to buffer the entire clip, so trimming
is suggested.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#reverse)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='reverse', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def rgbashift(

    self,




    *,
    rh: Int = Default('0'),rv: Int = Default('0'),gh: Int = Default('0'),gv: Int = Default('0'),bh: Int = Default('0'),bv: Int = Default('0'),ah: Int = Default('0'),av: Int = Default('0'),edge: Int| Literal["smear","wrap"] | Default = Default('smear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Shift R/G/B/A pixels horizontally and/or vertically.

The filter accepts the following options:


Args:
    rh: Set amount to shift red horizontally.
    rv: Set amount to shift red vertically.
    gh: Set amount to shift green horizontally.
    gv: Set amount to shift green vertically.
    bh: Set amount to shift blue horizontally.
    bv: Set amount to shift blue vertically.
    ah: Set amount to shift alpha horizontally.
    av: Set amount to shift alpha vertically.
    edge: Set edge mode, can be smear, default, or warp.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#rgbashift)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='rgbashift', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "rh": rh,

                "rv": rv,

                "gh": gh,

                "gv": gv,

                "bh": bh,

                "bv": bv,

                "ah": ah,

                "av": av,

                "edge": edge,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def roberts(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply roberts cross operator to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    scale: Set value which will be multiplied with filtered result.
    delta: Set value which will be added to filtered result.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#roberts)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='roberts', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def roberts_opencl(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply the Roberts cross operator (https://en.wikipedia.org/wiki/Roberts_cross) to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes to filter. Default value is 0xf, by which all planes are processed.
    scale: Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
    delta: Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#roberts_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='roberts_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def rotate(

    self,




    *,
    angle: String = Default('0'),out_w: String = Default('iw'),out_h: String = Default('ih'),fillcolor: String = Default('black'),bilinear: Boolean = Default('true'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Rotate video by an arbitrary angle expressed in radians.

The filter accepts the following options:

A description of the optional parameters follows.


Args:
    angle: Set the angle expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    out_w: set output width expression (default "iw")
    out_h: the output width and height, that is the size of the padded area as specified by the width and height expressions
    fillcolor: Set the color used to fill the output area not covered by the rotated image. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown). Default value is "black".
    bilinear: Enable bilinear interpolation if set to 1, a value of 0 disables it. Default value is 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#rotate)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='rotate', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "angle": angle,

                "out_w": out_w,

                "out_h": out_h,

                "fillcolor": fillcolor,

                "bilinear": bilinear,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def sab(

    self,




    *,
    luma_radius: Float = Default('1'),luma_pre_filter_radius: Float = Default('1'),luma_strength: Float = Default('1'),chroma_radius: Float = Default('-0.9'),chroma_pre_filter_radius: Float = Default('-0.9'),chroma_strength: Float = Default('-0.9'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Shape Adaptive Blur.

The filter accepts the following options:


Args:
    luma_radius: Set luma blur filter strength, must be a value in range 0.1-4.0, default value is 1.0. A greater value will result in a more blurred image, and in slower processing.
    luma_pre_filter_radius: Set luma pre-filter radius, must be a value in the 0.1-2.0 range, default value is 1.0.
    luma_strength: Set luma maximum difference between pixels to still be considered, must be a value in the 0.1-100.0 range, default value is 1.0.
    chroma_radius: Set chroma blur filter strength, must be a value in range -0.9-4.0. A greater value will result in a more blurred image, and in slower processing.
    chroma_pre_filter_radius: Set chroma pre-filter radius, must be a value in the -0.9-2.0 range.
    chroma_strength: Set chroma maximum difference between pixels to still be considered, must be a value in the -0.9-100.0 range.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sab)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sab', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_radius": luma_radius,

                "luma_pre_filter_radius": luma_pre_filter_radius,

                "luma_strength": luma_strength,

                "chroma_radius": chroma_radius,

                "chroma_pre_filter_radius": chroma_pre_filter_radius,

                "chroma_strength": chroma_strength,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def scale(

    self,





    *,
    w: String = Default(None),h: String = Default(None),flags: String = Default(''),interl: Boolean = Default('false'),size: String = Default(None),in_color_matrix: Int| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default('auto'),out_color_matrix: Int| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default('2'),in_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),out_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),in_chroma_loc: Int| Literal["auto","unknown","left","center","topleft","top","bottomleft","bottom"] | Default = Default('auto'),out_chroma_loc: Int| Literal["auto","unknown","left","center","topleft","top","bottomleft","bottom"] | Default = Default('auto'),in_v_chr_pos: Int = Default('-513'),in_h_chr_pos: Int = Default('-513'),out_v_chr_pos: Int = Default('-513'),out_h_chr_pos: Int = Default('-513'),force_original_aspect_ratio: Int| Literal["disable","decrease","increase"] | Default = Default('disable'),force_divisible_by: Int = Default('1'),param0: Double = Default('DBL_MAX'),param1: Double = Default('DBL_MAX'),eval: Int| Literal["init","frame"] | Default = Default('init'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale (resize) the input video, using the libswscale library.

The scale filter forces the output display aspect ratio to be the same
of the input, by changing the output sample aspect ratio.

If the input image format is different from the format requested by
the next filter, the scale filter will convert the input to the
requested format.


Args:
    w: Output video width
    h: Set the output video dimension expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    flags: Set libswscale scaling flags. See the ffmpeg-scaler manual for the complete list of values. If not explicitly specified the filter applies the default flags.
    interl: Set the interlacing mode. It accepts the following values: @end table Default value is 0.
    size: Set the video size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
    in_color_matrix: set input YCbCr type (from -1 to 17) (default auto)
    out_color_matrix: Set in/output YCbCr color space type. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. If not specified, the color space type depends on the pixel format. Possible values: @end table
    in_range: set input color range (from 0 to 2) (default auto)
    out_range: Set in/output YCbCr sample range. This allows the autodetected value to be overridden as well as allows forcing a specific value used for the output and encoder. If not specified, the range depends on the pixel format. Possible values: @end table
    in_chroma_loc: set input chroma sample location (from 0 to 6) (default auto)
    out_chroma_loc: Set in/output chroma sample location. If not specified, center-sited chroma is used by default. Possible values: @end table
    in_v_chr_pos: input vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    in_h_chr_pos: input horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_v_chr_pos: output vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_h_chr_pos: output horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    force_original_aspect_ratio: Enable decreasing or increasing output video width or height if necessary to keep the original aspect ratio. Possible values: @end table One useful instance of this option is that when you know a specific device's maximum allowed resolution, you can use this to limit the output video to that, while retaining the aspect ratio. For example, device A allows 1280x720 playback, and your video is 1920x800. Using this option (set it to decrease) and specifying 1280x720 to the command line makes the output 1280x533. Please note that this is a different thing than specifying -1 for w or h, you still need to specify the output resolution for this option to work.
    force_divisible_by: Ensures that both the output dimensions, width and height, are divisible by the given integer when used together with force_original_aspect_ratio. This works similar to using -n in the w and h options. This option respects the value set for force_original_aspect_ratio, increasing or decreasing the resolution accordingly. The video's aspect ratio may be slightly modified. This option can be handy if you need to have a video fit within or exceed a defined resolution using force_original_aspect_ratio but also have encoder restrictions on width or height divisibility.
    param0: Set libswscale input parameters for scaling algorithms that need them. See the ffmpeg-scaler manual for the complete documentation. If not explicitly specified the filter applies empty parameters.
    param1: Set libswscale input parameters for scaling algorithms that need them. See the ffmpeg-scaler manual for the complete documentation. If not explicitly specified the filter applies empty parameters.
    eval: Specify when to evaluate width and height expression. It accepts the following values: @end table Default value is init.
    framesync_options: Framesync options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scale)

        """


        if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
            framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scale', typings_input=(), typings_output=('video',)),

            self,





            **merge({

                "w": w,

                "h": h,

                "flags": flags,

                "interl": interl,

                "size": size,

                "in_color_matrix": in_color_matrix,

                "out_color_matrix": out_color_matrix,

                "in_range": in_range,

                "out_range": out_range,

                "in_chroma_loc": in_chroma_loc,

                "out_chroma_loc": out_chroma_loc,

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

            framesync_options,


            )
        )
        return filter_node.video(0)







    def scale2ref(

    self,







        _ref: VideoStream,




    *,
    w: String = Default(None),h: String = Default(None),flags: String = Default(''),interl: Boolean = Default('false'),size: String = Default(None),in_color_matrix: Int| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default('auto'),out_color_matrix: Int| Literal["auto","bt601","bt470","smpte170m","bt709","fcc","smpte240m","bt2020"] | Default = Default('2'),in_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),out_range: Int| Literal["auto","unknown","full","limited","jpeg","mpeg","tv","pc"] | Default = Default('auto'),in_chroma_loc: Int| Literal["auto","unknown","left","center","topleft","top","bottomleft","bottom"] | Default = Default('auto'),out_chroma_loc: Int| Literal["auto","unknown","left","center","topleft","top","bottomleft","bottom"] | Default = Default('auto'),in_v_chr_pos: Int = Default('-513'),in_h_chr_pos: Int = Default('-513'),out_v_chr_pos: Int = Default('-513'),out_h_chr_pos: Int = Default('-513'),force_original_aspect_ratio: Int| Literal["disable","decrease","increase"] | Default = Default('disable'),force_divisible_by: Int = Default('1'),param0: Double = Default('DBL_MAX'),param1: Double = Default('DBL_MAX'),eval: Int| Literal["init","frame"] | Default = Default('init'),


    extra_options: dict[str, Any] | None = None,
    )-> tuple[


            VideoStream,



            VideoStream,


]:
        """

Scale the input video size and/or convert the image format to the given reference.


Args:
    w: Output video width
    h: Output video height
    flags: Flags to pass to libswscale (default "")
    interl: set interlacing (default false)
    size: set video size
    in_color_matrix: set input YCbCr type (from -1 to 17) (default auto)
    out_color_matrix: set output YCbCr type (from 0 to 17) (default 2)
    in_range: set input color range (from 0 to 2) (default auto)
    out_range: set output color range (from 0 to 2) (default auto)
    in_chroma_loc: set input chroma sample location (from 0 to 6) (default auto)
    out_chroma_loc: set output chroma sample location (from 0 to 6) (default auto)
    in_v_chr_pos: input vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    in_h_chr_pos: input horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_v_chr_pos: output vertical chroma position in luma grid/256 (from -513 to 512) (default -513)
    out_h_chr_pos: output horizontal chroma position in luma grid/256 (from -513 to 512) (default -513)
    force_original_aspect_ratio: decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
    force_divisible_by: enforce that the output resolution is divisible by a defined integer when force_original_aspect_ratio is used (from 1 to 256) (default 1)
    param0: Scaler param 0 (from -DBL_MAX to DBL_MAX) (default DBL_MAX)
    param1: Scaler param 1 (from -DBL_MAX to DBL_MAX) (default DBL_MAX)
    eval: specify when to evaluate expressions (from 0 to 1) (default init)
    extra_options: Extra options for the filter

Returns:
    default: the video stream
    ref: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scale2ref', typings_input=('video', 'video'), typings_output=('video', 'video')),

            self,







                _ref,




            **merge({

                "w": w,

                "h": h,

                "flags": flags,

                "interl": interl,

                "size": size,

                "in_color_matrix": in_color_matrix,

                "out_color_matrix": out_color_matrix,

                "in_range": in_range,

                "out_range": out_range,

                "in_chroma_loc": in_chroma_loc,

                "out_chroma_loc": out_chroma_loc,

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








    def scale_cuda(

    self,




    *,
    w: String = Default('iw'),h: String = Default('ih'),interp_algo: Int| Literal["nearest","bilinear","bicubic","lanczos"] | Default = Default('0'),format: Pix_fmt = Default('none'),passthrough: Boolean = Default('true'),param: Float = Default('999999'),force_original_aspect_ratio: Int| Literal["disable","decrease","increase"] | Default = Default('disable'),force_divisible_by: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale (resize) and convert (pixel format) the input video, using accelerated CUDA kernels.
Setting the output width and height works in the same way as for the scale filter.

The filter accepts the following options:


Args:
    w: Output video width (default "iw")
    h: Set the output video dimension expression. Default value is the input dimension. Allows for the same expressions as the scale filter.
    interp_algo: Sets the algorithm used for scaling: @end table
    format: Controls the output pixel format. By default, or if none is specified, the input pixel format is used. The filter does not support converting between YUV and RGB pixel formats.
    passthrough: If set to 0, every frame is processed, even if no conversion is necessary. This mode can be useful to use the filter as a buffer for a downstream frame-consumer that exhausts the limited decoder frame pool. If set to 1, frames are passed through as-is if they match the desired output parameters. This is the default behaviour.
    param: Algorithm-Specific parameter. Affects the curves of the bicubic algorithm.
    force_original_aspect_ratio: decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
    force_divisible_by: Work the same as the identical scale filter options.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scale_cuda)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scale_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "w": w,

                "h": h,

                "interp_algo": interp_algo,

                "format": format,

                "passthrough": passthrough,

                "param": param,

                "force_original_aspect_ratio": force_original_aspect_ratio,

                "force_divisible_by": force_divisible_by,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def scale_vaapi(

    self,




    *,
    w: String = Default('iw'),h: String = Default('ih'),format: String = Default(None),mode: Int| Literal["default","fast","hq","nl_anamorphic"] | Default = Default('hq'),out_color_matrix: String = Default(None),out_range: Int| Literal["full","limited","jpeg","mpeg","tv","pc"] | Default = Default('0'),out_color_primaries: String = Default(None),out_color_transfer: String = Default(None),out_chroma_location: String = Default(None),force_original_aspect_ratio: Int| Literal["disable","decrease","increase"] | Default = Default('disable'),force_divisible_by: Int = Default('1'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale to/from VAAPI surfaces.


Args:
    w: Output video width (default "iw")
    h: Output video height (default "ih")
    format: Output video format (software format of hardware frames)
    mode: Scaling mode (from 0 to 768) (default hq)
    out_color_matrix: Output colour matrix coefficient set
    out_range: Output colour range (from 0 to 2) (default 0)
    out_color_primaries: Output colour primaries
    out_color_transfer: Output colour transfer characteristics
    out_chroma_location: Output chroma sample location
    force_original_aspect_ratio: decrease or increase w/h if necessary to keep the original AR (from 0 to 2) (default disable)
    force_divisible_by: enforce that the output resolution is divisible by a defined integer when force_original_aspect_ratio is used (from 1 to 256) (default 1)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scale_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "w": w,

                "h": h,

                "format": format,

                "mode": mode,

                "out_color_matrix": out_color_matrix,

                "out_range": out_range,

                "out_color_primaries": out_color_primaries,

                "out_color_transfer": out_color_transfer,

                "out_chroma_location": out_chroma_location,

                "force_original_aspect_ratio": force_original_aspect_ratio,

                "force_divisible_by": force_divisible_by,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def scale_vulkan(

    self,




    *,
    w: String = Default('iw'),h: String = Default('ih'),scaler: Int| Literal["bilinear","nearest"] | Default = Default('bilinear'),format: String = Default(None),out_range: Int| Literal["full","limited","jpeg","mpeg","tv","pc"] | Default = Default('0) (from 0 to 2) (default 0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale Vulkan frames


Args:
    w: Output video width (default "iw")
    h: Output video height (default "ih")
    scaler: Scaler function (from 0 to 2) (default bilinear)
    format: Output video format (software format of hardware frames)
    out_range: Output colour range (from 0 to 2) (default 0) (from 0 to 2) (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scale_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "w": w,

                "h": h,

                "scaler": scaler,

                "format": format,

                "out_range": out_range,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def scdet(

    self,




    *,
    threshold: Double = Default('10'),sc_pass: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect video scene change.

This filter sets frame metadata with mafd between frame, the scene score, and
forward the frame to the next filter, so they can use these metadata to detect
scene change or others.

In addition, this filter logs a message and sets frame metadata when it detects
a scene change by threshold.

lavfi.scd.mafd metadata keys are set with mafd for every frame.

lavfi.scd.score metadata keys are set with scene change score for every frame
to detect scene change.

lavfi.scd.time metadata keys are set with current filtered frame time which
detect scene change with threshold.

The filter accepts the following options:


Args:
    threshold: Set the scene change detection threshold as a percentage of maximum change. Good values are in the [8.0, 14.0] range. The range for threshold is [0., 100.]. Default value is 10..
    sc_pass: Set the flag to pass scene change frames to the next filter. Default value is 0 You can enable it if you want to get snapshot of scene change frames only.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scdet)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scdet', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold": threshold,

                "sc_pass": sc_pass,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def scharr(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply scharr operator to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    scale: Set value which will be multiplied with filtered result.
    delta: Set value which will be added to filtered result.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scharr)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scharr', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def scroll(

    self,




    *,
    horizontal: Float = Default('0'),vertical: Float = Default('0'),hpos: Float = Default('0'),vpos: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scroll input video horizontally and/or vertically by constant speed.

The filter accepts the following options:


Args:
    horizontal: Set the horizontal scrolling speed.
    vertical: Set the vertical scrolling speed.
    hpos: Set the initial horizontal scrolling position. Default is 0. Allowed range is from 0 to 1.
    vpos: Set the initial vertical scrolling position. Default is 0. Allowed range is from 0 to 1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#scroll)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='scroll', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "horizontal": horizontal,

                "vertical": vertical,

                "hpos": hpos,

                "vpos": vpos,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def segment(

    self,




    *,
    timestamps: String = Default(None),frames: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> FilterNode:
        """

Split single input stream into multiple streams.

This filter does opposite of concat filters.

segment works on video frames, asegment on audio samples.

This filter accepts the following options:


Args:
    timestamps: Timestamps of output segments separated by '|'. The first segment will run from the beginning of the input stream. The last segment will run until the end of the input stream
    frames: Exact frame/sample count to split the segments.
    extra_options: Extra options for the filter

Returns:
    filter_node: the filter node


References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#segment)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='segment', typings_input=('video',), typings_output="[StreamType.video] * len((str(timestamps or frames)).split('|'))"),

            self,




            **merge({

                "timestamps": timestamps,

                "frames": frames,

            },
            extra_options,


            )
        )

        return filter_node







    def select(

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
            FFMpegFilterDef(name='select', typings_input=('video',), typings_output='[StreamType.video] * int(outputs)'),

            self,




            **merge({

                "expr": expr,

                "outputs": outputs,

            },
            extra_options,


            )
        )

        return filter_node







    def selectivecolor(

    self,




    *,
    correction_method: Int| Literal["absolute","relative"] | Default = Default('absolute'),reds: String = Default(None),yellows: String = Default(None),greens: String = Default(None),cyans: String = Default(None),blues: String = Default(None),magentas: String = Default(None),whites: String = Default(None),neutrals: String = Default(None),blacks: String = Default(None),psfile: String = Default(None),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Adjust cyan, magenta, yellow and black (CMYK) to certain ranges of colors (such
as "reds", "yellows", "greens", "cyans", ...). The adjustment range is defined
by the "purity" of the color (that is, how saturated it already is).

This filter is similar to the Adobe Photoshop Selective Color tool.

The filter accepts the following options:


Args:
    correction_method: Select color correction method. Available values are: @end table Default is absolute.
    reds: Adjustments for red pixels (pixels where the red component is the maximum)
    yellows: Adjustments for yellow pixels (pixels where the blue component is the minimum)
    greens: Adjustments for green pixels (pixels where the green component is the maximum)
    cyans: Adjustments for cyan pixels (pixels where the red component is the minimum)
    blues: Adjustments for blue pixels (pixels where the blue component is the maximum)
    magentas: Adjustments for magenta pixels (pixels where the green component is the minimum)
    whites: Adjustments for white pixels (pixels where all components are greater than 128)
    neutrals: Adjustments for all pixels except pure black and pure white
    blacks: Adjustments for black pixels (pixels where all components are lesser than 128)
    psfile: Specify a Photoshop selective color file (.asv) to import the settings from.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#selectivecolor)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='selectivecolor', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "correction_method": correction_method,

                "reds": reds,

                "yellows": yellows,

                "greens": greens,

                "cyans": cyans,

                "blues": blues,

                "magentas": magentas,

                "whites": whites,

                "neutrals": neutrals,

                "blacks": blacks,

                "psfile": psfile,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def sendcmd(

    self,




    *,
    commands: String = Default(None),filename: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sendcmd)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sendcmd', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "commands": commands,

                "filename": filename,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def separatefields(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The separatefields takes a frame-based video input and splits
each frame into its components fields, producing a new half height clip
with twice the frame rate and twice the frame count.

This filter use field-dominance information in frame to decide which
of each pair of fields to place first in the output.
If it gets it wrong use setfield filter before separatefields filter.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#separatefields)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='separatefields', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setdar(

    self,




    *,
    dar: String = Default('0'),max: Int = Default('100'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The setdar filter sets the Display Aspect Ratio for the filter
output video.

This is done by changing the specified Sample (aka Pixel) Aspect
Ratio, according to the following equation:
@example
DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR
@end example

Keep in mind that the setdar filter does not modify the pixel
dimensions of the video frame. Also, the display aspect ratio set by
this filter may be changed by later filters in the filterchain,
e.g. in case of scaling or if another "setdar" or a "setsar" filter is
applied.

The setsar filter sets the Sample (aka Pixel) Aspect Ratio for
the filter output video.

Note that as a consequence of the application of this filter, the
output display aspect ratio will change according to the equation
above.

Keep in mind that the sample aspect ratio set by the setsar
filter may be changed by later filters in the filterchain, e.g. if
another "setsar" or a "setdar" filter is applied.

It accepts the following parameters:


Args:
    dar: The input display aspect ratio. It is the same as (w / h) * sar.
    max: Set the maximum integer value to use for expressing numerator and denominator when reducing the expressed aspect ratio to a rational. Default value is 100.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setdar)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setdar', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dar": dar,

                "max": max,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setfield(

    self,




    *,
    mode: Int| Literal["auto","bff","tff","prog"] | Default = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Force field for the output video frame.

The setfield filter marks the interlace type field for the
output frames. It does not change the input frame, but only sets the
corresponding property, which affects how the frame is treated by
following filters (e.g. fieldorder or yadif).

The filter accepts the following options:


Args:
    mode: Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setfield)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setfield', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setparams(

    self,




    *,
    field_mode: Int| Literal["auto","bff","tff","prog"] | Default = Default('auto'),range: Int| Literal["auto","unspecified","unknown","limited","tv","mpeg","full","pc","jpeg"] | Default = Default('auto'),color_primaries: Int| Literal["auto","bt709","unknown","bt470m","bt470bg","smpte170m","smpte240m","film","bt2020","smpte428","smpte431","smpte432","jedec-p22","ebu3213"] | Default = Default('auto'),color_trc: Int| Literal["auto","bt709","unknown","bt470m","bt470bg","smpte170m","smpte240m","linear","log100","log316","iec61966-2-4","bt1361e","iec61966-2-1","bt2020-10","bt2020-12","smpte2084","smpte428","arib-std-b67"] | Default = Default('auto'),colorspace: Int| Literal["auto","gbr","bt709","unknown","fcc","bt470bg","smpte170m","smpte240m","ycgco","ycgco-re","ycgco-ro","bt2020nc","bt2020c","smpte2085","chroma-derived-nc","chroma-derived-c","ictcp","ipt-c2"] | Default = Default('auto'),chroma_location: Int| Literal["auto","unspecified","unknown","left","center","topleft","top","bottomleft","bottom"] | Default = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Force frame parameter for the output video frame.

The setparams filter marks interlace and color range for the
output frames. It does not change the input frame, but only sets the
corresponding property, which affects how the frame is treated by
filters/encoders.


Args:
    field_mode: Available values are: @end table
    range: Available values are: @end table
    color_primaries: Set the color primaries. Available values are: @end table
    color_trc: Set the color transfer. Available values are: @end table
    colorspace: Set the colorspace. Available values are: @end table
    chroma_location: Set the chroma sample location. Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setparams)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setparams', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "field_mode": field_mode,

                "range": range,

                "color_primaries": color_primaries,

                "color_trc": color_trc,

                "colorspace": colorspace,

                "chroma_location": chroma_location,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setpts(

    self,




    *,
    expr: String = Default('PTS'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Change the PTS (presentation timestamp) of the input frames.

setpts works on video frames, asetpts on audio frames.

This filter accepts the following options:


Args:
    expr: The expression which is evaluated for each frame to construct its timestamp.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setpts)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setpts', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "expr": expr,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setrange(

    self,




    *,
    range: Int| Literal["auto","unspecified","unknown","limited","tv","mpeg","full","pc","jpeg"] | Default = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Force color range for the output video frame.

The setrange filter marks the color range property for the
output frames. It does not change the input frame, but only sets the
corresponding property, which affects how the frame is treated by
following filters.

The filter accepts the following options:


Args:
    range: Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setrange)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setrange', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "range": range,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def setsar(

    self,




    *,
    sar: String = Default('0'),max: Int = Default('100'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The setdar filter sets the Display Aspect Ratio for the filter
output video.

This is done by changing the specified Sample (aka Pixel) Aspect
Ratio, according to the following equation:
@example
DAR = HORIZONTAL_RESOLUTION / VERTICAL_RESOLUTION * SAR
@end example

Keep in mind that the setdar filter does not modify the pixel
dimensions of the video frame. Also, the display aspect ratio set by
this filter may be changed by later filters in the filterchain,
e.g. in case of scaling or if another "setdar" or a "setsar" filter is
applied.

The setsar filter sets the Sample (aka Pixel) Aspect Ratio for
the filter output video.

Note that as a consequence of the application of this filter, the
output display aspect ratio will change according to the equation
above.

Keep in mind that the sample aspect ratio set by the setsar
filter may be changed by later filters in the filterchain, e.g. if
another "setsar" or a "setdar" filter is applied.

It accepts the following parameters:


Args:
    sar: The input sample aspect ratio.
    max: Set the maximum integer value to use for expressing numerator and denominator when reducing the expressed aspect ratio to a rational. Default value is 100.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#setdar)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='setsar', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sar": sar,

                "max": max,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def settb(

    self,




    *,
    expr: String = Default('intb'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Set the timebase to use for the output frames timestamps.
It is mainly useful for testing timebase configuration.

It accepts the following parameters:


Args:
    expr: The expression which is evaluated into the output timebase.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#settb)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='settb', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "expr": expr,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def sharpness_vaapi(

    self,




    *,
    sharpness: Int = Default('44'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

VAAPI VPP for sharpness


Args:
    sharpness: sharpness level (from 0 to 64) (default 44)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sharpness_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "sharpness": sharpness,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def shear(

    self,




    *,
    shx: Float = Default('0'),shy: Float = Default('0'),fillcolor: String = Default('black'),interp: Int| Literal["nearest","bilinear"] | Default = Default('bilinear'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply shear transform to input video.

This filter supports the following options:


Args:
    shx: Shear factor in X-direction. Default value is 0. Allowed range is from -2 to 2.
    shy: Shear factor in Y-direction. Default value is 0. Allowed range is from -2 to 2.
    fillcolor: Set the color used to fill the output area not covered by the transformed video. For the general syntax of this option, check the "Color" section in the ffmpeg-utils manual. If the special value "none" is selected then no background is printed (useful for example if the background is never shown). Default value is "black".
    interp: Set interpolation type. Can be bilinear or nearest. Default is bilinear.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#shear)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='shear', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "shx": shx,

                "shy": shy,

                "fillcolor": fillcolor,

                "interp": interp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)













    def showinfo(

    self,




    *,
    checksum: Boolean = Default('true'),udu_sei_as_ascii: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Show a line containing various information for each input video frame.
The input video is not modified.

This filter supports the following options:


Args:
    checksum: The Adler-32 checksum (printed in hexadecimal) of all the planes of the input frame.
    udu_sei_as_ascii: Try to print user data unregistered SEI as ascii character when possible, in hex format otherwise.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showinfo)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showinfo', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "checksum": checksum,

                "udu_sei_as_ascii": udu_sei_as_ascii,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def showpalette(

    self,




    *,
    s: Int = Default('30'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Displays the 256 colors palette of each frame. This filter is only relevant for
pal8 pixel format frames.

It accepts the following option:


Args:
    s: Set the size of the box used to represent one palette color entry. Default is 30 (for a 30x30 pixel box).
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#showpalette)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='showpalette', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "s": s,

            },
            extra_options,


            )
        )
        return filter_node.video(0)



















    def shuffleframes(

    self,




    *,
    mapping: String = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reorder and/or duplicate and/or drop video frames.

It accepts the following parameters:


Args:
    mapping: Set the destination indexes of input frames. This is space or '|' separated list of indexes that maps input frames to output frames. Number of indexes also sets maximal value that each index may have. '-1' index have special meaning and that is to drop frame.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#shuffleframes)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='shuffleframes', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mapping": mapping,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def shufflepixels(

    self,




    *,
    direction: Int| Literal["forward","inverse"] | Default = Default('forward'),mode: Int| Literal["horizontal","vertical","block"] | Default = Default('horizontal'),width: Int = Default('10'),height: Int = Default('10'),seed: Int64 = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reorder pixels in video frames.

This filter accepts the following options:


Args:
    direction: Set shuffle direction. Can be forward or inverse direction. Default direction is forward.
    mode: Set shuffle mode. Can be horizontal, vertical or block mode.
    width: set block width (from 1 to 8000) (default 10)
    height: Set shuffle block_size. In case of horizontal shuffle mode only width part of size is used, and in case of vertical shuffle mode only height part of size is used.
    seed: Set random seed used with shuffling pixels. Mainly useful to set to be able to reverse filtering process to get original input. For example, to reverse forward shuffle you need to use same parameters and exact same seed and to set direction to inverse.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#shufflepixels)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='shufflepixels', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "direction": direction,

                "mode": mode,

                "width": width,

                "height": height,

                "seed": seed,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def shuffleplanes(

    self,




    *,
    map0: Int = Default('0'),map1: Int = Default('1'),map2: Int = Default('2'),map3: Int = Default('3'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Reorder and/or duplicate video planes.

It accepts the following parameters:


Args:
    map0: The index of the input plane to be used as the first output plane.
    map1: The index of the input plane to be used as the second output plane.
    map2: The index of the input plane to be used as the third output plane.
    map3: The index of the input plane to be used as the fourth output plane.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#shuffleplanes)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='shuffleplanes', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "map0": map0,

                "map1": map1,

                "map2": map2,

                "map3": map3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def sidedata(

    self,




    *,
    mode: Int| Literal["select","delete"] | Default = Default('select'),type: Int| Literal["PANSCAN","A53_CC","STEREO3D","MATRIXENCODING","DOWNMIX_INFO","REPLAYGAIN","DISPLAYMATRIX","AFD","MOTION_VECTORS","SKIP_SAMPLES","AUDIO_SERVICE_TYPE","MASTERING_DISPLAY_METADATA","GOP_TIMECODE","SPHERICAL","CONTENT_LIGHT_LEVEL","ICC_PROFILE","S12M_TIMECOD","DYNAMIC_HDR_PLUS","REGIONS_OF_INTEREST","VIDEO_ENC_PARAMS","SEI_UNREGISTERED","FILM_GRAIN_PARAMS","DETECTION_BOUNDING_BOXES","DETECTION_BBOXES","DOVI_RPU_BUFFER","DOVI_METADATA","DYNAMIC_HDR_VIVID","AMBIENT_VIEWING_ENVIRONMENT","VIDEO_HINT"] | Default = Default('-1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Delete frame side data, or select frames based on it.

This filter accepts the following options:


Args:
    mode: Set mode of operation of the filter. Can be one of the following: @end table
    type: Set side data type used with all modes. Must be set for select mode. For the list of frame side data types, refer to the AVFrameSideDataType enum in libavutil/frame.h. For example, to choose AV_FRAME_DATA_PANSCAN side data, you must specify PANSCAN.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sidedata)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sidedata', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "type": type,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def signalstats(

    self,




    *,
    stat: Flags| Literal["tout","vrep","brng"] | Default = Default('0'),out: Int| Literal["tout","vrep","brng"] | Default = Default('-1'),c: Color = Default('yellow'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Evaluate various visual metrics that assist in determining issues associated
with the digitization of analog video media.

By default the filter will log these metadata values:


Args:
    stat: set statistics filters (default 0)
    out: stat specify an additional form of image analysis. out output video with the specified type of pixel highlighted. Both options accept the following values: @end table
    c: Set the highlight color for the out option. The default color is yellow.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#signalstats)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='signalstats', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "stat": stat,

                "out": out,

                "c": c,

            },
            extra_options,


            )
        )
        return filter_node.video(0)

















    def siti(

    self,




    *,
    print_summary: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Calculate Spatial Information (SI) and Temporal Information (TI) scores for a video,
as defined in ITU-T Rec. P.910 (11/21): Subjective video quality assessment methods
for multimedia applications. Available PDF at https://www.itu.int/rec/T-REC-P.910-202111-S/en.
Note that this is a legacy implementation that corresponds to a superseded recommendation.
Refer to ITU-T Rec. P.910 (07/22) for the latest version: https://www.itu.int/rec/T-REC-P.910-202207-I/en

It accepts the following option:


Args:
    print_summary: If set to 1, Summary statistics will be printed to the console. Default 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#siti)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='siti', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "print_summary": print_summary,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def smartblur(

    self,




    *,
    luma_radius: Float = Default('1'),luma_strength: Float = Default('1'),luma_threshold: Int = Default('0'),chroma_radius: Float = Default('-0.9'),chroma_strength: Float = Default('-2'),chroma_threshold: Int = Default('-31'),alpha_radius: Float = Default('-0.9'),alpha_strength: Float = Default('-2'),alpha_threshold: Int = Default('-31'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Blur the input video without impacting the outlines.

It accepts the following options:


Args:
    luma_radius: Set the luma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is 1.0.
    luma_strength: Set the luma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is 1.0.
    luma_threshold: Set the luma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is 0.
    chroma_radius: Set the chroma radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
    chroma_strength: Set the chroma strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
    chroma_threshold: Set the chroma threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
    alpha_radius: Set the alpha radius. The option value must be a float number in the range [0.1,5.0] that specifies the variance of the gaussian filter used to blur the image (slower if larger). Default value is luma_radius.
    alpha_strength: Set the alpha strength. The option value must be a float number in the range [-1.0,1.0] that configures the blurring. A value included in [0.0,1.0] will blur the image whereas a value included in [-1.0,0.0] will sharpen the image. Default value is luma_strength.
    alpha_threshold: Set the alpha threshold used as a coefficient to determine whether a pixel should be blurred or not. The option value must be an integer in the range [-30,30]. A value of 0 will filter all the image, a value included in [0,30] will filter flat areas and a value included in [-30,0] will filter edges. Default value is luma_threshold.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#smartblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='smartblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_radius": luma_radius,

                "luma_strength": luma_strength,

                "luma_threshold": luma_threshold,

                "chroma_radius": chroma_radius,

                "chroma_strength": chroma_strength,

                "chroma_threshold": chroma_threshold,

                "alpha_radius": alpha_radius,

                "alpha_strength": alpha_strength,

                "alpha_threshold": alpha_threshold,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)











    def sobel(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply sobel operator to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes will be processed, unprocessed planes will be copied. By default value 0xf, all planes will be processed.
    scale: Set value which will be multiplied with filtered result.
    delta: Set value which will be added to filtered result.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sobel)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sobel', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def sobel_opencl(

    self,




    *,
    planes: Int = Default('15'),scale: Float = Default('1'),delta: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply the Sobel operator (https://en.wikipedia.org/wiki/Sobel_operator) to input video stream.

The filter accepts the following option:


Args:
    planes: Set which planes to filter. Default value is 0xf, by which all planes are processed.
    scale: Set value which will be multiplied with filtered result. Range is [0.0, 65535] and default value is 1.0.
    delta: Set value which will be added to filtered result. Range is [-65535, 65535] and default value is 0.0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#sobel_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='sobel_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "planes": planes,

                "scale": scale,

                "delta": delta,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def spectrumsynth(

    self,







        _phase: VideoStream,




    *,
    sample_rate: Int = Default('44100'),channels: Int = Default('1'),scale: Int| Literal["lin","log"] | Default = Default('log'),slide: Int| Literal["replace","scroll","fullframe","rscroll"] | Default = Default('fullframe'),win_func: Int| Literal["rect","bartlett","hann","hanning","hamming","blackman","welch","flattop","bharris","bnuttall","bhann","sine","nuttall","lanczos","gauss","tukey","dolph","cauchy","parzen","poisson","bohman","kaiser"] | Default = Default('rect'),overlap: Float = Default('1'),orientation: Int| Literal["vertical","horizontal"] | Default = Default('vertical'),


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

            self,







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









    def split(

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
            FFMpegFilterDef(name='split', typings_input=('video',), typings_output='[StreamType.video] * int(outputs)'),

            self,




            **merge({

                "outputs": outputs,

            },
            extra_options,


            )
        )

        return filter_node







    def spp(

    self,




    *,
    quality: Int = Default('3'),qp: Int = Default('0'),mode: Int| Literal["hard","soft"] | Default = Default('hard'),use_bframe_qp: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a simple postprocessing filter that compresses and decompresses the image
at several (or - in the case of quality level 6 - all) shifts
and average the results.

The filter accepts the following options:


Args:
    quality: Set quality level. The value max can be used to set the maximum level, currently 6.
    qp: Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available).
    mode: Set thresholding mode. Available modes are: @end table
    use_bframe_qp: Enable the use of the QP from the B-Frames if set to 1. Using this option may cause flicker since the B-Frames have often larger QP. Default is 0 (not enabled).
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#spp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='spp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "quality": quality,

                "qp": qp,

                "mode": mode,

                "use_bframe_qp": use_bframe_qp,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def ssim(

    self,







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

            self,







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







    def ssim360(

    self,







        _reference: VideoStream,




    *,
    stats_file: String = Default(None),compute_chroma: Int = Default('1'),frame_skip_ratio: Int = Default('0'),ref_projection: Int| Literal["e","equirect","c3x2","c2x3","barrel","barrelsplit"] | Default = Default('e'),main_projection: Int| Literal["e","equirect","c3x2","c2x3","barrel","barrelsplit"] | Default = Default('5'),ref_stereo: Int| Literal["mono","tb","lr"] | Default = Default('mono'),main_stereo: Int| Literal["mono","tb","lr"] | Default = Default('3'),ref_pad: Float = Default('0'),main_pad: Float = Default('0'),use_tape: Int = Default('0'),heatmap_str: String = Default(None),default_heatmap_width: Int = Default('32'),default_heatmap_height: Int = Default('16'),

    framesync_options: FFMpegFrameSyncOption | None = None,
    eof_action: str | None = None,
    shortest: bool | None = None,
    repeatlast: bool | None = None,


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Calculate the SSIM between two 360 video streams.


Args:
    stats_file: Set file where to store per-frame difference information
    compute_chroma: Specifies if non-luma channels must be computed (from 0 to 1) (default 1)
    frame_skip_ratio: Specifies the number of frames to be skipped from evaluation, for every evaluated frame (from 0 to 1e+06) (default 0)
    ref_projection: projection of the reference video (from 0 to 4) (default e)
    main_projection: projection of the main video (from 0 to 5) (default 5)
    ref_stereo: stereo format of the reference video (from 0 to 2) (default mono)
    main_stereo: stereo format of main video (from 0 to 3) (default 3)
    ref_pad: Expansion (padding) coefficient for each cube face of the reference video (from 0 to 10) (default 0)
    main_pad: Expansion (padding) coeffiecient for each cube face of the main video (from 0 to 10) (default 0)
    use_tape: Specifies if the tape based SSIM 360 algorithm must be used independent of the input video types (from 0 to 1) (default 0)
    heatmap_str: Heatmap data for view-based evaluation. For heatmap file format, please refer to EntSphericalVideoHeatmapData.
    default_heatmap_width: Default heatmap dimension. Will be used when dimension is not specified in heatmap data. (from 1 to 4096) (default 32)
    default_heatmap_height: Default heatmap dimension. Will be used when dimension is not specified in heatmap data. (from 1 to 4096) (default 16)
    framesync_options: Framesync options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """


        if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
            framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


        filter_node = filter_node_factory(
            FFMpegFilterDef(name='ssim360', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _reference,




            **merge({

                "stats_file": stats_file,

                "compute_chroma": compute_chroma,

                "frame_skip_ratio": frame_skip_ratio,

                "ref_projection": ref_projection,

                "main_projection": main_projection,

                "ref_stereo": ref_stereo,

                "main_stereo": main_stereo,

                "ref_pad": ref_pad,

                "main_pad": main_pad,

                "use_tape": use_tape,

                "heatmap_str": heatmap_str,

                "default_heatmap_width": default_heatmap_width,

                "default_heatmap_height": default_heatmap_height,

            },
            extra_options,

            framesync_options,


            )
        )
        return filter_node.video(0)







    def stereo3d(

    self,




    *,
    _in: Int| Literal["ab2l","tb2l","ab2r","tb2r","abl","tbl","abr","tbr","al","ar","sbs2l","sbs2r","sbsl","sbsr","irl","irr","icl","icr"] | Default = Default('sbsl'),out: Int| Literal["ab2l","tb2l","ab2r","tb2r","abl","tbl","abr","tbr","agmc","agmd","agmg","agmh","al","ar","arbg","arcc","arcd","arcg","arch","argg","aybc","aybd","aybg","aybh","irl","irr","ml","mr","sbs2l","sbs2r","sbsl","sbsr","chl","chr","icl","icr","hdmi"] | Default = Default('arcd'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert between different stereoscopic image formats.

The filters accept the following options:


Args:
    _in: Set stereoscopic image format of input. Available values for input image formats are: @end table
    out: Set stereoscopic image format of output. @end table Default value is arcd.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#stereo3d)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='stereo3d', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "in": _in,

                "out": out,

            },
            extra_options,


            )
        )
        return filter_node.video(0)













    def subtitles(

    self,




    *,
    filename: String = Default(None),original_size: Image_size = Default(None),fontsdir: String = Default(None),alpha: Boolean = Default('false'),charenc: String = Default(None),stream_index: Int = Default('-1'),force_style: String = Default(None),wrap_unicode: Boolean = Default('auto'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Draw subtitles on top of input video using the libass library.

To enable compilation of this filter you need to configure FFmpeg with
--enable-libass. This filter also requires a build with libavcodec and
libavformat to convert the passed subtitles file to ASS (Advanced Substation
Alpha) subtitles format.

The filter accepts the following options:


Args:
    filename: Set the filename of the subtitle file to read. It must be specified.
    original_size: Specify the size of the original video, the video for which the ASS file was composed. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual. Due to a misdesign in ASS aspect ratio arithmetic, this is necessary to correctly scale the fonts if the aspect ratio has been changed.
    fontsdir: Set a directory path containing fonts that can be used by the filter. These fonts will be used in addition to whatever the font provider uses.
    alpha: Process alpha channel, by default alpha channel is untouched.
    charenc: Set subtitles input character encoding. subtitles filter only. Only useful if not UTF-8.
    stream_index: Set subtitles stream index. subtitles filter only.
    force_style: Override default style or script info parameters of the subtitles. It accepts a string containing ASS style format KEY=VALUE couples separated by ",".
    wrap_unicode: Break lines according to the Unicode Line Breaking Algorithm. Availability requires at least libass release 0.17.0 (or LIBASS_VERSION 0x01600010), and libass must have been built with libunibreak. The option is enabled by default except for native ASS.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#subtitles)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='subtitles', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filename": filename,

                "original_size": original_size,

                "fontsdir": fontsdir,

                "alpha": alpha,

                "charenc": charenc,

                "stream_index": stream_index,

                "force_style": force_style,

                "wrap_unicode": wrap_unicode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def super2xsai(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale the input by 2x and smooth using the Super2xSaI (Scale and
Interpolate) pixel art scaling algorithm.

Useful for enlarging pixel art images without reducing sharpness.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#super2xsai)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='super2xsai', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def swaprect(

    self,




    *,
    w: String = Default('w/2'),h: String = Default('h/2'),x1: String = Default('w/2'),y1: String = Default('h/2'),x2: String = Default('0'),y2: String = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Swap two rectangular objects in video.

This filter accepts the following options:


Args:
    w: set rect width (default "w/2")
    h: The input width and height.
    x1: Set 1st rect x coordinate.
    y1: Set 1st rect y coordinate.
    x2: Set 2nd rect x coordinate.
    y2: Set 2nd rect y coordinate. All expressions are evaluated once for each frame.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#swaprect)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='swaprect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "w": w,

                "h": h,

                "x1": x1,

                "y1": y1,

                "x2": x2,

                "y2": y2,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def swapuv(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Swap U & V plane.


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#swapuv)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='swapuv', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def tblend(

    self,




    *,
    c0_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c1_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c2_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),c3_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('normal'),all_mode: Int| Literal["addition","addition128","grainmerge","and","average","burn","darken","difference","difference128","grainextract","divide","dodge","exclusion","extremity","freeze","glow","hardlight","hardmix","heat","lighten","linearlight","multiply","multiply128","negation","normal","or","overlay","phoenix","pinlight","reflect","screen","softlight","subtract","vividlight","xor","softdifference","geometric","harmonic","bleach","stain","interpolate","hardoverlay"] | Default = Default('-1'),c0_expr: String = Default(None),c1_expr: String = Default(None),c2_expr: String = Default(None),c3_expr: String = Default(None),all_expr: String = Default(None),c0_opacity: Double = Default('1'),c1_opacity: Double = Default('1'),c2_opacity: Double = Default('1'),c3_opacity: Double = Default('1'),all_opacity: Double = Default('1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Blend successive video frames.

See blend


Args:
    c0_mode: set component #0 blend mode (from 0 to 39) (default normal)
    c1_mode: set component #1 blend mode (from 0 to 39) (default normal)
    c2_mode: set component #2 blend mode (from 0 to 39) (default normal)
    c3_mode: set component #3 blend mode (from 0 to 39) (default normal)
    all_mode: set blend mode for all components (from -1 to 39) (default -1)
    c0_expr: set color component #0 expression
    c1_expr: set color component #1 expression
    c2_expr: set color component #2 expression
    c3_expr: set color component #3 expression
    all_expr: set expression for all color components
    c0_opacity: set color component #0 opacity (from 0 to 1) (default 1)
    c1_opacity: set color component #1 opacity (from 0 to 1) (default 1)
    c2_opacity: set color component #2 opacity (from 0 to 1) (default 1)
    c3_opacity: set color component #3 opacity (from 0 to 1) (default 1)
    all_opacity: set opacity for all color components (from 0 to 1) (default 1)
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tblend)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tblend', typings_input=('video',), typings_output=('video',)),

            self,




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


            timeline_options,

            )
        )
        return filter_node.video(0)







    def telecine(

    self,




    *,
    first_field: Int| Literal["top","t","bottom","b"] | Default = Default('top'),pattern: String = Default('23'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply telecine process to the video.

This filter accepts the following options:


Args:
    first_field: @end table
    pattern: A string of numbers representing the pulldown pattern you wish to apply. The default value is 23.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#telecine)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='telecine', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "first_field": first_field,

                "pattern": pattern,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def thistogram(

    self,




    *,
    width: Int = Default('0'),display_mode: Int| Literal["overlay","parade","stack"] | Default = Default('stack'),levels_mode: Int| Literal["linear","logarithmic"] | Default = Default('linear'),components: Int = Default('7'),bgopacity: Float = Default('0.9'),envelope: Boolean = Default('false'),ecolor: Color = Default('gold'),slide: Int| Literal["frame","replace","scroll","rscroll","picture"] | Default = Default('replace'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Compute and draw a color distribution histogram for the input video across time.

Unlike histogram video filter which only shows histogram of single input frame
at certain time, this filter shows also past histograms of number of frames defined
by width option.

The computed histogram is a representation of the color component
distribution in an image.

The filter accepts the following options:


Args:
    width: Set width of single color component output. Default value is 0. Value of 0 means width will be picked from input video. This also set number of passed histograms to keep. Allowed range is [0, 8192].
    display_mode: Set display mode. It accepts the following values: @end table Default is stack.
    levels_mode: Set mode. Can be either linear, or logarithmic. Default is linear.
    components: Set what color components to display. Default is 7.
    bgopacity: Set background opacity. Default is 0.9.
    envelope: Show envelope. Default is disabled.
    ecolor: Set envelope color. Default is gold.
    slide: Set slide mode. Available values for slide is: @end table Default is replace.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#thistogram)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='thistogram', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "width": width,

                "display_mode": display_mode,

                "levels_mode": levels_mode,

                "components": components,

                "bgopacity": bgopacity,

                "envelope": envelope,

                "ecolor": ecolor,

                "slide": slide,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def threshold(

    self,







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

            self,







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







    def thumbnail(

    self,




    *,
    n: Int = Default('100'),log: Int| Literal["quiet","info","verbose"] | Default = Default('info'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Select the most representative frame in a given sequence of consecutive frames.

The filter accepts the following options:


Args:
    n: Set the frames batch size to analyze; in a set of n frames, the filter will pick one of them, and then handle the next batch of n frames until the end. Default is 100.
    log: Set the log level to display picked frame stats. Default is info.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#thumbnail)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='thumbnail', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

                "log": log,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def thumbnail_cuda(

    self,




    *,
    n: Int = Default('100'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Select the most representative frame in a given sequence of consecutive frames.


Args:
    n: set the frames batch size (from 2 to INT_MAX) (default 100)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='thumbnail_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tile(

    self,




    *,
    layout: Image_size = Default('6x5'),nb_frames: Int = Default('0'),margin: Int = Default('0'),padding: Int = Default('0'),color: Color = Default('black'),overlap: Int = Default('0'),init_padding: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Tile several successive frames together.

The untile filter can do the reverse.

The filter accepts the following options:


Args:
    layout: Set the grid size in the form COLUMNSxROWS. Range is up to UINT_MAX cells. Default is 6x5.
    nb_frames: Set the maximum number of frames to render in the given area. It must be less than or equal to wxh. The default value is 0, meaning all the area will be used.
    margin: Set the outer border margin in pixels. Range is 0 to 1024. Default is 0.
    padding: Set the inner border thickness (i.e. the number of pixels between frames). For more advanced padding options (such as having different values for the edges), refer to the pad video filter. Range is 0 to 1024. Default is 0.
    color: Specify the color of the unused area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
    overlap: Set the number of frames to overlap when tiling several successive frames together. The value must be between 0 and nb_frames - 1. Default is 0.
    init_padding: Set the number of frames to initially be empty before displaying first output frame. This controls how soon will one get first output frame. The value must be between 0 and nb_frames - 1. Default is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tile)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tile', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "layout": layout,

                "nb_frames": nb_frames,

                "margin": margin,

                "padding": padding,

                "color": color,

                "overlap": overlap,

                "init_padding": init_padding,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tiltandshift(

    self,




    *,
    tilt: Int = Default('1'),start: Int| Literal["none","frame","black"] | Default = Default('none'),end: Int| Literal["none","frame","black"] | Default = Default('none'),hold: Int = Default('0'),pad: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply tilt-and-shift effect.

What happens when you invert time and space?

Normally a video is composed of several frames that represent a different
instant of time and shows a scene that evolves in the space captured by the
frame. This filter is the antipode of that concept, taking inspiration from
tilt and shift photography.

A filtered frame contains the whole timeline of events composing the sequence,
and this is obtained by placing a slice of pixels from each frame into a single
one. However, since there are no infinite-width frames, this is done up the
width of the input frame, and a video is recomposed by shifting away one
column for each subsequent frame. In order to map space to time, the filter
tilts each input frame as well, so that motion is preserved. This is accomplished
by progressively selecting a different column from each input frame.

The end result is a sort of inverted parallax, so that far away objects move
much faster that the ones in the front. The ideal conditions for this video
effect are when there is either very little motion and the backgroud is static,
or when there is a lot of motion and a very wide depth of field (e.g. wide
panorama, while moving on a train).

The filter accepts the following parameters:


Args:
    tilt: Tilt video while shifting (default). When unset, video will be sliding a static image, composed of the first column of each frame.
    start: What to do at the start of filtering (see below).
    end: What to do at the end of filtering (see below).
    hold: How many columns should pass through before start of filtering.
    pad: How many columns should be inserted before end of filtering.
    extra_options: Extra options for the filter

Returns:
    out: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tiltandshift)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tiltandshift', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "tilt": tilt,

                "start": start,

                "end": end,

                "hold": hold,

                "pad": pad,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def tinterlace(

    self,




    *,
    mode: Int| Literal["merge","drop_even","drop_odd","pad","interleave_top","interleave_bottom","interlacex2","mergex2"] | Default = Default('merge'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Perform various types of temporal field interlacing.

Frames are counted starting from 1, so the first input frame is
considered odd.

The filter accepts the following options:


Args:
    mode: Specify the mode of the interlacing. This option can also be specified as a value alone. See below for a list of values for this option. Available values are: @end table Numeric values are deprecated but are accepted for backward compatibility reasons. Default mode is merge.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tinterlace)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tinterlace', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tlut2(

    self,




    *,
    c0: String = Default('x'),c1: String = Default('x'),c2: String = Default('x'),c3: String = Default('x'),


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
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#lut2)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tlut2', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "c0": c0,

                "c1": c1,

                "c2": c2,

                "c3": c3,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def tmedian(

    self,




    *,
    radius: Int = Default('1'),planes: Int = Default('15'),percentile: Float = Default('0.5'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Pick median pixels from several successive input video frames.

The filter accepts the following options:


Args:
    radius: Set radius of median filter. Default is 1. Allowed range is from 1 to 127.
    planes: Set which planes to filter. Default value is 15, by which all planes are processed.
    percentile: Set median percentile. Default value is 0.5. Default value of 0.5 will pick always median values, while 0 will pick minimum values, and 1 maximum values.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tmedian)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tmedian', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "radius": radius,

                "planes": planes,

                "percentile": percentile,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def tmidequalizer(

    self,




    *,
    radius: Int = Default('5'),sigma: Float = Default('0.5'),planes: Int = Default('15'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Temporal Midway Video Equalization effect.

Midway Video Equalization adjusts a sequence of video frames to have the same
histograms, while maintaining their dynamics as much as possible. It's
useful for e.g. matching exposures from a video frames sequence.

This filter accepts the following option:


Args:
    radius: Set filtering radius. Default is 5. Allowed range is from 1 to 127.
    sigma: Set filtering sigma. Default is 0.5. This controls strength of filtering. Setting this option to 0 effectively does nothing.
    planes: Set which planes to process. Default is 15, which is all available planes.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tmidequalizer)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tmidequalizer', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "radius": radius,

                "sigma": sigma,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def tmix(

    self,




    *,
    frames: Int = Default('3'),weights: String = Default('1 1 1'),scale: Float = Default('0'),planes: Flags = Default('F'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Mix successive video frames.

A description of the accepted options follows.


Args:
    frames: The number of successive frames to mix. If unspecified, it defaults to 3.
    weights: set weight for each frame (default "1 1 1")
    scale: set scale (from 0 to 32767) (default 0)
    planes: Syntax is same as option with same name.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tmix)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tmix', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "frames": frames,

                "weights": weights,

                "scale": scale,

                "planes": planes,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def tonemap(

    self,




    *,
    tonemap: Int| Literal["none","linear","gamma","clip","reinhard","hable","mobius"] | Default = Default('none'),param: Double = Default('nan'),desat: Double = Default('2'),peak: Double = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Tone map colors from different dynamic ranges.

This filter expects data in single precision floating point, as it needs to
operate on (and can output) out-of-range values. Another filter, such as
zscale, is needed to convert the resulting frame to a usable format.

The tonemapping algorithms implemented only work on linear light, so input
data should be linearized beforehand (and possibly correctly tagged).

@example
ffmpeg -i INPUT -vf zscale=transfer=linear,tonemap=clip,zscale=transfer=bt709,format=yuv420p OUTPUT
@end example


Args:
    tonemap: Set the tone map algorithm to use. Possible values are: @end table Default is none.
    param: Tune the tone mapping algorithm. This affects the following algorithms: @end table
    desat: Apply desaturation for highlights that exceed this level of brightness. The higher the parameter, the more color information will be preserved. This setting helps prevent unnaturally blown-out colors for super-highlights, by (smoothly) turning into white instead. This makes images feel more natural, at the cost of reducing information about out-of-range colors. The default of 2.0 is somewhat conservative and will mostly just apply to skies or directly sunlit surfaces. A setting of 0.0 disables this option. This option works only if the input frame has a supported color tag.
    peak: Override signal/nominal/reference peak with this value. Useful when the embedded peak information in display metadata is not reliable or when tone mapping from a lower range to a higher range.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tonemap)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tonemap', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "tonemap": tonemap,

                "param": param,

                "desat": desat,

                "peak": peak,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tonemap_opencl(

    self,




    *,
    tonemap: Int| Literal["none","linear","gamma","clip","reinhard","hable","mobius"] | Default = Default('none'),transfer: Int| Literal["bt709","bt2020"] | Default = Default('bt709'),matrix: Int| Literal["bt709","bt2020"] | Default = Default('-1'),primaries: Int| Literal["bt709","bt2020"] | Default = Default('-1'),range: Int| Literal["tv","pc","limited","full"] | Default = Default('-1'),format: Pix_fmt = Default('none'),peak: Double = Default('0'),param: Double = Default('nan'),desat: Double = Default('0.5'),threshold: Double = Default('0.2'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Perform HDR(PQ/HLG) to SDR conversion with tone-mapping.

It accepts the following parameters:


Args:
    tonemap: Specify the tone-mapping operator to be used. Same as tonemap option in tonemap.
    transfer: Set the output transfer characteristics. Possible values are: @end table Default is bt709.
    matrix: Set the output colorspace matrix. Possible value are: @end table Default is same as input.
    primaries: Set the output color primaries. Possible values are: @end table Default is same as input.
    range: Set the output color range. Possible values are: @end table Default is same as input.
    format: Specify the output pixel format. Currently supported formats are: @end table
    peak: signal peak override (from 0 to DBL_MAX) (default 0)
    param: Tune the tone mapping algorithm. same as param option in tonemap.
    desat: Apply desaturation for highlights that exceed this level of brightness. The higher the parameter, the more color information will be preserved. This setting helps prevent unnaturally blown-out colors for super-highlights, by (smoothly) turning into white instead. This makes images feel more natural, at the cost of reducing information about out-of-range colors. The default value is 0.5, and the algorithm here is a little different from the cpu version tonemap currently. A setting of 0.0 disables this option.
    threshold: The tonemapping algorithm parameters is fine-tuned per each scene. And a threshold is used to detect whether the scene has changed or not. If the distance between the current frame average brightness and the current running average exceeds a threshold value, we would re-calculate scene average and peak brightness. The default value is 0.2.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tonemap_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tonemap_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "tonemap": tonemap,

                "transfer": transfer,

                "matrix": matrix,

                "primaries": primaries,

                "range": range,

                "format": format,

                "peak": peak,

                "param": param,

                "desat": desat,

                "threshold": threshold,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tonemap_vaapi(

    self,




    *,
    format: String = Default(None),matrix: String = Default(None),primaries: String = Default(None),transfer: String = Default(None),display: String = Default(None),light: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Perform HDR-to-SDR or HDR-to-HDR tone-mapping.
It currently only accepts HDR10 as input.

It accepts the following parameters:


Args:
    format: Specify the output pixel format. Default is nv12 for HDR-to-SDR tone-mapping and p010 for HDR-to-HDR tone-mapping.
    matrix: Set the output colorspace matrix. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
    primaries: Set the output color primaries. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
    transfer: Set the output transfer characteristics. Default is bt709 for HDR-to-SDR tone-mapping and same as input for HDR-to-HDR tone-mapping.
    display: Set the output mastering display colour volume. It is given by a '|'-separated list of two values, two values are space separated. It set display primaries x & y in G, B, R order, then white point x & y, the nominal minimum & maximum display luminances. HDR-to-HDR tone-mapping will be performed when this option is set.
    light: Set the output content light level information. It accepts 2 space-separated values, the first input is the maximum light level and the second input is the maximum average light level. It is ignored for HDR-to-SDR tone-mapping, and optional for HDR-to-HDR tone-mapping.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tonemap_vaapi)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tonemap_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "format": format,

                "matrix": matrix,

                "primaries": primaries,

                "transfer": transfer,

                "display": display,

                "light": light,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def tpad(

    self,




    *,
    start: Int = Default('0'),stop: Int = Default('0'),start_mode: Int| Literal["add","clone"] | Default = Default('add'),stop_mode: Int| Literal["add","clone"] | Default = Default('add'),start_duration: Duration = Default('0'),stop_duration: Duration = Default('0'),color: Color = Default('black'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Temporarily pad video frames.

The filter accepts the following options:


Args:
    start: Specify number of delay frames before input video stream. Default is 0.
    stop: Specify number of padding frames after input video stream. Set to -1 to pad indefinitely. Default is 0.
    start_mode: Set kind of frames added to beginning of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of first frame. Default is add.
    stop_mode: Set kind of frames added to end of stream. Can be either add or clone. With add frames of solid-color are added. With clone frames are clones of last frame. Default is add.
    start_duration: Specify the duration of the start/stop delay. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop. Default is 0.
    stop_duration: Specify the duration of the start/stop delay. See the Time duration section in the ffmpeg-utils(1) manual for the accepted syntax. These options override start and stop. Default is 0.
    color: Specify the color of the padded area. For the syntax of this option, check the "Color" section in the ffmpeg-utils manual. The default value of color is "black".
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#tpad)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='tpad', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "start": start,

                "stop": stop,

                "start_mode": start_mode,

                "stop_mode": stop_mode,

                "start_duration": start_duration,

                "stop_duration": stop_duration,

                "color": color,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def transpose(

    self,




    *,
    dir: Int| Literal["cclock_flip","clock","cclock","clock_flip"] | Default = Default('cclock_flip'),passthrough: Int| Literal["none","portrait","landscape"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Transpose rows with columns in the input video and optionally flip it.

It accepts the following parameters:


Args:
    dir: Specify the transposition direction. Can assume the following values: @end table For values between 4-7, the transposition is only done if the input video geometry is portrait and not landscape. These values are deprecated, the passthrough option should be used instead. Numerical values are deprecated, and should be dropped in favor of symbolic constants.
    passthrough: Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values: @end table Default value is none.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#transpose)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='transpose', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dir": dir,

                "passthrough": passthrough,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def transpose_opencl(

    self,




    *,
    dir: Int| Literal["cclock_flip","clock","cclock","clock_flip"] | Default = Default('cclock_flip'),passthrough: Int| Literal["none","portrait","landscape"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Transpose input video


Args:
    dir: set transpose direction (from 0 to 3) (default cclock_flip)
    passthrough: do not apply transposition if the input matches the specified geometry (from 0 to INT_MAX) (default none)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='transpose_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dir": dir,

                "passthrough": passthrough,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def transpose_vaapi(

    self,




    *,
    dir: Int| Literal["cclock_flip","clock","cclock","clock_flip","reversal","hflip","vflip"] | Default = Default('cclock_flip'),passthrough: Int| Literal["none","portrait","landscape"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

VAAPI VPP for transpose


Args:
    dir: set transpose direction (from 0 to 6) (default cclock_flip)
    passthrough: do not apply transposition if the input matches the specified geometry (from 0 to INT_MAX) (default none)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='transpose_vaapi', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dir": dir,

                "passthrough": passthrough,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def transpose_vulkan(

    self,




    *,
    dir: Int| Literal["cclock_flip","clock","cclock","clock_flip"] | Default = Default('cclock_flip'),passthrough: Int| Literal["none","portrait","landscape"] | Default = Default('none'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Transpose rows with columns in the input video and optionally flip it.
For more in depth examples see the transpose video filter, which shares mostly the same options.

It accepts the following parameters:


Args:
    dir: Specify the transposition direction. Can assume the following values: @end table
    passthrough: Do not apply the transposition if the input geometry matches the one specified by the specified value. It accepts the following values: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#transpose_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='transpose_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "dir": dir,

                "passthrough": passthrough,

            },
            extra_options,


            )
        )
        return filter_node.video(0)











    def trim(

    self,




    *,
    start: Duration = Default('INT64_MAX'),end: Duration = Default('INT64_MAX'),start_pts: Int64 = Default('I64_MIN'),end_pts: Int64 = Default('I64_MIN'),duration: Duration = Default('0'),start_frame: Int64 = Default('-1'),end_frame: Int64 = Default('I64_MAX'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Trim the input so that the output contains one continuous subpart of the input.

It accepts the following parameters:


Args:
    start: Specify the time of the start of the kept section, i.e. the frame with the timestamp start will be the first frame in the output.
    end: Specify the time of the first frame that will be dropped, i.e. the frame immediately preceding the one with the timestamp end will be the last frame in the output.
    start_pts: This is the same as start, except this option sets the start timestamp in timebase units instead of seconds.
    end_pts: This is the same as end, except this option sets the end timestamp in timebase units instead of seconds.
    duration: The maximum duration of the output in seconds.
    start_frame: The number of the first frame that should be passed to the output.
    end_frame: The number of the first frame that should be dropped.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#trim)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='trim', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "start": start,

                "end": end,

                "start_pts": start_pts,

                "end_pts": end_pts,

                "duration": duration,

                "start_frame": start_frame,

                "end_frame": end_frame,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def unsharp(

    self,




    *,
    luma_msize_x: Int = Default('5'),luma_msize_y: Int = Default('5'),luma_amount: Float = Default('1'),chroma_msize_x: Int = Default('5'),chroma_msize_y: Int = Default('5'),chroma_amount: Float = Default('0'),alpha_msize_x: Int = Default('5'),alpha_msize_y: Int = Default('5'),alpha_amount: Float = Default('0'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Sharpen or blur the input video.

It accepts the following parameters:


Args:
    luma_msize_x: Set the luma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
    luma_msize_y: Set the luma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
    luma_amount: Set the luma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 1.0.
    chroma_msize_x: Set the chroma matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
    chroma_msize_y: Set the chroma matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
    chroma_amount: Set the chroma effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 0.0.
    alpha_msize_x: Set the alpha matrix horizontal size. It must be an odd integer between 3 and 23. The default value is 5.
    alpha_msize_y: Set the alpha matrix vertical size. It must be an odd integer between 3 and 23. The default value is 5.
    alpha_amount: Set the alpha effect strength. It must be a floating point number, reasonable values lay between -1.5 and 1.5. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect. Default value is 0.0.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#unsharp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='unsharp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_msize_x": luma_msize_x,

                "luma_msize_y": luma_msize_y,

                "luma_amount": luma_amount,

                "chroma_msize_x": chroma_msize_x,

                "chroma_msize_y": chroma_msize_y,

                "chroma_amount": chroma_amount,

                "alpha_msize_x": alpha_msize_x,

                "alpha_msize_y": alpha_msize_y,

                "alpha_amount": alpha_amount,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def unsharp_opencl(

    self,




    *,
    luma_msize_x: Float = Default('5'),luma_msize_y: Float = Default('5'),luma_amount: Float = Default('1'),chroma_msize_x: Float = Default('5'),chroma_msize_y: Float = Default('5'),chroma_amount: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Sharpen or blur the input video.

It accepts the following parameters:


Args:
    luma_msize_x: Set the luma matrix horizontal size. Range is [1, 23] and default value is 5.
    luma_msize_y: Set the luma matrix vertical size. Range is [1, 23] and default value is 5.
    luma_amount: Set the luma effect strength. Range is [-10, 10] and default value is 1.0. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
    chroma_msize_x: Set the chroma matrix horizontal size. Range is [1, 23] and default value is 5.
    chroma_msize_y: Set the chroma matrix vertical size. Range is [1, 23] and default value is 5.
    chroma_amount: Set the chroma effect strength. Range is [-10, 10] and default value is 0.0. Negative values will blur the input video, while positive values will sharpen it, a value of zero will disable the effect.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#unsharp_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='unsharp_opencl', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "luma_msize_x": luma_msize_x,

                "luma_msize_y": luma_msize_y,

                "luma_amount": luma_amount,

                "chroma_msize_x": chroma_msize_x,

                "chroma_msize_y": chroma_msize_y,

                "chroma_amount": chroma_amount,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def untile(

    self,




    *,
    layout: Image_size = Default('6x5'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Decompose a video made of tiled images into the individual images.

The frame rate of the output video is the frame rate of the input video
multiplied by the number of tiles.

This filter does the reverse of tile.

The filter accepts the following options:


Args:
    layout: Set the grid size (i.e. the number of lines and columns). For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#untile)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='untile', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "layout": layout,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def uspp(

    self,




    *,
    quality: Int = Default('3'),qp: Int = Default('0'),use_bframe_qp: Boolean = Default('false'),codec: String = Default('snow'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply ultra slow/simple postprocessing filter that compresses and decompresses
the image at several (or - in the case of quality level 8 - all)
shifts and average the results.

The way this differs from the behavior of spp is that uspp actually encodes &
decodes each case with libavcodec Snow, whereas spp uses a simplified intra only 8x8
DCT similar to MJPEG.

This filter is not available in ffmpeg versions between 5.0 and 6.0.

The filter accepts the following options:


Args:
    quality: Set quality. This option defines the number of levels for averaging. It accepts an integer in the range 0-8. If set to 0, the filter will have no effect. A value of 8 means the higher quality. For each increment of that value the speed drops by a factor of approximately 2. Default value is 3.
    qp: Force a constant quantization parameter. If not set, the filter will use the QP from the video stream (if available).
    use_bframe_qp: use B-frames' QP (default false)
    codec: Use specified codec instead of snow.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#uspp)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='uspp', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "quality": quality,

                "qp": qp,

                "use_bframe_qp": use_bframe_qp,

                "codec": codec,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def v360(

    self,




    *,
    input: Int| Literal["e","equirect","c3x2","c6x1","eac","dfisheye","flat","rectilinear","gnomonic","barrel","fb","c1x6","sg","mercator","ball","hammer","sinusoidal","fisheye","pannini","cylindrical","tetrahedron","barrelsplit","tsp","hequirect","he","equisolid","og","octahedron","cylindricalea"] | Default = Default('e'),output: Int| Literal["e","equirect","c3x2","c6x1","eac","dfisheye","flat","rectilinear","gnomonic","barrel","fb","c1x6","sg","mercator","ball","hammer","sinusoidal","fisheye","pannini","cylindrical","perspective","tetrahedron","barrelsplit","tsp","hequirect","he","equisolid","og","octahedron","cylindricalea"] | Default = Default('c3x2'),interp: Int| Literal["near","nearest","line","linear","lagrange9","cube","cubic","lanc","lanczos","sp16","spline16","gauss","gaussian","mitchell"] | Default = Default('line'),w: Int = Default('0'),h: Int = Default('0'),in_stereo: Int| Literal["2d","sbs","tb"] | Default = Default('2d'),out_stereo: Int| Literal["2d","sbs","tb"] | Default = Default('2d'),in_forder: String = Default('rludfb'),out_forder: String = Default('rludfb'),in_frot: String = Default('000000'),out_frot: String = Default('000000'),in_pad: Float = Default('0'),out_pad: Float = Default('0'),fin_pad: Int = Default('0'),fout_pad: Int = Default('0'),yaw: Float = Default('0'),pitch: Float = Default('0'),roll: Float = Default('0'),rorder: String = Default('ypr'),h_fov: Float = Default('0'),v_fov: Float = Default('0'),d_fov: Float = Default('0'),h_flip: Boolean = Default('false'),v_flip: Boolean = Default('false'),d_flip: Boolean = Default('false'),ih_flip: Boolean = Default('false'),iv_flip: Boolean = Default('false'),in_trans: Boolean = Default('false'),out_trans: Boolean = Default('false'),ih_fov: Float = Default('0'),iv_fov: Float = Default('0'),id_fov: Float = Default('0'),h_offset: Float = Default('0'),v_offset: Float = Default('0'),alpha_mask: Boolean = Default('false'),reset_rot: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Convert 360 videos between various formats.

The filter accepts the following options:


Args:
    input: set input projection (from 0 to 24) (default e)
    output: Set format of the input/output video. Available formats: @end table
    interp: Set interpolation method.@* Note: more complex interpolation methods require much more memory to run. Available methods: @end table Default value is line.
    w: output width (from 0 to 32767) (default 0)
    h: Set the output video resolution. Default resolution depends on formats.
    in_stereo: input stereo format (from 0 to 2) (default 2d)
    out_stereo: Set the input/output stereo format. @end table Default value is 2d for input and output format.
    in_forder: input cubemap face order (default "rludfb")
    out_forder: output cubemap face order (default "rludfb")
    in_frot: input cubemap face rotation (default "000000")
    out_frot: output cubemap face rotation (default "000000")
    in_pad: percent input cubemap pads (from 0 to 0.1) (default 0)
    out_pad: percent output cubemap pads (from 0 to 0.1) (default 0)
    fin_pad: fixed input cubemap pads (from 0 to 100) (default 0)
    fout_pad: fixed output cubemap pads (from 0 to 100) (default 0)
    yaw: yaw rotation (from -180 to 180) (default 0)
    pitch: pitch rotation (from -180 to 180) (default 0)
    roll: Set rotation for the output video. Values in degrees.
    rorder: Set rotation order for the output video. Choose one item for each position. @end table Default value is ypr.
    h_fov: output horizontal field of view (from 0 to 360) (default 0)
    v_fov: output vertical field of view (from 0 to 360) (default 0)
    d_fov: output diagonal field of view (from 0 to 360) (default 0)
    h_flip: flip out video horizontally (default false)
    v_flip: flip out video vertically (default false)
    d_flip: Flip the output video horizontally(swaps left-right)/vertically(swaps up-down)/in-depth(swaps back-forward). Boolean values.
    ih_flip: flip in video horizontally (default false)
    iv_flip: Set if input video is flipped horizontally/vertically. Boolean values.
    in_trans: Set if input video is transposed. Boolean value, by default disabled.
    out_trans: Set if output video needs to be transposed. Boolean value, by default disabled.
    ih_fov: input horizontal field of view (from 0 to 360) (default 0)
    iv_fov: input vertical field of view (from 0 to 360) (default 0)
    id_fov: input diagonal field of view (from 0 to 360) (default 0)
    h_offset: output horizontal off-axis offset (from -1 to 1) (default 0)
    v_offset: Set output horizontal/vertical off-axis offset. Default is set to 0. Allowed range is from -1 to 1.
    alpha_mask: Build mask in alpha plane for all unmapped pixels by marking them fully transparent. Boolean value, by default disabled.
    reset_rot: Reset rotation of output video. Boolean value, by default disabled.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#v360)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='v360', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "input": input,

                "output": output,

                "interp": interp,

                "w": w,

                "h": h,

                "in_stereo": in_stereo,

                "out_stereo": out_stereo,

                "in_forder": in_forder,

                "out_forder": out_forder,

                "in_frot": in_frot,

                "out_frot": out_frot,

                "in_pad": in_pad,

                "out_pad": out_pad,

                "fin_pad": fin_pad,

                "fout_pad": fout_pad,

                "yaw": yaw,

                "pitch": pitch,

                "roll": roll,

                "rorder": rorder,

                "h_fov": h_fov,

                "v_fov": v_fov,

                "d_fov": d_fov,

                "h_flip": h_flip,

                "v_flip": v_flip,

                "d_flip": d_flip,

                "ih_flip": ih_flip,

                "iv_flip": iv_flip,

                "in_trans": in_trans,

                "out_trans": out_trans,

                "ih_fov": ih_fov,

                "iv_fov": iv_fov,

                "id_fov": id_fov,

                "h_offset": h_offset,

                "v_offset": v_offset,

                "alpha_mask": alpha_mask,

                "reset_rot": reset_rot,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vaguedenoiser(

    self,




    *,
    threshold: Float = Default('2'),method: Int| Literal["hard","soft","garrote"] | Default = Default('garrote'),nsteps: Int = Default('6'),percent: Float = Default('85'),planes: Int = Default('15'),type: Int| Literal["universal","bayes"] | Default = Default('universal'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply a wavelet based denoiser.

It transforms each frame from the video input into the wavelet domain,
using Cohen-Daubechies-Feauveau 9/7. Then it applies some filtering to
the obtained coefficients. It does an inverse wavelet transform after.
Due to wavelet properties, it should give a nice smoothed result, and
reduced noise, without blurring picture features.

This filter accepts the following options:


Args:
    threshold: The filtering strength. The higher, the more filtered the video will be. Hard thresholding can use a higher threshold than soft thresholding before the video looks overfiltered. Default value is 2.
    method: The filtering method the filter will use. It accepts the following values: @end table Default is garrote.
    nsteps: Number of times, the wavelet will decompose the picture. Picture can't be decomposed beyond a particular point (typically, 8 for a 640x480 frame - as 2^9 = 512 > 480). Valid values are integers between 1 and 32. Default value is 6.
    percent: Partial of full denoising (limited coefficients shrinking), from 0 to 100. Default value is 85.
    planes: A list of the planes to process. By default all planes are processed.
    type: The threshold type the filter will use. It accepts the following values: @end table Default is universal.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vaguedenoiser)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vaguedenoiser', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "threshold": threshold,

                "method": method,

                "nsteps": nsteps,

                "percent": percent,

                "planes": planes,

                "type": type,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def varblur(

    self,







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

            self,







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







    def vectorscope(

    self,




    *,
    mode: Int| Literal["gray","tint","color","color2","color3","color4","color5"] | Default = Default('gray'),x: Int = Default('1'),y: Int = Default('2'),intensity: Float = Default('0.004'),envelope: Int| Literal["none","instant","peak","peak+instant"] | Default = Default('none'),graticule: Int| Literal["none","green","color","invert"] | Default = Default('none'),opacity: Float = Default('0.75'),flags: Flags| Literal["white","black","name"] | Default = Default('name'),bgopacity: Float = Default('0.3'),lthreshold: Float = Default('0'),hthreshold: Float = Default('1'),colorspace: Int| Literal["auto","601","709"] | Default = Default('auto'),tint0: Float = Default('0'),tint1: Float = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Display 2 color component values in the two dimensional graph (which is called
a vectorscope).

This filter accepts the following options:


Args:
    mode: Set vectorscope mode. It accepts the following values: @end table
    x: Set which color component will be represented on X-axis. Default is 1.
    y: Set which color component will be represented on Y-axis. Default is 2.
    intensity: Set intensity, used by modes: gray, color, color3 and color5 for increasing brightness of color component which represents frequency of (X, Y) location in graph.
    envelope: @end table
    graticule: Set what kind of graticule to draw. @end table
    opacity: Set graticule opacity.
    flags: Set graticule flags. @end table
    bgopacity: Set background opacity.
    lthreshold: Set low threshold for color component not represented on X or Y axis. Values lower than this value will be ignored. Default is 0. Note this value is multiplied with actual max possible value one pixel component can have. So for 8-bit input and low threshold value of 0.1 actual threshold is 0.1 * 255 = 25.
    hthreshold: Set high threshold for color component not represented on X or Y axis. Values higher than this value will be ignored. Default is 1. Note this value is multiplied with actual max possible value one pixel component can have. So for 8-bit input and high threshold value of 0.9 actual threshold is 0.9 * 255 = 230.
    colorspace: Set what kind of colorspace to use when drawing graticule. @end table Default is auto.
    tint0: set 1st tint (from -1 to 1) (default 0)
    tint1: Set color tint for gray/tint vectorscope mode. By default both options are zero. This means no tint, and output will remain gray.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vectorscope)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vectorscope', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "x": x,

                "y": y,

                "intensity": intensity,

                "envelope": envelope,

                "graticule": graticule,

                "opacity": opacity,

                "flags": flags,

                "bgopacity": bgopacity,

                "lthreshold": lthreshold,

                "hthreshold": hthreshold,

                "colorspace": colorspace,

                "tint0": tint0,

                "tint1": tint1,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vflip(

    self,








    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flip the input video vertically.

For example, to vertically flip a video with ffmpeg:
@example
ffmpeg -i in.avi -vf "vflip" out.avi
@end example


Args:
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vflip)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vflip', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def vflip_vulkan(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Flips an image vertically.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vflip_vulkan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vflip_vulkan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vfrdet(

    self,








    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Detect variable frame rate video.

This filter tries to detect if the input is variable or constant frame rate.

At end it will output number of frames detected as having variable delta pts,
and ones with constant delta pts.
If there was frames with variable delta, than it will also show min, max and
average delta encountered.


Args:
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vfrdet)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vfrdet', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vibrance(

    self,




    *,
    intensity: Float = Default('0'),rbal: Float = Default('1'),gbal: Float = Default('1'),bbal: Float = Default('1'),rlum: Float = Default('0.072186'),glum: Float = Default('0.715158'),blum: Float = Default('0.212656'),alternate: Boolean = Default('false'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Boost or alter saturation.

The filter accepts the following options:


Args:
    intensity: Set strength of boost if positive value or strength of alter if negative value. Default is 0. Allowed range is from -2 to 2.
    rbal: Set the red balance. Default is 1. Allowed range is from -10 to 10.
    gbal: Set the green balance. Default is 1. Allowed range is from -10 to 10.
    bbal: Set the blue balance. Default is 1. Allowed range is from -10 to 10.
    rlum: Set the red luma coefficient.
    glum: Set the green luma coefficient.
    blum: Set the blue luma coefficient.
    alternate: If intensity is negative and this is set to 1, colors will change, otherwise colors will be less saturated, more towards gray.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vibrance)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vibrance', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "intensity": intensity,

                "rbal": rbal,

                "gbal": gbal,

                "bbal": bbal,

                "rlum": rlum,

                "glum": glum,

                "blum": blum,

                "alternate": alternate,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def vidstabdetect(

    self,




    *,
    result: String = Default('transforms.trf'),shakiness: Int = Default('5'),accuracy: Int = Default('15'),stepsize: Int = Default('6'),mincontrast: Double = Default('0.25'),show: Int = Default('0'),tripod: Int = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Analyze video stabilization/deshaking. Perform pass 1 of 2, see
vidstabtransform for pass 2.

This filter generates a file with relative translation and rotation
transform information about subsequent frames, which is then used by
the vidstabtransform filter.

To enable compilation of this filter you need to configure FFmpeg with
--enable-libvidstab.

This filter accepts the following options:


Args:
    result: Set the path to the file used to write the transforms information. Default value is transforms.trf.
    shakiness: Set how shaky the video is and how quick the camera is. It accepts an integer in the range 1-10, a value of 1 means little shakiness, a value of 10 means strong shakiness. Default value is 5.
    accuracy: Set the accuracy of the detection process. It must be a value in the range 1-15. A value of 1 means low accuracy, a value of 15 means high accuracy. Default value is 15.
    stepsize: Set stepsize of the search process. The region around minimum is scanned with 1 pixel resolution. Default value is 6.
    mincontrast: Set minimum contrast. Below this value a local measurement field is discarded. Must be a floating point value in the range 0-1. Default value is 0.3.
    show: Show fields and transforms in the resulting frames. It accepts an integer in the range 0-2. Default value is 0, which disables any visualization.
    tripod: Set reference frame number for tripod mode. If enabled, the motion of the frames is compared to a reference frame in the filtered stream, identified by the specified number. The idea is to compensate all movements in a more-or-less static scene and keep the camera view absolutely still. If set to 0, it is disabled. The frames are counted starting from 1.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vidstabdetect)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vidstabdetect', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "result": result,

                "shakiness": shakiness,

                "accuracy": accuracy,

                "stepsize": stepsize,

                "mincontrast": mincontrast,

                "show": show,

                "tripod": tripod,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vidstabtransform(

    self,




    *,
    input: String = Default('transforms.trf'),smoothing: Int = Default('15'),optalgo: Int| Literal["opt","gauss","avg"] | Default = Default('opt'),maxshift: Int = Default('-1'),maxangle: Double = Default('-1'),crop: Int| Literal["keep","black"] | Default = Default('keep'),invert: Int = Default('0'),relative: Int = Default('1'),zoom: Double = Default('0'),optzoom: Int = Default('1'),zoomspeed: Double = Default('0.25'),interpol: Int| Literal["no","linear","bilinear","bicubic"] | Default = Default('bilinear'),tripod: Boolean = Default('false'),debug: Boolean = Default('false'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Video stabilization/deshaking: pass 2 of 2,
see vidstabdetect for pass 1.

Read a file with transform information for each frame and
apply/compensate them. Together with the vidstabdetect
filter this can be used to deshake videos. See also
http://public.hronopik.de/vid.stab. It is important to also use
the unsharp filter, see below.

To enable compilation of this filter you need to configure FFmpeg with
--enable-libvidstab.


Args:
    input: Set path to the file used to read the transforms. Default value is transforms.trf.
    smoothing: Set the number of frames (value*2 + 1) used for lowpass filtering the camera movements. Default value is 10. For example a number of 10 means that 21 frames are used (10 in the past and 10 in the future) to smoothen the motion in the video. A larger value leads to a smoother video, but limits the acceleration of the camera (pan/tilt movements). 0 is a special case where a static camera is simulated.
    optalgo: Set the camera path optimization algorithm. Accepted values are: @end table
    maxshift: Set maximal number of pixels to translate frames. Default value is -1, meaning no limit.
    maxangle: Set maximal angle in radians (degree*PI/180) to rotate frames. Default value is -1, meaning no limit.
    crop: Specify how to deal with borders that may be visible due to movement compensation. Available values are: @end table
    invert: Invert transforms if set to 1. Default value is 0.
    relative: Consider transforms as relative to previous frame if set to 1, absolute if set to 0. Default value is 0.
    zoom: Set percentage to zoom. A positive value will result in a zoom-in effect, a negative value in a zoom-out effect. Default value is 0 (no zoom).
    optzoom: Set optimal zooming to avoid borders. Accepted values are: @end table Note that the value given at zoom is added to the one calculated here.
    zoomspeed: Set percent to zoom maximally each frame (enabled when optzoom is set to 2). Range is from 0 to 5, default value is 0.25.
    interpol: Specify type of interpolation. Available values are: @end table
    tripod: Enable virtual tripod mode if set to 1, which is equivalent to relative=0:smoothing=0. Default value is 0. Use also tripod option of vidstabdetect.
    debug: Increase log verbosity if set to 1. Also the detected global motions are written to the temporary file global_motions.trf. Default value is 0.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vidstabtransform)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vidstabtransform', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "input": input,

                "smoothing": smoothing,

                "optalgo": optalgo,

                "maxshift": maxshift,

                "maxangle": maxangle,

                "crop": crop,

                "invert": invert,

                "relative": relative,

                "zoom": zoom,

                "optzoom": optzoom,

                "zoomspeed": zoomspeed,

                "interpol": interpol,

                "tripod": tripod,

                "debug": debug,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def vif(

    self,







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

Obtain the average VIF (Visual Information Fidelity) between two input videos.

This filter takes two input videos.

Both input videos must have the same resolution and pixel format for
this filter to work correctly. Also it assumes that both inputs
have the same number of frames, which are compared one by one.

The obtained average VIF score is printed through the logging system.

The filter stores the calculated VIF score of each frame.

This filter also supports the framesync options.

In the below example the input file main.mpg being processed is compared
with the reference file ref.mpg.

@example
ffmpeg -i main.mpg -i ref.mpg -lavfi vif -f null -
@end example

@anchor{vignette}


Args:
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vif)

        """


        if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
            framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vif', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _reference,




            **merge({

            },
            extra_options,

            framesync_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def vignette(

    self,




    *,
    angle: String = Default('PI/5'),x0: String = Default('w/2'),y0: String = Default('h/2'),mode: Int| Literal["forward","backward"] | Default = Default('forward'),eval: Int| Literal["init","frame"] | Default = Default('init'),dither: Boolean = Default('true'),aspect: Rational = Default('1/1'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Make or reverse a natural vignetting effect.

The filter accepts the following options:


Args:
    angle: Set lens angle expression as a number of radians. The value is clipped in the [0,PI/2] range. Default value: "PI/5"
    x0: set circle center position on x-axis (default "w/2")
    y0: Set center coordinates expressions. Respectively "w/2" and "h/2" by default.
    mode: Set forward/backward mode. Available modes are: @end table Default value is forward.
    eval: Set evaluation mode for the expressions (angle, x0, y0). It accepts the following values: @end table Default value is init.
    dither: Set dithering to reduce the circular banding effects. Default is 1 (enabled).
    aspect: Set vignette aspect. This setting allows one to adjust the shape of the vignette. Setting this value to the SAR of the input will make a rectangular vignetting following the dimensions of the video. Default is 1/1.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vignette)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vignette', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "angle": angle,

                "x0": x0,

                "y0": y0,

                "mode": mode,

                "eval": eval,

                "dither": dither,

                "aspect": aspect,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def vmafmotion(

    self,




    *,
    stats_file: String = Default(None),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Obtain the average VMAF motion score of a video.
It is one of the component metrics of VMAF.

The obtained average motion score is printed through the logging system.

The filter accepts the following options:


Args:
    stats_file: If specified, the filter will use the named file to save the motion score of each frame with respect to the previous frame. When filename equals "-" the data is sent to standard output.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#vmafmotion)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='vmafmotion', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "stats_file": stats_file,

            },
            extra_options,


            )
        )
        return filter_node.video(0)















    def w3fdif(

    self,




    *,
    filter: Int| Literal["simple","complex"] | Default = Default('complex'),mode: Int| Literal["frame","field"] | Default = Default('field'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video ("w3fdif" stands for "Weston 3 Field
Deinterlacing Filter").

Based on the process described by Martin Weston for BBC R&D, and
implemented based on the de-interlace algorithm written by Jim
Easterbrook for BBC R&D, the Weston 3 field deinterlacing filter
uses filter coefficients calculated by BBC R&D.

This filter uses field-dominance information in frame to decide which
of each pair of fields to place first in the output.
If it gets it wrong use setfield filter before w3fdif filter.

There are two sets of filter coefficients, so called "simple"
and "complex". Which set of filter coefficients is used can
be set by passing an optional parameter:


Args:
    filter: Set the interlacing filter coefficients. Accepts one of the following values: @end table Default value is complex.
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is field.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table Default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#w3fdif)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='w3fdif', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "filter": filter,

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def waveform(

    self,




    *,
    mode: Int| Literal["row","column"] | Default = Default('column'),intensity: Float = Default('0.04'),mirror: Boolean = Default('true'),display: Int| Literal["overlay","stack","parade"] | Default = Default('stack'),components: Int = Default('1'),envelope: Int| Literal["none","instant","peak","peak+instant"] | Default = Default('none'),filter: Int| Literal["lowpass","flat","aflat","chroma","color","acolor","xflat","yflat"] | Default = Default('lowpass'),graticule: Int| Literal["none","green","orange","invert"] | Default = Default('none'),opacity: Float = Default('0.75'),flags: Flags| Literal["numbers","dots"] | Default = Default('numbers'),scale: Int| Literal["digital","millivolts","ire"] | Default = Default('digital'),bgopacity: Float = Default('0.75'),tint0: Float = Default('0'),tint1: Float = Default('0'),fitmode: Int| Literal["none","size"] | Default = Default('none'),input: Int| Literal["all","first"] | Default = Default('first'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Video waveform monitor.

The waveform monitor plots color component intensity. By default luma
only. Each column of the waveform corresponds to a column of pixels in the
source video.

It accepts the following options:


Args:
    mode: Can be either row, or column. Default is column. In row mode, the graph on the left side represents color component value 0 and the right side represents value = 255. In column mode, the top side represents color component value = 0 and bottom side represents value = 255.
    intensity: Set intensity. Smaller values are useful to find out how many values of the same luminance are distributed across input rows/columns. Default value is 0.04. Allowed range is [0, 1].
    mirror: Set mirroring mode. 0 means unmirrored, 1 means mirrored. In mirrored mode, higher values will be represented on the left side for row mode and at the top for column mode. Default is 1 (mirrored).
    display: Set display mode. It accepts the following values: @end table Default is stack.
    components: Set which color components to display. Default is 1, which means only luma or red color component if input is in RGB colorspace. If is set for example to 7 it will display all 3 (if) available color components.
    envelope: @end table
    filter: @end table
    graticule: Set which graticule to display. @end table
    opacity: Set graticule opacity.
    flags: Set graticule flags. @end table
    scale: Set scale used for displaying graticule. @end table Default is digital.
    bgopacity: Set background opacity.
    tint0: set 1st tint (from -1 to 1) (default 0)
    tint1: Set tint for output. Only used with lowpass filter and when display is not overlay and input pixel formats are not RGB.
    fitmode: Set sample aspect ratio of video output frames. Can be used to configure waveform so it is not streched too much in one of directions. @end table Default is none.
    input: Set input formats for filter to pick from. Can be all, for selecting from all available formats, or first, for selecting first available format. Default is first.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#waveform)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='waveform', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "intensity": intensity,

                "mirror": mirror,

                "display": display,

                "components": components,

                "envelope": envelope,

                "filter": filter,

                "graticule": graticule,

                "opacity": opacity,

                "flags": flags,

                "scale": scale,

                "bgopacity": bgopacity,

                "tint0": tint0,

                "tint1": tint1,

                "fitmode": fitmode,

                "input": input,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def weave(

    self,




    *,
    first_field: Int| Literal["top","t","bottom","b"] | Default = Default('top'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

The weave takes a field-based video input and join
each two sequential fields into single frame, producing a new double
height clip with half the frame rate and half the frame count.

The doubleweave works same as weave but without
halving frame rate and frame count.

It accepts the following option:


Args:
    first_field: Set first field. Available values are: @end table
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#weave)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='weave', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "first_field": first_field,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def xbr(

    self,




    *,
    n: Int = Default('3'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply the xBR high-quality magnification filter which is designed for pixel
art. It follows a set of edge-detection rules, see
https://forums.libretro.com/t/xbr-algorithm-tutorial/123.

It accepts the following option:


Args:
    n: Set the scaling dimension: 2 for 2xBR, 3 for 3xBR and 4 for 4xBR. Default is 3.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xbr)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='xbr', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "n": n,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def xcorrelate(

    self,







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

            self,







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

    self,







        _xfade: VideoStream,




    *,
    transition: Int| Literal["custom","fade","wipeleft","wiperight","wipeup","wipedown","slideleft","slideright","slideup","slidedown","circlecrop","rectcrop","distance","fadeblack","fadewhite","radial","smoothleft","smoothright","smoothup","smoothdown","circleopen","circleclose","vertopen","vertclose","horzopen","horzclose","dissolve","pixelize","diagtl","diagtr","diagbl","diagbr","hlslice","hrslice","vuslice","vdslice","hblur","fadegrays","wipetl","wipetr","wipebl","wipebr","squeezeh","squeezev","zoomin","fadefast","fadeslow","hlwind","hrwind","vuwind","vdwind","coverleft","coverright","coverup","coverdown","revealleft","revealright","revealup","revealdown"] | Default = Default('fade'),duration: Duration = Default('1'),offset: Duration = Default('0'),expr: String = Default(None),


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

            self,







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







    def xfade_opencl(

    self,







        _xfade: VideoStream,




    *,
    transition: Int| Literal["custom","fade","wipeleft","wiperight","wipeup","wipedown","slideleft","slideright","slideup","slidedown"] | Default = Default('fade'),source: String = Default(None),kernel: String = Default(None),duration: Duration = Default('1'),offset: Duration = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Cross fade two videos with custom transition effect by using OpenCL.

It accepts the following options:


Args:
    transition: Set one of possible transition effects. @end table
    source: OpenCL program source file for custom transition.
    kernel: Set name of kernel to use for custom transition from program source file.
    duration: Set duration of video transition.
    offset: Set time of start of transition relative to first video.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xfade_opencl)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='xfade_opencl', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _xfade,




            **merge({

                "transition": transition,

                "source": source,

                "kernel": kernel,

                "duration": duration,

                "offset": offset,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def xfade_vulkan(

    self,







        _xfade: VideoStream,




    *,
    transition: Int| Literal["fade","wipeleft","wiperight","wipeup","wipedown","slidedown","slideup","slideleft","slideright","circleopen","circleclose","dissolve","pixelize","wipetl","wipetr","wipebl","wipebr"] | Default = Default('fade'),duration: Duration = Default('1'),offset: Duration = Default('0'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Cross fade one video with another video.


Args:
    transition: set cross fade transition (from 0 to 16) (default fade)
    duration: set cross fade duration (default 1)
    offset: set cross fade start relative to first input stream (default 0)
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](None)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='xfade_vulkan', typings_input=('video', 'video'), typings_output=('video',)),

            self,







                _xfade,




            **merge({

                "transition": transition,

                "duration": duration,

                "offset": offset,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def xpsnr(

    self,







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

Obtain the average (across all input frames) and minimum (across all color plane averages)
eXtended Perceptually weighted peak Signal-to-Noise Ratio (XPSNR) between two input videos.

The XPSNR is a low-complexity psychovisually motivated distortion measurement algorithm for
assessing the difference between two video streams or images. This is especially useful for
objectively quantifying the distortions caused by video and image codecs, as an alternative
to a formal subjective test. The logarithmic XPSNR output values are in a similar range as
those of traditional psnr assessments but better reflect human impressions of visual
coding quality. More details on the XPSNR measure, which essentially represents a blockwise
weighted variant of the PSNR measure, can be found in the following freely available papers:


Args:
    stats_file: If specified, the filter will use the named file to save the XPSNR value of each individual frame and color plane. When the file name equals "-", that data is sent to standard output.
    framesync_options: Framesync options
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#xpsnr)

        """


        if framesync_options is None and any(v is not None for v in (eof_action, shortest, repeatlast)):
            framesync_options = FFMpegFrameSyncOption(merge({"eof_action": eof_action, "shortest": shortest, "repeatlast": repeatlast}))


        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='xpsnr', typings_input=('video', 'video'), typings_output=('video',)),

            self,







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











    def yadif(

    self,




    *,
    mode: Int| Literal["send_frame","send_field","send_frame_nospatial","send_field_nospatial"] | Default = Default('send_frame'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video ("yadif" means "yet another deinterlacing
filter").

It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_frame.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#yadif)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='yadif', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def yadif_cuda(

    self,




    *,
    mode: Int| Literal["send_frame","send_field","send_frame_nospatial","send_field_nospatial"] | Default = Default('send_frame'),parity: Int| Literal["tff","bff","auto"] | Default = Default('auto'),deint: Int| Literal["all","interlaced"] | Default = Default('all'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Deinterlace the input video using the yadif algorithm, but implemented
in CUDA so that it can work as part of a GPU accelerated pipeline with nvdec
and/or nvenc.

It accepts the following parameters:


Args:
    mode: The interlacing mode to adopt. It accepts one of the following values: @end table The default value is send_frame.
    parity: The picture field parity assumed for the input interlaced video. It accepts one of the following values: @end table The default value is auto. If the interlacing is unknown or the decoder does not export this information, top field first will be assumed.
    deint: Specify which frames to deinterlace. Accepts one of the following values: @end table The default value is all.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#yadif_cuda)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='yadif_cuda', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "mode": mode,

                "parity": parity,

                "deint": deint,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)







    def yaepblur(

    self,




    *,
    radius: Int = Default('3'),planes: Int = Default('1'),sigma: Int = Default('128'),


    timeline_options: FFMpegTimelineOption | None = None,
    enable: str | None = None,

    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply blur filter while preserving edges ("yaepblur" means "yet another edge preserving blur filter").
The algorithm is described in
"J. S. Lee, Digital image enhancement and noise filtering by use of local statistics, IEEE Trans. Pattern Anal. Mach. Intell. PAMI-2, 1980."

It accepts the following parameters:


Args:
    radius: Set the window radius. Default value is 3.
    planes: Set which planes to filter. Default is only the first plane.
    sigma: Set blur strength. Default value is 128.
    timeline_options: Timeline options
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#yaepblur)

        """



        if timeline_options is None and enable is not None:
            timeline_options = FFMpegTimelineOption(enable=enable)

        filter_node = filter_node_factory(
            FFMpegFilterDef(name='yaepblur', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "radius": radius,

                "planes": planes,

                "sigma": sigma,

            },
            extra_options,


            timeline_options,

            )
        )
        return filter_node.video(0)









    def zmq(

    self,




    *,
    bind_address: String = Default('tcp://*:5555'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
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
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#zmq)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='zmq', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "bind_address": bind_address,

            },
            extra_options,


            )
        )
        return filter_node.video(0)









    def zoompan(

    self,




    *,
    zoom: String = Default('1'),x: String = Default('0'),y: String = Default('0'),d: String = Default('90'),s: Image_size = Default('hd720'),fps: Video_rate = Default('25'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Apply Zoom & Pan effect.

This filter accepts the following options:


Args:
    zoom: Last calculated zoom from 'z' expression for current input frame.
    x: set the x expression (default "0")
    y: Last calculated 'x' and 'y' position from 'x' and 'y' expression for current input frame.
    d: Set the duration expression in number of frames. This sets for how many number of frames effect will last for single input image. Default is 90.
    s: Set the output image size, default is 'hd720'.
    fps: Set the output frame rate, default is '25'.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#zoompan)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='zoompan', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "zoom": zoom,

                "x": x,

                "y": y,

                "d": d,

                "s": s,

                "fps": fps,

            },
            extra_options,


            )
        )
        return filter_node.video(0)







    def zscale(

    self,




    *,
    w: String = Default(None),h: String = Default(None),size: String = Default(None),dither: Int| Literal["none","ordered","random","error_diffusion"] | Default = Default('none'),filter: Int| Literal["point","bilinear","bicubic","spline16","spline36","lanczos"] | Default = Default('bilinear'),out_range: Int| Literal["input","limited","full","unknown","tv","pc"] | Default = Default('input'),primaries: Int| Literal["input","709","unspecified","170m","240m","2020","unknown","bt709","bt470m","bt470bg","smpte170m","smpte240m","film","bt2020","smpte428","smpte431","smpte432","jedec-p22","ebu3213"] | Default = Default('input'),transfer: Int| Literal["input","709","unspecified","601","linear","2020_10","2020_12","unknown","bt470m","bt470bg","smpte170m","smpte240m","bt709","log100","log316","bt2020-10","bt2020-12","smpte2084","iec61966-2-4","iec61966-2-1","arib-std-b67"] | Default = Default('input'),matrix: Int| Literal["input","709","unspecified","470bg","170m","2020_ncl","2020_cl","unknown","gbr","bt709","fcc","bt470bg","smpte170m","smpte240m","ycgco","bt2020nc","bt2020c","chroma-derived-nc","chroma-derived-c","ictcp"] | Default = Default('input'),in_range: Int| Literal["input","limited","full","unknown","tv","pc"] | Default = Default('input'),primariesin: Int| Literal["input","709","unspecified","170m","240m","2020","unknown","bt709","bt470m","bt470bg","smpte170m","smpte240m","film","bt2020","smpte428","smpte431","smpte432","jedec-p22","ebu3213"] | Default = Default('input'),transferin: Int| Literal["input","709","unspecified","601","linear","2020_10","2020_12","unknown","bt470m","bt470bg","smpte170m","smpte240m","bt709","log100","log316","bt2020-10","bt2020-12","smpte2084","iec61966-2-4","iec61966-2-1","arib-std-b67"] | Default = Default('input'),matrixin: Int| Literal["input","709","unspecified","470bg","170m","2020_ncl","2020_cl","unknown","gbr","bt709","fcc","bt470bg","smpte170m","smpte240m","ycgco","bt2020nc","bt2020c","chroma-derived-nc","chroma-derived-c","ictcp"] | Default = Default('input'),chromal: Int| Literal["input","left","center","topleft","top","bottomleft","bottom"] | Default = Default('input'),chromalin: Int| Literal["input","left","center","topleft","top","bottomleft","bottom"] | Default = Default('input'),npl: Double = Default('nan'),agamma: Boolean = Default('true'),param_a: Double = Default('nan'),param_b: Double = Default('nan'),


    extra_options: dict[str, Any] | None = None,
    )-> VideoStream:
        """

Scale (resize) the input video, using the z.lib library:
https://github.com/sekrit-twc/zimg. To enable compilation of this
filter, you need to configure FFmpeg with --enable-libzimg.

The zscale filter forces the output display aspect ratio to be the same
as the input, by changing the output sample aspect ratio.

If the input image format is different from the format requested by
the next filter, the zscale filter will convert the input to the
requested format.


Args:
    w: Output video width
    h: Set the output video dimension expression. The command accepts the same syntax of the corresponding option. If the specified expression is not valid, it is kept at its current value.
    size: Set the video size. For the syntax of this option, check the "Video size" section in the ffmpeg-utils manual.
    dither: Set the dither type. Possible values are: @end table Default is none.
    filter: Set the resize filter type. Possible values are: @end table Default is bilinear.
    out_range: set color range (from -1 to 1) (default input)
    primaries: Set the color primaries. Possible values are: @end table Default is same as input.
    transfer: Set the transfer characteristics. Possible values are: @end table Default is same as input.
    matrix: Set the colorspace matrix. Possible value are: @end table Default is same as input.
    in_range: set input color range (from -1 to 1) (default input)
    primariesin: Set the input color primaries. Possible values are: @end table Default is same as input.
    transferin: Set the input transfer characteristics. Possible values are: @end table Default is same as input.
    matrixin: Set the input colorspace matrix. Possible value are: @end table
    chromal: Set the output chroma location. Possible values are: @end table
    chromalin: Set the input chroma location. Possible values are: @end table
    npl: Set the nominal peak luminance.
    agamma: allow approximate gamma (default true)
    param_a: Parameter A for scaling filters. Parameter "b" for bicubic, and the number of filter taps for lanczos.
    param_b: Parameter B for scaling filters. Parameter "c" for bicubic.
    extra_options: Extra options for the filter

Returns:
    default: the video stream

References:
    [FFmpeg Documentation](https://ffmpeg.org/ffmpeg-filters.html#zscale)

        """



        filter_node = filter_node_factory(
            FFMpegFilterDef(name='zscale', typings_input=('video',), typings_output=('video',)),

            self,




            **merge({

                "w": w,

                "h": h,

                "size": size,

                "dither": dither,

                "filter": filter,

                "out_range": out_range,

                "primaries": primaries,

                "transfer": transfer,

                "matrix": matrix,

                "in_range": in_range,

                "primariesin": primariesin,

                "transferin": transferin,

                "matrixin": matrixin,

                "chromal": chromal,

                "chromalin": chromalin,

                "npl": npl,

                "agamma": agamma,

                "param_a": param_a,

                "param_b": param_b,

            },
            extra_options,


            )
        )
        return filter_node.video(0)



