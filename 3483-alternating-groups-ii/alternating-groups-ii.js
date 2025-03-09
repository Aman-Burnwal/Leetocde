/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {



    let j = 0, ans = 0;
    k--;

    while(j < k) {
        colors.push(colors[j++]);
    }
    j = 0;
    
    let n = colors.length


    
    for(let i = 1; i < n; i++) {

        if(colors[i] == colors[i - 1]) j = i;

        else if(i - j == k) {

            ans++;
            j++;
        }
    }

    
    return ans;
    
};