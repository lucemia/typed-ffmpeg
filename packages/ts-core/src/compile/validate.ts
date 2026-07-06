/**
 * Graph validation and transformation for FFmpeg filter chains.
 *
 * Handles automatic insertion of split/asplit filters where streams
 * are reused as input to multiple filters.
 */

import { StreamType } from "../common/schema.js";
import { FilterableStream } from "../dag/baseStreams.js";
import {
  AudioStream,
  AVStream,
  FilterNode,
  GlobalNode,
  GlobalStream,
  InputNode,
  LoopbackDecoderNode,
  OutputNode,
  OutputStream,
  SubtitleStream,
  VideoStream,
} from "../dag/nodes.js";
import { Node, Stream } from "../dag/schema.js";
import { FFMpegValueError } from "../exceptions.js";
import type { KwargsValue } from "../utils/frozenRecord.js";
import { DAGContext } from "./context.js";

type StreamMapping = Map<Stream, Stream>;
type SplitKey = string;
type SplitMapping = Map<SplitKey, Stream>;

function splitKey(stream: Stream, node: Node | null, index: number | null): SplitKey {
  return `${stream.hex}:${node === null ? "null" : node.hex}:${index}`;
}

/** Rebuild a node with new inputs, preserving all other properties. */
function rebuildNodeWithInputs(node: Node, newInputs: readonly Stream[]): Node {
  if (node instanceof FilterNode) {
    return new FilterNode(
      node.name,
      newInputs as FilterableStream[],
      { ...node.kwargs },
      [...node.inputTypings],
      [...node.outputTypings],
    );
  }
  if (node instanceof InputNode) {
    return node;
  }
  if (node instanceof OutputNode) {
    return new OutputNode(
      newInputs as FilterableStream[],
      node.filename,
      { ...node.kwargs },
    );
  }
  if (node instanceof GlobalNode) {
    return new GlobalNode(
      newInputs as OutputStream[],
      { ...node.kwargs },
    );
  }
  if (node instanceof LoopbackDecoderNode) {
    return new LoopbackDecoderNode(
      [newInputs[0] as OutputStream],
      { ...node.kwargs },
    );
  }
  throw new FFMpegValueError(`Unknown node type: ${node.constructor.name}`);
}

/** Rebuild a stream pointing to a new node, preserving index and optional. */
function rebuildStream(stream: Stream, newNode: Node): Stream {
  if (stream instanceof VideoStream) {
    return new VideoStream(newNode, stream.index, stream.optional);
  }
  if (stream instanceof AudioStream) {
    return new AudioStream(newNode, stream.index, stream.optional);
  }
  if (stream instanceof AVStream) {
    return new AVStream(newNode, stream.index, stream.optional);
  }
  if (stream instanceof SubtitleStream) {
    return new SubtitleStream(newNode, stream.index, stream.optional);
  }
  if (stream instanceof OutputStream) {
    return new OutputStream(newNode as OutputNode, stream.index);
  }
  if (stream instanceof GlobalStream) {
    return new GlobalStream(newNode as GlobalNode);
  }
  throw new FFMpegValueError(`Unknown stream type: ${stream.constructor.name}`);
}

/** Remove all split/asplit nodes from the graph. */
export function removeSplit(
  currentStream: Stream,
  mapping?: StreamMapping,
): [Stream, StreamMapping] {
  if (!mapping) mapping = new Map();
  if (mapping.has(currentStream)) return [mapping.get(currentStream)!, mapping];

  if (currentStream.node.inputs.length === 0) {
    mapping.set(currentStream, currentStream);
    return [currentStream, mapping];
  }

  if (currentStream.node instanceof FilterNode) {
    const name = currentStream.node.name;
    if (name === "split" || name === "asplit") {
      removeSplit(currentStream.node.inputs[0], mapping);
      mapping.set(currentStream, mapping.get(currentStream.node.inputs[0])!);
      return [mapping.get(currentStream.node.inputs[0])!, mapping];
    }
  }

  const indexedInputs = currentStream.node.inputs.map((s, i) => [i, s] as const);
  const sorted = [...indexedInputs].sort(
    (a, b) => b[1].node.upstreamNodes.size - a[1].node.upstreamNodes.size,
  );

  const newInputs = new Map<number, Stream>();
  for (const [idx, inputStream] of sorted) {
    const [newStream] = removeSplit(inputStream, mapping);
    newInputs.set(idx, newStream);
  }

  const orderedInputs = [...newInputs.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, s]) => s);

  const newNode = rebuildNodeWithInputs(currentStream.node, orderedInputs);
  const newStream = rebuildStream(currentStream, newNode);

  mapping.set(currentStream, newStream);
  return [newStream, mapping];
}

