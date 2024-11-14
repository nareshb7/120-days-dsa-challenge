class Solution {
  // Non-static method, so you need to call it on an instance of the class
  public void nearlySorted(int[] arr, int k) {
      // code
      Queue<Integer> pq = new PriorityQueue();
      for (int i=0; i<k+1; i++) {
          pq.add(arr[i]);
      }
      int j=0;
      for (int i=k+1; i<arr.length; i++) {
          arr[j++] = pq.poll();
          pq.add(arr[i]);
      }
      while(!pq.isEmpty()) {
          arr[j++] = pq.poll();
      }
  }
}

// Nearly sorted


// Given an array arr[], where each element is at most k away from its target position, you need to sort the array optimally.
// Note: You need to change the given array arr[] in place.

// Example:
// Input: arr[] = [6, 5, 3, 2, 8, 10, 9], k = 3
// Output: [2, 3, 5, 6, 8, 9, 10]
// Explanation: The sorted array will be 2 3 5 6 8 9 10