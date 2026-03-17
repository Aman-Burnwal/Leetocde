/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    
    let n = matrix.length;
    let m = matrix[0].length;

    for(let j = 0; j < m; j++) {
        let sum = 0;
        for(let i = 0; i < n; i++) {
            if(matrix[i][j] === 0) sum = 0;
            else {
                sum += 1;
                matrix[i][j] = sum;
            }
        }
    }

    matrix.map(row => row.sort((b , a) => a - b));

    let max = 0;
    for(let row of matrix) {

        for(let j = 0; j < m; j++) {
            if(row[j] === 0) break;
            max = Math.max(max, row[j]* (j + 1))
        }
    }
    return max;
};