"""
Compiles FFmpeg filter graphs into command-line arguments.

This module provides functionality to convert the internal DAG (Directed Acyclic Graph)
representation of an FFmpeg filter chain into the actual command-line arguments
that would be passed to FFmpeg. It handles the following components:

1. Global Options: General FFmpeg settings like log level, overwrite flags
2. Input Files: Source media files with their specific options
3. Filter Graphs: Complex filter chains with proper stream labeling
4. Output Files: Destination files with codec and format settings

The module ensures proper ordering of arguments and handles stream mapping,
filter graph syntax, and escaping of special characters in FFmpeg commands.
"""

from __future__ import annotations

import logging
import re
import shlex
import tempfile
from collections import defaultdict
from collections.abc import Mapping
from dataclasses import replace

from ffmpeg_core.common.cache import load
from ffmpeg_core.common.schema import (
    FFMpegAVOption,
    FFMpegFilter,
    FFMpegFilterDef,
    FFMpegOption,
    StreamType,
)

from ..base import input, merge_outputs, output
from ..dag.factory import filter_node_factory
from ..dag.nodes import (
    FilterableStream,
    FilterNode,
    GlobalNode,
    InputNode,
    OutputNode,
    OutputStream,
)
from ..dag.schema import Node, Stream
from ..exceptions import FFMpegValueError
from ..schema import Default
from ..streams.audio import AudioStream
from ..streams.av import AVStream
from ..streams.subtitle import SubtitleStream
from ..streams.video import VideoStream
from ..utils.escaping import escape
from ..utils.lazy_eval.schema import LazyValue
from ..utils.run import command_line
from .context import DAGContext
from .validate import validate

logger = logging.getLogger(__name__)


def get_options_dict() -> dict[str, FFMpegOption]:
    """
    Load and index FFmpeg options from the cache.

    Returns:
        Dictionary mapping option names to their FFMpegOption definitions

    """
    options = load(list[FFMpegOption], "options")
    return {option.name: option for option in options}


def get_av_options_dict() -> dict[str, FFMpegAVOption]:
    """
    Load and index FFmpeg AV options (codec/format-level) from the cache.

    Returns:
        Dictionary mapping option names to their FFMpegAVOption definitions.
        When duplicate names exist across sections, the first occurrence is kept.

    """
    av_options = load(list[FFMpegAVOption], "av_option_sets")
    result: dict[str, FFMpegAVOption] = {}
    for opt in av_options:
        if opt.name not in result:
            result[opt.name] = opt
    return result


def get_filter_dict() -> dict[str, FFMpegFilter]:
    """
    Load and index FFmpeg filters from the cache.

    Returns:
        Dictionary mapping filter names to their FFMpegFilter definitions

    """
    filters = load(list[FFMpegFilter], "filters")
    return {filter.name: filter for filter in filters}


def parse_options(tokens: list[str]) -> dict[str, list[str | None | bool]]:
    """
    Parse FFmpeg command-line options into a structured dictionary.

    This function processes a list of command-line tokens and converts them into
    a dictionary where keys are option names (without the leading '-') and values
    are lists of their corresponding values. Boolean options are handled specially:
    - '-option' becomes {'option': [None]}
    - '-nooption' becomes {'option': [False]}

    Args:
        tokens: List of command-line tokens to parse

    Returns:
        Dictionary mapping option names to lists of their values

    """
    parsed_options: dict[str, list[str | None | bool]] = defaultdict(list)

    while tokens:
        if not tokens[0].startswith("-"):
            raise FFMpegValueError(f"Expected option, got {tokens[0]!r}")
        if len(tokens) == 1 or tokens[1][0] == "-":
            if tokens[0].startswith("-no"):
                # Handle boolean options with -no prefix
                option_name = tokens[0][3:]
                parsed_options[option_name] = [False]
            else:
                # Handle boolean options without value
                option_name = tokens[0][1:]
                parsed_options[option_name] = [None]
            tokens = tokens[1:]
        else:
            # Handle options with values
            option_name = tokens[0][1:]
            option_value = tokens[1]
            parsed_options[option_name].append(option_value)
            tokens = tokens[2:]

    return parsed_options


