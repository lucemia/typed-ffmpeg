import { describe, expect, it } from "vitest";
import {
  InputNode,
  LoopbackDecoderNode,
  OutputNode,
  VideoStream,
  AudioStream,
} from "../dag/nodes.js";
import { FFMpegTypeError, FFMpegValueError } from "../exceptions.js";

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
});
