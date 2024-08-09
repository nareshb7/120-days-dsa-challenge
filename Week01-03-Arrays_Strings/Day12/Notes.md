# Notes for Day 12: Search in Rotated Sorted Array (Binary Search)

## Summary:
- Find the index of the smallest element (the rotation point).
- Determine in which part of the array the target might be.
- Perform a binary search in the correct half of the array to find the target.

## Approach

- If the array is empty, return -1.
- Initialize left and right pointers to the start and end of the array, respectively.
- Finding the Rotation Point
### Calculate the midpoint.
- If the midpoint element is greater than the rightmost element, the rotation point must be to the right of the midpoint.
- Otherwise, it is to the left or could be the midpoint itself.
### Determine Search Boundaries:
- After finding the rotation point (start), reset left and right.
- Determine which half of the array (from start to right or from left to start) the target lies in.
- If the target is within the range from the rotation point to the end of the array, set left to start.
- Otherwise, set right to start.
### Binary Search in the Correct Half:
- Calculate the midpoint.
- If the midpoint element equals the target, return the midpoint index.
- If the midpoint element is less than the target, move the left pointer to midPoint + 1.
- If the midpoint element is greater than the target, move the right pointer to midPoint - 1.
- If the target is not found, return -1.

## Complexity
- `Time Complexity: O(log n): `This is because we’re using binary search, which halves the search space with each step.

## Key Learnings
- `Binary Search Technique:` This technique is effective for problems that require dividing the search space into halves.
- `Handling Edge Cases:` Checking for empty arrays and single-element arrays ensures the solution is robust.
