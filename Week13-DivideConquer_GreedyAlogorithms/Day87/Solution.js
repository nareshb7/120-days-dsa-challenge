var leastInterval = function (tasks, n) {
  let taskCounts = new Map();
  // Step 1: Count the frequency of each task
  for (let task of tasks) {
    taskCounts.set(task, (taskCounts.get(task) || 0) + 1);
  }

  // Step 2: Create a max heap (priority queue) to store task counts
  let maxHeap = [];
  for (let [task, count] of taskCounts) {
    maxHeap.push(count);
  }
  maxHeap.sort((a, b) => b - a); // Sorting in descending order

  let time = 0;
  let cooldownQueue = [];

  while (maxHeap.length > 0 || cooldownQueue.length > 0) {
    time++;
    // Step 3: Process the most frequent task (if available)
    if (maxHeap.length > 0) {
      let currentTaskCount = maxHeap.shift();
      currentTaskCount--;
      if (currentTaskCount > 0) {
        cooldownQueue.push([currentTaskCount, time + n]); // Push task back into cooldown
      }
    }
    // Step 4: Check if tasks in cooldown are ready to be executed
    if (cooldownQueue.length > 0 && cooldownQueue[0][1] === time) {
      let [taskCount, readyTime] = cooldownQueue.shift();
      maxHeap.push(taskCount);
      maxHeap.sort((a, b) => b - a); // Sort again after inserting task back
    }
  }

  return time;
};

const tasks = ["A","A","A","B","B","B"], n = 2
console.log("Least Interval::", leastInterval(tasks, n))
// Output: 8
