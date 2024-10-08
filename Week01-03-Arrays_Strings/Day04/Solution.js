/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (arr, start, end) => {
  while (start < end) {
    const swap = arr[start];
    arr[start] = arr[end];
    arr[end] = swap;
    start++;
    end--;
  }
};
const rotate = (nums, k) => {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);// revese whole array - [7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); // reverse the k part - [5,6,7,1,2,3,4]
  reverse(nums, k, nums.length - 1); // reverse the remaining part - [5,6,7,1,2,3,4]
  return nums;

  // k =  k% nums.length
  // // we are splicing the last part of the array using k
  // let end = nums.splice(-k, k)
  // // add the last part in the starting of nums array
  // nums.splice(0, 0, ...end)
  // return nums

  // reverse the array
  // let l =0, r = nums.length-1
  // while (l< r) {
  //     const num = nums[l]
  //     nums[l] = nums[r]
  //     nums[r] = num
  //     l++
  //     r--
  // }
  // reverse the first part
  // l =0, r = k-1
  // while (l<r) {
  //     const num = nums[l]
  //     nums[l] = nums[r]
  //     nums[r] = num
  //     l++
  //     r--
  // }
  // reverse the second part
  // l = k, r = nums.length - 1
  // while (l<r) {
  //     const num = nums[l]
  //     nums[l] = nums[r]
  //     nums[r] = num
  //     l++
  //     r--
  // }

  // just popping the last item and assigning in start of the array
  // for  (let i=0;i<k; i++) {
  //     nums.unshift(nums.pop())
  // }
};

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
// Output: [5,6,7,1,2,3,4]
console.log("Rotate Array::", rotate(nums, k));
