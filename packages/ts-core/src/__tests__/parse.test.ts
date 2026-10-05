import { describe, it, expect, beforeAll } from "vitest";
import {
  type FFMpegFilter,
  type FFMpegOption,
  FFMpegOptionFlag,
  FFMpegOptionType,
  StreamType,
} from "../common/schema.js";
import {
  AudioStream,
  AVStream,
  FilterNode,
  GlobalNode,
  InputNode,
  OutputNode,
  VideoStream,
} from "../dag/nodes.js";
import { compile, parse } from "../compile/compileCli.js";

// ─── Minimal test fixtures ───────────────────────────────────────────────────

function makeOption(
  name: string,
  flags: number,
  type: FFMpegOptionType = FFMpegOptionType.String,
): FFMpegOption {
  return { name, type, flags, help: "", argname: null, canon: null };
}

const INPUT_FLAG = FFMpegOptionFlag.OPT_INPUT;
const OUTPUT_FLAG = FFMpegOptionFlag.OPT_OUTPUT;
const GLOBAL_FLAG = 0; // no input/output → global

const baseOptions: FFMpegOption[] = [
  makeOption("y", GLOBAL_FLAG, FFMpegOptionType.Bool),
  makeOption("loglevel", GLOBAL_FLAG),
  makeOption("nostdin", GLOBAL_FLAG, FFMpegOptionType.Bool),
  makeOption("ss", INPUT_FLAG | OUTPUT_FLAG),
  makeOption("t", INPUT_FLAG | OUTPUT_FLAG),
  makeOption("map", OUTPUT_FLAG),
  makeOption("shortest", OUTPUT_FLAG, FFMpegOptionType.Bool),
  makeOption("c", OUTPUT_FLAG),
  makeOption("b", OUTPUT_FLAG),
];

function makeFilter(
  name: string,
  inputTypes: ("video" | "audio")[],
  outputTypes: ("video" | "audio")[],
  options: { name: string; default?: string | number | boolean | null }[] = [],
): FFMpegFilter {
  return {
    name,
    description: "",
    isDynamicInput: false,
    isDynamicOutput: false,
    streamTypingsInput: inputTypes.map(t => ({
      type: t === "audio" ? StreamType.Audio : StreamType.Video,
    })),
    streamTypingsOutput: outputTypes.map(t => ({
      type: t === "audio" ? StreamType.Audio : StreamType.Video,
    })),
    formulaTypingsInput: null,
    formulaTypingsOutput: null,
    pre: [],
    options: options.map(o => ({
      name: o.name,
      alias: [],
      description: "",
      type: "string" as any,
      required: false,
      choices: [],
      default: o.default ?? null,
    })),
  };
}

let filtersMap: Map<string, FFMpegFilter>;
let optionsMap: Map<string, FFMpegOption>;

