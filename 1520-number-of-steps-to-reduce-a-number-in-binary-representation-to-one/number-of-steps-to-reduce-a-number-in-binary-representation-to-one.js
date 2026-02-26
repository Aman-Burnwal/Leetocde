/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let count = 0
    
    while(s != "1") {
        
        let idx = s.length - 1;
        if(s[idx] === "0") {
            s = s.substring(0, idx);

        }
        else {
            let char = "1";

            let newChar = "";

            for(let i = idx; i >= 0; i--) {

                if(char === "1" && s[i] === "1") {
                    newChar = "0" + String(newChar);

                }
                else if (char === "1") {
                    newChar = "1" + String(newChar);
                    char = "0"
                    // break;
                }
                else newChar = s[i] + newChar;

                // console.log(count, newChar, char)

               
            }

            // console.log(newChar)
            if(char === "1") newChar = "1" + newChar;

            s= newChar

        }
        // console.log(s)
        count++
    }

    return count;
};