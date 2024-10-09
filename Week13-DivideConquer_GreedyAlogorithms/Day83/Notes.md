# Notes for Day 83: Sort an Array

## Approach

- `1. Divide:`
The array is divided into two halves recursively until each subarray contains a single element or is empty.
In the function mergeSort, you calculate the middle index (mid) of the current array and recursively apply merge sort to the left and right halves.
The base case of the recursion is when the left index is greater than or equal to the right index, meaning the subarray has one or no elements.
- `2. Conquer (Merge):`
After splitting the array, the merge function combines the sorted left and right halves back together.
Two temporary arrays, leftArray and rightArray, are created to hold the elements of the left and right subarrays.
The elements of these two subarrays are compared, and the smaller element is placed in the original array in a sorted order.
- `3. Combine:`
After sorting both halves, the merge function merges them into a sorted array. This is done by repeatedly comparing the smallest unmerged elements from each half and copying them into the original array

## Complexity

- `Time Complexity:`
Best Case: O(n log n)
Average Case: O(n log n)
Worst Case: O(n log n)
Explanation: The array is divided into halves (log n divisions) and each division takes linear time (n) to merge.

- `Space Complexity:` O(n): Extra space is required to store the temporary arrays (leftArray and rightArray) used in the merge process

## Key Learnings:

- `Divide and Conquer Approach:` The problem is divided into smaller subproblems (halves of the array) and then solved recursively.
- `Recursive Implementation:` Merge sort is implemented using recursion to break the array down to individual elements and merge them back in sorted order.
- `Stable Sorting Algorithm:` Merge sort preserves the relative order of elements with equal keys, making it a stable sorting algorithm.
- `Consistent Time Complexity:` Merge sort always runs in O(n log n), regardless of the input (sorted, reverse-sorted, or random array).
- `Extra Space Required:` The algorithm requires additional space for the temporary arrays, which results in a space complexity of O(n), unlike in-place sorting algorithms like QuickSort.
- `Suitable for Linked Lists:` Merge sort is more efficient than algorithms like QuickSort when working with linked lists, as it doesn’t require random access to elements