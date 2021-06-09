/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

const reverse = function (x) {
  const MIN = -2147483648;
  const MAX = 2147483647;

  if (x == 0) {
    return 0;
  }

  const s = x.toString().split("").reverse().join("");
  const n = s.includes("-") ? -parseFloat(s) : parseFloat(s);

  return n < MIN ? 0 : n > MAX ? 0 : n;
};
