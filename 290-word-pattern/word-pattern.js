/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    const map = new Map();

    s = s.split(" ");
    if(s.length != pattern.length) return false
    const set = new Set();

    for(let i = 0; i < s.length; i++) {

        if(map.has(pattern[i])) {
            if(map.get(pattern[i]) != s[i]) return false
        }
        else if (set.has(s[i])) return false;
        else map.set(pattern[i], s[i]);

        set.add(s[i]);
    }

    return true;
};