/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    

    let modulo = Math.pow(10, 9) + 7;


    let new_length_of_s = 0;
    

    const map = new Array(26).fill(0);


    for(const ch of s) {

        map[ch.charCodeAt(0) - 97]++;
    }


     while(t > 0) {
        t--;
        
        let temp = 0;

        for(let i = 0; i < 26; i++) {

           let k = map[i];
           map[i] = temp;
           temp = k;
            
        }
        
        map[0] = (temp + map[0]) % modulo;
        map[1] = (temp + map[1] ) % modulo;
        
        
    }
    

    for(const count of map) {

        new_length_of_s = (new_length_of_s + count ) % modulo
    }

    return new_length_of_s;


};