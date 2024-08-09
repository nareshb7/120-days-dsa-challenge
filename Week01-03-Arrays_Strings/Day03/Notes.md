# Notes for Day 03: Kth Largest Element in an Array

## Approach

### 1.Sorting

- Sort the array and return the k-th largest element. This has a time complexity of O(n log n) due to sorting.

### 2.Min-Heap (Priroity Queue)

- Use a min-heap of size k. This has a time complexity of O(n log k) and space complexity of O(k).

### 3.QuickSelect

- This is an efficient solution with an average time complexity of O(n) and a worst-case time complexity of O(n²), similar to the Quickselect algorithm for the k-th smallest element but adjusted for finding the k-th largest.

## Complexity

- Time complexity: O(n log n)
- Space complexity: O(k)

## Key Learnings

- Sorting Algorithm
- Min-Heap (Priroity Queue)
- Array Partitioning
- Recursion
- Space vs Time
