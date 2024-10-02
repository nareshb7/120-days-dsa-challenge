# Notes for Day 76: Kth Largest Element in a Stream

## Implementation

- `MinHeap Class:`

- `Purpose:` Maintain the smallest value of the k largest values we've seen so far.
- `Main Functions:`
- `heapify():` Convert an array into a heap.
- `peek():` Look at the smallest value in the heap (i.e., the top of the heap).
- `offer(value):` Add a new value to the heap, maintaining heap structure.
- `poll():` Remove the smallest value (top of the heap).
- `bubbleUp():` Ensure the newly added value moves to its correct position.
- `bubbleDown():` Ensure the heap property is maintained after removing the top.

- `KthLargest Class:`

- `Purpose:` Find the kth largest element in a stream of numbers.
- `Approach:`
  Store k in the class to track the kth largest.
  Use a MinHeap of size k to keep track of the largest k elements.
- `When adding a new value:`
  If the heap has fewer than k elements, just add the new value.
  If the heap has k elements and the new value is larger than the smallest in the heap (i.e., top), replace the smallest value with the new value.
  The smallest element in the heap (peek()) will be the kth largest.

## Approach

- Initialize a MinHeap to keep track of the k largest numbers.
- Add numbers to the heap:
- If there are fewer than k elements, add the number directly.
- If there are already k elements, only add the number if it's larger than the smallest element in the heap.
- After adding, always remove the smallest element to maintain the heap size of k.
- The smallest number in the heap (top of the heap) will be the kth largest number.
- The add method returns the kth largest number after each insertion.

## Complexity

- `Time Complexity:`
  KthLargest: O(n log k) (for inserting all nums elements in the constructor).
  add(): O(log k) for each call to add.
- `Space Complexity:`
  O(k) due to the heap storing only k elements.

## Key Learnings:

- `Using MinHeap for Top K Problems:` A MinHeap is an effective data structure for keeping track of the largest k elements. By storing the k largest numbers in a MinHeap, the smallest element in the heap is always the kth largest.
  This reduces the need to sort the entire list, improving efficiency.
- `Heap Size:` Keeping the heap size fixed to k ensures that the operations (insertion, deletion) remain efficient at O(log k).
- `Efficiency of Dynamic Data:` This approach efficiently handles dynamic streams of data, as we can add new values while always being able to return the kth largest in O(log k) time.
- `Trade-off Between Space and Time:` While the space complexity is controlled (storing only k elements), the time complexity of insertion and extraction is logarithmic. This trade-off allows handling large inputs efficiently without excessive memory usage.
- `Common Interview Topic:` This is a classic heap-related interview problem frequently asked in coding interviews to assess understanding of heaps, dynamic data structures, and optimization techniques.
- `Incremental Updates:` The problem teaches how to maintain a dynamic view of the largest elements in a stream without needing to reprocess all previous elements
