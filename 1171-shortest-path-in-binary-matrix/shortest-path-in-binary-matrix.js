/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {

    const n = grid.length;
    if(grid[0][0] != 0 || grid[n - 1][n - 1] != 0) return -1
   


    const direction = [[0, 1], [1, 0], [-1, 0], [0, -1], [-1, -1], [1, 1], [1, -1], [-1, 1]];

    

    // const visited = Array.from({length: n}, () => new Array(n).fill(false));
    const times = Array.from({length: n}, () => new Array(n).fill(Infinity));


    const queue = new Array();
    queue.push([0, 0]);
    // visited[0][0] = true;
    // level = 2;
    times[0][0] = 1;
    let k = 0;

    while(k < queue.length) {

     

    

        const [i , j] = queue[k++];

        for(const dir of direction) {

            const i1 = dir[0] + i;
            const j1 = dir[1] + j;

            if(i1 >= 0 && j >= 0 && i1 < n && j1 < n && grid[i1][j1] == 0 && times[i1][j1] > times[i][j] + 1)  {

                  
                times[i1][j1] = times[i][j] + 1;
                queue.push([i1, j1]);

            }
                
        }
           

        
  

    }


    if(times[n - 1][n -1] == Infinity) return -1;
    

    return times[n - 1][n - 1];

    
    
};