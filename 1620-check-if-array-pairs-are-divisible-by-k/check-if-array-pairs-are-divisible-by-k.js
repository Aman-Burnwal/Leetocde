/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const map = new Map();
    for(const num of arr) {
        const rem = ((num % k) + k) % k;
        if(!map.has(rem)) map.set(rem, 0);
        map.set(rem, map.get(rem) + 1)
    }
    const keys = map.keys();
    console.log(map)
    for(const key of keys ) {
       const count = map.get(key);
       if(key === 0) {
        if(count % 2) return false;
        continue;
       }
       if(!map.has(k - key )) return false
       const pair = map.get(k - key);
       if(count != pair) return false;
    }
    return true;
};