/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    
    if( nums2.length % 2 == 0 && nums1.length % 2 == 0) return 0;

    let ans = 0;
    for(const num of nums2) ans ^= num;

    if(nums2.length % 2 == 0)  return ans;
    
    let ans2 = 0;

    for(const num of nums1) ans2 ^= num;

    if(nums1.length % 2 == 0)  return ans2;
    
    return ans ^ ans2;


}; 