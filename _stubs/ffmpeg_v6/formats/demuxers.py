# NOTE: this file is auto-generated, do not modify
"""
FFmpeg demuxers.
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
from ..codecs.schema import FFMpegEncoderOption, FFMpegDecoderOption
from .schema import FFMpegMuxerOption, FFMpegDemuxerOption

from ..dag.nodes import FilterableStream, FilterNode, OutputStream, OutputNode, InputNode, GlobalNode, GlobalStream


from ..streams.video import VideoStream


from ..streams.audio import AudioStream













































































































































































































































































































































































def _3dostr(

) -> FFMpegDemuxerOption:
    """
    3dostr


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def _4xm(

) -> FFMpegDemuxerOption:
    """
    4xm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def aa(

    aa_fixed_key: str | None = None,

) -> FFMpegDemuxerOption:
    """
    aa

    Args:
        aa_fixed_key: Fixed key used for handling Audible AA files

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "aa_fixed_key": aa_fixed_key,

    }))



def aac(

) -> FFMpegDemuxerOption:
    """
    aac


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def aax(

) -> FFMpegDemuxerOption:
    """
    aax


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ac3(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    ac3

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def ac4(

) -> FFMpegDemuxerOption:
    """
    ac4


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ace(

) -> FFMpegDemuxerOption:
    """
    ace


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def acm(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    acm

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def act(

) -> FFMpegDemuxerOption:
    """
    ACT Voice file format


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def adf(

    linespeed: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    adf

    Args:
        linespeed: set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
        video_size: set video size, such as 640x480 or hd720.
        framerate: set framerate (frames per second) (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "linespeed": linespeed,

        "video_size": video_size,

        "framerate": framerate,

    }))



def adp(

) -> FFMpegDemuxerOption:
    """
    adp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ads(

) -> FFMpegDemuxerOption:
    """
    ads


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def adx(

) -> FFMpegDemuxerOption:
    """
    adx


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def aea(

) -> FFMpegDemuxerOption:
    """
    aea


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def afc(

) -> FFMpegDemuxerOption:
    """
    afc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def aiff(

) -> FFMpegDemuxerOption:
    """
    aiff


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def aix(

) -> FFMpegDemuxerOption:
    """
    aix


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def alaw(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    alaw

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def alias_pix(

    pattern_type: int | None| Literal["glob_sequence", "glob", "sequence", "none"] = None,

    start_number: int | None = None,

    start_number_range: int | None = None,

    ts_from_file: int | None| Literal["none", "sec", "ns"] = None,

    export_path_metadata: bool | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    alias_pix

    Args:
        pattern_type: set pattern type (from 0 to INT_MAX) (default 4)
        start_number: set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
        start_number_range: set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
        ts_from_file: set frame timestamp from file's one (from 0 to 2) (default none)
        export_path_metadata: enable metadata containing input path information (default false)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "pattern_type": pattern_type,

        "start_number": start_number,

        "start_number_range": start_number_range,

        "ts_from_file": ts_from_file,

        "export_path_metadata": export_path_metadata,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def alp(

) -> FFMpegDemuxerOption:
    """
    alp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def alsa(

    sample_rate: int | None = None,

    channels: int | None = None,

) -> FFMpegDemuxerOption:
    """
    alsa

    Args:
        sample_rate: (from 1 to INT_MAX) (default 48000)
        channels: (from 1 to INT_MAX) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

    }))



def amr(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    amr

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def amrnb(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    amrnb

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def amrwb(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    amrwb

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def anm(

) -> FFMpegDemuxerOption:
    """
    anm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def apac(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    apac

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def apc(

) -> FFMpegDemuxerOption:
    """
    apc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ape(

) -> FFMpegDemuxerOption:
    """
    ape


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def apm(

) -> FFMpegDemuxerOption:
    """
    apm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def apng(

    ignore_loop: bool | None = None,

    max_fps: int | None = None,

    default_fps: int | None = None,

) -> FFMpegDemuxerOption:
    """
    apng

    Args:
        ignore_loop: ignore loop setting (default true)
        max_fps: maximum framerate (0 is no limit) (from 0 to INT_MAX) (default 0)
        default_fps: default framerate (0 is as fast as possible) (from 0 to INT_MAX) (default 15)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "ignore_loop": ignore_loop,

        "max_fps": max_fps,

        "default_fps": default_fps,

    }))



def aptx(

    sample_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    aptx

    Args:
        sample_rate: (from 0 to INT_MAX) (default 48000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

    }))



def aptx_hd(

    sample_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    aptx_hd

    Args:
        sample_rate: (from 0 to INT_MAX) (default 48000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

    }))



def aqtitle(

    subfps: str | None = None,

) -> FFMpegDemuxerOption:
    """
    aqtitle

    Args:
        subfps: set the movie frame rate (from 0 to INT_MAX) (default 25/1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "subfps": subfps,

    }))



def argo_asf(

) -> FFMpegDemuxerOption:
    """
    argo_asf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def argo_brp(

) -> FFMpegDemuxerOption:
    """
    argo_brp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def argo_cvg(

) -> FFMpegDemuxerOption:
    """
    argo_cvg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def asf(

    no_resync_search: bool | None = None,

    export_xmp: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    asf

    Args:
        no_resync_search: Don't try to resynchronize by looking for a certain optional start code (default false)
        export_xmp: Export full XMP metadata (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "no_resync_search": no_resync_search,

        "export_xmp": export_xmp,

    }))



def asf_o(

) -> FFMpegDemuxerOption:
    """
    asf_o


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ass(

) -> FFMpegDemuxerOption:
    """
    ass


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ast(

) -> FFMpegDemuxerOption:
    """
    ast


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def au(

) -> FFMpegDemuxerOption:
    """
    au


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def av1(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    av1

    Args:
        framerate: (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def avi(

    use_odml: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    avi

    Args:
        use_odml: use odml index (default true)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "use_odml": use_odml,

    }))



def avr(

) -> FFMpegDemuxerOption:
    """
    avr


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def avs(

) -> FFMpegDemuxerOption:
    """
    avs


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def avs2(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    avs2

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def avs3(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    avs3

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def bethsoftvid(

) -> FFMpegDemuxerOption:
    """
    bethsoftvid


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bfi(

) -> FFMpegDemuxerOption:
    """
    bfi


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bfstm(

) -> FFMpegDemuxerOption:
    """
    bfstm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bin(

    linespeed: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    bin

    Args:
        linespeed: set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
        video_size: set video size, such as 640x480 or hd720.
        framerate: set framerate (frames per second) (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "linespeed": linespeed,

        "video_size": video_size,

        "framerate": framerate,

    }))



def bink(

) -> FFMpegDemuxerOption:
    """
    bink


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def binka(

) -> FFMpegDemuxerOption:
    """
    binka


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bit(

) -> FFMpegDemuxerOption:
    """
    bit


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bitpacked(

    pixel_format: str | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    bitpacked

    Args:
        pixel_format: set pixel format (default "yuv420p")
        video_size: set frame size
        framerate: set frame rate (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "pixel_format": pixel_format,

        "video_size": video_size,

        "framerate": framerate,

    }))



def bmp_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    bmp_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def bmv(

) -> FFMpegDemuxerOption:
    """
    bmv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def boa(

) -> FFMpegDemuxerOption:
    """
    boa


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def bonk(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    bonk

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def brender_pix(

    pattern_type: int | None| Literal["glob_sequence", "glob", "sequence", "none"] = None,

    start_number: int | None = None,

    start_number_range: int | None = None,

    ts_from_file: int | None| Literal["none", "sec", "ns"] = None,

    export_path_metadata: bool | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    brender_pix

    Args:
        pattern_type: set pattern type (from 0 to INT_MAX) (default 4)
        start_number: set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
        start_number_range: set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
        ts_from_file: set frame timestamp from file's one (from 0 to 2) (default none)
        export_path_metadata: enable metadata containing input path information (default false)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "pattern_type": pattern_type,

        "start_number": start_number,

        "start_number_range": start_number_range,

        "ts_from_file": ts_from_file,

        "export_path_metadata": export_path_metadata,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def brstm(

) -> FFMpegDemuxerOption:
    """
    brstm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def c93(

) -> FFMpegDemuxerOption:
    """
    c93


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def caf(

) -> FFMpegDemuxerOption:
    """
    caf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def cavsvideo(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    cavsvideo

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def cdg(

) -> FFMpegDemuxerOption:
    """
    cdg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def cdxl(

    sample_rate: int | None = None,

    frame_rate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    cdxl

    Args:
        sample_rate: (from 8000 to INT_MAX) (default 11025)
        frame_rate: (default "15")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "frame_rate": frame_rate,

    }))



def cine(

) -> FFMpegDemuxerOption:
    """
    cine


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def codec2(

    frames_per_packet: int | None = None,

) -> FFMpegDemuxerOption:
    """
    codec2

    Args:
        frames_per_packet: Number of frames to read at a time. Higher = faster decoding, lower granularity (from 1 to INT_MAX) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frames_per_packet": frames_per_packet,

    }))



def codec2raw(

    mode: int | None| Literal["3200", "2400", "1600", "1400", "1300", "1200", "700", "700B", "700C"] = None,

    frames_per_packet: int | None = None,

) -> FFMpegDemuxerOption:
    """
    codec2raw

    Args:
        mode: codec2 mode [mandatory] (from -1 to 8) (default -1)
        frames_per_packet: Number of frames to read at a time. Higher = faster decoding, lower granularity (from 1 to INT_MAX) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "mode": mode,

        "frames_per_packet": frames_per_packet,

    }))



