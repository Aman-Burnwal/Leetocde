/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const ans = [];

    helper([], 0)
    return ans;
    
    function helper(temp, idx) {


        if(idx >= nums.length) {
            ans.push([...temp]);
            return;
        }
        

        helper(temp, idx  + 1);

        temp.push(nums[idx]);
        helper(temp, idx + 1);
        temp.pop()
    }

};