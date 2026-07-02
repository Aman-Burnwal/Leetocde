/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    
    let find = false
    const m = grid.length;
    const n = grid[0].length;
    const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    const memo = Array.from({length : m + 1}, () => Array.from({length : n + 1}, () => new Array(health + 1).fill(null)))

    function isOutOfBoundary(r, c, health) {
        return  r < 0 || c < 0 || r >= m || c >= n;
    }




    return rec(0, 0, health - grid[0][0])

    function rec( r, c, health) {       


        // if(memo[r][c] != null) return memo[r][c]
        if(health < 1) return false;
        if(r === (m - 1) && c === (n - 1)) {
            return true;
        };

        if(memo[r][c][health] != null) return memo[r][c][health];

        let val = grid[r][c]
        grid[r][c] = 2;

        for(const [x, y] of dir) {
            let x1 = x + r;
            let y1 = y + c;
            if(isOutOfBoundary(x1, y1)) continue;
            if(grid[x1][y1] == 2) continue;
            if(health - grid[x1][y1] < 1) continue;

            if(rec(x1, y1, health - grid[x1][y1])) return memo[r][c][health] = true;
      
        }

        grid[r][c] = val;
        return memo[r][c][health] = false
    }
};