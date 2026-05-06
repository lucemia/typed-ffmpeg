# Codegen Template Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Jinja2 templates for 5 hand-written files so `codegen generate` keeps them in sync across v5–v8.

**Architecture:** The `render()` function in `gen.py` auto-discovers all `**/*.*.jinja` files in `src/scripts/code_gen/templates/`. Adding template files there is sufficient — no changes to `gen.py` or `cli.py` needed. The templates are verbatim copies of the v8 files (canonical post-fix reference). The existing `test_render` snapshot test automatically picks up new templates; running `--snapshot-update` creates the new snapshot baselines.

**Tech Stack:** Python, Jinja2, pytest, syrupy (snapshot testing)

---

### Task 1: Create compile/ templates

**Files:**
- Create: `src/scripts/code_gen/templates/compile/compile_cli.py.jinja`
- Create: `src/scripts/code_gen/templates/compile/context.py.jinja`
- Create: `src/scripts/code_gen/templates/compile/validate.py.jinja`

- [ ] **Step 1: Copy compile_cli.py as template**

```bash
cp packages/v8/src/ffmpeg/compile/compile_cli.py \
   src/scripts/code_gen/templates/compile/compile_cli.py.jinja
```

- [ ] **Step 2: Copy context.py as template**

```bash
cp packages/v8/src/ffmpeg/compile/context.py \
   src/scripts/code_gen/templates/compile/context.py.jinja
```

- [ ] **Step 3: Copy validate.py as template**

```bash
cp packages/v8/src/ffmpeg/compile/validate.py \
   src/scripts/code_gen/templates/compile/validate.py.jinja
```

- [ ] **Step 4: Verify files exist**

```bash
ls src/scripts/code_gen/templates/compile/
```

Expected output:
```
compile_cli.py.jinja  context.py.jinja  validate.py.jinja
```

---

### Task 2: Create dag/ templates

**Files:**
- Create: `src/scripts/code_gen/templates/dag/schema.py.jinja`
- Create: `src/scripts/code_gen/templates/dag/nodes.py.jinja`

Note: `src/scripts/code_gen/templates/dag/` already exists (it contains `dag/io/` and `dag/global_runnable/` subdirs). The new files go directly in `dag/`.

- [ ] **Step 1: Copy schema.py as template**

```bash
cp packages/v8/src/ffmpeg/dag/schema.py \
   src/scripts/code_gen/templates/dag/schema.py.jinja
```

- [ ] **Step 2: Copy nodes.py as template**

```bash
cp packages/v8/src/ffmpeg/dag/nodes.py \
   src/scripts/code_gen/templates/dag/nodes.py.jinja
```

- [ ] **Step 3: Verify files exist**

```bash
ls src/scripts/code_gen/templates/dag/*.jinja
```

Expected output:
```
src/scripts/code_gen/templates/dag/nodes.py.jinja
src/scripts/code_gen/templates/dag/schema.py.jinja
```

---

### Task 3: Update snapshots and verify test passes

**Files:**
- Modify: `src/scripts/code_gen/tests/__snapshots__/test_gen/` (5 new snapshot files created)

The existing `test_render` in `src/scripts/code_gen/tests/test_gen.py` automatically picks up all templates. It will fail with missing snapshots until they are created.

- [ ] **Step 1: Run test to confirm it fails (snapshots missing)**

```bash
cd /Users/davidchen/repo/typed-ffmpeg
source .venv/bin/activate
pytest src/scripts/code_gen/tests/test_gen.py::test_render -v 2>&1 | head -40
```

Expected: FAIL — syrupy reports snapshot(s) not found for `compile_cli.py`, `context.py`, `validate.py`, `schema.py`, `nodes.py`.

- [ ] **Step 2: Update snapshots**

```bash
pytest src/scripts/code_gen/tests/test_gen.py::test_render -v --snapshot-update
```

Expected: PASSED, and 5 new snapshot files appear in `src/scripts/code_gen/tests/__snapshots__/test_gen/`:
```
test_render[compile_cli.py].raw
test_render[context.py].raw
test_render[validate.py].raw
test_render[schema.py].raw
test_render[nodes.py].raw
```

- [ ] **Step 3: Run test without --snapshot-update to confirm it passes**

```bash
pytest src/scripts/code_gen/tests/test_gen.py::test_render -v
```

Expected: PASSED, all assertions green.

---

### Task 4: Verify codegen output matches current v5–v8 packages

This confirms that running `codegen generate` would produce identical output to what's already in the versioned packages (no drift introduced).

- [ ] **Step 1: Run codegen generate into a temp directory and diff against v8**

```bash
source .venv/bin/activate
export PYTHONPATH="$PWD/src:$PYTHONPATH"
TMPDIR=$(mktemp -d)

python -m scripts.code_gen.cli generate \
  --outpath "$TMPDIR" \
  --ffmpeg-binary /usr/local/bin/ffmpeg \
  --rebuild

diff "$TMPDIR/compile/compile_cli.py" packages/v8/src/ffmpeg/compile/compile_cli.py
diff "$TMPDIR/compile/context.py"     packages/v8/src/ffmpeg/compile/context.py
diff "$TMPDIR/compile/validate.py"    packages/v8/src/ffmpeg/compile/validate.py
diff "$TMPDIR/dag/schema.py"          packages/v8/src/ffmpeg/dag/schema.py
diff "$TMPDIR/dag/nodes.py"           packages/v8/src/ffmpeg/dag/nodes.py

rm -rf "$TMPDIR"
```

Expected: no diff output (files are identical).

If diffs appear: the v8 source files have diverged from the template. Update the template to match v8 (the canonical reference) and re-run.

---

### Task 5: Commit

- [ ] **Step 1: Stage all new template and snapshot files**

```bash
git add \
  src/scripts/code_gen/templates/compile/compile_cli.py.jinja \
  src/scripts/code_gen/templates/compile/context.py.jinja \
  src/scripts/code_gen/templates/compile/validate.py.jinja \
  src/scripts/code_gen/templates/dag/schema.py.jinja \
  src/scripts/code_gen/templates/dag/nodes.py.jinja \
  src/scripts/code_gen/tests/__snapshots__/test_gen/
```

- [ ] **Step 2: Commit**

```bash
git commit -m "feat(codegen): add templates for compile/ and dag/ shared files

Previously compile_cli.py, context.py, validate.py, nodes.py, and
schema.py were hand-written duplicates across v5-v8 with no template
coverage. Running codegen generate now keeps them in sync."
```
