/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums.length ==0) return -1
    if (nums.length == 1) return nums[0]
    
    let left =0; 
    let right = nums.length -1
    if (nums[right] >= nums[0]) {
        return nums[0];
    }
    while (left < right) {
        let midPoint = Math.floor(left + (right - left) / 2);
        if (midPoint > 0 && nums[midPoint] < nums[midPoint -1]) {
            return nums[midPoint]
        } else if (nums[left] <= nums[midPoint] && nums[midPoint] > nums[right]) {
            left = midPoint +1
        } else {
            right = midPoint -1
        }
    }
    return nums[left]
};

const nums = [3,4,5,1,2]
console.log("Min val in sorted array ::", findMin(nums))// output 1
//Explanation: The original array was [1,2,3,4,5] rotated 3 times.