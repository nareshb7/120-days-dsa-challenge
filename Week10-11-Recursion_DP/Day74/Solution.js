/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length;
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += nums[i];

    max = Math.max(sum, max);

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Sum of Max Subarray::", maxSubArray(nums));
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
