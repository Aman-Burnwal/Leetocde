/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    const root = new ListNode();
    let curr = root;


    while (head) {
        // 
        const val = head.val;

        if (head.next && head.next.val === val) {
            while (head.next && head.next.val === val) head = head.next;
        }
        else {

            const newNode = new ListNode(head.val);
            curr.next = newNode;
            curr = curr.next;
        }
        if(head)head = head.next;

    }
    return root.next;
};