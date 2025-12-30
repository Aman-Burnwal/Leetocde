/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    
    function isEqual(x, y) {
        const seen = new Set()
        const arr = []
        for(let row = 0; row < 3; row++) {
            let sum = 0;
            let sum2 = 0
            for(let col = 0; col < 3; col++) {
                if(seen.has(grid[x + row][y + col]) || 9 < grid[x + row][y + col] || 1 > grid[x + row][y + col])return false;
                seen.add(grid[x + row][y + col])
                sum += grid[x + row][y + col]

                sum2 += grid[x + col][y + row]
            }
            arr.push(sum, sum2)
        }
        arr.push(grid[x][y] + grid[x + 1][y + 1] + grid[x + 2][y + 2]);
        arr.push(grid[x][y + 2] + grid[x + 1][y + 1] + grid[x + 2][y]);
        return arr.every((sum) => sum === arr[0]);
    }

    let count = 0;
    for(let row = 0; row < grid.length - 2; row++) {
        for(let col = 0; col < grid[0].length - 2; col++) {
            if(isEqual(row, col)) {
                count++
            }
        }
    }

    return count;
};