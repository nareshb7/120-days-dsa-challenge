# Notes for Day 46: Day 46: Binary Tree Paths

## Approach

- `Tree Traversal:` Perform a Depth-First Search (DFS) to traverse the binary tree.
- `Path Construction:` As you traverse, build the path as a string, appending the current node's value.
- `Leaf Node Check:` When a leaf node (node with no children) is reached, add the constructed path to the result list.
- `Recursive Calls:` For non-leaf nodes, continue the DFS by making recursive calls to the left and right children, appending "->" to the path for further nodes

## Complexity

- `Time Complexity: O(N)` Each node in the tree is visited once.
- `Space Complexity: O(H)` The space used by the call stack in the worst case is proportional to the height of the tree H.
  Additional space is used for storing the paths in the result, but this is typically O(N) where N is the number of nodes in the tree, since each node contributes to a path in the worst case

## Key Learnings:

- `DFS in Trees:` Depth-First Search is a common technique for exploring all paths from the root to the leaves in a tree.
- `String Handling:` Efficiently constructing paths as strings during traversal can avoid unnecessary operations.
- `Leaf Node Identification:` Recognizing when a node is a leaf (no children) is crucial for adding paths to the result.
- `Memory Optimization:` Passing the path as a string instead of using arrays can save memory and simplify the logic
