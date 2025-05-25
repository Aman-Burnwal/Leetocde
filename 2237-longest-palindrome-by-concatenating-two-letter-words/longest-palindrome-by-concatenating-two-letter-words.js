/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    
    let len = 0;


    const map = new Map();

    for(const word of words) {

 

        if (map.has(word.split("").reverse().join(""))) {

            let nWord = word.split("").reverse().join("");

            if(map.get(nWord) == 1) map.delete(nWord);
            else map.set(nWord, map.get(nWord) -1);

            len += 4;
        }

        else map.set(word, (map.get(word) || 0) + 1)
    }

    let max = 0;
    

    for(const [word, count] of map) {

        if(word == word.split("").reverse().join("")) max = Math.max(count, max)
    }
    max *=2;

    return len + max;
};