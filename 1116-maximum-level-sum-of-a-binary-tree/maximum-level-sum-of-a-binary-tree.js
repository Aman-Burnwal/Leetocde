/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    

    const queue = [];
    let sum = root.val;
    let index = 1;
    
    queue.push(root);
    let currIndex = 1;

    while(queue.length) {

        let len = queue.length;
        let currSum = 0;
        for(let count = 0; count < len; count++) {
            const currRoot = queue.shift();
            currSum += currRoot.val;
            if(currRoot.left) queue.push(currRoot.left);
            if(currRoot.right) queue.push(currRoot.right);
        }

        if(sum < currSum) {
            sum = currSum;
            index = currIndex
        }
        currIndex++;
    }
    return index;
};