/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const ans = [];
    const temp = [];
    gen(0);
    return ans;


    function gen(i) {

        if(i == nums.length) {
            ans.push([...temp]);
            return
        }

        temp.push(nums[i])
        gen(i + 1);
        temp.pop();
        gen(i + 1);
    }
    
};