/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let totalSteps = 0;
    for(let cIndex = 0; cIndex < points.length - 1; cIndex++) {

        let nextTotlSteps = Math.max(Math.abs(points[cIndex][0] - points[cIndex + 1][0]) , Math.abs(points[cIndex][1] - points[cIndex + 1][1]) );
        totalSteps += nextTotlSteps
    }
    return totalSteps;

};