# Notes for Day 06: Reverse String (string manipulation)

## Approach

- We are using `two pointer approach` to iterate through the array
- we have to take `two` pointers `l=0`, `r=len-1`
- Using `while loop(l < r)` we iterate through array by `swapping` r index value with l  and l index value with r
- In each iteration we have to update the `pointer` position to `next position`

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)

## Key Learnings

- `Two-Pointer Technique:` Efficiently check for palindromes by using two pointers moving towards the center from both ends.
- `In-Place Modification:` The string is reversed in place, resulting in constant space complexity 𝑂(1)
- `Simplicity:` The approach is simple and easy to understand, involving straightforward swapping of characters from the ends towards the center.
