/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const rowLen = grid.length;
    const colLen = grid[0].length;

    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
            if(grid[row][col] === "1") {
                dfs(row, col);
                count++;
            }
        }
    }
    function dfs(row, col) {
        if(row >= rowLen || row < 0 || col < 0 || col >= colLen || grid[row][col] != "1") return;

        grid[row][col] = "0";

        dir.forEach(dir => {
            dfs(dir[0] + row, dir[1] + col)
        })

    }
    return count;
};