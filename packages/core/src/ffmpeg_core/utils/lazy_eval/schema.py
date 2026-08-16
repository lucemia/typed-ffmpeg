"""
Schema for lazy evaluation of expressions in FFmpeg filter parameters.

This module defines the core classes for lazy evaluation of expressions in
FFmpeg filter parameters. It provides a way to represent expressions that
can be evaluated at a later time, when all required values are available.
This is particularly useful for parameters that depend on runtime information
or need to be computed based on other parameters.
"""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any

from ..typing import override


class LazyValue(ABC):
    """
    Abstract base class for lazy evaluation of expressions.

    LazyValue represents an expression that can be evaluated at a later time,
    when all required values are available. It supports various arithmetic
    operations, allowing complex expressions to be built and evaluated lazily.

    This class serves as the foundation for the lazy evaluation system, with
    concrete implementations like Symbol and LazyOperator providing specific
    functionality.
    """

    def __add__(self, v: Any) -> LazyValue:
        """
        Create an addition operation with this value and another.

        Args:
            v: The value to add

        Returns:
            A new LazyValue representing the addition operation

        """
        from .operator import Add

        return Add(left=self, right=v)

    def __radd__(self, v: Any) -> LazyValue:
        """
        Create an addition operation with another value and this one.

        Args:
            v: The value to add

        Returns:
            A new LazyValue representing the addition operation

        """
        from .operator import Add

        return Add(left=v, right=self)

    def __sub__(self, v: Any) -> LazyValue:
        """
        Create a subtraction operation with this value and another.

        Args:
            v: The value to subtract

        Returns:
            A new LazyValue representing the subtraction operation

        """
        from .operator import Sub

        return Sub(left=self, right=v)

    def __rsub__(self, v: Any) -> LazyValue:
        """
        Create a subtraction operation with another value and this one.

        Args:
            v: The value to subtract from

        Returns:
            A new LazyValue representing the subtraction operation

        """
        from .operator import Sub

        return Sub(left=v, right=self)

    def __mul__(self, v: Any) -> LazyValue:
        """
        Create a multiplication operation with this value and another.

        Args:
            v: The value to multiply by

        Returns:
            A new LazyValue representing the multiplication operation

        """
        from .operator import Mul

        return Mul(left=self, right=v)

    def __rmul__(self, v: Any) -> LazyValue:
        """
        Create a multiplication operation with another value and this one.

        Args:
            v: The value to multiply by

        Returns:
            A new LazyValue representing the multiplication operation

        """
        from .operator import Mul

        return Mul(left=v, right=self)

    def __truediv__(self, v: Any) -> LazyValue:
        """
        Create a division operation with this value and another.

        Args:
            v: The value to divide by

        Returns:
            A new LazyValue representing the division operation

        """
        from .operator import TrueDiv

        return TrueDiv(left=self, right=v)

    def __rtruediv__(self, v: Any) -> LazyValue:
        """
        Create a division operation with another value and this one.

        Args:
            v: The value to divide

        Returns:
            A new LazyValue representing the division operation

        """
        from .operator import TrueDiv

        return TrueDiv(left=v, right=self)

    def __pow__(self, v: Any) -> LazyValue:
        """
        Create an exponentiation operation with this value and another.

        Args:
            v: The exponent

        Returns:
            A new LazyValue representing the exponentiation operation

        """
        from .operator import Pow

        return Pow(left=self, right=v)

    def __rpow__(self, v: Any) -> LazyValue:
        """
        Create an exponentiation operation with another value and this one.

        Args:
            v: The base

        Returns:
            A new LazyValue representing the exponentiation operation

        """
        from .operator import Pow

        return Pow(left=v, right=self)

    def __neg__(self) -> LazyValue:
        """
        Create a negation operation for this value.

        Returns:
            A new LazyValue representing the negation operation

        """
        from .operator import Neg

        return Neg(left=self)

    def __pos__(self) -> LazyValue:
        """
        Create a positive operation for this value.

        Returns:
            A new LazyValue representing the positive operation

        """
        from .operator import Pos

        return Pos(left=self)

    def __abs__(self) -> LazyValue:
        """
        Create an absolute value operation for this value.

        Returns:
            A new LazyValue representing the absolute value operation

        """
        from .operator import Abs

        return Abs(left=self)

    def __mod__(self, v: Any) -> LazyValue:
        """
        Create a modulo operation with this value and another.

        Args:
            v: The value to take modulo with

        Returns:
            A new LazyValue representing the modulo operation

        """
        from .operator import Mod

        return Mod(left=self, right=v)

    def __rmod__(self, v: Any) -> LazyValue:
        """
        Create a modulo operation with another value and this one.

        Args:
            v: The value to take modulo of

        Returns:
            A new LazyValue representing the modulo operation

        """
        from .operator import Mod

        return Mod(left=v, right=self)

    def __floordiv__(self, v: Any) -> LazyValue:
        """
        Create a floor division operation with this value and another.

        Args:
            v: The value to divide by

        Returns:
            A new LazyValue representing the floor division operation

        """
        from .operator import FloorDiv

        return FloorDiv(left=self, right=v)

    def __rfloordiv__(self, v: Any) -> LazyValue:
        """
        Create a floor division operation with another value and this one.

        Args:
            v: The value to divide

        Returns:
            A new LazyValue representing the floor division operation

        """
        from .operator import FloorDiv

        return FloorDiv(left=v, right=self)

    def eval(self, **values: Any) -> Any:
        """
        Evaluate the lazy value with the given values.

        Args:
            **values: Values to be used for evaluation.

        Returns:
            Any: The evaluated value.

        Raises:
            ValueError: If the lazy value is not ready to be evaluated.

        """
        v = self.partial(**values)
        if isinstance(v, LazyValue):
            # Not a type error: the value is well-typed but still missing
            # bindings, and ValueError is the documented contract above.
            raise ValueError(v.keys())  # noqa: TRY004
        return v

    @abstractmethod
    def partial(self, **values: Any) -> Any:
        """
        Evaluate the lazy value with the given values.

        Args:
            **values: Values to be used for evaluation.

        Returns:
            Any: The partially evaluated value.

        """
        ...

    def ready(self) -> bool:
        """
        Check if the lazy value is ready to be evaluated.

        A lazy value is considered ready for evaluation when it doesn't require
        any additional values to be provided. This is determined by checking if
        the set of required keys is empty.

        Returns:
            True if the lazy value can be evaluated without additional values,
            False otherwise

        """
        return not self.keys()

    @abstractmethod
    def keys(self) -> set[str]:
        """
        Get the keys that are required to evaluate the lazy value.

        This method returns the set of symbol names that must be provided
        as values for the lazy value to be fully evaluated. For example,
        if the lazy value represents the expression 'width * height',
        this method would return {'width', 'height'}.

        Returns:
            A set of strings representing the required symbol names

        """
        ...


