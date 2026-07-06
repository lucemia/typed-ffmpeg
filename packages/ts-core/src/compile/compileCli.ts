/**
 * Compiles FFmpeg filter graphs into command-line arguments.
 * Also provides parse() to reconstruct a Stream from a CLI string.
 */

import {
  type FFMpegFilter,
  type FFMpegOption,
  StreamType,
  isGlobalOption,
  isInputOption,
  isOutputOption,
} from "../common/schema.js";
import { FilterableStream, _compileFactories } from "../dag/baseStreams.js";
import {
  AudioStream,
  AVStream,
  FilterNode,
  GlobalNode,
  InputNode,
  LoopbackDecoderNode,
  OutputNode,
  OutputStream,
  SubtitleStream,
  VideoStream,
} from "../dag/nodes.js";
import { Node, Stream } from "../dag/schema.js";
import { FFMpegValueError } from "../exceptions.js";
import { escape } from "../utils/escaping.js";
import { isDefault } from "../utils/types.js";
import { commandLine, run, runAwaitable } from "../utils/run.js";
import { DAGContext } from "./context.js";
import { validate } from "./validate.js";

/**
 * Compile a stream into a command-line string.
 */
export function compile(
  stream: Stream,
  autoFix: boolean = true,
): string {
  return "ffmpeg " + commandLine(compileAsList(stream, autoFix));
}

/**
 * Compile a stream into a list of FFmpeg command-line arguments.
 */
export function compileAsList(
  stream: Stream,
  autoFix: boolean = true,
): string[] {
  stream = validate(stream, autoFix);
  const node = stream.node;
  const context = DAGContext.build(node);

  const commands: string[] = [];

  // Global nodes
  for (const n of context.allNodes) {
    if (n instanceof GlobalNode) {
      commands.push(...getArgsGlobalNode(n, context));
    }
  }

  // Input nodes
  for (const n of context.allNodes) {
    if (n instanceof InputNode) {
      commands.push(...getArgsInputNode(n, context));
    }
  }

  // Filter nodes
  const filterNodes = context.allNodes.filter(
    (n): n is FilterNode => n instanceof FilterNode,
  );
  const sortedFilters = [...filterNodes].sort(
    (a, b) => a.upstreamNodes.size - b.upstreamNodes.size,
  );

  const vfCommands: string[] = [];
  for (const n of sortedFilters) {
    vfCommands.push(getArgsFilterNode(n, context).join(""));
  }

  if (vfCommands.length > 0) {
    commands.push("-filter_complex", vfCommands.join(";"));
  }

  // Output nodes, each immediately followed by any loopback decoders
  // tapping it (-dec references an already-defined output stream)
  const outputNodes = context.allNodes.filter(
    (n): n is OutputNode => n instanceof OutputNode,
  );
  const loopbackNodes = context.allNodes.filter(
    (n): n is LoopbackDecoderNode => n instanceof LoopbackDecoderNode,
  );
  for (const n of outputNodes) {
    commands.push(...getArgsOutputNode(n, context));
    for (const decNode of loopbackNodes) {
      // identity comparison — see getLoopbackIndices for why .hex is unsafe here
      if (decNode.inputs[0].node === n) {
        commands.push(...getArgsLoopbackDecoderNode(decNode, context));
      }
    }
  }

  return commands;
}

/**
 * Map each LoopbackDecoderNode to its dec:N label index.
 *
 * FFmpeg numbers [dec:N] labels by -dec occurrence order on the command
 * line; compileAsList emits outputs in DAG order with each output's
 * decoders immediately after it, so indices are assigned in that order.
 *
 * Node comparison uses object identity (===), matching the dedup
 * convention used by DAGContext (see removeDuplicates in context.ts):
 * a LoopbackDecoderNode's tapped OutputStream always points at the very
 * OutputNode instance collected into the context (collect() walks
 * through the decoder's own inputs), so identity comparison is both
 * sufficient and required here — a looser structural (.hex) comparison
 * would incorrectly match a decoder against every hex-equal duplicate
 * output produced when validate() rebuilds a graph where one output is
 * tapped by more than one loopback decoder.
 */
