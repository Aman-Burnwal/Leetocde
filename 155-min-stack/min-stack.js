
var MinStack = function() {
    this.stack = [];
    this.idx = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack[this.idx] = val;
    this.idx++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.idx--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.idx -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = Infinity;
    for(let i = 0; i < this.stack.length; i++) {
        min = Math.min(min, this.stack[i])
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */