/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  remove() {
    if (this.size() > 1) {
      [this.heap[0], this.heap[this.size() - 1]] = [
        this.heap[this.size() - 1],
        this.heap[0],
      ];
    }
    const removed = this.heap.pop();
    this._sinkDown();
    return removed;
  }

  _bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  _sinkDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}

const findKthLargest = (nums, k) => {
  // minHeap - T.C - o (n log k), S.C - O(k)
  const heap = new MinHeap();
  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) {
      heap.remove();
    }
  }

  return heap.peek();

  //Quick Select T.C - O(n) in worst O(n2)
  // const quickSelect =(l,r) => {
  //     let pivot = nums[r]
  //     let p =l
  //     for (let i=l; i<r; i++) {
  //         if(nums[i] <= pivot) {
  //             const val = nums[p]
  //             nums[p] = nums[i]
  //             nums[i] = val
  //             p += 1
  //          }
  //     }
  //     const val = nums[p]
  //     nums[p] = nums[r]
  //     nums[r] = val
  //     if (p> k) return quickSelect(l, p-1)
  //     else if (p< k) return quickSelect(p+1, r)
  //     else return nums[p]
  // }
  // return quickSelect(0, nums.length-1)

  //Brute Force -T.C -> O (n log n)
  //nums.sort((a, b) => b-a)
  // console.log("nums", nums)
  // return nums[k-1]
};

const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
console.log("Kth Largest element:::", findKthLargest(arr, k));
