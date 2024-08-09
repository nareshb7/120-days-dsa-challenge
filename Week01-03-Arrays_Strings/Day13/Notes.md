# Notes for Day 13: Two Sum II - Input Array Is Sorted

## Approach (HashTable, Two Pointer)

### Two pointer technique is only suitable for sorted array
### HashTable is best suited for unsorted array and sorted array

- Initialize hashMap `const hashMap = new Map()`
- Use the `for loop` to traverse the array
- First get the complement variable by subtractiing ith element from the target `const complement = target - nums[i]`
- Check if the complement value is already in the hashMap or not  `if (hashMap.has(complement))`
- If so, return the complement index +1, i+1 `return [hashMap.get(complement)+1, i+1]`
- Now we need to update the hashMap with current value and its index, `hashMap.set(nums[i], i)`

## Complexity
- `Time Complexity: O(n)`: This is because we’re using for loop to traverse the array
- `Space Complexity: O(n)`: This is because we are using `hashMap` and every iteration we are adding new value to the map `worst case` it will be `O(n)`

## Key Learnings
- `Efficient Lookups:` Hashmaps provide fast lookups with average O(1) time complexity.
- `Complement Search:` Calculate the complement (target - current element) and check if it exists in the hashmap.
