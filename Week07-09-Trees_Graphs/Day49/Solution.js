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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const currArr = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      currArr.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currArr);
  }
  
  return result;
};
const root = [3, 9, 20, null, null, 15, 7];
console.log("Levels::", levelOrder(arrayToBinaryTree(root)));
// Output: [[3], [9, 20], [15, 7]];

// Recursive
var levelOrderRecursive = function (root) {
  const levels = [];
  const getLevelOrder = (root, level) => {
    if (!root) return null;
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level] = [...levels[level], root.val];
    root.left && getLevelOrder(root.left, level + 1);
    root.right && getLevelOrder(root.right, level + 1);
  };
  getLevelOrder(root, 0);
  return levels;
};
