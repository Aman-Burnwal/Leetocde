/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    generatePermutaions(0)

    function generatePermutaions(idx) {

        if(idx >= nums.length) {
            ans.push([...nums])
            return;
        }

        for(let i = idx; i < nums.length; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            generatePermutaions(idx + 1);
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }
    return ans;
};