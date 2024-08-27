class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push([prob, node]) {
    this.heap.push([prob, node]);
    this._heapifyUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return max;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex][0] >= this.heap[index][0]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largest = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][0] > this.heap[largest][0]
      ) {
        largest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][0] > this.heap[largest][0]
      ) {
        largest = rightChildIndex;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const prob = succProb[i];
    graph.get(u).push([v, prob]);
    graph.get(v).push([u, prob]);
  }

  const probabilities = Array(n).fill(0);
  probabilities[start] = 1;

  const maxHeap = new MaxHeap();
  maxHeap.push([1, start]); // Start with the initial node with probability 1

  while (!maxHeap.isEmpty()) {
    const [currProb, node] = maxHeap.pop();

    if (node === end) {
      return currProb;
    }

    for (const [neighbor, prob] of graph.get(node)) {
      const newProb = currProb * prob;

      if (newProb > probabilities[neighbor]) {
        probabilities[neighbor] = newProb;
        maxHeap.push([newProb, neighbor]);
      }
    }
  }

  return 0;
};

// 1514. Path with Maximum Probability
const n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.2],
  start = 0,
  end = 2;
console.log(
  "Max Probability::",
  maxProbability(n, edges, succProb, start, end)
);
// Output: 0.25000
// Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
