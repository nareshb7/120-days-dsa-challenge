# Notes for Day 24: Merge Two Sorted Lists

## Approach
- Initialize a Dummy Node: Create a dummy node to act as a placeholder.
- This dummy node helps to simplify edge cases and allows easy return of the merged list's head later.
- Create a Pointer to Traverse: Initialize a cur (current) pointer that starts at the dummy node.
- This pointer will be used to build the merged linked list.
- Use a while loop to keep traversing as long as both list1 and list2 have nodes.
- Inside the loop, compare the values of the current nodes from list1 and list2.
- If list1.val is greater than list2.val:
- Attach list2's current node to the merged list (cur.next = list2).
- Move the list2 pointer to the next node (list2 = list2.next).
- Otherwise: Attach list1's current node to the merged list (cur.next = list1).
- Move the list1 pointer to the next node (list1 = list1.next).
- Move the cur pointer to the next node in the merged list.
- After exiting the loop, one list may still have nodes left.
- Attach the remaining nodes from either list1 or list2 to the end of the merged list.
- Return the head of the merged list, which is the node right after the dummy node.

## Complexity
- `Time Complexity:O(n+m)` where n is the number of nodes in list1 and m is the number of nodes in list2.
- `Space Complexity:O(1)` The algorithm only uses a few pointers (dummy, cur) and doesn't allocate any additional space that grows with the input size.

## Key Learnings:
- `Dummy Nodes:` Using a dummy node simplifies the code, especially when dealing with edge cases like empty lists. It helps avoid special conditions for the first node and makes the final return of the merged list easier.
- `In-Place Merging:` The algorithm merges the two lists in-place by reusing the existing nodes from list1 and list2. This avoids the need for additional memory allocation, making the solution more space-efficient.
- `Two-Pointer Technique:` The algorithm effectively uses the two-pointer technique, where each pointer traverses one of the linked lists. This is a common and efficient method for merging sorted sequences.
- `Efficient Handling of Remaining Elements:` After one of the lists is fully traversed, the algorithm directly appends the remaining nodes of the other list to the merged list. This works because the remaining nodes are already sorted.
- `Linear Time Complexity:` The algorithm achieves linear time complexity by making a single pass through both lists, ensuring that each node is processed only once.
- `Handling Edge Cases:` The algorithm naturally handles edge cases, such as when one or both input lists are empty. The use of a dummy node simplifies these cases.
