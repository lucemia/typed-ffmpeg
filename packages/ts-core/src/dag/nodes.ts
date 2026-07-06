/**
 * DAG node definitions for FFmpeg filter graphs.
 */

import { StreamType } from "../common/schema.js";
import { FFMpegTypeError, FFMpegValueError } from "../exceptions.js";
import type { KwargsValue } from "../utils/frozenRecord.js";
import { FilterableStream, _nodeFactories, _compileFactories, filterMultiOutput } from "./baseStreams.js";
import { Node, Stream } from "./schema.js";
import { run as runSync, runAwaitable } from "../utils/run.js";
import type { RunResult } from "../utils/run.js";


// ─── Concrete Stream Types ─────────────────────────────────────────────────

/** A video stream in the filter graph. */
export class VideoStream extends FilterableStream {
  get streamType(): StreamType {
    return StreamType.Video;
  }

  /** Apply a custom video filter. */
  vfilter(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
    },
  ): VideoStream {
    const node = filterMultiOutput(this, name, kwargs, {
      additionalInputs: options?.additionalInputs,
      inputTypings: options?.inputTypings ?? [StreamType.Video],
      outputTypings: [StreamType.Video],
    });
    return node.video(0) as VideoStream;
  }

  /** Apply a custom audio filter. */
  afilter(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
    },
  ): AudioStream {
    const node = filterMultiOutput(this, name, kwargs, {
      additionalInputs: options?.additionalInputs,
      inputTypings: options?.inputTypings ?? [StreamType.Audio],
      outputTypings: [StreamType.Audio],
    });
    return node.audio(0) as AudioStream;
  }

  /** Apply a filter with multiple outputs. */
  filterMultiOutput(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
      outputTypings?: StreamType[];
    },
  ): FilterNode {
    return filterMultiOutput(this, name, kwargs, options) as FilterNode;
  }
}

/** An audio stream in the filter graph. */
export class AudioStream extends FilterableStream {
  get streamType(): StreamType {
    return StreamType.Audio;
  }

  /** Apply a custom video filter. */
  vfilter(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
    },
  ): VideoStream {
    const node = filterMultiOutput(this, name, kwargs, {
      additionalInputs: options?.additionalInputs,
      inputTypings: options?.inputTypings ?? [StreamType.Video],
      outputTypings: [StreamType.Video],
    });
    return node.video(0) as VideoStream;
  }

  /** Apply a custom audio filter. */
  afilter(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
    },
  ): AudioStream {
    const node = filterMultiOutput(this, name, kwargs, {
      additionalInputs: options?.additionalInputs,
      inputTypings: options?.inputTypings ?? [StreamType.Audio],
      outputTypings: [StreamType.Audio],
    });
    return node.audio(0) as AudioStream;
  }

  /** Apply a filter with multiple outputs. */
  filterMultiOutput(
    name: string,
    kwargs: Record<string, KwargsValue> = {},
    options?: {
      additionalInputs?: FilterableStream[];
      inputTypings?: StreamType[];
      outputTypings?: StreamType[];
    },
  ): FilterNode {
    return filterMultiOutput(this, name, kwargs, options) as FilterNode;
  }
}

/** A subtitle stream in the filter graph. */
export class SubtitleStream extends FilterableStream {
  get streamType(): StreamType {
    return StreamType.Video; // Subtitles use video StreamType in FFmpeg
  }
}

/** A combined audio+video stream (e.g., from an InputNode). */
export class AVStream extends FilterableStream {
  get streamType(): StreamType {
    return StreamType.Video;
  }

  videoStream(index?: number | null, optional: boolean = false): VideoStream {
    return new VideoStream(this.node, index ?? null, optional);
  }

  audioStream(index?: number | null, optional: boolean = false): AudioStream {
    return new AudioStream(this.node, index ?? null, optional);
  }

  subtitleStream(index?: number | null, optional: boolean = false): SubtitleStream {
    return new SubtitleStream(this.node, index ?? null, optional);
  }

