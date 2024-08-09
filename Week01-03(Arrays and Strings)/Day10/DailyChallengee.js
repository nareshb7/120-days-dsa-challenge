/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
 var secondMinimum = function(n, edges, time, change) {
  const graph = Array.from({ length: n + 1 }, () => []);
  
  // Build the graph
  for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
  }

  // Priority queue for Dijkstra's algorithm
  const pq = new MinPriorityQueue({ priority: x => x[1] });
  pq.enqueue([1, 0]);

  // Tracking shortest and second shortest times
  const dist = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);
  dist[1][0] = 0;

  while (!pq.isEmpty()) {
      const [node, timeSpent] = pq.dequeue().element;

      for (const neighbor of graph[node]) {
          let newTime = timeSpent;

          // Handle traffic light wait time
          if (Math.floor(newTime / change) % 2 === 1) {
              newTime = (Math.floor(newTime / change) + 1) * change;
          }
          newTime += time;

          if (newTime < dist[neighbor][0]) {
              dist[neighbor][1] = dist[neighbor][0];
              dist[neighbor][0] = newTime;
              pq.enqueue([neighbor, newTime]);
          } else if (newTime > dist[neighbor][0] && newTime < dist[neighbor][1]) {
              dist[neighbor][1] = newTime;
              pq.enqueue([neighbor, newTime]);
          }
      }
  }

  return dist[n][1];
}

//2045. Second Minimum Time to Reach Destination
const n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5
// Output: 13
console.log("Second Minimum Time to Reach Destination: ",secondMinimum(n, edges, time, change) )
// Explanation:
// The figure on the left shows the given graph.
// The blue path in the figure on the right is the minimum time path.
// The time taken is:
// - Start at 1, time elapsed=0
// - 1 -> 4: 3 minutes, time elapsed=3
// - 4 -> 5: 3 minutes, time elapsed=6
// Hence the minimum time needed is 6 minutes.

// The red path shows the path to get the second minimum time.
// - Start at 1, time elapsed=0
// - 1 -> 3: 3 minutes, time elapsed=3
// - 3 -> 4: 3 minutes, time elapsed=6
// - Wait at 4 for 4 minutes, time elapsed=10
// - 4 -> 5: 3 minutes, time elapsed=13
// Hence the second minimum time is 13 minutes. 