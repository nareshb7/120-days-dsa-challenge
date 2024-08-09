# Notes for Day 09: Longest Substring Without Repeating Characters

## Approach (Sliding window technique)

- we initialize two pointers `a_pointer`, `b_pointer` fro the sliding window
- create `max` variable  to maintain the max length of the substtring found 
- `hashSet` is a `Set` that stores the characters currently in the window
- implement the `while loop` runs while b_pointer is less than the length of the string
- if the character at b_pointer is not in the hashSet. add it to the hashSet after that increment the b_pointer then update the max with the current size of the hashSet
- if the character is at b_pointer is already in hashSet, remove the character at a_pointer from the hashMap and increment a_pointer
- after while loop return the max length of the longest substring without repeating chracters


## Complexity

- Time Complexity: O(n), where n is the length of the input string. This is because each character is processed at most twice: once when added to the Set and once when removed.
- Space Complexity: O(min(n,m)), where n is the length of the string and m is the size of the character set. This is because the Set stores the unique characters of the current window, which can be at most the size of the character set or the length of the string in the worst case.

## Key Learnings

- `Sliding window technique` - 
 `Concept:` The sliding window technique is used to maintain a window of characters that are currently being considered for the longest substring without repeating characters.
 `Implementation:` Two pointers (start and end) are used to represent the window. The start pointer moves only when a repeating character is found, while the end pointer iterates through the string.
