# Notes for Day 28: Min Stack

## Approach
- Use Two Stacks: To handle the operations efficiently, we can use two stacks:
Main Stack (items): This stack will store all the elements.
Min Stack (minItems): This auxiliary stack will store the minimum values.
- Push Operation: 
- When pushing an element x onto the stack: Push x onto the items stack.
- For the minItems stack: If minItems is empty, or if x is less than or equal to the top element of minItems, push x onto minItems.
- Otherwise, do nothing. This ensures that minItems always has the current minimum at the top.
- Pop Operation:
- When popping an element: Pop the top element from items.
If the popped element is equal to the top element of minItems, also pop from minItems.
This ensures that if the current minimum is removed, the next minimum is available at the top of minItems.
- Top Operation: Simply return the top element from the items stack. This operation remains straightforward and efficient.
- GetMin Operation: Return the top element from the minItems stack. This is the minimum element in the stack, and the operation is O(1).

## Complexity
- `Time Complexity: O(1)` , Time Complexity for all operations (push, pop, top, getMin):
- `Space Complexity: O(N)` where N is the number of elements in the stack.

## Key Learnings:
- `Dual Stack Approach:` Using two stacks—one for all elements and another for tracking the minimum—allows you to efficiently retrieve the minimum element at any time.
- `Efficient getMin:` By keeping track of minimum values in a separate stack, the getMin() operation can be performed in constant time.
- `Space Optimization:` The minItems stack only stores a new minimum value when it changes, reducing the space needed for tracking minimums.
- `Constant Time Operations:` All stack operations (push, pop, top, getMin) are designed to run in constant time, ensuring high efficiency even with large inputs.
- `Conditional Pushing and Popping:` minItems only updates when necessary, ensuring that it only contains the relevant minimum values, leading to better space efficiency.