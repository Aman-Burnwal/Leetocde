/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {


    let cells = 1;


    for(let i = 2; i <= n; i++) {

        cells += (i - 1) * 4;
    }

    return cells;
    
};