/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
 var longestCommonPrefix = function(arr1, arr2) {
  const prefixMap = new Map();
  
  // Step 1: Build the prefix map for arr1
  for (let num of arr1) {
      let strNum = num.toString();
      let prefix = "";
      for (let ch of strNum) {
          prefix += ch;
          prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
      }
  }
  
  let maxLength = 0;
  
  // Step 2: Check for common prefixes in arr2
  for (let num of arr2) {
      let strNum = num.toString();
      let prefix = "";
      for (let ch of strNum) {
          prefix += ch;
          if (prefixMap.has(prefix)) {
              maxLength = Math.max(maxLength, prefix.length);
          }
      }
  }
  
  return maxLength;
};

// 3043. Find the Length of the Longest Common Prefix

const arr1 = [1,10,100], arr2 = [1000]
// Output: 3
// Explanation: There are 3 pairs (arr1[i], arr2[j]):
// - The longest common prefix of (1, 1000) is 1.
// - The longest common prefix of (10, 1000) is 10.
// - The longest common prefix of (100, 1000) is 100.
// The longest common prefix is 100 with a length of 3.