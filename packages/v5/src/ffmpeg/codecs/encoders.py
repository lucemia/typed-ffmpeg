# NOTE: this file is auto-generated, do not modify
"""
FFmpeg encoders.
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





def a64multi(

) -> FFMpegEncoderOption:
    """
    (codec a64_multi)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def a64multi5(

) -> FFMpegEncoderOption:
    """
    (codec a64_multi5)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def alias_pix(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def amv(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    huffman: int | None| Literal["default", "optimal"] = None,

    force_duplicated_matrix: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        huffman: Huffman table strategy (from 0 to 1) (default optimal)
        force_duplicated_matrix: Always write luma and chroma matrix for mjpeg, useful for rtp streaming. (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "huffman": huffman,

        "force_duplicated_matrix": force_duplicated_matrix,

    }))



def apng(

    dpi: int | None = None,

    dpm: int | None = None,

    pred: int | None| Literal["none", "sub", "up", "avg", "paeth", "mixed"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        dpi: Set image resolution (in dots per inch) (from 0 to 65536) (default 0)
        dpm: Set image resolution (in dots per meter) (from 0 to 65536) (default 0)
        pred: Prediction method (from 0 to 5) (default none)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dpi": dpi,

        "dpm": dpm,

        "pred": pred,

    }))



def asv1(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def asv2(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def avrp(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def avui(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def ayuv(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def bitpacked(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def bmp(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def cfhd(

    quality: int | None| Literal["film3+", "film3", "film2+", "film2", "film1.5", "film1+", "film1", "high+", "high", "medium+", "medium", "low+", "low"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        quality: set quality (from 0 to 12) (default film3+)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "quality": quality,

    }))



def cinepak(

    max_extra_cb_iterations: int | None = None,

    skip_empty_cb: bool | None = None,

    max_strips: int | None = None,

    min_strips: int | None = None,

    strip_number_adaptivity: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        max_extra_cb_iterations: Max extra codebook recalculation passes, more is better and slower (from 0 to INT_MAX) (default 2)
        skip_empty_cb: Avoid wasting bytes, ignore vintage MacOS decoder (default false)
        max_strips: Limit strips/frame, vintage compatible is 1..3, otherwise the more the better (from 1 to 32) (default 3)
        min_strips: Enforce min strips/frame, more is worse and faster, must be <= max_strips (from 1 to 32) (default 1)
        strip_number_adaptivity: How fast the strip number adapts, more is slightly better, much slower (from 0 to 31) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "max_extra_cb_iterations": max_extra_cb_iterations,

        "skip_empty_cb": skip_empty_cb,

        "max_strips": max_strips,

        "min_strips": min_strips,

        "strip_number_adaptivity": strip_number_adaptivity,

    }))



def cljr(

    dither_type: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        dither_type: Dither type (from 0 to 2) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dither_type": dither_type,

    }))



def vc2(

    tolerance: float | None = None,

    slice_width: int | None = None,

    slice_height: int | None = None,

    wavelet_depth: int | None = None,

    wavelet_type: int | None| Literal["9_7", "5_3", "haar", "haar_noshift"] = None,

    qm: int | None| Literal["default", "color", "flat"] = None,

) -> FFMpegEncoderOption:
    """
    (codec dirac)

    Args:
        tolerance: Max undershoot in percent (from 0 to 45) (default 5)
        slice_width: Slice width (from 32 to 1024) (default 32)
        slice_height: Slice height (from 8 to 1024) (default 16)
        wavelet_depth: Transform depth (from 1 to 5) (default 4)
        wavelet_type: Transform type (from 0 to 7) (default 9_7)
        qm: Custom quantization matrix (from 0 to 3) (default default)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "tolerance": tolerance,

        "slice_width": slice_width,

        "slice_height": slice_height,

        "wavelet_depth": wavelet_depth,

        "wavelet_type": wavelet_type,

        "qm": qm,

    }))



def dnxhd(

    nitris_compat: bool | None = None,

    ibias: int | None = None,

    profile: int | None| Literal["dnxhd", "dnxhr_444", "dnxhr_hqx", "dnxhr_hq", "dnxhr_sq", "dnxhr_lb"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        nitris_compat: encode with Avid Nitris compatibility (default false)
        ibias: intra quant bias (from INT_MIN to INT_MAX) (default 0)
        profile: (from 0 to 5) (default dnxhd)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "nitris_compat": nitris_compat,

        "ibias": ibias,

        "profile": profile,

    }))



def dpx(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def dvvideo(

    quant_deadzone: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        quant_deadzone: Quantizer dead zone (from 0 to 1024) (default 7)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "quant_deadzone": quant_deadzone,

    }))



def exr(

    compression: int | None| Literal["none", "rle", "zip1", "zip16"] = None,

    format: int | None| Literal["half", "float"] = None,

    gamma: float | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        compression: set compression type (from 0 to 3) (default none)
        format: set pixel type (from 1 to 2) (default float)
        gamma: set gamma (from 0.001 to FLT_MAX) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "compression": compression,

        "format": format,

        "gamma": gamma,

    }))



def ffv1(

    slicecrc: bool | None = None,

    coder: int | None| Literal["rice", "range_def", "range_tab", "ac"] = None,

    context: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        slicecrc: Protect slices with CRCs (default auto)
        coder: Coder type (from -2 to 2) (default rice)
        context: Context model (from 0 to 1) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "slicecrc": slicecrc,

        "coder": coder,

        "context": context,

    }))



def ffvhuff(

    non_deterministic: bool | None = None,

    pred: int | None| Literal["left", "plane", "median"] = None,

    context: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        non_deterministic: Allow multithreading for e.g. context=1 at the expense of determinism (default false)
        pred: Prediction method (from 0 to 2) (default left)
        context: Set per-frame huffman tables (from 0 to 1) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "non_deterministic": non_deterministic,

        "pred": pred,

        "context": context,

    }))



