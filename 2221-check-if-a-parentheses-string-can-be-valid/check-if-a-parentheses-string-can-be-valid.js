/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {

    if(s.length % 2 == 1) return false;
    
    const stack = new Array();
    const unlock = new Array();

    for(let i = 0; i < s.length; i++) {

        if(locked[i] == "0") unlock.push(i);
        else if(s[i] == "(") stack.push(i);
        else if(s[i] == ")") {

            if(stack.length) stack.pop();
            else if(unlock.length)unlock.pop();
            else return false;
        }
    }

    while(stack.length && unlock.length && stack[stack.length - 1] < unlock[unlock.length - 1]) {
        stack.pop();
        unlock.pop();
    }

    

    if(stack.length)return false;
    return true;



    
};