def concat(

    safe: bool | None = None,

    auto_convert: bool | None = None,

    segment_time_metadata: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    concat

    Args:
        safe: enable safe mode (default true)
        auto_convert: automatically convert bitstream format (default true)
        segment_time_metadata: output file segment start time and duration as packet metadata (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "safe": safe,

        "auto_convert": auto_convert,

        "segment_time_metadata": segment_time_metadata,

    }))



def cri_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    cri_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def data(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    data

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def daud(

) -> FFMpegDemuxerOption:
    """
    daud


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dcstr(

) -> FFMpegDemuxerOption:
    """
    dcstr


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dds_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    dds_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def derf(

) -> FFMpegDemuxerOption:
    """
    derf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dfa(

) -> FFMpegDemuxerOption:
    """
    dfa


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dfpwm(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    dfpwm

    Args:
        sample_rate: (from 0 to INT_MAX) (default 48000)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def dhav(

) -> FFMpegDemuxerOption:
    """
    dhav


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dirac(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    dirac

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def dnxhd(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    dnxhd

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def dpx_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    dpx_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def dsf(

) -> FFMpegDemuxerOption:
    """
    dsf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dsicin(

) -> FFMpegDemuxerOption:
    """
    dsicin


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dss(

) -> FFMpegDemuxerOption:
    """
    dss


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dts(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    dts

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def dtshd(

) -> FFMpegDemuxerOption:
    """
    dtshd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dv(

) -> FFMpegDemuxerOption:
    """
    dv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def dvbsub(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    dvbsub

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def dvbtxt(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    dvbtxt

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def dxa(

) -> FFMpegDemuxerOption:
    """
    dxa


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ea(

    merge_alpha: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    ea

    Args:
        merge_alpha: return VP6 alpha in the main video stream (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "merge_alpha": merge_alpha,

    }))



def ea_cdata(

) -> FFMpegDemuxerOption:
    """
    ea_cdata


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def eac3(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    eac3

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def epaf(

) -> FFMpegDemuxerOption:
    """
    epaf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def evc(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    evc

    Args:
        framerate: (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def exr_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    exr_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def f32be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    f32be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def f32le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    f32le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def f64be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    f64be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def f64le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    f64le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def fbdev(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    fbdev

    Args:
        framerate: (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def ffmetadata(

) -> FFMpegDemuxerOption:
    """
    ffmetadata


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def film_cpk(

) -> FFMpegDemuxerOption:
    """
    film_cpk


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def filmstrip(

) -> FFMpegDemuxerOption:
    """
    filmstrip


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def fits(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    fits

    Args:
        framerate: set the framerate (default "1")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def flac(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    flac

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def flic(

) -> FFMpegDemuxerOption:
    """
    flic


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def flv(

    flv_metadata: bool | None = None,

    flv_full_metadata: bool | None = None,

    flv_ignore_prevtag: bool | None = None,

    missing_streams: int | None = None,

) -> FFMpegDemuxerOption:
    """
    flv

    Args:
        flv_metadata: Allocate streams according to the onMetaData array (default false)
        flv_full_metadata: Dump full metadata of the onMetadata (default false)
        flv_ignore_prevtag: Ignore the Size of previous tag (default false)
        missing_streams: (from 0 to 255) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "flv_metadata": flv_metadata,

        "flv_full_metadata": flv_full_metadata,

        "flv_ignore_prevtag": flv_ignore_prevtag,

        "missing_streams": missing_streams,

    }))



def frm(

) -> FFMpegDemuxerOption:
    """
    frm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def fsb(

) -> FFMpegDemuxerOption:
    """
    fsb


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def fwse(

) -> FFMpegDemuxerOption:
    """
    fwse


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def g722(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    g722

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def g723_1(

) -> FFMpegDemuxerOption:
    """
    g723_1


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def g726(

    code_size: int | None = None,

    sample_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    g726

    Args:
        code_size: Bits per G.726 code (from 2 to 5) (default 4)
        sample_rate: (from 0 to INT_MAX) (default 8000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "code_size": code_size,

        "sample_rate": sample_rate,

    }))



def g726le(

    code_size: int | None = None,

    sample_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    g726le

    Args:
        code_size: Bits per G.726 code (from 2 to 5) (default 4)
        sample_rate: (from 0 to INT_MAX) (default 8000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "code_size": code_size,

        "sample_rate": sample_rate,

    }))



def g729(

    bit_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    g729

    Args:
        bit_rate: (from 0 to INT_MAX) (default 8000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "bit_rate": bit_rate,

    }))



def gdv(

) -> FFMpegDemuxerOption:
    """
    gdv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def gem_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    gem_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def genh(

) -> FFMpegDemuxerOption:
    """
    genh


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def gif(

    min_delay: int | None = None,

    max_gif_delay: int | None = None,

    default_delay: int | None = None,

    ignore_loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    gif

    Args:
        min_delay: minimum valid delay between frames (in hundredths of second) (from 0 to 6000) (default 2)
        max_gif_delay: maximum valid delay between frames (in hundredths of seconds) (from 0 to 65535) (default 65535)
        default_delay: default delay between frames (in hundredths of second) (from 0 to 6000) (default 10)
        ignore_loop: ignore loop setting (netscape extension) (default true)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "min_delay": min_delay,

        "max_gif_delay": max_gif_delay,

        "default_delay": default_delay,

        "ignore_loop": ignore_loop,

    }))



