# NOTE: this file is auto-generated, do not modify
"""
FFmpeg decoders.
"""



from typing import Literal


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


from ..streams.av import AVStream

from ..streams.channel_layout import CHANNEL_LAYOUT
from .schema import FFMpegEncoderOption, FFMpegDecoderOption
from ..formats.schema import FFMpegMuxerOption, FFMpegDemuxerOption

from ..dag.nodes import FilterableStream, FilterNode, OutputStream, OutputNode, InputNode, GlobalNode, GlobalStream


from ..streams.video import VideoStream


from ..streams.audio import AudioStream





































































































































































































































































































































































































def _012v(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def _4xm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def _8bps(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aasc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def agm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aic(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def alias_pix(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def amv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def anm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ansi(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def apng(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def arbc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def argo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def asv1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def asv2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aura(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aura2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def av1(

    operating_point: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        operating_point: Select an operating point of the scalable bitstream (from 0 to 31) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "operating_point": operating_point,

    }))



def avrn(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def avrp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def avs(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def avui(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ayuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bethsoftvid(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bfi(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def binkvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bintext(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bitpacked(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bmp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bmv_video(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def brender_pix(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def c93(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cavs(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cdgraphics(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cdtoons(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cdxl(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cfhd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cinepak(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def clearvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cljr(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cllc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eacmv(

) -> FFMpegDecoderOption:
    """
    (codec cmv)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cpia(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cri(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def camstudio(

) -> FFMpegDecoderOption:
    """
    (codec cscd)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cyuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dds(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dfa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dirac(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dnxhd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dpx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dsicinvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dvvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dxa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dxtory(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dxv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def escape124(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def escape130(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def exr(

    layer: str | None = None,

    part: int | None = None,

    gamma: float | None = None,

    apply_trc: int | None| Literal["bt709", "gamma", "gamma22", "gamma28", "smpte170m", "smpte240m", "linear", "log", "log_sqrt", "iec61966_2_4", "bt1361", "iec61966_2_1", "bt2020_10bit", "bt2020_12bit", "smpte2084", "smpte428_1"] = None,

) -> FFMpegDecoderOption:
    """


    Args:
        layer: Set the decoding layer (default "")
        part: Set the decoding part (from 0 to INT_MAX) (default 0)
        gamma: Set the float gamma value when decoding (from 0.001 to FLT_MAX) (default 1)
        apply_trc: color transfer characteristics to apply to EXR linear input (from 1 to 18) (default gamma)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "layer": layer,

        "part": part,

        "gamma": gamma,

        "apply_trc": apply_trc,

    }))



def ffv1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ffvhuff(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def fic(

    skip_cursor: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        skip_cursor: skip the cursor (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "skip_cursor": skip_cursor,

    }))



def fits(

    blank_value: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        blank_value: value that is used to replace BLANK pixels in data array (from 0 to 65535) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "blank_value": blank_value,

    }))



def flashsv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def flashsv2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def flic(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def flv(

) -> FFMpegDecoderOption:
    """
    (codec flv1)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def fmvc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def fraps(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def frwu(

    change_field_order: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        change_field_order: Change field order (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "change_field_order": change_field_order,

    }))



def g2m(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gdv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gem(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gif(

    trans_color: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        trans_color: color value (ARGB) that is used instead of transparent color (from 0 to UINT32_MAX) (default 16777215)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "trans_color": trans_color,

    }))



def h261(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def h263(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def h263_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec h263)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def h263i(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def h263p(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def h264(

    is_avc: bool | None = None,

    nal_length_size: int | None = None,

    enable_er: bool | None = None,

    x264_build: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        is_avc: is avc (default false)
        nal_length_size: nal_length_size (from 0 to 4) (default 0)
        enable_er: Enable error resilience on damaged frames (unsafe) (default auto)
        x264_build: Assume this x264 version if no x264 version found in any SEI (from -1 to INT_MAX) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "is_avc": is_avc,

        "nal_length_size": nal_length_size,

        "enable_er": enable_er,

        "x264_build": x264_build,

    }))



def h264_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec h264)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def hap(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hevc(

    apply_defdispwin: bool | None = None,

    strict_displaywin: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        apply_defdispwin: Apply default display window from VUI (default false)
        strict_displaywin: stricly apply default display window size (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "apply_defdispwin": apply_defdispwin,

        "strict-displaywin": strict_displaywin,

    }))



def hevc_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec hevc)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def hnm4video(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hq_hqa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hqx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def huffyuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hymt(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def idcinvideo(

) -> FFMpegDecoderOption:
    """
    (codec idcin)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def idf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def iff(

) -> FFMpegDecoderOption:
    """
    (codec iff_ilbm)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def imm4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def imm5(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def indeo2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def indeo3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def indeo4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def indeo5(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def interplayvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ipu(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def jpeg2000(

    lowres: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        lowres: Lower the decoding resolution by a power of two (from 0 to 33) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "lowres": lowres,

    }))



def libopenjpeg(

    lowqual: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec jpeg2000)

    Args:
        lowqual: Limit the number of layers used for decoding (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "lowqual": lowqual,

    }))



def jpegls(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def jv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def kgv1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def kmvc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def lagarith(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def loco(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def lscr(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def m101(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eamad(

) -> FFMpegDecoderOption:
    """
    (codec mad)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def magicyuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mdec(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mimic(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mjpeg(

    extern_huff: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        extern_huff: Use external huffman table. (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "extern_huff": extern_huff,

    }))



def mjpegb(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mmvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mobiclip(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def motionpixels(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpeg1video(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpeg1_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec mpeg1video)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def mpeg2video(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpegvideo(

) -> FFMpegDecoderOption:
    """
    (codec mpeg2video)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpeg2_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec mpeg2video)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def mpeg4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpeg4_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec mpeg4)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def msa1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mscc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msmpeg4v1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msmpeg4v2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msmpeg4(

) -> FFMpegDecoderOption:
    """
    (codec msmpeg4v3)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msp2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msrle(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mss1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mss2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msvideo1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mszh(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mts2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mv30(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mvc1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mvc2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mvdv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mvha(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mwsc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mxpeg(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def notchlc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def nuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def paf_video(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pam(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pbm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pfm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pgm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pgmyuv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pgx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def phm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def photocd(

    lowres: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        lowres: Lower the decoding resolution by a power of two (from 0 to 4) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "lowres": lowres,

    }))



def pictor(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pixlet(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def png(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ppm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def prores(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def prosumer(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def psd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ptx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qdraw(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qoi(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qpeg(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qtrle(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def r10k(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def r210(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rasc(

    skip_cursor: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        skip_cursor: skip the cursor (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "skip_cursor": skip_cursor,

    }))



def rawvideo(

    top: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        top: top field first (default auto)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "top": top,

    }))



def rl2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def roqvideo(

) -> FFMpegDecoderOption:
    """
    (codec roq)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rpza(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rscc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rv10(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rv20(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rv30(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def rv40(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sanm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def scpr(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def screenpresso(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sga(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sgi(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sgirle(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sheervideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def simbiosis_imx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def smackvid(

) -> FFMpegDecoderOption:
    """
    (codec smackvideo)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def smc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def smvjpeg(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def snow(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sp5x(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def speedhq(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def srgc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sunrast(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def svq1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def svq3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def targa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def targa_y216(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tdsc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eatgq(

) -> FFMpegDecoderOption:
    """
    (codec tgq)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eatgv(

) -> FFMpegDecoderOption:
    """
    (codec tgv)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def theora(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def thp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tiertexseqvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tiff(

    subimage: bool | None = None,

    thumbnail: bool | None = None,

    page: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        subimage: decode subimage instead if available (default false)
        thumbnail: decode embedded thumbnail subimage instead if available (default false)
        page: page number of multi-page image to decode (starting from 1) (from 0 to 65535) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "subimage": subimage,

        "thumbnail": thumbnail,

        "page": page,

    }))



def tmv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eatqi(

) -> FFMpegDecoderOption:
    """
    (codec tqi)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def truemotion1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def truemotion2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def truemotion2rt(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def camtasia(

) -> FFMpegDecoderOption:
    """
    (codec tscc)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tscc2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def txd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ultimotion(

) -> FFMpegDecoderOption:
    """
    (codec ulti)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def utvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def v210(

    custom_stride: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        custom_stride: Custom V210 stride (from -1 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "custom_stride": custom_stride,

    }))



def v210x(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def v308(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def v408(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def v410(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vb(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vble(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vbn(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vc1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vc1_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec vc1)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def vc1image(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vcr1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xl(

) -> FFMpegDecoderOption:
    """
    (codec vixl)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vmdvideo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vmnc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp5(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp6(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp6a(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp6f(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp7(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp8(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp8_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec vp8)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def libvpx(

) -> FFMpegDecoderOption:
    """
    (codec vp8)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp9(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vp9_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec vp9)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 20 to INT_MAX) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def wcmv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def webp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmv1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmv2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmv3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmv3image(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wnv1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wrapped_avframe(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vqavideo(

) -> FFMpegDecoderOption:
    """
    (codec ws_vqa)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xan_wc3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xan_wc4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xbin(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xbm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xface(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xpm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xwd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def y41p(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ylc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def yop(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def yuv4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def zerocodec(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def zlib(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def zmbv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def _8svx_exp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def _8svx_fib(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aac(

    dual_mono_mode: int | None| Literal["auto", "main", "sub", "both"] = None,

    channel_order: int | None| Literal["default", "coded"] = None,

) -> FFMpegDecoderOption:
    """


    Args:
        dual_mono_mode: Select the channel to decode for dual mono (from -1 to 2) (default auto)
        channel_order: Order in which the channels are to be exported (from 0 to 1) (default default)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "dual_mono_mode": dual_mono_mode,

        "channel_order": channel_order,

    }))



def aac_fixed(

) -> FFMpegDecoderOption:
    """
    (codec aac)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def libfdk_aac(

    conceal: int | None| Literal["spectral", "noise", "energy"] = None,

    drc_boost: int | None = None,

    drc_cut: int | None = None,

    drc_level: int | None = None,

    drc_heavy: int | None = None,

    level_limit: bool | None = None,

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """
    (codec aac)

    Args:
        conceal: Error concealment method (from 0 to 2) (default noise)
        drc_boost: Dynamic Range Control: boost, where [0] is none and [127] is max boost (from -1 to 127) (default -1)
        drc_cut: Dynamic Range Control: attenuation factor, where [0] is none and [127] is max compression (from -1 to 127) (default -1)
        drc_level: Dynamic Range Control: reference level, quantized to 0.25dB steps where [0] is 0dB and [127] is -31.75dB, -1 for auto, and -2 for disabled (from -2 to 127) (default -1)
        drc_heavy: Dynamic Range Control: heavy compression, where [1] is on (RF mode) and [0] is off (from -1 to 1) (default -1)
        level_limit: Signal level limiting (default auto)
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "conceal": conceal,

        "drc_boost": drc_boost,

        "drc_cut": drc_cut,

        "drc_level": drc_level,

        "drc_heavy": drc_heavy,

        "level_limit": level_limit,

        "downmix": downmix,

    }))



def aac_latm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ac3(

    cons_noisegen: bool | None = None,

    drc_scale: float | None = None,

    heavy_compr: bool | None = None,

    target_level: int | None = None,

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        cons_noisegen: enable consistent noise generation (default false)
        drc_scale: percentage of dynamic range compression to apply (from 0 to 6) (default 1)
        heavy_compr: enable heavy dynamic range compression (default false)
        target_level: target level in -dBFS (0 not applied) (from -31 to 0) (default 0)
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "cons_noisegen": cons_noisegen,

        "drc_scale": drc_scale,

        "heavy_compr": heavy_compr,

        "target_level": target_level,

        "downmix": downmix,

    }))



def ac3_fixed(

    cons_noisegen: bool | None = None,

    drc_scale: float | None = None,

    heavy_compr: bool | None = None,

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """
    (codec ac3)

    Args:
        cons_noisegen: enable consistent noise generation (default false)
        drc_scale: percentage of dynamic range compression to apply (from 0 to 6) (default 1)
        heavy_compr: enable heavy dynamic range compression (default false)
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "cons_noisegen": cons_noisegen,

        "drc_scale": drc_scale,

        "heavy_compr": heavy_compr,

        "downmix": downmix,

    }))



def adpcm_4xm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_adx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_afc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_agm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_aica(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_argo(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ct(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_dtk(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea_maxis_xa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea_r1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea_r2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea_r3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ea_xas(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def g722(

    bits_per_codeword: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec adpcm_g722)

    Args:
        bits_per_codeword: Bits per G722 codeword (from 6 to 8) (default 8)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "bits_per_codeword": bits_per_codeword,

    }))



def g726(

) -> FFMpegDecoderOption:
    """
    (codec adpcm_g726)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def g726le(

) -> FFMpegDecoderOption:
    """
    (codec adpcm_g726le)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_acorn(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_alp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_amv(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_apc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_apm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_cunning(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_dat4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_dk3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_dk4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_ea_eacs(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_ea_sead(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_iss(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_moflex(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_mtf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_oki(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_qt(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_rad(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_smjpeg(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_ssi(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_wav(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ima_ws(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_ms(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_mtaf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_psx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_sbpro_2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_sbpro_3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_sbpro_4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_swf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_thp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_thp_le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_vima(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_xa(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_yamaha(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def adpcm_zork(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def alac(

    extra_bits_bug: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        extra_bits_bug: Force non-standard decoding process (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "extra_bits_bug": extra_bits_bug,

    }))



def amrnb(

) -> FFMpegDecoderOption:
    """
    (codec amr_nb)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def libopencore_amrnb(

) -> FFMpegDecoderOption:
    """
    (codec amr_nb)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def amrwb(

) -> FFMpegDecoderOption:
    """
    (codec amr_wb)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def libopencore_amrwb(

) -> FFMpegDecoderOption:
    """
    (codec amr_wb)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ape(

    max_samples: int | None| Literal["all"] = None,

) -> FFMpegDecoderOption:
    """


    Args:
        max_samples: maximum number of samples decoded per call (from 1 to INT_MAX) (default 4608)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "max_samples": max_samples,

    }))



def aptx(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def aptx_hd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac3al(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac3plus(

) -> FFMpegDecoderOption:
    """
    (codec atrac3p)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac3plusal(

) -> FFMpegDecoderOption:
    """
    (codec atrac3pal)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def atrac9(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def on2avc(

) -> FFMpegDecoderOption:
    """
    (codec avc)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def binkaudio_dct(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def binkaudio_rdft(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def bmv_audio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def comfortnoise(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def cook(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def derf_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dfpwm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dolby_e(

    channel_order: int | None| Literal["default", "coded"] = None,

) -> FFMpegDecoderOption:
    """


    Args:
        channel_order: Order in which the channels are to be exported (from 0 to 1) (default default)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "channel_order": channel_order,

    }))



def dsd_lsbf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dsd_lsbf_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dsd_msbf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dsd_msbf_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dsicinaudio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dss_sp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dst(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dca(

    core_only: bool | None = None,

    channel_order: int | None| Literal["default", "coded"] = None,

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """
    (codec dts)

    Args:
        core_only: Decode core only without extensions (default false)
        channel_order: Order in which the channels are to be exported (from 0 to 1) (default default)
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "core_only": core_only,

        "channel_order": channel_order,

        "downmix": downmix,

    }))



def dvaudio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def eac3(

    cons_noisegen: bool | None = None,

    drc_scale: float | None = None,

    heavy_compr: bool | None = None,

    target_level: int | None = None,

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        cons_noisegen: enable consistent noise generation (default false)
        drc_scale: percentage of dynamic range compression to apply (from 0 to 6) (default 1)
        heavy_compr: enable heavy dynamic range compression (default false)
        target_level: target level in -dBFS (0 not applied) (from -31 to 0) (default 0)
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "cons_noisegen": cons_noisegen,

        "drc_scale": drc_scale,

        "heavy_compr": heavy_compr,

        "target_level": target_level,

        "downmix": downmix,

    }))



def evrc(

    postfilter: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        postfilter: enable postfilter (default true)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "postfilter": postfilter,

    }))



def fastaudio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def flac(

    use_buggy_lpc: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        use_buggy_lpc: emulate old buggy lavc behavior (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "use_buggy_lpc": use_buggy_lpc,

    }))



def g723_1(

    postfilter: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        postfilter: enable postfilter (default true)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "postfilter": postfilter,

    }))



def g729(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gremlin_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gsm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def gsm_ms(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hca(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def hcom(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def iac(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ilbc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def imc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def interplay_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def interplayacm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mace3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mace6(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def metasound(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mlp(

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "downmix": downmix,

    }))



def mp1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp1float(

) -> FFMpegDecoderOption:
    """
    (codec mp1)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp2float(

) -> FFMpegDecoderOption:
    """
    (codec mp2)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3float(

) -> FFMpegDecoderOption:
    """
    (codec mp3)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3adufloat(

) -> FFMpegDecoderOption:
    """
    (codec mp3adu)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3adu(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3on4float(

) -> FFMpegDecoderOption:
    """
    (codec mp3on4)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mp3on4(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def als(

) -> FFMpegDecoderOption:
    """
    (codec mp4als)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def msnsiren(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpc7(

) -> FFMpegDecoderOption:
    """
    (codec musepack7)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mpc8(

) -> FFMpegDecoderOption:
    """
    (codec musepack8)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def nellymoser(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def opus(

    apply_phase_inv: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        apply_phase_inv: Apply intensity stereo phase inversion (default true)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "apply_phase_inv": apply_phase_inv,

    }))



def libopus(

    apply_phase_inv: bool | None = None,

) -> FFMpegDecoderOption:
    """
    (codec opus)

    Args:
        apply_phase_inv: Apply intensity stereo phase inversion (default true)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "apply_phase_inv": apply_phase_inv,

    }))



def paf_audio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_alaw(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_bluray(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_dvd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f16le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f24le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f32be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f32le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f64be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_f64le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_lxf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_mulaw(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s16be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s16be_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s16le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s16le_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s24be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s24daud(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s24le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s24le_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s32be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s32le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s32le_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s64be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s64le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s8(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_s8_planar(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_sga(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u16be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u16le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u24be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u24le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u32be(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u32le(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_u8(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pcm_vidc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qcelp(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qdm2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def qdmc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def real_144(

) -> FFMpegDecoderOption:
    """
    (codec ra_144)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def real_288(

) -> FFMpegDecoderOption:
    """
    (codec ra_288)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ralf(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def roq_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def s302m(

    non_pcm_mode: int | None| Literal["copy", "drop", "decode_copy", "decode_drop"] = None,

) -> FFMpegDecoderOption:
    """


    Args:
        non_pcm_mode: Chooses what to do with NON-PCM (from 0 to 3) (default decode_drop)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "non_pcm_mode": non_pcm_mode,

    }))



def sbc(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sdx2_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def shorten(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sipr(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def siren(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def smackaud(

) -> FFMpegDecoderOption:
    """
    (codec smackaudio)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sol_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sonic(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def speex(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tak(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def truehd(

    downmix: str | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        downmix: Request a specific channel layout from the decoder

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "downmix": downmix,

    }))



def truespeech(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def tta(

    password: str | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        password: Set decoding password

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "password": password,

    }))



def twinvq(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vmdaudio(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def vorbis(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def libvorbis(

) -> FFMpegDecoderOption:
    """
    (codec vorbis)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wavesynth(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wavpack(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ws_snd1(

) -> FFMpegDecoderOption:
    """
    (codec westwood_snd1)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmalossless(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmapro(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmav1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmav2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def wmavoice(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xan_dpcm(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xma1(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xma2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def libaribb24(

    aribb24_base_path: str | None = None,

    aribb24_skip_ruby_text: bool | None = None,

) -> FFMpegDecoderOption:
    """
    (codec arib_caption)

    Args:
        aribb24_base_path: set the base path for the libaribb24 library
        aribb24_skip_ruby_text: skip ruby text blocks during decoding (default true)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "aribb24-base-path": aribb24_base_path,

        "aribb24-skip-ruby-text": aribb24_skip_ruby_text,

    }))



def ssa(

) -> FFMpegDecoderOption:
    """
    (codec ass)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def ass(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def dvbsub(

    compute_edt: bool | None = None,

    compute_clut: bool | None = None,

    dvb_substream: int | None = None,

) -> FFMpegDecoderOption:
    """
    (codec dvb_subtitle)

    Args:
        compute_edt: compute end of time using pts or timeout (default false)
        compute_clut: compute clut when not available(-1) or only once (-2) or always(1) or never(0) (default auto)
        dvb_substream: (from -1 to 63) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "compute_edt": compute_edt,

        "compute_clut": compute_clut,

        "dvb_substream": dvb_substream,

    }))



def dvdsub(

    palette: str | None = None,

    ifo_palette: str | None = None,

    forced_subs_only: bool | None = None,

) -> FFMpegDecoderOption:
    """
    (codec dvd_subtitle)

    Args:
        palette: set the global palette
        ifo_palette: obtain the global palette from .IFO file
        forced_subs_only: Only show forced subtitles (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "palette": palette,

        "ifo_palette": ifo_palette,

        "forced_subs_only": forced_subs_only,

    }))



def cc_dec(

    real_time: bool | None = None,

    real_time_latency_msec: int | None = None,

    data_field: int | None| Literal["auto", "first", "second"] = None,

) -> FFMpegDecoderOption:
    """
    (codec eia_608)

    Args:
        real_time: emit subtitle events as they are decoded for real-time display (default false)
        real_time_latency_msec: minimum elapsed time between emitting real-time subtitle events (from 0 to 500) (default 200)
        data_field: select data field (from -1 to 1) (default auto)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "real_time": real_time,

        "real_time_latency_msec": real_time_latency_msec,

        "data_field": data_field,

    }))



def pgssub(

    forced_subs_only: bool | None = None,

) -> FFMpegDecoderOption:
    """
    (codec hdmv_pgs_subtitle)

    Args:
        forced_subs_only: Only show forced subtitles (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "forced_subs_only": forced_subs_only,

    }))



def jacosub(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def microdvd(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def mov_text(

    width: int | None = None,

    height: int | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        width: Frame width, usually video width (from 0 to INT_MAX) (default 0)
        height: Frame height, usually video height (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "width": width,

        "height": height,

    }))



def mpl2(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def pjs(

    keep_ass_markup: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        keep_ass_markup: Set if ASS tags must be escaped (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "keep_ass_markup": keep_ass_markup,

    }))



def realtext(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def sami(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def stl(

    keep_ass_markup: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        keep_ass_markup: Set if ASS tags must be escaped (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "keep_ass_markup": keep_ass_markup,

    }))



def srt(

) -> FFMpegDecoderOption:
    """
    (codec subrip)


    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def subrip(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def subviewer(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def subviewer1(

    keep_ass_markup: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        keep_ass_markup: Set if ASS tags must be escaped (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "keep_ass_markup": keep_ass_markup,

    }))



def text(

    keep_ass_markup: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        keep_ass_markup: Set if ASS tags must be escaped (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "keep_ass_markup": keep_ass_markup,

    }))



def vplayer(

    keep_ass_markup: bool | None = None,

) -> FFMpegDecoderOption:
    """


    Args:
        keep_ass_markup: Set if ASS tags must be escaped (default false)

    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

        "keep_ass_markup": keep_ass_markup,

    }))



def webvtt(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))



def xsub(

) -> FFMpegDecoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegDecoderOption(merge({

    }))
