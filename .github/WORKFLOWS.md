# GitHub Actions Workflows for Monorepo

## Overview

The typed-ffmpeg monorepo uses GitHub Actions for CI/CD. This document describes the workflows and how they work.

## Workflows

### 1. CI Monorepo - Test (`ci-monorepo-test.yml`)

**Purpose:** Run tests for all packages in the monorepo

**Triggers:**
- Push to `main` or `refactor/monorepo-architecture` branches
- Pull requests to `main`
- Changes to `packages/**` or `pyproject-workspace.toml`

**Jobs:**

#### test-core
Tests the core package across Python 3.10, 3.11, 3.12
- Runs all core package tests
- Generates coverage reports
- Uploads to Codecov

#### test-v8
Tests the v8 package across Python 3.10, 3.11, 3.12
- Installs FFmpeg
- Runs v8 package tests (excluding graphviz-dependent tests)
- Generates coverage reports

#### test-integration
Integration tests to verify:
- Import system works correctly
- All packages can be built independently
- Basic workflow functionality

**Status:** ✅ Ready for use

### 2. CI Monorepo - Lint (`ci-monorepo-lint.yml`)

**Purpose:** Lint and validate code quality

**Triggers:**
- Push to `main` or `refactor/monorepo-architecture` branches
- Pull requests to `main`
- Changes to `packages/**` or `pyproject-workspace.toml`

**Checks:**
- Runs `prek` linter on all packages
- Verifies no `ffmpeg_core.dag` imports in core package
- Detects circular import warnings

**Status:** ✅ Ready for use

### 3. Publish Monorepo Packages (`monorepo-publish.yml`)

**Purpose:** Publish packages to PyPI

**Triggers:**
- Manual workflow dispatch (with options)
- Release published event

**Features:**

#### Manual Dispatch Options
- `package`: Choose which package(s) to publish (core, data-v5..v9, v5..v9, latest, compatible, all)
- `test-pypi`: Publish to TestPyPI first for validation

#### Automatic Publishing Order
Publishes in dependency order:
1. `core` (no dependencies)
2. `data-v5` … `data-v9` (cache data, no dependencies)
3. `v5`, `v6`, `v7`, `v8`, `v9` (depend on core)
4. `latest` and `compatible` (depend on the newest version package)

#### Safety Features
- TestPyPI testing before production
- Installation verification
- Brief pause between packages
- Release notes generation

**Status:** ✅ Ready for use (needs PyPI tokens configured)

## Legacy Workflows (To Be Deprecated)

The following workflows are from the old single-package structure and should be deprecated once monorepo is merged:

- `ci-package-test.yml` - Old package testing
- `ci-package-lint.yml` - Old package linting  
- `python-publish.yml` - Old publish workflow
- `python-publish-compatible.yml` - Old compatible publish

**Action Required:** Disable or remove these after monorepo merge.

## Required Secrets

The following GitHub secrets need to be configured:

### For Testing
- `CODECOV_TOKEN` - Codecov upload token (optional but recommended)

### For Publishing
- `PYPI_API_TOKEN` - PyPI API token for production publishing
- `TEST_PYPI_API_TOKEN` - TestPyPI API token for test publishing

## Usage Examples

### Running Tests Locally

```bash
# Test core package
cd packages/core
uv sync
uv run pytest src/ -v

# Test v8 package
cd packages/v8
uv sync
uv run pytest tests/ -v -k "not test_view"

# Test all packages
uv sync  # Install workspace
pytest packages/*/tests/ -v
```

### Manual Publishing

```bash
# Build a specific package
cd packages/v8
uv build

# Publish to TestPyPI
uvx twine upload --repository testpypi dist/*

# Publish to PyPI
uvx twine upload dist/*
```

### Triggering Workflows

**Test on push:**
```bash
git push origin refactor/monorepo-architecture
# Automatically triggers ci-monorepo-test.yml
```

**Manual publish:**
1. Go to Actions → "Publish Monorepo Packages"
2. Click "Run workflow"
3. Choose package and TestPyPI option
4. Confirm and run

**Release publish:**
1. Create a new release on GitHub
2. Tag format: `v8.0.0` (for v8 package)
3. Workflow automatically publishes all packages

## Testing the Workflows

Before merging, test workflows on the branch:

```bash
# Push to trigger CI
git push origin refactor/monorepo-architecture

# Check workflow runs
gh run list --branch refactor/monorepo-architecture

# View specific run
gh run view <run-id>
```

## Migration Plan

1. ✅ Create new monorepo workflows
2. ✅ Test on feature branch
3. ⏳ Merge to main
4. ⏳ Verify workflows run correctly
5. ⏳ Disable old workflows
6. ⏳ First release with new system
7. ⏳ Clean up deprecated workflows

## Maintenance

### Adding a New Version Package

When adding a new FFmpeg version (e.g., v9):

1. No changes needed to `ci-monorepo-test.yml` (auto-detects packages)
2. No changes needed to `ci-monorepo-lint.yml` (scans all packages)
3. Add to publish order in `monorepo-publish.yml`:
   ```yaml
   PUBLISH_ORDER="core v5 v6 v7 v8 v9 latest"
   ```

### Updating Dependencies

Dependency updates are handled by Dependabot (if configured) or manually:

```bash
# Update all packages
uv sync --upgrade

# Update specific package
cd packages/v8
uv sync --upgrade
```

## Troubleshooting

### Test Failures

**Core tests failing:**
- Check if core module imports are correct
- Verify no DAG dependencies

**V8 tests failing:**
- Ensure FFmpeg is installed in CI
- Check PYTHONPATH includes both `src` and `../core/src`

**Import errors:**
- Verify `uv sync` runs correctly
- Check workspace dependencies in `pyproject-workspace.toml`

### Publishing Issues

**TestPyPI upload fails:**
- Version might already exist
- Check TEST_PYPI_API_TOKEN is valid

**PyPI upload fails:**
- Verify PYPI_API_TOKEN is configured
- Ensure version number is incremented
- Check package builds successfully first

### Coverage Upload

**Codecov fails:**
- Verify CODECOV_TOKEN is set
- Check coverage.xml file exists
- Ensure codecov action version is compatible

## Best Practices

1. **Always test on TestPyPI first** before production publish
2. **Run tests locally** before pushing
3. **Increment version numbers** before releasing
4. **Review workflow runs** after each push
5. **Monitor coverage reports** for regressions
6. **Use draft releases** for testing release workflow

## Support

For issues with workflows:
1. Check workflow run logs in GitHub Actions
2. Verify secrets are configured
3. Test locally first
4. Check this documentation

---

**Last Updated:** 2026-03-22  
**Status:** Production Ready ✅
