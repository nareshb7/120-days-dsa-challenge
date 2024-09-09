/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
 var spiralMatrix = function(m, n, head) {
    let r = 0, c = 0,
        dr = 0, dc = 1,
        matrix = Array(m).fill(-1).map(_ => Array(n).fill(-1))
    
    const need2swap = () => (
        r + dr < 0 || r + dr >= m ||
        c + dc < 0 || c + dc >= n ||
        matrix[r+dr][c+dc] != -1
    )
    
    while (head) {
        matrix[r][c] = head.val
        
		// Need to change directions dr and dc
        if (need2swap()) {
            const temp = dc
            dc = -dr
            dr = temp
        }
        
        r += dr
        c += dc
        head = head.next
    }
    
    return matrix
};


// 2326. Spiral Matrix IV


const m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
console.log("Sprial Matrix:::", spiralMatrix(m, n, head))
// Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
// Explanation: The diagram above shows how the values are printed in the matrix.
// Note that the remaining spaces in the matrix are filled with -1.