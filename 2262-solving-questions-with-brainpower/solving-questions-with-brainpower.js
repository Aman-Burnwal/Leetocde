/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {


    const dp =  new Array(questions.length);


    function solver(i) {

        if(i >= questions.length) return 0;

        if(dp[i]) return dp[i];

        let a = solver(questions[i][1] + i + 1) + questions[i][0];
        let b = solver( i + 1);

        return dp[i] =  Math.max(a , b);
    }

    return solver(0);
    
};