import ast
import shutil
import subprocess
from pathlib import Path

import pytest

PACKAGES = Path(__file__).resolve().parents[2]
STUB = PACKAGES / "strict" / "src" / "ffmpeg-stubs" / "types.pyi"
CORE_TYPES = PACKAGES / "core" / "src" / "ffmpeg_core" / "types.py"

SAMPLE = """\
import ffmpeg
from ffmpeg.expressions import Expression, gte
from ffmpeg_core.schema import Default

iw, w = Expression("iw"), Expression("w")
video = ffmpeg.input("in.mp4").video

video.drawbox(x=10, y=2.5, width=(iw - w) / 2, height=Expression("ih/2"))
video.drawbox(thickness=gte("t", 2), x=Default(0))
video.drawbox(color="red")
video.overlay(video, x=(iw - w) / 2)

video.drawbox(x="(iw-w)/2")  # error
video.overlay(video, y="main_h-overlay_h")  # error
"""


def test_stub_covers_every_core_type() -> None:
    # A name missing from the stub disappears from ffmpeg.types for type
    # checkers, and the generated bindings import all of them.
    core_aliases = {
        target.id
        for node in ast.parse(CORE_TYPES.read_text()).body
        if isinstance(node, ast.Assign)
        for target in node.targets
        if isinstance(target, ast.Name)
    }
    stub_all = next(
        node.value
        for node in ast.parse(STUB.read_text()).body
        if isinstance(node, ast.Assign)
        and any(isinstance(t, ast.Name) and t.id == "__all__" for t in node.targets)
    )
    assert set(ast.literal_eval(stub_all)) == core_aliases


@pytest.mark.skipif(shutil.which("ty") is None, reason="ty not installed")
def test_expr_rejects_plain_str(tmp_path: Path) -> None:
    (tmp_path / "sample.py").write_text(SAMPLE)
    search_paths = [
        PACKAGES / "strict" / "src",
        PACKAGES / "v9" / "src",
        PACKAGES / "core" / "src",
    ]
    result = subprocess.run(
        [
            "ty",
            "check",
            "--output-format",
            "concise",
            *[
                arg
                for path in search_paths
                for arg in ("--extra-search-path", str(path))
            ],
            "sample.py",
        ],
        cwd=tmp_path,
        capture_output=True,
        text=True,
    )
    error_lines = sorted(
        int(line.split(":")[1])
        for line in result.stdout.splitlines()
        if "error[" in line
    )
    assert error_lines == [13, 14], result.stdout
