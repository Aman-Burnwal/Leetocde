/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    
    const brokenKeys = new Set(brokenLetters.split(""));
    let totalWordTyped = 0;
    for(const word of text.split(" ")) {

        let is = 1;
        for(let i = 0; i < word.length; i++) {
            if(brokenKeys.has(word[i])) {
                is = 0;
                break
            }
        }
        totalWordTyped += is;
    }

    return totalWordTyped;
};