def fits(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def flashsv(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def flashsv2(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def flv(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec flv1)

    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def gif(

    gifflags: str | None = None,

    gifimage: bool | None = None,

    global_palette: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        gifflags: set GIF flags (default offsetting+transdiff)
        gifimage: enable encoding only images per frame (default false)
        global_palette: write a palette to the global gif header where feasible (default true)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "gifflags": gifflags,

        "gifimage": gifimage,

        "global_palette": global_palette,

    }))



def h261(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def h263(

    obmc: bool | None = None,

    mb_info: int | None = None,

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        obmc: use overlapped block motion compensation. (default false)
        mb_info: emit macroblock info for RFC 2190 packetization, the parameter value is the maximum payload size (from 0 to INT_MAX) (default 0)
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "obmc": obmc,

        "mb_info": mb_info,

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def h263_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec h263)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 4 to INT_MAX) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def h263p(

    umv: bool | None = None,

    aiv: bool | None = None,

    obmc: bool | None = None,

    structured_slices: bool | None = None,

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        umv: Use unlimited motion vectors. (default false)
        aiv: Use alternative inter VLC. (default false)
        obmc: use overlapped block motion compensation. (default false)
        structured_slices: Write slice start position at every GOB header instead of just GOB number. (default false)
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "umv": umv,

        "aiv": aiv,

        "obmc": obmc,

        "structured_slices": structured_slices,

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def libx264(

    preset: str | None = None,

    tune: str | None = None,

    profile: str | None = None,

    fastfirstpass: bool | None = None,

    level: str | None = None,

    passlogfile: str | None = None,

    wpredp: str | None = None,

    a53cc: bool | None = None,

    x264opts: str | None = None,

    crf: float | None = None,

    crf_max: float | None = None,

    qp: int | None = None,

    aq_mode: int | None| Literal["none", "variance", "autovariance", "autovariance-biased"] = None,

    aq_strength: float | None = None,

    psy: bool | None = None,

    psy_rd: str | None = None,

    rc_lookahead: int | None = None,

    weightb: bool | None = None,

    weightp: int | None| Literal["none", "simple", "smart"] = None,

    ssim: bool | None = None,

    intra_refresh: bool | None = None,

    bluray_compat: bool | None = None,

    b_bias: int | None = None,

    b_pyramid: int | None| Literal["none", "strict", "normal"] = None,

    mixed_refs: bool | None = None,

    _8x8dct: bool | None = None,

    fast_pskip: bool | None = None,

    aud: bool | None = None,

    mbtree: bool | None = None,

    deblock: str | None = None,

    cplxblur: float | None = None,

    partitions: str | None = None,

    direct_pred: int | None| Literal["none", "spatial", "temporal", "auto"] = None,

    slice_max_size: int | None = None,

    stats: str | None = None,

    nal_hrd: int | None| Literal["none", "vbr", "cbr"] = None,

    avcintra_class: int | None = None,

    me_method: int | None| Literal["dia", "hex", "umh", "esa", "tesa"] = None,

    forced_idr: bool | None = None,

    coder: int | None| Literal["default", "cavlc", "cabac", "vlc", "ac"] = None,

    b_strategy: int | None = None,

    chromaoffset: int | None = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    udu_sei: bool | None = None,

    x264_params: str | None = None,

) -> FFMpegEncoderOption:
    """
    (codec h264)

    Args:
        preset: Set the encoding preset (cf. x264 --fullhelp) (default "medium")
        tune: Tune the encoding params (cf. x264 --fullhelp)
        profile: Set profile restrictions (cf. x264 --fullhelp)
        fastfirstpass: Use fast settings when encoding first pass (default true)
        level: Specify level (as defined by Annex A)
        passlogfile: Filename for 2 pass stats
        wpredp: Weighted prediction for P-frames
        a53cc: Use A53 Closed Captions (if available) (default true)
        x264opts: x264 options
        crf: Select the quality for constant quality mode (from -1 to FLT_MAX) (default -1)
        crf_max: In CRF mode, prevents VBV from lowering quality beyond this point. (from -1 to FLT_MAX) (default -1)
        qp: Constant quantization parameter rate control method (from -1 to INT_MAX) (default -1)
        aq_mode: AQ method (from -1 to INT_MAX) (default -1)
        aq_strength: AQ strength. Reduces blocking and blurring in flat and textured areas. (from -1 to FLT_MAX) (default -1)
        psy: Use psychovisual optimizations. (default auto)
        psy_rd: Strength of psychovisual optimization, in <psy-rd>:<psy-trellis> format.
        rc_lookahead: Number of frames to look ahead for frametype and ratecontrol (from -1 to INT_MAX) (default -1)
        weightb: Weighted prediction for B-frames. (default auto)
        weightp: Weighted prediction analysis method. (from -1 to INT_MAX) (default -1)
        ssim: Calculate and print SSIM stats. (default auto)
        intra_refresh: Use Periodic Intra Refresh instead of IDR frames. (default auto)
        bluray_compat: Bluray compatibility workarounds. (default auto)
        b_bias: Influences how often B-frames are used (from INT_MIN to INT_MAX) (default INT_MIN)
        b_pyramid: Keep some B-frames as references. (from -1 to INT_MAX) (default -1)
        mixed_refs: One reference per partition, as opposed to one reference per macroblock (default auto)
        _8x8dct: High profile 8x8 transform. (default auto)
        fast_pskip: (default auto)
        aud: Use access unit delimiters. (default auto)
        mbtree: Use macroblock tree ratecontrol. (default auto)
        deblock: Loop filter parameters, in <alpha:beta> form.
        cplxblur: Reduce fluctuations in QP (before curve compression) (from -1 to FLT_MAX) (default -1)
        partitions: A comma-separated list of partitions to consider. Possible values: p8x8, p4x4, b8x8, i8x8, i4x4, none, all
        direct_pred: Direct MV prediction mode (from -1 to INT_MAX) (default -1)
        slice_max_size: Limit the size of each slice in bytes (from -1 to INT_MAX) (default -1)
        stats: Filename for 2 pass stats
        nal_hrd: Signal HRD information (requires vbv-bufsize; cbr not allowed in .mp4) (from -1 to INT_MAX) (default -1)
        avcintra_class: AVC-Intra class 50/100/200/300/480 (from -1 to 480) (default -1)
        me_method: Set motion estimation method (from -1 to 4) (default -1)
        forced_idr: If forcing keyframes, force them as IDR frames. (default false)
        coder: Coder type (from -1 to 1) (default default)
        b_strategy: Strategy to choose between I/P/B-frames (from -1 to 2) (default -1)
        chromaoffset: QP difference between chroma and luma (from INT_MIN to INT_MAX) (default 0)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default -1)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default -1)
        udu_sei: Use user data unregistered SEI if available (default false)
        x264_params: Override the x264 configuration using a :-separated list of key=value parameters

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "preset": preset,

        "tune": tune,

        "profile": profile,

        "fastfirstpass": fastfirstpass,

        "level": level,

        "passlogfile": passlogfile,

        "wpredp": wpredp,

        "a53cc": a53cc,

        "x264opts": x264opts,

        "crf": crf,

        "crf_max": crf_max,

        "qp": qp,

        "aq-mode": aq_mode,

        "aq-strength": aq_strength,

        "psy": psy,

        "psy-rd": psy_rd,

        "rc-lookahead": rc_lookahead,

        "weightb": weightb,

        "weightp": weightp,

        "ssim": ssim,

        "intra-refresh": intra_refresh,

        "bluray-compat": bluray_compat,

        "b-bias": b_bias,

        "b-pyramid": b_pyramid,

        "mixed-refs": mixed_refs,

        "8x8dct": _8x8dct,

        "fast-pskip": fast_pskip,

        "aud": aud,

        "mbtree": mbtree,

        "deblock": deblock,

        "cplxblur": cplxblur,

        "partitions": partitions,

        "direct-pred": direct_pred,

        "slice-max-size": slice_max_size,

        "stats": stats,

        "nal-hrd": nal_hrd,

        "avcintra-class": avcintra_class,

        "me_method": me_method,

        "forced-idr": forced_idr,

        "coder": coder,

        "b_strategy": b_strategy,

        "chromaoffset": chromaoffset,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "udu_sei": udu_sei,

        "x264-params": x264_params,

    }))



def libx264rgb(

    preset: str | None = None,

    tune: str | None = None,

    profile: str | None = None,

    fastfirstpass: bool | None = None,

    level: str | None = None,

    passlogfile: str | None = None,

    wpredp: str | None = None,

    a53cc: bool | None = None,

    x264opts: str | None = None,

    crf: float | None = None,

    crf_max: float | None = None,

    qp: int | None = None,

    aq_mode: int | None| Literal["none", "variance", "autovariance", "autovariance-biased"] = None,

    aq_strength: float | None = None,

    psy: bool | None = None,

    psy_rd: str | None = None,

    rc_lookahead: int | None = None,

    weightb: bool | None = None,

    weightp: int | None| Literal["none", "simple", "smart"] = None,

    ssim: bool | None = None,

    intra_refresh: bool | None = None,

    bluray_compat: bool | None = None,

    b_bias: int | None = None,

    b_pyramid: int | None| Literal["none", "strict", "normal"] = None,

    mixed_refs: bool | None = None,

    _8x8dct: bool | None = None,

    fast_pskip: bool | None = None,

    aud: bool | None = None,

    mbtree: bool | None = None,

    deblock: str | None = None,

    cplxblur: float | None = None,

    partitions: str | None = None,

    direct_pred: int | None| Literal["none", "spatial", "temporal", "auto"] = None,

    slice_max_size: int | None = None,

    stats: str | None = None,

    nal_hrd: int | None| Literal["none", "vbr", "cbr"] = None,

    avcintra_class: int | None = None,

    me_method: int | None| Literal["dia", "hex", "umh", "esa", "tesa"] = None,

    forced_idr: bool | None = None,

    coder: int | None| Literal["default", "cavlc", "cabac", "vlc", "ac"] = None,

    b_strategy: int | None = None,

    chromaoffset: int | None = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    udu_sei: bool | None = None,

    x264_params: str | None = None,

) -> FFMpegEncoderOption:
    """
    (codec h264)

    Args:
        preset: Set the encoding preset (cf. x264 --fullhelp) (default "medium")
        tune: Tune the encoding params (cf. x264 --fullhelp)
        profile: Set profile restrictions (cf. x264 --fullhelp)
        fastfirstpass: Use fast settings when encoding first pass (default true)
        level: Specify level (as defined by Annex A)
        passlogfile: Filename for 2 pass stats
        wpredp: Weighted prediction for P-frames
        a53cc: Use A53 Closed Captions (if available) (default true)
        x264opts: x264 options
        crf: Select the quality for constant quality mode (from -1 to FLT_MAX) (default -1)
        crf_max: In CRF mode, prevents VBV from lowering quality beyond this point. (from -1 to FLT_MAX) (default -1)
        qp: Constant quantization parameter rate control method (from -1 to INT_MAX) (default -1)
        aq_mode: AQ method (from -1 to INT_MAX) (default -1)
        aq_strength: AQ strength. Reduces blocking and blurring in flat and textured areas. (from -1 to FLT_MAX) (default -1)
        psy: Use psychovisual optimizations. (default auto)
        psy_rd: Strength of psychovisual optimization, in <psy-rd>:<psy-trellis> format.
        rc_lookahead: Number of frames to look ahead for frametype and ratecontrol (from -1 to INT_MAX) (default -1)
        weightb: Weighted prediction for B-frames. (default auto)
        weightp: Weighted prediction analysis method. (from -1 to INT_MAX) (default -1)
        ssim: Calculate and print SSIM stats. (default auto)
        intra_refresh: Use Periodic Intra Refresh instead of IDR frames. (default auto)
        bluray_compat: Bluray compatibility workarounds. (default auto)
        b_bias: Influences how often B-frames are used (from INT_MIN to INT_MAX) (default INT_MIN)
        b_pyramid: Keep some B-frames as references. (from -1 to INT_MAX) (default -1)
        mixed_refs: One reference per partition, as opposed to one reference per macroblock (default auto)
        _8x8dct: High profile 8x8 transform. (default auto)
        fast_pskip: (default auto)
        aud: Use access unit delimiters. (default auto)
        mbtree: Use macroblock tree ratecontrol. (default auto)
        deblock: Loop filter parameters, in <alpha:beta> form.
        cplxblur: Reduce fluctuations in QP (before curve compression) (from -1 to FLT_MAX) (default -1)
        partitions: A comma-separated list of partitions to consider. Possible values: p8x8, p4x4, b8x8, i8x8, i4x4, none, all
        direct_pred: Direct MV prediction mode (from -1 to INT_MAX) (default -1)
        slice_max_size: Limit the size of each slice in bytes (from -1 to INT_MAX) (default -1)
        stats: Filename for 2 pass stats
        nal_hrd: Signal HRD information (requires vbv-bufsize; cbr not allowed in .mp4) (from -1 to INT_MAX) (default -1)
        avcintra_class: AVC-Intra class 50/100/200/300/480 (from -1 to 480) (default -1)
        me_method: Set motion estimation method (from -1 to 4) (default -1)
        forced_idr: If forcing keyframes, force them as IDR frames. (default false)
        coder: Coder type (from -1 to 1) (default default)
        b_strategy: Strategy to choose between I/P/B-frames (from -1 to 2) (default -1)
        chromaoffset: QP difference between chroma and luma (from INT_MIN to INT_MAX) (default 0)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default -1)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default -1)
        udu_sei: Use user data unregistered SEI if available (default false)
        x264_params: Override the x264 configuration using a :-separated list of key=value parameters

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "preset": preset,

        "tune": tune,

        "profile": profile,

        "fastfirstpass": fastfirstpass,

        "level": level,

        "passlogfile": passlogfile,

        "wpredp": wpredp,

        "a53cc": a53cc,

        "x264opts": x264opts,

        "crf": crf,

        "crf_max": crf_max,

        "qp": qp,

        "aq-mode": aq_mode,

        "aq-strength": aq_strength,

        "psy": psy,

        "psy-rd": psy_rd,

        "rc-lookahead": rc_lookahead,

        "weightb": weightb,

        "weightp": weightp,

        "ssim": ssim,

        "intra-refresh": intra_refresh,

        "bluray-compat": bluray_compat,

        "b-bias": b_bias,

        "b-pyramid": b_pyramid,

        "mixed-refs": mixed_refs,

        "8x8dct": _8x8dct,

        "fast-pskip": fast_pskip,

        "aud": aud,

        "mbtree": mbtree,

        "deblock": deblock,

        "cplxblur": cplxblur,

        "partitions": partitions,

        "direct-pred": direct_pred,

        "slice-max-size": slice_max_size,

        "stats": stats,

        "nal-hrd": nal_hrd,

        "avcintra-class": avcintra_class,

        "me_method": me_method,

        "forced-idr": forced_idr,

        "coder": coder,

        "b_strategy": b_strategy,

        "chromaoffset": chromaoffset,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "udu_sei": udu_sei,

        "x264-params": x264_params,

    }))



