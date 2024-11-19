/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let start = 0,
    end = 0;
  const n = nums.length;
  let maxSum = 0;
  const unique = new Set();
  let currentSum = 0;

  while (end < n) {
    while (unique.has(nums[end])) {
      unique.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }
    unique.add(nums[end]);
    currentSum += nums[end];
    end++;

    if (end - start === k) {
      maxSum = Math.max(maxSum, currentSum);
      unique.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }
  }
  return maxSum;
};

// 2461. Maximum Sum of Distinct Subarrays With Length K

// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15
// Explanation: The subarrays of nums with length 3 are:
// - [1,5,4] which meets the requirements and has a sum of 10.
// - [5,4,2] which meets the requirements and has a sum of 11.
// - [4,2,9] which meets the requirements and has a sum of 15.
// - [2,9,9] which does not meet the requirements because the element 9 is repeated.
// - [9,9,9] which does not meet the requirements because the element 9 is repeated.
// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
