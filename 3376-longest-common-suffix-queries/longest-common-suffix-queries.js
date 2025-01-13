/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    const root = new Trie();
    let min = Infinity;
    let indx = 0;
    const ans = new Array();

    for(let i = 0; i <  wordsContainer.length; i++) {
        insert(wordsContainer[i], i, wordsContainer[i].length )
        if(min > wordsContainer[i].length) {
            min = wordsContainer[i].length;
            indx = i;
        }
    }
    for(const word of wordsQuery) {
        let ind = search(word);
        if(ind == Infinity)ind = indx;
        ans.push(ind);
    }

    return ans;

    function Trie () {
        return {
            children: new Array(26).fill(null),
            length: null,
            indx: null
        }
    }

    function search(word) {

        let indx = Infinity;
        let curr = root;
        for(let i = word.length - 1; i >= 0; i--) {

            let ind = word[i].charCodeAt(0) - 97;

            if(curr.children[ind] == null) break;
           curr = curr.children[ind];
           indx = curr.indx;
        }
        return indx;
    }

    function insert(word, idx, length) {

        let curr = root;

        for(let i = length - 1; i >= 0; i--) {

            let indx = word[i].charCodeAt(0) - 97;

            // console.log(ch)

            if(curr.children[indx] == null) curr.children[indx] = new Trie();
            curr = curr.children[indx];

            if(!curr.length) {
                curr.length = length;
                curr.indx = idx;
            }
            else {
                if(curr.length > length) {
                    curr.length = length;
                    curr.indx = idx;
                }
                // curr.length = Math.min(curr.length, length);
                // curr.indx = Math.min()
            }

            // curr = curr.children[indx];
        }
    }
};