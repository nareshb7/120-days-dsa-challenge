# Notes for Day 80: Word Search II

## Approach

- `Trie Construction:` Create a Trie (prefix tree) to store all the given words.
  Insert each word from the list into the Trie, character by character.
- `DFS (Depth First Search) and Backtracking:` For each cell in the board, initiate a backtracking process to explore all possible words that can be formed starting from that cell.
  At each step, check if the current character exists in the Trie. If it doesn’t, backtrack (stop exploring that path).
  If a valid word is found (marked in the Trie), add it to the result and remove it from the Trie to avoid duplicates.
- `Movement in Four Directions:` From any cell, move in four possible directions (up, down, left, right) to explore the next characters in the word.
  Keep track of visited cells to avoid revisiting the same cell in the same path.
- `End the Search for Each Cell:` Once the search for a cell is completed, restore its original value and continue to the next cell.
- `Return the Result:` After exploring all possible cells and paths, return the list of found words

## Complexity

- `Time Complexity:`
- `Trie Construction:` O(L), where L is the total number of letters across all words in the list.
- `Backtracking:`
  In the worst case, we explore every cell in the board. For each cell, we can perform DFS, visiting up to 4 neighboring cells (up, down, left, right).
  The DFS can run up to the length of the longest word in the list (let’s say length K).
  Therefore, backtracking is O(N _ M _ 4^K), where:
  N = number of rows in the board.
  M = number of columns in the board.
  K = length of the longest word.
- `Overall Time Complexity:` O(L + N _ M _ 4^K).

- `Space Complexity:`
  Trie: O(L), where L is the total number of characters in the list of words.
  Recursion Stack: O(K), where K is the length of the longest word (due to recursive calls for backtracking).
  Visited cells tracking: O(N \* M), since we may mark all cells of the board as visited.
- `Overall Space Complexity:` O(L + N \* M)

## Key Learnings:

- `Trie Data Structure:` Useful for efficiently storing and searching words, especially when you need to check prefixes and full words frequently.
- `Backtracking with DFS:` Allows exploring all possible paths in a grid by recursively visiting neighboring cells.
  Combine DFS with backtracking to avoid exploring incorrect paths and to restore the state of visited cells after each search.
- `Optimization by Early Termination:` The Trie helps in cutting down unnecessary searches early by terminating paths that don't match any prefix in the words list.
- `Handling Edge Cases:` Ensure you handle scenarios like duplicate words (remove once found) and revisiting cells (mark them as visited and backtrack)
