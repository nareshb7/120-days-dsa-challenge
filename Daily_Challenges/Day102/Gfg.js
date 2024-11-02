class Solution {
    checkDuplicatesWithinK(arr, k) {
        // your code
        const map =new Map();
        const n = arr.length
        for (let i=0; i<n; i++) {
            const val = arr[i]
            if (map.has(val)){
                const prevIndex = map.get(val)
                if (i - prevIndex <= k) {
                    return true
                }else {
                    map.set(val, i)
                }
            }else {
                map.set(val, i)
            }
        }
        return false;
    }
}


// Kth distance

// Given an unsorted array arr and a number k which is smaller than the size of the array. Return true 
// if the array contains any duplicate within k distance throughout the array else false.

// Example
// Input: arr[] = [1, 2, 3, 4, 1, 2, 3, 4] and k = 3
// Output: false
// Explanation: All duplicates are more than k distance away.

