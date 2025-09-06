/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let k = Math.max(...piles);
    let min = 0;

    while(min < k) {
        let mid = Math.floor((min + k) / 2);
        let count = 0;
        for(let idx = 0; idx < piles.length; idx++) {
            count += Math.ceil(piles[idx] / mid);
            if(count > h) break;
        }

        if(count > h) min = mid + 1;
        else k = mid;

    }
    return k;
};