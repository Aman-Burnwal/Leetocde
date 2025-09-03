/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").reduce((acc, curr) => {
        if(curr.trim() === "") return acc;
        acc.push(curr);
        return acc;
    },[]).reverse().join(" ").trim();
};