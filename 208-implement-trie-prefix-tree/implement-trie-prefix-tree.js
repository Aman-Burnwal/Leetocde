
var Trie = function() {
    
        this.children = new Array(26).fill(null);
        this.isEnd = false;
       this. word = "";
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    let crawsal = this;
    
    for(const ch of word) {

        let idx = ch.charCodeAt(0) - 97;
        if(crawsal.children[idx] == null) {
            crawsal.children[idx] = new Trie();

        } 
        crawsal = crawsal.children[idx];

    }
    crawsal.isEnd = true;
    crawsal.word = word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
    let crawsal = this;

    for(const ch of word)  {
        let idx = ch.charCodeAt(0) - 97;
        if(crawsal.children[idx] == null) return false;

        crawsal = crawsal.children[idx]
    }
    return crawsal.word == word;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let crawsal = this;
    for(const ch of prefix)  {
        let idx = ch.charCodeAt(0) - 97;
        if(crawsal.children[idx] == null) return false;

        crawsal = crawsal.children[idx]
    }
    return true;
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */