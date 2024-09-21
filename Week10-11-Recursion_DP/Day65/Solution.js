/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  // first create a DP
  const DP = [];
  for (let i = 0; i <= m; i++) {
      DP[i] = [];
  }
  
  for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
          if (i === 0 || j === 0) {
              DP[i][j] = 0;
          } else if (i === 1 && j === 1) {
              DP[i][j] = 1;
          } else {
              const sum = DP[i - 1][j] + DP[i][j - 1];
              DP[i][j] = sum;
          }
      }
  }
  
  return DP[m][n];
};

const m = 3, n = 7
console.log('Unique paths::', uniquePaths(m,n))
// Output: 28