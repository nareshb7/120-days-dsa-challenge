# Notes for Day 05: Valid Palindrome

## Approach

- We are using `two pointer approach` to iterate through the array
- we need to check only alpha numeric values so, create a `isAlphaNum(c)` helper function to check each value
- then tale two variables `left =0` and `right = len-1`, 
- now by using `while loop` , we are checking the elements two pointer values are matching or not, so each iteration we have to `incerement the left value and `decrement the right` value
- so in some cases if u `found` the value is `not matching` with the other end val then it must `not be the palindrome` then we can return `false`

## Complexity

- Time complexity: O(n)
- Space complexity: O(n)


## Key Learnings

- `Two-Pointer Technique:` Efficiently check for palindromes by using two pointers moving towards the center from both ends.
- `Character Validation:` Use a helper function to check if a character is alphanumeric, ensuring only valid characters are considered.
- `String Normalization:` Convert the string to lowercase to handle case insensitivity.
