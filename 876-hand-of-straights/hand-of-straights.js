/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(nums, k) {
        const freq = new Map();

    for(let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let keys = [...freq.keys()]
    keys.sort((a, b) => a - b);

    for(let i = 0; i < keys.length; i++) {

        let count = freq.get(keys[i]);
        if(count === 0) {
            continue;
        }
    
            
        for(let j = 0; j < k; j++) {
            if(!freq.has(keys[i] + j)) return false;
            let total = freq.get(keys[i] + j) - count;
            if(total < 0) return false;
            freq.set(keys[i] + j, total)
        }



    }

    return true;
};