class Solution {
  treePathsSum(node) {
    // code here
    let sum = 0;
    const dfs = (node, count) => {
      if (!node) {
        return;
      }
      count += node.key;
      if (!node.left && !node.right) {
        sum += count;
      }
      dfs(node.left, count * 10);
      dfs(node.right, count * 10);
    };
    dfs(node, 0);
    return sum;
  }
}

// Root to leaf paths sum

// Given a binary tree, where every node value is a number. Find the sum of all the numbers that are formed from
// root to leaf paths. The formation of the numbers would be like 10*parent + current (see the examples for more clarification).

// Example:
// Input: 6 3 5 2 5 N 4 N N 7 4 N N N N N N
// Output: 13997
// Explanation : There are 4 leaves, resulting in leaf path of 632, 6357, 6354, 654 sums to 13997.
