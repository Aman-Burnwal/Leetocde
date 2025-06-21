/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    let freq = new Array(26).fill(0);

    for(const ch of word) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    const nums = freq.filter(Boolean).sort((a, b) => a - b);
    let count = Infinity;
    let pre = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let curr = 0;
        for(let  j = i + 1; j < nums.length; j++) {
            if(nums[j] - nums[i] > k) curr += nums[j] - nums[i] - k;
        }
        curr += pre;
        count = Math.min(count, curr);
        pre += nums[i];
        
    }
    
    return count;
};