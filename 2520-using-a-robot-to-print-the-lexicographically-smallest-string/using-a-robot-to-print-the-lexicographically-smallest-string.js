/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {

    const n = s.length;

    const minCharRL = new Array(n);
    minCharRL[n - 1] = s[n - 1];

    for(let i = n - 2; i >= 0; i--) {

        const char = Math.min(minCharRL[i + 1].charCodeAt(0) , s.charCodeAt(i));
        minCharRL[i] = String.fromCharCode(char);
        
    }


    let i = 0;

    let paper = new Array();
    let t = new Array();

    while(i < n) {
        t.push(s[i]);

        const minChar = i + 1 < n ? minCharRL[i + 1] : s[i];

        while(t.length && t[t.length - 1].charCodeAt(0) <= minChar.charCodeAt(0)) {
            paper.push(t.pop())
        }

        i++;
    }

    while(t.length ) {
        
        paper.push(t.pop())
    }

    return paper.join("")
    
    
};