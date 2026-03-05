/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    

    let startFromZero = 0;
    let startFromOne = 0;

    for(let i = 0; i < s.length; i++) {

        if(i % 2 === 0) {
            s[i] === "1" ? startFromZero++ : startFromOne++;
        }
        else s[i] === "0" ? startFromZero++ : startFromOne++;
    }

    return Math.min(startFromZero, startFromOne)
};