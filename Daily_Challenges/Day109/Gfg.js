class Solution {
  minSum(arr) {
      // code here
       // Step 1: Sort the array
      arr.sort((a, b) => a - b);
  
  let num1 = "";
  let num2 = "";
  
  // Step 2: Distribute digits to form two numbers
  for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
          num1 += arr[i];
      } else {
          num2 += arr[i];
      }
  }
  
  // Step 3: Add the two numbers as strings to avoid scientific notation
  function addStrings(str1, str2) {
      let carry = 0, result = [];
      let i = str1.length - 1, j = str2.length - 1;
      
      while (i >= 0 || j >= 0 || carry > 0) {
          const digit1 = i >= 0 ? +str1[i--] : 0;
          const digit2 = j >= 0 ? +str2[j--] : 0;
          const sum = digit1 + digit2 + carry;
          result.push(sum % 10);
          carry = Math.floor(sum / 10);
      }
      
      return result.reverse().join('');
  }
  
  // Step 4: Return the sum of num1 and num2 as a string
  const sum = addStrings(num1, num2);
  return sum.replace(/^0+/, '') || "0";
  }
}

// Minimum sum

// Given an array arr[] such that each element is in the range [0 - 9], find the minimum possible sum of two 
// numbers formed using the elements of the array. All digits in the given array must be used to form the two numbers. 
// Return a string without leading zeroes.


// Example:
// Input: arr[] = [6, 8, 4, 5, 2, 3]
// Output: 604
// Explanation: The minimum sum is formed by numbers 358 and 246.