# Notes for Day 71: Edit Distance

## Approach

- `Define the DP Table:` Let c[i][j] represent the minimum number of operations required to convert the first i characters of word1 into the first j characters of word2.
- `Base Case Initialization:` If word1 is empty (i == 0), we need j insertions to transform it into word2, so c[0][j] = j.
  If word2 is empty (j == 0), we need i deletions to transform word1 into word2, so c[i][0] = i.
- `Recurrence Relation:` If word1[i-1] == word2[j-1], no operation is needed, and c[i][j] = c[i-1][j-1].
  If word1[i-1] != word2[j-1], we need to consider the three possible operations:
  Insert a character into word1, so c[i][j] = c[i][j-1] + 1.
  Delete a character from word1, so c[i][j] = c[i-1][j] + 1.
  Replace a character in word1 with word2[j-1], so c[i][j] = c[i-1][j-1] + 1.
  where delta = 0 if word1[i-1] == word2[j-1], and delta = 1 otherwise.
- `Final Answer:` The final value c[m][n] (where m is the length of word1 and n is the length of word2) will be the answer

## Complexity

- `Time Complexity:` The time complexity is O(m×n), where m and n are the lengths of the two strings. This is because we fill in an m x n table.
- `Space Complexity:` The space complexity is also O(m×n) due to the dp table used to store the intermediate results.

## Key Learnings:

- `Understand Dynamic Programming (DP):` Break down the problem into smaller subproblems.
- `Use Recurrence Relations:` Solve problems using a formula that depends on previously solved subproblems.
- `Build and Fill a DP Table:` Start with base cases and work up to the final solution.
- `Minimize Operations:` Use Math.min() to choose the best (minimum cost) operation.
- `Handle Edge Cases:` Pay attention to cases like empty strings.
- `Time and Space Complexity:` The solution has O(m×n) time complexity, and you can optimize space complexity.
- `Three Types of Operations:` Understand insertion, deletion, and substitution.
- `String Manipulation:` Compare strings step by step using a DP approach.
- `Real-World Applications:` This technique is used in spell checkers, DNA analysis, and NLP tasks.
- `Reduce Big Problems to Small Ones:` Learn to solve smaller subproblems to tackle the bigger problem.
