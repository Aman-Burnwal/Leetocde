/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n === 0) return [0];

    const array = [];
    for(let i = 1; i <= n; i++) {
        array.push(i);
    }

    array[array.length -1] = -((n * (n - 1)) / 2)
    return array;
    
};