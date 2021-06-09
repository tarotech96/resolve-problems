/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
 */

const isValid = function (s) {
  const map = new Map();
  map.set("]", "[");
  map.set("}", "{");
  map.set(")", "(");

  const mapResult = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      const firstElement = mapResult.length < 0 ? "" : mapResult.pop();
      if (firstElement != map.get(c)) {
        return false;
      }
    } else {
      mapResult.push(c);
    }
  }

  return mapResult.length == 0;
};
