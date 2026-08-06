"""Cache utilities for FFmpeg operations."""

import sys
from collections.abc import Iterator
from pathlib import Path
from typing import TypeVar

from .serialize import dumps, loads

T = TypeVar("T")


def get_cache_path() -> Path:
    """
    Get the cache directory path.

    Returns the cache directory path, creating it if it doesn't exist.
    When running as a frozen application (e.g., PyInstaller), uses the
    temporary extraction directory. Otherwise, uses the cache subdirectory
    relative to this module.

    Returns:
        Path: The cache directory path

    """
    if getattr(sys, "frozen", False):
        base_path = Path(getattr(sys, "_MEIPASS", ""))
    else:
        base_path = Path(__file__).parent

    cache_path = base_path / "cache"
    cache_path.mkdir(exist_ok=True)
    return cache_path


cache_path = get_cache_path()


def _iter_data_cache_paths() -> Iterator[Path]:
    """
    Yield cache directories of installed ffmpeg-data-vN packages, newest first.

    Only directories that actually exist are yielded: a data package may be
    installed from a source checkout before its cache files have been
    generated, and such a package must not shadow an older, populated one.

    Yields:
        Path to each usable data cache directory.

    """
    for version in ("v9", "v8", "v7", "v6", "v5"):
        try:
            mod = __import__(f"ffmpeg_data_{version}")
        except ImportError:
            continue
        path = mod.get_cache_path()
        if path.is_dir():
            yield path


def _get_data_cache_path() -> Path | None:
    """
    Get the cache path from an installed ffmpeg-data-vN package.

    Tries ffmpeg_data_v9 through ffmpeg_data_v5 (newest first) and returns
    the first one with an existing cache directory. Returns None if no data
    package is installed.

    Returns:
        Path to the data cache directory, or None if not installed.

    """
    return next(_iter_data_cache_paths(), None)


def load(cls: type[T], id: str) -> T:
    """
    Load an object from the cache.

    Tries the local cache first (for development), then falls back to an
    installed ffmpeg-data-vN package. Raises FileNotFoundError with installation
    instructions if the data is not available.

    Args:
        cls: The class of the object
        id: The id of the object

    Returns:
        The loaded object

    Raises:
        FileNotFoundError: If the cache file is not found and no data package is installed.

    """
    path = cache_path / f"{cls.__name__}/{id}.json"

    if not path.exists():
        # Try every installed data package, newest first — the newest one may
        # not carry this particular entry yet.
        for data_cache in _iter_data_cache_paths():
            data_path = data_cache / f"{cls.__name__}/{id}.json"
            if data_path.exists():
                path = data_path
                break

    try:
        with path.open() as ifile:
            obj = loads(ifile.read())
            return obj
    except FileNotFoundError:
        raise FileNotFoundError(
            f"Cache file not found: {cls.__name__}/{id}.json. "
            "Install the parse extra for CLI parsing and Python compilation support: "
            "pip install typed-ffmpeg[parse]"
        ) from None


def save(obj: T, id: str) -> None:
    """
    Save an object to the cache.

    Args:
        obj: The object to save
        id: The id of the object

    """
    schema_path = cache_path / f"{obj.__class__.__name__}"
    schema_path.mkdir(exist_ok=True)

    with (schema_path / f"{id}.json").open("w") as ofile:
        ofile.write(dumps(obj))
        ofile.write("\n")


def list_all(cls: type[T]) -> list[T]:
    """
    List all objects of a class in the cache.

    Args:
        cls: The class of the objects

    Returns:
        A list of all objects of the class in the cache

    """
    path = cache_path / f"{cls.__name__}"

    return [loads(i.read_text()) for i in path.glob("*.json")]


def clean(cls: type[T]) -> None:
    """Clean the cache for a class."""
    path = cache_path / f"{cls.__name__}"
    for i in path.glob("*.json"):
        i.unlink()
