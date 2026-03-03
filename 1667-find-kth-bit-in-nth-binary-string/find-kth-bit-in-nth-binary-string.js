/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    s = ["0"];

    for(let i = 1; i <= n; i++) {

        let len = s.length - 1;

        s.push("1")

        while(len >= 0) {
            s.push(s[len] === "1" ? "0" : "1");
            len--;
        }

        if(s.length > k) return s[k - 1]

    

        
       
       
    }

    // console.log(s)

    return s[k - 1]

    
};