def gif_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    gif_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def gsm(

    sample_rate: int | None = None,

) -> FFMpegDemuxerOption:
    """
    gsm

    Args:
        sample_rate: (from 1 to 6.50753e+07) (default 8000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

    }))



def gxf(

) -> FFMpegDemuxerOption:
    """
    gxf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def h261(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    h261

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def h263(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    h263

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def h264(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    h264

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def hca(

    hca_lowkey: int | None = None,

    hca_highkey: int | None = None,

    hca_subkey: int | None = None,

) -> FFMpegDemuxerOption:
    """
    hca

    Args:
        hca_lowkey: Low key used for handling CRI HCA files (from 0 to UINT32_MAX) (default 0)
        hca_highkey: High key used for handling CRI HCA files (from 0 to UINT32_MAX) (default 0)
        hca_subkey: Subkey used for handling CRI HCA files (from 0 to 65535) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "hca_lowkey": hca_lowkey,

        "hca_highkey": hca_highkey,

        "hca_subkey": hca_subkey,

    }))



def hcom(

) -> FFMpegDemuxerOption:
    """
    hcom


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def hdr_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    hdr_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def hevc(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    hevc

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def hls(

    live_start_index: int | None = None,

    prefer_x_start: bool | None = None,

    allowed_extensions: str | None = None,

    max_reload: int | None = None,

    m3u8_hold_counters: int | None = None,

    http_persistent: bool | None = None,

    http_multiple: bool | None = None,

    http_seekable: bool | None = None,

    seg_format_options: str | None = None,

    seg_max_retry: int | None = None,

) -> FFMpegDemuxerOption:
    """
    hls

    Args:
        live_start_index: segment index to start live streams at (negative values are from the end) (from INT_MIN to INT_MAX) (default -3)
        prefer_x_start: prefer to use #EXT-X-START if it's in playlist instead of live_start_index (default false)
        allowed_extensions: List of file extensions that hls is allowed to access (default "3gp,aac,avi,ac3,eac3,flac,mkv,m3u8,m4a,m4s,m4v,mpg,mov,mp2,mp3,mp4,mpeg,mpegts,ogg,ogv,oga,ts,vob,wav")
        max_reload: Maximum number of times a insufficient list is attempted to be reloaded (from 0 to INT_MAX) (default 3)
        m3u8_hold_counters: The maximum number of times to load m3u8 when it refreshes without new segments (from 0 to INT_MAX) (default 1000)
        http_persistent: Use persistent HTTP connections (default true)
        http_multiple: Use multiple HTTP connections for fetching segments (default auto)
        http_seekable: Use HTTP partial requests, 0 = disable, 1 = enable, -1 = auto (default auto)
        seg_format_options: Set options for segment demuxer
        seg_max_retry: Maximum number of times to reload a segment on error. (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "live_start_index": live_start_index,

        "prefer_x_start": prefer_x_start,

        "allowed_extensions": allowed_extensions,

        "max_reload": max_reload,

        "m3u8_hold_counters": m3u8_hold_counters,

        "http_persistent": http_persistent,

        "http_multiple": http_multiple,

        "http_seekable": http_seekable,

        "seg_format_options": seg_format_options,

        "seg_max_retry": seg_max_retry,

    }))



def hnm(

) -> FFMpegDemuxerOption:
    """
    hnm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ico(

) -> FFMpegDemuxerOption:
    """
    ico


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def idcin(

) -> FFMpegDemuxerOption:
    """
    idcin


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def idf(

    linespeed: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    idf

    Args:
        linespeed: set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
        video_size: set video size, such as 640x480 or hd720.
        framerate: set framerate (frames per second) (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "linespeed": linespeed,

        "video_size": video_size,

        "framerate": framerate,

    }))



def iff(

) -> FFMpegDemuxerOption:
    """
    iff


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ifv(

) -> FFMpegDemuxerOption:
    """
    ifv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ilbc(

) -> FFMpegDemuxerOption:
    """
    ilbc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def image2(

    pattern_type: int | None| Literal["glob_sequence", "glob", "sequence", "none"] = None,

    start_number: int | None = None,

    start_number_range: int | None = None,

    ts_from_file: int | None| Literal["none", "sec", "ns"] = None,

    export_path_metadata: bool | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    image2

    Args:
        pattern_type: set pattern type (from 0 to INT_MAX) (default 4)
        start_number: set first number in the sequence (from INT_MIN to INT_MAX) (default 0)
        start_number_range: set range for looking at the first sequence number (from 1 to INT_MAX) (default 5)
        ts_from_file: set frame timestamp from file's one (from 0 to 2) (default none)
        export_path_metadata: enable metadata containing input path information (default false)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "pattern_type": pattern_type,

        "start_number": start_number,

        "start_number_range": start_number_range,

        "ts_from_file": ts_from_file,

        "export_path_metadata": export_path_metadata,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def image2pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    image2pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def ingenient(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    ingenient

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def ipmovie(

) -> FFMpegDemuxerOption:
    """
    ipmovie


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ipu(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    ipu

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def ircam(

) -> FFMpegDemuxerOption:
    """
    ircam


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def iss(

) -> FFMpegDemuxerOption:
    """
    iss


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def iv8(

) -> FFMpegDemuxerOption:
    """
    iv8


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ivf(

) -> FFMpegDemuxerOption:
    """
    ivf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ivr(

) -> FFMpegDemuxerOption:
    """
    ivr


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def j2k_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    j2k_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def jacosub(

) -> FFMpegDemuxerOption:
    """
    jacosub


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def jpeg_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    jpeg_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def jpegls_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    jpegls_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def jpegxl_anim(

) -> FFMpegDemuxerOption:
    """
    jpegxl_anim


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def jpegxl_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    jpegxl_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def jv(

) -> FFMpegDemuxerOption:
    """
    jv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def kux(

    flv_metadata: bool | None = None,

    flv_full_metadata: bool | None = None,

    flv_ignore_prevtag: bool | None = None,

    missing_streams: int | None = None,

) -> FFMpegDemuxerOption:
    """
    kux

    Args:
        flv_metadata: Allocate streams according to the onMetaData array (default false)
        flv_full_metadata: Dump full metadata of the onMetadata (default false)
        flv_ignore_prevtag: Ignore the Size of previous tag (default false)
        missing_streams: (from 0 to 255) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "flv_metadata": flv_metadata,

        "flv_full_metadata": flv_full_metadata,

        "flv_ignore_prevtag": flv_ignore_prevtag,

        "missing_streams": missing_streams,

    }))



def kvag(

) -> FFMpegDemuxerOption:
    """
    kvag


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def laf(

) -> FFMpegDemuxerOption:
    """
    laf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def lavfi(

    graph: str | None = None,

    graph_file: str | None = None,

    dumpgraph: str | None = None,

) -> FFMpegDemuxerOption:
    """
    lavfi

    Args:
        graph: set libavfilter graph
        graph_file: set libavfilter graph filename
        dumpgraph: dump graph to stderr

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "graph": graph,

        "graph_file": graph_file,

        "dumpgraph": dumpgraph,

    }))



def live_flv(

    flv_metadata: bool | None = None,

    flv_full_metadata: bool | None = None,

    flv_ignore_prevtag: bool | None = None,

    missing_streams: int | None = None,

) -> FFMpegDemuxerOption:
    """
    live_flv

    Args:
        flv_metadata: Allocate streams according to the onMetaData array (default false)
        flv_full_metadata: Dump full metadata of the onMetadata (default false)
        flv_ignore_prevtag: Ignore the Size of previous tag (default false)
        missing_streams: (from 0 to 255) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "flv_metadata": flv_metadata,

        "flv_full_metadata": flv_full_metadata,

        "flv_ignore_prevtag": flv_ignore_prevtag,

        "missing_streams": missing_streams,

    }))



def lmlm4(

) -> FFMpegDemuxerOption:
    """
    lmlm4


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def loas(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    loas

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def lrc(

) -> FFMpegDemuxerOption:
    """
    lrc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def luodat(

) -> FFMpegDemuxerOption:
    """
    luodat


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def lvf(

) -> FFMpegDemuxerOption:
    """
    lvf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def lxf(

) -> FFMpegDemuxerOption:
    """
    lxf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def m4v(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    m4v

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def mca(

) -> FFMpegDemuxerOption:
    """
    mca


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mcc(

) -> FFMpegDemuxerOption:
    """
    mcc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mgsts(

) -> FFMpegDemuxerOption:
    """
    mgsts


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def microdvd(

    subfps: str | None = None,

) -> FFMpegDemuxerOption:
    """
    microdvd

    Args:
        subfps: set the movie frame rate fallback (from 0 to INT_MAX) (default 0/1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "subfps": subfps,

    }))



def mjpeg(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mjpeg

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def mjpeg_2000(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mjpeg_2000

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def mlp(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mlp

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def mlv(

) -> FFMpegDemuxerOption:
    """
    mlv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mm(

) -> FFMpegDemuxerOption:
    """
    mm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mmf(

) -> FFMpegDemuxerOption:
    """
    mmf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mods(

) -> FFMpegDemuxerOption:
    """
    mods


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def moflex(

) -> FFMpegDemuxerOption:
    """
    moflex


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mp3(

    usetoc: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    mp3

    Args:
        usetoc: use table of contents (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "usetoc": usetoc,

    }))



def mpc(

) -> FFMpegDemuxerOption:
    """
    mpc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mpc8(

) -> FFMpegDemuxerOption:
    """
    mpc8


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mpeg(

) -> FFMpegDemuxerOption:
    """
    mpeg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mpegts(

    resync_size: int | None = None,

    fix_teletext_pts: bool | None = None,

    ts_packetsize: int | None = None,

    scan_all_pmts: bool | None = None,

    skip_unknown_pmt: bool | None = None,

    merge_pmt_versions: bool | None = None,

    max_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mpegts

    Args:
        resync_size: set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
        fix_teletext_pts: try to fix pts values of dvb teletext streams (default true)
        ts_packetsize: output option carrying the raw packet size (from 0 to 0) (default 0)
        scan_all_pmts: scan and combine all PMTs (default auto)
        skip_unknown_pmt: skip PMTs for programs not advertised in the PAT (default false)
        merge_pmt_versions: re-use streams when PMT's version/pids change (default false)
        max_packet_size: maximum size of emitted packet (from 1 to 1.07374e+09) (default 204800)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "resync_size": resync_size,

        "fix_teletext_pts": fix_teletext_pts,

        "ts_packetsize": ts_packetsize,

        "scan_all_pmts": scan_all_pmts,

        "skip_unknown_pmt": skip_unknown_pmt,

        "merge_pmt_versions": merge_pmt_versions,

        "max_packet_size": max_packet_size,

    }))



def mpegtsraw(

    resync_size: int | None = None,

    compute_pcr: bool | None = None,

    ts_packetsize: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mpegtsraw

    Args:
        resync_size: set size limit for looking up a new synchronization (from 0 to INT_MAX) (default 65536)
        compute_pcr: compute exact PCR for each transport stream packet (default false)
        ts_packetsize: output option carrying the raw packet size (from 0 to 0) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "resync_size": resync_size,

        "compute_pcr": compute_pcr,

        "ts_packetsize": ts_packetsize,

    }))



