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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  return 1 + Math.max(l, r);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const root = arrayToBinaryTree(arr); // Output is 3
console.log("Depth of root is ::", maxDepth(root));
//     1
//   /    \
//   2     3
// /  \    / \
// 4  5   6   7
