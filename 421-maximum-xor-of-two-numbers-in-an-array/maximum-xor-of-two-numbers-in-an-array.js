/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    
    function Trie () {
        this.left = null;
        this.right = null;
    }

    Trie.prototype.insert = function (num) {

        let pCrawsal = this;

        for(let i = 31; i >= 0; i--) {

            let bit = (num >> i) & 1;

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

    Trie.prototype.maxXor = function (num) {

        let pCrawsal = this;
        let xor = 0;

        for(let i = 31; i >= 0; i--) {

            let bit = (num >> i) & 1;

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

    const root = new Trie();

    for(const num of nums) {

        root.insert(num);
    }

    let max = 0;

    for(const num of nums) {

        max = Math.max(max, root.maxXor(num));
    }

    return max;
};