def mpegvideo(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    mpegvideo

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def mpjpeg(

    strict_mime_boundary: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    mpjpeg

    Args:
        strict_mime_boundary: require MIME boundaries match (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "strict_mime_boundary": strict_mime_boundary,

    }))



def mpl2(

) -> FFMpegDemuxerOption:
    """
    mpl2


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mpsub(

) -> FFMpegDemuxerOption:
    """
    mpsub


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def msf(

) -> FFMpegDemuxerOption:
    """
    msf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def msnwctcp(

) -> FFMpegDemuxerOption:
    """
    msnwctcp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def msp(

) -> FFMpegDemuxerOption:
    """
    msp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mtaf(

) -> FFMpegDemuxerOption:
    """
    mtaf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mtv(

) -> FFMpegDemuxerOption:
    """
    mtv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mulaw(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    mulaw

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def musx(

) -> FFMpegDemuxerOption:
    """
    musx


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mv(

) -> FFMpegDemuxerOption:
    """
    mv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mvi(

) -> FFMpegDemuxerOption:
    """
    mvi


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def mxf(

    eia608_extract: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    mxf

    Args:
        eia608_extract: extract eia 608 captions from s436m track (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "eia608_extract": eia608_extract,

    }))



def mxg(

) -> FFMpegDemuxerOption:
    """
    mxg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nc(

) -> FFMpegDemuxerOption:
    """
    nc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nistsphere(

) -> FFMpegDemuxerOption:
    """
    nistsphere


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nsp(

) -> FFMpegDemuxerOption:
    """
    nsp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nsv(

) -> FFMpegDemuxerOption:
    """
    nsv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nut(

) -> FFMpegDemuxerOption:
    """
    nut


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def nuv(

) -> FFMpegDemuxerOption:
    """
    nuv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def obu(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    obu

    Args:
        framerate: (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def ogg(

) -> FFMpegDemuxerOption:
    """
    ogg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def oma(

) -> FFMpegDemuxerOption:
    """
    oma


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def osq(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    osq

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def oss(

    sample_rate: int | None = None,

    channels: int | None = None,

) -> FFMpegDemuxerOption:
    """
    oss

    Args:
        sample_rate: (from 1 to INT_MAX) (default 48000)
        channels: (from 1 to INT_MAX) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

    }))



