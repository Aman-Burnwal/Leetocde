/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function(grid, k) {
    const m = grid[0].length;
    const array = new Array(m).fill(0);

    let count = 0;

    for(const rows of grid) {

        let sum = 0;
        for(let col = 0; col < m; col++) {
            array[col]+= rows[col];
            sum += array[col]
            if(sum > k) break;
            count++;
        }
        
    }

    return count;
    
};