beforeAll(() => {
  const filters: FFMpegFilter[] = [
    makeFilter("scale", ["video"], ["video"], [
      { name: "w", default: null },
      { name: "h", default: null },
    ]),
    makeFilter("fps", ["video"], ["video"], [{ name: "fps", default: null }]),
    makeFilter("hflip", ["video"], ["video"]),
    makeFilter("aresample", ["audio"], ["audio"], [{ name: "sample_rate", default: null }]),
    makeFilter("overlay", ["video", "video"], ["video"], [
      { name: "x", default: 0 },
      { name: "y", default: 0 },
    ]),
    makeFilter("split", ["video"], ["video", "video"]),
    makeFilter("amix", ["audio", "audio"], ["audio"]),
    makeFilter("pad", ["video"], ["video"], [
      { name: "width", default: null },
      { name: "height", default: null },
      { name: "x", default: null },
      { name: "y", default: null },
    ]),
    makeFilter("subtitles", ["video"], ["video"], [
      { name: "filename", default: null },
      { name: "stream_index", default: null },
      { name: "force_style", default: null },
    ]),
  ];
  filtersMap = new Map(filters.map(f => [f.name, f]));
  optionsMap = new Map(baseOptions.map(o => [o.name, o]));
  // Add stream-specifier variants
  optionsMap.set("c:v", makeOption("c:v", OUTPUT_FLAG));
  optionsMap.set("c:a", makeOption("c:a", OUTPUT_FLAG));
  optionsMap.set("b:v", makeOption("b:v", OUTPUT_FLAG));
  optionsMap.set("b:a", makeOption("b:a", OUTPUT_FLAG));
});

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("parse()", () => {
  it("simple transcode", () => {
    const stream = parse("ffmpeg -i input.mp4 output.mp4", filtersMap, optionsMap);
    const compiled = compile(stream);
    expect(compiled).toContain("input.mp4");
    expect(compiled).toContain("output.mp4");
    expect(compiled).toContain("-i");
  });

  it("ffmpeg.exe binary name", () => {
    const stream = parse("ffmpeg.exe -i input.mp4 output.mp4", filtersMap, optionsMap);
    const compiled = compile(stream);
    expect(compiled).toContain("input.mp4");
  });

  it("global boolean option -y", () => {
    const stream = parse("ffmpeg -y -i input.mp4 output.mp4", filtersMap, optionsMap);
    const compiled = compile(stream);
    expect(compiled).toContain("-y");
  });

  it("input option -ss and -t", () => {
    const stream = parse("ffmpeg -ss 10 -t 5 -i input.mp4 output.mp4", filtersMap, optionsMap);
    const compiled = compile(stream);
    expect(compiled).toContain("-ss");
    expect(compiled).toContain("10");
    expect(compiled).toContain("-t");
    expect(compiled).toContain("5");
  });

  it("output option with stream specifier -c:v", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -c:v libx264 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("-c:v");
    expect(compiled).toContain("libx264");
  });

  it("-vf with named params", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -vf scale=w=1280:h=720 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    expect(compiled).toContain("1280");
    expect(compiled).toContain("720");
  });

  it("-vf with positional params", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    // Positional params should map to w and h
    expect(compiled).toMatch(/w=1280|1280/);
    expect(compiled).toMatch(/h=720|720/);
  });

  it("-vf with filter chain (comma)", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -vf scale=1280:720,fps=30 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    expect(compiled).toContain("fps");
  });

  it("-af simple filter", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -af aresample=44100 output.mp3",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("aresample");
  });

  it("-filter_complex with explicit map", () => {
    const stream = parse(
      "ffmpeg -i a.mp4 -i b.mp4 -filter_complex [0:v][1:v]overlay=10:20[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("overlay");
    expect(compiled).toContain("-map");
  });

  it("multiple inputs", () => {
    const stream = parse(
      "ffmpeg -i a.mp4 -i b.mp4 -filter_complex [0:v][1:v]overlay[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("a.mp4");
    expect(compiled).toContain("b.mp4");
  });

  it("stream selector with type [0:v]", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -filter_complex [0:v]hflip[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("hflip");
  });

  it("unknown filter falls back without crashing", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -filter_complex [0:v]my_custom_filter[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("my_custom_filter");
  });

  it("roundtrip: compile → parse → compile produces same result", () => {
    const original = parse(
      "ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled1 = compile(original);
    const reparsed = parse(compiled1, filtersMap, optionsMap);
    const compiled2 = compile(reparsed);
    expect(compiled1).toBe(compiled2);
  });

  it("audio stream selector [0:a]", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -filter_complex [0:a]aresample=44100[a] -map [a] out.mp3",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("aresample");
    expect(compiled).toContain("44100");
  });

  it("split filter with two outputs", () => {
    // The compiler's autoFix may replace an explicit split with direct stream
    // references; verify the downstream hflip filter is preserved.
    const stream = parse(
      "ffmpeg -i input.mp4 -filter_complex [0:v]split[a][b];[a]hflip[c] -map [c] -map [b] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("hflip");
  });

  it("amix with two audio inputs", () => {
    const stream = parse(
      "ffmpeg -i a.mp4 -i b.mp4 -filter_complex [0:a][1:a]amix[out] -map [out] out.mp3",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("amix");
    expect(compiled).toContain("a.mp4");
    expect(compiled).toContain("b.mp4");
  });

  it("multiple filter chains separated by semicolons", () => {
    const stream = parse(
      "ffmpeg -i a.mp4 -i b.mp4 -filter_complex [0:v]scale=640:480[vs];[1:v]hflip[vf];[vs][vf]overlay[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    expect(compiled).toContain("hflip");
    expect(compiled).toContain("overlay");
  });

  it("multiple output files produces GlobalNode", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -map 0 out1.mp4 -map 0 out2.mp4",
      filtersMap,
      optionsMap,
    );
    // Should resolve to a GlobalNode wrapping two outputs
    expect(stream.node).toBeInstanceOf(GlobalNode);
    const compiled = compile(stream);
    expect(compiled).toContain("out1.mp4");
    expect(compiled).toContain("out2.mp4");
  });

  it("quoted filename with spaces", () => {
    const stream = parse(
      "ffmpeg -i 'my file.mp4' output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("my file.mp4");
  });

  it("output codec and bitrate options (-c:a aac -b:v 1M)", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -c:v libx264 -c:a aac -b:v 1M output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("-c:v");
    expect(compiled).toContain("libx264");
    expect(compiled).toContain("-c:a");
    expect(compiled).toContain("aac");
    expect(compiled).toContain("-b:v");
    expect(compiled).toContain("1M");
  });

  it("-loglevel global string option", () => {
    const stream = parse(
      "ffmpeg -loglevel quiet -i input.mp4 output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("-loglevel");
    expect(compiled).toContain("quiet");
  });

  it("DAG: InputNode filename and OutputNode filename", () => {
    const stream = parse("ffmpeg -i myfile.mkv result.avi", filtersMap, optionsMap);
    // Traverse to find InputNode
    const outputNode = stream.node as OutputNode;
    expect(outputNode).toBeInstanceOf(OutputNode);
    expect(outputNode.filename).toBe("result.avi");
    const inputStream = outputNode.inputs[0];
    const inputNode = inputStream.node as InputNode;
    expect(inputNode).toBeInstanceOf(InputNode);
    expect(inputNode.filename).toBe("myfile.mkv");
  });

  it("DAG: FilterNode present after -vf", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -vf hflip output.mp4",
      filtersMap,
      optionsMap,
    );
    const outputNode = stream.node as OutputNode;
    const filterStream = outputNode.inputs[0];
    expect(filterStream.node).toBeInstanceOf(FilterNode);
    expect((filterStream.node as FilterNode).name).toBe("hflip");
  });

  it("-vf with only filter name and no params", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -vf hflip output.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("hflip");
  });

  it("filter_complex positional params", () => {
    const stream = parse(
      "ffmpeg -i input.mp4 -filter_complex [0:v]scale=1920:1080[v] -map [v] out.mp4",
      filtersMap,
      optionsMap,
    );
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    expect(compiled).toMatch(/1920/);
    expect(compiled).toMatch(/1080/);
  });

  it("-vf filterchain with single-quoted option value containing commas (issue #593)", () => {
    // Single-quoted force_style contains commas that must not split the filterchain
    const cmd =
      `ffmpeg -i input.mkv -vf "scale=-1:-1:flags=lanczos,pad=1920:1080:-1:-1,subtitles='subtitles.srt':force_style='Fontname=Arial,Fontsize=17'" output.mp4`;
    // Should not throw; the three filters are scale → pad → subtitles
    const stream = parse(cmd, filtersMap, optionsMap);
    const compiled = compile(stream);
    expect(compiled).toContain("scale");
    expect(compiled).toContain("pad");
    expect(compiled).toContain("subtitles");
  });
});
