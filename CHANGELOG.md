# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [4.5] - 2026-08-22

Bug-fix release. Two separate defects made the 4.4 packages unusable for common
work: `parse()` could not find its cache data at all, and `VideoStream.scale()`
raised on every call in v7/v8/v9. Both are fixed here, so all thirteen packages
are republished.

### Fixed

- **`VideoStream.scale()` raised on every call in v7, v8 and v9.** FFmpeg 7
  started printing scale's input pad and its dynamic-IO marker together, with
  the marker nested under the pad; the help parser treated them as mutually
  exclusive and discarded the pad. The generated binding then declared
  `typings_input=()` while still passing the stream it was called on, so
  `input(...).video.scale(w=..., h=...)` raised
  `FFMpegValueError: Expected 0 inputs, got 1`. The same bad typing broke
  `parse()` for any command line using `scale` and emitted a bogus zero-input
  `ffmpeg.sources.scale()`. `scale` was the only filter affected; v5 and v6
  predate the upstream change
- **`parse()` raised `FileNotFoundError` on every install.**
  `pip install typed-ffmpeg[parse]` installs `ffmpeg-data-v9`, but `ffmpeg-core`
  4.4 only looked for `ffmpeg_data_v8` down to `v5`. This reproduced solely on a
  wheel install — a checkout reads `packages/core`'s `cache/list`, which is not
  shipped — which is why the test suite never caught it. The lookup now
  discovers installed `ffmpeg-data-v*` packages by name, so a new FFmpeg major
  needs no change to it
- A data package that was installed but did not carry the requested entry
  shadowed an older one that did; the lookup now walks every installed data
  package newest-first instead of committing to the newest
- `scripts/create-stubs.py` listed `base.py`, `utils/snapshot.py` and
  `utils/view.py` as `ffmpeg_core` re-exports. Neither exists as a usable
  module, and the script writes unconditionally, so running it replaced working
  code with broken stubs in every version package
- Dispatching a single FFmpeg version to `ci-codegen-versions.yml` regenerated
  all of them: the image map lived in `matrix.include` keyed on `ffmpeg-version`,
  which is also a matrix key, so the non-matching entries were appended as extra
  jobs rather than merged
- `uv.lock` carried two `griffelib` entries after the mkdocstrings-python bump,
  which `uv` rejects outright; `mkdocs.yml` passed a `mkdocstrings` handler
  option that never existed and became a hard error in 2.0; the removed
  `fix-encoding-pragma` hook was still configured, failing every pre-commit run;
  and the filter-doc HTML fallback stopped matching after ffmpeg.org regenerated
  its pages with a newer texinfo

### Added

- Regression coverage for the above: the shared suite now asserts that no filter
  reached by a stream method declares zero inputs. The only previous test
  touching `.scale()` was skipped unless graphviz was installed, so the most
  common filter in the library had no effective coverage
- `docs/version-differences.md` gains an **FFmpeg 8 → 9** section, verified
  against `allfilters.c` / `allcodecs.c` / `allformats.c` on `release/9.0`.
  Three entries misattributed to 8.0 in the 7 → 8 section are corrected

### Changed

- The FFmpeg version list is now derived from `packages/v*` rather than
  enumerated, in the `scripts/` helpers (via the new `scripts/_versions.py`),
  `.gitattributes`, the ruff configuration and the codegen workflow's apply
  step. `scripts/regenerate-monorepo.sh` had silently skipped v9 for the whole
  FFmpeg 9 rollout, and `.gitattributes` left v9's generated bindings counted in
  the language statistics
- The TestPyPI smoke test installs the `typed-ffmpeg` meta-package instead of a
  pinned version package, so it exercises the chain the release actually ships
- `ci-monorepo-test` covers v9 on Python 3.12, and `ci-monorepo-lint` runs its
  circular-import check against v9
- Dependency updates: typer, ty, mypy, ruff, mkdocstrings-python,
  mkdocs-literate-nav, mkdocs-gen-files, griffe-inherited-docstrings

## [4.4] - 2026-08-16

### Added

- **FFmpeg 9 support** — `typed-ffmpeg-v9`, `ffmpeg-data-v9` and `@typed-ffmpeg/v9`, generated from FFmpeg 9.0.1. Adds `premultiply_dynamic`, `transpose_cuda` and `v360_vulkan`; no filters were removed relative to v8
- `docker/ffmpeg-builder/Dockerfile.9.0`, since `jrottenberg/ffmpeg` publishes no 9.x image

### Changed

- **`typed-ffmpeg` now resolves to `typed-ffmpeg-v9`** instead of v8. `typed-ffmpeg-compatible` follows, so both entry points stay on the same FFmpeg major
- Codegen consolidated into a single workflow. `codegen-regenerate.yml` and `regen-bindings.yml` are removed; the former had never succeeded in 100 runs
- Generated bindings are now committed onto the pull request that changes the generator, so `main` never holds generator code without matching output

### Fixed

