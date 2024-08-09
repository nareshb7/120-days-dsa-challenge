var canBeEqual = function(targetArray, currentArray) {
    if (targetArray.length !== currentArray.length) {
      return false;
  }

  const count = new Array(1001).fill(0);
  for (let i = 0; i < targetArray.length; i++) {
      count[targetArray[i]]++;
      count[currentArray[i]]--;
  }

  for (let c of count) {
      if (c !== 0) {
          return false;
      }
  }

  return true;
};
//1460. Make Two Arrays Equal by Reversing Subarrays
const target = [1,2,3,4], arr = [2,4,1,3]
console.log("Is subarrays are equal::", canBeEqual(target, arr))
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.