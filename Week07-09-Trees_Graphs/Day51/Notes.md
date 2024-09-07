# Notes for Day 51: Binary Tree Inorder Traversal

## Approach

- Traversal of the Tree: For each node in the binary tree, check if the linked list starting from head matches a downward path in the tree.
- Recursive Check for Sub-path: For each node, compare it with the current node of the linked list. If they match, recursively check the left and right subtrees for the next node in the linked list.
- Handling Base Cases: If you reach the end of the linked list (head == null), it means the list is found as a sub-path, and you return true.
  If you reach a null tree node but haven’t completed the linked list, return false.
- Tree Traversal: If the linked list does not match the current tree node, recursively check the left and right subtrees to see if the sub-path starts elsewhere

## Complexity

- `Time Complexity:`
  In the worst case, for each node in the binary tree, you might need to traverse the entire linked list, which would result in a time complexity of O(N \* M), where:
  N is the number of nodes in the binary tree.
  M is the number of nodes in the linked list.
  This happens when the tree and the list are long, and you have to check many nodes before finding a sub-path or confirming there isn't one.
- `Space Complexity:`
  The space complexity is determined by the depth of the recursion stack.
  In the worst case (for a skewed tree), the recursion depth could be O(N), where N is the number of nodes in the tree.
  Additionally, for every match, a second recursive call is made for the linked list, which can go as deep as O(M) in the worst case. However, this only applies to one path at a time, so the overall space complexity is O(N + M).

## Key Learnings:

- `Divide-and-Conquer Strategy:` The recursive approach naturally fits the divide-and-conquer technique, breaking the problem into smaller subproblems — checking if the sub-path starts from the current node, and if not, looking for it in the left and right subtrees.
- `Early Exit in Recursive Calls:` As soon as you find the linked list as a sub-path, you can exit early, which prevents redundant traversals.
- `Handling Linked Lists and Trees Together:` This problem helps you practice working with two recursive data structures (a linked list and a binary tree) simultaneously, showing how to synchronize recursion on two different structures.
- `Base Case Design:` Correct base cases are crucial in recursion to ensure termination and correctness. For instance, checking if the linked list is completely matched (head == null) or if the binary tree traversal reaches a null node.
