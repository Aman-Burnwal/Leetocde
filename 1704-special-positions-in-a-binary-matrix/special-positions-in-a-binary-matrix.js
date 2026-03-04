/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows = new Array(mat.length).fill(0);
    const cols = new Array(mat[0].length).fill(0);

    // let len = Math.min(mat.length, mat[0].length)
    let count = 0;

    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[0].length; col++) {
            if(mat[row][col] === 1 && check(row, col)){
                count++
            }
        }
    }


    function check(row, col) {
        
        for(let i = 0; i < mat.length; i++) {
            if(i === row) continue;
            if(mat[i][col]) return false;
        }

        for(let j = 0; j < mat[0].length; j++) {
            if(j === col) continue;
            if(mat[row][j]) return false;
        }
        return true;
    }
  
   
    return count

    
};



[
    [0,0,1,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,1,0,0]]