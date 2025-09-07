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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const level = [];
    const bfs = [];
    if(!root) return level;

    bfs.push(root);
    while(bfs.length) {
        let len = bfs.length;
        const temp = []
        for(let i = 0; i < len; i++) {
            const node = bfs.shift();
            temp.push(node.val);
            if(node.left !== null) bfs.push(node.left);
            if(node.right !== null) bfs.push(node.right);
        }
        level.push(temp)
    }
    return level;

    
};