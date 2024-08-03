# Notes for Day 16: Longest Common Prefix

## Approach

- Edge Case: if the input array is empty return ""
- Initalize prefix: start with the first string as initial prefix
- Use the for loop to traverse the array
- Check if the current string contains the prefix at the beginning
- If not, shorten the prefix by one character from the end and check again using while loop
- Repeat until the prefix is found at the beginning of the current string or the prefix becomes empty.
- Return the Prefix: After iterating through all strings, return the resulting prefix.

## Complexity
- `Time Complexity:` O(S), where S is the sum of all characters in all strings.
- `Space Complexity:` O(1), since no additional space is used other than variables.

## Key Learnings
- `Iterate through Strings:` Start with the first string as the initial prefix.
- `Shorten Prefix:` Gradually reduce the prefix until it matches the beginning of each string.
- `Edge Cases:` Handle empty arrays and no common prefix scenarios.
- `Efficient Check:` Use indexOf to check if the prefix matches the start of each string.
