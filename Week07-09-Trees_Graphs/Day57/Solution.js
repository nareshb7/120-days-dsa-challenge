/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const {arrayToBinaryTree} = require("..")
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return 0;
  const inorderTraverse = (root, count) => {
    if (!root) return false;
    if (!root.left && !root.right) {
      if (root.val + count === targetSum) return true;
      return false;
    }

    return (
      inorderTraverse(root.left, count + root.val) ||
      inorderTraverse(root.right, count + root.val)
    );
  };

  return inorderTraverse(root, 0);
};

const root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22;
console.log("Has Pathsum::", hasPathSum(arrayToBinaryTree(root), targetSum))
// Output: true;
