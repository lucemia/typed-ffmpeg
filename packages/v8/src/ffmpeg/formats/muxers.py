# NOTE: this file is auto-generated, do not modify
"""
FFmpeg muxers.
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





def _3g2(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    3GP2 (3GPP2 file format)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def _3gp(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    3GP (3GPP file format)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def a64(

) -> FFMpegMuxerOption:
    """
    a64 - video for Commodore 64


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ac3(

) -> FFMpegMuxerOption:
    """
    raw AC-3


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ac4(

    write_crc: bool | None = None,

) -> FFMpegMuxerOption:
    """
    raw AC-4

    Args:
        write_crc: enable checksum (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "write_crc": write_crc,

    }))



def adts(

    write_id3v2: bool | None = None,

    write_apetag: bool | None = None,

    write_mpeg2: bool | None = None,

) -> FFMpegMuxerOption:
    """
    ADTS AAC (Advanced Audio Coding)

    Args:
        write_id3v2: Enable ID3v2 tag writing (default false)
        write_apetag: Enable APE tag writing (default false)
        write_mpeg2: Set MPEG version to MPEG-2 (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "write_id3v2": write_id3v2,

        "write_apetag": write_apetag,

        "write_mpeg2": write_mpeg2,

    }))



def adx(

) -> FFMpegMuxerOption:
    """
    CRI ADX


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def aea(

) -> FFMpegMuxerOption:
    """
    MD STUDIO audio


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def aiff(

    write_id3v2: bool | None = None,

    id3v2_version: int | None = None,

) -> FFMpegMuxerOption:
    """
    Audio IFF

    Args:
        write_id3v2: Enable ID3 tags writing. (default false)
        id3v2_version: Select ID3v2 version to write. Currently 3 and 4 are supported. (from 3 to 4) (default 4)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "write_id3v2": write_id3v2,

        "id3v2_version": id3v2_version,

    }))



def alaw(

) -> FFMpegMuxerOption:
    """
    PCM A-law


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def alp(

    type: int | None| Literal["auto", "tun", "pcm"] = None,

) -> FFMpegMuxerOption:
    """
    LEGO Racers ALP

    Args:
        type: set file type (from 0 to 2) (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "type": type,

    }))



def amr(

) -> FFMpegMuxerOption:
    """
    3GPP AMR


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def amv(

) -> FFMpegMuxerOption:
    """
    AMV


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def apm(

) -> FFMpegMuxerOption:
    """
    Ubisoft Rayman 2 APM


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def apng(

    plays: int | None = None,

    final_delay: str | None = None,

) -> FFMpegMuxerOption:
    """
    Animated Portable Network Graphics

    Args:
        plays: Number of times to play the output: 0 - infinite loop, 1 - no loop (from 0 to 65535) (default 1)
        final_delay: Force delay after the last frame (from 0 to 65535) (default 0/1)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "plays": plays,

        "final_delay": final_delay,

    }))



def aptx(

) -> FFMpegMuxerOption:
    """
    raw aptX (Audio Processing Technology for Bluetooth)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def aptx_hd(

) -> FFMpegMuxerOption:
    """
    raw aptX HD (Audio Processing Technology for Bluetooth)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def apv(

) -> FFMpegMuxerOption:
    """
    APV raw bitstream


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def argo_asf(

    version_major: int | None = None,

    version_minor: int | None = None,

    name: str | None = None,

) -> FFMpegMuxerOption:
    """
    Argonaut Games ASF

    Args:
        version_major: override file major version (from 0 to 65535) (default 2)
        version_minor: override file minor version (from 0 to 65535) (default 1)
        name: embedded file name (max 8 characters)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "version_major": version_major,

        "version_minor": version_minor,

        "name": name,

    }))



def argo_cvg(

    skip_rate_check: bool | None = None,

    loop: bool | None = None,

    reverb: bool | None = None,

) -> FFMpegMuxerOption:
    """
    Argonaut Games CVG

    Args:
        skip_rate_check: skip sample rate check (default false)
        loop: set loop flag (default false)
        reverb: set reverb flag (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "skip_rate_check": skip_rate_check,

        "loop": loop,

        "reverb": reverb,

    }))



def asf(

    packet_size: int | None = None,

) -> FFMpegMuxerOption:
    """
    ASF (Advanced / Active Streaming Format)

    Args:
        packet_size: Packet size (from 100 to 65536) (default 3200)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "packet_size": packet_size,

    }))



def asf_stream(

    packet_size: int | None = None,

) -> FFMpegMuxerOption:
    """
    ASF (Advanced / Active Streaming Format)

    Args:
        packet_size: Packet size (from 100 to 65536) (default 3200)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "packet_size": packet_size,

    }))



def ass(

    ignore_readorder: bool | None = None,

) -> FFMpegMuxerOption:
    """
    SSA (SubStation Alpha) subtitle

    Args:
        ignore_readorder: write events immediately, even if they're out-of-order (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "ignore_readorder": ignore_readorder,

    }))



def ast(

    loopstart: int | None = None,

    loopend: int | None = None,

) -> FFMpegMuxerOption:
    """
    AST (Audio Stream)

    Args:
        loopstart: Loopstart position in milliseconds. (from -1 to INT_MAX) (default -1)
        loopend: Loopend position in milliseconds. (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "loopstart": loopstart,

        "loopend": loopend,

    }))



def au(

) -> FFMpegMuxerOption:
    """
    Sun AU


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def avi(

    reserve_index_space: int | None = None,

    write_channel_mask: bool | None = None,

    flipped_raw_rgb: bool | None = None,

) -> FFMpegMuxerOption:
    """
    AVI (Audio Video Interleaved)

    Args:
        reserve_index_space: reserve space (in bytes) at the beginning of the file for each stream index (from 0 to INT_MAX) (default 0)
        write_channel_mask: write channel mask into wave format header (default true)
        flipped_raw_rgb: Raw RGB bitmaps are stored bottom-up (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "reserve_index_space": reserve_index_space,

        "write_channel_mask": write_channel_mask,

        "flipped_raw_rgb": flipped_raw_rgb,

    }))



def avif(

    movie_timescale: int | None = None,

    loop: int | None = None,

) -> FFMpegMuxerOption:
    """
    AVIF

    Args:
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        loop: Number of times to loop animated AVIF: 0 - infinite loop (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "movie_timescale": movie_timescale,

        "loop": loop,

    }))



