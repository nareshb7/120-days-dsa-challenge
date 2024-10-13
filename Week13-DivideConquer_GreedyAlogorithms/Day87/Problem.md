# Day 87: Task Scheduler

## Problem Statement

- You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
- Return the minimum number of CPU intervals required to complete all tasks.

## Example

1. **Example 1:**

- Input: tasks = ["A","A","A","B","B","B"], n = 2
- Output: 8
- Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
- After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

# Daily Challenge - 632. Smallest Range Covering Elements from K Lists
