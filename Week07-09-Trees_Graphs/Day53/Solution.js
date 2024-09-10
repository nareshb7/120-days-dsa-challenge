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

// Left -> Right -> Root (LRR)
var postorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return false;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  };
  traverse(root);
  return result;
};

const root = [1, null, 2, 3];
console.log("Postorder Tree::", postorderTraversal(arrayToBinaryTree(root)));
// Output: [3,2,1]


// var postorderTraversal = function(root) {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];
  
//   while (stack.length > 0) {
//       const node = stack.pop();
//       result.push(node.val);
      
//       // Push left first, so right is processed before left
//       if (node.left) stack.push(node.left);
//       if (node.right) stack.push(node.right);
//   }
  
//   return result.reverse(); // Reverse to get post-order traversal
// };