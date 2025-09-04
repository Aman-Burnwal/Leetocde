/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const array = [];

    for(const ch of tokens) {
        // if(isNaN(Number(ch))) {
            // console.log(array , ch)
            
            if(ch === "+") {
                let first = array.pop()
                let last = array.pop();
                array.push(last + first)
            }
            else if (ch === "-") {
               let first = array.pop()
                let last = array.pop();
                array.push(last - first)
            }
            else if (ch === "*") {
               let first = array.pop()
                let last = array.pop();
                array.push(last * first)
            }
            else if (ch === "/") {
               let first = array.pop()
                let last = array.pop();
                const val = last / first;
               
                array.push(val > 0 ? Math.floor(val) : Math.ceil(val))
            }
            
            else array.push(Number(ch))
       
    }


    
    return array[0]
};