# Notes for Day 45: Invert Binary Tree

## Approach

- Recursive Approach: The problem can be solved using a recursive approach. The main idea is to swap the left and right child nodes of the tree recursively until the entire tree is inverted.
- Base Case: The recursion stops when a null node is reached, as there’s no further node to invert.
- Swapping Nodes: For each node, we store the left child in a temporary variable, then assign the right child to the left, and finally, the value in the temporary variable (original left child) to the right.
- Recursive Inversion: After the nodes are swapped, the function recursively calls itself for the left and right children of the current node to continue the inversion process.
- Return Statement: Finally, the root node is returned, which will now represent the root of the inverted binary tree.

## Complexity

- `Time Complexity: O(n)`, where n is the number of nodes in the binary tree. Each node is visited exactly once during the recursion.
- `Space Complexity:O(h)` in the average case, where h is the height of the tree (space complexity due to recursion stack).
  In the worst case, where the tree is completely unbalanced (like a linked list), the space complexity can be O(n).

## Key Learnings:

- `Understanding Recursion:` This problem helps reinforce the concept of recursion, particularly how the state of a binary tree can be manipulated by recursive function calls.
- `Tree Traversal:` This problem requires traversal of the binary tree, thus giving insight into depth-first traversal (in this case, pre-order traversal).
- `In-place Operations:` The tree is inverted in-place, meaning no additional data structures are required beyond the recursive stack.
- `Base Case Recognition:` Recognizing the appropriate base case (null node) is crucial in preventing infinite recursion.
- `Handling Edge Cases:` Understanding that the solution should handle edge cases, such as when the tree is empty (root is null), or when the tree has only one node
