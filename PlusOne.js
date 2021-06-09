/**
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 */

const plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      digits[i] += 1;
      return digits;
    }
    while (digits[i] == 9) {
      digits[i] = 0;
      if (i == 0) {
        return [1].concat(digits);
      }
    }
  }
};
