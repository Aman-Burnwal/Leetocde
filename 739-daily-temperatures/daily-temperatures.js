/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const ans = []
    const stack = []
    for(let i = temperatures.length -1; i >= 0;  i--) {
        while(stack.length && temperatures[stack[stack.length -1]] <= temperatures[i]) {
            stack.pop();
        }
        if(stack.length === 0) ans[i] = 0;
        else ans[i] = stack[stack.length - 1] - i;
        stack.push(i);
    }
    return ans;
};