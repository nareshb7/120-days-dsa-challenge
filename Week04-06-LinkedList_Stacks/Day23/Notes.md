# Notes for Day 23: Linked List Cycle

## Approach
- The function starts by initializing a pointer fast to the head of the linked list.
- The fast pointer will move twice as fast as the head pointer.
- The while loop runs as long as fast and fast.next are not null.
- Inside the loop:
- The head pointer is moved one step forward (head = head.next).
- The fast pointer is moved two steps forward (fast = fast.next.next).
- Cycle Detection:
- After moving the pointers, the function checks if the head pointer is equal to the fast pointer.
- If they are equal, it means that the fast pointer has caught up with the head pointer, indicating the presence of a cycle in the linked list. In this case, the function returns true.
- If the loop exits without the head and fast pointers meeting, it means the list doesn't have a cycle, and the function returns false.

## Complexity
- `Time Complexity:O(n)` The algorithm runs in O(n) time, where n is the number of nodes in the linked list.
- `Space Complexity:O(1)` The algorithm uses O(1) space since it only requires two pointers.

## Key Learnings:
- `Two Pointers:` The fast pointer moves twice as fast as the head pointer. If a cycle exists, fast will eventually meet head inside the cycle
