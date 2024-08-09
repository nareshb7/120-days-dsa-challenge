# Notes for Day 21: Longest Palindromic Substring

## Approach
- Check if the string is empty: If it is, return an empty string.
- Initialize start and end pointers: These will track the start and end of the longest palindrome.
- Create a helper function (expandAroundCenter):
- Expand around a center point in the string to check for a palindrome.
- Return the length of the palindrome found.
- Iterate through each character in the string:
- Check for the longest odd-length palindrome centered at each character.
- Check for the longest even-length palindrome centered between each pair of adjacent characters.
- Update start and end: If a longer palindrome is found, update the pointers.
- Return the longest palindromic substring: Extract the substring using the updated start and end pointers.

## Complexity
- `Time Complexity:` O(n²) – In the worst case, we expand around each center up to the length of the string.
- `Space Complexity:` O(1) – We only use a few extra variables for tracking indices and lengths.

## Key Learnings:
- `Palindromic Substrings:` Understanding the structure and characteristics of palindromes can simplify the problem.
- `Center Expansion Technique:` This is an effective method for identifying palindromes by expanding outwards from the center.
- `Dynamic Window Management:` Adjusting the start and end indices dynamically based on the discovered palindrome lengths.
