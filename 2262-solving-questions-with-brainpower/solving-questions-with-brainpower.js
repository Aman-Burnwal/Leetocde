/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {

    // dp array bana taki ak hi kam baar baar na karna na pade;
    const dp =  new Array(questions.length);

    return solver(0);
    
    function solver(i) {
        // yadi idx array ke length ke barabar ho jaye ya bahar ho jaye to hme 0 point hi milenge
        if(i >= questions.length) return 0;

        //  yadi already calculate kar liya hai to dubara kyu karna isliye isko dp me store kar liya tha;
        if(dp[i]) return dp[i];

        // kama lo bhai points aur i ke brainwPower se badh jaw
        let take = solver(questions[i][1] + i + 1) + questions[i][0];
        // skip karke dekho sayad aage se jayda point mil jaye
        let not_take = solver( i + 1);

        // return aur save kar lo dp me jo bhi maximum ho lene aur skip karne se
        return dp[i] =  Math.max(take , not_take );
    
    }
    
};