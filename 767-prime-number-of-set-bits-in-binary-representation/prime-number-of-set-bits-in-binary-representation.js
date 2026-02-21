/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    
    const prime = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    let total = 0;
    while(left <= right) {
        const str =  left.toString(2);
        let count = str.split("").reduce((acc, curr) => {
            if(curr == 1) acc++;
            return acc;
        }, 0)
        if(prime.has(count)) total++;
        left++;
    }

    return total


};