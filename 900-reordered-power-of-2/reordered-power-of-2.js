/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    let t =( n & (n -1)) === 0;
    const str = String(n).split('').sort((a, b) => a - b);
    permutation(str, []);
    return t;



    function permutation(nums, temp) {
        if(t)return;
        if(temp.length && temp[0] == 0) return;

        if(nums.length === 0) {
            if(temp[0] == 0) return;
            let num = Number(temp.join(''));
            if((num & (num -1)) === 0) t = true;
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i - 1]) continue;
            let newTemp = [...temp]
            newTemp.push(nums[i]);

            let newNum = nums.slice(0, i).concat(nums.slice(i + 1))
            permutation(newNum, newTemp);
        }
    }
};