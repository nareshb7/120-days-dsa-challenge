/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const res = [];
  let l = 0;
  let consecCnt = 1;

  for (let r = 0; r < nums.length; r++) {
    if (r > 0 && nums[r - 1] + 1 === nums[r]) {
      consecCnt++;
    }

    if (r - l + 1 > k) {
      if (nums[l] + 1 === nums[l + 1]) {
        consecCnt--;
      }
      l++;
    }

    if (r - l + 1 === k) {
      res.push(consecCnt === k ? nums[r] : -1);
    }
  }

  return res;
  //     const sub = [];
  //     const res =[]
  //     // util fn to check
  //     const checkIsSorted =(arr) => {
  //         let val =arr[0];
  //         for (let i=1; i<arr.length; i++) {
  //             val++;
  //             const curr = arr[i];
  //             if (val !== curr) {
  //                 return -1
  //             }
  //         }
  //         return val;
  //     }

  //     // iterate over the nums arr
  //     for (let i=0; i< nums.length-k+1; i++) {
  //         const arr = nums.slice(i, i+k);
  //         // console.log('arr::', arr)
  //         const max = checkIsSorted(arr);
  //         if (max) {
  //             res.push(max)
  //         }
  //     }
  //     return res
};

// 3254. Find the Power of K-Size Subarrays I

// You are given an array of integers nums of length n and a positive integer k.
// The power of an array is defined as:
// Its maximum element if all of its elements are consecutive and sorted in ascending order.
// -1 otherwise.
// You need to find the power of all subarrays of nums of size k.
// Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].

// Example 1:
// Input: nums = [1,2,3,4,3,2,5], k = 3
// Output: [3,4,-1,-1,-1]

// Explanation:
// There are 5 subarrays of nums of size 3:
// [1, 2, 3] with the maximum element 3.
// [2, 3, 4] with the maximum element 4.
// [3, 4, 3] whose elements are not consecutive.
// [4, 3, 2] whose elements are not sorted.
// [3, 2, 5] whose elements are not consecutive
