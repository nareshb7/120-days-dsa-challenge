# Notes for Day 39: Daily Temperatures

## Approach

- `Initialization:` A stack is created to keep track of indices of the temperatures array where warmer temperatures haven't been found yet.
  A result array of the same length as temperatures is initialized with all values set to 0. This will store the final output.
- `Iteration through the temperatures:` The function iterates through the temperatures array using a for loop.
- `Checking for warmer temperatures:` Within each iteration, a while loop checks if the current temperature (temperatures[i]) is warmer than the temperature at the index stored at the top of the stack.
  If so, it pops the index from the stack and calculates the difference between the current index (i) and the popped index (idx). This difference represents the number of days it took to get a warmer temperature, and it is stored in the result array at the idx position.
- `Pushing the current index:` After checking and possibly popping from the stack, the current index i is pushed onto the stack. This indicates that the warmer day for this index is yet to be found.
- `Repeat until all temperatures are processed:` The loop continues until all the days' temperatures have been processed.
- `Return the result:` After the loop completes, the result array is returned, which contains the number of days to wait for a warmer temperature for each day.

## Complexity

- `Time Complexity O(n):`
  Each element is pushed onto the stack exactly once and popped from the stack exactly once. The operations inside the loop (pushing and popping) take constant time, O(1).
  Therefore, the overall time complexity is O(n), where n is the number of temperatures.
- `Space Complexity O(n):`
  The space complexity is O(n) due to the additional space required for the stack and result array. In the worst case, the stack could hold all the indices if the temperatures are in decreasing order.

## Key Learnings:

- `Monotonic Stack:` The problem is a classic example of using a monotonic stack. A monotonic stack is a stack that maintains its elements in either increasing or decreasing order. In this problem, the stack is used to maintain indices of temperatures in a decreasing order.
- `Efficient Use of Stack:` By using the stack to store indices and checking if the current temperature is greater than the temperature at the index on top of the stack, we can efficiently calculate how many days until a warmer temperature. This avoids the need for a nested loop, reducing the time complexity from O(n²) to O(n).
- `Handling Edge Cases:` If there is no warmer day in the future, the result for that day remains 0, as initialized. This covers cases where temperatures are in non-increasing order towards the end of the list.
- `Understanding Stack Operations:` The solution emphasizes understanding stack operations, particularly how to pop elements in a loop until a condition is met and how to leverage the indices stored in the stack to calculate differences efficiently.
- `Problem Pattern Recognition:` This problem shares a common pattern with other problems that can be solved using a monotonic stack, such as "Next Greater Element." Recognizing this pattern can help in solving similar problems more easily
