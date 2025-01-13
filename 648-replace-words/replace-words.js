/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {

    const root  = new Trie();
    sentence = sentence.split(" ");

    for(const word of dictionary) Insert(word)

    for(let i = 0; i < sentence.length; i++ ) sentence[i] = Search(sentence[i]);

    return sentence.join(" ");
    
    function Trie () {

        return {
            children: new Array(26).fill(null),
            isEnd: false

        }
    }

    function Search(word) {

        let newWord = new Array();
        let curr =  root;
        


        for(const ch of word) {
            let idx = ch.charCodeAt(0) - 97;
            if(curr.isEnd) {
                return newWord.join("");
            }
            if(curr.children[idx] == null) break;
            newWord.push(ch);
            curr = curr.children[idx];

        }
        
        return word;
    }

    function Insert(word) {
        let curr = root;

        for(const ch of word) {

            let idx = ch.charCodeAt(0) - 97;

            if(curr.children[idx] == null) curr.children[idx] = new Trie();
            curr = curr.children[idx];
        }
        curr.isEnd = true;
    }
};