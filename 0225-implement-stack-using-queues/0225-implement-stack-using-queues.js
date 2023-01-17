var Queue = function() {
    this.items = [];
}
Queue.prototype.enqueue = function(x) {
    this.items.push(x)
}
Queue.prototype.dequeue = function() {
   return this.items.pop();
}
Queue.prototype.size = function() {
    return this.items.length;
}
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
}
var MyStack = function() {
    this.stack = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.enqueue(x)
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
    return this.stack.items[this.stack.size()-1];
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