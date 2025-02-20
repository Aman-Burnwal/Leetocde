/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

    const set = new Set(nums);
  

    let stack = new Array;
    let size = nums.length;


    let ans = "";
    solve();
    return ans;


    function solve() {

        if(stack.length == size) {
            if(!set.has(stack.join(""))) ans = stack.join("");
            return;
        }
        if(ans != "") return;

        stack.push("0");
        solve();
        stack.pop();

        stack.push("1");
        solve();
        stack.pop()
    }

    


    
};