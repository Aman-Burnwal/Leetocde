/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {


    const root = new Trie();
    let bit;

    for(const num of nums) {

        insert(num);
    }

    let max = 0;

    for(const num of nums) {

        max = Math.max(max, maxXor(num));
    }

    return max;
    
    function Trie () {
        return {
            left : null,
            right: null
        }
    }

    function insert (num) {

        let pCrawsal = root;

        for(let i = 31; i >= 0; i--) {

            bit = (num >> i) & 1;

            if(bit) {

                if(!pCrawsal.right) pCrawsal.right = new Trie();
                pCrawsal = pCrawsal.right
            }
            else {
                if(!pCrawsal.left) pCrawsal.left = new Trie();
                pCrawsal = pCrawsal.left
            }
        }

    }

     function maxXor (num) {

        let pCrawsal = root;
        let xor = 0;

        for(let i = 31; i >= 0; i--) {

            bit = (num >> i) & 1;

            if(bit) {

                if(pCrawsal.left) {
                    xor += Math.pow(2, i);
                    pCrawsal = pCrawsal.left;
                }
                else  {
                    pCrawsal = pCrawsal.right;
                }
            }
            else {

                if(pCrawsal.right) {
                    xor += Math.pow(2, i);
                    pCrawsal = pCrawsal.right;
                }
                else pCrawsal = pCrawsal.left;
            }
        }

        return xor

    }


};