  get video(): VideoStream {
    return new VideoStream(this.node);
  }

  get audio(): AudioStream {
    return new AudioStream(this.node);
  }
}

// ─── Concrete Node Types ────────────────────────────────────────────────────

/** A node representing an FFmpeg filter operation. */
export class FilterNode extends Node {
  readonly name: string;
  declare readonly inputs: readonly FilterableStream[];
  readonly inputTypings: readonly StreamType[];
  readonly outputTypings: readonly StreamType[];

  constructor(
    name: string,
    inputs: readonly FilterableStream[] = [],
    kwargs: Record<string, KwargsValue> = {},
    inputTypings: readonly StreamType[] = [],
    outputTypings: readonly StreamType[] = [],
  ) {
    super(kwargs, inputs);
    this.name = name;
    this.inputTypings = Object.freeze([...inputTypings]);
    this.outputTypings = Object.freeze([...outputTypings]);
    this._validateTypings();
  }

  override repr(): string {
    return this.name;
  }

  /** Get a video output stream by index among video outputs. */
  video(index: number): VideoStream {
    const videoOutputs: number[] = [];
    for (let i = 0; i < this.outputTypings.length; i++) {
      if (this.outputTypings[i] === StreamType.Video) videoOutputs.push(i);
    }
    if (index >= videoOutputs.length) {
      throw new FFMpegValueError(
        `Index ${index} out of range for video outputs (${videoOutputs.length})`,
      );
    }
    return new VideoStream(this, videoOutputs[index]);
  }

  /** Get an audio output stream by index among audio outputs. */
  audio(index: number): AudioStream {
    const audioOutputs: number[] = [];
    for (let i = 0; i < this.outputTypings.length; i++) {
      if (this.outputTypings[i] === StreamType.Audio) audioOutputs.push(i);
    }
    if (index >= audioOutputs.length) {
      throw new FFMpegValueError(
        `Index ${index} out of range for audio outputs (${audioOutputs.length})`,
      );
    }
    return new AudioStream(this, audioOutputs[index]);
  }

  private _validateTypings(): void {
    if (this.inputs.length !== this.inputTypings.length) {
      throw new FFMpegValueError(
        `Expected ${this.inputTypings.length} inputs, got ${this.inputs.length}`,
      );
    }
    for (let i = 0; i < this.inputs.length; i++) {
      const stream = this.inputs[i];
      const expected = this.inputTypings[i];
      if (expected === StreamType.Video && !(stream instanceof VideoStream)) {
        throw new FFMpegTypeError(
          `Expected input ${i} to have video component, got ${stream.constructor.name}`,
        );
      }
      if (expected === StreamType.Audio && !(stream instanceof AudioStream)) {
        throw new FFMpegTypeError(
          `Expected input ${i} to have audio component, got ${stream.constructor.name}`,
        );
      }
    }
  }
}

/** A node representing an input file. */
export class InputNode extends Node {
  readonly filename: string;

  constructor(filename: string, kwargs: Record<string, KwargsValue> = {}) {
    super(kwargs, []);
    this.filename = filename;
  }

  override repr(): string {
    return this.filename.replace(/^.*[\\/]/, '') || this.filename;
  }

  get video(): VideoStream {
    return new VideoStream(this);
  }

  get audio(): AudioStream {
    return new AudioStream(this);
  }

  stream(): AVStream {
    return new AVStream(this);
  }
}

/** A node representing an output file. */
export class OutputNode extends Node {
  readonly filename: string;
  declare readonly inputs: readonly FilterableStream[];

  constructor(
    inputs: readonly FilterableStream[],
    filename: string,
    kwargs: Record<string, KwargsValue> = {},
  ) {
    super(kwargs, inputs);
    this.filename = filename;

    for (const stream of inputs) {
      if (stream.node instanceof LoopbackDecoderNode) {
        throw new FFMpegValueError(
          "A loopback decoder stream cannot be mapped to an output directly; " +
            "route it through a filter",
        );
      }
    }
  }

