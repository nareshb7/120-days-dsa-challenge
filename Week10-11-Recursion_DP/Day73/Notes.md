# Notes for Day 73: Jump Game

## Approach

- `Initialize a Goal:` Start by assuming that the last index of the array is your goal, i.e., you need to reach goal = nums.length - 1.
- `Iterate Backwards:` Begin iterating from the second-to-last element (index nums.length - 2) towards the beginning of the array.
  For each index i, check if it is possible to jump from that index to the current goal. You can do this by comparing if i + nums[i] (the farthest you can jump from index i) is greater than or equal to goal.
- `Update the Goal:` If you find that you can jump from index i to the current goal, update goal to i. This means you can now try to reach index i instead of the original last index.
- `Final Check:` At the end of the loop, if the goal is updated to index 0, then it means it's possible to reach the last index from the starting point, so return true. Otherwise, return false

## Complexity

- `Time Complexity:` O(n): The algorithm iterates over the array nums exactly once in reverse (from the second-to-last index to the first index). Since each index is visited only once, the overall time complexity is linear with respect to the length of the array.
- `Space Complexity:` O(1): The algorithm only uses a few variables (like goal and the loop counter i). No additional data structures are required, so the space complexity is constant.

## Key Learnings:

- `Greedy Algorithm:` This approach uses a greedy technique, where you try to "jump" backwards from the end of the array to the beginning, constantly updating the target or "goal." You aim to minimize the goal as you go, and by doing this, you ensure that you only need to focus on the steps that can actually reach the goal.
- `Efficient Backward Traversal:` By starting from the second-to-last index and working backward, you can check if it's possible to reach the goal without needing to simulate every jump forward. This drastically reduces unnecessary computations.
- `Local vs. Global Thinking:` The idea of adjusting the goal in this problem exemplifies the concept of local vs. global decisions. By focusing on whether a single index can reach a goal, you gradually determine whether the entire array can be traversed globally.
- `No Need for Dynamic Programming or Recursive Backtracking:` Although the problem might seem to lend itself to dynamic programming or recursive approaches, this greedy algorithm is much simpler and more efficient. It avoids the overhead of storing additional data (like memoization in dynamic programming) or recursive calls.
- `Optimal Solution:` This greedy solution is optimal with respect to both time and space complexity for the problem at hand. It's a perfect example of how sometimes a straightforward greedy approach can outperform more complex methods, like dynamic programming, for certain problems.
