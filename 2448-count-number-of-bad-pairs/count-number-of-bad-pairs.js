/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let n=nums.length;
    let map=new Map();
    let count = 0;
    for(let i =0;i<n;i++){
        nums[i]=nums[i]-i;
        if(map.has(nums[i])) {
            count-=map.get(nums[i]);
            map.set(nums[i], map.get(nums[i])+1)
        }
        else map.set(nums[i],1);
        count+=i;
    }
    return count;
};