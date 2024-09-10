/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const gratestCommonDivisior = (a, b) => {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

var insertGreatestCommonDivisors = function (head) {
  if (head.next == null) return head;
  let node1 = head;
  while (node1.next != null) {
    const gcd = gratestCommonDivisior(node1.val, node1.next.val);
    const newNode = new ListNode(gcd);
    newNode.next = node1.next;
    node1.next = newNode;
    node1 = newNode.next;
  }
  return head;
};

//2807. Insert Greatest Common Divisors in Linked List

// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.

// var insertGreatestCommonDivisors = function(head) {
//     if (head.next == null) return head;
//     let node1 = head
//     let node2 = head.next
//     while (node2 != null) {
//         const gcd = gratestCommonDivisior(node1.val, node2.val)
//         const newNode = new ListNode(gcd)

//         node1.next = newNode
//         newNode.next = node2

//         node1 = node2
//         node2 = node2.next
//     }
//     return head

// };
