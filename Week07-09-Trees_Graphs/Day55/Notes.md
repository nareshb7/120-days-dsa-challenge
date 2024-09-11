# Notes for Day 55: Maximum Binary Tree

## Approach

- The function recursively builds the Maximum Binary Tree from an array nums.
- At each step, the function: Finds the maximum value in the current subarray.
- Creates a TreeNode with that value.
- Recursively constructs the left and right subtrees using the subarrays left and right of the maximum value.

## Complexity

- `Time Complexity:`
- In the worst case, the time complexity is O(n²) where n is the size of the input array.
- This happens when the array is sorted in descending order. In such a case, every time you choose a new maximum element, the left subtree becomes empty, and the right subtree contains all remaining elements. You have to find the maximum for the full array in each step, which takes O(n), then for the next (n-1) elements, and so on.
  Summing up: which is O(n²).
- In the best case, the time complexity is O(n log n).
- This happens when the array is structured such that each split divides the array into two approximately equal halves, much like a balanced binary tree. In this case, the height of the tree is logn, and you perform the maximum finding operation at each level.
- `Space Complexity:` The space complexity is O(n).
- This is due to the space used by the recursion stack. In the worst case (unbalanced tree), the depth of recursion can be n (e.g., when the array is sorted in descending order).
- If the tree is balanced, the depth of recursion will be O(logn), but we still need O(n) space to store the tree

## Key Learnings:

- `Divide and Conquer Approach:` The problem is solved using a divide and conquer strategy where the array is split into subarrays based on the maximum element. This is a common technique in binary tree construction problems.
- `Recursive Tree Building:` The concept of recursion is fundamental in binary tree problems. Here, the recursion builds the left and right subtrees after identifying the root (maximum value).
  Understanding how recursion divides the problem into smaller subproblems is crucial for tackling similar tree problems.
- `Unbalanced Trees Can Lead to Poor Performance:` The tree can become highly unbalanced if the input array is sorted in decreasing or increasing order, leading to worst-case time complexity. This illustrates how tree structure impacts algorithm performance.
- `TreeNode Structure:` Understanding the structure of a tree node (TreeNode(val, left, right)) helps in constructing binary trees, manipulating subtrees, and performing operations like traversals.
- `Optimization Possibility:` There is potential to optimize the approach to find the maximum element in a more efficient way (e.g., using a monotonic stack). This could reduce the time complexity from O(n²) to O(n) in certain cases
