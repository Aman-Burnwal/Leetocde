/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count = 0;
    const dp = {};
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[0].length - 1; j++) {
            if(matrix[i][j] === 1) count += helper(i, j)

        }
    }
    console.log(count)

    for(let i = 0; i < matrix.length; i++) {
        count += matrix[i][matrix[0].length - 1];
    }
    for(let j = 0; j < matrix[0].length - 1; j++) {
        count += matrix[matrix.length -1][j]
    }
    return count;

    function helper(i , j) {
        const key = i + "_"  + j;
        if(dp.hasOwnProperty(key)) return dp[key]
        if(i >= matrix.length) return 0;
        if(j >= matrix[0].length) return 0;
        if(matrix[i][j] === 0) return 0;

        let right = helper(i, j + 1);
        let diagonal = helper(i + 1, j + 1);
        let down = helper(i + 1, j);

        return dp[key] = 1 + Math.min(right, down, diagonal);
    }
};