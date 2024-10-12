/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  const startTimes = [];
  const endTimes = [];

  for (const interval of intervals) {
    startTimes.push(interval[0]);
    endTimes.push(interval[1]);
  }

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);
  let maxGroups = 0;
  let j = 0;
  let i = 0;
  let activeGroup = 0;

  while (i < startTimes.length) {
    if (startTimes[i] <= endTimes[j]) {
      activeGroup++;
      i++;
      maxGroups = Math.max(maxGroups, activeGroup);
    } else {
      j++;

      activeGroup--;
    }
  }
  return maxGroups;
};

// 2406. Divide Intervals Into Minimum Number of Groups

const intervals = [
  [5, 10],
  [6, 8],
  [1, 5],
  [2, 3],
  [1, 10],
];
console.log("No of interval groups::", minGroups(intervals));
// Output: 3
// Explanation: We can divide the intervals into the following groups:
// - Group 1: [1, 5], [6, 8].
// - Group 2: [2, 3], [5, 10].
// - Group 3: [1, 10].
// It can be proven that it is not possible to divide the intervals into fewer than 3 groups.
