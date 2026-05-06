# typed-ffmpeg Development Guide

## Code Generation

Several files in `packages/v5–v8` are **auto-generated** by the codegen system. Do not edit them directly — edit the templates instead.

### Auto-generated files (do NOT edit in packages/v*)

These files carry the header `# NOTE: this file is auto-generated, do not modify`:

| File | Template |
|------|----------|
| `packages/v*/src/ffmpeg/compile/compile_cli.py` | `src/scripts/code_gen/templates/compile/compile_cli.py.jinja` |
| `packages/v*/src/ffmpeg/compile/context.py` | `src/scripts/code_gen/templates/compile/context.py.jinja` |
| `packages/v*/src/ffmpeg/compile/validate.py` | `src/scripts/code_gen/templates/compile/validate.py.jinja` |
| `packages/v*/src/ffmpeg/dag/schema.py` | `src/scripts/code_gen/templates/dag/schema.py.jinja` |
| `packages/v*/src/ffmpeg/dag/nodes.py` | `src/scripts/code_gen/templates/dag/nodes.py.jinja` |
| `packages/v*/src/ffmpeg/filters.py` | `src/scripts/code_gen/templates/filters.py.jinja` |
| `packages/v*/src/ffmpeg/sources.py` | `src/scripts/code_gen/templates/sources.py.jinja` |
| `packages/v*/src/ffmpeg/codecs/encoders.py` | `src/scripts/code_gen/templates/codecs/encoders.py.jinja` |
| `packages/v*/src/ffmpeg/codecs/decoders.py` | `src/scripts/code_gen/templates/codecs/decoders.py.jinja` |
| `packages/v*/src/ffmpeg/formats/muxers.py` | `src/scripts/code_gen/templates/formats/muxers.py.jinja` |
| `packages/v*/src/ffmpeg/formats/demuxers.py` | `src/scripts/code_gen/templates/formats/demuxers.py.jinja` |
| `packages/v*/src/ffmpeg/options/codec.py` | `src/scripts/code_gen/templates/options/codec.py.jinja` |
| `packages/v*/src/ffmpeg/options/format.py` | `src/scripts/code_gen/templates/options/format.py.jinja` |
| `packages/v*/src/ffmpeg/streams/video.py` | `src/scripts/code_gen/templates/streams/video.py.jinja` |
| `packages/v*/src/ffmpeg/streams/audio.py` | `src/scripts/code_gen/templates/streams/audio.py.jinja` |
| `packages/v*/src/ffmpeg/dag/io/_input.py` | `src/scripts/code_gen/templates/dag/io/_input.py.jinja` |
| `packages/v*/src/ffmpeg/dag/io/_output.py` | `src/scripts/code_gen/templates/dag/io/_output.py.jinja` |
| `packages/v*/src/ffmpeg/dag/io/output_args.py` | `src/scripts/code_gen/templates/dag/io/output_args.py.jinja` |
| `packages/v*/src/ffmpeg/dag/global_runnable/global_args.py` | `src/scripts/code_gen/templates/dag/global_runnable/global_args.py.jinja` |

### Workflow for changing auto-generated files

1. Edit the template in `src/scripts/code_gen/templates/`
2. Run codegen to regenerate all versions:
   ```bash
   source .venv/bin/activate
   export PYTHONPATH="$PWD/src:$PYTHONPATH"
   python -m scripts.code_gen.cli generate --outpath packages/v8/src/ffmpeg --ffmpeg-binary $(which ffmpeg) --rebuild
   # repeat for v5, v6, v7
   ```
3. Update snapshots if the template change affects `test_render`:
   ```bash
   pytest src/scripts/code_gen/tests/test_gen.py::test_render --snapshot-update
   ```
4. Commit both the template change and the regenerated package files together.
