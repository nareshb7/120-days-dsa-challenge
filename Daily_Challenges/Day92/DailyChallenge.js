/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargestLevelSum = function(root, k) {
  const sums =[];
  const queue = [root]
  while (queue.length > 0) {
      const size = queue.length;
      let sum =0;
      for (let i=0; i<size; i++) {
          const  node = queue.shift()
          sum+= node.val;
          if (node.left) queue.push(node.left)
          node.right && queue.push(node.right)
      }
      sums.push(sum)
  }
  
  sums.sort((a,b) => b-a)
  return sums[k-1] ? sums[k-1]: -1
};


// 2583. Kth Largest Sum in a Binary Tree

// Input: root = [5,8,9,2,1,3,7,4,6], k = 2
// Output: 13
// Explanation: The level sums are the following:
// - Level 1: 5.
// - Level 2: 8 + 9 = 17.
// - Level 3: 2 + 1 + 3 + 7 = 13.
// - Level 4: 4 + 6 = 10.
// The 2nd largest level sum is 13.