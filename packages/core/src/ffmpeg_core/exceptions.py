"""
Exception classes for handling FFmpeg-related errors.

This module defines a hierarchy of exceptions that can be raised during
FFmpeg operations, providing detailed error reporting for type errors,
value errors, and execution failures.
"""


class FFMpegError(Exception):
    """
    Base exception for all FFmpeg errors.

    This is the parent class for all exceptions that may be raised by the
    typed-ffmpeg library. It inherits from the standard Python Exception class.
    """


class FFMpegTypeError(FFMpegError, TypeError):
    """
    Exception raised for FFmpeg-related type errors.

    This exception is raised when an operation receives an argument of incorrect
    type, such as passing a string when a numeric value is expected, or vice versa.

    Inherits from both FFMpegError and the standard Python TypeError.
    """


class FFMpegValueError(FFMpegError, ValueError):
    """
    Exception raised for FFmpeg-related value errors.

    This exception is raised when an operation receives an argument with the correct
    type but an inappropriate value, such as a negative duration or invalid codec name.

    Inherits from both FFMpegError and the standard Python ValueError.
    """


class FFMpegExecuteError(FFMpegError):
    """
    Exception raised when an FFmpeg command fails during execution.

    This exception is raised when an FFmpeg process returns a non-zero exit code,
    indicating that the command failed to execute properly. The exception captures
    the return code, command string, and stdout/stderr output to help diagnose
    the issue.

    Attributes:
        stdout: The standard output of the failed command
        stderr: The standard error output of the failed command
        cmd: The command string that was executed
        retcode: The process return code

    """

    def __init__(self, retcode: int | None, cmd: str, stdout: bytes, stderr: bytes):
        """
        Initialize the FFMpegExecuteError with execution details.

        Args:
            retcode: The return code of the FFmpeg command
            cmd: The FFmpeg command string that was executed
            stdout: The captured standard output from the process
            stderr: The captured standard error from the process

        """
        self.stdout = stdout
        self.stderr = stderr
        self.cmd = cmd
        self.retcode = retcode

        super().__init__(
            f"{cmd} error "
            f"(see stderr output with capture_stderr=True or tee_stderr=True for detail) "
            f"{stderr!r}"
        )
