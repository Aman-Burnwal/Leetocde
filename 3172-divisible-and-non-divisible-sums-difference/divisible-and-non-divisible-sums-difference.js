/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    
    let k = Math.floor(n / m)


    return ((n * (n + 1)) / 2) - (m * k  * (k + 1))
};