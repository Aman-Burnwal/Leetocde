/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {


    const greadyInd = Array.from({length : 26}, () => []);
    const ans = s.split("");
   

    for(let i = 0; i < s.length; i++) {

        if(s[i] == "*"){

            for(let j= 0; j < 26; j++) {
                
                if(greadyInd[j].length > 0) {
                    ans[greadyInd[j].pop()] = "*";
                    break;
                }
            }

        
        }      
        else {
         
            const charcode = s.charCodeAt(i) - 97;
            greadyInd[charcode].push(i);
        } 
    }
  

    return  ans.filter((crr)=> crr != "*").join("");
    
   

};