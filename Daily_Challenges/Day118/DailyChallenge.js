var decrypt = function (code, k) {
  const n = code.length;
  if (k === 0) {
    return new Array(n).fill(0);
  }

  const result = new Array(n).fill(0);
  let sum = 0;

  // Determine the range of the sliding window based on the value of k
  const start = k > 0 ? 1 : n + k; // Start after `i` for k > 0, or wrap around for k < 0
  const end = k > 0 ? k : n - 1; // Include the next `k` elements for k > 0 or previous `k` for k < 0

  // Initialize the sliding window sum
  for (let i = start; i <= end; i++) {
    sum += code[i % n];
  }

  // Iterate through each element in the array
  for (let i = 0; i < n; i++) {
    result[i] = sum;
    // Slide the window: subtract the element that goes out and add the next element
    sum -= code[(start + i) % n];
    sum += code[(end + 1 + i) % n];
  }

  return result;
};

// 1652. Defuse the Bomb

// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

// Example 1:

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

// var decrypt = function(code, k) {
//   if (k=== 0)  {
//       return new Array(code.length).fill(0)
//   }
//   const n = code.length

//   let result =[];

//   for (let i=0; i<n; i++) {
//       if (k> 0) {
//           let sum  =0
//           for (let j=1; j<=k; j++) {
//               const index=  (i+j) %n
//               sum+=code[index]
//           }
//           result.push(sum)
//       }

//       if (k<0) {
//           let sum  =0
//           const num = Math.abs(k)
//           for (let j=1; j<=num; j++) {
//               let index= (i-j) %n
//               if (index <0) {
//                   index = n- Math.abs(index)
//               }
//               // console.log("idez::", index)
//               sum+=code[index]
//           }
//           // console.log("sun::", sum)
//           result.push(sum)
//       }
//   }
//   return result
// };
