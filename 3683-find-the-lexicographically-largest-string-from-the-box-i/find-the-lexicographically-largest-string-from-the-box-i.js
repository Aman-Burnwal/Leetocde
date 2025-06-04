/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    
    const arr = [];

    if(numFriends <= 1) return word;

    for(let i = 0; i < word.length; i++) {

        const ch = word[i];
        if(arr.length == 0) arr.push(i);
        else if(word[arr[arr.length - 1]] == ch) arr.push(i);
        else if(word[arr[arr.length - 1]].charCodeAt(0) < ch.charCodeAt(0) ) {
            arr.length  = 0;
            arr.push(i)
        }
    }

    const chars = new Array();
    let maxLen = word.length -  numFriends + 1;

    for(const idx of arr) {

        const temp = new Array();

        for(let i = idx; i < Math.min(word.length , idx + maxLen); i++) {
            temp.push(word[i])
        }
        if(temp.length) chars.push(temp.join(""));
    }
    

    

    chars.sort((a, b) => a.localeCompare(b))

    

    return chars.pop()


};