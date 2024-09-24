# Notes for Day 68: House Robber

## Approach

- `Base Case:` If there's only one house, the robber will rob that house.
- `Recursive Decision:` At any given house, the robber can either:
  Pick: Rob the current house and then skip the next house (move to the house two steps behind).
  Not Pick: Skip the current house and consider the next house.
- `Recursion with Memoization:` Use recursion to make the decision for every house, but memoize (store) results so you don't recalculate for the same house multiple times (dynamic programming).
- `Transition Formula:` For each house at index ind, the maximum amount to rob is:
  pick = nums[ind] + f(ind-2): Rob the current house and skip the next house.
  notPick = f(ind-1): Skip the current house and consider the next house.
  The result is the maximum of these two options.
- `Memoization Array:` Use a dp array to store results for each house so you don't have to recompute them when processing the recursion.
- `Final Result:` The final answer will be stored in dp[len-1], which is the maximum money the robber can rob from all houses.

## Complexity

- `Time Complexity:` The time complexity is O(n), where n is the number of houses.
  Reason: Each house (index ind) is visited once during recursion, and since memoization stores results in the dp array, each subproblem is solved only once. The rest of the calls are O(1) due to memoization lookups.
- `Space Complexity:` The space complexity is O(n).
  Reason: You need space for the dp array of size n to store the results of the recursive calls. Additionally, the recursion call stack uses O(n) space in the worst case (recursive depth equal to n). ` we can reduce it to constant space O(1) using tabluation`

## Key Learnings:

- `Dynamic Programming (DP) with Memoization:` This problem is a classic dynamic programming problem where the decision at each step depends on previous results. Memoization ensures that we don't recompute solutions for the same subproblems, optimizing the recursive solution.
- `Choice Between "Pick" and "Not Pick":` In many DP problems, especially when dealing with choices, the decision is often between two states: either taking the current option (like robbing the house) or skipping it. This pattern frequently appears in optimization problems.
- `Top-Down Recursion Approach:` This solution uses a top-down approach (recursion with memoization), where we break the problem down into smaller subproblems starting from the last house and work our way backward.
- `Handling Edge Cases:` Consider scenarios like no houses, only one house, or two houses. Edge cases must be managed early to prevent errors.
- `Optimal Substructure:` The problem exhibits optimal substructure, meaning the solution to the overall problem can be built using solutions to its subproblems (i.e., the optimal solution to robbing n houses depends on the solution for n-1 and n-2 houses)
