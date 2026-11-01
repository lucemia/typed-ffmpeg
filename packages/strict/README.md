# typed-ffmpeg-strict

> **Proof of concept.** Not published yet.

Strict typing for [typed-ffmpeg](https://github.com/lucemia/typed-ffmpeg).

FFmpeg declares expression options such as `drawbox`'s `x`, `y`, `width` and
`height` as strings, so typed-ffmpeg types them as `Expr`, which accepts any
`str`. Only a typo found at runtime will tell you that `x="(iw-w/2"` is broken.
With this package installed, a type checker accepts only numbers and
`Expression` objects for these options:

```python
import ffmpeg
from ffmpeg.expressions import Expression

iw, w = Expression("iw"), Expression("w")
video = ffmpeg.input("in.mp4").video

video.drawbox(x=10, width=(iw - w) / 2)  # ok
video.drawbox(x=Expression("(iw-w)/2"))  # ok: explicitly an expression
video.drawbox(color="red")  # ok: color is not an expression
video.drawbox(x="(iw-w)/2")  # error: str is not an Expr
```

## How it works

The package contains only a [PEP 561](https://peps.python.org/pep-0561/)
*partial* stub, `ffmpeg-stubs/types.pyi`. Type checkers read stub packages
before inline types, so `ffmpeg.types.Expr` resolves to
`Expression | int | float | Default | LazyValue | None` (no `str`). Every other
module falls back to the installed `typed-ffmpeg` sources. Runtime behaviour is
unchanged.

Verified with mypy, pyright and ty. mypy also needs an `ffmpeg-core` that ships
its `py.typed` marker.

## Install

```bash
pip install typed-ffmpeg-strict   # pulls in typed-ffmpeg
```

To go back to lenient typing, uninstall it. No code changes are needed either way.

## Limitations

- Covers the `ffmpeg` module only, not `typed_ffmpeg` from
  `typed-ffmpeg-compatible`
- Depends on `typed-ffmpeg` (the latest FFmpeg version). Users who pin a
  `typed-ffmpeg-vN` package would also pull in v9, which ships the same
  `ffmpeg` module
- Options the codegen does not recognise as expressions stay `String` and still
  accept `str`
