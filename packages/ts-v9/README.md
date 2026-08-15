# @typed-ffmpeg/v9

Type-safe FFmpeg 9.x bindings for TypeScript.

## Installation

```bash
npm install @typed-ffmpeg/core @typed-ffmpeg/v9
```

## Usage

```typescript
import { input } from "@typed-ffmpeg/v9";

const cmd = input("input.mp4")
  .video
  .scale({ w: 1280, h: 720 })
  .output("output.mp4")
  .overwriteOutput();

console.log(cmd.compileLine());
```

All filter methods include JSDoc annotations indicating availability across FFmpeg versions.

See the [TypeScript documentation](https://lucemia.github.io/typed-ffmpeg/typescript/) for more examples.
