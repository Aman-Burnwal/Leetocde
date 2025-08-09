/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let num = Math.pow(2, 0);
    let pow = 0;
    while(n >= num ) {
        num = Math.pow(2, pow);
        pow++;
        if(num === n) return true;
    }

    return false;
};