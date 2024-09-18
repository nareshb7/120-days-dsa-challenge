/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let array = nums.map(String);

  // Custom sorting with a comparator function
  array.sort((a, b) => (b + a).localeCompare(a + b));

  // Handle the case where the largest number is "0"
  if (array[0] === "0") {
    return "0";
  }

  // Build the largest number from the sorted array
  return array.join("");
};

// 179. Largest Number
const nums = [3, 30, 34, 5, 9];
console.log("Largest Number::", largestNumber(nums));
// Output: "9534330"