def h264_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec h264)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 4 to INT_MAX) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def libx265(

    crf: float | None = None,

    qp: int | None = None,

    forced_idr: bool | None = None,

    preset: str | None = None,

    tune: str | None = None,

    profile: str | None = None,

    udu_sei: bool | None = None,

    x265_params: str | None = None,

) -> FFMpegEncoderOption:
    """
    (codec hevc)

    Args:
        crf: set the x265 crf (from -1 to FLT_MAX) (default -1)
        qp: set the x265 qp (from -1 to INT_MAX) (default -1)
        forced_idr: if forcing keyframes, force them as IDR frames (default false)
        preset: set the x265 preset
        tune: set the x265 tune parameter
        profile: set the x265 profile
        udu_sei: Use user data unregistered SEI if available (default false)
        x265_params: set the x265 configuration using a :-separated list of key=value parameters

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "crf": crf,

        "qp": qp,

        "forced-idr": forced_idr,

        "preset": preset,

        "tune": tune,

        "profile": profile,

        "udu_sei": udu_sei,

        "x265-params": x265_params,

    }))



def hevc_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec hevc)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 4 to INT_MAX) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def libkvazaar(

    kvazaar_params: str | None = None,

) -> FFMpegEncoderOption:
    """
    (codec hevc)

    Args:
        kvazaar_params: Set kvazaar parameters as a comma-separated list of key=value pairs.

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "kvazaar-params": kvazaar_params,

    }))



def huffyuv(

    non_deterministic: bool | None = None,

    pred: int | None| Literal["left", "plane", "median"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        non_deterministic: Allow multithreading for e.g. context=1 at the expense of determinism (default false)
        pred: Prediction method (from 0 to 2) (default left)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "non_deterministic": non_deterministic,

        "pred": pred,

    }))



def jpeg2000(

    format: int | None| Literal["j2k", "jp2"] = None,

    tile_width: int | None = None,

    tile_height: int | None = None,

    pred: int | None| Literal["dwt97int", "dwt53"] = None,

    sop: int | None = None,

    eph: int | None = None,

    prog: int | None| Literal["lrcp", "rlcp", "rpcl", "pcrl", "cprl"] = None,

    layer_rates: str | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        format: Codec Format (from 0 to 1) (default jp2)
        tile_width: Tile Width (from 1 to 1.07374e+09) (default 256)
        tile_height: Tile Height (from 1 to 1.07374e+09) (default 256)
        pred: DWT Type (from 0 to 1) (default dwt97int)
        sop: SOP marker (from 0 to 1) (default 0)
        eph: EPH marker (from 0 to 1) (default 0)
        prog: Progression Order (from 0 to 4) (default lrcp)
        layer_rates: Layer Rates

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "format": format,

        "tile_width": tile_width,

        "tile_height": tile_height,

        "pred": pred,

        "sop": sop,

        "eph": eph,

        "prog": prog,

        "layer_rates": layer_rates,

    }))



def libopenjpeg(

    format: int | None| Literal["j2k", "jp2"] = None,

    profile: int | None| Literal["jpeg2000", "cinema2k", "cinema4k"] = None,

    cinema_mode: int | None| Literal["off", "2k_24", "2k_48", "4k_24"] = None,

    prog_order: int | None| Literal["lrcp", "rlcp", "rpcl", "pcrl", "cprl"] = None,

    numresolution: int | None = None,

    irreversible: int | None = None,

    disto_alloc: int | None = None,

    fixed_quality: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec jpeg2000)

    Args:
        format: Codec Format (from 0 to 2) (default jp2)
        profile: (from 0 to 4) (default jpeg2000)
        cinema_mode: Digital Cinema (from 0 to 3) (default off)
        prog_order: Progression Order (from 0 to 4) (default lrcp)
        numresolution: (from 0 to 33) (default 6)
        irreversible: (from 0 to 1) (default 0)
        disto_alloc: (from 0 to 1) (default 1)
        fixed_quality: (from 0 to 1) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "format": format,

        "profile": profile,

        "cinema_mode": cinema_mode,

        "prog_order": prog_order,

        "numresolution": numresolution,

        "irreversible": irreversible,

        "disto_alloc": disto_alloc,

        "fixed_quality": fixed_quality,

    }))



def jpegls(

    pred: int | None| Literal["left", "plane", "median"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        pred: Prediction method (from 0 to 2) (default left)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "pred": pred,

    }))