def avm2(

) -> FFMpegMuxerOption:
    """
    SWF (ShockWave Flash) (AVM2)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def avs2(

) -> FFMpegMuxerOption:
    """
    raw AVS2-P2/IEEE1857.4 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def avs3(

) -> FFMpegMuxerOption:
    """
    AVS3-P2/IEEE1857.10


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def bit(

) -> FFMpegMuxerOption:
    """
    G.729 BIT file format


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def caf(

) -> FFMpegMuxerOption:
    """
    Apple CAF (Core Audio Format)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def cavsvideo(

) -> FFMpegMuxerOption:
    """
    raw Chinese AVS (Audio Video Standard) video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def codec2(

) -> FFMpegMuxerOption:
    """
    codec2 .c2 muxer


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def codec2raw(

) -> FFMpegMuxerOption:
    """
    raw codec2 muxer


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def crc(

) -> FFMpegMuxerOption:
    """
    CRC testing


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dash(

    adaptation_sets: str | None = None,

    dash_segment_type: int | None| Literal["auto", "mp4", "webm"] = None,

    extra_window_size: int | None = None,

    format_options: str | None = None,

    frag_duration: str | None = None,

    frag_type: int | None| Literal["none", "every_frame", "duration", "pframes"] = None,

    global_sidx: bool | None = None,

    hls_master_name: str | None = None,

    hls_playlist: bool | None = None,

    http_opts: str | None = None,

    http_persistent: bool | None = None,

    http_user_agent: str | None = None,

    ignore_io_errors: bool | None = None,

    index_correction: bool | None = None,

    init_seg_name: str | None = None,

    ldash: bool | None = None,

    lhls: bool | None = None,

    master_m3u8_publish_rate: int | None = None,

    max_playback_rate: str | None = None,

    media_seg_name: str | None = None,

    method: str | None = None,

    min_playback_rate: str | None = None,

    mpd_profile: str | None = None,

    remove_at_exit: bool | None = None,

    seg_duration: str | None = None,

    single_file: bool | None = None,

    single_file_name: str | None = None,

    streaming: bool | None = None,

    target_latency: str | None = None,

    timeout: str | None = None,

    update_period: int | None = None,

    use_template: bool | None = None,

    use_timeline: bool | None = None,

    utc_timing_url: str | None = None,

    window_size: int | None = None,

    write_prft: bool | None = None,

) -> FFMpegMuxerOption:
    """
    DASH Muxer

    Args:
        adaptation_sets: Adaptation sets. Syntax: id=0,streams=0,1,2 id=1,streams=3,4 and so on
        dash_segment_type: set dash segment files type (from 0 to 2) (default auto)
        extra_window_size: number of segments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
        format_options: set list of options for the container format (mp4/webm) used for dash
        frag_duration: fragment duration (in seconds, fractional value can be set) (default 0)
        frag_type: set type of interval for fragments (from 0 to 3) (default none)
        global_sidx: Write global SIDX atom. Applicable only for single file, mp4 output, non-streaming mode (default false)
        hls_master_name: HLS master playlist name (default "master.m3u8")
        hls_playlist: Generate HLS playlist files(master.m3u8, media_%d.m3u8) (default false)
        http_opts: HTTP protocol options
        http_persistent: Use persistent HTTP connections (default false)
        http_user_agent: override User-Agent field in HTTP header
        ignore_io_errors: Ignore IO errors during open and write. Useful for long-duration runs with network output (default false)
        index_correction: Enable/Disable segment index correction logic (default false)
        init_seg_name: DASH-templated name to used for the initialization segment (default "init-stream$RepresentationID$.$ext$")
        ldash: Enable Low-latency dash. Constrains the value of a few elements (default false)
        lhls: Enable Low-latency HLS(Experimental). Adds #EXT-X-PREFETCH tag with current segment's URI (default false)
        master_m3u8_publish_rate: Publish master playlist every after this many segment intervals (from 0 to UINT32_MAX) (default 0)
        max_playback_rate: Set desired maximum playback rate (from 0.5 to 1.5) (default 1/1)
        media_seg_name: DASH-templated name to used for the media segments (default "chunk-stream$RepresentationID$-$Number%05d$.$ext$")
        method: set the HTTP method
        min_playback_rate: Set desired minimum playback rate (from 0.5 to 1.5) (default 1/1)
        mpd_profile: Set profiles. Elements and values used in the manifest may be constrained by them (default dash)
        remove_at_exit: remove all segments when finished (default false)
        seg_duration: segment duration (in seconds, fractional value can be set) (default 5)
        single_file: Store all segments in one file, accessed using byte ranges (default false)
        single_file_name: DASH-templated name to be used for baseURL. Implies storing all segments in one file, accessed using byte ranges
        streaming: Enable/Disable streaming mode of output. Each frame will be moof fragment (default false)
        target_latency: Set desired target latency for Low-latency dash (default 0)
        timeout: set timeout for socket I/O operations (default -0.000001)
        update_period: Set the mpd update interval (from 0 to I64_MAX) (default 0)
        use_template: Use SegmentTemplate instead of SegmentList (default true)
        use_timeline: Use SegmentTimeline in SegmentTemplate (default true)
        utc_timing_url: URL of the page that will return the UTC timestamp in ISO format
        window_size: number of segments kept in the manifest (from 0 to INT_MAX) (default 0)
        write_prft: Write producer reference time element (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "adaptation_sets": adaptation_sets,

        "dash_segment_type": dash_segment_type,

        "extra_window_size": extra_window_size,

        "format_options": format_options,

        "frag_duration": frag_duration,

        "frag_type": frag_type,

        "global_sidx": global_sidx,

        "hls_master_name": hls_master_name,

        "hls_playlist": hls_playlist,

        "http_opts": http_opts,

        "http_persistent": http_persistent,

        "http_user_agent": http_user_agent,

        "ignore_io_errors": ignore_io_errors,

        "index_correction": index_correction,

        "init_seg_name": init_seg_name,

        "ldash": ldash,

        "lhls": lhls,

        "master_m3u8_publish_rate": master_m3u8_publish_rate,

        "max_playback_rate": max_playback_rate,

        "media_seg_name": media_seg_name,

        "method": method,

        "min_playback_rate": min_playback_rate,

        "mpd_profile": mpd_profile,

        "remove_at_exit": remove_at_exit,

        "seg_duration": seg_duration,

        "single_file": single_file,

        "single_file_name": single_file_name,

        "streaming": streaming,

        "target_latency": target_latency,

        "timeout": timeout,

        "update_period": update_period,

        "use_template": use_template,

        "use_timeline": use_timeline,

        "utc_timing_url": utc_timing_url,

        "window_size": window_size,

        "write_prft": write_prft,

    }))



def data(

) -> FFMpegMuxerOption:
    """
    raw data


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def daud(

) -> FFMpegMuxerOption:
    """
    D-Cinema audio


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dfpwm(

) -> FFMpegMuxerOption:
    """
    raw DFPWM1a


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dirac(

) -> FFMpegMuxerOption:
    """
    raw Dirac


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dnxhd(

) -> FFMpegMuxerOption:
    """
    raw DNxHD (SMPTE VC-3)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dts(

) -> FFMpegMuxerOption:
    """
    raw DTS


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dv(

) -> FFMpegMuxerOption:
    """
    DV (Digital Video)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def dvd(

    muxrate: int | None = None,

    preload: int | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-2 PS (DVD VOB)

    Args:
        muxrate: mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
        preload: initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "muxrate": muxrate,

        "preload": preload,

    }))



def eac3(

) -> FFMpegMuxerOption:
    """
    raw E-AC-3


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def evc(

) -> FFMpegMuxerOption:
    """
    raw EVC video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def f32be(

) -> FFMpegMuxerOption:
    """
    PCM 32-bit floating-point big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def f32le(

) -> FFMpegMuxerOption:
    """
    PCM 32-bit floating-point little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def f4v(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    F4V Adobe Flash Video

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def f64be(

) -> FFMpegMuxerOption:
    """
    PCM 64-bit floating-point big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def f64le(

) -> FFMpegMuxerOption:
    """
    PCM 64-bit floating-point little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def d(

) -> FFMpegMuxerOption:
    """
    fbdev           Linux framebuffer


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ffmetadata(

) -> FFMpegMuxerOption:
    """
    FFmpeg metadata in text


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def fifo(

    attempt_recovery: bool | None = None,

    drop_pkts_on_overflow: bool | None = None,

    fifo_format: str | None = None,

    format_opts: str | None = None,

    max_recovery_attempts: int | None = None,

    queue_size: int | None = None,

    recovery_wait_streamtime: bool | None = None,

    recovery_wait_time: str | None = None,

    recover_any_error: bool | None = None,

    restart_with_keyframe: bool | None = None,

    timeshift: str | None = None,

) -> FFMpegMuxerOption:
    """
    FIFO queue pseudo-muxer

    Args:
        attempt_recovery: Attempt recovery in case of failure (default false)
        drop_pkts_on_overflow: Drop packets on fifo queue overflow not to block encoder (default false)
        fifo_format: Target muxer
        format_opts: Options to be passed to underlying muxer
        max_recovery_attempts: Maximal number of recovery attempts (from 0 to INT_MAX) (default 0)
        queue_size: Size of fifo queue (from 1 to INT_MAX) (default 60)
        recovery_wait_streamtime: Use stream time instead of real time while waiting for recovery (default false)
        recovery_wait_time: Waiting time between recovery attempts (default 5)
        recover_any_error: Attempt recovery regardless of type of the error (default false)
        restart_with_keyframe: Wait for keyframe when restarting output (default false)
        timeshift: Delay fifo output (default 0)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "attempt_recovery": attempt_recovery,

        "drop_pkts_on_overflow": drop_pkts_on_overflow,

        "fifo_format": fifo_format,

        "format_opts": format_opts,

        "max_recovery_attempts": max_recovery_attempts,

        "queue_size": queue_size,

        "recovery_wait_streamtime": recovery_wait_streamtime,

        "recovery_wait_time": recovery_wait_time,

        "recover_any_error": recover_any_error,

        "restart_with_keyframe": restart_with_keyframe,

        "timeshift": timeshift,

    }))



def film_cpk(

) -> FFMpegMuxerOption:
    """
    Sega FILM / CPK


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def filmstrip(

) -> FFMpegMuxerOption:
    """
    Adobe Filmstrip


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def fits(

) -> FFMpegMuxerOption:
    """
    Flexible Image Transport System


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def flac(

    write_header: bool | None = None,

) -> FFMpegMuxerOption:
    """
    raw FLAC

    Args:
        write_header: Write the file header (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "write_header": write_header,

    }))



