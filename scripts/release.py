#!/usr/bin/env python3
"""Automate the typed-ffmpeg monorepo release process.

Steps:
  1. Ask for new version
  2. Bump all 13 package versions
  3. Update CHANGELOG.md (open in $EDITOR)
  4. Commit and tag
  5. Push to remote
  6. Create GitHub Release (triggers publish workflow)

Usage:
  python scripts/release.py
  python scripts/release.py 4.0.0        # skip version prompt
  python scripts/release.py --dry-run    # preview without making changes
"""

from __future__ import annotations

import argparse
import subprocess
import sys
import textwrap
from datetime import date
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CHANGELOG = REPO_ROOT / "CHANGELOG.md"


def run(cmd: list[str], *, check: bool = True, capture: bool = False, **kwargs) -> subprocess.CompletedProcess[str]:
    print(f"  $ {' '.join(cmd)}")
    return subprocess.run(cmd, check=check, capture_output=capture, text=True, cwd=REPO_ROOT, **kwargs)


def get_current_version() -> str:
    """Read current version from the core package pyproject.toml."""
    toml = (REPO_ROOT / "packages" / "core" / "pyproject.toml").read_text()
    for line in toml.splitlines():
        if line.startswith("version = "):
            return line.split('"')[1]
    return "unknown"


def ask(prompt: str, *, default: str = "") -> str:
    suffix = f" [{default}]" if default else ""
    value = input(f"{prompt}{suffix}: ").strip()
    return value or default


def confirm(prompt: str) -> bool:
    return input(f"{prompt} [y/N]: ").strip().lower() in ("y", "yes")


def check_prerequisites() -> None:
    """Verify git is clean and required tools exist."""
    result = run(["git", "status", "--porcelain"], capture=True)
    if result.stdout.strip():
        print("\nWorking tree is not clean:")
        print(result.stdout)
        if not confirm("Continue anyway?"):
            sys.exit(1)

    # Check gh CLI is available
    result = run(["gh", "--version"], capture=True, check=False)
    if result.returncode != 0:
        print("WARNING: gh CLI not found. GitHub Release will need to be created manually.")
        print("  Install: https://cli.github.com/")


def bump_version(version: str) -> None:
    print(f"\n==> Bumping all packages to {version}")
    run([sys.executable, str(REPO_ROOT / "scripts" / "bump-version.py"), version])


def update_changelog(version: str) -> None:
    print(f"\n==> Updating CHANGELOG.md")
    today = date.today().isoformat()
    header = f"## [{version}] - {today}"

    text = CHANGELOG.read_text()
    # Check if this version already has an entry
    if f"## [{version}]" in text:
        print(f"  CHANGELOG already has an entry for {version}")
    else:
        # Insert new section after the preamble
        marker = "\n## ["
        idx = text.find(marker)
        if idx == -1:
            print("  WARNING: Could not find existing version section in CHANGELOG.md")
            return

        template = textwrap.dedent(f"""\

        {header}

        ### Added

        -

        ### Changed

        -

        ### Fixed

        -

        """)
        text = text[:idx] + template + text[idx:]
        CHANGELOG.write_text(text)
        print(f"  Inserted new section: {header}")

    # Open in editor
    import os
    import shutil

    editor = os.environ.get("EDITOR") or os.environ.get("VISUAL")
    if not editor:
        for candidate in ("code --wait", "vim", "vi", "nano"):
            name = candidate.split()[0]
            if shutil.which(name):
                editor = candidate
                break

    if editor and confirm(f"Open CHANGELOG.md in {editor.split()[0]}?"):
        run(editor.split() + [str(CHANGELOG)], check=False)
    else:
        print(f"  Please edit {CHANGELOG} manually, then press Enter to continue.")
        input("  Press Enter when done...")


def commit_and_tag(version: str) -> None:
    tag = f"v{version}"
    print(f"\n==> Committing and tagging as {tag}")
    run(["git", "add", "-A"])
    run(["git", "commit", "-m", f"release: {tag}"])
    run(["git", "tag", tag])


def push(version: str) -> None:
    tag = f"v{version}"
    print(f"\n==> Pushing to remote")
    result = run(["git", "remote", "get-url", "origin"], capture=True)
    remote_url = result.stdout.strip()
    print(f"  Remote: {remote_url}")

    if not confirm(f"Push commit and tag {tag} to origin?"):
        print("  Skipped. Run manually:")
        print(f"    git push origin main --tags")
        return False
    run(["git", "push", "origin", "main", "--tags"])
    return True


def create_github_release(version: str) -> None:
    tag = f"v{version}"
    print(f"\n==> Creating GitHub Release for {tag}")

    # Extract changelog section for this version
    text = CHANGELOG.read_text()
    start = text.find(f"## [{version}]")
    if start == -1:
        notes = ""
    else:
        # Find the next ## section
        next_section = text.find("\n## [", start + 1)
        section = text[start:next_section].strip() if next_section != -1 else text[start:].strip()
        # Remove the header line
        lines = section.splitlines()
        notes = "\n".join(lines[1:]).strip()

    if not notes:
        print("  WARNING: No changelog notes found for this version")
        notes = f"Release {tag}"

    pre_release = "a" in version or "b" in version or "rc" in version
    cmd = ["gh", "release", "create", tag, "--title", tag, "--notes", notes]
    if pre_release:
        cmd.append("--prerelease")

    if not confirm(f"Create GitHub Release {tag}{'  (pre-release)' if pre_release else ''}?"):
        print("  Skipped. Run manually:")
        print(f"    gh release create {tag}")
        return

    result = run(cmd, check=False)
    if result.returncode != 0:
        print("  Failed to create release. Create it manually at:")
        print(f"    https://github.com/lucemia/typed-ffmpeg/releases/new?tag={tag}")
    else:
        print(f"  Release created. This triggers the publish workflow.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Release typed-ffmpeg monorepo packages")
    parser.add_argument("version", nargs="?", help="New version (e.g. 4.0.0)")
    parser.add_argument("--dry-run", action="store_true", help="Preview steps without making changes")
    args = parser.parse_args()

    current = get_current_version()
    print(f"typed-ffmpeg release script")
    print(f"Current version: {current}")

    if args.dry_run:
        print("\n[DRY RUN] Would perform:")
        print("  1. Bump all 13 package versions")
        print("  2. Update CHANGELOG.md")
        print("  3. Commit and tag")
        print("  4. Push to origin")
        print("  5. Create GitHub Release (triggers PyPI publish)")
        return

    # Step 1: Get version
    version = args.version
    if not version:
        version = ask("New version", default="")
        if not version:
            print("No version provided. Aborting.")
            sys.exit(1)

    print(f"\nWill release: {current} -> {version}")
    if not confirm("Proceed?"):
        sys.exit(0)

    # Step 2: Check prerequisites
    check_prerequisites()

    # Step 3: Bump versions
    bump_version(version)

    # Step 4: Update changelog
    update_changelog(version)

    # Step 5: Commit and tag
    commit_and_tag(version)

    # Step 6: Push
    pushed = push(version)

    # Step 7: Create GitHub Release
    if pushed:
        create_github_release(version)
    else:
        print("\n  Skipping GitHub Release (not pushed yet).")
        print(f"  After pushing, run: gh release create v{version}")

    print("\n==> Done!")


if __name__ == "__main__":
    main()
