/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    let next = null;
    let charCode = target.charCodeAt(0)
    for(let index = 0; index < letters.length; index++) {
        if(letters[index].charCodeAt(0) > charCode) return letters[index];
    }
    return letters[0]
};