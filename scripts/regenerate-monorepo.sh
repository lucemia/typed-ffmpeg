#!/bin/bash
# Regenerate all version bindings for monorepo architecture

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🔄 Regenerating version bindings for monorepo..."
echo ""

# Versions to regenerate, read from packages/vN. This was a literal (5 6 7 8)
# and silently skipped v9 for the whole FFmpeg 9 rollout (#999).
read -r -a VERSIONS <<< "$(python3 "${SCRIPT_DIR}/_versions.py")"

for VERSION in "${VERSIONS[@]}"; do
    echo "📦 Generating v${VERSION}..."
    
    # Output path: packages/v${VERSION}/src/
    # With --version-dir, it will create ffmpeg/ subdirectory automatically
    # But we want direct output to packages/v${VERSION}/src/ffmpeg/
    # So we need to use the parent directory as outpath
    OUTPATH="${REPO_ROOT}/packages/v${VERSION}/src"
    
    # NOTE: The generate command with --version-dir will:
    # 1. Create outpath/ffmpeg/ (not outpath/v{VERSION}/ffmpeg/)
    # 2. Use absolute imports from ffmpeg_core.* for shared modules
    # 3. Use relative imports for generated modules
    
    # For now, generate without --version-dir and we'll adjust imports manually
    # TODO: Fix the generate command to not create version subdir when in monorepo mode
    python -m scripts.code_gen.cli generate \
        --outpath "${OUTPATH}/ffmpeg" \
        --no-version-dir \
        --ffmpeg-binary "ffmpeg"
    
    echo "✅ Generated v${VERSION} → ${OUTPATH}/ffmpeg"
    echo ""
done

echo "🎉 All versions regenerated successfully!"
echo ""
echo "Next steps:"
echo "  1. Review generated code"
echo "  2. Run tests: pytest packages/"
echo "  3. Commit changes"
