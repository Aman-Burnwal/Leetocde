/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = new Map([
        ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000],
        ["IV", 4], ["IX", 9], ["XL", 40], ["XC", 90], ["CD", 400], ["CM", 900]
    ]);

    let num = 0;
    for(let i = 0; i < s.length; i++) {
        
        const ch = s[i];
        const ch2 = s[i] + s[i + 1];

        if(roman.has(ch2)){
            num += roman.get(ch2);
            i++
        } 
        else {
    
            num += roman.get(ch);
        }
    }

    return num;
};