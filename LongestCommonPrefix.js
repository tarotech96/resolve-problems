/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let t = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(t) != 0) {
      t = t.substring(0, t.length - 1);
      if (!t) return "";
    }
  }

  return t;
};
