/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    
    let count = 0;
    let ans = ""
    let strings = [];
    generate("");
    return count === k ? ans : ""
    function generate(s) {

        if(count === k) return;
        if(s.length === n) {
            strings.push(s);
            ans = s;
            count++
            return;
        }

        if(s.length === 0) {
            generate(s + "a");
            generate(s + "b");
            generate(s + "c");
        }
        else if (s[s.length - 1] === "a") {
            generate(s + "b");
            generate(s + "c")
        }
        else if (s[s.length - 1] === "b") {
            generate(s + "a");
            generate(s + "c")
        }
        else {
            generate(s + "a");
            generate(s + "b")
        }
    }
};