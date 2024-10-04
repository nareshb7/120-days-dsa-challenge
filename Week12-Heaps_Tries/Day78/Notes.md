# Notes for Day 78: Find Median from Data Stream

## Approach

- `Use two heaps:` Max Heap (for smaller half of numbers).
  Min Heap (for larger half of numbers).
- `Insertion:` If the number is smaller than or equal to the max heap’s root, insert it into the Max Heap.
  Otherwise, insert it into the Min Heap.
- `Balance the heaps:` If the size of the max heap exceeds the min heap by more than 1, move the root of the max heap to the min heap.
  If the min heap has more elements than the max heap, move the root of the min heap to the max heap.
- `Find the median:` If the heaps have the same size, the median is the average of the roots of both heaps.
  If the max heap has more elements, the median is the root of the Max Heap

## Complexity

- `Time Complexity:` Inserting a number (addNum): O(log n)
  Inserting into a heap takes logarithmic time.
  Finding the median (findMedian): O(1)
  The median is just the root of the heaps, which can be accessed in constant time.
- `Space Complexity: O(n)` You need to store all the numbers, so space grows linearly with the number of elements

## Key Learnings:

- `Heaps for efficient insertion:` Max heap and min heap allow you to maintain the two halves of the stream efficiently.
  Max heap stores the smaller half (inverted values to behave like a max heap using a min heap).
  Min heap stores the larger half.
- `Balancing the heaps:` Always balance the heaps so that their sizes differ by at most 1.
  This ensures that the median can be found easily.
- `Efficient median calculation:` If heaps are balanced (equal size), median is the average of their roots.
  If max heap has more elements, median is the root of the max heap.
- `Logarithmic insertion:` The insertion operation (which includes heap balancing) takes logarithmic time, ensuring the solution scales well even for large data streams