export function getLoopbackIndices(context: DAGContext): Map<Node, number> {
  const outputNodes = context.allNodes.filter(
    (n): n is OutputNode => n instanceof OutputNode,
  );
  const loopbackNodes = context.allNodes.filter(
    (n): n is LoopbackDecoderNode => n instanceof LoopbackDecoderNode,
  );

  const indices = new Map<Node, number>();
  for (const outputNode of outputNodes) {
    for (const decNode of loopbackNodes) {
      if (decNode.inputs[0].node === outputNode) {
        indices.set(decNode, indices.size);
      }
    }
  }
  return indices;
}

/**
 * Generate the FFmpeg label for a stream.
 */
export function getStreamLabel(stream: Stream, context?: DAGContext): string {
  if (!context) context = DAGContext.build(stream.node);

  if (stream.node instanceof InputNode) {
    const label = getNodeLabel(stream.node, context);
    if (stream instanceof AVStream) return label;
    if (stream instanceof VideoStream) {
      return stream.index != null ? `${label}:v:${stream.index}` : `${label}:v`;
    }
    if (stream instanceof AudioStream) {
      return stream.index != null ? `${label}:a:${stream.index}` : `${label}:a`;
    }
    if (stream instanceof SubtitleStream) {
      return stream.index != null ? `${label}:s:${stream.index}` : `${label}:s`;
    }
    throw new FFMpegValueError(`Unknown stream type: ${stream.constructor.name}`);
  }

  if (stream.node instanceof FilterNode) {
    const label = getNodeLabel(stream.node, context);
    if (stream.node.outputTypings.length > 1) {
      return `${label}#${stream.index}`;
    }
    return label;
  }

  if (stream.node instanceof LoopbackDecoderNode) {
    return `dec:${getLoopbackIndices(context).get(stream.node)}`;
  }

  if (stream.node instanceof OutputNode) {
    return getNodeLabel(stream.node, context);
  }

  throw new FFMpegValueError(`Unknown node type: ${stream.node.constructor.name}`);
}

/**
 * Generate the filter string for a FilterNode.
 */
export function getArgsFilterNode(node: FilterNode, context: DAGContext): string[] {
  const incomingLabels = node.inputs
    .map((k) => `[${getStreamLabel(k, context)}]`)
    .join("");

  const outputs = context.getOutgoingStreams(node);
  const sortedOutputs = [...outputs].sort(
    (a, b) => (a.index ?? 0) - (b.index ?? 0),
  );
  const outgoingLabels = sortedOutputs
    .map((s) => `[${getStreamLabel(s, context)}]`)
    .join("");

  const commands: string[] = [];
  for (const [key, value] of Object.entries(node.kwargs)) {
    if (isDefault(value)) continue;
    const v = typeof value === "boolean" ? String(Number(value)) : value;
    commands.push(`${key}=${escape(v)}`);
  }

  if (commands.length > 0) {
    return [
      incomingLabels,
      `${node.name}=`,
      escape(commands.join(":"), "\\\\'[],;"),
      outgoingLabels,
    ];
  }
  return [incomingLabels, node.name, outgoingLabels];
}

/**
 * Generate CLI args for an InputNode.
 */
export function getArgsInputNode(node: InputNode, _context: DAGContext): string[] {
  const commands: string[] = [];
  for (const [key, value] of Object.entries(node.kwargs)) {
    if (typeof value === "boolean") {
      commands.push(value ? `-${key}` : `-no${key}`);
    } else {
      commands.push(`-${key}`, String(value));
    }
  }
  commands.push("-i", node.filename);
  return commands;
}

/**
 * Generate CLI args for an OutputNode.
 */
export function getArgsOutputNode(node: OutputNode, context: DAGContext): string[] {
  const commands: string[] = [];

  // Handle stream mapping
  for (const input of node.inputs) {
    if (input.node instanceof InputNode) {
      // Special case: single input, single output, unmapped AVStream
      if (
        input.index == null &&
        input instanceof AVStream &&
        context.allNodes.filter((n) => n instanceof InputNode).length === 1 &&
        context.allNodes.filter((n) => n instanceof OutputNode).length === 1 &&
        node.inputs.length === 1
      ) {
        continue;
      }
      if (input.optional) {
        commands.push("-map", `${getStreamLabel(input, context)}?`);
      } else {
        commands.push("-map", getStreamLabel(input, context));
      }
    } else {
      commands.push("-map", `[${getStreamLabel(input, context)}]`);
    }
  }

  for (const [key, value] of Object.entries(node.kwargs)) {
    if (typeof value === "boolean") {
      commands.push(value ? `-${key}` : `-no${key}`);
    } else {
      commands.push(`-${key}`, String(value));
    }
  }
  commands.push(node.filename);
  return commands;
}

