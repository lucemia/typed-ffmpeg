#!/usr/bin/env python3
"""
Module for pre-compiling FFmpeg source code.

This module handles the preprocessing of FFmpeg C source code to make it easier
to parse and analyze. It runs the FFmpeg configure script if needed, modifies
configuration files to enable all components, and uses the C preprocessor to
expand macros and includes in the source files, producing preprocessed versions
that are more amenable to regex-based parsing.
"""

import os
import pathlib
import subprocess
import tarfile
import urllib.request

from ffmpeg_core.common.cache import get_cache_path

from ..parse_help.utils import get_ffmpeg_version

DEFAULT_FFMPEG_RELEASE_BASE_URL = "https://ffmpeg.org/releases"
cache_root = get_cache_path() / "ffmpeg_source"
cache_root.mkdir(parents=True, exist_ok=True)

target_folder = pathlib.Path(__file__).parent / "ffmpeg"
target_folder.mkdir(parents=True, exist_ok=True)


def _release_archive_url(version: str) -> str:
    return f"{DEFAULT_FFMPEG_RELEASE_BASE_URL}/ffmpeg-{version}.tar.xz"


def _download_release_archive(version: str) -> pathlib.Path:
    archive_path = cache_root / f"ffmpeg-{version}.tar.xz"
    if archive_path.exists():
        return archive_path
    urllib.request.urlretrieve(_release_archive_url(version), archive_path)
    return archive_path


def _prepare_source_folder(version: str) -> pathlib.Path:
    extracted = cache_root / f"ffmpeg-{version}"
    if extracted.exists():
        return extracted

    archive_path = _download_release_archive(version)
    with tarfile.open(archive_path, "r:xz") as tar:
        tar.extractall(cache_root)
    return extracted


def _target_folder(version: str) -> pathlib.Path:
    # Keep precompiled output separated by source version.
    folder = target_folder / version.replace(".", "_")
    folder.mkdir(parents=True, exist_ok=True)
    return folder


def precompile(ffmpeg_binary: str = "ffmpeg") -> pathlib.Path:
    """
    Pre-compile the ffmpeg source code.

    Returns:
        Path to the version-scoped precompiled source folder.

    Raises:
        CalledProcessError: If the configure script fails.

    """
    version = get_ffmpeg_version(ffmpeg_binary=ffmpeg_binary)
    source_folder = _prepare_source_folder(version)
    compiled_target_folder = _target_folder(version)
    print(f"precompile ffmpeg {version} from {source_folder}")
    os.chdir(source_folder)

    if not os.path.exists("config_components.h"):
        try:
            # Ensure the output is captured in case of an error
            subprocess.check_output(["./configure"], stderr=subprocess.STDOUT)
        except subprocess.CalledProcessError as e:  # pragma: no cover
            print(f"Configure script failed with exit status {e.returncode}")
            print("Output:", e.output.decode())
            raise

    with open("config_components.h") as f:
        text = f.read()

    text = text.replace(" 0", " 1")

    with open("config_components.h", "w") as f:
        f.write(text)

    for file in source_folder.glob("**/*.[cm]"):
        print(f"precompile {file}")
        p = file.relative_to(source_folder)
        target_path = (compiled_target_folder / p).resolve()

        if target_path.exists():
            continue

        target_path.parent.mkdir(parents=True, exist_ok=True)
        with open(target_path, "w") as out:
            subprocess.run(["gcc", "-E", "-I.", str(file)], stdout=out, check=False)

    return compiled_target_folder
