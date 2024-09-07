/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (!root) return false;
  const checkPath = (head, root) => {
    if (!head) return true;
    if (!root) return false;
    if (head.val !== root.val) return false;

    return checkPath(head.next, root.left) || checkPath(head.next, root.right);
  };
  if (checkPath(head, root)) return true;

  return isSubPath(head, root.left) || isSubPath(head, root.right);
};

// 1367. Linked List in Binary Tree
const head = [4, 2, 8],
  root = [
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    1,
    3,
  ];
// Output: true
// Explanation: Nodes in blue form a subpath in the binary Tree.
