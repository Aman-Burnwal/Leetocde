/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    

    const queue = new Array();
    const visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false))
    let fresh = 0;
    let minute = -1;


    for(let i = 0; i < grid.length;i++) {

        for(let j = 0; j < grid[i].length; j++) {

            if(grid[i][j] == 2) {
                queue.push([i, j]);
                visited[i][j] = true;

            }

            else if(grid[i][j] == 1) fresh++;
        }
    }
    console.log(fresh)
    if(fresh == 0) return 0;

    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    console.log(queue)

   

    while(queue.length) {

        let len = queue.length;

        while(len > 0) {

            len--;

            const dis = queue.shift();
            // console.log(dir)

            let i = dis[0];
            let j = dis[1];
            // console.log("i ", i, "  j ", j)
            

            for(const dir of directions) {

                let x = i + dir[0];
                let y = j + dir[1];
                // console.log(x, y)

                if(x < 0  || x < 0 || x >= grid.length || y >= grid[0].length) continue;

                if(grid[x][y] == 1 && !visited[x][y]) {
                    visited[x][y] = true;
                    queue.push([x, y]);
                    fresh--;

                    // console.log(x, y, fresh)
                    
                }
            }
        }
        minute++;
    }
    // console.log(fresh)

    if (fresh > 0) return -1;

    return minute;

};