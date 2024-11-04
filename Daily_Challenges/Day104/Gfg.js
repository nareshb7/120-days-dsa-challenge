// User function Template for javascript
class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    findTriplets(arr) {
        // write your code here
    const result = new Set(); // Use a set to avoid duplicate triplets
    const indexMap = new Map();

    // Fill the index map with all indices of each number in the array
    for (let i = 0; i < arr.length; i++) {
        if (!indexMap.has(arr[i])) {
            indexMap.set(arr[i], []);
        }
        indexMap.get(arr[i]).push(i);
    }

    // Traverse each element as the first element of the triplet
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            const target = -(arr[i] + arr[j]); // Find the third element

            // Check if the target exists in the map
            if (indexMap.has(target)) {
                // Iterate through all indices of the target
                for (let k of indexMap.get(target)) {
                    // Ensure the indices are unique and in order
                    if (k > j) {
                        const triplet = [i, j, k].sort((a, b) => a - b); // Sort to avoid duplicates
                        result.add(JSON.stringify(triplet)); // Use string representation to ensure uniqueness
                    }
                }
            }
        }
    }

    // Convert result set back to an array of arrays
    return Array.from(result).map(triplet => JSON.parse(triplet));
    }
}

// Find All Triplets with Zero Sum


// Input: arr[] = [0, -1, 2, -3, 1]
// Output: [[0, 1, 4], [2, 3, 4]]
// Explanation: Triplets with sum 0 are:
// arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
// arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0

