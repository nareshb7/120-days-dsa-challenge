/**
 * @param {string} s
 * @return {number}
 */
 var minSwaps = function(s) {
  // Initialize a variable to keep track of unmatched opening brackets
  let stackSize = 0;

  // Iterate through each character in the input string
  for (let ch of s) {
      if (ch === '[') {
          // If we encounter an opening bracket, increment the stack size
          stackSize++;
      } else {
          // If we encounter a closing bracket
          if (stackSize > 0) {
              // If there's a matching opening bracket (stackSize > 0),
              // decrement the stack size
              stackSize--;
          }
          // If stackSize is 0, it means we have an unmatched closing bracket,
          // but we don't need to do anything special for this case
      }
  }

  // Calculate the minimum number of swaps needed
  // We need to swap half of the remaining unmatched brackets
  // Use Math.floor to round down the division result after adding 1
  return Math.floor((stackSize + 1) / 2);
};


// 1963. Minimum Number of Swaps to Make the String Balanced

// Input: s = "][]["
// Output: 1
// Explanation: You can make the string balanced by swapping index 0 with index 3.
// The resulting string is "[[]]".