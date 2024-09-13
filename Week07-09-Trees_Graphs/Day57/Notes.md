# Notes for Day 57: Path Sum

## Approach

- We want to find if there exists a path from the root to any leaf node such that the sum of node values along the path equals targetSum.
- Traversal Strategy: We use inorder traversal (Depth First Search, DFS) to explore each path from the root to leaf nodes.
- Steps:
- Base Case:
  If the root is empty (null), return false (since no path exists).
- Leaf Node Check:
  A node is considered a leaf node if it has no left or right children.
  When we reach a leaf node, check if the sum of values along the path equals targetSum.
  If the sum matches, return true. Otherwise, return false.
- Recursive Traversal:
  For non-leaf nodes, recursively traverse the left and right subtrees.
  Add the current node's value to the running sum (count).
- Return Condition:
  If any path in the left or right subtree matches the targetSum, return true.
  If no valid path is found, return false at the end.

## Complexity

- `Time Complexity:` O(N), where N is the number of nodes in the tree.
  We visit each node exactly once during the traversal, making the time complexity linear with respect to the number of nodes.
- `Space Complexity:` O(H), where H is the height of the tree.
  In the worst case (for a skewed tree), the recursion stack will hold all nodes along the longest path, which can be O(N) in the case of a skewed tree.
  In the best case (for a balanced tree), the space complexity will be O(log N) due to the depth of the recursion stack

## Key Learnings:

- `DFS Traversal (Inorder):` The problem demonstrates how to use a recursive DFS (Depth First Search) approach to traverse a binary tree and accumulate values while progressing along each path.
  Understanding how to break down the problem recursively is essential for tree-based problems.
- `Handling Edge Cases:` It’s important to account for edge cases like an empty tree or a single node tree where the root itself might be a leaf.
- `Recursive Thinking:` For each node, we check the sum condition recursively and evaluate whether the problem can be reduced to simpler subproblems (left and right subtree).
  This problem reinforces the concept of solving problems recursively in trees, which is a fundamental approach for many tree problems.
- `Leaf Node Detection:` Recognizing leaf nodes (nodes without children) and taking appropriate actions is a key part of solving many tree traversal problems, as leaf nodes often represent base cases in recursive problems.
- `Efficient Path Sum Calculation:` The approach efficiently calculates the sum of node values along a path by accumulating the sum during traversal instead of recalculating paths from scratch, saving both time and space
