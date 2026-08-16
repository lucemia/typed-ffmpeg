#!/usr/bin/env python3
"""Bump version across all monorepo packages."""

import re
import sys
from pathlib import Path

PACKAGES = ["core", "data-v5", "data-v6", "data-v7", "data-v8", "data-v9", "v5", "v6", "v7", "v8", "v9", "latest", "compatible"]
REPO_ROOT = Path(__file__).parent.parent

# Internal packages whose dependency constraints should be updated.
# Matched by pattern rather than listed: an enumerated list went stale the
# moment packages/latest was re-pointed from typed-ffmpeg-v8 to v9, which would
# have left the constraint behind while the version bumped.
INTERNAL_DEP_RE = re.compile(r'"(ffmpeg-core|typed-ffmpeg-v\d+)>=[^"]*"')


def _version_constraint(version: str) -> str:
    """Compute a compatible version constraint from a version string.

    For version "4.0.0" or "4.0.1" returns ">=4.0.0,<5.0".
    For pre-release "4.0.0a1" returns ">=4.0.0a1,<5.0".
    """
    major = version.split(".")[0]
    next_major = int(major) + 1
    return f">={version},<{next_major}.0"


def bump(version: str) -> None:
    constraint = _version_constraint(version)

    for pkg in PACKAGES:
        path = REPO_ROOT / "packages" / pkg / "pyproject.toml"
        text = path.read_text()
        updated = re.sub(r'^version = ".*"', f'version = "{version}"', text, count=1, flags=re.MULTILINE)

        # Also update internal dependency constraints
        updated = INTERNAL_DEP_RE.sub(
            lambda m: f'"{m.group(1)}{constraint}"',
            updated,
        )

        if text == updated:
            print(f"  WARN: no version line found in packages/{pkg}/pyproject.toml")
        else:
            path.write_text(updated)
            print(f"  packages/{pkg}: {version}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python scripts/bump-version.py <version>")
        print("Example: python scripts/bump-version.py 1.0.1")
        print("Example: python scripts/bump-version.py 1.0.0a1")
        sys.exit(1)

    version = sys.argv[1]
    print(f"Bumping all packages to {version}...")
    bump(version)
    print("Done.")
