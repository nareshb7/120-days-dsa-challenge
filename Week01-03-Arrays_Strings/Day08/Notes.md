# Notes for Day 08: Subarray Sum Equals K (Prefix Sums)

## Approach

- Use new Map() to create a Map object.
- hashMap.set(0, 1): This initializes the map with a sum of 0 having a frequency of 1.
- Update sum with the current element.
- Check if hashMap has sum - k. If it does, add the value (frequency) of sum - k to res.
- Update the frequency of the current sum in hashMap. If the sum already exists in the map, increment its frequency; otherwise, set it to 1.
- Return the Result: res contains the number of subarrays with sum equal to k.

## Complexity

- Time Complexity: O(n), where n is the length of the array. This is because we traverse the array once, and each operation (lookup and insert) in the Map is O(1) on average.
- Space Complexity: O(n), due to the storage of cumulative sums in the Map.

## Key Learnings

- `Cumulative Sum and Hashing:` Use cumulative sums to keep track of the sum up to the current index. Store cumulative sums in a hashmap (Map) to quickly check for the existence of a required subarray sum.
- `Handling Edge Cases:` Initialize the hashmap with {0: 1} to handle cases where the subarray starts from the beginning of the array.
