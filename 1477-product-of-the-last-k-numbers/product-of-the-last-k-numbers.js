
var ProductOfNumbers = function() {
    this.array = new Array();
    this.arrayMultiply = new Array();
    this.mul = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    
    this.array.push(num);
    if(num == 0) {
     
        this.mul = 1;
        this.arrayMultiply.length = 0;
    }
    else {
        this.mul *= num;
        this.arrayMultiply.push(this.mul)
    }

    
    
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {

    const multiplies = this.arrayMultiply;

    if(multiplies.length < k) return 0;

    if(k == multiplies.length) return this.mul;
    return this.mul / multiplies[multiplies.length - k - 1 ];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */