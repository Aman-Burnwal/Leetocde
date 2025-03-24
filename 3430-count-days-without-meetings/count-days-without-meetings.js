/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {

    let daysOff = 0;
    let currEnd = 0;

    meetings.sort((a, b) => a[0] - b[0]);


    for(const [start, end] of meetings) {

        if(start > currEnd) {

            daysOff += start - currEnd - 1;
        }

        currEnd = Math.max(end, currEnd);
    }

    return daysOff + days - currEnd;
    
};