/**
 * @param {number[]} nums
 * @return {number}
 */

// Space Complexitiy - O(1)
// var rob = function(nums) {
//     let prev = nums[0]
//     let prev2 = 0;
//     for (let i=1; i<nums.length; i++) {
//         let take = nums[i]
//         if (i>1) take+=prev2
//         let notTake = 0+ prev
//         let curr = Math.max(take, notTake)
//         prev2 = prev
//         prev = curr
//     }

//     return prev
// };
var rob = function(nums) {
  const len = nums.length;
  const dp = new Array(len).fill(-1)

  const f = (ind, nums, dp)=> {
      if (ind == 0) return nums[ind];
      if (ind <0) return 0;
      if (dp[ind] !== -1) return dp[ind];
      
      let pick =  nums[ind] + f(ind-2, nums, dp)
      let notPick = 0 + f(ind-1, nums, dp)

      dp[ind] =  Math.max(pick, notPick)
      return dp[ind]
  }

  return f(len-1, nums, dp)
};

const nums = [1,2,3,1]
console.log("Total amount:::", rob(nums))
// Output: 4