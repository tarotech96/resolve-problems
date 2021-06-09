/**
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 */

const mySqrt = function (x) {
  if (x == 0 || x == 1) return x;
  let i = 1,
  result = 1;
  while (result <= x) {
    i++;
    result = i * i;
  }
  return i - 1;
};
