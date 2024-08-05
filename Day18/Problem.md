# Day 18: Minimum Window Substring

## Problem Statement
- Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 
- If there is no such substring, return the empty string "".

## Example

- Input: s = "ADOBECODEBANC", t = "ABC"
- Output: "BANC"
- Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

2. **Example 2:**
- Input: s = "a", t = "a"
- Output: "a"
- Explanation: The entire string s is the minimum window.

3. **Example 3:**
- Input: s = "a", t = "aa"
- Output: ""
- Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.


# Daily Challenge - 2053. Kth Distinct String in an Array