def parse_stream_selector(
    selector: str, mapping: Mapping[str, FilterableStream]
) -> FilterableStream:
    """
    Parse a stream selector string and return the corresponding stream.

    This function handles FFmpeg's stream selector syntax:
    - Simple selectors: "[0]" (first input)
    - Type selectors: "[0:v]" (first input, video stream)
    - Index selectors: "[0:v:0]" (first input, first video stream)

    Args:
        selector: Stream selector string to parse
        mapping: Dictionary of available streams

    Returns:
        The selected FilterableStream

    Raises:
        AssertionError: If the stream label is not found in the mapping
        FFMpegValueError: If the stream type is unknown

    """
    selector = selector.strip("[]")

    if ":" in selector:
        stream_label, _ = selector.split(":", 1)
    else:
        stream_label = selector

    if stream_label not in mapping:
        raise FFMpegValueError(f"Unknown stream label: {stream_label}")
    stream = mapping[stream_label]

    if isinstance(stream, AVStream):
        if "?" in selector:
            optional = True
            selector = selector.strip("?")
        else:
            optional = False

        if ":" in selector:
            if selector.count(":") == 1:
                stream_label, stream_type = selector.split(":", 1)
                stream_index = None
            elif selector.count(":") == 2:
                stream_label, stream_type, _stream_index = selector.split(":", 2)
                stream_index = int(_stream_index)

            match stream_type:
                case "v":
                    return stream.video_stream(stream_index, optional)
                case "a":
                    return stream.audio_stream(stream_index, optional)
                case "s":
                    return stream.subtitle_stream(stream_index, optional)
                case _:
                    raise FFMpegValueError(f"Unknown stream type: {stream_type}")
        return replace(stream, optional=optional)
    return stream


def _is_filename(token: str) -> bool:
    """
    Check if a token represents a filename or URL (not an option flag).

    Args:
        token: The token to check

    Returns:
        True if the token looks like a file path, URL, or special device

    """
    if token.startswith("-"):
        return False
    # Protocol URLs (rtmp://, http://, pipe:, etc.)
    if re.match(r"^\w+://", token):
        return True
    # FFmpeg pipe protocol
    if re.match(r"^pipe:\d*$", token):
        return True
    # Standard special files and stdout shorthand
    if token in ("/dev/null", "/dev/stdin", "/dev/stdout", "/dev/stderr", "-"):
        return True
    # Files with an extension (original heuristic)
    return "." in token


def parse_output(
    source: list[str],
    in_streams: Mapping[str, FilterableStream],
    ffmpeg_options: dict[str, FFMpegOption],
    av_options: dict[str, FFMpegAVOption] | None = None,
) -> list[OutputStream]:
    """
    Parse output file specifications and their options.

    This function processes the output portion of an FFmpeg command line,
    handling output file paths, stream mapping, and output-specific options.

    Args:
        source: List of command-line tokens for output specifications
        in_streams: Dictionary of available input streams
        ffmpeg_options: Dictionary of valid FFmpeg options

    Returns:
        List of OutputStream objects representing the output specifications

    """
    tokens = source.copy()

    export: list[OutputStream] = []
    buffer: list[str] = []

    while tokens:
        token = tokens.pop(0)

        if not _is_filename(token):
            buffer.append(token)
            continue

        filename = token
        options = parse_options(buffer)

        map_options = options.pop("map", [])
        inputs: list[FilterableStream] = []
        for map_option in map_options:
            assert isinstance(map_option, str), f"Expected map option, got {map_option}"
            stream = parse_stream_selector(map_option, in_streams)
            inputs.append(stream)

        if not inputs:
            # NOTE: if there is no inputs, and there is only one input node
            if len([k for k in in_streams if isinstance(in_streams[k], AVStream)]) == 1:
                inputs = [
                    in_streams[k]
                    for k in in_streams
                    if isinstance(in_streams[k], AVStream)
                ]

        parameters: dict[str, str | bool] = {}

        for key, value in options.items():
            key_base = key.split(":")[0]
            if key_base in ffmpeg_options:
                option = ffmpeg_options[key_base]

                if option.is_output_option:
                    # just ignore not input options
                    if value[-1] is None:
                        parameters[key] = True
                    else:
                        parameters[key] = value[-1]
            elif av_options and key_base in av_options:
                av_opt = av_options[key_base]
                if av_opt.is_output_option:
                    if value[-1] is None:
                        parameters[key] = True
                    else:
                        parameters[key] = value[-1]

        export.append(output(*inputs, filename=filename, extra_options=parameters))
        buffer = []

    return export


