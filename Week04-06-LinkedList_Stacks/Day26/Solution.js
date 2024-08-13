/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { arrayToLinkedList, linkedListToArr } = require("..");

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reverse = (list) => {
  let prev = null;
  let current = list;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
const merge = (l1, l2) => {
  while (l1 != null) {
    const l1_next = l1.next;
    const l2_next = l2.next;
    l1.next = l2;
    if (l1_next == null) {
      break;
    }
    l2.next = l1_next;
    l1 = l1_next;
    l2 = l2_next;
  }
};

var reorderList = function (head) {
  if (head === null || head.next === null) return;
  let l1 = head; // head of first half
  let slow = head; // head of second half
  let fast = head; // tail of second half
  let prev = null; // tail of first half
  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  const l2 = reverse(slow);
  merge(l1, l2);
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const linkedList = arrayToLinkedList(arr);
reorderList(linkedList);
console.log("Reorder List:::", linkedListToArr(linkedList));
