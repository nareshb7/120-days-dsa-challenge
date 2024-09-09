# Notes for Day 53: Binary Tree Postorder Traversal

## Approach

- We can achieve postorder traversal recursively by:
- Visiting the left subtree.
- Visiting the right subtree.
- Adding the current root node's value to the result.
- A helper function is used to recursively visit nodes in the correct order.

## Complexity

- `Time Complexity: O(n)` Each node is visited exactly once, where n is the number of nodes in the tree.
- `Space Complexity: O(h)` The space complexity depends on the depth of the recursion stack, which is proportional to the tree's height, h. In the worst case (for a skewed tree), this can be O(n)

## Key Learnings:

- `Recursive Traversal Patterns:` Postorder traversal follows the recursive pattern of the traversing left, traversion right and then current node. This pattern ensures that nodes are visited in the correct order.
- `Divide-and-Conquer Approach:` The recursive method naturally fits the divide-and-conquer strategy, as we divide the tree into smaller subproblems and solve them recursively.
- `Handling Edge Cases:` An empty tree returns an empty list.
  Trees with only one node simply return the value of that node.
