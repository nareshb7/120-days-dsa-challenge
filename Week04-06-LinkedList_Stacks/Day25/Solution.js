/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  
  // Move fast ahead by n+1 steps
  for (let i = 0; i <= n; i++) {
      fast = fast.next;
  }
  
  // Move fast to the end, maintaining the gap
  while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
  }
  
  // Skip the desired node
  slow.next = slow.next.next;
  
  return dummy.next;
};
const list1 = {
  val: 1,
  next: { val: 2, next: {val: 3, next: { val: 4, next: {value: 5, next :null} }} },
}
const pos = 3
console.log(`Remove ${pos} from the list::`, removeNthFromEnd(list1, pos))