def paf(

) -> FFMpegDemuxerOption:
    """
    paf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def pam_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pam_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pbm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pbm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pcx_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pcx_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pdv(

) -> FFMpegDemuxerOption:
    """
    pdv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def pfm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pfm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pgm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pgm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pgmyuv_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pgmyuv_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pgx_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pgx_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def phm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    phm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def photocd_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    photocd_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pictor_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    pictor_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pjs(

) -> FFMpegDemuxerOption:
    """
    pjs


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def pmp(

) -> FFMpegDemuxerOption:
    """
    pmp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def png_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    png_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def pp_bnk(

) -> FFMpegDemuxerOption:
    """
    pp_bnk


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ppm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    ppm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def psd_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    psd_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def psxstr(

) -> FFMpegDemuxerOption:
    """
    psxstr


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def pva(

) -> FFMpegDemuxerOption:
    """
    pva


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def pvf(

) -> FFMpegDemuxerOption:
    """
    pvf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def qcp(

) -> FFMpegDemuxerOption:
    """
    qcp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def qdraw_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    qdraw_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def qoi_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    qoi_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def r3d(

) -> FFMpegDemuxerOption:
    """
    r3d


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rawvideo(

    pixel_format: str | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    rawvideo

    Args:
        pixel_format: set pixel format (default "yuv420p")
        video_size: set frame size
        framerate: set frame rate (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "pixel_format": pixel_format,

        "video_size": video_size,

        "framerate": framerate,

    }))



