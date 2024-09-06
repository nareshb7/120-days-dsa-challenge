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
var isValidBST = function (root) {
  const isValidBst = (root, min, max) => {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      isValidBst(root.left, min, root.val) &&
      isValidBst(root.right, root.val, max)
    );
  };
  return isValidBst(root, -Infinity, Infinity);
};

const root = [2, 1, 3]; //Output: true
console.log("Is valid BST::", isValidBST(arrayToBinaryTree(root)));