def ljpeg(

    pred: int | None| Literal["left", "plane", "median"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        pred: Prediction method (from 1 to 3) (default left)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "pred": pred,

    }))



def magicyuv(

    pred: int | None| Literal["left", "gradient", "median"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        pred: Prediction method (from 1 to 3) (default left)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "pred": pred,

    }))



def mjpeg(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    huffman: int | None| Literal["default", "optimal"] = None,

    force_duplicated_matrix: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        huffman: Huffman table strategy (from 0 to 1) (default optimal)
        force_duplicated_matrix: Always write luma and chroma matrix for mjpeg, useful for rtp streaming. (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "huffman": huffman,

        "force_duplicated_matrix": force_duplicated_matrix,

    }))



def mpeg1video(

    gop_timecode: str | None = None,

    drop_frame_timecode: bool | None = None,

    scan_offset: bool | None = None,

    timecode_frame_start: int | None = None,

    b_strategy: int | None = None,

    b_sensitivity: int | None = None,

    brd_scale: int | None = None,

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        gop_timecode: MPEG GOP Timecode in hh:mm:ss[:;.]ff format. Overrides timecode_frame_start.
        drop_frame_timecode: Timecode is in drop frame format. (default false)
        scan_offset: Reserve space for SVCD scan offset user data. (default false)
        timecode_frame_start: GOP timecode frame start number, in non-drop-frame format (from -1 to I64_MAX) (default -1)
        b_strategy: Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
        b_sensitivity: Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
        brd_scale: Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "gop_timecode": gop_timecode,

        "drop_frame_timecode": drop_frame_timecode,

        "scan_offset": scan_offset,

        "timecode_frame_start": timecode_frame_start,

        "b_strategy": b_strategy,

        "b_sensitivity": b_sensitivity,

        "brd_scale": brd_scale,

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def mpeg2video(

    gop_timecode: str | None = None,

    drop_frame_timecode: bool | None = None,

    scan_offset: bool | None = None,

    timecode_frame_start: int | None = None,

    b_strategy: int | None = None,

    b_sensitivity: int | None = None,

    brd_scale: int | None = None,

    intra_vlc: bool | None = None,

    non_linear_quant: bool | None = None,

    alternate_scan: bool | None = None,

    a53cc: bool | None = None,

    seq_disp_ext: int | None| Literal["auto", "never", "always"] = None,

    video_format: int | None| Literal["component", "pal", "ntsc", "secam", "mac", "unspecified"] = None,

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        gop_timecode: MPEG GOP Timecode in hh:mm:ss[:;.]ff format. Overrides timecode_frame_start.
        drop_frame_timecode: Timecode is in drop frame format. (default false)
        scan_offset: Reserve space for SVCD scan offset user data. (default false)
        timecode_frame_start: GOP timecode frame start number, in non-drop-frame format (from -1 to I64_MAX) (default -1)
        b_strategy: Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
        b_sensitivity: Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
        brd_scale: Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
        intra_vlc: Use MPEG-2 intra VLC table. (default false)
        non_linear_quant: Use nonlinear quantizer. (default false)
        alternate_scan: Enable alternate scantable. (default false)
        a53cc: Use A53 Closed Captions (if available) (default true)
        seq_disp_ext: Write sequence_display_extension blocks. (from -1 to 1) (default auto)
        video_format: Video_format in the sequence_display_extension indicating the source of the video. (from 0 to 7) (default unspecified)
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "gop_timecode": gop_timecode,

        "drop_frame_timecode": drop_frame_timecode,

        "scan_offset": scan_offset,

        "timecode_frame_start": timecode_frame_start,

        "b_strategy": b_strategy,

        "b_sensitivity": b_sensitivity,

        "brd_scale": brd_scale,

        "intra_vlc": intra_vlc,

        "non_linear_quant": non_linear_quant,

        "alternate_scan": alternate_scan,

        "a53cc": a53cc,

        "seq_disp_ext": seq_disp_ext,

        "video_format": video_format,

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def mpeg4(

    data_partitioning: bool | None = None,

    alternate_scan: bool | None = None,

    mpeg_quant: int | None = None,

    b_strategy: int | None = None,

    b_sensitivity: int | None = None,

    brd_scale: int | None = None,

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        data_partitioning: Use data partitioning. (default false)
        alternate_scan: Enable alternate scantable. (default false)
        mpeg_quant: Use MPEG quantizers instead of H.263 (from 0 to 1) (default 0)
        b_strategy: Strategy to choose between I/P/B-frames (from 0 to 2) (default 0)
        b_sensitivity: Adjust sensitivity of b_frame_strategy 1 (from 1 to INT_MAX) (default 40)
        brd_scale: Downscale frames for dynamic B-frame decision (from 0 to 3) (default 0)
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "data_partitioning": data_partitioning,

        "alternate_scan": alternate_scan,

        "mpeg_quant": mpeg_quant,

        "b_strategy": b_strategy,

        "b_sensitivity": b_sensitivity,

        "brd_scale": brd_scale,

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def libxvid(

    lumi_aq: int | None = None,

    variance_aq: int | None = None,

    ssim: int | None| Literal["off", "avg", "frame"] = None,

    ssim_acc: int | None = None,

    gmc: int | None = None,

    me_quality: int | None = None,

    mpeg_quant: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec mpeg4)

    Args:
        lumi_aq: Luminance masking AQ (from 0 to 1) (default 0)
        variance_aq: Variance AQ (from 0 to 1) (default 0)
        ssim: Show SSIM information to stdout (from 0 to 2) (default off)
        ssim_acc: SSIM accuracy (from 0 to 4) (default 2)
        gmc: use GMC (from 0 to 1) (default 0)
        me_quality: Motion estimation quality (from 0 to 6) (default 4)
        mpeg_quant: Use MPEG quantizers instead of H.263 (from 0 to 1) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "lumi_aq": lumi_aq,

        "variance_aq": variance_aq,

        "ssim": ssim,

        "ssim_acc": ssim_acc,

        "gmc": gmc,

        "me_quality": me_quality,

        "mpeg_quant": mpeg_quant,

    }))



def mpeg4_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec mpeg4)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 4 to INT_MAX) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def msmpeg4v2(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def msmpeg4(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec msmpeg4v3)

    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def msvideo1(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pam(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pbm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcx(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pfm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pgm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pgmyuv(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def phm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def png(

    dpi: int | None = None,

    dpm: int | None = None,

    pred: int | None| Literal["none", "sub", "up", "avg", "paeth", "mixed"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        dpi: Set image resolution (in dots per inch) (from 0 to 65536) (default 0)
        dpm: Set image resolution (in dots per meter) (from 0 to 65536) (default 0)
        pred: Prediction method (from 0 to 5) (default none)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dpi": dpi,

        "dpm": dpm,

        "pred": pred,

    }))



def ppm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def prores(

    vendor: str | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        vendor: vendor ID (default "fmpg")

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "vendor": vendor,

    }))



def prores_aw(

    vendor: str | None = None,

) -> FFMpegEncoderOption:
    """
    (codec prores)

    Args:
        vendor: vendor ID (default "fmpg")

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "vendor": vendor,

    }))



def prores_ks(

    mbs_per_slice: int | None = None,

    profile: int | None| Literal["auto", "proxy", "lt", "standard", "hq", "4444", "4444xq"] = None,

    vendor: str | None = None,

    bits_per_mb: int | None = None,

    quant_mat: int | None| Literal["auto", "proxy", "lt", "standard", "hq", "default"] = None,

    alpha_bits: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec prores)

    Args:
        mbs_per_slice: macroblocks per slice (from 1 to 8) (default 8)
        profile: (from -1 to 5) (default auto)
        vendor: vendor ID (default "Lavc")
        bits_per_mb: desired bits per macroblock (from 0 to 8192) (default 0)
        quant_mat: quantiser matrix (from -1 to 6) (default auto)
        alpha_bits: bits for alpha plane (from 0 to 16) (default 16)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mbs_per_slice": mbs_per_slice,

        "profile": profile,

        "vendor": vendor,

        "bits_per_mb": bits_per_mb,

        "quant_mat": quant_mat,

        "alpha_bits": alpha_bits,

    }))



def qoi(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def qtrle(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def r10k(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def r210(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def rawvideo(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def roqvideo(

    quake3_compat: bool | None = None,

) -> FFMpegEncoderOption:
    """
    (codec roq)

    Args:
        quake3_compat: Whether to respect known limitations in Quake 3 decoder (default true)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "quake3_compat": quake3_compat,

    }))



