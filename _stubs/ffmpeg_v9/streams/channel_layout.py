"""
Audio channel layout definitions for FFmpeg.

This module defines a mapping between FFmpeg's channel layout names and
the corresponding number of audio channels. This information is used for
audio stream processing, filtering, and conversion operations.

Channel layouts in FFmpeg represent different speaker configurations,
such as mono (1 channel), stereo (2 channels), 5.1 (6 channels), etc.
The names used in this dictionary match the standard names used by FFmpeg's
channel layout API.
"""

CHANNEL_LAYOUT = {
    "mono": 1,
    "stereo": 2,
    "2.1": 3,
    "3.0": 3,
    "3.0(back)": 3,
    "4.0": 4,
    "quad": 4,
    "quad(side)": 4,
    "3.1": 4,
    "5.0": 5,
    "5.0(side)": 5,
    "4.1": 5,
    "5.1": 6,
    "5.1(side)": 6,
    "6.0": 6,
    "6.0(front)": 6,
    "3.1.2": 6,
    "hexagonal": 6,
    "6.1": 7,
    "6.1(back)": 7,
    "6.1(front)": 7,
    "7.0": 7,
    "7.0(front)": 7,
    "7.1": 8,
    "7.1(wide)": 8,
    "7.1(wide-side)": 8,
    "5.1.2": 8,
    "octagonal": 8,
    "cube": 8,
    "5.1.4": 10,
    "7.1.2": 10,
    "7.1.4": 12,
    "7.2.3": 12,
    "9.1.4": 14,
    "hexadecagonal": 16,
    "downmix": 2,
    "22.2": 24,
}
