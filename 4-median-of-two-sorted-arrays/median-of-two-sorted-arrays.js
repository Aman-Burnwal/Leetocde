/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [];
    let len1 = 0, len2 = 0;
    while(len1 < nums1.length && len2 < nums2.length) {
        if(nums1[len1] < nums2[len2]) {
            nums.push(nums1[len1++]);
        }
        else nums.push(nums2[len2++]);
    }
    while(len1 < nums1.length) nums.push(nums1[len1++])
    while(len2 < nums2.length) nums.push(nums2[len2++])

    let len = nums.length;
    if(len % 2) {
        return nums[Math.floor(len / 2)]
    }
    return (nums[len / 2] + nums[(len / 2) - 1]) / 2;
};