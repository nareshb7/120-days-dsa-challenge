# Notes for Day 35: Flatten Nested List Iterator

## Approach (Using Recusrion with stack)

1. Initialize the Stack
   Create a stack to hold elements from the nested list.
   Push all elements of the nested list onto the stack in reverse order.
2. Flatten Nested Lists On-The-Fly
   Whenever you call hasNext(), check the top element of the stack:
   If it's an integer, return true (there is a next integer).
   If it's a nested list, pop it from the stack, flatten it, and push its elements back onto the stack in reverse order.
   Repeat the above step until you find an integer or the stack is empty.
3. Return the Next Integer
   When next() is called, simply pop the top integer from the stack and return it.

## Complexity

- `Time Complexity O(n):` Each element in the nested list is processed exactly once. Operations like pushing to and popping from the stack are O(1) on average. Hence, the overall time complexity is linear in relation to the total number of integers in the nested list.
- `Space Complexity O(d):` In the worst case, the stack can hold elements from all levels of the nested list, where d is the maximum depth of nesting. Therefore, the space complexity is linear in relation to the depth of the nested list.

## Key Learnings:

- `Stack Usage:` The stack is used to manage the elements from the nested list, enabling you to process and flatten the nested structures on-the-fly. This approach simplifies the handling of deeply nested lists.
- `Lazy Flattening:` Instead of flattening the entire nested list upfront, the list is flattened only when needed (during hasNext() calls). This results in more efficient memory and time usage, especially with large nested structures.
- `Recursive Thinking:` The problem is approached by thinking recursively, where each nested list is broken down into smaller parts until individual integers are reached. The stack helps maintain the correct order during this breakdown.
- `Handling Nested Structures:` The solution effectively handles multiple levels of nesting by leveraging the stack to keep track of elements at different levels. This ensures that deeply nested integers are processed correctly in sequence.
- `Edge Case Consideration:` Proper handling of edge cases, such as empty lists or lists with only nested lists, ensures that the iterator behaves as expected across all input types.