@dataclass(frozen=True)
class Symbol(LazyValue):
    """
    A symbol that represents a variable in lazy evaluation expressions.

    Symbol is a concrete implementation of LazyValue that represents a named
    variable in an expression. When evaluating the expression, the actual value
    of the symbol is provided through a dictionary of values.

    Examples of symbols include variable names like 'width', 'height', or any
    other parameter that will be provided at evaluation time rather than at
    expression creation time.

    Attributes:
        key: The name of the variable this symbol represents

    """

    key: str

    def __str__(self) -> str:
        """
        Get a string representation of this symbol.

        Returns:
            The symbol's key as a string

        """
        return str(self.key)

    @override
    def partial(self, **values: Any) -> Any:
        """
        Evaluate this symbol with the given values.

        If the symbol's key is present in the values dictionary, returns the
        corresponding value. Otherwise, returns the symbol itself (unchanged).

        Args:
            **values: Dictionary mapping symbol names to their values

        Returns:
            The value for this symbol if available, otherwise the symbol itself

        """
        if self.key in values:
            return values[self.key]
        return self

    @override
    def keys(self) -> set[str]:
        """
        Get the set of symbol names required to evaluate this symbol.

        For a Symbol, this is simply a set containing its own key.

        Returns:
            A set containing the symbol's key

        """
        return {self.key}


@dataclass(frozen=True, kw_only=True)
class LazyOperator(LazyValue):
    """
    Abstract base class for operators in lazy evaluation expressions.

    LazyOperator is an abstract implementation of LazyValue that represents
    mathematical operations in an expression. Concrete subclasses implement
    specific operations like addition, subtraction, multiplication, etc.

    This class provides the common structure and behavior for all operators,
    including handling of operands that may themselves be LazyValues.

    Attributes:
        left: The left operand of the operation (or the only operand for unary operations)
        right: The right operand of the operation (None for unary operations)

    Concrete implementations include:
        Add, Sub, Mul, TrueDiv, Pow, Neg, Pos, Abs, Mod, FloorDiv

    """

    left: Any = None
    right: Any = None

    @abstractmethod
    def _eval(self, left: Any, right: Any) -> Any:
        """
        Evaluate the operator with the given operand values.

        This abstract method must be implemented by concrete operator subclasses
        to define the specific operation to perform (e.g., addition, multiplication).

        Args:
            left: The evaluated left operand (or only operand for unary operations)
            right: The evaluated right operand (may be None for unary operations)

        Returns:
            The result of applying the operation to the operands

        """
        ...

    @override
    def partial(self, **values: Any) -> Any:
        """
        Evaluate this operator with the given values.

        This method recursively evaluates the operands (which may themselves be
        LazyValues) with the provided values, then applies the operator's
        specific operation to the results.

        Args:
            **values: Dictionary mapping symbol names to their values

        Returns:
            The result of applying the operation to the partially evaluated operands,
            which may be a concrete value or another LazyValue if some symbols
            remain unevaluated

        """
        if isinstance(self.left, LazyValue):
            left = self.left.partial(**values)
        else:
            left = self.left

        if isinstance(self.right, LazyValue):
            right = self.right.partial(**values)
        else:
            right = self.right

        return self._eval(left, right)

    @override
    def keys(self) -> set[str]:
        """
        Get the set of symbol names required to evaluate this operator.

        This method collects the required symbol names from both operands
        (if they are LazyValues) and returns their union.

        Returns:
            A set of strings representing all symbol names required to
            fully evaluate this operator

        """
        r = set()
        if isinstance(self.left, LazyValue):
            r |= self.left.keys()

        if isinstance(self.right, LazyValue):
            r |= self.right.keys()

        return r
