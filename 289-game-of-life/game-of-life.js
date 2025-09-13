/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    const dir = [[1, 1], [1, 0], [0, 1], [-1, -1], [-1, 0], [0, -1], [1, -1], [-1, 1]];
    const rowLen = board.length;
    const colLen = board[0].length;

    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            const count = check(row, col)
            if(board[row][col] === 0 && count === 3) {
                board[row][col] = 2;
            }
            else if(board[row][col] === 1 && (count <= 1 || count > 3)) {
                board[row][col] = -1;
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
        for(const [dx, dy] of dir ) {
            let r1 = dx + row;
            let c1 = dy + col;

            if(r1 >= 0 && r1 < rowLen && c1 < colLen && c1 >= 0 && 
            (board[r1][c1] === 1 || board[r1][c1] === -1)) count++
        }
        
        return count;

    }
};

