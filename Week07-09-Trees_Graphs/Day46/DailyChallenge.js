/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
 var chalkReplacer = function(chalk, k) {
    // Step 1: Find the total chalk used in one full round
   const totalChalk = chalk.reduce((a, b) => a + b, 0);
   
   // Step 2: Find the remaining chalk after full rounds
   let remainingChalk = k % totalChalk;
   
   // Step 3: Iterate to find the student who will replace the chalk
   for (let i = 0; i < chalk.length; i++) {
       if (remainingChalk < chalk[i]) {
           return i;
       }
       remainingChalk -= chalk[i];
   }
   
   return -1;  // This line is theoretically unreachable
   
};

// 1894. Find the Student that Will Replace the Chalk

// Input: chalk = [5,1,5], k = 22
// Output: 0
// Explanation: The students go in turns as follows:
// - Student number 0 uses 5 chalk, so k = 17.
// - Student number 1 uses 1 chalk, so k = 16.
// - Student number 2 uses 5 chalk, so k = 11.
// - Student number 0 uses 5 chalk, so k = 6.
// - Student number 1 uses 1 chalk, so k = 5.
// - Student number 2 uses 5 chalk, so k = 0.
// Student number 0 does not have enough chalk, so they will have to replace it.