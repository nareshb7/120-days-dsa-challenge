# Notes for Day 74: Maximum Subarray

## Approach

- `Initialize Variables:` maxSum: Start by assuming the first element of the array is the maximum sum. This will store the maximum subarray sum encountered so far.
  currentSum: Initialize this to 0. It will track the sum of the current subarray.
- `Iterate Through the Array:` For each element in the array:
  Add the element to currentSum.
  If currentSum is greater than maxSum, update maxSum to the value of currentSum.
  If currentSum becomes negative, reset currentSum to 0. (If the current subarray sum is negative, it's better to start fresh from the next element.)
- `Return the Result:` After processing all elements, return maxSum as the largest subarray sum

## Complexity

- `Time Complexity: O(n)` We are iterating through the array just once. For each element, we perform constant time operations (addition, comparison, etc.), so the time complexity is linear, or O(n), where n is the number of elements in the array.
- `Space Complexity: O(1)` We are using only a few extra variables (maxSum and currentSum), regardless of the size of the input array. This means the space complexity is constant, or O(1)

## Key Learnings:

- `Kadane's Algorithm:` This approach is an implementation of Kadane's Algorithm, which is a well-known algorithm for finding the maximum subarray sum in linear time.
- `Greedy Approach:` At each step, we make a greedy decision: if the current subarray sum (currentSum) becomes negative, we reset it to 0, because continuing with a negative sum would reduce the potential maximum sum.
- `Handling Negative Numbers:` Even if the array contains all negative numbers, the algorithm handles it by initializing maxSum with the first element. This ensures that the algorithm can return the correct result even when no positive subarray exists.
- `Optimal Efficiency:` The algorithm runs in O(n) time and uses O(1) space, making it optimal for solving the maximum subarray problem efficiently, even for large input arrays.
- `Key Observations:` When the sum of the current subarray becomes negative, it's better to reset and start a new subarray, because continuing with a negative sum will only decrease the total
