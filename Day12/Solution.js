/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if (nums.length === 0) return -1
    let left =0, right = nums.length -1
    while (left < right) {
        let midPoint = Math.floor(left + (right-left)/2)
        if (nums[midPoint] > nums[right]){
            left = midPoint+1
        } else  {
            right = midPoint
        }
    }
    let start = left
    left =0, right = nums.length -1
    if (target >= nums[start] && target <= nums[right]) {
        left = start
    } else {
        right = start
    }
    while(left <= right) {
        let midPoint = Math.floor(left+ (right-left)/2)
        if (nums[midPoint] === target) {
            return midPoint
        } else if ( nums[midPoint] < target){
            left = midPoint +1
        } else {
            right = midPoint-1
        }
    }
    return -1
};
const nums = [4,5,6,7,0,1,2], target = 2
console.log(`Index of ${target} is ::`, search(nums, target))