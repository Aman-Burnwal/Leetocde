/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count = 0;

    for(let i = matrix.length -2; i >= 0;i--) {
        for(let j = matrix[0].length -2; j >= 0; j--) {
            if(matrix[i][j]) {
                matrix[i][j] += Math.min(matrix[i + 1][j], matrix[i + 1][j + 1], matrix[i][j + 1])
                count += matrix[i][j];
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        count += matrix[i][matrix[0].length - 1];
    }
    for(let j = 0; j < matrix[0].length - 1; j++) {
        count += matrix[matrix.length -1][j]
    }
    return count;


};