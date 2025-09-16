/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
    const ans = [nums[0]];

    for (let i = 1; i < nums.length; i++) {

        const gcd = isNotPrime(nums[i], ans[ans.length - 1]);
        if (gcd > 1) {
            const last = ans.pop()
            let LCM = lc(nums[i], last, gcd);
            
            while(ans.length) {
                const gcd = isNotPrime(ans[ans.length - 1], LCM);
                if(gcd > 1) {
                    LCM = lc(ans.pop(), LCM, gcd);
                }
                else break;
            }
            ans.push(LCM)
        }

        else {
            ans.push(nums[i])

        }
    }


    return ans;


    function isNotPrime(num1, num2) {
        if (num2 === 0) return num1;
        return isNotPrime(num2, num1 % num2)
    }

    function lc(num1, num2, gcd) {
        return (num1 * num2) / gcd;
    }


};