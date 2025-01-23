/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {


    const n = grid.length;
    const m = grid[0].length;
    let count = 0;

    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];


    const visited = Array.from({length: n}, () => new Array(m).fill(false));


    for(let i = 0; i < n; i++) {

        for(let j = 0; j < m; j++) {

            if(grid[i][j] && !visited[i][j]) {

                visited[i][j] = true;
                let servers = 1+ DFS(i , j);
              

                if(servers == 1) servers = 0;

                count += servers;
                // console.log(count)
            }
        }
    }

    
    return count;



    function DFS(i, j ) {

        if(!grid[i][j]) return 0;
        // visited[i][j] = true;
        let count = 0;

        for(let x = i - 1; x >= 0; x--) {

            if(grid[x][j] && !visited[x][j]) {
                visited[x][j] = true;
                count +=( 1 + DFS(x, j));
            }
            else if(visited[x][j]) break;
        }

        for(let x = i + 1; x < n; x++) {

            if(grid[x][j] && !visited[x][j]) {
                visited[x][j] = true;
                count += (1 + DFS(x, j));
            }
            else if(visited[x][j]) break;
        }

        for(let y = j - 1; y >= 0; y--) {

            if(grid[i][y] && !visited[i][y]) {
                visited[i][y] = true;
                count += (1 + DFS(i, y) )
            }

            else if(visited[i][y]) break;
        }

        for(let y = j + 1; y < m; y++) {

            if(grid[i][y] && !visited[i][y]) {
                visited[i][y] = true;
                count += (1 + DFS(i, y) )
            }
            else if(visited[i][y]) break;
        }





        return count;
    }
    
};