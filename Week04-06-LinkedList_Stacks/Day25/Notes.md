# Notes for Day 25: Remove Nth Node From End of List

## Approach
- Two-pointer method: Use two pointers (fast and slow). Start both pointers at the head.
- Move the fast pointer n steps ahead.
- Then move both fast and slow pointers one step at a time until fast reaches the end of the list.
- The slow pointer will now be pointing to the node before the one you want to remove.
- Adjust the next pointer of the slow node to skip the node that needs to be removed.

## Explanation
- The fast pointer moves ahead by n+1 steps.
- Then both fast and slow move one step at a time until fast reaches the end of the list.
- At this point, slow is right before the node that needs to be removed.
- Finally, we skip the node by adjusting the next pointer of the slow node.

## Complexity
- `Time Complexity:O(L)` Where L is the length of the linked list.
- `Space Complexity:O(1)` no extra space proportional to the input size is used, aside from a few pointers (fast, slow, and dummy).

## Key Learnings:
- `Two-pointer Technique:` This technique is extremely useful in linked list problems, especially when you need to find a node at a certain distance from another node. By maintaining a fixed gap between the two pointers, you can solve the problem in a single pass.
- `Dummy Node Usage:` The dummy node is a trick to simplify edge cases, such as when the node to be removed is the head of the list. By using a dummy node, you avoid having to write separate logic to handle these cases.
