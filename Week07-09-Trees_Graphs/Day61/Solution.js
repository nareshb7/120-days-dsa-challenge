// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */

//  class TopologicalSort {
//   constructor(numCourses, prerequisites) {
//     this.numCourses = numCourses;
//     this.edgeMap = new Map(); // { course: dependentCourses }
//     this.degree = new Array(numCourses).fill(0);
//     // Initialize the adjacency list
//     for (let course = 0; course < numCourses; course++) {
//       this.edgeMap.set(course, new Array());
//     }
//     // Build the graph and compute in-degrees
//     for (const [ai, bi] of prerequisites) {
//       this.edgeMap.get(bi).push(ai); // bi -> ai
//       this.degree[ai]++;
//     }
//   }

//   sortDfs() {
//     // We use state array to keep track of both the visiting and visited states for each course
//     // Unvisited (0): The course has not been visited yet.
//     // Visiting (1): The course is currently being visited, meaning the DFS is exploring its dependent courses.
//     // Visited (2): The course and all dependent courses have been fully explored.
//     const state = new Array(this.numCourses).fill(0);
//     let completedCourses = 0;

//     const dfs = (course) => {
//       if (state[course] === 1) {
//         return false;
//       }
//       if (state[course] === 2) {
//         return true;
//       }

//       // Mark as visiting
//       state[course] = 1;

//       for (const dependentCourse of this.edgeMap.get(course)) {
//         // Cycle detected in recursion
//         if (!dfs(dependentCourse)) {
//           return false;
//         }
//       }
//       state[course] = 2;
//       completedCourses++;

//       return true;
//     };

//     for (let course = 0; course < this.numCourses; course++) {
//       // If the course is unvisited (0), we process the course
//       if (state[course] === 0) {
//         if (!dfs(course)) {
//           return false; // Cycle detected, return false
//         }
//       }
//     }

//     return completedCourses === this.numCourses;
//   }
// }
// var canFinish = function(numCourses, prerequisites) {
//     const topo = new TopologicalSort(numCourses, prerequisites)
//     return topo.sortDfs()
// };

const dfs = (graph, visited, index) => {
  if (visited[index] == 2) return true;
  visited[index] = 2;
  const neighbours = graph.get(index) || [];
  for (let n of neighbours) {
    if (visited[n] != 1) {
      if (dfs(graph, visited, n)) return true;
    }
  }
  visited[index] = 1;
  return false;
};
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 0 unvisited
  // 1 processed
  // 2 processing
  const graph = new Map();
  const visited = new Array(numCourses).fill(0);
  for (let [course, dependency] of prerequisites) {
    graph.set(course, (graph.get(course) || new Set()).add(dependency));
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] == 0) {
      if (dfs(graph, visited, i)) {
        return false;
      }
    }
  }

  return true;
};
const numCourses = 2,prerequisites = [[1, 0],[0, 1],];
console.log("Can finish courses::", canFinish(numCourses, prerequisites));
// Output: false
