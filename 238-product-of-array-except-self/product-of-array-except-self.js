/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let totalMul = 1;
    let zero = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zero++;
            if(zero === 2) {
                totalMul = 0;
                break;
            }
        } else totalMul *= nums[i]
    }
    const ans = []
    for(let i = 0; i < nums.length; i++) {
        if(totalMul === 0 && zero === 2) ans[i] = 0;
        else if (zero === 1 && nums[i] === 0) ans[i] = totalMul;
        else if (zero === 1) ans[i] = 0;
        else ans[i] = totalMul / nums[i]; 
    }
    return ans;
};