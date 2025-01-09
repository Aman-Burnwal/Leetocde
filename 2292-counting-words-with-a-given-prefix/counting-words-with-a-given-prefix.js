/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
    const root = new createTrie();

    for(const word of words) {

        insertTrie(word, root);
    }

    return searchTrie( root, 0);

   function searchTrie(root, i) {
     
        if (i === pref.length)  return root.count;
        
        let idx = pref.charCodeAt(i) - 97;

        if (!root.children[idx]) return 0;
        
        return searchTrie(root.children[idx], i + 1);
    }
    

    // create trie
    function createTrie() {

        return {
            children: new Array(26).fill(null),
            count:0,
        }
    }

    // insert word in Trie
    function insertTrie( word, root) {

        let crawsal = root;
        let idx = 0;

        for(const ch of word) {

            idx = ch.charCodeAt(0) - 97;

            if(!crawsal.children[idx]) {
                crawsal.children[idx] = createTrie();
            }
            crawsal = crawsal.children[idx];
            crawsal.count++;
            

        }
       

    }

};