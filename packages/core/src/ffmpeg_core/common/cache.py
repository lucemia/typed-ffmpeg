"""Cache utilities for FFmpeg operations."""

import importlib
import pkgutil
import sys
from functools import lru_cache
from pathlib import Path
from typing import TypeVar

from .serialize import dumps, loads

T = TypeVar("T")

_DATA_PACKAGE_PREFIX = "ffmpeg_data_v"


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


@lru_cache(maxsize=1)
def _iter_data_cache_paths() -> tuple[Path, ...]:
    """
    Find the cache directory of every installed ffmpeg-data-vN package.

    Data packages are discovered by scanning for importable top-level modules
    named ``ffmpeg_data_v<N>`` rather than from a hard-coded version list, so a
    newly released version needs no change here.

    Returns:
        Cache directories, newest version first. Empty if none are installed.

    """
    versions: list[int] = []
    for module in pkgutil.iter_modules():
        suffix = module.name.removeprefix(_DATA_PACKAGE_PREFIX)
        if suffix != module.name and suffix.isdigit():
            versions.append(int(suffix))

    paths: list[Path] = []
    for version in sorted(set(versions), reverse=True):
        try:
            mod = importlib.import_module(f"{_DATA_PACKAGE_PREFIX}{version}")
            paths.append(Path(mod.get_cache_path()))
        except (ImportError, AttributeError):  # pragma: no cover - defensive
            continue
    return tuple(paths)


def _get_data_cache_path() -> Path | None:
    """
    Get the cache path of the newest installed ffmpeg-data-vN package.

    Returns:
        Path to the data cache directory, or None if none is installed.

    """
    paths = _iter_data_cache_paths()
    return paths[0] if paths else None


def load(cls: type[T], id: str) -> T:
    """
    Load an object from the cache.

    Tries the local cache first (for development), then every installed
    ffmpeg-data-vN package newest-first. Raises FileNotFoundError with
    installation instructions if the data is not available.

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
        # Walk every installed data package rather than committing to the
        # newest one: a data package that is installed but does not carry this
        # entry must not shadow an older one that does.
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
