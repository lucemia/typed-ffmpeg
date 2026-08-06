"""Generate the code reference pages and navigation."""

from __future__ import annotations

from pathlib import Path

import mkdocs_gen_files

nav = mkdocs_gen_files.Nav()

root = Path(__file__).parent.parent

VERSIONS = ["v5", "v6", "v7", "v8", "v9"]
core_src = root / "packages" / "core" / "src"
stubs_dir = root / "docs" / "_stubs"


def _add_api_pages(src: Path, module_prefix: str, nav_prefix: tuple[str, ...], doc_prefix: Path) -> None:
    """Generate full mkdocstrings API reference pages for a source tree."""
    for path in sorted(src.rglob("*.py")):
        if any(part in path.parts for part in ("tests", "__pycache__", ".claude", "cache")):
            continue

        module_path = path.relative_to(src).with_suffix("")
        doc_path = path.relative_to(src).with_suffix(".md")
        full_doc_path = doc_prefix / doc_path
        parts = tuple(module_path.parts)

        if parts[-1] == "__init__":
            parts = parts[:-1]
            doc_path = doc_path.with_name("index.md")
            full_doc_path = doc_prefix / doc_path
        elif parts[-1] == "__main__":
            continue

        if not parts:
            continue

        nav[nav_prefix + parts] = full_doc_path.relative_to("reference").as_posix()

        with mkdocs_gen_files.open(full_doc_path, "w") as fd:
            ident = f"{module_prefix}." + ".".join(parts)
            fd.write(f"::: {ident}\n")

        mkdocs_gen_files.set_edit_path(full_doc_path, path.relative_to(root))


# ffmpeg_core: common runtime
_add_api_pages(
    src=core_src / "ffmpeg_core",
    module_prefix="ffmpeg_core",
    nav_prefix=("ffmpeg_core",),
    doc_prefix=Path("reference/ffmpeg_core"),
)

# Per-version bindings using stubs aliases (ffmpeg_v5, ffmpeg_v6, ...)
for version in VERSIONS:
    stub = stubs_dir / f"ffmpeg_{version}"
    if not stub.exists():
        continue
    _add_api_pages(
        src=stub,
        module_prefix=f"ffmpeg_{version}",
        nav_prefix=(version,),
        doc_prefix=Path(f"reference/{version}"),
    )

with mkdocs_gen_files.open("reference/SUMMARY.md", "w") as nav_file:
    nav_file.writelines(nav.build_literate_nav())
