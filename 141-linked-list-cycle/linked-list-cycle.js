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
    let fast = head.next;

    while(fast && fast.next && fast.next.next) {
        if(curr === fast) return true;
        fast = fast.next.next;
        curr = curr.next;
    }
    return false
};