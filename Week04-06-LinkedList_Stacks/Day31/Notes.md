# Notes for Day 31: Basic Calculator

## Approach

- Initialization:
  number = 0 to store the current number being formed.
  signValue = 1 to keep track of the current sign (positive or negative).
  result = 0 to store the ongoing result.
  operationsStack = [] to handle parentheses and store previous results and signs.
- Iterate Through the String:
- If the character is a digit (0-9):
  Convert it to a number and update number by multiplying the existing number by 10 (to shift digits) and adding the current digit.
- If the character is a sign (+ or -):
  Add the current number multiplied by signValue to the result.
  Update signValue based on the sign (+ for 1, - for -1).
  Reset number to 0 for the next number.
- If the character is an opening parenthesis (():
  Push the current result and signValue onto operationsStack (to remember the state before the parentheses).
  Reset result and signValue for the new expression inside the parentheses.
- If the character is a closing parenthesis ()):
  Add the current number multiplied by signValue to result.
  Multiply the current result by the last sign value popped from operationsStack (which was before the ().
  Add the last result popped from operationsStack to result.
  Reset number to 0 for the next number.
- Final Calculation: After the loop, add the last number multiplied by signValue to result (to account for any remaining number).
- Return the Final Result

## Complexity

- `Time Complexity: O(n)` The algorithm iterates through the string s exactly once, performing constant-time operations for each character.
- `Space Complexity: O(n)` In the worst case, the space used by operationsStack is proportional to the depth of nested parentheses, which could be up to n if the entire expression is nested.

## Key Learnings:

- `Stack Usage:` Stacks are useful for managing state in recursive-like problems, such as handling nested parentheses in arithmetic expressions.
- `Sign Management:` Keeping track of the current sign (+ or -) allows you to apply operations correctly even in the presence of nested expressions.
- `Modularity:` Breaking down the problem into steps (handling numbers, signs, and parentheses separately) makes the implementation cleaner and easier to understand.
- `Handling Nested Expressions:` Pushing the current state onto a stack before dealing with a nested expression simplifies managing multiple layers of operations.
