# Notes for Day 36: Design a Stack With Increment Operation

## Approach

- Initialize the Stack and Increment Array:
  Create a stack to store the elements.
  Create an auxiliary array increment to track cumulative increments for each index.
- Push Operation: Add the element to the stack if it hasn't reached the maximum size.
- Pop Operation:
  Remove the top element from the stack.
  Add the cumulative increment from the increment array to this element.
  Propagate the increment to the next element in the stack.
  Reset the current index in the increment array to 0.
- Increment Operation:
  Update the increment array at index k-1 by adding the increment value val.
  This marks that all elements up to the kth element should be incremented by val when they are eventually popped

## Complexity

- `Time Complexity:`
  Push: O(1) – Simply adds an element to the stack.
  Pop: O(1) – Removes an element, adds the cumulative increment, and adjusts the increment array.
  Increment: O(1) – Directly updates the increment array without iterating over elements.
- `Space Complexity:` O(N) – Space is required for both the stack and the increment array, where N is the maximum size of the stack.

## Key Learnings:

- `Separation of Concerns:` The stack and increment logic are separated. The stack handles basic push and pop operations, while the increment array manages the deferred increment operations. This separation simplifies the code and makes it easier to debug and extend.
- `Lazy Evaluation:` By deferring the actual increment operation until an element is popped, you avoid unnecessary repeated operations, making the stack more efficient. This is a form of lazy evaluation, where computation is delayed until it's absolutely necessary.
- `Avoiding Redundant Operations:` The increment array prevents redundant addition operations during the increment step, especially when k is large. This approach improves both time and space efficiency.
- `Space-Time Tradeoff:` The solution uses extra space (the increment array) to achieve constant time complexity for the increment operation. This is a classic space-time tradeoff, where a slight increase in space usage leads to significant gains in execution time.
- `Propagation Technique:` The propagation of increments down the stack during pop operations ensures that all increments are correctly applied without needing to revisit elements, which is crucial for maintaining O(1) complexity.
- `Handling Edge Cases:` The approach naturally handles edge cases, such as popping from an empty stack (returns -1) and incrementing when the stack has fewer than k elements
