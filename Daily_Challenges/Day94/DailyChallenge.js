/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var flipEquiv = function(root1, root2) {
    if (!root1 || !root2) {
        return !root1 && !root2;
    }
    
    if (root1.val !== root2.val) {
        return false;
    }
    
    let a = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
    return a || flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)
};


// 951. Flip Equivalent Binary Trees

// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
// Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.


// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.
