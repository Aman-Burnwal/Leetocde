/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    
    let str= "";
    let count = 0;
    let len = Math.max(a.length , b.length) * 3;
    if(b === "") return 0;
    if(a.includes(b)) return 1;
    while(str.length <= len) {
        if(str.includes(b)) return count
        count++;
        str += a;
    }

    return -1;
};