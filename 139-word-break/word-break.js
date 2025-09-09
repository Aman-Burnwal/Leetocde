/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    const Tree = new createTrie();

    for(const word of wordDict) {
        insertWord(word, Tree);
    }
    

    function createTrie () {
        return {
            children : new Array(26).fill(null),
            ends : false
        }
    }

    function insertWord(word, Tree) {
        for(const ch of word) {
            const idx = ch.charCodeAt(0) - 97;
            if(Tree.children[idx] === null) {
                const newNode = new createTrie();
                Tree.children[idx] = newNode;
            }
            Tree = Tree.children[idx];
        }
        Tree.ends = true;
    }


    const memo = new Array(s.length);
    return searchWord(0)

    function searchWord(i) {
    
        if (i === s.length) return true;
        if(memo[i] !=  undefined) return memo[i]

        let root = Tree;

        for(let idx = i; idx < s.length; idx++) {

            const index = s.charCodeAt(idx) - 97;
            if(!root.children[index]) break;

            root = root.children[index];

            if(root.ends && searchWord(idx + 1)) return  memo[i] = true;
        }

        return memo[i] = false;
    
    }
};