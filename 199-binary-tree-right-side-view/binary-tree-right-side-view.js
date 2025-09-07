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
var rightSideView = function(root) {
      const level = [];
    const bfs = [];
    if(!root) return level;

    bfs.push(root);
    while(bfs.length) {
        let len = bfs.length;
        level.push(bfs[len - 1].val)
        for(let i = 0; i < len; i++) {
            const node = bfs.shift();
            if(node.left !== null) bfs.push(node.left);
            if(node.right !== null) bfs.push(node.right);
        }
    }
    return level;
};