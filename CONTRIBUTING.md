# Contributing to typed-ffmpeg

Thank you for your interest in contributing to typed-ffmpeg! This document provides guidelines and instructions for contributing.

## Development Setup

### Prerequisites

- Python 3.10 or higher
- [uv](https://github.com/astral-sh/uv) (recommended) or pip
- Git
- FFmpeg (for testing)

### Getting Started

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/typed-ffmpeg.git
cd typed-ffmpeg
```

2. **Install dependencies**

```bash
# Using uv (recommended)
uv pip install --group dev

# Or using pip
pip install -e ".[dev]"
```

3. **Install prek hooks**

We use [prek](https://github.com/9999years/prek), a Rust-based drop-in replacement for pre-commit:

```bash
# Install hooks (prek included in dev dependencies)
prek install
```

If you previously used pre-commit:

```bash
# Uninstall old hooks first
pre-commit uninstall

# Install prek hooks
prek install
```

See [prek migration guide](docs/development/prek-migration.md) for details.

## Development Workflow

### Making Changes

1. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

2. **Make your changes**

Write your code following the project's coding standards.

3. **Run tests**

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_specific.py

# Run with coverage
pytest --cov=ffmpeg --cov-report=html
```

4. **Run linting**

```bash
# Using prek (recommended - 2-10x faster)
prek run --all-files

# Or run individual tools
ruff check src/
ruff format src/
```

5. **Commit your changes**

```bash
git add .
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve bug"
```

Hooks will run automatically before commit.

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```bash
git commit -m "feat: add support for new filter"
git commit -m "fix: resolve issue with audio stream detection"
git commit -m "docs: update installation guide"
```

### Pull Request Process

1. **Push your branch**

```bash
git push origin feature/your-feature-name
```

2. **Create a Pull Request**

- Go to the repository on GitHub
- Click "New Pull Request"
- Select your branch
- Fill in the PR template
- Submit the PR

3. **Address Review Comments**

- Make requested changes
- Push updates to the same branch
- PR will update automatically

4. **Merge**

Once approved, maintainers will merge your PR.

## Code Style

### Python Style Guide

We follow PEP 8 with some modifications:

- **Line length**: 88 characters (Black default)
- **Type hints**: Required for all functions
- **Docstrings**: Required for public APIs

### Formatting

We use Ruff for both linting and formatting:

```bash
# Format code
ruff format src/

# Lint code
ruff check src/ --fix

# Check without fixing
ruff check src/
```

### Type Checking

We use type hints and validate with mypy:

```bash
# Run type checking
mypy src/
```

## Testing

### Writing Tests

- Place tests in `tests/` directory
- Use `pytest` for all tests
- Aim for high coverage (>80%)

Example test:

```python
def test_input_output():
    """Test basic input/output functionality."""
    stream = ffmpeg.input("input.mp4")
    output = stream.output("output.mp4")
    
    cmd = output.compile()
    assert cmd == ["ffmpeg", "-i", "input.mp4", "output.mp4"]
```

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=ffmpeg

# Run specific test
pytest tests/test_dag.py::test_specific_function

# Run with verbose output
pytest -v

# Run failed tests only
pytest --lf
```

### Snapshot Testing

We use syrupy for snapshot testing:

```bash
# Update snapshots
pytest --snapshot-update

# Review snapshot diffs
pytest -vv
```

## Documentation

### Docstring Format

We use Google-style docstrings:

```python
def function_name(param1: str, param2: int) -> bool:
    """
    Brief description of function.

    Longer description if needed. Can span multiple lines
    and include details about the function's behavior.

    Args:
        param1: Description of param1
        param2: Description of param2

    Returns:
        Description of return value

    Raises:
        ValueError: When param1 is empty

    Example:
        ```python
        result = function_name("test", 42)
        ```

    """
    ...
```

### Building Documentation

```bash
# Install docs dependencies
uv pip install --group dev

# Build docs
mkdocs build

# Serve docs locally
mkdocs serve
```

Visit http://127.0.0.1:8000 to view documentation.

## Project Structure

```
typed-ffmpeg/
├── src/
│   └── ffmpeg/              # Main package
│       ├── dag/             # DAG implementation
│       ├── compile/         # Compilation logic
│       ├── filters.py       # Filter definitions
│       ├── codecs/          # Codec definitions
│       └── formats/         # Format definitions
├── tests/                   # Test files
├── docs/                    # Documentation
├── scripts/                 # Utility scripts
└── pyproject.toml          # Project configuration
```

## Pre-commit Hooks

We use prek (Rust-based, 2-10x faster than pre-commit) to run checks automatically:

### Configured Hooks

- **check-case-conflict**: Prevent case conflicts
- **check-json**: Validate JSON files
- **check-yaml**: Validate YAML files
- **check-merge-conflict**: Prevent merge conflict markers
- **end-of-file-fixer**: Ensure files end with newline
- **trailing-whitespace**: Remove trailing whitespace
- **ruff**: Fast Python linter and formatter
- **ty check**: Type checking (local)

### Running Hooks Manually

```bash
# Run all hooks
prek run --all-files

# Run specific hook
prek run ruff

# Skip hooks (not recommended)
git commit --no-verify -m "message"
```

## Common Tasks

### Adding a New Filter

1. Update filter definitions in `src/ffmpeg/filters.py`
2. Add tests in `tests/test_filters.py`
3. Update documentation if needed
4. Run tests and linting

### Updating Dependencies

```bash
# Update all dependencies
uv lock --upgrade

# Update specific dependency
uv lock --upgrade-package <package-name>
```

### Releasing a New Version

Maintainers only. The monorepo publishes **11 packages** to PyPI in dependency order:

| Layer | Packages |
|-------|----------|
| Core | `ffmpeg-core` |
| Data | `ffmpeg-data-v5`, `ffmpeg-data-v6`, `ffmpeg-data-v7`, `ffmpeg-data-v8` |
| Bindings | `typed-ffmpeg-v5`, `typed-ffmpeg-v6`, `typed-ffmpeg-v7`, `typed-ffmpeg-v8` |
| Meta | `typed-ffmpeg` (latest), `typed-ffmpeg-compatible` |

#### Automated Release

The release script handles all steps interactively:

```bash
python scripts/release.py           # prompts for version
python scripts/release.py 4.0.0     # skip version prompt
python scripts/release.py --dry-run # preview without changes
```

The script will:
1. Bump version across all 11 packages (via `scripts/bump-version.py`)
2. Insert a new CHANGELOG.md section and open your `$EDITOR`
3. Commit and create a git tag
4. Push to origin (with confirmation)
5. Create a GitHub Release via `gh` CLI (triggers `monorepo-publish.yml`)

The publish workflow builds all packages and publishes to PyPI in dependency order:
core → data → bindings → meta. Documentation is deployed automatically via `deploy-docs.yml` on version tags.

#### Manual / Partial Publish

You can also trigger the publish workflow manually from the Actions tab:
- **`package`**: select specific packages (e.g. `core`, `v8`) or `all`
- **`test-pypi`**: publish to TestPyPI first for validation (recommended for major releases)

#### How Codegen Reaches main

Codegen lives in a single workflow, `ci-codegen-versions.yml`.

When a PR changes the generator (templates, parsers, or
`ffmpeg_core/common/**`), the workflow regenerates the bindings and **commits
them onto the PR branch**. The generator change and its output therefore merge
as one commit, and `main` never holds generator code without matching bindings.
Expect a `chore: regenerate FFmpeg bindings` commit to appear on your branch —
pull before pushing again.

Two consequences worth knowing:

- The bot pushes with `GITHUB_TOKEN`, which deliberately does not re-trigger
  workflows, so the PR's other checks still show results from the commit before
  the generated one. The generate job verifies the new files import, and `main`
  re-runs everything on merge.
- Fork PRs cannot be pushed to, so there the workflow fails with the diff and
  asks you to regenerate locally instead.

Pushes to `main` and manual dispatches still open a PR, since there is no branch
to commit back to.

#### Adding a New FFmpeg Version (e.g. v9)

Adding a version means extending the matrix — there is no second workflow to
keep in sync.

1. Make sure an FFmpeg image for the version exists. `jrottenberg/ffmpeg` only
   publishes up to 8.0, so newer majors need a build here: add
   `docker/ffmpeg-builder/Dockerfile.<X.Y>` and a matrix entry in
   `build-ffmpeg-images.yml`, then dispatch it to publish
   `ghcr.io/lucemia/typed-ffmpeg/ffmpeg:<X.Y>`.
2. Create the `packages/v9` and `packages/data-v9` package skeletons, and add
   them to the workspace lists in `pyproject.toml` / `pyproject-workspace.toml`.
   `packages/data-v9/src/ffmpeg_data_v9/cache/list/` must exist, or the cache
   mirror step skips it with a warning.
3. Add a matrix entry to `ci-codegen-versions.yml` with `ffmpeg-version`,
   `ffmpeg-image`, and `ffmpeg-mm`. `ffmpeg-mm` is the `major_minor` suffix
   codegen writes (e.g. `9_0` for `filters_9_0.json`) and must match the image
   tag — globbing on the major alone also matches sibling minors.
4. Dispatch the workflow to generate the bindings and open a PR. Merge it —
   generated bindings only reach users once that PR lands.
5. Add the new packages to `scripts/bump-version.py`, `scripts/gen_ref_pages.py`,
   the publish workflow, and the `ci-monorepo-test` / `ci-ts-test` matrices.
6. Update the `typed-ffmpeg` meta-package dependency to point to the new version.
7. Bump version and release all packages.

## Getting Help

- **Documentation**: https://lucemia.github.io/typed-ffmpeg/
- **Issues**: https://github.com/lucemia/typed-ffmpeg/issues
- **Discussions**: https://github.com/lucemia/typed-ffmpeg/discussions

## Code of Conduct

Please be respectful and constructive in all interactions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to:
- Open an issue
- Start a discussion
- Ask in PR comments

Thank you for contributing! 🎉
