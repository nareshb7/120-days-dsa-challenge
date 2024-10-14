/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function (board) {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const fit = (row, col, digit) => {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === digit || board[i][col] === digit) {
          return false;
        }
      }
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const r = startRow + i;
          const c = startCol + j;
          if (r === row && c === col) {
            continue;
          }
          if (board[r][c] === digit) {
            return false;
          }
        }
      }
      return true;
    };
    function backtrack(index) {
      if (index === 81) {
        return true;
      }
      const row = Math.floor(index / 9);
      const col = index % 9;
      if (board[row][col] === ".") {
        for (let i = 0; i < digits.length; i++) {
          if (fit(row, col, digits[i])) {
            board[row][col] = digits[i];
            if (backtrack(index + 1)) {
              return true;
            }
            board[row][col] = ".";
          }
        }
        return false;
      } else {
        return backtrack(index + 1);
      }
    }
    backtrack(0);
  };