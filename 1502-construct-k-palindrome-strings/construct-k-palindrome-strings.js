/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    // yadi string ka size hi k se choota hai to k ke jitna substring banega hi nahi aur jab k ke jitna substring hi nhi banega to palindrome kaha se banega
    if(s.length < k) return false;

    // yadi ak substring ak character ka hai to wo khud ke liye palindrome hai 
    // yani string ka length yadi k hai to k palindrome banega hi
    if(s.length == k) return true;

    // ab yah to fix hai ki string s ka size k se jayda hai yani ki k se jayda substring to bana hi sakte hai 
    // to simpli check kar lete hai ki kya string ke kitne charcter odd length ke hai 
    const freq = new Array(26).fill(0);

    for(const ch of s) {

        let indx = ch.charCodeAt(0) - 97;

        if(freq[indx]) freq[indx]++;
        else freq[indx]--;
    }



    //  yadi string ke k se jayda hi odd length ke character persent hai string me to wo k se jayda hi palindrome string bananyenge 
    for(const num of freq) {
        if(num) k--;
    }
    // ydi k se kam hai odd length ke chacters ke frequancy to true nhi to false
    return k >= 0;
};