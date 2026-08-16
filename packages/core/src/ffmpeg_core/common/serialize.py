"""
Serialization utilities for FFmpeg filter graphs and components.

This module provides functions for serializing and deserializing FFmpeg filter
graph components to and from JSON. It handles dataclasses, enums, and other
custom types used in the typed-ffmpeg library, enabling filter graphs to be
saved to disk and loaded back.
"""

from __future__ import annotations

import json
from dataclasses import fields, is_dataclass
from enum import Enum
from pathlib import Path
from typing import Any

from ..utils.frozendict import FrozenDict

CLASS_REGISTRY: dict[str, type[Serializable | Enum]] = {}
"""
A registry of classes that have been loaded, and can be deserialized.
"""


def serializable(
    cls: type[Serializable | Enum],
) -> type[Serializable | Enum]:
    """
    Register a class with the serialization system.

    This function is used by the `serializable` decorator to register classes
    with the serialization system, enabling them to be serialized and deserialized.

    Args:
        cls: The class to register

    Returns:
        The class itself

    """
    CLASS_REGISTRY[cls.__name__] = cls

    return cls


class Serializable:
    """A base class for all serializable classes."""

    def __init_subclass__(cls, **kwargs: Any) -> None:
        """Register the subclass in the serialization registry."""
        super().__init_subclass__(**kwargs)
        serializable(cls)


def load_class(name: str) -> type[Serializable | Enum]:
    """
    Load a class from its name.

    This function looks up a class by its name in the CLASS_REGISTRY. It's used during
    deserialization to reconstruct objects from their class names.

    Args:
        name: The simple class name (e.g., 'FilterNode')

    Returns:
        The class object that can be instantiated

    Raises:
        AssertionError: If the class name is not found in the registry

    Example:
        ```python
        # Load the FilterNode class
        FilterNode = load_class('FilterNode')
        # Create an instance
        node = FilterNode(name='scale', ...)
        ```

    """
    assert name in CLASS_REGISTRY, f"Class {name} not registered"
    return CLASS_REGISTRY[name]


def frozen(v: Any) -> Any:
    """
    Convert mutable data structures to immutable (frozen) equivalents.

    This function recursively converts lists to tuples and dictionaries to
    FrozenDict instances, ensuring that the resulting data structure is
    completely immutable. This is important for dataclasses that are marked
    as frozen, as they can only contain immutable data.

    Args:
        v: The value to convert, which may be a list, dict, or any other type

    Returns:
        An immutable version of the input value

    Example:
        ```python
        # Convert a nested structure to immutable form
        frozen_data = frozen({
            "options": ["option1", "option2"],
            "settings": {"key": "value"},
        })
        # Result: FrozenDict with tuple instead of list and nested FrozenDict
        ```

    """
    if isinstance(v, list):
        return tuple(frozen(i) for i in v)

    if isinstance(v, dict):
        return FrozenDict({k: frozen(v) for k, v in v.items()})

    return v


def object_hook(obj: Any) -> Any:
    """
    Custom JSON object hook for deserializing FFmpeg objects.

    This function is used by the JSON decoder to convert dictionaries into
    appropriate Python objects during deserialization. It looks for a special
    '__class__' key that indicates the type of object to create.

    Args:
        obj: A dictionary from the JSON parser

    Returns:
        Either the original dictionary or an instance of the specified class

    Example:
        ```python
        # A JSON object with class information
        json_obj = {
            "__class__": "FilterNode",
            "name": "scale",
            "kwargs": {"width": 1280, "height": 720},
        }
        # Will be converted to a FilterNode instance
        ```

    """
    if isinstance(obj, dict) and obj.get("__class__"):
        cls = load_class(obj.pop("__class__"))

        if is_dataclass(cls):
            # NOTE: in our application, the dataclass is always frozen
            return cls(**{k: frozen(v) for k, v in obj.items()})

        return cls(**dict(obj.items()))

    return obj


def loads(raw: str) -> Any:
    """
    Deserialize a JSON string into Python objects with proper class types.

    This function parses a JSON string and reconstructs the original Python
    objects, including dataclasses and enums, based on class information
    embedded in the JSON.

    Args:
        raw: The JSON string to deserialize

    Returns:
        The deserialized Python object with proper types

    Example:
        ```python
        # Deserialize a filter graph from JSON
        json_str = '{"__class__": "FilterNode", "name": "scale", ...}'
        filter_node = loads(json_str)
        # filter_node is now a FilterNode instance
        ```

    """
    return json.loads(raw, object_hook=object_hook)


def to_dict_with_class_info(instance: Any) -> Any:
    """
    Convert Python objects to dictionaries with embedded class information.

    This function recursively converts Python objects to dictionaries, lists,
    and primitive types suitable for JSON serialization. For dataclasses and
    enums, it adds a '__class__' key with the fully qualified class name,
    allowing them to be reconstructed during deserialization.

    Args:
        instance: The Python object to convert

    Returns:
        A JSON-serializable representation with embedded class information

    Example:
        ```python
        # Convert a FilterNode to a serializable dict
        filter_node = FilterNode(name='scale', ...)
        serializable = to_dict_with_class_info(filter_node)
        # serializable now contains class information and all attributes
        ```

    """
    if isinstance(instance, dict | FrozenDict):
        return {k: to_dict_with_class_info(v) for k, v in instance.items()}
    elif isinstance(instance, list):
        return [to_dict_with_class_info(v) for v in instance]
    elif isinstance(instance, tuple):
        return tuple(to_dict_with_class_info(v) for v in instance)
    elif isinstance(instance, Path):
        return str(instance)
    elif is_dataclass(instance):
        return {
            "__class__": instance.__class__.__name__,
            **{
                k.name: to_dict_with_class_info(getattr(instance, k.name))
                for k in fields(instance)
            },
        }
    elif isinstance(instance, Enum):
        return {
            "__class__": instance.__class__.__name__,
            "value": instance.value,
        }
    return instance


# Serialization
def dumps(instance: Any) -> str:
    """
    Serialize a Python object to a JSON string with class information.

    This function converts a Python object (including dataclasses, enums,
    and other custom types) to a JSON string that includes class information,
    allowing it to be deserialized back into the original object types.

    Args:
        instance: The Python object to serialize

    Returns:
        A JSON string representation of the object with class information

    Example:
        ```python
        # Serialize a filter graph to JSON
        filter_node = FilterNode(name='scale', ...)
        json_str = dumps(filter_node)
        # json_str can be saved to a file and later deserialized
        # with loads() to reconstruct the original object
        ```

    """
    obj = to_dict_with_class_info(instance)
    return json.dumps(obj, indent=2, sort_keys=True)
