/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    
    meetings.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let lastEnd = 0;


    for(const [start , end] of meetings) {

        if(start > lastEnd + 1) {
            count += start - lastEnd - 1;
        }

        lastEnd = Math.max(lastEnd, end);
    }

    count += days - lastEnd;


    return count;

};