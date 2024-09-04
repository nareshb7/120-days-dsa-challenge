/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
 var robotSim = function(commands, obstacles) {
  // Direction vectors: North, East, South, West
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let x = 0, y = 0, direction = 0;
  let maxDistance = 0;

  // Convert obstacle coordinates into a set for quick lookup
  const obstacleSet = new Set();
  for (const [ox, oy] of obstacles) {
      obstacleSet.add(`${ox},${oy}`);
  }

  // Process each command
  for (const cmd of commands) {
      if (cmd === -2) {
          // Turn left: (counter-clockwise)
          direction = (direction + 3) % 4;
      } else if (cmd === -1) {
          // Turn right: (clockwise)
          direction = (direction + 1) % 4;
      } else {
          // Move forward in the current direction
          for (let i = 0; i < cmd; i++) {
              const nx = x + directions[direction][0];
              const ny = y + directions[direction][1];
              if (!obstacleSet.has(`${nx},${ny}`)) {
                  x = nx;
                  y = ny;
                  maxDistance = Math.max(maxDistance, x * x + y * y);
              } else {
                  break; // Hit an obstacle
              }
          }
      }
  }

  return maxDistance;
};

// 874. Walking Robot Simulation

const commands = [4,-1,4,-2,4], obstacles = [[2,4]]
console.log('Max Distance::', robotSim(commands, obstacles))
// Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.