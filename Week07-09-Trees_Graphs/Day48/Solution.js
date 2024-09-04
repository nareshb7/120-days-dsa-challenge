/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { arrayToBinaryTree } = require("..");

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  const curr = root.val;
  if (curr < p.val && curr < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (curr > p.val && curr > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

const root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
  p = [2],
  q = [8];
console.log(
  "LCA of BST::",
  lowestCommonAncestor(
    arrayToBinaryTree(root),
    arrayToBinaryTree(p),
    arrayToBinaryTree(q)
  )
);
// Output: 6
