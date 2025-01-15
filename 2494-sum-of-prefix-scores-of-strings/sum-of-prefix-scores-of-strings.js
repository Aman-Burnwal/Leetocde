/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    
    const root = new Trie();
    const ans = new Array();

    for(const word of words) Insert(word);

    for(const word of words) ans.push(Search(word));

    return ans;



    function Trie() {

        return {
            children: new Array(26).fill(null),
            count : 0
        }
    }

    function Search(word) {
        let pCraswal = root;
        let counting = 0;
        let indx;

        for(const char of word) {

            indx = char.charCodeAt(0) - 97;

            if(!pCraswal.children[indx] ) break;
            pCraswal = pCraswal.children[indx];
            counting += pCraswal.count;
            
        }

        return counting;
    }

    function Insert(word) {

        let pCrawsal = root;
        let indx;

        for(const char of word) {
            indx = char.charCodeAt(0) - 97;
            if(!pCrawsal.children[indx]) pCrawsal.children[indx] = new Trie();
            pCrawsal = pCrawsal.children[indx];
            pCrawsal.count++;
        } 
    }
};