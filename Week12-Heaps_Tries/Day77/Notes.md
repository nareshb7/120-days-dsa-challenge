# Notes for Day 77: Sort Characters By Frequency

## Approach

- `Step 1: Build a Frequency Map` First, we count how many times each character appears in the string.
  This is done by creating a frequency map where the key is the character, and the value is the frequency (count of how many times it appears).
- `Step 2: Create Buckets` Since the maximum frequency of any character is limited by the length of the string s, we create buckets where each bucket index represents a frequency count.
  The idea is to group characters by how often they appear. If a character appears k times, we put it in the bucket at index k.
- `Step 3: Build the Result String` Now, we construct the result string by starting from the bucket with the highest frequency and moving downwards (from highest to lowest).
  For each bucket, we take all the characters and repeat them based on their frequency, then append them to the result string

## Complexity

- `Time Complexity: O(n)`, where n is the length of the string.
  Building the frequency map takes O(n).
  Filling the buckets and constructing the result string also takes O(n).
- `Space Complexity: O(n)` for the frequency map and buckets.

## Key Learnings:

- `Frequency Counting:` Use a hash map (or Map in JavaScript) to count how often each character appears in the string.
- `Bucket Sort Optimization:` Instead of sorting all characters (O(n log n)), use bucket sort to group characters by their frequency for an efficient O(n) solution.
- `Buckets Based on Frequency:` Create an array of buckets where each index represents a frequency, and store characters in the appropriate bucket based on how many times they appear.
- `Greedy Approach for Result Building:` Start from the highest frequency and build the result string by repeating characters according to their frequency.
- `Time Complexity Optimization:` Bucket sort helps reduce time complexity to O(n), making it more efficient than sorting when dealing with frequency-based problems.
- `Efficient String Manipulation:` Use string functions like repeat() to efficiently create the final result by repeating characters based on their count.
