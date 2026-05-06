# Codegen Template Sync Design

**Date:** 2026-05-06
**Topic:** Add codegen templates for compile/ and dag/ shared files

## Problem

Five hand-written files are duplicated across packages/v5–v8 but are not covered by any codegen template:
- `compile/compile_cli.py`
- `compile/context.py`
- `compile/validate.py`
- `dag/schema.py`
- `dag/nodes.py`

Running `codegen generate` does not touch these files, so manual edits (e.g., the recent iterative recursion performance fixes) must be applied to all four version packages by hand. If a version is missed, packages drift out of sync.

## Design

Add five static Jinja2 templates to `src/scripts/code_gen/templates/` as verbatim copies of the current v8 files (the canonical reference after all recent fixes).

| Template | Output |
|---|---|
| `compile/compile_cli.py.jinja` | `packages/v*/src/ffmpeg/compile/compile_cli.py` |
| `compile/context.py.jinja` | `packages/v*/src/ffmpeg/compile/context.py` |
| `compile/validate.py.jinja` | `packages/v*/src/ffmpeg/compile/validate.py` |
| `dag/schema.py.jinja` | `packages/v*/src/ffmpeg/dag/schema.py` |
| `dag/nodes.py.jinja` | `packages/v*/src/ffmpeg/dag/nodes.py` |

No changes to `gen.py` or `cli.py` — the `render()` function already auto-discovers all `**/*.*.jinja` files in the templates directory.

Templates contain no Jinja variables since these files are identical across v5–v8.

## Outcome

Future `codegen generate` runs will overwrite these files with the canonical template content, keeping all versions in sync automatically.
