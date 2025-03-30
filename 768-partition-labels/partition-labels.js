/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
    const arr = new Array(26).fill(-1);

    for(let i = s.length - 1; i >= 0; i--) {

        let char = s.charCodeAt(i) - 97;

        if(arr[char] == -1) arr[char] = i;
    }

    let count = 0;
    let max = 0;
    const ans = []; 


    for(let i = 0; i < s.length; i++) {

        let char = s.charCodeAt(i) - 97;
        count++;
        max = Math.max(max, arr[char]);

        if(i == max ) {
            ans.push(count);
            count = 0;
        }
     
    }


    return ans;


};