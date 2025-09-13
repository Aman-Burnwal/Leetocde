/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    const format = new Array();
    const len = words.length;

    let idx = 0;

    while(idx < len) {

        const temp = new Array();
        let nLen = 0;

        while( idx < len ) {

            if(nLen + words[idx].length > maxWidth) break;
            temp.push( words[idx] + " ");
            nLen += words[idx].length + 1
            idx++;

        }

        temp[temp.length -1] = temp[temp.length - 1].trim();
        nLen--;
        
        if(temp.length === 1 || idx === len) {
            let str = temp.join("").padEnd(maxWidth, " ");
            format.push(str);
        }
        else {
            let idx = 0
            while(nLen < maxWidth) {
                temp[idx] = temp[idx] + " ";
                idx++;
                idx %= temp.length -1;
                nLen++;
            }
            format.push(temp.join(""))
        }
    }
    return format;
};