/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map =  [
        ["I", 1], 
        ["IV", 4], 
        ["V", 5], 
        ["IX", 9], 
        ["X", 10], 
        ["XL", 40], 
        ["L", 50], 
        ["XC", 90], 
        ["C", 100], 
        ["CD", 400], 
        ["D", 500], 
        ["CM", 900],
        ["M", 1000]
    ]

    let str = "";

    let idx = map.length - 1;
    while(num > 0 ) {
        console.log(num, idx)
        if(map[idx][1] <= num) {
            str += map[idx][0];
            num -= map[idx][1];
        }
        else idx--;
    }
    return str;
};