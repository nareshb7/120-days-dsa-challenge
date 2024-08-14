# Notes for Day 27: Simplify Path

## Approach
- Initialize stack and directories variable by splitting path by `/`
- Use for loop to traverse the directories array
- In the loop:
- If directory is `.` or `null`  we dont need to do anything we can skip this by using `continue`.
- If directory is `..` we need to pop the dir value from the stack.
- If any one of this doesn't match we need to push current directory
- return the stack by joining with `/`

## Complexity
- `Time Complexity: O(N)` , where N is the length of the input string path.
- `Space Complexity: O(N)` O(N), where N is the length of the input string path.

## Key Learnings:
- `Stack Usage:` The stack is a natural choice for problems where you need to keep track of hierarchical structures or need to "undo" actions (like going up a directory with ..).
- `String Splitting and Parsing:` Using split("/") to parse the path allows you to easily handle each directory or command (like . or ..) individually.
- `Handling Edge Cases:` The function correctly handles various edge cases, such as ignoring multiple slashes, current directory references (.), and going up directories (..), even when no directory exists to pop.
- `Efficient Path Simplification:` This solution effectively simplifies a path in linear time by making a single pass through the path components and using a stack for efficient tracking.
- `Return the Simplified Path:` After processing, joining the stack elements with / and prepending a / gives the correct simplified path.