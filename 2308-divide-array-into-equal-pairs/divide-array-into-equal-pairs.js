/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {

    const map = new Map();
    const freq = new Array(501).fill(0);


    for(const num of nums) freq[num]++;

    for(const times of freq) {

        if( times % 2) return false
    }

    return true;
    
};