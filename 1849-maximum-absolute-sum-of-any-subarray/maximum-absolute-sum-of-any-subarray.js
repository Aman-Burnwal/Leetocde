/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    
    let neg = 0;
    let pos = 0;
   

    let max = 0;


    for(const num of nums) {

        pos = Math.max(pos + num , num);
        neg = Math.min(neg + num, num);

        max = Math.max(Math.max(pos), Math.abs(neg), max);
        
    }

    return max;
};