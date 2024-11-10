/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  let n = nums.length;
  let bitCount = new Array(32).fill(0);
  let currentOR = 0;
  let left = 0;
  let minLength = Infinity;

  for (let right = 0; right < n; right++) {
    currentOR |= nums[right];

    for (let bit = 0; bit < 32; bit++) {
      if (nums[right] & (1 << bit)) {
        bitCount[bit]++;
      }
    }

    while (left <= right && currentOR >= k) {
      minLength = Math.min(minLength, right - left + 1);

      let updatedOR = 0;
      for (let bit = 0; bit < 32; bit++) {
        if (nums[left] & (1 << bit)) {
          bitCount[bit]--;
        }
        if (bitCount[bit] > 0) {
          updatedOR |= 1 << bit;
        }
      }
      currentOR = updatedOR;
      left++;
    }
  }

  return minLength === Infinity ? -1 : minLength;
};

// 3097. Shortest Subarray With OR at Least K II

// You are given an array nums of non-negative integers and an integer k.
// An array is called special if the bitwise OR of all of its elements is at least k.
// Return the length of the shortest special non-empty subarray of nums, or return -1 if no special subarray exists.

// Example:
// Input: nums = [1,2,3], k = 2
// Output: 1
// Explanation:
// The subarray [3] has OR value of 3. Hence, we return 1