def flv(

    flvflags: str | None = None,

) -> FFMpegMuxerOption:
    """
    FLV (Flash Video)

    Args:
        flvflags: FLV muxer flags (default 0)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "flvflags": flvflags,

    }))



def framecrc(

) -> FFMpegMuxerOption:
    """
    framecrc testing


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def framehash(

    hash: str | None = None,

    format_version: int | None = None,

) -> FFMpegMuxerOption:
    """
    Per-frame hash testing

    Args:
        hash: set hash to use (default "sha256")
        format_version: file format version (from 1 to 2) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "hash": hash,

        "format_version": format_version,

    }))



def framemd5(

    hash: str | None = None,

    format_version: int | None = None,

) -> FFMpegMuxerOption:
    """
    Per-frame MD5 testing

    Args:
        hash: set hash to use (default "md5")
        format_version: file format version (from 1 to 2) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "hash": hash,

        "format_version": format_version,

    }))



def g722(

) -> FFMpegMuxerOption:
    """
    raw G.722


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def g723_1(

) -> FFMpegMuxerOption:
    """
    raw G.723.1


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def g726(

) -> FFMpegMuxerOption:
    """
    raw big-endian G.726 ("left-justified")


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def g726le(

) -> FFMpegMuxerOption:
    """
    raw little-endian G.726 ("right-justified")


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def gif(

    loop: int | None = None,

    final_delay: int | None = None,

) -> FFMpegMuxerOption:
    """
    CompuServe Graphics Interchange Format (GIF)

    Args:
        loop: Number of times to loop the output: -1 - no loop, 0 - infinite loop (from -1 to 65535) (default 0)
        final_delay: Force delay (in centiseconds) after the last frame (from -1 to 65535) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "loop": loop,

        "final_delay": final_delay,

    }))



def gsm(

) -> FFMpegMuxerOption:
    """
    raw GSM


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def gxf(

) -> FFMpegMuxerOption:
    """
    GXF (General eXchange Format)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def h261(

) -> FFMpegMuxerOption:
    """
    raw H.261


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def h263(

) -> FFMpegMuxerOption:
    """
    raw H.263


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def h264(

) -> FFMpegMuxerOption:
    """
    raw H.264 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def hash(

    hash: str | None = None,

) -> FFMpegMuxerOption:
    """
    Hash testing

    Args:
        hash: set hash to use (default "sha256")

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "hash": hash,

    }))



def hds(

    window_size: int | None = None,

    extra_window_size: int | None = None,

    min_frag_duration: int | None = None,

    remove_at_exit: bool | None = None,

) -> FFMpegMuxerOption:
    """
    HDS Muxer

    Args:
        window_size: number of fragments kept in the manifest (from 0 to INT_MAX) (default 0)
        extra_window_size: number of fragments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
        min_frag_duration: minimum fragment duration (in microseconds) (from 0 to INT_MAX) (default 10000000)
        remove_at_exit: remove all fragments when finished (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "window_size": window_size,

        "extra_window_size": extra_window_size,

        "min_frag_duration": min_frag_duration,

        "remove_at_exit": remove_at_exit,

    }))



def hevc(

) -> FFMpegMuxerOption:
    """
    raw HEVC video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def hls(

    start_number: int | None = None,

    hls_time: str | None = None,

    hls_init_time: str | None = None,

    hls_list_size: int | None = None,

    hls_delete_threshold: int | None = None,

    hls_vtt_options: str | None = None,

    hls_allow_cache: int | None = None,

    hls_base_url: str | None = None,

    hls_segment_filename: str | None = None,

    hls_segment_options: str | None = None,

    hls_segment_size: int | None = None,

    hls_key_info_file: str | None = None,

    hls_enc: bool | None = None,

    hls_enc_key: str | None = None,

    hls_enc_key_url: str | None = None,

    hls_enc_iv: str | None = None,

    hls_subtitle_path: str | None = None,

    hls_segment_type: int | None| Literal["mpegts", "fmp4"] = None,

    hls_fmp4_init_filename: str | None = None,

    hls_fmp4_init_resend: bool | None = None,

    hls_flags: str | None = None,

    strftime: bool | None = None,

    strftime_mkdir: bool | None = None,

    hls_playlist_type: int | None| Literal["event", "vod"] = None,

    method: str | None = None,

    hls_start_number_source: int | None| Literal["generic", "epoch", "epoch_us", "datetime"] = None,

    http_user_agent: str | None = None,

    var_stream_map: str | None = None,

    cc_stream_map: str | None = None,

    master_pl_name: str | None = None,

    master_pl_publish_rate: int | None = None,

    http_persistent: bool | None = None,

    timeout: str | None = None,

    ignore_io_errors: bool | None = None,

    headers: str | None = None,

) -> FFMpegMuxerOption:
    """
    Apple HTTP Live Streaming

    Args:
        start_number: set first number in the sequence (from 0 to I64_MAX) (default 0)
        hls_time: set segment length (default 2)
        hls_init_time: set segment length at init list (default 0)
        hls_list_size: set maximum number of playlist entries (from 0 to INT_MAX) (default 5)
        hls_delete_threshold: set number of unreferenced segments to keep before deleting (from 1 to INT_MAX) (default 1)
        hls_vtt_options: set hls vtt list of options for the container format used for hls
        hls_allow_cache: explicitly set whether the client MAY (1) or MUST NOT (0) cache media segments (from INT_MIN to INT_MAX) (default -1)
        hls_base_url: url to prepend to each playlist entry
        hls_segment_filename: filename template for segment files
        hls_segment_options: set segments files format options of hls
        hls_segment_size: maximum size per segment file, (in bytes) (from 0 to INT_MAX) (default 0)
        hls_key_info_file: file with key URI and key file path
        hls_enc: enable AES128 encryption support (default false)
        hls_enc_key: hex-coded 16 byte key to encrypt the segments
        hls_enc_key_url: url to access the key to decrypt the segments
        hls_enc_iv: hex-coded 16 byte initialization vector
        hls_subtitle_path: set path of hls subtitles
        hls_segment_type: set hls segment files type (from 0 to 1) (default mpegts)
        hls_fmp4_init_filename: set fragment mp4 file init filename (default "init.mp4")
        hls_fmp4_init_resend: resend fragment mp4 init file after refresh m3u8 every time (default false)
        hls_flags: set flags affecting HLS playlist and media file generation (default 0)
        strftime: set filename expansion with strftime at segment creation (default false)
        strftime_mkdir: create last directory component in strftime-generated filename (default false)
        hls_playlist_type: set the HLS playlist type (from 0 to 2) (default 0)
        method: set the HTTP method(default: PUT)
        hls_start_number_source: set source of first number in sequence (from 0 to 3) (default generic)
        http_user_agent: override User-Agent field in HTTP header
        var_stream_map: Variant stream map string
        cc_stream_map: Closed captions stream map string
        master_pl_name: Create HLS master playlist with this name
        master_pl_publish_rate: Publish master play list every after this many segment intervals (from 0 to UINT32_MAX) (default 0)
        http_persistent: Use persistent HTTP connections (default false)
        timeout: set timeout for socket I/O operations (default -0.000001)
        ignore_io_errors: Ignore IO errors for stable long-duration runs with network output (default false)
        headers: set custom HTTP headers, can override built in default headers

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "start_number": start_number,

        "hls_time": hls_time,

        "hls_init_time": hls_init_time,

        "hls_list_size": hls_list_size,

        "hls_delete_threshold": hls_delete_threshold,

        "hls_vtt_options": hls_vtt_options,

        "hls_allow_cache": hls_allow_cache,

        "hls_base_url": hls_base_url,

        "hls_segment_filename": hls_segment_filename,

        "hls_segment_options": hls_segment_options,

        "hls_segment_size": hls_segment_size,

        "hls_key_info_file": hls_key_info_file,

        "hls_enc": hls_enc,

        "hls_enc_key": hls_enc_key,

        "hls_enc_key_url": hls_enc_key_url,

        "hls_enc_iv": hls_enc_iv,

        "hls_subtitle_path": hls_subtitle_path,

        "hls_segment_type": hls_segment_type,

        "hls_fmp4_init_filename": hls_fmp4_init_filename,

        "hls_fmp4_init_resend": hls_fmp4_init_resend,

        "hls_flags": hls_flags,

        "strftime": strftime,

        "strftime_mkdir": strftime_mkdir,

        "hls_playlist_type": hls_playlist_type,

        "method": method,

        "hls_start_number_source": hls_start_number_source,

        "http_user_agent": http_user_agent,

        "var_stream_map": var_stream_map,

        "cc_stream_map": cc_stream_map,

        "master_pl_name": master_pl_name,

        "master_pl_publish_rate": master_pl_publish_rate,

        "http_persistent": http_persistent,

        "timeout": timeout,

        "ignore_io_errors": ignore_io_errors,

        "headers": headers,

    }))



