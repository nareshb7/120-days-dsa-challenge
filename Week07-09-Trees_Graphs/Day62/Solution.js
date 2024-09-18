/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const counts = new Array(n).fill(0);
  const links = new Array(n).fill(0);

  for (const edge of edges) {
    links[edge[0]] ^= edge[1];
    counts[edge[0]]++;
    links[edge[1]] ^= edge[0];
    counts[edge[1]]++;
  }

  const Qu = [];
  const dists = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (counts[i] === 1) Qu.push(i);
  }

  let stp = 1;
  while (Qu.length > 0) {
    const size = Qu.length;
    for (let j = 0; j < size; j++) {
      const tmp = Qu.shift();
      links[links[tmp]] ^= tmp;
      counts[links[tmp]]--;
      if (counts[links[tmp]] === 1) {
        dists[links[tmp]] = Math.max(stp, dists[links[tmp]]);
        Qu.push(links[tmp]);
      }
    }
    stp++;
  }

  const maxDist = Math.max(...dists);
  const res = [];
  for (let i = 0; i < n; i++) {
    if (dists[i] === maxDist) res.push(i);
  }

  return res;
};


const n = 4, edges = [[1,0],[1,2],[1,3]]
console.log("Min Height tree::", findMinHeightTrees(n, edges))
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT

// var findMinHeightTrees = function(n, edges) {
//   // find the level using BFS search

//   const res = [];
//   if (n <= 0) return res;
//   if (n === 1) {
//       res.push(0);
//       return res;
//   }

//   const map = new Map();
//   const degree = new Array(n).fill(0);

//   // Build the graph and calculate the degrees of each node
//   for (const [u, v] of edges) {
//       degree[u]++;
//       degree[v]++;
//       if (!map.has(u)) map.set(u, new Set());
//       if (!map.has(v)) map.set(v, new Set());
//       map.get(u).add(v);
//       map.get(v).add(u);
//   }

//   // Queue to hold the leaves
//   const leaves = [];
  
//   // Identify initial leaves
//   for (let i = 0; i < n; i++) {
//       if (degree[i] === 1) {
//           leaves.push(i);
//       }
//   }

//   let count = n;

//   // Trim the leaves until we have at most 2 nodes remaining
//   while (count > 2) {
//       const size = leaves.length;
//       count -= size;
//       for (let i = 0; i < size; i++) {
//           const leaf = leaves.shift();
//           for (const connection of map.get(leaf)) {
//               degree[connection]--;
//               if (degree[connection] === 1) {
//                   leaves.push(connection);
//               }
//           }
//       }
//   }

//   return leaves;
// };

