/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function(target, position, speed) {
  const pair = position.map((_, i) => [position[i], (target- position[i])/speed[i] ]).sort((a, b) => b[0] - a[0])
  const stack =[]
  for (const [_, time] of pair) {
      stack.push(time)
      if (stack.length >= 2 && stack[stack.length -1] <= stack[stack.length -2]) {
          stack.pop()
      }
  }
  return stack.length
};

const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
console.log('fleet::', carFleet(target, position, speed))
// Output: 3