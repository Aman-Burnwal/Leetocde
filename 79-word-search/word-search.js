/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rowLen = board.length;
    const colLen = board[0].length;
    const wordLen = word.length;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            if(board[i][j] ===  word[0] && isMatch(i, j, 0)) return true; 
        }
    }


    return false;


    function isMatch(row, col, idx) {
        if(idx === wordLen) return true;
        if(row >= rowLen || row < 0 || col < 0 || col >= colLen) return false;
        if(board[row][col] != word[idx]) return false;
        let is = false;
        let val = board[row][col];
        board[row][col] = ""
        dir.forEach(([x, y]) => {

            is = is || isMatch(row + x , col + y, idx + 1)
        })

        board[row][col] = val;

        return is;
    }
};