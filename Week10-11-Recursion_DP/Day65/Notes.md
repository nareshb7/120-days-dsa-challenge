# Notes for Day 65: Unique Paths

## Approach

- `Problem Overview:` You are given a grid with m rows and n columns. You start at the top-left corner and need to reach the bottom-right corner. You can only mov either down or right. The task is to count the number of unique paths to reach the destination.
- `Dynamic Programming Table Setup:` A 2D array DP is created to store the number of ways to reach each cell in the grid.
  This table will have m + 1 rows and n + 1 columns because we add extra rows and columns for easier boundary checks.
- `Initialization:` The first row and first column of the grid are set to 0 because there's no valid way to start from there except for the top-left corner.
- The cell DP[1][1] is initialized to 1 because there's exactly one way to be at the starting point.
- `Filling the DP Table:` For each cell DP[i][j] (representing a cell in the grid), calculate the number of ways to reach it by adding:
  The number of ways to reach the cell directly above (DP[i - 1][j]).
  The number of ways to reach the cell to the left (DP[i][j - 1]).
  This is because you can only move down or right.
- `Edge Cases:` When i is 0 or j is 0, it's not a valid move, so those cells are initialized to 0.
- `Final Output:` Once the DP table is filled, the bottom-right corner DP[m][n] contains the total number of unique paths from the start to the end

## Complexity

- `Time Complexity:` The time complexity is O(m \* n).
  This is because we are filling up an m x n table, and for each cell, we are performing a constant-time operation (just adding values from the top and left).
- `Space Complexity:` The space complexity is O(m _ n).
  We are using a 2D DP table that has m rows and n columns, so it takes m _ n space

## Key Learnings:

- `Dynamic Programming (DP):` DP is a technique to break down a complex problem into smaller, overlapping subproblems.
  It stores the results of these subproblems to avoid redundant calculations, improving efficiency.
- `Table (DP Array) Initialization:` The first row and first column are initialized to 1, because there's only one way to move along the border (either all the way down or all the way right).
- `Recurrence Relation:` The value of each cell depends on the sum of the values from the cell above it and the cell to its left.
  This is because you can only arrive at any given cell from those two directions (down or right).
- `Efficient Path Calculation:` Instead of trying to manually explore all possible paths, we use the DP table to count paths in an efficient manner.
- `Avoiding Redundant Calculations:` By filling up the DP table incrementally, we avoid recalculating paths for cells multiple times, which would happen in a recursive solution.
- `Boundary Conditions:` Handling edge cases (like the first row and column) is crucial in grid-based problems
