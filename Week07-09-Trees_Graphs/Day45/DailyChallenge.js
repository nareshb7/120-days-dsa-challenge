/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
  let result = new Array(m).fill().map(() => []);
  switch (m * n === original.length ? 1 : 0) {
      case 1:
          let i = 0;
          while (i < m) {
              result[i] = original.slice(i * n, i * n + n);
              i++;
          }
          break;
      default:
          return [];
  }
  return result;
};

// 2022. Convert 1D Array Into 2D Array

// Input: original = [1,2,3,4], m = 2, n = 2
// Output: [[1,2],[3,4]]
// Explanation: The constructed 2D array should contain 2 rows and 2 columns.
// The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
// The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.