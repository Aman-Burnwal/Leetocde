/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    

    let str = "1"

    while(n > 1) {

        let count = 0;
        let temp = "";

        let char = str[0]; 

        for(const ch of str) {

            if(ch != char) {
                temp += count + char;
                count = 0;
                char = ch;
            }
            count++;
        }

        temp += count + char;
        str = temp;
        n--;
    }

    return str;
};