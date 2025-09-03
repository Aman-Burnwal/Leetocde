/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    const queen = Array.from({length: n}, () => new Array(n).fill("."))
    const ans = []


    function backtrack(row, col, count) {
        if(row >= n) {
            const board = queen.map((row) => row.join(""));
            if(count ===  n) ans.push(board)
        }
        // console.log(row)
        for(let i = row; i < n; i++) {
            for(let j = col; j < n; j++) {
                // console.log(queen[i][j], isSafe(i, j))
                if( queen[i][j] === "." && isSafe(i , j)) {
                    queen[i][j] = "Q";
                    backtrack(i + 1, 0, count + 1);
                    queen[i][j] = "."
                }
            }
        }
    }
    backtrack(0, 0, 0)
    return ans;



    function isSafe(i, j) {

        for(let row = 0; row < n; row++) {
            if(queen[row][j] === 'Q' || queen[i][row] === "Q") return false;
        }

        let row = i, col = j;

        while(row >= 0 && col >= 0) {
            if(queen[row--][col--] === 'Q') return false;
        }
        row = i, col = j;
        while(row < n && col < n) {
            if(queen[row++][col++] === 'Q') return false;
        }

        row = i, col = j;
        while(row >= 0 && col < n) {
            if(queen[row--][col++] === 'Q') return false;
        }

        row = i, col = j;
        while(row < n && col >= 0) {
            if(queen[row++][col--] === 'Q') return false;
        }
        return true;
    }
}; 