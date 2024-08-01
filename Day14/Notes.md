# Notes for Day 14: Group Anagrams (Hash Table)

## Approach

- Our goal is to `sort` the string and push into one array, if `sortedStr` value is already there
- Initialize `hash Map` `const hashMap = new Map()`
- Use the for of loop to traverse the array `for (const str of strs)`
- Sort the ith iteration string `const sortedStr = str.split("").sort().join("")`
- Check if sorted string is in the hashmap or not ` if(!hashMap.has(sortedStr))`
- If not initalize with empty array `hashMap.set(sortedStr, [])`
- After the conditional statement, push the ith string into into sortedStr array `hashMap.get(sortedStr).push(str)`
- return the `hashMap` by converting into array `return Array.from(hashMap.values())`

## Complexity
- `Time Complexity: O(N⋅KlogK)`: where N is the number of strings and K is the maximum length of a string, due to sorting each string. 
- `Space Complexity: O(n.k)`: due to the storage in the hash map.

## Key Learnings
- `Anagrams:` Words are anagrams if they have the same characters in the same frequency.
- `Grouping Anagrams:` Append original words to the corresponding array in the hash map based on the sorted key.
- `Result Extraction:` Convert the values of the hash map to an array to get the grouped anagrams.
