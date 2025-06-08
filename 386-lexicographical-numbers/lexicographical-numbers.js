/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

    

    const ans = new Array();

    function createLexicalOrder(curr ) {
        ans.push(curr)
        const value = curr * 10;
        
        for(let i = 0; i < 10; i++) {
            
            let num = value + i;
            if(num <= n) {

                createLexicalOrder(num);
                
            }
        }
    }
   
    for(let i = 1; i < 10; i++) {
            

        if(i <= n) {
            createLexicalOrder(i);
        }
    }


    return ans;

};