- **Published cache data was four months stale.** `ffmpeg-data-v*` was written once in April and no workflow refreshed it; regenerated cache now reaches the published packages
- `ffmpeg-data-v8` contained a mix of 8.0 and 8.1 data, and `ts-v8` was generated from 8.1 while the Python bindings came from 8.0
- Codegen retries transient network failures; a single reset previously failed an entire run
- Dependabot's uv updates, which had failed on every run since the manifests moved to a deprecated uv field
- The large-filtergraph recursion fix from 4.0 finally reaches v5, v6 and v7 — only v8 had been regenerated at the time
- `mkdocstrings-python` capped below 2.0, which removed an option the docs config uses

## [4.0.0] - 2026-04-07

### Added

- **Multi-version TypeScript bindings** — full TypeScript code generation for FFmpeg v5–v8 with per-version type-safe filter definitions and documentation

### Changed

- Upgraded ESLint to v10 with compatibility fixes
- Upgraded Pygments to 2.20.0
- Bumped CI actions: `codecov/codecov-action` v6, `actions/upload-artifact` v7, `actions/download-artifact` v8, `actions/setup-python` v6, `docker/setup-buildx-action` v4

### Fixed

- Fixed broken links in README files
- Fixed playground Dependabot entry, stale lockfile, and broken husky hook
- Fixed workspace-internal dependency handling in Dependabot config
- Fixed YAML indentation in codegen-regenerate workflow
- Resolved trailing whitespace and JSON formatting lint failures

## [1.0.0a2] - 2026-04-01

### Added

- **`parse()` in Python and TypeScript** — parse an FFmpeg CLI command string back into a typed filter graph (`ffmpeg -i in.mp4 -vf scale=1280:720 out.mp4` → DAG)
- **TypeScript `parse()`** in `@typed-ffmpeg/core` supporting `-i`, `-vf`, `-af`, `-filter_complex`, `-map`, global/output options, and pre-input options (`-ss`, `-t`)
- **Python `parse()`** parity across `typed-ffmpeg-v5`..`v8` and `ffmpeg-core`
- **Playground parse UI** — paste an FFmpeg command into the sidebar to import it as a visual graph
- **TypeScript playground** (`packages/playground`) with Vite + React + ReactFlow

### Fixed

- Python `parse()`: pre-input options (`-ss`, `-t`) were silently dropped
- Python `parse()`: O(n²) `-map` injection loop replaced with O(n) pass
- TypeScript browser bundle: `parse()` was missing from `index.browser.ts`

### Changed

- Playground E2E tests now use `vite preview` (pre-built static files) in CI for fast, reliable test runs

## [1.0.0a1] - 2026-03-25

Major rewrite: monorepo architecture with multi-version FFmpeg support.

### Added

- **Multi-version FFmpeg support** — separate packages for FFmpeg 5.x, 6.x, 7.x, and 8.x
- **Monorepo architecture** — split into `ffmpeg-core`, `typed-ffmpeg-v5`..`v8`, and `typed-ffmpeg` (latest)
- **Per-version cache data packages** (`ffmpeg-data-v5`..`v8`) for offline filter/codec metadata
- **Version-aware code generation** pipeline producing version-specific bindings
- **Texinfo parser** for enriching filter documentation from FFmpeg source docs
- **New CLI commands**: `generate --version-dir`, `diff`, `reexport`
- **Cross-version diff module** for migration hints between FFmpeg versions
- **CUDA toolkit support** in Docker builds for full CUDA filter coverage
- **Enhanced Docker builder** with Vulkan and plugin support

### Changed

- Package renamed from `typed-ffmpeg` (single package) to a monorepo with per-version packages
- Import paths updated for multi-version support
- Replaced pre-commit with [prek](https://github.com/9999years/prek) (2–10x faster)
- Switched to [uv](https://github.com/astral-sh/uv) package manager
- Improved `ffmpeg-core` test coverage from 74% to 92%
- Regenerated bindings for all supported FFmpeg versions

### Fixed

- FFmpeg 8.0 compatibility (unsigned types, array options, 2-char filter flags)
- Filters without docs no longer silently dropped during codegen
- Backward compatibility with 3.x API preserved where possible
- Docker runtime library dependencies for v7/v8

### Breaking Changes

- New package names: install `typed-ffmpeg` (latest) or `typed-ffmpeg-v8`, `typed-ffmpeg-v7`, etc.
- Shared runtime is now `ffmpeg-core` (installed automatically as a dependency)

## [3.11] - 2026-01-21

### Fixed

- Bool muxer option handling

## [3.10] - 2025-12-31

### Fixed

- Memory leak in ffprobe on subprocess timeout
- Runtime cache folder error with PyInstaller builds

## [3.9] - 2025-12-29

### Added

- Flexible sample format support

### Changed

- Test coverage improvements

## [3.8.2] - 2025-12-19

### Fixed

- Minor bug fixes and stability improvements

## [3.8.1] - 2025-12-07

### Fixed

- Patch release with bug fixes

## [3.8.0] - 2025-12-05

### Added

- AsyncIO subprocess support (`run_async_awaitable()`)
- Enhanced type checking with mypy

## [3.7.1] - 2025-10-17

### Fixed

- Patch release with bug fixes

## [3.7] - 2025-10-16

### Added

- JSON serialization of filter graphs
- Comprehensive filter documentation improvements
