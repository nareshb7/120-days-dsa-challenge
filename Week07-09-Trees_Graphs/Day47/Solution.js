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
 var sumOfLeftLeaves = function(root) {
    let sum =0
    const dfs =(root, isLeft) => {
        if (!root) return null;
        if (!root.left && !root.right && isLeft) {
            sum +=root.val
            return
        }
        dfs(root.left, true)
        dfs(root.right, false) 
    }
    dfs(root, false)
    return sum
};

const root = [3,9,20,null,null,15,7] //Output: 24
console.log("Sum of Left LeafNodes: ", sumOfLeftLeaves(arrayToBinaryTree(root)))
