var Queue = function () {
    this.items = [];
}
Queue.prototype.enqueue = function(val) {
    this.items.push(val);
}
Queue.prototype.dequeue = function() {
   return this.items.pop();
}
Queue.prototype.size = function() {
    return this.items.length
}
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
}
var MyStack = function() {
     this.queue = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   return this.queue.dequeue()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.items[this.queue.size()-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */