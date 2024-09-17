# Notes for Day 61: Course Schedule

## Approach

- The problem can be modeled as a directed graph where each course is a node, and a directed edge from node bi to node ai means that course ai depends on course bi. The problem asks us to check if this graph contains a cycle.
- `Cycle Detection:` If there is a cycle in the graph, then it's impossible to complete all courses because some courses will end up depending on each other in a loop.
  If there are no cycles, then it is possible to complete all the courses.
- `Graph Representation:` You can represent the graph using an adjacency list, where each course points to the list of courses that depend on it.
- `DFS Approach:` Use depth-first search (DFS) to traverse the graph and detect cycles.
  Maintain a visited array to track the state of each node (unvisited, processing, or processed).
  If a node is encountered while it's still being processed, a cycle is detected

## Complexity

- `Time Complexity:` O(C + P), where C is the number of courses and P is the number of prerequisites. This accounts for building the graph and traversing it during DFS.
- `Space Complexity:` O(C + P), where C is the number of courses and P is the number of prerequisites. This includes the space for the adjacency list and the visited array

## Key Learnings:

- `Graph Representation:` The problem can be modeled as a directed graph, where courses are nodes and prerequisites are directed edges.
- `Cycle Detection:` The core of the problem is checking if the graph contains a cycle. If there is a cycle, it's impossible to complete all courses.
- `Depth-First Search (DFS):` DFS is used to traverse the graph and detect cycles by marking nodes during traversal.
- `Node States:` We use a visited array to track the state of each course:
  0: Unvisited.
  1: Fully processed (no cycle detected).
  2: Being processed (used to detect cycles).
- `Adjacency List:` The graph is represented as an adjacency list, where each course points to the list of courses that depend on it.
- `Cycle Detection Rule:` A cycle is detected if during DFS, a node is revisited while it's still being processed (visited[node] == 2)
