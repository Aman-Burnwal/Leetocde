/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows = new Array(mat.length).fill(0);
    const cols = new Array(mat[0].length).fill(0);
    let count = 0;


    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[0].length; col++) {
            if(mat[row][col] === 1){
                rows[row]++;
                cols[col]++;
            }
        }
    }

  
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[0].length; col++) {
            if(mat[row][col] === 1 && rows[row] === 1 && cols[col] === 1){
                count++
            }
        }
    }

    return count

    
};



[
    [0,0,1,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,1,0,0]]