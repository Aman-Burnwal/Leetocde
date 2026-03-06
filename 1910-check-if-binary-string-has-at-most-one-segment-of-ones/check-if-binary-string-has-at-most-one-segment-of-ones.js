/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {


    if(s.length === 1 && s[0] === "1") return true;
    
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "1") {
            if(i > 0 && s[i - 1] != "1") return false;
            count = 1;
        }
    }

    return count === 1 
};