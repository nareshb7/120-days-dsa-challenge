class Solution {
  canAttend(arr) {
    // Your Code Here
    arr.sort((a, b) => a[0] - b[0]);
    let lastMeeting = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
      const [start, end] = arr[i];
      if (start < lastMeeting) {
        return false;
      }
      lastMeeting = end;
    }
    return true;
  }
}

// Meeting Rooms

// Given an array arr[][] such that arr[i][0] is the starting time of ith meeting and arr[i][1] is the ending time of ith meeting, 
// the task is to check if it is possible for a person to attend all the meetings such that he can attend only one meeting at a 
// particular time.

// Note: A person can attend a meeting if its starting time is greater than or equal to the previous meeting's ending time.

// Example:
// Input: arr[][] = [[1, 4], [10, 15], [7, 10]]
// Output: true
// Explanation: Since all the meetings are held at different times, it is possible to attend all the meetings.