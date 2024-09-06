# Notes for Day 50: Validate Binary Search Tree

## Approach

- To validate a binary search tree (BST), the key is that for each node in the tree:
  The value of the left subtree's nodes should be less than the current node's value.
  The value of the right subtree's nodes should be greater than the current node's value.
- The recursive approach ensures that:
  The left child of a node is within the valid range (min to node.val).
  The right child of a node is within the valid range (node.val to max).
- Recursive Steps:
  Start at the root node.
  For each node, check if the node's value lies between the min and max bounds.
  Recursively check the left subtree, updating the upper bound (max becomes the current node's value).
  Recursively check the right subtree, updating the lower bound (min becomes the current node's value).
  If any node violates the rule (its value is not within the expected bounds), return false.
  If all nodes are valid, return true.

## Complexity

- Time Complexity: O(n), Each node in the tree is visited exactly once.
- Space Complexity: O(h), The space complexity is determined by the depth of the recursion stack

## Key Learnings:

- `BST Property:` A Binary Search Tree maintains the property that for any node, the left subtree contains only values smaller than the node’s value, and the right subtree contains only values greater than the node’s value.
- `Recursive Bound Propagation:` You must propagate min and max bounds as you traverse the tree, making sure each node’s value is within the correct range.
- `Edge Cases:`
  An empty tree (null root) is a valid BST.
  Trees with a single node are always valid BSTs.
  Be cautious of edge cases where nodes have the same value, as equal values should not exist in a valid BST.
  Recursion Depth: This approach relies on recursion, and the recursion depth depends on the height of the tree. In unbalanced trees, this can lead to performance issues or even stack overflow in environments with limited recursion depth
