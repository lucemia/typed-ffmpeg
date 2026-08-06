# ffmpeg-core

Core runtime for typed-ffmpeg multi-version packages.

## Overview

`ffmpeg-core` contains the hand-written runtime code that is shared across all FFmpeg version bindings (v5, v6, v7, v8, v9). This package is automatically installed as a dependency when you install any `typed-ffmpeg-vX` package.

## What's Inside

- **DAG Layer** (`ffmpeg_core.dag`): Filter graph representation and manipulation
- **Compile Layer** (`ffmpeg_core.compile`): FFmpeg command-line generation
- **IR Layer** (`ffmpeg_core.ir`): Intermediate representation for multi-backend support
- **Common Utilities** (`ffmpeg_core.common`): Serialization, caching, schemas

## Installation

This package is installed automatically:

```bash
# Installing any version package will install ffmpeg-core
pip install typed-ffmpeg-v8

# You can also install it directly (advanced)
pip install ffmpeg-core
```

## Usage

**Note:** Most users don't need to import from `ffmpeg-core` directly. Use the version-specific packages (`typed-ffmpeg`, `typed-ffmpeg-v6`, etc.) instead.

For advanced use cases:

```python
from ffmpeg_core.dag import FilterNode, Stream
from ffmpeg_core.compile import compile_as_list
```

## Development

This package is part of the typed-ffmpeg monorepo.

```bash
# Clone monorepo
git clone https://github.com/lucemia/typed-ffmpeg.git
cd typed-ffmpeg

# Install in development mode
cd packages/core
uv pip install -e ".[dev]"

# Run tests
pytest
```

## License

MIT License - see LICENSE file for details
