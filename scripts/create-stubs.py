#!/usr/bin/env python3
"""
Create stub re-export files in version packages for ffmpeg_core modules.

These stubs allow version packages to import from ffmpeg.* and have it
automatically redirect to ffmpeg_core.*.
"""

from pathlib import Path

# Modules that should be re-exported from ffmpeg_core
STUB_MODULES = {
    "exceptions.py": "exceptions",
    "expressions.py": "expressions",
    "types.py": "types",
    "schema.py": "schema",
    "info.py": "info",
    "common/__init__.py": "common",
    "common/schema.py": "common.schema",
    "utils/__init__.py": "utils",
    "utils/run.py": "utils.run",
    "utils/frozendict.py": "utils.frozendict",
    "utils/typing.py": "utils.typing",
    "utils/escaping.py": "utils.escaping",
    "utils/lazy_eval/__init__.py": "utils.lazy_eval",
}

# Deliberately NOT stubbed: base.py, utils/snapshot.py and utils/view.py.
# ffmpeg_core has no `base` module, and ffmpeg_core.utils.{snapshot,view} are
# tombstones that raise ImportError because they depend on the DAG layer. Each
# version package ships its own real implementation of these three, and
# create_stub() overwrites unconditionally -- listing them here replaced working
# code with broken re-export stubs in every version package.


def create_stub(file_path: Path, module_name: str):
    """Create a stub file that re-exports from ffmpeg_core."""
    file_path.parent.mkdir(parents=True, exist_ok=True)

    content = f'"""Re-export from ffmpeg_core.{module_name}."""\n'
    content += f"from ffmpeg_core.{module_name} import *  # noqa: F401, F403\n"

    file_path.write_text(content)


def main():
    """Create all stub files in all version packages."""
    repo_root = Path(__file__).parent.parent
    packages_dir = repo_root / "packages"

    for version_dir in ["v5", "v6", "v7", "v8", "v9"]:
        version_path = packages_dir / version_dir / "src" / "ffmpeg"

        if not version_path.exists():
            print(f"⚠️  Skipping {version_dir} (not found)")
            continue

        print(f"\n📦 Creating stubs in {version_dir}...")

        created_count = 0

        for file_rel_path, module_name in STUB_MODULES.items():
            file_path = version_path / file_rel_path

            # Skip if already exists and looks like a stub
            if file_path.exists():
                content = file_path.read_text()
                if "Re-export from ffmpeg_core" in content:
                    continue

            create_stub(file_path, module_name)
            created_count += 1
            print(f"  ✓ {file_rel_path}")

        if created_count == 0:
            print("  (all stubs already exist)")
        else:
            print(f"  Created {created_count} stubs")

    print("\n✅ Done!")


if __name__ == "__main__":
    main()
