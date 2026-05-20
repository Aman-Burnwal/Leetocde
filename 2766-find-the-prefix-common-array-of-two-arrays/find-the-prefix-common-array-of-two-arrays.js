/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    
    const set = new Set();
    const array = [];

    for(let i = 0; i < A.length; i++) {
        
        set.add(B[i]);
        let count = 0;

        for(let j = 0; j <= i; j++) {
            if(set.has(A[j])) count++;
        }
        array.push(count);
    }

    return array;
};