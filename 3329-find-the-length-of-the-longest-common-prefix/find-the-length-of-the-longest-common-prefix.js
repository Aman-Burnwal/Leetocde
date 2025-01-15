/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    
    let maxPreFixLen = 0;
    const root = new Trie();

    for(const num of arr1) insert(num);

    // console.log(root)

    for(const num of arr2) maxPreFixLen = Math.max(maxPreFixLen, search(num));

    function Trie () {

        return {
            chldren: new Array(10).fill(null),
            isEnd: false
        }
    }

    function search(num) {
        num = String(num);

        let length = 0;

        let curr = root;

        for(const n of num) {
        
            if(curr.chldren[n] == null) break;
            length++;
            curr = curr.chldren[n];
        }
        return length;
    }

    function insert(num) {

        num = String(num);
        let curr = root;

        for(const idx of num) {
           

            if(curr.chldren[idx] == null) curr.chldren[idx] = new Trie();

            curr = curr.chldren[idx];
        }
        curr.isEnd = true;
    }


    return maxPreFixLen;
};