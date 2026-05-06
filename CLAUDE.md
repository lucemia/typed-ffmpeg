# typed-ffmpeg Development Guide

## Code Generation

Several files in `packages/v5–v8` are **auto-generated** by the codegen system. Do not edit them directly — edit the templates instead.

### Auto-generated files (do NOT edit in packages/v*)

Any file carrying the header `# NOTE: this file is auto-generated, do not modify` is generated from a template. The generated files live under `packages/v*/src/ffmpeg/` and their templates live under `src/scripts/code_gen/templates/` with the same relative path and a `.jinja` extension.

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