def realtext(

) -> FFMpegDemuxerOption:
    """
    realtext


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def redspark(

) -> FFMpegDemuxerOption:
    """
    redspark


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rka(

) -> FFMpegDemuxerOption:
    """
    rka


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rl2(

) -> FFMpegDemuxerOption:
    """
    rl2


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rm(

) -> FFMpegDemuxerOption:
    """
    rm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def roq(

) -> FFMpegDemuxerOption:
    """
    roq


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rpl(

) -> FFMpegDemuxerOption:
    """
    rpl


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rsd(

) -> FFMpegDemuxerOption:
    """
    rsd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rso(

) -> FFMpegDemuxerOption:
    """
    rso


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def rtp(

    rtp_flags: str | None = None,

    listen_timeout: str | None = None,

    localaddr: str | None = None,

    allowed_media_types: str | None = None,

    reorder_queue_size: int | None = None,

    buffer_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    rtp

    Args:
        rtp_flags: set RTP flags (default 0)
        listen_timeout: set maximum timeout (in seconds) to wait for incoming connections (default 10)
        localaddr: local address
        allowed_media_types: set media types to accept from the server (default video+audio+data+subtitle)
        reorder_queue_size: set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
        buffer_size: Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "rtp_flags": rtp_flags,

        "listen_timeout": listen_timeout,

        "localaddr": localaddr,

        "allowed_media_types": allowed_media_types,

        "reorder_queue_size": reorder_queue_size,

        "buffer_size": buffer_size,

    }))



def rtsp(

    initial_pause: bool | None = None,

    rtsp_transport: str | None = None,

    rtsp_flags: str | None = None,

    allowed_media_types: str | None = None,

    min_port: int | None = None,

    max_port: int | None = None,

    listen_timeout: int | None = None,

    timeout: int | None = None,

    reorder_queue_size: int | None = None,

    buffer_size: int | None = None,

    user_agent: str | None = None,

) -> FFMpegDemuxerOption:
    """
    rtsp

    Args:
        initial_pause: do not start playing the stream immediately (default false)
        rtsp_transport: set RTSP transport protocols (default 0)
        rtsp_flags: set RTSP flags (default 0)
        allowed_media_types: set media types to accept from the server (default video+audio+data+subtitle)
        min_port: set minimum local UDP port (from 0 to 65535) (default 5000)
        max_port: set maximum local UDP port (from 0 to 65535) (default 65000)
        listen_timeout: set maximum timeout (in seconds) to wait for incoming connections (-1 is infinite, imply flag listen) (from INT_MIN to INT_MAX) (default -1)
        timeout: set timeout (in microseconds) of socket I/O operations (from INT_MIN to I64_MAX) (default 0)
        reorder_queue_size: set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
        buffer_size: Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
        user_agent: override User-Agent header (default "Lavf60.16.100")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "initial_pause": initial_pause,

        "rtsp_transport": rtsp_transport,

        "rtsp_flags": rtsp_flags,

        "allowed_media_types": allowed_media_types,

        "min_port": min_port,

        "max_port": max_port,

        "listen_timeout": listen_timeout,

        "timeout": timeout,

        "reorder_queue_size": reorder_queue_size,

        "buffer_size": buffer_size,

        "user_agent": user_agent,

    }))



def s16be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s16be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s16le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s16le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s24be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s24be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s24le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s24le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s32be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s32be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s32le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s32le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def s337m(

) -> FFMpegDemuxerOption:
    """
    s337m


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def s8(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    s8

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def sami(

) -> FFMpegDemuxerOption:
    """
    sami


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sap(

) -> FFMpegDemuxerOption:
    """
    sap


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sbc(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    sbc

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def sbg(

    sample_rate: int | None = None,

    max_file_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    sbg

    Args:
        sample_rate: (from 0 to INT_MAX) (default 0)
        max_file_size: (from 0 to INT_MAX) (default 5000000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "max_file_size": max_file_size,

    }))



def scc(

) -> FFMpegDemuxerOption:
    """
    scc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def scd(

) -> FFMpegDemuxerOption:
    """
    scd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sdns(

) -> FFMpegDemuxerOption:
    """
    sdns


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sdp(

    sdp_flags: str | None = None,

    listen_timeout: str | None = None,

    localaddr: str | None = None,

    allowed_media_types: str | None = None,

    reorder_queue_size: int | None = None,

    buffer_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    sdp

    Args:
        sdp_flags: SDP flags (default 0)
        listen_timeout: set maximum timeout (in seconds) to wait for incoming connections (default 10)
        localaddr: local address
        allowed_media_types: set media types to accept from the server (default video+audio+data+subtitle)
        reorder_queue_size: set number of packets to buffer for handling of reordered packets (from -1 to INT_MAX) (default -1)
        buffer_size: Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sdp_flags": sdp_flags,

        "listen_timeout": listen_timeout,

        "localaddr": localaddr,

        "allowed_media_types": allowed_media_types,

        "reorder_queue_size": reorder_queue_size,

        "buffer_size": buffer_size,

    }))



