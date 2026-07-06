/**
 * @typed-ffmpeg/v8 - Type-safe FFmpeg v8 bindings for TypeScript.
 */

// Re-export core types
export {
  StreamType,
  Default, Auto,
  InputNode, OutputNode, LoopbackDecoderNode, FilterNode,
  OutputStream, GlobalNode, GlobalStream, AVStream, SubtitleStream,
  mergeOutputs,
  filterNodeFactory,
  compile, compileAsList,
  validate,
  run, runAsync, runAwaitable,
  FFMpegError, FFMpegTypeError, FFMpegValueError, FFMpegExecuteError,
} from "@typed-ffmpeg/core";

export type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFColor, FFFlags, FFDictionary, FFPixFmt,
  FFVideoRate, FFImageSize, FFRational, FFSampleFmt, FFBinary,
  FFMpegFilterDef, FFMpegFilter, FFMpegOption,
} from "@typed-ffmpeg/core";

// Generated stream classes with typed filter methods
export { VideoStream } from "./streams/video.js";
export { AudioStream } from "./streams/audio.js";

// Generated filter functions and sources
export * as filters from "./filters.js";
export * as sources from "./sources.js";

// Generated codec/format option factories
export * as codecs from "./codecs/encoders.js";
export * as decoders from "./codecs/decoders.js";
export * as muxers from "./formats/muxers.js";
export * as demuxers from "./formats/demuxers.js";

// Generated option factories
export * as codecOptions from "./options/codec.js";
export * as formatOptions from "./options/format.js";

// Generated typed input/output with all options
export { input } from "./dag/io/input.js";
export { output } from "./dag/io/output.js";
export { buildGlobalArgsKwargs } from "./dag/globalRunnable/globalArgs.js";
export type { GlobalArgsOptions } from "./dag/globalRunnable/globalArgs.js";
