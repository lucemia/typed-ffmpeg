## typed-ffmpeg

[![CI](https://github.com/lucemia/typed-ffmpeg/actions/workflows/ci-monorepo-test.yml/badge.svg)](https://github.com/lucemia/typed-ffmpeg/actions/workflows/ci-monorepo-test.yml)
[![Documentation](https://img.shields.io/badge/docs-mkdocs%20material-blue.svg?style=flat)](https://lucemia.github.io/typed-ffmpeg/)
[![PyPI Version](https://img.shields.io/pypi/v/typed-ffmpeg.svg)](https://pypi.org/project/typed-ffmpeg/)
[![codecov](https://codecov.io/gh/lucemia/typed-ffmpeg/graph/badge.svg?token=B95PR629LP)](https://codecov.io/gh/lucemia/typed-ffmpeg)

**typed-ffmpeg** offers a modern, type-safe interface to FFmpeg for both **Python** and **TypeScript**, providing extensive support for complex filters with detailed typing and documentation. Inspired by `ffmpeg-python`, this project enhances functionality by addressing common limitations, such as lack of IDE integration and comprehensive typing, while also introducing new features like JSON serialization of filter graphs and automatic FFmpeg validation.

---

### Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Usage](#quick-usage)
- [Documentation](https://lucemia.github.io/typed-ffmpeg/)
- [Interactive Playground](#interactive-playground)
- [Acknowledgements](#acknowledgements)

---

## Features

![typed-ffmpeg](https://raw.githubusercontent.com/lucemia/typed-ffmpeg/main/docs/media/autocomplete.png)


- **Zero Dependencies:** Built purely with the Python standard library, ensuring maximum compatibility and security.
- **User-Friendly:** Simplifies the construction of filter graphs with an intuitive Pythonic interface.
- **Comprehensive FFmpeg Filter Support:** Out-of-the-box support for most FFmpeg filters, with IDE auto-completion.
- **Integrated Documentation:** In-line docstrings provide immediate reference for filter usage, reducing the need to consult external documentation.
- **Robust Typing:** Offers static and dynamic type checking, enhancing code reliability and development experience.
- **Filter Graph Serialization:** Enables saving and reloading of filter graphs in JSON format for ease of use and repeatability.
- **Graph Visualization:** Leverages `graphviz` for visual representation, aiding in understanding and debugging.
- **Validation and Auto-correction:** Assists in identifying and fixing errors within filter graphs.
- **Input and Output Options Support:** Provide a more comprehensive interface for input and output options, including support for additional codecs and formats.
- **Partial Evaluation:** Enhance the flexibility of filter graphs by enabling partial evaluation, allowing for modular construction and reuse.
- **Media File Analysis:** Built-in support for analyzing media files using FFmpeg's ffprobe utility, providing detailed metadata extraction with both dictionary and dataclass interfaces.

### Multi-Version FFmpeg Support

typed-ffmpeg v4 ships separate PyPI packages for each FFmpeg major version. Install only the bindings you need:

| Package | FFmpeg version | Description |
|---------|----------------|-------------|
| `typed-ffmpeg` | Latest (v9) | Recommended for most users |
| `typed-ffmpeg-v5` | FFmpeg 5.x | Bindings for FFmpeg 5 |
| `typed-ffmpeg-v6` | FFmpeg 6.x | Bindings for FFmpeg 6 |
| `typed-ffmpeg-v7` | FFmpeg 7.x | Bindings for FFmpeg 7 |
| `typed-ffmpeg-v8` | FFmpeg 8.x | Bindings for FFmpeg 8 |
| `typed-ffmpeg-v9` | FFmpeg 9.x | Bindings for FFmpeg 9 |
| `ffmpeg-core` | — | Shared runtime (auto-installed) |

All packages expose the same `ffmpeg` namespace, so your code works identically regardless of which package you install.

To match your installed FFmpeg version:

```bash
ffmpeg -version | head -1        # e.g. ffmpeg version 6.1.1
pip install typed-ffmpeg-v6      # install the matching package
```

### Optional Extras

| Extra | Install | Description |
|-------|---------|-------------|
| `[graph]` | `pip install 'typed-ffmpeg[graph]'` | Graph visualization via Graphviz |
| `[parse]` | `pip install 'typed-ffmpeg[parse]'` | CLI parsing and `compile_as_python()` support |

The `[parse]` extra installs version-specific cache data (`ffmpeg-data-v5` through `ffmpeg-data-v9`) needed by `ffmpeg.compile.compile_cli.parse()` to reconstruct filter graphs from FFmpeg command lines. Most users do not need this.

See the [v4 Package Architecture](https://github.com/lucemia/typed-ffmpeg/blob/main/docs/v4-packages.md) docs for details and the [Migration Guide](https://github.com/lucemia/typed-ffmpeg/blob/main/docs/migration/v3-to-v4.md) if you are upgrading from typed-ffmpeg 3.x.

---

## Installation

Install the latest version (bindings for FFmpeg 8.x):

```bash
pip install typed-ffmpeg
```

Or install bindings for a specific FFmpeg version:

```bash
pip install typed-ffmpeg-v5   # FFmpeg 5.x
pip install typed-ffmpeg-v6   # FFmpeg 6.x
pip install typed-ffmpeg-v7   # FFmpeg 7.x
pip install typed-ffmpeg-v8   # FFmpeg 8.x
pip install typed-ffmpeg-v9   # FFmpeg 9.x
```

With optional extras:

```bash
pip install 'typed-ffmpeg[graph]'          # graph visualization
pip install 'typed-ffmpeg[parse]'          # CLI parsing support
pip install 'typed-ffmpeg-v7[parse]'       # CLI parsing for FFmpeg 7.x
```

Note: FFmpeg must be installed on your system.

Note: If you need to install `ffmpeg-python` at the same time, use `pip install typed-ffmpeg-compatible` to prevent conflicts with the module name. Then use `import typed_ffmpeg as ffmpeg` instead of `import ffmpeg`.

### TypeScript (Experimental)

TypeScript bindings are available as npm packages for each FFmpeg major version:

| Package | FFmpeg version | Description |
|---------|----------------|-------------|
| `@typed-ffmpeg/core` | — | Core runtime (Node.js + browser ESM) |
| `@typed-ffmpeg/v5` | FFmpeg 5.x | Bindings for FFmpeg 5 |
| `@typed-ffmpeg/v6` | FFmpeg 6.x | Bindings for FFmpeg 6 |
| `@typed-ffmpeg/v7` | FFmpeg 7.x | Bindings for FFmpeg 7 |
| `@typed-ffmpeg/v8` | FFmpeg 8.x | Bindings for FFmpeg 8 |
| `@typed-ffmpeg/v9` | FFmpeg 9.x | Bindings for FFmpeg 9 |

```bash
npm install @typed-ffmpeg/core @typed-ffmpeg/v9   # latest FFmpeg bindings
```

```typescript
import { input } from "@typed-ffmpeg/v8";

const cmd = input("input.mp4")
  .video
  .scale({ w: 1280, h: 720 })
  .output("output.mp4")
  .overwriteOutput()
  .compile();
// => ["-i", "input.mp4", "-filter_complex", "...", "output.mp4"]
```

`@typed-ffmpeg/core` ships three builds — CJS (Node.js default), ESM, and a browser-safe ESM bundle — selected automatically via the `exports` field. The TypeScript API mirrors the Python API with idiomatic TypeScript patterns (options objects instead of keyword arguments). Each version package includes JSDoc annotations indicating filter availability across FFmpeg versions. See `packages/ts-core/` and `packages/ts-v5/` through `packages/ts-v9/` for details.

---

## Quick Usage

Here's how to quickly start using `typed-ffmpeg`:

```python
import ffmpeg

# Analyze a media file
info = ffmpeg.probe("video.mp4")
print(f"Duration: {float(info['format']['duration']):.2f} seconds")
print(f"Streams: {len(info['streams'])}")

# Flip video horizontally and output
f = (
    ffmpeg
    .input(filename='input.mp4')
    .hflip()
    .output(filename='output.mp4')
)
f
```





![svg](https://raw.githubusercontent.com/lucemia/typed-ffmpeg/main/docs/media/README_files/README_1_0.svg)




For a more complex example:



```python
import ffmpeg.filters
import ffmpeg

# Complex filter graph example
in_file = ffmpeg.input("input.mp4")
overlay_file = ffmpeg.input("overlay.png")

f = (
    ffmpeg.filters
    .concat(
        in_file.trim(start_frame=10, end_frame=20),
        in_file.trim(start_frame=30, end_frame=40),
    )
    .video(0)
    .overlay(overlay_file.hflip())
    .drawbox(x="50", y="50", width="120", height="120", color="red", thickness="5")
    .output(filename="out.mp4")
)
f
```





![svg](https://raw.githubusercontent.com/lucemia/typed-ffmpeg/main/docs/media/README_files/README_3_0.svg)




See the [Usage](https://lucemia.github.io/typed-ffmpeg/usage/basic-api-usage/) section in our documentation for more examples and detailed guides.

---

## Interactive Playground

Try out `typed-ffmpeg` directly in your browser with our [Interactive Playground](https://lucemia.github.io/typed-ffmpeg-playground/)! The playground provides a live environment where you can:

![typed-ffmpeg demo](https://raw.githubusercontent.com/lucemia/typed-ffmpeg/main/docs/media/demo.gif)
![Interactive Playground](https://raw.githubusercontent.com/lucemia/typed-ffmpeg/main/docs/media/playground-screenshot.png)

- Experiment with FFmpeg filters and commands
- Visualize filter graphs in real-time
- Test different input/output configurations
- Learn through interactive examples
- Share your filter graphs with others

The playground is perfect for learning and prototyping FFmpeg filter chains without setting up a local environment.

---

## Acknowledgements

This project was initially inspired by the capabilities of GPT-3, with the original concept focusing on using GPT-3 to generate an FFmpeg filter SDK directly from the FFmpeg documentation. However, during the development process, I encountered limitations with GPT-3's ability to fully automate this task.

As a result, I shifted to traditional code generation methods to complete the SDK, ensuring a more robust and reliable tool. Despite this change in approach, both GitHub Copilot and GPT-3 were instrumental in accelerating the development process, providing valuable insights and saving significant time.

I would also like to extend my gratitude to the `ffmpeg-python` project, which inspired this project significantly. The API style and design ideas from `ffmpeg-python` have been influential, and I have utilized these aspects to shape the development of our SDK.

This project is dedicated to my son, Austin, on his seventh birthday (February 24, 2024), whose curiosity and zest for life continually inspire me.

---

Feel free to check the [Documentation](https://lucemia.github.io/typed-ffmpeg/) for detailed information and more advanced features.

## Development Setup

Install all development dependencies:
```
uv pip install --group dev
```

No need to use requirements.in or requirements.txt anymore. All dependencies are managed in `pyproject.toml` and locked in `uv.lock`.
