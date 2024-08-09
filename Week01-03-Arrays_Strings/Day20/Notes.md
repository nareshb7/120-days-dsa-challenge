# Notes for Day 20: Roman to Integer

## Approach

- Initialization: Define arrays for Roman notations and their corresponding values and define result variable.
- Loop Through Values: Iterate through the string and check if current char is less than the next char value subtract it from the result other wise add the curent char value to result 
- Return the Result: Once the iteration is completed return the result

## Complexity
- `Time Complexity:` O(n), where n is the length of the string s.
- `Space Complexity:` O(1), as the space used for the result string is proportional to the size of the output integer, which is constant relative to the input roman value

## Key Learnings:
- `HashMap (Object) for Lookup:` The roman object provides constant-time lookup for the values of Roman numerals.
- `Single Iteration:` The for-loop iterates through each character of the string once, ensuring linear time complexity.
