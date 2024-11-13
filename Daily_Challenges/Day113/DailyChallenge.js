/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let count = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[i] + nums[mid] >= lower) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    let lowerIndex = left;
    right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[i] + nums[mid] <= upper) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    let upperIndex = right;
    if (lowerIndex <= upperIndex) {
      count += upperIndex - lowerIndex + 1;
    }
  }
  return count;
};

// 2563. Count the Number of Fair Pairs

// Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs.
// A pair (i, j) is fair if:
// 0 <= i < j < n, and
// lower <= nums[i] + nums[j] <= upper

// Example:
// Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6
// Output: 6
// Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).