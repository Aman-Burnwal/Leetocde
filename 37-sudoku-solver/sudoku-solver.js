/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
    function solver() {

        for(let row = 0; row < board.length; row++) {

            for(let col = 0; col < board[0].length; col++) {
                if(board[row][col] === ".") {
                    for(let num = 1; num < 10; num++) {
                        if(canUse(num.toString(), row, col)) {
                            board[row][col] = num.toString();
                            if(solver()) return true;
                            board[row][col] = ".";
                        }
                    }
                    return false;
                }
            }
        }

        return true;
    }

    function canUse (num, row, col) {
        for(let cols = 0; cols < board[0].length; cols++) {
            if(board[row][cols] === num) return false;
        }
        for(let rows = 0; rows < board[0].length; rows++) {
            if(board[rows][col] === num) return false;
        }

        const rows = Math.floor(row / 3) * 3;
        const cols = Math.floor(col / 3) * 3;

        for(let subRow = rows; subRow < rows + 3; subRow++) {
            for(let subCol = cols; subCol < cols + 3; subCol++) {
                if(board[subRow][subCol] === num) return false;
            }
        }
        return true;
    }


    solver()
    return board;
};