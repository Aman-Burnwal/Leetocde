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
    let l3 = new ListNode(0 , undefined);
    const ans = l3;
    let rem = 0


    while(l1 || l2) {
        let val = 0;
        if(l1) {
            val += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            val += l2.val;
            l2 = l2.next;
        }
        val += rem;
        rem = val > 9 ? 1 : 0;
        val %= 10;
       
        const newNode = new ListNode(val , undefined);
        l3.next = newNode;
        l3 = l3.next;
        
    }


    if(rem) {
        const newNode = new ListNode(rem, undefined);
        l3.next = newNode;
    }
    return ans.next;



};