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
var verticalTraversal = function(root) {
    const array = [];

    function traversel(root , idx, row) {
        if(!root) return;
        array.push([root.val, idx, row])
        traversel(root.left, idx - 1, row + 1);
        traversel(root.right, idx + 1, row + 1)
    }

    traversel(root, 0, 0)

    array.sort((a, b) => {
        if(a[1] != b[1]) return a[1] - b[1];
        if(a[2] != b[2]) return a[2] - b[2];
        return a[0] - b[0];
    });

    const map = new Map();
    for(const [val, col] of array) {
        if(!map.has(col)) map.set(col, []);
        map.get(col).push(val)
    }

    return [...map.values()];
};