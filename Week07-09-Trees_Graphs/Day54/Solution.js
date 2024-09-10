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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  const queue = [root];
  const result = [];
  let leftToRight = true;
  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      const index = leftToRight ? i : size - 1 - i;
      currentLevel[index] = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    leftToRight = !leftToRight;
    result.push(currentLevel);
  }
  return result;
};

const root = [3,9,20,null,null,15,7]
console.log("ZigZag Order:::", zigzagLevelOrder(arrayToBinaryTree(root)))
// Output: [[3],[20,9],[15,7]]
