"""FFmpeg expression functions and utilities."""

from typing import Any


class Expression(str):
    """A string-based expression class for FFmpeg expressions."""

    def __init__(self, expression: str):
        """
        Initialize an Expression with a string expression.

        Args:
            expression: The FFmpeg expression string.

        """
        self.expression = expression

    def __str__(self) -> str:
        """
        Return the expression string.

        Returns:
            The expression string.

        """
        return self.expression

    def __repr__(self) -> str:
        """
        Return a string representation of the Expression.

        Returns:
            A string representation of the Expression.

        """
        return f"Expression({self.expression})"

    # The following binary operators are available: +, -, *, /, ^.
    def __add__(self, other: Any) -> "Expression":
        """
        Add another value to this expression.

        Returns:
            A new Expression with the addition operation.

        """
        return Expression(f"{self.expression}+{other}")

    def __sub__(self, other: Any) -> "Expression":
        """
        Subtract another value from this expression.

        Returns:
            A new Expression with the subtraction operation.

        """
        return Expression(f"{self.expression}-{other}")

    def __mul__(self, other: Any) -> "Expression":
        """
        Multiply this expression by another value.

        Returns:
            A new Expression with the multiplication operation.

        """
        return Expression(f"{self.expression}*{other}")

    def __truediv__(self, other: Any) -> "Expression":
        """
        Divide this expression by another value.

        Returns:
            A new Expression with the division operation.

        """
        return Expression(f"{self.expression}/{other}")

    def __mod__(self, other: Any) -> "Expression":
        """
        Compute the modulo of this expression with another value.

        Returns:
            A new Expression with the modulo operation.

        """
        return Expression(f"{self.expression}%{other}")

    def __pow__(self, other: Any) -> "Expression":
        """
        Raise this expression to the power of another value.

        Returns:
            A new Expression with the power operation.

        """
        return Expression(f"{self.expression}^{other}")

    # The following unary operators are available: +, -.
    def __neg__(self) -> "Expression":
        """
        Return the negative of this expression.

        Returns:
            A new Expression with the negation operation.

        """
        return Expression(f"-{self.expression}")

    def __pos__(self) -> "Expression":
        """
        Return the positive of this expression.

        Returns:
            A new Expression with the positive operation.

        """
        return Expression(f"+{self.expression}")


def abs(x: Any) -> Expression:
    """
    Compute absolute value of x.

    Args:
        x: The value to compute absolute value for.

    Returns:
        Expression representing the absolute value.

    """
    return Expression(f"abs({x})")


def acos(x: Any) -> Expression:
    """
    Compute arccosine of x.

    Args:
        x: The value to compute arccosine for.

    Returns:
        Expression representing the arccosine.

    """
    return Expression(f"acos({x})")


def asin(x: Any) -> Expression:
    """
    Compute arcsine of x.

    Args:
        x: The value to compute arcsine for.

    Returns:
        Expression representing the arcsine.

    """
    return Expression(f"asin({x})")


def atan(x: Any) -> Expression:
    """
    Compute arctangent of x.

    Args:
        x: The value to compute arctangent for.

    Returns:
        Expression representing the arctangent.

    """
    return Expression(f"atan({x})")


def atan2(x: Any) -> Expression:
    """
    Compute principal value of the arc tangent of y/x.

    Args:
        x: The value to compute arctangent for.

    Returns:
        Expression representing the arctangent.

    """
    return Expression(f"atan2({x})")


def between(x: Any, min: Any, max: Any) -> Expression:
    """
    Return 1 if x is greater than or equal to min and lesser than or equal to max, 0 otherwise.

    Args:
        x: The value to check.
        min: The minimum value.
        max: The maximum value.

    Returns:
        Expression representing the comparison result.

    """
    return Expression(f"between({x},{min},{max})")


def bitand(x: Any, y: Any) -> Expression:
    """
    Compute bitwise and/or operation on x and y.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the bitwise AND result.

    """
    return Expression(f"bitand({x},{y})")


def bitor(x: Any, y: Any) -> Expression:
    """
    Compute bitwise and/or operation on x and y.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the bitwise OR result.

    """
    return Expression(f"bitor({x},{y})")


