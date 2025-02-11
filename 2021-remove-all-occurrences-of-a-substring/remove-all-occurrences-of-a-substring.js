/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    const stack = new Array();
    let last = part[part.length - 1];
    for(const ch of s){
        stack.push(ch);

        if(ch == last && stack.length >= part.length && stack.slice(stack.length - part.length).join("") == part) stack.splice(stack.length - part.length); 
    }

    return stack.join("")

};