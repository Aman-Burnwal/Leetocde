/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const ans = new Array()
    const rowLen = board.length;
    const colLen = board[0].length;

    const Tree = new createTrie();

    for(const word of words) {
        insertTreeNode(word)
    }

    for(let row = 0; row < rowLen; row++) {
        for(let col = 0; col < colLen; col++) {
          searchWord(row, col, Tree)  
        }
    }


    return ans;



    function searchWord(row, col, root) {
        if(row >= rowLen || col >= colLen || row < 0 || col < 0) return;
        if(board[row][col] === "") return;

        const index = board[row][col].charCodeAt(0) - 97;
        root = root.children[index];
        if(!root) return;
        
        if(root.isEnd) {
            ans.push(root.word);
            root.isEnd = false;

        }

        


        const ch = board[row][col]; 
        board[row][col] = "";

        dir.forEach(([x, y]) => {
            const x1 = row + x;
            const y1 = col + y;

            searchWord(x1, y1, root)

        })

        board[row][col] = ch;
        




    }

    function createTrie() {
        return {
            children : new Array(26).fill(null),
            isEnd : false,
            word: ""
        }
    }

    function insertTreeNode (word) {
        let node = Tree;

        for(let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;

            if(node.children[index] === null) {
                const newNode = new createTrie();
                node.children[index] = newNode;
            }

            node = node.children[index];
        }
        node.isEnd = true;
        node.word = word;
    }
};