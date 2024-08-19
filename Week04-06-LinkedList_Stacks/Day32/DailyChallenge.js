/**
 * @param {number} n
 * @return {number}
 */
 var minSteps = function(n) {
  if (n === 1) return 0;
  
  let steps = 0;
  let factor = 2;
  
  while (n > 1) {
      while (n % factor === 0) {
          steps += factor;
          n = Math.floor(n / factor);
      }
      factor++;
  }
  
  return steps;
};

// 650. 2 Keys Keyboard
const n = 3
console.log('min steps:::', minSteps(n))

// Output: 3
// Explanation: Initially, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.