def parse_input(
    tokens: list[str],
    ffmpeg_options: dict[str, FFMpegOption],
    av_options: dict[str, FFMpegAVOption] | None = None,
) -> dict[str, FilterableStream]:
    """
    Parse input file specifications and their options.

    This function processes the input portion of an FFmpeg command line,
    handling input file paths and input-specific options.

    Args:
        tokens: List of command-line tokens for input specifications
        ffmpeg_options: Dictionary of valid FFmpeg options

    Returns:
        Dictionary mapping input indices to their FilterableStream objects

    """
    output: list[AVStream] = []

    while "-i" in tokens:
        index = tokens.index("-i")
        filename = tokens[index + 1]
        assert filename[0] != "-", f"Expected filename, got {filename}"

        input_options_args = tokens[:index]

        options = parse_options(input_options_args)
        parameters: dict[str, str | bool] = {}

        for key, value in options.items():
            if key in ffmpeg_options:
                option = ffmpeg_options[key]

                if option.is_input_option:
                    # just ignore not input options
                    if value[-1] is None:
                        parameters[key] = True
                    else:
                        parameters[key] = value[-1]
            elif av_options and key in av_options:
                av_opt = av_options[key]
                if av_opt.is_input_option:
                    if value[-1] is None:
                        parameters[key] = True
                    else:
                        parameters[key] = value[-1]

        output.append(input(filename=filename, extra_options=parameters))

        tokens = tokens[index + 2 :]

    return {str(idx): stream for idx, stream in enumerate(output)}


_UNESCAPED_EQ = re.compile(r"(?<!\\)=")
_SEP_PATTERNS: dict[str, re.Pattern[str]] = {}


def _split_unescaped(text: str, sep: str) -> list[str]:
    """Split text on unescaped separator character."""
    pattern = _SEP_PATTERNS.get(sep)
    if pattern is None:
        pattern = re.compile(r"(?<!\\)" + re.escape(sep))
        _SEP_PATTERNS[sep] = pattern
    return pattern.split(text)


def _parse_filter_params(
    param_str: str,
    filter_options: list,
) -> dict[str, str]:
    """
    Parse filter params string into a dict.

    Supports both named params (key=value) and positional params
    (value mapped by index to option names).

    Args:
        param_str: The parameter string (e.g. "1280:720" or "w=1280:h=720")
        filter_options: List of filter options in order (for positional mapping)

    Returns:
        Dictionary of parameter names to their string values

    """
    if not param_str:
        return {}

    result: dict[str, str] = {}
    parts = _split_unescaped(param_str, ":")
    positional_idx = 0

    for part in parts:
        part = part.strip()
        if not part:
            continue
        if _UNESCAPED_EQ.search(part):
            key, value = _UNESCAPED_EQ.split(part, 1)
            result[key.strip()] = value.strip()
        else:
            # Positional parameter — map to option name by index
            if positional_idx < len(filter_options):
                option_name = filter_options[positional_idx].name
                result[option_name] = part
            positional_idx += 1

    return result


