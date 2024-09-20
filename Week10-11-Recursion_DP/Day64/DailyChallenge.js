/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const len = s.length;
  if (len == 0) return "";
  const rev_s = s.split("").reverse().join("");
  const combined = s + "#" + rev_s;
  const kmp = new Array(combined.length).fill(0);

  for (let i = 1; i < combined.length; i++) {
    let j = kmp[i - 1];
    while (j > 0 && combined[i] !== combined[j]) {
      j = kmp[j - 1];
    }
    if (combined[i] === combined[j]) {
      j++;
    }
    kmp[i] = j;
  }

  const longestPrefix = kmp[combined.length - 1];

  const suffix = s.slice(longestPrefix).split("").reverse().join("");
  return suffix + s;
};

// 214. Shortest Palindrome
const s = "aacecaaa";
// Output: "aaacecaaa"
