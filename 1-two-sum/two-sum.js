/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const numsLength = nums.length;
    for(let idx = 0; idx < numsLength; idx++) {
        const req = target - nums[idx];
        if(map.has(req)) {
            return [map.get(req), idx]
        }
        map.set(nums[idx], idx);
    }
    return [0, 0];
};