def parse_filter_complex(
    filter_complex: str,
    stream_mapping: dict[str, FilterableStream],
    ffmpeg_filters: dict[str, FFMpegFilter],
) -> dict[str, FilterableStream]:
    """
    Parse an FFmpeg filter_complex string into a stream mapping.

    This function processes a filter_complex string and converts it into a
    mapping of stream labels to their corresponding FilterableStream objects.

    Handles:
    - Input stream references (e.g. [0:v])
    - Filter definitions with named params (key=value)
    - Filter definitions with positional params (e.g. scale=1280:720)
    - Filter chaining with comma (e.g. scale=1280:720,fps=30)
    - Output stream labels (e.g. [v0])
    - Unknown filters (fallback with inferred typings)

    Args:
        filter_complex: The filter_complex string to parse
        stream_mapping: Existing mapping of stream labels to streams
        ffmpeg_filters: Dictionary of available FFmpeg filters

    Returns:
        Updated stream mapping with new filter outputs added

    Raises:
        FFMpegValueError: If the stream type is unknown or filter unit is invalid

    """
    filter_chains = _split_unescaped(filter_complex, ";")
    chain_counter = 0

    for filter_chain in filter_chains:
        filter_chain = filter_chain.strip()
        if not filter_chain:
            continue

        # Extract leading [label] groups (input labels for this chain)
        leading_match = re.match(r"^(?P<inputs>(\[[^\[\]]+\])*)", filter_chain)
        chain_input_labels = re.findall(
            r"\[([^\[\]]+)\]", leading_match.group("inputs") or ""
        )
        rest = filter_chain[len(leading_match.group(0)):]

        # Extract trailing [label] groups (output labels for this chain)
        trailing_match = re.search(r"(?P<outputs>(\[[^\[\]]+\])*)$", rest)
        chain_output_labels = re.findall(
            r"\[([^\[\]]+)\]", trailing_match.group("outputs") or ""
        )
        filters_str = rest[: len(rest) - len(trailing_match.group(0))].strip()

        # Split filter chain by unescaped comma (sequential filter chaining)
        filter_parts = _split_unescaped(filters_str, ",")

        current_input_labels = chain_input_labels

        for i, filter_part in enumerate(filter_parts):
            filter_part = filter_part.strip()
            if not filter_part:
                continue

            is_last = i == len(filter_parts) - 1

            if is_last:
                current_output_labels = chain_output_labels
            else:
                implicit_label = f"_chain_{chain_counter}"
                chain_counter += 1
                current_output_labels = [implicit_label]

            # Split filter_part into name and params on first unescaped '='
            if _UNESCAPED_EQ.search(filter_part):
                filter_name, param_str = _UNESCAPED_EQ.split(filter_part, 1)
                filter_name = filter_name.strip()
                param_str = param_str.strip()
            else:
                filter_name = filter_part.strip()
                param_str = ""

            if not filter_name:
                raise FFMpegValueError(f"Empty filter name in unit: {filter_part!r}")

            # Look up filter definition (with graceful fallback for unknown filters)
            ffmpeg_filter = ffmpeg_filters.get(filter_name)

            if ffmpeg_filter is not None:
                filter_def = FFMpegFilterDef(
                    name=ffmpeg_filter.name,
                    typings_input=ffmpeg_filter.formula_typings_input
                    or tuple(k.type.value for k in ffmpeg_filter.stream_typings_input),
                    typings_output=ffmpeg_filter.formula_typings_output
                    or tuple(k.type.value for k in ffmpeg_filter.stream_typings_output),
                )
                filter_options = list(ffmpeg_filter.options)
            else:
                # Fallback: infer typings from the input streams in the mapping
                logger.warning(
                    "Unknown filter %r — using fallback typings", filter_name
                )
                input_types: list[str] = []
                for label in current_input_labels:
                    stream = stream_mapping.get(label)
                    if isinstance(stream, AudioStream):
                        input_types.append("audio")
                    else:
                        input_types.append("video")
                output_types = input_types[:1] if input_types else ["video"]
                filter_def = FFMpegFilterDef(
                    name=filter_name,
                    typings_input=tuple(input_types),
                    typings_output=tuple(output_types),
                )
                filter_options = []

            filter_params = _parse_filter_params(param_str, filter_options)

            input_streams = [
                parse_stream_selector(label, stream_mapping)
                for label in current_input_labels
            ]

            default_kwargs: dict[str, object] = {}
            if ffmpeg_filter:
                default_kwargs = {
                    k.name: Default(k.default) for k in ffmpeg_filter.options
                }
            default_kwargs.update(filter_params)

            filter_node = filter_node_factory(filter_def, *input_streams, **default_kwargs)

            for idx, (output_label, output_typing) in enumerate(
                zip(current_output_labels, filter_node.output_typings)
            ):
                match output_typing:
                    case StreamType.video:
                        stream_mapping[output_label] = VideoStream(
                            node=filter_node, index=idx
                        )
                    case StreamType.audio:
                        stream_mapping[output_label] = AudioStream(
                            node=filter_node, index=idx
                        )
                    case _:
                        raise FFMpegValueError(
                            f"Unknown stream type: {output_typing}"
                        )

            current_input_labels = current_output_labels

    return stream_mapping


def parse_global(
    tokens: list[str], ffmpeg_options: dict[str, FFMpegOption]
) -> tuple[dict[str, str | bool], list[str]]:
    """
    Parse global FFmpeg options from command-line tokens.

    This function processes the global options that appear before any input files
    in the FFmpeg command line. These options affect the entire FFmpeg process,
    such as log level, overwrite flags, etc.

    Args:
        tokens: List of command-line tokens to parse
        ffmpeg_options: Dictionary of valid FFmpeg options

    Returns:
        A tuple containing:
        - Dictionary of parsed global options and their values
        - Remaining tokens after global options are consumed

    Example:
        For tokens like ['-y', '-loglevel', 'quiet', '-i', 'input.mp4']:
        Returns ({'y': True, 'loglevel': 'quiet'}, ['-i', 'input.mp4'])

    """
    options = parse_options(tokens[: tokens.index("-i")])
    remaining_tokens = tokens[tokens.index("-i") :]
    parameters: dict[str, str | bool] = {}

    for key, value in options.items():
        if key in ffmpeg_options:
            option = ffmpeg_options[key]

            if option.is_global_option:
                # Process only recognized global options
                if value[-1] is None:
                    parameters[key] = True
                else:
                    parameters[key] = value[-1]
    return parameters, remaining_tokens


