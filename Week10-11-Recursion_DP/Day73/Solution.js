/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

const nums = [2, 3, 1, 1, 4];
console.log("can jump::", canJump(nums));
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
