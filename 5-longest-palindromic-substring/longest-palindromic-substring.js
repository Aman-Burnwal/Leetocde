/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 1;
    let ans = s[0]

    for(let i = 0; i < s.length; i++) {
        let len1 = check(i, i + 1);
        let len2 = check(i, i);
       if(ans.length < len1.length) ans = len1;
       if(ans.length < len2.length) ans = len2;
    }

    return ans;

    function check(i, j) {
        if(s[i] != s[j]) return ""
        let left = i;
        let right = j;
        while(i >= 0 && j < s.length ) {
           if(s[i] != s[j]) break;
           left = i; 
           right = j;
           i--;
           j++;
        }
        return s.substr(left, right - left + 1);
    }
};