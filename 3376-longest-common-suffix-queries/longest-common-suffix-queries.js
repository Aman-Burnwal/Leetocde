/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {

    function createNode() {
        return {
            len: Infinity,
            minLen: Infinity,
            minLenIdx: Infinity,
            next: new Array(26).fill(null)
        };
    }

    const tree = createNode();
    // let minIndexLen = Infinity;
    let minIndexLen = 0;

    for (let j = 1; j < wordsContainer.length; j++) {
        if (wordsContainer[j].length < wordsContainer[minIndexLen].length) {
            minIndexLen = j;
        }
    }

    // insert example
    for (let j = 0; j < wordsContainer.length; j++) {

        const word = wordsContainer[j];
        // minIndexLen = Math.min(word.length, minIndexLen);
        let node = tree;

        for (let i = word.length - 1; i >= 0; i--) {

            const idx = word.charCodeAt(i) - 97;

            if (node.next[idx] === null) {
                
                node.next[idx] = createNode();
            }

            node = node.next[idx];
            if (node.minLen > word.length) {
                node.minLen = word.length;
                node.minLenIdx = j;
            }
        }
    }

    const LCSA = [];

    
    for(const word of wordsQuery ) {
        // let len = Infinity;
        let j = Infinity;
        let root = tree.next;
        for(let idx = word.length - 1; idx >= 0; idx--) {
            const charCode = word.charCodeAt(idx) - 97; 
            
            if(root[charCode] == null) {
                // j = Infinity;
                break;
            }
            // console.log(root);
            j = root[charCode].minLenIdx;
            root = root[charCode].next;  
        }
        LCSA.push(j === Infinity ? minIndexLen : j );
    }
    return LCSA;
};