def ceil(expr: Any) -> Expression:
    """
    Round the value of expression expr upwards to the nearest integer. For example, "ceil(1.5)" is "2.0".

    Args:
        expr: The expression to round up.

    Returns:
        Expression representing the ceiling value.

    """
    return Expression(f"ceil({expr})")


def clip(x: Any, min: Any, max: Any) -> Expression:
    """
    Return the value of x clipped between min and max.

    Args:
        x: The value to clip.
        min: The minimum value.
        max: The maximum value.

    Returns:
        Expression representing the clipped value.

    """
    return Expression(f"clip({x},{min},{max})")


def cos(x: Any) -> Expression:
    """
    Compute cosine of x.

    Args:
        x: The value to compute cosine for.

    Returns:
        Expression representing the cosine.

    """
    return Expression(f"cos({x})")


def cosh(x: Any) -> Expression:
    """
    Compute hyperbolic cosine of x.

    Args:
        x: The value to compute hyperbolic cosine for.

    Returns:
        Expression representing the hyperbolic cosine.

    """
    return Expression(f"cosh({x})")


def eq(x: Any, y: Any) -> Expression:
    """
    Return 1 if x and y are equivalent, 0 otherwise.

    Args:
        x: The first value to compare.
        y: The second value to compare.

    Returns:
        Expression representing the equality comparison.

    """
    return Expression(f"eq({x},{y})")


def exp(x: Any) -> Expression:
    """
    Compute exponential of x (with base e, the Euler's number).

    Args:
        x: The value to compute exponential for.

    Returns:
        Expression representing the exponential.

    """
    return Expression(f"exp({x})")


def floor(expr: Any) -> Expression:
    """
    Round the value of expression expr downwards to the nearest integer. For example, "floor(-1.5)" is "-2.0".

    Args:
        expr: The expression to round down.

    Returns:
        Expression representing the floor value.

    """
    return Expression(f"floor({expr})")


def gauss(x: Any) -> Expression:
    """
    Compute Gauss function of x, corresponding to exp(-x*x/2) / sqrt(2*PI).

    Args:
        x: The value to compute Gauss function for.

    Returns:
        Expression representing the Gauss function.

    """
    return Expression(f"gauss({x})")


def gcd(x: Any, y: Any) -> Expression:
    """
    Return the greatest common divisor of x and y. If both x and y are 0 or either or both are less than zero then behavior is undefined.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the greatest common divisor.

    """
    return Expression(f"gcd({x},{y})")


def gt(x: Any, y: Any) -> Expression:
    """
    Return 1 if x is greater than y, 0 otherwise.

    Args:
        x: The first value to compare.
        y: The second value to compare.

    Returns:
        Expression representing the greater than comparison.

    """
    return Expression(f"gt({x},{y})")


def gte(x: Any, y: Any) -> Expression:
    """
    Return 1 if x is greater than or equal to y, 0 otherwise.

    Args:
        x: The first value to compare.
        y: The second value to compare.

    Returns:
        Expression representing the greater than or equal comparison.

    """
    return Expression(f"gte({x},{y})")


def hypot(x: Any, y: Any) -> Expression:
    """
    Return sqrt(x*x + y*y), the length of the hypotenuse of a right triangle with sides of length x and y, or the distance of the point (x, y) from the origin.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the hypotenuse length.

    """
    return Expression(f"hypot({x},{y})")


def if_(x: Any, y: Any, z: Any | None = None) -> Expression:
    """
    Evaluate x, and if the result is non-zero return the result of the evaluation of y, return 0 otherwise.

    Args:
        x: The condition to evaluate.
        y: The value to return if condition is true.
        z: Optional value to return if condition is false.

    Returns:
        Expression representing the conditional result.

    """
    if z is None:
        return Expression(f"if({x},{y})")
    else:
        return Expression(f"if({x},{y},{z})")


def ifnot(x: Any, y: Any, z: Any | None = None) -> Expression:
    """
    Evaluate x, and if the result is zero return the result of the evaluation of y, return 0 otherwise.

    Args:
        x: The condition to evaluate.
        y: The value to return if condition is false.
        z: Optional value to return if condition is true.

    Returns:
        Expression representing the conditional result.

    """
    if z is None:
        return Expression(f"ifnot({x},{y})")
    else:
        return Expression(f"ifnot({x},{y},{z})")


