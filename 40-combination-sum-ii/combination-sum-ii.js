/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    const ans = [];
    candidates.sort((a, b) => a - b);
    helper([], target, 0);

    return ans;
    
    function helper(temp, sum, idx) {
        
        if(sum === 0) {
            ans.push([...temp])
            return;
        }
        if(sum < 0 || idx >= candidates.length) return;

       for(let i = idx; i < candidates.length; i++) {
            if(i > idx && candidates[i] === candidates[i - 1]) continue;
            temp.push(candidates[i]);
            helper(temp, sum - candidates[i], i + 1);
            temp.pop()
        }
    }
};