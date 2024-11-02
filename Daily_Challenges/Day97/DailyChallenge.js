
 var longestSquareStreak = function(nums) {
    const mp = new Map();
    nums.sort((a, b) => a - b);
    let res = -1;

    for (const num of nums) {
        const sqrt = Math.floor(Math.sqrt(num));

        if (sqrt * sqrt === num && mp.has(sqrt)) {
            mp.set(num, mp.get(sqrt) + 1);
            res = Math.max(res, mp.get(num));
        } else {
            mp.set(num, 1);
        }
    }

    return res;
};

// 2501. Longest Square Streak in an Array

// Input: nums = [4,3,6,16,8,2]
// Output: 3
// Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
// - 4 = 2 * 2.
// - 16 = 4 * 4.
// Therefore, [4,16,2] is a square streak.
// It can be shown that every subsequence of length 4 is not a square streak.



//Explanation: 

// The problem involves finding the longest "square streak" in a list of numbers, where each number in a streak is the square of the previous number. Observing the problem, one might realize that if we can store and reference each square root's streak length, we can build up streaks efficiently by iterating over a sorted list of numbers.


// Approach
// Sort the Array: Sorting the input list of numbers in ascending order ensures that smaller numbers and their squares appear before the larger squares in the list.
// Initialize a Map: Use a map mp to keep track of the streak length for each number.
// Iterate Through Numbers: For each number in the sorted list, calculate its integer square root.
// If the number is a perfect square (i.e., the square of the square root equals the number) and the square root exists in the map, we can extend a streak.
// Update the map entry for the current number to mp[_sqrt] + 1 to indicate it's part of an extended streak.
// Track the Longest Streak: Update the result with the maximum streak length found during the iteration.
// Finally, return the result, which represents the longest square streak.


// Complexity
// Time complexity:
// Sorting takes $$O(n \log n)$$, and iterating over the list to calculate the square root and update the map takes $$O(n)$$, making the overall complexity $$O(n \log n)$$.


// Space complexity:
// The map mp may store up to $$O(n)$$ entries (for each unique number in nums), giving a space complexity of $$O(n)$$.


// Code Breakdown:
// Sorting: Sorts the array in $$O(n \log n)$$ to ensure that smaller squares are processed before larger ones.
// Map Setup: A map mp tracks the length of streaks associated with each number.
// Square Check and Update: For each number, we check if it’s a perfect square and if its square root has a streak in the map, extending that streak if both conditions are met. Otherwise, we initialize a new streak.
// Result Calculation: The maximum streak length is updated continuously, so at the end, res contains the length of the longest square streak.