# Notes for Day 64: Climbing Stairs (Recusrion)

## Approach

- Create an array memo of size n+1 to store the results of subproblems.
- Initialize all values in memo to -1 (or another value indicating they are not computed yet).
- Modify the recursive function to check the memo array before doing any calculation. If the value is already computed, return it.
- If the value is not computed, calculate it, store it in the memo, and then return it.
- Base Cases: If n == 0 or n == 1, the result is 1, because there’s only one way to climb 0 or 1 step.
- Memoization Logic: Before recursively calling for n-1 or n-2, check if the result for these values is already in the memo. If it is, return the value from memo.
- If not, compute it, store it in the memo, and return it
- return the value

## Complexity

- `Time Complexity: O(n)` In this appraoch each subproblem is solved only once and stored in the memo array. Therefore, the recursion tree has at most n unique subproblems, making the time complexity O(n).
- `Space Complexity: O(n)` The space complexity comes from two sources:
  The recursion stack: In the worst case, the recursion depth will be n, so it uses O(n) space.
  The memoization array: The memo array also stores n+1 values, contributing O(n) space

## Key Learnings:

- `Recursion Basics:` Recursion is a function calling itself to solve a problem.
- `It has two main components:`
  Base Case(s): The condition that stops the recursion. Without a base case, the function would call itself indefinitely (leading to stac overflow).
  Recursive Case: The part where the function breaks the problem down into smaller subproblems and calls itself to solve them.
- `Understanding Stack Overflow:` If the recursive function keeps calling itself without hitting a base case, the stack (which keeps track of function calls) will overflow, leading to a "stack overflow" error.
- `Memoization:` Memoization is an optimization technique where you store the results of expensive function calls and reuse them when the same inputs occur again.
  It helps in improving time complexity, especially in problems like Fibonacci numbers or climbing stairs, where you often recompute the same subproblems.
- `Importance of Base Case:` A well-defined base case is crucial for recursion to work. Without it, your recursion can go into an infinite loop.
  In the climbing stairs problem, the base cases are when n == 0 and n == 1 because there’s only one way to climb 0 or 1 step.
- `Recursion vs. Iteration:` Recursive solutions can be more elegant and easier to write for problems that naturally break down into subproblems, like climbing stairs.
  However, recursion can be less efficient in terms of space due to the call stack, especially if there is no memoization.
- `Dynamic Programming:` This problem is an introduction to dynamic programming (DP), a technique used to solve complex problems by breaking them down into simpler subproblems and storing the results.
  The recursive solution with memoization is a type of top-down DP approach
