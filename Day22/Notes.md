# Notes for Day 22: Reverse Linked List

## Approach
- Initialize two pointers `prev=null`, `curr=head`.
- Use the while loop until the curr becomes null
- In while loop:
- take the `next` pointer and assign curr.next value to it
- update curr.next with the prev value
- then update prev with the curr
- at last update curr with the next
- return the prev, prev becomes head to the new reversed list

## Complexity
- `Time Complexity O(n):` The algorithm traverses the entire linked list once, where n is the number of nodes in the list.
- `Space Complexity O(1):` The algorithm uses a constant amount of extra space, regardless of the size of the input list. It only uses a few pointers (prev, curr, and next).

## Key Learnings:
- `Understanding Nodes:` A linked list is made up of nodes. Each node contains data and a reference (or pointer) to the next node in the list.
- `Head Pointer:` The head of the linked list is the first node. This is your entry point to the entire list.
- `Traversal:` To access or modify the list, you often need to traverse it from the head to the desired node, moving from one node to the next.
- `Null Terminator:` The last node in a linked list points to null, indicating the end of the list.
- `In-Place Operations:` Operations like reversal can often be done in place by adjusting the pointers, without needing extra space.
- `Dynamic Size:` Unlike arrays, linked lists do not have a fixed size. You can easily add or remove nodes without worrying about resizing.
- `Memory Management:` Linked lists are good for managing memory dynamically, especially when you don’t know the list size in advance.
- `Basic Operations:` Practice basic operations like inserting a node, deleting a node, and searching for a node. These are foundational skills in working with linked lists.
-  `In-Place Reversal:` The linked list is reversed in place without needing extra memory for another list.
-  `Pointer Manipulation:` Mastering how to manipulate pointers (or references) is crucial in linked list problems.
-  `Iterative Approach:` The iterative approach is often more space-efficient compared to recursive methods, which can consume more memory due to function call stacks.
-  `Understanding Edge Cases:` Consider cases like an empty list or a list with a single node to ensure the algorithm handles them correctly.
