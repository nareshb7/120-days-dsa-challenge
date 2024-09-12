/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
var buildTree = function(preorder, inorder) {
  const hashMap = {}
  for (let i=0; i<inorder.length; i++){
      hashMap[inorder[i]] = i
  }

  const buildBTHelper =(preorder, preStart, preEnd, inorder, inStart, inEnd, hashMap) => {
    if(preStart> preEnd || inStart > inEnd) return null;
    
    const root = new TreeNode(preorder[preStart])
    const inRoot = hashMap[root.val]
    const numsLeft = inRoot - inStart;
  
    root.left = buildBTHelper(preorder, preStart+1,preStart+numsLeft, inorder,inStart, inRoot-1, hashMap  )
    root.right = buildBTHelper(preorder, preStart+numsLeft+1, preEnd, inorder, inRoot+1, inEnd, hashMap)
    
    return root
  }

  const root = buildBTHelper(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1, hashMap)

  return root
  
};

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log("Binary Tree::", buildTree(preorder, inorder))
// Output: [3,9,20,null,null,15,7]