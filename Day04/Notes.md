# Notes for Day 04: Rotate Array

## Approach


### 1 T.C - O(n) , S.C - O(1)
- first we need to get the `k` value by doing `k % nums.length`(to handle cases where k is greater than array length. 
- reverse the whole array using two pointer approach
- now the rotate part will come to the first , so reverse that part
- reverse the remining part 

### 2 T.C - O(n) , S.C - O(k)
- first we need to get the `k` value by doing `k % nums.length`(to handle cases where k is greater than array length.
), we will get the `k` value in the range of nums length
- extarct the rotate part of array by using splice `const rotatePart = nums.splice(nums.length -k)`, now we will get roatting part of array
- assign that rotatePart to the nums array `nums.splice(0, 0, ...rotatePart)`, 0, 0 is the start index and deleting elements

## Complexity

- Time complexity: O(n)
- Space complexity: O(1)


## Key Learnings

- Efficiently rotating the array using splice.
- Using k % nums.length to handle cases where k is greater than array length.
- The splice operation involves shifting elements, hence the linear time complexity.

