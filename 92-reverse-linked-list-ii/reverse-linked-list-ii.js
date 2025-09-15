/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const stack = new Array();

    let count = 0;

    let crawsol = head;

    while(crawsol && count < right) {
        count++;

        if(count >= left) stack.push(crawsol.val);
        crawsol = crawsol.next;

    }

    count = 0;
    crawsol = head;
    while(crawsol && count < right) {
        count++;

        if(count >= left) crawsol.val = stack.pop();
        crawsol = crawsol.next;

    }

    return head;
};