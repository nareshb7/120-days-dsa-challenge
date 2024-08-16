# Notes for Day 29: Implement Stack using Queues

## Approach
- Push (push(x)): Directly push the element into q1.
- Pop (pop()):
    Transfer all elements except the last one from q1 to q2.
    Pop the last element from q1, which is the most recent element added (stack top).
    Swap q1 and q2 to prepare for the next operation.
- Top (top()):
    Similar to pop, but instead of removing the last element, we just retrieve it and then put it back in q2.
    Swap q1 and q2 to prepare for the next operation.
- Empty (empty()): Simply check if q1 is empty.

## Complexity
- `Push Operation (push(x)):`
    Time Complexity: O(1)
    Space Complexity: O(1) per push
- `Pop Operation (pop()):`
    Time Complexity: O(n)
    Due to transferring all elements except the last one from q1 to q2.
    Space Complexity: O(1) (only temporary storage is used during the transfer)
- `Top Operation (top()):`
    Time Complexity: O(n)
    Similar to pop, we need to move elements to access the last one.
    Space Complexity: O(1)
- `Empty Operation (empty()):`
    Time Complexity: O(1)
    Space Complexity: O(1)

## Key Learnings:
- `Simulating Stack with Queue:` This approach shows how to simulate the LIFO behavior of a stack using the FIFO structure of queues, deepening your understanding of data structure operations.
- `Queue Operations:` You learn how to manipulate queues to reorder elements, ensuring that the most recent element is always accessible for stack operations like pop and top.
- `Efficiency Trade-offs:` This approach teaches you to manage trade-offs between time complexities of different operations (e.g., making pop costly to keep push efficient).
- `Data Structure Versatility:` Understanding how to use one data structure to implement another enhances your problem-solving versatility, which is valuable in interviews.
- `Algorithmic Thinking:` The method encourages thinking about the order of operations and the movement of data within structures, which is crucial for solving complex problems.