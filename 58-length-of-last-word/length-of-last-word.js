/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let idx = s.length - 1;;

    while(s[idx] === " ") idx--;

    let length = 0;
    while(idx >=  0  && s[idx] != " ") {
        idx--;
        length++;
    }
    return length;
};