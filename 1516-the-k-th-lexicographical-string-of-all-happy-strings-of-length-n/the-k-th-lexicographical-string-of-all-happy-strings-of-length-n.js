/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {

    let count = 0;
    let ans = "";
    let stack = new Array();
    

    function generater () {
    
        if(stack.length == n) {
            count++;
            count == k ? ans = stack.join(""): "";
            
            return;
        }
        if(ans != "") return;
        
        for(const ch of "abc") {
            stack.push(ch);
            if(stack.length == 1) generater();
            else if(stack[stack.length - 2] != ch) generater();
            stack.pop();
        }
    }

    generater();
    return ans;
};