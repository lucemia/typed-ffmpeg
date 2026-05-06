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
    filename: str | Path,f: String = None,c: String = None,codec: String = None,pre: String = None,map: Func = None,map_metadata: String = None,map_chapters: Int = None,t: Time = None,to: Time = None,fs: Int64 = None,ss: Time = None,timestamp: Func = None,metadata: String = None,program: String = None,stream_group: String = None,dframes: Int64 = None,target: Func = None,shortest: Boolean = None,shortest_buf_duration: Float = None,bitexact: Boolean = None,copyinkf: Boolean = None,copypriorss: Int = None,frames: Int64 = None,tag: String = None,q: Func = None,qscale: Func = None,profile: Func = None,filter: String = None,filter_script: String = None,attach: Func = None,disposition: String = None,thread_queue_size: Int = None,bits_per_raw_sample: Int = None,stats_enc_pre: String = None,stats_enc_post: String = None,stats_mux_pre: String = None,stats_enc_pre_fmt: String = None,stats_enc_post_fmt: String = None,stats_mux_pre_fmt: String = None,vframes: Int64 = None,r: String = None,fpsmax: String = None,s: String = None,aspect: String = None,pix_fmt: String = None,vn: Boolean = None,rc_override: String = None,vcodec: String = None,timecode: Func = None,_pass: Int = None,passlogfile: String = None,vf: String = None,intra_matrix: String = None,inter_matrix: String = None,chroma_intra_matrix: String = None,vtag: String = None,fps_mode: String = None,force_fps: Boolean = None,streamid: Func = None,force_key_frames: String = None,b: Func = None,autoscale: Boolean = None,fix_sub_duration_heartbeat: Boolean = None,aframes: Int64 = None,aq: Func = None,ar: Int = None,ac: Int = None,an: Boolean = None,acodec: String = None,ab: Func = None,apad: String = None,atag: String = None,sample_fmt: String = None,channel_layout: String = None,ch_layout: String = None,af: String = None,sn: Boolean = None,scodec: String = None,stag: String = None,muxdelay: Float = None,muxpreload: Float = None,sdp_file: Func = None,time_base: String = None,enc_time_base: String = None,bsf: String = None,apre: String = None,vpre: String = None,spre: String = None,fpre: String = None,max_muxing_queue_size: Int = None,muxing_queue_data_threshold: Int = None,dcodec: String = None,dn: Boolean = None,top: Int = None,encoder_options: FFMpegEncoderOption | None = None,
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
        f: force container format (auto-detected otherwise)
        c: select encoder/decoder ('copy' to copy stream without reencoding)
        codec: alias for -c (select encoder/decoder)
        pre: preset name
        map: set input stream mapping
        map_metadata: set metadata information of outfile from infile
        map_chapters: set chapters mapping
        t: stop transcoding after specified duration
        to: stop transcoding after specified time is reached
        fs: set the limit file size in bytes
        ss: start transcoding at specified time
        timestamp: set the recording timestamp ('now' to set the current time)
        metadata: add metadata
        program: add program with specified streams
        stream_group: add stream group with specified streams and group type-specific arguments
        dframes: set the number of data frames to output
        target: specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50\ "with optional prefixes "pal-", "ntsc-" or "film-")
        shortest: finish encoding within shortest input
        shortest_buf_duration: maximum buffering duration (in seconds) for the -shortest option
        bitexact: bitexact mode
        copyinkf: copy initial non-keyframes
        copypriorss: copy or discard frames before start time
        frames: set the number of frames to output
        tag: force codec tag/fourcc
        q: use fixed quality scale (VBR)
        qscale: use fixed quality scale (VBR)
        profile: set profile
        filter: apply specified filters to audio/video
        filter_script: deprecated, use -/filter
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
        r: override input framerate/convert to given output framerate (Hz value, fraction or abbreviation)
        fpsmax: set max frame rate (Hz value, fraction or abbreviation)
        s: set frame size (WxH or abbreviation)
        aspect: set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)
        pix_fmt: set pixel format
        vn: disable video
        rc_override: rate control override for specific intervals
        vcodec: alias for -c:v (select encoder/decoder for video streams)
        timecode: set initial TimeCode value.
        _pass: select the pass number (1 to 3)
        passlogfile: select two pass log file name prefix
        vf: alias for -filter:v (apply filters to video streams)
        intra_matrix: specify intra matrix coeffs
        inter_matrix: specify inter matrix coeffs
        chroma_intra_matrix: specify intra matrix coeffs
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
        acodec: alias for -c:a (select encoder/decoder for audio streams)
        ab: alias for -b:a (select bitrate for audio streams)
        apad: audio pad
        atag: force audio tag/fourcc
        sample_fmt: set sample format
        channel_layout: set channel layout
        ch_layout: set channel layout
        af: alias for -filter:a (apply filters to audio streams)
        sn: disable subtitle
        scodec: alias for -c:s (select encoder/decoder for subtitle streams)
        stag: force subtitle tag/fourcc
        muxdelay: set the maximum demux-decode delay
        muxpreload: set the initial demux-decode delay
        sdp_file: specify a file in which to print sdp information
        time_base: set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)
        enc_time_base: set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5). two special values are defined - 0 = use frame rate (video) or sample rate (audio),-1 = match source time base
        bsf: A comma-separated list of bitstream filters
        apre: set the audio options to the indicated preset
        vpre: set the video options to the indicated preset
        spre: set the subtitle options to the indicated preset
        fpre: set options from indicated preset file
        max_muxing_queue_size: maximum number of packets that can be buffered while waiting for all streams to initialize
        muxing_queue_data_threshold: set the threshold after which max_muxing_queue_size is taken into account
        dcodec: alias for -c:d (select encoder/decoder for data streams)
        dn: disable data
        top: deprecated, use the setfield video filter
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

                "map_metadata": map_metadata,

                "map_chapters": map_chapters,

                "t": t,

                "to": to,

                "fs": fs,

                "ss": ss,







                "timestamp": timestamp,

                "metadata": metadata,

                "program": program,

                "stream_group": stream_group,

                "dframes": dframes,












                "target": target,





                "shortest": shortest,

                "shortest_buf_duration": shortest_buf_duration,

                "bitexact": bitexact,





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

                "apad": apad,

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

                "apre": apre,

                "vpre": vpre,

                "spre": spre,

                "fpre": fpre,

                "max_muxing_queue_size": max_muxing_queue_size,

                "muxing_queue_data_threshold": muxing_queue_data_threshold,

                "dcodec": dcodec,

                "dn": dn,





                "top": top,




        }, encoder_options, muxer_options, format_options, codec_options, extra_options )
    ).stream()
