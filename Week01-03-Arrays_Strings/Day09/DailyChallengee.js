/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
 var minimumCost = function(source, target, original, changed, cost) {
    const dp = new Array(26).fill().map((_) => new Array(26).fill(Infinity));
  for (let i = 0; i < 26; i++) dp[i][i] = 0;

  for (let i = 0; i < original.length; i++) {
    const originalIdx = original[i].charCodeAt() - 97;
    const changedIdx = changed[i].charCodeAt() - 97;
    dp[originalIdx][changedIdx] = Math.min(
      dp[originalIdx][changedIdx],
      cost[i]
    );
  }

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      for (let k = 0; k < 26; k++) {
        dp[j][k] = Math.min(dp[j][k], dp[j][i] + dp[i][k]);
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < source.length; i++) {
    const sourceIdx = source[i].charCodeAt() - 97;
    const targetIdx = target[i].charCodeAt() - 97;
    if (dp[sourceIdx][targetIdx] === Infinity) return -1;
    ans += dp[sourceIdx][targetIdx];
  }

  return ans;
};
//2976. Minimum Cost to Convert String I // Floyd-warshall
const source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
console.log("Min Cost to Convert String I:: ", minimumCost(source, target, original, changed, cost))
// Output: 28
// Explanation: To convert the string "abcd" to string "acbe":
// - Change value at index 1 from 'b' to 'c' at a cost of 5.
// - Change value at index 2 from 'c' to 'e' at a cost of 1.
// - Change value at index 2 from 'e' to 'b' at a cost of 2.
// - Change value at index 3 from 'd' to 'e' at a cost of 20.
// The total cost incurred is 5 + 1 + 2 + 20 = 28.
// It can be shown that this is the minimum possible cost.