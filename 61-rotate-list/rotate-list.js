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
    let node = head;
    let count = 0;
    while(node) {
        node = node.next;
        count++;
    }
    k = k % count;
    node = head;

    for(let i = 0; i < count - k; i++) {
        node = node.next;

    }

    let root = new ListNode(0);
    let curr = root;
    
    while(node) {
        const newNode = new ListNode(node.val);
        root.next = newNode;
        root = root.next
        node = node.next

    }

    node = head;

    for(let i = 0; i < count - k; i++) {
        const newNode = new ListNode(node.val);
        root.next = newNode;
        root = root.next
        node = node.next

    }

    
    return curr.next;

};