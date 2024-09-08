/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const { arrayToBinaryTree } = require("..");

// Root -> Left -> Right (RLR)
var preorderTraversal = function(root) {
  const result =[]
  const traverse =(node) => {
      if(!node) return false;
      result.push(node.val)
      traverse(node.left)
      traverse(node.right)
  }
  traverse(root)
  return result
};

const root = [1,null,2,3]
console.log("Preorder Tree::", preorderTraversal(arrayToBinaryTree(root)))

// Output: [1,3,2]