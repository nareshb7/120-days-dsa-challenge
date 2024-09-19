# Notes for Day 63: Word Ladder

## Approach

- Given a beginWord, endWord, and a list of words (wordList), we want to transform the beginWord into the endWord by changing exactly one letter at a time.
- Each transformed word must exist in the wordList.
- We need to find the shortest transformation sequence and return the number of steps required. If no such transformation is possible, return 0
- `Breadth-First Search (BFS):` Start with the beginWord and explore all possible one-letter transformations.
  For each word, change one letter at a time and check if the resulting word exists in the wordList.
  If it exists, add it to the queue, mark it as visited by removing it from the wordList (to avoid cycles), and continue the process.
- `Transformation Logic:` For each word, loop through each character and replace it with every possible lowercase letter ('a' to 'z').
  If the transformed word exists in the wordList, store that word, remove it from the wordList, and continue.
- `End Condition:` If the endWord is found during the transformation process, return the number of steps taken.
  If the queue is empty and the endWord is not reached, return 0.

## Complexity

- `Time Complexity:` O(M * N):
  M: Length of each word.
  N: Number of words in the wordList.
  For each word in the queue, we attempt to transform each character in the word (M possibilities) and check all 26 letters of the alphabet.
  This process is repeated for each word in the wordList (N words).
- `Space Complexity:` O(M * N):
  Queue: In the worst case, the queue can hold all words from the wordList, and each word is of length M.
  Set: The Set holding the words from the wordList requires O(N) space

## Key Learnings:

- `Breadth-First Search (BFS):` BFS is a powerful algorithm for finding the shortest path in unweighted graphs. In this case, it helps find the shortest transformation sequence.
- `Word Transformation:` You can generate all possible transformations of a word by changing one letter at a time, which is essential for solving problems involving string manipulation.
- `Set for Fast Lookup:` Using a Set instead of an array for the wordList helps achieve O(1) lookup times, which significantly improves performance.
- `Avoiding Cycles:` By removing words from the Set once they are visited, you prevent cycles and ensure each word is only processed once.
- `String Immutability:` Strings in JavaScript are immutable, so creating new transformed words requires slicing and concatenating, not direct modification.
