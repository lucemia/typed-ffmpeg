// NOTE: this file is auto-generated, do not modify
/**
 * Typed output() function with all FFmpeg output options.
 */

import { OutputNode, OutputStream } from "@typed-ffmpeg/core/dag/nodes";
import { FilterableStream } from "@typed-ffmpeg/core/dag/baseStreams";
import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import type { FFMpegEncoderOption } from "../../codecs/encoders.js";
import type { FFMpegMuxerOption } from "../../formats/muxers.js";
import type { FFMpegAVFormatContextEncoderOption } from "../../options/format.js";
import type { FFMpegAVCodecContextEncoderOption } from "../../options/codec.js";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFFunc, FFTime,
} from "@typed-ffmpeg/core/types";

/**
 * Output file URL
 *
 * @param streams - The streams to output
 * @param filename - The filename to output to
 * @param options - Output options
 * @returns The output stream
 */
export function output(
  streams: FilterableStream[],
  filename: string,
  options?: {
    f?: FFString;
    c?: FFString;
    codec?: FFString;
    pre?: FFString;
    map?: FFFunc;
    map_metadata?: FFString;
    map_chapters?: FFInt;
    t?: FFTime;
    to?: FFTime;
    fs?: FFInt64;
    ss?: FFTime;
    timestamp?: FFFunc;
    metadata?: FFString;
    program?: FFString;
    stream_group?: FFString;
    dframes?: FFInt64;
    target?: FFFunc;
    shortest?: FFBoolean;
    shortest_buf_duration?: FFFloat;
    bitexact?: FFBoolean;
    copyinkf?: FFBoolean;
    copypriorss?: FFInt;
    frames?: FFInt64;
    tag?: FFString;
    q?: FFFunc;
    qscale?: FFFunc;
    profile?: FFFunc;
    filter?: FFString;
    attach?: FFFunc;
    disposition?: FFString;
    thread_queue_size?: FFInt;
    bits_per_raw_sample?: FFInt;
    stats_enc_pre?: FFString;
    stats_enc_post?: FFString;
    stats_mux_pre?: FFString;
    stats_enc_pre_fmt?: FFString;
    stats_enc_post_fmt?: FFString;
    stats_mux_pre_fmt?: FFString;
    vframes?: FFInt64;
    r?: FFString;
    fpsmax?: FFString;
    s?: FFString;
    aspect?: FFString;
    pix_fmt?: FFString;
    vn?: FFBoolean;
    rc_override?: FFString;
    vcodec?: FFString;
    timecode?: FFFunc;
    _pass?: FFInt;
    passlogfile?: FFString;
    vf?: FFString;
    intra_matrix?: FFString;
    inter_matrix?: FFString;
    chroma_intra_matrix?: FFString;
    vtag?: FFString;
    fps_mode?: FFString;
    force_fps?: FFBoolean;
    streamid?: FFFunc;
    force_key_frames?: FFString;
    b?: FFFunc;
    autoscale?: FFBoolean;
    fix_sub_duration_heartbeat?: FFBoolean;
    aframes?: FFInt64;
    aq?: FFFunc;
    ar?: FFInt;
    ac?: FFInt;
    an?: FFBoolean;
    acodec?: FFString;
    ab?: FFFunc;
    apad?: FFString;
    atag?: FFString;
    sample_fmt?: FFString;
    channel_layout?: FFString;
    ch_layout?: FFString;
    af?: FFString;
    sn?: FFBoolean;
    scodec?: FFString;
    stag?: FFString;
    muxdelay?: FFFloat;
    muxpreload?: FFFloat;
    sdp_file?: FFFunc;
    time_base?: FFString;
    enc_time_base?: FFString;
    bsf?: FFString;
    apre?: FFString;
    vpre?: FFString;
    spre?: FFString;
    fpre?: FFString;
    max_muxing_queue_size?: FFInt;
    muxing_queue_data_threshold?: FFInt;
    dcodec?: FFString;
    dn?: FFBoolean;
    encoderOptions?: FFMpegEncoderOption;
    muxerOptions?: FFMpegMuxerOption;
    formatOptions?: FFMpegAVFormatContextEncoderOption;
    codecOptions?: FFMpegAVCodecContextEncoderOption;
    extraOptions?: Record<string, unknown>;
  },
): OutputStream {
  return new OutputNode(
    streams,
    filename,
    merge(
      {
        "f": options?.f,
        "c": options?.c,
        "codec": options?.codec,
        "pre": options?.pre,
        "map": options?.map,
        "map_metadata": options?.map_metadata,
        "map_chapters": options?.map_chapters,
        "t": options?.t,
        "to": options?.to,
        "fs": options?.fs,
        "ss": options?.ss,
        "timestamp": options?.timestamp,
        "metadata": options?.metadata,
        "program": options?.program,
        "stream_group": options?.stream_group,
        "dframes": options?.dframes,
        "target": options?.target,
        "shortest": options?.shortest,
        "shortest_buf_duration": options?.shortest_buf_duration,
        "bitexact": options?.bitexact,
        "copyinkf": options?.copyinkf,
        "copypriorss": options?.copypriorss,
        "frames": options?.frames,
        "tag": options?.tag,
        "q": options?.q,
        "qscale": options?.qscale,
        "profile": options?.profile,
        "filter": options?.filter,
        "attach": options?.attach,
        "disposition": options?.disposition,
        "thread_queue_size": options?.thread_queue_size,
        "bits_per_raw_sample": options?.bits_per_raw_sample,
        "stats_enc_pre": options?.stats_enc_pre,
        "stats_enc_post": options?.stats_enc_post,
        "stats_mux_pre": options?.stats_mux_pre,
        "stats_enc_pre_fmt": options?.stats_enc_pre_fmt,
        "stats_enc_post_fmt": options?.stats_enc_post_fmt,
        "stats_mux_pre_fmt": options?.stats_mux_pre_fmt,
        "vframes": options?.vframes,
        "r": options?.r,
        "fpsmax": options?.fpsmax,
        "s": options?.s,
        "aspect": options?.aspect,
        "pix_fmt": options?.pix_fmt,
        "vn": options?.vn,
        "rc_override": options?.rc_override,
        "vcodec": options?.vcodec,
        "timecode": options?.timecode,
        "pass": options?._pass,
        "passlogfile": options?.passlogfile,
        "vf": options?.vf,
        "intra_matrix": options?.intra_matrix,
        "inter_matrix": options?.inter_matrix,
        "chroma_intra_matrix": options?.chroma_intra_matrix,
        "vtag": options?.vtag,
        "fps_mode": options?.fps_mode,
        "force_fps": options?.force_fps,
        "streamid": options?.streamid,
        "force_key_frames": options?.force_key_frames,
        "b": options?.b,
        "autoscale": options?.autoscale,
        "fix_sub_duration_heartbeat": options?.fix_sub_duration_heartbeat,
        "aframes": options?.aframes,
        "aq": options?.aq,
        "ar": options?.ar,
        "ac": options?.ac,
        "an": options?.an,
        "acodec": options?.acodec,
        "ab": options?.ab,
        "apad": options?.apad,
        "atag": options?.atag,
        "sample_fmt": options?.sample_fmt,
        "channel_layout": options?.channel_layout,
        "ch_layout": options?.ch_layout,
        "af": options?.af,
        "sn": options?.sn,
        "scodec": options?.scodec,
        "stag": options?.stag,
        "muxdelay": options?.muxdelay,
        "muxpreload": options?.muxpreload,
        "sdp_file": options?.sdp_file,
        "time_base": options?.time_base,
        "enc_time_base": options?.enc_time_base,
        "bsf": options?.bsf,
        "apre": options?.apre,
        "vpre": options?.vpre,
        "spre": options?.spre,
        "fpre": options?.fpre,
        "max_muxing_queue_size": options?.max_muxing_queue_size,
        "muxing_queue_data_threshold": options?.muxing_queue_data_threshold,
        "dcodec": options?.dcodec,
        "dn": options?.dn,
      },
      options?.encoderOptions as Record<string, unknown> | undefined,
      options?.muxerOptions as Record<string, unknown> | undefined,
      options?.formatOptions as Record<string, unknown> | undefined,
      options?.codecOptions as Record<string, unknown> | undefined,
      options?.extraOptions,
    ),
  ).stream();
}
