/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    const queen = Array.from({length: n}, () => new Array(n).fill("."))
    const ans = []


    function backtrack(row, count) {
        if(row >= n) {
           
            let temp = [];

            for(const rows of queen) {
                temp.push(rows.join(""))
            }
            ans.push([...temp])
            return;
        }


        for(let j = 0; j < n; j++) {
            if(isSafe(row , j)) {
                queen[row][j] = "Q";
                backtrack(row + 1, count + 1);
                queen[row][j] = "."
            }
        }

    }
    backtrack(0, 0)
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