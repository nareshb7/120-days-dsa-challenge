# Notes for Day 88: Sudoku Solver

## Approach

- `Understand the Problem:` You are given a 9x9 grid.
  Some cells are pre-filled with numbers between 1 and 9.
  Empty cells are marked with a dot (".").
  The goal is to fill in the empty cells such that:
  Each row contains the digits 1 to 9 with no repetition.
  Each column contains the digits 1 to 9 with no repetition.
  Each 3x3 sub-grid contains the digits 1 to 9 with no repetition.
- `Backtracking Algorithm:` Choose an empty cell and attempt to place a valid number in that cell.
- `Try all possible numbers (1-9):`
  For each number, check if it is a valid choice for the cell The number must not be in the same row.
  The number must not be in the same column.
  The number must not be in the same 3x3 sub-grid.
  If the number is valid, place it in the cell and move on to the next empty cell.
  Recursively repeat the process for the next empty cell.
  If you find a valid solution, return it.
  If no number works in the current cell, backtrack by undoing the last placed number and try a different number.
- `Base Case for Recursion:` If all cells are filled (i.e., you have successfully placed numbers in all cells), then the puzzle is solved.
- `Steps to Implement:` Identify empty cells (cells with ".").
  Try placing numbers 1-9 in the empty cell.
  Check if the number is valid in the current row, column, and 3x3 box.
  If valid, place the number and recursively solve for the remaining cells.
  If no number fits, undo the move (backtrack) and try the next possibility.
- `Stopping Condition:` Once the entire board is filled correctly, the algorithm stops

## Complexity

- `Time Complexity:` In the worst case, for each empty cell, we have 9 possible digits to try.
  Since there are up to 81 cells, the time complexity is approximately O(9 ^ 81 ) However, the actual number of possibilities is much smaller due to the constraints from rows, columns, and sub-grids, which eliminate many possibilities early.
  Practical performance: The algorithm is much faster in real scenarios as it quickly prunes invalid options.
- `Space Complexity:` The algorithm uses constant space for the board, which is always 9x9.
  In addition, the recursion stack can go as deep as the number of empty cells, so the space complexity is O(81) in the worst case, which simplifies to O(1) since it is a fixed-size problem

## Key Learnings

- `Backtracking` is a powerful method for solving constraint satisfaction problems like Sudoku.
  It involves trying all possibilities but efficiently discarding invalid options as soon as they arise (pruning).
- `Sudoku has multiple constraints:` Each row, each column, and each 3x3 sub-grid must have all unique digits.
- `Validating each number placement:` For each cell, we must check the row, column, and sub-grid to ensure the number can be placed.
- `Recursion explores all paths:` The algorithm tries placing each valid number, and if it leads to a dead end, it undoes the choice (backtracks) and tries the next possibility.
- `Efficiency comes from pruning:` Although the theoretical complexity is very high, the recursive algorithm quickly prunes invalid choices, making it efficient for most real-world Sudoku puzzles.
- `Understanding base cases:` The base case for backtracking is when all cells are filled, meaning the puzzle is solved.
- `Backtracking is not brute force:` Even though it explores many possibilities, backtracking eliminates invalid paths early, saving time compared to pure brute force methods
