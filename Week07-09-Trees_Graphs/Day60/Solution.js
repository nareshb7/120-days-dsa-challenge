/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
const { arrayToBinaryTree } = require("..");

/**
 * @param {_Node} node
 * @return {_Node}
 */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}
var cloneGraph = function (node) {
  const oldToNew = new Map(); // Use Map to handle object references properly

  const dfs = (node) => {
    // If the node is already cloned, return its clone
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }
    // Create a new copy of the node
    const copy = new Node(node.val);
    oldToNew.set(node, copy);

    // Recursively clone all the neighbors
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  // If the input node is null, return null
  if (!node) return null;

  return dfs(node);
};

const adjList = [
  [2, 4],[1, 3],[2, 4],[1, 3],
];
// Output: [[2,4],[1,3],[2,4],[1,3]]
console.log("clonedGraph is:::", cloneGraph(arrayToBinaryTree(adjList)));
