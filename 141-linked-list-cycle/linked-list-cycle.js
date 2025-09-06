/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let curr = head;


    while(curr) {
        if(curr.val === "a") return true;
        curr.val = "a"
        curr = curr.next;
    }
    return false;
};