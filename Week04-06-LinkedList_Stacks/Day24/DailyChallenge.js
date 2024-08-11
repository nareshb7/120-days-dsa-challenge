/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minDays = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  function countIslands() {
      let visited = Array.from({ length: m }, () => Array(n).fill(false));
      let islandCount = 0;

      function dfs(x, y) {
          if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0 || visited[x][y]) {
              return;
          }
          visited[x][y] = true;
          dfs(x + 1, y);
          dfs(x - 1, y);
          dfs(x, y + 1);
          dfs(x, y - 1);
      }

      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (grid[i][j] === 1 && !visited[i][j]) {
                  islandCount++;
                  dfs(i, j);
              }
          }
      }
      return islandCount;
  }

  if (countIslands() !== 1) return 0;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              grid[i][j] = 0;
              if (countIslands() !== 1) return 1;
              grid[i][j] = 1;
          }
      }
  }
  return 2;
};

// 1568. Minimum Number of Days to Disconnect Island
const grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
console.log("Min no of days to disconnect island::", minDays(grid))

// Output: 2
// Explanation: We need at least 2 days to get a disconnected grid.
// Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.