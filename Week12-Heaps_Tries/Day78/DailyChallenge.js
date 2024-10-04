/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  let tsum = 0;
  for (let x of skill) tsum += x;
  tsum = (tsum / skill.length) * 2;

  let map = new Map();
  for (let x of skill) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let chem = 0;
  for (let [key, val] of map) {
    if (val !== map.get(tsum - key)) return -1;
    if (key === tsum - key) chem += key * (tsum - key) * (val / 2);
    else chem += key * (tsum - key) * val;
    map.delete(key);
    map.delete(tsum - key);
  }
  return chem;
};

// 2491. Divide Players Into Teams of Equal Skill
const skill = [3, 2, 5, 1, 3, 4];
console.log("Divide players::", dividePlayers(skill));

// Output: 22
// Explanation:
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
