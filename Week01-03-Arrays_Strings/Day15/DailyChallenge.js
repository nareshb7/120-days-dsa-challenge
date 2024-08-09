/**
 * @param {number[]} nums
 * @return {number}
 */
 var minSwaps = function(nums) {
  const totalOnes = nums.reduce((acc, num) => acc+num, 0)
  const n = nums.length;
  const extended = nums.concat(nums)
  let currentOnes =0
  for (let i=0; i< totalOnes ; i++ ) {
      currentOnes+= extended[i]
  }
  let maxOnes = currentOnes
  for (let i=1;i<n; i++ ) {
      currentOnes = currentOnes - extended[i-1] + extended[i-1+ totalOnes]
      maxOnes = Math.max(currentOnes, maxOnes)
  }
  return totalOnes- maxOnes
};

//2134. Minimum Swaps to Group All 1's Together II

const nums = [0,1,0,1,1,0,0]
console.log("Min Swaps::", minSwaps(nums)) // Output: 1
// Explanation: Here are a few of the ways to group all the 1's together:
// [0,0,1,1,1,0,0] using 1 swap.
// [0,1,1,1,0,0,0] using 1 swap.
// [1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
// There is no way to group all 1's together with 0 swaps.
// Thus, the minimum number of swaps required is 1.