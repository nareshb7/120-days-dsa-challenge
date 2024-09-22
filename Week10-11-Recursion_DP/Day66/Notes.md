# Notes for Day 66: Coin Change

## Approach

- `Create an array minCoins:` This array will store the minimum number of coins required to make each amount from 0 to amount.
  Initialize it with a large value (like amount + 1) because at first, you don't know how to form each amount.
- `Set minCoins[0] = 0:` To make the amount 0, no coins are needed, so minCoins[0] = 0.
- `Loop through each amount i from 1 to amount:` For every amount, check how many coins are required.
- `For each amount i, loop through the available coins:` If a coin can be used (i.e., i - coin >= 0), calculate how many coins are needed if you use that coin.
  Update minCoins[i] to be the minimum value between its current value and 1 + minCoins[i - coin] (i.e., using the current coin).
- `Check if minCoins[amount] is still the large initial value:` If yes, return -1 (means it's not possible to make that amount).
  Otherwise, return minCoins[amount], which is the minimum number of coins needed

## Complexity

- `Time Complexity:` O(amount \* n), where n is the number of coins.
  You are iterating over each amount from 1 to amount (this takes O(amount)), and for each amount, you check every coin (this takes O(n)).
- `Space Complexity:` O(amount).
  The extra space is used for the minCoins array, which has a size of amount + 1

## Key Learnings:

- `Dynamic Programming:` Use a dynamic programming array (minCoins) to store solutions for smaller amounts and build up the solution for the final amount.
- `Greedy Doesn’t Work Here:` A greedy approach (choosing the largest coin first) doesn't always give the correct result. That’s why dynamic programming is used to ensure all possibilities are checked.
- `Base Case:` The base case is that to make 0 amount, you need 0 coins, so minCoins[0] = 0.
- `Updating the State:` For every amount, you check all coins, and for each valid coin, you update the minimum coins required for that amount using the formula: `minCoins[i] = min(minCoins[i], 1 + minCoins[i - coin])`
- `Impossible Case:` If minCoins[amount] remains the large initial value (amount + 1), it means it's impossible to make that amount with the given coins, so return -1.
- `Reusable Subproblems:` You solve subproblems (e.g., how to make i = 1, i = 2), and use those results to solve the overall problem for the full amount.
