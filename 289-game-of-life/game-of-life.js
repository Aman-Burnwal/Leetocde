/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rowLen = board.length;
    const colLen = board[0].length;
    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            const count = check(row, col)
            if(board[row][col] === 0 && count === 3) {
                board[row][col] = 2;
            }
        }
    }

    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(board[row][col] === 1) {
                const count = check(row, col)
                if(count === 2 || count === 3) continue;
                board[row][col] = -1
            }
        }
    }
    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(board[row][col] === 2) {
                board[row][col] = 1;
            }
            else if(board[row][col] === -1) board[row][col] = 0;
        }
    }


    function check(row, col) {
        let count = 0;
        if( row > 0 && (board[row - 1][col] === 1 || board[row - 1][col] === -1) ) count++;
        if( col > 0 && (board[row][col - 1] === 1 || board[row][col - 1] === -1) ) count++;
        if(row + 1 < rowLen && (board[row+ 1][col] === 1 || board[row+ 1][col] === -1) ) count++;
        if(col + 1 < colLen && (board[row][col + 1] === 1 || board[row][col + 1] === -1) ) count++;
        if(col + 1 < colLen && row + 1 < rowLen && (board[row + 1][col + 1] === 1 || board[row + 1][col + 1] === -1) ) count++;
        if(row > 0 && col > 0 && (board[row - 1][col - 1] === 1 || board[row - 1][col - 1] === -1)) count++;
        if(row > 0 && col + 1 < colLen &&( board[row - 1][col + 1] === 1 ||  board[row - 1][col + 1] === -1)) count++;
        if(col > 0 && row + 1 < rowLen && (board[row + 1][col - 1] === 1 || board[row + 1][col - 1] === -1)) count++;

        return count;

    }
};

