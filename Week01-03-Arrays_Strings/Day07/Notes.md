# Notes for Day 07: Implement strStr() (Find the Index of the First Occurrence in a String - string matching)

## Approach

- `Edge Case:` If needle is an empty string, return 0.
- Calculate the length of needle and haystack.
- Use a for loop to iterate through haystack and in each iteration we have to compare with needle so for that we have to use nested loop
- in the nested loop if the current index value of is not matching with the needle current index , then immediately break the loop
- if there is no break happened in nested loop means it defintely matches with haystack, after the for loop we have to check j is matching with the needle length or not , this approach is called sliding window technique
- If it matches, return the current index i.
- If no match is found after the loop, return -1.

## Complexity

- Time complexity: O(n*m)
- Space complexity: O(1)

## Key Learnings

- `String Search Fundamentals:` Understanding how to search for a substring within a string, a fundamental problem in computer science.
- `Edge Case Handling:` Always consider edge cases, such as empty strings and strings where the length of the substring is greater than the string itself.
- `Sliding Window Technique:` Learning to use the sliding window technique to efficiently check substrings without creating new strings, reducing overhead.
