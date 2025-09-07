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
var maxDepth = function(root) {
    if(!root) return 0;
    const depths = [];
    let depth = 0;

    depths.push(root);

    while(depths.length) {
        // console.log(depths)
        let len = depths.length;
        for(let i = 0; i < len; i++) {
            const node = depths.shift();
            if(node.left !== null) depths.push(node.left);
            if(node.right !== null) depths.push(node.right);
        }
        depth++;
    }
    // console.log(depth)
    return depth;
};