def isinf(x: Any) -> Expression:
    """
    Return 1.0 if x is +/-INFINITY, 0.0 otherwise.

    Args:
        x: The value to check for infinity.

    Returns:
        Expression representing the infinity check.

    """
    return Expression(f"isinf({x})")


def isnan(x: Any) -> Expression:
    """
    Return 1.0 if x is NAN, 0.0 otherwise.

    Args:
        x: The value to check for NaN.

    Returns:
        Expression representing the NaN check.

    """
    return Expression(f"isnan({x})")


def ld(idx: Any) -> Expression:
    """
    Load the value of the internal variable with index idx, which was previously stored with st(idx, expr). The function returns the loaded value.

    Args:
        idx: The index of the internal variable to load.

    Returns:
        Expression representing the loaded value.

    """
    return Expression(f"ld({idx})")


def lerp(x: Any, y: Any, z: Any) -> Expression:
    """
    Return linear interpolation between x and y by amount of z.

    Args:
        x: The first value.
        y: The second value.
        z: The interpolation amount.

    Returns:
        Expression representing the interpolated value.

    """
    return Expression(f"lerp({x},{y},{z})")


def log(x: Any) -> Expression:
    """
    Compute natural logarithm of x.

    Args:
        x: The value to compute natural logarithm for.

    Returns:
        Expression representing the natural logarithm.

    """
    return Expression(f"log({x})")


def lt(x: Any, y: Any) -> Expression:
    """
    Return 1 if x is lesser than y, 0 otherwise.

    Args:
        x: The first value to compare.
        y: The second value to compare.

    Returns:
        Expression representing the less than comparison.

    """
    return Expression(f"lt({x},{y})")


def lte(x: Any, y: Any) -> Expression:
    """
    Return 1 if x is lesser than or equal to y, 0 otherwise.

    Args:
        x: The first value to compare.
        y: The second value to compare.

    Returns:
        Expression representing the less than or equal comparison.

    """
    return Expression(f"lte({x},{y})")


def max(x: Any, y: Any) -> Expression:
    """
    Return the maximum between x and y.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the maximum value.

    """
    return Expression(f"max({x},{y})")


def min(x: Any, y: Any) -> Expression:
    """
    Return the minimum between x and y.

    Args:
        x: The first value.
        y: The second value.

    Returns:
        Expression representing the minimum value.

    """
    return Expression(f"min({x},{y})")


def mod(x: Any, y: Any) -> Expression:
    """
    Compute the remainder of division of x by y.

    Args:
        x: The dividend.
        y: The divisor.

    Returns:
        Expression representing the remainder.

    """
    return Expression(f"mod({x},{y})")


def not_(expr: Any) -> Expression:
    """
    Return 1.0 if expr is zero, 0.0 otherwise.

    Args:
        expr: The expression to negate.

    Returns:
        Expression representing the logical NOT.

    """
    return Expression(f"not({expr})")


def pow(x: Any, y: Any) -> Expression:
    """
    Compute the power of x elevated y, it is equivalent to "(x)^(y)".

    Args:
        x: The base value.
        y: The exponent.

    Returns:
        Expression representing the power.

    """
    return Expression(f"pow({x},{y})")


def print(t: Any, l: Any | None = None) -> Expression:
    """
    Print the value of expression t with loglevel l. If l is not specified then a default log level is used. Return the value of the expression printed.

    Args:
        t: The expression to print.
        l: Optional log level.

    Returns:
        Expression representing the printed value.

    """
    if l is None:
        return Expression(f"print({t})")
    else:
        return Expression(f"print({t},{l})")


def random(idx: Any) -> Expression:
    """
    Return a pseudo random value between 0.0 and 1.0. idx is the index of the internal variable used to save the seed/state, which can be previously stored with st(idx).

    Args:
        idx: The index of the internal variable for seed/state.

    Returns:
        Expression representing the random value.

    """
    return Expression(f"random({idx})")


def randomi(idx: Any, min: Any, max: Any) -> Expression:
    """
    Return a pseudo random value in the interval between min and max. idx is the index of the internal variable which will be used to save the seed/state, which can be previously stored with st(idx).

    Args:
        idx: The index of the internal variable for seed/state.
        min: The minimum value.
        max: The maximum value.

    Returns:
        Expression representing the random integer value.

    """
    return Expression(f"randomi({idx},{min},{max})")