def parse(cli: str) -> Stream:
    """
    Parse a complete FFmpeg command line into a Stream object.

    This function takes a full FFmpeg command line string and converts it into
    a Stream object representing the filter graph. It handles all components:
    - Global options
    - Input files and their options
    - Filter complex
    - Simple video/audio filter chains (-vf / -af)
    - Output files and their options

    Args:
        cli: Complete FFmpeg command line string

    Returns:
        Stream object representing the parsed command line

    Example:
        ```python
        stream = parse(
            "ffmpeg -i input.mp4 -filter_complex '[0:v]scale=1280:720[v]' -map '[v]' output.mp4"
        )
        stream = parse("ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4")
        ```

    """
    # ffmpeg [global_options] {[input_file_options] -i input_url} ... {[output_file_options] output_url} ...
    ffmpeg_options = get_options_dict()
    ffmpeg_filters = get_filter_dict()
    av_options = get_av_options_dict()

    tokens = shlex.split(cli)
    assert tokens[0].lower().split(".")[0] == "ffmpeg"
    tokens = tokens[1:]

    # Parse global options first
    global_params, remaining_tokens = parse_global(tokens, ffmpeg_options)

    index = len(remaining_tokens) - 1 - remaining_tokens[::-1].index("-i")
    input_streams = parse_input(remaining_tokens[: index + 2], ffmpeg_options, av_options)
    remaining_tokens = remaining_tokens[index + 2 :]

    filter_complex_parts: list[str] = []
    extra_map_tokens: list[str] = []

    # Handle -vf (simple video filter chain)
    while "-vf" in remaining_tokens:
        idx = remaining_tokens.index("-vf")
        vf_value = remaining_tokens[idx + 1]
        label = f"_vf_out_{len(filter_complex_parts)}"
        filter_complex_parts.append(f"[0:v]{vf_value}[{label}]")
        extra_map_tokens += ["-map", f"[{label}]"]
        remaining_tokens = remaining_tokens[:idx] + remaining_tokens[idx + 2 :]

    # Handle -af (simple audio filter chain)
    while "-af" in remaining_tokens:
        idx = remaining_tokens.index("-af")
        af_value = remaining_tokens[idx + 1]
        label = f"_af_out_{len(filter_complex_parts)}"
        filter_complex_parts.append(f"[0:a]{af_value}[{label}]")
        extra_map_tokens += ["-map", f"[{label}]"]
        remaining_tokens = remaining_tokens[:idx] + remaining_tokens[idx + 2 :]

    # Handle -filter_complex
    if "-filter_complex" in remaining_tokens:
        index = remaining_tokens.index("-filter_complex")
        filter_complex_parts.append(remaining_tokens[index + 1])
        remaining_tokens = remaining_tokens[index + 2 :]

    filterable_streams: dict[str, FilterableStream] = {}
    if filter_complex_parts:
        combined = ";".join(filter_complex_parts)
        filterable_streams = parse_filter_complex(combined, input_streams, ffmpeg_filters)

    # Inject implicit -map tokens (from -vf/-af) before the first output filename
    if extra_map_tokens:
        new_remaining: list[str] = []
        for token in remaining_tokens:
            if _is_filename(token) and "-map" not in new_remaining:
                new_remaining += extra_map_tokens
                extra_map_tokens = []
            new_remaining.append(token)
        remaining_tokens = new_remaining

    output_streams = parse_output(
        remaining_tokens,
        input_streams | filterable_streams,
        ffmpeg_options,
        av_options,
    )

    # Create a stream with global options
    result = merge_outputs(*output_streams)
    if global_params:
        result = result.global_args(extra_options=global_params)
    return result


def compile(
    stream: Stream, auto_fix: bool = True, use_filter_complex_script: bool = False
) -> str:
    """
    Compile a stream into a command-line string.

    This function takes a Stream object representing an FFmpeg filter graph
    and converts it into a command-line string that can be passed to FFmpeg.

    Args:
        stream: The Stream object to compile into a command-line string
        auto_fix: Whether to automatically fix issues in the stream
        use_filter_complex_script: If True, use -filter_complex_script with a
                                  temporary file instead of -filter_complex

    Returns:
        A command-line string that can be passed to FFmpeg

    """
    return "ffmpeg " + command_line(
        compile_as_list(stream, auto_fix, use_filter_complex_script)
    )


