/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  let results = [];
  
  // Sort the candidates to handle duplicates easily
  candidates.sort((a, b) => a - b);

  // Helper function for backtracking
  function backtrack(start, target, currentCombination) {
      if (target === 0) {
          results.push([...currentCombination]);
          return;
      }
      
      for (let i = start; i < candidates.length; i++) {
          // Skip duplicates
          if (i > start && candidates[i] === candidates[i - 1]) continue;

          // If the current candidate exceeds the target, no point in continuing
          if (candidates[i] > target) break;

          // Include the current candidate
          currentCombination.push(candidates[i]);
          
          // Recur with the remaining target and move to the next index
          backtrack(i + 1, target - candidates[i], currentCombination);
          
          // Backtrack: remove the last added candidate
          currentCombination.pop();
      }
  }

  // Start the backtracking process
  backtrack(0, target, []);
  
  return results;
};
//40. Combination Sum II
const candidates = [10,1,2,7,6,1,5], target = 8
console.log("Combination sum of 2", combinationSum2(candidates, target))
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]