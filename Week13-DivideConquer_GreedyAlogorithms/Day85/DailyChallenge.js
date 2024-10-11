/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  let n = times.length;

  // Create a list of arrivals with friend index
  let arrivals = [];
  for (let i = 0; i < n; i++) {
    arrivals.push([times[i][0], i]);
  }

  // Sort friends by arrival time
  arrivals.sort((a, b) => a[0] - b[0]);

  // Min-Heap to track available chairs
  let availableChairs = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < n; i++) {
    availableChairs.enqueue(i);
  }

  // Priority queue to track when chairs are freed
  let leavingQueue = new MinPriorityQueue({ priority: (x) => x[0] });

  // Iterate through each friend based on arrival
  for (let [arrivalTime, friendIndex] of arrivals) {
    // Free chairs that are vacated before the current arrival time
    while (
      !leavingQueue.isEmpty() &&
      leavingQueue.front().element[0] <= arrivalTime
    ) {
      availableChairs.enqueue(leavingQueue.dequeue().element[1]);
    }

    // Assign the smallest available chair
    let chair = availableChairs.dequeue().element;

    // If this is the target friend, return their chair number
    if (friendIndex === targetFriend) {
      return chair;
    }

    // Mark the chair as being used until the friend's leave time
    leavingQueue.enqueue([times[friendIndex][1], chair]);
  }

  return -1;
};

// 1942. The Number of the Smallest Unoccupied Chair

// Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
// Output: 1
// Explanation:
// - Friend 0 arrives at time 1 and sits on chair 0.
// - Friend 1 arrives at time 2 and sits on chair 1.
// - Friend 1 leaves at time 3 and chair 1 becomes empty.
// - Friend 0 leaves at time 4 and chair 0 becomes empty.
// - Friend 2 arrives at time 4 and sits on chair 0.
// Since friend 1 sat on chair 1, we return 1.
