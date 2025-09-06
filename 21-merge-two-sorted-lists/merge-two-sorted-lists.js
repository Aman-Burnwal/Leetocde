/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const root = new ListNode();
    let curr = root;
    while(list2 && list1) {
        
        if(list2.val < list1.val)  {
            const newNode = new ListNode(list2.val);
            curr.next = newNode;
            curr = curr.next;
            list2 = list2.next;
            
        }
        else {
            const newNode = new ListNode(list1.val);
            curr.next = newNode;
            curr = curr.next;
            list1 = list1.next;
        }
    }


    if(list2) {
        curr.next = list2;
    }
    if(list1) curr.next = list1;

    return root.next;
};