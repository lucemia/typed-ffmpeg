#!/usr/bin/env python3
"""
Fix imports in DAG files that were copied to version packages.

Changes:
  from ffmpeg_core.dag.X import ... → from .X import ... (DAG internal)
  from ffmpeg_core.common import ... → unchanged (still from core)
  from ffmpeg_core.utils import ... → unchanged (still from core)
"""

import re
import sys
from pathlib import Path

# Run either as `python scripts/<name>.py` or from another directory, so put
# scripts/ on the path explicitly rather than relying on sys.path[0].
sys.path.insert(0, str(Path(__file__).parent))
from _versions import version_dirs


def fix_dag_imports_in_file(file_path: Path) -> bool:
    """Fix imports in a DAG file."""
    content = file_path.read_text()
    original_content = content

    # Fix DAG internal imports to be relative
    # from ffmpeg_core.dag.factory → from .factory
    # from ffmpeg_core.dag.nodes → from .nodes
    # from ffmpeg_core.dag.schema → from .schema
    # from ffmpeg_core.dag.utils → from .utils
    content = re.sub(
        r"from ffmpeg_core\.dag\.(\w+) import", r"from .\1 import", content
    )

    # from ffmpeg_core.dag.io.X → from .io.X (still relative)
    content = re.sub(r"from ffmpeg_core\.dag\.io\.", r"from .io.", content)

    # from ffmpeg_core.dag.global_runnable.X → from .global_runnable.X
    content = re.sub(
        r"from ffmpeg_core\.dag\.global_runnable\.", r"from .global_runnable.", content
    )

    # Keep other ffmpeg_core imports unchanged (common, utils, compile, etc.)

    if content != original_content:
        file_path.write_text(content)
        return True
    return False


def main():
    """Fix imports in DAG files in all version packages."""
    repo_root = Path(__file__).parent.parent
    packages_dir = repo_root / "packages"

    for version_dir in version_dirs():
        dag_path = packages_dir / version_dir / "src" / "ffmpeg" / "dag"

        if not dag_path.exists():
            print(f"⚠️  Skipping {version_dir} (DAG not found)")
            continue

        print(f"\n📦 Processing {version_dir}/dag...")

        modified_count = 0

        # Find all Python files in dag/
        for py_file in dag_path.rglob("*.py"):
            # Skip __pycache__
            if "__pycache__" in str(py_file):
                continue

            if fix_dag_imports_in_file(py_file):
                modified_count += 1
                print(f"  ✓ {py_file.relative_to(dag_path)}")

        print(f"  Modified {modified_count} files")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
