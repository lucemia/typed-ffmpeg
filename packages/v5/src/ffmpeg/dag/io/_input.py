# NOTE: this file is auto-generated, do not modify
"""
Input node.
"""



from pathlib import Path
from typing import Any


from ...types import Binary, Boolean, Color, Dictionary, Double, Duration, Flags, Float, Func, Image_size, Int, Int64, Pix_fmt, Rational, Sample_fmt, String, Time, Video_rate

from ..factory import filter_node_factory

from ...utils.frozendict import FrozenDict, merge
from ...utils.typing import override
from ...schema import Default, StreamType, Auto, FFMpegOptionGroup
from ...common.schema import FFMpegFilterDef
from ...options.framesync import FFMpegFrameSyncOption
from ...options.timeline import FFMpegTimelineOption

from ...options.codec import FFMpegAVCodecContextEncoderOption, FFMpegAVCodecContextDecoderOption


from ...options.format import FFMpegAVFormatContextEncoderOption, FFMpegAVFormatContextDecoderOption


from ...streams.av import AVStream

from ...streams.channel_layout import CHANNEL_LAYOUT
from ...codecs.schema import FFMpegEncoderOption, FFMpegDecoderOption
from ...formats.schema import FFMpegMuxerOption, FFMpegDemuxerOption

from ..nodes import FilterableStream, FilterNode, OutputStream, OutputNode, InputNode, GlobalNode, GlobalStream


from ...streams.video import VideoStream


from ...streams.audio import AudioStream



def input(
    filename: str | Path,
    *,f: Func = None,c: Func = None,codec: Func = None,t: Func = None,to: Func = None,ss: Func = None,sseof: Func = None,seek_timestamp: Func = None,accurate_seek: Func = None,isync: Func = None,itsoffset: Func = None,itsscale: Func = None,re: Func = None,readrate: Func = None,bitexact: Func = None,tag: Func = None,reinit_filter: Func = None,dump_attachment: Func = None,stream_loop: Func = None,discard: Func = None,thread_queue_size: Func = None,find_stream_info: Func = None,r: Func = None,s: Func = None,pix_fmt: Func = None,vn: Func = None,vcodec: Func = None,top: Func = None,vtag: Func = None,hwaccel: Func = None,hwaccel_device: Func = None,hwaccel_output_format: Func = None,autorotate: Func = None,ar: Func = None,ac: Func = None,an: Func = None,acodec: Func = None,sample_fmt: Func = None,channel_layout: Func = None,ch_layout: Func = None,guess_layout_max: Func = None,sn: Func = None,scodec: Func = None,fix_sub_duration: Func = None,canvas_size: Func = None,bsf: Func = None,dcodec: Func = None,dn: Func = None,decoder_options: FFMpegDecoderOption | None = None,
    demuxer_options: FFMpegDemuxerOption | None = None,
    format_options: FFMpegAVFormatContextDecoderOption | None = None,
    codec_options: FFMpegAVCodecContextDecoderOption | None = None,
    extra_options: dict[str, Any] | None = None,
) -> AVStream:
    """
    Input file URL (ffmpeg ``-i`` option)

    Args:
        filename: Input file URL
        f: force format
        c: codec name
        codec: codec name
        t: record or transcode \"duration\" seconds of audio/video
        to: record or transcode stop time
        ss: set the start time offset
        sseof: set the start time offset relative to EOF
        seek_timestamp: enable/disable seeking by timestamp with -ss
        accurate_seek: enable/disable accurate seeking with -ss
        isync: Indicate the input index for sync reference
        itsoffset: set the input ts offset
        itsscale: set the input ts scale
        re: read input at native frame rate; equivalent to -readrate 1
        readrate: read input at specified rate
        bitexact: bitexact mode
        tag: force codec tag/fourcc
        reinit_filter: reinit filtergraph on input parameter changes
        dump_attachment: extract an attachment into a file
        stream_loop: set number of times input stream shall be looped
        discard: discard
        thread_queue_size: set the maximum number of queued packets from the demuxer
        find_stream_info: read and decode the streams to fill missing information with heuristics
        r: set frame rate (Hz value, fraction or abbreviation)
        s: set frame size (WxH or abbreviation)
        pix_fmt: set pixel format
        vn: disable video
        vcodec: force video codec ('copy' to copy stream)
        top: top=1/bottom=0/auto=-1 field first
        vtag: force video tag/fourcc
        hwaccel: use HW accelerated decoding
        hwaccel_device: select a device for HW acceleration
        hwaccel_output_format: select output format used with HW accelerated decoding
        autorotate: automatically insert correct rotate filters
        ar: set audio sampling rate (in Hz)
        ac: set number of audio channels
        an: disable audio
        acodec: force audio codec ('copy' to copy stream)
        sample_fmt: set sample format
        channel_layout: set channel layout
        ch_layout: set channel layout
        guess_layout_max: set the maximum number of channels to try to guess the channel layout
        sn: disable subtitle
        scodec: force subtitle codec ('copy' to copy stream)
        fix_sub_duration: fix subtitles duration
        canvas_size: set canvas size (WxH or abbreviation)
        bsf: A comma-separated list of bitstream filters
        dcodec: force data codec ('copy' to copy stream)
        dn: disable data
        decoder_options: ffmpeg's decoder options
        demuxer_options: ffmpeg's demuxer options
        format_options: ffmpeg's AVFormatContext options
        codec_options: ffmpeg's AVCodecContext options
        extra_options: ffmpeg's input file options

    Returns:
        Input stream

    Examples:
    ```py
    >>> input('input.mp4')
    <AVStream:input.mp4:0>
    ```
    """
    return InputNode(
        filename=str(filename),
        kwargs=merge({































                "f": f,






                "c": c,

                "codec": codec,






                "t": t,

                "to": to,


                "ss": ss,

                "sseof": sseof,

                "seek_timestamp": seek_timestamp,

                "accurate_seek": accurate_seek,

                "isync": isync,

                "itsoffset": itsoffset,

                "itsscale": itsscale,












                "re": re,

                "readrate": readrate,










                "bitexact": bitexact,









                "tag": tag,







                "reinit_filter": reinit_filter,









                "dump_attachment": dump_attachment,

                "stream_loop": stream_loop,



                "discard": discard,


                "thread_queue_size": thread_queue_size,

                "find_stream_info": find_stream_info,



                "r": r,


                "s": s,


                "pix_fmt": pix_fmt,

                "vn": vn,


                "vcodec": vcodec,












                "top": top,

                "vtag": vtag,








                "hwaccel": hwaccel,

                "hwaccel_device": hwaccel_device,

                "hwaccel_output_format": hwaccel_output_format,


                "autorotate": autorotate,




                "ar": ar,

                "ac": ac,

                "an": an,

                "acodec": acodec,



                "sample_fmt": sample_fmt,

                "channel_layout": channel_layout,

                "ch_layout": ch_layout,


                "guess_layout_max": guess_layout_max,

                "sn": sn,

                "scodec": scodec,


                "fix_sub_duration": fix_sub_duration,

                "canvas_size": canvas_size,






                "bsf": bsf,









                "dcodec": dcodec,

                "dn": dn,





        }, decoder_options, demuxer_options, format_options, codec_options, extra_options )
    ).stream()
