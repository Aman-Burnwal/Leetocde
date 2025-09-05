/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const box = Array.from({length : m}, () => new Array(n).fill(0));
    box[m - 1][n - 1] = 1;
    for(let row = m - 1; row >= 0; row-- ) {
        for(let col = n - 1; col >= 0; col--) {
            let countWays = 0;
            if(row === m-1 && n - 1 === col) continue;
            if(col != n - 1) countWays = box[row][col + 1];
            if(row != m - 1) countWays +=(box[row + 1][col]);

            box[row][col] = countWays;
        }
    }

    return box[0][0];
};