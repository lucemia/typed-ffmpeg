# NOTE: this file is auto-generated, do not modify
"""
Output node.
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



def output(
    *streams: FilterableStream,
    filename: str | Path,f: Func = None,c: Func = None,codec: Func = None,pre: Func = None,map: Func = None,map_channel: Func = None,map_metadata: Func = None,map_chapters: Func = None,t: Func = None,to: Func = None,fs: Func = None,ss: Func = None,timestamp: Func = None,metadata: Func = None,program: Func = None,dframes: Func = None,target: Func = None,shortest: Func = None,shortest_buf_duration: Func = None,bitexact: Func = None,apad: Func = None,copyinkf: Func = None,copypriorss: Func = None,frames: Func = None,tag: Func = None,q: Func = None,qscale: Func = None,profile: Func = None,filter: Func = None,filter_script: Func = None,attach: Func = None,disposition: Func = None,thread_queue_size: Func = None,bits_per_raw_sample: Func = None,stats_enc_pre: Func = None,stats_enc_post: Func = None,stats_mux_pre: Func = None,stats_enc_pre_fmt: Func = None,stats_enc_post_fmt: Func = None,stats_mux_pre_fmt: Func = None,vframes: Func = None,r: Func = None,fpsmax: Func = None,s: Func = None,aspect: Func = None,pix_fmt: Func = None,vn: Func = None,rc_override: Func = None,vcodec: Func = None,timecode: Func = None,_pass: Func = None,passlogfile: Func = None,vf: Func = None,intra_matrix: Func = None,inter_matrix: Func = None,chroma_intra_matrix: Func = None,top: Func = None,vtag: Func = None,fps_mode: Func = None,force_fps: Func = None,streamid: Func = None,force_key_frames: Func = None,b: Func = None,autoscale: Func = None,fix_sub_duration_heartbeat: Func = None,aframes: Func = None,aq: Func = None,ar: Func = None,ac: Func = None,an: Func = None,acodec: Func = None,ab: Func = None,atag: Func = None,sample_fmt: Func = None,channel_layout: Func = None,ch_layout: Func = None,af: Func = None,sn: Func = None,scodec: Func = None,stag: Func = None,muxdelay: Func = None,muxpreload: Func = None,sdp_file: Func = None,time_base: Func = None,enc_time_base: Func = None,bsf: Func = None,absf: Func = None,vbsf: Func = None,apre: Func = None,vpre: Func = None,spre: Func = None,fpre: Func = None,max_muxing_queue_size: Func = None,muxing_queue_data_threshold: Func = None,dcodec: Func = None,dn: Func = None,encoder_options: FFMpegEncoderOption | None = None,
    muxer_options: FFMpegMuxerOption | None = None,
    format_options: FFMpegAVFormatContextEncoderOption | None = None,
    codec_options: FFMpegAVCodecContextEncoderOption | None = None,
    extra_options: dict[str, Any] | None = None,
) -> OutputStream:
    """
    Output file URL

    Args:
        *streams: the streams to output
        filename: the filename to output to
        f: force format
        c: codec name
        codec: codec name
        pre: preset name
        map: set input stream mapping
        map_channel: map an audio channel from one stream to another (deprecated)
        map_metadata: set metadata information of outfile from infile
        map_chapters: set chapters mapping
        t: record or transcode "duration" seconds of audio/video
        to: record or transcode stop time
        fs: set the limit file size in bytes
        ss: set the start time offset
        timestamp: set the recording timestamp ('now' to set the current time)
        metadata: add metadata
        program: add program with specified streams
        dframes: set the number of data frames to output
        target: specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50\ "with optional prefixes "pal-", "ntsc-" or "film-")
        shortest: finish encoding within shortest input
        shortest_buf_duration: maximum buffering duration (in seconds) for the -shortest option
        bitexact: bitexact mode
        apad: audio pad
        copyinkf: copy initial non-keyframes
        copypriorss: copy or discard frames before start time
        frames: set the number of frames to output
        tag: force codec tag/fourcc
        q: use fixed quality scale (VBR)
        qscale: use fixed quality scale (VBR)
        profile: set profile
        filter: set stream filtergraph
        filter_script: read stream filtergraph description from a file
        attach: add an attachment to the output file
        disposition: disposition
        thread_queue_size: set the maximum number of queued packets from the demuxer
        bits_per_raw_sample: set the number of bits per raw sample
        stats_enc_pre: write encoding stats before encoding
        stats_enc_post: write encoding stats after encoding
        stats_mux_pre: write packets stats before muxing
        stats_enc_pre_fmt: format of the stats written with -stats_enc_pre
        stats_enc_post_fmt: format of the stats written with -stats_enc_post
        stats_mux_pre_fmt: format of the stats written with -stats_mux_pre
        vframes: set the number of video frames to output
        r: set frame rate (Hz value, fraction or abbreviation)
        fpsmax: set max frame rate (Hz value, fraction or abbreviation)
        s: set frame size (WxH or abbreviation)
        aspect: set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
        pix_fmt: set pixel format
        vn: disable video
        rc_override: rate control override for specific intervals
        vcodec: force video codec ('copy' to copy stream)
        timecode: set initial TimeCode value.
        _pass: select the pass number (1 to 3)
        passlogfile: select two pass log file name prefix
        vf: set video filters
        intra_matrix: specify intra matrix coeffs
        inter_matrix: specify inter matrix coeffs
        chroma_intra_matrix: specify intra matrix coeffs
        top: deprecated, use the setfield video filter
        vtag: force video tag/fourcc
        fps_mode: set framerate mode for matching video streams; overrides vsync
        force_fps: force the selected framerate, disable the best supported framerate selection
        streamid: set the value of an outfile streamid
        force_key_frames: force key frames at specified timestamps
        b: video bitrate (please use -b:v)
        autoscale: automatically insert a scale filter at the end of the filter graph
        fix_sub_duration_heartbeat: set this video output stream to be a heartbeat stream for fix_sub_duration, according to which subtitles should be split at random access points
        aframes: set the number of audio frames to output
        aq: set audio quality (codec-specific)
        ar: set audio sampling rate (in Hz)
        ac: set number of audio channels
        an: disable audio
        acodec: force audio codec ('copy' to copy stream)
        ab: audio bitrate (please use -b:a)
        atag: force audio tag/fourcc
        sample_fmt: set sample format
        channel_layout: set channel layout
        ch_layout: set channel layout
        af: set audio filters
        sn: disable subtitle
        scodec: force subtitle codec ('copy' to copy stream)
        stag: force subtitle tag/fourcc
        muxdelay: set the maximum demux-decode delay
        muxpreload: set the initial demux-decode delay
        sdp_file: specify a file in which to print sdp information
        time_base: set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)
        enc_time_base: set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5). two special values are defined - 0 = use frame rate (video) or sample rate (audio),-1 = match source time base
        bsf: A comma-separated list of bitstream filters
        absf: deprecated
        vbsf: deprecated
        apre: set the audio options to the indicated preset
        vpre: set the video options to the indicated preset
        spre: set the subtitle options to the indicated preset
        fpre: set options from indicated preset file
        max_muxing_queue_size: maximum number of packets that can be buffered while waiting for all streams to initialize
        muxing_queue_data_threshold: set the threshold after which max_muxing_queue_size is taken into account
        dcodec: force data codec ('copy' to copy stream)
        dn: disable data
        encoder_options: ffmpeg's encoder options
        muxer_options: ffmpeg's muxer options
        format_options: ffmpeg's AVFormatContext options
        codec_options: ffmpeg's AVCodecContext options
        extra_options: the arguments for the output

    Returns:
        the output stream
    """

    return OutputNode(
        inputs=streams,
        filename=str(filename),
        kwargs=merge({































                "f": f,






                "c": c,

                "codec": codec,

                "pre": pre,

                "map": map,

                "map_channel": map_channel,

                "map_metadata": map_metadata,

                "map_chapters": map_chapters,

                "t": t,

                "to": to,

                "fs": fs,

                "ss": ss,







                "timestamp": timestamp,

                "metadata": metadata,

                "program": program,

                "dframes": dframes,











                "target": target,







                "shortest": shortest,

                "shortest_buf_duration": shortest_buf_duration,

                "bitexact": bitexact,

                "apad": apad,





                "copyinkf": copyinkf,

                "copypriorss": copypriorss,

                "frames": frames,

                "tag": tag,

                "q": q,

                "qscale": qscale,

                "profile": profile,

                "filter": filter,


                "filter_script": filter_script,









                "attach": attach,






                "disposition": disposition,

                "thread_queue_size": thread_queue_size,


                "bits_per_raw_sample": bits_per_raw_sample,

                "stats_enc_pre": stats_enc_pre,

                "stats_enc_post": stats_enc_post,

                "stats_mux_pre": stats_mux_pre,

                "stats_enc_pre_fmt": stats_enc_pre_fmt,

                "stats_enc_post_fmt": stats_enc_post_fmt,

                "stats_mux_pre_fmt": stats_mux_pre_fmt,

                "vframes": vframes,

                "r": r,

                "fpsmax": fpsmax,

                "s": s,

                "aspect": aspect,

                "pix_fmt": pix_fmt,




                "vn": vn,

                "rc_override": rc_override,

                "vcodec": vcodec,

                "timecode": timecode,

                "pass": _pass,

                "passlogfile": passlogfile,





                "vf": vf,

                "intra_matrix": intra_matrix,

                "inter_matrix": inter_matrix,

                "chroma_intra_matrix": chroma_intra_matrix,

                "top": top,

                "vtag": vtag,


                "fps_mode": fps_mode,

                "force_fps": force_fps,

                "streamid": streamid,

                "force_key_frames": force_key_frames,

                "b": b,






                "autoscale": autoscale,

                "fix_sub_duration_heartbeat": fix_sub_duration_heartbeat,

                "aframes": aframes,

                "aq": aq,

                "ar": ar,

                "ac": ac,

                "an": an,

                "acodec": acodec,

                "ab": ab,

                "atag": atag,

                "sample_fmt": sample_fmt,

                "channel_layout": channel_layout,

                "ch_layout": ch_layout,

                "af": af,


                "sn": sn,

                "scodec": scodec,

                "stag": stag,



                "muxdelay": muxdelay,

                "muxpreload": muxpreload,

                "sdp_file": sdp_file,

                "time_base": time_base,

                "enc_time_base": enc_time_base,

                "bsf": bsf,

                "absf": absf,

                "vbsf": vbsf,

                "apre": apre,

                "vpre": vpre,

                "spre": spre,

                "fpre": fpre,

                "max_muxing_queue_size": max_muxing_queue_size,

                "muxing_queue_data_threshold": muxing_queue_data_threshold,

                "dcodec": dcodec,

                "dn": dn,





        }, encoder_options, muxer_options, format_options, codec_options, extra_options )
    ).stream()
