"""
Execution capabilities for FFmpeg filter graphs.

This module provides the GlobalRunable class, which extends GlobalArgs with
methods for executing FFmpeg commands. It enables compiling filter graphs
into command-line arguments and running FFmpeg processes both synchronously
and asynchronously.
"""

from __future__ import annotations

import asyncio
import logging
import subprocess
import sys
import threading
from typing import IO, TYPE_CHECKING

from ...exceptions import FFMpegExecuteError
from ...utils.run import command_line
from .global_args import GlobalArgs

if TYPE_CHECKING:
    from ..nodes import GlobalStream, OutputStream

logger = logging.getLogger(__name__)


class GlobalRunable(GlobalArgs):
    """
    Base class that provides execution capabilities for FFmpeg filter graphs.

    This class extends GlobalArgs with methods for compiling filter graphs into
    FFmpeg command-line arguments and executing FFmpeg processes. It serves as
    a mixin for stream classes that need to be executed as FFmpeg commands.
    """

    @staticmethod
    def _start_stderr_tee_thread(
        stderr_pipe: IO[bytes],
        capture_buffer: list[bytes] | None = None,
        write_to_stderr: bool = True,
    ) -> threading.Thread:
        """
        Start a thread that reads from stderr pipe and optionally writes to sys.stderr.

        Optionally captures stderr to a buffer for later retrieval.

        Args:
            stderr_pipe: The stderr pipe from the subprocess
            capture_buffer: Optional list to append captured stderr chunks to
            write_to_stderr: Whether to write stderr chunks to sys.stderr

        Returns:
            The started thread (daemon thread)

        """

        def read_stderr() -> None:
            """Read from stderr pipe, optionally capture, and optionally write to sys.stderr."""
            try:
                # Safely get stderr binary output stream
                out: IO[bytes] | None = None
                if write_to_stderr:
                    # sys.stderr.buffer is the binary buffer, which exists in normal Python
                    # If it doesn't exist (e.g., sys.stderr was replaced), we can't write bytes
                    out = getattr(sys.stderr, "buffer", None)

                while True:
                    chunk = stderr_pipe.read(4096)
                    if not chunk:
                        break

                    # Capture to buffer if provided
                    if capture_buffer is not None:
                        capture_buffer.append(chunk)

                    # Write to sys.stderr if enabled and buffer is available
                    if out is not None:
                        out.write(chunk)
                        out.flush()
            except (OSError, BrokenPipeError):
                # Expected I/O errors (pipe closed, process terminated, etc.)
                logger.debug(
                    "I/O error while reading FFmpeg stderr (process may have terminated)"
                )
            except Exception:
                # Unexpected errors - log with full traceback for debugging
                logger.exception("Unexpected error while reading FFmpeg stderr")

        thread = threading.Thread(target=read_stderr, daemon=True)
        thread.start()
        return thread

    def merge_outputs(self, *streams: OutputStream) -> GlobalStream:
        """
        Merge multiple output streams into a single command.

        This method allows combining multiple output files into a single FFmpeg
        command, which is more efficient than running separate commands for each
        output. It creates a GlobalNode that includes all the specified output
        streams.

        Args:
            *streams: Additional output streams to include in the same command

        Returns:
            A GlobalStream that represents the combined outputs

        Example:
            ```python
            # Create two output files with one command
            video = ffmpeg.input("input.mp4").video
            output1 = video.output("output1.mp4")
            output2 = video.output("output2.webm")
            merged = output1.merge_outputs(output2)
            merged.run()  # Creates both output files with one FFmpeg command
            ```

        """
        return self._global_node(*streams).stream()

    def overwrite_output(self) -> GlobalStream:
        """
        Set the FFmpeg command to overwrite output files without asking.

        This method adds the `-y` option to the FFmpeg command, which causes
        FFmpeg to overwrite output files without prompting for confirmation.
        It's equivalent to calling `global_args(y=True)`.

        Returns:
            A GlobalStream with the overwrite option enabled

        Example:
            ```python
            # Overwrite output file if it already exists
            ffmpeg.input("input.mp4").output("output.mp4").overwrite_output().run()
            ```

        """
        return self._global_node(y=True).stream()

    def compile(
        self,
        cmd: str | list[str] = "ffmpeg",
        overwrite_output: bool | None = None,
        auto_fix: bool = True,
        use_filter_complex_script: bool = False,
    ) -> list[str]:
        """
        Build command-line arguments for invoking FFmpeg.

        This method converts the filter graph into a list of command-line
        arguments that can be passed to subprocess functions or executed
        directly. It handles the FFmpeg executable name, overwrite options,
        and automatic fixing of the filter graph.

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph,
                     such as adding split filters for reused streams
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            A list of strings representing the complete FFmpeg command

        Example:
            ```python
            # Get the command-line arguments for a filter graph
            args = ffmpeg.input("input.mp4").output("output.mp4").compile()
            # Result: ['ffmpeg', '-i', 'input.mp4', 'output.mp4']
            ```

        """
        from ...compile.compile_cli import compile_as_list

        if isinstance(cmd, str):
            cmd = [cmd]

        if overwrite_output is True:
            return self.global_args(y=True).compile(
                cmd,
                auto_fix=auto_fix,
                use_filter_complex_script=use_filter_complex_script,
            )
        elif overwrite_output is False:
            return self.global_args(n=True).compile(
                cmd,
                auto_fix=auto_fix,
                use_filter_complex_script=use_filter_complex_script,
            )

        return cmd + compile_as_list(
            self._global_node().stream(),
            auto_fix=auto_fix,
            use_filter_complex_script=use_filter_complex_script,
        )

    def compile_line(
        self,
        cmd: str | list[str] = "ffmpeg",
        overwrite_output: bool | None = None,
        auto_fix: bool = True,
        use_filter_complex_script: bool = False,
    ) -> str:
        """
        Build a command-line string for invoking FFmpeg.

        This method is similar to compile(), but returns a single string with
        proper escaping instead of a list of arguments. This is useful for
        logging or displaying the command to users.

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            A string representing the complete FFmpeg command with proper escaping

        Example:
            ```python
            # Get a command-line string for a filter graph
            cmd_str = ffmpeg.input("input.mp4").output("output.mp4").compile_line()
            # Result: 'ffmpeg -i input.mp4 output.mp4'
            ```

        """
        return command_line(
            self.compile(
                cmd,
                overwrite_output=overwrite_output,
                auto_fix=auto_fix,
                use_filter_complex_script=use_filter_complex_script,
            )
        )

    def run_async(
        self,
        cmd: str | list[str] = "ffmpeg",
        pipe_stdin: bool = False,
        pipe_stdout: bool = False,
        pipe_stderr: bool = False,
        quiet: bool = False,
        overwrite_output: bool | None = None,
        auto_fix: bool = True,
        use_filter_complex_script: bool = False,
    ) -> subprocess.Popen[bytes]:
        """
        Run FFmpeg asynchronously as a subprocess.

        This method executes the FFmpeg command in a separate process without
        waiting for it to complete. This is useful for long-running operations
        or when you need to interact with the process while it's running.

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            pipe_stdin: Whether to create a pipe for writing to the process's stdin
            pipe_stdout: Whether to create a pipe for reading from the process's stdout
            pipe_stderr: Whether to create a pipe for reading from the process's stderr
            quiet: Whether to capture stderr (implies pipe_stderr=True)
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            A subprocess.Popen object representing the running FFmpeg process

        Example:
            ```python
            # Start FFmpeg process and interact with it
            process = ffmpeg.input("input.mp4").output("output.mp4").run_async()
            # Do something while FFmpeg is running
            process.wait()  # Wait for completion
            ```

        """
        args = self.compile(
            cmd,
            overwrite_output=overwrite_output,
            auto_fix=auto_fix,
            use_filter_complex_script=use_filter_complex_script,
        )
        stdin_stream = subprocess.PIPE if pipe_stdin else None
        stdout_stream = subprocess.PIPE if pipe_stdout or quiet else None
        stderr_stream = subprocess.PIPE if pipe_stderr or quiet else None

        logger.info(f"Running command: {' '.join(args)}")

        return subprocess.Popen(
            args,
            stdin=stdin_stream,
            stdout=stdout_stream,
            stderr=stderr_stream,
        )

    async def run_async_awaitable(
        self,
        cmd: str | list[str] = "ffmpeg",
        pipe_stdin: bool = False,
        pipe_stdout: bool = False,
        pipe_stderr: bool = False,
        quiet: bool = False,
        overwrite_output: bool | None = None,
        auto_fix: bool = True,
        use_filter_complex_script: bool = False,
    ) -> asyncio.subprocess.Process:
        """
        Run FFmpeg asynchronously using asyncio.

        This method executes the FFmpeg command as an asyncio subprocess,
        returning an asyncio.subprocess.Process object that can be awaited.
        This is useful for long-running operations in async code or when you
        need to interact with the process while it's running in an async context.

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            pipe_stdin: Whether to create a pipe for writing to the process's stdin
            pipe_stdout: Whether to create a pipe for reading from the process's stdout
            pipe_stderr: Whether to create a pipe for reading from the process's stderr
            quiet: Whether to capture stderr (implies pipe_stderr=True)
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            An asyncio.subprocess.Process object representing the running FFmpeg process

        Example:
            ```python
            async def main():
                # Start FFmpeg process and interact with it
                process = (
                    await ffmpeg.input("input.mp4")
                    .output("output.mp4")
                    .run_async_awaitable()
                )
                # Do something while FFmpeg is running
                await process.wait()  # Wait for completion


            asyncio.run(main())
            ```

        """
        args = self.compile(
            cmd,
            overwrite_output=overwrite_output,
            auto_fix=auto_fix,
            use_filter_complex_script=use_filter_complex_script,
        )
        stdin_stream = asyncio.subprocess.PIPE if pipe_stdin else None
        stdout_stream = asyncio.subprocess.PIPE if pipe_stdout or quiet else None
        stderr_stream = asyncio.subprocess.PIPE if pipe_stderr or quiet else None

        logger.info(f"Running command: {' '.join(args)}")

        return await asyncio.create_subprocess_exec(
            *args,
            stdin=stdin_stream,
            stdout=stdout_stream,
            stderr=stderr_stream,
        )

    def _run_with_tee_stderr(
        self,
        cmd: str | list[str],
        capture_stdout: bool,
        input: bytes | None,
        quiet: bool,
        overwrite_output: bool | None,
        auto_fix: bool,
        use_filter_complex_script: bool,
    ) -> tuple[bytes, bytes, int]:
        """
        Run FFmpeg with tee_stderr enabled.

        This method handles the tee_stderr flow: it captures stderr to a buffer
        while simultaneously displaying it to the console (unless quiet=True).

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            capture_stdout: Whether to capture and return the process's stdout
            input: Optional bytes to write to the process's stdin
            quiet: Whether to suppress output to the console
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            A tuple of (stdout_bytes, stderr_bytes, retcode)

        """
        # Decide pipes explicitly; ignore quiet here to avoid pipe complications
        process = self.run_async(
            cmd,
            pipe_stdin=input is not None,
            pipe_stdout=capture_stdout,
            pipe_stderr=True,  # Always pipe stderr for tee
            quiet=False,  # Handle quiet semantics in tee thread instead
            overwrite_output=overwrite_output,
            auto_fix=auto_fix,
            use_filter_complex_script=use_filter_complex_script,
        )

        # Send stdin (if any)
        if input is not None and process.stdin is not None:
            try:
                process.stdin.write(input)
                process.stdin.close()
            except BrokenPipeError:
                # FFmpeg exited early; we'll handle via return code
                pass

        # stderr tee thread
        stderr_buffer: list[bytes] = []

        if process.stderr is not None:
            stderr_thread = self._start_stderr_tee_thread(
                process.stderr,
                capture_buffer=stderr_buffer,
                write_to_stderr=not quiet,
            )
        else:
            stderr_thread = None

        # Handle stdout in the main thread if captured
        stdout_chunks: list[bytes] = []

        try:
            if capture_stdout and process.stdout is not None:
                try:
                    try:
                        while True:
                            chunk = process.stdout.read(4096)
                            if not chunk:
                                break
                            stdout_chunks.append(chunk)
                    except (OSError, BrokenPipeError):
                        # Process terminated, stop reading
                        pass
                finally:
                    process.stdout.close()

            # Wait for process to finish
            retcode = process.wait()
        finally:
            # Ensure stderr thread is joined even if an exception occurs
            # Note: After process exits, the stderr pipe is closed,
            # so the thread should finish quickly after draining any remaining data
            if stderr_thread is not None:
                stderr_thread.join()

        stdout = b"".join(stdout_chunks) if capture_stdout else b""
        stderr = b"".join(stderr_buffer)

        return stdout, stderr, retcode

    def run(
        self,
        cmd: str | list[str] = "ffmpeg",
        capture_stdout: bool = False,
        capture_stderr: bool = False,
        input: bytes | None = None,
        quiet: bool = False,
        tee_stderr: bool = False,
        overwrite_output: bool | None = None,
        auto_fix: bool = True,
        use_filter_complex_script: bool = False,
    ) -> tuple[bytes, bytes]:
        """
        Run FFmpeg synchronously and wait for completion.

        This method executes the FFmpeg command in a separate process and waits
        for it to complete before returning. It's the most common way to run
        FFmpeg commands when you just want to process media files.

        Args:
            cmd: The FFmpeg executable name or path, or a list containing
                 the executable and initial arguments
            capture_stdout: Whether to capture and return the process's stdout
            capture_stderr: Whether to capture and return the process's stderr.
                           Note: This parameter is ignored when tee_stderr=True,
                           as tee_stderr always captures stderr.
            input: Optional bytes to write to the process's stdin
            quiet: Whether to suppress output to the console
            tee_stderr: Whether to capture stderr and also display it to the console.
                        When enabled, stderr will be captured and simultaneously
                        displayed to the console (unless quiet=True).
                        When tee_stderr=True, the capture_stderr parameter is
                        ignored and stderr is always captured.
            overwrite_output: If True, add the -y option to overwrite output files
                             If False, add the -n option to never overwrite
                             If None (default), use the current settings
            auto_fix: Whether to automatically fix issues in the filter graph
            use_filter_complex_script: If True, use -filter_complex_script with a
                                      temporary file instead of -filter_complex

        Returns:
            A tuple of (stdout_bytes, stderr_bytes), which will be empty bytes
            objects if the respective capture_* parameter is False

        Raises:
            FFMpegExecuteError: If the FFmpeg process returns a non-zero exit code

        Example:
            ```python
            # Process a video file
            stdout, stderr = ffmpeg.input("input.mp4").output("output.mp4").run()

            # Capture FFmpeg's output
            stdout, stderr = (
                ffmpeg.input("input.mp4").output("output.mp4").run(capture_stderr=True)
            )
            print(stderr.decode())  # Print FFmpeg's progress information

            # Capture and display stderr at the same time
            stdout, stderr = (
                ffmpeg.input("input.mp4").output("output.mp4").run(tee_stderr=True)
            )
            # stderr is both displayed in console and captured for later use
            ```

        """
        if tee_stderr:
            stdout, stderr, retcode = self._run_with_tee_stderr(
                cmd,
                capture_stdout,
                input,
                quiet,
                overwrite_output,
                auto_fix,
                use_filter_complex_script,
            )
        else:
            # Original behavior
            process = self.run_async(
                cmd,
                pipe_stdin=input is not None,
                pipe_stdout=capture_stdout,
                pipe_stderr=capture_stderr,
                quiet=quiet,
                overwrite_output=overwrite_output,
                auto_fix=auto_fix,
                use_filter_complex_script=use_filter_complex_script,
            )
            stdout, stderr = process.communicate(input)
            retcode = process.returncode

        if retcode:
            raise FFMpegExecuteError(
                retcode=retcode,
                cmd=self.compile_line(
                    cmd,
                    overwrite_output=overwrite_output,
                    auto_fix=auto_fix,
                    use_filter_complex_script=use_filter_complex_script,
                ),
                stdout=stdout or b"",
                stderr=stderr or b"",
            )

        return stdout or b"", stderr or b""
