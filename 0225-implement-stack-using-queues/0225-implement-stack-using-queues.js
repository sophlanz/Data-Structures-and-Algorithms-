var Queue = function() {
    this.queue=[];
}
Queue.prototype.enqueue = function(val) {
   return this.queue.push(val);
}
Queue.prototype.dequeue = function() {
    return this.queue.shift();
}
Queue.prototype.size = function() {
    return this.queue.length;
}
Queue.prototype.isEmpty = function() {
    return this.queue.length === 0;
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
    for(let i=0;i<this.stack.size()-1;i++) {
       this.stack.enqueue(this.stack.dequeue()) ;
    }
    return this.stack.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack.queue[this.stack.size()-1];
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