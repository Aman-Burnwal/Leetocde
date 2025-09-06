/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const minHeap = new MinPriorityQueue();

    for(let list of lists) {

        while(list) {
            minHeap.enqueue(list.val);
            list = list.next;
        }
    }

    const root = new ListNode(0);
    let curr = root;

    while(minHeap.size()) {
        const newNode = new ListNode(minHeap.dequeue());
        curr.next = newNode;
        curr = curr.next;
    }

    return root.next;

};