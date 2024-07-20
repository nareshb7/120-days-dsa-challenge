# Notes for Day 02: Best Time to Buy and Sell Stock


## Approach

- we need to identify two values min and profit
- initally we take min value is arr[0]
- profit will be the zero
- iterate through each element and find min value by comparing the arr[i] with min if arr[i] value is less than the min value , update min to arr[i]
- same for profit , check the profit of that day by using arr[i]- min if it is more than the yesterday profit update profit value with the newProfit
- return profit

## Complexity

- Time complexity: O(n)
- Space Complexity:  O(1)

## Key Learnings

Algorithmic Efficiency
- Understanding Time Complexity:

-  Comparing different approaches (brute force vs. optimized).
-  Recognizing the importance of reducing time complexity for large input sizes.


- Space Complexity:

-  Appreciating solutions that use constant space and understanding how to minimize extra space usage.

 
