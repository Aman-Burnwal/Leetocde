/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let first = Math.min(newInterval[0], newInterval[1]);
    let max = Math.max(newInterval[0], newInterval[1]);

    const ans = [];
    let idx = 0;


    while (idx < intervals.length && intervals[idx][1] < first) {
        ans.push(intervals[idx]);
        idx++;
    }


    while (idx < intervals.length && intervals[idx][0] <= max) {
        first = Math.min(first, intervals[idx][0]);
        max = Math.max(max, intervals[idx][1]);
        idx++;
    }
    ans.push([first, max]);


    while (idx < intervals.length) {
        ans.push(intervals[idx]);
        idx++;
    }

    return ans;
};