def sdr2(

) -> FFMpegDemuxerOption:
    """
    sdr2


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sds(

) -> FFMpegDemuxerOption:
    """
    sds


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sdx(

) -> FFMpegDemuxerOption:
    """
    sdx


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ser(

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    ser

    Args:
        framerate: set frame rate (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

    }))



def sga(

) -> FFMpegDemuxerOption:
    """
    sga


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sgi_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    sgi_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def shn(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    shn

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def siff(

) -> FFMpegDemuxerOption:
    """
    siff


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def simbiosis_imx(

) -> FFMpegDemuxerOption:
    """
    simbiosis_imx


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sln(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    sln

    Args:
        sample_rate: (from 0 to INT_MAX) (default 8000)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def smjpeg(

) -> FFMpegDemuxerOption:
    """
    smjpeg


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def smk(

) -> FFMpegDemuxerOption:
    """
    smk


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def smush(

) -> FFMpegDemuxerOption:
    """
    smush


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sndio(

    sample_rate: int | None = None,

    channels: int | None = None,

) -> FFMpegDemuxerOption:
    """
    sndio

    Args:
        sample_rate: (from 1 to INT_MAX) (default 48000)
        channels: (from 1 to INT_MAX) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

    }))



def sol(

) -> FFMpegDemuxerOption:
    """
    sol


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sox(

) -> FFMpegDemuxerOption:
    """
    sox


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def spdif(

) -> FFMpegDemuxerOption:
    """
    spdif


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def srt(

) -> FFMpegDemuxerOption:
    """
    srt


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def stl(

) -> FFMpegDemuxerOption:
    """
    stl


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def subviewer(

) -> FFMpegDemuxerOption:
    """
    subviewer


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def subviewer1(

) -> FFMpegDemuxerOption:
    """
    subviewer1


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def sunrast_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    sunrast_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def sup(

) -> FFMpegDemuxerOption:
    """
    sup


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def svag(

) -> FFMpegDemuxerOption:
    """
    svag


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def svg_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    svg_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def svs(

) -> FFMpegDemuxerOption:
    """
    svs


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def swf(

) -> FFMpegDemuxerOption:
    """
    swf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def tak(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    tak

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def tedcaptions(

    start_time: int | None = None,

) -> FFMpegDemuxerOption:
    """
    tedcaptions

    Args:
        start_time: set the start time (offset) of the subtitles, in ms (from I64_MIN to I64_MAX) (default 15000)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "start_time": start_time,

    }))



def thp(

) -> FFMpegDemuxerOption:
    """
    thp


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def tiertexseq(

) -> FFMpegDemuxerOption:
    """
    tiertexseq


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def tiff_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    tiff_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def tmv(

) -> FFMpegDemuxerOption:
    """
    tmv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def truehd(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    truehd

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def tta(

) -> FFMpegDemuxerOption:
    """
    tta


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def tty(

    chars_per_frame: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    tty

    Args:
        chars_per_frame: (from 1 to INT_MAX) (default 6000)
        video_size: A string describing frame size, such as 640x480 or hd720.
        framerate: (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "chars_per_frame": chars_per_frame,

        "video_size": video_size,

        "framerate": framerate,

    }))



def txd(

) -> FFMpegDemuxerOption:
    """
    txd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def ty(

) -> FFMpegDemuxerOption:
    """
    ty


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def u16be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u16be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u16le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u16le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u24be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u24be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u24le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u24le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u32be(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u32be

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u32le(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u32le

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def u8(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    u8

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def usm(

) -> FFMpegDemuxerOption:
    """
    usm


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def v210(

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    v210

    Args:
        video_size: set frame size
        framerate: set frame rate (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "video_size": video_size,

        "framerate": framerate,

    }))



def v210x(

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    v210x

    Args:
        video_size: set frame size
        framerate: set frame rate (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "video_size": video_size,

        "framerate": framerate,

    }))



def vag(

) -> FFMpegDemuxerOption:
    """
    vag


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vbn_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    vbn_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def vc1(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    vc1

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def vc1test(

) -> FFMpegDemuxerOption:
    """
    vc1test


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vidc(

    sample_rate: int | None = None,

    channels: int | None = None,

    ch_layout: str | None = None,

) -> FFMpegDemuxerOption:
    """
    vidc

    Args:
        sample_rate: (from 0 to INT_MAX) (default 44100)
        channels: (from 0 to INT_MAX) (default 1)
        ch_layout:

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sample_rate": sample_rate,

        "channels": channels,

        "ch_layout": ch_layout,

    }))



def vividas(

) -> FFMpegDemuxerOption:
    """
    vividas


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vivo(

) -> FFMpegDemuxerOption:
    """
    vivo


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vmd(

) -> FFMpegDemuxerOption:
    """
    vmd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vobsub(

    sub_name: str | None = None,

) -> FFMpegDemuxerOption:
    """
    vobsub

    Args:
        sub_name: URI for .sub file

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "sub_name": sub_name,

    }))



def voc(

) -> FFMpegDemuxerOption:
    """
    voc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vpk(

) -> FFMpegDemuxerOption:
    """
    vpk


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vplayer(

) -> FFMpegDemuxerOption:
    """
    vplayer


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vqf(

) -> FFMpegDemuxerOption:
    """
    vqf


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def vvc(

    framerate: str | None = None,

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    vvc

    Args:
        framerate: (default "25")
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "framerate": framerate,

        "raw_packet_size": raw_packet_size,

    }))



