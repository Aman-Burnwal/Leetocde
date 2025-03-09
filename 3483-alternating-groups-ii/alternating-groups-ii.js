/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {



    let j = 0, ans = 0, count = 1;

    while(j < k - 1) {
        colors.push(colors[j++]);
    }
    j = 0;
    
    let n = colors.length


    
    for(let i = 1; i < n; i++) {

        if(colors[i] == colors[i - 1]) j = i;

        if(i - j == (k - 1)) {

            ans++;
            j++;
        }
    }

    // for(let i = 0; i < n; i++) {

    //     for(let j = i + 1; j < n; j++) {

    //         if(colors[j - 1] == colors[j]) break;
    //         else if(j == i + k - 1) {
    //             ans++;
    //             break;
    //         }
    //     }
    // }

   

    
    return ans;
    
};