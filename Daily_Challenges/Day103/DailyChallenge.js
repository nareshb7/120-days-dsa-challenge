/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
  if (s.length !== goal.length) return false;
  // let str = s;
  // const n = s.length
  // for (let i=0; i<n ; i++) {
  //     if (str === goal) return true;
  //     str = s.substr(i)+ s.substr(0,i)
  // }
  // if (str === goal) return true;;
  // return false;
  return (s+s).includes(goal)
};

// 796. Rotate String

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example
// Input: s = "abcde", goal = "cdeab"
// Output: true