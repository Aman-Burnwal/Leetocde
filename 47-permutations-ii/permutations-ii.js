/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    const ans = [];
    generateUniquePermutations(0);
    return ans;

    function generateUniquePermutations(idx) {
        if(idx >= nums.length) {
            ans.push([...nums]);
            return;
        }
        const set = new Set();

        for(let index = idx; index < nums.length; index++) {

            if(set.has(nums[index])) continue;
            set.add(nums[index]);

            [nums[idx], nums[index]] = [nums[index], nums[idx]];

            generateUniquePermutations(idx + 1);

            [nums[index], nums[idx]] = [nums[idx], nums[index]];
         
        }
    }   
};