def root(expr: Any, max: Any) -> Expression:
    """
    Find an input value for which the function represented by expr with argument ld(0) is 0 in the interval 0..max.

    Args:
        expr: The expression representing the function.
        max: The maximum value for the interval.

    Returns:
        Expression representing the root value.

    """
    return Expression(f"root({expr},{max})")


def round(expr: Any) -> Expression:
    """
    Round the value of expression expr to the nearest integer. For example, "round(1.5)" is "2.0".

    Args:
        expr: The expression to round.

    Returns:
        Expression representing the rounded value.

    """
    return Expression(f"round({expr})")


def sgn(x: Any) -> Expression:
    """
    Compute sign of x.

    Args:
        x: The value to compute sign for.

    Returns:
        Expression representing the sign.

    """
    return Expression(f"sgn({x})")


def sin(x: Any) -> Expression:
    """
    Compute sine of x.

    Args:
        x: The value to compute sine for.

    Returns:
        Expression representing the sine.

    """
    return Expression(f"sin({x})")


def sinh(x: Any) -> Expression:
    """
    Compute hyperbolic sine of x.

    Args:
        x: The value to compute hyperbolic sine for.

    Returns:
        Expression representing the hyperbolic sine.

    """
    return Expression(f"sinh({x})")


def sqrt(expr: Any) -> Expression:
    """
    Compute the square root of expr. This is equivalent to "(expr)^.5".

    Args:
        expr: The expression to compute square root for.

    Returns:
        Expression representing the square root.

    """
    return Expression(f"sqrt({expr})")


def squish(x: Any) -> Expression:
    """
    Compute expression 1/(1 + exp(4*x)).

    Args:
        x: The value to compute squish function for.

    Returns:
        Expression representing the squish function.

    """
    return Expression(f"squish({x})")


def st(idx: Any, expr: Any) -> Expression:
    """
    Store the value of the expression expr in an internal variable. idx specifies the index of the variable where to store the value, and it is a value ranging from 0 to 9. The function returns the value stored in the internal variable.

    Args:
        idx: The index of the internal variable (0-9).
        expr: The expression to store.

    Returns:
        Expression representing the stored value.

    """
    return Expression(f"st({idx},{expr})")


def tan(x: Any) -> Expression:
    """
    Compute tangent of x.

    Args:
        x: The value to compute tangent for.

    Returns:
        Expression representing the tangent.

    """
    return Expression(f"tan({x})")


def tanh(x: Any) -> Expression:
    """
    Compute hyperbolic tangent of x.

    Args:
        x: The value to compute hyperbolic tangent for.

    Returns:
        Expression representing the hyperbolic tangent.

    """
    return Expression(f"tanh({x})")


def taylor(expr: Any, x: Any, idx: Any | None = None) -> Expression:
    """
    Evaluate a Taylor series at x, given an expression representing the ld(idx)-th derivative of a function at 0.

    Args:
        expr: The expression representing the derivative.
        x: The value to evaluate at.
        idx: Optional index for the derivative.

    Returns:
        Expression representing the Taylor series evaluation.

    """
    if idx is None:
        return Expression(f"taylor({expr},{x})")
    else:
        return Expression(f"taylor({expr},{x},{idx})")


def time(x: Any) -> Expression:
    """
    Return the current (wallclock) time in seconds.

    Args:
        x: Unused parameter.

    Returns:
        Expression representing the current time.

    """
    return Expression(f"time({x})")


def trunc(expr: Any) -> Expression:
    """
    Round the value of expression expr towards zero to the nearest integer. For example, "trunc(-1.5)" is "-1.0".

    Args:
        expr: The expression to truncate.

    Returns:
        Expression representing the truncated value.

    """
    return Expression(f"trunc({expr})")


def while_(cond: Any, expr: Any) -> Expression:
    """
    Evaluate expression expr while the expression cond is non-zero, and returns the value of the last expr evaluation, or NAN if cond was always false.

    Args:
        cond: The condition to evaluate.
        expr: The expression to evaluate while condition is true.

    Returns:
        Expression representing the while loop result.

    """
    return Expression(f"while({cond},{expr})")


PI = Expression("PI")
"""area of the unit disc, approximately 3.14"""
E = Expression("E")
"""exp(1) (Euler's number), approximately 2.718"""
PHI = Expression("PHI")
"""golden ratio (1+sqrt(5))/2, approximately 1.618"""
