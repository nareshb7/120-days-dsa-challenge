/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length;
  const sum = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  const q = new Array(n + 1).fill(0);
  let l = 0;
  let r = 0;
  let minLength = n + 1;

  for (let i = 0; i < sum.length; i++) {
    while (r > l && sum[i] >= sum[q[l]] + k) {
      minLength = Math.min(minLength, i - q[l]);
      l++;
    }

    while (r > l && sum[i] <= sum[q[r - 1]]) {
      r--;
    }

    q[r] = i;
    r++;
  }

  return minLength <= n ? minLength : -1;
};

// 862. Shortest Subarray with Sum at Least K

// Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. 
// If there is no such subarray, return -1.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [1], k = 1
// Output: 1
