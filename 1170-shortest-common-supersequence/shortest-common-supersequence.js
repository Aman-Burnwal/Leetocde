/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {

    let ans = new Array();
   
    const dp = Array.from({length : str1.length + 1}, () => new Array(str2.length + 1));


    for(let i = 0; i <= str1.length; i++) {

        for(let j = 0; j <= str2.length; j++) {

            if(j == 0 || i == 0) dp[i][j] = i + j;

            else if(str1[i - 1] == str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);

        }

       

    }

    let i = str1.length;
    let j = str2.length;
    

    while(i > 0 && j > 0) {

        // if(dp[i][j - 1] == dp[i - 1][j]) {

        //     ans.push(str1[i - 1]);
        //     j--;
        // }

        if(str1[i - 1] == str2[j - 1]) {
            ans.push(str1[i - 1]);
            i--;
            j--;
        }

        else if(dp[i - 1][j] < dp[i][j - 1]) ans.push(str1[--i] );
            
        
        else  ans.push( str2[--j] );
        

    }




    while(i > 0)  ans.push( str1[--i]);
    

    while(j > 0) ans.push( str2[--j]);



    

    return ans.reverse().join("");


    
};