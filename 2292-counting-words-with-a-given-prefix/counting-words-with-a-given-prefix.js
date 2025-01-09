/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count =0, len = pref.length;

    for(const word of words) {

        if(word.includes(pref) && word.indexOf(pref) == 0)count++;
    }

    return count
};