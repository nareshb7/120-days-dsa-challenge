/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = new Array(n + 1).fill(-1);

  const recursion = (n) => {
    if (n == 0 || n == 1) return 1;
    if (memo[n] !== -1) return memo[n];

    memo[n] = recursion(n - 1) + recursion(n - 2);

    return memo[n];
  };

  return recursion(n);
};

const n = 2;
console.log('Ways to climb::', climbStairs(n))
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
