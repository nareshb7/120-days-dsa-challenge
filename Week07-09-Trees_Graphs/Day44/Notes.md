# Notes for Day 44: Symmetric Tree

## Approach

- Initial Call: Start by checking if the tree is symmetric around its root. This is done by comparing the left subtree and the right subtree of the root node.
- Recursive Function (dfs): Define a recursive function dfs(left, right) that checks whether the subtree rooted at left is a mirror reflection of the subtree rooted at right.
- Base Cases: Both Nodes Are Null: If both left and right nodes are null, then they are symmetric (i.e., they are both absent). Return true.
  One Node Is Null: If only one of the nodes is null, then the tree is not symmetric. Return false.
- Recursive Case: Compare Values: If both nodes exist and their values are equal, then continue to check their children:
  Compare left.left with right.right (outer pair).
  Compare left.right with right.left (inner pair).
  If any of these comparisons fail, return false.
- Final Result: If all comparisons are successful, return true, meaning the tree is symmetric

## Complexity

- `Time Complexity: O(n)` The algorithm visits each node exactly once, where
  n is the total number of nodes in the tree. Hence, the time complexity is linear.
- `Space Complexity: O(h)` The space complexity is determined by the recursion stack, which can go as deep as the height
  h of the tree. In the worst case, where the tree is completely unbalanced, h=O(n). In a balanced tree, h=O(logn).

## Key Learnings:

- `Understanding Symmetry in Trees:` A tree is symmetric if the left subtree is a mirror reflection of the right subtree. This requires not just matching values, but also matching the structure and node positions.
- `Recursion for Tree Problems:` Recursive solutions are a natural fit for many tree problems, as trees themselves have a recursive structure. Here, we’re breaking down the problem by comparing corresponding nodes in the left and right subtrees.
- `Base Cases in Recursion:` Handling the base cases (like null nodes) is crucial to avoid errors like null pointer exceptions. Here, the symmetry check stops early if any base case condition is not satisfied.
- `Efficiency:` The solution is efficient for both time and space in most practical cases, especially when dealing with balanced trees. However, in cases of deep or skewed trees, the recursive stack can become large, which might necessitate an iterative approach.
