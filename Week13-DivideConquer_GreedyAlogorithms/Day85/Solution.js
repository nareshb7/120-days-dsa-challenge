/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let near = 0,
    far = 0,
    jumps = 0;

  while (far < nums.length - 1) {
    let furthest = 0;
    for (let i = near; i <= far; i++) {
      furthest = Math.max(furthest, i + nums[i]);
    }
    near = far + 1;
    far = furthest;
    jumps++;
  }

  return jumps;
};

const nums = [2, 3, 1, 1, 4];
console.log("min jumps::", jump(nums));
// Output: 2
