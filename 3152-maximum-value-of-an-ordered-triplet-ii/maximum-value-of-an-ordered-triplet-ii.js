/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {

 

    let maxDif = 0;
    let max = 0;
    let result = 0;

    for(let i = 0; i < nums.length - 1; i++) {

        maxDif = Math.max(maxDif, max - nums[i]);
        max = Math.max(max, nums[i]);
        result = Math.max(nums[i + 1] * maxDif, result);
    }


    return result;



    
};