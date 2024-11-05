/**
 * @param {number[][]} matrix
 */

class Solution {
    rotate(mat) {
        // code here
        const n = mat.length;
        const m = mat[0].length;
        
        for  (let i=0; i< n ; i++) {
            for (let j=i+1; j<m; j++) {
                [mat[j][i], mat[i][j]] = [mat[i][j], mat[j][i]]
            }
        }
        
        for (let i=0; i<n;  i++) {
            mat[i].reverse()
        }
        return mat
    }
}


// Rotate by 90 degree

// Given a square mat[][]. The task is to rotate it by 90 degrees in clockwise direction without using any extra space.

// Input: mat[][] = [[1 2 3], [4 5 6], [7 8 9]]
// Output:
// 7 4 1 
// 8 5 2
// 9 6 3