def rpza(

    skip_frame_thresh: int | None = None,

    continue_one_color_thresh: int | None = None,

    sixteen_color_thresh: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        skip_frame_thresh: (from 0 to 24) (default 1)
        continue_one_color_thresh: (from 0 to 24) (default 0)
        sixteen_color_thresh: (from 0 to 24) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "skip_frame_thresh": skip_frame_thresh,

        "continue_one_color_thresh": continue_one_color_thresh,

        "sixteen_color_thresh": sixteen_color_thresh,

    }))



def rv10(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def rv20(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def sgi(

    rle: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        rle: Use run-length compression (from 0 to 1) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "rle": rle,

    }))



def smc(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def snow(

    motion_est: int | None| Literal["zero", "epzs", "xone", "iter"] = None,

    memc_only: bool | None = None,

    no_bitstream: bool | None = None,

    intra_penalty: int | None = None,

    iterative_dia_size: int | None = None,

    sc_threshold: int | None = None,

    pred: int | None| Literal["dwt97", "dwt53"] = None,

    rc_eq: str | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        motion_est: motion estimation algorithm (from 0 to 3) (default epzs)
        memc_only: Only do ME/MC (I frames -> ref, P frame -> ME+MC). (default false)
        no_bitstream: Skip final bitstream writeout. (default false)
        intra_penalty: Penalty for intra blocks in block decission (from 0 to INT_MAX) (default 0)
        iterative_dia_size: Dia size for the iterative ME (from 0 to INT_MAX) (default 0)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        pred: Spatial decomposition type (from 0 to 1) (default dwt97)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "motion_est": motion_est,

        "memc_only": memc_only,

        "no_bitstream": no_bitstream,

        "intra_penalty": intra_penalty,

        "iterative_dia_size": iterative_dia_size,

        "sc_threshold": sc_threshold,

        "pred": pred,

        "rc_eq": rc_eq,

    }))



def speedhq(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def sunrast(

    rle: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        rle: Use run-length compression (from 0 to 1) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "rle": rle,

    }))



def svq1(

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        motion_est: Motion estimation algorithm (from 0 to 2) (default epzs)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "motion-est": motion_est,

    }))



def targa(

    rle: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        rle: Use run-length compression (from 0 to 1) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "rle": rle,

    }))



def libtheora(

) -> FFMpegEncoderOption:
    """
    (codec theora)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def tiff(

    dpi: int | None = None,

    compression_algo: int | None| Literal["packbits", "raw", "lzw", "deflate"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        dpi: set the image resolution (in dpi) (from 1 to 65536) (default 72)
        compression_algo: (from 1 to 32946) (default packbits)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dpi": dpi,

        "compression_algo": compression_algo,

    }))



def utvideo(

    pred: int | None| Literal["none", "left", "gradient", "median"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        pred: Prediction method (from 0 to 3) (default left)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "pred": pred,

    }))



def v210(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def v308(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def v408(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def v410(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def vbn(

    format: int | None| Literal["raw", "dxt1", "dxt5"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        format: Texture format (from 0 to 3) (default dxt5)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "format": format,

    }))



def libvpx(

    lag_in_frames: int | None = None,

    arnr_maxframes: int | None = None,

    arnr_strength: int | None = None,

    arnr_type: int | None| Literal["backward", "forward", "centered"] = None,

    tune: int | None| Literal["psnr", "ssim"] = None,

    deadline: int | None| Literal["best", "good", "realtime"] = None,

    error_resilient: str | None = None,

    max_intra_rate: int | None = None,

    crf: int | None = None,

    static_thresh: int | None = None,

    drop_threshold: int | None = None,

    noise_sensitivity: int | None = None,

    undershoot_pct: int | None = None,

    overshoot_pct: int | None = None,

    ts_parameters: str | None = None,

    auto_alt_ref: int | None = None,

    cpu_used: int | None = None,

    speed: int | None = None,

    quality: int | None| Literal["best", "good", "realtime"] = None,

    vp8flags: str | None = None,

    arnr_max_frames: int | None = None,

    rc_lookahead: int | None = None,

    sharpness: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec vp8)

    Args:
        lag_in_frames: Number of frames to look ahead for alternate reference frame selection (from -1 to INT_MAX) (default -1)
        arnr_maxframes: altref noise reduction max frame count (from -1 to INT_MAX) (default -1)
        arnr_strength: altref noise reduction filter strength (from -1 to INT_MAX) (default -1)
        arnr_type: altref noise reduction filter type (from -1 to INT_MAX) (default -1)
        tune: Tune the encoding to a specific scenario (from -1 to INT_MAX) (default -1)
        deadline: Time to spend encoding, in microseconds. (from INT_MIN to INT_MAX) (default good)
        error_resilient: Error resilience configuration (default 0)
        max_intra_rate: Maximum I-frame bitrate (pct) 0=unlimited (from -1 to INT_MAX) (default -1)
        crf: Select the quality for constant quality mode (from -1 to 63) (default -1)
        static_thresh: A change threshold on blocks below which they will be skipped by the encoder (from 0 to INT_MAX) (default 0)
        drop_threshold: Frame drop threshold (from INT_MIN to INT_MAX) (default 0)
        noise_sensitivity: Noise sensitivity (from 0 to 4) (default 0)
        undershoot_pct: Datarate undershoot (min) target (%) (from -1 to 100) (default -1)
        overshoot_pct: Datarate overshoot (max) target (%) (from -1 to 1000) (default -1)
        ts_parameters: Temporal scaling configuration using a :-separated list of key=value parameters
        auto_alt_ref: Enable use of alternate reference frames (2-pass only) (from -1 to 2) (default -1)
        cpu_used: Quality/Speed ratio modifier (from -16 to 16) (default 1)
        speed: (from -16 to 16) (default 1)
        quality: (from INT_MIN to INT_MAX) (default good)
        vp8flags: (default 0)
        arnr_max_frames: altref noise reduction max frame count (from 0 to 15) (default 0)
        rc_lookahead: Number of frames to look ahead for alternate reference frame selection (from 0 to 25) (default 25)
        sharpness: Increase sharpness at the expense of lower PSNR (from -1 to 7) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "lag-in-frames": lag_in_frames,

        "arnr-maxframes": arnr_maxframes,

        "arnr-strength": arnr_strength,

        "arnr-type": arnr_type,

        "tune": tune,

        "deadline": deadline,

        "error-resilient": error_resilient,

        "max-intra-rate": max_intra_rate,

        "crf": crf,

        "static-thresh": static_thresh,

        "drop-threshold": drop_threshold,

        "noise-sensitivity": noise_sensitivity,

        "undershoot-pct": undershoot_pct,

        "overshoot-pct": overshoot_pct,

        "ts-parameters": ts_parameters,

        "auto-alt-ref": auto_alt_ref,

        "cpu-used": cpu_used,

        "speed": speed,

        "quality": quality,

        "vp8flags": vp8flags,

        "arnr_max_frames": arnr_max_frames,

        "rc_lookahead": rc_lookahead,

        "sharpness": sharpness,

    }))



def vp8_v4l2m2m(

    num_output_buffers: int | None = None,

    num_capture_buffers: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec vp8)

    Args:
        num_output_buffers: Number of buffers in the output context (from 6 to INT_MAX) (default 16)
        num_capture_buffers: Number of buffers in the capture context (from 4 to INT_MAX) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "num_output_buffers": num_output_buffers,

        "num_capture_buffers": num_capture_buffers,

    }))



def libwebp(

    lossless: int | None = None,

    preset: int | None| Literal["none", "default", "picture", "photo", "drawing", "icon", "text"] = None,

    cr_threshold: int | None = None,

    cr_size: int | None = None,

    quality: float | None = None,

) -> FFMpegEncoderOption:
    """
    (codec webp)

    Args:
        lossless: Use lossless mode (from 0 to 1) (default 0)
        preset: Configuration preset (from -1 to 5) (default none)
        cr_threshold: Conditional replenishment threshold (from 0 to INT_MAX) (default 0)
        cr_size: Conditional replenishment block size (from 0 to 256) (default 16)
        quality: Quality (from 0 to 100) (default 75)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "lossless": lossless,

        "preset": preset,

        "cr_threshold": cr_threshold,

        "cr_size": cr_size,

        "quality": quality,

    }))



