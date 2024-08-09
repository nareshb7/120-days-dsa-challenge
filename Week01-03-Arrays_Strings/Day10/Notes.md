# Notes for Day 10: Container With Most Water (Two Pointer Technique)

## Approach

- We are using `two pointer technique` to traverse the array, two pointers are one at the begining `a_pointer` and one at the end `b_pointer` of the array, `max_area`= 0;
- Initalize `while loop`, with the condition of a_pointer is less than the b_pointer, if the pointers are equal are greter than means we traverse the whole array
- Find the `width` i.e the diffrence between two pointer values of array
- Find the `minHeight`, using two pointer values from the height array, which one has the `min value` that is our minHeight
- Find the current `area` using `width` and `minHeight`
- Now update the `max_area` usinng `Math.max(max_area, currentArea)`
- Move the `pointers` to the `next position` based on value
- return the `max_area`


## Complexity
- Time Complexity: O(n), where n is the number of elements in the array. This is because we only traverse the array once with the two pointers moving inward.
- Space Complexity: O(1), as we use a constant amount of extra space for the pointers and variables.

## Key Learnings

- `Two-pointer Technique:` This is a powerful technique for solving problems involving pairs in a sorted or unsorted array.
- `Greedy Approach:` By always moving the pointer of the shorter line, we maximize the potential of finding a larger area.
- `Optimizing Space:` The solution efficiently uses O(1) extra space, which is an important consideration in algorithm design.
