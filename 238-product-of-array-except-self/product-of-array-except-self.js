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

    const ans = new Array();

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] == 0 && zero > 1) ans.push(0);

        else if(nums[i] == 0 && zero == 1) ans.push(mul);
        else if(nums[i] != 0 && zero) ans.push(0);
        else ans.push(mul / nums[i])
        

    }
    
    return ans;


    
};