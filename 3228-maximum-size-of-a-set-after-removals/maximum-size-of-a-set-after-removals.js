/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {

    const m = new Set(nums1);
    const n = new Set(nums2);

    const s = new Set([...m, ...n]);

    return Math.min(Math.min(nums1.length / 2, m.size) + Math.min(nums2.length / 2, n.size), s.size)





    
};