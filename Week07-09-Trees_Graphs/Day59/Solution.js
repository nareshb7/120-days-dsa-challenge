/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, row, col) => {
  if (
    col < 0 || row < 0 || row > grid.length - 1 || 
    col > grid[row].length - 1 || grid[row][col] == "0"
  ) {
    return;
  }
  grid[row][col] = "0";

  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
};
var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }
  return count;
};

const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
console.log('Num of Islands:::', numIslands(grid))
// Output: 1