  override repr(): string {
    return this.filename.replace(/^.*[\\/]/, '') || this.filename;
  }

  stream(): OutputStream {
    return new OutputStream(this);
  }
}

// ─── Output / Global Stream Types ───────────────────────────────────────────

/** A stream representing an output file with execution capabilities. */
export class OutputStream extends Stream {
  declare readonly node: OutputNode;

  constructor(node: OutputNode, index: number | null = null) {
    super(node, index);
  }

  _globalNode(
    additionalStreams: OutputStream[] = [],
    kwargs: Record<string, KwargsValue> = {},
  ): GlobalNode {
    return new GlobalNode([this, ...additionalStreams], kwargs);
  }

  globalArgs(kwargs: Record<string, KwargsValue> = {}): GlobalStream {
    return this._globalNode([], kwargs).stream();
  }

  overwriteOutput(): GlobalStream {
    return this.globalArgs({ y: true });
  }

  /**
   * Create a loopback decoder tapping a stream of this output.
   *
   * Requires FFmpeg >= 7.0. A loopback decoder (`-dec of:ost`) decodes the
   * encoded output of an existing output stream and exposes the decoded
   * frames as a filtergraph input labeled `[dec:N]`. The referenced output
   * stream must be re-encoded (streamcopy outputs have no encoder to tap).
   */
  loopback(
    streamIndex: number = 0,
    kwargs: Record<string, KwargsValue> = {},
  ): LoopbackDecoderNode {
    return new LoopbackDecoderNode(
      [new OutputStream(this.node, streamIndex)],
      kwargs,
    );
  }

  compile(autoFix: boolean = true): string[] {
    if (!_compileFactories.compileAsList) {
      throw new Error("Compile factories not initialized. Import compileCli.ts first.");
    }
    return _compileFactories.compileAsList(this, autoFix);
  }

  compileLine(autoFix: boolean = true): string {
    if (!_compileFactories.compile) {
      throw new Error("Compile factories not initialized. Import compileCli.ts first.");
    }
    return _compileFactories.compile(this, autoFix);
  }

  run(ffmpegBinary: string = "ffmpeg", autoFix: boolean = true): RunResult {
    return runSync(this.compile(autoFix), ffmpegBinary);
  }

  async runAsync(ffmpegBinary: string = "ffmpeg", autoFix: boolean = true): Promise<RunResult> {
    return runAwaitable(this.compile(autoFix), ffmpegBinary);
  }
}

/** A node representing global FFmpeg options. */
export class GlobalNode extends Node {
  declare readonly inputs: readonly OutputStream[];

  constructor(inputs: readonly OutputStream[], kwargs: Record<string, KwargsValue> = {}) {
    super(kwargs, inputs);
  }

  stream(): GlobalStream {
    return new GlobalStream(this);
  }
}

/** A stream representing global FFmpeg options with execution capabilities. */
export class GlobalStream extends Stream {
  declare readonly node: GlobalNode;

  constructor(node: GlobalNode) {
    super(node);
  }

  _globalNode(
    additionalStreams: OutputStream[] = [],
    kwargs: Record<string, KwargsValue> = {},
  ): GlobalNode {
    const combinedInputs = [...this.node.inputs, ...additionalStreams];
    const combinedKwargs = { ...this.node.kwargs, ...kwargs };
    return new GlobalNode(combinedInputs, combinedKwargs);
  }

  globalArgs(kwargs: Record<string, KwargsValue> = {}): GlobalStream {
    return this._globalNode([], kwargs).stream();
  }

  overwriteOutput(): GlobalStream {
    return this.globalArgs({ y: true });
  }

  compile(autoFix: boolean = true): string[] {
    if (!_compileFactories.compileAsList) {
      throw new Error("Compile factories not initialized. Import compileCli.ts first.");
    }
    return _compileFactories.compileAsList(this, autoFix);
  }

