/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head;
    let node = head;
    let nodeLength = 1;
    while(node.next) {
        node = node.next;
        nodeLength++;
    }
    k = k % nodeLength;
    node.next  = head;
    node = head;

    for(let i = 0; i < nodeLength - k -1; i++) {
        node = node.next;

    }

    const root = node.next;
    node.next = null;

    return root;



};