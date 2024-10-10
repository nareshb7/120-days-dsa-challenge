/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let n = nums.length;
  let stack = [];

  // Step 1: Build a decreasing stack of indices
  for (let i = 0; i < n; i++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }

  let maxWidth = 0;

  // Step 2: Traverse from the end and find maximum width ramp
  for (let j = n - 1; j >= 0; j--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - stack.pop());
    }
  }

  return maxWidth;
};

// 962. Maximum Width Ramp

// Input: nums = [6,0,8,2,1,5]
// Output: 4
// Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