/** Add split/asplit nodes where streams are reused. */
export function addSplit(
  currentStream: Stream,
  downNode: Node | null = null,
  downIndex: number | null = null,
  context?: DAGContext,
  mapping?: SplitMapping,
): [Stream, SplitMapping] {
  if (!context) context = DAGContext.build(currentStream.node);
  if (!mapping) mapping = new Map();

  const key = splitKey(currentStream, downNode, downIndex);
  if (mapping.has(key)) return [mapping.get(key)!, mapping];

  const indexedInputs = currentStream.node.inputs.map((s, i) => [i, s] as const);
  const sorted = [...indexedInputs].sort(
    (a, b) => b[1].node.upstreamNodes.size - a[1].node.upstreamNodes.size,
  );

  const newInputs = new Map<number, Stream>();
  for (const [idx, inputStream] of sorted) {
    const [newStream, newMapping] = addSplit(
      inputStream,
      currentStream.node,
      idx,
      context,
      mapping,
    );
    newInputs.set(idx, newStream);
    mapping = newMapping;
  }

  const orderedInputs = [...newInputs.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, s]) => s);

  const newNode = rebuildNodeWithInputs(currentStream.node, orderedInputs);
  const newStream = rebuildStream(currentStream, newNode);

  const outgoing = context.getOutgoingNodes(currentStream);
  if (outgoing.length < 2) {
    mapping.set(key, newStream);
    return [newStream, mapping];
  }

  // output streams tapped by loopback decoders are shared, never split
  if (
    currentStream.node instanceof InputNode ||
    currentStream.node instanceof OutputNode
  ) {
    for (const [node, index] of outgoing) {
      mapping.set(splitKey(currentStream, node, index), newStream);
    }
    return [newStream, mapping];
  }

  if (newStream instanceof VideoStream) {
    const splitNode = new FilterNode(
      "split",
      [newStream],
      { outputs: outgoing.length },
      [StreamType.Video],
      Array(outgoing.length).fill(StreamType.Video) as StreamType[],
    );
    for (let idx = 0; idx < outgoing.length; idx++) {
      const [node, index] = outgoing[idx];
      mapping.set(splitKey(currentStream, node, index), splitNode.video(idx));
    }
    return [mapping.get(key)!, mapping];
  } else if (newStream instanceof AudioStream) {
    const splitNode = new FilterNode(
      "asplit",
      [newStream],
      { outputs: outgoing.length },
      [StreamType.Audio],
      Array(outgoing.length).fill(StreamType.Audio) as StreamType[],
    );
    for (let idx = 0; idx < outgoing.length; idx++) {
      const [node, index] = outgoing[idx];
      mapping.set(splitKey(currentStream, node, index), splitNode.audio(idx));
    }
    return [mapping.get(key)!, mapping];
  }

  throw new FFMpegValueError(
    `Unsupported stream type for splitting: ${currentStream.constructor.name}`,
  );
}

/** Fix stream reuse issues by removing then re-adding split nodes. */
export function fixGraph(stream: Stream): Stream {
  const [withoutSplits] = removeSplit(stream);
  const [withSplits] = addSplit(withoutSplits);
  return withSplits;
}

/** Validate a filter graph and optionally fix stream reuse issues. */
export function validate(stream: Stream, autoFix: boolean = true): Stream {
  if (autoFix) {
    return fixGraph(stream);
  }
  return stream;
}
