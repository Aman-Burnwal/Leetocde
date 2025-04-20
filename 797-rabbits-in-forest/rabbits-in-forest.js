/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    
    const map = new Map();

    let count = 0;

    for(const rabit of answers) {

        map.set(rabit, (map.get(rabit) + 1 ) || 1);
    }

    
    for(const [key, value] of map) {
        count += Math.ceil(value /( key + 1) ) *( key + 1)
    }
    
    return count;
};