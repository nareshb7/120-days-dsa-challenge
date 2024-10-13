/**
 * @param {number[][]} nums
 * @return {number[]}
 */
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  getLength() {
    return this.heap.length;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(array, i, array.length - 1);
    }
    return array;
  }

  peek() {
    return this.heap[0];
  }

  siftUp(array) {
    let idx = array.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0) {
      if (array[idx][1] < array[parentIdx][1]) {
        this.swap(array, idx, parentIdx);
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      } else {
        break;
      }
    }
  }

  insert(num) {
    this.heap.push(num);
    this.siftUp(this.heap);
  }

  siftDown(array, idx, endIdx) {
    let leftChildIdx = idx * 2 + 1;
    while (leftChildIdx <= endIdx) {
      let idxToSwap = leftChildIdx;
      let rightChildIdx = idx * 2 + 2;
      if (
        rightChildIdx <= endIdx &&
        array[rightChildIdx][1] < array[leftChildIdx][1]
      ) {
        idxToSwap = rightChildIdx;
      }
      if (array[idxToSwap][1] < array[idx][1]) {
        this.swap(array, idxToSwap, idx);
        idx = idxToSwap;
        leftChildIdx = idx * 2 + 1;
      } else {
        break;
      }
    }
  }

  remove() {
    const valueToRemove = this.heap[0];
    this.swap(this.heap, 0, this.heap.length - 1);
    this.heap.pop();
    this.siftDown(this.heap, 0, this.heap.length - 1);

    return valueToRemove;
  }

  swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


var smallestRange = function (nums) {
  const minHeap = new MinHeap([]);
  const n = nums.length;
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    minHeap.insert([i, nums[i][0], 0]);
    max = Math.max(max, nums[i][0]);
  }

  let start = null;
  let end = null;
  let minRange = Infinity;
  while (minHeap.getLength() === nums.length) {
    const [i, val, j] = minHeap.remove();
    const currRange = max - val;

    if (currRange < minRange) {
      minRange = currRange;
      start = val;
      end = max;
    }

    if (j + 1 < nums[i].length) {
      minHeap.insert([i, nums[i][j + 1], j + 1]);
      max = Math.max(max, nums[i][j + 1]);
    }
  }

  return [start, end];
};


// 632. Smallest Range Covering Elements from K Lists
const nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]

// Output: [20,24]
// Explanation: 
// List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
// List 2: [0, 9, 12, 20], 20 is in range [20,24].
// List 3: [5, 18, 22, 30], 22 is in range [20,24].
