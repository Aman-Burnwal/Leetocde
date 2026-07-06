/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
    intervals.sort((a, b) => {
        if(a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0]
    });
    let count = 0;

    for(let i = 0; i < intervals.length; i++) {

        const [a, b] = intervals[i];
        if(a === -1) continue;
        for(let j = i + 1; j < intervals.length; j++) {
            const [c, d] = intervals[j];
            if(c === -1) continue;
            if(a <= c && b >= d ) {
                count++;
                intervals[j][0] = -1;
            }
            else if( d > b) break;
        }
    }

    return intervals.length - count;
};