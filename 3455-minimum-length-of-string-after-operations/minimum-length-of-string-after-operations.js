/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {

    const freq = new Array(26).fill(0)
    
    for(const ch of s) {

        freq[ch.charCodeAt(0) - 97]++;
    }



    let count = 0;

    for(let i = 0; i < 26; i++) {

        
            
        while(freq[i] >= 3) freq[i] -= 2;
        
        count += freq[i];
    }


   

    return count;
};