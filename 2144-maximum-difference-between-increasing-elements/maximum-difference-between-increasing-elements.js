/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {

    const maxArray = [...nums];

    for(let i = nums.length - 2; i >= 0; i--) {
        maxArray[i] = Math.max(maxArray[i], maxArray[i + 1])
    }

    let ans = -1;
    let min = nums[0];

    for(let i = 0;  i < nums.length -1; i++) {
        min = Math.min(nums[i], min);
        if(min < maxArray[i + 1])ans = Math.max(ans, maxArray[i + 1] - min)
    }

    return ans;
    
};