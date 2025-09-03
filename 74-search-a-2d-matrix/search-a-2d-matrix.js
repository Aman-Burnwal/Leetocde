/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let colLen = matrix[0].length - 1;
    for(let row = 0; row < matrix.length; row++) {
        if(matrix[row][0] <= target && matrix[row][colLen] >= target) {

            let left = 0;
            let right = colLen;
            while(left <= right) {
                const mid = Math.floor((left + right) / 2);
                if(matrix[row][mid] === target) {
                    return true;
                }
                if(matrix[row][mid] > target) right = mid - 1;
                else left = mid + 1;
            }
        }
    }
    return false;
};