/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 */

const romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let acc = 0;
  while (s.length > 0) {
    if (symbols[s[1]] > symbols[s[0]]) {
      acc += symbols[s[1]] - symbols[s[0]];
      s = s.substr(2);
    } else {
      acc += symbols[s[0]];
      s = s.substr(1);
    }
  }
  return acc;
};
