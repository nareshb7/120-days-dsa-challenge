# Notes for Day 87: Task Scheduler

## Approach

- `Task Frequency Count:` Use a Map to count how many times each task appears in the input tasks array.
  Example: If the tasks are ["A", "A", "A", "B", "B", "B"], the frequency map will be: { "A": 3, "B": 3 }.
- `Create a Max Heap:` Store the task frequencies (just the counts) in a list.
  Example: For the above map, the list will be [3, 3] since both tasks "A" and "B" appear 3 times.
  Sort the list in descending order so that the most frequent tasks are processed first.
- `Time Simulation:` Use a time variable to track how much time has passed while scheduling the tasks.
  Initialize an empty cooldownQueue to track tasks that are on cooldown (i.e., tasks that can't be executed for a certain number of time units).
- `Schedule Tasks:` At each time step, try to execute the most frequent task (i.e., the first task from the sorted maxHeap).
  After executing a task, decrease its frequency count. If it still has more executions left, push it into the cooldownQueue with the time when it will be available again (i.e., current time + n).
- `Manage Cooldown:` At every time step, check if the first task in the cooldownQueue is ready to be executed again (i.e., its cooldown time has passed).
  If the cooldown is over, move the task back to the maxHeap to be scheduled again, and sort the heap.
- `Repeat Until All Tasks are Executed:` Keep repeating the scheduling process until both maxHeap (tasks that are ready to be executed) and cooldownQueue (tasks waiting for their cooldown) are empty.
  Return Total Time:
- Once all tasks are scheduled, return the total time taken to complete all tasks

## Complexit

- `Time Complexity O(n):`
- O(T), where T is the total number of tasks.
- O(T log T) for sorting the task frequencies
- O(T log T), because heap sorting dominates here.
- O(T log T), as the sorting of tasks (inserting into the heap) dominates the time complexity.

- `Space Complexity O(1):` O(T), as we are storing the task frequencies, heap, and cooldown queue, each of which can hold up to T tasks.

## Key Learnings:

- `Greedy Approach:` The greedy choice is to always pick the task with the highest remaining frequency that can be executed at the current time. This helps minimize idle time and ensures that tasks with high frequencies are handled efficiently.
- `Maximizing Throughput:` By focusing on scheduling the most frequent task first, the algorithm ensures that we are effectively utilizing the available time slots without unnecessary idle periods.
- `Cooldown Management:` A crucial part of this problem is managing the cooldown period (n). This means tasks cannot be executed until their cooldown expires. We track this with a cooldownQueue to efficiently determine when a task can be executed again.
- `Efficient Scheduling with Heaps:` Heaps (or max heaps) are used to efficiently retrieve and update the most frequent task without having to re-sort the entire task list repeatedly.
- `Time Simulation:` Instead of trying to predict future task execution patterns, we simulate each time step, allowing us to naturally handle task scheduling, cooldowns, and idle times
