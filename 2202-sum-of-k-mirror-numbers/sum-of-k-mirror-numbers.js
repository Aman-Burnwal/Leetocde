/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var kMirror = function(k, n) {
    let sum = 0;
    let L = 1;
    while(n > 0) {

        let half = Math.floor((L + 1) / 2);
        let min_half = Math.pow(10, half -1);
        let max_half = Math.pow(10, half) -1;

        for(let num = min_half; num <= max_half; num++) {

            let stringNum = num.toString();
            let pal = ""

            if(L % 2) {
                pal = stringNum + stringNum.split("").reverse().join("").substring(1);
            } else {
                pal = stringNum + stringNum.split("").reverse().join("");
            }

            if(check_is_palindrome(Number(pal).toString(k))) {
                n--;
                sum += Number(pal);
                if(n == 0) break;
            }
        }
        L++;
    }
    return sum;


    function check_is_palindrome(pal) {
        let i = 0, j = pal.length -1;

        while(i < j) {
            if(pal[i] != pal[j]) return false;
            i++;
            j--;
        }
        return true;
    }
};