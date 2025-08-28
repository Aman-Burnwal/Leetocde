/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(matrix) {
    for(let j = 1; j < matrix[0].length; j++) {
        const copy = [];
        let i = 0;
        for(let j1 = j; j1 < (matrix[0].length) && j1 < matrix.length && i < matrix.length; j1++ ) {
            copy.push(matrix[i++ ][j1]);

        }

    
        copy.sort((a, b) => a - b);

        i = 0;
        for(let j1 = j; j1 < (matrix[0].length) && j1 < matrix.length && i < matrix.length; j1++  ) {
            console.log(copy[i])
            matrix[i][j1] = copy[i++];
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        let k = i, j = 0;
        const copy = []
        while(k < matrix.length && j < matrix[0].length) {
            copy.push(matrix[k++][j++])
        }
        copy.sort((a, b) => b - a);
        k = i; j = 0, t = 0;



        while(k < matrix.length && j < matrix[0].length) {
            matrix[k++][j++] = copy[t++]
        }
    }

    return matrix;
};

// [
//     [1,7,3],
//     [9,8,2],
//     [4,5,6]
// ]
// [
//     [1,2,3],
//     [9,8,7],
//     [4,5,6]
// ]
