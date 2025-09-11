/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const map = []
    const vowels = "aeiouAEIOU"

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) map.push(s[i])
    }



    map.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    let str = "";
    let j = 0; 


    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            str += map[j];
            j++
        }
        else str += s[i]
    }

    return str;
};