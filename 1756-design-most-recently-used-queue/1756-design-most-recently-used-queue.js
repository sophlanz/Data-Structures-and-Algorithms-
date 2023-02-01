/**
 * @param {number} n
 */
var MRUQueue = function(n) {
   this.queue = new Array(n).fill(0);
    for(let i = 1; i <= this.queue.length; i++) {
        this.queue[i-1] = i
    }
    console.log(this.queue)
};
/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
   const val = this.queue.splice(k-1, 1);
    this.queue.push(val)
    return val;
};
/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */