# Notes for Day 38: Car Fleet

## Approach

- Combine Position and Speed:
  We are given two arrays: position and speed.
  Combine these arrays into a new array where each element is a pair [position, time], where time is calculated as (target - position) / speed.
- Sort the Combined Array:
  Sort the array of pairs in descending order based on the position value. This ensures that cars closer to the target are processed first.
- Initialize a Stack to Store Car Fleets:
  Create a stack variable to store the time it takes for each car fleet to reach the target.
- Traverse the Sorted Array:
  Use a for loop to iterate through the sorted array.
  For each car, calculate its time to reach the target and push this time onto the stack.
- Merge Fleets:
  After pushing the time to the stack, check if the stack length is 2 or more.
  If the last pushed time is less than or equal to the previous time in the stack, it means that the current car will join the previous fleet, so we pop the last car's time from the stack.
- Return the Number of Car Fleets:
  After processing all cars, the length of the stack will give the number of car fleets that reach the target.

## Complexity

1. **Time Complexity:**

- Sorting: The primary operation that determines the time complexity is sorting the combined array of positions and times. Sorting takes O(NlogN), where
  N is the number of cars.
- Iteration: The for loop that iterates through the sorted array runs in O(N) time.
  Overall, the time complexity of the solution is O(NlogN).

2. **Space Complexity:**

- Auxiliary Space:
  The array created to store the [position, time] pairs takes O(N) space.
  The stack used to track car fleets also takes O(N) space in the worst case.
  So, the space complexity is O(N).


## Key Learnings:

- `Greedy Strategy:` The problem is solved using a greedy approach where the goal is to merge cars into the same fleet when possible. By sorting the cars by position and iterating over them, we can determine which cars will form fleets without having to simulate the entire journey.
- `Stack Usage:` The stack is used to keep track of the car fleets by storing the time it takes for each fleet to reach the target. This stack-based approach is useful when you need to keep track of the most recent values and potentially merge elements based on some conditions.
- `Problem Decomposition:` Breaking down the problem into steps like combining position and speed, sorting the cars, and then iterating to determine fleets is a good example of how to decompose a complex problem into manageable parts.
- `Handling Edge Cases:` Understanding edge cases such as cars with the same speed and position, or when cars never form a fleet with others, helps reinforce the importance of thorough testing and consideration of all possible inputs.
- `Efficiency Considerations:` The problem teaches the importance of balancing time complexity with space complexity and ensuring that the solution is both efficient and easy to understand.