def compile_as_list(
    stream: Stream, auto_fix: bool = True, use_filter_complex_script: bool = False
) -> list[str]:
    """
    Compile a stream into a list of FFmpeg command-line arguments.

    This function takes a Stream object representing an FFmpeg filter graph
    and converts it into a list of command-line arguments that can be passed
    to FFmpeg. The compilation process follows these steps:

    1. Validation: The graph is validated to ensure it's properly formed
       - Checks for cycles in the graph
       - Verifies stream types match filter requirements
       - Ensures all streams are properly connected

    2. Global Options: Processes global FFmpeg settings
       - Log level, overwrite flags, etc.
       - These affect the entire FFmpeg process

    3. Input Files: Handles source media files
       - File paths and input-specific options
       - Stream selection and format options
       - Timestamp and duration settings

    4. Filter Graph: Combines all filters into a -filter_complex argument
       - Properly labels all streams
       - Maintains correct filter chain order
       - Handles stream splitting and merging
       - If use_filter_complex_script is True, creates a temporary file
         with the filter complex content and uses -filter_complex_script

    5. Output Files: Processes destination files
       - File paths and output options
       - Codec and format settings
       - Stream mapping and selection

    If auto_fix is enabled, the function will attempt to fix common issues:
    - Reconnecting disconnected nodes
    - Adding missing split filters
    - Fixing stream type mismatches

    Args:
        stream: The Stream object to compile into arguments
        auto_fix: Whether to automatically fix issues in the stream
                 (e.g., reconnecting disconnected nodes)
        use_filter_complex_script: If True, use -filter_complex_script with a
                                  temporary file instead of -filter_complex

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Raises:
        FFMpegValueError: If the stream contains invalid configurations that cannot be fixed

    Example:
        ```python
        # Create a simple video scaling filter graph
        input_stream = ffmpeg.input("input.mp4")
        scaled = input_stream.filter("scale", 1280, 720)
        output_stream = scaled.output("output.mp4")

        # Compile to FFmpeg arguments
        args = ffmpeg.dag.compile(output_stream)
        print(
            args
        )  # ['ffmpeg', '-i', 'input.mp4', '-filter_complex', '...', 'output.mp4']
        ```

    """
    stream = validate(stream, auto_fix=auto_fix)
    node = stream.node
    context = DAGContext.build(node)

    # compile the global nodes
    commands = []
    global_nodes = [node for node in context.all_nodes if isinstance(node, GlobalNode)]
    for node in global_nodes:
        commands += get_args(node, context)

    # compile the input nodes
    input_nodes = [node for node in context.all_nodes if isinstance(node, InputNode)]
    for node in input_nodes:
        commands += get_args(node, context)

    # compile the filter nodes
    vf_commands = []
    filter_nodes = [node for node in context.all_nodes if isinstance(node, FilterNode)]

    for node in sorted(filter_nodes, key=lambda node: node.max_depth):
        vf_commands += ["".join(get_args(node, context))]

    if vf_commands:
        filter_complex_content = ";".join(vf_commands)

        if use_filter_complex_script:
            # Create a temporary file with the filter complex content
            with tempfile.NamedTemporaryFile(
                mode="w", suffix=".txt", delete=False
            ) as f:
                f.write(filter_complex_content)
                temp_filename = f.name

            commands += ["-filter_complex_script", temp_filename]
        else:
            commands += ["-filter_complex", filter_complex_content]

    # compile the output nodes
    output_nodes = [node for node in context.all_nodes if isinstance(node, OutputNode)]
    for node in output_nodes:
        commands += get_args(node, context)

    return commands


