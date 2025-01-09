/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    const root = createTrie();

    for(const word of wordDict) {
        insertTrie(root, word)
    }
    const memo = new Array(s.length).fill(undefined); 
    return searchWord(0, root)


    function searchWord(i) {
       
        if (i === s.length) return true;

       
        if (memo[i] !== undefined) return memo[i];

        let current = root;

        
        for (let j = i; j < s.length; j++) {

            let idx = s.charCodeAt(j) - 97;

            if (!current.children[idx]) break;
            

            current = current.children[idx];

            if (current.endWords && searchWord(j + 1)) return memo[i] = true; 
            
        }

       
        return memo[i] = false;
    
    }



    function createTrie() {

        return {
            children: new Array(26).fill(null),
            endWords: false,
         
        }
    }

    function insertTrie(root, word) {


        for(const ch of word) {
            let idx = ch.charCodeAt(0) - 97;
            if(!root.children[idx]) {
                root.children[idx] = createTrie();
            }

            root = root.children[idx];
        }

        root.endWords = true;
    }
    
};