# Notes for Day 86: Partition Labels

## Approach

- `Find Last Occurrences:` First, go through the string and store the last occurrence (index) of each character.
- `Initialize Pointers:` - `Use two pointers`- start to track the beginning of the current partition and end to track the farthest point this partition can go
- `Iterate Over the String:` For each character in the string, update the end pointer to the farthest index where any character within this partition occurs (using the precomputed last occurrences).
- `Create Partition:` When the current index i reaches the end, it means you've reached the end of a partition.
  Calculate the size of the partition (end - start + 1), store it, and move the start pointer to the next position.
- `Repeat Until End of String:` Continue this process for the entire string, creating partitions as you go.
- `Return the Result:` Once done, return the list of partition sizes

## Complexit

- `Time Complexity O(n):` First pass to compute the last occurrence of each character takes O(n), where n is the length of the string.
  Second pass to create partitions also takes O(n).
  Total time complexity is O(n).
- `Space Complexity O(1):` We only use an array of fixed size (26 for lowercase letters) to store the last occurrences, which is considered constant space.
  The result list partitions depends on the number of partitions, but it's relatively small compared to the input string, so the overall space complexity is O(1) (constant extra space).

## Key Learnings:

- `Precompute Information:` By precomputing the last occurrence of each character, we avoid multiple redundant operations (like lastIndexOf in the original approach), improving efficiency.
- `Two-Pointer Technique:` Using two pointers (start and end) helps in efficiently partitioning the string by dynamically adjusting the range of each partition.
- `Linear Time Efficiency:` The problem can be solved in linear time, O(n), by making just two passes through the string.
- `Constant Space Usage:` Since the additional space used is proportional to the size of the alphabet (26 letters), we effectively have constant space complexity
