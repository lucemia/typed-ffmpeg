import { describe, expect, it } from "vitest";
import {
  InputNode,
  LoopbackDecoderNode,
  OutputNode,
  OutputStream,
  VideoStream,
  AudioStream,
  FilterNode,
} from "../dag/nodes.js";
import { FFMpegTypeError, FFMpegValueError } from "../exceptions.js";
import { StreamType } from "../common/schema.js";
import { compileAsList, parse } from "../compile/compileCli.js";

describe("LoopbackDecoderNode model", () => {
  it("constructs via OutputStream.loopback()", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);

    expect(dec).toBeInstanceOf(LoopbackDecoderNode);
    expect(dec.inputs[0].node).toBe(enc);
    expect(dec.inputs[0].index).toBe(0);
    expect(dec.video).toBeInstanceOf(VideoStream);
  });

  it("records decoder options in kwargs", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0, { c: "h264", threads: 2 });

    expect(dec.kwargs["c"]).toBe("h264");
    expect(dec.kwargs["threads"]).toBe(2);
  });

  it("rejects mismatched typed accessors", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);
    expect(() => dec.audio).toThrow(FFMpegTypeError);

    const aenc = new OutputNode([source.audio], "-", { f: "null", acodec: "aac" });
    const adec = aenc.stream().loopback(0);
    expect(adec.audio).toBeInstanceOf(AudioStream);
    expect(() => adec.video).toThrow(FFMpegTypeError);
  });

  it("rejects streamcopy taps", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "c.mkv", { c: "copy" });
    expect(() => enc.stream().loopback(0)).toThrow(FFMpegValueError);

    const enc2 = new OutputNode([source.video], "c.mkv", { vcodec: "copy" });
    expect(() => enc2.stream().loopback(0)).toThrow(FFMpegValueError);
  });

  it("rejects out-of-range stream index", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "o.mkv", { vcodec: "libx264" });
    expect(() => enc.stream().loopback(1)).toThrow(FFMpegValueError);
  });

  it("skips static checks when the output maps an AVStream", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.stream()], "o.mkv", { vcodec: "libx264" });
    const dec = enc.stream().loopback(3); // no bounds error
    expect(dec.video).toBeInstanceOf(VideoStream); // no type error
  });

  it("rejects decoder streams mapped directly to an output", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0);
    expect(() => new OutputNode([dec.video], "direct.mkv")).toThrow(FFMpegValueError);
  });

  it("rejects a wrong number of tapped inputs at runtime", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const os = enc.stream();
    // bypass the compile-time tuple type to simulate a plain-JS caller
    expect(() => new LoopbackDecoderNode([] as any, {})).toThrow(FFMpegValueError);
    expect(
      () =>
        new LoopbackDecoderNode(
          [new OutputStream(os.node, 0), new OutputStream(os.node, 1)] as any,
          {},
        ),
    ).toThrow(FFMpegValueError);
  });
});

describe("loopback compile", () => {
  function canonicalGraph() {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", {
      f: "null",
      vcodec: "libx264",
      crf: 45,
    });
    const dec = enc.stream().loopback(0);
    const stacked = new FilterNode(
      "hstack",
      [source.video, dec.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    return new OutputNode([stacked.video(0)], "OUT.mkv", { vcodec: "ffv1" });
  }

  it("compiles the canonical hstack example", () => {
    const args = compileAsList(canonicalGraph().stream());
    expect(args).toEqual([
      "-i", "INPUT",
      "-filter_complex", "[0:v][dec:0]hstack[s0]",
      "-map", "0:v", "-f", "null", "-vcodec", "libx264", "-crf", "45", "-",
      "-dec", "0:0",
      "-map", "[s0]", "-vcodec", "ffv1", "OUT.mkv",
    ]);
  });

  it("emits decoder options before -dec", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const dec = enc.stream().loopback(0, { c: "h264", threads: 2 });
    const stacked = new FilterNode(
      "hstack",
      [source.video, dec.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    const decPos = args.indexOf("-dec");
    expect(args.slice(decPos, decPos + 2)).toEqual(["-dec", "0:0"]);
    expect(args.slice(decPos - 4, decPos)).toEqual(["-c", "h264", "-threads", "2"]);
  });

  it("numbers dec:N labels in -dec occurrence order", () => {
    const source = new InputNode("INPUT");
    const encA = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const encB = new OutputNode([source.video], "-", { f: "null", vcodec: "libx265" });
    const decA = encA.stream().loopback(0);
    const decB = encB.stream().loopback(0);
    const stacked = new FilterNode(
      "hstack",
      [decA.video, decB.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    const fc = args[args.indexOf("-filter_complex") + 1];
    expect(fc).toContain("[dec:0][dec:1]hstack");

    const decPositions = args
      .map((a, i) => (a === "-dec" ? i : -1))
      .filter((i) => i >= 0);
    expect(decPositions).toHaveLength(2);
    expect(args[decPositions[0] + 1]).toBe("0:0");
    expect(args[decPositions[1] + 1]).toBe("1:0");
  });

  it("splits reused decoder streams but never the tapped output stream", () => {
    const source = new InputNode("INPUT");
    const enc = new OutputNode([source.video], "-", { f: "null", vcodec: "libx264" });
    const decA = enc.stream().loopback(0);
    const decB = enc.stream().loopback(0, { threads: 2 });
    const stacked = new FilterNode(
      "hstack",
      [decA.video, decB.video],
      {},
      [StreamType.Video, StreamType.Video],
      [StreamType.Video],
    );
    const out = new OutputNode([stacked.video(0)], "OUT.mkv");

    const args = compileAsList(out.stream());
    expect(args.filter((a) => a === "-dec")).toHaveLength(2);
  });
});

describe("parse -dec rejection", () => {
  it("throws a clear error on -dec", () => {
    expect(() =>
      parse(
        "ffmpeg -i INPUT -map 0:v -c:v libx264 -f null - -dec 0:0 -filter_complex [0:v][dec:0]hstack[s] -map [s] out.mkv",
        new Map(),
        new Map(),
      ),
    ).toThrow(/-dec/);
  });
});
