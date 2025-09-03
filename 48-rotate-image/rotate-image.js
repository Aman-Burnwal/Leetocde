/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    const n = matrix.length;
    for(let row = 0; row < n; row++ ) {
        for(let col = 0; col < n - row; col++) {
            [matrix[row][col], matrix[n - 1 - col ][n - 1 - row ] ] = 
            [matrix[n - 1 - col ][n - 1 - row ] , matrix[row][col]];
        }
    }

    for(let col = 0; col < n; col++) {
        for(let row = 0; row < Math.floor(n / 2); row++) {
            [matrix[n - 1 - row][col] , matrix[row][col]] =  
            [matrix[row][col] , matrix[n - 1 - row][col]]
        }
    }


};


