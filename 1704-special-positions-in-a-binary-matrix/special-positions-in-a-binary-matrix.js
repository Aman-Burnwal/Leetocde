/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const n = mat.length;
    const m = mat[0].length;
    const rows = new Array(n).fill(0);
    const cols = new Array(m).fill(0);
    let count = 0;


    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(mat[row][col] === 1){
                rows[row]++;
                cols[col]++;
            }
        }
    }

  
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(mat[row][col] === 1 && rows[row] === 1 && cols[col] === 1){
                count++
            }
        }
    }

    return count

    
};


