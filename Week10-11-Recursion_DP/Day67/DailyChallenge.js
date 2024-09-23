var minExtraChar = function (s, dictionary) {
    const n = s.length;
    const dp = new Array(n).fill();
    const set = new Set(dictionary);
  
    return helper(s, set, dp, 0);
  };
  
  function helper(s, set, dp, idx) {
    if (idx >= s.length) return 0;
    if (dp[idx] !== undefined) return dp[idx];
  
    let result = 1 + helper(s, set, dp, idx + 1);
    for (let i = idx; i < s.length; i++) {
      const substring = s.slice(idx, i + 1);
      if (!set.has(substring)) continue;
  
      const next = helper(s, set, dp, i + 1);
      result = Math.min(result, next);
    }
  
    return (dp[idx] = result);
  }

// 2707. Extra Characters in a String
const s = "leetscode", dictionary = ["leet","code","leetcode"]
console.log('Min Exgtra Char::', s, dictionary)
// Output: 1
// Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.