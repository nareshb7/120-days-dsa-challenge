var rangeSum = function(nums, n, left, right) {
    const MOD = 10**9 +7
    const subArraySums =[]
    // Generate all subarray sums
    for (let i=0; i<n; i++) {
        let currentSum =0;
        for (let j=i; j<n; j++) {
            currentSum+= nums[j]
            subArraySums.push(currentSum)
        }
    }
    // Sort the list of sums
    subArraySums.sort((a, b) => a - b);

     // Calculate the sum from index left to right (1-based)
    let result =0
    for (let k= left-1; k< right; k++) {
        result = (result+ subArraySums[k])% MOD
    }
    return result
};

// 1508. Range Sum of Sorted Subarray Sums
const nums = [1,2,3,4], n = 4, left = 1, right = 5
console.log("Range Sum of Sorted Subarray Sums::", rangeSum(nums,n,left,right))
// Output: 13 
// Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. 
// After sorting them in non-decreasing order we have the 
// new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. 
// The sum of the numbers from index le = 1 to ri = 5 is 
// 1 + 2 + 3 + 3 + 4 = 13. 