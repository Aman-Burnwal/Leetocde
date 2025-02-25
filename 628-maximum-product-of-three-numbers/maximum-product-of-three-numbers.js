/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    


    let min1 = Number.MAX_SAFE_INTEGER, min2 = min1, min3 = min2;
    let max1 = Number.MIN_SAFE_INTEGER, max2 = max1, max3 = max1;



    for(const n of nums) {

        if(n > max1) {
            
            max3 = max2;
            max2 = max1;
            max1 = n;
        }

        else if (n > max2) {
            max3 = max2;
            max2 = n;
        }
        else if (n > max3) max3 = n;

        if (n < min1) {
            min3 = min2;
            min2 = min1;
            min1 = n;
        }
        else if (n < min2) {
            min3 = min2;
            min2 = n;
        }
        else if(n < min3) min3 = n;
    }
   
    let mul1 = max1 * max2 * max3;
    let mul2 = max1 * max2 * min1;
    let mul3 = max1 * min1 * min2;
    let mul4 = min1 * min2 * min3



    let max = Math.max(mul1,  Math.max(mul2,  Math.max(mul3, mul4)));

    
    return max;
};