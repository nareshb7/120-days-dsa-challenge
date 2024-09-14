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
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) return [];
  let max = 1;
  let hash = {};
  let result = [];

  function traverse(node) {
    if (hash[node.val]) {
      hash[node.val] += 1;
      max = Math.max(max, hash[node.val]);
    } else {
      hash[node.val] = 1;
    }
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }

  traverse(root);

  for (let prop in hash) {
    hash[prop] === max && result.push(prop);
  }

  return result;
};

const root = [1,null,2,2]
console.log('modes in Binary tree::', findMode(arrayToBinaryTree(root)))
// Output: [2]
