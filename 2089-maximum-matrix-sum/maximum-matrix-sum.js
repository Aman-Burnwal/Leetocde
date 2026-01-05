/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    
    let sum = 0;
    let isMinus = 0;
    let min = Math.pow(10, 5) + 10

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {

            sum += Math.abs(matrix[row][col]);
            if(matrix[row][col] < 0) {
                isMinus = !isMinus;
            }
        
            min = Math.min(min, Math.abs(matrix[row][col]))
        }
    }

    if(isMinus) {
        sum -= (2 * Math.abs(min))
    }

    return sum;
};