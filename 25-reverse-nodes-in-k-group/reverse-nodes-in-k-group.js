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
var reverseKGroup = function(head, k) {
    let root = new ListNode();
    const curr = root;
    const values = [];

    while(head) {
        values.push(head.val);
        if(values.length === k) {
            createListReverse()
        }
        head = head.next;
    }
    for(let i = 0; i < values.length; i++) {
        const newListNode = new ListNode(values[i]);
        root.next = newListNode;
        root = root.next;
    }
    return curr.next;

    function createListReverse() {
        while(values.length) {
            const newListNode = new ListNode(values.pop());
            root.next = newListNode;
            root = root.next;
        }
    }
};