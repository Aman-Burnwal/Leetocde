/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    
    let n = matrix.length;
    let m = matrix[0].length;
    let max = 0;

    let dummy = new Array(m).fill(0)


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) dummy[j] = 0;
            else dummy[j]++;
        }
        max = Math.max(max, maxValue())

        // console.log(max)
        // console.log(dummy)
    }

    function maxValue() {
        let max = 0;
        const row = [...dummy].sort((a, b) => b - a)

        for(let j = 0; j < m; j++) {
            if(row[j] === 0) break;
            max = Math.max(max, row[j]* (j + 1))
        }
        return max;
    }

    return max
};