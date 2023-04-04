
var MinStack = function() {
    this.stack =[];
    this.min=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min.push(this.stack.length ? Math.min(this.min[this.min.length-1], val): val);
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
 return this.stack[this.stack.length-1] 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */