# Notes for Day 59: Number of Islands

## Approach

- `Define the Recursive explore Function:` This function will perform Depth-First Search (DFS) to explore and mark all connected land cells ('1') as visited by turning them into water ('0').
- `The base conditions for the recursive function are:`
  I the current cell is out of bounds (invalid row/column index). If the current cell is water ('0').
  If it's valid land, mark it as visited ('0') and recursively explore in all four possible directions (up, down, left, and right).
- `Iterate Over the Grid:` Loop through each cell in the grid using two nested loops (one for rows and one for columns).
- `Check for Land:` -
- `For each cell in the grid:`
  I the current cell contains land ('1'), it indicates the start of a new island. Increment the island count.
- `Explore the Entire Island:` Call the explore function to recursively mark all connected land cells as visited (turn them into '0').
- `Continue the Search:` Continue scanning through the grid after marking the current island to find any other disconnected islands.
- `Return the Total Count of Islands:` Once all cells in the grid are processed, return the total count of islands.

## Complexity

- `Time Complexity:` O(M _ N), where M is the number of rows and N is the number of columns in the grid.
  Each cell is visited at most once. In the worst case, the DFS visits all M _ N cells (if the entire grid is land).
- `Space Complexity:` O(M _ N), due to the recursion stack in DFS. In the worst case, the entire grid could be one large island, causing the recursion depth to reach M _ N

## Key Learnings:

- `Introduction to Graph Theory:` This problem introduces you to graph traversal techniques (DFS) by representing the grid as a graph where each cell is a node, and edges exist between adjacent land cells.
- `DFS (Depth-First Search):` We used DFS to explore the graph (grid) recursively, marking nodes (cells) as visited by turning them into water. This ensures that connected components (islands) are counted only once.
- `Connected Components:` The core idea is finding connected components in a grid. Each island is a connected component of 1s, and DFS (or BFS) helps in exploring and identifying them.
- `Handling Grid Boundaries:` A crucial part of the solution was handling out-of-bounds indices to ensure the DFS doesn't explore invalid cells.
- `Optimization by Marking Cells:` By marking the visited land cells as water ('0'), you optimized the solution to avoid revisiting the same land multiple times, reducing unnecessary computation.
- `Graph Representation:` You learned how a 2D grid can be treated as a graph where each cell can have edges to its four neighbors (up, down, left, right).