def iamf(

) -> FFMpegMuxerOption:
    """
    Raw Immersive Audio Model and Formats


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ico(

) -> FFMpegMuxerOption:
    """
    Microsoft Windows ICO


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ilbc(

) -> FFMpegMuxerOption:
    """
    iLBC storage


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def image2(

    update: bool | None = None,

    start_number: int | None = None,

    strftime: bool | None = None,

    frame_pts: bool | None = None,

    atomic_writing: bool | None = None,

    protocol_opts: str | None = None,

) -> FFMpegMuxerOption:
    """
    image2 sequence

    Args:
        update: continuously overwrite one file (default false)
        start_number: set first number in the sequence (from 0 to INT_MAX) (default 1)
        strftime: use strftime for filename (default false)
        frame_pts: use current frame pts for filename (default false)
        atomic_writing: write files atomically (using temporary files and renames) (default false)
        protocol_opts: specify protocol options for the opened files

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "update": update,

        "start_number": start_number,

        "strftime": strftime,

        "frame_pts": frame_pts,

        "atomic_writing": atomic_writing,

        "protocol_opts": protocol_opts,

    }))



def image2pipe(

) -> FFMpegMuxerOption:
    """
    piped image2 sequence


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ipod(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    iPod H.264 MP4 (MPEG-4 Part 14)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def ircam(

) -> FFMpegMuxerOption:
    """
    Berkeley/IRCAM/CARL Sound Format


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ismv(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    ISMV/ISMA (Smooth Streaming)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def ivf(

) -> FFMpegMuxerOption:
    """
    On2 IVF


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def jacosub(

) -> FFMpegMuxerOption:
    """
    JACOsub subtitle format


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def kvag(

) -> FFMpegMuxerOption:
    """
    Simon & Schuster Interactive VAG


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def latm(

    smc_interval: int | None = None,

) -> FFMpegMuxerOption:
    """
    LOAS/LATM

    Args:
        smc_interval: StreamMuxConfig interval. (from 1 to 65535) (default 20)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "smc-interval": smc_interval,

    }))



def lc3(

) -> FFMpegMuxerOption:
    """
    LC3 (Low Complexity Communication Codec)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def lrc(

    precision: int | None = None,

) -> FFMpegMuxerOption:
    """
    LRC lyrics

    Args:
        precision: precision of the fractional part of the timestamp, 2 for centiseconds (from 1 to 6) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "precision": precision,

    }))



def m4v(

) -> FFMpegMuxerOption:
    """
    raw MPEG-4 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def matroska(

    reserve_index_space: int | None = None,

    cues_to_front: bool | None = None,

    cluster_size_limit: int | None = None,

    cluster_time_limit: int | None = None,

    dash: bool | None = None,

    dash_track_number: int | None = None,

    live: bool | None = None,

    allow_raw_vfw: bool | None = None,

    flipped_raw_rgb: bool | None = None,

    write_crc32: bool | None = None,

    default_mode: int | None| Literal["infer", "infer_no_subs", "passthrough"] = None,

) -> FFMpegMuxerOption:
    """
    Matroska

    Args:
        reserve_index_space: reserve a given amount of space (in bytes) at the beginning of the file for the index (cues) (from 0 to INT_MAX) (default 0)
        cues_to_front: move Cues (the index) to the front by shifting data if necessary (default false)
        cluster_size_limit: store at most the provided amount of bytes in a cluster (from -1 to INT_MAX) (default -1)
        cluster_time_limit: store at most the provided number of milliseconds in a cluster (from -1 to I64_MAX) (default -1)
        dash: create a WebM file conforming to WebM DASH specification (default false)
        dash_track_number: track number for the DASH stream (from 1 to INT_MAX) (default 1)
        live: write files assuming it is a live stream (default false)
        allow_raw_vfw: allow raw VFW mode (default false)
        flipped_raw_rgb: store raw RGB bitmaps in VFW mode in bottom-up mode (default false)
        write_crc32: write a CRC32 element inside every Level 1 element (default true)
        default_mode: control how a track's FlagDefault is inferred (from 0 to 2) (default passthrough)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "reserve_index_space": reserve_index_space,

        "cues_to_front": cues_to_front,

        "cluster_size_limit": cluster_size_limit,

        "cluster_time_limit": cluster_time_limit,

        "dash": dash,

        "dash_track_number": dash_track_number,

        "live": live,

        "allow_raw_vfw": allow_raw_vfw,

        "flipped_raw_rgb": flipped_raw_rgb,

        "write_crc32": write_crc32,

        "default_mode": default_mode,

    }))



def mcc(

    override_time_code_rate: str | None = None,

    use_u_alias: bool | None = None,

    mcc_version: int | None = None,

    creation_program: str | None = None,

    creation_time: str | None = None,

) -> FFMpegMuxerOption:
    """
    MacCaption

    Args:
        override_time_code_rate: override the `Time Code Rate` value in the output
        use_u_alias: use the U alias for E1h 00h 00h 00h, disabled by default because some .mcc files disagree on whether it has 2 or 3 zero bytes (default false)
        mcc_version: the mcc file format version (from 1 to 2) (default 2)
        creation_program: the creation program
        creation_time: the creation time (default "now")

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "override_time_code_rate": override_time_code_rate,

        "use_u_alias": use_u_alias,

        "mcc_version": mcc_version,

        "creation_program": creation_program,

        "creation_time": creation_time,

    }))



def md5(

    hash: str | None = None,

) -> FFMpegMuxerOption:
    """
    MD5 testing

    Args:
        hash: set hash to use (default "md5")

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "hash": hash,

    }))



