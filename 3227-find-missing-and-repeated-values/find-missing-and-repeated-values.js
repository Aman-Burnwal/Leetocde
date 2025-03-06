/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {


    const freq = new Array(grid.length * grid.length + 1).fill(0);
    const ans = [];


    for(const row of grid) {

        for(const col of row) {
            freq[col]++;
            if(freq[col] == 2) ans[0] = col;
        }
    }


    for(let i = 1; i < freq.length; i++) {

        if(freq[i] == 0) {
            ans[1] = i;
            break;
        }
    }


    return ans;

    
};