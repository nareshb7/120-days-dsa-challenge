class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function createLinkedListWithCycle(arr, pos) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]), currentNode = head, cycleNode = null;
  for (let i = 1; i < arr.length; i++) {
      currentNode.next = new ListNode(arr[i]);
      currentNode = currentNode.next;
      if (i === pos) {
          cycleNode = currentNode;
      }
  }
  if (pos !== -1) {
      currentNode.next = cycleNode;
  }
  return head;
}
// Example Usage
const arr = [3, 2, 0, -4];
const pos = 1; // Indicates that the last node (-4) will link back to the node at index 1 (value 2)
const linkedListWithCycle = createLinkedListWithCycle(arr, pos);

const hasCycle = function(head) {
  let fast = head;
  while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) return true;
  }
  return false;
};
console.log("Linked list has cycle::", hasCycle(linkedListWithCycle)) // This will print 'true' since there is a cycle
