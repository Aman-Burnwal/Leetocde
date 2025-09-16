/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
    const ans = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let gcd = getGCD(curr, ans[ans.length - 1]);

        if (gcd > 1) {
            let lcm = getLCM(curr, ans.pop(), gcd);


            while (ans.length) {
                gcd = getGCD(ans[ans.length - 1], lcm);
                if (gcd > 1) {
                    lcm = getLCM(ans.pop(), lcm, gcd);
                } else break;
            }
            ans.push(lcm);
        } else {
            ans.push(curr);
        }
    }

    return ans;
};


function getGCD(a, b) {
    if (b === 0) return a;
    return getGCD(b, a % b);
}

function getLCM(a, b, gcd) {
    return (a / gcd) * b;
}
