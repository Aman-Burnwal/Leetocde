/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

    
    const root = createTrie();
    const ans = new Array();

    function createLexicalOrder(root ) {
        const value = root.value * 10;
        
        

        for(let i = 0; i < 10; i++) {
            
            let num = value + i;
            if(num <= n) {
                root.children[i] = createTrie();
                root.children[i].value = num;
                createLexicalOrder(root.children[i]);
                
            }
        }
    }
   
    for(let i = 1; i < 10; i++) {
            
        let num = i;
        if(num <= n) {
            root.children[i] = createTrie();
            root.children[i].value = num;
            createLexicalOrder(root.children[i]);
            
        }
    }

    for(let i = 1; i < 10; i++) {

        if(root && root.children[i]) {
            DFS(root.children[i]);
        }
    }

    return ans;



    function DFS(root) {

        ans.push(root.value);

        for(let i = 0; i <  10; i++) {

            if(root.children[i]) {
                DFS(root.children[i])
            }
        }
    }

    





    function createTrie() {
        return {
            value : 0,
            children: new Array(10).fill(null)
        }
    }
};