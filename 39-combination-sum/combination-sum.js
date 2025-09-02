/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    function helper(curr,temp, start ) {
        if(curr === target) {
            result.push([...temp]);
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            if(curr + candidates[i] > target) break;
            temp.push(candidates[i]);
            helper(curr + candidates[i], temp , i);
            temp.pop();
        }
    }

    helper(0, [], 0)
    return result;
};