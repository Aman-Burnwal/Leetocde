/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const freq = new Array(26).fill(0);

    for(let index = 0; index < magazine.length; index++) {
        freq[magazine.charCodeAt(index) - 97]++
    }

    for(let index = 0; index < ransomNote.length; index++) {
        const charIndex = ransomNote.charCodeAt(index) - 97;

        freq[charIndex]--;
        if(freq[charIndex] < 0) return false;
    }
    return true;
};