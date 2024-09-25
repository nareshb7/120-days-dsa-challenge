# Notes for Day 69: House Robber II

## Approach

- `Two Subproblems:` Treat it as two separate house robbery problems:
  First, consider the scenario where you exclude the last house (i.e., rob houses from index 0 to n-2).
  Second, consider the scenario where you exclude the first house (i.e., rob houses from index 1 to n-1).
- `Solve the Subproblems:` For both subproblems, use the approach similar to the House Robber I problem (rob houses linearly).
  For each house, decide if you want to rob it or skip it, and keep track of the maximum money you can rob up to each house.
- `Return the Maximum:` The final answer will be the maximum value between these two subproblems

- If there's only one house, return its value since there's nothing else to consider.
- Create two sets of variables (a1, b1 and a2, b2), which will help track the results for the two subproblems:
- a1, b1: Used for the first subproblem (excluding the last house).
- a2, b2: Used for the second subproblem (excluding the first house).
- Loop through the houses and update the variables based on whether you're considering the current house or skipping it.
- Return the maximum between the two subproblems' results (b1 and b2)

## Complexity

- `Time Complexity: O(n):` You're looping through the list of houses twice: once for excluding the last house, and once for excluding the first house. Each loop runs in linear time, so the overall time complexity is O(n).
- `Space Complexity: O(1):` You're only using a constant amount of extra space (four variables a1, b1, a2, b2 to keep track of the maximum values). So, the space complexity is constant

## Key Learnings:

- `Circular Dependency:` When houses are arranged in a circle, the first and last houses can't both be robbed. This introduces a circular dependency, which can be solved by splitting the problem into two simpler linear problems.
- `Dynamic Programming (House Robber I):` You can use the dynamic programming strategy from House Robber I for each subproblem. For each house, you choose between robbing it (and skipping the previous house) or skipping it.
- `Break Circular Problems into Linear Subproblems:` A key trick in problems with circular constraints is to break them into two linear subproblems and solve them independently. Then, choose the best solution.
- `Maximization:` The overall problem is about maximizing the sum of non-adjacent elements, considering the circular nature of the houses.
- `Constant Space Optimization:` By maintaining only two variables for each subproblem (tracking the previous two values), you can solve this problem with O(1) space instead of using extra arrays
