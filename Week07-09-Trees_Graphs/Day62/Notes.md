# Notes for Day 62: Minimum Height Trees

## Approach

- `Initialization:` Create two arrays: counts to store the degree (number of connections) of each node, and links to store XOR results of connections to help remove nodes later.
- `Build the graph:` For each edge, update the counts array to track how many nodes each node is connected to.
  Use XOR operation to store connections in the links array for efficient removal.
- `Find the leaves:` Push all nodes with only one connection (i.e., leaves) into a queue Qu.
- `Iterative removal of leaves:` Start a BFS-like process where in each iteration you remove the leaves (nodes with 1 connection) and update their neighbor's connection.
  Continue this process layer by layer, where the leaves of each layer are removed until you're left with 1 or 2 nodes.
- `Track the distances:` For each node left after removing leaves, calculate its distance (height of the tree).
  Track the maximum distance (maxDist).
- `Find the result:` Return all the nodes that have the maximum distance (maxDist), as they are the roots of the Minimum Height Trees

## Complexity

- `Time Complexity:`
  Building the graph: You loop through the edges once, which takes O(n), where n is the number of nodes (since there are n−1 edges for a connected tree).
  Removing leaves: Each node and edge is processed at most once. As leaves are removed and neighbors are updated, each edge is traversed, and each node is visited once, resulting in O(n) for this process.
  Overall time complexity: `O(n).`
- `Space Complexity:`
  You use arrays counts, links, and dists, each of size n, resulting in O(n) space.
  Additionally, you use a queue Qu, which at most holds n elements. So, the space complexity is `O(n)`

## Key Learnings:

- `Understanding Minimum Height Trees (MHTs):` The problem is about finding the tree roots that minimize the height of the tree.
  If you think about it, the roots of MHTs are located in the middle of the longest path in the tree (since they minimize the maximum depth).
- `BFS-like Approach to Trim the Tree:` By trimming the leaves level by level, you're effectively converging towards the center(s) of the tree.
  The BFS-like process is efficient for this problem because you gradually remove the outermost nodes and only process the internal structure.
- `XOR Operation for Efficient Node Removal:` The use of XOR in the links array is an optimization to simplify the removal of nodes and updating neighbors.
  Instead of maintaining full adjacency lists, XOR helps track which nodes are connected in a way that enables fast updates.
- `Handling Multiple Solutions:` A tree can have one or two roots for MHTs (at most 2 nodes remain after trimming all leaves).
  If one node remains, it is the root; if two nodes remain, both can be the roots. These are typically the middle nodes of the tree's longest path.
- `Graph Representation:` It's essential to represent the graph in an efficient way (here using degree counts and XOR-based adjacency) to ensure the algorithm runs optimally
