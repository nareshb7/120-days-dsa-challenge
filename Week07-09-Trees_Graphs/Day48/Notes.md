# Notes for Day 48: Lowest Common Ancestor of a Binary Search Tree

## Approach

- `Base Case:` If the root is null, return null because there's no tree to search.
- `Get the Current Node Value:` Store the current node’s value in the variable curr.
- `Compare Values:`
- `Both p and q are Greater:` If both p and q have values greater than curr, it means both nodes must be in the right subtree.
  So, you move to the right child by calling lowestCommonAncestor(root.right, p, q).
- `Both p and q are Smaller:` If both p and q have values smaller than curr, it means both nodes must be in the left subtree.
  So, you move to the left child by calling lowestCommonAncestor(root.left, p, q).
- `Found the Lowest Common Ancestor:` If neither of the above conditions is true, it means that p and q lie on different sides of the current node. This makes the current node (root) the Lowest Common Ancestor (LCA), so you return root.

## Complexity

- `Time Complexity:` O(h), where h is the height of the tree.The reason for this complexity is that in each recursive call, you're moving down one level of the tree.
  In the worst case, you might need to traverse from the root to a leaf node, which takes h steps.
  In a balanced Binary Search Tree (BST), the height h is approximately log(n), where n is the number of nodes.
  In an unbalanced BST, the height h could be as large as n in the worst case.
- `Space Complexity:` O(h), where h is the height of the tree.
  This space complexity is due to the recursive stack. In the worst case, the depth of the recursion could be equal to the height of the tree.

## Key Learnings:

- `In a BST, for any node:`
  All values in its left subtree are smaller All values in its right subtree are larger.
  This property allows you to efficiently find nodes or determine relationships between nodes.
- `Recursive Approach:` Using recursion helps break down the problem into smaller subproblems. In this case, you're checking smaller subtrees to find the Lowest Common Ancestor (LCA).
- `Binary Tree Traversal:` Understanding tree traversal is crucial. This problem primarily uses a modified version of a binary search where you navigate left or right depending on the values of p and q.
- `Divide and Conquer:` The problem leverages a divide and conquer strategy by narrowing down the search to the left or right subtree, which makes the solution efficient.
- `Balanced vs. Unbalanced Trees:` The efficiency of the solution can vary significantly depending on whether the BST is balanced. Balanced trees ensure that the height h is minimal, making operations faster.
- `Understanding LCA in Trees:` The concept of Lowest Common Ancestor is crucial in many tree-related problems. It’s a common pattern that can be applied to various other problems involving tree structures
