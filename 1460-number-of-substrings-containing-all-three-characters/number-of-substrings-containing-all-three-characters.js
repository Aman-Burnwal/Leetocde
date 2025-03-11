/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

    let n = s.length; 

    const map = new Map();

    let j = 0;
    let count = 0;

    for(let i = 0; i < s.length; i++) {

        map.set(s[i], (map.get(s[i]) || 0) + 1);

        if(map.size == 3) {

            while(map.size == 3) {
                count += (n - i);
                if(map.get(s[j]) == 1) map.delete(s[j]);
                else map.set(s[j], map.get(s[j]) - 1);
                j++;
            }
        }
    }

    return count;
    
};