var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b)
  let maxDis = nums[nums.length - 1] - nums[0]
  let disCounts = new Array(maxDis + 1).fill(0)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      disCounts[nums[i] - nums[j]]++
    }
  }
  let t = 0
  for (let i = 0; i < disCounts.length; i++) {
    t += disCounts[i]
    if (t >= k) return i
  }
};

// 719. Find K-th Smallest Pair Distance
const nums = [1,3,1], k = 1
console.log("Kth Smallest Pair Distance:::", smallestDistancePair(nums, k))
// Output: 0
// Explanation: Here are all the pairs:
// (1,3) -> 2
// (1,1) -> 0
// (3,1) -> 2
// Then the 1st smallest distance pair is (1,1), and its distance is 0.