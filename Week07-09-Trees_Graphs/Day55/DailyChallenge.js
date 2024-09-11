/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  // XOR to find differing bits between start and goal
  let xorResult = start ^ goal;
  let ans = 0;

  // Count the number of 1's in the XOR result
  while (xorResult > 0) {
    ans += xorResult & 1;
    xorResult >>= 1;
  }

  return ans;
};

// 2220. Minimum Bit Flips to Convert Number
const start = 10,
  goal = 7;
console.log("Max Flips::", minBitFlips(start, goal));
// Output: 3
// Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
// - Flip the first bit from the right: 1010 -> 1011.
// - Flip the third bit from the right: 1011 -> 1111.
// - Flip the fourth bit from the right: 1111 -> 0111.
// It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
