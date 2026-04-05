/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    const dir = [0, 0, 0, 0];

    for(const ch of moves) {
        if(ch === "L") dir[0]++;
        else if (ch === "R") dir[1]--;
        else if (ch ===  "U") dir[2]++;
        else dir[3]--
    }

    return ((dir[0] + dir[1]) === 0) &&  ((dir[2] + dir[3]) === 0)
};