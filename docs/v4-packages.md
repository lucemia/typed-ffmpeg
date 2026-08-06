# v4 Package Architecture

typed-ffmpeg v4 is a monorepo that publishes separate PyPI packages for each FFmpeg major version. This page explains the structure and how to choose the right package.

## Packages

| PyPI Package | FFmpeg Version | Install |
|---|---|---|
| `typed-ffmpeg` | Latest (v9) | `pip install typed-ffmpeg` |
| `typed-ffmpeg-v5` | FFmpeg 5.x | `pip install typed-ffmpeg-v5` |
| `typed-ffmpeg-v6` | FFmpeg 6.x | `pip install typed-ffmpeg-v6` |
| `typed-ffmpeg-v7` | FFmpeg 7.x | `pip install typed-ffmpeg-v7` |
| `typed-ffmpeg-v8` | FFmpeg 8.x | `pip install typed-ffmpeg-v8` |
| `typed-ffmpeg-v9` | FFmpeg 9.x | `pip install typed-ffmpeg-v9` |
| `ffmpeg-core` | (runtime, auto-installed) | — |
| `ffmpeg-data-v5`..`v9` | (cache data, optional) | `pip install typed-ffmpeg-vN[parse]` |

## Which Package Should I Install?

**For most users:** `pip install typed-ffmpeg` — this installs the latest bindings (currently v9) and receives updates automatically.

**For production deployments:** install the package that matches your system's FFmpeg version so the typed bindings match exactly what FFmpeg accepts.

```bash
# Check your FFmpeg version
ffmpeg -version | head -1
# ffmpeg version 6.1.1 ...

# Install the matching package
pip install typed-ffmpeg-v6
```

**For CI / testing across versions:** install multiple packages side-by-side (they coexist without conflicts).

## Package Dependency Graph

```
typed-ffmpeg (meta)
    └── typed-ffmpeg-v9
            └── ffmpeg-core

typed-ffmpeg-v5 ──┐
typed-ffmpeg-v6   │
typed-ffmpeg-v7   ├── ffmpeg-core (shared runtime)
typed-ffmpeg-v8 ──┘
```

`ffmpeg-core` contains the hand-written runtime code (DAG, compiler, IR) and is installed automatically as a dependency of any `typed-ffmpeg-vX` package. You do not need to install it directly.

### Optional `[parse]` Extra

Each version package has an optional `parse` extra that installs the corresponding data package:

```
typed-ffmpeg-v7[parse]
    └── ffmpeg-data-v7   (~6 MB, version-specific cache data)
```

The data packages contain pre-parsed FFmpeg filter/option/codec/format definitions needed by `ffmpeg.compile.compile_cli.parse()` to reconstruct filter graphs from FFmpeg command lines. Most users do not need this — it is only required if you call `parse()` or `compile_as_python()`.

## Repository Structure

```
typed-ffmpeg/          # monorepo root
├── packages/
│   ├── core/          # ffmpeg-core: shared runtime
│   ├── data-v5/       # ffmpeg-data-v5: cache data for FFmpeg 5.x
│   ├── data-v6/       # ffmpeg-data-v6: cache data for FFmpeg 6.x
│   ├── data-v7/       # ffmpeg-data-v7: cache data for FFmpeg 7.x
│   ├── data-v8/       # ffmpeg-data-v8: cache data for FFmpeg 8.x
│   ├── v5/            # typed-ffmpeg-v5
│   ├── v6/            # typed-ffmpeg-v6
│   ├── v7/            # typed-ffmpeg-v7
│   ├── v8/            # typed-ffmpeg-v8
│   └── latest/        # typed-ffmpeg (meta, re-exports v8)
├── docs/
└── scripts/           # code generation tools
```

## Usage

All packages expose the same `ffmpeg` namespace — your code is identical regardless of which package you install:

```python
import ffmpeg

# Probe a file
info = ffmpeg.probe("video.mp4")

# Build and run a filter graph
(
    ffmpeg.input("input.mp4")
    .hflip()
    .output("output.mp4")
    .run()
)
```

See the [Usage section](usage/basic-api-usage.ipynb) for full examples.

## Migrating from typed-ffmpeg 3.x

See the [Migration Guide](migration/v3-to-v4.md).
