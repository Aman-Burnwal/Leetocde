/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    num = String(num).split("");
    let idx = num.indexOf('6');
    if(idx >= 0) {
        num[idx] = '9';
    }
    return Number(num.join(''));

};