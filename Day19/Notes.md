# Notes for Day 19: Integer to Roman

## Approach

- Initialization: Define arrays for Roman notations and their corresponding values.
- Loop Through Values: Iterate through the values array and for each value, repeatedly subtract it from the number and append the corresponding Roman notation to the result string.
- Return the Result: Once the number is reduced to zero, return the constructed Roman numeral string.

## Complexity
- `Time Complexity:` O(n), where n is the value of the integer. The while loop iterates proportionally to the size of the input number.
- `Space Complexity:` O(1), as the space used for the result string is proportional to the size of the output Roman numeral, which is constant relative to the input number

## Key Learnings:
- `Roman Numeral System:` Understanding the basic Roman numerals and their corresponding values.
- `Greedy Algorithm:` Using a greedy approach to repeatedly subtract the largest possible value to construct the Roman numeral.
- `Efficient Looping:` The nested loop structure allows efficient construction of the result by iterating over the values and their notations
