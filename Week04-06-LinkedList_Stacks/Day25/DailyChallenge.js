/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
 this.heap = new MinHeap();
 nums.forEach(n => this.add(n));
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
 if (this.heap.size() < this.k) {
   this.heap.offer(val);
 } else if (this.heap.peek() < val) {
   this.heap.offer(val);
   this.heap.poll();
 }
 return this.heap.peek();
};

class MinHeap {
 constructor(data = []) {
   this.data = data;
   this.comparator = (a, b) => a - b;
   this.heapify();
 }

 // O(nlog(n))
 heapify() {
   if (this.size() < 2) return;
   for (let i = 1; i < this.size(); i++) {
     this.bubbleUp(i);
   }
 }

 // O(1)
 peek() {
   if (this.size() === 0) return null;
   return this.data[0];
 }

 // O(log(n))
 offer(value) {
   this.data.push(value);
   this.bubbleUp(this.size() - 1);
 }

 // O(log(n))
 poll() {
   if (this.size() === 0) return null;
   const result = this.data[0];
   const last = this.data.pop();
   if (this.size() !== 0) {
     this.data[0] = last;
     this.bubbleDown(0);
   }
   return result;
 }

 // O(log(n))
 bubbleUp(index) {
   while (index > 0) {
     const parentIndex = (index - 1) >> 1;
     if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
       this.swap(index, parentIndex);
       index = parentIndex;
     } else {
       break;
     }
   }
 }

 // O(log(n))
 bubbleDown(index) {
   const lastIndex = this.size() - 1;
   while (true) {
     const leftIndex = index * 2 + 1;
     const rightIndex = index * 2 + 2;
     let findIndex = index;
     if (
       leftIndex <= lastIndex &&
       this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
     ) {
       findIndex = leftIndex;
     }
     if (
       rightIndex <= lastIndex &&
       this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
     ) {
       findIndex = rightIndex;
     }
     if (index !== findIndex) {
       this.swap(index, findIndex);
       index = findIndex;
     } else {
       break;
     }
   }
 }

 // O(1)
 swap(index1, index2) {
   [this.data[index1], this.data[index2]] = [
     this.data[index2],
     this.data[index1]
   ];
 }

 // O(1)
 size() {
   return this.data.length;
 }
}

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
// 703. Kth Largest Element in a Stream
const k = ["KthLargest", "add", "add", "add", "add", "add"]
const nums = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
// console.log(`Kth largest element ::`, KthLargest(k, nums))
// Output
// [null, 4, 5, 5, 8, 8]

// Explanation
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
// console.log("")