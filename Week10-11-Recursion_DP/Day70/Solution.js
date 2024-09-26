/**
 * @param {number[]} nums
 * @return {boolean}
 */

const subsetSumToK = (n, k, arr) => {
  let prev = new Array(k + 1).fill(false);
  let curr = new Array(k + 1).fill(false);
  prev[0] = true;

  if (arr[0] <= k) prev[arr[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let target = 1; target <= k; target++) {
      let notTake = prev[target];
      let take = false;
      if (arr[i] <= target) take = prev[target - arr[i]];
      curr[target] = take || notTake;
    }
    prev = [...curr];
  }
  return prev[k];
};

var canPartition = function (nums) {
  let totalSum = 0;

  for (const num of nums) {
    totalSum += num;
  }
  if (totalSum % 2 == 1) return false;

  const target = totalSum / 2;
  const len = nums.length;
  return subsetSumToK(len, target, nums);
};

const nums = [1,5,11,5]
console.log("can partition::", canPartition(nums))
// Output: true