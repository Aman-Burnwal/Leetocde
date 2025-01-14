/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {

    const c = new Set()
    const a = new Set();
    const b = new Set();
    let size = 0;

    const ans  = new Array();

    for(let i = 0; i < A.length; i++) {
        
        a.add(A[i]);
        b.add(B[i]);
   
        if(a.has(B[i]) ) c.add(B[i]);
        if(b.has(A[i])) c.add(A[i])

        ans.push(c.size);
    }

    return ans;
    
};