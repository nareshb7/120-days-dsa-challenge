# Day 60: Clone Graph

## Problem Statement

- Given a reference of a node in a connected undirected graph.
- Return a deep copy (clone) of the graph.
- Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

## Example

1. **Example 1:**

- Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
- Output: [[2,4],[1,3],[2,4],[1,3]]
- Explanation: There are 4 nodes in the graph.
  1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
  2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
  3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
  4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

2. **Example 2:**

- Input: adjList = [[]]
- Output: [[]]
- Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

# Daily Challenge - 539. Minimum Time Difference