def microdvd(

) -> FFMpegMuxerOption:
    """
    MicroDVD subtitle format


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mjpeg(

) -> FFMpegMuxerOption:
    """
    raw MJPEG video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mkvtimestamp_v2(

) -> FFMpegMuxerOption:
    """
    extract pts as timecode v2 format, as defined by mkvtoolnix


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mlp(

) -> FFMpegMuxerOption:
    """
    raw MLP


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mmf(

) -> FFMpegMuxerOption:
    """
    Yamaha SMAF


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mov(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    QuickTime / MOV

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def mp2(

) -> FFMpegMuxerOption:
    """
    MP2 (MPEG audio layer 2)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mp3(

    id3v2_version: int | None = None,

    write_id3v1: bool | None = None,

    write_xing: bool | None = None,

) -> FFMpegMuxerOption:
    """
    MP3 (MPEG audio layer 3)

    Args:
        id3v2_version: Select ID3v2 version to write. Currently 3 and 4 are supported. (from 0 to 4) (default 4)
        write_id3v1: Enable ID3v1 writing. ID3v1 tags are written in UTF-8 which may not be supported by most software. (default false)
        write_xing: Write the Xing header containing file duration. (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "id3v2_version": id3v2_version,

        "write_id3v1": write_id3v1,

        "write_xing": write_xing,

    }))



def mp4(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    MP4 (MPEG-4 Part 14)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def mpeg(

    muxrate: int | None = None,

    preload: int | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-1 Systems / MPEG program stream

    Args:
        muxrate: mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
        preload: initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "muxrate": muxrate,

        "preload": preload,

    }))



def mpeg1video(

) -> FFMpegMuxerOption:
    """
    raw MPEG-1 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mpeg2video(

) -> FFMpegMuxerOption:
    """
    raw MPEG-2 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mpegts(

    mpegts_transport_stream_id: int | None = None,

    mpegts_original_network_id: int | None = None,

    mpegts_service_id: int | None = None,

    mpegts_service_type: int | None| Literal["digital_tv", "digital_radio", "teletext", "advanced_codec_digital_radio", "mpeg2_digital_hdtv", "advanced_codec_digital_sdtv", "advanced_codec_digital_hdtv", "hevc_digital_hdtv"] = None,

    mpegts_pmt_start_pid: int | None = None,

    mpegts_start_pid: int | None = None,

    mpegts_m2ts_mode: bool | None = None,

    muxrate: int | None = None,

    pes_payload_size: int | None = None,

    mpegts_flags: str | None = None,

    mpegts_copyts: bool | None = None,

    tables_version: int | None = None,

    omit_video_pes_length: bool | None = None,

    pcr_period: int | None = None,

    pat_period: str | None = None,

    sdt_period: str | None = None,

    nit_period: str | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-TS (MPEG-2 Transport Stream)

    Args:
        mpegts_transport_stream_id: Set transport_stream_id field. (from 1 to 65535) (default 1)
        mpegts_original_network_id: Set original_network_id field. (from 1 to 65535) (default 65281)
        mpegts_service_id: Set service_id field. (from 1 to 65535) (default 1)
        mpegts_service_type: Set service_type field. (from 1 to 255) (default digital_tv)
        mpegts_pmt_start_pid: Set the first pid of the PMT. (from 32 to 8186) (default 4096)
        mpegts_start_pid: Set the first pid. (from 32 to 8186) (default 256)
        mpegts_m2ts_mode: Enable m2ts mode. (default auto)
        muxrate: (from 0 to INT_MAX) (default 1)
        pes_payload_size: Minimum PES packet payload in bytes (from 0 to INT_MAX) (default 2930)
        mpegts_flags: MPEG-TS muxing flags (default 0)
        mpegts_copyts: don't offset dts/pts (default auto)
        tables_version: set PAT, PMT, SDT and NIT version (from 0 to 31) (default 0)
        omit_video_pes_length: Omit the PES packet length for video packets (default true)
        pcr_period: PCR retransmission time in milliseconds (from -1 to INT_MAX) (default -1)
        pat_period: PAT/PMT retransmission time limit in seconds (default 0.1)
        sdt_period: SDT retransmission time limit in seconds (default 0.5)
        nit_period: NIT retransmission time limit in seconds (default 0.5)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "mpegts_transport_stream_id": mpegts_transport_stream_id,

        "mpegts_original_network_id": mpegts_original_network_id,

        "mpegts_service_id": mpegts_service_id,

        "mpegts_service_type": mpegts_service_type,

        "mpegts_pmt_start_pid": mpegts_pmt_start_pid,

        "mpegts_start_pid": mpegts_start_pid,

        "mpegts_m2ts_mode": mpegts_m2ts_mode,

        "muxrate": muxrate,

        "pes_payload_size": pes_payload_size,

        "mpegts_flags": mpegts_flags,

        "mpegts_copyts": mpegts_copyts,

        "tables_version": tables_version,

        "omit_video_pes_length": omit_video_pes_length,

        "pcr_period": pcr_period,

        "pat_period": pat_period,

        "sdt_period": sdt_period,

        "nit_period": nit_period,

    }))



def mpjpeg(

    boundary_tag: str | None = None,

) -> FFMpegMuxerOption:
    """
    MIME multipart JPEG

    Args:
        boundary_tag: Boundary tag (default "ffmpeg")

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "boundary_tag": boundary_tag,

    }))



def mulaw(

) -> FFMpegMuxerOption:
    """
    PCM mu-law


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def mxf(

    signal_standard: int | None| Literal["bt601", "bt1358", "smpte347m", "smpte274m", "smpte296m", "smpte349m", "smpte428"] = None,

    store_user_comments: bool | None = None,

) -> FFMpegMuxerOption:
    """
    MXF (Material eXchange Format)

    Args:
        signal_standard: Force/set Signal Standard (from -1 to 7) (default -1)
        store_user_comments: (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "signal_standard": signal_standard,

        "store_user_comments": store_user_comments,

    }))



def mxf_d10(

    d10_channelcount: int | None = None,

    signal_standard: int | None| Literal["bt601", "bt1358", "smpte347m", "smpte274m", "smpte296m", "smpte349m", "smpte428"] = None,

    store_user_comments: bool | None = None,

) -> FFMpegMuxerOption:
    """
    MXF (Material eXchange Format) D-10 Mapping

    Args:
        d10_channelcount: Force/set channelcount in generic sound essence descriptor (from -1 to 8) (default -1)
        signal_standard: Force/set Signal Standard (from -1 to 7) (default -1)
        store_user_comments: (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "d10_channelcount": d10_channelcount,

        "signal_standard": signal_standard,

        "store_user_comments": store_user_comments,

    }))



def mxf_opatom(

    mxf_audio_edit_rate: str | None = None,

    signal_standard: int | None| Literal["bt601", "bt1358", "smpte347m", "smpte274m", "smpte296m", "smpte349m", "smpte428"] = None,

    store_user_comments: bool | None = None,

) -> FFMpegMuxerOption:
    """
    MXF (Material eXchange Format) Operational Pattern Atom

    Args:
        mxf_audio_edit_rate: Audio edit rate for timecode (from 0 to INT_MAX) (default 25/1)
        signal_standard: Force/set Signal Standard (from -1 to 7) (default -1)
        store_user_comments: (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "mxf_audio_edit_rate": mxf_audio_edit_rate,

        "signal_standard": signal_standard,

        "store_user_comments": store_user_comments,

    }))



def null(

) -> FFMpegMuxerOption:
    """
    raw null video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def nut(

    syncpoints: str | None = None,

    write_index: bool | None = None,

) -> FFMpegMuxerOption:
    """
    NUT

    Args:
        syncpoints: NUT syncpoint behaviour (default 0)
        write_index: Write index (default true)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "syncpoints": syncpoints,

        "write_index": write_index,

    }))



def obu(

) -> FFMpegMuxerOption:
    """
    AV1 low overhead OBU


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def oga(

    serial_offset: int | None = None,

    oggpagesize: int | None = None,

    pagesize: int | None = None,

    page_duration: int | None = None,

) -> FFMpegMuxerOption:
    """
    Ogg Audio

    Args:
        serial_offset: serial number offset (from 0 to INT_MAX) (default 0)
        oggpagesize: Set preferred Ogg page size. (from 0 to 65025) (default 0)
        pagesize: preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
        page_duration: preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "serial_offset": serial_offset,

        "oggpagesize": oggpagesize,

        "pagesize": pagesize,

        "page_duration": page_duration,

    }))



def ogg(

    serial_offset: int | None = None,

    oggpagesize: int | None = None,

    pagesize: int | None = None,

    page_duration: int | None = None,

) -> FFMpegMuxerOption:
    """
    Ogg

    Args:
        serial_offset: serial number offset (from 0 to INT_MAX) (default 0)
        oggpagesize: Set preferred Ogg page size. (from 0 to 65025) (default 0)
        pagesize: preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
        page_duration: preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "serial_offset": serial_offset,

        "oggpagesize": oggpagesize,

        "pagesize": pagesize,

        "page_duration": page_duration,

    }))



def ogv(

    serial_offset: int | None = None,

    oggpagesize: int | None = None,

    pagesize: int | None = None,

    page_duration: int | None = None,

) -> FFMpegMuxerOption:
    """
    Ogg Video

    Args:
        serial_offset: serial number offset (from 0 to INT_MAX) (default 0)
        oggpagesize: Set preferred Ogg page size. (from 0 to 65025) (default 0)
        pagesize: preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
        page_duration: preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "serial_offset": serial_offset,

        "oggpagesize": oggpagesize,

        "pagesize": pagesize,

        "page_duration": page_duration,

    }))



def oma(

) -> FFMpegMuxerOption:
    """
    Sony OpenMG audio


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def opus(

    serial_offset: int | None = None,

    oggpagesize: int | None = None,

    pagesize: int | None = None,

    page_duration: int | None = None,

) -> FFMpegMuxerOption:
    """
    Ogg Opus

    Args:
        serial_offset: serial number offset (from 0 to INT_MAX) (default 0)
        oggpagesize: Set preferred Ogg page size. (from 0 to 65025) (default 0)
        pagesize: preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
        page_duration: preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "serial_offset": serial_offset,

        "oggpagesize": oggpagesize,

        "pagesize": pagesize,

        "page_duration": page_duration,

    }))



