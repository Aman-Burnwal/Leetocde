/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    
    const chess = Array.from({length : n}, () => new Array(n).fill("."))
    const ans = new Array();

    helper( 0);


    return ans;



    function helper( col) {
    
        // console.log(col, row , col >= n)
        if(col >= n) {

            let temp = [];

            for(const rows of chess) {
                temp.push(rows.join(""))
            }
            ans.push([...temp])
            return;
        }

        for(let i = 0; i < n; i++) {

            if(isSafe(i, col)) {

                chess[i][col] = "Q";

                helper( col + 1);

                chess[i][col] = "."
            }
        }
        
 
    }


    function isSafe(i, j) {
       
        
        for (let row = i - 1; row >= 0; row--) {
            if (chess[row][j] == "Q") return false;
        }

        
        for (let col = j - 1; col >= 0; col--) {

            if (chess[i][col] == "Q") return false;

        }

 
        for (let left = 1; i - left >= 0 && j - left >= 0; left++) {
            if (chess[i - left][j - left] == "Q") return false;
        }



        for (let right = 1; i + right < n && j - right >= 0; right++) {
            if (chess[i + right][j - right] == "Q") return false;
        }


        return true;
    }

    
};