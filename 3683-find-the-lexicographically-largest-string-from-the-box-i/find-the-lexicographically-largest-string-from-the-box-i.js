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
        else if(word[arr[arr.length - 1]] < ch ) {
            arr.length  = 0;
            arr.push(i)
        }
    }

    let chars = ""
    const maxLen = word.length -  numFriends + 1;

    for(const idx of arr) {

   
        
        let newWord = word.substring(idx, Math.min(word.length , idx + maxLen))

        if(chars.localeCompare(newWord) == -1) chars = newWord;

        
    }
    

    return chars;


};