# FFmpeg Version Differences

This page summarises what changed between each supported FFmpeg major version —
filters, codecs, and formats that were added or removed. Use it to understand
which features are available in your target version or to plan migrations.

!!! tip
    All typed-ffmpeg packages annotate version-specific availability in their
    docstrings. Items available only from a certain version are marked with
    **"New in FFmpeg X.0"**, and items removed in a later version are marked
    with **"Removed in FFmpeg X.0"**.

---

## FFmpeg 5 → 6

### Filters added (22)

`a3dscope`, `adrc`, `afdelaysrc`, `afireqsrc`, `apsnr`, `arls`, `asisdr`,
`backgroundkey`, `bwdif_vulkan`, `ccrepack`, `color_vulkan`, `corr`,
`hstack_vaapi`, `mcdeint`, `nlmeans_vulkan`, `showcwt`, `ssim360`, `uspp`,
`vstack_vaapi`, `xfade_vulkan`, `xstack_vaapi`, `zoneplate`

### Codecs added (21)

`adpcm_xmd`, `anull`, `apac`, `av1_nvenc`, `av1_vaapi`, `bonk`, `cbd2_dpcm`,
`ftr`, `hdr`, `media100`, `misc4`, `osq`, `pdv`, `rka`, `rtv1`, `vmix`,
`vnull`, `vqc`, `wady_dpcm`, `wavarc`, `wbmp`

### Formats added (16)

`ac4`, `apac`, `bonk`, `evc`, `hdr_pipe`, `jpegxl_anim`, `laf`, `osq`, `pdv`,
`rka`, `sdns`, `usm`, `vvc`, `wady`, `wavarc`, `xmd`

Nothing was removed between FFmpeg 5 and 6.

---

## FFmpeg 6 → 7

### Filters added (7)

`aap`, `drawbox_vaapi`, `fsync`, `pad_vaapi`, `perlin`, `tiltandshift`, `xpsnr`

### Filters removed (7)

`afifo`, `derain`, `dnn_classify`, `dnn_detect`, `dnn_processing`, `fifo`, `sr`

### Codecs added (5)

`h264_vulkan`, `hevc_vulkan`, `lead`, `qoa`, `vvc`

### Codecs removed (1)

`ayuv`

### Formats added (5)

`d`, `iamf`, `lc3`, `qoa`, `rcwt`

### Formats removed (5)

`fbdev`, `fifo_test`, `lavfi`, `oss`, `x11grab`

### API: loopback decoders (new in FFmpeg 7.0)

FFmpeg 7.0 added loopback decoders (`-dec of:ost` / `[dec:N]`), which decode an
already-encoded output stream and expose the decoded frames back to the
filtergraph. typed-ffmpeg surfaces this as `OutputStream.loopback(...)`:

```python
source = ffmpeg.input("INPUT")
encoded = source.video.output(filename="-", f="null", vcodec="libx264")
dec = encoded.loopback(stream_index=0)  # decodes the encode back into the graph
ffmpeg.filters.hstack(source.video, dec.video).output(filename="OUT.mkv")
```

This feature requires FFmpeg **>= 7.0** and is available in the `v7`, `v8` and
`v9` packages — the `loopback()` method is not generated for `v5`/`v6`. In the
TypeScript packages the method lives in the shared `@typed-ffmpeg/core`, so it
is present at the type level for all versions but still requires an FFmpeg 7.0+
binary at runtime (only `@typed-ffmpeg/v7`, `@typed-ffmpeg/v8` and
`@typed-ffmpeg/v9` re-export `LoopbackDecoderNode`). Compiling to a command line is supported; parsing a
command line that contains `-dec` is not, and raises a clear error.

---

## FFmpeg 7 → 8

### Filters added (6)

`colordetect`, `coreimage`, `coreimagesrc`, `premultiply_dynamic`, `scale_vt`,
`transpose_vt`

### Filters removed (67)

Many hardware-accelerated filters (OpenCL, Vulkan, VAAPI, CUDA) and
third-party-library filters were removed from the default build:

`ass`, `avgblur_opencl`, `avgblur_vulkan`, `azmq`, `blend_vulkan`,
`boxblur_opencl`, `bs2b`, `bwdif_vulkan`, `chromaber_vulkan`, `color_vulkan`,
`colorkey_opencl`, `convolution_opencl`, `deinterlace_vaapi`, `denoise_vaapi`,
`deshake_opencl`, `dilation_opencl`, `drawbox_vaapi`, `drawtext`,
`erosion_opencl`, `flip_vulkan`, `flite`, `frei0r`, `frei0r_src`,
`gblur_vulkan`, `hflip_vulkan`, `hstack_vaapi`, `hwupload_cuda`, `ladspa`,
`lv2`, `nlmeans_opencl`, `nlmeans_vulkan`, `openclsrc`, `overlay_opencl`,
`overlay_vaapi`, `overlay_vulkan`, `pad_opencl`, `pad_vaapi`, `pp`,
`prewitt_opencl`, `procamp_vaapi`, `program_opencl`, `remap_opencl`,
`roberts_opencl`, `rubberband`, `scale2ref`, `scale_vaapi`, `scale_vulkan`,
`sharpness_vaapi`, `sobel_opencl`, `sofalizer`, `ssim360`, `subtitles`,
`tonemap_opencl`, `tonemap_vaapi`, `transpose_opencl`, `transpose_vaapi`,
`transpose_vulkan`, `unsharp_opencl`, `vflip_vulkan`, `vidstabdetect`,
`vidstabtransform`, `vstack_vaapi`, `xfade_opencl`, `xfade_vulkan`,
`xstack_vaapi`, `zmq`, `zscale`

