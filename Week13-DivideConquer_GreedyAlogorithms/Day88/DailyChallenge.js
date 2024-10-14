/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  const pq = new MaxPriorityQueue({ compare: (a, b) => b - a });
  for (const num of nums) {
    pq.enqueue(num);
  }
  let score = 0;
  while (k) {
    const ele = pq.dequeue();
    score += ele;
    pq.enqueue(Math.ceil(ele / 3));
    k--;
  }
  return score;
};

// 2530. Maximal Score After Applying K Operations

const nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.