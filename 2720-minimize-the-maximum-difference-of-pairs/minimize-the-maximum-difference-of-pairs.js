/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {

    nums.sort((a, b) => a - b);
    console.log(nums)

    let maxMin = Math.max(...nums);
    let start = 0;
    let result = maxMin;

    while (start < maxMin) {

        let mid = (start + maxMin) >> 1;

        let count = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            if((nums[i + 1] - nums[i]) <= mid) {
                 count++;
                 i++;
            }
            if(count >= p) break;
        }

        if(count >= p) {
            maxMin = mid;
            result = mid;
        }
        else start = mid + 1;
    }

    return result;


};