/**
 * Resolve the output-file index (of) for a node, tolerating structural
 * duplicates: context.nodeIds is keyed by object identity, but the tapped
 * node may be a structurally-equal instance that dedup dropped (Python's
 * dict handles this via value equality; TS needs the hex fallback).
 */
function outputNodeId(context: DAGContext, node: Node): number {
  const direct = context.nodeIds.get(node);
  if (direct !== undefined) return direct;
  for (const [n, id] of context.nodeIds) {
    if (n instanceof OutputNode && n.hex === node.hex) return id;
  }
  throw new FFMpegValueError("Tapped output node not found in DAG context");
}

/** Generate CLI args for a LoopbackDecoderNode: decoder options then -dec of:ost. */
export function getArgsLoopbackDecoderNode(
  node: LoopbackDecoderNode,
  context: DAGContext,
): string[] {
  const commands: string[] = [];
  for (const [key, value] of Object.entries(node.kwargs)) {
    if (typeof value === "boolean") {
      commands.push(value ? `-${key}` : `-no${key}`);
    } else {
      commands.push(`-${key}`, String(value));
    }
  }
  const tapped = node.inputs[0];
  const of = outputNodeId(context, tapped.node);
  const ost = tapped.index ?? 0;
  commands.push("-dec", `${of}:${ost}`);
  return commands;
}

/**
 * Generate CLI args for a GlobalNode.
 */
export function getArgsGlobalNode(node: GlobalNode, _context: DAGContext): string[] {
  const commands: string[] = [];
  for (const [key, value] of Object.entries(node.kwargs)) {
    if (typeof value === "boolean") {
      commands.push(value ? `-${key}` : `-no${key}`);
    } else {
      commands.push(`-${key}`, String(value));
    }
  }
  return commands;
}

/**
 * Get the label for a node.
 */
export function getNodeLabel(node: Node, context: DAGContext): string {
  const id = context.nodeIds.get(node) ?? 0;
  if (node instanceof InputNode) return String(id);
  if (node instanceof FilterNode) return `s${id}`;
  return "out";
}

/**
 * Dispatch to the appropriate getArgs function for a node.
 */
export function getArgs(node: Node, context?: DAGContext): string[] {
  if (!context) context = DAGContext.build(node);
  if (node instanceof FilterNode) return getArgsFilterNode(node, context);
  if (node instanceof InputNode) return getArgsInputNode(node, context);
  if (node instanceof OutputNode) return getArgsOutputNode(node, context);
  if (node instanceof GlobalNode) return getArgsGlobalNode(node, context);
  if (node instanceof LoopbackDecoderNode)
    return getArgsLoopbackDecoderNode(node, context);
  throw new FFMpegValueError(`Unknown node type: ${node.constructor.name}`);
}

// ─── Parse helpers ────────────────────────────────────────────────────────────

/**
 * Minimal shell-style tokenizer: splits a command string respecting
 * single-quoted, double-quoted, and backslash-escaped tokens.
 */
function shlexSplit(cli: string): string[] {
  const tokens: string[] = [];
  let current = "";
  let i = 0;
  while (i < cli.length) {
    const ch = cli[i];
    if (ch === "\\") {
      current += cli[++i] ?? "";
      i++;
    } else if (ch === '"') {
      i++;
      while (i < cli.length && cli[i] !== '"') {
        if (cli[i] === "\\") current += cli[++i] ?? "";
        else current += cli[i];
        i++;
      }
      i++; // closing "
    } else if (ch === "'") {
      i++;
      while (i < cli.length && cli[i] !== "'") {
        current += cli[i++];
      }
      i++; // closing '
    } else if (ch === " " || ch === "\t") {
      if (current.length > 0) {
        tokens.push(current);
        current = "";
      }
      i++;
    } else {
      current += ch;
      i++;
    }
  }
  if (current.length > 0) tokens.push(current);
  return tokens;
}

