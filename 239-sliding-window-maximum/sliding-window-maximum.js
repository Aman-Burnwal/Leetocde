/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = []; // will store indices of useful elements in decreasing order
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove elements out of window (left side)
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Maintain decreasing order in deque
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current element index
        deque.push(i);

        // Record maximum once we hit window size
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
