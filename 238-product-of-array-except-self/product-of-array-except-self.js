/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {


    let mul = 1;
    let zero = 0;


    for(const num of nums) {

        if(num == 0) zero++;
        else mul *= num;
    }

  

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] == 0 && zero > 1) nums[i] = 0;
        else if(nums[i] == 0 && zero == 1) nums[i] = mul;
        else if(nums[i] != 0 && zero) nums[i] = 0;
        else nums[i] = mul / nums[i]
        

    }
    
    return nums;


    
};