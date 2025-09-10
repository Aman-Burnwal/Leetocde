/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const last = new Array(26);
    const ans = []

    for(let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 97;
        last[idx] = i;
    }

    let i = 0;

    while(i < s.length) {

        const start = i;
        let end = last[s.charCodeAt(i) - 97];

        while(i < end) {
            i++;
            end = Math.max(end, last[s.charCodeAt(i) - 97]);
        }
        i++;
        ans.push(i - start)
    }

    return ans

  
};