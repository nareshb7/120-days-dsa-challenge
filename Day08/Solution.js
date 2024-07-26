/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  let hashMap = new Map()
  hashMap.set(0,1)
  let res =0
  let sum =0
  for (let i=0; i<nums.length; i++) {
      sum+=nums[i]
      if(hashMap.has(sum-k)) {
          res+= hashMap.get(sum-k)
      }
      hashMap.set(sum, (hashMap.get(sum) || 0) + 1);
  }
  return res
  // let hashMap ={0: 1}
  // 
  // for (let i=0; i< nums.length; i++) {
  //     sum+=nums[i]
  //     if(sum-k in hashMap){
  //         res+= hashMap[sum-k]
  //     }
  //     hashMap[sum] = hashMap[sum] ? hashMap[sum]+ 1: 1
  // }
  // return res
  
};

const arr = [1,1,1]
const k =2 // indices- [0,1], [1,2]
console.log("Sub Array::", subarraySum(arr, k))