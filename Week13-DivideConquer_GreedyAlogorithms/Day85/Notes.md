# Notes for Day 85: Jump Game II

## Approach

- `Initialize Variables:` near keeps track of the range of the current jump (starting point).
  far keeps track of the furthest index we can reach with the current jump.
  jumps counts the number of jumps needed.
- `Start the Loop:` Continue looping while far (the furthest we can jump to) is less than nums.length - 1 (destination).
- `Find the Farthest Position:` Use another loop to find how far we can jump from the current near to far range. For each index in this range, calculate how far we can go by checking i + nums[i], and track the maximum (farthest).
- `Update Ranges:` Set near to far + 1 for the next range.
  Set far to the farthest we just calculated, meaning the furthest point we can jump to in the next jump.
- `Increment Jumps:` After every expansion of the range, increase the jumps count.
- `Repeat Until End:` Continue until far reaches or exceeds the last index.

## Complexity

- `Time Complexity: O(n):` In each step, you're checking every index within the current range (near to far), and the range moves forward without revisiting
  any indices. This results in a linear time complexity.
- `Space Complexity: O(1):` The algorithm uses only a few variables (near, far, farthest, jumps), so the space complexity is constant.

## Key Learnings:

- `Greedy Approach:` The algorithm always tries to jump to the farthest possible position at each step.
- `Range Expansion:` You explore jumps in the current range (near to far) to find the next farthest point, then update the range for the next jump.
- `Counting Jumps:` The number of jumps is incremented each time the range is updated, ensuring you use the fewest jumps possible.
- `Furthest Reach Calculation:` For each position in the current range, calculate how far you can go by using i + nums[i], and track the maximum.
- `Stopping Condition:` The loop continues until the farthest position (far) reaches or exceeds the last index (nums.length - 1)
