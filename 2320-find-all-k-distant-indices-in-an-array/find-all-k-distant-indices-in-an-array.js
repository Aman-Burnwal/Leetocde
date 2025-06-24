/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const right = new Array(nums.length + 1).fill(-1);
    let idx = -1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === key) idx = i;
        right[i] = idx;
    }

    idx = -1;
    const ans = new Array();
    for(let i = 0; i < nums.length; i++) {

        if(nums[i] === key) {
            idx = i;
            ans.push(i)
        }
        else if(right[i] != -1 && (right[i] - i) <= k) {
            ans.push(i);
        }
        else if(idx != -1 && (i - idx) <= k ) ans.push(i)
        
    }

    return ans;
};