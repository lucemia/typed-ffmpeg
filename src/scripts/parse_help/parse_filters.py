"""Parse FFmpeg filter information from help output."""

import re
from dataclasses import replace
from typing import Any, Literal, cast

from .schema import FFMpegFilter, FFMpegIOType
from .utils import glob, parse_av_option, parse_section_tree, run_ffmpeg_command


def _parse_list(text: str) -> list[FFMpegFilter]:
    """
    Parse the help text for filters.

    Args:
        text: The help text to parse from ffmpeg command output

    Returns:
        A list of format instances

    Example:
        ```
        Filters:
        T.. = Timeline support
        .S. = Slice threading
        ..C = Command support
        A = Audio input/output
        V = Video input/output
        N = Dynamic number and/or type of input/output
        | = Source or sink filter
        ... abench            A->A       Benchmark part of a filtergraph.
        ..C acompressor       A->A       Audio compressor.
        ... acontrast         A->A       Simple audio dynamic range compression/expansion filter.
        ... acopy             A->A       Copy the input audio unchanged to the output.
        ... acue              A->A       Delay filtering to match a cue.
        ... acrossfade        AA->A      Cross fade two input audio streams.
        .S. acrossover        A->N       Split audio into per-bands streams.
        ```

    """
    output: list[FFMpegFilter] = []
    lines = text.splitlines()
    re_pattern = re.compile(
        r"^\s*(?P<flag>[\w\.]{2,3})\s+(?P<name>\w+)\s+(?P<io_flags>[\w\|]+\-\>[\w\|]+)\s+(?P<help>.*)$"
    )

    for line in lines:
        match = re_pattern.match(line)
        if match:
            flags, name, io_flags, description = match.groups()
            output.append(
                FFMpegFilter(
                    name=name, flags=flags, io_flags=io_flags, help=description
                )
            )
    return output


def _extract_list(ffmpeg_binary: str = "ffmpeg") -> list[FFMpegFilter]:
    """
    Get the help text for all filters.

    Args:
        ffmpeg_binary: Path or name of the ffmpeg executable.

    Returns:
        A list of filters

    """
    return _parse_list(run_ffmpeg_command(["-filters"], ffmpeg_binary=ffmpeg_binary))


def _parse_filter_io(tree: dict[str, Any]) -> list[FFMpegIOType]:
    """
    Parse the help text for a filter's inputs and outputs.

    Args:
        tree: The parsed section tree

    Returns:
        List of input/output types.

    """
    output = []
    for key, value in tree.items():
        if key.startswith("#"):
            match = re.match(
                r"#(?P<index>\d+)\:\s*(?P<name>\w+)\s*\((?P<type>\w+)\)", key
            )
            assert match
            _index, name, type = match.groups()
            assert type in ("audio", "video")
            output.append(
                FFMpegIOType(name=name, type=cast(Literal["audio", "video"], type))
            )
    return output


def _parse_filter(text: str) -> FFMpegFilter:
    """
    Parse the help text for a filter.

    Args:
        text: The help text to parse

    Returns:
        The parsed filter information.

    Raises:
        ValueError: If the filter is unknown.

    """
    if "Unknown filter" in text:
        raise ValueError(f"Unknown filter: {filter}")

    tree = parse_section_tree(text)

    is_framesync = False
    if glob(tree, r"framesync AVOptions"):
        is_framesync = True

    is_slice_threading = False
    if glob(tree, r"slice threading supported"):
        is_slice_threading = True

    is_timeline = False
    if glob(tree, r"This filter has support for timeline"):
        is_timeline = True

    section, subtree = glob(tree, r"^Filter")[0]
    name = section.split(" ")[1]
    help = list(subtree.keys())[0]

    options = []
    if glob(tree, r".*AVOptions"):
        section, subtree = glob(tree, r".*AVOptions")[0]
        options = parse_av_option(section, tree)

    # The dynamic marker and a concrete pad list are not mutually exclusive.
    # `scale` reports both, with the marker indented under the pad:
    #
    #     Inputs:
    #        #0: default (video)
    #         dynamic (depending on the options)
    #
    # glob() searches the whole subtree, so an `else` here dropped scale's only
    # input and left it claiming zero -- `parse()` then raised
    # "Expected 0 inputs, got 1" and the filter leaked into sources.py as a
    # bogus source. Record the marker and parse the pads independently.
    section, subtree = glob(tree, "Inputs:")[0]
    is_input_dynamic = bool(glob(subtree, r"dynamic \(depending on the options\)"))
    input_types = _parse_filter_io(subtree)

    section, subtree = glob(tree, "Outputs:")[0]
    is_output_dynamic = bool(glob(subtree, r"dynamic \(depending on the options\)"))
    output_types = _parse_filter_io(subtree)

    return FFMpegFilter(
        name=name,
        help=help,
        flags="",
        io_flags="",
        options=tuple(options),
        stream_typings_input=tuple(input_types),
        stream_typings_output=tuple(output_types),
        is_framesync=is_framesync,
        is_slice_threading=is_slice_threading,
        is_timeline=is_timeline,
        is_dynamic_input=is_input_dynamic,
        is_dynamic_output=is_output_dynamic,
    )


def _extract_filter(filter: str, ffmpeg_binary: str = "ffmpeg") -> FFMpegFilter:
    """
    Get the help text for a filter.

    Args:
        filter: The filter name
        ffmpeg_binary: Path or name of the ffmpeg executable.

    Returns:
        The filter information.

    """
    return _parse_filter(
        run_ffmpeg_command(["-h", f"filter={filter}"], ffmpeg_binary=ffmpeg_binary)
    )


def extract(ffmpeg_binary: str = "ffmpeg") -> list[FFMpegFilter]:
    """
    Get the help text for all filters.

    Args:
        ffmpeg_binary: Path or name of the ffmpeg executable.

    Returns:
        List of all filter information.

    """
    output: list[FFMpegFilter] = []
    for filter in _extract_list(ffmpeg_binary=ffmpeg_binary):
        _filter = _extract_filter(filter.name, ffmpeg_binary=ffmpeg_binary)
        _filter = replace(_filter, flags=filter.flags, io_flags=filter.io_flags)
        output.append(_filter)
    return output
