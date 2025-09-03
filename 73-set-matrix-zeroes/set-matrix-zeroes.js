/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set()
    const cols = new Set()

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                rows.add(row);
                cols.add(col)
            }
        }
    }
    
    for(const row of rows) {
        for(let col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
    }

    for(const col of cols) {
        for(let row = 0; row < matrix.length; row++) {
            matrix[row][col] = 0;
        }
    }



};