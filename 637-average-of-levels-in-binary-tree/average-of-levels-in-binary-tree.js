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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    const levels = [root];

    const avg = [];

    while(levels.length) {
        const len = levels.length;
        const sum = levels.reduce((acc, curr) => acc + curr.val , 0);

        avg.push(sum / len);
        for(let i = 0; i < len; i++) {
            const node = levels.shift();

            if(node.left) levels.push(node.left);
            if(node.right) levels.push(node.right);
        }
    }
    return avg;
};