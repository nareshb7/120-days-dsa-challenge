# Notes for Day 18: Minimum Window Substring

## Approach

- Use a sliding window approach to expand and contract the window.
- Use two pointers to represent the window: left and right.
- Use a hash map to count the characters in t and another hash map to count the characters in the current window.
- Expand the window by moving the right pointer to the right until the window contains all the characters of t.
- Once the window contains all characters of t, contract the window by moving the left pointer to the right to find the smallest window that still contains all characters of t.

## Explanation:
- Initialization:
    tFreq stores the frequency of each character in t.
    left and right are the pointers for the sliding window.
    formed counts how many unique characters in t are currently in the window with the required frequency.
    required is the number of unique characters in t.
    windowCounts stores the frequency of characters in the current window.
    minLen, minLeft, and minRight are used to track the minimum window length and its boundaries.

- Expanding the window:
    Move the right pointer to the right.
    Update windowCounts with the current character.
    If the current character is in t and its frequency matches, increment formed.

- Contracting the window:
    While the window contains all characters of t, move the left pointer to the right to minimize the window.
    Update the result if the current window is smaller than the previous minimum.
    Update windowCounts and decrement formed if necessary.

- Return the minimum window if found, otherwise return an empty string.

## Complexity
- `Time Complexity: O(n)` - Each character in s is processed at most twice (once by right pointer and once by left pointer). Therefore, the time complexity is O(n), where n is the length of the string s.
- `Space Complexity: O(k)` - Uses two maps to store frequencies, which takes O(k) space, where k is the number of unique characters.

## Key Learnings:
- `Sliding Window Technique:`
    Useful for problems involving subarrays or substrings.
    Involves expanding and contracting a window (subarray/substr) to meet certain conditions.

- `Frequency Counting:`
    Use maps (or arrays for fixed character sets) to count character frequencies.
    Helps in efficiently checking if the current window contains all required characters.

- `Two-Pointer Approach:`
    Use two pointers (left and right) to manage the window boundaries.
    Adjust the pointers based on the conditions to find the optimal window.

- `Map vs Array for Frequency Counting:`
    Maps are flexible and handle dynamic character sets efficiently.
    Arrays can be more space and time-efficient for fixed character sets (e.g., ASCII).

- `Handling Edge Cases:`
    Always consider edge cases like empty strings or when the target string is longer than the source string.