  compileLine(autoFix: boolean = true): string {
    if (!_compileFactories.compile) {
      throw new Error("Compile factories not initialized. Import compileCli.ts first.");
    }
    return _compileFactories.compile(this, autoFix);
  }

  run(ffmpegBinary: string = "ffmpeg", autoFix: boolean = true): RunResult {
    return runSync(this.compile(autoFix), ffmpegBinary);
  }

  async runAsync(ffmpegBinary: string = "ffmpeg", autoFix: boolean = true): Promise<RunResult> {
    return runAwaitable(this.compile(autoFix), ffmpegBinary);
  }
}

/** Merge multiple output streams into a single runnable stream. */
export function mergeOutputs(...streams: OutputStream[]): OutputStream | GlobalStream {
  if (streams.length === 1) return streams[0];
  return streams[0]._globalNode(streams.slice(1)).stream();
}

// ─── Loopback Decoder ────────────────────────────────────────────────────────

/**
 * A node representing an FFmpeg loopback decoder (`-dec of:ost`).
 *
 * Requires FFmpeg >= 7.0. Its input references an already-defined output
 * stream (node = the OutputNode, index = the output stream index); its
 * output is a filterable stream labeled `[dec:N]` in filter graphs.
 */
export class LoopbackDecoderNode extends Node {
  declare readonly inputs: readonly OutputStream[];

  constructor(
    inputs: readonly [OutputStream],
    kwargs: Record<string, KwargsValue> = {},
  ) {
    super(kwargs, inputs);

    const tapped = inputs[0];
    const index = tapped.index ?? 0;
    const outInputs = tapped.node.inputs;

    const hasAVStream = outInputs.some((s) => s instanceof AVStream);
    if (!hasAVStream && index >= outInputs.length) {
      throw new FFMpegValueError(
        `stream_index ${index} is out of range for an output with ${outInputs.length} streams`,
      );
    }

    const codecKeys = ["c", "codec"];
    const tappedType = this.tappedType();
    if (tappedType === StreamType.Video) codecKeys.push("vcodec", "c:v");
    if (tappedType === StreamType.Audio) codecKeys.push("acodec", "c:a");
    for (const key of codecKeys) {
      const value = tapped.node.kwargs[key];
      if (value != null && String(value) === "copy") {
        throw new FFMpegValueError(
          `Cannot create a loopback decoder for a streamcopy output stream (${key}=copy): there is no encoder to tap`,
        );
      }
    }
  }

  override repr(): string {
    return "loopback";
  }

  /** Best-effort static type of the tapped output stream (null if unknowable). */
  private tappedType(): StreamType | null {
    const tapped = this.inputs[0];
    const index = tapped.index ?? 0;
    const outInputs = tapped.node.inputs;

    if (outInputs.slice(0, index + 1).some((s) => s instanceof AVStream)) {
      return null;
    }
    if (index >= outInputs.length) return null;
    const stream = outInputs[index];
    if (stream instanceof AVStream) return null;
    if (stream instanceof VideoStream) return StreamType.Video;
    if (stream instanceof AudioStream) return StreamType.Audio;
    return null;
  }

  get video(): VideoStream {
    const t = this.tappedType();
    if (t !== null && t !== StreamType.Video) {
      throw new FFMpegTypeError(`Tapped output stream is ${t}, not video`);
    }
    return new VideoStream(this);
  }

  get audio(): AudioStream {
    const t = this.tappedType();
    if (t !== null && t !== StreamType.Audio) {
      throw new FFMpegTypeError(`Tapped output stream is ${t}, not audio`);
    }
    return new AudioStream(this);
  }
}

// ─── Initialize late-bound factories ────────────────────────────────────────

_nodeFactories.createFilterNode = (name, inputs, kwargs, inputTypings, outputTypings) =>
  new FilterNode(name, inputs, kwargs, inputTypings, outputTypings);

_nodeFactories.createOutputNode = (inputs, filename, kwargs) =>
  new OutputNode(inputs, filename, kwargs);
