
var ProductOfNumbers = function() {
    this.array = new Array();
    // this.zeroIdx = -1;
    // this.arrayMultiply = new Array();
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    
    this.array.push(num);
    // if(num == 0) this.zeorIdx = this.array.length;
    
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    
    const arr = this.array;



    let mul = 1;
    idx = arr.length - 1;

    while(k--) {
        mul *= arr[idx--]
    }
    return mul;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */