# TypeScript Bindings

typed-ffmpeg provides type-safe FFmpeg bindings for TypeScript, mirroring the Python API with idiomatic TypeScript patterns. Every filter method includes full JSDoc documentation and IDE autocomplete support.

## Packages

| npm Package | FFmpeg Version | Install |
|---|---|---|
| `@typed-ffmpeg/v8` | FFmpeg 8.x | `npm install @typed-ffmpeg/core @typed-ffmpeg/v8` |
| `@typed-ffmpeg/v7` | FFmpeg 7.x | `npm install @typed-ffmpeg/core @typed-ffmpeg/v7` |
| `@typed-ffmpeg/v6` | FFmpeg 6.x | `npm install @typed-ffmpeg/core @typed-ffmpeg/v6` |
| `@typed-ffmpeg/v5` | FFmpeg 5.x | `npm install @typed-ffmpeg/core @typed-ffmpeg/v5` |
| `@typed-ffmpeg/core` | — | Core runtime (auto-required by version packages) |

**For most users:** install `@typed-ffmpeg/core` and the version package matching your FFmpeg installation.

### Requirements

- Node.js >= 18
- FFmpeg installed on your system (only needed for `.run()` — graph compilation works without it)

### Builds

`@typed-ffmpeg/core` ships three builds, selected automatically via the `exports` field:

- **CJS** — Node.js default (`require`)
- **ESM** — Node.js ESM (`import`)
- **Browser ESM** — browser-safe bundle

## Quick Start

```typescript
import { input } from "@typed-ffmpeg/v8";

// Scale and flip a video
const cmd = input("input.mp4")
  .video
  .hflip()
  .scale({ w: 1280, h: 720 })
  .output("output.mp4")
  .overwriteOutput();

// Get the FFmpeg command line
console.log(cmd.compileLine());

// Or get arguments as a list
const args = cmd.compile();
```

## Usage Examples

### Simple Transcode

```typescript
import { input, output } from "@typed-ffmpeg/v8";

const cmd = output(
  [input("input.mp4")],
  "output.mp4",
  { vcodec: "libx264" },
).overwriteOutput();

console.log(cmd.compileLine());
```

### Video Filters

Filter methods are available directly on stream objects with full type safety:

```typescript
import { input, InputNode, FilterNode, StreamType } from "@typed-ffmpeg/v8";

const inp = new InputNode("input.mp4");

// Chain filters — each method returns a typed stream
const filtered = inp.video
  .hflip()
  .scale({ w: 640, h: 480 })
  .drawbox({ x: 10, y: 10, w: 100, h: 100, color: "red", thickness: 3 });

const cmd = filtered
  .output("filtered.mp4")
  .overwriteOutput();
```

### Audio Processing

```typescript
import { InputNode, FilterNode, OutputNode, StreamType } from "@typed-ffmpeg/v8";

const inp = new InputNode("input.mp4");

const volume = new FilterNode(
  "volume",
  [inp.audio],
  { volume: 0.5 },
  [StreamType.Audio],
  [StreamType.Audio],
);

const echo = new FilterNode(
  "aecho",
  [volume.audio(0)],
  { in_gain: 0.8, out_gain: 0.88, delays: 60, decays: 0.4 },
  [StreamType.Audio],
  [StreamType.Audio],
);

const cmd = new OutputNode([echo.audio(0)], "audio_out.mp4")
  .stream()
  .overwriteOutput();
```

### Overlay

```typescript
import { InputNode, FilterNode, OutputNode, StreamType } from "@typed-ffmpeg/v8";

const main = new InputNode("main.mp4");
const logo = new InputNode("logo.png");

const overlay = new FilterNode(
  "overlay",
  [main.video, logo.video],
  { x: 10, y: 10 },
  [StreamType.Video, StreamType.Video],
  [StreamType.Video],
);

const cmd = new OutputNode([overlay.video(0)], "with_logo.mp4")
  .stream()
  .overwriteOutput();
```

### Multiple Outputs

```typescript
import { InputNode, FilterNode, OutputNode, StreamType, mergeOutputs } from "@typed-ffmpeg/v8";

const inp = new InputNode("input.mp4");

const hd = new FilterNode("scale", [inp.video], { w: 1920, h: 1080 },
  [StreamType.Video], [StreamType.Video]);
const sd = new FilterNode("scale", [inp.video], { w: 1280, h: 720 },
  [StreamType.Video], [StreamType.Video]);

const cmd = mergeOutputs(
  new OutputNode([hd.video(0)], "1080p.mp4").stream(),
  new OutputNode([sd.video(0)], "720p.mp4").stream(),
);

console.log(cmd.compileLine());
```

### Input Options

```typescript
import { input, output } from "@typed-ffmpeg/v8";

// Seek to 1 minute and take 30 seconds
const clip = input("long_video.mp4", { ss: "00:01:00", t: "00:00:30" });
const cmd = output([clip], "clip.mp4").overwriteOutput();
```

### Compile to Argument List

```typescript
import { input } from "@typed-ffmpeg/v8";

const cmd = input("input.mp4")
  .video
  .scale({ w: 640, h: 480 })
  .output("small.mp4")
  .overwriteOutput();

// Get arguments as string[]
const args: string[] = cmd.compile();
// => ["-i", "input.mp4", "-filter_complex", "...", "small.mp4", "-y"]
```

## API Overview

### Core Exports (`@typed-ffmpeg/core`)

| Export | Description |
|---|---|
| `InputNode` | Represents an FFmpeg input (`-i`) |
| `OutputNode` | Represents an FFmpeg output |
| `FilterNode` | Represents a filter in the graph |
| `VideoStream` / `AudioStream` | Typed stream references |
| `LoopbackDecoderNode` | Loopback decoder (`-dec` / `[dec:N]`) — **requires FFmpeg >= 7.0** |
| `mergeOutputs()` | Combine multiple outputs into one command |
| `compile()` / `compileAsList()` | Compile a DAG to FFmpeg arguments |
| `validate()` / `fixGraph()` | Validate and auto-correct filter graphs |
| `run()` / `runAsync()` | Execute FFmpeg commands |
| `StreamType` | Enum: `Video`, `Audio` |

!!! note "Loopback decoders require FFmpeg >= 7.0"
    `OutputStream.loopback()` and `LoopbackDecoderNode` map to FFmpeg 7.0's
    loopback decoder (`-dec of:ost`). Because `@typed-ffmpeg/core` is shared
    across all versions, `loopback()` is present at the type level for every
    package, but it only works with an FFmpeg 7.0+ binary. Only
    `@typed-ffmpeg/v7` and `@typed-ffmpeg/v8` re-export `LoopbackDecoderNode`.

### Version Exports (`@typed-ffmpeg/v5` – `v8`)

Each version package re-exports core types and adds:

| Export | Description |
|---|---|
| `input()` | Typed input function with all FFmpeg input options |
| `output()` | Typed output function with all FFmpeg output options |
| `VideoStream` / `AudioStream` | Stream classes with typed filter methods (`.scale()`, `.hflip()`, etc.) |
| `filters` | All filter functions as a namespace |
| `sources` | Source filter functions (no input streams required) |
| `codecs` / `decoders` | Codec option factories |
| `muxers` / `demuxers` | Format option factories |

## Differences from the Python API

| Aspect | Python | TypeScript |
|---|---|---|
| Filter arguments | Keyword arguments: `stream.scale(w=1280, h=720)` | Options object: `stream.scale({ w: 1280, h: 720 })` |
| Package manager | pip / PyPI | npm |
| Module import | `import ffmpeg` | `import { input } from "@typed-ffmpeg/v8"` |
| Execution | `ffmpeg.run()` | `run()` / `runAsync()` |

## Demo Project

A complete demo project is available at [`examples/typescript-demo/`](https://github.com/lucemia/typed-ffmpeg/tree/main/examples/typescript-demo) with 8 working examples covering all major use cases.

```bash
cd examples/typescript-demo
npm install
npm run dev
```
