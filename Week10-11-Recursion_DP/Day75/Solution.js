/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let w of wordDict) {
      let start = i - w.length;
      if (start >= 0 && dp[start] && s.substring(start, i) === w) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

const s = "leetcode", wordDict = ["leet", "code"];
console.log("Can break the word:::", wordBreak(s, wordDict));
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
