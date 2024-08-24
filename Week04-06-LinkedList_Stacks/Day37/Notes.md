# Notes for Day 37: Asteroid Collision

## Approach

- Stack Management: The stack is used to store asteroids that are moving to the right or have survived collisions.
- Collision Handling:
- If the current asteroid is moving to the right (positive), it is pushed onto the stack.
- If it's moving to the left (negative), the algorithm checks for collisions with the top asteroid on the stack.
- If the top of the stack is a smaller or equal asteroid (in absolute terms), the stack asteroid is removed.
- If they are equal in size, both explode.
- If the top of the stack is larger, the current asteroid is destroyed.
- After the loop return the stack as result

## Complexity

- `Time Complexity O(n):` The time complexity of this algorithm is linear, where n is the number of asteroids in the input array. Each asteroid is processed exactly once, either by being pushed onto the stack or by causing other asteroids to be popped off. Since each asteroid can only be pushed and popped from the stack once, the overall complexity is O(n).
- `Space Complexity O(n):` The space complexity is also linear, O(n), because in the worst case, all asteroids could be moving in the same direction or have no collisions, requiring the stack to store all n asteroids.

## Key Learnings:

- `Stack Usage:` The stack data structure is well-suited for problems involving comparisons between adjacent elements, particularly in scenarios where elements may "cancel out" or affect each other in a sequence.
  In this problem, the stack effectively tracks the current state of the asteroid field, helping to manage collisions in a LIFO (Last In, First Out) manner.
- `Collision Logic:` Understanding how to simulate real-world interactions (like collisions) using code is crucial. Here, the problem requires careful handling of conditions where objects move towards each other with different magnitudes.
  The problem teaches how to manage conditions where multiple outcomes are possible based on the values and directions of elements.
- `Edge Cases:` Handling edge cases is essential, such as when the stack is empty, when the sizes of colliding asteroids are the same, or when all asteroids are moving in the same direction.
  This problem illustrates the importance of thorough testing and considering different scenarios that might affect the outcome.
- `Greedy Approach:` The problem employs a greedy approach where each decision (whether to push, pop, or continue) is made based on the current state of the stack and the current asteroid, aiming to maintain a valid state after every step.
  This is a good example of a problem where local decisions lead to a globally correct solution.
- `Understanding Directionality:` The problem reinforces the importance of understanding directionality and how it affects interactions. Positive and negative values represent opposite directions, leading to different outcomes when they meet.
