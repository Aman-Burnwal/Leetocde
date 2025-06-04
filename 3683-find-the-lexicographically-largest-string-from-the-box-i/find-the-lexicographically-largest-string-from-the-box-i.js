/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    

   
    const maxLen = word.length -  numFriends + 1;

    if(numFriends <= 1) return word;
    
    let chars = word.substring(0, Math.min(word.length , maxLen))

    for(let i = 1; i < word.length; i++) {

        const ch = word[i];
        
        if(chars.charCodeAt(0) < ch.charCodeAt(0) ) {

            chars = word.substring(i, Math.min(word.length , i + maxLen))
        }
        
        else if(chars.charCodeAt(0) === ch.charCodeAt(0)) {

            let newStr = word.substring(i, Math.min(word.length , i + maxLen));

            if(chars.localeCompare(newStr) == -1) chars = newStr;
        }
        
    }

    return chars;

    



};