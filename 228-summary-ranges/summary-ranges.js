/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length === 0) return []
    let start = 0;
    const ans = []

    for(let i = 1; i < nums.length; i++) {

        if(i === nums.length - 1) {

        }
        if(nums[i] != nums[i - 1] + 1) {
            if(i - 1 === start ) ans.push("" + nums[i - 1])
            else ans.push(nums[start] +  "->" + nums[i - 1])
            start = i;
        }
    }

    if(start === nums.length - 1) ans.push("" + nums[start])
    else ans.push(nums[start] + "->" + nums[nums.length - 1])



    return ans;

};