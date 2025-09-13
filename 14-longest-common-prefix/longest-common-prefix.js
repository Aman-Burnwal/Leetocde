/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    


    function trie () {
        return {
            children : new Array(26).fill(null)
        }
    }

    const word = strs[0];
    const root = new trie();
    let t = root;

    for(const ch of word) {

        const idx = ch.charCodeAt(0) - 97;

        const newNode = new trie();
        t.children[idx] = newNode;
        t = t.children[idx]

    }

    let len = strs[0].length;

    for(let i = 0; i < strs.length; i++) {
        let wordLen = Math.min(strs[i].length, len);
        let t = root;
        let count = 0;
        for(let j = 0; j < wordLen; j++) {
            let idx = strs[i].charCodeAt(j) - 97;
            if(t.children[idx] === null) break;
            count++;
            t = t.children[idx];

        }
        len = count;
    }  

    return strs[0].substring(0, len);
};