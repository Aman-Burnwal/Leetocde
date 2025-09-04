/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    intervals.push([-1, -1])

    const ans = [intervals[0]]

    
    for(let i = 1; i < intervals.length - 1; i++) {
        let last = ans[ans.length -1][1];
        if(intervals[i][0] <= last) {
            ans[ans.length - 1][1] = Math.max(last, intervals[i][1]);
        }
        else ans.push(intervals[i]);
    }

    return ans;
};