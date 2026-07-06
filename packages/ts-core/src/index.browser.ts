/**
 * Browser-safe re-export of @typed-ffmpeg/core.
 * Excludes the Node.js execution utilities (run, runAsync, etc.) that
 * depend on child_process, which is not available in the browser.
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