def w64(

    max_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    w64

    Args:
        max_size: max size of single packet (from 1024 to 4.1943e+06) (default 4096)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "max_size": max_size,

    }))



def wady(

) -> FFMpegDemuxerOption:
    """
    wady


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wav(

    ignore_length: bool | None = None,

    max_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    wav

    Args:
        ignore_length: Ignore length (default false)
        max_size: max size of single packet (from 1024 to 4.1943e+06) (default 4096)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "ignore_length": ignore_length,

        "max_size": max_size,

    }))



def wavarc(

) -> FFMpegDemuxerOption:
    """
    wavarc


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wc3movie(

) -> FFMpegDemuxerOption:
    """
    wc3movie


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def webm_dash_manifest(

    live: bool | None = None,

    bandwidth: int | None = None,

) -> FFMpegDemuxerOption:
    """
    webm_dash_manifest

    Args:
        live: flag indicating that the input is a live file that only has the headers. (default false)
        bandwidth: bandwidth of this stream to be specified in the DASH manifest. (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "live": live,

        "bandwidth": bandwidth,

    }))



def webp_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    webp_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def webvtt(

    kind: int | None| Literal["subtitles", "captions", "descriptions", "metadata"] = None,

) -> FFMpegDemuxerOption:
    """
    webvtt

    Args:
        kind: Set kind of WebVTT track (from 0 to INT_MAX) (default subtitles)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "kind": kind,

    }))



def wsaud(

) -> FFMpegDemuxerOption:
    """
    wsaud


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wsd(

    raw_packet_size: int | None = None,

) -> FFMpegDemuxerOption:
    """
    wsd

    Args:
        raw_packet_size: (from 1 to INT_MAX) (default 1024)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "raw_packet_size": raw_packet_size,

    }))



def wsvqa(

) -> FFMpegDemuxerOption:
    """
    wsvqa


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wtv(

) -> FFMpegDemuxerOption:
    """
    wtv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wv(

) -> FFMpegDemuxerOption:
    """
    wv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def wve(

) -> FFMpegDemuxerOption:
    """
    wve


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def x11grab(

    window_id: int | None = None,

    x: int | None = None,

    y: int | None = None,

    grab_x: int | None = None,

    grab_y: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

    draw_mouse: int | None = None,

    follow_mouse: int | None| Literal["centered"] = None,

    show_region: int | None = None,

    region_border: int | None = None,

    select_region: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    x11grab

    Args:
        window_id: Window to capture. (from 0 to UINT32_MAX) (default 0)
        x: Initial x coordinate. (from 0 to INT_MAX) (default 0)
        y: Initial y coordinate. (from 0 to INT_MAX) (default 0)
        grab_x: Initial x coordinate. (from 0 to INT_MAX) (default 0)
        grab_y: Initial y coordinate. (from 0 to INT_MAX) (default 0)
        video_size: A string describing frame size, such as 640x480 or hd720.
        framerate: (default "ntsc")
        draw_mouse: Draw the mouse pointer. (from 0 to 1) (default 1)
        follow_mouse: Move the grabbing region when the mouse pointer reaches within specified amount of pixels to the edge of region. (from -1 to INT_MAX) (default 0)
        show_region: Show the grabbing region. (from 0 to 1) (default 0)
        region_border: Set the region border thickness. (from 1 to 128) (default 3)
        select_region: Select the grabbing region graphically using the pointer. (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "window_id": window_id,

        "x": x,

        "y": y,

        "grab_x": grab_x,

        "grab_y": grab_y,

        "video_size": video_size,

        "framerate": framerate,

        "draw_mouse": draw_mouse,

        "follow_mouse": follow_mouse,

        "show_region": show_region,

        "region_border": region_border,

        "select_region": select_region,

    }))



def xa(

) -> FFMpegDemuxerOption:
    """
    xa


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def xbin(

    linespeed: int | None = None,

    video_size: str | None = None,

    framerate: str | None = None,

) -> FFMpegDemuxerOption:
    """
    xbin

    Args:
        linespeed: set simulated line speed (bytes per second) (from 1 to INT_MAX) (default 6000)
        video_size: set video size, such as 640x480 or hd720.
        framerate: set framerate (frames per second) (default "25")

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "linespeed": linespeed,

        "video_size": video_size,

        "framerate": framerate,

    }))



def xbm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    xbm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def xmd(

) -> FFMpegDemuxerOption:
    """
    xmd


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def xmv(

) -> FFMpegDemuxerOption:
    """
    xmv


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def xpm_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    xpm_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def xvag(

) -> FFMpegDemuxerOption:
    """
    xvag


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def xwd_pipe(

    frame_size: int | None = None,

    framerate: str | None = None,

    pixel_format: str | None = None,

    video_size: str | None = None,

    loop: bool | None = None,

) -> FFMpegDemuxerOption:
    """
    xwd_pipe

    Args:
        frame_size: force frame size in bytes (from 0 to INT_MAX) (default 0)
        framerate: set the video framerate (default "25")
        pixel_format: set video pixel format
        video_size: set video size
        loop: force loop over input file sequence (default false)

    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

        "frame_size": frame_size,

        "framerate": framerate,

        "pixel_format": pixel_format,

        "video_size": video_size,

        "loop": loop,

    }))



def xwma(

) -> FFMpegDemuxerOption:
    """
    xwma


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def yop(

) -> FFMpegDemuxerOption:
    """
    yop


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))



def yuv4mpegpipe(

) -> FFMpegDemuxerOption:
    """
    yuv4mpegpipe


    Returns:
        the set codec options
    """
    return FFMpegDemuxerOption(merge({

    }))
