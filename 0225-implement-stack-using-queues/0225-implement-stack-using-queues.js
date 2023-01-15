var Queue = function() {
    this.items = [];
}

Queue.prototype.enqueue = function(val) {
    return this.items.push(val);
}
Queue.prototype.dequeue = function() {
    return this.items.pop();
}
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
}
Queue.prototype.getSize = function() {
    return this.items.length;
}
/** 
 * @param {number} x
 * @return {void}
 */
var MyStack = function() {
 
    this.stack = new Queue();
};
MyStack.prototype.push = function(x) {
    this.stack.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack.items[this.stack.getSize()-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */