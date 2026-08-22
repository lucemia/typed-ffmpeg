# NOTE: this file is auto-generated, do not modify
"""
Global arguments.
"""



from __future__ import annotations

from abc import ABC, abstractmethod
from typing import TYPE_CHECKING, Any

from ...types import Binary, Boolean, Color, Dictionary, Double, Duration, Flags, Float, Func, Image_size, Int, Int64, Pix_fmt, Rational, Sample_fmt, String, Time, Video_rate
from ...utils.frozendict import merge
if TYPE_CHECKING:
    from ..nodes import GlobalNode, GlobalStream, OutputStream

class GlobalArgs(ABC):
    """
    Abstract base class for providing global FFmpeg command-line arguments.

    This class defines an interface for setting global options that apply to the entire
    FFmpeg command. These options control the general behavior of FFmpeg such as
    logging levels, overwrite behavior, thread usage, and hardware acceleration.

    Implementers must define the _global_node abstract method to apply these arguments
    to actual FFmpeg command execution.
    """

    @abstractmethod
    def _global_node(self, *streams: OutputStream, **kwargs: Any) -> GlobalNode:
        ...

    def global_args(
        self,
        *,loglevel: Func = None,v: Func = None,report: Func = None,max_alloc: Func = None,cpuflags: Func = None,cpucount: Func = None,hide_banner: Func = None,y: Func = None,n: Func = None,ignore_unknown: Func = None,copy_unknown: Func = None,recast_media: Func = None,benchmark: Func = None,benchmark_all: Func = None,progress: Func = None,stdin: Func = None,timelimit: Func = None,dump: Func = None,hex: Func = None,vsync: Func = None,frame_drop_threshold: Func = None,_async: Func = None,adrift_threshold: Func = None,copyts: Func = None,start_at_zero: Func = None,copytb: Func = None,dts_delta_threshold: Func = None,dts_error_threshold: Func = None,xerror: Func = None,abort_on: Func = None,filter_threads: Func = None,filter_complex: Func = None,filter_complex_threads: Func = None,lavfi: Func = None,filter_complex_script: Func = None,auto_conversion_filters: Func = None,stats: Func = None,stats_period: Func = None,debug_ts: Func = None,max_error_rate: Func = None,psnr: Func = None,vstats: Func = None,vstats_file: Func = None,vstats_version: Func = None,qphist: Func = None,vol: Func = None,vaapi_device: Func = None,init_hw_device: Func = None,filter_hw_device: Func = None,extra_options: dict[str, Any] | None = None,
    ) -> GlobalStream:
        """
        Set global options.

        Args:
            loglevel: set logging level
            v: set logging level
            report: generate a report
            max_alloc: set maximum size of a single allocated block
            cpuflags: force specific cpu flags
            cpucount: force specific cpu count
            hide_banner: do not show program banner
            y: overwrite output files
            n: never overwrite output files
            ignore_unknown: Ignore unknown stream types
            copy_unknown: Copy unknown stream types
            recast_media: allow recasting stream type in order to force a decoder of different media type
            benchmark: add timings for benchmarking
            benchmark_all: add timings for each task
            progress: write program-readable progress information
            stdin: enable or disable interaction on standard input
            timelimit: set max runtime in seconds in CPU user time
            dump: dump each input packet
            hex: when dumping packets, also dump the payload
            vsync: set video sync method globally; deprecated, use -fps_mode
            frame_drop_threshold: frame drop threshold
            _async: audio sync method
            adrift_threshold: audio drift threshold
            copyts: copy timestamps
            start_at_zero: shift input timestamps to start at 0 when using copyts
            copytb: copy input stream time base when stream copying
            dts_delta_threshold: timestamp discontinuity delta threshold
            dts_error_threshold: timestamp error delta threshold
            xerror: exit on error
            abort_on: abort on the specified condition flags
            filter_threads: number of non-complex filter threads
            filter_complex: create a complex filtergraph
            filter_complex_threads: number of threads for -filter_complex
            lavfi: create a complex filtergraph
            filter_complex_script: read complex filtergraph description from a file
            auto_conversion_filters: enable automatic conversion filters globally
            stats: print progress report during encoding
            stats_period: set the period at which ffmpeg updates stats and -progress output
            debug_ts: print timestamp debugging info
            max_error_rate: ratio of decoding errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success.
            psnr: calculate PSNR of compressed frames
            vstats: dump video coding statistics to file
            vstats_file: dump video coding statistics to file
            vstats_version: Version of the vstats format to use.
            qphist: show QP histogram
            vol: change audio volume (256=normal)
            vaapi_device: set VAAPI hardware device (DRM path or X11 display name)
            init_hw_device: initialise hardware device
            filter_hw_device: set hardware device used when filtering
            extra_options: Additional options

        Returns:
            GlobalStream: GlobalStream instance
        """

        return self._global_node(**merge(
            {






















                "loglevel": loglevel,

                "v": v,

                "report": report,

                "max_alloc": max_alloc,

                "cpuflags": cpuflags,

                "cpucount": cpucount,

                "hide_banner": hide_banner,




                "y": y,

                "n": n,

                "ignore_unknown": ignore_unknown,

                "copy_unknown": copy_unknown,

                "recast_media": recast_media,






















                "benchmark": benchmark,

                "benchmark_all": benchmark_all,

                "progress": progress,

                "stdin": stdin,

                "timelimit": timelimit,

                "dump": dump,

                "hex": hex,




                "vsync": vsync,

                "frame_drop_threshold": frame_drop_threshold,

                "async": _async,

                "adrift_threshold": adrift_threshold,

                "copyts": copyts,

                "start_at_zero": start_at_zero,

                "copytb": copytb,




                "dts_delta_threshold": dts_delta_threshold,

                "dts_error_threshold": dts_error_threshold,

                "xerror": xerror,

                "abort_on": abort_on,









                "filter_threads": filter_threads,



                "filter_complex": filter_complex,

                "filter_complex_threads": filter_complex_threads,

                "lavfi": lavfi,

                "filter_complex_script": filter_complex_script,

                "auto_conversion_filters": auto_conversion_filters,

                "stats": stats,

                "stats_period": stats_period,




                "debug_ts": debug_ts,

                "max_error_rate": max_error_rate,


















                "psnr": psnr,

                "vstats": vstats,

                "vstats_file": vstats_file,

                "vstats_version": vstats_version,







                "qphist": qphist,




















                "vol": vol,



























                "vaapi_device": vaapi_device,

                "init_hw_device": init_hw_device,

                "filter_hw_device": filter_hw_device,


            }, extra_options)
        ).stream()
