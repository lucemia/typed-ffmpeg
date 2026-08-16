"""
Guard against version lists that stop at the previous major.

Adding an FFmpeg major means touching a dozen enumerated lists. Missing one
usually fails loudly, but the dangerous cases are silent: a test that skips
itself, a job that installs the wrong package, a publish list that quietly
omits a package other packages depend on.

This test derives the set of supported majors from the filesystem — the one
place that cannot drift — and asserts every list that must know about them
does. It lives under packages/ so it runs whenever a packages/vN directory
appears, and deliberately uses no third-party imports: the test-versions job
installs only the bindings under test, and a guard that skips itself when a
dependency is missing is the very failure mode it exists to prevent.
"""

import re
from pathlib import Path

import pytest


def _repo_root() -> Path:
    """
    Locate the repository root.

    Returns:
        The directory containing both pyproject.toml and packages/.

    """
    for candidate in Path(__file__).resolve().parents:
        if (candidate / "pyproject.toml").exists() and (
            candidate / "packages"
        ).is_dir():
            return candidate
    raise RuntimeError("repository root not found")


ROOT = _repo_root()


def _majors() -> list[str]:
    """
    Discover supported FFmpeg majors from the packages directory.

    Returns:
        Sorted major numbers, e.g. ["5", "6", "7", "8", "9"].

    """
    found = {
        m.group(1)
        for p in (ROOT / "packages").iterdir()
        if p.is_dir() and (m := re.fullmatch(r"v(\d+)", p.name))
    }
    return sorted(found, key=int)


MAJORS = _majors()


def test_majors_are_discovered() -> None:
    """The rest of this module is meaningless if discovery returns nothing."""
    assert MAJORS, "no packages/vN directories found"


@pytest.mark.parametrize("major", MAJORS)
def test_companion_packages_exist(major: str) -> None:
    """Each binding package needs its data and TypeScript counterparts."""
    for name in (f"data-v{major}", f"ts-v{major}"):
        assert (ROOT / "packages" / name).is_dir(), (
            f"packages/v{major} exists but packages/{name} does not"
        )


@pytest.mark.parametrize("major", MAJORS)
def test_published_by_release_workflow(major: str) -> None:
    """
    Every binding and data package must be in the publish lists.

    Omitting one is silent: the release succeeds, but a published package
    depends on something that never reached PyPI, so installs fail to resolve.
    """
    text = (ROOT / ".github/workflows/monorepo-publish.yml").read_text()
    # Match a run of bare package names starting at `core`. Prose and comments
    # do not survive this: "core first, then version packages, then latest"
    # stops at the comma, so `latest` never lands in the token set.
    lists = [
        tokens
        for run in re.findall(r"\bcore((?:[ \t]+[\w-]+)+)", text)
        if "latest" in (tokens := run.split())
        and any(t.startswith("data-v") for t in tokens)
    ]
    assert lists, "found no package lists in monorepo-publish.yml to check"
    for tokens in lists:
        for pkg in (f"v{major}", f"data-v{major}"):
            assert pkg in tokens, (
                f"monorepo-publish.yml package list omits {pkg}: core {' '.join(tokens)}"
            )


@pytest.mark.parametrize("major", MAJORS)
def test_covered_by_test_matrices(major: str) -> None:
    """A binding package that no matrix names is never exercised by CI."""
    monorepo = (ROOT / ".github/workflows/ci-monorepo-test.yml").read_text()
    assert re.search(rf"ffmpeg-version:\s*v{major}\b", monorepo), (
        f"ci-monorepo-test test-versions matrix does not cover v{major}"
    )

    ts = (ROOT / ".github/workflows/ci-ts-test.yml").read_text()
    listed = re.search(r"version:\s*\[([^\]]*)\]", ts)
    assert listed, "could not find the ts-test version matrix"
    assert major in [v.strip() for v in listed.group(1).split(",")], (
        f"ci-ts-test matrix does not cover ts-v{major}"
    )


@pytest.mark.parametrize("major", MAJORS)
def test_codegen_can_generate(major: str) -> None:
    """Without a matrix entry the bindings can never be regenerated."""
    codegen = (ROOT / ".github/workflows/ci-codegen-versions.yml").read_text()
    # The entry spans three lines; capture the block following its version.
    entry = re.search(
        rf"- ffmpeg-version:\s*'{major}'\n((?:\s+[a-z-]+:.*\n)+)", codegen
    )
    assert entry, f"ci-codegen-versions has no matrix entry for v{major}"
    block = entry.group(1)
    assert re.search(r"ffmpeg-image:\s*\S+", block), (
        f"v{major} matrix entry has no ffmpeg-image"
    )
    mm = re.search(r"ffmpeg-mm:\s*'(\d+_\d+)'", block)
    assert mm, (
        f"v{major} matrix entry needs a major_minor ffmpeg-mm (e.g. '{major}_0'); "
        "globbing on the major alone also matches sibling minors"
    )
    assert mm.group(1).startswith(f"{major}_"), (
        f"v{major} ffmpeg-mm is {mm.group(1)!r}, which is not a {major}.x version"
    )


@pytest.mark.parametrize("major", MAJORS)
def test_registered_in_workspace(major: str) -> None:
    """An unregistered package is invisible to uv and never installed."""
    text = (ROOT / "pyproject.toml").read_text()
    for member in (f"packages/v{major}", f"packages/data-v{major}"):
        assert f'"{member}"' in text, f"pyproject.toml workspace omits {member}"


@pytest.mark.parametrize("major", MAJORS)
def test_included_in_release_tooling(major: str) -> None:
    """bump-version must reach every package or versions drift apart."""
    text = (ROOT / "scripts/bump-version.py").read_text()
    for pkg in (f"v{major}", f"data-v{major}"):
        assert re.search(rf'"{re.escape(pkg)}"', text), (
            f"scripts/bump-version.py PACKAGES omits {pkg}"
        )


@pytest.mark.parametrize("major", MAJORS)
def test_documented_and_measured(major: str) -> None:
    """Docs and coverage config both enumerate the binding packages."""
    for rel, needle in (
        ("codecov.yml", f"packages/v{major}/src/ffmpeg"),
        ("mkdocs.yml", f"packages/v{major}/src"),
        ("scripts/gen_ref_pages.py", f'"v{major}"'),
    ):
        assert needle in (ROOT / rel).read_text(), f"{rel} omits v{major}"
