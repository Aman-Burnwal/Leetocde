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

        for(let i = 0; i < value.length - 2; i++) {
            ans = Math.min(ans, ( value[i + 2] - value[i]))

        }

    }

    return ans === 10000000 ? -1 : ans * 2
};