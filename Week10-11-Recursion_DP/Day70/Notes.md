# Notes for Day 70: Partition Equal Subset Sum

## Approach

- `Sum of the Array:` Calculate the total sum of all the elements in the array.
  If the total sum is odd, it is impossible to partition the array into two equal subsets, so return false.
- `Subset Sum Problem:` If the total sum is even, divide the sum by 2 to get the target sum for each subset.
  Now, we need to check if there is a subset in the array that sums up to this target. This turns the problem into a classic Subset Sum problem.
- `Dynamic Programming (DP) Setup:` Use a 1D boolean array (prev) of size target + 1. This array will help keep track of whether it's possible to achieve a certain sum using the elements of the array.
  Initialize prev[0] = true because it is always possible to get a sum of 0 by choosing no elements.
- `DP Transition:` Iterate through the array and update the prev array:
  For each element in the array, try to find all possible subset sums up to the target.
  For each sum from target down to the current element, check if the sum can be formed by either including the current element or excluding it.
- `Final Check:` After processing all the elements, check if prev[target] is true. If it is, that means there is a subset whose sum equals the target, and thus, the array can be partitioned into two equal subsets

## Complexity

- `Time Complexity:`
- Calculating Total Sum: This takes O(n) time, where n is the number of elements in the array, because we simply iterate through the array to compute the sum.
- Dynamic Programming (DP) Array Updates: For each element, we iterate over the target (which is half the total sum).
  Therefore, updating the DP array takes O(n _ target) time.
  Since target is totalSum / 2, the overall complexity becomes O(n _ (totalSum / 2)), or simply O(n \* totalSum).
- `Space Complexity:`
- We use a 1D DP array prev of size target + 1 (i.e., totalSum / 2 + 1), which results in a space complexity of O(totalSum / 2).
- The overall space complexity is O(totalSum).

## Key Learnings:

- `Dynamic Programming for Subset Sum:`This problem transforms into a Subset Sum problem where we need to check if a subset of the array can sum to half the total sum.
  This is a common technique used for partitioning problems.
- `Optimization Using 1D Array:`Instead of using a 2D DP table (which is typical for subset sum problems), we can optimize the space by using a 1D array and updating it in reverse order.
  This reduces the space complexity from O(n \* target) to O(target).
- `Understanding Edge Cases:`The problem is impossible if the total sum is odd because two equal integers cannot add up to an odd number. This is a quick check to avoid unnecessary computations.
- `Backtracking vs Dynamic Programming:`While it's possible to solve this problem using backtracking (exploring all subsets), it would be inefficient (exponential time complexity).
  Dynamic Programming significantly reduces the time complexity by avoiding redundant computations, making it a much more efficient approach.
- `Real-world Applications:`This partitioning technique is applicable in many real-world scenarios such as load balancing, partitioning a set of tasks, and memory allocation where equal division is required
