/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const set = new Set(["()", "[]", "{}"]);


    const stack = new Array();

    for(const ch of s) {

        if(ch == "(" || ch == "[" || ch == "{") stack.push(ch);

        else if(stack.length) {

            console.log(ch)

            let paranthesis = stack[stack.length - 1] + ch;

            if(set.has(paranthesis)) stack.pop();
            else return false;
        }
        else return false;

        
    }
    
    if(stack.length == 0) return true;

    return false;
};