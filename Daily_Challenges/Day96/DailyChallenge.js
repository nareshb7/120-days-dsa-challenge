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
 * @param {number[]} queries
 * @return {number[]}
 */
 var treeQueries = function(root, queries) {
    const height = {}; // Store height from root to each node
       const subtreeSize = {}; // Store size of each subtree
       const nodeId = {}; // Unique ID for each node based on preorder traversal
       const order = []; // To keep track of node IDs based on preorder traversal

       // DFS to assign node IDs, calculate heights and subtree sizes
       const dfs = (node, h = 0) => {
           if (!node) return 0;
           const id = order.length;
           order.push(node.val);
           nodeId[node.val] = id;
           height[node.val] = h;
           subtreeSize[node.val] = 1 + dfs(node.left, h + 1) + dfs(node.right, h + 1);
           return subtreeSize[node.val];
       };

       // Start DFS from root
       dfs(root);

       // Build mp2 array representing heights of nodes in preorder ID order
       const mp2 = order.map(val => height[val]);

       // Precompute left and right max arrays
       const n = mp2.length;
       const left = new Array(n);
       const right = new Array(n);

       left[0] = mp2[0];
       for (let i = 1; i < n; i++) {
           left[i] = Math.max(left[i - 1], mp2[i]);
       }

       right[n - 1] = mp2[n - 1];
       for (let i = n - 2; i >= 0; i--) {
           right[i] = Math.max(right[i + 1], mp2[i]);
       }

       // Process each query and calculate remaining height
       const answer = [];
       for (const q of queries) {
           const l = nodeId[q];
           const r = l + subtreeSize[q] - 1;

           const maxLeft = l > 0 ? left[l - 1] : -Infinity;
           const maxRight = r + 1 < n ? right[r + 1] : -Infinity;

           answer.push(Math.max(maxLeft, maxRight));
       }

       return answer;
};

// 2458. Height of Binary Tree After Subtree Removal Queries

// You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. 
// You are also given an array queries of size m.

// You have to perform m independent queries on the tree where in the ith query you do the following:

// Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] 
// will not be equal to the value of the root.
// Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.


// Example:
// Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]
// Output: [3,2,3,2]
// Explanation: We have the following queries:
// - Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 4).
// - Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -> 8 -> 1).
// - Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 6).
// - Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -> 9 -> 3).