def get_stream_label(stream: Stream, context: DAGContext | None = None) -> str:
    """
    Generate the FFmpeg label for this stream in filter graphs.

    This method creates the label string used to identify this stream in
    FFmpeg filter graphs. The format of the label depends on the stream's
    source (input file or filter) and type (video or audio).

    For input streams, labels follow FFmpeg's stream specifier syntax:
    - Video streams: "0:v" (first input, video stream)
    - Audio streams: "0:a" (first input, audio stream)
    - Subtitle streams: "0:s" (first input, subtitle stream)
    - AV streams: "0" (first input, all streams)

    For filter outputs, labels use the filter's label:
    - Single output filters: "filterlabel"
    - Multi-output filters: "filterlabel#index"

    Args:
        stream: The stream to generate a label for
        context: Optional DAG context for resolving node labels.
                If not provided, a new context will be built.

    Returns:
        A string label for this stream in FFmpeg filter syntax

    Raises:
        FFMpegValueError: If the stream has an unknown type or node type

    """
    from ..streams.audio import AudioStream
    from ..streams.av import AVStream
    from ..streams.video import VideoStream

    if not context:
        context = DAGContext.build(stream.node)

    match stream.node:
        case InputNode():
            match stream:
                case AVStream():
                    return f"{get_node_label(stream.node, context)}"
                case VideoStream():
                    if stream.index is not None:
                        return (
                            f"{get_node_label(stream.node, context)}:v:{stream.index}"
                        )
                    return f"{get_node_label(stream.node, context)}:v"
                case AudioStream():
                    if stream.index is not None:
                        return (
                            f"{get_node_label(stream.node, context)}:a:{stream.index}"
                        )
                    return f"{get_node_label(stream.node, context)}:a"
                case SubtitleStream():
                    if stream.index is not None:
                        return (
                            f"{get_node_label(stream.node, context)}:s:{stream.index}"
                        )
                    return f"{get_node_label(stream.node, context)}:s"
                case _:
                    raise FFMpegValueError(
                        f"Unknown stream type: {stream.__class__.__name__}"
                    )  # pragma: no cover
        case FilterNode():
            if len(stream.node.output_typings) > 1:
                return f"{get_node_label(stream.node, context)}#{stream.index}"
            return f"{get_node_label(stream.node, context)}"
        case OutputNode():
            return f"{get_node_label(stream.node, context)}"
        case _:
            raise FFMpegValueError(
                f"Unknown node type: {stream.node.__class__.__name__}"
            )  # pragma: no cover


def get_args_filter_node(node: FilterNode, context: DAGContext) -> list[str]:
    """
    Generate the FFmpeg filter string for this filter node.

    This method creates the filter string that will be used in the
    filter_complex argument of the FFmpeg command. The format follows
    FFmpeg's syntax where input labels are followed by the filter name
    and parameters, and then output labels.

    The filter string format is:
    [input_label]filter_name=param1=value1:param2=value2[output_label]

    Args:
        node: The FilterNode to generate arguments for
        context: DAG context for resolving stream labels

    Returns:
        A list of strings that, when joined, form the filter string
        for this node in the filter_complex argument

    Example:
        For a scale filter with width=1280 and height=720, this might return:
        ['[0:v]', 'scale=', 'width=1280:height=720', '[s0]']

    """
    incoming_labels = "".join(f"[{get_stream_label(k, context)}]" for k in node.inputs)
    outputs = context.get_outgoing_streams(node)

    outgoing_labels = ""
    for _output in sorted(outputs, key=lambda stream: stream.index or 0):
        # NOTE: all outgoing streams must be filterable
        assert isinstance(_output, FilterableStream)
        outgoing_labels += f"[{get_stream_label(_output, context)}]"

    commands = []
    for key, value in node.kwargs.items():
        assert not isinstance(value, LazyValue), (
            f"LazyValue should have been evaluated: {key}={value}"
        )

        # Note: the -nooption syntax cannot be used for boolean AVOptions, use -option 0/-option 1.
        if isinstance(value, bool):
            value = str(int(value))

        if not isinstance(value, Default):
            commands += [f"{key}={escape(value)}"]

    if commands:
        return (
            [incoming_labels]
            + [f"{node.name}="]
            + [escape(":".join(commands), "\\'[],;")]
            + [outgoing_labels]
        )
    return [incoming_labels] + [f"{node.name}"] + [outgoing_labels]


def get_args_input_node(node: InputNode, context: DAGContext) -> list[str]:
    """
    Generate the FFmpeg command-line arguments for this input file.

    This method creates the command-line arguments needed to specify
    this input file to FFmpeg, including any input-specific options.
    Options are converted to FFmpeg's command-line format, with boolean
    options using -option or -nooption syntax.

    Args:
        node: The InputNode to generate arguments for
        context: DAG context (not used for input nodes)

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Example:
        For an input file "input.mp4" with options like seeking to 10 seconds:
        ['-ss', '10', '-i', 'input.mp4']

    """
    commands = []
    for key, value in node.kwargs.items():
        if isinstance(value, bool):
            if value is True:
                commands += [f"-{key}"]
            elif value is False:
                commands += [f"-no{key}"]
        else:
            commands += [f"-{key}", str(value)]
    commands += ["-i", node.filename]
    return commands


