"""Parse ffmpeg filter documents from the official ffmpeg documentation."""

import re
import urllib.request
from functools import lru_cache
from pathlib import Path

import typer

from ffmpeg_core.common.cache import cache_path, save

from ..net import with_retry
from .helpers import parse_filter_document
from .parse_texi import parse_texi_sections
from .schema import FilterDocument

app = typer.Typer()


@app.command()
def download_ffmpeg_filter_documents() -> Path:
    """
    Download ffmpeg filter documents.

    Returns:
        Path to the downloaded document

    """
    document_path = cache_path / "docs"
    document_path.mkdir(exist_ok=True)

    # download ffmpeg filter documents
    filter_path = document_path / "ffmpeg-filters.html"

    if filter_path.exists():  # pragma: no cover
        typer.echo("Filter documents already downloaded")
        return filter_path

    typer.echo("Downloading filter documents...")
    url = "https://ffmpeg.org/ffmpeg-filters.html"
    # ffmpeg.org resets connections often enough to fail a whole codegen run.
    data = with_retry(lambda: urllib.request.urlopen(url).read())
    text = data.decode("utf-8")

    with filter_path.open("w") as ofile:
        ofile.write(text)

    return filter_path


@lru_cache
@app.command()
def process_docs() -> list[FilterDocument]:
    """
    Process ffmpeg filter documents.

    Returns:
        List of FilterDocument objects

    """
    # split documents into individual files for easier processing
    section_pattern = re.compile(
        r'(?P<body><h[34] class="(?:section|subsection)"><a href="(.*?)">(?P<name>.*?)</a></h[34]>(.*?))<span',
        re.MULTILINE | re.DOTALL,
    )

    def extract_filter(html: str) -> list[tuple[str, str]]:
        return [
            (m.group("name"), m.group("body")) for m in section_pattern.finditer(html)
        ]

    infos: list[FilterDocument] = []
    with (download_ffmpeg_filter_documents()).open() as ifile:
        for name, body in extract_filter(ifile.read()):
            info = parse_filter_document(body)

            print(f"Processing {info.title}...")
            save(info, info.hash)
            infos.append(info)

    return infos


@app.command()
def extract_docs(filter_name: str) -> FilterDocument:
    """
    Extract ffmpeg filter document.

    Args:
        filter_name: The name of the filter

    Returns:
        FilterDocument object

    Raises:
        ValueError: If the filter is not found.

    """
    for doc in process_docs():
        if filter_name in doc.filter_names:
            return doc

    raise ValueError(f"Unknown filter {filter_name}")


def process_texi_docs(texi_path: Path) -> list[FilterDocument]:
    """
    Process a Texinfo file and return FilterDocument objects for each filter section.

    Args:
        texi_path: Path to a .texi file (e.g. doc/filters.texi from FFmpeg source)

    Returns:
        List of FilterDocument objects with texi-based descriptions

    """
    texi_content = texi_path.read_text(encoding="utf-8")
    sections = parse_texi_sections(texi_content)

    docs: list[FilterDocument] = []
    for section in sections:
        title = ", ".join(section.filter_names)
        doc = FilterDocument(
            section_index="",
            hash=section.filter_names[0],
            title=title,
            body=section.raw_body,
            filter_names=section.filter_names,
            _texi_description=section.description,
            _texi_parameter_descs=section.parameter_descs,
        )
        docs.append(doc)

    return docs


def extract_texi_docs(filter_name: str, texi_path: Path) -> FilterDocument:
    """
    Extract a specific filter's documentation from a Texinfo file.

    Args:
        filter_name: The name of the filter to find
        texi_path: Path to a .texi file

    Returns:
        FilterDocument object for the requested filter

    Raises:
        ValueError: If the filter is not found in the texi file.

    """
    for doc in process_texi_docs(texi_path):
        if filter_name in doc.filter_names:
            return doc

    raise ValueError(f"Unknown filter {filter_name} in {texi_path}")
