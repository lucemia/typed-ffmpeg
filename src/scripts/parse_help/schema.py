"""Schema definitions for parsing FFmpeg help output."""

from dataclasses import dataclass
from typing import Literal

from ..code_gen.schema import FFMpegOptionType

"""
Enumeration of possible data types for FFmpeg AV options.

These types are used for codec, format, and filter options as documented in
the FFmpeg AVOptions specification.

See: https://ffmpeg.org/ffmpeg-all.html#AVOptions
"""


@dataclass(frozen=True, kw_only=True)
class FFMpegOption:
    """
    Represents an FFmpeg option from help text output.

    FFmpeg has different types of options with varying characteristics:

    1. **General Options**: No type in help text, no flags, has varname, supports -no(option) syntax
    2. **AVOptions**: Has type, has flags, no varname, per-stream, doesn't support -no(option) syntax
    3. **AVFilter AVOptions**: Has type, has flags, no varname, per-stream, special syntax
    4. **BSF AVFilters**: Not fully investigated yet

    Examples:
    ```
    General options:
    -cpuflags flags     force specific cpu flags
    -cpucount count     force specific cpu count

    AVCodecContext AVOptions:
    -b                 <int64>      E..VA...... set bitrate (in bits/s) (from 0 to I64_MAX) (default 200000)
    -ab                <int64>      E...A...... set bitrate (in bits/s) (from 0 to INT_MAX) (default 128000)

    AVFilter AVOptions:
    radius            <int>        ..FV....... set median filter radius (from 1 to 127) (default 1)
    planes            <int>        ..FV.....T. set planes to filter (from 0 to 15) (default 15)
    ```

    """

    section: str
    """The section name from help text (e.g., "Advanced global options", "AVOptions")."""

    name: str
    """The option name (e.g., "b", "radius", "preset")."""

    type: FFMpegOptionType | None = None
    """The option's data type (e.g., "int", "float", "string")."""

    flags: str | None = None
    """The option's flags (e.g., "E..VA......", "..FV.......") or None if not specified."""

    help: str
    """The help text description for the option."""

    argname: str | None = None
    """The variable name for the option (e.g., "flags", "count") or None if not specified."""

    @property
    def is_av_option(self) -> bool:
        """Whether this option is an AV option."""
        return isinstance(self, FFMpegAVOption)


@dataclass(frozen=True, kw_only=True)
class FFMpegOptionChoice:
    """
    Represents a choice value for an AVOption.

    There are two types of choices:
    1. **Flags**: Multiple boolean flags that can be combined
    2. **Enum**: Single choice from a predefined set of values

    Examples:
    ```
    Flags:
    -fflags            <flags>      ED......... (default autobsf)
       flush_packets                E.......... reduce the latency by flushing out packets immediately
       ignidx                       .D......... ignore index
       genpts                       .D......... generate pts

    Enum:
    preset            <int>        ..F.A...... set equalizer preset (from -1 to 17) (default flat)
     custom          -1           ..F.A......
     flat            0            ..F.A......
     acoustic        1            ..F.A......
    ```

    """

    name: str
    """The choice name."""

    help: str
    """The help text description for this choice."""

    flags: str
    """The flags associated with this choice."""

    value: str
    """The value associated with this choice."""


@dataclass(frozen=True, kw_only=True)
class FFMpegAVOption(FFMpegOption):
    """
    Represents an FFmpeg AVOption with additional metadata.

    AVOptions are per-stream options that have types, flags, and may include
    range constraints, default values, and choice lists.

    Examples:
    ```
    AVFormatContext AVOptions:
    -fflags            <flags>      ED......... (default autobsf)
        flush_packets                E.......... reduce the latency by flushing out packets immediately

    AVCodecContext AVOptions:
    -b                 <int64>      E..VA...... set bitrate (in bits/s) (from 0 to I64_MAX) (default 200000)
    -bt                <int>        E..VA...... Set video bitrate tolerance (in bits/s) (from 0 to INT_MAX) (default 4000000)

    AVFilter AVOptions:
    radius            <int>        ..FV....... set median filter radius (from 1 to 127) (default 1)
    percentile        <float>      ..FV.....T. set percentile (from 0 to 1) (default 0.5)
    ```

    """

    min: str | None = None
    """The minimum allowed value for this option."""

    max: str | None = None
    """The maximum allowed value for this option."""

    default: str | None = None
    """The default value for this option."""

    choices: tuple[FFMpegOptionChoice, ...] = ()
    """Available choices for this option (for enum or flags types)."""

    @property
    def code_gen_type(self) -> str:
        """
        The code generation type for this option.

        Returns:
            The type string for code generation.

        """
        return "str"


@dataclass(frozen=True, kw_only=True)
class FFMpegOptionSet:
    """
    Base class for sets of FFmpeg options.

    Represents collections of options such as formats, codecs, filters, etc.
    Each option set has a name, flags indicating capabilities, help text,
    and a collection of available options.

    Example:
    ```
    File formats:
    D. = Demuxing supported
    .E = Muxing supported
    --
    D  3dostr          3DO STR
    ```

    """

    name: str
    """The name of the option set."""

    flags: str
    """The flags indicating capabilities of this option set."""

    help: str
    """The help text description for this option set."""

    options: tuple[FFMpegAVOption, ...] = ()
    """The available options in this set."""