def d(

) -> FFMpegMuxerOption:
    """
    oss             OSS (Open Sound System) playback


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def psp(

    brand: str | None = None,

    empty_hdlr_name: bool | None = None,

    encryption_key: str | None = None,

    encryption_kid: str | None = None,

    encryption_scheme: str | None = None,

    frag_duration: int | None = None,

    frag_interleave: int | None = None,

    frag_size: int | None = None,

    fragment_index: int | None = None,

    iods_audio_profile: int | None = None,

    iods_video_profile: int | None = None,

    ism_lookahead: int | None = None,

    movflags: str | None = None,

    moov_size: int | None = None,

    min_frag_duration: int | None = None,

    mov_gamma: float | None = None,

    movie_timescale: int | None = None,

    rtpflags: str | None = None,

    skip_iods: bool | None = None,

    use_editlist: bool | None = None,

    use_stream_ids_as_track_ids: bool | None = None,

    video_track_timescale: int | None = None,

    write_btrt: bool | None = None,

    write_prft: int | None| Literal["pts", "wallclock"] = None,

    write_tmcd: bool | None = None,

) -> FFMpegMuxerOption:
    """
    PSP MP4 (MPEG-4 Part 14)

    Args:
        brand: Override major brand
        empty_hdlr_name: write zero-length name string in hdlr atoms within mdia and minf atoms (default false)
        encryption_key: The media encryption key (hex)
        encryption_kid: The media encryption key identifier (hex)
        encryption_scheme: Configures the encryption scheme, allowed values are none, cenc-aes-ctr
        frag_duration: Maximum fragment duration (from 0 to INT_MAX) (default 0)
        frag_interleave: Interleave samples within fragments (max number of consecutive samples, lower is tighter interleaving, but with more overhead) (from 0 to INT_MAX) (default 0)
        frag_size: Maximum fragment size (from 0 to INT_MAX) (default 0)
        fragment_index: Fragment number of the next fragment (from 1 to INT_MAX) (default 1)
        iods_audio_profile: iods audio profile atom. (from -1 to 255) (default -1)
        iods_video_profile: iods video profile atom. (from -1 to 255) (default -1)
        ism_lookahead: Number of lookahead entries for ISM files (from 0 to 255) (default 0)
        movflags: MOV muxer flags (default 0)
        moov_size: maximum moov size so it can be placed at the begin (from 0 to INT_MAX) (default 0)
        min_frag_duration: Minimum fragment duration (from 0 to INT_MAX) (default 0)
        mov_gamma: gamma value for gama atom (from 0 to 10) (default 0)
        movie_timescale: set movie timescale (from 1 to INT_MAX) (default 1000)
        rtpflags: RTP muxer flags (default 0)
        skip_iods: Skip writing iods atom. (default true)
        use_editlist: use edit list (default auto)
        use_stream_ids_as_track_ids: use stream ids as track ids (default false)
        video_track_timescale: set timescale of all video tracks (from 0 to INT_MAX) (default 0)
        write_btrt: force or disable writing btrt (default auto)
        write_prft: Write producer reference time box with specified time source (from 0 to 2) (default 0)
        write_tmcd: force or disable writing tmcd (default auto)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "brand": brand,

        "empty_hdlr_name": empty_hdlr_name,

        "encryption_key": encryption_key,

        "encryption_kid": encryption_kid,

        "encryption_scheme": encryption_scheme,

        "frag_duration": frag_duration,

        "frag_interleave": frag_interleave,

        "frag_size": frag_size,

        "fragment_index": fragment_index,

        "iods_audio_profile": iods_audio_profile,

        "iods_video_profile": iods_video_profile,

        "ism_lookahead": ism_lookahead,

        "movflags": movflags,

        "moov_size": moov_size,

        "min_frag_duration": min_frag_duration,

        "mov_gamma": mov_gamma,

        "movie_timescale": movie_timescale,

        "rtpflags": rtpflags,

        "skip_iods": skip_iods,

        "use_editlist": use_editlist,

        "use_stream_ids_as_track_ids": use_stream_ids_as_track_ids,

        "video_track_timescale": video_track_timescale,

        "write_btrt": write_btrt,

        "write_prft": write_prft,

        "write_tmcd": write_tmcd,

    }))



def rawvideo(

) -> FFMpegMuxerOption:
    """
    raw video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def rcwt(

) -> FFMpegMuxerOption:
    """
    RCWT (Raw Captions With Time)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def rm(

) -> FFMpegMuxerOption:
    """
    RealMedia


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def roq(

) -> FFMpegMuxerOption:
    """
    raw id RoQ


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def rso(

) -> FFMpegMuxerOption:
    """
    Lego Mindstorms RSO


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def rtp(

    rtpflags: str | None = None,

    payload_type: int | None = None,

    ssrc: int | None = None,

    cname: str | None = None,

    seq: int | None = None,

) -> FFMpegMuxerOption:
    """
    RTP output

    Args:
        rtpflags: RTP muxer flags (default 0)
        payload_type: Specify RTP payload type (from -1 to 127) (default -1)
        ssrc: Stream identifier (from INT_MIN to INT_MAX) (default 0)
        cname: CNAME to include in RTCP SR packets
        seq: Starting sequence number (from -1 to 65535) (default -1)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "rtpflags": rtpflags,

        "payload_type": payload_type,

        "ssrc": ssrc,

        "cname": cname,

        "seq": seq,

    }))



def rtp_mpegts(

    mpegts_muxer_options: str | None = None,

    rtp_muxer_options: str | None = None,

) -> FFMpegMuxerOption:
    """
    RTP/mpegts output format

    Args:
        mpegts_muxer_options: set list of options for the MPEG-TS muxer
        rtp_muxer_options: set list of options for the RTP muxer

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "mpegts_muxer_options": mpegts_muxer_options,

        "rtp_muxer_options": rtp_muxer_options,

    }))



def rtsp(

    rtpflags: str | None = None,

    rtsp_transport: str | None = None,

    min_port: int | None = None,

    max_port: int | None = None,

    buffer_size: int | None = None,

    pkt_size: int | None = None,

    ca_file: str | None = None,

    tls_verify: int | None = None,

    cert_file: str | None = None,

    key_file: str | None = None,

    verifyhost: str | None = None,

) -> FFMpegMuxerOption:
    """
    RTSP output

    Args:
        rtpflags: RTP muxer flags (default 0)
        rtsp_transport: set RTSP transport protocols (default 0)
        min_port: set minimum local UDP port (from 0 to 65535) (default 5000)
        max_port: set maximum local UDP port (from 0 to 65535) (default 65000)
        buffer_size: Underlying protocol send/receive buffer size (from -1 to INT_MAX) (default -1)
        pkt_size: Underlying protocol send packet size (from -1 to INT_MAX) (default 1472)
        ca_file: Certificate Authority database file
        tls_verify: Verify the peer certificate (from 0 to 1) (default 0)
        cert_file: Certificate file
        key_file: Private key file
        verifyhost: Verify against a specific hostname

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "rtpflags": rtpflags,

        "rtsp_transport": rtsp_transport,

        "min_port": min_port,

        "max_port": max_port,

        "buffer_size": buffer_size,

        "pkt_size": pkt_size,

        "ca_file": ca_file,

        "tls_verify": tls_verify,

        "cert_file": cert_file,

        "key_file": key_file,

        "verifyhost": verifyhost,

    }))



