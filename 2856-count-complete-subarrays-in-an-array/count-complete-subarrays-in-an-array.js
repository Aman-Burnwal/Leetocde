/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    
    const set = new Set(nums);
    const map = new Map();
    let size = set.size;
    let count = 0;

    set.clear();

    let j = 0;

    let i = 0;

    while(i < nums.length) {

        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        if(map.size == size) {

            let n = nums.length - i;

            while(map.size == size) {

                if(map.get(nums[j]) == 1) map.delete(nums[j]);
                else map.set(nums[j], (map.get(nums[j]) || 0) - 1);

                j++;

                count += n;
            }
        }

        i++;
    }

    return count;
};