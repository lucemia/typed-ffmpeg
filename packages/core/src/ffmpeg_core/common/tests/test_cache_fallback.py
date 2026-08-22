import importlib
import sys
from collections.abc import Iterator
from pathlib import Path

import pytest

from ..cache import _get_data_cache_path, _iter_data_cache_paths, load
from ..schema import FFMpegFilter, FFMpegOption
from ..serialize import dumps

# Far above any real ffmpeg-data-vN release, so the fakes cannot collide with a
# data package that happens to be installed in the test environment.
FAKE_NEWER = 98
FAKE_NEWEST = 99


def _write_data_package(root: Path, version: int) -> Path:
    """
    Create an importable ffmpeg_data_v{version} package and return its cache dir.

    Args:
        root: Directory on sys.path to create the package in.
        version: Major version the fake data package stands for.

    Returns:
        The package's cache directory.

    """
    pkg = root / f"ffmpeg_data_v{version}"
    cache = pkg / "cache"
    cache.mkdir(parents=True)
    pkg.joinpath("__init__.py").write_text(
        "from pathlib import Path\n"
        "\n"
        "\n"
        "def get_cache_path() -> Path:\n"
        '    return Path(__file__).parent / "cache"\n'
    )
    return cache


@pytest.fixture
def data_package_root(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> Iterator[Path]:
    """Provide a sys.path directory to install fake data packages into."""
    root = tmp_path / "site-packages"
    root.mkdir()
    monkeypatch.syspath_prepend(str(root))
    importlib.invalidate_caches()
    _iter_data_cache_paths.cache_clear()

    yield root

    _iter_data_cache_paths.cache_clear()
    for version in (FAKE_NEWER, FAKE_NEWEST):
        sys.modules.pop(f"ffmpeg_data_v{version}", None)


def test_get_data_cache_path() -> None:
    path = _get_data_cache_path()
    # Returns a valid path if a data package is installed, None otherwise
    if path is not None:
        assert path.exists()


def test_load_missing_cache_raises_file_not_found() -> None:
    with pytest.raises(FileNotFoundError, match="Cache file not found"):
        load(FFMpegFilter, "nonexistent_id_that_does_not_exist")


def test_load_from_cache() -> None:
    # Loads from local cache (dev) or data package (installed)
    options = load(list[FFMpegOption], "options")
    assert len(options) > 0


def test_discovers_data_package_for_unknown_version(data_package_root: Path) -> None:
    """
    Data packages are discovered by name, not from a hard-coded version list.

    Regression test: ffmpeg-data-v9 shipped while the lookup only knew about
    v5-v8, which left `typed-ffmpeg[parse]` unable to find its own cache data.
    """
    cache = _write_data_package(data_package_root, FAKE_NEWEST)

    assert cache in _iter_data_cache_paths()
    # Newest version first, so the fake outranks any real data package.
    assert _get_data_cache_path() == cache


def test_data_cache_paths_are_ordered_newest_first(data_package_root: Path) -> None:
    newer = _write_data_package(data_package_root, FAKE_NEWER)
    newest = _write_data_package(data_package_root, FAKE_NEWEST)

    paths = _iter_data_cache_paths()
    assert paths.index(newest) < paths.index(newer)


def test_empty_newer_data_package_does_not_shadow_older(
    data_package_root: Path,
) -> None:
    """
    A data package missing an entry falls through to one that has it.

    Regression test: an unpopulated ffmpeg-data-v9 hid the populated v8 cache
    because the lookup committed to the newest installed package outright.
    """
    _write_data_package(data_package_root, FAKE_NEWEST)  # installed but empty
    populated = _write_data_package(data_package_root, FAKE_NEWER)

    payload = load(list[FFMpegOption], "options")[:1]
    entry = populated / "list"
    entry.mkdir()
    entry.joinpath("shadow_probe.json").write_text(dumps(payload))

    assert load(list[FFMpegOption], "shadow_probe") == payload
