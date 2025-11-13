/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    
    let count = 0;
    let ones = 0;

    let index = 0;
    while(index < s.length) {
        while(s[index] === "0" && index < s.length) {
            index++ 
        
        }
        
        while(s[index] === "1" && index < s.length) {
            index++;
            ones++;
        }
        let prevIndex = index;
        while(s[index] < s.length && s[index] === "0") {
            index++;
        } 
        if(prevIndex != index) count += ones;
    }

    return count;
};