/**
 * Given a sentence that consists of some words separated by a single space, and a searchWord.
 * You have to check if searchWord is a prefix of any word in sentence.
 * Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
 * If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
 * A prefix of a string S is any leading contiguous substring of S.
 */

const isPrefixOfWord = function (sentence, searchWord) {
  let index = 0;
  const splittedSenetence = sentence.split(" ");
  const tempArr = [];
  for (let i = 0; i < splittedSenetence.length; i++) {
    if (
      splittedSenetence[i].includes(searchWord) &
      (splittedSenetence[i][0] === searchWord[0])
    ) {
      tempArr.push(i + 1);
    }
  }

  index = tempArr.length > 0 ? Math.min.apply(Math.min, tempArr) : 0;

  return index > 0 ? index : -1;
};
