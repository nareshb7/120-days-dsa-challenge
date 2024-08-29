/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  const n = stones.length;
  const adj = Array.from({ length: n }, () => []);

  // Build the graph
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        adj[i].push(j);
        adj[j].push(i);
      }
    }
  }

  const visited = new Set();

  function dfs(node) {
    visited.add(node);
    for (let neighbor of adj[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
  let numComponents = 0;
  // Find the number of connected components
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      numComponents++;
    }
  }
  return n - numComponents;
};

// 947. Most Stones Removed with Same Row or Column
const stones = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
console.log("Removed Stones::", removeStones(stones));
// Output: 5
// Explanation: One way to remove 5 stones is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,1].
// 2. Remove stone [2,1] because it shares the same column as [0,1].
// 3. Remove stone [1,2] because it shares the same row as [1,0].
// 4. Remove stone [1,0] because it shares the same column as [0,0].
// 5. Remove stone [0,1] because it shares the same row as [0,0].
// Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
