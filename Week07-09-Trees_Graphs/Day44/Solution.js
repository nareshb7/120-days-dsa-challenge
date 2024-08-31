/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { arrayToBinaryTree } = require("..");

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val == right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  };
  return dfs(root.left, root.right);
};

const root = [1,2,2,3,4,4,3]//Output: true
console.log('Is Symmetric::', isSymmetric(arrayToBinaryTree(root)))
