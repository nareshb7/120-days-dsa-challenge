class Solution {
  findSplit(arr) {
    // Return an array of possible answer, driver code will judge and return true or
    // false based on
    const sum = arr.reduce((acc, val) => acc + val, 0);
    if (sum % 3 !== 0) return [-1, -1];

    const n = arr.length;
    let i = 0;
    let count = 0;
    let index = -1;
    let eachPart = sum / 3;

    while (i < n) {
      count += arr[i];
      if (count === eachPart) {
        if (index == -1) {
          index = i;
          count = 0;
        } else {
          return [index, i];
        }
      } else if (count > eachPart) {
        return [-1, -1];
      }
      i++;
    }
    return [-1, -1];
  }
}

// Split array in three equal sum subarrays

// Given an array, arr[], determine if arr can be split into three consecutive parts such that the sum of each part is equal.
// If possible, return any index pair(i, j) in an array such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]),
// otherwise return an array {-1,-1}.

// Note: Since multiple answers are possible, return any of them. The driver code will print true if it is correct otherwise,
// it will print false.

// Example
// Input:  arr[] = [1, 3, 4, 0, 4]
// Output: true
// Explanation: [1, 2] is valid pair as sum of subarray arr[0..1] is equal to sum of subarray arr[2..3] and also to
// sum of subarray arr[4..4]. The sum is 4, so driver code prints true.
