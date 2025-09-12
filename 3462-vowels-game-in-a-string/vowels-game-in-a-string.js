/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);

    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            count = 1;
            break;
        }
    }

    return count > 0
};