def wmv1(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def wmv2(

    mpv_flags: str | None = None,

    luma_elim_threshold: int | None = None,

    chroma_elim_threshold: int | None = None,

    quantizer_noise_shaping: int | None = None,

    error_rate: int | None = None,

    qsquish: float | None = None,

    rc_qmod_amp: float | None = None,

    rc_qmod_freq: int | None = None,

    rc_eq: str | None = None,

    rc_init_cplx: float | None = None,

    rc_buf_aggressivity: float | None = None,

    border_mask: float | None = None,

    lmin: int | None = None,

    lmax: int | None = None,

    skip_threshold: int | None = None,

    skip_factor: int | None = None,

    skip_exp: int | None = None,

    skip_cmp: int | None| Literal["sad", "sse", "satd", "dct", "psnr", "bit", "rd", "zero", "vsad", "vsse", "nsse", "dct264", "dctmax", "chroma", "msad"] = None,

    sc_threshold: int | None = None,

    noise_reduction: int | None = None,

    ps: int | None = None,

    motion_est: int | None| Literal["zero", "epzs", "xone"] = None,

    mepc: int | None = None,

    mepre: int | None = None,

    intra_penalty: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mpv_flags: Flags common for all mpegvideo-based encoders. (default 0)
        luma_elim_threshold: single coefficient elimination threshold for luminance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        chroma_elim_threshold: single coefficient elimination threshold for chrominance (negative values also consider dc coefficient) (from INT_MIN to INT_MAX) (default 0)
        quantizer_noise_shaping: (from 0 to INT_MAX) (default 0)
        error_rate: Simulate errors in the bitstream to test error concealment. (from 0 to INT_MAX) (default 0)
        qsquish: how to keep quantizer between qmin and qmax (0 = clip, 1 = use differentiable function) (from 0 to 99) (default 0)
        rc_qmod_amp: experimental quantizer modulation (from -FLT_MAX to FLT_MAX) (default 0)
        rc_qmod_freq: experimental quantizer modulation (from INT_MIN to INT_MAX) (default 0)
        rc_eq: Set rate control equation. When computing the expression, besides the standard functions defined in the section 'Expression Evaluation', the following functions are available: bits2qp(bits), qp2bits(qp). Also the following constants are available: iTex pTex tex mv fCode iCount mcVar var isI isP isB avgQP qComp avgIITex avgPITex avgPPTex avgBPTex avgTex.
        rc_init_cplx: initial complexity for 1-pass encoding (from -FLT_MAX to FLT_MAX) (default 0)
        rc_buf_aggressivity: currently useless (from -FLT_MAX to FLT_MAX) (default 1)
        border_mask: increase the quantizer for macroblocks close to borders (from -FLT_MAX to FLT_MAX) (default 0)
        lmin: minimum Lagrange factor (VBR) (from 0 to INT_MAX) (default 236)
        lmax: maximum Lagrange factor (VBR) (from 0 to INT_MAX) (default 3658)
        skip_threshold: Frame skip threshold (from INT_MIN to INT_MAX) (default 0)
        skip_factor: Frame skip factor (from INT_MIN to INT_MAX) (default 0)
        skip_exp: Frame skip exponent (from INT_MIN to INT_MAX) (default 0)
        skip_cmp: Frame skip compare function (from INT_MIN to INT_MAX) (default dctmax)
        sc_threshold: Scene change threshold (from INT_MIN to INT_MAX) (default 0)
        noise_reduction: Noise reduction (from INT_MIN to INT_MAX) (default 0)
        ps: RTP payload size in bytes (from INT_MIN to INT_MAX) (default 0)
        motion_est: motion estimation algorithm (from 0 to 2) (default epzs)
        mepc: Motion estimation bitrate penalty compensation (1.0 = 256) (from INT_MIN to INT_MAX) (default 256)
        mepre: pre motion estimation (from INT_MIN to INT_MAX) (default 0)
        intra_penalty: Penalty for intra blocks in block decision (from 0 to 1.07374e+09) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mpv_flags": mpv_flags,

        "luma_elim_threshold": luma_elim_threshold,

        "chroma_elim_threshold": chroma_elim_threshold,

        "quantizer_noise_shaping": quantizer_noise_shaping,

        "error_rate": error_rate,

        "qsquish": qsquish,

        "rc_qmod_amp": rc_qmod_amp,

        "rc_qmod_freq": rc_qmod_freq,

        "rc_eq": rc_eq,

        "rc_init_cplx": rc_init_cplx,

        "rc_buf_aggressivity": rc_buf_aggressivity,

        "border_mask": border_mask,

        "lmin": lmin,

        "lmax": lmax,

        "skip_threshold": skip_threshold,

        "skip_factor": skip_factor,

        "skip_exp": skip_exp,

        "skip_cmp": skip_cmp,

        "sc_threshold": sc_threshold,

        "noise_reduction": noise_reduction,

        "ps": ps,

        "motion_est": motion_est,

        "mepc": mepc,

        "mepre": mepre,

        "intra_penalty": intra_penalty,

    }))



