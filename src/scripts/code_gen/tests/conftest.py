"""Test fixtures for the code generator."""

from collections.abc import Iterator
from pathlib import Path

import pytest


@pytest.fixture(autouse=True)
def isolated_cache(tmp_path: Path, monkeypatch: pytest.MonkeyPatch) -> Iterator[None]:
    """
    Keep codegen's cache writes out of the source tree.

    `generate()` loads the committed version caches and saves back any it had to
    rebuild from the local FFmpeg. `cache_path` is resolved once at import, so
    those writes land in `packages/core/src/ffmpeg_core/common/cache/` — the
    developer's checkout. Running the suite with an FFmpeg whose version matches
    no package therefore leaves an untracked `filters_8_1.json` (or similar)
    behind, which is easy to sweep into an unrelated commit; that particular file
    was deliberately removed in #1007.

    Existing entries are symlinked in rather than copied, so reads still hit the
    committed data (the caches run to tens of megabytes) while writes create real
    files under `tmp_path`.
    """
    from ffmpeg_core.common import cache as cache_module

    source = cache_module.cache_path
    isolated = tmp_path / "cache"
    for entry in source.rglob("*.json"):
        link = isolated / entry.relative_to(source)
        link.parent.mkdir(parents=True, exist_ok=True)
        link.symlink_to(entry)
    isolated.mkdir(exist_ok=True)

    monkeypatch.setattr(cache_module, "cache_path", isolated)
    yield
