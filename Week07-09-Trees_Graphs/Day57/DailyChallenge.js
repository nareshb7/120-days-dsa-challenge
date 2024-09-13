/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
 var xorQueries = function(arr, queries) {
    const pre = []
    pre[0] = arr[0]
    for (let i=1; i< arr.length; i++) {
        pre[i] =pre[i-1] ^ arr[i];
    }
    const result =[]
    for (const [left, right] of queries) {
        if(left ==0) {
            result.push(pre[right])
        } else {
            result.push(pre[right] ^ pre[left-1])
        }
    }
    return result
};

// 1310. XOR Queries of a Subarray
const arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
console.log('Subarray::', xorQueries(arr, queries))
// Output: [2,7,14,8] 
// Explanation: 
// The binary representation of the elements in the array are:
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8