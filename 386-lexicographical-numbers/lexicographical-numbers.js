/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

    
    const root = createTrie();
    const ans = new Array();

    function createLexicalOrder(root ) {
        ans.push(root.value)
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


    return ans;


    function createTrie() {
        return {
            value : 0,
            children: new Array(10)
        }
    }
};