def wrapped_avframe(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def xbm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def xface(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def xwd(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def y41p(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def yuv4(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def zlib(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def zmbv(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def aac(

    aac_coder: int | None| Literal["anmr", "twoloop", "fast"] = None,

    aac_ms: bool | None = None,

    aac_is: bool | None = None,

    aac_pns: bool | None = None,

    aac_tns: bool | None = None,

    aac_ltp: bool | None = None,

    aac_pred: bool | None = None,

    aac_pce: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        aac_coder: Coding algorithm (from 0 to 2) (default twoloop)
        aac_ms: Force M/S stereo coding (default auto)
        aac_is: Intensity stereo coding (default true)
        aac_pns: Perceptual noise substitution (default true)
        aac_tns: Temporal noise shaping (default true)
        aac_ltp: Long term prediction (default false)
        aac_pred: AAC-Main prediction (default false)
        aac_pce: Forces the use of PCEs (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "aac_coder": aac_coder,

        "aac_ms": aac_ms,

        "aac_is": aac_is,

        "aac_pns": aac_pns,

        "aac_tns": aac_tns,

        "aac_ltp": aac_ltp,

        "aac_pred": aac_pred,

        "aac_pce": aac_pce,

    }))



def libfdk_aac(

    afterburner: int | None = None,

    eld_sbr: int | None = None,

    signaling: int | None| Literal["default", "implicit", "explicit_sbr", "explicit_hierarchical"] = None,

    latm: int | None = None,

    header_period: int | None = None,

    vbr: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec aac)

    Args:
        afterburner: Afterburner (improved quality) (from 0 to 1) (default 1)
        eld_sbr: Enable SBR for ELD (for SBR in other configurations, use the -profile parameter) (from 0 to 1) (default 0)
        signaling: SBR/PS signaling style (from -1 to 2) (default default)
        latm: Output LATM/LOAS encapsulated data (from 0 to 1) (default 0)
        header_period: StreamMuxConfig and PCE repetition period (in frames) (from 0 to 65535) (default 0)
        vbr: VBR mode (1-5) (from 0 to 5) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "afterburner": afterburner,

        "eld_sbr": eld_sbr,

        "signaling": signaling,

        "latm": latm,

        "header_period": header_period,

        "vbr": vbr,

    }))



def ac3(

    center_mixlev: float | None = None,

    surround_mixlev: float | None = None,

    mixing_level: int | None = None,

    room_type: int | None| Literal["notindicated", "large", "small"] = None,

    per_frame_metadata: bool | None = None,

    copyright: int | None = None,

    dialnorm: int | None = None,

    dsur_mode: int | None| Literal["notindicated", "on", "off"] = None,

    original: int | None = None,

    dmix_mode: int | None| Literal["notindicated", "ltrt", "loro", "dplii"] = None,

    ltrt_cmixlev: float | None = None,

    ltrt_surmixlev: float | None = None,

    loro_cmixlev: float | None = None,

    loro_surmixlev: float | None = None,

    dsurex_mode: int | None| Literal["notindicated", "on", "off", "dpliiz"] = None,

    dheadphone_mode: int | None| Literal["notindicated", "on", "off"] = None,

    ad_conv_type: int | None| Literal["standard", "hdcd"] = None,

    stereo_rematrixing: bool | None = None,

    channel_coupling: int | None| Literal["auto"] = None,

    cpl_start_band: int | None| Literal["auto"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        center_mixlev: Center Mix Level (from 0 to 1) (default 0.594604)
        surround_mixlev: Surround Mix Level (from 0 to 1) (default 0.5)
        mixing_level: Mixing Level (from -1 to 111) (default -1)
        room_type: Room Type (from -1 to 2) (default -1)
        per_frame_metadata: Allow Changing Metadata Per-Frame (default false)
        copyright: Copyright Bit (from -1 to 1) (default -1)
        dialnorm: Dialogue Level (dB) (from -31 to -1) (default -31)
        dsur_mode: Dolby Surround Mode (from -1 to 2) (default -1)
        original: Original Bit Stream (from -1 to 1) (default -1)
        dmix_mode: Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
        ltrt_cmixlev: Lt/Rt Center Mix Level (from -1 to 2) (default -1)
        ltrt_surmixlev: Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
        loro_cmixlev: Lo/Ro Center Mix Level (from -1 to 2) (default -1)
        loro_surmixlev: Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
        dsurex_mode: Dolby Surround EX Mode (from -1 to 3) (default -1)
        dheadphone_mode: Dolby Headphone Mode (from -1 to 2) (default -1)
        ad_conv_type: A/D Converter Type (from -1 to 1) (default -1)
        stereo_rematrixing: Stereo Rematrixing (default true)
        channel_coupling: Channel Coupling (from -1 to 1) (default auto)
        cpl_start_band: Coupling Start Band (from -1 to 15) (default auto)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "center_mixlev": center_mixlev,

        "surround_mixlev": surround_mixlev,

        "mixing_level": mixing_level,

        "room_type": room_type,

        "per_frame_metadata": per_frame_metadata,

        "copyright": copyright,

        "dialnorm": dialnorm,

        "dsur_mode": dsur_mode,

        "original": original,

        "dmix_mode": dmix_mode,

        "ltrt_cmixlev": ltrt_cmixlev,

        "ltrt_surmixlev": ltrt_surmixlev,

        "loro_cmixlev": loro_cmixlev,

        "loro_surmixlev": loro_surmixlev,

        "dsurex_mode": dsurex_mode,

        "dheadphone_mode": dheadphone_mode,

        "ad_conv_type": ad_conv_type,

        "stereo_rematrixing": stereo_rematrixing,

        "channel_coupling": channel_coupling,

        "cpl_start_band": cpl_start_band,

    }))



def ac3_fixed(

    center_mixlev: float | None = None,

    surround_mixlev: float | None = None,

    mixing_level: int | None = None,

    room_type: int | None| Literal["notindicated", "large", "small"] = None,

    per_frame_metadata: bool | None = None,

    copyright: int | None = None,

    dialnorm: int | None = None,

    dsur_mode: int | None| Literal["notindicated", "on", "off"] = None,

    original: int | None = None,

    dmix_mode: int | None| Literal["notindicated", "ltrt", "loro", "dplii"] = None,

    ltrt_cmixlev: float | None = None,

    ltrt_surmixlev: float | None = None,

    loro_cmixlev: float | None = None,

    loro_surmixlev: float | None = None,

    dsurex_mode: int | None| Literal["notindicated", "on", "off", "dpliiz"] = None,

    dheadphone_mode: int | None| Literal["notindicated", "on", "off"] = None,

    ad_conv_type: int | None| Literal["standard", "hdcd"] = None,

    stereo_rematrixing: bool | None = None,

    channel_coupling: int | None| Literal["auto"] = None,

    cpl_start_band: int | None| Literal["auto"] = None,

) -> FFMpegEncoderOption:
    """
    (codec ac3)

    Args:
        center_mixlev: Center Mix Level (from 0 to 1) (default 0.594604)
        surround_mixlev: Surround Mix Level (from 0 to 1) (default 0.5)
        mixing_level: Mixing Level (from -1 to 111) (default -1)
        room_type: Room Type (from -1 to 2) (default -1)
        per_frame_metadata: Allow Changing Metadata Per-Frame (default false)
        copyright: Copyright Bit (from -1 to 1) (default -1)
        dialnorm: Dialogue Level (dB) (from -31 to -1) (default -31)
        dsur_mode: Dolby Surround Mode (from -1 to 2) (default -1)
        original: Original Bit Stream (from -1 to 1) (default -1)
        dmix_mode: Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
        ltrt_cmixlev: Lt/Rt Center Mix Level (from -1 to 2) (default -1)
        ltrt_surmixlev: Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
        loro_cmixlev: Lo/Ro Center Mix Level (from -1 to 2) (default -1)
        loro_surmixlev: Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
        dsurex_mode: Dolby Surround EX Mode (from -1 to 3) (default -1)
        dheadphone_mode: Dolby Headphone Mode (from -1 to 2) (default -1)
        ad_conv_type: A/D Converter Type (from -1 to 1) (default -1)
        stereo_rematrixing: Stereo Rematrixing (default true)
        channel_coupling: Channel Coupling (from -1 to 1) (default auto)
        cpl_start_band: Coupling Start Band (from -1 to 15) (default auto)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "center_mixlev": center_mixlev,

        "surround_mixlev": surround_mixlev,

        "mixing_level": mixing_level,

        "room_type": room_type,

        "per_frame_metadata": per_frame_metadata,

        "copyright": copyright,

        "dialnorm": dialnorm,

        "dsur_mode": dsur_mode,

        "original": original,

        "dmix_mode": dmix_mode,

        "ltrt_cmixlev": ltrt_cmixlev,

        "ltrt_surmixlev": ltrt_surmixlev,

        "loro_cmixlev": loro_cmixlev,

        "loro_surmixlev": loro_surmixlev,

        "dsurex_mode": dsurex_mode,

        "dheadphone_mode": dheadphone_mode,

        "ad_conv_type": ad_conv_type,

        "stereo_rematrixing": stereo_rematrixing,

        "channel_coupling": channel_coupling,

        "cpl_start_band": cpl_start_band,

    }))



def adpcm_adx(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def adpcm_argo(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def g722(

) -> FFMpegEncoderOption:
    """
    (codec adpcm_g722)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def g726(

    code_size: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec adpcm_g726)

    Args:
        code_size: Bits per code (from 2 to 5) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "code_size": code_size,

    }))



def g726le(

    code_size: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec adpcm_g726le)

    Args:
        code_size: Bits per code (from 2 to 5) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "code_size": code_size,

    }))



