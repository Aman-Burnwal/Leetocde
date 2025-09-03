/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRowHasZero = false;
    let firstColHasZero = false;
    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    for(let row = 0; row < rowLength; row++) {
        if(matrix[row][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    for(let col = 0; col < colLength; col++) {
        if(matrix[0][col] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    for(let row = 1; row < rowLength; row++) {
        for(let col = 1; col < colLength; col++) {
            if(matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    for(let row = 1; row < rowLength; row++) {
        for(let col = 1; col < colLength; col++) {
            if(matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if(firstColHasZero) {

        for(let row = 0; row < rowLength; row++) {
            matrix[row][0] = 0
        
        }
    }
    


    if(firstRowHasZero) {

        for(let col = 0; col < colLength; col++) {
            matrix[0][col] = 0
        
        }
    }
    
    



};