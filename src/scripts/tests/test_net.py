"""Tests for the codegen network retry helper."""

import urllib.error

import pytest

from scripts.net import with_retry


def test_retries_transient_error_then_succeeds() -> None:
    """A connection reset should be retried, not fatal."""
    attempts = 0

    def flaky() -> str:
        nonlocal attempts
        attempts += 1
        if attempts < 3:
            raise ConnectionResetError(104, "Connection reset by peer")
        return "downloaded"

    slept: list[float] = []
    result = with_retry(flaky, sleep=slept.append)

    assert result == "downloaded"
    assert attempts == 3
    assert len(slept) == 2


def test_raises_after_exhausting_attempts() -> None:
    """Give up eventually rather than looping forever."""
    attempts = 0

    def always_fails() -> str:
        nonlocal attempts
        attempts += 1
        raise ConnectionResetError(104, "Connection reset by peer")

    with pytest.raises(ConnectionResetError):
        with_retry(always_fails, attempts=3, sleep=lambda _: None)

    assert attempts == 3


def test_does_not_retry_client_errors() -> None:
    """A 404 will not fix itself, so retrying only wastes a CI minute."""
    attempts = 0

    def not_found() -> str:
        nonlocal attempts
        attempts += 1
        raise urllib.error.HTTPError("http://x", 404, "Not Found", {}, None)  # type: ignore[arg-type]

    with pytest.raises(urllib.error.HTTPError):
        with_retry(not_found, sleep=lambda _: None)

    assert attempts == 1


def test_retries_server_errors() -> None:
    """A 503 is transient, so it should be retried."""
    attempts = 0

    def flaky_server() -> str:
        nonlocal attempts
        attempts += 1
        if attempts < 2:
            raise urllib.error.HTTPError("http://x", 503, "Unavailable", {}, None)  # type: ignore[arg-type]
        return "ok"

    assert with_retry(flaky_server, sleep=lambda _: None) == "ok"
    assert attempts == 2


def test_backoff_grows_between_attempts() -> None:
    """Successive waits should increase, so a slow blip is not hammered."""

    def always_fails() -> str:
        raise ConnectionResetError(104, "Connection reset by peer")

    slept: list[float] = []
    with pytest.raises(ConnectionResetError):
        with_retry(always_fails, attempts=4, base_delay=1.0, sleep=slept.append)

    assert slept == sorted(slept)
    assert slept[0] < slept[-1]
