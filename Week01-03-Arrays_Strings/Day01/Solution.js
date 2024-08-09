const twoSum = (nums, target) => {
    const n = nums.length
    
    
    // using hash map
    const map = new Map()
    for(let i=0; i<n ;i++) {
        const el= target - nums[i]
        if (map.has(el)) {
            return [map.get(el),i]
        } else {
            map.set(nums[i], i)
        }
    }
    
    

    //Better approcah without hash
    // const arr = nums.sort()
    // let left = 0;
    // let right = n-1;
    // while(left < right) {
    //     const val = arr[left] + arr[right]
    //     if (val < target) {
    //         left++
    //     }else if (val > target) {
    //         right++
    //     }else {
    //         console.log("YES")
    //     }
    // }
    
    //Brute Force
    // for (let i=0; i<n; i++) {
    //     for (j = i+1; j<n; j++) {
    //         if (nums[i]+ nums[j] === target) {
    //             return [i,j]
    //         }
    //     }
    // }
    // return []
};

const arr = [1,2,8,5,4]
const target= 13
console.log("Result of twoSum is ::", twoSum(arr, target))