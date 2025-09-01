/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    const curr = root;
    let rem = 0;

    while(l1 && l2) {
        const sum = l1.val + l2.val + rem;
        rem = sum > 9 ? 1 : 0;
        const newNode = new ListNode(sum % 10);
        l1 = l1.next;
        l2 = l2.next;
        root.next = newNode;
        root = root.next;
    }

    while(l1) {
        const sum = l1.val + rem;
        rem = sum > 9 ? 1 : 0;
        const newNode = new ListNode(sum % 10);
        root.next = newNode;
        root = root.next;
        l1 = l1.next;
    }

    while(l2) {
        const sum = l2.val + rem;
        rem = sum > 9 ? 1 : 0;
        const newNode = new ListNode(sum % 10);
        root.next = newNode;
        root = root.next;
        l2 = l2.next;
    }


    if(rem) {
        const newNode = new ListNode(rem);
        root.next = newNode;

    }


    return curr.next;
};