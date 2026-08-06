# Code Generation

Typed-ffmpeg generates its filter/codec/format bindings by introspecting real FFmpeg binaries. Each version package (`v5`, `v6`, `v7`, `v8`, `v9`) is generated from the corresponding FFmpeg major version.

## How It Works

The code generation pipeline has three inputs per FFmpeg version:

1. **FFmpeg binary** — executed directly (`ffmpeg -filters`, `-codecs`, `-muxers`, `-h full`, etc.) to extract available filters, codecs, formats, and AV options
2. **FFmpeg source code** — release tarball downloaded from ffmpeg.org, preprocessed with `gcc -E`, parsed for command-line option definitions
3. **FFmpeg documentation** — version-correct `doc/filters.texi` from the source tarball, parsed for filter descriptions and parameter documentation

The generator outputs Python modules into `packages/v{N}/src/ffmpeg/` with typed filter functions, codec classes, format classes, and stream methods.

## Regenerating Bindings via CI

The recommended way to regenerate bindings is via the CI workflow.

### Regenerate all versions (creates a PR)

```bash
gh workflow run ci-codegen-versions.yml --ref v4 -f ffmpeg-version=all -f create_pr=true
```

This triggers the `CI CodeGen - Multi-Version FFmpeg` workflow which:
1. Pulls version-specific Docker images (`ghcr.io/lucemia/typed-ffmpeg/ffmpeg:{version}`)
2. Extracts the FFmpeg binary and libraries
3. Runs `python -m scripts.code_gen.cli generate` for each version
4. Creates a PR against `v4` with the regenerated bindings

### Regenerate a single version (for testing)

```bash
gh workflow run ci-codegen-versions.yml --ref v4 -f ffmpeg-version=9 -f create_pr=false
```

### Automatic CI triggers

The codegen workflow also runs automatically on push/PR to `main` or `v4` when these paths change:

- `src/scripts/code_gen/**`
- `src/scripts/parse_help/**`
- `src/scripts/parse_c/**`
- `src/scripts/parse_docs/**`
- `src/scripts/manual/**`
- `packages/core/src/ffmpeg_core/common/**`

## Local Development

For local code generation you need multiple FFmpeg versions installed side by side.

### macOS (Homebrew)

```bash
brew install ffmpeg@5 ffmpeg@6 ffmpeg@7 ffmpeg@8 ffmpeg   # ffmpeg (no suffix) = latest (v9+)
```

Then invoke the generator by pointing `PATH` at the desired version:

```bash
# Generate bindings for FFmpeg 7
PATH="$(brew --prefix ffmpeg@7)/bin:$PATH" \
  python -m scripts.code_gen.cli generate --outpath packages/v7/src/ffmpeg --rebuild
```

### Using --ffmpeg-binary

You can also specify the binary path directly:

```bash
python -m scripts.code_gen.cli generate \
  --outpath packages/v7/src/ffmpeg \
  --ffmpeg-binary /usr/local/opt/ffmpeg@7/bin/ffmpeg \
  --rebuild
```

### Verify which binary is active

```bash
ffmpeg -version | head -1
# ffmpeg version 7.1 ...
```

## CLI Reference

```bash
# Generate bindings (auto-detects version from ffmpeg binary)
python -m scripts.code_gen.cli generate --outpath <path> [--rebuild] [--ffmpeg-binary <path>]

# Compare metadata between two FFmpeg versions
python -m scripts.code_gen.cli diff 6.1 7.1

# Re-export latest version symbols at package root
python -m scripts.code_gen.cli reexport --outpath <path> [version]
```

### Options

| Flag | Description |
|------|-------------|
| `--outpath` | Output directory for generated Python modules |
| `--rebuild` | Ignore cache, regenerate everything from scratch |
| `--ffmpeg-binary` | Path to the ffmpeg executable (default: `ffmpeg` on PATH) |

## Caching

Generated metadata is cached per version in `packages/core/src/ffmpeg_core/common/cache/list/`:

```
filters_7_1.json      # Filter definitions for FFmpeg 7.1
codecs_7_1.json       # Codec definitions
formats_7_1.json      # Format definitions
options_7_1.json      # Global CLI options
av_option_sets_7_1.json  # AV option metadata
```

Use `--rebuild` to bypass the cache and regenerate from scratch.

## Version Matrix

| Package | FFmpeg Version | Docker Image |
|---------|---------------|--------------|
| `packages/v5` | 5.1 | `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:5.1` |
| `packages/v6` | 6.1 | `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:6.1` |
| `packages/v7` | 7.1 | `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:7.1` |
| `packages/v8` | 8.0 | `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:8.0` |
| `packages/v9` | 9.0 | `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:9.0` |

!!! warning "FFmpeg 9.0 needs a SPIR-V compiler at build time"
    FFmpeg 9.0 removed `--enable-libshaderc` and instead compiles Vulkan shaders
    during the build using an external `glslc`/`glslang` binary. If that binary is
    missing, `configure` silently disables `spirv_compiler` and **all 18 Vulkan
    filters disappear** from the generated bindings. `Dockerfile.9.0` installs
    `glslang-tools` and asserts `CONFIG_SCALE_VULKAN_FILTER=yes` after configure
    so this fails loudly instead of producing quietly incomplete bindings.
