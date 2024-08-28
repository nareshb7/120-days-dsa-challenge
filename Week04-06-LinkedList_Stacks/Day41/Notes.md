# Notes for Day 41: Implement Queue using Stacks

## Approach

- Use two stacks, stack1 and stack2. stack1 is used for enqueuing elements, stack2 is used for dequeuing elements.
- Enqueue Operation (push): Simply push the element onto stack1.
- Dequeue Operation (pop): If stack2 is empty, pop all elements from stack1 and push them onto stack2.
- Then pop the top element from stack2.
- If stack2 is not empty, directly pop the top element from stack2.
- Peek Operation (peek): Similar to pop, but instead of popping the element from stack2, just return the top element of stack2.
- Empty Operation (empty): The queue is empty if both stack1 and stack2 are empty.

## Complexity

- `Time Complexity`:
- Push Operation: O(1) – Simply adding an element to the first stack.
- Pop Operation:
  Best Case: O(1) – If stack2 is not empty.
  Worst Case: O(n) – If stack2 is empty and all elements from stack1 need to be transferred.
- Peek Operation: Similar to pop.
- Empty Operation: O(1) – Just checking if both stacks are empty.
- `Space Complexity: O(n)` – Two stacks are used, but the total space is proportional to the number of elements in the queue.

## Key Learnings:

- `Queue vs. Stack:` Understand the difference between queues (FIFO) and stacks (LIFO).
- `Using Two Stacks:` Learn how two stacks can be used together to simulate queue behavior.
- `Lazy Transfer:` Recognize the strategy of transferring elements from one stack to another only when necessary, optimizing operations.
- `Stack Operations:` Practice basic stack operations like push, pop, and peek.
- `Amortized Analysis:` Understand that the pop and peek operations are efficient over time due to the amortized cost, even though they might seem expensive individually
