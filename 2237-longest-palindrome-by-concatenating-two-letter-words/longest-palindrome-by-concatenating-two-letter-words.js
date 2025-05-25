/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    
    let len = 0;


    const map = new Map();

    for(const word of words) {

         map.set(word, (map.get(word) || 0) + 1)
    }

    let max = []
    

    for(const [word, count] of map) {

        if(word == word.split("").reverse().join("")) max.push(count);

        else if (map.has(word.split("").reverse().join(""))) {
            len += Math.min(count, map.get(word.split("").reverse().join("")));
        
        
        }

        

        
    }
    
    max.sort((a, b) => a-b);

    

    let take = true;
    for(let i = max.length - 1; i >= 0; i--) {

        const count = max[i]

        if(count % 2 == 0) len += count;

        else if(take) {
            len += count;
            take = !take
        }
        else len += (count - 1);
    }
    
    len *=2;


    return len
};