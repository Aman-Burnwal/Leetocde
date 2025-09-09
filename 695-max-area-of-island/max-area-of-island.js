/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    const rowLen = grid.length, colLen = grid[0].length;
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let maxIslandArea = 0;

    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(grid[row][col] === 1) {
                maxIslandArea = Math.max(maxIslandArea, findArea(row, col));
            } 
        }
    }

    return maxIslandArea;

    function findArea(row, col) {
        if(checkIslandBoundry(row, col)) return 0;

        let area = 1;
        dir.forEach(([x, y]) => {
            area += findArea(row + x, col + y);
        })
        return area;

    }

    function checkIslandBoundry(row, col) {
        if(row >= rowLen || col >= colLen || row < 0 || col < 0) return true;
        if(grid[row][col] !== 1) return true;
        grid[row][col] = 2;
        return false;
    }
};