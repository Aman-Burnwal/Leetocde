/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
    const set = new Set(nums);
    let ans = ""

    function check(str) {

        if(ans.length) return;
        if(str.length === nums[0].length) {

            if(!set.has(str)) ans = str;
            return
        }



        return check(str + "0") + check(str + "1")
    }

    check("")

    return ans;
};