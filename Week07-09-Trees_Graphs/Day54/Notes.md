# Notes for Day 54: Binary Tree Zigzag Level Order Traversal

## Approach

- Base Case: The function first checks if the root is null. If it is, it returns an empty array since there's no tree to traverse.
- Initialization:
  A queue is used to facilitate level-order traversal (Breadth-First Search, BFS). The root node is initially pushed into the queue.
  A result array will store the final zigzag level order traversal.
  A boolean variable leftToRight is used to track the direction of traversal for each level. It starts as true, meaning the first level will be traversed from left to right.
- While Loop: The loop runs until the queue becomes empty, indicating all nodes have been processed.
- The number of nodes at the current level is stored in size.
- A currentLevel array is initialized to store the values of the nodes at this level.
- For Loop:
  A for loop runs size times to process each node in the current level.
  The node is removed from the front of the queue (using queue.shift()).
  The index determines where to insert the node's value in the currentLevel array:
  If leftToRight is true, values are inserted from left to right (normal order).
  If leftToRight is false, values are inserted in reverse order (right to left).
  The left and right children of the current node (if they exist) are pushed into the queue for the next level.
- After processing all nodes at the current level, the leftToRight flag is toggled to switch the direction for the next level.
- The currentLevel array is pushed into the result array after processing each level.
- After processing all levels, the result array is returned, containing the zigzag level order traversal.

## Complexity

- `Time Complexity:` O(n), where n is the number of nodes in the tree.
  Each node is processed exactly once, and shifting and pushing operations take constant time.
- `Space Complexity:` O(n) for the queue and result array.
  The queue holds at most one level of nodes, which could be up to half the total number of nodes in a complete binary tree (O(n/2) = O(n)).

## Key Learnings:

- `Level-Order Traversal:` This problem uses BFS (level-order traversal) to traverse each level of the tree.
- `Zigzag Pattern:` The zigzag pattern is achieved by alternating the direction of inserting nodes into the currentLevel array using the leftToRight flag.
- `Queue for BFS:` A queue is used to store nodes level by level, ensuring nodes are processed in the correct order.
- `Conditionally Insert in Array:` Using different insertion strategies (left-to-right or right-to-left) based on the value of leftToRight
