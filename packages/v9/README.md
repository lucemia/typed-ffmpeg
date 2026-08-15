# typed-ffmpeg-v9

Typed FFmpeg bindings for FFmpeg 9.x.

## Installation

```bash
pip install typed-ffmpeg-v9
```

Or install the meta-package, which currently resolves to v8 and will move to
v9 once these bindings ship:

```bash
pip install typed-ffmpeg
```

## Usage

```python
import ffmpeg

# Input and output
input_file = ffmpeg.input("input.mp4")
output_file = input_file.hflip().output("output.mp4")
output_file.run()

# Complex filter graph
in_file = ffmpeg.input("input.mp4")
overlay_file = ffmpeg.input("overlay.png")

output = (
    ffmpeg.filters
    .concat(
        in_file.trim(start_frame=10, end_frame=20),
        in_file.trim(start_frame=30, end_frame=40),
    )
    .video(0)
    .overlay(overlay_file.hflip())
    .output("out.mp4")
)

output.run()
```

## Requirements

- Python 3.10+
- FFmpeg 9.x installed on your system

## Features

- Full type hints for all FFmpeg 9.x filters, codecs, and formats
- IDE autocomplete support
- Runtime validation
- Filter graph visualization
- JSON serialization

## Documentation

- [Full Documentation](https://lucemia.github.io/typed-ffmpeg/)
- [API Reference](https://lucemia.github.io/typed-ffmpeg/reference/ffmpeg/)

## License

MIT License - see LICENSE file for details
