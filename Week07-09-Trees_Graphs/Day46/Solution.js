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
 * @return {string[]}
 */

 var binaryTreePaths = function(root) {
  const result =[]
  const getLeafNode =(root, path) => {
      if (!root) {
          return null;
      }
      path+=root.val
      if (!root.left && !root.right){
         result.push(path) 
      } else {
          path+="->"
          getLeafNode(root.left, path)
          getLeafNode(root.right, path)
      }
  }
  getLeafNode(root, "")
  return result
};

const root = [1,2,3,null,5]
console.log("Tree paths::", binaryTreePaths(root))
// Output: ["1->2->5","1->3"]
