/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */

const isPalindrome = function (x) {
  if (x == 0) {
    return true;
  }
  const s = x.toString().split("").reverse().join("");
  return x.toString() == s;
};
