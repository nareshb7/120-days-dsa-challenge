class Solution {
  // Function to find intersection point in Y shaped Linked Lists.
  intersectPoint(head1, head2) {
    // your code here
    const length = (node) => {
      let count = 0;
      while (node != null) {
        node = node.next;
        count++;
      }
      return count;
    };
    let l1 = length(head1);
    let l2 = length(head2);
    while (l1 > l2) {
      head1 = head1.next;
      l1--;
    }

    while (l1 < l2) {
      head2 = head2.next;
      l2--;
    }

    while (head1 !== null && head2 !== null) {
      if (head1 === head2) {
        return head1.data; // Intersection point found
      }
      head1 = head1.next;
      head2 = head2.next;
    }
    return -1;
  }
}

// Intersection Point in Y Shaped Linked Lists

// Given two singly linked lists, return the point where two linked lists intersect.
// Note: If the linked lists do not merge at any point, return -1.

// Example:
// Input: Linked list 1: 4->4->4->4->4, Linked list 2: 4->4->4
// Output: 4
// Explanation: From the above image, it is clearly seen that the common part is 4->4 whose starting point is
