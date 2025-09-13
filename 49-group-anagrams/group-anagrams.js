/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(const word of strs) {
        let str = word.split("").sort().join("");
        if(!map.has(str)) map.set(str, []);
        map.get(str).push(word);
    }

    return [...map.values()]
};