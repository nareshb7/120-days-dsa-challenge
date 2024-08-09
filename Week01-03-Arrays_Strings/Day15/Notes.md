# Notes for Day 15: String to Integer (atoi)

## Approach

- First `remove` the `whitespaces` from the string
- Handle the edge case after trim if the `string` is `empty` `return 0`
- `Determine` the `sign` if str[0] is `-` sign will be the `-1`, or `str[0]` is `+` then sign will be `1`
- Now use the for loop to traverse the string if str[i] is not a numeric we dont need to check the value we can skip that iteration so use break to skip
- now `increment` the `result` value with str[i] value
- after incrementing the result check the result value is max or min value if it is then return min or max value
- `after` the `for loop` `return` the `result with sign`

## Complexity
- `Time Complexity:` O(n), where n is the length of the input string. We traverse the string once.
- `Space Complexity:` O(1), as we use a constant amount of extra space.

## Key Learnings
- `Trimming Whitespace:` Use trim() to handle leading and trailing spaces.
- `Sign Determination:` Check the first character for '+' or '-' to set the sign of the number.
- `Character to Integer Conversion:`  Iterate through the string and convert valid numeric characters to an integer.
- `Stopping at Non-Numeric Characters:` Stop processing the string as soon as a non-numeric character is encountered.
- `Handling Overflow:` Ensure the result stays within the 32-bit signed integer range, returning INT_MAX (2147483647) or INT_MIN (-2147483648) if necessary.
