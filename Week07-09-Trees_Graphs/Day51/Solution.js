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
 * @return {number[]}
 */
// Left -> Root -> Right
var inorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return false;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};

const root = [1,null,2,3]
console.log("Inorder Tree::", inorderTraversal(arrayToBinaryTree(root)))

// Output: [1,3,2]
