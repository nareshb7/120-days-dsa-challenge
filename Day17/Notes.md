# Notes for Day 17: Valid Parentheses

## Approach

- Initialize the empty stack
- create a map object with parentheses as key value pairs
- Use the for of loop to traverse the array
- If the char is an opening bracket `[, {, (`. push it into the stack
- If the char is an closing bracket check with top element of stack, if doesn't match return false
- After the iteration check the stack is empty , if it is return true , otherwise return false

## Complexity
- `Time Complexity: O(n)` - We iterate through the string once, performing constant time operations for each character.
- `Space Complexity: O(n)` - In the worst case, we might need to push all opening brackets onto the stack if no closing brackets are encountered.

## Key Learnings
- `Stack Data Structure:` Understand how to use a stack to solve problems that involve matching pairs or nested structures.
- `Bracket Matching:` Learn how to handle different types of brackets and ensure they are properly matched and closed.
- `Edge Case Handling:` Be mindful of edge cases such as empty strings or strings that start with closing brackets.
- `Algorithm Design:` Practice designing an algorithm that efficiently checks for valid sequences using a linear scan.