!!! note
    Most removals in FFmpeg 8 reflect that hardware-acceleration filters
    (OpenCL, Vulkan, VAAPI, CUDA, NVENC) and optional third-party library
    wrappers (`drawtext`, `subtitles`, `ladspa`, `rubberband`, etc.) are no
    longer included in the standard Docker-based test build used to generate
    these bindings. They may still be available if you compile FFmpeg with the
    relevant flags (`--enable-opencl`, `--enable-vulkan`, `--enable-vaapi`,
    etc.).

### Codecs added (34)

`aac_at`, `ac3_at`, `adpcm_circus`, `adpcm_ima_escape`, `adpcm_ima_hvqm2`,
`adpcm_ima_hvqm4`, `adpcm_ima_magix`, `adpcm_ima_pda`, `adpcm_ima_qt_at`,
`adpcm_ima_xbox`, `adpcm_n64`, `adpcm_psxc`, `adpcm_sanyo`, `ahx`, `alac_at`,
`amr_nb_at`, `apv`, `eac3_at`, `g728`, `gsm_ms_at`, `h264_videotoolbox`,
`hevc_videotoolbox`, `ilbc_at`, `libsvtav1`, `mp1_at`, `mp2_at`, `mp3_at`,
`pcm_alaw_at`, `pcm_mulaw_at`, `prores_raw`, `prores_videotoolbox`, `qdm2_at`,
`qdmc_at`, `rv60`

### Codecs removed (40)

`av1_cuvid`, `av1_nvenc`, `av1_vaapi`, `h263_v4l2m2m`, `h264_cuvid`,
`h264_nvenc`, `h264_v4l2m2m`, `h264_vaapi`, `h264_vulkan`, `hevc_cuvid`,
`hevc_nvenc`, `hevc_v4l2m2m`, `hevc_vaapi`, `hevc_vulkan`,
`libopencore_amrnb`, `libopencore_amrwb`, `libopenjpeg`, `libtheora`,
`libvorbis`, `libwebp`, `libwebp_anim`, `libxvid`, `mjpeg_cuvid`,
`mjpeg_vaapi`, `mpeg1_cuvid`, `mpeg1_v4l2m2m`, `mpeg2_cuvid`,
`mpeg2_v4l2m2m`, `mpeg2_vaapi`, `mpeg4_cuvid`, `mpeg4_v4l2m2m`, `sonicls`,
`vc1_cuvid`, `vc1_v4l2m2m`, `vp8_cuvid`, `vp8_v4l2m2m`, `vp8_vaapi`,
`vp9_cuvid`, `vp9_v4l2m2m`, `vp9_vaapi`

### Formats added (5)

`apv`, `g728`, `hxvs`, `jpegxs_pipe`, `whip`

---

## FFmpeg 8 → 9

FFmpeg 9.0 "Lei" was released on 2026-08-04.

!!! warning "This comparison is not a pure like-for-like diff"
    The v9 metadata was captured from a Linux build, while the v8 metadata was
    captured on macOS. A naive diff of the two therefore reports macOS-only
    components (`*_at` AudioToolbox encoders, `*_videotoolbox`, `coreimage`,
    `scale_vt`, `transpose_vt`) as "removed in 9" and Linux-only components
    (`*_vaapi`, `*_cuvid`, `*_v4l2m2m`) as "added in 9". None of those are real
    changes in FFmpeg. The lists below are taken from the FFmpeg 9.0 changelog
    and verified against the 9.0 source tree instead.

### Notable additions

- `v360_vulkan` — 360° projection conversion on Vulkan
- `transpose_cuda` — CUDA transpose
- `vpp_amf` / `frc_amf` — AMF colour conversion (HDR) and frame-rate conversion
- Animated WebP decoder and demuxer
- APV and ProRes RAW hardware acceleration
- HE-AAC 960 decoding (DAB+)
- LCEVC track muxing in the MP4 muxer
- ONNX Runtime DNN backend with GPU execution provider support

### Genuinely removed in 9.0

Verified absent from the 9.0 source tree (no entry in `libavcodec/allcodecs.c`,
no source file, no `configure` reference):

`sonic`, `v308`, `v408`, `v410`

CELT decoding support and ogg/celt parsing were also removed (this does not
affect Opus CELT), along with deprecated NVENC options and support for NVENC
SDKs older than 11.1.

---

## Choosing a Package Version

If your code uses filters or codecs that were removed in a later version, pin
to the matching package:

```bash
pip install typed-ffmpeg-v7   # keeps access to scale_vaapi, drawtext, etc.
pip install typed-ffmpeg-v8   # FFmpeg 8.x bindings
pip install typed-ffmpeg-v9   # latest
```

See [Package Architecture](v4-packages.md) for full installation instructions.
