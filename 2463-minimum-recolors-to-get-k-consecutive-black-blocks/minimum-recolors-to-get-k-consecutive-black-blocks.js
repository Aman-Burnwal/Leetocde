/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {

    let max = 0;
    let count = 0;
    

    for(let i = 0; i < blocks.length; i++) {

        if(blocks[i] == "B") count++;

        if(i >= k && blocks[i - k] == "B") count--;

        max = Math.max(count, max);
    }

    return k - max;
    
};