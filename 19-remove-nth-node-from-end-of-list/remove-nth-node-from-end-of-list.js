/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let root = new ListNode(0);
    const curr = root;
    const values = [];
    while(head) {
        const val = head.val;
        values.push(val);
        head = head.next;
    }
    const idx = values.length - n;
    for(let i = 0; i < values.length; i++) {
        if(i == idx) continue;
        const newList = new ListNode(values[i]);
        root.next = newList;
        root = root.next;
    }
    return curr.next;
};