/** Split text on an unescaped separator character. */
function splitUnescaped(text: string, sep: string): string[] {
  const escaped = sep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.split(new RegExp(`(?<!\\\\)${escaped}`));
}

/**
 * Parse filter params string into a dict.
 * Supports named (key=value) and positional params.
 */
function parseFilterParams(
  paramStr: string,
  filterOptions: readonly { name: string }[],
): Record<string, string> {
  if (!paramStr) return {};
  const result: Record<string, string> = {};
  const parts = splitUnescaped(paramStr, ":");
  let positionalIdx = 0;
  for (const rawPart of parts) {
    const part = rawPart.trim();
    if (!part) continue;
    const eqMatch = part.match(/^((?:[^\\=]|\\.)*?)(?<!\\)=(.*)$/s);
    if (eqMatch) {
      result[eqMatch[1].trim()] = eqMatch[2].trim();
    } else {
      if (positionalIdx < filterOptions.length) {
        result[filterOptions[positionalIdx].name] = part;
      }
      positionalIdx++;
    }
  }
  return result;
}

/** Check if a token is a filename / output URL (not an option flag). */
function isFilename(token: string): boolean {
  if (token.startsWith("-")) return false;
  if (/^\w+:\/\//.test(token)) return true; // protocol URL
  if (/^pipe:\d*$/.test(token)) return true; // pipe:
  if (["/dev/null", "/dev/stdin", "/dev/stdout", "/dev/stderr", "-"].includes(token))
    return true;
  return token.includes(".");
}

/** Parse a stream selector like "0:v", "0:a:0", "some_label" from stream mapping. */
function parseStreamSelector(
  selector: string,
  mapping: Map<string, FilterableStream>,
): FilterableStream {
  const s = selector.replace(/^\[/, "").replace(/\]$/, "");
  const optionalSuffix = s.endsWith("?");
  const clean = optionalSuffix ? s.slice(0, -1) : s;

  let streamLabel: string;
  let streamType: string | null = null;

  if (clean.includes(":")) {
    const parts = clean.split(":");
    streamLabel = parts[0];
    streamType = parts[1];
  } else {
    streamLabel = clean;
  }

  const stream = mapping.get(streamLabel);
  if (!stream) {
    throw new FFMpegValueError(`Unknown stream label: ${streamLabel}`);
  }

  if (stream instanceof AVStream && streamType) {
    const srcNode = stream.node as InputNode;
    switch (streamType) {
      case "v": return new VideoStream(srcNode);
      case "a": return new AudioStream(srcNode);
      case "s": return new SubtitleStream(srcNode);
    }
  }
  return stream;
}

/** Parse option tokens into a dict: { name -> [value,...] }. */
function parseOptions(tokens: string[]): Record<string, (string | null | boolean)[]> {
  const result: Record<string, (string | null | boolean)[]> = {};
  let i = 0;
  while (i < tokens.length) {
    const tok = tokens[i];
    if (!tok.startsWith("-")) {
      throw new FFMpegValueError(`Expected option, got ${JSON.stringify(tok)}`);
    }
    if (i + 1 >= tokens.length || tokens[i + 1].startsWith("-")) {
      const name = tok.startsWith("-no") ? tok.slice(3) : tok.slice(1);
      const val: boolean | null = tok.startsWith("-no") ? false : null;
      result[name] = [val];
      i++;
    } else {
      const name = tok.slice(1);
      if (!result[name]) result[name] = [];
      result[name].push(tokens[i + 1]);
      i += 2;
    }
  }
  return result;
}

/** Parse global options (before the first -i). */
function parseGlobal(
  tokens: string[],
  ffmpegOptions: Map<string, FFMpegOption>,
): [Record<string, string | boolean>, string[]] {
  const firstI = tokens.indexOf("-i");
  // Only scan tokens before the first -i for global options; pass all tokens
  // through as remaining so that pre-input options (e.g. -ss, -t) are
  // picked up by parseInputTokens.
  const globalTokens = firstI >= 0 ? tokens.slice(0, firstI) : [];
  const opts = parseOptions(globalTokens);
  const params: Record<string, string | boolean> = {};
  for (const [key, values] of Object.entries(opts)) {
    const opt = ffmpegOptions.get(key);
    if (opt && isGlobalOption(opt)) {
      const v = values[values.length - 1];
      params[key] = v === null ? true : v === false ? false : (v as string);
    }
  }
  return [params, tokens];
}

/** Parse all -i input specifications. */
function parseInputTokens(
  tokens: string[],
  ffmpegOptions: Map<string, FFMpegOption>,
): Map<string, FilterableStream> {
  const result = new Map<string, FilterableStream>();
  let idx = 0;
  let remaining = tokens.slice();

  while (remaining.includes("-i")) {
    const iIdx = remaining.indexOf("-i");
    const filename = remaining[iIdx + 1];
    const inputOptTokens = remaining.slice(0, iIdx);
    const opts = parseOptions(inputOptTokens);
    const kwargs: Record<string, string | boolean> = {};
    for (const [key, values] of Object.entries(opts)) {
      const opt = ffmpegOptions.get(key);
      if (opt && isInputOption(opt)) {
        const v = values[values.length - 1];
        kwargs[key] = v === null ? true : v === false ? false : (v as string);
      }
    }
    const node = new InputNode(filename, kwargs);
    result.set(String(idx), new AVStream(node));
    idx++;
    remaining = remaining.slice(iIdx + 2);
  }
  return result;
}

/** Parse filter_complex string into stream mapping. */
function parseFilterComplex(
  filterComplex: string,
  streamMapping: Map<string, FilterableStream>,
  ffmpegFilters: Map<string, FFMpegFilter>,
): Map<string, FilterableStream> {
  const chains = splitUnescaped(filterComplex, ";");
  let chainCounter = 0;

  for (const rawChain of chains) {
    const chain = rawChain.trim();
    if (!chain) continue;

    // Extract leading [label] groups
    const leadingMatch = chain.match(/^(\[[^\[\]]+\])*/) ;
    const chainInputLabels = [...(leadingMatch?.[0] ?? "").matchAll(/\[([^\[\]]+)\]/g)].map(m => m[1]);
    const rest = chain.slice((leadingMatch?.[0] ?? "").length);

    // Extract trailing [label] groups — iterative scan to avoid ReDoS
    let trailingStart = rest.length;
    while (trailingStart >= 2 && rest[trailingStart - 1] === "]") {
      const open = rest.lastIndexOf("[", trailingStart - 2);
      if (open === -1) break;
      // Ensure no nested brackets between open and trailingStart
      const segment = rest.slice(open + 1, trailingStart - 1);
      if (segment.includes("[") || segment.includes("]")) break;
      trailingStart = open;
    }
    const trailingSuffix = rest.slice(trailingStart);
    const chainOutputLabels = [...trailingSuffix.matchAll(/\[([^\[\]]+)\]/g)].map(m => m[1]);
    const filtersStr = rest.slice(0, trailingStart).trim();

    // Split by unescaped comma (sequential chaining)
    const filterParts = splitUnescaped(filtersStr, ",");
    let currentInputLabels = chainInputLabels;

    for (let pi = 0; pi < filterParts.length; pi++) {
      const filterPart = filterParts[pi].trim();
      if (!filterPart) continue;

      const isLast = pi === filterParts.length - 1;
      const currentOutputLabels = isLast
        ? chainOutputLabels
        : [`_chain_${chainCounter++}`];

      // Split filter name and params on first unescaped =
      let filterName: string;
      let paramStr: string;
      const eqIdx = filterPart.search(/(?<!\\)=/);
      if (eqIdx >= 0) {
        filterName = filterPart.slice(0, eqIdx).trim();
        paramStr = filterPart.slice(eqIdx + 1).trim();
      } else {
        filterName = filterPart.trim();
        paramStr = "";
      }

      if (!filterName) {
        throw new FFMpegValueError(`Empty filter name in: ${filterPart}`);
      }

      // Look up filter (with fallback for unknown)
      const ffmpegFilter = ffmpegFilters.get(filterName);
      let inputTypings: ("video" | "audio")[];
      let outputTypings: ("video" | "audio")[];
      let filterOptions: readonly { name: string }[];

      if (ffmpegFilter) {
        inputTypings = ffmpegFilter.formulaTypingsInput
          ? (ffmpegFilter.formulaTypingsInput.split(",").map(s => s.trim()) as ("video" | "audio")[])
          : ffmpegFilter.streamTypingsInput.map(t => t.type === StreamType.Audio ? "audio" : "video");
        outputTypings = ffmpegFilter.formulaTypingsOutput
          ? (ffmpegFilter.formulaTypingsOutput.split(",").map(s => s.trim()) as ("video" | "audio")[])
          : ffmpegFilter.streamTypingsOutput.map(t => t.type === StreamType.Audio ? "audio" : "video");
        filterOptions = ffmpegFilter.options;
      } else {
        // Fallback: infer from connected input streams
        inputTypings = currentInputLabels.map(label => {
          const s = streamMapping.get(label);
          return s instanceof AudioStream ? "audio" : "video";
        });
        outputTypings = inputTypings.length > 0 ? [inputTypings[0]] : ["video"];
        filterOptions = [];
      }

      const filterParams = parseFilterParams(paramStr, filterOptions);

      const inputStreams = currentInputLabels.map(label =>
        parseStreamSelector(label, streamMapping)
      );

      const kwargs: Record<string, unknown> = {};
      if (ffmpegFilter) {
        for (const opt of ffmpegFilter.options) {
          if (opt.default !== undefined && opt.default !== null) {
            kwargs[opt.name] = opt.default;
          }
        }
      }
      Object.assign(kwargs, filterParams);

      const filterNode = new FilterNode(
        filterName,
        inputStreams,
        kwargs as Record<string, string | number | boolean>,
        inputTypings.map(t => t === "audio" ? StreamType.Audio : StreamType.Video),
        outputTypings.map(t => t === "audio" ? StreamType.Audio : StreamType.Video),
      );

      for (let oi = 0; oi < currentOutputLabels.length && oi < outputTypings.length; oi++) {
        const label = currentOutputLabels[oi];
        if (outputTypings[oi] === "audio") {
          streamMapping.set(label, new AudioStream(filterNode, oi));
        } else {
          streamMapping.set(label, new VideoStream(filterNode, oi));
        }
      }

      currentInputLabels = currentOutputLabels;
    }
  }

  return streamMapping;
}

/** Parse output file specifications. */
function parseOutputTokens(
  source: string[],
  inStreams: Map<string, FilterableStream>,
  ffmpegOptions: Map<string, FFMpegOption>,
): OutputStream[] {
  const tokens = source.slice();
  const exports: OutputStream[] = [];
  let buffer: string[] = [];

  while (tokens.length > 0) {
    const token = tokens.shift()!;
    if (!isFilename(token)) {
      buffer.push(token);
      continue;
    }

    const filename = token;
    const opts = parseOptions(buffer);
    buffer = [];

    const mapOptions = opts["map"] ?? [];
    const inputs: FilterableStream[] = [];
    for (const m of mapOptions) {
      if (typeof m === "string") {
        inputs.push(parseStreamSelector(m, inStreams));
      }
    }

    if (inputs.length === 0) {
      const avStreams = [...inStreams.values()].filter(s => s instanceof AVStream);
      if (avStreams.length === 1) inputs.push(avStreams[0]);
    }

    delete opts["map"];
    const kwargs: Record<string, string | boolean> = {};
    for (const [key, values] of Object.entries(opts)) {
      const baseKey = key.split(":")[0];
      const opt = ffmpegOptions.get(baseKey);
      if (opt && isOutputOption(opt)) {
        const v = values[values.length - 1];
        kwargs[key] = v === null ? true : v === false ? false : (v as string);
      }
    }

    exports.push(new OutputStream(new OutputNode(inputs, filename, kwargs)));
  }

  return exports;
}

/**
 * Parse a complete FFmpeg command line into a Stream object.
 *
 * Handles:
 * - Global options (-y, -loglevel, …)
 * - Multiple input files with input options (-ss, -t, …)
 * - -filter_complex with named and positional params, filter chaining (,)
 * - -vf / -af simple filter chain shorthands
 * - Output files with stream mapping and output options
 *
 * @param cli - Full FFmpeg command string (e.g. "ffmpeg -i in.mp4 -vf scale=1280:720 out.mp4")
 * @param ffmpegFilters - Map of filter name → FFMpegFilter metadata
 * @param ffmpegOptions - Map of option name → FFMpegOption metadata
 * @returns A Stream representing the parsed command
 *
 * @example
 * ```ts
 * const stream = parse(
 *   "ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4",
 *   filtersMap,
 *   optionsMap,
 * );
 * ```
 */
export function parse(
  cli: string,
  ffmpegFilters: Map<string, FFMpegFilter>,
  ffmpegOptions: Map<string, FFMpegOption>,
): Stream {
  let tokens = shlexSplit(cli);

  // strip "ffmpeg" / "ffmpeg.exe" binary name
  if (tokens[0].toLowerCase().replace(/\.exe$/, "") === "ffmpeg") {
    tokens = tokens.slice(1);
  }

  if (tokens.includes("-dec")) {
    throw new FFMpegValueError(
      "loopback decoders (-dec) are not supported by parse()",
    );
  }

  const [globalParams, remaining] = parseGlobal(tokens, ffmpegOptions);

  const lastIIdx = remaining.lastIndexOf("-i");
  const inputStreams = parseInputTokens(remaining.slice(0, lastIIdx + 2), ffmpegOptions);
  let outputTokens = remaining.slice(lastIIdx + 2);

  const filterComplexParts: string[] = [];
  const extraMapTokens: string[] = [];

  /** Drain all occurrences of a simple filter flag (-vf or -af) into filter_complex. */
  function drainSimpleFilterFlag(flag: string, streamRef: string, tokens: string[]): string[] {
    let idx: number;
    while ((idx = tokens.indexOf(flag)) >= 0) {
      const label = `_${flag.slice(1)}_out_${filterComplexParts.length}`;
      filterComplexParts.push(`[${streamRef}]${tokens[idx + 1]}[${label}]`);
      extraMapTokens.push("-map", `[${label}]`);
      tokens = [...tokens.slice(0, idx), ...tokens.slice(idx + 2)];
    }
    return tokens;
  }

  outputTokens = drainSimpleFilterFlag("-vf", "0:v", outputTokens);
  outputTokens = drainSimpleFilterFlag("-af", "0:a", outputTokens);

  // -filter_complex
  const fcIdx = outputTokens.indexOf("-filter_complex");
  if (fcIdx >= 0) {
    filterComplexParts.push(outputTokens[fcIdx + 1]);
    outputTokens = [...outputTokens.slice(0, fcIdx), ...outputTokens.slice(fcIdx + 2)];
  }

  const filterableStreams = new Map<string, FilterableStream>(inputStreams);
  if (filterComplexParts.length > 0) {
    parseFilterComplex(filterComplexParts.join(";"), filterableStreams, ffmpegFilters);
  }

  // Inject implicit -map tokens for -vf/-af before the first output filename
  if (extraMapTokens.length > 0) {
    const newOutput: string[] = [];
    let injected = false;
    for (const tok of outputTokens) {
      if (!injected && isFilename(tok)) {
        newOutput.push(...extraMapTokens);
        injected = true;
      }
      newOutput.push(tok);
    }
    outputTokens = newOutput;
  }

  const outputStreams = parseOutputTokens(outputTokens, filterableStreams, ffmpegOptions);

  const allOutputStreams = outputStreams.map(s => s.node as OutputNode);
  let result: Stream;

  if (allOutputStreams.length === 1) {
    result = allOutputStreams[0].stream();
  } else {
    const globalNode = new GlobalNode(outputStreams, {});
    result = globalNode.stream();
  }

  if (Object.keys(globalParams).length > 0) {
    if (result.node instanceof GlobalNode) {
      // Already a GlobalNode — merge kwargs
      const merged = { ...result.node.kwargs, ...globalParams };
      result = new GlobalNode((result.node as GlobalNode).inputs as OutputStream[], merged).stream();
    } else if (result instanceof OutputStream) {
      result = result.globalArgs(globalParams);
    }
  }

  return result;
}

// ─── Initialize late-bound compile factories ─────────────────────────────────

_compileFactories.compileAsList = compileAsList;
_compileFactories.compile = compile;
_compileFactories.run = run;
_compileFactories.runAwaitable = runAwaitable;
