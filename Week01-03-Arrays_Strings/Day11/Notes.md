# Notes for Day 11: Find Minimum in Rotated Sorted Array (Binary Search)

## Approach

- Check if the array is empty. If so, return -1.
- If the array has only one element, return that element as it is the minimum.
- Initialize two pointers: left at the beginning and right at the end of the array.
- Use a while loop with the condition left < right. The loop runs until the two pointers meet.
- Calculate the midPoint to divide the array into two halves.
- Check if the midPoint element is the minimum by comparing it with the previous element.
- If the left half is sorted and the midPoint is greater than the rightmost element, move the left pointer to midPoint + 1.
- Otherwise, move the right pointer to midPoint - 1.
- After the loop, return the element at the left pointer as it represents the minimum element.

## Complexity
- `Time Complexity: O(log n): `This is because we’re using binary search, which halves the search space with each step.

## Key Learnings
- `Binary Search Technique:` This technique is effective for problems that require dividing the search space into halves.
- `Handling Edge Cases:` Checking for empty arrays and single-element arrays ensures the solution is robust.
