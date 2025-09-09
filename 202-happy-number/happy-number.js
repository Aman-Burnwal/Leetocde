/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    while(n > 1) {
        if(set.has(n)) return false;
        set.add(n)
        let pow = 0;
        while(n) {
            pow += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }

        n = pow
    }
    return n === 1;
};