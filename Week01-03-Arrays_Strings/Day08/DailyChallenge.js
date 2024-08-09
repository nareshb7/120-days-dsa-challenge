/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
 var findTheCity = function(n, edges, distanceThreshold) {
    const INF = 1e9; // Define a large number as infinity
    const dist = Array.from({ length: n }, () => Array(n).fill(INF));

    // Initialize the distance matrix
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [u, v, w] of edges) {
        dist[u][v] = w;
        dist[v][u] = w;
    }

    // Apply Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let minNeighbors = n;
    let city = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                count++;
            }
        }

        if (count <= minNeighbors) {
            minNeighbors = count;
            city = i;
        }
    }

    return city;
};

const n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
// Output: 3
console.log("Find the nearest neighbour city::", findTheCity(n, edges, distanceThreshold))

//1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
// Explanation: The figure above describes the graph. 
// The neighboring cities at a distanceThreshold = 4 for each city are:
// City 0 -> [City 1, City 2] 
// City 1 -> [City 0, City 2, City 3] 
// City 2 -> [City 0, City 1, City 3] 
// City 3 -> [City 1, City 2] 
// Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.