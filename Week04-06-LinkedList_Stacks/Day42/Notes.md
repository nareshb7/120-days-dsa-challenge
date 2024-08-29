# Notes for Day 42: Basic Calculator II

## Approach

- Initialization:
- curr stores the current number being processed.
- op keeps track of the last operator encountered (initially set to +).
- stack is used to store numbers and intermediate results.
- Iteration through the string:
- The loop iterates over each character in the string s.
- If the character is a digit (c >= "0" && c <= "9"), update curr by multiplying it by 10 (to shift digits left) and adding the digit's value.
- If the character is an operator or the last character in the string:
- Depending on the current operator op, the current number curr is added, subtracted, multiplied, or divided (truncated towards zero) with the previous number(s) in the stack.
- The op is then updated to the current character, and curr is reset to 0.
- Final Calculation: After processing all characters, the function returns the sum of all numbers in the stack

## Complexity

- `Time Complexity: O(n)` The loop runs through each character in the string exactly once.
- `Space Complexity: O(n)` In the worst case, the stack could store up to n/2 elements (for expressions with alternating operators and digits).

## Key Learnings:

- `Stack Utilization:` The stack is used to manage the operations in the correct order, especially for handling multiplication and division before addition and subtraction.
- `Operator Precedence:` The function handles operator precedence by immediately calculating results for multiplication and division before pushing them to the stack.
- `Truncation in Division:` The division operation uses Math.trunc to ensure that the result is truncated towards zero, which is important for correctly handling negative numbers in division.
- `Edge Cases:` The solution accounts for single-digit numbers, multi-digit numbers, and ignores spaces in the string
