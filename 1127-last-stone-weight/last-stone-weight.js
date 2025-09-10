/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue();

    for(const stone of stones) {
        maxHeap.enqueue(stone)
    }


    while(maxHeap.size() > 1) {
        const first = maxHeap.dequeue();
        const second = maxHeap.dequeue();

        if(first != second) {
            maxHeap.enqueue(Math.abs(first - second))
        }
    }

    console.log(maxHeap.size())
    return maxHeap.size() === 1 ? maxHeap.front() : 0;
};