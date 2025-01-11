/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {

    if(s.length < k) return false;
    if(s.length == k) return true;


    const freq = new Array(26).fill(0);

    for(const ch of s) {

        let indx = ch.charCodeAt(0) - 97;

        if(freq[indx]) freq[indx]++;
        else freq[indx]--;
    }


    for(const num of freq) {
        if(num) k--;
    }

    return k >= 0;
};