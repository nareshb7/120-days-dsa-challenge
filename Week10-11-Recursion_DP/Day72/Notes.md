# Notes for Day 72: Decode Ways

## Approach

- `Understanding the problem:` We need to decode a string of digits into letters, where:
'1' → 'A', '2' → 'B', ..., '26' → 'Z'.
Given a string s consisting of digits (e.g., "12"), find out how many ways we can decode it. For example:
"12" can be decoded as "AB" (1 → 'A' and 2 → 'B') or as "L" (12 → 'L').
- `Dynamic Programming (DP) Setup:` Use a DP array (dp[]) where each index represents the number of ways to decode the string up to that index.
Initialize dp[0] = 1 because there's one way to decode an empty string.
DP Transitions:

- `For each character in the string:`
Check if the single digit (e.g., '1' to '9') is valid (i.e., it can be decoded). If valid, add the number of ways from the previous index ( [i-1]).
Check if the two-digit number (e.g., '10' to '26') is valid. If valid, add the number of ways from two indices before (dp[i-2]).
- `Base Cases:` If the string starts with '0', return 0 because there's no valid decoding for '0'.
Handle cases where the string contains invalid two-digit numbers like '30', '40', etc., which can't be decoded.
Final Result:

The answer will be stored in dp[s.length], which gives the number of ways to decode the entire string

## Complexity

- `Time Complexity:` The algorithm iterates through the string s once, checking one or two characters at a time to see if they can be decoded.
For each character, there are a constant number of operations (checking if one or two characters are valid).
Thus, the time complexity is O(n), where n is the length of the string s.
- `Space Complexity:` We use an array dp[] of size n + 1 to store the number of ways to decode the string up to each index.
This results in a space complexity of O(n) due to the size of the dp array.
Alternatively, this space can be optimized to O(1) by using two variables instead of an entire array since we only need the last two states (dp[i-1] and dp[i-2])

## Key Learnings:

- `Dynamic Programming:` The problem can be solved efficiently using dynamic programming. This involves breaking the problem down into smaller subproblems (i.e., decoding the string up to each position) and building up the solution iteratively.
- `Two Transitions:` For each position i, you need to consider:
Single-digit decoding: If the character at position i-1 is a valid single digit ('1' to '9') Two-digit decoding: If the characters at positions i-2 and i-1 form a valid two-digit number ('10' to '26').
- `Edge Cases:` Handle cases with '0' carefully. '0' by itself is not a valid encoding, but it can be part of a valid two-digit encoding like '10' or '20'.
Strings starting with '0' or containing invalid numbers like '30', '40', etc., can't be decoded, and the solution should handle these scenarios by returning 0.
- `Space Optimization:` Although the DP array stores values for all indices, we only need the last two values (dp[i-1] and dp[i-2]) at any given time. This observation can help reduce space complexity from O(n) to O(1) if needed.
- `Efficient Handling of Multiple Options:` By using a simple DP array, we avoid recalculating the number of decoding ways for overlapping subproblems, which is a common benefit of dynamic programming over brute-force recursive approaches
