/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const parenthesis = new Array();
    generator(0, 0, "")
    return parenthesis;


    function generator(left, right, str) {
        
        if(right === n) {
            parenthesis.push(str);
            return;
        }
        if(left > n) return;

        generator(left + 1, right , str + "(");
        if(right < left) generator(left, right + 1, str + ")")


    }
};