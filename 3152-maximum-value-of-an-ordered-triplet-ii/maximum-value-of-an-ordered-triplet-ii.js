/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {

    const maxRight = new Array(nums.length).fill(0);
    let max = nums[nums.length - 1];

    // for(let i = nums.length - 1; i >= 0; i--) {

    //     max = Math.max(nums[i], max);

    //     maxRight[i] = max;
    // }
    let maxDif = 0;
    max = 0;
    let result = 0;

    for(let i = 0; i < nums.length - 1; i++) {

        maxDif = Math.max(maxDif, max - nums[i]);
        max = Math.max(max, nums[i]);
        result = Math.max(nums[i + 1] * maxDif, result);
    }


    return result;



    
};