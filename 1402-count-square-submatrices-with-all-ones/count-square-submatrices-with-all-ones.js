/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let reuslt = 0;
    const memo = Array.from({length: rowLen}, () => new Array(colLen).fill(-1))
    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(matrix[row][col] === 1) {
                reuslt += helper(row, col);
            }
        }
    }

    return reuslt;

    function helper(i, j) {
        if(i >= rowLen || j >= colLen) return 0;
        if(matrix[i][j] === 0) return 0;
        if(memo[i][j] != -1) return memo[i][j]

        let right = helper(i, j + 1);
        let diognal = helper(i + 1, j + 1);
        let bottom = helper(i + 1, j);

        return memo[i][j] = 1 + Math.min(right, diognal, bottom);
    }
};