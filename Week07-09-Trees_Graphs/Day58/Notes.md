# Notes for Day 58: Find Mode in Binary Search Tree

## Approach

- `Use a Hash Map for Frequency Count:` You traverse the tree, keeping track of the frequency of each node's value using a hash map. The key will be the node's value, and the value will be the frequency of that node's value.
- `Track Maximum Frequency:` While traversing the tree, update a variable max to keep track of the highest frequency encountered so far.
- `Recursive Tree Traversal:` Perform a depth-first traversal of the tree. Start at the root node and traverse its left and right children. During traversal, you will update the frequency of each node's value in the hash map.
- `Traverse the BST:` A helper function traverse is used to perform the tree traversal. This function checks the frequency of each node's value in the hash map and updates it accordingly.
- `Collect Modes:` After the tree traversal, iterate over the hash map. Collect all keys (node values) that have a frequency equal to max.
- `Edge Case:` If the tree is empty (root is null), return an empty array.

## Complexity

- Time Complexity: O(n), where n is the number of nodes in the tree. This is because each node is visited exactly once during the traversal.
- Space Complexity: O(n), where n is the number of unique node values. The space is used by the hash map and the recursion stack.

## Key Learnings:

- `Binary Search Tree (BST) Traversal:` Tree traversal techniques like Depth-First Search (DFS) are essential for solving problems related to trees. In this case, the tree is traversed using recursion to visit every node.
  In-order traversal would yield sorted values for a BST, but here, we used a generic DFS approach.
- `Hash Map for Frequency Counting:` A hash map (object) is an efficient way to count frequencies of elements. This technique can be applied to any frequency-based problem.
  Key-value mapping allows for constant-time access and updates, making it optimal for problems involving counting occurrences.
- `Tracking Maximum Frequency:` A separate variable (max) is used to track the maximum frequency while traversing the tree. This reduces the need for multiple passes over the data, improving efficiency.
  Updating the max value during traversal ensures that you have the mode information after a single traversal
