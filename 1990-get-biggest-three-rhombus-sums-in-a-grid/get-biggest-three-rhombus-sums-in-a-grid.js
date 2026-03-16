/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {

    const n = grid.length;
    const m = grid[0].length;

    let ans = new Set()


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            let len = 0;

            while(isPossible(i, j, len)) {

                let sum = rhombusSum(i, j , len)

                if(sum === -1) break;
                ans.add(sum)
                len++;
            }
        }
    }

    return ([...ans]).sort((a, b) => b - a).slice(0, 3)

    function isPossible(i, j, s) {
        return i - s >= 0 && i + s < n && j - s >= 0 && j + s < m;
    }

    function rhombusSum(r, c, s) {
        if (s === 0) return grid[r][c];
        let set = new Set()
        let sum = 0;
        for (let k = 0; k < s; k++) {
            sum += grid[r - s + k][c + k]; 
        }
        for (let k = 0; k < s; k++) {
            sum += grid[r + k][c + s - k];
        }
        for (let k = 0; k < s; k++) {
            sum += grid[r + s - k][c - k]; 
        }
        for (let k = 0; k < s; k++) {
            sum += grid[r - k][c - s + k]; 
        }
        return sum;
    }
};