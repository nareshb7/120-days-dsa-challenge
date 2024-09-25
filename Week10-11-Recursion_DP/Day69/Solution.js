/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;

  if (len === 1) return nums[0];

  let a1 = 0, b1 = 0, a2 = 0, b2 = 0;

  for (let i = 0; i < len; i++) {
    if (i > 0) {
      let curr = Math.max(b2, nums[i] + a2);
      a2 = b2;
      b2 = curr;
    }
    if (i < len - 1) {
      let curr = Math.max(b1, nums[i] + a1);
      a1 = b1;
      b1 = curr;
    }
  }
  return Math.max(b1, b2);
};

const nums = [2, 3, 2];
console.log("rob money::", rob(nums));
// Output: 3
