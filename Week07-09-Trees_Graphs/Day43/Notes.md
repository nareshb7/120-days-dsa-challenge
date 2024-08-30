# Notes for Day 43: Maximum Depth of Binary Tree

## Approach

- Base Case: If the current node (root) is null, it means you've reached beyond a leaf node, so the depth is 0.
- Recursive Case: Recursively find the maximum depth of the left subtree (l) and the right subtree (r).
- The depth of the current node is 1 (for the current node itself) plus the maximum of the depths of the left and right subtrees.
- Return Value: The function returns 1 + Math.max(l, r), which gives the depth for the current subtree

## Complexity

- `Time Complexity:` O(N), where N is the number of nodes in the tree.
  This is because the function visits each node exactly once.
- `Space Complexity:` O(H), where H is the height of the tree.
  The space complexity is determined by the depth of the recursion stack. In the worst case, the tree is skewed, and H = N, making the space complexity O(N). In the best case, the tree is balanced, and H = log N, making the space complexity O(log N).

## Key Learnings:

- `Recursion:` The problem is naturally recursive. You solve the problem for a tree by breaking it down into smaller subproblems for the left and right subtrees.
- `Divide and Conquer:` The approach divides the problem into subproblems (finding the depth of the left and right subtrees) and then combines their results to form the solution.
- `Binary Tree Traversal:` This problem illustrates the concept of traversing a binary tree. The function traverses the entire tree to compute the maximum depth.
- `Understanding of Tree Structures:` This problem helps solidify the understanding of binary trees, specifically how they can be navigated and the properties that can be computed (like depth)
