/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {


    const greadyInd = Array.from({length : 26}, () => []);
    const ans = s.split("");
   

    for(let i = 0; i < s.length; i++) {

        if(s[i] == "*"){

            let minIdx = -1;

            for(let j= 0; j < 26; j++) {
                
                if(greadyInd[j].length > 0) {
                    minIdx = greadyInd[j].pop();
                    break;
                }
            }

            if(minIdx != -1) ans[minIdx] = "*"
        }      
        else {
         
            const charcode = s.charCodeAt(i) - 97;
            greadyInd[charcode].push(i);
        } 
    }
  

    return  ans.filter((crr)=> crr != "*").join("");
    
   

};