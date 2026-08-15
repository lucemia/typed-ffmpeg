// NOTE: this file is auto-generated, do not modify
/**
 * Typed input() function with all FFmpeg input options.
 */

import { InputNode, AVStream } from "@typed-ffmpeg/core/dag/nodes";
import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import type { FFMpegDecoderOption } from "../../codecs/decoders.js";
import type { FFMpegDemuxerOption } from "../../formats/demuxers.js";
import type { FFMpegAVFormatContextDecoderOption } from "../../options/format.js";
import type { FFMpegAVCodecContextDecoderOption } from "../../options/codec.js";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFFunc, FFTime,
} from "@typed-ffmpeg/core/types";

/**
 * Input file URL (ffmpeg `-i` option)
 *
 * @param filename - Input file URL
 * @param options - Input options
 * @returns Input stream
 */
export function input(
  filename: string,
  options?: {
    f?: FFString;
    c?: FFString;
    codec?: FFString;
    t?: FFTime;
    to?: FFTime;
    ss?: FFTime;
    sseof?: FFTime;
    seek_timestamp?: FFInt;
    accurate_seek?: FFBoolean;
    isync?: FFInt;
    itsoffset?: FFTime;
    itsscale?: FFDouble;
    re?: FFBoolean;
    readrate?: FFFloat;
    readrate_initial_burst?: FFDouble;
    readrate_catchup?: FFFloat;
    bitexact?: FFBoolean;
    tag?: FFString;
    reinit_filter?: FFInt;
    drop_changed?: FFInt;
    dump_attachment?: FFString;
    stream_loop?: FFInt;
    discard?: FFString;
    thread_queue_size?: FFInt;
    find_stream_info?: FFBoolean;
    r?: FFString;
    s?: FFString;
    pix_fmt?: FFString;
    display_rotation?: FFDouble;
    display_hflip?: FFBoolean;
    display_vflip?: FFBoolean;
    mastering_display?: FFString;
    content_light?: FFString;
    vn?: FFBoolean;
    vcodec?: FFString;
    vtag?: FFString;
    hwaccel?: FFString;
    hwaccel_device?: FFString;
    hwaccel_output_format?: FFString;
    autorotate?: FFBoolean;
    apply_cropping?: FFString;
    ar?: FFInt;
    ac?: FFInt;
    an?: FFBoolean;
    acodec?: FFString;
    sample_fmt?: FFString;
    channel_layout?: FFString;
    ch_layout?: FFString;
    guess_layout_max?: FFInt;
    sn?: FFBoolean;
    scodec?: FFString;
    fix_sub_duration?: FFBoolean;
    canvas_size?: FFString;
    bsf?: FFString;
    dcodec?: FFString;
    dn?: FFBoolean;
    decoderOptions?: FFMpegDecoderOption;
    demuxerOptions?: FFMpegDemuxerOption;
    formatOptions?: FFMpegAVFormatContextDecoderOption;
    codecOptions?: FFMpegAVCodecContextDecoderOption;
    extraOptions?: Record<string, unknown>;
  },
): AVStream {
  return new InputNode(
    filename,
    merge(
      {
        "f": options?.f,
        "c": options?.c,
        "codec": options?.codec,
        "t": options?.t,
        "to": options?.to,
        "ss": options?.ss,
        "sseof": options?.sseof,
        "seek_timestamp": options?.seek_timestamp,
        "accurate_seek": options?.accurate_seek,
        "isync": options?.isync,
        "itsoffset": options?.itsoffset,
        "itsscale": options?.itsscale,
        "re": options?.re,
        "readrate": options?.readrate,
        "readrate_initial_burst": options?.readrate_initial_burst,
        "readrate_catchup": options?.readrate_catchup,
        "bitexact": options?.bitexact,
        "tag": options?.tag,
        "reinit_filter": options?.reinit_filter,
        "drop_changed": options?.drop_changed,
        "dump_attachment": options?.dump_attachment,
        "stream_loop": options?.stream_loop,
        "discard": options?.discard,
        "thread_queue_size": options?.thread_queue_size,
        "find_stream_info": options?.find_stream_info,
        "r": options?.r,
        "s": options?.s,
        "pix_fmt": options?.pix_fmt,
        "display_rotation": options?.display_rotation,
        "display_hflip": options?.display_hflip,
        "display_vflip": options?.display_vflip,
        "mastering_display": options?.mastering_display,
        "content_light": options?.content_light,
        "vn": options?.vn,
        "vcodec": options?.vcodec,
        "vtag": options?.vtag,
        "hwaccel": options?.hwaccel,
        "hwaccel_device": options?.hwaccel_device,
        "hwaccel_output_format": options?.hwaccel_output_format,
        "autorotate": options?.autorotate,
        "apply_cropping": options?.apply_cropping,
        "ar": options?.ar,
        "ac": options?.ac,
        "an": options?.an,
        "acodec": options?.acodec,
        "sample_fmt": options?.sample_fmt,
        "channel_layout": options?.channel_layout,
        "ch_layout": options?.ch_layout,
        "guess_layout_max": options?.guess_layout_max,
        "sn": options?.sn,
        "scodec": options?.scodec,
        "fix_sub_duration": options?.fix_sub_duration,
        "canvas_size": options?.canvas_size,
        "bsf": options?.bsf,
        "dcodec": options?.dcodec,
        "dn": options?.dn,
      },
      options?.decoderOptions as Record<string, unknown> | undefined,
      options?.demuxerOptions as Record<string, unknown> | undefined,
      options?.formatOptions as Record<string, unknown> | undefined,
      options?.codecOptions as Record<string, unknown> | undefined,
      options?.extraOptions,
    ),
  ).stream();
}