def s16be(

) -> FFMpegMuxerOption:
    """
    PCM signed 16-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s16le(

) -> FFMpegMuxerOption:
    """
    PCM signed 16-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s24be(

) -> FFMpegMuxerOption:
    """
    PCM signed 24-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s24le(

) -> FFMpegMuxerOption:
    """
    PCM signed 24-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s32be(

) -> FFMpegMuxerOption:
    """
    PCM signed 32-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s32le(

) -> FFMpegMuxerOption:
    """
    PCM signed 32-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def s8(

) -> FFMpegMuxerOption:
    """
    PCM signed 8-bit


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def sap(

) -> FFMpegMuxerOption:
    """
    SAP output


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def sbc(

) -> FFMpegMuxerOption:
    """
    raw SBC


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def scc(

) -> FFMpegMuxerOption:
    """
    Scenarist Closed Captions


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def segment(

    reference_stream: str | None = None,

    segment_format: str | None = None,

    segment_format_options: str | None = None,

    segment_list: str | None = None,

    segment_header_filename: str | None = None,

    segment_list_flags: str | None = None,

    segment_list_size: int | None = None,

    segment_list_type: int | None| Literal["flat", "csv", "ext", "ffconcat", "m3u8", "hls"] = None,

    segment_atclocktime: bool | None = None,

    segment_clocktime_offset: str | None = None,

    segment_clocktime_wrap_duration: str | None = None,

    segment_time: str | None = None,

    segment_time_delta: str | None = None,

    min_seg_duration: str | None = None,

    segment_times: str | None = None,

    segment_frames: str | None = None,

    segment_wrap: int | None = None,

    segment_list_entry_prefix: str | None = None,

    segment_start_number: int | None = None,

    segment_wrap_number: int | None = None,

    strftime: bool | None = None,

    increment_tc: bool | None = None,

    break_non_keyframes: bool | None = None,

    individual_header_trailer: bool | None = None,

    write_header_trailer: bool | None = None,

    reset_timestamps: bool | None = None,

    initial_offset: str | None = None,

    write_empty_segments: bool | None = None,

) -> FFMpegMuxerOption:
    """
    segment

    Args:
        reference_stream: set reference stream (default "auto")
        segment_format: set container format used for the segments
        segment_format_options: set list of options for the container format used for the segments
        segment_list: set the segment list filename
        segment_header_filename: write a single file containing the header
        segment_list_flags: set flags affecting segment list generation (default cache)
        segment_list_size: set the maximum number of playlist entries (from 0 to INT_MAX) (default 0)
        segment_list_type: set the segment list type (from -1 to 4) (default -1)
        segment_atclocktime: set segment to be cut at clocktime (default false)
        segment_clocktime_offset: set segment clocktime offset (default 0)
        segment_clocktime_wrap_duration: set segment clocktime wrapping duration (default INT64_MAX)
        segment_time: set segment duration (default 2)
        segment_time_delta: set approximation value used for the segment times (default 0)
        min_seg_duration: set minimum segment duration (default 0)
        segment_times: set segment split time points
        segment_frames: set segment split frame numbers
        segment_wrap: set number after which the index wraps (from 0 to INT_MAX) (default 0)
        segment_list_entry_prefix: set base url prefix for segments
        segment_start_number: set the sequence number of the first segment (from 0 to INT_MAX) (default 0)
        segment_wrap_number: set the number of wrap before the first segment (from 0 to INT_MAX) (default 0)
        strftime: set filename expansion with strftime at segment creation (default false)
        increment_tc: increment timecode between each segment (default false)
        break_non_keyframes: allow breaking segments on non-keyframes (default false)
        individual_header_trailer: write header/trailer to each segment (default true)
        write_header_trailer: write a header to the first segment and a trailer to the last one (default true)
        reset_timestamps: reset timestamps at the beginning of each segment (default false)
        initial_offset: set initial timestamp offset (default 0)
        write_empty_segments: allow writing empty 'filler' segments (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "reference_stream": reference_stream,

        "segment_format": segment_format,

        "segment_format_options": segment_format_options,

        "segment_list": segment_list,

        "segment_header_filename": segment_header_filename,

        "segment_list_flags": segment_list_flags,

        "segment_list_size": segment_list_size,

        "segment_list_type": segment_list_type,

        "segment_atclocktime": segment_atclocktime,

        "segment_clocktime_offset": segment_clocktime_offset,

        "segment_clocktime_wrap_duration": segment_clocktime_wrap_duration,

        "segment_time": segment_time,

        "segment_time_delta": segment_time_delta,

        "min_seg_duration": min_seg_duration,

        "segment_times": segment_times,

        "segment_frames": segment_frames,

        "segment_wrap": segment_wrap,

        "segment_list_entry_prefix": segment_list_entry_prefix,

        "segment_start_number": segment_start_number,

        "segment_wrap_number": segment_wrap_number,

        "strftime": strftime,

        "increment_tc": increment_tc,

        "break_non_keyframes": break_non_keyframes,

        "individual_header_trailer": individual_header_trailer,

        "write_header_trailer": write_header_trailer,

        "reset_timestamps": reset_timestamps,

        "initial_offset": initial_offset,

        "write_empty_segments": write_empty_segments,

    }))



def smjpeg(

) -> FFMpegMuxerOption:
    """
    Loki SDL MJPEG


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def smoothstreaming(

    window_size: int | None = None,

    extra_window_size: int | None = None,

    lookahead_count: int | None = None,

    min_frag_duration: int | None = None,

    remove_at_exit: bool | None = None,

) -> FFMpegMuxerOption:
    """
    Smooth Streaming Muxer

    Args:
        window_size: number of fragments kept in the manifest (from 0 to INT_MAX) (default 0)
        extra_window_size: number of fragments kept outside of the manifest before removing from disk (from 0 to INT_MAX) (default 5)
        lookahead_count: number of lookahead fragments (from 0 to INT_MAX) (default 2)
        min_frag_duration: minimum fragment duration (in microseconds) (from 0 to INT_MAX) (default 5000000)
        remove_at_exit: remove all fragments when finished (default false)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "window_size": window_size,

        "extra_window_size": extra_window_size,

        "lookahead_count": lookahead_count,

        "min_frag_duration": min_frag_duration,

        "remove_at_exit": remove_at_exit,

    }))



def sox(

) -> FFMpegMuxerOption:
    """
    SoX (Sound eXchange) native


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def spdif(

    spdif_flags: str | None = None,

    dtshd_rate: int | None = None,

    dtshd_fallback_time: int | None = None,

) -> FFMpegMuxerOption:
    """
    IEC 61937 (used on S/PDIF - IEC958)

    Args:
        spdif_flags: IEC 61937 encapsulation flags (default 0)
        dtshd_rate: mux complete DTS frames in HD mode at the specified IEC958 rate (in Hz, default 0=disabled) (from 0 to 768000) (default 0)
        dtshd_fallback_time: min secs to strip HD for after an overflow (-1: till the end, default 60) (from -1 to INT_MAX) (default 60)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "spdif_flags": spdif_flags,

        "dtshd_rate": dtshd_rate,

        "dtshd_fallback_time": dtshd_fallback_time,

    }))



def spx(

    serial_offset: int | None = None,

    oggpagesize: int | None = None,

    pagesize: int | None = None,

    page_duration: int | None = None,

) -> FFMpegMuxerOption:
    """
    Ogg Speex

    Args:
        serial_offset: serial number offset (from 0 to INT_MAX) (default 0)
        oggpagesize: Set preferred Ogg page size. (from 0 to 65025) (default 0)
        pagesize: preferred page size in bytes (deprecated) (from 0 to 65025) (default 0)
        page_duration: preferred page duration, in microseconds (from 0 to I64_MAX) (default 1000000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "serial_offset": serial_offset,

        "oggpagesize": oggpagesize,

        "pagesize": pagesize,

        "page_duration": page_duration,

    }))



def srt(

) -> FFMpegMuxerOption:
    """
    SubRip subtitle


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def streamhash(

    hash: str | None = None,

) -> FFMpegMuxerOption:
    """
    Per-stream hash testing

    Args:
        hash: set hash to use (default "sha256")

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "hash": hash,

    }))