def get_args_output_node(node: OutputNode, context: DAGContext) -> list[str]:
    """
    Generate the FFmpeg command-line arguments for this output file.

    This method creates the command-line arguments needed to specify
    this output file to FFmpeg, including stream mapping and output-specific
    options like codecs and formats. It handles both direct input streams
    and filter output streams appropriately.

    Args:
        node: The OutputNode to generate arguments for
        context: DAG context for resolving stream labels

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Example:
        For an output file "output.mp4" with H.264 video codec:
        ['-map', '[v0]', '-c:v', 'libx264', 'output.mp4']

    """
    # !handle mapping
    commands = []

    if context:
        for input in node.inputs:
            if isinstance(input.node, InputNode):
                # NOTE: specially rules,
                # if there is only one input node,
                # only one output node,
                # the output node has only one input,
                # and the stream selector is not specified,
                # then the map can be ignore.
                if (
                    input.index is None
                    and isinstance(input, AVStream)
                    and len([k for k in context.all_nodes if isinstance(k, InputNode)])
                    == 1
                    and len([k for k in context.all_nodes if isinstance(k, OutputNode)])
                    == 1
                    and len(node.inputs) == 1
                ):
                    continue
                if not input.optional:
                    commands += ["-map", get_stream_label(input, context)]
                else:
                    commands += ["-map", f"{get_stream_label(input, context)}?"]
            else:
                commands += ["-map", f"[{get_stream_label(input, context)}]"]

    for key, value in node.kwargs.items():
        if isinstance(value, bool):
            if value is True:
                commands += [f"-{key}"]
            elif value is False:
                commands += [f"-no{key}"]
        else:
            commands += [f"-{key}", str(value)]
    commands += [node.filename]
    return commands


def get_args_global_node(node: GlobalNode, context: DAGContext) -> list[str]:
    """
    Generate the FFmpeg command-line arguments for these global options.

    This method creates the command-line arguments needed to specify
    global options to FFmpeg, such as -y for overwrite or -loglevel for
    controlling log output. Boolean options are converted to -option or
    -nooption syntax.

    Args:
        node: The GlobalNode to generate arguments for
        context: DAG context (not used for global options)

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Example:
        For global options like overwrite and quiet logging:
        ['-y', '-loglevel', 'quiet']

    """
    commands = []
    for key, value in node.kwargs.items():
        if isinstance(value, bool):
            if value is True:
                commands += [f"-{key}"]
            elif value is False:
                commands += [f"-no{key}"]
        else:
            commands += [f"-{key}", str(value)]
    return commands


def get_args(node: Node, context: DAGContext | None = None) -> list[str]:
    """
    Get the FFmpeg command-line arguments for a specific node.

    This function dispatches to the appropriate argument generation function
    based on the node type. It handles all node types in the FFmpeg DAG:
    FilterNode, InputNode, OutputNode, and GlobalNode.

    Args:
        node: The node to generate arguments for
        context: Optional DAG context for resolving stream labels.
                If not provided, a new context will be built.

    Returns:
        A list of strings representing FFmpeg command-line arguments

    Raises:
        FFMpegValueError: If the node type is not recognized

    """
    context = context or DAGContext.build(node)

    match node:
        case FilterNode():
            return get_args_filter_node(node, context)
        case InputNode():
            return get_args_input_node(node, context)
        case OutputNode():
            return get_args_output_node(node, context)
        case GlobalNode():
            return get_args_global_node(node, context)
        case _:
            raise FFMpegValueError(f"Unknown node type: {node.__class__.__name__}")


def get_node_label(node: Node, context: DAGContext) -> str:
    """
    Get the string label for a specific node in the filter graph.

    This method returns the label assigned to the node, which is used in FFmpeg
    filter graph notation. The label format depends on the node type:
    - Input nodes: sequential numbers (0, 1, 2...)
    - Filter nodes: 's' prefix followed by a number (s0, s1, s2...)
    - Output nodes: 'out'

    Args:
        node: The node to get the label for
        context: DAG context containing node ID mappings

    Returns:
        The string label for the node

    Raises:
        AssertionError: If the node is not an InputNode or FilterNode

    """
    node_id = context.node_ids[node]
    match node:
        case InputNode():
            return str(node_id)
        case FilterNode():
            return f"s{node_id}"
        case _:
            return "out"
