/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let result = 0;
    const rows = mat.map(row => [...row]);
    const cols = mat.map(row => [...row]);

    const R = mat.length, C = mat[0].length;

    // Step 1: row-wise consecutive 1s
    for (let i = 0; i < R; i++) {
        let count = 0;
        for (let j = C - 1; j >= 0; j--) {
            if (mat[i][j] === 1) count++;
            else count = 0;
            rows[i][j] = count;
        }
    }

    // Step 2: col-wise consecutive 1s
    for (let j = 0; j < C; j++) {
        let count = 0;
        for (let i = R - 1; i >= 0; i--) {
            if (mat[i][j] === 1) count++;
            else count = 0;
            cols[i][j] = count;
        }
    }

    // Step 3: count submatrices
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (mat[i][j] === 1) {
                let minWidth = rows[i][j];
                for (let k = i; k >= 0 && mat[k][j] === 1; k--) {
                    minWidth = Math.min(minWidth, rows[k][j]);
                    result += minWidth;
                }
            }
        }
    }

    return result;
};
