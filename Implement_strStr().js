/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

const strStr = function (haystack, needle) {
  if (needle == "") {
    return 0;
  }
  if (needle.length > haystack.length || !haystack.includes(needle)) {
    return -1;
  }
  if (needle.length == haystack.length) {
    return 0;
  }
  return haystack.indexOf(needle);
};
