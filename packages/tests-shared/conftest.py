"""Conftest for shared tests across typed-ffmpeg v5-v9.

Most snapshots are identical across versions, so a single __snapshots__ dir is used.
Version-sensitive tests (e.g., CLI parsing that depends on options.json data) use
per-version snapshot directories: __snapshots_v5__/, __snapshots_v6__/, etc.
"""
