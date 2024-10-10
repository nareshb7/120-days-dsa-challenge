# Notes for Day 84: Sort an Array (Quick Sort)

- Quick Sort is a divide-and-conquer algorithm. It works by selecting a "pivot" element from the array, then partitioning the array into two sub-arrays:
- Elements less than the pivot.
- Elements greater than or equal to the pivot.
- The sub-arrays are then recursively sorted, and the final sorted array is formed by combining these sub-arrays with the pivot.

## Approach

- Choose a pivot element.
- Partition the array such that:
- All elements smaller than the pivot go to the left.
- All elements larger than the pivot go to the right.
- Recursively apply the same logic to the left and right sub-arrays.
- Combine the sorted sub-arrays and pivot.

## Complexity

- `Time Complexities:`
  Best Case: O(n log n) (Occurs when the pivot divides the array into two nearly equal parts).
  Average Case: O(n log n) (Most common case).
  Worst Case: O(n²) (Occurs when the pivot is always the smallest or largest element, leading to unbalanced partitions).
- `Space Complexity:`
  O(log n) (due to recursion stack space, for balanced partitions).
  O(n) (in the worst case when partitions are extremely unbalanced).

## Key Learnings:

- `Divide and Conquer:` Quick sort works by dividing the problem into smaller sub-problems and conquering them recursively.
- `Pivot Selection is Crucial:` The choice of the pivot affects performance. Poor pivot selection can lead to unbalanced partitions and degrade performance.
- `In-Place Sorting:` Quick sort can be implemented as an in-place sorting algorithm, meaning it requires minimal extra space apart from the recursion stack.
- `Unstable Sorting Algorithm:` Quick sort is unstable, meaning it may not preserve the relative order of elements with equal values.
- `Recursion:` Understanding recursion is key to understanding how Quick Sort works, as it repeatedly sorts sub-arrays.
- `Efficient for Large Data:` Quick sort is generally faster than other algorithms like Bubble Sort or Insertion Sort, especially for large datasets, due to its O(n log n) average complexity.
- `Worst Case Mitigation:` Strategies like using randomized pivot selection or median-of-three pivot help mitigate the worst-case performance by improving the balance of partitions.
- `Tail Recursion Optimization:` Quick sort can be optimized using tail recursion, which reduces the recursion depth and helps in improving performance further

## Key Points

- Merge Sort guarantees O(n log n) time complexity in all cases, but it requires extra space, making it less space-efficient.
- Quick Sort is usually faster in practice due to better cache performance and in-place sorting, but it has a risk of degrading to O(n²) in the worst case without careful pivot selection.
- Merge Sort is stable, while Quick Sort is unstable.
- Merge Sort is better suited for linked lists and applications requiring stability.
- Quick Sort is better for arrays when you need an in-place sorting algorithm
