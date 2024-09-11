/**
 * Definition for a binary tree node.
 *
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var constructMaximumBinaryTree = function (nums) {
  const maxBT = (nums, s, e) => {
    if (s === e) {
      return null;
    }

    let maxValue = -1,
      maxValueIndex = -1;
    for (let i = s; i < e; ++i) {
      if (nums[i] > maxValue) {
        maxValue = nums[i];
        maxValueIndex = i;
      }
    }

    const leftNode = maxBT(nums, s, maxValueIndex);
    const rightNode = maxBT(nums, maxValueIndex + 1, e);

    return new TreeNode(maxValue, leftNode, rightNode);
  };

  return maxBT(nums, 0, nums.length);
};

const nums = [3, 2, 1, 6, 0, 5];
console.log("Maximun BT::", constructMaximumBinaryTree(nums));
// Output: [6,3,5,null,2,0,null,null,1]
