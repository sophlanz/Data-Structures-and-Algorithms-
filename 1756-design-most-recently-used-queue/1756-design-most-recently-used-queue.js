/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.queue = [];
    while(n>0) {
        this.queue.unshift(n);
        n--
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    let val = this.queue[k-1];
    this.queue.splice(k-1,1);
    this.queue.push(val)
    return val
    
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */