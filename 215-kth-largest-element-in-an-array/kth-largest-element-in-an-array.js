/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxPriorityQueue = new MaxPriorityQueue();

    nums.forEach((num) => maxPriorityQueue.enqueue(num));

    while(k > 1) {
        maxPriorityQueue.dequeue();
        k--
    }
    return maxPriorityQueue.front();

};