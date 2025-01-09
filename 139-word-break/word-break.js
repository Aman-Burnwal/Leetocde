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
        // If we have reached the end of the string, return true
        if (i === s.length) return true;

        // If the result for this index is already computed, return it
        if (memo[i] !== undefined) return memo[i];

        let current = root;

        // Traverse the string from index i
        for (let j = i; j < s.length; j++) {
            let idx = s.charCodeAt(j) - 97;

            // If the character is not in the Trie, return false
            if (!current.children[idx]) {
                break;
            }

            current = current.children[idx];

            // If a word ends here, recursively check the rest of the string
            if (current.endWords && searchWord(j + 1)) {
                memo[i] = true; // Cache the result for index i
                return true;
            }
        }

        // If no segmentation is possible, cache the result as false
        memo[i] = false;
        return false;
    }



    function createTrie() {

        return {
            children: new Array(26).fill(null),
            endWords: false,
            word: ""
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