/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    
    const mapObj = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(mapObj[num]) {
            mapObj[num].push(i)
        }
        else mapObj[num] = [i]
    }

    let ans = 10000000;

    
    for(const value of Object.values(mapObj)) {

        if(value.length <= 2) continue;

        for(let i = 0; i < value.length; i++) {
            for(let j = i + 2; j < value.length; j++) {
                ans = Math.min(ans, ( value[j] - value[i]))
            }
        }

    }

    return ans === 10000000 ? -1 : ans * 2
};