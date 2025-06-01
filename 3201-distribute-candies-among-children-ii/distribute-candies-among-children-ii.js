/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    

    let min1 = Math.max(0, n - 2 * limit);
    let max1 = Math.min(n, limit);

    let ways = 0;

    for(let i = min1; i <= max1; i++) {

        let N = n - i;

        let min = Math.max(0, N - limit)
        let max = Math.min( N, limit);

        ways += max - min + 1;
    }

    return ways;
};