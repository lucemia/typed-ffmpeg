import subprocess
import tempfile
import time
from dataclasses import asdict
from pathlib import Path
from typing import cast
from unittest.mock import patch

import pytest
from syrupy.assertion import SnapshotAssertion
from syrupy.extensions.json import JSONSnapshotExtension

from ...conftest import requires_ffprobe
from ..probe import probe, probe_obj

test_data = Path(__file__).parent / "test_probe"


def is_static_image(format_name: str) -> bool:
    """
    Check if the format is a static image format.

    Args:
        format_name: The format name to check

    Returns:
        True if the format is a static image format, False otherwise

    """
    return format_name in {"jpeg_pipe", "png_pipe", "webp_pipe"}


@requires_ffprobe
@pytest.mark.parametrize("path", test_data.glob("**/*.*"), ids=lambda x: x.name)
def test_probe_default(path: Path, snapshot: SnapshotAssertion) -> None:
    info = probe(path)

    # Check basic structure
    assert isinstance(info, dict)
    assert "format" in info
    assert "streams" in info

    # Check format section
    format_info = info["format"]
    assert isinstance(format_info, dict)
    assert "format_name" in format_info

    # Duration is not available for static images
    if not is_static_image(format_info["format_name"]):
        assert "duration" in format_info
        assert "size" in format_info
        assert "bit_rate" in format_info

    # Check streams section
    streams = info["streams"]
    assert isinstance(streams, list)
    assert len(streams) > 0

    # Check each stream
    for stream in streams:
        assert isinstance(stream, dict)
        assert "codec_type" in stream
        assert "index" in stream

        # codec_name is not available for data streams
        if stream["codec_type"] != "data":
            assert "codec_name" in stream

    # Result is deliberately discarded: ffprobe output is not stable across
    # versions, so the snapshot is recorded rather than asserted. Binding it
    # keeps that intent in the code rather than only in a comment (B015).
    _ = snapshot(name="json", extension_class=JSONSnapshotExtension) == info

    obj = probe_obj(path)
    assert obj is not None
    _ = snapshot(name="obj", extension_class=JSONSnapshotExtension) == asdict(obj)


@requires_ffprobe
@pytest.mark.parametrize("path", test_data.glob("**/*.*"), ids=lambda x: x.name)
def test_probe_complete(path: Path, snapshot: SnapshotAssertion) -> None:
    info = probe(
        path,
        show_program_version=True,
        show_library_versions=True,
        show_pixel_formats=True,
        show_packets=True,
        show_frames=True,
        show_programs=True,
        show_streams=True,
        show_chapters=True,
        show_format=True,
        show_error=True,
    )

    # Check basic structure
    assert isinstance(info, dict)
    assert "format" in info
    assert "streams" in info

    # Check format section
    format_info = info["format"]
    assert isinstance(format_info, dict)
    assert "format_name" in format_info

    # Duration is not available for static images
    if not is_static_image(format_info["format_name"]):
        assert "duration" in format_info
        assert "size" in format_info
        assert "bit_rate" in format_info

    # Check streams section
    streams = info["streams"]
    assert isinstance(streams, list)
    assert len(streams) > 0

    # Check each stream
    for stream in streams:
        assert isinstance(stream, dict)
        assert "codec_type" in stream
        assert "index" in stream

        # codec_name is not available for data streams
        if stream["codec_type"] != "data":
            assert "codec_name" in stream

            # Additional checks for complete probe
            if stream["codec_type"] == "video":
                assert "width" in stream
                assert "height" in stream
                # pix_fmt is not available for some formats like WebP
                if stream.get("codec_name") not in {"webp"}:
                    assert "pix_fmt" in stream
            elif stream["codec_type"] == "audio":
                assert "sample_rate" in stream
                assert "channels" in stream

    # Result is deliberately discarded: ffprobe output is not stable across
    # versions, so the snapshot is recorded rather than asserted. Binding it
    # keeps that intent in the code rather than only in a comment (B015).
    _ = snapshot(name="json", extension_class=JSONSnapshotExtension) == info

    obj = probe_obj(
        path,
        show_program_version=True,
        show_library_versions=True,
        show_pixel_formats=True,
        show_packets=True,
        show_frames=True,
        show_programs=True,
        show_streams=True,
        show_chapters=True,
        show_format=True,
        show_error=True,
    )
    assert obj is not None
    _ = snapshot(name="obj", extension_class=JSONSnapshotExtension) == asdict(obj)


@requires_ffprobe
def test_probe_timeout_cleanup() -> None:
    """
    Test that ffprobe subprocess is properly cleaned up when timeout occurs.

    This test verifies that when a TimeoutExpired exception is raised,
    the subprocess is terminated and pipes are closed, preventing memory leaks.
    """
    with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as tmp:
        tmp_path = tmp.name
        # Write some minimal data so the file exists
        tmp.write(b"fake video data")

    tracked_process: subprocess.Popen[bytes] | None = None

    try:
        # Mock subprocess to track the created process
        original_popen = subprocess.Popen

        def mock_popen(*args: object, **kwargs: object) -> object:
            nonlocal tracked_process
            # Check if this is an ffprobe command
            # args can be a list or string depending on shell parameter
            args_list = args[0] if args else []
            cmd_str = (
                " ".join(args_list)
                if isinstance(args_list, list | tuple)
                else str(args_list)
            )
            if "ffprobe" in cmd_str:
                # Replace with a sleep command that takes longer than timeout
                new_args = ["sleep", "30"]
                proc = cast(subprocess.Popen[bytes], original_popen(new_args, **kwargs))  # type: ignore[call-overload]
                tracked_process = proc
                return proc
            return original_popen(*args, **kwargs)  # type: ignore[call-overload]

        with patch("subprocess.Popen", side_effect=mock_popen):
            # Try to probe with a very short timeout
            # This should raise TimeoutExpired
            with pytest.raises(subprocess.TimeoutExpired):
                probe(tmp_path, timeout=1)  # 1 second timeout

            # Verify the tracked process was created and properly cleaned up
            assert tracked_process is not None, "Process should have been created"

            # Poll with timeout to check process termination
            max_wait_time = 1.0  # Maximum time to wait for process termination
            start_time = time.time()
            while time.time() - start_time < max_wait_time:
                exit_code = tracked_process.poll()
                if exit_code is not None:
                    # Process has terminated successfully
                    break
                time.sleep(0.05)  # Small polling interval
            else:
                # Timeout waiting for process to terminate
                pytest.fail(
                    f"Process should have been terminated but is still running after {max_wait_time}s (PID: {tracked_process.pid})"
                )

            # Verify pipes were closed (after assertion, we know tracked_process is not None)
            assert (
                tracked_process.stdout is not None and tracked_process.stdout.closed
            ), "stdout pipe should be closed"
            assert (
                tracked_process.stderr is not None and tracked_process.stderr.closed
            ), "stderr pipe should be closed"

    finally:
        # Clean up the temp file
        Path(tmp_path).unlink(missing_ok=True)
        # Ensure process is terminated even if test fails
        if tracked_process and tracked_process.poll() is None:
            tracked_process.kill()
            tracked_process.wait()
