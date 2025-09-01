/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    for(let idx = 0; idx < s.length; idx++) {
        checkPalindrome(idx, idx);
        checkPalindrome(idx, idx + 1);
       
    }
    return count;

    function checkPalindrome(left, right) {

        while(s[left] === s[right] && left >= 0 && right < s.length) {
            left--;
            right++;
            count++;
        }
       
    }
};