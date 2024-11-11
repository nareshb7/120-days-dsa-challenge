class Solution {
  // Function to find minimum number of increments/decrements required.
  minIncrements(arr) {
      // your code here
      let n = arr.length;
      arr.sort((a,b) => a-b);
      let lastNum = arr[0];
      let steps =0;
      for (let i=1; i<n; i++){
          if (lastNum < arr[i]) {
              lastNum = arr[i];
              
          } else {
              lastNum++;
              steps+=(lastNum - arr[i])
          }
      }
      return steps
  }
}

// Make array elements unique

// Given an array arr[ ], your task is to find the minimum number of increment operations required to make all the elements 
// of the array unique. i.e.- no value in the array should occur more than once. In one operation, a value can be incremented 
// by 1 only.

// Example: 
// Input: arr[] = [1, 2, 2]
// Output: 1
// Explanation: If we increase arr[2] by 1 then the resulting array becomes {1, 2, 3} and has all unique values.Hence, 
// the answer is 1 in this case.