/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

    const n = s.length; 

    const map = [0, 0, 0];

    let j = 0;
    let count = 0;

    for(let i = 0; i < n; i++) {

        map[s.charCodeAt(i) - 97]++;

        while(map[0] && map[1] && map[2]) {

            count += (n - i);
             
            map[s.charCodeAt(j) -97]--;
            j++;

        }
     
    }

    return count;
    
};