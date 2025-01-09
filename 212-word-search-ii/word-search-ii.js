/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    let n = board.length;
    let m = board[0].length;

    const ans = new Array();
    const root =  createTrie();


    for(const word of words) {

        insertTrie(word);
    }

    let idx = 0;



    for(let i = 0; i < n; i++) {

        for(let j = 0; j < m; j++) {

            idx = board[i][j].charCodeAt(0) - 97;

            if(root.children[idx]) searchTrie(i, j, root);
        }
    }

    return ans;


    function createTrie() {
        
        return {
            children: new Array(26).fill(null), 
            isEnd: false,
            word: null,
        };
    }

    function insertTrie( word) {
        let current = root;

        for (const ch of word) {

            let ind = ch.charCodeAt(0) - 97; 

            if (!current.children[ind]) {
                current.children[ind] = createTrie();
            }

            current = current.children[ind];
        }

       
        current.isEnd = true;
        current.word = word;
    }

    function searchTrie(i, j, root) {

        if(i < 0 || j < 0 || i >= n || j >= m) return;

        let idx = board[i][j].charCodeAt(0) - 97;
        
        if(board[i][j] == "@" || !root.children[idx] ) return;

        root = root.children[idx];

        if(root.isEnd) {
            root.isEnd = false;
            ans.push(root.word)
            root.word = "";
        }
        
        let char = board[i][j];
        board[i][j] = "@";

        searchTrie(i - 1, j, root);
        searchTrie(i + 1, j, root);
        searchTrie(i, j - 1, root);
        searchTrie(i, j + 1, root);

        board[i][j] = char;

        

    }

    

        

    
};