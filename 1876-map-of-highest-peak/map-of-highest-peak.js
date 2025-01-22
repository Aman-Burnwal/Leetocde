/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {

    const rows = isWater.length;
    const cols = isWater[0].length;

    const visited = Array.from({length : rows}, () => new Array(cols));
    const queue = new Array();


    for(let i  = 0; i < rows; i++) {

        for(let j  = 0; j < cols; j++) {

            if(isWater[i][j]) {
                queue.push([i, j]);
                visited[i][j] = true;
                isWater[i][j] = 0;
            }
        }
    }

    let k = 0;

    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    while(k < queue.length ) {

        
        const [i, j] = queue[k++];

        for(const dir of directions) {

            let x = dir[0] + i;
            let y = dir[1] + j;
            if(x < 0 || y < 0 || x >= rows || y >= cols) continue;
            if(!visited[x][y]) {

                isWater[x][y] = isWater[i][j] + 1;
                visited[x][y] = true;

                queue.push([x, y]);
            }
        }
    }

    return isWater;
    
};