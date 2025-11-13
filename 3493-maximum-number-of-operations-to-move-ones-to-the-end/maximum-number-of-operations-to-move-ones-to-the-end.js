/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    
    let count = 0;
    let ones = 0;

    let index = 0;
    while(index < s.length) {
        if(s[index] === "0") {
            index++ 
            continue;
        }
        
        while(s[index] === "1" && index < s.length) {
            index++;
            ones++;
        }
        let isShifted = false
        while(s[index] < s.length && s[index] === "0") {
            index++;
            isShifted = true;
        } 
        if(isShifted) count += ones;
    }

    return count;
};