/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    
    let r0 = true, r1 = true, r2 = true, r3 = true;
    let fn = mat.length;
    let fm = mat[0].length;

    if (fn !== fm) return false;

    // phase 1

    for(let i = 0; i < fn; i++) {
        for(let j = 0; j < fm; j++) {
            if(r0 && mat[i][j] != target[i][j]) {
                r0 = false;
            }
            if (r1 && mat[i][j] !== target[j][fn - i - 1]) {
                r1 = false;
            }

            if (r2 && mat[i][j] !== target[fn - i - 1][fn - j - 1]) {
                r2 = false;
            }

            if (r3 && mat[i][j] !== target[fn - j - 1][i]) {
                r3 = false;
            }
        }
    }
    
    return r0 || r1 || r2 || r3
   
};