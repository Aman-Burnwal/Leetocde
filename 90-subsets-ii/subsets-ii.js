/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    const ans = [];
    nums.sort((a, b) => a - b);
    solve([], 0);
    return ans;

    function solve (temp, idx) {
    
        ans.push([...temp]);

        for(let i = idx; i < nums.length;  i++) {
            if(i > idx && nums[i] === nums[i - 1]) continue;
            temp.push(nums[i]);
            solve(temp, i + 1);
            temp.pop()
        }
    }
};