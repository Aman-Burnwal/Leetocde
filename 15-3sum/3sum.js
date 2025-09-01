/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const ans = [];
    nums.sort((a, b) => a - b)
    const map = new Set();
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const req =  (nums[i] + nums[j]) * -1;
            if(map.has(req)) {
                const idx = nums[i] + "-" + nums[j] + "-" + req;
                if(!set.has(idx)) {
                    set.add(idx);
                    ans.push([nums[i], nums[j], req]);
                }
            }
        }
        map.add(nums[i]);
    }

    return ans;
};

