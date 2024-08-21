# Notes for Day 34: Decode String

## Approach
- Initialize the Stack: Use a stack to keep track of characters and decoded parts.
- Iterate Through the String: Loop through each character in the input string.
- Push Characters: If the character is not a closing bracket (]), push it onto the stack.
- Handle Closing Bracket: If a closing bracket is encountered:
- Pop from the stack to get the substring inside the brackets.
- Pop to remove the corresponding opening bracket ([).
- Extract the multiplier (number before [).
- Repeat the substring according to the multiplier and push the result back onto the stack.
- Return the Result: Finally, join all elements in the stack to form the decoded string.

## Complexity

- `Time ComplexityO(n):` Each character in the input string is processed once. Operations on the stack (push, pop) are O(1) on average. Overall, the complexity is linear in relation to the length of the input string.
- `Space ComplexityO(n):` In the worst case, the stack can grow to hold all characters in the input string. Thus, the space complexity is linear in relation to the length of the input string.

## Key Learnings:

- `Stack Usage:` The stack is used to keep track of characters and helps in processing the nested patterns by holding intermediate results until the closing bracket ] is encountered.
- `String Manipulation:` Handling of substrings and multipliers is crucial. You accumulate characters until a [ is found and then process the multiplier.
- `Number Extraction:` Extracting numbers from the stack involves checking and accumulating digits until a non-digit character is encountered.
- `Repeat Operation:` The repeat method is used to repeat the decoded substring according to the multiplier extracted.
- `Handling Nested Structures:` The solution correctly handles nested patterns by using the stack to manage multiple layers of encoding
