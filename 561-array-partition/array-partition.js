/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length ;
    let sum = 0;

    while(i < j) {

        sum += nums[i]
        i+= 2;
      

    }
    return sum;
};