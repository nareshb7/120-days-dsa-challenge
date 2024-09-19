/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;

  const queue = [{ word: beginWord, steps: 1 }];
  while (queue.length > 0) {
    const size = queue.length;
    const { word, steps } = queue.shift();
    if (word === endWord) return steps;

    for (let i = 0; i < word.length; i++) {
      const original = word[i];
      for (let ch = 0; ch < 26; ch++) {
        const char = String.fromCharCode(97 + ch);
        if (original === char) continue;

        const newWord = word.slice(0, i) + char + word.slice(i + 1);
        if (set.has(newWord)) {
          set.delete(newWord);
          queue.push({ word: newWord, steps: steps + 1 });
        }
      }
      word[i] = original;
    }
  }
  return 0;
};

const beginWord = "hit",endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log("Ladder Length::", ladderLength(beginWord, endWord, wordList));
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
