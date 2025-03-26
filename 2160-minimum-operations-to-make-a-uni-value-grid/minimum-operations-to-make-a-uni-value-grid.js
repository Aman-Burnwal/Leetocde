/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    
    if(grid.length == 1 && grid[0].length == 0) return 0;
    const arr = new Array();
    let count = 0;

    for(const row of grid) {

        for(const col of row) {

             arr.push(col);
            
        }
    }

    arr.sort((a,b) => a - b);
    let target = arr[Math.floor(arr.length / 2)];

    for(const num of arr) {

        let t = Math.abs(target - num);
        if((t % x) != 0 ) return -1;
        count += ( t / x);
        
    }

    return count;
};