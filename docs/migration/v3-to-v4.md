# Migration Guide: typed-ffmpeg 3.x to v4

typed-ffmpeg v4 ships a monorepo architecture with separate PyPI packages for each FFmpeg major version. This guide helps you migrate from the old single package (`typed-ffmpeg==3.x`) to the new packages.

## What Changed

| | v3 (old) | v4 (new) |
|---|---|---|
| Package name | `typed-ffmpeg` | `typed-ffmpeg` (meta) or `typed-ffmpeg-v6`, etc. |
| Package version | `3.x` | `1.0.0a1` |
| Supports FFmpeg 5/6/7/8 | Yes (all in one package) | Yes (separate packages) |
| Package size | ~10 MB (all versions bundled) | ~2 MB (only one version) |
| Import paths | `import ffmpeg` | `import ffmpeg` (unchanged) |

**Your Python code does not need to change.** All `import ffmpeg` statements and the entire public API remain the same.

## Quick Migration

### If you just want the latest (FFmpeg 8.x)

```bash
pip uninstall typed-ffmpeg
pip install typed-ffmpeg
```

`typed-ffmpeg` is now a meta-package that installs `typed-ffmpeg-v8`. Everything works as before.

### If you want to match your installed FFmpeg version

```bash
pip uninstall typed-ffmpeg

# Choose the package that matches your system FFmpeg
pip install typed-ffmpeg-v5   # FFmpeg 5.x
pip install typed-ffmpeg-v6   # FFmpeg 6.x
pip install typed-ffmpeg-v7   # FFmpeg 7.x
pip install typed-ffmpeg-v8   # FFmpeg 8.x
```

## Why the Change?

The v3 package bundled bindings for all FFmpeg versions (v5–v8) into a single download. This caused:

- **Large downloads** (~10 MB) even though most users only need one version.
- **Class identity problems** when mixing multiple versions in the same process.
- **Confusing versioning**: `typed-ffmpeg==3.11` did not signal which FFmpeg it targeted.

With v4, you install only what you need. Each package is ~2 MB and the version number (`typed-ffmpeg-v6==1.0.0a1`) clearly signals FFmpeg compatibility.

## Checking Your FFmpeg Version

```bash
ffmpeg -version | head -1
# ffmpeg version 6.1.1 ...
```

Then install the matching package, e.g. `pip install typed-ffmpeg-v6`.

## Code Compatibility

No changes required. The public API is identical:

```python
import ffmpeg

# All of these work the same as before
info = ffmpeg.probe("video.mp4")
out = ffmpeg.input("input.mp4").hflip().output("output.mp4")
out.run()
```

## Import Path Changes

### Version-specific submodules (Advanced)

In v3, you could import from version submodules (`ffmpeg.v6.filters`). In v4, install the specific package and import from the top-level `ffmpeg` namespace:

```python
# v3 style (no longer supported in v4)
from ffmpeg.v6.filters import concat

# v4 style: install typed-ffmpeg-v6, then import normally
from ffmpeg.filters import concat
```

### Stream classes

In v3, stream classes were re-exported from `ffmpeg.streams`. In v4, import them directly from `ffmpeg` instead:

```python
# v3 style (no longer supported in v4 — causes circular import)
from ffmpeg.streams import AudioStream, VideoStream, AVStream

# v4 style
from ffmpeg import AudioStream, VideoStream, AVStream
```

## Alpha Status

The v4 packages are currently in alpha (`1.0.0a1`). The API is stable for day-to-day use, but minor changes may occur before the final `1.0.0` release. Pin your dependency if stability is critical:

```
typed-ffmpeg-v6>=1.0.0a1,<2.0
```