def sup(

) -> FFMpegMuxerOption:
    """
    raw HDMV Presentation Graphic Stream subtitles


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def svcd(

    muxrate: int | None = None,

    preload: int | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-2 PS (SVCD)

    Args:
        muxrate: mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
        preload: initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "muxrate": muxrate,

        "preload": preload,

    }))



def swf(

) -> FFMpegMuxerOption:
    """
    SWF (ShockWave Flash)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def tee(

    use_fifo: bool | None = None,

    fifo_options: str | None = None,

) -> FFMpegMuxerOption:
    """
    Multiple muxer tee

    Args:
        use_fifo: Use fifo pseudo-muxer to separate actual muxers from encoder (default false)
        fifo_options: fifo pseudo-muxer options

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "use_fifo": use_fifo,

        "fifo_options": fifo_options,

    }))



def truehd(

) -> FFMpegMuxerOption:
    """
    raw TrueHD


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def tta(

) -> FFMpegMuxerOption:
    """
    TTA (True Audio)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def ttml(

) -> FFMpegMuxerOption:
    """
    TTML subtitle


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u16be(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 16-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u16le(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 16-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u24be(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 24-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u24le(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 24-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u32be(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 32-bit big-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u32le(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 32-bit little-endian


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def u8(

) -> FFMpegMuxerOption:
    """
    PCM unsigned 8-bit


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def uncodedframecrc(

) -> FFMpegMuxerOption:
    """
    uncoded framecrc testing


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def vc1(

) -> FFMpegMuxerOption:
    """
    raw VC-1 video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def vc1test(

) -> FFMpegMuxerOption:
    """
    VC-1 test bitstream


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def vcd(

    muxrate: int | None = None,

    preload: int | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-1 Systems / MPEG program stream (VCD)

    Args:
        muxrate: mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
        preload: initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "muxrate": muxrate,

        "preload": preload,

    }))



def vidc(

) -> FFMpegMuxerOption:
    """
    PCM Archimedes VIDC


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def d(

) -> FFMpegMuxerOption:
    """
    video4linux2,v4l2 Video4Linux2 output device


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def vob(

    muxrate: int | None = None,

    preload: int | None = None,

) -> FFMpegMuxerOption:
    """
    MPEG-2 PS (VOB)

    Args:
        muxrate: mux rate as bits/s (from 0 to 1.67772e+09) (default 0)
        preload: initial demux-decode delay in microseconds (from 0 to INT_MAX) (default 500000)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "muxrate": muxrate,

        "preload": preload,

    }))



def voc(

) -> FFMpegMuxerOption:
    """
    Creative Voice


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def vvc(

) -> FFMpegMuxerOption:
    """
    raw H.266/VVC video


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def w64(

) -> FFMpegMuxerOption:
    """
    Sony Wave64


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def wav(

    write_bext: bool | None = None,

    write_peak: int | None| Literal["off", "on", "only"] = None,

    rf64: int | None| Literal["auto", "always", "never"] = None,

    peak_block_size: int | None = None,

    peak_format: int | None = None,

    peak_ppv: int | None = None,

) -> FFMpegMuxerOption:
    """
    WAV / WAVE (Waveform Audio)

    Args:
        write_bext: Write BEXT chunk. (default false)
        write_peak: Write Peak Envelope chunk. (from 0 to 2) (default off)
        rf64: Use RF64 header rather than RIFF for large files. (from -1 to 1) (default never)
        peak_block_size: Number of audio samples used to generate each peak frame. (from 0 to 65536) (default 256)
        peak_format: The format of the peak envelope data (1: uint8, 2: uint16). (from 1 to 2) (default 2)
        peak_ppv: Number of peak points per peak value (1 or 2). (from 1 to 2) (default 2)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "write_bext": write_bext,

        "write_peak": write_peak,

        "rf64": rf64,

        "peak_block_size": peak_block_size,

        "peak_format": peak_format,

        "peak_ppv": peak_ppv,

    }))



def webm(

    reserve_index_space: int | None = None,

    cues_to_front: bool | None = None,

    cluster_size_limit: int | None = None,

    cluster_time_limit: int | None = None,

    dash: bool | None = None,

    dash_track_number: int | None = None,

    live: bool | None = None,

    allow_raw_vfw: bool | None = None,

    flipped_raw_rgb: bool | None = None,

    write_crc32: bool | None = None,

    default_mode: int | None| Literal["infer", "infer_no_subs", "passthrough"] = None,

) -> FFMpegMuxerOption:
    """
    WebM

    Args:
        reserve_index_space: reserve a given amount of space (in bytes) at the beginning of the file for the index (cues) (from 0 to INT_MAX) (default 0)
        cues_to_front: move Cues (the index) to the front by shifting data if necessary (default false)
        cluster_size_limit: store at most the provided amount of bytes in a cluster (from -1 to INT_MAX) (default -1)
        cluster_time_limit: store at most the provided number of milliseconds in a cluster (from -1 to I64_MAX) (default -1)
        dash: create a WebM file conforming to WebM DASH specification (default false)
        dash_track_number: track number for the DASH stream (from 1 to INT_MAX) (default 1)
        live: write files assuming it is a live stream (default false)
        allow_raw_vfw: allow raw VFW mode (default false)
        flipped_raw_rgb: store raw RGB bitmaps in VFW mode in bottom-up mode (default false)
        write_crc32: write a CRC32 element inside every Level 1 element (default true)
        default_mode: control how a track's FlagDefault is inferred (from 0 to 2) (default passthrough)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "reserve_index_space": reserve_index_space,

        "cues_to_front": cues_to_front,

        "cluster_size_limit": cluster_size_limit,

        "cluster_time_limit": cluster_time_limit,

        "dash": dash,

        "dash_track_number": dash_track_number,

        "live": live,

        "allow_raw_vfw": allow_raw_vfw,

        "flipped_raw_rgb": flipped_raw_rgb,

        "write_crc32": write_crc32,

        "default_mode": default_mode,

    }))



def webm_chunk(

    chunk_start_index: int | None = None,

    header: str | None = None,

    audio_chunk_duration: int | None = None,

    method: str | None = None,

) -> FFMpegMuxerOption:
    """
    WebM Chunk Muxer

    Args:
        chunk_start_index: start index of the chunk (from 0 to INT_MAX) (default 0)
        header: filename of the header where the initialization data will be written
        audio_chunk_duration: duration of each chunk in milliseconds (from 0 to INT_MAX) (default 5000)
        method: set the HTTP method

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "chunk_start_index": chunk_start_index,

        "header": header,

        "audio_chunk_duration": audio_chunk_duration,

        "method": method,

    }))



def webm_dash_manifest(

    adaptation_sets: str | None = None,

    live: bool | None = None,

    chunk_start_index: int | None = None,

    chunk_duration_ms: int | None = None,

    utc_timing_url: str | None = None,

    time_shift_buffer_depth: float | None = None,

    minimum_update_period: int | None = None,

) -> FFMpegMuxerOption:
    """
    WebM DASH Manifest

    Args:
        adaptation_sets: Adaptation sets. Syntax: id=0,streams=0,1,2 id=1,streams=3,4 and so on
        live: create a live stream manifest (default false)
        chunk_start_index: start index of the chunk (from 0 to INT_MAX) (default 0)
        chunk_duration_ms: duration of each chunk (in milliseconds) (from 0 to INT_MAX) (default 1000)
        utc_timing_url: URL of the page that will return the UTC timestamp in ISO format
        time_shift_buffer_depth: Smallest time (in seconds) shifting buffer for which any Representation is guaranteed to be available. (from 1 to DBL_MAX) (default 60)
        minimum_update_period: Minimum Update Period (in seconds) of the manifest. (from 0 to INT_MAX) (default 0)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "adaptation_sets": adaptation_sets,

        "live": live,

        "chunk_start_index": chunk_start_index,

        "chunk_duration_ms": chunk_duration_ms,

        "utc_timing_url": utc_timing_url,

        "time_shift_buffer_depth": time_shift_buffer_depth,

        "minimum_update_period": minimum_update_period,

    }))



def webp(

    loop: int | None = None,

) -> FFMpegMuxerOption:
    """
    WebP

    Args:
        loop: Number of times to loop the output: 0 - infinite loop (from 0 to 65535) (default 1)

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "loop": loop,

    }))



def webvtt(

) -> FFMpegMuxerOption:
    """
    WebVTT subtitle


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def whip(

    handshake_timeout: int | None = None,

    pkt_size: int | None = None,

    authorization: str | None = None,

    cert_file: str | None = None,

    key_file: str | None = None,

) -> FFMpegMuxerOption:
    """
    WHIP(WebRTC-HTTP ingestion protocol) muxer

    Args:
        handshake_timeout: Timeout in milliseconds for ICE and DTLS handshake. (from -1 to INT_MAX) (default 5000)
        pkt_size: The maximum size, in bytes, of RTP packets that send out (from -1 to INT_MAX) (default 1200)
        authorization: The optional Bearer token for WHIP Authorization
        cert_file: The optional certificate file path for DTLS
        key_file: The optional private key file path for DTLS

    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

        "handshake_timeout": handshake_timeout,

        "pkt_size": pkt_size,

        "authorization": authorization,

        "cert_file": cert_file,

        "key_file": key_file,

    }))



def wsaud(

) -> FFMpegMuxerOption:
    """
    Westwood Studios audio


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def wtv(

) -> FFMpegMuxerOption:
    """
    Windows Television (WTV)


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def wv(

) -> FFMpegMuxerOption:
    """
    raw WavPack


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))



def yuv4mpegpipe(

) -> FFMpegMuxerOption:
    """
    YUV4MPEG pipe


    Returns:
        the set codec options
    """
    return FFMpegMuxerOption(merge({

    }))
















































































































































































































































































































































































































































































































































































































































































































































