# Notes for Day 30: Evaluate Reverse Polish Notation

## Approach

- Initialize the Stack: Start with an empty stack to hold intermediate results.
- Processing the Tokens: Traverse through the array of tokens using a loop. For each token:
- If it's an operand (number), push it onto the stack.
- If it's an operator, pop the top two operands from the stack, apply the operator, and push the result back onto the stack.
- Final Result: At the end of the traversal, the stack will contain one element, which is the result of the expression.

## Complexity

- `Time Complexity: O(n)` The algorithm processes each token in the input array exactly once. Each operation (pushing to the stack, popping from the stack, and applying an operator) takes constant time, making the overall time complexity linear with respect to the number of tokens.
- `Space Complexity: O(n)` In the worst case, all tokens could be numbers, requiring the stack to store all of them. Thus, the space complexity is linear with respect to the number of tokens.

## Key Learnings:

- `Stack Usage:` RPN problems are ideal for understanding stack-based algorithms. The stack helps evaluate expressions without needing parentheses, making it crucial for such problems.
- `Operator Precedence:` In RPN, operator precedence is implicitly handled by the order of tokens. This eliminates the need for extra rules or data structures to manage operator precedence.
- `Efficiency:` The algorithm is efficient, both in terms of time and space, and is well-suited for evaluating mathematical expressions in scenarios where order of operations is important.
- `Edge Cases:` Understanding how division is handled, especially with negative numbers, is crucial. This problem highlights the importance of using functions like Math.trunc for consistent integer division.
- `Code Simplification:` The problem demonstrates the power of using a map for operations, leading to more concise and readable code while maintaining the same functionality.