def adpcm_ima_alp(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_amv(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_apm(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_qt(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_ssi(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_wav(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ima_ws(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_ms(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_swf(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def adpcm_yamaha(

    block_size: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        block_size: set the block size (from 32 to 8192) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "block_size": block_size,

    }))



def alac(

    min_prediction_order: int | None = None,

    max_prediction_order: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        min_prediction_order: (from 1 to 30) (default 4)
        max_prediction_order: (from 1 to 30) (default 6)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "min_prediction_order": min_prediction_order,

        "max_prediction_order": max_prediction_order,

    }))



def libopencore_amrnb(

    dtx: int | None = None,

) -> FFMpegEncoderOption:
    """
    (codec amr_nb)

    Args:
        dtx: Allow DTX (generate comfort noise) (from 0 to 1) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dtx": dtx,

    }))



def aptx(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def aptx_hd(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def comfortnoise(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def dfpwm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def dca(

    dca_adpcm: bool | None = None,

) -> FFMpegEncoderOption:
    """
    (codec dts)

    Args:
        dca_adpcm: Use ADPCM encoding (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "dca_adpcm": dca_adpcm,

    }))



def eac3(

    mixing_level: int | None = None,

    room_type: int | None| Literal["notindicated", "large", "small"] = None,

    per_frame_metadata: bool | None = None,

    copyright: int | None = None,

    dialnorm: int | None = None,

    dsur_mode: int | None| Literal["notindicated", "on", "off"] = None,

    original: int | None = None,

    dmix_mode: int | None| Literal["notindicated", "ltrt", "loro", "dplii"] = None,

    ltrt_cmixlev: float | None = None,

    ltrt_surmixlev: float | None = None,

    loro_cmixlev: float | None = None,

    loro_surmixlev: float | None = None,

    dsurex_mode: int | None| Literal["notindicated", "on", "off", "dpliiz"] = None,

    dheadphone_mode: int | None| Literal["notindicated", "on", "off"] = None,

    ad_conv_type: int | None| Literal["standard", "hdcd"] = None,

    stereo_rematrixing: bool | None = None,

    channel_coupling: int | None| Literal["auto"] = None,

    cpl_start_band: int | None| Literal["auto"] = None,

) -> FFMpegEncoderOption:
    """


    Args:
        mixing_level: Mixing Level (from -1 to 111) (default -1)
        room_type: Room Type (from -1 to 2) (default -1)
        per_frame_metadata: Allow Changing Metadata Per-Frame (default false)
        copyright: Copyright Bit (from -1 to 1) (default -1)
        dialnorm: Dialogue Level (dB) (from -31 to -1) (default -31)
        dsur_mode: Dolby Surround Mode (from -1 to 2) (default -1)
        original: Original Bit Stream (from -1 to 1) (default -1)
        dmix_mode: Preferred Stereo Downmix Mode (from -1 to 3) (default -1)
        ltrt_cmixlev: Lt/Rt Center Mix Level (from -1 to 2) (default -1)
        ltrt_surmixlev: Lt/Rt Surround Mix Level (from -1 to 2) (default -1)
        loro_cmixlev: Lo/Ro Center Mix Level (from -1 to 2) (default -1)
        loro_surmixlev: Lo/Ro Surround Mix Level (from -1 to 2) (default -1)
        dsurex_mode: Dolby Surround EX Mode (from -1 to 3) (default -1)
        dheadphone_mode: Dolby Headphone Mode (from -1 to 2) (default -1)
        ad_conv_type: A/D Converter Type (from -1 to 1) (default -1)
        stereo_rematrixing: Stereo Rematrixing (default true)
        channel_coupling: Channel Coupling (from -1 to 1) (default auto)
        cpl_start_band: Coupling Start Band (from -1 to 15) (default auto)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "mixing_level": mixing_level,

        "room_type": room_type,

        "per_frame_metadata": per_frame_metadata,

        "copyright": copyright,

        "dialnorm": dialnorm,

        "dsur_mode": dsur_mode,

        "original": original,

        "dmix_mode": dmix_mode,

        "ltrt_cmixlev": ltrt_cmixlev,

        "ltrt_surmixlev": ltrt_surmixlev,

        "loro_cmixlev": loro_cmixlev,

        "loro_surmixlev": loro_surmixlev,

        "dsurex_mode": dsurex_mode,

        "dheadphone_mode": dheadphone_mode,

        "ad_conv_type": ad_conv_type,

        "stereo_rematrixing": stereo_rematrixing,

        "channel_coupling": channel_coupling,

        "cpl_start_band": cpl_start_band,

    }))



def flac(

    lpc_coeff_precision: int | None = None,

    lpc_type: int | None| Literal["none", "fixed", "levinson", "cholesky"] = None,

    lpc_passes: int | None = None,

    min_partition_order: int | None = None,

    prediction_order_method: int | None| Literal["estimation", "2level", "4level", "8level", "search", "log"] = None,

    ch_mode: int | None| Literal["auto", "indep", "left_side", "right_side", "mid_side"] = None,

    exact_rice_parameters: bool | None = None,

    multi_dim_quant: bool | None = None,

    min_prediction_order: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        lpc_coeff_precision: LPC coefficient precision (from 0 to 15) (default 15)
        lpc_type: LPC algorithm (from -1 to 3) (default -1)
        lpc_passes: Number of passes to use for Cholesky factorization during LPC analysis (from 1 to INT_MAX) (default 2)
        min_partition_order: (from -1 to 8) (default -1)
        prediction_order_method: Search method for selecting prediction order (from -1 to 5) (default -1)
        ch_mode: Stereo decorrelation mode (from -1 to 3) (default auto)
        exact_rice_parameters: Calculate rice parameters exactly (default false)
        multi_dim_quant: Multi-dimensional quantization (default false)
        min_prediction_order: (from -1 to 32) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "lpc_coeff_precision": lpc_coeff_precision,

        "lpc_type": lpc_type,

        "lpc_passes": lpc_passes,

        "min_partition_order": min_partition_order,

        "prediction_order_method": prediction_order_method,

        "ch_mode": ch_mode,

        "exact_rice_parameters": exact_rice_parameters,

        "multi_dim_quant": multi_dim_quant,

        "min_prediction_order": min_prediction_order,

    }))



def g723_1(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def mlp(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def mp2(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def mp2fixed(

) -> FFMpegEncoderOption:
    """
    (codec mp2)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def libmp3lame(

    reservoir: bool | None = None,

    joint_stereo: bool | None = None,

    abr: bool | None = None,

) -> FFMpegEncoderOption:
    """
    (codec mp3)

    Args:
        reservoir: use bit reservoir (default true)
        joint_stereo: use joint stereo (default true)
        abr: use ABR (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "reservoir": reservoir,

        "joint_stereo": joint_stereo,

        "abr": abr,

    }))



def nellymoser(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def opus(

    opus_delay: float | None = None,

    apply_phase_inv: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        opus_delay: Maximum delay in milliseconds (from 2.5 to 360) (default 360)
        apply_phase_inv: Apply intensity stereo phase inversion (default true)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "opus_delay": opus_delay,

        "apply_phase_inv": apply_phase_inv,

    }))



def libopus(

    application: int | None| Literal["voip", "audio", "lowdelay"] = None,

    frame_duration: float | None = None,

    packet_loss: int | None = None,

    fec: bool | None = None,

    vbr: int | None| Literal["off", "on", "constrained"] = None,

    mapping_family: int | None = None,

    apply_phase_inv: bool | None = None,

) -> FFMpegEncoderOption:
    """
    (codec opus)

    Args:
        application: Intended application type (from 2048 to 2051) (default audio)
        frame_duration: Duration of a frame in milliseconds (from 2.5 to 120) (default 20)
        packet_loss: Expected packet loss percentage (from 0 to 100) (default 0)
        fec: Enable inband FEC. Expected packet loss must be non-zero (default false)
        vbr: Variable bit rate mode (from 0 to 2) (default on)
        mapping_family: Channel Mapping Family (from -1 to 255) (default -1)
        apply_phase_inv: Apply intensity stereo phase inversion (default true)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "application": application,

        "frame_duration": frame_duration,

        "packet_loss": packet_loss,

        "fec": fec,

        "vbr": vbr,

        "mapping_family": mapping_family,

        "apply_phase_inv": apply_phase_inv,

    }))



def pcm_alaw(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_bluray(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_dvd(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_f32be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_f32le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_f64be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_f64le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_mulaw(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s16be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s16be_planar(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s16le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s16le_planar(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s24be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s24daud(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s24le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s24le_planar(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s32be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s32le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s32le_planar(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s64be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s64le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s8(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_s8_planar(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u16be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u16le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u24be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u24le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u32be(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u32le(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_u8(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def pcm_vidc(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def real_144(

) -> FFMpegEncoderOption:
    """
    (codec ra_144)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def roq_dpcm(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def s302m(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def sbc(

    sbc_delay: str | None = None,

    msbc: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        sbc_delay: set maximum algorithmic latency (default 0.013)
        msbc: use mSBC mode (wideband speech mono SBC) (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "sbc_delay": sbc_delay,

        "msbc": msbc,

    }))



def sonic(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def sonicls(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def truehd(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def tta(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def vorbis(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def libvorbis(

    iblock: float | None = None,

) -> FFMpegEncoderOption:
    """
    (codec vorbis)

    Args:
        iblock: Sets the impulse block bias (from -15 to 0) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "iblock": iblock,

    }))



def wavpack(

    joint_stereo: bool | None = None,

    optimize_mono: bool | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        joint_stereo: (default auto)
        optimize_mono: (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "joint_stereo": joint_stereo,

        "optimize_mono": optimize_mono,

    }))



def wmav1(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def wmav2(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def ssa(

) -> FFMpegEncoderOption:
    """
    (codec ass)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def ass(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def dvbsub(

) -> FFMpegEncoderOption:
    """
    (codec dvb_subtitle)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def dvdsub(

    palette: str | None = None,

    even_rows_fix: bool | None = None,

) -> FFMpegEncoderOption:
    """
    (codec dvd_subtitle)

    Args:
        palette: set the global palette
        even_rows_fix: Make number of rows even (workaround for some players) (default false)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "palette": palette,

        "even_rows_fix": even_rows_fix,

    }))



def mov_text(

    height: int | None = None,

) -> FFMpegEncoderOption:
    """


    Args:
        height: Frame height, usually video height (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

        "height": height,

    }))



def srt(

) -> FFMpegEncoderOption:
    """
    (codec subrip)


    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def subrip(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def text(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def ttml(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def webvtt(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))



def xsub(

) -> FFMpegEncoderOption:
    """



    Returns:
        the set codec options
    """
    return FFMpegEncoderOption(merge({

    }))






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































