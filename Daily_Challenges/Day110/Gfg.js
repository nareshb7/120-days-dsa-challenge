class Solution {
  // Function to return a list containing the union of the two arrays.
  findUnion(a, b) {
    // your code here
    const concat = [...a, ...b];
    const arr = new Set(concat);
    return Array.from(arr).sort((a, b) => a - b);
  }
}
// Union of Two Sorted Arrays with Distinct Elements

// Given two sorted arrays a[] and b[], where each array contains distinct elements , the task is to return the elements in
// the union of the two arrays in sorted order.
// Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

// Example:
// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: 1 2 3 4 5 6 7
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.
