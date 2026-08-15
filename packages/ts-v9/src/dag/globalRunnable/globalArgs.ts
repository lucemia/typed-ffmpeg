// NOTE: this file is auto-generated, do not modify
/**
 * Typed globalArgs() function with all FFmpeg global options.
 */

import { merge } from "@typed-ffmpeg/core/utils/frozenRecord";
import type { GlobalStream, OutputStream, GlobalNode } from "@typed-ffmpeg/core/dag/nodes";
import type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFFunc, FFTime,
} from "@typed-ffmpeg/core/types";

export interface GlobalArgsOptions {
  /** set logging level */
  loglevel?: FFFunc;
  /** set logging level */
  v?: FFFunc;
  /** generate a report */
  report?: FFFunc;
  /** set maximum size of a single allocated block */
  max_alloc?: FFFunc;
  /** force specific cpu flags */
  cpuflags?: FFFunc;
  /** force specific cpu count */
  cpucount?: FFFunc;
  /** do not show program banner */
  hide_banner?: FFBoolean;
  /** overwrite output files */
  y?: FFBoolean;
  /** never overwrite output files */
  n?: FFBoolean;
  /** Ignore unknown stream types */
  ignore_unknown?: FFBoolean;
  /** Copy unknown stream types */
  copy_unknown?: FFBoolean;
  /** allow recasting stream type in order to force a decoder of different media type */
  recast_media?: FFBoolean;
  /** add timings for benchmarking */
  benchmark?: FFBoolean;
  /** add timings for each task */
  benchmark_all?: FFBoolean;
  /** write program-readable progress information */
  progress?: FFFunc;
  /** enable or disable interaction on standard input */
  stdin?: FFBoolean;
  /** set max runtime in seconds in CPU user time */
  timelimit?: FFFunc;
  /** dump each input packet */
  dump?: FFBoolean;
  /** when dumping packets, also dump the payload */
  hex?: FFBoolean;
  /** frame drop threshold */
  frame_drop_threshold?: FFFloat;
  /** copy timestamps */
  copyts?: FFBoolean;
  /** shift input timestamps to start at 0 when using copyts */
  start_at_zero?: FFBoolean;
  /** copy input stream time base when stream copying */
  copytb?: FFInt;
  /** timestamp discontinuity delta threshold */
  dts_delta_threshold?: FFFloat;
  /** timestamp error delta threshold */
  dts_error_threshold?: FFFloat;
  /** exit on error */
  xerror?: FFBoolean;
  /** abort on the specified condition flags */
  abort_on?: FFFunc;
  /** number of non-complex filter threads */
  filter_threads?: FFFunc;
  /** maximum number of buffered frames in a filter graph */
  filter_buffered_frames?: FFInt;
  /** create a complex filtergraph */
  filter_complex?: FFFunc;
  /** number of threads for -filter_complex */
  filter_complex_threads?: FFInt;
  /** create a complex filtergraph */
  lavfi?: FFFunc;
  /** print execution graph data to stderr */
  print_graphs?: FFBoolean;
  /** write execution graph data to the specified file */
  print_graphs_file?: FFString;
  /** set the output printing format (available formats are: default, compact, csv, flat, ini, json, xml, mermaid, mermaidhtml) */
  print_graphs_format?: FFString;
  /** enable automatic conversion filters globally */
  auto_conversion_filters?: FFBoolean;
  /** print progress report during encoding */
  stats?: FFBoolean;
  /** set the period at which ffmpeg updates stats and -progress output */
  stats_period?: FFFunc;
  /** print timestamp debugging info */
  debug_ts?: FFBoolean;
  /** ratio of decoding errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success. */
  max_error_rate?: FFFloat;
  /** dump video coding statistics to file */
  vstats?: FFFunc;
  /** dump video coding statistics to file */
  vstats_file?: FFFunc;
  /** Version of the vstats format to use. */
  vstats_version?: FFInt;
  /** set VAAPI hardware device (DirectX adapter index, DRM path or X11 display name) */
  vaapi_device?: FFFunc;
  /** initialise hardware device */
  init_hw_device?: FFFunc;
  /** set hardware device used when filtering */
  filter_hw_device?: FFFunc;
  extraOptions?: Record<string, unknown>;
}

/**
 * Build global args kwargs from typed options.
 */
export function buildGlobalArgsKwargs(options?: GlobalArgsOptions): Record<string, unknown> {
  return merge(
    {
      "loglevel": options?.loglevel,
      "v": options?.v,
      "report": options?.report,
      "max_alloc": options?.max_alloc,
      "cpuflags": options?.cpuflags,
      "cpucount": options?.cpucount,
      "hide_banner": options?.hide_banner,
      "y": options?.y,
      "n": options?.n,
      "ignore_unknown": options?.ignore_unknown,
      "copy_unknown": options?.copy_unknown,
      "recast_media": options?.recast_media,
      "benchmark": options?.benchmark,
      "benchmark_all": options?.benchmark_all,
      "progress": options?.progress,
      "stdin": options?.stdin,
      "timelimit": options?.timelimit,
      "dump": options?.dump,
      "hex": options?.hex,
      "frame_drop_threshold": options?.frame_drop_threshold,
      "copyts": options?.copyts,
      "start_at_zero": options?.start_at_zero,
      "copytb": options?.copytb,
      "dts_delta_threshold": options?.dts_delta_threshold,
      "dts_error_threshold": options?.dts_error_threshold,
      "xerror": options?.xerror,
      "abort_on": options?.abort_on,
      "filter_threads": options?.filter_threads,
      "filter_buffered_frames": options?.filter_buffered_frames,
      "filter_complex": options?.filter_complex,
      "filter_complex_threads": options?.filter_complex_threads,
      "lavfi": options?.lavfi,
      "print_graphs": options?.print_graphs,
      "print_graphs_file": options?.print_graphs_file,
      "print_graphs_format": options?.print_graphs_format,
      "auto_conversion_filters": options?.auto_conversion_filters,
      "stats": options?.stats,
      "stats_period": options?.stats_period,
      "debug_ts": options?.debug_ts,
      "max_error_rate": options?.max_error_rate,
      "vstats": options?.vstats,
      "vstats_file": options?.vstats_file,
      "vstats_version": options?.vstats_version,
      "vaapi_device": options?.vaapi_device,
      "init_hw_device": options?.init_hw_device,
      "filter_hw_device": options?.filter_hw_device,
    },
    options?.extraOptions,
  ) as Record<string, unknown>;
}
