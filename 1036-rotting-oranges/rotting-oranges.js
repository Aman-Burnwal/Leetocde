/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    const rottenPos = new Array();
    let minute = 0;

    for(let row = 0; row < grid.length; row++)  {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 2) rottenPos.push([row, col]);
            else if(grid[row][col] === 1) fresh++;
        }
    }

    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while(rottenPos.length) {
        let len = rottenPos.length;

        let isRotten = false;
        for(let i = 0; i < len; i++) {
            const [row, col] = rottenPos.shift();
            dir.forEach(([x, y]) => {
                const nr = row + x;
                const nc = col + y;

                if(nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length && grid[nr][nc] === 1) {
                    grid[nr][nc] = -1;
                    rottenPos.push([nr, nc])
                    fresh--;
                    isRotten = true;

                }
            })
        }
        if(isRotten) minute++;
    }
    return  fresh === 0 ? minute: -1;
};