/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 */

const countBits = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    const l = i.toString(2).replace(/0/g, "").length;
    if (l > 0) {
      result.push(l);
    } else {
      result.push(0);
    }
  }

  return result;
};
