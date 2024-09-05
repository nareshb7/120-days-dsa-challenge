# Notes for Day 49: Binary Tree Level Order Traversal

## Approach

- In level order traversal, we process each node level by level, starting from the root.
- We use a queue to keep track of the nodes at each level.
- BFS explores all nodes at the current level before moving to the next level, making it ideal for level order traversal.
- How the queue works:
- We start by adding the root node to the queue.
- For each node, we process it by:
- Removing it from the front of the queue.
- Adding its value to the current level's result.
- Adding its left and right children (if they exist) to the back of the queue for future processing.
- We repeat this process for all nodes at the current level, then move to the next level (all nodes that were added to the queue in the previous step)

## Complexity

- Time Complexity: O(n), where n is the number of nodes (since each node is processed once).
- Space Complexity: O(n), due to the queue that holds nodes at each level.

## Key Learnings:

1. `Understanding Level Order Traversal:`
   Level order traversal requires visiting each node of a binary tree level by level (from top to bottom and left to right at each level).
   This problem introduces the concept of Breadth-First Search (BFS) as the best approach to traverse a tree level by level.
2. `Use of BFS and Queue:`
   BFS is naturally suited for level order traversal because it processes nodes in a "wide" manner, going through all nodes at one level before proceeding to the next.
   Queue is a crucial data structure for BFS because it maintains the order of nodes to be processed. Nodes are added from left to right, and processed in a first-in, first-out (FIFO) manner.
3. `Iterative Approach over Recursive:`
   While recursion can be used for tree traversals like inorder, preorder, or postorder, level order traversal is best handled with iteration (BFS with a queue). This avoids the limitations of recursion depth for large trees and prevents potential stack overflow issues.
4. `Handling Different Levels of the Tree:`
   The key challenge is ensuring nodes are processed at the correct levels. By tracking the size of each level (using queue.length), you ensure nodes at each level are processed before moving to the next level.
5. `Dynamic Result Storage:`
   The result must be stored as a nested array (result[]), where each inner array represents a level of the tree. This helps in organizing the output to reflect the structure of the tree.
6. `Space and Time Complexity:`
   Time Complexity: O(n), where n is the number of nodes in the tree. Every node is processed exactly once.
   Space Complexity: O(n), as we need additional space to store nodes in the queue, which at most holds the nodes of the widest level in the tree.
7. `Tree Data Structure:`
   Working with trees helps improve your understanding of how hierarchical data structures work and how you can traverse them using different strategies (DFS, BFS).
   Familiarity with tree-related problems is essential for many coding interviews, especially in companies like Google or Microsoft, as they frequently appear in problem sets.
8. `Edge Case Handling:`
   You learn to handle edge cases like:
   An empty tree (where the root is null).
   Trees with only one node.
   Trees that are skewed to one side (all left children or all right children).
9. `Adaptation for Variants:`
   This problem helps prepare you for variants of tree traversal problems, such as:
   Zigzag level order traversal (alternating between left-to-right and right-to-left at each level).
   Reverse level order traversal (starting from the bottommost level). 10.` Building Problem-Solving Intuition:`
   You build an intuition for recognizing when BFS or DFS is appropriate based on the problem.
   In this case, recognizing the need to traverse all nodes at a given level suggests a BFS approach with a queue
