/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let num = 1;
    let pow = 1;
    n = String(n).split("").sort((a, b) => b - a).join("");

    for(let i = 0; i <= 31; i++) {
        pow = Math.pow(2, i);
        let num = String(pow).split("").sort((a, b) => b - a).join("");
        if(num === n) return true;
    }
    return false;
};