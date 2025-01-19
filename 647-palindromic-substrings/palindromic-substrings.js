/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(str) {

    let len = str.length;

    function palindrome( l, r) {

        let count = 0;

        while(l >= 0 && r < len && str[l] == str[r]) {
            count++;
            l--;
            r++;
        }
        return count;
    }
    let countAns = 0;


    for(let i = 0; i < str.length; i++) {

        countAns += palindrome( i, i);
        countAns += palindrome( i, i + 1);
    } 

    return countAns;
    
};