/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    helper();
    return board;
    
    function helper() {

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === ".") {
                    for(let num = 1; num < 10; num++) {
                        const isSafe = isValid(i, j, num.toString());
                        if(isSafe) {
                            board[i][j] = num.toString();
                            if(helper()) return true;
                            board[i][j] = ".";
                         
                        }
                    }
                    return false;
                }
            }
        }

        return true;
    }

    function isValid (i, j, num) {
        for(let row = 0; row < 9; row++) {
            if(board[row][j] === num) return false;
        }
        for(let col = 0; col < 9; col++) {
            if(board[i][col] === num) return false;
        }
        const row = Math.floor(i / 3) * 3;
        const col = Math.floor(j / 3) * 3;
        
        for(let row1 = row; row1 < row + 3; row1++) {
            for(let col1 = col; col1 < col + 3; col1++) {
                if(board[row1][col1] === num) return false;
            }
        }
        return true;
    
    }
};