/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  let left = 0,
    right = n - 1;

  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }
  if (left === n - 1) {
    return 0;
  }

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let shortest = Math.min(n - left - 1, right);

  let i = 0,
    j = right;

  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      shortest = Math.min(shortest, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return shortest;
};

// 1574. Shortest Subarray to be Removed to Make Array Sorted

// Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.
// Return the length of the shortest subarray to remove.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: arr = [1,2,3,10,4,2,3,5]
// Output: 3
// Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
// Another correct solution is to remove the subarray [3,10,4].

// Approach
// Here’s the approach I used to solve this problem efficiently:

// Find the longest non-decreasing prefix from the beginning of the array. Let's call this left. This gives us the starting part of the array that’s already sorted.

// Find the longest non-decreasing suffix from the end of the array. Let's call this right. This gives us the ending part of the array that’s already sorted.

// Check if the entire array is sorted by verifying if left spans the whole array. If so, the answer is 0 because we don't need to remove anything.
// Calculate minimum removal:
// Initially, consider removing either the entire suffix (n - left - 1 elements) or the entire prefix (right elements).
// Use a two-pointer technique to see if we can merge parts of the prefix and suffix by skipping the smallest possible middle section. This allows us to explore shorter subarrays to remove.
// Return the result which is the minimum number of elements we need to remove.
