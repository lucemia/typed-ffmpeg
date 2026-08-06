#!/usr/bin/env python3
"""
Add lazy import for filter_node_factory in streams files.

Converts:
    from ..dag.factory import filter_node_factory

To:
    from typing import TYPE_CHECKING
    if TYPE_CHECKING:
        from ..dag.factory import filter_node_factory

    def _get_filter_factory():
        from ..dag.factory import filter_node_factory
        return filter_node_factory

And replaces all `filter_node_factory(` with `_get_filter_factory()(`
"""

import re
from pathlib import Path


def add_lazy_import(file_path: Path) -> bool:
    """Add lazy import pattern to a streams file."""
    content = file_path.read_text()
    original = content

    # Check if already has lazy import
    if "_get_filter_factory" in content:
        return False

    # Remove the top-level import
    content = re.sub(
        r"^from \.\.dag\.factory import filter_node_factory\n",
        "",
        content,
        flags=re.MULTILINE,
    )

    # Add TYPE_CHECKING import if not present
    if "from typing import TYPE_CHECKING" not in content:
        # Add after other typing imports or at the beginning
        if "from typing import" in content:
            content = content.replace(
                "from typing import", "from typing import TYPE_CHECKING, ", 1
            )
        else:
            # Add before first import
            lines = content.split("\n")
            for i, line in enumerate(lines):
                if line.startswith("from ") or line.startswith("import "):
                    lines.insert(i, "from typing import TYPE_CHECKING")
                    break
            content = "\n".join(lines)

    # Add the lazy import helper function
    # Insert after imports, before first class/function definition
    lines = content.split("\n")
    insert_pos = 0
    for i, line in enumerate(lines):
        if line.startswith("class ") or (
            line.startswith("def ") and not line.strip().startswith("#")
        ):
            insert_pos = i
            break

    lazy_import_code = '''
if TYPE_CHECKING:
    from ..dag.factory import filter_node_factory


def _get_filter_factory():
    """Lazy import to avoid circular dependency."""
    from ..dag.factory import filter_node_factory
    return filter_node_factory

'''

    lines.insert(insert_pos, lazy_import_code)
    content = "\n".join(lines)

    # Replace all filter_node_factory( with _get_filter_factory()(
    content = re.sub(r"\bfilter_node_factory\(", "_get_filter_factory()(", content)

    if content != original:
        file_path.write_text(content)
        return True
    return False


def main():
    """Add lazy imports to all streams files."""
    repo_root = Path(__file__).parent.parent

    for version in ["v5", "v6", "v7", "v8", "v9"]:
        print(f"\n📦 Processing {version}...")

        streams_dir = repo_root / "packages" / version / "src" / "ffmpeg" / "streams"

        if not streams_dir.exists():
            print("  ⚠️  Streams directory not found")
            continue

        modified = 0
        for file in ["audio.py", "video.py"]:
            file_path = streams_dir / file
            if file_path.exists():
                if add_lazy_import(file_path):
                    print(f"  ✅ Added lazy import to {file}")
                    modified += 1
                else:
                    print(f"  ⏭️  Skipped {file} (already has lazy import)")

        print(f"  Modified {modified} files")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
