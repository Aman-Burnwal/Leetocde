/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for(const num of set) {
        if(set.has(num - 1)) continue;
        let count = 0;
        let curr = num;
        while(set.has(curr)) {
            curr++;
        }
        max = Math.max(max, curr - num);
    }

    return max;

};