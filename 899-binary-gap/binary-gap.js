/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    
    let str = n.toString(2);

    let start = str.indexOf('1');

    if(start === -1) return 0;

    let max = 0;

    for(let i = start + 1; i < str.length; i++) {
        if(str[i] === '1') {
            max = Math.max(max, i - start);
            start = i;
        }
    }
    return max;
};