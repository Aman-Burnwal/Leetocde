/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    
    const stack = []
    const lastIndex = new Array(26).fill(-1);
    for(let i = 0; i < s.length; i++) {
       lastIndex[s.charCodeAt(i) - 97] = i;
    }

    for(let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) continue;
        if(stack.length === 0)stack.push(s[i]);
        else if(stack[stack.length - 1] == s[i]) continue;
        else if(stack[stack.length - 1].charCodeAt(0) > s[i].charCodeAt(0)) {
            while(stack.length) {
                let char = stack[stack.length - 1];
                console.log(char)
               
                let idx = char.charCodeAt(0) - 97;
                if(stack[stack.length - 1] > s[i] && lastIndex[idx] > i) stack.pop();
                else break;
            }
            stack.push(s[i]);
        } else stack.push(s[i]);
    }

    return stack.join("")
};