#!/usr/bin/env python3
"""
Fix imports in generated code for monorepo architecture.

Changes:
  from ffmpeg.dag.factory import ... → from ffmpeg_core.dag.factory import ...
  from ffmpeg.common.schema import ... → from ffmpeg_core.common.schema import ...
  etc.

Preserves relative imports within the same package (e.g., from .options.codec import ...)
"""

import re
from pathlib import Path

# Modules that moved to ffmpeg_core package
CORE_MODULES = {
    "dag",
    "common",
    "compile",
    "ir",
    "utils",
    "ffprobe",
    "schema",
    "types",
    "exceptions",
    "expressions",
    "base",
    "info",
}


def fix_imports_in_file(file_path: Path) -> bool:
    """
    Fix imports in a single file.

    Returns:
        True if file was modified, False otherwise

    """
    content = file_path.read_text()
    original_content = content

    # Fix core module imports: ffmpeg.{core_module} → ffmpeg_core.{core_module}
    for module in CORE_MODULES:
        # Match: from ffmpeg.{module}.something import ...
        pattern1 = rf"from ffmpeg\.{module}\."
        replacement1 = f"from ffmpeg_core.{module}."
        content = re.sub(pattern1, replacement1, content)

        # Match: from ffmpeg.{module} import ...
        pattern2 = rf"from ffmpeg\.{module} import"
        replacement2 = f"from ffmpeg_core.{module} import"
        content = re.sub(pattern2, replacement2, content)

    # Fix generated module imports to be relative
    # from ffmpeg.options.framesync → from .options.framesync (in filters.py, sources.py)
    # from ffmpeg.options.codec → from .options.codec
    # from ffmpeg.codecs.schema → from .codecs.schema
    # from ffmpeg.formats.schema → from .formats.schema
    # from ffmpeg.streams.{module} → from .streams.{module}

    # These are generated modules that should use relative imports within the package
    content = re.sub(r"from ffmpeg\.options\.", "from .options.", content)
    content = re.sub(r"from ffmpeg\.codecs\.", "from .codecs.", content)
    content = re.sub(r"from ffmpeg\.formats\.", "from .formats.", content)
    content = re.sub(r"from ffmpeg\.streams\.", "from .streams.", content)

    if content != original_content:
        file_path.write_text(content)
        return True
    return False


def main():
    """Fix imports in all version packages."""
    repo_root = Path(__file__).parent.parent
    packages_dir = repo_root / "packages"

    # Process each version package
    for version_dir in ["v5", "v6", "v7", "v8", "v9"]:
        version_path = packages_dir / version_dir / "src" / "ffmpeg"

        if not version_path.exists():
            print(f"⚠️  Skipping {version_dir} (not found)")
            continue

        print(f"\n📦 Processing {version_dir}...")

        modified_count = 0

        # Find all Python files
        for py_file in version_path.rglob("*.py"):
            if fix_imports_in_file(py_file):
                modified_count += 1
                print(f"  ✓ {py_file.relative_to(version_path)}")

        print(f"  Modified {modified_count} files")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
