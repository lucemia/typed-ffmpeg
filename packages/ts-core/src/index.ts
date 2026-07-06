/**
 * @typed-ffmpeg/core - Core runtime for typed-ffmpeg TypeScript bindings.
 *
 * Provides the DAG model, compilation pipeline, and execution utilities
 * for building type-safe FFmpeg filter graphs in TypeScript.
 */

// Schema
export { StreamType } from "./common/schema.js";
export type {
  FFMpegFilterDef,
  FFMpegFilter,
  FFMpegFilterOption,
  FFMpegFilterOptionChoice,
  FFMpegIOType,
  FFMpegOption,
} from "./common/schema.js";
export { FFMpegFilterOptionType, FFMpegFilterType, FFMpegOptionType, FFMpegOptionFlag } from "./common/schema.js";
export { isInputOption, isOutputOption, isGlobalOption } from "./common/schema.js";

// Types
export type {
  FFBoolean, FFInt, FFInt64, FFFloat, FFDouble, FFString,
  FFDuration, FFColor, FFFlags, FFDictionary, FFPixFmt,
  FFVideoRate, FFImageSize, FFRational, FFSampleFmt, FFBinary,
  FFFunc, FFTime, FFChannelLayout, FFUnsigned,
} from "./types.js";

// Utilities
export { Default, Auto, isDefault, isAuto } from "./utils/types.js";
export { merge, ignoreDefault } from "./utils/frozenRecord.js";
export type { FrozenKwargs, KwargsValue } from "./utils/frozenRecord.js";
export { escape, convertKwargsToArgs } from "./utils/escaping.js";

// Exceptions
export {
  FFMpegError,
  FFMpegTypeError,
  FFMpegValueError,
  FFMpegExecuteError,
} from "./exceptions.js";

// DAG
export { Node, Stream } from "./dag/schema.js";
export { FilterableStream } from "./dag/baseStreams.js";
export {
  FilterNode,
  InputNode,
  OutputNode,
  LoopbackDecoderNode,
  GlobalNode,
  VideoStream,
  AudioStream,
  SubtitleStream,
  AVStream,
  OutputStream,
  GlobalStream,
  mergeOutputs,
} from "./dag/nodes.js";
export { filterNodeFactory } from "./dag/factory.js";
export { isDAG } from "./dag/utils.js";

// Compile
export { DAGContext } from "./compile/context.js";
export { compile, compileAsList, getStreamLabel, getArgs, parse } from "./compile/compileCli.js";
export { validate, fixGraph, removeSplit, addSplit } from "./compile/validate.js";

// Run
export { run, runAsync, runAwaitable, commandLine } from "./utils/run.js";
export type { RunResult } from "./utils/run.js";
