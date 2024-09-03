# Notes for Day 47: Sum of Left Leaves

## Approach

- Initialize a function that takes the root node as input.
- Define a helper function that recursively traverses the tree.
- In the helper function, check if the current node is a left leaf (left child with no children).
- If it's a left leaf, add its value to the sum.
- Recursively call the helper function on both left and right children.
- Return the total sum.

## Complexity

- `Time Complexity: O(n)` The algorithm visits each node of the binary tree exactly once, where n is the total number of nodes in the tree.
- `Space Complexity: O(h)` The space complexity is determined by the depth of the recursion stack.
  In the worst case, the depth of the recursion stack will be equal to the height of the tree h.
  For a balanced binary tree, the height h is O(log n), but in the worst case (e.g., a skewed tree), h could be O(n)

## Key Learnings:

- `Understanding Tree Traversals:` This problem emphasizes the importance of depth-first search (DFS) in tree traversal. DFS can be applied in various forms, such as pre-order, in-order, and post-order, depending on the problem requirements.
- `Leaf Node Identification:` Identifying leaf nodes in a binary tree is a common operation. In this problem, a leaf node is defined as a node with no children, and we focus specifically on left leaves.
- `Recursive Thinking:` Recursion is a natural fit for tree problems due to their hierarchical structure. Learning to solve problems using recursion helps in breaking down complex problems into simpler subproblems.
- `Boolean Flags in Recursion:` Using a boolean flag (isLeft) within recursive functions is a useful technique to track the state or type of a node during traversal. This method can be generalized to solve other problems where a distinction between different types of nodes is necessary.
- `Binary Tree Properties:` The problem reinforces the understanding of binary tree properties and how to manipulate or query them effectively.
- `Handling Edge Cases:` Edge cases like empty trees or trees with a single node must always be considered. In this problem, checking for null nodes and ensuring the root is non-null are crucial steps
