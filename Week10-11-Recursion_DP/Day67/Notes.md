# Notes for Day 67: Longest Increasing Subsequence

## Approach

- `Initialization:` If the array is empty (nums.length === 0), return 0 because there are no elements.
Create a dp array of the same length as nums, where each element is initialized to 1. This is because the minimum length of an increasing subsequence that includes the current element is 1 (the element itself).
- `Iterate Over Elements:` Traverse the array using two nested loops:
The outer loop runs from the second element (i = 1) to the last element of nums.
The inner loop runs from the first element (j = 0) to the element just before i.
- `Check Condition:` For each i, compare it with every previous element (j). If nums[j] < nums[i], it means that nums[i] can extend the increasing subsequence ending at nums[j].
Update dp[i] to the maximum value between dp[i] and 1 + dp[j].
- `Update DP Array:` The value of dp[i] will store the length of the longest increasing subsequence ending at nums[i].
- `Find the Result:` After filling the dp array, the result is the maximum value in dp, which gives the length of the longest increasing subsequence.

## Complexity

- `Time Complexity:` The time complexity is O(n²) because we have two nested loops:
Outer loop: runs for each element of the array (n iterations).
Inner loop: for each i, it checks all previous elements (j), which can go up to i times.
- `Space Complexity:` The space complexity is O(n) because of the dp array used to store the length of the longest increasing subsequence at each index

## Key Learnings:

- `Dynamic Programming Approach:` We use a dp array to store the solution to subproblems, where dp[i] contains the length of the longest increasing subsequence that ends at index i.
- `Subsequence Property:` If an element nums[i] is greater than a previous element nums[j], it can extend the subsequence ending at nums[j] by including nums[i].
- `Filling the DP Array:` For each i, check every j before it. If nums[j] < nums[i], update dp[i] to be the maximum of its current value and dp[j] + 1.
- `Maximizing the Result:` The result is the maximum value in the dp array, which gives the length of the longest increasing subsequence.
- `Inefficient for Large Arrays:` While O(n²) is manageable for medium-sized arrays, this approach may become slow for very large arrays. An optimization using binary search can reduce the time complexity to O(n log n)
