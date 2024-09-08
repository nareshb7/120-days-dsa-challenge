# Notes for Day 52: Binary Tree Preorder Traversal

## Approach

- We can achieve preorder traversal recursively by:
- Adding the current root node's value to the result.
- Visiting the left subtree.
- Visiting the right subtree.
- A helper function is used to recursively visit nodes in the correct order.

## Complexity

- `Time Complexity: O(n)` Each node is visited exactly once, where n is the number of nodes in the tree.
- `Space Complexity: O(h)` The space complexity depends on the depth of the recursion stack, which is proportional to the tree's height, h. In the worst case (for a skewed tree), this can be O(n)

## Key Learnings:

- `Recursive Traversal Patterns:` Preorder traversal follows the recursive pattern of visiting the current node, traversing left and then traversing right. This pattern ensures that nodes are visited in the correct order.
- `Divide-and-Conquer Approach:` The recursive method naturally fits the divide-and-conquer strategy, as we divide the tree into smaller subproblems and solve them recursively.
- `Handling Edge Cases:` An empty tree returns an empty list.
  Trees with only one node simply return the value of that node.
- `Tree Structure Consideration:` Preorder traversal can reveal structural information about the tree, such as whether it's a valid BST (in which case the output will be sorted)
