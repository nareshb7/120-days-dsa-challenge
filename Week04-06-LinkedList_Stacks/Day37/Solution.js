/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];
    if (stack.length === 0 || asteroid > 0) {
      // if curr size is +ve
      stack.push(asteroid);
    } else {
      while (true) {
        const peek = stack[stack.length - 1];
        if (peek < 0) {
          // if prev size is also -ve
          stack.push(asteroid);
          break;
        } else if (peek === -asteroid) {
          // if size is equal
          stack.pop();
          break;
        } else if (peek > -asteroid) {
          // if prev size is greater
          break;
        } else {
          stack.pop(); // if prev size is less than curr size
          //after popping, if the stack is empty push curr size
          if (stack.length === 0) {
            stack.push(asteroid);
            break;
          }
        }
      }
    }
  }
  return stack;
};

const asteroids = [5, 10, -5]; // Output: [5,10]
console.log("Remaining asteroids::", asteroidCollision(asteroids));

