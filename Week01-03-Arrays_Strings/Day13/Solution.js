/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // Using hashMap (best suitable for unsorted array)
    const map = new Map()
    for (let i=0; i< numbers.length; i++) {
        const complement = target - numbers[i]
        if (map.has(complement)) {
            return [map.get(complement)+1, i+1]
        }
        map.set(numbers[i],i)
    }
    return []
    // using two pointer (suitable for only sorted array)
    //   let left =0
    //   let right = numbers.length -1
    //   while(left < right) {
    //       let sum = numbers[left] + numbers[right]
    //       if (sum === target) {
    //           return [left +1, right+1]
    //       } else if (sum < target) {
    //           left++
    //       } else {
    //           right--
    //       }
    //   }
    // return []
};

const numbers = [2,7,11,15], target = 9
console.log(`Indexes of sum of ${target}`, twoSum(numbers, target)) // Output: [1,2]