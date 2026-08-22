# Shared Tests for typed-ffmpeg v5-v9

These tests are reused across all version packages (typed-ffmpeg-v5 through typed-ffmpeg-v9).
Most snapshots are identical across versions and stored in a single `__snapshots__/` dir;
version-sensitive tests use per-version `__snapshots_vN__/` dirs (see `conftest.py`).

## Running tests

Run with the desired version's package installed:

```bash
# v9
uv sync --package typed-ffmpeg-v9
pytest packages/tests-shared -v

# v5
uv sync --package typed-ffmpeg-v5
pytest packages/tests-shared -v
```

## Skipping test_view

The `test_view` tests require graphviz. To skip them:

```bash
pytest packages/tests-shared -v -k "not test_view"
```
