"""Discover the FFmpeg version packages present in the monorepo.

Every helper script in this directory used to carry its own literal
``["v5", "v6", "v7", "v8"]``. Adding FFmpeg 9 meant hunting all of them down
(see #999), and any one that was missed silently skipped the new package
instead of failing, so the omission only showed up much later as a broken
stub or a stale binding. Deriving the list from ``packages/`` removes that
class of miss entirely.
"""

import re
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
PACKAGES_DIR = REPO_ROOT / "packages"

_VERSION_DIR_RE = re.compile(r"v(\d+)")


def version_dirs(packages_dir: Path = PACKAGES_DIR) -> list[str]:
    """Return the version package directory names, oldest major first.

    Matches ``packages/v<N>`` only, so ``data-v9``, ``ts-v9``, ``latest`` and
    the other non-binding packages are left out.

    Args:
        packages_dir: Directory to scan. Defaults to ``packages/``.

    Returns:
        Names such as ``["v5", "v6", "v7", "v8", "v9"]``.

    """
    matches = [
        match
        for path in packages_dir.iterdir()
        if path.is_dir() and (match := _VERSION_DIR_RE.fullmatch(path.name))
    ]
    return [m.group(0) for m in sorted(matches, key=lambda m: int(m.group(1)))]


def version_majors(packages_dir: Path = PACKAGES_DIR) -> list[str]:
    """Return the version package majors, oldest first.

    Args:
        packages_dir: Directory to scan. Defaults to ``packages/``.

    Returns:
        Majors such as ``["5", "6", "7", "8", "9"]``.

    """
    return [name[1:] for name in version_dirs(packages_dir)]


if __name__ == "__main__":
    print(" ".join(version_majors()))
