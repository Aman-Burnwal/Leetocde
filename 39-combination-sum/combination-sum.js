/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    helper(0, [], target);
    return result;

    function helper(idx, temp , target) {
        if(target=== 0) {
            result.push([...temp]);
            return;
        }
        if(target < 0 || idx >= candidates.length) return;

        for(let i  = idx; i < candidates.length; i++) {
            temp.push(candidates[i]);
            helper(i, temp, target - candidates[i])
            temp.pop()
        }
    }
};