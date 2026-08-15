"""
Network helpers for codegen.

Codegen fetches the FFmpeg filter docs and release archives at generation
time, so a transient reset fails the whole run — and because the create-PR
step needs every matrix leg, one flaky version blocks the pipeline. Observed
on main: `ConnectionResetError: [Errno 104] Connection reset by peer` in
generate (8) while v5/v6/v7 succeeded.
"""

from __future__ import annotations

import time
import urllib.error
from collections.abc import Callable
from typing import TypeVar

T = TypeVar("T")


def _is_retryable(exc: BaseException) -> bool:
    """
    Decide whether an exception is worth retrying.

    Args:
        exc: The exception raised by the operation.

    Returns:
        True if retrying could plausibly succeed.

    """
    if isinstance(exc, urllib.error.HTTPError):
        # 4xx is a bad request; it will fail identically next time.
        return exc.code >= 500
    # URLError, ConnectionResetError and TimeoutError are all OSError.
    return isinstance(exc, OSError)


def with_retry(
    operation: Callable[[], T],
    *,
    attempts: int = 4,
    base_delay: float = 1.0,
    sleep: Callable[[float], None] = time.sleep,
) -> T:
    """
    Run an operation, retrying transient network failures with backoff.

    Args:
        operation: Zero-argument callable performing the request.
        attempts: Total tries, including the first.
        base_delay: Seconds before the first retry; doubles each time.
        sleep: Injected for tests.

    Returns:
        Whatever the operation returns.

    Raises:
        Exception: The final failure, once attempts are exhausted or the
            error is not retryable.

    """
    # The last attempt is deliberately outside the loop so its exception
    # propagates naturally — no unreachable fall-through to appease a checker.
    for attempt in range(1, attempts):
        try:
            return operation()
        except Exception as exc:
            if not _is_retryable(exc):
                raise
            sleep(base_delay * 2 ** (attempt - 1))
    return operation()
