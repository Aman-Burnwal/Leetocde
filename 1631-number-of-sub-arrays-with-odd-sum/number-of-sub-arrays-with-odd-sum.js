/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {

    let sum = 0;
    let evenCount = 1;
    let oddCount = 0;
    let odd = 0;
    let mod = Math.pow(10, 9) + 7;

    for(const ele of arr) {

        sum += ele;

        if(sum % 2 == 0) {
            evenCount++;
            odd = ( odd +  oddCount ) % mod;
        }
        else {
            oddCount++;
            odd = (odd + evenCount) % mod;
        }

        
    }

    return odd;
    
};