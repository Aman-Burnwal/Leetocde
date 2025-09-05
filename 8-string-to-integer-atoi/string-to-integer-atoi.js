/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // find the sign 
    let sign = 1;
    let idx = 0;
    let number = 0;
    while(s.length > idx) {
        if(s[idx] === " ") idx++;
        else if(s[idx] === "+") {
            idx++;
            break;
        }
        else if(s[idx] === "-") {
            sign = -1;
            idx++;
            break;
        }
        else if(isNaN(Number(s[idx]))) return 0;
        else break;
    }

    while(idx < s.length && s[idx] != " " && !isNaN(s[idx]) ) {
        number *= 10;
        number += Number(s[idx]);
        idx++;
    }
    if(sign > 0) number = Math.min(Math.pow(2, 31) - 1, number)
    else number = Math.min(Math.pow(2, 31), number);

    return number * sign;
};