@dataclass(frozen=True, kw_only=True)
class FFMpegCodec(FFMpegOptionSet):
    """
    Represents an FFmpeg codec (encoder or decoder).

    Note: Encoders and decoders with the same name have different options,
    so they are stored separately.

    Examples:
    ```
    Encoders:
    V..... = Video
    A..... = Audio
    S..... = Subtitle
    .F.... = Frame-level multithreading
    ..S... = Slice-level multithreading
    ...X.. = Codec is experimental
    ....B. = Supports draw_horiz_band
    .....D = Supports direct rendering method 1
    ------
    V....D a64multi             Multicolor charset for Commodore 64 (codec a64_multi)
    V....D a64multi5            Multicolor charset for Commodore 64, extended with 5th color (colram) (codec a64_multi5)

    Decoders:
    V....D 012v                 Uncompressed 4:2:2 10-bit
    V....D 4xm                  4X Movie
    V....D 8bps                 QuickTime 8BPS video
    V....D aasc                 Autodesk RLE
    ```

    """

    @property
    def is_encoder(self) -> bool:
        """
        Whether this codec is an encoder.

        Returns:
            True if this codec is an encoder, False otherwise.

        """
        return isinstance(self, FFMpegEncoder)

    @property
    def is_decoder(self) -> bool:
        """
        Whether this codec is a decoder.

        Returns:
            True if this codec is a decoder, False otherwise.

        """
        return isinstance(self, FFMpegDecoder)


@dataclass(frozen=True, kw_only=True)
class FFMpegEncoder(FFMpegCodec):
    """Represents an FFmpeg encoder codec."""

    pass


@dataclass(frozen=True, kw_only=True)
class FFMpegDecoder(FFMpegCodec):
    """Represents an FFmpeg decoder codec."""

    pass


@dataclass(frozen=True, kw_only=True)
class FFMpegFormat(FFMpegOptionSet):
    """
    Represents an FFmpeg format (demuxer or muxer).

    Note: Demuxers and muxers with the same name have different options,
    so they are stored separately.

    Examples:
    ```
    Muxers (E = Muxing supported):
    E 3g2             3GP2 (3GPP2 file format)
    E 3gp             3GP (3GPP file format)
    E a64             a64 - video for Commodore 64
    E ac3             raw AC-3
    E ac4             raw AC-4

    Demuxers (D = Demuxing supported):
    D  3dostr          3DO STR
    D  4xm             4X Technologies
    D  aa              Audible AA format files
    D  aac             raw ADTS AAC (Advanced Audio Coding)
    D  aax             CRI AAX
    D  ac3             raw AC-3
    ```

    """

    @property
    def is_muxer(self) -> bool:
        """
        Check if this format is a muxer.

        Returns:
            True if this is a muxer, False otherwise.

        """
        return "E" in self.flags

    @property
    def is_demuxer(self) -> bool:
        """
        Check if this format is a demuxer.

        Returns:
            True if this is a demuxer, False otherwise.

        """
        return "D" in self.flags


@dataclass(frozen=True, kw_only=True)
class FFMpegDemuxer(FFMpegFormat):
    """Represents an FFmpeg demuxer format."""

    pass


@dataclass(frozen=True, kw_only=True)
class FFMpegMuxer(FFMpegFormat):
    """Represents an FFmpeg muxer format."""

    pass


@dataclass(frozen=True, kw_only=True)
class FFMpegIOType:
    """Represents an FFmpeg IO type."""

    name: str | None = None
    """The name of the IO type."""

    type: Literal["audio", "video"]


@dataclass(frozen=True, kw_only=True)
class FFMpegFilter(FFMpegOptionSet):
    """
    Represents an FFmpeg filter.

    Filters process audio, video, or other data streams and can have various
    capabilities indicated by their flags.

    Examples:
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
    T.C acrusher          A->A       Reduce audio bit resolution.
    TS. adeclick          A->A       Remove impulsive noise from input audio.
    ```

    """

    io_flags: str
    """
    The IO flags of the filter.

    Examples:
    ```
    A->A: Audio input/output
    V->V: Video input/output
    N->N: Dynamic number and/or type of input/output
    |->|: Source or sink filter
    A->N: Audio input/output to dynamic number of outputs
    N->A: Dynamic number of inputs/outputs to audio output
    V->N: Video input/output to dynamic number of outputs
    N->V: Dynamic number of inputs/outputs to video output
    ```
    """

    stream_typings_input: tuple[FFMpegIOType, ...] = ()
    """The types of input streams this filter accepts."""

    stream_typings_output: tuple[FFMpegIOType, ...] = ()
    """The types of output streams this filter produces."""

    is_dynamic_input: bool = False
    """Whether the filter can accept a variable number of inputs."""

    is_dynamic_output: bool = False
    """Whether the filter can produce a variable number of outputs."""

    is_framesync: bool = False
    """Whether the filter supports framesync."""

    is_slice_threading: bool = False
    """Whether the filter supports slice threading."""

    is_timeline: bool = False
    """Whether the filter supports timeline."""
