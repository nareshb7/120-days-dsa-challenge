/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
 var splitListToParts = function(head, k) {
  let ans = new Array(k).fill(null);

  // Calculate total size of the linked list
  let size = 0;
  let current = head;
  while (current) {
      size++;
      current = current.next;
  }

  // Minimum size of each part
  let splitSize = Math.floor(size / k);
  let remainder = size % k; // Remaining nodes to distribute

  current = head;
  let prev = null;
  for (let i = 0; i < k; i++) {
      ans[i] = current;
      let currentSize = splitSize + (remainder > 0 ? 1 : 0);
      remainder--;

      // Traverse to the end of the current part
      for (let j = 0; j < currentSize; j++) {
          prev = current;
          current = current.next;
      }

      // Cut the list
      if (prev) prev.next = null;
  }

  return ans;
};

// 725. Split Linked List in Parts

const head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].